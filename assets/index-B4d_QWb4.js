(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var Fg={exports:{}},wc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx=Symbol.for("react.transitional.element"),yx=Symbol.for("react.fragment");function Hg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:xx,type:e,key:i,ref:t!==void 0?t:null,props:n}}wc.Fragment=yx;wc.jsx=Hg;wc.jsxs=Hg;Fg.exports=wc;var b=Fg.exports,Gg={exports:{}},Ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd=Symbol.for("react.transitional.element"),Sx=Symbol.for("react.portal"),Mx=Symbol.for("react.fragment"),Ex=Symbol.for("react.strict_mode"),bx=Symbol.for("react.profiler"),Tx=Symbol.for("react.consumer"),Ax=Symbol.for("react.context"),Rx=Symbol.for("react.forward_ref"),wx=Symbol.for("react.suspense"),Cx=Symbol.for("react.memo"),Vg=Symbol.for("react.lazy"),gp=Symbol.iterator;function Dx(e){return e===null||typeof e!="object"?null:(e=gp&&e[gp]||e["@@iterator"],typeof e=="function"?e:null)}var kg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Xg={};function ps(e,t,n){this.props=e,this.context=t,this.refs=Xg,this.updater=n||kg}ps.prototype.isReactComponent={};ps.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ps.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jg(){}jg.prototype=ps.prototype;function Qd(e,t,n){this.props=e,this.context=t,this.refs=Xg,this.updater=n||kg}var Jd=Qd.prototype=new jg;Jd.constructor=Qd;Wg(Jd,ps.prototype);Jd.isPureReactComponent=!0;var _p=Array.isArray,ye={H:null,A:null,T:null,S:null,V:null},Yg=Object.prototype.hasOwnProperty;function $d(e,t,n,i,a,r){return n=r.ref,{$$typeof:Kd,type:e,key:t,ref:n!==void 0?n:null,props:r}}function Ux(e,t){return $d(e.type,t,void 0,void 0,void 0,e.props)}function th(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kd}function Lx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vp=/\/+/g;function Qc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lx(""+e.key):t.toString(36)}function xp(){}function Nx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(xp,xp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Tr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Kd:case Sx:s=!0;break;case Vg:return s=e._init,Tr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+Qc(e,0):i,_p(a)?(n="",s!=null&&(n=s.replace(vp,"$&/")+"/"),Tr(a,t,n,"",function(c){return c})):a!=null&&(th(a)&&(a=Ux(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(vp,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(_p(e))for(var l=0;l<e.length;l++)i=e[l],r=o+Qc(i,l),s+=Tr(i,t,n,r,a);else if(l=Dx(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+Qc(i,l++),s+=Tr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Tr(Nx(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function qo(e,t,n){if(e==null)return e;var i=[],a=0;return Tr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function Ox(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var yp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Px(){}Ht.Children={map:qo,forEach:function(e,t,n){qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!th(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ht.Component=ps;Ht.Fragment=Mx;Ht.Profiler=bx;Ht.PureComponent=Qd;Ht.StrictMode=Ex;Ht.Suspense=wx;Ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ye;Ht.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ye.H.useMemoCache(e)}};Ht.cache=function(e){return function(){return e.apply(null,arguments)}};Ht.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Wg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Yg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return $d(e.type,a,void 0,void 0,r,i)};Ht.createContext=function(e){return e={$$typeof:Ax,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Tx,_context:e},e};Ht.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Yg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return $d(e,r,void 0,void 0,null,a)};Ht.createRef=function(){return{current:null}};Ht.forwardRef=function(e){return{$$typeof:Rx,render:e}};Ht.isValidElement=th;Ht.lazy=function(e){return{$$typeof:Vg,_payload:{_status:-1,_result:e},_init:Ox}};Ht.memo=function(e,t){return{$$typeof:Cx,type:e,compare:t===void 0?null:t}};Ht.startTransition=function(e){var t=ye.T,n={};ye.T=n;try{var i=e(),a=ye.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Px,yp)}catch(r){yp(r)}finally{ye.T=t}};Ht.unstable_useCacheRefresh=function(){return ye.H.useCacheRefresh()};Ht.use=function(e){return ye.H.use(e)};Ht.useActionState=function(e,t,n){return ye.H.useActionState(e,t,n)};Ht.useCallback=function(e,t){return ye.H.useCallback(e,t)};Ht.useContext=function(e){return ye.H.useContext(e)};Ht.useDebugValue=function(){};Ht.useDeferredValue=function(e,t){return ye.H.useDeferredValue(e,t)};Ht.useEffect=function(e,t,n){var i=ye.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Ht.useId=function(){return ye.H.useId()};Ht.useImperativeHandle=function(e,t,n){return ye.H.useImperativeHandle(e,t,n)};Ht.useInsertionEffect=function(e,t){return ye.H.useInsertionEffect(e,t)};Ht.useLayoutEffect=function(e,t){return ye.H.useLayoutEffect(e,t)};Ht.useMemo=function(e,t){return ye.H.useMemo(e,t)};Ht.useOptimistic=function(e,t){return ye.H.useOptimistic(e,t)};Ht.useReducer=function(e,t,n){return ye.H.useReducer(e,t,n)};Ht.useRef=function(e){return ye.H.useRef(e)};Ht.useState=function(e){return ye.H.useState(e)};Ht.useSyncExternalStore=function(e,t,n){return ye.H.useSyncExternalStore(e,t,n)};Ht.useTransition=function(){return ye.H.useTransition()};Ht.version="19.1.1";Gg.exports=Ht;var Ae=Gg.exports,qg={exports:{}},Cc={},Zg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,W){var B=P.length;P.push(W);t:for(;0<B;){var tt=B-1>>>1,rt=P[tt];if(0<a(rt,W))P[tt]=W,P[B]=rt,B=tt;else break t}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var W=P[0],B=P.pop();if(B!==W){P[0]=B;t:for(var tt=0,rt=P.length,_t=rt>>>1;tt<_t;){var Ot=2*(tt+1)-1,ne=P[Ot],Zt=Ot+1,Xt=P[Zt];if(0>a(ne,B))Zt<rt&&0>a(Xt,ne)?(P[tt]=Xt,P[Zt]=B,tt=Zt):(P[tt]=ne,P[Ot]=B,tt=Ot);else if(Zt<rt&&0>a(Xt,B))P[tt]=Xt,P[Zt]=B,tt=Zt;else break t}}return W}function a(P,W){var B=P.sortIndex-W.sortIndex;return B!==0?B:P.id-W.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,x=!1,y=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(P){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=P)i(c),W.sortIndex=W.expirationTime,t(l,W);else break;W=n(c)}}function A(P){if(y=!1,v(P),!x)if(n(l)!==null)x=!0,D||(D=!0,G());else{var W=n(c);W!==null&&j(A,W.startTime-P)}}var D=!1,C=-1,L=5,T=-1;function E(){return m?!0:!(e.unstable_now()-T<L)}function N(){if(m=!1,D){var P=e.unstable_now();T=P;var W=!0;try{t:{x=!1,y&&(y=!1,g(C),C=-1),p=!0;var B=f;try{e:{for(v(P),h=n(l);h!==null&&!(h.expirationTime>P&&E());){var tt=h.callback;if(typeof tt=="function"){h.callback=null,f=h.priorityLevel;var rt=tt(h.expirationTime<=P);if(P=e.unstable_now(),typeof rt=="function"){h.callback=rt,v(P),W=!0;break e}h===n(l)&&i(l),v(P)}else i(l);h=n(l)}if(h!==null)W=!0;else{var _t=n(c);_t!==null&&j(A,_t.startTime-P),W=!1}}break t}finally{h=null,f=B,p=!1}W=void 0}}finally{W?G():D=!1}}}var G;if(typeof _=="function")G=function(){_(N)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,V=R.port2;R.port1.onmessage=N,G=function(){V.postMessage(null)}}else G=function(){u(N,0)};function j(P,W){C=u(function(){P(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var B=f;f=W;try{return P()}finally{f=B}},e.unstable_requestPaint=function(){m=!0},e.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=f;f=P;try{return W()}finally{f=B}},e.unstable_scheduleCallback=function(P,W,B){var tt=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?tt+B:tt):B=tt,P){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=B+rt,P={id:d++,callback:W,priorityLevel:P,startTime:B,expirationTime:rt,sortIndex:-1},B>tt?(P.sortIndex=B,t(c,P),n(l)===null&&P===n(c)&&(y?(g(C),C=-1):y=!0,j(A,B-tt))):(P.sortIndex=rt,t(l,P),x||p||(x=!0,D||(D=!0,G()))),P},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(P){var W=f;return function(){var B=f;f=W;try{return P.apply(this,arguments)}finally{f=B}}}})(Kg);Zg.exports=Kg;var zx=Zg.exports,Qg={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix=Ae;function Jg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ki(){}var sn={d:{f:ki,r:function(){throw Error(Jg(522))},D:ki,C:ki,L:ki,m:ki,X:ki,S:ki,M:ki},p:0,findDOMNode:null},Bx=Symbol.for("react.portal");function Fx(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bx,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Ws=Ix.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Dc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sn;on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Jg(299));return Fx(e,t,null,n)};on.flushSync=function(e){var t=Ws.T,n=sn.p;try{if(Ws.T=null,sn.p=2,e)return e()}finally{Ws.T=t,sn.p=n,sn.d.f()}};on.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,sn.d.C(e,t))};on.prefetchDNS=function(e){typeof e=="string"&&sn.d.D(e)};on.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Dc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&sn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};on.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Dc(t.as,t.crossOrigin);sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&sn.d.M(e)};on.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Dc(n,t.crossOrigin);sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};on.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Dc(t.as,t.crossOrigin);sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else sn.d.m(e)};on.requestFormReset=function(e){sn.d.r(e)};on.unstable_batchedUpdates=function(e,t){return e(t)};on.useFormState=function(e,t,n){return Ws.H.useFormState(e,t,n)};on.useFormStatus=function(){return Ws.H.useHostTransitionStatus()};on.version="19.1.1";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(e){console.error(e)}}$g(),Qg.exports=on;var Hx=Qg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=zx,t0=Ae,Gx=Hx;function K(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function n0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sp(e){if(To(e)!==e)throw Error(K(188))}function Vx(e){var t=e.alternate;if(!t){if(t=To(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Sp(a),e;if(r===i)return Sp(a),t;r=r.sibling}throw Error(K(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(K(189))}}if(n.alternate!==i)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function i0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=i0(e),t!==null)return t;e=e.sibling}return null}var ge=Object.assign,kx=Symbol.for("react.element"),Zo=Symbol.for("react.transitional.element"),Fs=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),a0=Symbol.for("react.strict_mode"),df=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),r0=Symbol.for("react.consumer"),wi=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),pf=Symbol.for("react.suspense_list"),nh=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),mf=Symbol.for("react.activity"),Xx=Symbol.for("react.memo_cache_sentinel"),Mp=Symbol.iterator;function Ts(e){return e===null||typeof e!="object"?null:(e=Mp&&e[Mp]||e["@@iterator"],typeof e=="function"?e:null)}var jx=Symbol.for("react.client.reference");function gf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===jx?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case df:return"Profiler";case a0:return"StrictMode";case hf:return"Suspense";case pf:return"SuspenseList";case mf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Fs:return"Portal";case wi:return(e.displayName||"Context")+".Provider";case r0:return(e._context.displayName||"Context")+".Consumer";case eh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nh:return t=e.displayName||null,t!==null?t:gf(e.type)||"Memo";case Ji:t=e._payload,e=e._init;try{return gf(e(t))}catch{}}return null}var Hs=Array.isArray,Ct=t0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=Gx.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wa={pending:!1,data:null,method:null,action:null},_f=[],Dr=-1;function pi(e){return{current:e}}function je(e){0>Dr||(e.current=_f[Dr],_f[Dr]=null,Dr--)}function Se(e,t){Dr++,_f[Dr]=e.current,e.current=t}var li=pi(null),ro=pi(null),ca=pi(null),Zl=pi(null);function Kl(e,t){switch(Se(ca,t),Se(ro,e),Se(li,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Rm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Rm(t),e=Mv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}je(li),Se(li,e)}function Jr(){je(li),je(ro),je(ca)}function vf(e){e.memoizedState!==null&&Se(Zl,e);var t=li.current,n=Mv(t,e.type);t!==n&&(Se(ro,e),Se(li,n))}function Ql(e){ro.current===e&&(je(li),je(ro)),Zl.current===e&&(je(Zl),go._currentValue=Wa)}var xf=Object.prototype.hasOwnProperty,ih=Be.unstable_scheduleCallback,Jc=Be.unstable_cancelCallback,Yx=Be.unstable_shouldYield,qx=Be.unstable_requestPaint,ci=Be.unstable_now,Zx=Be.unstable_getCurrentPriorityLevel,s0=Be.unstable_ImmediatePriority,o0=Be.unstable_UserBlockingPriority,Jl=Be.unstable_NormalPriority,Kx=Be.unstable_LowPriority,l0=Be.unstable_IdlePriority,Qx=Be.log,Jx=Be.unstable_setDisableYieldValue,Ao=null,An=null;function ra(e){if(typeof Qx=="function"&&Jx(e),An&&typeof An.setStrictMode=="function")try{An.setStrictMode(Ao,e)}catch{}}var Rn=Math.clz32?Math.clz32:ey,$x=Math.log,ty=Math.LN2;function ey(e){return e>>>=0,e===0?32:31-($x(e)/ty|0)|0}var Ko=256,Qo=4194304;function Pa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Uc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Pa(i):(s&=o,s!==0?a=Pa(s):n||(n=o&~e,n!==0&&(a=Pa(n))))):(o=i&~r,o!==0?a=Pa(o):s!==0?a=Pa(s):n||(n=i&~e,n!==0&&(a=Pa(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ro(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ny(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(){var e=Ko;return Ko<<=1,!(Ko&4194048)&&(Ko=256),e}function u0(){var e=Qo;return Qo<<=1,!(Qo&62914560)&&(Qo=4194304),e}function $c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function iy(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var d=31-Rn(n),h=1<<d;o[d]=0,l[d]=-1;var f=c[d];if(f!==null)for(c[d]=null,d=0;d<f.length;d++){var p=f[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&f0(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function f0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function d0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Rn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function ah(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rh(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function h0(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:Lv(e.type))}function ay(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var ba=Math.random().toString(36).slice(2),$e="__reactFiber$"+ba,mn="__reactProps$"+ba,ms="__reactContainer$"+ba,yf="__reactEvents$"+ba,ry="__reactListeners$"+ba,sy="__reactHandles$"+ba,Ep="__reactResources$"+ba,Co="__reactMarker$"+ba;function sh(e){delete e[$e],delete e[mn],delete e[yf],delete e[ry],delete e[sy]}function Ur(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ms]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dm(e);e!==null;){if(n=e[$e])return n;e=Dm(e)}return t}e=n,n=e.parentNode}return null}function gs(e){if(e=e[$e]||e[ms]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Gs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(K(33))}function Vr(e){var t=e[Ep];return t||(t=e[Ep]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Co]=!0}var p0=new Set,m0={};function ir(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(m0[e]=t,e=0;e<t.length;e++)p0.add(t[e])}var oy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bp={},Tp={};function ly(e){return xf.call(Tp,e)?!0:xf.call(bp,e)?!1:oy.test(e)?Tp[e]=!0:(bp[e]=!0,!1)}function Ul(e,t,n){if(ly(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _i(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var tu,Ap;function Ar(e){if(tu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tu=t&&t[1]||"",Ap=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tu+e+Ap}var eu=!1;function nu(e,t){if(!e||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var f=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){f=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){f=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ar(n):""}function cy(e){switch(e.tag){case 26:case 27:case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 15:return nu(e.type,!1);case 11:return nu(e.type.render,!1);case 1:return nu(e.type,!0);case 31:return Ar("Activity");default:return""}}function Rp(e){try{var t="";do t+=cy(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function In(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function g0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uy(e){var t=g0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $l(e){e._valueTracker||(e._valueTracker=uy(e))}function _0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=g0(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function tc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fy=/[\n"\\]/g;function Hn(e){return e.replace(fy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Sf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+In(t)):e.value!==""+In(t)&&(e.value=""+In(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Mf(e,s,In(t)):n!=null?Mf(e,s,In(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+In(o):e.removeAttribute("name")}function v0(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+In(n):"",t=t!=null?""+In(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Mf(e,t,n){t==="number"&&tc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function kr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+In(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function x0(e,t,n){if(t!=null&&(t=""+In(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+In(n):""}function y0(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(K(92));if(Hs(i)){if(1<i.length)throw Error(K(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=In(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function ts(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||dy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function S0(e,t,n){if(t!=null&&typeof t!="object")throw Error(K(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&wp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&wp(e,r,t[r])}function oh(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),py=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(e){return py.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ef=null;function lh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lr=null,Wr=null;function Cp(e){var t=gs(e);if(t&&(e=t.stateNode)){var n=e[mn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Sf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Hn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[mn]||null;if(!a)throw Error(K(90));Sf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&_0(i)}break t;case"textarea":x0(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&kr(e,!!n.multiple,t,!1)}}}var iu=!1;function M0(e,t,n){if(iu)return e(t,n);iu=!0;try{var i=e(t);return i}finally{if(iu=!1,(Lr!==null||Wr!==null)&&(Gc(),Lr&&(t=Lr,e=Wr,Wr=Lr=null,Cp(t),e)))for(t=0;t<e.length;t++)Cp(e[t])}}function so(e,t){var n=e.stateNode;if(n===null)return null;var i=n[mn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=!1;if(Ii)try{var As={};Object.defineProperty(As,"passive",{get:function(){bf=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{bf=!1}var sa=null,ch=null,Nl=null;function E0(){if(Nl)return Nl;var e,t=ch,n=t.length,i,a="value"in sa?sa.value:sa.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Nl=a.slice(e,1<i?1-i:void 0)}function Ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Dp(){return!1}function gn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?$o:Dp,this.isPropagationStopped=Dp,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=gn(ar),Do=ge({},ar,{view:0,detail:0}),my=gn(Do),au,ru,Rs,Nc=ge({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rs&&(Rs&&e.type==="mousemove"?(au=e.screenX-Rs.screenX,ru=e.screenY-Rs.screenY):ru=au=0,Rs=e),au)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Up=gn(Nc),gy=ge({},Nc,{dataTransfer:0}),_y=gn(gy),vy=ge({},Do,{relatedTarget:0}),su=gn(vy),xy=ge({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),yy=gn(xy),Sy=ge({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),My=gn(Sy),Ey=ge({},ar,{data:0}),Lp=gn(Ey),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ay[e])?!!t[e]:!1}function uh(){return Ry}var wy=ge({},Do,{key:function(e){if(e.key){var t=by[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uh,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cy=gn(wy),Dy=ge({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=gn(Dy),Uy=ge({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uh}),Ly=gn(Uy),Ny=ge({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oy=gn(Ny),Py=ge({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zy=gn(Py),Iy=ge({},ar,{newState:0,oldState:0}),By=gn(Iy),Fy=[9,13,27,32],fh=Ii&&"CompositionEvent"in window,Xs=null;Ii&&"documentMode"in document&&(Xs=document.documentMode);var Hy=Ii&&"TextEvent"in window&&!Xs,b0=Ii&&(!fh||Xs&&8<Xs&&11>=Xs),Op=" ",Pp=!1;function T0(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Gy(e,t){switch(e){case"compositionend":return A0(t);case"keypress":return t.which!==32?null:(Pp=!0,Op);case"textInput":return e=t.data,e===Op&&Pp?null:e;default:return null}}function Vy(e,t){if(Nr)return e==="compositionend"||!fh&&T0(e,t)?(e=E0(),Nl=ch=sa=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return b0&&t.locale!=="ko"?null:t.data;default:return null}}var ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ky[e.type]:t==="textarea"}function R0(e,t,n,i){Lr?Wr?Wr.push(i):Wr=[i]:Lr=i,t=vc(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var js=null,oo=null;function Wy(e){xv(e,0)}function Oc(e){var t=Gs(e);if(_0(t))return e}function Ip(e,t){if(e==="change")return t}var w0=!1;if(Ii){var ou;if(Ii){var lu="oninput"in document;if(!lu){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),lu=typeof Bp.oninput=="function"}ou=lu}else ou=!1;w0=ou&&(!document.documentMode||9<document.documentMode)}function Fp(){js&&(js.detachEvent("onpropertychange",C0),oo=js=null)}function C0(e){if(e.propertyName==="value"&&Oc(oo)){var t=[];R0(t,oo,e,lh(e)),M0(Wy,t)}}function Xy(e,t,n){e==="focusin"?(Fp(),js=t,oo=n,js.attachEvent("onpropertychange",C0)):e==="focusout"&&Fp()}function jy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(oo)}function Yy(e,t){if(e==="click")return Oc(t)}function qy(e,t){if(e==="input"||e==="change")return Oc(t)}function Zy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Un=typeof Object.is=="function"?Object.is:Zy;function lo(e,t){if(Un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!xf.call(t,a)||!Un(e[a],t[a]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gp(e,t){var n=Hp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Hp(n)}}function D0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?D0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function U0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tc(e.document)}return t}function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ky=Ii&&"documentMode"in document&&11>=document.documentMode,Or=null,Tf=null,Ys=null,Af=!1;function Vp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||Or==null||Or!==tc(i)||(i=Or,"selectionStart"in i&&dh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ys&&lo(Ys,i)||(Ys=i,i=vc(Tf,"onSelect"),0<i.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Or)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pr={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},cu={},L0={};Ii&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function rr(e){if(cu[e])return cu[e];if(!Pr[e])return e;var t=Pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in L0)return cu[e]=t[n];return e}var N0=rr("animationend"),O0=rr("animationiteration"),P0=rr("animationstart"),Qy=rr("transitionrun"),Jy=rr("transitionstart"),$y=rr("transitioncancel"),z0=rr("transitionend"),I0=new Map,Rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rf.push("scrollEnd");function $n(e,t){I0.set(e,t),ir(t,[e])}var kp=new WeakMap;function Gn(e,t){if(typeof e=="object"&&e!==null){var n=kp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Rp(t)},kp.set(e,t),t)}return{value:e,source:t,stack:Rp(t)}}var Pn=[],zr=0,hh=0;function Pc(){for(var e=zr,t=hh=zr=0;t<e;){var n=Pn[t];Pn[t++]=null;var i=Pn[t];Pn[t++]=null;var a=Pn[t];Pn[t++]=null;var r=Pn[t];if(Pn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&B0(n,a,r)}}function zc(e,t,n,i){Pn[zr++]=e,Pn[zr++]=t,Pn[zr++]=n,Pn[zr++]=i,hh|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ph(e,t,n,i){return zc(e,t,n,i),ec(e)}function _s(e,t){return zc(e,null,null,t),ec(e)}function B0(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Rn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function ec(e){if(50<io)throw io=0,qf=null,Error(K(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ir={};function tS(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,t,n,i){return new tS(e,t,n,i)}function mh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,t){var n=e.alternate;return n===null?(n=Tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function F0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pl(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")mh(e)&&(s=1);else if(typeof e=="string")s=nM(e,n,li.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case mf:return e=Tn(31,n,t,a),e.elementType=mf,e.lanes=r,e;case Cr:return Xa(n.children,a,r,t);case a0:s=8,a|=24;break;case df:return e=Tn(12,n,t,a|2),e.elementType=df,e.lanes=r,e;case hf:return e=Tn(13,n,t,a),e.elementType=hf,e.lanes=r,e;case pf:return e=Tn(19,n,t,a),e.elementType=pf,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wx:case wi:s=10;break t;case r0:s=9;break t;case eh:s=11;break t;case nh:s=14;break t;case Ji:s=16,i=null;break t}s=29,n=Error(K(130,e===null?"null":typeof e,"")),i=null}return t=Tn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Xa(e,t,n,i){return e=Tn(7,e,i,t),e.lanes=n,e}function uu(e,t,n){return e=Tn(6,e,null,t),e.lanes=n,e}function fu(e,t,n){return t=Tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Br=[],Fr=0,nc=null,ic=0,Bn=[],Fn=0,ja=null,Ci=1,Di="";function za(e,t){Br[Fr++]=ic,Br[Fr++]=nc,nc=e,ic=t}function H0(e,t,n){Bn[Fn++]=Ci,Bn[Fn++]=Di,Bn[Fn++]=ja,ja=e;var i=Ci;e=Di;var a=32-Rn(i)-1;i&=~(1<<a),n+=1;var r=32-Rn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ci=1<<32-Rn(t)+a|n<<a|i,Di=r+e}else Ci=1<<r|n<<a|i,Di=e}function gh(e){e.return!==null&&(za(e,1),H0(e,1,0))}function _h(e){for(;e===nc;)nc=Br[--Fr],Br[Fr]=null,ic=Br[--Fr],Br[Fr]=null;for(;e===ja;)ja=Bn[--Fn],Bn[Fn]=null,Di=Bn[--Fn],Bn[Fn]=null,Ci=Bn[--Fn],Bn[Fn]=null}var rn=null,Re=null,te=!1,Ya=null,ii=!1,wf=Error(K(519));function Qa(e){var t=Error(K(418,""));throw co(Gn(t,e)),wf}function Wp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[mn]=i,n){case"dialog":Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":case"embed":Vt("load",t);break;case"video":case"audio":for(n=0;n<ho.length;n++)Vt(ho[n],t);break;case"source":Vt("error",t);break;case"img":case"image":case"link":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"input":Vt("invalid",t),v0(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),$l(t);break;case"select":Vt("invalid",t);break;case"textarea":Vt("invalid",t),y0(t,i.value,i.defaultValue,i.children),$l(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Sv(t.textContent,n)?(i.popover!=null&&(Vt("beforetoggle",t),Vt("toggle",t)),i.onScroll!=null&&Vt("scroll",t),i.onScrollEnd!=null&&Vt("scrollend",t),i.onClick!=null&&(t.onclick=Wc),t=!0):t=!1,t||Qa(e)}function Xp(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:rn=rn.return}}function ws(e){if(e!==rn)return!1;if(!te)return Xp(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||td(e.type,e.memoizedProps)),n=!n),n&&Re&&Qa(e),Xp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Re=Qn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,Ta(e.type)?(e=id,id=null,Re=e):Re=t):Re=rn?Qn(e.stateNode.nextSibling):null;return!0}function Uo(){Re=rn=null,te=!1}function jp(){var e=Ya;return e!==null&&(dn===null?dn=e:dn.push.apply(dn,e),Ya=null),e}function co(e){Ya===null?Ya=[e]:Ya.push(e)}var Cf=pi(null),sr=null,Ui=null;function ta(e,t,n){Se(Cf,t._currentValue),t._currentValue=n}function Pi(e){e._currentValue=Cf.current,je(Cf)}function Df(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Uf(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Df(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(K(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Df(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Lo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(K(387));if(s=s.memoizedProps,s!==null){var o=a.type;Un(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===Zl.current){if(s=a.alternate,s===null)throw Error(K(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}a=a.return}e!==null&&Uf(t,e,n,i),t.flags|=262144}function ac(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){sr=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return G0(sr,e)}function tl(e,t){return sr===null&&Ja(e),G0(e,t)}function G0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(K(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var eS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},nS=Be.unstable_scheduleCallback,iS=Be.unstable_NormalPriority,ze={$$typeof:wi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vh(){return{controller:new eS,data:new Map,refCount:0}}function No(e){e.refCount--,e.refCount===0&&nS(iS,function(){e.controller.abort()})}var qs=null,Lf=0,es=0,Xr=null;function aS(e,t){if(qs===null){var n=qs=[];Lf=0,es=Gh(),Xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Lf++,t.then(Yp,Yp),t}function Yp(){if(--Lf===0&&qs!==null){Xr!==null&&(Xr.status="fulfilled");var e=qs;qs=null,es=0,Xr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rS(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var qp=Ct.S;Ct.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&aS(e,t),qp!==null&&qp(e,t)};var qa=pi(null);function xh(){var e=qa.current;return e!==null?e:pe.pooledCache}function zl(e,t){t===null?Se(qa,qa.current):Se(qa,t.pool)}function V0(){var e=xh();return e===null?null:{parent:ze._currentValue,pool:e}}var Oo=Error(K(460)),k0=Error(K(474)),Ic=Error(K(542)),Nf={then:function(){}};function Zp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function el(){}function W0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(el,el),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qp(e),e;default:if(typeof t.status=="string")t.then(el,el);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(K(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qp(e),e}throw Zs=t,Oo}}var Zs=null;function Kp(){if(Zs===null)throw Error(K(459));var e=Zs;return Zs=null,e}function Qp(e){if(e===Oo||e===Ic)throw Error(K(483))}var $i=!1;function yh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Of(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=ec(e),B0(e,null,n),t}return zc(e,i,t,n),ec(e)}function Ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,d0(e,n)}}function du(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Pf=!1;function Qs(){if(Pf){var e=Xr;if(e!==null)throw e}}function Js(e,t,n,i){Pf=!1;var a=e.updateQueue;$i=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,d=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(qt&f)===f:(i&f)===f){f!==0&&f===es&&(Pf=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,y=o;f=t;var m=n;switch(y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(m,h,f);break t}h=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(m,h,f):x,f==null)break t;h=ge({},h,f);break t;case 2:$i=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),Sa|=s,e.lanes=s,e.memoizedState=h}}function X0(e,t){if(typeof e!="function")throw Error(K(191,e));e.call(t)}function j0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)X0(n[e],t)}var ns=pi(null),rc=pi(0);function Jp(e,t){e=Hi,Se(rc,e),Se(ns,t),Hi=e|t.baseLanes}function zf(){Se(rc,Hi),Se(ns,ns.current)}function Sh(){Hi=rc.current,je(ns),je(rc)}var xa=0,Gt=null,ce=null,Oe=null,sc=!1,jr=!1,$a=!1,oc=0,uo=0,Yr=null,sS=0;function Ue(){throw Error(K(321))}function Mh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Un(e[n],t[n]))return!1;return!0}function Eh(e,t,n,i,a,r){return xa=r,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ct.H=e===null||e.memoizedState===null?E_:b_,$a=!1,r=n(i,a),$a=!1,jr&&(r=q0(t,n,i,a)),Y0(e),r}function Y0(e){Ct.H=lc;var t=ce!==null&&ce.next!==null;if(xa=0,Oe=ce=Gt=null,sc=!1,uo=0,Yr=null,t)throw Error(K(300));e===null||Xe||(e=e.dependencies,e!==null&&ac(e)&&(Xe=!0))}function q0(e,t,n,i){Gt=e;var a=0;do{if(jr&&(Yr=null),uo=0,jr=!1,25<=a)throw Error(K(301));if(a+=1,Oe=ce=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Ct.H=hS,r=t(n,i)}while(jr);return r}function oS(){var e=Ct.H,t=e.useState()[0];return t=typeof t.then=="function"?Po(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(Gt.flags|=1024),t}function bh(){var e=oc!==0;return oc=0,e}function Th(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ah(e){if(sc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sc=!1}xa=0,Oe=ce=Gt=null,jr=!1,uo=oc=0,Yr=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Gt.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Pe(){if(ce===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Oe===null?Gt.memoizedState:Oe.next;if(t!==null)Oe=t,ce=e;else{if(e===null)throw Gt.alternate===null?Error(K(467)):Error(K(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Oe===null?Gt.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Rh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=uo;return uo+=1,Yr===null&&(Yr=[]),e=W0(Yr,e,t),t=Gt,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,Ct.H=t===null||t.memoizedState===null?E_:b_),e}function Bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Po(e);if(e.$$typeof===wi)return tn(e)}throw Error(K(438,String(e)))}function wh(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Rh(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Xx;return t.index++,n}function Bi(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=Pe();return Ch(t,ce,e)}function Ch(e,t,n){var i=e.queue;if(i===null)throw Error(K(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(qt&h)===h:(xa&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===es&&(d=!0);else if((xa&f)===f){c=c.next,f===es&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Gt.lanes|=f,Sa|=f;h=c.action,$a&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else f={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Gt.lanes|=h,Sa|=h;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Un(r,e.memoizedState)&&(Xe=!0,d&&(n=Xr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function hu(e){var t=Pe(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Un(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Z0(e,t,n){var i=Gt,a=Pe(),r=te;if(r){if(n===void 0)throw Error(K(407));n=n()}else n=t();var s=!Un((ce||a).memoizedState,n);s&&(a.memoizedState=n,Xe=!0),a=a.queue;var o=J0.bind(null,i,a,e);if(zo(2048,8,o,[e]),a.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,is(9,Fc(),Q0.bind(null,i,a,n,t),null),pe===null)throw Error(K(349));r||xa&124||K0(i,t,n)}return n}function K0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Rh(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Q0(e,t,n,i){t.value=n,t.getSnapshot=i,$0(t)&&t_(e)}function J0(e,t,n){return n(function(){$0(t)&&t_(e)})}function $0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Un(e,n)}catch{return!0}}function t_(e){var t=_s(e,2);t!==null&&Cn(t,e,2)}function If(e){var t=un();if(typeof e=="function"){var n=e;if(e=n(),$a){ra(!0);try{n()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:e},t}function e_(e,t,n,i){return e.baseState=n,Ch(e,ce,typeof i=="function"?i:Bi)}function lS(e,t,n,i,a){if(Hc(e))throw Error(K(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Ct.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,n_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function n_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=Ct.T,s={};Ct.T=s;try{var o=n(a,i),l=Ct.S;l!==null&&l(s,o),$p(e,t,o)}catch(c){Bf(e,t,c)}finally{Ct.T=r}}else try{r=n(a,i),$p(e,t,r)}catch(c){Bf(e,t,c)}}function $p(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){tm(e,t,i)},function(i){return Bf(e,t,i)}):tm(e,t,n)}function tm(e,t,n){t.status="fulfilled",t.value=n,i_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,n_(e,n)))}function Bf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,i_(t),t=t.next;while(t!==i)}e.action=null}function i_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function a_(e,t){return t}function em(e,t){if(te){var n=pe.formState;if(n!==null){t:{var i=Gt;if(te){if(Re){e:{for(var a=Re,r=ii;a.nodeType!==8;){if(!r){a=null;break e}if(a=Qn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Re=Qn(a.nextSibling),i=a.data==="F!";break t}}Qa(i)}i=!1}i&&(t=n[0])}}return n=un(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a_,lastRenderedState:t},n.queue=i,n=y_.bind(null,Gt,i),i.dispatch=n,i=If(!1),r=Nh.bind(null,Gt,!1,i.queue),i=un(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=lS.bind(null,Gt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function nm(e){var t=Pe();return r_(t,ce,e)}function r_(e,t,n){if(t=Ch(e,t,a_)[0],e=Il(Bi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Po(t)}catch(s){throw s===Oo?Ic:s}else i=t;t=Pe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,is(9,Fc(),cS.bind(null,a,n),null)),[i,r,e]}function cS(e,t){e.action=t}function im(e){var t=Pe(),n=ce;if(n!==null)return r_(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function is(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Rh(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fc(){return{destroy:void 0,resource:void 0}}function s_(){return Pe().memoizedState}function Bl(e,t,n,i){var a=un();i=i===void 0?null:i,Gt.flags|=e,a.memoizedState=is(1|t,Fc(),n,i)}function zo(e,t,n,i){var a=Pe();i=i===void 0?null:i;var r=a.memoizedState.inst;ce!==null&&i!==null&&Mh(i,ce.memoizedState.deps)?a.memoizedState=is(t,r,n,i):(Gt.flags|=e,a.memoizedState=is(1|t,r,n,i))}function am(e,t){Bl(8390656,8,e,t)}function o_(e,t){zo(2048,8,e,t)}function l_(e,t){return zo(4,2,e,t)}function c_(e,t){return zo(4,4,e,t)}function u_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function f_(e,t,n){n=n!=null?n.concat([e]):null,zo(4,4,u_.bind(null,t,e),n)}function Dh(){}function d_(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Mh(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function h_(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Mh(t,i[1]))return i[0];if(i=e(),$a){ra(!0);try{e()}finally{ra(!1)}}return n.memoizedState=[i,t],i}function Uh(e,t,n){return n===void 0||xa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=iv(),Gt.lanes|=e,Sa|=e,n)}function p_(e,t,n,i){return Un(n,t)?n:ns.current!==null?(e=Uh(e,n,i),Un(e,t)||(Xe=!0),e):xa&42?(e=iv(),Gt.lanes|=e,Sa|=e,t):(Xe=!0,e.memoizedState=n)}function m_(e,t,n,i,a){var r=ee.p;ee.p=r!==0&&8>r?r:8;var s=Ct.T,o={};Ct.T=o,Nh(e,!1,t,n);try{var l=a(),c=Ct.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=rS(l,i);$s(e,t,d,wn(e))}else $s(e,t,i,wn(e))}catch(h){$s(e,t,{then:function(){},status:"rejected",reason:h},wn())}finally{ee.p=r,Ct.T=s}}function uS(){}function Ff(e,t,n,i){if(e.tag!==5)throw Error(K(476));var a=g_(e).queue;m_(e,a,t,Wa,n===null?uS:function(){return __(e),n(i)})}function g_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Wa,baseState:Wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:Wa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function __(e){var t=g_(e).next.queue;$s(e,t,{},wn())}function Lh(){return tn(go)}function v_(){return Pe().memoizedState}function x_(){return Pe().memoizedState}function fS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=wn();e=ua(n);var i=fa(t,e,n);i!==null&&(Cn(i,t,n),Ks(i,t,n)),t={cache:vh()},e.payload=t;return}t=t.return}}function dS(e,t,n){var i=wn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Hc(e)?S_(t,n):(n=ph(e,t,n,i),n!==null&&(Cn(n,e,i),M_(n,t,i)))}function y_(e,t,n){var i=wn();$s(e,t,n,i)}function $s(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hc(e))S_(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Un(o,s))return zc(e,t,a,0),pe===null&&Pc(),!1}catch{}finally{}if(n=ph(e,t,a,i),n!==null)return Cn(n,e,i),M_(n,t,i),!0}return!1}function Nh(e,t,n,i){if(i={lane:2,revertLane:Gh(),action:i,hasEagerState:!1,eagerState:null,next:null},Hc(e)){if(t)throw Error(K(479))}else t=ph(e,n,i,2),t!==null&&Cn(t,e,2)}function Hc(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function S_(e,t){jr=sc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function M_(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,d0(e,n)}}var lc={readContext:tn,use:Bc,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},E_={readContext:tn,use:Bc,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:am,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Bl(4194308,4,u_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){Bl(4,2,e,t)},useMemo:function(e,t){var n=un();t=t===void 0?null:t;var i=e();if($a){ra(!0);try{e()}finally{ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=un();if(n!==void 0){var a=n(t);if($a){ra(!0);try{n(t)}finally{ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=dS.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:function(e){e=If(e);var t=e.queue,n=y_.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dh,useDeferredValue:function(e,t){var n=un();return Uh(n,e,t)},useTransition:function(){var e=If(!1);return e=m_.bind(null,Gt,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,a=un();if(te){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),pe===null)throw Error(K(349));qt&124||K0(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,am(J0.bind(null,i,r,e),[e]),i.flags|=2048,is(9,Fc(),Q0.bind(null,i,r,n,t),null),n},useId:function(){var e=un(),t=pe.identifierPrefix;if(te){var n=Di,i=Ci;n=(i&~(1<<32-Rn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=oc++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=sS++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Lh,useFormState:em,useActionState:em,useOptimistic:function(e){var t=un();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Nh.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:wh,useCacheRefresh:function(){return un().memoizedState=fS.bind(null,Gt)}},b_={readContext:tn,use:Bc,useCallback:d_,useContext:tn,useEffect:o_,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:Il,useRef:s_,useState:function(){return Il(Bi)},useDebugValue:Dh,useDeferredValue:function(e,t){var n=Pe();return p_(n,ce.memoizedState,e,t)},useTransition:function(){var e=Il(Bi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:Z0,useId:v_,useHostTransitionStatus:Lh,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var n=Pe();return e_(n,ce,e,t)},useMemoCache:wh,useCacheRefresh:x_},hS={readContext:tn,use:Bc,useCallback:d_,useContext:tn,useEffect:o_,useImperativeHandle:f_,useInsertionEffect:l_,useLayoutEffect:c_,useMemo:h_,useReducer:hu,useRef:s_,useState:function(){return hu(Bi)},useDebugValue:Dh,useDeferredValue:function(e,t){var n=Pe();return ce===null?Uh(n,e,t):p_(n,ce.memoizedState,e,t)},useTransition:function(){var e=hu(Bi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Po(e),t]},useSyncExternalStore:Z0,useId:v_,useHostTransitionStatus:Lh,useFormState:im,useActionState:im,useOptimistic:function(e,t){var n=Pe();return ce!==null?e_(n,ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wh,useCacheRefresh:x_},qr=null,fo=0;function nl(e){var t=fo;return fo+=1,qr===null&&(qr=[]),W0(qr,e,t)}function Cs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function il(e,t){throw t.$$typeof===kx?Error(K(525)):(e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function rm(e){var t=e._init;return t(e._payload)}function T_(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Oi(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=uu(_,u.mode,v),g.return=u,g):(g=a(g,_),g.return=u,g)}function l(u,g,_,v){var A=_.type;return A===Cr?d(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&rm(A)===g.type)?(g=a(g,_.props),Cs(g,_),g.return=u,g):(g=Pl(_.type,_.key,_.props,null,u.mode,v),Cs(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=fu(_,u.mode,v),g.return=u,g):(g=a(g,_.children||[]),g.return=u,g)}function d(u,g,_,v,A){return g===null||g.tag!==7?(g=Xa(_,u.mode,v,A),g.return=u,g):(g=a(g,_),g.return=u,g)}function h(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=uu(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Zo:return _=Pl(g.type,g.key,g.props,null,u.mode,_),Cs(_,g),_.return=u,_;case Fs:return g=fu(g,u.mode,_),g.return=u,g;case Ji:var v=g._init;return g=v(g._payload),h(u,g,_)}if(Hs(g)||Ts(g))return g=Xa(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return h(u,nl(g),_);if(g.$$typeof===wi)return h(u,tl(u,g),_);il(u,g)}return null}function f(u,g,_,v){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return _.key===A?l(u,g,_,v):null;case Fs:return _.key===A?c(u,g,_,v):null;case Ji:return A=_._init,_=A(_._payload),f(u,g,_,v)}if(Hs(_)||Ts(_))return A!==null?null:d(u,g,_,v,null);if(typeof _.then=="function")return f(u,g,nl(_),v);if(_.$$typeof===wi)return f(u,g,tl(u,_),v);il(u,_)}return null}function p(u,g,_,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zo:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,A);case Fs:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,A);case Ji:var D=v._init;return v=D(v._payload),p(u,g,_,v,A)}if(Hs(v)||Ts(v))return u=u.get(_)||null,d(g,u,v,A,null);if(typeof v.then=="function")return p(u,g,_,nl(v),A);if(v.$$typeof===wi)return p(u,g,_,tl(g,v),A);il(g,v)}return null}function x(u,g,_,v){for(var A=null,D=null,C=g,L=g=0,T=null;C!==null&&L<_.length;L++){C.index>L?(T=C,C=null):T=C.sibling;var E=f(u,C,_[L],v);if(E===null){C===null&&(C=T);break}e&&C&&E.alternate===null&&t(u,C),g=r(E,g,L),D===null?A=E:D.sibling=E,D=E,C=T}if(L===_.length)return n(u,C),te&&za(u,L),A;if(C===null){for(;L<_.length;L++)C=h(u,_[L],v),C!==null&&(g=r(C,g,L),D===null?A=C:D.sibling=C,D=C);return te&&za(u,L),A}for(C=i(C);L<_.length;L++)T=p(C,u,L,_[L],v),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?L:T.key),g=r(T,g,L),D===null?A=T:D.sibling=T,D=T);return e&&C.forEach(function(N){return t(u,N)}),te&&za(u,L),A}function y(u,g,_,v){if(_==null)throw Error(K(151));for(var A=null,D=null,C=g,L=g=0,T=null,E=_.next();C!==null&&!E.done;L++,E=_.next()){C.index>L?(T=C,C=null):T=C.sibling;var N=f(u,C,E.value,v);if(N===null){C===null&&(C=T);break}e&&C&&N.alternate===null&&t(u,C),g=r(N,g,L),D===null?A=N:D.sibling=N,D=N,C=T}if(E.done)return n(u,C),te&&za(u,L),A;if(C===null){for(;!E.done;L++,E=_.next())E=h(u,E.value,v),E!==null&&(g=r(E,g,L),D===null?A=E:D.sibling=E,D=E);return te&&za(u,L),A}for(C=i(C);!E.done;L++,E=_.next())E=p(C,u,L,E.value,v),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?L:E.key),g=r(E,g,L),D===null?A=E:D.sibling=E,D=E);return e&&C.forEach(function(G){return t(u,G)}),te&&za(u,L),A}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===Cr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:t:{for(var A=_.key;g!==null;){if(g.key===A){if(A=_.type,A===Cr){if(g.tag===7){n(u,g.sibling),v=a(g,_.props.children),v.return=u,u=v;break t}}else if(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&rm(A)===g.type){n(u,g.sibling),v=a(g,_.props),Cs(v,_),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Cr?(v=Xa(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Pl(_.type,_.key,_.props,null,u.mode,v),Cs(v,_),v.return=u,u=v)}return s(u);case Fs:t:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=a(g,_.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=fu(_,u.mode,v),v.return=u,u=v}return s(u);case Ji:return A=_._init,_=A(_._payload),m(u,g,_,v)}if(Hs(_))return x(u,g,_,v);if(Ts(_)){if(A=Ts(_),typeof A!="function")throw Error(K(150));return _=A.call(_),y(u,g,_,v)}if(typeof _.then=="function")return m(u,g,nl(_),v);if(_.$$typeof===wi)return m(u,g,tl(u,_),v);il(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=a(g,_),v.return=u,u=v):(n(u,g),v=uu(_,u.mode,v),v.return=u,u=v),s(u)):n(u,g)}return function(u,g,_,v){try{fo=0;var A=m(u,g,_,v);return qr=null,A}catch(C){if(C===Oo||C===Ic)throw C;var D=Tn(29,C,null,u.mode);return D.lanes=v,D.return=u,D}finally{}}}var as=T_(!0),A_=T_(!1),kn=pi(null),ui=null;function ea(e){var t=e.alternate;Se(Ie,Ie.current&1),Se(kn,e),ui===null&&(t===null||ns.current!==null||t.memoizedState!==null)&&(ui=e)}function R_(e){if(e.tag===22){if(Se(Ie,Ie.current),Se(kn,e),ui===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ui=e)}}else na()}function na(){Se(Ie,Ie.current),Se(kn,kn.current)}function Li(e){je(kn),ui===e&&(ui=null),je(Ie)}var Ie=pi(0);function cc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||nd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function pu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hf={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=wn(),a=ua(i);a.payload=t,n!=null&&(a.callback=n),t=fa(e,a,i),t!==null&&(Cn(t,e,i),Ks(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=wn(),a=ua(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fa(e,a,i),t!==null&&(Cn(t,e,i),Ks(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=wn(),i=ua(n);i.tag=2,t!=null&&(i.callback=t),t=fa(e,i,n),t!==null&&(Cn(t,e,n),Ks(t,e,n))}};function sm(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!lo(n,i)||!lo(a,r):!0}function om(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Hf.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function w_(e){uc(e)}function C_(e){console.error(e)}function D_(e){uc(e)}function fc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function lm(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Gf(e,t,n){return n=ua(n),n.tag=3,n.payload={element:null},n.callback=function(){fc(e,t)},n}function U_(e){return e=ua(e),e.tag=3,e}function L_(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){lm(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){lm(t,n,i),typeof a!="function"&&(da===null?da=new Set([this]):da.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function pS(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Lo(t,n,a,!0),n=kn.current,n!==null){switch(n.tag){case 13:return ui===null?Zf():n.alternate===null&&we===0&&(we=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Nf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Tu(e,i,a)),!1;case 22:return n.flags|=65536,i===Nf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Tu(e,i,a)),!1}throw Error(K(435,n.tag))}return Tu(e,i,a),Zf(),!1}if(te)return t=kn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==wf&&(e=Error(K(422),{cause:i}),co(Gn(e,n)))):(i!==wf&&(t=Error(K(423),{cause:i}),co(Gn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Gn(i,n),a=Gf(e.stateNode,i,a),du(e,a),we!==4&&(we=2)),!1;var r=Error(K(520),{cause:i});if(r=Gn(r,n),no===null?no=[r]:no.push(r),we!==4&&(we=2),t===null)return!0;i=Gn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Gf(n.stateNode,i,e),du(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(da===null||!da.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=U_(a),L_(a,e,n,i),du(n,a),!1}n=n.return}while(n!==null);return!1}var N_=Error(K(461)),Xe=!1;function Ye(e,t,n,i){t.child=e===null?A_(t,null,n,i):as(t,e.child,n,i)}function cm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Ja(t),i=Eh(e,t,n,s,r,a),o=bh(),e!==null&&!Xe?(Th(e,t,a),Fi(e,t,a)):(te&&o&&gh(t),t.flags|=1,Ye(e,t,i,a),t.child)}function um(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!mh(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,O_(e,t,r,i,a)):(e=Pl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Oh(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(s,i)&&e.ref===t.ref)return Fi(e,t,a)}return t.flags|=1,e=Oi(r,i),e.ref=t.ref,e.return=t,t.child=e}function O_(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(lo(r,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=r,Oh(e,a))e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Fi(e,t,a)}return Vf(e,t,n,i,a)}function P_(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return fm(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(t,r!==null?r.cachePool:null),r!==null?Jp(t,r):zf(),R_(t);else return t.lanes=t.childLanes=536870912,fm(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(zl(t,r.cachePool),Jp(t,r),na(),t.memoizedState=null):(e!==null&&zl(t,null),zf(),na());return Ye(e,t,a,n),t.child}function fm(e,t,n,i){var a=xh();return a=a===null?null:{parent:ze._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&zl(t,null),zf(),R_(t),e!==null&&Lo(e,t,i,!0),null}function Fl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(K(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vf(e,t,n,i,a){return Ja(t),n=Eh(e,t,n,i,void 0,a),i=bh(),e!==null&&!Xe?(Th(e,t,a),Fi(e,t,a)):(te&&i&&gh(t),t.flags|=1,Ye(e,t,n,a),t.child)}function dm(e,t,n,i,a,r){return Ja(t),t.updateQueue=null,n=q0(t,i,n,a),Y0(e),i=bh(),e!==null&&!Xe?(Th(e,t,r),Fi(e,t,r)):(te&&i&&gh(t),t.flags|=1,Ye(e,t,n,r),t.child)}function hm(e,t,n,i,a){if(Ja(t),t.stateNode===null){var r=Ir,s=n.contextType;typeof s=="object"&&s!==null&&(r=tn(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hf,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},yh(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?tn(s):Ir,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(pu(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Hf.enqueueReplaceState(r,r.state,null),Js(t,i,r,a),Qs(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=tr(n,o);r.props=l;var c=r.context,d=n.contextType;s=Ir,typeof d=="object"&&d!==null&&(s=tn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&om(t,r,i,s),$i=!1;var f=t.memoizedState;r.state=f,Js(t,i,r,a),Qs(),c=t.memoizedState,o||f!==c||$i?(typeof h=="function"&&(pu(t,n,h,i),c=t.memoizedState),(l=$i||sm(t,n,l,i,f,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Of(e,t),s=t.memoizedProps,d=tr(n,s),r.props=d,h=t.pendingProps,f=r.context,c=n.contextType,l=Ir,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&om(t,r,i,l),$i=!1,f=t.memoizedState,r.state=f,Js(t,i,r,a),Qs();var p=t.memoizedState;s!==h||f!==p||$i||e!==null&&e.dependencies!==null&&ac(e.dependencies)?(typeof o=="function"&&(pu(t,n,o,i),p=t.memoizedState),(d=$i||sm(t,n,d,i,f,p,l)||e!==null&&e.dependencies!==null&&ac(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,Fl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=as(t,e.child,null,a),t.child=as(t,null,n,a)):Ye(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Fi(e,t,a),e}function pm(e,t,n,i){return Uo(),t.flags|=256,Ye(e,t,n,i),t.child}var mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gu(e){return{baseLanes:e,cachePool:V0()}}function _u(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vn),e}function z_(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(a?ea(t):na(),te){var o=Re,l;if(l=o){t:{for(l=o,o=ii;l.nodeType!==8;){if(!o){o=null;break t}if(l=Qn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ja!==null?{id:Ci,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},l=Tn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,rn=t,Re=null,l=!0):l=!1}l||Qa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return nd(o)?t.lanes=32:t.lanes=536870912,null;Li(t)}return o=i.children,i=i.fallback,a?(na(),a=t.mode,o=dc({mode:"hidden",children:o},a),i=Xa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=gu(n),a.childLanes=_u(e,s,n),t.memoizedState=mu,i):(ea(t),kf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(ea(t),t.flags&=-257,t=vu(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),a=i.fallback,o=t.mode,i=dc({mode:"visible",children:i.children},o),a=Xa(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,as(t,e.child,null,n),i=t.child,i.memoizedState=gu(n),i.childLanes=_u(e,s,n),t.memoizedState=mu,t=a);else if(ea(t),nd(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(K(419)),i.stack="",i.digest=s,co({value:i,source:null,stack:null}),t=vu(e,t,n)}else if(Xe||Lo(e,t,n,!1),s=(n&e.childLanes)!==0,Xe||s){if(s=pe,s!==null&&(i=n&-n,i=i&42?1:ah(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,_s(e,i),Cn(s,e,i),N_;o.data==="$?"||Zf(),t=vu(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=Qn(o.nextSibling),rn=t,te=!0,Ya=null,ii=!1,e!==null&&(Bn[Fn++]=Ci,Bn[Fn++]=Di,Bn[Fn++]=ja,Ci=e.id,Di=e.overflow,ja=t),t=kf(t,i.children),t.flags|=4096);return t}return a?(na(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Oi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Oi(c,a):(a=Xa(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=gu(n):(l=o.cachePool,l!==null?(c=ze._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=V0(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=_u(e,s,n),t.memoizedState=mu,i):(ea(t),n=e.child,e=n.sibling,n=Oi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function kf(e,t){return t=dc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dc(e,t){return e=Tn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function vu(e,t,n){return as(t,e.child,null,n),e=kf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Df(e.return,t,n)}function xu(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function I_(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(Ye(e,t,i.children,n),i=Ie.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,n,t);else if(e.tag===19)mm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(Se(Ie,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&cc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),xu(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}xu(t,!0,n,null,r);break;case"together":xu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,!(n&t.childLanes))if(e!==null){if(Lo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=Oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oh(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ac(e)))}function mS(e,t,n){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),ta(t,ze,e.memoizedState.cache),Uo();break;case 27:case 5:vf(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ea(t),t.flags|=128,null):n&t.child.childLanes?z_(e,t,n):(ea(t),e=Fi(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Lo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return I_(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,P_(e,t,n);case 24:ta(t,ze,e.memoizedState.cache)}return Fi(e,t,n)}function B_(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Oh(e,n)&&!(t.flags&128))return Xe=!1,mS(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,te&&t.flags&1048576&&H0(t,ic,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")mh(i)?(e=tr(i,e),t.tag=1,t=hm(null,t,i,e,n)):(t.tag=0,t=Vf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===eh){t.tag=11,t=cm(null,t,i,e,n);break t}else if(a===nh){t.tag=14,t=um(null,t,i,e,n);break t}}throw t=gf(i)||i,Error(K(306,t,""))}}return t;case 0:return Vf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=tr(i,t.pendingProps),hm(e,t,i,a,n);case 3:t:{if(Kl(t,t.stateNode.containerInfo),e===null)throw Error(K(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Of(e,t),Js(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ta(t,ze,i),i!==r.cache&&Uf(t,[ze],n,!0),Qs(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=pm(e,t,i,n);break t}else if(i!==a){a=Gn(Error(K(424)),t),co(a),t=pm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Qn(e.firstChild),rn=t,te=!0,Ya=null,ii=!0,n=A_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Uo(),i===a){t=Fi(e,t,n);break t}Ye(e,t,i,n)}t=t.child}return t;case 26:return Fl(e,t),e===null?(n=Lm(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=xc(ca.current).createElement(n),i[$e]=t,i[mn]=e,Ze(i,n,e),We(i),t.stateNode=i):t.memoizedState=Lm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vf(t),e===null&&te&&(i=t.stateNode=bv(t.type,t.pendingProps,ca.current),rn=t,ii=!0,a=Re,Ta(t.type)?(id=a,Re=Qn(i.firstChild)):Re=a),Ye(e,t,t.pendingProps.children,n),Fl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((a=i=Re)&&(i=kS(i,t.type,t.pendingProps,ii),i!==null?(t.stateNode=i,rn=t,Re=Qn(i.firstChild),ii=!1,a=!0):a=!1),a||Qa(t)),vf(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,td(a,r)?i=null:s!==null&&td(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eh(e,t,oS,null,null,n),go._currentValue=a),Fl(e,t),Ye(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Re)&&(n=WS(n,t.pendingProps,ii),n!==null?(t.stateNode=n,rn=t,Re=null,e=!0):e=!1),e||Qa(t)),null;case 13:return z_(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=as(t,null,i,n):Ye(e,t,i,n),t.child;case 11:return cm(e,t,t.type,t.pendingProps,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ta(t,t.type,i.value),Ye(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ja(t),a=tn(a),i=i(a),t.flags|=1,Ye(e,t,i,n),t.child;case 14:return um(e,t,t.type,t.pendingProps,n);case 15:return O_(e,t,t.type,t.pendingProps,n);case 19:return I_(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=dc(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Oi(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return P_(e,t,n);case 24:return Ja(t),i=tn(ze),e===null?(a=xh(),a===null&&(a=pe,r=vh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},yh(t),ta(t,ze,a)):(e.lanes&n&&(Of(e,t),Js(t,null,null,n),Qs()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,ze,i)):(i=r.cache,ta(t,ze,i),i!==a.cache&&Uf(t,[ze],n,!0))),Ye(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(K(156,t.tag))}function vi(e){e.flags|=4}function gm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Rv(t)){if(t=kn.current,t!==null&&((qt&4194048)===qt?ui!==null:(qt&62914560)!==qt&&!(qt&536870912)||t!==ui))throw Zs=Nf,k0;e.flags|=8192}}function al(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?u0():536870912,e.lanes|=t,rs|=t)}function Ds(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function gS(e,t,n){var i=t.pendingProps;switch(_h(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Pi(ze),Jr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ws(t)?vi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jp())),be(t),null;case 26:return n=t.memoizedState,e===null?(vi(t),n!==null?(be(t),gm(t,n)):(be(t),t.flags&=-16777217)):n?n!==e.memoizedState?(vi(t),be(t),gm(t,n)):(be(t),t.flags&=-16777217):(e.memoizedProps!==i&&vi(t),be(t),t.flags&=-16777217),null;case 27:Ql(t),n=ca.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return be(t),null}e=li.current,ws(t)?Wp(t):(e=bv(a,i,n),t.stateNode=e,vi(t))}return be(t),null;case 5:if(Ql(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(!i){if(t.stateNode===null)throw Error(K(166));return be(t),null}if(e=li.current,ws(t))Wp(t);else{switch(a=xc(ca.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[$e]=t,e[mn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(Ze(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&vi(t)}}return be(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(K(166));if(e=ca.current,ws(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Sv(e.nodeValue,n)),e||Qa(t)}else e=xc(e).createTextNode(i),e[$e]=t,t.stateNode=e}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ws(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(K(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(K(317));a[$e]=t}else Uo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),a=!1}else a=jp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Li(t),t):(Li(t),null)}if(Li(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),al(t,t.updateQueue),be(t),null;case 4:return Jr(),e===null&&Vh(t.stateNode.containerInfo),be(t),null;case 10:return Pi(t.type),be(t),null;case 19:if(je(Ie),a=t.memoizedState,a===null)return be(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)Ds(a,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=cc(e),r!==null){for(t.flags|=128,Ds(a,!1),e=r.updateQueue,t.updateQueue=e,al(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)F0(n,e),n=n.sibling;return Se(Ie,Ie.current&1|2),t.child}e=e.sibling}a.tail!==null&&ci()>pc&&(t.flags|=128,i=!0,Ds(a,!1),t.lanes=4194304)}else{if(!i)if(e=cc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,al(t,e),Ds(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!te)return be(t),null}else 2*ci()-a.renderingStartTime>pc&&n!==536870912&&(t.flags|=128,i=!0,Ds(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ci(),t.sibling=null,e=Ie.current,Se(Ie,i?e&1|2:e&1),t):(be(t),null);case 22:case 23:return Li(t),Sh(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&al(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&je(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pi(ze),be(t),null;case 25:return null;case 30:return null}throw Error(K(156,t.tag))}function _S(e,t){switch(_h(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pi(ze),Jr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ql(t),null;case 13:if(Li(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ie),null;case 4:return Jr(),null;case 10:return Pi(t.type),null;case 22:case 23:return Li(t),Sh(),e!==null&&je(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pi(ze),null;case 25:return null;default:return null}}function F_(e,t){switch(_h(t),t.tag){case 3:Pi(ze),Jr();break;case 26:case 27:case 5:Ql(t);break;case 4:Jr();break;case 13:Li(t);break;case 19:je(Ie);break;case 10:Pi(t.type);break;case 22:case 23:Li(t),Sh(),e!==null&&je(qa);break;case 24:Pi(ze)}}function Io(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){de(t,t.return,o)}}function ya(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){de(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){de(t,t.return,d)}}function H_(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{j0(t,n)}catch(i){de(e,e.return,i)}}}function G_(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){de(e,t,i)}}function to(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){de(e,t,a)}}function ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){de(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function V_(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){de(e,e.return,a)}}function yu(e,t,n){try{var i=e.stateNode;BS(i,e.type,n,t),i[mn]=t}catch(a){de(e,e.return,a)}}function k_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Su(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||k_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wc));else if(i!==4&&(i===27&&Ta(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Wf(e,t,n),e=e.sibling;e!==null;)Wf(e,t,n),e=e.sibling}function hc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ta(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function W_(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ze(t,i,n),t[$e]=e,t[mn]=n}catch(r){de(e,e.return,r)}}var Ai=!1,Le=!1,Mu=!1,_m=typeof WeakSet=="function"?WeakSet:Set,ke=null;function vS(e,t){if(e=e.containerInfo,Jf=Ec,e=U0(e),dh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,d=0,h=e,f=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++d===i&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:e,selectionRange:n},Ec=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=tr(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(y){de(n,n.return,y)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ed(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ed(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(K(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function X_(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&Io(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){de(n,n.return,s)}else{var a=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){de(n,n.return,s)}}i&64&&H_(n),i&512&&to(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{j0(e,t)}catch(s){de(n,n.return,s)}}break;case 27:t===null&&i&4&&W_(n);case 26:case 5:Wi(e,n),t===null&&i&4&&V_(n),i&512&&to(n,n.return);break;case 12:Wi(e,n);break;case 13:Wi(e,n),i&4&&q_(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=RS.bind(null,n),XS(e,n))));break;case 22:if(i=n.memoizedState!==null||Ai,!i){t=t!==null&&t.memoizedState!==null||Le,a=Ai;var r=Le;Ai=i,(Le=t)&&!r?Qi(e,n,(n.subtreeFlags&8772)!==0):Wi(e,n),Ai=a,Le=r}break;case 30:break;default:Wi(e,n)}}function j_(e){var t=e.alternate;t!==null&&(e.alternate=null,j_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&sh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,fn=!1;function xi(e,t,n){for(n=n.child;n!==null;)Y_(e,t,n),n=n.sibling}function Y_(e,t,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 26:Le||ai(n,t),xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Le||ai(n,t);var i=xe,a=fn;Ta(n.type)&&(xe=n.stateNode,fn=!1),xi(e,t,n),ao(n.stateNode),xe=i,fn=a;break;case 5:Le||ai(n,t);case 6:if(i=xe,a=fn,xe=null,xi(e,t,n),xe=i,fn=a,xe!==null)if(fn)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(r){de(n,t,r)}else try{xe.removeChild(n.stateNode)}catch(r){de(n,t,r)}break;case 18:xe!==null&&(fn?(e=xe,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xo(e)):Cm(xe,n.stateNode));break;case 4:i=xe,a=fn,xe=n.stateNode.containerInfo,fn=!0,xi(e,t,n),xe=i,fn=a;break;case 0:case 11:case 14:case 15:Le||ya(2,n,t),Le||ya(4,n,t),xi(e,t,n);break;case 1:Le||(ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&G_(n,t,i)),xi(e,t,n);break;case 21:xi(e,t,n);break;case 22:Le=(i=Le)||n.memoizedState!==null,xi(e,t,n),Le=i;break;default:xi(e,t,n)}}function q_(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xo(e)}catch(n){de(t,t.return,n)}}function xS(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _m),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _m),t;default:throw Error(K(435,e.tag))}}function Eu(e,t){var n=xS(e);t.forEach(function(i){var a=wS.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function xn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(Ta(o.type)){xe=o.stateNode,fn=!1;break t}break;case 5:xe=o.stateNode,fn=!1;break t;case 3:case 4:xe=o.stateNode.containerInfo,fn=!0;break t}o=o.return}if(xe===null)throw Error(K(160));Y_(r,s,a),xe=null,fn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Z_(t,e),t=t.sibling}var qn=null;function Z_(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),yn(e),i&4&&(ya(3,e,e.return),Io(3,e),ya(5,e,e.return));break;case 1:xn(t,e),yn(e),i&512&&(Le||n===null||ai(n,n.return)),i&64&&Ai&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=qn;if(xn(t,e),yn(e),i&512&&(Le||n===null||ai(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Co]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Ze(r,i,n),r[$e]=e,We(r),i=r;break t;case"link":var s=Om("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Om("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;default:throw Error(K(468,i))}r[$e]=e,We(r),i=r}e.stateNode=i}else Pm(a,e.type,e.stateNode);else e.stateNode=Nm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Pm(a,e.type,e.stateNode):Nm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&yu(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),yn(e),i&512&&(Le||n===null||ai(n,n.return)),n!==null&&i&4&&yu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),yn(e),i&512&&(Le||n===null||ai(n,n.return)),e.flags&32){a=e.stateNode;try{ts(a,"")}catch(p){de(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,yu(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Mu=!0);break;case 6:if(xn(t,e),yn(e),i&4){if(e.stateNode===null)throw Error(K(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){de(e,e.return,p)}}break;case 3:if(Vl=null,a=qn,qn=yc(t.containerInfo),xn(t,e),qn=a,yn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(t.containerInfo)}catch(p){de(e,e.return,p)}Mu&&(Mu=!1,K_(e));break;case 4:i=qn,qn=yc(e.stateNode.containerInfo),xn(t,e),yn(e),qn=i;break;case 12:xn(t,e),yn(e);break;case 13:xn(t,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fh=ci()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Eu(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ai,d=Le;if(Ai=c||a,Le=d||l,xn(t,e),Le=d,Ai=c,yn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ai||Le||Ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){de(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){de(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Eu(e,n))));break;case 19:xn(t,e),yn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Eu(e,i)));break;case 30:break;case 21:break;default:xn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(k_(i)){n=i;break}i=i.return}if(n==null)throw Error(K(160));switch(n.tag){case 27:var a=n.stateNode,r=Su(e);hc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(ts(s,""),n.flags&=-33);var o=Su(e);hc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Su(e);Wf(e,c,l);break;default:throw Error(K(161))}}catch(d){de(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;K_(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)X_(e,t.alternate,t),t=t.sibling}function Ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ya(4,t,t.return),Ia(t);break;case 1:ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&G_(t,t.return,n),Ia(t);break;case 27:ao(t.stateNode);case 26:case 5:ai(t,t.return),Ia(t);break;case 22:t.memoizedState===null&&Ia(t);break;case 30:Ia(t);break;default:Ia(t)}e=e.sibling}}function Qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Qi(a,r,n),Io(4,r);break;case 1:if(Qi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){de(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)X0(l[a],o)}catch(c){de(i,i.return,c)}}n&&s&64&&H_(r),to(r,r.return);break;case 27:W_(r);case 26:case 5:Qi(a,r,n),n&&i===null&&s&4&&V_(r),to(r,r.return);break;case 12:Qi(a,r,n);break;case 13:Qi(a,r,n),n&&s&4&&q_(a,r);break;case 22:r.memoizedState===null&&Qi(a,r,n),to(r,r.return);break;case 30:break;default:Qi(a,r,n)}t=t.sibling}}function Ph(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&No(n))}function zh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&No(e))}function ei(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q_(e,t,n,i),t=t.sibling}function Q_(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ei(e,t,n,i),a&2048&&Io(9,t);break;case 1:ei(e,t,n,i);break;case 3:ei(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&No(e)));break;case 12:if(a&2048){ei(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){de(t,t.return,l)}}else ei(e,t,n,i);break;case 13:ei(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ei(e,t,n,i):eo(e,t):r._visibility&2?ei(e,t,n,i):(r._visibility|=2,Rr(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Ph(s,t);break;case 24:ei(e,t,n,i),a&2048&&zh(t.alternate,t);break;default:ei(e,t,n,i)}}function Rr(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Rr(r,s,o,l,a),Io(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Rr(r,s,o,l,a):eo(r,s):(d._visibility|=2,Rr(r,s,o,l,a)),a&&c&2048&&Ph(s.alternate,s);break;case 24:Rr(r,s,o,l,a),a&&c&2048&&zh(s.alternate,s);break;default:Rr(r,s,o,l,a)}t=t.sibling}}function eo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:eo(n,i),a&2048&&Ph(i.alternate,i);break;case 24:eo(n,i),a&2048&&zh(i.alternate,i);break;default:eo(n,i)}t=t.sibling}}var Vs=8192;function lr(e){if(e.subtreeFlags&Vs)for(e=e.child;e!==null;)J_(e),e=e.sibling}function J_(e){switch(e.tag){case 26:lr(e),e.flags&Vs&&e.memoizedState!==null&&aM(qn,e.memoizedState,e.memoizedProps);break;case 5:lr(e);break;case 3:case 4:var t=qn;qn=yc(e.stateNode.containerInfo),lr(e),qn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Vs,Vs=16777216,lr(e),Vs=t):lr(e));break;default:lr(e)}}function $_(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Us(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,ev(i,e)}$_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tv(e),e=e.sibling}function tv(e){switch(e.tag){case 0:case 11:case 15:Us(e),e.flags&2048&&ya(9,e,e.return);break;case 3:Us(e);break;case 12:Us(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Hl(e)):Us(e);break;default:Us(e)}}function Hl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,ev(i,e)}$_(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),Hl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Hl(t));break;default:Hl(t)}e=e.sibling}}function ev(e,t){for(;ke!==null;){var n=ke;switch(n.tag){case 0:case 11:case 15:ya(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:No(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ke=i;else t:for(n=e;ke!==null;){i=ke;var a=i.sibling,r=i.return;if(j_(i),i===n){ke=null;break t}if(a!==null){a.return=r,ke=a;break t}ke=r}}}var yS={getCacheForType:function(e){var t=tn(ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},SS=typeof WeakMap=="function"?WeakMap:Map,re=0,pe=null,kt=null,qt=0,ae=0,En=null,oa=!1,vs=!1,Ih=!1,Hi=0,we=0,Sa=0,Za=0,Bh=0,Vn=0,rs=0,no=null,dn=null,Xf=!1,Fh=0,pc=1/0,mc=null,da=null,qe=0,ha=null,ss=null,Zr=0,jf=0,Yf=null,nv=null,io=0,qf=null;function wn(){if(re&2&&qt!==0)return qt&-qt;if(Ct.T!==null){var e=es;return e!==0?e:Gh()}return h0()}function iv(){Vn===0&&(Vn=!(qt&536870912)||te?c0():536870912);var e=kn.current;return e!==null&&(e.flags|=32),Vn}function Cn(e,t,n){(e===pe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(os(e,0),la(e,qt,Vn,!1)),wo(e,n),(!(re&2)||e!==pe)&&(e===pe&&(!(re&2)&&(Za|=n),we===4&&la(e,qt,Vn,!1)),mi(e))}function av(e,t,n){if(re&6)throw Error(K(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ro(e,t),a=i?bS(e,t):bu(e,t,!0),r=i;do{if(a===0){vs&&!i&&la(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!MS(n)){a=bu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=no;var l=o.current.memoizedState.isDehydrated;if(l&&(os(o,s).flags|=256),s=bu(o,s,!1),s!==2){if(Ih&&!l){o.errorRecoveryDisabledLanes|=r,Za|=r,a=4;break t}r=dn,dn=a,r!==null&&(dn===null?dn=r:dn.push.apply(dn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){os(e,0),la(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(K(345));case 4:if((t&4194048)!==t)break;case 6:la(i,t,Vn,!oa);break t;case 2:dn=null;break;case 3:case 5:break;default:throw Error(K(329))}if((t&62914560)===t&&(a=Fh+300-ci(),10<a)){if(la(i,t,Vn,!oa),Uc(i,0,!0)!==0)break t;i.timeoutHandle=Ev(vm.bind(null,i,n,dn,mc,Xf,t,Vn,Za,rs,oa,r,2,-0,0),a);break t}vm(i,n,dn,mc,Xf,t,Vn,Za,rs,oa,r,0,-0,0)}}break}while(!0);mi(e)}function vm(e,t,n,i,a,r,s,o,l,c,d,h,f,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(mo={stylesheets:null,count:0,unsuspend:iM},J_(t),h=rM(),h!==null)){e.cancelPendingCommit=h(ym.bind(null,e,t,r,n,i,a,s,o,l,d,1,f,p)),la(e,r,s,!c);return}ym(e,t,r,n,i,a,s,o,l)}function MS(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Un(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,n,i){t&=~Bh,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Rn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&f0(e,n,t)}function Gc(){return re&6?!0:(Bo(0),!1)}function Hh(){if(kt!==null){if(ae===0)var e=kt.return;else e=kt,Ui=sr=null,Ah(e),qr=null,fo=0,e=kt;for(;e!==null;)F_(e.alternate,e),e=e.return;kt=null}}function os(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,HS(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Hh(),pe=e,kt=n=Oi(e.current,null),qt=t,ae=0,En=null,oa=!1,vs=Ro(e,t),Ih=!1,rs=Vn=Bh=Za=Sa=we=0,dn=no=null,Xf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Rn(i),r=1<<a;t|=e[a],i&=~r}return Hi=t,Pc(),n}function rv(e,t){Gt=null,Ct.H=lc,t===Oo||t===Ic?(t=Kp(),ae=3):t===k0?(t=Kp(),ae=4):ae=t===N_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,En=t,kt===null&&(we=1,fc(e,Gn(t,e.current)))}function sv(){var e=Ct.H;return Ct.H=lc,e===null?lc:e}function ov(){var e=Ct.A;return Ct.A=yS,e}function Zf(){we=4,oa||(qt&4194048)!==qt&&kn.current!==null||(vs=!0),!(Sa&134217727)&&!(Za&134217727)||pe===null||la(pe,qt,Vn,!1)}function bu(e,t,n){var i=re;re|=2;var a=sv(),r=ov();(pe!==e||qt!==t)&&(mc=null,os(e,t)),t=!1;var s=we;t:do try{if(ae!==0&&kt!==null){var o=kt,l=En;switch(ae){case 8:Hh(),s=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(t=!0);var c=ae;if(ae=0,En=null,Hr(e,o,l,c),n&&vs){s=0;break t}break;default:c=ae,ae=0,En=null,Hr(e,o,l,c)}}ES(),s=we;break}catch(d){rv(e,d)}while(!0);return t&&e.shellSuspendCounter++,Ui=sr=null,re=i,Ct.H=a,Ct.A=r,kt===null&&(pe=null,qt=0,Pc()),s}function ES(){for(;kt!==null;)lv(kt)}function bS(e,t){var n=re;re|=2;var i=sv(),a=ov();pe!==e||qt!==t?(mc=null,pc=ci()+500,os(e,t)):vs=Ro(e,t);t:do try{if(ae!==0&&kt!==null){t=kt;var r=En;e:switch(ae){case 1:ae=0,En=null,Hr(e,t,r,1);break;case 2:case 9:if(Zp(r)){ae=0,En=null,xm(t);break}t=function(){ae!==2&&ae!==9||pe!==e||(ae=7),mi(e)},r.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:Zp(r)?(ae=0,En=null,xm(t)):(ae=0,En=null,Hr(e,t,r,7));break;case 5:var s=null;switch(kt.tag){case 26:s=kt.memoizedState;case 5:case 27:var o=kt;if(!s||Rv(s)){ae=0,En=null;var l=o.sibling;if(l!==null)kt=l;else{var c=o.return;c!==null?(kt=c,Vc(c)):kt=null}break e}}ae=0,En=null,Hr(e,t,r,5);break;case 6:ae=0,En=null,Hr(e,t,r,6);break;case 8:Hh(),we=6;break t;default:throw Error(K(462))}}TS();break}catch(d){rv(e,d)}while(!0);return Ui=sr=null,Ct.H=i,Ct.A=a,re=n,kt!==null?0:(pe=null,qt=0,Pc(),we)}function TS(){for(;kt!==null&&!Yx();)lv(kt)}function lv(e){var t=B_(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,t===null?Vc(e):kt=t}function xm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=dm(n,t,t.pendingProps,t.type,void 0,qt);break;case 11:t=dm(n,t,t.pendingProps,t.type.render,t.ref,qt);break;case 5:Ah(t);default:F_(n,t),t=kt=F0(t,Hi),t=B_(n,t,Hi)}e.memoizedProps=e.pendingProps,t===null?Vc(e):kt=t}function Hr(e,t,n,i){Ui=sr=null,Ah(t),qr=null,fo=0;var a=t.return;try{if(pS(e,a,t,n,qt)){we=1,fc(e,Gn(n,e.current)),kt=null;return}}catch(r){if(a!==null)throw kt=a,r;we=1,fc(e,Gn(n,e.current)),kt=null;return}t.flags&32768?(te||i===1?e=!0:vs||qt&536870912?e=!1:(oa=e=!0,(i===2||i===9||i===3||i===6)&&(i=kn.current,i!==null&&i.tag===13&&(i.flags|=16384))),cv(t,e)):Vc(t)}function Vc(e){var t=e;do{if(t.flags&32768){cv(t,oa);return}e=t.return;var n=gS(t.alternate,t,Hi);if(n!==null){kt=n;return}if(t=t.sibling,t!==null){kt=t;return}kt=t=e}while(t!==null);we===0&&(we=5)}function cv(e,t){do{var n=_S(e.alternate,e);if(n!==null){n.flags&=32767,kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){kt=e;return}kt=e=n}while(e!==null);we=6,kt=null}function ym(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do kc();while(qe!==0);if(re&6)throw Error(K(327));if(t!==null){if(t===e.current)throw Error(K(177));if(r=t.lanes|t.childLanes,r|=hh,iy(e,n,r,s,o,l),e===pe&&(kt=pe=null,qt=0),ss=t,ha=e,Zr=n,jf=r,Yf=a,nv=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,CS(Jl,function(){return pv(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=Ct.T,Ct.T=null,a=ee.p,ee.p=2,s=re,re|=4;try{vS(e,t,n)}finally{re=s,ee.p=a,Ct.T=i}}qe=1,uv(),fv(),dv()}}function uv(){if(qe===1){qe=0;var e=ha,t=ss,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=Ct.T,Ct.T=null;var i=ee.p;ee.p=2;var a=re;re|=4;try{Z_(t,e);var r=$f,s=U0(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&D0(o.ownerDocument.documentElement,o)){if(l!==null&&dh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var p=f.getSelection(),x=o.textContent.length,y=Math.min(l.start,x),m=l.end===void 0?y:Math.min(l.end,x);!p.extend&&y>m&&(s=m,m=y,y=s);var u=Gp(o,y),g=Gp(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=h.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),y>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var v=h[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ec=!!Jf,$f=Jf=null}finally{re=a,ee.p=i,Ct.T=n}}e.current=t,qe=2}}function fv(){if(qe===2){qe=0;var e=ha,t=ss,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=Ct.T,Ct.T=null;var i=ee.p;ee.p=2;var a=re;re|=4;try{X_(e,t.alternate,t)}finally{re=a,ee.p=i,Ct.T=n}}qe=3}}function dv(){if(qe===4||qe===3){qe=0,qx();var e=ha,t=ss,n=Zr,i=nv;t.subtreeFlags&10256||t.flags&10256?qe=5:(qe=0,ss=ha=null,hv(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(da=null),rh(n),t=t.stateNode,An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Ao,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Ct.T,a=ee.p,ee.p=2,Ct.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Ct.T=t,ee.p=a}}Zr&3&&kc(),mi(e),a=e.pendingLanes,n&4194090&&a&42?e===qf?io++:(io=0,qf=e):io=0,Bo(0)}}function hv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,No(t)))}function kc(e){return uv(),fv(),dv(),pv()}function pv(){if(qe!==5)return!1;var e=ha,t=jf;jf=0;var n=rh(Zr),i=Ct.T,a=ee.p;try{ee.p=32>n?32:n,Ct.T=null,n=Yf,Yf=null;var r=ha,s=Zr;if(qe=0,ss=ha=null,Zr=0,re&6)throw Error(K(331));var o=re;if(re|=4,tv(r.current),Q_(r,r.current,s,n),re=o,Bo(0,!1),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Ao,r)}catch{}return!0}finally{ee.p=a,Ct.T=i,hv(e,t)}}function Sm(e,t,n){t=Gn(n,t),t=Gf(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(wo(e,2),mi(e))}function de(e,t,n){if(e.tag===3)Sm(e,e,n);else for(;t!==null;){if(t.tag===3){Sm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))){e=Gn(n,e),n=U_(2),i=fa(t,n,2),i!==null&&(L_(n,i,t,e),wo(i,2),mi(i));break}}t=t.return}}function Tu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new SS;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Ih=!0,a.add(n),e=AS.bind(null,e,t,n),t.then(e,e))}function AS(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(qt&n)===n&&(we===4||we===3&&(qt&62914560)===qt&&300>ci()-Fh?!(re&2)&&os(e,0):Bh|=n,rs===qt&&(rs=0)),mi(e)}function mv(e,t){t===0&&(t=u0()),e=_s(e,t),e!==null&&(wo(e,t),mi(e))}function RS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mv(e,n)}function wS(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(K(314))}i!==null&&i.delete(t),mv(e,n)}function CS(e,t){return ih(e,t)}var gc=null,wr=null,Kf=!1,_c=!1,Au=!1,Ka=0;function mi(e){e!==wr&&e.next===null&&(wr===null?gc=wr=e:wr=wr.next=e),_c=!0,Kf||(Kf=!0,US())}function Bo(e,t){if(!Au&&_c){Au=!0;do for(var n=!1,i=gc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Rn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Mm(i,r))}else r=qt,r=Uc(i,i===pe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Ro(i,r)||(n=!0,Mm(i,r));i=i.next}while(n);Au=!1}}function DS(){gv()}function gv(){_c=Kf=!1;var e=0;Ka!==0&&(FS()&&(e=Ka),Ka=0);for(var t=ci(),n=null,i=gc;i!==null;){var a=i.next,r=_v(i,t);r===0?(i.next=null,n===null?gc=a:n.next=a,a===null&&(wr=n)):(n=i,(e!==0||r&3)&&(_c=!0)),i=a}Bo(e)}function _v(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Rn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=ny(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=pe,n=qt,n=Uc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Jc(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ro(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Jc(i),rh(n)){case 2:case 8:n=o0;break;case 32:n=Jl;break;case 268435456:n=l0;break;default:n=Jl}return i=vv.bind(null,e),n=ih(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Jc(i),e.callbackPriority=2,e.callbackNode=null,2}function vv(e,t){if(qe!==0&&qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var i=qt;return i=Uc(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(av(e,i,t),_v(e,ci()),e.callbackNode!=null&&e.callbackNode===n?vv.bind(null,e):null)}function Mm(e,t){if(kc())return null;av(e,t,!0)}function US(){GS(function(){re&6?ih(s0,DS):gv()})}function Gh(){return Ka===0&&(Ka=c0()),Ka}function Em(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ll(""+e)}function bm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function LS(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Em((a[mn]||null).action),s=i.submitter;s&&(t=(t=s[mn]||null)?Em(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Lc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ka!==0){var l=s?bm(a,s):new FormData(a);Ff(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?bm(a,s):new FormData(a),Ff(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Ru=0;Ru<Rf.length;Ru++){var wu=Rf[Ru],NS=wu.toLowerCase(),OS=wu[0].toUpperCase()+wu.slice(1);$n(NS,"on"+OS)}$n(N0,"onAnimationEnd");$n(O0,"onAnimationIteration");$n(P0,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(Qy,"onTransitionRun");$n(Jy,"onTransitionStart");$n($y,"onTransitionCancel");$n(z0,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function xv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(d){uc(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(d){uc(d)}a.currentTarget=null,r=l}}}}function Vt(e,t){var n=t[yf];n===void 0&&(n=t[yf]=new Set);var i=e+"__bubble";n.has(i)||(yv(t,e,2,!1),n.add(i))}function Cu(e,t,n){var i=0;t&&(i|=4),yv(n,e,i,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Vh(e){if(!e[rl]){e[rl]=!0,p0.forEach(function(n){n!=="selectionchange"&&(PS.has(n)||Cu(n,!1,e),Cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,Cu("selectionchange",!1,t))}}function yv(e,t,n,i){switch(Lv(t)){case 2:var a=lM;break;case 8:a=cM;break;default:a=jh}n=a.bind(null,t,n,e),a=void 0,!bf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Du(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Ur(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}M0(function(){var c=r,d=lh(n),h=[];t:{var f=I0.get(e);if(f!==void 0){var p=Lc,x=e;switch(e){case"keypress":if(Ol(n)===0)break t;case"keydown":case"keyup":p=Cy;break;case"focusin":x="focus",p=su;break;case"focusout":x="blur",p=su;break;case"beforeblur":case"afterblur":p=su;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ly;break;case N0:case O0:case P0:p=yy;break;case z0:p=Oy;break;case"scroll":case"scrollend":p=my;break;case"wheel":p=zy;break;case"copy":case"cut":case"paste":p=My;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Np;break;case"toggle":case"beforetoggle":p=By}var y=(t&4)!==0,m=!y&&(e==="scroll"||e==="scrollend"),u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=so(g,u),v!=null&&y.push(po(g,v,_))),m)break;g=g.return}0<y.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Ef&&(x=n.relatedTarget||n.fromElement)&&(Ur(x)||x[ms]))break t;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Ur(x):null,x!==null&&(m=To(x),y=x.tag,x!==m||y!==5&&y!==27&&y!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=Up,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(y=Np,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Gs(p),_=x==null?f:Gs(x),f=new y(v,g+"leave",p,n,d),f.target=m,f.relatedTarget=_,v=null,Ur(d)===c&&(y=new y(u,g+"enter",x,n,d),y.target=_,y.relatedTarget=m,v=y),m=v,p&&x)e:{for(y=p,u=x,g=0,_=y;_;_=cr(_))g++;for(_=0,v=u;v;v=cr(v))_++;for(;0<g-_;)y=cr(y),g--;for(;0<_-g;)u=cr(u),_--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break e;y=cr(y),u=cr(u)}y=null}else y=null;p!==null&&Tm(h,f,p,y,!1),x!==null&&m!==null&&Tm(h,m,x,y,!0)}}t:{if(f=c?Gs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=Ip;else if(zp(f))if(w0)A=qy;else{A=jy;var D=Xy}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&oh(c.elementType)&&(A=Ip):A=Yy;if(A&&(A=A(e,c))){R0(h,A,n,d);break t}D&&D(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&Mf(f,"number",f.value)}switch(D=c?Gs(c):window,e){case"focusin":(zp(D)||D.contentEditable==="true")&&(Or=D,Tf=c,Ys=null);break;case"focusout":Ys=Tf=Or=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,Vp(h,n,d);break;case"selectionchange":if(Ky)break;case"keydown":case"keyup":Vp(h,n,d)}var C;if(fh)t:{switch(e){case"compositionstart":var L="onCompositionStart";break t;case"compositionend":L="onCompositionEnd";break t;case"compositionupdate":L="onCompositionUpdate";break t}L=void 0}else Nr?T0(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(b0&&n.locale!=="ko"&&(Nr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Nr&&(C=E0()):(sa=d,ch="value"in sa?sa.value:sa.textContent,Nr=!0)),D=vc(c,L),0<D.length&&(L=new Lp(L,e,null,n,d),h.push({event:L,listeners:D}),C?L.data=C:(C=A0(n),C!==null&&(L.data=C)))),(C=Hy?Gy(e,n):Vy(e,n))&&(L=vc(c,"onBeforeInput"),0<L.length&&(D=new Lp("onBeforeInput","beforeinput",null,n,d),h.push({event:D,listeners:L}),D.data=C)),LS(h,e,c,n,d)}xv(h,t)})}function po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vc(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=so(e,n),a!=null&&i.unshift(po(e,a,r)),a=so(e,t),a!=null&&i.push(po(e,a,r))),e.tag===3)return i;e=e.return}return[]}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=so(n,r),c!=null&&s.unshift(po(n,c,l))):a||(c=so(n,r),c!=null&&s.push(po(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var zS=/\r\n?/g,IS=/\u0000|\uFFFD/g;function Am(e){return(typeof e=="string"?e:""+e).replace(zS,`
`).replace(IS,"")}function Sv(e,t){return t=Am(t),Am(e)===t}function Wc(){}function le(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ts(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ts(e,""+i);break;case"className":Jo(e,"class",i);break;case"tabIndex":Jo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jo(e,n,i);break;case"style":S0(e,i,r);break;case"data":if(t!=="object"){Jo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ll(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",a.name,a,null),le(e,t,"formEncType",a.formEncType,a,null),le(e,t,"formMethod",a.formMethod,a,null),le(e,t,"formTarget",a.formTarget,a,null)):(le(e,t,"encType",a.encType,a,null),le(e,t,"method",a.method,a,null),le(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ll(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Wc);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ll(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),Ul(e,"popover",i);break;case"xlinkActuate":_i(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":_i(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":_i(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":_i(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":_i(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":_i(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":_i(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":_i(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":_i(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ul(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hy.get(n)||n,Ul(e,n,i))}}function Qf(e,t,n,i,a,r){switch(n){case"style":S0(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(K(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(K(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ts(e,i):(typeof i=="number"||typeof i=="bigint")&&ts(e,""+i);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Wc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!m0.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[mn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ul(e,n,i)}}}function Ze(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:le(e,t,r,s,n,null)}}a&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Vt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(K(137,t));break;default:le(e,t,i,d,n,null)}}v0(e,r,o,l,c,s,a,!1),$l(e);return;case"select":Vt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:le(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?kr(e,!!i,t,!1):n!=null&&kr(e,!!i,n,!0);return;case"textarea":Vt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(K(91));break;default:le(e,t,s,o,n,null)}y0(e,i,a,r),$l(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(i=0;i<ho.length;i++)Vt(ho[i],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(K(137,t));default:le(e,t,c,i,n,null)}return;default:if(oh(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Qf(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function BS(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||le(e,t,p,null,i,h)}}for(var f in i){var p=i[f];if(h=n[f],i.hasOwnProperty(f)&&(p!=null||h!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(K(137,t));break;default:p!==h&&le(e,t,f,p,i,h)}}Sf(e,s,o,l,c,d,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||le(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&le(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?kr(e,!!n,f,!1):!!i!=!!n&&(t!=null?kr(e,!!n,t,!0):kr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(K(91));break;default:a!==r&&le(e,t,s,a,i,r)}x0(e,f,p);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:le(e,t,x,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)f=n[y],n.hasOwnProperty(y)&&f!=null&&!i.hasOwnProperty(y)&&le(e,t,y,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(K(137,t));break;default:le(e,t,c,f,i,p)}return;default:if(oh(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Qf(e,t,m,void 0,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f===void 0&&p===void 0||Qf(e,t,d,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f==null&&p==null||le(e,t,h,f,i,p)}var Jf=null,$f=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Rm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uu=null;function FS(){var e=window.event;return e&&e.type==="popstate"?e===Uu?!1:(Uu=e,!0):(Uu=null,!1)}var Ev=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,GS=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(e){return wm.resolve(null).then(e).catch(VS)}:Ev;function VS(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Cm(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&ao(s.documentElement),n&2&&ao(s.body),n&4)for(n=s.head,ao(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Co]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),xo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);xo(t)}function ed(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ed(n),sh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function kS(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Co])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function WS(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qn(e.nextSibling),e===null))return null;return e}function nd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function XS(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var id=null;function Dm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function bv(e,t,n){switch(t=xc(n),e){case"html":if(e=t.documentElement,!e)throw Error(K(452));return e;case"head":if(e=t.head,!e)throw Error(K(453));return e;case"body":if(e=t.body,!e)throw Error(K(454));return e;default:throw Error(K(451))}}function ao(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);sh(e)}var Wn=new Map,Um=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gi=ee.d;ee.d={f:jS,r:YS,D:qS,C:ZS,L:KS,m:QS,X:$S,S:JS,M:tM};function jS(){var e=Gi.f(),t=Gc();return e||t}function YS(e){var t=gs(e);t!==null&&t.tag===5&&t.type==="form"?__(t):Gi.r(e)}var xs=typeof document>"u"?null:document;function Tv(e,t,n){var i=xs;if(i&&typeof t=="string"&&t){var a=Hn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Um.has(a)||(Um.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ze(t,"link",e),We(t),i.head.appendChild(t)))}}function qS(e){Gi.D(e),Tv("dns-prefetch",e,null)}function ZS(e,t){Gi.C(e,t),Tv("preconnect",e,t)}function KS(e,t,n){Gi.L(e,t,n);var i=xs;if(i&&e&&t){var a='link[rel="preload"][as="'+Hn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Hn(n.imageSizes)+'"]')):a+='[href="'+Hn(e)+'"]';var r=a;switch(t){case"style":r=ls(e);break;case"script":r=ys(e)}Wn.has(r)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Fo(r))||t==="script"&&i.querySelector(Ho(r))||(t=i.createElement("link"),Ze(t,"link",e),We(t),i.head.appendChild(t)))}}function QS(e,t){Gi.m(e,t);var n=xs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Hn(i)+'"][href="'+Hn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=ys(e)}if(!Wn.has(r)&&(e=ge({rel:"modulepreload",href:e},t),Wn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ho(r)))return}i=n.createElement("link"),Ze(i,"link",e),We(i),n.head.appendChild(i)}}}function JS(e,t,n){Gi.S(e,t,n);var i=xs;if(i&&e){var a=Vr(i).hoistableStyles,r=ls(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Fo(r)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wn.get(r))&&kh(e,n);var l=s=i.createElement("link");We(l),Ze(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Gl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function $S(e,t){Gi.X(e,t);var n=xs;if(n&&e){var i=Vr(n).hoistableScripts,a=ys(e),r=i.get(a);r||(r=n.querySelector(Ho(a)),r||(e=ge({src:e,async:!0},t),(t=Wn.get(a))&&Wh(e,t),r=n.createElement("script"),We(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function tM(e,t){Gi.M(e,t);var n=xs;if(n&&e){var i=Vr(n).hoistableScripts,a=ys(e),r=i.get(a);r||(r=n.querySelector(Ho(a)),r||(e=ge({src:e,async:!0,type:"module"},t),(t=Wn.get(a))&&Wh(e,t),r=n.createElement("script"),We(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Lm(e,t,n,i){var a=(a=ca.current)?yc(a):null;if(!a)throw Error(K(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ls(n.href),n=Vr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ls(n.href);var r=Vr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(Fo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Wn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wn.set(e,n),r||eM(a,e,n,s.state))),t&&i===null)throw Error(K(528,""));return s}if(t&&i!==null)throw Error(K(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ys(n),n=Vr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(K(444,e))}}function ls(e){return'href="'+Hn(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function Av(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function eM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ze(t,"link",n),We(t),e.head.appendChild(t))}function ys(e){return'[src="'+Hn(e)+'"]'}function Ho(e){return"script[async]"+e}function Nm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Hn(n.href)+'"]');if(i)return t.instance=i,We(i),i;var a=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),We(i),Ze(i,"style",a),Gl(i,n.precedence,e),t.instance=i;case"stylesheet":a=ls(n.href);var r=e.querySelector(Fo(a));if(r)return t.state.loading|=4,t.instance=r,We(r),r;i=Av(n),(a=Wn.get(a))&&kh(i,a),r=(e.ownerDocument||e).createElement("link"),We(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",i),t.state.loading|=4,Gl(r,n.precedence,e),t.instance=r;case"script":return r=ys(n.src),(a=e.querySelector(Ho(r)))?(t.instance=a,We(a),a):(i=n,(a=Wn.get(r))&&(i=ge({},n),Wh(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),We(a),Ze(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(K(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Gl(i,n.precedence,e));return t.instance}function Gl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function kh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Wh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vl=null;function Om(e,t,n){if(Vl===null){var i=new Map,a=Vl=new Map;a.set(n,i)}else a=Vl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Co]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Pm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nM(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rv(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var mo=null;function iM(){}function aM(e,t,n){if(mo===null)throw Error(K(475));var i=mo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=ls(n.href),r=e.querySelector(Fo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Sc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,We(r);return}r=e.ownerDocument||e,n=Av(n),(a=Wn.get(a))&&kh(n,a),r=r.createElement("link"),We(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Sc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function rM(){if(mo===null)throw Error(K(475));var e=mo;return e.stylesheets&&e.count===0&&ad(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ad(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)ad(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function ad(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,t.forEach(sM,e),Mc=null,Sc.call(e))}function sM(e,t){if(!(t.state.loading&4)){var n=Mc.get(e);if(n)var i=n.get(null);else{n=new Map,Mc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Sc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var go={$$typeof:wi,Provider:null,Consumer:null,_currentValue:Wa,_currentValue2:Wa,_threadCount:0};function oM(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$c(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.hiddenUpdates=$c(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function wv(e,t,n,i,a,r,s,o,l,c,d,h){return e=new oM(e,t,n,s,o,l,c,h),t=1,r===!0&&(t|=24),r=Tn(3,null,null,t),e.current=r,r.stateNode=e,t=vh(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},yh(r),e}function Cv(e){return e?(e=Ir,e):Ir}function Dv(e,t,n,i,a,r){a=Cv(a),i.context===null?i.context=a:i.pendingContext=a,i=ua(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=fa(e,i,t),n!==null&&(Cn(n,e,t),Ks(n,e,t))}function zm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xh(e,t){zm(e,t),(e=e.alternate)&&zm(e,t)}function Uv(e){if(e.tag===13){var t=_s(e,67108864);t!==null&&Cn(t,e,67108864),Xh(e,67108864)}}var Ec=!0;function lM(e,t,n,i){var a=Ct.T;Ct.T=null;var r=ee.p;try{ee.p=2,jh(e,t,n,i)}finally{ee.p=r,Ct.T=a}}function cM(e,t,n,i){var a=Ct.T;Ct.T=null;var r=ee.p;try{ee.p=8,jh(e,t,n,i)}finally{ee.p=r,Ct.T=a}}function jh(e,t,n,i){if(Ec){var a=rd(i);if(a===null)Du(e,t,i,bc,n),Im(e,i);else if(fM(a,e,t,n,i))i.stopPropagation();else if(Im(e,i),t&4&&-1<uM.indexOf(e)){for(;a!==null;){var r=gs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Pa(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Rn(s);o.entanglements[1]|=l,s&=~l}mi(r),!(re&6)&&(pc=ci()+500,Bo(0))}}break;case 13:o=_s(r,2),o!==null&&Cn(o,r,2),Gc(),Xh(r,2)}if(r=rd(i),r===null&&Du(e,t,i,bc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Du(e,t,i,null,n)}}function rd(e){return e=lh(e),Yh(e)}var bc=null;function Yh(e){if(bc=null,e=Ur(e),e!==null){var t=To(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=n0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return bc=e,null}function Lv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zx()){case s0:return 2;case o0:return 8;case Jl:case Kx:return 32;case l0:return 268435456;default:return 32}default:return 32}}var sd=!1,pa=null,ma=null,ga=null,_o=new Map,vo=new Map,ia=[],uM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ma=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":_o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(t.pointerId)}}function Ls(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=gs(t),t!==null&&Uv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function fM(e,t,n,i,a){switch(t){case"focusin":return pa=Ls(pa,e,t,n,i,a),!0;case"dragenter":return ma=Ls(ma,e,t,n,i,a),!0;case"mouseover":return ga=Ls(ga,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return _o.set(r,Ls(_o.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,vo.set(r,Ls(vo.get(r)||null,e,t,n,i,a)),!0}return!1}function Nv(e){var t=Ur(e.target);if(t!==null){var n=To(t);if(n!==null){if(t=n.tag,t===13){if(t=n0(n),t!==null){e.blockedOn=t,ay(e.priority,function(){if(n.tag===13){var i=wn();i=ah(i);var a=_s(n,i);a!==null&&Cn(a,n,i),Xh(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rd(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ef=i,n.target.dispatchEvent(i),Ef=null}else return t=gs(n),t!==null&&Uv(t),e.blockedOn=n,!1;t.shift()}return!0}function Bm(e,t,n){kl(e)&&n.delete(t)}function dM(){sd=!1,pa!==null&&kl(pa)&&(pa=null),ma!==null&&kl(ma)&&(ma=null),ga!==null&&kl(ga)&&(ga=null),_o.forEach(Bm),vo.forEach(Bm)}function sl(e,t){e.blockedOn===t&&(e.blockedOn=null,sd||(sd=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,dM)))}var ol=null;function Fm(e){ol!==e&&(ol=e,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,function(){ol===e&&(ol=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Yh(i||n)===null)continue;break}var r=gs(n);r!==null&&(e.splice(t,3),t-=3,Ff(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function xo(e){function t(l){return sl(l,e)}pa!==null&&sl(pa,e),ma!==null&&sl(ma,e),ga!==null&&sl(ga,e),_o.forEach(t),vo.forEach(t);for(var n=0;n<ia.length;n++){var i=ia[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ia.length&&(n=ia[0],n.blockedOn===null);)Nv(n),n.blockedOn===null&&ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[mn]||null;if(typeof r=="function")s||Fm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[mn]||null)o=s.formAction;else if(Yh(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Fm(n)}}}function qh(e){this._internalRoot=e}Xc.prototype.render=qh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));var n=t.current,i=wn();Dv(n,i,e,t,null,null)};Xc.prototype.unmount=qh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dv(e.current,2,null,e,null,null),Gc(),t[ms]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=h0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ia.length&&t!==0&&t<ia[n].priority;n++);ia.splice(n,0,e),n===0&&Nv(e)}};var Hm=t0.version;if(Hm!=="19.1.1")throw Error(K(527,Hm,"19.1.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=Vx(t),e=e!==null?i0(e):null,e=e===null?null:e.stateNode,e};var hM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Ct,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Ao=ll.inject(hM),An=ll}catch{}}Cc.createRoot=function(e,t){if(!e0(e))throw Error(K(299));var n=!1,i="",a=w_,r=C_,s=D_,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=wv(e,1,!1,null,null,n,i,a,r,s,o,null),e[ms]=t.current,Vh(e),new qh(t)};Cc.hydrateRoot=function(e,t,n){if(!e0(e))throw Error(K(299));var i=!1,a="",r=w_,s=C_,o=D_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=wv(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=Cv(null),n=t.current,i=wn(),i=ah(i),a=ua(i),a.callback=null,fa(n,a,i),n=i,t.current.lanes=n,wo(t,n),mi(t),e[ms]=t.current,Vh(e),new Xc(t)};Cc.version="19.1.1";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(e){console.error(e)}}Ov(),qg.exports=Cc;var pM=qg.exports;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="180",mM=0,Gm=1,gM=2,Pv=1,zv=2,Ti=3,Ma=0,hn=1,Ri=2,_a=0,Kr=1,Vm=2,km=3,Wm=4,_M=5,Ha=100,vM=101,xM=102,yM=103,SM=104,MM=200,EM=201,bM=202,TM=203,od=204,ld=205,AM=206,RM=207,wM=208,CM=209,DM=210,UM=211,LM=212,NM=213,OM=214,cd=0,ud=1,fd=2,cs=3,dd=4,hd=5,pd=6,md=7,Kh=0,PM=1,zM=2,va=0,IM=1,BM=2,FM=3,HM=4,GM=5,VM=6,kM=7,Iv=300,us=301,fs=302,gd=303,_d=304,jc=306,vd=1e3,Va=1001,xd=1002,Jn=1003,WM=1004,cl=1005,ri=1006,Lu=1007,ka=1008,di=1009,Bv=1010,Fv=1011,yo=1012,Qh=1013,er=1014,Ni=1015,Go=1016,Jh=1017,$h=1018,So=1020,Hv=35902,Gv=35899,Vv=1021,kv=1022,Kn=1023,Mo=1026,Eo=1027,Wv=1028,tp=1029,Xv=1030,ep=1031,np=1033,Wl=33776,Xl=33777,jl=33778,Yl=33779,yd=35840,Sd=35841,Md=35842,Ed=35843,bd=36196,Td=37492,Ad=37496,Rd=37808,wd=37809,Cd=37810,Dd=37811,Ud=37812,Ld=37813,Nd=37814,Od=37815,Pd=37816,zd=37817,Id=37818,Bd=37819,Fd=37820,Hd=37821,Gd=36492,Vd=36494,kd=36495,Wd=36283,Xd=36284,jd=36285,Yd=36286,XM=3200,jM=3201,jv=0,YM=1,aa="",zn="srgb",ds="srgb-linear",Tc="linear",oe="srgb",ur=7680,Xm=519,qM=512,ZM=513,KM=514,Yv=515,QM=516,JM=517,$M=518,tE=519,jm=35044,Ym="300 es",si=2e3,Ac=2001;class Ss{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nu=Math.PI/180,qd=180/Math.PI;function Vo(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[n&63|128]+Qe[n>>8&255]+"-"+Qe[n>>16&255]+Qe[n>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function eE(e,t){return(e%t+t)%t}function Ou(e,t,n){return(1-n)*e+n*t}function Ns(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function cn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ko{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3];const f=r[s+0],p=r[s+1],x=r[s+2],y=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=x,t[n+3]=y;return}if(h!==y||l!==f||c!==p||d!==x){let m=1-o;const u=l*f+c*p+d*x+h*y,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const A=Math.sqrt(_),D=Math.atan2(A,u*g);m=Math.sin(m*D)/A,o=Math.sin(o*D)/A}const v=o*g;if(l=l*m+f*v,c=c*m+p*v,d=d*m+x*v,h=h*m+y*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=A,c*=A,d*=A,h*=A}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=r[s],f=r[s+1],p=r[s+2],x=r[s+3];return t[n]=o*x+d*h+l*p-c*f,t[n+1]=l*x+d*f+c*h-o*p,t[n+2]=c*x+d*p+o*f-l*h,t[n+3]=d*x-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(r/2),f=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"YZX":this._x=f*d*h+c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h-f*p*x;break;case"XZY":this._x=f*d*h-c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=a*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(qm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(qm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),d=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*d,this.y=i+l*d+o*c-r*h,this.z=a+l*h+r*d-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pu.copy(this).projectOnVector(t),this.sub(Pu)}reflect(t){return this.sub(Pu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new F,qm=new ko;class It{constructor(t,n,i,a,r,s,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],y=a[0],m=a[3],u=a[6],g=a[1],_=a[4],v=a[7],A=a[2],D=a[5],C=a[8];return r[0]=s*y+o*g+l*A,r[3]=s*m+o*_+l*D,r[6]=s*u+o*v+l*C,r[1]=c*y+d*g+h*A,r[4]=c*m+d*_+h*D,r[7]=c*u+d*v+h*C,r[2]=f*y+p*g+x*A,r[5]=f*m+p*_+x*D,r[8]=f*u+p*v+x*C,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*s-o*c,f=o*l-d*r,p=c*r-s*l,x=n*h+i*f+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=h*y,t[1]=(a*c-d*i)*y,t[2]=(o*i-a*s)*y,t[3]=f*y,t[4]=(d*n-a*l)*y,t[5]=(a*r-o*n)*y,t[6]=p*y,t[7]=(i*l-c*n)*y,t[8]=(s*n-i*r)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(zu.makeScale(t,n)),this}rotate(t){return this.premultiply(zu.makeRotation(-t)),this}translate(t,n){return this.premultiply(zu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new It;function qv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Rc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function nE(){const e=Rc("canvas");return e.style.display="block",e}const Zm={};function bo(e){e in Zm||(Zm[e]=!0,console.warn(e))}function iE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Km=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aE(){const e={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===oe&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===oe&&(a.r=Qr(a.r),a.g=Qr(a.g),a.b=Qr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===aa?Tc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return bo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return bo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ds]:{primaries:t,whitePoint:i,transfer:Tc,toXYZ:Km,fromXYZ:Qm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Km,fromXYZ:Qm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),e}const Qt=aE();function zi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let fr;class rE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=Rc("canvas")),fr.width=t.width,fr.height=t.height;const a=fr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Rc("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=zi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sE=0;class ip{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Iu(a[s].image)):r.push(Iu(a[s]))}else r=Iu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Iu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?rE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oE=0;const Bu=new F;class pn extends Ss{constructor(t=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Va,a=Va,r=ri,s=ka,o=Kn,l=di,c=pn.DEFAULT_ANISOTROPY,d=aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Vo(),this.name="",this.source=new ip(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vd:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vd:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Iv;pn.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,n=0,i=0,a=1){ue.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,A=(u+1)/2,D=(d+f)/4,C=(h+y)/4,L=(x+m)/4;return _>v&&_>A?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=D/i,r=C/i):v>A?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=D/a,r=L/a):A<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),i=C/r,a=L/r),this.set(i,a,r,n),this}let g=Math.sqrt((m-x)*(m-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends Ss{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ue(0,0,t,n),this.scissorTest=!1,this.viewport=new ue(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new pn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new ip(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends lE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Zv extends pn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends pn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Xn):Xn.fromBufferAttribute(r,s),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ul.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(t.matrixWorld),this.union(ul)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),fl.subVectors(this.max,Os),dr.subVectors(t.a,Os),hr.subVectors(t.b,Os),pr.subVectors(t.c,Os),Xi.subVectors(hr,dr),ji.subVectors(pr,hr),Ca.subVectors(dr,pr);let n=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-Ca.z,Ca.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,Ca.z,0,-Ca.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-Ca.y,Ca.x,0];return!Fu(n,dr,hr,pr,fl)||(n=[1,0,0,0,1,0,0,0,1],!Fu(n,dr,hr,pr,fl))?!1:(dl.crossVectors(Xi,ji),n=[dl.x,dl.y,dl.z],Fu(n,dr,hr,pr,fl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const yi=[new F,new F,new F,new F,new F,new F,new F,new F],Xn=new F,ul=new Wo,dr=new F,hr=new F,pr=new F,Xi=new F,ji=new F,Ca=new F,Os=new F,fl=new F,dl=new F,Da=new F;function Fu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Da.fromArray(e,r);const o=a.x*Math.abs(Da.x)+a.y*Math.abs(Da.y)+a.z*Math.abs(Da.z),l=t.dot(Da),c=n.dot(Da),d=i.dot(Da);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const uE=new Wo,Ps=new F,Hu=new F;class ap{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):uE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ps,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Hu)),this.expandByPoint(Ps.copy(t.center).sub(Hu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Si=new F,Gu=new F,hl=new F,Yi=new F,Vu=new F,pl=new F,ku=new F;class fE{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Si.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Gu.copy(t).add(n).multiplyScalar(.5),hl.copy(n).sub(t).normalize(),Yi.copy(this.origin).sub(Gu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(hl),o=Yi.dot(this.direction),l=-Yi.dot(hl),c=Yi.lengthSq(),d=Math.abs(1-s*s);let h,f,p,x;if(d>0)if(h=s*l-o,f=s*o-l,x=r*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Gu).addScaledVector(hl,f),p}intersectSphere(t,n){Si.subVectors(t.center,this.origin);const i=Si.dot(this.direction),a=Si.dot(Si)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,s=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,s=(t.min.y-f.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,n,i,a,r){Vu.subVectors(n,t),pl.subVectors(i,t),ku.crossVectors(Vu,pl);let s=this.direction.dot(ku),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Yi.subVectors(this.origin,t);const l=o*this.direction.dot(pl.crossVectors(Yi,pl));if(l<0)return null;const c=o*this.direction.dot(Vu.cross(Yi));if(c<0||l+c>s)return null;const d=-o*Yi.dot(ku);return d<0?null:this.at(d/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,n,i,a,r,s,o,l,c,d,h,f,p,x,y,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,d,h,f,p,x,y,m)}set(t,n,i,a,r,s,o,l,c,d,h,f,p,x,y,m){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=x,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/mr.setFromMatrixColumn(t,0).length(),r=1/mr.setFromMatrixColumn(t,1).length(),s=1/mr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=s*d,p=s*h,x=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=x+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*d,p=l*h,x=c*d,y=c*h;n[0]=f+y*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-o,n[2]=p*o-x,n[6]=y+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*d,p=l*h,x=c*d,y=c*h;n[0]=f-y*o,n[4]=-s*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*d,n[9]=y-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*d,p=s*h,x=o*d,y=o*h;n[0]=l*d,n[4]=x*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,x=o*l,y=o*c;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+p,n[1]=h,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+x,n[10]=f-y*h}else if(t.order==="XZY"){const f=s*l,p=s*c,x=o*l,y=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=s*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dE,t,hE)}lookAt(t,n,i){const a=this.elements;return Sn.subVectors(t,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),qi.crossVectors(i,Sn),qi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),qi.crossVectors(i,Sn)),qi.normalize(),ml.crossVectors(Sn,qi),a[0]=qi.x,a[4]=ml.x,a[8]=Sn.x,a[1]=qi.y,a[5]=ml.y,a[9]=Sn.y,a[2]=qi.z,a[6]=ml.z,a[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],y=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],A=i[15],D=a[0],C=a[4],L=a[8],T=a[12],E=a[1],N=a[5],G=a[9],R=a[13],V=a[2],j=a[6],P=a[10],W=a[14],B=a[3],tt=a[7],rt=a[11],_t=a[15];return r[0]=s*D+o*E+l*V+c*B,r[4]=s*C+o*N+l*j+c*tt,r[8]=s*L+o*G+l*P+c*rt,r[12]=s*T+o*R+l*W+c*_t,r[1]=d*D+h*E+f*V+p*B,r[5]=d*C+h*N+f*j+p*tt,r[9]=d*L+h*G+f*P+p*rt,r[13]=d*T+h*R+f*W+p*_t,r[2]=x*D+y*E+m*V+u*B,r[6]=x*C+y*N+m*j+u*tt,r[10]=x*L+y*G+m*P+u*rt,r[14]=x*T+y*R+m*W+u*_t,r[3]=g*D+_*E+v*V+A*B,r[7]=g*C+_*N+v*j+A*tt,r[11]=g*L+_*G+v*P+A*rt,r[15]=g*T+_*R+v*W+A*_t,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],p=t[14],x=t[3],y=t[7],m=t[11],u=t[15];return x*(+r*l*h-a*c*h-r*o*f+i*c*f+a*o*p-i*l*p)+y*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*d-r*l*d)+m*(+n*c*h-n*o*p-r*s*h+i*s*p+r*o*d-i*c*d)+u*(-a*o*d-n*l*h+n*o*f+a*s*h-i*s*f+i*l*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],p=t[11],x=t[12],y=t[13],m=t[14],u=t[15],g=h*m*c-y*f*c+y*l*p-o*m*p-h*l*u+o*f*u,_=x*f*c-d*m*c-x*l*p+s*m*p+d*l*u-s*f*u,v=d*y*c-x*h*c+x*o*p-s*y*p-d*o*u+s*h*u,A=x*h*l-d*y*l-x*o*f+s*y*f+d*o*m-s*h*m,D=n*g+i*_+a*v+r*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return t[0]=g*C,t[1]=(y*f*r-h*m*r-y*a*p+i*m*p+h*a*u-i*f*u)*C,t[2]=(o*m*r-y*l*r+y*a*c-i*m*c-o*a*u+i*l*u)*C,t[3]=(h*l*r-o*f*r-h*a*c+i*f*c+o*a*p-i*l*p)*C,t[4]=_*C,t[5]=(d*m*r-x*f*r+x*a*p-n*m*p-d*a*u+n*f*u)*C,t[6]=(x*l*r-s*m*r-x*a*c+n*m*c+s*a*u-n*l*u)*C,t[7]=(s*f*r-d*l*r+d*a*c-n*f*c-s*a*p+n*l*p)*C,t[8]=v*C,t[9]=(x*h*r-d*y*r-x*i*p+n*y*p+d*i*u-n*h*u)*C,t[10]=(s*y*r-x*o*r+x*i*c-n*y*c-s*i*u+n*o*u)*C,t[11]=(d*o*r-s*h*r-d*i*c+n*h*c+s*i*p-n*o*p)*C,t[12]=A*C,t[13]=(d*y*a-x*h*a+x*i*f-n*y*f-d*i*m+n*h*m)*C,t[14]=(x*o*a-s*y*a-x*i*l+n*y*l+s*i*m-n*o*m)*C,t[15]=(s*h*a-d*o*a+d*i*l-n*h*l-s*i*f+n*o*f)*C,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,h=o+o,f=r*c,p=r*d,x=r*h,y=s*d,m=s*h,u=o*h,g=l*c,_=l*d,v=l*h,A=i.x,D=i.y,C=i.z;return a[0]=(1-(y+u))*A,a[1]=(p+v)*A,a[2]=(x-_)*A,a[3]=0,a[4]=(p-v)*D,a[5]=(1-(f+u))*D,a[6]=(m+g)*D,a[7]=0,a[8]=(x+_)*C,a[9]=(m-g)*C,a[10]=(1-(f+y))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=mr.set(a[0],a[1],a[2]).length();const s=mr.set(a[4],a[5],a[6]).length(),o=mr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],jn.copy(this);const c=1/r,d=1/s,h=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,n.setFromRotationMatrix(jn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=si,l=!1){const c=this.elements,d=2*r/(n-t),h=2*r/(i-a),f=(n+t)/(n-t),p=(i+a)/(i-a);let x,y;if(l)x=r/(s-r),y=s*r/(s-r);else if(o===si)x=-(s+r)/(s-r),y=-2*s*r/(s-r);else if(o===Ac)x=-s/(s-r),y=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=si,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),f=-(n+t)/(n-t),p=-(i+a)/(i-a);let x,y;if(l)x=1/(s-r),y=s/(s-r);else if(o===si)x=-2/(s-r),y=-(s+r)/(s-r);else if(o===Ac)x=-1/(s-r),y=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const mr=new F,jn=new Ce,dE=new F(0,0,0),hE=new F(1,1,1),qi=new F,ml=new F,Sn=new F,Jm=new Ce,$m=new ko;class hi{constructor(t=0,n=0,i=0,a=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return $m.setFromEuler(this),this.setFromQuaternion($m,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pE=0;const tg=new F,gr=new ko,Mi=new Ce,gl=new F,zs=new F,mE=new F,gE=new ko,eg=new F(1,0,0),ng=new F(0,1,0),ig=new F(0,0,1),ag={type:"added"},_E={type:"removed"},_r={type:"childadded",child:null},Wu={type:"childremoved",child:null};class en extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new F,n=new hi,i=new ko,a=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ce},normalMatrix:{value:new It}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(eg,t)}rotateY(t){return this.rotateOnAxis(ng,t)}rotateZ(t){return this.rotateOnAxis(ig,t)}translateOnAxis(t,n){return tg.copy(t).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(eg,t)}translateY(t){return this.translateOnAxis(ng,t)}translateZ(t){return this.translateOnAxis(ig,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?gl.copy(t):gl.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(zs,gl,this.up):Mi.lookAt(gl,zs,this.up),this.quaternion.setFromRotationMatrix(Mi),a&&(Mi.extractRotation(a.matrixWorld),gr.setFromRotationMatrix(Mi),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ag),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_E),Wu.child=t,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ag),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,mE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,gE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),d=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),x=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}en.DEFAULT_UP=new F(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new F,Ei=new F,Xu=new F,bi=new F,vr=new F,xr=new F,rg=new F,ju=new F,Yu=new F,qu=new F,Zu=new ue,Ku=new ue,Qu=new ue;class Zn{constructor(t=new F,n=new F,i=new F){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),Yn.subVectors(t,n),a.cross(Yn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){Yn.subVectors(a,n),Ei.subVectors(i,n),Xu.subVectors(t,n);const s=Yn.dot(Yn),o=Yn.dot(Ei),l=Yn.dot(Xu),c=Ei.dot(Ei),d=Ei.dot(Xu),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,x=(s*d-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(s,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return Zu.setScalar(0),Ku.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(t,n),Ku.fromBufferAttribute(t,i),Qu.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Zu,r.x),s.addScaledVector(Ku,r.y),s.addScaledVector(Qu,r.z),s}static isFrontFacing(t,n,i,a){return Yn.subVectors(i,n),Ei.subVectors(t,n),Yn.cross(Ei).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Yn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Zn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return Zn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;vr.subVectors(a,i),xr.subVectors(r,i),ju.subVectors(t,i);const l=vr.dot(ju),c=xr.dot(ju);if(l<=0&&c<=0)return n.copy(i);Yu.subVectors(t,a);const d=vr.dot(Yu),h=xr.dot(Yu);if(d>=0&&h<=d)return n.copy(a);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(vr,s);qu.subVectors(t,r);const p=vr.dot(qu),x=xr.dot(qu);if(x>=0&&p<=x)return n.copy(r);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(xr,o);const m=d*x-p*h;if(m<=0&&h-d>=0&&p-x>=0)return rg.subVectors(r,a),o=(h-d)/(h-d+(p-x)),n.copy(a).addScaledVector(rg,o);const u=1/(m+y+f);return s=y*u,o=f*u,n.copy(i).addScaledVector(vr,s).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Ju(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=zn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Qt.workingColorSpace){if(t=eE(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Ju(s,r,t+1/3),this.g=Ju(s,r,t),this.b=Ju(s,r,t-1/3)}return Qt.colorSpaceToWorking(this,a),this}setStyle(t,n=zn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=zn){const i=Qv[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zn){return Qt.workingToColorSpace(Je.copy(this),t),Math.round(jt(Je.r*255,0,255))*65536+Math.round(jt(Je.g*255,0,255))*256+Math.round(jt(Je.b*255,0,255))}getHexString(t=zn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(Je.copy(this),n);const i=Je.r,a=Je.g,r=Je.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(Je.copy(this),n),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=zn){Qt.workingToColorSpace(Je.copy(this),t);const n=Je.r,i=Je.g,a=Je.b;return t!==zn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+n,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Zi),t.getHSL(_l);const i=Ou(Zi.h,_l.h,n),a=Ou(Zi.s,_l.s,n),r=Ou(Zi.l,_l.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Jt;Jt.NAMES=Qv;let vE=0;class Xo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Kr,this.side=Ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ld,this.blendEquation=Ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==Ha&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jv extends Xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new F,vl=new $t;let xE=0;class fi{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=jm,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(t),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix3(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix4(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyNormalMatrix(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.transformDirection(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ns(n,this.array)),n}setX(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ns(n,this.array)),n}setY(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ns(n,this.array)),n}setZ(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ns(n,this.array)),n}setW(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),a=cn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),a=cn(a,this.array),r=cn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jm&&(t.usage=this.usage),t}}class $v extends fi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class tx extends fi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Dn extends fi{constructor(t,n,i){super(new Float32Array(t),n,i)}}let yE=0;const On=new Ce,$u=new en,yr=new F,Mn=new Wo,Is=new Wo,Ve=new F;class Vi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qv(t)?tx:$v)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new It().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,n,i){return On.makeTranslation(t,n,i),this.applyMatrix4(On),this}scale(t,n,i){return On.makeScale(t,n,i),this.applyMatrix4(On),this}lookAt(t){return $u.lookAt(t),$u.updateMatrix(),this.applyMatrix4($u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(Mn.min,Is.min),Mn.expandByPoint(Ve),Ve.addVectors(Mn.max,Is.max),Mn.expandByPoint(Ve)):(Mn.expandByPoint(Is.min),Mn.expandByPoint(Is.max))}Mn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ve.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ve));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ve.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(t,c),Ve.add(yr)),a=Math.max(a,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new F,l[L]=new F;const c=new F,d=new F,h=new F,f=new $t,p=new $t,x=new $t,y=new F,m=new F;function u(L,T,E){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),d.sub(c),h.sub(c),p.sub(f),x.sub(f);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(N),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(N),o[L].add(y),o[T].add(y),o[E].add(y),l[L].add(m),l[T].add(m),l[E].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let L=0,T=g.length;L<T;++L){const E=g[L],N=E.start,G=E.count;for(let R=N,V=N+G;R<V;R+=3)u(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const _=new F,v=new F,A=new F,D=new F;function C(L){A.fromBufferAttribute(a,L),D.copy(A);const T=o[L];_.copy(T),_.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(D,T);const N=v.dot(l[L])<0?-1:1;s.setXYZW(L,_.x,_.y,_.z,N)}for(let L=0,T=g.length;L<T;++L){const E=g[L],N=E.start,G=E.count;for(let R=N,V=N+G;R<V;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new F,r=new F,s=new F,o=new F,l=new F,c=new F,d=new F,h=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ve.fromBufferAttribute(t,n),Ve.normalize(),t.setXYZ(n,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let u=0;u<d;u++)f[x++]=c[p++]}return new fi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sg=new Ce,Ua=new fE,xl=new ap,og=new F,yl=new F,Sl=new F,Ml=new F,tf=new F,El=new F,lg=new F,bl=new F;class oi extends en{constructor(t=new Vi,n=new Jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){El.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(tf.fromBufferAttribute(h,t),s?El.addScaledVector(tf,d):El.addScaledVector(tf.sub(n),d))}n.add(El)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),Ua.copy(t.ray).recast(t.near),!(xl.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(xl,og)===null||Ua.origin.distanceToSquared(og)>(t.far-t.near)**2))&&(sg.copy(r).invert(),Ua.copy(t.ray).applyMatrix4(sg),!(i.boundingBox!==null&&Ua.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ua)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,y=f.length;x<y;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=_;v<A;v+=3){const D=o.getX(v),C=o.getX(v+1),L=o.getX(v+2);a=Tl(this,u,t,i,c,d,h,D,C,L),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,u=y;m<u;m+=3){const g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);a=Tl(this,s,t,i,c,d,h,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=f.length;x<y;x++){const m=f[x],u=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=_;v<A;v+=3){const D=v,C=v+1,L=v+2;a=Tl(this,u,t,i,c,d,h,D,C,L),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,u=y;m<u;m+=3){const g=m,_=m+1,v=m+2;a=Tl(this,s,t,i,c,d,h,g,_,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function SE(e,t,n,i,a,r,s,o){let l;if(t.side===hn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ma,o),l===null)return null;bl.copy(o),bl.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(bl);return c<n.near||c>n.far?null:{distance:c,point:bl.clone(),object:e}}function Tl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,yl),e.getVertexPosition(l,Sl),e.getVertexPosition(c,Ml);const d=SE(e,t,n,i,yl,Sl,Ml,lg);if(d){const h=new F;Zn.getBarycoord(lg,yl,Sl,Ml,h),a&&(d.uv=Zn.getInterpolatedAttribute(a,o,l,c,h,new $t)),r&&(d.uv1=Zn.getInterpolatedAttribute(r,o,l,c,h,new $t)),s&&(d.normal=Zn.getInterpolatedAttribute(s,o,l,c,h,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Zn.getNormal(yl,Sl,Ml,f.normal),d.face=f,d.barycoord=h}return d}class Ms extends Vi{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,t,s,r,0),x("z","y","x",1,-1,i,n,-t,s,r,1),x("x","z","y",1,1,t,i,n,a,s,2),x("x","z","y",1,-1,t,i,-n,a,s,3),x("x","y","z",1,-1,t,n,i,a,r,4),x("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(h,2));function x(y,m,u,g,_,v,A,D,C,L,T){const E=v/C,N=A/L,G=v/2,R=A/2,V=D/2,j=C+1,P=L+1;let W=0,B=0;const tt=new F;for(let rt=0;rt<P;rt++){const _t=rt*N-R;for(let Ot=0;Ot<j;Ot++){const ne=Ot*E-G;tt[y]=ne*g,tt[m]=_t*_,tt[u]=V,c.push(tt.x,tt.y,tt.z),tt[y]=0,tt[m]=0,tt[u]=D>0?1:-1,d.push(tt.x,tt.y,tt.z),h.push(Ot/C),h.push(1-rt/L),W+=1}}for(let rt=0;rt<L;rt++)for(let _t=0;_t<C;_t++){const Ot=f+_t+j*rt,ne=f+_t+j*(rt+1),Zt=f+(_t+1)+j*(rt+1),Xt=f+(_t+1)+j*rt;l.push(Ot,ne,Xt),l.push(ne,Zt,Xt),B+=6}o.addGroup(p,B,T),p+=B,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function an(e){const t={};for(let n=0;n<e.length;n++){const i=hs(e[n]);for(const a in i)t[a]=i[a]}return t}function ME(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ex(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const EE={clone:hs,merge:an};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends Xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=ME(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nx extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new F,cg=new $t,ug=new $t;class bn extends nx{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=qd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qd*2*Math.atan(Math.tan(Nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,n){return this.getViewBounds(t,cg,ug),n.subVectors(ug,cg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Nu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sr=-90,Mr=1;class AE extends en{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new bn(Sr,Mr,t,n);a.layers=this.layers,this.add(a);const r=new bn(Sr,Mr,t,n);r.layers=this.layers,this.add(r);const s=new bn(Sr,Mr,t,n);s.layers=this.layers,this.add(s);const o=new bn(Sr,Mr,t,n);o.layers=this.layers,this.add(o);const l=new bn(Sr,Mr,t,n);l.layers=this.layers,this.add(l);const c=new bn(Sr,Mr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,a),t.render(n,d),t.setRenderTarget(h,f,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ix extends pn{constructor(t=[],n=us,i,a,r,s,o,l,c,d){super(t,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RE extends nr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new ix(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ms(5,5,5),r=new Ea({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:_a});r.uniforms.tEquirect.value=n;const s=new oi(a,r),o=n.minFilter;return n.minFilter===ka&&(n.minFilter=ri),new AE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class Al extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const y of t.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Al;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class CE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const nf=new F,DE=new F,UE=new It;class Ba{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=nf.subVectors(i,n).cross(DE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(nf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||UE.getNormalMatrix(t),a=this.coplanarPoint(nf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const La=new ap,LE=new $t(.5,.5),Rl=new F;class rp{constructor(t=new Ba,n=new Ba,i=new Ba,a=new Ba,r=new Ba,s=new Ba){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=si,i=!1){const a=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],p=r[7],x=r[8],y=r[9],m=r[10],u=r[11],g=r[12],_=r[13],v=r[14],A=r[15];if(a[0].setComponents(c-s,p-d,u-x,A-g).normalize(),a[1].setComponents(c+s,p+d,u+x,A+g).normalize(),a[2].setComponents(c+o,p+h,u+y,A+_).normalize(),a[3].setComponents(c-o,p-h,u-y,A-_).normalize(),i)a[4].setComponents(l,f,m,v).normalize(),a[5].setComponents(c-l,p-f,u-m,A-v).normalize();else if(a[4].setComponents(c-l,p-f,u-m,A-v).normalize(),n===si)a[5].setComponents(c+l,p+f,u+m,A+v).normalize();else if(n===Ac)a[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),La.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(La)}intersectsSprite(t){La.center.set(0,0,0);const n=LE.distanceTo(t.center);return La.radius=.7071067811865476+n,La.applyMatrix4(t.matrixWorld),this.intersectsSphere(La)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Rl.x=a.normal.x>0?t.max.x:t.min.x,Rl.y=a.normal.y>0?t.max.y:t.min.y,Rl.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ax extends pn{constructor(t,n,i=er,a,r,s,o=Jn,l=Jn,c,d=Mo,h=1){if(d!==Mo&&d!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:h};super(f,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ip(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class rx extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yc extends Vi{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,f=n/l,p=[],x=[],y=[],m=[];for(let u=0;u<d;u++){const g=u*f-s;for(let _=0;_<c;_++){const v=_*h-r;x.push(v,-g,0),y.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const _=g+c*u,v=g+c*(u+1),A=g+1+c*(u+1),D=g+1+c*u;p.push(_,v,D),p.push(v,A,D)}this.setIndex(p),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class sp extends Vi{constructor(t=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],h=new F,f=new F,p=[],x=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let v=0;u===0&&s===0?v=.5/n:u===i&&l===Math.PI&&(v=-.5/n);for(let A=0;A<=n;A++){const D=A/n;h.x=-t*Math.cos(a+D*r)*Math.sin(s+_*o),h.y=t*Math.cos(s+_*o),h.z=t*Math.sin(a+D*r)*Math.sin(s+_*o),x.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(D+v,1-_),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=d[u][g+1],v=d[u][g],A=d[u+1][g],D=d[u+1][g+1];(u!==0||s>0)&&p.push(_,v,D),(u!==i-1||l<Math.PI)&&p.push(v,A,D)}this.setIndex(p),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class op extends Vi{constructor(t=1,n=.4,i=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:r},i=Math.floor(i),a=Math.floor(a);const s=[],o=[],l=[],c=[],d=new F,h=new F,f=new F;for(let p=0;p<=i;p++)for(let x=0;x<=a;x++){const y=x/a*r,m=p/i*Math.PI*2;h.x=(t+n*Math.cos(m))*Math.cos(y),h.y=(t+n*Math.cos(m))*Math.sin(y),h.z=n*Math.sin(m),o.push(h.x,h.y,h.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(x/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=a;x++){const y=(a+1)*p+x-1,m=(a+1)*(p-1)+x-1,u=(a+1)*(p-1)+x,g=(a+1)*p+x;s.push(y,m,g),s.push(m,u,g)}this.setIndex(s),this.setAttribute("position",new Dn(o,3)),this.setAttribute("normal",new Dn(l,3)),this.setAttribute("uv",new Dn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class NE extends Xo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jv,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class OE extends Xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PE extends Xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lp extends en{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const af=new Ce,fg=new F,dg=new F;class sx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;fg.setFromMatrixPosition(t.matrixWorld),n.position.copy(fg),dg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(dg),n.updateMatrixWorld(),af.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hg=new Ce,Bs=new F,rf=new F;class zE extends sx{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,a=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Bs),rf.copy(i.position),rf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(rf),i.updateMatrixWorld(),a.makeTranslation(-Bs.x,-Bs.y,-Bs.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg,i.coordinateSystem,i.reversedDepth)}}class IE extends lp{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new zE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ox extends nx{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BE extends sx{constructor(){super(new ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class FE extends lp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class HE extends lp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GE extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function pg(e,t,n,i){const a=VE(i);switch(n){case Vv:return e*t;case Wv:return e*t/a.components*a.byteLength;case tp:return e*t/a.components*a.byteLength;case Xv:return e*t*2/a.components*a.byteLength;case ep:return e*t*2/a.components*a.byteLength;case kv:return e*t*3/a.components*a.byteLength;case Kn:return e*t*4/a.components*a.byteLength;case np:return e*t*4/a.components*a.byteLength;case Wl:case Xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jl:case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sd:case Ed:return Math.max(e,16)*Math.max(t,8)/4;case yd:case Md:return Math.max(e,8)*Math.max(t,8)/2;case bd:case Td:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ad:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Od:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Gd:case Vd:case kd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Wd:case Xd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case jd:case Yd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VE(e){switch(e){case di:case Bv:return{byteLength:1,components:1};case yo:case Fv:case Go:return{byteLength:2,components:1};case Jh:case $h:return{byteLength:2,components:4};case er:case Qh:case Ni:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lx(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function kE(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],y=h[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const y=h[p];e.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ib=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ST=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:WE,alphahash_pars_fragment:XE,alphamap_fragment:jE,alphamap_pars_fragment:YE,alphatest_fragment:qE,alphatest_pars_fragment:ZE,aomap_fragment:KE,aomap_pars_fragment:QE,batching_pars_vertex:JE,batching_vertex:$E,begin_vertex:tb,beginnormal_vertex:eb,bsdfs:nb,iridescence_fragment:ib,bumpmap_pars_fragment:ab,clipping_planes_fragment:rb,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:ob,clipping_planes_vertex:lb,color_fragment:cb,color_pars_fragment:ub,color_pars_vertex:fb,color_vertex:db,common:hb,cube_uv_reflection_fragment:pb,defaultnormal_vertex:mb,displacementmap_pars_vertex:gb,displacementmap_vertex:_b,emissivemap_fragment:vb,emissivemap_pars_fragment:xb,colorspace_fragment:yb,colorspace_pars_fragment:Sb,envmap_fragment:Mb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:bb,envmap_pars_vertex:Tb,envmap_physical_pars_fragment:zb,envmap_vertex:Ab,fog_vertex:Rb,fog_pars_vertex:wb,fog_fragment:Cb,fog_pars_fragment:Db,gradientmap_pars_fragment:Ub,lightmap_pars_fragment:Lb,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Pb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Bb,lights_phong_fragment:Fb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Vb,lights_fragment_begin:kb,lights_fragment_maps:Wb,lights_fragment_end:Xb,logdepthbuf_fragment:jb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Zb,map_fragment:Kb,map_pars_fragment:Qb,map_particle_fragment:Jb,map_particle_pars_fragment:$b,metalnessmap_fragment:t1,metalnessmap_pars_fragment:e1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:a1,morphtarget_pars_vertex:r1,morphtarget_vertex:s1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:f1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:_1,packing:v1,premultiplied_alpha_fragment:x1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:A1,shadowmap_vertex:R1,shadowmask_pars_fragment:w1,skinbase_vertex:C1,skinning_pars_vertex:D1,skinning_vertex:U1,skinnormal_vertex:L1,specularmap_fragment:N1,specularmap_pars_fragment:O1,tonemapping_fragment:P1,tonemapping_pars_fragment:z1,transmission_fragment:I1,transmission_pars_fragment:B1,uv_pars_fragment:F1,uv_pars_vertex:H1,uv_vertex:G1,worldpos_vertex:V1,background_vert:k1,background_frag:W1,backgroundCube_vert:X1,backgroundCube_frag:j1,cube_vert:Y1,cube_frag:q1,depth_vert:Z1,depth_frag:K1,distanceRGBA_vert:Q1,distanceRGBA_frag:J1,equirect_vert:$1,equirect_frag:tT,linedashed_vert:eT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:aT,meshlambert_vert:rT,meshlambert_frag:sT,meshmatcap_vert:oT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:dT,meshphysical_vert:hT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:yT,sprite_vert:ST,sprite_frag:MT},lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},ni={basic:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:an([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:an([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:an([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:an([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:an([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:an([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:an([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:an([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:an([lt.common,lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:an([lt.lights,lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const wl={r:0,b:0,g:0},Na=new hi,ET=new Ce;function bT(e,t,n,i,a,r,s){const o=new Jt(0);let l=r===!0?0:1,c,d,h=null,f=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function y(_){let v=!1;const A=x(_);A===null?u(o,l):A&&A.isColor&&(u(A,1),v=!0);const D=e.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){const A=x(v);A&&(A.isCubeTexture||A.mapping===jc)?(d===void 0&&(d=new oi(new Ms(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:hs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Na.copy(v.backgroundRotation),Na.x*=-1,Na.y*=-1,Na.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Na.y*=-1,Na.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ET.makeRotationFromEuler(Na)),d.material.toneMapped=Qt.getTransfer(A.colorSpace)!==oe,(h!==A||f!==A.version||p!==e.toneMapping)&&(d.material.needsUpdate=!0,h=A,f=A.version,p=e.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new oi(new Yc(2,2),new Ea({name:"BackgroundMaterial",uniforms:hs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(wl,ex(e)),i.buffers.color.setClear(wl.r,wl.g,wl.b,v,s)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:y,addToRenderList:m,dispose:g}}function TT(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(E,N,G,R,V){let j=!1;const P=h(R,G,N);r!==P&&(r=P,c(r.object)),j=p(E,R,G,V),j&&x(E,R,G,V),V!==null&&t.update(V,e.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,v(E,N,G,R),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return e.createVertexArray()}function c(E){return e.bindVertexArray(E)}function d(E){return e.deleteVertexArray(E)}function h(E,N,G){const R=G.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let j=V[N.id];j===void 0&&(j={},V[N.id]=j);let P=j[R];return P===void 0&&(P=f(l()),j[R]=P),P}function f(E){const N=[],G=[],R=[];for(let V=0;V<n;V++)N[V]=0,G[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:R,object:E,attributes:{},index:null}}function p(E,N,G,R){const V=r.attributes,j=N.attributes;let P=0;const W=G.getAttributes();for(const B in W)if(W[B].location>=0){const rt=V[B];let _t=j[B];if(_t===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),rt===void 0||rt.attribute!==_t||_t&&rt.data!==_t.data)return!0;P++}return r.attributesNum!==P||r.index!==R}function x(E,N,G,R){const V={},j=N.attributes;let P=0;const W=G.getAttributes();for(const B in W)if(W[B].location>=0){let rt=j[B];rt===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor));const _t={};_t.attribute=rt,rt&&rt.data&&(_t.data=rt.data),V[B]=_t,P++}r.attributes=V,r.attributesNum=P,r.index=R}function y(){const E=r.newAttributes;for(let N=0,G=E.length;N<G;N++)E[N]=0}function m(E){u(E,0)}function u(E,N){const G=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;G[E]=1,R[E]===0&&(e.enableVertexAttribArray(E),R[E]=1),V[E]!==N&&(e.vertexAttribDivisor(E,N),V[E]=N)}function g(){const E=r.newAttributes,N=r.enabledAttributes;for(let G=0,R=N.length;G<R;G++)N[G]!==E[G]&&(e.disableVertexAttribArray(G),N[G]=0)}function _(E,N,G,R,V,j,P){P===!0?e.vertexAttribIPointer(E,N,G,V,j):e.vertexAttribPointer(E,N,G,R,V,j)}function v(E,N,G,R){y();const V=R.attributes,j=G.getAttributes(),P=N.defaultAttributeValues;for(const W in j){const B=j[W];if(B.location>=0){let tt=V[W];if(tt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),tt!==void 0){const rt=tt.normalized,_t=tt.itemSize,Ot=t.get(tt);if(Ot===void 0)continue;const ne=Ot.buffer,Zt=Ot.type,Xt=Ot.bytesPerElement,Z=Zt===e.INT||Zt===e.UNSIGNED_INT||tt.gpuType===Qh;if(tt.isInterleavedBufferAttribute){const $=tt.data,pt=$.stride,Lt=tt.offset;if($.isInstancedInterleavedBuffer){for(let bt=0;bt<B.locationSize;bt++)u(B.location+bt,$.meshPerAttribute);E.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let bt=0;bt<B.locationSize;bt++)m(B.location+bt);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let bt=0;bt<B.locationSize;bt++)_(B.location+bt,_t/B.locationSize,Zt,rt,pt*Xt,(Lt+_t/B.locationSize*bt)*Xt,Z)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)u(B.location+$,tt.meshPerAttribute);E.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<B.locationSize;$++)m(B.location+$);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let $=0;$<B.locationSize;$++)_(B.location+$,_t/B.locationSize,Zt,rt,_t*Xt,_t/B.locationSize*$*Xt,Z)}}else if(P!==void 0){const rt=P[W];if(rt!==void 0)switch(rt.length){case 2:e.vertexAttrib2fv(B.location,rt);break;case 3:e.vertexAttrib3fv(B.location,rt);break;case 4:e.vertexAttrib4fv(B.location,rt);break;default:e.vertexAttrib1fv(B.location,rt)}}}}g()}function A(){L();for(const E in i){const N=i[E];for(const G in N){const R=N[G];for(const V in R)d(R[V].object),delete R[V];delete N[G]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const N=i[E.id];for(const G in N){const R=N[G];for(const V in R)d(R[V].object),delete R[V];delete N[G]}delete i[E.id]}function C(E){for(const N in i){const G=i[N];if(G[E.id]===void 0)continue;const R=G[E.id];for(const V in R)d(R[V].object),delete R[V];delete G[E.id]}}function L(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function AT(e,t,n){let i;function a(c){i=c}function r(c,d){e.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,h){h!==0&&(e.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let x=0;for(let y=0;y<h;y++)x+=d[y]*f[y];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function RT(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==Kn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==di&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ni&&!L)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,D=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:D}}function wT(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new Ba,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||a;return a=f,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=e.get(h);if(!a||x===null||x.length===0||r&&!m)r?d(null):c();else{const g=r?0:i,_=g*4;let v=u.clippingState||null;l.value=v,v=d(x,f,_,p);for(let A=0;A!==_;++A)v[A]=n[A];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,p,x){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const u=p+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==y;++_,v+=4)s.copy(h[_]).applyMatrix4(g,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function CT(e){let t=new WeakMap;function n(s,o){return o===gd?s.mapping=us:o===_d&&(s.mapping=fs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===gd||o===_d)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new RE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Gr=4,mg=[.125,.215,.35,.446,.526,.582],Ga=20,sf=new ox,gg=new Jt;let of=null,lf=0,cf=0,uf=!1;const Fa=(1+Math.sqrt(5))/2,Er=1/Fa,_g=[new F(-Fa,Er,0),new F(Fa,Er,0),new F(-Er,0,Fa),new F(Er,0,Fa),new F(0,Fa,-Er),new F(0,Fa,Er),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],DT=new F;class vg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=DT}=r;of=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(of,lf,cf),this._renderer.xr.enabled=uf,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),of=this._renderer.getRenderTarget(),lf=this._renderer.getActiveCubeFace(),cf=this._renderer.getActiveMipmapLevel(),uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Go,format:Kn,colorSpace:ds,depthBuffer:!1},a=xg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UT(r)),this._blurMaterial=LT(r,t,n)}return a}_compileMaterial(t){const n=new oi(this._lodPlanes[0],t);this._renderer.compile(n,sf)}_sceneToCubeUV(t,n,i,a,r){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(gg),h.toneMapping=va,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null));const y=new Jv({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new oi(new Ms,y);let u=!1;const g=t.background;g?g.isColor&&(y.color.copy(g),t.background=null,u=!0):(y.color.copy(gg),u=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[_]));const A=this._cubeSize;Cl(a,v*A,_>2?A:0,A,A),h.setRenderTarget(a),u&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=g}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===us||t.mapping===fs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,sf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_g[(a-r-1)%_g.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new oi(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ga-1),y=r/x,m=isFinite(r)?1+Math.floor(d*y):Ga;m>Ga&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ga}`);const u=[];let g=0;for(let C=0;C<Ga;++C){const L=C/y,T=Math.exp(-L*L/2);u.push(T),C===0?g+=T:C<m&&(g+=2*T)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const v=this._sizeLods[a],A=3*v*(a>_-Gr?a-_+Gr:0),D=4*(this._cubeSize-v);Cl(n,A,D,3*v,2*v),l.setRenderTarget(n),l.render(h,sf)}}function UT(e){const t=[],n=[],i=[];let a=e;const r=e-Gr+1+mg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Gr?l=mg[s-e+Gr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,y=3,m=2,u=1,g=new Float32Array(y*x*p),_=new Float32Array(m*x*p),v=new Float32Array(u*x*p);for(let D=0;D<p;D++){const C=D%3*2/3-1,L=D>2?0:-1,T=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];g.set(T,y*x*D),_.set(f,m*x*D);const E=[D,D,D,D,D,D];v.set(E,u*x*D)}const A=new Vi;A.setAttribute("position",new fi(g,y)),A.setAttribute("uv",new fi(_,m)),A.setAttribute("faceIndex",new fi(v,u)),t.push(A),a>Gr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function xg(e,t,n){const i=new nr(e,t,n);return i.texture.mapping=jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function LT(e,t,n){const i=new Float32Array(Ga),a=new F(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function yg(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Sg(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NT(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gd||l===_d,d=l===us||l===fs;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new vg(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&a(p)?(n===null&&(n=new vg(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function OT(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function PT(e,t,n,i){const a={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let _=0,v=g.length;_<v;_+=3){const A=g[_+0],D=g[_+1],C=g[_+2];f.push(A,D,D,C,C,A)}}else if(x!==void 0){const g=x.array;y=x.version;for(let _=0,v=g.length/3-1;_<v;_+=3){const A=_+0,D=_+1,C=_+2;f.push(A,D,D,C,C,A)}}else return;const m=new(qv(f)?tx:$v)(f,1);m.version=y;const u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function zT(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,x){x!==0&&(e.drawElementsInstanced(i,p,r,f*s,x),n.update(p,i,x))}function d(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let m=0;for(let u=0;u<x;u++)m+=p[u];n.update(m,i,1)}function h(f,p,x,y){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,y,0,x);let u=0;for(let g=0;g<x;g++)u+=p[g]*y[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function IT(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function BT(e,t,n){const i=new WeakMap,a=new ue;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let E=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,D=1;A>t.maxTextureSize&&(D=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*D*4*h),L=new Zv(C,A,D,h);L.type=Ni,L.needsUpdate=!0;const T=v*4;for(let N=0;N<h;N++){const G=u[N],R=g[N],V=_[N],j=A*D*4*N;for(let P=0;P<G.count;P++){const W=P*T;x===!0&&(a.fromBufferAttribute(G,P),C[j+W+0]=a.x,C[j+W+1]=a.y,C[j+W+2]=a.z,C[j+W+3]=0),y===!0&&(a.fromBufferAttribute(R,P),C[j+W+4]=a.x,C[j+W+5]=a.y,C[j+W+6]=a.z,C[j+W+7]=0),m===!0&&(a.fromBufferAttribute(V,P),C[j+W+8]=a.x,C[j+W+9]=a.y,C[j+W+10]=a.z,C[j+W+11]=V.itemSize===4?a.w:1)}}f={count:h,texture:L,size:new $t(A,D)},i.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function FT(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,h=t.get(l,d);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const cx=new pn,Mg=new ax(1,1),ux=new Zv,fx=new cE,dx=new ix,Eg=[],bg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Rg=new Float32Array(4);function Es(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Eg[a];if(r===void 0&&(r=new Float32Array(a),Eg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Fe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function He(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function qc(e,t){let n=bg[t];n===void 0&&(n=new Int32Array(t),bg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function HT(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function GT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2fv(this.addr,t),He(n,t)}}function VT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fe(n,t))return;e.uniform3fv(this.addr,t),He(n,t)}}function kT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4fv(this.addr,t),He(n,t)}}function WT(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Rg.set(i),e.uniformMatrix2fv(this.addr,!1,Rg),He(n,i)}}function XT(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Ag.set(i),e.uniformMatrix3fv(this.addr,!1,Ag),He(n,i)}}function jT(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Tg.set(i),e.uniformMatrix4fv(this.addr,!1,Tg),He(n,i)}}function YT(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function qT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2iv(this.addr,t),He(n,t)}}function ZT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3iv(this.addr,t),He(n,t)}}function KT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4iv(this.addr,t),He(n,t)}}function QT(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function JT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2uiv(this.addr,t),He(n,t)}}function $T(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3uiv(this.addr,t),He(n,t)}}function t2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4uiv(this.addr,t),He(n,t)}}function e2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Mg.compareFunction=Yv,r=Mg):r=cx,n.setTexture2D(t||r,a)}function n2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||fx,a)}function i2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||dx,a)}function a2(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||ux,a)}function r2(e){switch(e){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return YT;case 35667:case 35671:return qT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return a2}}function s2(e,t){e.uniform1fv(this.addr,t)}function o2(e,t){const n=Es(t,this.size,2);e.uniform2fv(this.addr,n)}function l2(e,t){const n=Es(t,this.size,3);e.uniform3fv(this.addr,n)}function c2(e,t){const n=Es(t,this.size,4);e.uniform4fv(this.addr,n)}function u2(e,t){const n=Es(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function f2(e,t){const n=Es(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function d2(e,t){const n=Es(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function h2(e,t){e.uniform1iv(this.addr,t)}function p2(e,t){e.uniform2iv(this.addr,t)}function m2(e,t){e.uniform3iv(this.addr,t)}function g2(e,t){e.uniform4iv(this.addr,t)}function _2(e,t){e.uniform1uiv(this.addr,t)}function v2(e,t){e.uniform2uiv(this.addr,t)}function x2(e,t){e.uniform3uiv(this.addr,t)}function y2(e,t){e.uniform4uiv(this.addr,t)}function S2(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||cx,r[s])}function M2(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||fx,r[s])}function E2(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||dx,r[s])}function b2(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||ux,r[s])}function T2(e){switch(e){case 5126:return s2;case 35664:return o2;case 35665:return l2;case 35666:return c2;case 35674:return u2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return _2;case 36294:return v2;case 36295:return x2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return b2}}class A2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=r2(n.type)}}class R2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=T2(n.type)}}class w2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function wg(e,t){e.seq.push(t),e.map[t.id]=t}function C2(e,t,n){const i=e.name,a=i.length;for(ff.lastIndex=0;;){const r=ff.exec(i),s=ff.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){wg(n,c===void 0?new A2(o,e,t):new R2(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new w2(o),wg(n,h)),n=h}}}class ql{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);C2(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function Cg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const D2=37297;let U2=0;function L2(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const Dg=new It;function N2(e){Qt._getMatrix(Dg,Qt.workingColorSpace,e);const t=`mat3( ${Dg.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case Tc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ug(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+L2(e.getShaderSource(t),o)}else return r}function O2(e,t){const n=N2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function P2(e,t){let n;switch(t){case IM:n="Linear";break;case BM:n="Reinhard";break;case FM:n="Cineon";break;case HM:n="ACESFilmic";break;case VM:n="AgX";break;case kM:n="Neutral";break;case GM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new F;function z2(){Qt.getLuminanceCoefficients(Dl);const e=Dl.x.toFixed(4),t=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function B2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function F2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function ks(e){return e!==""}function Lg(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(e){return e.replace(H2,V2)}const G2=new Map;function V2(e,t){let n=Ft[t];if(n===void 0){const i=G2.get(t);if(i!==void 0)n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Zd(n)}const k2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(e){return e.replace(k2,W2)}function W2(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Pg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Pv?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===zv?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function j2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function q2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Kh:t="ENVMAP_BLENDING_MULTIPLY";break;case PM:t="ENVMAP_BLENDING_MIX";break;case zM:t="ENVMAP_BLENDING_ADD";break}return t}function Z2(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function K2(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=X2(n),c=j2(n),d=Y2(n),h=q2(n),f=Z2(n),p=I2(n),x=B2(r),y=a.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ks).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ks).join(`
`),u.length>0&&(u+=`
`)):(m=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),u=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==va?"#define TONE_MAPPING":"",n.toneMapping!==va?Ft.tonemapping_pars_fragment:"",n.toneMapping!==va?P2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,O2("linearToOutputTexel",n.outputColorSpace),z2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`)),s=Zd(s),s=Lg(s,n),s=Ng(s,n),o=Zd(o),o=Lg(o,n),o=Ng(o,n),s=Og(s),o=Og(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=g+m+s,v=g+u+o,A=Cg(a,a.VERTEX_SHADER,_),D=Cg(a,a.FRAGMENT_SHADER,v);a.attachShader(y,A),a.attachShader(y,D),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function C(N){if(e.debug.checkShaderErrors){const G=a.getProgramInfoLog(y)||"",R=a.getShaderInfoLog(A)||"",V=a.getShaderInfoLog(D)||"",j=G.trim(),P=R.trim(),W=V.trim();let B=!0,tt=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(B=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,y,A,D);else{const rt=Ug(a,A,"vertex"),_t=Ug(a,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+rt+`
`+_t)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(P===""||W==="")&&(tt=!1);tt&&(N.diagnostics={runnable:B,programLog:j,vertexShader:{log:P,prefix:m},fragmentShader:{log:W,prefix:u}})}a.deleteShader(A),a.deleteShader(D),L=new ql(a,y),T=F2(a,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(y,D2)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U2++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=D,this}let Q2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new $2(t),n.set(t,i)),i}}class $2{constructor(t){this.id=Q2++,this.code=t,this.usedTimes=0}}function tA(e,t,n,i,a,r,s){const o=new Kv,l=new J2,c=new Set,d=[],h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,N,G,R){const V=G.fog,j=R.geometry,P=T.isMeshStandardMaterial?G.environment:null,W=(T.isMeshStandardMaterial?n:t).get(T.envMap||P),B=W&&W.mapping===jc?W.image.height:null,tt=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=rt!==void 0?rt.length:0;let Ot=0;j.morphAttributes.position!==void 0&&(Ot=1),j.morphAttributes.normal!==void 0&&(Ot=2),j.morphAttributes.color!==void 0&&(Ot=3);let ne,Zt,Xt,Z;if(tt){const ie=ni[tt];ne=ie.vertexShader,Zt=ie.fragmentShader}else ne=T.vertexShader,Zt=T.fragmentShader,l.update(T),Xt=l.getVertexShaderID(T),Z=l.getFragmentShaderID(T);const $=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Lt=R.isInstancedMesh===!0,bt=R.isBatchedMesh===!0,Yt=!!T.map,Ke=!!T.matcap,U=!!W,_e=!!T.aoMap,Pt=!!T.lightMap,Dt=!!T.bumpMap,vt=!!T.normalMap,ve=!!T.displacementMap,xt=!!T.emissiveMap,Bt=!!T.metalnessMap,Ge=!!T.roughnessMap,De=T.anisotropy>0,w=T.clearcoat>0,S=T.dispersion>0,H=T.iridescence>0,q=T.sheen>0,J=T.transmission>0,Y=De&&!!T.anisotropyMap,Et=w&&!!T.clearcoatMap,st=w&&!!T.clearcoatNormalMap,yt=w&&!!T.clearcoatRoughnessMap,St=H&&!!T.iridescenceMap,it=H&&!!T.iridescenceThicknessMap,ft=q&&!!T.sheenColorMap,wt=q&&!!T.sheenRoughnessMap,Mt=!!T.specularMap,ct=!!T.specularColorMap,zt=!!T.specularIntensityMap,O=J&&!!T.transmissionMap,at=J&&!!T.thicknessMap,ot=!!T.gradientMap,ht=!!T.alphaMap,et=T.alphaTest>0,Q=!!T.alphaHash,gt=!!T.extensions;let Nt=va;T.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=e.toneMapping);const he={shaderID:tt,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:Zt,defines:T.defines,customVertexShaderID:Xt,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:bt,batchingColor:bt&&R._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&R.instanceColor!==null,instancingMorph:Lt&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?e.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ds,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:Ke,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:B,aoMap:_e,lightMap:Pt,bumpMap:Dt,normalMap:vt,displacementMap:f&&ve,emissiveMap:xt,normalMapObjectSpace:vt&&T.normalMapType===YM,normalMapTangentSpace:vt&&T.normalMapType===jv,metalnessMap:Bt,roughnessMap:Ge,anisotropy:De,anisotropyMap:Y,clearcoat:w,clearcoatMap:Et,clearcoatNormalMap:st,clearcoatRoughnessMap:yt,dispersion:S,iridescence:H,iridescenceMap:St,iridescenceThicknessMap:it,sheen:q,sheenColorMap:ft,sheenRoughnessMap:wt,specularMap:Mt,specularColorMap:ct,specularIntensityMap:zt,transmission:J,transmissionMap:O,thicknessMap:at,gradientMap:ot,opaque:T.transparent===!1&&T.blending===Kr&&T.alphaToCoverage===!1,alphaMap:ht,alphaTest:et,alphaHash:Q,combine:T.combine,mapUv:Yt&&y(T.map.channel),aoMapUv:_e&&y(T.aoMap.channel),lightMapUv:Pt&&y(T.lightMap.channel),bumpMapUv:Dt&&y(T.bumpMap.channel),normalMapUv:vt&&y(T.normalMap.channel),displacementMapUv:ve&&y(T.displacementMap.channel),emissiveMapUv:xt&&y(T.emissiveMap.channel),metalnessMapUv:Bt&&y(T.metalnessMap.channel),roughnessMapUv:Ge&&y(T.roughnessMap.channel),anisotropyMapUv:Y&&y(T.anisotropyMap.channel),clearcoatMapUv:Et&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:it&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:wt&&y(T.sheenRoughnessMap.channel),specularMapUv:Mt&&y(T.specularMap.channel),specularColorMapUv:ct&&y(T.specularColorMap.channel),specularIntensityMapUv:zt&&y(T.specularIntensityMap.channel),transmissionMapUv:O&&y(T.transmissionMap.channel),thicknessMapUv:at&&y(T.thicknessMap.channel),alphaMapUv:ht&&y(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(vt||De),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!j.attributes.uv&&(Yt||ht),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:R.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===oe,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ri,flipSided:T.side===hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const N in T.defines)E.push(N),E.push(T.defines[N]);return T.isRawShaderMaterial===!1&&(g(E,T),_(E,T),E.push(e.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function _(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const E=x[T.type];let N;if(E){const G=ni[E];N=EE.clone(G.uniforms)}else N=T.uniforms;return N}function A(T,E){let N;for(let G=0,R=d.length;G<R;G++){const V=d[G];if(V.cacheKey===E){N=V,++N.usedTimes;break}}return N===void 0&&(N=new K2(e,E,T,r),d.push(N)),N}function D(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function C(T){l.remove(T)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:D,releaseShaderCache:C,programs:d,dispose:L}}function eA(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function nA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function zg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ig(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(h,f,p,x,y,m){let u=e[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:y,group:m},e[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=y,u.group=m),t++,u}function o(h,f,p,x,y,m){const u=s(h,f,p,x,y,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(h,f,p,x,y,m){const u=s(h,f,p,x,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||nA),i.length>1&&i.sort(f||zg),a.length>1&&a.sort(f||zg)}function d(){for(let h=t,f=e.length;h<f;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function iA(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Ig,e.set(i,[s])):a>=r.length?(s=new Ig,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function aA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new Jt};break;case"SpotLight":n={position:new F,direction:new F,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new F,halfWidth:new F,halfHeight:new F};break}return e[t.id]=n,n}}}function rA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let sA=0;function oA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lA(e){const t=new aA,n=rA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const a=new F,r=new Ce,s=new Ce;function o(c){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,y=0,m=0,u=0,g=0,_=0,v=0,A=0,D=0,C=0;c.sort(oA);for(let T=0,E=c.length;T<E;T++){const N=c[T],G=N.color,R=N.intensity,V=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=G.r*R,h+=G.g*R,f+=G.b*R;else if(N.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(N.sh.coefficients[P],R);C++}else if(N.isDirectionalLight){const P=t.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const W=N.shadow,B=n.get(N);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=N.shadow.matrix,g++}i.directional[p]=P,p++}else if(N.isSpotLight){const P=t.get(N);P.position.setFromMatrixPosition(N.matrixWorld),P.color.copy(G).multiplyScalar(R),P.distance=V,P.coneCos=Math.cos(N.angle),P.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),P.decay=N.decay,i.spot[y]=P;const W=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,W.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[y]=W.matrix,N.castShadow){const B=n.get(N);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=j,v++}y++}else if(N.isRectAreaLight){const P=t.get(N);P.color.copy(G).multiplyScalar(R),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=P,m++}else if(N.isPointLight){const P=t.get(N);if(P.color.copy(N.color).multiplyScalar(N.intensity),P.distance=N.distance,P.decay=N.decay,N.castShadow){const W=N.shadow,B=n.get(N);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,i.pointShadow[x]=B,i.pointShadowMap[x]=j,i.pointShadowMatrix[x]=N.shadow.matrix,_++}i.point[x]=P,x++}else if(N.isHemisphereLight){const P=t.get(N);P.skyColor.copy(N.color).multiplyScalar(R),P.groundColor.copy(N.groundColor).multiplyScalar(R),i.hemi[u]=P,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==x||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==g||L.numPointShadows!==_||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,L.directionalLength=p,L.pointLength=x,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=g,L.numPointShadows=_,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=C,i.version=sA++)}function l(c,d){let h=0,f=0,p=0,x=0,y=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),h++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(_.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Bg(e){const t=new lA(e),n=[],i=[];function a(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function s(d){i.push(d)}function o(){t.setup(n)}function l(d){t.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function cA(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Bg(e),t.set(a,[o])):r>=s.length?(o=new Bg(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dA(e,t,n){let i=new rp;const a=new $t,r=new $t,s=new ue,o=new OE({depthPacking:jM}),l=new PE,c={},d=n.maxTextureSize,h={[Ma]:hn,[hn]:Ma,[Ri]:Ri},f=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:uA,fragmentShader:fA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Vi;x.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new oi(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pv;let u=this.type;this.render=function(D,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=e.getRenderTarget(),E=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),G=e.state;G.setBlending(_a),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const R=u!==Ti&&this.type===Ti,V=u===Ti&&this.type!==Ti;for(let j=0,P=D.length;j<P;j++){const W=D[j],B=W.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const tt=B.getFrameExtents();if(a.multiply(tt),r.copy(B.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/tt.x),a.x=r.x*tt.x,B.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/tt.y),a.y=r.y*tt.y,B.mapSize.y=r.y)),B.map===null||R===!0||V===!0){const _t=this.type!==Ti?{minFilter:Jn,magFilter:Jn}:{};B.map!==null&&B.map.dispose(),B.map=new nr(a.x,a.y,_t),B.map.texture.name=W.name+".shadowMap",B.camera.updateProjectionMatrix()}e.setRenderTarget(B.map),e.clear();const rt=B.getViewportCount();for(let _t=0;_t<rt;_t++){const Ot=B.getViewport(_t);s.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),G.viewport(s),B.updateMatrices(W,_t),i=B.getFrustum(),v(C,L,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===Ti&&g(B,L),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(T,E,N)};function g(D,C){const L=t.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new nr(a.x,a.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,e.setRenderTarget(D.mapPass),e.clear(),e.renderBufferDirect(C,null,L,f,y,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,e.setRenderTarget(D.map),e.clear(),e.renderBufferDirect(C,null,L,p,y,null)}function _(D,C,L,T){let E=null;const N=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=E.uuid,R=C.uuid;let V=c[G];V===void 0&&(V={},c[G]=V);let j=V[R];j===void 0&&(j=E.clone(),V[R]=j,C.addEventListener("dispose",A)),E=j}if(E.visible=C.visible,E.wireframe=C.wireframe,T===Ti?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:h[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=e.properties.get(E);G.light=L}return E}function v(D,C,L,T,E){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Ti)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const R=t.update(D),V=D.material;if(Array.isArray(V)){const j=R.groups;for(let P=0,W=j.length;P<W;P++){const B=j[P],tt=V[B.materialIndex];if(tt&&tt.visible){const rt=_(D,tt,T,E);D.onBeforeShadow(e,D,C,L,R,rt,B),e.renderBufferDirect(L,null,R,rt,D,B),D.onAfterShadow(e,D,C,L,R,rt,B)}}}else if(V.visible){const j=_(D,V,T,E);D.onBeforeShadow(e,D,C,L,R,j,null),e.renderBufferDirect(L,null,R,j,D,null),D.onAfterShadow(e,D,C,L,R,j,null)}}const G=D.children;for(let R=0,V=G.length;R<V;R++)v(G[R],C,L,T,E)}function A(D){D.target.removeEventListener("dispose",A);for(const L in c){const T=c[L],E=D.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const hA={[cd]:ud,[fd]:pd,[dd]:md,[cs]:hd,[ud]:cd,[pd]:fd,[md]:dd,[hd]:cs};function pA(e,t){function n(){let O=!1;const at=new ue;let ot=null;const ht=new ue(0,0,0,0);return{setMask:function(et){ot!==et&&!O&&(e.colorMask(et,et,et,et),ot=et)},setLocked:function(et){O=et},setClear:function(et,Q,gt,Nt,he){he===!0&&(et*=Nt,Q*=Nt,gt*=Nt),at.set(et,Q,gt,Nt),ht.equals(at)===!1&&(e.clearColor(et,Q,gt,Nt),ht.copy(at))},reset:function(){O=!1,ot=null,ht.set(-1,0,0,0)}}}function i(){let O=!1,at=!1,ot=null,ht=null,et=null;return{setReversed:function(Q){if(at!==Q){const gt=t.get("EXT_clip_control");Q?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),at=Q;const Nt=et;et=null,this.setClear(Nt)}},getReversed:function(){return at},setTest:function(Q){Q?$(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(Q){ot!==Q&&!O&&(e.depthMask(Q),ot=Q)},setFunc:function(Q){if(at&&(Q=hA[Q]),ht!==Q){switch(Q){case cd:e.depthFunc(e.NEVER);break;case ud:e.depthFunc(e.ALWAYS);break;case fd:e.depthFunc(e.LESS);break;case cs:e.depthFunc(e.LEQUAL);break;case dd:e.depthFunc(e.EQUAL);break;case hd:e.depthFunc(e.GEQUAL);break;case pd:e.depthFunc(e.GREATER);break;case md:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ht=Q}},setLocked:function(Q){O=Q},setClear:function(Q){et!==Q&&(at&&(Q=1-Q),e.clearDepth(Q),et=Q)},reset:function(){O=!1,ot=null,ht=null,et=null,at=!1}}}function a(){let O=!1,at=null,ot=null,ht=null,et=null,Q=null,gt=null,Nt=null,he=null;return{setTest:function(ie){O||(ie?$(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ie){at!==ie&&!O&&(e.stencilMask(ie),at=ie)},setFunc:function(ie,gi,ti){(ot!==ie||ht!==gi||et!==ti)&&(e.stencilFunc(ie,gi,ti),ot=ie,ht=gi,et=ti)},setOp:function(ie,gi,ti){(Q!==ie||gt!==gi||Nt!==ti)&&(e.stencilOp(ie,gi,ti),Q=ie,gt=gi,Nt=ti)},setLocked:function(ie){O=ie},setClear:function(ie){he!==ie&&(e.clearStencil(ie),he=ie)},reset:function(){O=!1,at=null,ot=null,ht=null,et=null,Q=null,gt=null,Nt=null,he=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],x=null,y=!1,m=null,u=null,g=null,_=null,v=null,A=null,D=null,C=new Jt(0,0,0),L=0,T=!1,E=null,N=null,G=null,R=null,V=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,W=0;const B=e.getParameter(e.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=W>=2);let tt=null,rt={};const _t=e.getParameter(e.SCISSOR_BOX),Ot=e.getParameter(e.VIEWPORT),ne=new ue().fromArray(_t),Zt=new ue().fromArray(Ot);function Xt(O,at,ot,ht){const et=new Uint8Array(4),Q=e.createTexture();e.bindTexture(O,Q),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<ot;gt++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,ht,0,e.RGBA,e.UNSIGNED_BYTE,et):e.texImage2D(at+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,et);return Q}const Z={};Z[e.TEXTURE_2D]=Xt(e.TEXTURE_2D,e.TEXTURE_2D,1),Z[e.TEXTURE_CUBE_MAP]=Xt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[e.TEXTURE_2D_ARRAY]=Xt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Z[e.TEXTURE_3D]=Xt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),$(e.DEPTH_TEST),s.setFunc(cs),Dt(!1),vt(Gm),$(e.CULL_FACE),_e(_a);function $(O){d[O]!==!0&&(e.enable(O),d[O]=!0)}function pt(O){d[O]!==!1&&(e.disable(O),d[O]=!1)}function Lt(O,at){return h[O]!==at?(e.bindFramebuffer(O,at),h[O]=at,O===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=at),O===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=at),!0):!1}function bt(O,at){let ot=p,ht=!1;if(O){ot=f.get(at),ot===void 0&&(ot=[],f.set(at,ot));const et=O.textures;if(ot.length!==et.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let Q=0,gt=et.length;Q<gt;Q++)ot[Q]=e.COLOR_ATTACHMENT0+Q;ot.length=et.length,ht=!0}}else ot[0]!==e.BACK&&(ot[0]=e.BACK,ht=!0);ht&&e.drawBuffers(ot)}function Yt(O){return x!==O?(e.useProgram(O),x=O,!0):!1}const Ke={[Ha]:e.FUNC_ADD,[vM]:e.FUNC_SUBTRACT,[xM]:e.FUNC_REVERSE_SUBTRACT};Ke[yM]=e.MIN,Ke[SM]=e.MAX;const U={[MM]:e.ZERO,[EM]:e.ONE,[bM]:e.SRC_COLOR,[od]:e.SRC_ALPHA,[DM]:e.SRC_ALPHA_SATURATE,[wM]:e.DST_COLOR,[AM]:e.DST_ALPHA,[TM]:e.ONE_MINUS_SRC_COLOR,[ld]:e.ONE_MINUS_SRC_ALPHA,[CM]:e.ONE_MINUS_DST_COLOR,[RM]:e.ONE_MINUS_DST_ALPHA,[UM]:e.CONSTANT_COLOR,[LM]:e.ONE_MINUS_CONSTANT_COLOR,[NM]:e.CONSTANT_ALPHA,[OM]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(O,at,ot,ht,et,Q,gt,Nt,he,ie){if(O===_a){y===!0&&(pt(e.BLEND),y=!1);return}if(y===!1&&($(e.BLEND),y=!0),O!==_M){if(O!==m||ie!==T){if((u!==Ha||v!==Ha)&&(e.blendEquation(e.FUNC_ADD),u=Ha,v=Ha),ie)switch(O){case Kr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vm:e.blendFunc(e.ONE,e.ONE);break;case km:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wm:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Kr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Vm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case km:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}g=null,_=null,A=null,D=null,C.set(0,0,0),L=0,m=O,T=ie}return}et=et||at,Q=Q||ot,gt=gt||ht,(at!==u||et!==v)&&(e.blendEquationSeparate(Ke[at],Ke[et]),u=at,v=et),(ot!==g||ht!==_||Q!==A||gt!==D)&&(e.blendFuncSeparate(U[ot],U[ht],U[Q],U[gt]),g=ot,_=ht,A=Q,D=gt),(Nt.equals(C)===!1||he!==L)&&(e.blendColor(Nt.r,Nt.g,Nt.b,he),C.copy(Nt),L=he),m=O,T=!1}function Pt(O,at){O.side===Ri?pt(e.CULL_FACE):$(e.CULL_FACE);let ot=O.side===hn;at&&(ot=!ot),Dt(ot),O.blending===Kr&&O.transparent===!1?_e(_a):_e(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const ht=O.stencilWrite;o.setTest(ht),ht&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(O){E!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),E=O)}function vt(O){O!==mM?($(e.CULL_FACE),O!==N&&(O===Gm?e.cullFace(e.BACK):O===gM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),N=O}function ve(O){O!==G&&(P&&e.lineWidth(O),G=O)}function xt(O,at,ot){O?($(e.POLYGON_OFFSET_FILL),(R!==at||V!==ot)&&(e.polygonOffset(at,ot),R=at,V=ot)):pt(e.POLYGON_OFFSET_FILL)}function Bt(O){O?$(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function Ge(O){O===void 0&&(O=e.TEXTURE0+j-1),tt!==O&&(e.activeTexture(O),tt=O)}function De(O,at,ot){ot===void 0&&(tt===null?ot=e.TEXTURE0+j-1:ot=tt);let ht=rt[ot];ht===void 0&&(ht={type:void 0,texture:void 0},rt[ot]=ht),(ht.type!==O||ht.texture!==at)&&(tt!==ot&&(e.activeTexture(ot),tt=ot),e.bindTexture(O,at||Z[O]),ht.type=O,ht.texture=at)}function w(){const O=rt[tt];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{e.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{e.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{e.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{e.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{e.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{e.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{e.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{e.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(O){ne.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function wt(O){Zt.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),Zt.copy(O))}function Mt(O,at){let ot=c.get(at);ot===void 0&&(ot=new WeakMap,c.set(at,ot));let ht=ot.get(O);ht===void 0&&(ht=e.getUniformBlockIndex(at,O.name),ot.set(O,ht))}function ct(O,at){const ht=c.get(at).get(O);l.get(at)!==ht&&(e.uniformBlockBinding(at,ht,O.__bindingPointIndex),l.set(at,ht))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},tt=null,rt={},h={},f=new WeakMap,p=[],x=null,y=!1,m=null,u=null,g=null,_=null,v=null,A=null,D=null,C=new Jt(0,0,0),L=0,T=!1,E=null,N=null,G=null,R=null,V=null,ne.set(0,0,e.canvas.width,e.canvas.height),Zt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:$,disable:pt,bindFramebuffer:Lt,drawBuffers:bt,useProgram:Yt,setBlending:_e,setMaterial:Pt,setFlipSided:Dt,setCullFace:vt,setLineWidth:ve,setPolygonOffset:xt,setScissorTest:Bt,activeTexture:Ge,bindTexture:De,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:H,texImage2D:St,texImage3D:it,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:yt,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:ft,viewport:wt,reset:zt}}function mA(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,S){return p?new OffscreenCanvas(w,S):Rc("canvas")}function y(w,S,H){let q=1;const J=De(w);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(q*J.width),Et=Math.floor(q*J.height);h===void 0&&(h=x(Y,Et));const st=S?x(Y,Et):h;return st.width=Y,st.height=Et,st.getContext("2d").drawImage(w,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Et+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function u(w){e.generateMipmap(w)}function g(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(w,S,H,q,J=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=S;if(S===e.RED&&(H===e.FLOAT&&(Y=e.R32F),H===e.HALF_FLOAT&&(Y=e.R16F),H===e.UNSIGNED_BYTE&&(Y=e.R8)),S===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.R8UI),H===e.UNSIGNED_SHORT&&(Y=e.R16UI),H===e.UNSIGNED_INT&&(Y=e.R32UI),H===e.BYTE&&(Y=e.R8I),H===e.SHORT&&(Y=e.R16I),H===e.INT&&(Y=e.R32I)),S===e.RG&&(H===e.FLOAT&&(Y=e.RG32F),H===e.HALF_FLOAT&&(Y=e.RG16F),H===e.UNSIGNED_BYTE&&(Y=e.RG8)),S===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RG8UI),H===e.UNSIGNED_SHORT&&(Y=e.RG16UI),H===e.UNSIGNED_INT&&(Y=e.RG32UI),H===e.BYTE&&(Y=e.RG8I),H===e.SHORT&&(Y=e.RG16I),H===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),H===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),H===e.UNSIGNED_INT&&(Y=e.RGB32UI),H===e.BYTE&&(Y=e.RGB8I),H===e.SHORT&&(Y=e.RGB16I),H===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),H===e.UNSIGNED_INT&&(Y=e.RGBA32UI),H===e.BYTE&&(Y=e.RGBA8I),H===e.SHORT&&(Y=e.RGBA16I),H===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(H===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){const Et=J?Tc:Qt.getTransfer(q);H===e.FLOAT&&(Y=e.RGBA32F),H===e.HALF_FLOAT&&(Y=e.RGBA16F),H===e.UNSIGNED_BYTE&&(Y=Et===oe?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(w,S){let H;return w?S===null||S===er||S===So?H=e.DEPTH24_STENCIL8:S===Ni?H=e.DEPTH32F_STENCIL8:S===yo&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===er||S===So?H=e.DEPTH_COMPONENT24:S===Ni?H=e.DEPTH_COMPONENT32F:S===yo&&(H=e.DEPTH_COMPONENT16),H}function A(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jn&&w.minFilter!==ri?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function D(w){const S=w.target;S.removeEventListener("dispose",D),L(S),S.isVideoTexture&&d.delete(S)}function C(w){const S=w.target;S.removeEventListener("dispose",C),E(S)}function L(w){const S=i.get(w);if(S.__webglInit===void 0)return;const H=w.source,q=f.get(H);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(w),Object.keys(q).length===0&&f.delete(H)}i.remove(w)}function T(w){const S=i.get(w);e.deleteTexture(S.__webglTexture);const H=w.source,q=f.get(H);delete q[S.__cacheKey],s.memory.textures--}function E(w){const S=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)e.deleteFramebuffer(S.__webglFramebuffer[q][J]);else e.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)e.deleteFramebuffer(S.__webglFramebuffer[q]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=w.textures;for(let q=0,J=H.length;q<J;q++){const Y=i.get(H[q]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(H[q])}i.remove(w)}let N=0;function G(){N=0}function R(){const w=N;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),N+=1,w}function V(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function j(w,S){const H=i.get(w);if(w.isVideoTexture&&Bt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,w,S);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+S)}function P(w,S){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Z(H,w,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+S)}function W(w,S){const H=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Z(H,w,S);return}n.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+S)}function B(w,S){const H=i.get(w);if(w.version>0&&H.__version!==w.version){$(H,w,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+S)}const tt={[vd]:e.REPEAT,[Va]:e.CLAMP_TO_EDGE,[xd]:e.MIRRORED_REPEAT},rt={[Jn]:e.NEAREST,[WM]:e.NEAREST_MIPMAP_NEAREST,[cl]:e.NEAREST_MIPMAP_LINEAR,[ri]:e.LINEAR,[Lu]:e.LINEAR_MIPMAP_NEAREST,[ka]:e.LINEAR_MIPMAP_LINEAR},_t={[qM]:e.NEVER,[tE]:e.ALWAYS,[ZM]:e.LESS,[Yv]:e.LEQUAL,[KM]:e.EQUAL,[$M]:e.GEQUAL,[QM]:e.GREATER,[JM]:e.NOTEQUAL};function Ot(w,S){if(S.type===Ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ri||S.magFilter===Lu||S.magFilter===cl||S.magFilter===ka||S.minFilter===ri||S.minFilter===Lu||S.minFilter===cl||S.minFilter===ka)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,tt[S.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,tt[S.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,tt[S.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,rt[S.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,rt[S.minFilter]),S.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jn||S.minFilter!==cl&&S.minFilter!==ka||S.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ne(w,S){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",D));const q=S.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const Y=V(S);if(Y!==w.__cacheKey){J[Y]===void 0&&(J[Y]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,H=!0),J[Y].usedTimes++;const Et=J[w.__cacheKey];Et!==void 0&&(J[w.__cacheKey].usedTimes--,Et.usedTimes===0&&T(S)),w.__cacheKey=Y,w.__webglTexture=J[Y].texture}return H}function Zt(w,S,H){return Math.floor(Math.floor(w/H)/S)}function Xt(w,S,H,q){const Y=w.updateRanges;if(Y.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,H,q,S.data);else{Y.sort((it,ft)=>it.start-ft.start);let Et=0;for(let it=1;it<Y.length;it++){const ft=Y[Et],wt=Y[it],Mt=ft.start+ft.count,ct=Zt(wt.start,S.width,4),zt=Zt(ft.start,S.width,4);wt.start<=Mt+1&&ct===zt&&Zt(wt.start+wt.count-1,S.width,4)===ct?ft.count=Math.max(ft.count,wt.start+wt.count-ft.start):(++Et,Y[Et]=wt)}Y.length=Et+1;const st=e.getParameter(e.UNPACK_ROW_LENGTH),yt=e.getParameter(e.UNPACK_SKIP_PIXELS),St=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let it=0,ft=Y.length;it<ft;it++){const wt=Y[it],Mt=Math.floor(wt.start/4),ct=Math.ceil(wt.count/4),zt=Mt%S.width,O=Math.floor(Mt/S.width),at=ct,ot=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,O),n.texSubImage2D(e.TEXTURE_2D,0,zt,O,at,ot,H,q,S.data)}w.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,St)}}function Z(w,S,H){let q=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=e.TEXTURE_3D);const J=ne(w,S),Y=S.source;n.bindTexture(q,w.__webglTexture,e.TEXTURE0+H);const Et=i.get(Y);if(Y.version!==Et.__version||J===!0){n.activeTexture(e.TEXTURE0+H);const st=Qt.getPrimaries(Qt.workingColorSpace),yt=S.colorSpace===aa?null:Qt.getPrimaries(S.colorSpace),St=S.colorSpace===aa||st===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let it=y(S.image,!1,a.maxTextureSize);it=Ge(S,it);const ft=r.convert(S.format,S.colorSpace),wt=r.convert(S.type);let Mt=_(S.internalFormat,ft,wt,S.colorSpace,S.isVideoTexture);Ot(q,S);let ct;const zt=S.mipmaps,O=S.isVideoTexture!==!0,at=Et.__version===void 0||J===!0,ot=Y.dataReady,ht=A(S,it);if(S.isDepthTexture)Mt=v(S.format===Eo,S.type),at&&(O?n.texStorage2D(e.TEXTURE_2D,1,Mt,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,Mt,it.width,it.height,0,ft,wt,null));else if(S.isDataTexture)if(zt.length>0){O&&at&&n.texStorage2D(e.TEXTURE_2D,ht,Mt,zt[0].width,zt[0].height);for(let et=0,Q=zt.length;et<Q;et++)ct=zt[et],O?ot&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ct.width,ct.height,ft,wt,ct.data):n.texImage2D(e.TEXTURE_2D,et,Mt,ct.width,ct.height,0,ft,wt,ct.data);S.generateMipmaps=!1}else O?(at&&n.texStorage2D(e.TEXTURE_2D,ht,Mt,it.width,it.height),ot&&Xt(S,it,ft,wt)):n.texImage2D(e.TEXTURE_2D,0,Mt,it.width,it.height,0,ft,wt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){O&&at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ht,Mt,zt[0].width,zt[0].height,it.depth);for(let et=0,Q=zt.length;et<Q;et++)if(ct=zt[et],S.format!==Kn)if(ft!==null)if(O){if(ot)if(S.layerUpdates.size>0){const gt=pg(ct.width,ct.height,S.format,S.type);for(const Nt of S.layerUpdates){const he=ct.data.subarray(Nt*gt/ct.data.BYTES_PER_ELEMENT,(Nt+1)*gt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Nt,ct.width,ct.height,1,ft,he)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ct.width,ct.height,it.depth,ft,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,Mt,ct.width,ct.height,it.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,ct.width,ct.height,it.depth,ft,wt,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,Mt,ct.width,ct.height,it.depth,0,ft,wt,ct.data)}else{O&&at&&n.texStorage2D(e.TEXTURE_2D,ht,Mt,zt[0].width,zt[0].height);for(let et=0,Q=zt.length;et<Q;et++)ct=zt[et],S.format!==Kn?ft!==null?O?ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,ct.width,ct.height,ft,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,et,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ot&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ct.width,ct.height,ft,wt,ct.data):n.texImage2D(e.TEXTURE_2D,et,Mt,ct.width,ct.height,0,ft,wt,ct.data)}else if(S.isDataArrayTexture)if(O){if(at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ht,Mt,it.width,it.height,it.depth),ot)if(S.layerUpdates.size>0){const et=pg(it.width,it.height,S.format,S.type);for(const Q of S.layerUpdates){const gt=it.data.subarray(Q*et/it.data.BYTES_PER_ELEMENT,(Q+1)*et/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,ft,wt,gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,wt,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Mt,it.width,it.height,it.depth,0,ft,wt,it.data);else if(S.isData3DTexture)O?(at&&n.texStorage3D(e.TEXTURE_3D,ht,Mt,it.width,it.height,it.depth),ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,wt,it.data)):n.texImage3D(e.TEXTURE_3D,0,Mt,it.width,it.height,it.depth,0,ft,wt,it.data);else if(S.isFramebufferTexture){if(at)if(O)n.texStorage2D(e.TEXTURE_2D,ht,Mt,it.width,it.height);else{let et=it.width,Q=it.height;for(let gt=0;gt<ht;gt++)n.texImage2D(e.TEXTURE_2D,gt,Mt,et,Q,0,ft,wt,null),et>>=1,Q>>=1}}else if(zt.length>0){if(O&&at){const et=De(zt[0]);n.texStorage2D(e.TEXTURE_2D,ht,Mt,et.width,et.height)}for(let et=0,Q=zt.length;et<Q;et++)ct=zt[et],O?ot&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,wt,ct):n.texImage2D(e.TEXTURE_2D,et,Mt,ft,wt,ct);S.generateMipmaps=!1}else if(O){if(at){const et=De(it);n.texStorage2D(e.TEXTURE_2D,ht,Mt,et.width,et.height)}ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,wt,it)}else n.texImage2D(e.TEXTURE_2D,0,Mt,ft,wt,it);m(S)&&u(q),Et.__version=Y.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function $(w,S,H){if(S.image.length!==6)return;const q=ne(w,S),J=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+H);const Y=i.get(J);if(J.version!==Y.__version||q===!0){n.activeTexture(e.TEXTURE0+H);const Et=Qt.getPrimaries(Qt.workingColorSpace),st=S.colorSpace===aa?null:Qt.getPrimaries(S.colorSpace),yt=S.colorSpace===aa||Et===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const St=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let Q=0;Q<6;Q++)!St&&!it?ft[Q]=y(S.image[Q],!0,a.maxCubemapSize):ft[Q]=it?S.image[Q].image:S.image[Q],ft[Q]=Ge(S,ft[Q]);const wt=ft[0],Mt=r.convert(S.format,S.colorSpace),ct=r.convert(S.type),zt=_(S.internalFormat,Mt,ct,S.colorSpace),O=S.isVideoTexture!==!0,at=Y.__version===void 0||q===!0,ot=J.dataReady;let ht=A(S,wt);Ot(e.TEXTURE_CUBE_MAP,S);let et;if(St){O&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,zt,wt.width,wt.height);for(let Q=0;Q<6;Q++){et=ft[Q].mipmaps;for(let gt=0;gt<et.length;gt++){const Nt=et[gt];S.format!==Kn?Mt!==null?O?ot&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,Nt.width,Nt.height,Mt,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,Nt.width,Nt.height,Mt,ct,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,zt,Nt.width,Nt.height,0,Mt,ct,Nt.data)}}}else{if(et=S.mipmaps,O&&at){et.length>0&&ht++;const Q=De(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ht,zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){O?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ft[Q].width,ft[Q].height,Mt,ct,ft[Q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,zt,ft[Q].width,ft[Q].height,0,Mt,ct,ft[Q].data);for(let gt=0;gt<et.length;gt++){const he=et[gt].image[Q].image;O?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,he.width,he.height,Mt,ct,he.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,zt,he.width,he.height,0,Mt,ct,he.data)}}else{O?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Mt,ct,ft[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,zt,Mt,ct,ft[Q]);for(let gt=0;gt<et.length;gt++){const Nt=et[gt];O?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Mt,ct,Nt.image[Q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,zt,Mt,ct,Nt.image[Q])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),Y.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function pt(w,S,H,q,J,Y){const Et=r.convert(H.format,H.colorSpace),st=r.convert(H.type),yt=_(H.internalFormat,Et,st,H.colorSpace),St=i.get(S),it=i.get(H);if(it.__renderTarget=S,!St.__hasExternalTextures){const ft=Math.max(1,S.width>>Y),wt=Math.max(1,S.height>>Y);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,Y,yt,ft,wt,S.depth,0,Et,st,null):n.texImage2D(J,Y,yt,ft,wt,0,Et,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),xt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,J,it.__webglTexture,0,ve(S)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,J,it.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(w,S,H){if(e.bindRenderbuffer(e.RENDERBUFFER,w),S.depthBuffer){const q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=v(S.stencilBuffer,J),Et=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=ve(S);xt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,Y,S.width,S.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,Y,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Y,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,w)}else{const q=S.textures;for(let J=0;J<q.length;J++){const Y=q[J],Et=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),yt=_(Y.internalFormat,Et,st,Y.colorSpace),St=ve(S);H&&xt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,St,yt,S.width,S.height):xt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,St,yt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,yt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const J=q.__webglTexture,Y=ve(S);if(S.depthTexture.format===Mo)xt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(S.depthTexture.format===Eo)xt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Yt(w){const S=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?bt(S.__webglFramebuffer[0],w):bt(S.__webglFramebuffer,w)}else if(H){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=e.createRenderbuffer(),Lt(S.__webglDepthbuffer[q],w,!1);else{const J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,Y)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Lt(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,Y)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(w,S,H){const q=i.get(w);S!==void 0&&pt(q.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Yt(w)}function U(w){const S=w.texture,H=i.get(w),q=i.get(S);w.addEventListener("dispose",C);const J=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=S.version,s.memory.textures++),Y){H.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[st]=[];for(let yt=0;yt<S.mipmaps.length;yt++)H.__webglFramebuffer[st][yt]=e.createFramebuffer()}else H.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)H.__webglFramebuffer[st]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(Et)for(let st=0,yt=J.length;st<yt;st++){const St=i.get(J[st]);St.__webglTexture===void 0&&(St.__webglTexture=e.createTexture(),s.memory.textures++)}if(w.samples>0&&xt(w)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const yt=J[st];H.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[st]);const St=r.convert(yt.format,yt.colorSpace),it=r.convert(yt.type),ft=_(yt.internalFormat,St,it,yt.colorSpace,w.isXRRenderTarget===!0),wt=ve(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,wt,ft,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,H.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Lt(H.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)pt(H.__webglFramebuffer[st][yt],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt);else pt(H.__webglFramebuffer[st],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let st=0,yt=J.length;st<yt;st++){const St=J[st],it=i.get(St);let ft=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,it.__webglTexture),Ot(ft,St),pt(H.__webglFramebuffer,w,St,e.COLOR_ATTACHMENT0+st,ft,0),m(St)&&u(ft)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,q.__webglTexture),Ot(st,S),S.mipmaps&&S.mipmaps.length>0)for(let yt=0;yt<S.mipmaps.length;yt++)pt(H.__webglFramebuffer[yt],w,S,e.COLOR_ATTACHMENT0,st,yt);else pt(H.__webglFramebuffer,w,S,e.COLOR_ATTACHMENT0,st,0);m(S)&&u(st),n.unbindTexture()}w.depthBuffer&&Yt(w)}function _e(w){const S=w.textures;for(let H=0,q=S.length;H<q;H++){const J=S[H];if(m(J)){const Y=g(w),Et=i.get(J).__webglTexture;n.bindTexture(Y,Et),u(Y),n.unbindTexture()}}}const Pt=[],Dt=[];function vt(w){if(w.samples>0){if(xt(w)===!1){const S=w.textures,H=w.width,q=w.height;let J=e.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(w),st=S.length>1;if(st)for(let St=0;St<S.length;St++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const yt=w.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let St=0;St<S.length;St++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const it=i.get(S[St]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,H,q,0,0,H,q,J,e.NEAREST),l===!0&&(Pt.length=0,Dt.length=0,Pt.push(e.COLOR_ATTACHMENT0+St),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Pt.push(Y),Dt.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<S.length;St++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,Et.__webglColorRenderbuffer[St]);const it=i.get(S[St]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ve(w){return Math.min(a.maxSamples,w.samples)}function xt(w){const S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Bt(w){const S=s.render.frame;d.get(w)!==S&&(d.set(w,S),w.update())}function Ge(w,S){const H=w.colorSpace,q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==ds&&H!==aa&&(Qt.getTransfer(H)===oe?(q!==Kn||J!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=P,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=Ke,this.setupRenderTarget=U,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function gA(e,t){function n(i,a=aa){let r;const s=Qt.getTransfer(a);if(i===di)return e.UNSIGNED_BYTE;if(i===Jh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===$h)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Hv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Gv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bv)return e.BYTE;if(i===Fv)return e.SHORT;if(i===yo)return e.UNSIGNED_SHORT;if(i===Qh)return e.INT;if(i===er)return e.UNSIGNED_INT;if(i===Ni)return e.FLOAT;if(i===Go)return e.HALF_FLOAT;if(i===Vv)return e.ALPHA;if(i===kv)return e.RGB;if(i===Kn)return e.RGBA;if(i===Mo)return e.DEPTH_COMPONENT;if(i===Eo)return e.DEPTH_STENCIL;if(i===Wv)return e.RED;if(i===tp)return e.RED_INTEGER;if(i===Xv)return e.RG;if(i===ep)return e.RG_INTEGER;if(i===np)return e.RGBA_INTEGER;if(i===Wl||i===Xl||i===jl||i===Yl)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yd||i===Sd||i===Md||i===Ed)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bd||i===Td||i===Ad)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bd||i===Td)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ad)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===wd||i===Cd||i===Dd||i===Ud||i===Ld||i===Nd||i===Od||i===Pd||i===zd||i===Id||i===Bd||i===Fd||i===Hd)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Rd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ud)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Od)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Id)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gd||i===Vd||i===kd)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Gd)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wd||i===Xd||i===jd||i===Yd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new rx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ea({vertexShader:_A,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yA extends Ss{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,x=null;const y=typeof XRWebGLBinding<"u",m=new xA,u={},g=n.getContextAttributes();let _=null,v=null;const A=[],D=[],C=new $t;let L=null;const T=new bn;T.viewport=new ue;const E=new bn;E.viewport=new ue;const N=[T,E],G=new GE;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let $=A[Z];return $===void 0&&($=new ef,A[Z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Z){let $=A[Z];return $===void 0&&($=new ef,A[Z]=$),$.getGripSpace()},this.getHand=function(Z){let $=A[Z];return $===void 0&&($=new ef,A[Z]=$),$.getHandSpace()};function j(Z){const $=D.indexOf(Z.inputSource);if($===-1)return;const pt=A[$];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||s),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){a.removeEventListener("select",j),a.removeEventListener("selectstart",j),a.removeEventListener("selectend",j),a.removeEventListener("squeeze",j),a.removeEventListener("squeezestart",j),a.removeEventListener("squeezeend",j),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",W);for(let Z=0;Z<A.length;Z++){const $=D[Z];$!==null&&(D[Z]=null,A[Z].disconnect($))}R=null,V=null,m.reset();for(const Z in u)delete u[Z];t.setRenderTarget(_),p=null,f=null,h=null,a=null,v=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",j),a.addEventListener("selectstart",j),a.addEventListener("selectend",j),a.addEventListener("squeeze",j),a.addEventListener("squeezestart",j),a.addEventListener("squeezeend",j),a.addEventListener("end",P),a.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,bt=null;g.depth&&(bt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=g.stencil?Eo:Mo,Lt=g.stencil?So:er);const Yt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Yt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new nr(f.textureWidth,f.textureHeight,{format:Kn,type:di,depthTexture:new ax(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,pt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new nr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:di,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Xt.setContext(a),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let $=0;$<Z.removed.length;$++){const pt=Z.removed[$],Lt=D.indexOf(pt);Lt>=0&&(D[Lt]=null,A[Lt].disconnect(pt))}for(let $=0;$<Z.added.length;$++){const pt=Z.added[$];let Lt=D.indexOf(pt);if(Lt===-1){for(let Yt=0;Yt<A.length;Yt++)if(Yt>=D.length){D.push(pt),Lt=Yt;break}else if(D[Yt]===null){D[Yt]=pt,Lt=Yt;break}if(Lt===-1)break}const bt=A[Lt];bt&&bt.connect(pt)}}const B=new F,tt=new F;function rt(Z,$,pt){B.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);const Lt=B.distanceTo(tt),bt=$.projectionMatrix.elements,Yt=pt.projectionMatrix.elements,Ke=bt[14]/(bt[10]-1),U=bt[14]/(bt[10]+1),_e=(bt[9]+1)/bt[5],Pt=(bt[9]-1)/bt[5],Dt=(bt[8]-1)/bt[0],vt=(Yt[8]+1)/Yt[0],ve=Ke*Dt,xt=Ke*vt,Bt=Lt/(-Dt+vt),Ge=Bt*-Dt;if($.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ge),Z.translateZ(Bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const De=Ke+Bt,w=U+Bt,S=ve-Ge,H=xt+(Lt-Ge),q=_e*U/w*De,J=Pt*U/w*De;Z.projectionMatrix.makePerspective(S,H,q,J,De,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function _t(Z,$){$===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices($.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let $=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),G.near=E.near=T.near=$,G.far=E.far=T.far=pt,(R!==G.near||V!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),R=G.near,V=G.far),G.layers.mask=Z.layers.mask|6,T.layers.mask=G.layers.mask&3,E.layers.mask=G.layers.mask&5;const Lt=Z.parent,bt=G.cameras;_t(G,Lt);for(let Yt=0;Yt<bt.length;Yt++)_t(bt[Yt],Lt);bt.length===2?rt(G,T,E):G.projectionMatrix.copy(T.projectionMatrix),Ot(Z,G,Lt)};function Ot(Z,$,pt){pt===null?Z.matrix.copy($.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply($.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy($.projectionMatrix),Z.projectionMatrixInverse.copy($.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return u[Z]};let ne=null;function Zt(Z,$){if(d=$.getViewerPose(c||s),x=$,d!==null){const pt=d.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Lt=!1;pt.length!==G.cameras.length&&(G.cameras.length=0,Lt=!0);for(let U=0;U<pt.length;U++){const _e=pt[U];let Pt=null;if(p!==null)Pt=p.getViewport(_e);else{const vt=h.getViewSubImage(f,_e);Pt=vt.viewport,U===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let Dt=N[U];Dt===void 0&&(Dt=new bn,Dt.layers.enable(U),Dt.viewport=new ue,N[U]=Dt),Dt.matrix.fromArray(_e.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(_e.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),U===0&&(G.matrix.copy(Dt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Lt===!0&&G.cameras.push(Dt)}const bt=a.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const U=h.getDepthInformation(pt[0]);U&&U.isValid&&U.texture&&m.init(U,a.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),h=i.getBinding();for(let U=0;U<pt.length;U++){const _e=pt[U].camera;if(_e){let Pt=u[_e];Pt||(Pt=new rx,u[_e]=Pt);const Dt=h.getCameraImage(_e);Pt.sourceTexture=Dt}}}}for(let pt=0;pt<A.length;pt++){const Lt=D[pt],bt=A[pt];Lt!==null&&bt!==void 0&&bt.update(Lt,$,c||s)}ne&&ne(Z,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const Xt=new lx;Xt.setAnimationLoop(Zt),this.setAnimationLoop=function(Z){ne=Z},this.dispose=function(){}}}const Oa=new hi,SA=new Ce;function MA(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,ex(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===hn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===hn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,Oa.copy(v),Oa.x*=-1,Oa.y*=-1,Oa.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oa.y*=-1,Oa.z*=-1),m.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Oa)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===hn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function EA(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=a[g.id];v===void 0&&(x(g),v=d(g),a[g.id]=v,g.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(g,A);const D=t.render.frame;r[g.id]!==D&&(f(g),r[g.id]=D)}function d(g){const _=h();g.__bindingPointIndex=_;const v=e.createBuffer(),A=g.__size,D=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,A,D),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function h(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=a[g.id],v=g.uniforms,A=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let D=0,C=v.length;D<C;D++){const L=Array.isArray(v[D])?v[D]:[v[D]];for(let T=0,E=L.length;T<E;T++){const N=L[T];if(p(N,D,T,A)===!0){const G=N.__offset,R=Array.isArray(N.value)?N.value:[N.value];let V=0;for(let j=0;j<R.length;j++){const P=R[j],W=y(P);typeof P=="number"||typeof P=="boolean"?(N.__data[0]=P,e.bufferSubData(e.UNIFORM_BUFFER,G+V,N.__data)):P.isMatrix3?(N.__data[0]=P.elements[0],N.__data[1]=P.elements[1],N.__data[2]=P.elements[2],N.__data[3]=0,N.__data[4]=P.elements[3],N.__data[5]=P.elements[4],N.__data[6]=P.elements[5],N.__data[7]=0,N.__data[8]=P.elements[6],N.__data[9]=P.elements[7],N.__data[10]=P.elements[8],N.__data[11]=0):(P.toArray(N.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,G,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,A){const D=g.value,C=_+"_"+v;if(A[C]===void 0)return typeof D=="number"||typeof D=="boolean"?A[C]=D:A[C]=D.clone(),!0;{const L=A[C];if(typeof D=="number"||typeof D=="boolean"){if(L!==D)return A[C]=D,!0}else if(L.equals(D)===!1)return L.copy(D),!0}return!1}function x(g){const _=g.uniforms;let v=0;const A=16;for(let C=0,L=_.length;C<L;C++){const T=Array.isArray(_[C])?_[C]:[_[C]];for(let E=0,N=T.length;E<N;E++){const G=T[E],R=Array.isArray(G.value)?G.value:[G.value];for(let V=0,j=R.length;V<j;V++){const P=R[V],W=y(P),B=v%A,tt=B%W.boundary,rt=B+tt;v+=tt,rt!==0&&A-rt<W.storage&&(v+=A-rt),G.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=W.storage}}}const D=v%A;return D>0&&(v+=A-D),g.__size=v,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const g in a)e.deleteBuffer(a[g]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class bA{constructor(t={}){const{canvas:n=nE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=zn;let D=0,C=0,L=null,T=-1,E=null;const N=new ue,G=new ue;let R=null;const V=new Jt(0);let j=0,P=n.width,W=n.height,B=1,tt=null,rt=null;const _t=new ue(0,0,P,W),Ot=new ue(0,0,P,W);let ne=!1;const Zt=new rp;let Xt=!1,Z=!1;const $=new Ce,pt=new F,Lt=new ue,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function Ke(){return L===null?B:1}let U=i;function _e(M,z){return n.getContext(M,z)}try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zh}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",et,!1),U===null){const z="webgl2";if(U=_e(z,M),U===null)throw _e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Pt,Dt,vt,ve,xt,Bt,Ge,De,w,S,H,q,J,Y,Et,st,yt,St,it,ft,wt,Mt,ct,zt;function O(){Pt=new OT(U),Pt.init(),Mt=new gA(U,Pt),Dt=new RT(U,Pt,t,Mt),vt=new pA(U,Pt),Dt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),ve=new IT(U),xt=new eA,Bt=new mA(U,Pt,vt,xt,Dt,Mt,ve),Ge=new CT(v),De=new NT(v),w=new kE(U),ct=new TT(U,w),S=new PT(U,w,ve,ct),H=new FT(U,S,w,ve),it=new BT(U,Dt,Bt),st=new wT(xt),q=new tA(v,Ge,De,Pt,Dt,ct,st),J=new MA(v,xt),Y=new iA,Et=new cA(Pt),St=new bT(v,Ge,De,vt,H,p,l),yt=new dA(v,H,Dt),zt=new EA(U,ve,Dt,vt),ft=new AT(U,Pt,ve),wt=new zT(U,Pt,ve),ve.programs=q.programs,v.capabilities=Dt,v.extensions=Pt,v.properties=xt,v.renderLists=Y,v.shadowMap=yt,v.state=vt,v.info=ve}O();const at=new yA(v,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Pt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Pt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(P,W,!1))},this.getSize=function(M){return M.set(P,W)},this.setSize=function(M,z,k=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=M,W=z,n.width=Math.floor(M*B),n.height=Math.floor(z*B),k===!0&&(n.style.width=M+"px",n.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(P*B,W*B).floor()},this.setDrawingBufferSize=function(M,z,k){P=M,W=z,B=k,n.width=Math.floor(M*k),n.height=Math.floor(z*k),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,z,k,X){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,z,k,X),vt.viewport(N.copy(_t).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(Ot)},this.setScissor=function(M,z,k,X){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,z,k,X),vt.scissor(G.copy(Ot).multiplyScalar(B).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){vt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){tt=M},this.setTransparentSort=function(M){rt=M},this.getClearColor=function(M){return M.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,k=!0){let X=0;if(M){let I=!1;if(L!==null){const nt=L.texture.format;I=nt===np||nt===ep||nt===tp}if(I){const nt=L.texture.type,ut=nt===di||nt===er||nt===yo||nt===So||nt===Jh||nt===$h,mt=St.getClearColor(),dt=St.getClearAlpha(),Rt=mt.r,Ut=mt.g,Tt=mt.b;ut?(x[0]=Rt,x[1]=Ut,x[2]=Tt,x[3]=dt,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Rt,y[1]=Ut,y[2]=Tt,y[3]=dt,U.clearBufferiv(U.COLOR,0,y))}else X|=U.COLOR_BUFFER_BIT}z&&(X|=U.DEPTH_BUFFER_BIT),k&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",et,!1),St.dispose(),Y.dispose(),Et.dispose(),xt.dispose(),Ge.dispose(),De.dispose(),H.dispose(),ct.dispose(),zt.dispose(),q.dispose(),at.dispose(),at.removeEventListener("sessionstart",ti),at.removeEventListener("sessionend",up),Aa.stop()};function ot(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=ve.autoReset,z=yt.enabled,k=yt.autoUpdate,X=yt.needsUpdate,I=yt.type;O(),ve.autoReset=M,yt.enabled=z,yt.autoUpdate=k,yt.needsUpdate=X,yt.type=I}function et(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q(M){const z=M.target;z.removeEventListener("dispose",Q),gt(z)}function gt(M){Nt(M),xt.remove(M)}function Nt(M){const z=xt.get(M).programs;z!==void 0&&(z.forEach(function(k){q.releaseProgram(k)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,k,X,I,nt){z===null&&(z=bt);const ut=I.isMesh&&I.matrixWorld.determinant()<0,mt=hx(M,z,k,X,I);vt.setMaterial(X,ut);let dt=k.index,Rt=1;if(X.wireframe===!0){if(dt=S.getWireframeAttribute(k),dt===void 0)return;Rt=2}const Ut=k.drawRange,Tt=k.attributes.position;let Wt=Ut.start*Rt,se=(Ut.start+Ut.count)*Rt;nt!==null&&(Wt=Math.max(Wt,nt.start*Rt),se=Math.min(se,(nt.start+nt.count)*Rt)),dt!==null?(Wt=Math.max(Wt,0),se=Math.min(se,dt.count)):Tt!=null&&(Wt=Math.max(Wt,0),se=Math.min(se,Tt.count));const Te=se-Wt;if(Te<0||Te===1/0)return;ct.setup(I,X,mt,k,dt);let me,fe=ft;if(dt!==null&&(me=w.get(dt),fe=wt,fe.setIndex(me)),I.isMesh)X.wireframe===!0?(vt.setLineWidth(X.wireframeLinewidth*Ke()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(I.isLine){let At=X.linewidth;At===void 0&&(At=1),vt.setLineWidth(At*Ke()),I.isLineSegments?fe.setMode(U.LINES):I.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else I.isPoints?fe.setMode(U.POINTS):I.isSprite&&fe.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))fe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const At=I._multiDrawStarts,Me=I._multiDrawCounts,Kt=I._multiDrawCount,_n=dt?w.get(dt).bytesPerElement:1,or=xt.get(X).currentProgram.getUniforms();for(let vn=0;vn<Kt;vn++)or.setValue(U,"_gl_DrawID",vn),fe.render(At[vn]/_n,Me[vn])}else if(I.isInstancedMesh)fe.renderInstances(Wt,Te,I.count);else if(k.isInstancedBufferGeometry){const At=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,At);fe.renderInstances(Wt,Te,Me)}else fe.render(Wt,Te)};function he(M,z,k){M.transparent===!0&&M.side===Ri&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,Yo(M,z,k),M.side=Ma,M.needsUpdate=!0,Yo(M,z,k),M.side=Ri):Yo(M,z,k)}this.compile=function(M,z,k=null){k===null&&(k=M),u=Et.get(k),u.init(z),_.push(u),k.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),M!==k&&M.traverseVisible(function(I){I.isLight&&I.layers.test(z.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const X=new Set;return M.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const nt=I.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const mt=nt[ut];he(mt,k,I),X.add(mt)}else he(nt,k,I),X.add(nt)}),u=_.pop(),X},this.compileAsync=function(M,z,k=null){const X=this.compile(M,z,k);return new Promise(I=>{function nt(){if(X.forEach(function(ut){xt.get(ut).currentProgram.isReady()&&X.delete(ut)}),X.size===0){I(M);return}setTimeout(nt,10)}Pt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ie=null;function gi(M){ie&&ie(M)}function ti(){Aa.stop()}function up(){Aa.start()}const Aa=new lx;Aa.setAnimationLoop(gi),typeof self<"u"&&Aa.setContext(self),this.setAnimationLoop=function(M){ie=M,at.setAnimationLoop(M),M===null?Aa.stop():Aa.start()},at.addEventListener("sessionstart",ti),at.addEventListener("sessionend",up),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(z),z=at.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,z,L),u=Et.get(M,_.length),u.init(z),_.push(u),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Zt.setFromProjectionMatrix($,si,z.reversedDepth),Z=this.localClippingEnabled,Xt=st.init(this.clippingPlanes,Z),m=Y.get(M,g.length),m.init(),g.push(m),at.enabled===!0&&at.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Zc(nt,z,-1/0,v.sortObjects)}Zc(M,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,rt),Yt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Yt&&St.addToRenderList(m,M),this.info.render.frame++,Xt===!0&&st.beginShadows();const k=u.state.shadowsArray;yt.render(k,M,z),Xt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,I=m.transmissive;if(u.setupLights(),z.isArrayCamera){const nt=z.cameras;if(I.length>0)for(let ut=0,mt=nt.length;ut<mt;ut++){const dt=nt[ut];dp(X,I,M,dt)}Yt&&St.render(M);for(let ut=0,mt=nt.length;ut<mt;ut++){const dt=nt[ut];fp(m,M,dt,dt.viewport)}}else I.length>0&&dp(X,I,M,z),Yt&&St.render(M),fp(m,M,z);L!==null&&C===0&&(Bt.updateMultisampleRenderTarget(L),Bt.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(v,M,z),ct.resetDefaultState(),T=-1,E=null,_.pop(),_.length>0?(u=_[_.length-1],Xt===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function Zc(M,z,k,X){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Zt.intersectsSprite(M)){X&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4($);const ut=H.update(M),mt=M.material;mt.visible&&m.push(M,ut,mt,k,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Zt.intersectsObject(M))){const ut=H.update(M),mt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Lt.copy(ut.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4($)),Array.isArray(mt)){const dt=ut.groups;for(let Rt=0,Ut=dt.length;Rt<Ut;Rt++){const Tt=dt[Rt],Wt=mt[Tt.materialIndex];Wt&&Wt.visible&&m.push(M,ut,Wt,k,Lt.z,Tt)}}else mt.visible&&m.push(M,ut,mt,k,Lt.z,null)}}const nt=M.children;for(let ut=0,mt=nt.length;ut<mt;ut++)Zc(nt[ut],z,k,X)}function fp(M,z,k,X){const I=M.opaque,nt=M.transmissive,ut=M.transparent;u.setupLightsView(k),Xt===!0&&st.setGlobalState(v.clippingPlanes,k),X&&vt.viewport(N.copy(X)),I.length>0&&jo(I,z,k),nt.length>0&&jo(nt,z,k),ut.length>0&&jo(ut,z,k),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function dp(M,z,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new nr(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Go:di,minFilter:ka,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[X.id],ut=X.viewport||N;nt.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),dt=v.getActiveCubeFace(),Rt=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(V),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&St.render(k);const Ut=v.toneMapping;v.toneMapping=va;const Tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),Xt===!0&&st.setGlobalState(v.clippingPlanes,X),jo(M,k,X),Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let se=0,Te=z.length;se<Te;se++){const me=z[se],fe=me.object,At=me.geometry,Me=me.material,Kt=me.group;if(Me.side===Ri&&fe.layers.test(X.layers)){const _n=Me.side;Me.side=hn,Me.needsUpdate=!0,hp(fe,k,X,At,Me,Kt),Me.side=_n,Me.needsUpdate=!0,Wt=!0}}Wt===!0&&(Bt.updateMultisampleRenderTarget(nt),Bt.updateRenderTargetMipmap(nt))}v.setRenderTarget(mt,dt,Rt),v.setClearColor(V,j),Tt!==void 0&&(X.viewport=Tt),v.toneMapping=Ut}function jo(M,z,k){const X=z.isScene===!0?z.overrideMaterial:null;for(let I=0,nt=M.length;I<nt;I++){const ut=M[I],mt=ut.object,dt=ut.geometry,Rt=ut.group;let Ut=ut.material;Ut.allowOverride===!0&&X!==null&&(Ut=X),mt.layers.test(k.layers)&&hp(mt,z,k,dt,Ut,Rt)}}function hp(M,z,k,X,I,nt){M.onBeforeRender(v,z,k,X,I,nt),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),I.onBeforeRender(v,z,k,X,M,nt),I.transparent===!0&&I.side===Ri&&I.forceSinglePass===!1?(I.side=hn,I.needsUpdate=!0,v.renderBufferDirect(k,z,X,I,M,nt),I.side=Ma,I.needsUpdate=!0,v.renderBufferDirect(k,z,X,I,M,nt),I.side=Ri):v.renderBufferDirect(k,z,X,I,M,nt),M.onAfterRender(v,z,k,X,I,nt)}function Yo(M,z,k){z.isScene!==!0&&(z=bt);const X=xt.get(M),I=u.state.lights,nt=u.state.shadowsArray,ut=I.state.version,mt=q.getParameters(M,I.state,nt,z,k),dt=q.getProgramCacheKey(mt);let Rt=X.programs;X.environment=M.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(M.isMeshStandardMaterial?De:Ge).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",Q),Rt=new Map,X.programs=Rt);let Ut=Rt.get(dt);if(Ut!==void 0){if(X.currentProgram===Ut&&X.lightsStateVersion===ut)return mp(M,mt),Ut}else mt.uniforms=q.getUniforms(M),M.onBeforeCompile(mt,v),Ut=q.acquireProgram(mt,dt),Rt.set(dt,Ut),X.uniforms=mt.uniforms;const Tt=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=st.uniform),mp(M,mt),X.needsLights=mx(M),X.lightsStateVersion=ut,X.needsLights&&(Tt.ambientLightColor.value=I.state.ambient,Tt.lightProbe.value=I.state.probe,Tt.directionalLights.value=I.state.directional,Tt.directionalLightShadows.value=I.state.directionalShadow,Tt.spotLights.value=I.state.spot,Tt.spotLightShadows.value=I.state.spotShadow,Tt.rectAreaLights.value=I.state.rectArea,Tt.ltc_1.value=I.state.rectAreaLTC1,Tt.ltc_2.value=I.state.rectAreaLTC2,Tt.pointLights.value=I.state.point,Tt.pointLightShadows.value=I.state.pointShadow,Tt.hemisphereLights.value=I.state.hemi,Tt.directionalShadowMap.value=I.state.directionalShadowMap,Tt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Tt.spotShadowMap.value=I.state.spotShadowMap,Tt.spotLightMatrix.value=I.state.spotLightMatrix,Tt.spotLightMap.value=I.state.spotLightMap,Tt.pointShadowMap.value=I.state.pointShadowMap,Tt.pointShadowMatrix.value=I.state.pointShadowMatrix),X.currentProgram=Ut,X.uniformsList=null,Ut}function pp(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=ql.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function mp(M,z){const k=xt.get(M);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.batchingColor=z.batchingColor,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.instancingMorph=z.instancingMorph,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function hx(M,z,k,X,I){z.isScene!==!0&&(z=bt),Bt.resetTextureUnits();const nt=z.fog,ut=X.isMeshStandardMaterial?z.environment:null,mt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ds,dt=(X.isMeshStandardMaterial?De:Ge).get(X.envMap||ut),Rt=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ut=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,se=!!k.morphAttributes.color;let Te=va;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Te=v.toneMapping);const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=me!==void 0?me.length:0,At=xt.get(X),Me=u.state.lights;if(Xt===!0&&(Z===!0||M!==E)){const nn=M===E&&X.id===T;st.setState(X,M,nn)}let Kt=!1;X.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Me.state.version||At.outputColorSpace!==mt||I.isBatchedMesh&&At.batching===!1||!I.isBatchedMesh&&At.batching===!0||I.isBatchedMesh&&At.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&At.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&At.instancing===!1||!I.isInstancedMesh&&At.instancing===!0||I.isSkinnedMesh&&At.skinning===!1||!I.isSkinnedMesh&&At.skinning===!0||I.isInstancedMesh&&At.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&At.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&At.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&At.instancingMorph===!1&&I.morphTexture!==null||At.envMap!==dt||X.fog===!0&&At.fog!==nt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==Ut||At.morphTargets!==Tt||At.morphNormals!==Wt||At.morphColors!==se||At.toneMapping!==Te||At.morphTargetsCount!==fe)&&(Kt=!0):(Kt=!0,At.__version=X.version);let _n=At.currentProgram;Kt===!0&&(_n=Yo(X,z,I));let or=!1,vn=!1,bs=!1;const Ee=_n.getUniforms(),Ln=At.uniforms;if(vt.useProgram(_n.program)&&(or=!0,vn=!0,bs=!0),X.id!==T&&(T=X.id,vn=!0),or||E!==M){vt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ee.setValue(U,"projectionMatrix",M.projectionMatrix),Ee.setValue(U,"viewMatrix",M.matrixWorldInverse);const ln=Ee.map.cameraPosition;ln!==void 0&&ln.setValue(U,pt.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,vn=!0,bs=!0)}if(I.isSkinnedMesh){Ee.setOptional(U,I,"bindMatrix"),Ee.setOptional(U,I,"bindMatrixInverse");const nn=I.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ee.setValue(U,"boneTexture",nn.boneTexture,Bt))}I.isBatchedMesh&&(Ee.setOptional(U,I,"batchingTexture"),Ee.setValue(U,"batchingTexture",I._matricesTexture,Bt),Ee.setOptional(U,I,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",I._indirectTexture,Bt),Ee.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",I._colorsTexture,Bt));const Nn=k.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&it.update(I,k,_n),(vn||At.receiveShadow!==I.receiveShadow)&&(At.receiveShadow=I.receiveShadow,Ee.setValue(U,"receiveShadow",I.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ln.envMap.value=dt,Ln.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Ln.envMapIntensity.value=z.environmentIntensity),vn&&(Ee.setValue(U,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&px(Ln,bs),nt&&X.fog===!0&&J.refreshFogUniforms(Ln,nt),J.refreshMaterialUniforms(Ln,X,B,W,u.state.transmissionRenderTarget[M.id]),ql.upload(U,pp(At),Ln,Bt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ql.upload(U,pp(At),Ln,Bt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(U,"center",I.center),Ee.setValue(U,"modelViewMatrix",I.modelViewMatrix),Ee.setValue(U,"normalMatrix",I.normalMatrix),Ee.setValue(U,"modelMatrix",I.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const nn=X.uniformsGroups;for(let ln=0,Kc=nn.length;ln<Kc;ln++){const Ra=nn[ln];zt.update(Ra,_n),zt.bind(Ra,_n)}}return _n}function px(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function mx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,z,k){const X=xt.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),xt.get(M.texture).__webglTexture=z,xt.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:k,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const k=xt.get(M);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0};const gx=U.createFramebuffer();this.setRenderTarget=function(M,z=0,k=0){L=M,D=z,C=k;let X=!0,I=null,nt=!1,ut=!1;if(M){const dt=xt.get(M);if(dt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(dt.__webglFramebuffer===void 0)Bt.setupRenderTarget(M);else if(dt.__hasExternalTextures)Bt.rebindTextures(M,xt.get(M.texture).__webglTexture,xt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Tt=M.depthTexture;if(dt.__boundDepthTexture!==Tt){if(Tt!==null&&xt.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(M)}}const Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const Ut=xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[z])?I=Ut[z][k]:I=Ut[z],nt=!0):M.samples>0&&Bt.useMultisampledRTT(M)===!1?I=xt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?I=Ut[k]:I=Ut,N.copy(M.viewport),G.copy(M.scissor),R=M.scissorTest}else N.copy(_t).multiplyScalar(B).floor(),G.copy(Ot).multiplyScalar(B).floor(),R=ne;if(k!==0&&(I=gx),vt.bindFramebuffer(U.FRAMEBUFFER,I)&&X&&vt.drawBuffers(M,I),vt.viewport(N),vt.scissor(G),vt.setScissorTest(R),nt){const dt=xt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,dt.__webglTexture,k)}else if(ut){const dt=z;for(let Rt=0;Rt<M.textures.length;Rt++){const Ut=xt.get(M.textures[Rt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Rt,Ut.__webglTexture,k,dt)}}else if(M!==null&&k!==0){const dt=xt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dt.__webglTexture,k)}T=-1},this.readRenderTargetPixels=function(M,z,k,X,I,nt,ut,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt){vt.bindFramebuffer(U.FRAMEBUFFER,dt);try{const Rt=M.textures[mt],Ut=Rt.format,Tt=Rt.type;if(!Dt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-X&&k>=0&&k<=M.height-I&&(M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt),U.readPixels(z,k,X,I,Mt.convert(Ut),Mt.convert(Tt),nt))}finally{const Rt=L!==null?xt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,z,k,X,I,nt,ut,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(dt=dt[ut]),dt)if(z>=0&&z<=M.width-X&&k>=0&&k<=M.height-I){vt.bindFramebuffer(U.FRAMEBUFFER,dt);const Rt=M.textures[mt],Ut=Rt.format,Tt=Rt.type;if(!Dt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Wt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt),U.readPixels(z,k,X,I,Mt.convert(Ut),Mt.convert(Tt),0);const se=L!==null?xt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,se);const Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await iE(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(Wt),U.deleteSync(Te),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,k=0){const X=Math.pow(2,-k),I=Math.floor(M.image.width*X),nt=Math.floor(M.image.height*X),ut=z!==null?z.x:0,mt=z!==null?z.y:0;Bt.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,ut,mt,I,nt),vt.unbindTexture()};const _x=U.createFramebuffer(),vx=U.createFramebuffer();this.copyTextureToTexture=function(M,z,k=null,X=null,I=0,nt=null){nt===null&&(I!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=I,I=0):nt=0);let ut,mt,dt,Rt,Ut,Tt,Wt,se,Te;const me=M.isCompressedTexture?M.mipmaps[nt]:M.image;if(k!==null)ut=k.max.x-k.min.x,mt=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,Ut=k.min.y,Tt=k.isBox3?k.min.z:0;else{const Nn=Math.pow(2,-I);ut=Math.floor(me.width*Nn),mt=Math.floor(me.height*Nn),M.isDataArrayTexture?dt=me.depth:M.isData3DTexture?dt=Math.floor(me.depth*Nn):dt=1,Rt=0,Ut=0,Tt=0}X!==null?(Wt=X.x,se=X.y,Te=X.z):(Wt=0,se=0,Te=0);const fe=Mt.convert(z.format),At=Mt.convert(z.type);let Me;z.isData3DTexture?(Bt.setTexture3D(z,0),Me=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Bt.setTexture2DArray(z,0),Me=U.TEXTURE_2D_ARRAY):(Bt.setTexture2D(z,0),Me=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Kt=U.getParameter(U.UNPACK_ROW_LENGTH),_n=U.getParameter(U.UNPACK_IMAGE_HEIGHT),or=U.getParameter(U.UNPACK_SKIP_PIXELS),vn=U.getParameter(U.UNPACK_SKIP_ROWS),bs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,me.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,me.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Tt);const Ee=M.isDataArrayTexture||M.isData3DTexture,Ln=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Nn=xt.get(M),nn=xt.get(z),ln=xt.get(Nn.__renderTarget),Kc=xt.get(nn.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,ln.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kc.__webglFramebuffer);for(let Ra=0;Ra<dt;Ra++)Ee&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.get(M).__webglTexture,I,Tt+Ra),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xt.get(z).__webglTexture,nt,Te+Ra)),U.blitFramebuffer(Rt,Ut,ut,mt,Wt,se,ut,mt,U.DEPTH_BUFFER_BIT,U.NEAREST);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(I!==0||M.isRenderTargetTexture||xt.has(M)){const Nn=xt.get(M),nn=xt.get(z);vt.bindFramebuffer(U.READ_FRAMEBUFFER,_x),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,vx);for(let ln=0;ln<dt;ln++)Ee?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nn.__webglTexture,I,Tt+ln):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nn.__webglTexture,I),Ln?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,nn.__webglTexture,nt,Te+ln):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,nn.__webglTexture,nt),I!==0?U.blitFramebuffer(Rt,Ut,ut,mt,Wt,se,ut,mt,U.COLOR_BUFFER_BIT,U.NEAREST):Ln?U.copyTexSubImage3D(Me,nt,Wt,se,Te+ln,Rt,Ut,ut,mt):U.copyTexSubImage2D(Me,nt,Wt,se,Rt,Ut,ut,mt);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ln?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Me,nt,Wt,se,Te,ut,mt,dt,fe,At,me.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,nt,Wt,se,Te,ut,mt,dt,fe,me.data):U.texSubImage3D(Me,nt,Wt,se,Te,ut,mt,dt,fe,At,me):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,nt,Wt,se,ut,mt,fe,At,me.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,nt,Wt,se,me.width,me.height,fe,me.data):U.texSubImage2D(U.TEXTURE_2D,nt,Wt,se,ut,mt,fe,At,me);U.pixelStorei(U.UNPACK_ROW_LENGTH,Kt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_n),U.pixelStorei(U.UNPACK_SKIP_PIXELS,or),U.pixelStorei(U.UNPACK_SKIP_ROWS,vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bs),nt===0&&z.generateMipmaps&&U.generateMipmap(Me),vt.unbindTexture()},this.initRenderTarget=function(M){xt.get(M).__webglFramebuffer===void 0&&Bt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Bt.setTextureCube(M,0):M.isData3DTexture?Bt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Bt.setTexture2DArray(M,0):Bt.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){D=0,C=0,L=null,vt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}}const br=({modelPath:e,scale:t=1,position:n=[0,0,0],rotation:i=[0,0,0],modelSize:a=2,rotationSpeed:r=.01,showWireframe:s=!1,color:o=4886754,geometry:l="box"})=>{const c=Ae.useRef(null),d=Ae.useRef(null),h=Ae.useRef(null),f=Ae.useRef(null);return Ae.useEffect(()=>{if(!c.current)return;const p=new CE;d.current=p;const x=new bn(75,c.current.clientWidth/c.current.clientHeight,.1,1e3);x.position.set(0,0,5);const y=new bA({alpha:!0,antialias:!0});y.setSize(c.current.clientWidth,c.current.clientHeight),y.setClearColor(0,0),y.shadowMap.enabled=!0,y.shadowMap.type=zv,h.current=y,c.current.appendChild(y.domElement);const m=new HE(16777215,.6);p.add(m);const u=new FE(16777215,.8);u.position.set(10,10,5),u.castShadow=!0,p.add(u);const g=new IE(4886754,.5);g.position.set(-10,-10,-5),p.add(g);let _;switch(l){case"sphere":_=new sp(a,32,32);break;case"torus":_=new op(a,a*.4,16,32);break;default:_=new Ms(a,a,a)}const v=new NE({color:o,transparent:!0,opacity:s?.6:.8,wireframe:s}),A=new oi(_,v);A.position.set(...n),A.rotation.set(...i),A.scale.setScalar(t),A.castShadow=!0,A.receiveShadow=!0,p.add(A);const D=()=>{f.current=requestAnimationFrame(D),A.rotation.x+=r,A.rotation.y+=r*.7,A.rotation.z+=r*.3,A.position.y=n[1]+Math.sin(Date.now()*.001)*.3,y.render(p,x)};D();const C=()=>{c.current&&(x.aspect=c.current.clientWidth/c.current.clientHeight,x.updateProjectionMatrix(),y.setSize(c.current.clientWidth,c.current.clientHeight))};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),f.current&&cancelAnimationFrame(f.current),c.current&&y.domElement&&c.current.removeChild(y.domElement),_.dispose(),v.dispose(),y.dispose()}},[e,t,n,i,a,r,s,o,l]),b.jsx("div",{ref:c,style:{width:"100%",height:"100%",position:"relative"}})};function TA(){const[e,t]=Ae.useState(null),[n,i]=Ae.useState(0),[a,r]=Ae.useState(!1),[s,o]=Ae.useState("all"),[l,c]=Ae.useState(null),[d,h]=Ae.useState(null),[f,p]=Ae.useState({x:100,y:100}),[x,y]=Ae.useState(!1),[m,u]=Ae.useState({x:0,y:0}),[g,_]=Ae.useState(!0),[v,A]=Ae.useState(0),D=[{id:"virtual-soul",title:"Virtual Soul",category:"Digital Art",year:"2024",description:"A series exploring the ethereal essence of identity in digital realms.",software:["photoshop","aftereffects","cinema4d","3dmax","unrealengine"],image:"/Personal-Website/images/1-Virtual%20Soul/image001.jpg",gallery:["/Personal-Website/images/1-Virtual%20Soul/image001.jpg","/Personal-Website/images/1-Virtual%20Soul/image002.jpg","/Personal-Website/images/1-Virtual%20Soul/image003.jpg","/Personal-Website/images/1-Virtual%20Soul/image004.jpg","/Personal-Website/images/1-Virtual%20Soul/image005.jpg","/Personal-Website/images/1-Virtual%20Soul/image006.jpg","/Personal-Website/images/1-Virtual%20Soul/image007.jpg"]},{id:"nether-portal",title:"Nether Portal",category:"Generative Art",year:"2023",description:"Hypnotic tunnels and geometry bending through imaginary space. This project incorporates AI for code generation and image creation.",software:["touchdesigner","aftereffects","photoshop","arduino","ai"],image:"/Personal-Website/images/2-Nether%20Portal/image008.jpg",gallery:["/Personal-Website/images/2-Nether%20Portal/image008.jpg","/Personal-Website/images/2-Nether%20Portal/image009.jpg","/Personal-Website/images/2-Nether%20Portal/image010.jpg","/Personal-Website/images/2-Nether%20Portal/image011.jpg","/Personal-Website/images/2-Nether%20Portal/image013.jpg","/Personal-Website/images/2-Nether%20Portal/image014.jpg"]},{id:"prayer-bloom",title:"Prayer of Wind and Bloom",category:"Interactive Installation",year:"2023",description:"An immersive experience connecting nature and technology. This project combines digital tools with traditional handcraft techniques.",software:["arduino","photoshop"],image:"/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg",gallery:["/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image016.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image017.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image018.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image019.jpg"]},{id:"unnatural-chronologies",title:"Unnatural Chronologies",category:"Video Art",year:"2022",description:"A meditation on time and digital decay through glitch aesthetics.",software:["touchdesigner","aftereffects","photoshop","artivive","blender"],image:"/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg",gallery:["/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image021.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image022.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image023.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image024.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image025.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image026.jpg"]}],C=[{id:"all",name:"All",icon:"🎨"},{id:"photoshop",name:"Photoshop",icon:"🖼️"},{id:"blender",name:"Blender",icon:"🌪️"},{id:"aftereffects",name:"After Effects",icon:"🎬"},{id:"cinema4d",name:"Cinema 4D",icon:"🎭"},{id:"touchdesigner",name:"TouchDesigner",icon:"⚡"},{id:"arduino",name:"Arduino",icon:"🔧"},{id:"3dmax",name:"3D Max",icon:"🏗️"},{id:"unrealengine",name:"Unreal Engine",icon:"🎮"},{id:"ai",name:"AI Tools",icon:"🤖"},{id:"artivive",name:"Artivive",icon:"🔮"}],L=s==="all"?D:D.filter(R=>R.software.includes(s)),T=R=>{a||(r(!0),i(R==="next"?V=>(V+1)%D.length:V=>(V-1+D.length)%D.length),setTimeout(()=>r(!1),800))};Ae.useEffect(()=>{const R=setInterval(()=>{!e&&!a&&T("next")},5e3);return()=>clearInterval(R)},[e,a]);const E=R=>{y(!0);const V=R.target.getBoundingClientRect();u({x:R.clientX-V.left,y:R.clientY-V.top})},N=R=>{x&&p({x:R.clientX-m.x,y:R.clientY-m.y})},G=()=>{y(!1)};return Ae.useEffect(()=>{if(x)return document.addEventListener("mousemove",N),document.addEventListener("mouseup",G),()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",G)}},[x,m]),Ae.useEffect(()=>{const R=setInterval(()=>{A(V=>V>=100?(clearInterval(R),setTimeout(()=>_(!1),300),100):V+Math.random()*25)},50);return()=>clearInterval(R)},[]),g?b.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:9999,color:"white",fontFamily:"'Inter', sans-serif"},children:[b.jsx("div",{style:{marginBottom:"40px",animation:"pulse 2s ease-in-out infinite",transform:`scale(${1+Math.sin(Date.now()/500)*.1})`},children:b.jsx("img",{src:"/Personal-Website/images/logo111.svg",alt:"OYXR Logo",style:{width:"100px",height:"100px",filter:"invert(1)",opacity:.9,backgroundColor:"white",borderRadius:"50%",padding:"15px",border:"3px solid rgba(255,255,255,0.8)",boxShadow:"0 0 30px rgba(255,255,255,0.3)"}})}),b.jsx("div",{style:{fontSize:"2rem",fontWeight:"300",color:"white",letterSpacing:"0.2em",marginBottom:"30px",fontFamily:"'Inter', sans-serif"},children:"OYXR"}),b.jsxs("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.7)",letterSpacing:"0.1em",marginBottom:"40px",textAlign:"center"},children:["Loading Digital Experience",b.jsx("br",{}),b.jsx("span",{style:{opacity:.5},children:"欢迎来到创意世界"})]}),b.jsx("div",{style:{width:"300px",height:"3px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginBottom:"20px"},children:b.jsx("div",{style:{width:`${v}%`,height:"100%",background:"linear-gradient(90deg, #ffffff 0%, #888888 50%, #ffffff 100%)",borderRadius:"2px",transition:"width 0.3s ease",boxShadow:"0 0 10px rgba(255,255,255,0.5)"}})}),b.jsxs("div",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",letterSpacing:"0.1em"},children:[Math.round(v),"%"]}),b.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",height:"400px",pointerEvents:"none",zIndex:-1},children:[...Array(20)].map((R,V)=>b.jsx("div",{style:{position:"absolute",width:"4px",height:"4px",background:"rgba(255,255,255,0.3)",borderRadius:"50%",top:"50%",left:"50%",transform:`
                  translate(-50%, -50%) 
                  rotate(${V*18}deg) 
                  translateY(-${100+V*10}px)
                  rotate(${Date.now()/(1e3+V*100)}deg)
                `,animation:`float ${2+V*.1}s ease-in-out infinite`,animationDelay:`${V*.1}s`}},V))}),b.jsx("style",{jsx:!0,children:`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) rotate(${Math.random()*360}deg) translateY(-100px) scale(0.8); }
            50% { transform: translate(-50%, -50%) rotate(${Math.random()*360}deg) translateY(-120px) scale(1.2); }
          }
        `})]}):b.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000000",color:"white",margin:0,padding:0,overflow:"hidden auto",scrollSnapType:"y mandatory"},children:[b.jsxs("section",{style:{minHeight:"100vh",height:"100vh",width:"100vw",padding:"40px",background:"linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",scrollSnapAlign:"start",scrollSnapStop:"always",overflow:"hidden"},children:[b.jsxs("div",{style:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 80px",zIndex:2},children:[b.jsxs("div",{style:{marginBottom:"40px",display:"flex",alignItems:"center",gap:"15px"},children:[b.jsx("img",{src:"/Personal-Website/images/logo111.svg",alt:"OYXR Logo",style:{width:"60px",height:"60px",filter:"invert(1)",opacity:.9,backgroundColor:"white",borderRadius:"50%",padding:"8px",border:"2px solid rgba(255,255,255,0.8)"}}),b.jsx("div",{style:{fontSize:"1.5rem",fontWeight:"300",color:"white",letterSpacing:"0.1em",fontFamily:"'Inter', sans-serif"},children:"OYXR"})]}),b.jsx("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.3em",marginBottom:"30px",textTransform:"uppercase",fontWeight:"300",fontFamily:"'Inter', sans-serif"},children:"Digital Artist & Creative Technologist"}),b.jsxs("h1",{style:{fontSize:"clamp(2rem, 4vw, 3.5rem)",fontWeight:"100",margin:"0 0 30px 0",letterSpacing:"-0.03em",lineHeight:"1.1",background:"linear-gradient(135deg, #ffffff 0%, #888888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"'Inter', sans-serif"},children:["Xinran",b.jsx("br",{}),"Ouyang"]}),b.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.2rem)",lineHeight:"1.6",color:"rgba(255,255,255,0.7)",fontWeight:"300",maxWidth:"500px",margin:"0 0 50px 0",fontFamily:"'Inter', sans-serif"},children:"Exploring the intersection of technology, creativity, and human experience through immersive digital art and interactive installations."}),b.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[b.jsx("button",{style:{background:"white",color:"black",border:"none",padding:"16px 32px",fontSize:"0.95rem",fontWeight:"500",letterSpacing:"0.05em",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Inter', sans-serif",textTransform:"uppercase"},onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.9)",R.target.style.transform="translateY(-2px)"},onMouseLeave:R=>{R.target.style.background="white",R.target.style.transform="translateY(0)"},onClick:()=>document.getElementById("work").scrollIntoView({behavior:"smooth"}),children:"View Work"}),b.jsx("button",{style:{background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)",padding:"16px 32px",fontSize:"0.95rem",fontWeight:"400",letterSpacing:"0.05em",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Inter', sans-serif",textTransform:"uppercase"},onMouseEnter:R=>{R.target.style.borderColor="white",R.target.style.background="rgba(255,255,255,0.1)"},onMouseLeave:R=>{R.target.style.borderColor="rgba(255,255,255,0.3)",R.target.style.background="transparent"},onClick:()=>document.getElementById("about").scrollIntoView({behavior:"smooth"}),children:"About"}),b.jsx("button",{style:{background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)",padding:"16px 32px",fontSize:"0.95rem",fontWeight:"400",letterSpacing:"0.05em",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Inter', sans-serif",textTransform:"uppercase"},onMouseEnter:R=>{R.target.style.borderColor="white",R.target.style.background="rgba(255,255,255,0.1)"},onMouseLeave:R=>{R.target.style.borderColor="rgba(255,255,255,0.3)",R.target.style.background="transparent"},onClick:()=>document.getElementById("showcase").scrollIntoView({behavior:"smooth"}),children:"3D Showcase"})]})]}),b.jsxs("div",{style:{flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"0 80px 0 20px",perspective:"1000px",position:"relative"},children:[b.jsx("div",{style:{position:"absolute",top:"20%",right:"-100px",width:"300px",height:"300px",opacity:.3,zIndex:0,pointerEvents:"none"},children:b.jsx(br,{modelSize:1.5,rotationSpeed:.01,showWireframe:!0,color:4890367,geometry:"torus"})}),b.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"700px",height:"400px",zIndex:1},children:[b.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"600px",height:"300px",transform:`translate(-50%, -50%) rotateY(${n*-90}deg)`,transformStyle:"preserve-3d",transition:a?"transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)":"none"},children:D.map((R,V)=>{const j=V*90,P=V===n;return b.jsx("div",{style:{position:"absolute",width:"450px",height:"280px",top:"50%",left:"50%",transform:`translate(-50%, -50%) rotateY(${j}deg) translateZ(300px)`,transformStyle:"preserve-3d",cursor:"pointer",transition:"all 0.3s ease"},onClick:()=>t(R),children:b.jsxs("div",{style:{width:"100%",height:"100%",background:"rgba(0,0,0,0.8)",borderRadius:"16px",border:P?"2px solid rgba(255,255,255,0.3)":"1px solid rgba(255,255,255,0.1)",overflow:"hidden",position:"relative",transform:P?"scale(1.05)":"scale(0.9)",opacity:P?1:.7,transition:"all 0.3s ease",boxShadow:P?"0 20px 40px rgba(0,0,0,0.5)":"0 10px 20px rgba(0,0,0,0.3)",display:"flex",padding:"20px",gap:"20px"},children:[b.jsxs("div",{style:{flex:"2",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"12px",overflow:"hidden"},children:[b.jsx("img",{src:R.image,alt:R.title,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:"8px"},onError:W=>{W.target.style.display="none",W.target.nextSibling.style.display="flex"}}),b.jsx("div",{style:{display:"none",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.6)",fontSize:"1rem",fontFamily:"'Inter', sans-serif",textAlign:"center",padding:"20px"},children:R.title})]}),b.jsxs("div",{style:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",padding:"10px 0"},children:[b.jsxs("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",marginBottom:"12px",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:[R.category," • ",R.year]}),b.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"500",margin:"0",color:"white",letterSpacing:"-0.01em",fontFamily:"'Inter', sans-serif",lineHeight:"1.3"},children:R.title})]}),b.jsx("div",{style:{position:"absolute",top:"15px",right:"15px",width:"30px",height:"30px",background:"rgba(0,0,0,0.7)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",opacity:P?1:.7,border:"1px solid rgba(255,255,255,0.2)"},children:"↗"})]})},R.id)})}),b.jsxs("div",{style:{position:"absolute",bottom:"-60px",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"20px"},children:[b.jsx("button",{onClick:()=>T("prev"),disabled:a,style:{width:"35px",height:"35px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(0,0,0,0.5)",color:"white",borderRadius:"50%",cursor:a?"not-allowed":"pointer",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",opacity:a?.5:1},children:"←"}),b.jsx("div",{style:{display:"flex",gap:"8px"},children:D.map((R,V)=>b.jsx("div",{onClick:()=>{a||i(V)},style:{width:"8px",height:"8px",borderRadius:"50%",background:V===n?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.3)",cursor:a?"not-allowed":"pointer",transition:"all 0.3s ease"}},V))}),b.jsx("button",{onClick:()=>T("next"),disabled:a,style:{width:"35px",height:"35px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(0,0,0,0.5)",color:"white",borderRadius:"50%",cursor:a?"not-allowed":"pointer",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",opacity:a?.5:1},children:"→"})]})]})]}),b.jsx("div",{style:{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,0.4)",fontSize:"0.8rem",letterSpacing:"0.1em",fontFamily:"'Inter', sans-serif"},children:"SCROLL TO EXPLORE"})]}),b.jsxs("section",{id:"work",style:{height:"100vh",width:"100vw",padding:"40px",background:"linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",alignItems:"center",justifyContent:"center",scrollSnapAlign:"start",scrollSnapStop:"always",overflow:"hidden"},children:[b.jsxs("div",{style:{width:"320px",display:"flex",flexDirection:"column",paddingRight:"40px"},children:[b.jsxs("div",{style:{marginBottom:"40px"},children:[b.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:"300",margin:"0 0 15px 0",letterSpacing:"-0.02em",color:"white",fontFamily:"'Inter', sans-serif"},children:"Featured Work"}),b.jsx("p",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.6)",margin:0,fontFamily:"'Inter', sans-serif",lineHeight:"1.6"},children:"A selection of recent projects exploring digital art and interactive experiences"})]}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",flex:1,maxHeight:"calc(100vh - 200px)",overflowY:"auto"},children:C.map(R=>b.jsxs("button",{onClick:()=>o(R.id),style:{background:s===R.id?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.05)",border:s===R.id?"none":"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"12px 16px",color:"white",fontSize:"0.9rem",fontWeight:"400",cursor:"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"10px",textAlign:"left",fontFamily:"'Inter', sans-serif",transform:s===R.id?"translateX(5px)":"translateX(0)",boxShadow:s===R.id?"0 4px 15px rgba(102, 126, 234, 0.3)":"none"},onMouseEnter:V=>{s!==R.id&&(V.target.style.background="rgba(255, 255, 255, 0.1)",V.target.style.transform="translateX(3px)")},onMouseLeave:V=>{s!==R.id&&(V.target.style.background="rgba(255, 255, 255, 0.05)",V.target.style.transform="translateX(0)")},children:[b.jsx("span",{style:{fontSize:"1.1rem"},children:R.icon}),b.jsx("span",{children:R.name})]},R.id))})]}),b.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gap:"20px",height:"100%",overflow:"hidden"},children:L.map((R,V)=>b.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",transform:"translateY(0)",opacity:1,display:"flex",flexDirection:"column",height:"100%"},onClick:()=>t(R),onMouseEnter:j=>{j.target.style.transform="translateY(-8px)",j.target.style.borderColor="rgba(255,255,255,0.3)",j.target.style.boxShadow="0 20px 40px rgba(0,0,0,0.3)"},onMouseLeave:j=>{j.target.style.transform="translateY(0)",j.target.style.borderColor="rgba(255,255,255,0.1)",j.target.style.boxShadow="none"},children:[b.jsxs("div",{style:{width:"100%",flex:"1",position:"relative",overflow:"hidden",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"180px"},children:[b.jsx("img",{src:`${R.image}?v=${Date.now()}`,alt:R.title,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",transition:"transform 0.4s ease"},onError:j=>{j.target.style.display="none",j.target.nextSibling.style.display="flex"}}),b.jsx("div",{style:{display:"none",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.6)",fontSize:"1.2rem",fontFamily:"'Inter', sans-serif",textAlign:"center",height:"100%"},children:R.title}),b.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",width:"32px",height:"32px",background:"rgba(0,0,0,0.7)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",opacity:.8,transition:"all 0.3s ease"},children:"↗"})]}),b.jsxs("div",{style:{padding:"12px 16px",background:"rgba(0,0,0,0.3)",borderTop:"1px solid rgba(255,255,255,0.1)"},children:[b.jsxs("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",marginBottom:"6px",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:[R.category," • ",R.year]}),b.jsx("h3",{style:{fontSize:"1rem",fontWeight:"500",margin:"0",color:"white",letterSpacing:"-0.01em",fontFamily:"'Inter', sans-serif",lineHeight:"1.3"},children:R.title})]})]},R.id))})]}),b.jsx("section",{id:"about",style:{height:"100vh",width:"100vw",padding:"40px",background:"linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",display:"flex",alignItems:"center",justifyContent:"center",scrollSnapAlign:"start",scrollSnapStop:"always",overflow:"hidden",position:"relative"},children:b.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 80px",zIndex:2,maxWidth:"1000px"},children:[b.jsxs("div",{style:{width:"100%",textAlign:"left"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"20px",marginBottom:"30px"},children:[b.jsx("div",{style:{flexShrink:0},children:b.jsxs("div",{style:{width:"120px",height:"120px",borderRadius:"50%",background:"rgba(255,255,255,0.05)",border:"2px solid rgba(255,255,255,0.1)",overflow:"hidden",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease"},children:[b.jsx("span",{style:{fontSize:"2rem",color:"rgba(255,255,255,0.4)"},children:"👤"}),b.jsx("img",{src:"/Personal-Website/images/xinran-photo.jpg?v=2025100909",alt:"Xinran Ouyang",style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0,opacity:0},onLoad:R=>{R.target.style.opacity=1},onError:R=>{R.target.style.display="none"}})]})}),b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.3em",marginBottom:"15px",textTransform:"uppercase",fontWeight:"300",fontFamily:"'Inter', sans-serif"},children:"Digital Artist & Creative Technologist"}),b.jsx("h2",{style:{fontSize:"clamp(2.5rem, 5vw, 4rem)",fontWeight:"100",margin:"0 0 10px 0",letterSpacing:"-0.03em",lineHeight:"1.1",background:"linear-gradient(135deg, #ffffff 0%, #888888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"'Inter', sans-serif"},children:"About Me"}),b.jsx("div",{style:{fontSize:"1.1rem",color:"rgba(255,255,255,0.7)",fontFamily:"'Inter', sans-serif",fontWeight:"300"},children:"Xinran Ouyang"})]})]}),b.jsxs("div",{style:{marginBottom:"30px",textAlign:"left",maxWidth:"800px"},children:[b.jsx("p",{style:{fontSize:"clamp(1rem, 2vw, 1.2rem)",lineHeight:"1.6",color:"rgba(255,255,255,0.8)",margin:"0 0 15px 0",fontFamily:"'Inter', sans-serif",fontWeight:"300"},children:"I'm a digital artist and creative technologist passionate about exploring the intersection of art, technology, and human experience."}),b.jsx("p",{style:{fontSize:"1rem",lineHeight:"1.6",color:"rgba(255,255,255,0.7)",margin:0,fontFamily:"'Inter', sans-serif",fontWeight:"300"},children:"My work focuses on creating immersive digital experiences that blur the boundaries between the virtual and physical worlds, always seeking to create meaningful connections through innovative technology."})]}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",marginBottom:"40px",width:"100%"},children:[b.jsxs("div",{style:{background:l==="awards"?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"20px 25px",cursor:"pointer",transition:"all 0.3s ease",width:"100%",maxWidth:"800px"},onClick:()=>c(l==="awards"?null:"awards"),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:l==="awards"?"20px":"0"},children:[b.jsx("span",{style:{fontSize:"1.8rem"},children:"🏆"}),b.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:"500",color:"white",margin:0,fontFamily:"'Inter', sans-serif"},children:"Awards & Recognition"}),b.jsx("span",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.5)",marginLeft:"auto",transform:l==="awards"?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"▼"})]}),l==="awards"&&b.jsxs("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.8)",lineHeight:"1.7",fontFamily:"'Inter', sans-serif"},children:[b.jsxs("div",{style:{marginBottom:"15px",paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"Excellence in Digital Art Award"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"International Digital Arts Festival | 2024"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:"Recognized for innovative use of AI in interactive media installations"})]}),b.jsxs("div",{style:{marginBottom:"15px",paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"Best Interactive Installation"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"Creative Technology Showcase | 2023"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:'For "Prayer of Wind and Bloom" - merging traditional craft with digital interactivity'})]}),b.jsxs("div",{style:{paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"Emerging Artist Grant"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"Digital Arts Foundation | 2023"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:"Funding for exploring AI-generated visual narratives in immersive environments"})]})]})]}),b.jsxs("div",{style:{background:l==="experience"?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"20px 25px",cursor:"pointer",transition:"all 0.3s ease",width:"100%",maxWidth:"800px"},onClick:()=>c(l==="experience"?null:"experience"),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:l==="experience"?"20px":"0"},children:[b.jsx("span",{style:{fontSize:"1.8rem"},children:"💼"}),b.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:"500",color:"white",margin:0,fontFamily:"'Inter', sans-serif"},children:"Experience & Education"}),b.jsx("span",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.5)",marginLeft:"auto",transform:l==="experience"?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"▼"})]}),l==="experience"&&b.jsxs("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.8)",lineHeight:"1.7",fontFamily:"'Inter', sans-serif"},children:[b.jsxs("div",{style:{marginBottom:"15px",paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"Freelance Digital Artist"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"2024 - Present"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:"Creating immersive digital experiences for galleries, museums, and private collectors worldwide"})]}),b.jsxs("div",{style:{marginBottom:"15px",paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"MFA in Digital Arts"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"Rhode Island School of Design | 2022-2024"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:"Focused on AI-assisted creative processes and interactive media installations"})]}),b.jsxs("div",{style:{marginBottom:"15px",paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"Creative Technologist Intern"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"Innovation Lab Studio | 2023"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:"Developed AR prototypes and interactive installations for commercial clients"})]}),b.jsxs("div",{style:{paddingLeft:"15px",borderLeft:"3px solid rgba(255,255,255,0.3)"},children:[b.jsx("strong",{style:{color:"rgba(255,255,255,0.9)"},children:"BA in Interactive Media Arts"}),b.jsx("br",{}),b.jsx("span",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:"University of California San Diego | 2018-2022"}),b.jsx("br",{}),b.jsx("span",{style:{fontSize:"0.95rem"},children:"Graduated Magna Cum Laude, specializing in computational creativity and digital fabrication"})]})]})]}),b.jsxs("div",{style:{background:l==="contact"?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"20px 25px",cursor:"pointer",transition:"all 0.3s ease",width:"100%",maxWidth:"800px"},onClick:()=>c(l==="contact"?null:"contact"),children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginBottom:l==="contact"?"20px":"0"},children:[b.jsx("span",{style:{fontSize:"1.8rem"},children:"�"}),b.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:"500",color:"white",margin:0,fontFamily:"'Inter', sans-serif"},children:"Contact & Connect"}),b.jsx("span",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.5)",marginLeft:"auto",transform:l==="contact"?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"▼"})]}),l==="contact"&&b.jsxs("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.8)",lineHeight:"1.7",fontFamily:"'Inter', sans-serif"},children:[b.jsx("div",{style:{marginBottom:"20px"},children:b.jsx("p",{style:{margin:"0 0 15px 0",fontSize:"1rem",color:"rgba(255,255,255,0.9)"},children:"I'm always excited to collaborate on innovative projects that push the boundaries of digital art and technology."})}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[b.jsx("span",{style:{fontSize:"1.2rem"},children:"✉️"}),b.jsx("a",{href:"mailto:McKenzie.ouyang@gmail.com",style:{color:"rgba(255,255,255,0.9)",textDecoration:"none",fontSize:"1rem",fontWeight:"400"},children:"McKenzie.ouyang@gmail.com"})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[b.jsx("span",{style:{fontSize:"1.2rem"},children:"💼"}),b.jsx("a",{href:"https://linkedin.com/in/xinran-ouyang",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255,255,255,0.9)",textDecoration:"none",fontSize:"1rem",fontWeight:"400"},children:"LinkedIn Profile"})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[b.jsx("span",{style:{fontSize:"1.2rem"},children:"�"}),b.jsx("a",{href:"https://instagram.com/xinran.creative",target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255,255,255,0.9)",textDecoration:"none",fontSize:"1rem",fontWeight:"400"},children:"Instagram @xinran.creative"})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[b.jsx("span",{style:{fontSize:"1.2rem"},children:"📍"}),b.jsx("span",{style:{color:"rgba(255,255,255,0.8)",fontSize:"1rem"},children:"San Francisco Bay Area, CA"})]})]})]})]})]}),b.jsxs("div",{style:{marginBottom:"30px",display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[b.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"500",margin:"0 0 15px 0",color:"white",fontFamily:"'Inter', sans-serif"},children:"Skills & Tools"}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",justifyContent:"flex-start",maxWidth:"800px"},children:["Digital Art","Interactive Design","Creative Coding","AI Integration","Installation Art","Visual Design","Creative Direction","TouchDesigner","Blender","After Effects","Arduino","React/Three.js"].map((R,V)=>b.jsx("span",{style:{padding:"8px 16px",background:"rgba(255,255,255,0.1)",borderRadius:"20px",fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",fontFamily:"'Inter', sans-serif",border:"1px solid rgba(255,255,255,0.2)"},children:R},V))})]}),b.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",marginTop:"40px"},children:[b.jsx("button",{style:{background:"white",color:"black",border:"none",padding:"16px 32px",fontSize:"0.95rem",fontWeight:"500",letterSpacing:"0.05em",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Inter', sans-serif",textTransform:"uppercase"},onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.9)",R.target.style.transform="translateY(-2px)"},onMouseLeave:R=>{R.target.style.background="white",R.target.style.transform="translateY(0)"},onClick:()=>document.getElementById("showcase").scrollIntoView({behavior:"smooth"}),children:"Get in Touch"}),b.jsx("button",{style:{background:"transparent",color:"white",border:"1px solid rgba(255,255,255,0.3)",padding:"16px 32px",fontSize:"0.95rem",fontWeight:"400",letterSpacing:"0.05em",cursor:"pointer",transition:"all 0.3s ease",fontFamily:"'Inter', sans-serif",textTransform:"uppercase"},onMouseEnter:R=>{R.target.style.borderColor="white",R.target.style.background="rgba(255,255,255,0.1)"},onMouseLeave:R=>{R.target.style.borderColor="rgba(255,255,255,0.3)",R.target.style.background="transparent"},onClick:()=>document.getElementById("work").scrollIntoView({behavior:"smooth"}),children:"View Work"})]})]}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",height:"100%",paddingTop:"20px"},children:[b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"30px",fontFamily:"'Inter', sans-serif"},children:[b.jsxs("h3",{style:{fontSize:"1.4rem",fontWeight:"500",color:"white",margin:"0 0 25px 0",display:"flex",alignItems:"center",gap:"12px"},children:[b.jsx("span",{style:{fontSize:"1.8rem"},children:"⚡"}),"Skills & Tools"]}),b.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"15px"},children:[{name:"TouchDesigner",level:"95%",color:"#00ff88"},{name:"Blender",level:"90%",color:"#ff6b35"},{name:"After Effects",level:"85%",color:"#9999ff"},{name:"Cinema 4D",level:"80%",color:"#ffcc00"},{name:"Arduino",level:"75%",color:"#00ccff"},{name:"Premiere Pro",level:"85%",color:"#ff3366"}].map((R,V)=>b.jsxs("div",{style:{background:"rgba(255,255,255,0.04)",borderRadius:"12px",padding:"15px",border:"1px solid rgba(255,255,255,0.08)"},children:[b.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"500",color:"rgba(255,255,255,0.9)",marginBottom:"8px"},children:R.name}),b.jsx("div",{style:{background:"rgba(255,255,255,0.1)",borderRadius:"6px",height:"4px",overflow:"hidden"},children:b.jsx("div",{style:{background:R.color,height:"100%",width:R.level,borderRadius:"6px",transition:"width 2s ease"}})})]},V))})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"30px",fontFamily:"'Inter', sans-serif"},children:[b.jsxs("h3",{style:{fontSize:"1.4rem",fontWeight:"500",color:"white",margin:"0 0 25px 0",display:"flex",alignItems:"center",gap:"12px"},children:[b.jsx("span",{style:{fontSize:"1.8rem"},children:"�"}),"Get In Touch"]}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.08)",fontSize:"0.95rem",color:"rgba(255,255,255,0.8)"},children:[b.jsx("span",{children:"🇨🇳"}),b.jsx("span",{children:"+86 15723351973"})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.08)",fontSize:"0.95rem",color:"rgba(255,255,255,0.8)"},children:[b.jsx("span",{children:"🇭🇰"}),b.jsx("span",{children:"+852 84963034"})]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:"rgba(255,255,255,0.04)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.08)",fontSize:"0.95rem",color:"rgba(255,255,255,0.8)"},children:[b.jsx("span",{children:"📧"}),b.jsx("span",{children:"McKenzie.ouyang@gmail.com"})]})]})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"25px",fontFamily:"'Inter', sans-serif",textAlign:"center"},children:[b.jsx("div",{style:{fontSize:"2rem",marginBottom:"10px"},children:"�"}),b.jsx("div",{style:{fontSize:"1.1rem",fontWeight:"500",color:"white",marginBottom:"8px"},children:"Interest Focus"}),b.jsx("div",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.7)",lineHeight:"1.5"},children:"Passionate about game level design and technical art, exploring the intersection of gameplay mechanics and visual storytelling"})]})]})]})}),b.jsxs("section",{id:"showcase",style:{height:"100vh",width:"100vw",padding:"40px",background:"linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",display:"flex",alignItems:"center",justifyContent:"center",scrollSnapAlign:"start",scrollSnapStop:"always",overflow:"hidden",position:"relative"},children:[b.jsxs("div",{style:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 80px",zIndex:2,maxWidth:"600px"},children:[b.jsxs("div",{style:{marginBottom:"40px",textAlign:"left"},children:[b.jsx("h2",{style:{fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"200",margin:"0 0 15px 0",letterSpacing:"-0.02em",color:"white",fontFamily:"'Inter', sans-serif"},children:"3D Showcase"}),b.jsx("p",{style:{fontSize:"1.1rem",color:"rgba(255,255,255,0.7)",maxWidth:"500px",margin:"0",lineHeight:"1.5",fontFamily:"'Inter', sans-serif",fontWeight:"300"},children:"Interactive 3D models exploring form, movement, and digital materiality. Each piece responds to user interaction and demonstrates different aspects of computational geometry."})]}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",marginBottom:"30px"},children:[b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"15px",height:"200px",position:"relative",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.06)",R.target.style.borderColor="rgba(255,255,255,0.2)",R.target.style.transform="translateY(-5px)"},onMouseLeave:R=>{R.target.style.background="rgba(255,255,255,0.03)",R.target.style.borderColor="rgba(255,255,255,0.1)",R.target.style.transform="translateY(0)"},children:[b.jsx(br,{scale:1.2,position:[0,0,0],rotation:[.2,0,0],modelSize:1.5,rotationSpeed:.01,showWireframe:!1,color:65416,geometry:"sphere"}),b.jsx("div",{style:{position:"absolute",bottom:"10px",left:"15px",fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Inter', sans-serif"},children:"Organic Sphere"})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"15px",height:"200px",position:"relative",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.06)",R.target.style.borderColor="rgba(255,255,255,0.2)",R.target.style.transform="translateY(-5px)"},onMouseLeave:R=>{R.target.style.background="rgba(255,255,255,0.03)",R.target.style.borderColor="rgba(255,255,255,0.1)",R.target.style.transform="translateY(0)"},children:[b.jsx(br,{scale:1.2,position:[0,0,0],rotation:[.3,.3,0],modelSize:1.3,rotationSpeed:.015,showWireframe:!0,color:16739179,geometry:"cube"}),b.jsx("div",{style:{position:"absolute",bottom:"10px",left:"15px",fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Inter', sans-serif"},children:"Wireframe Cube"})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"15px",height:"200px",position:"relative",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.06)",R.target.style.borderColor="rgba(255,255,255,0.2)",R.target.style.transform="translateY(-5px)"},onMouseLeave:R=>{R.target.style.background="rgba(255,255,255,0.03)",R.target.style.borderColor="rgba(255,255,255,0.1)",R.target.style.transform="translateY(0)"},children:[b.jsx(br,{scale:1.2,position:[0,0,0],rotation:[.4,0,0],modelSize:1.4,rotationSpeed:.008,showWireframe:!1,color:5164484,geometry:"torus"}),b.jsx("div",{style:{position:"absolute",bottom:"10px",left:"15px",fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Inter', sans-serif"},children:"Torus Ring"})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"15px",padding:"15px",height:"200px",position:"relative",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.06)",R.target.style.borderColor="rgba(255,255,255,0.2)",R.target.style.transform="translateY(-5px)"},onMouseLeave:R=>{R.target.style.background="rgba(255,255,255,0.03)",R.target.style.borderColor="rgba(255,255,255,0.1)",R.target.style.transform="translateY(0)"},children:[b.jsx(br,{scale:1.2,position:[0,0,0],rotation:[0,0,0],modelSize:1.6,rotationSpeed:.012,showWireframe:!1,color:16754470,geometry:"cone"}),b.jsx("div",{style:{position:"absolute",bottom:"10px",left:"15px",fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Inter', sans-serif"},children:"Geometric Cone"})]})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"20px",marginBottom:"20px"},children:[b.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"500",color:"white",margin:"0 0 10px 0",fontFamily:"'Inter', sans-serif"},children:"🎯 Interactive Features"}),b.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.7)",margin:"0",lineHeight:"1.5",fontFamily:"'Inter', sans-serif"},children:"Each model features real-time rendering with WebGL, responsive mouse interactions, and procedural animations. Built with Three.js and React for seamless performance across devices."})]})]}),b.jsx("div",{style:{flex:"1",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:b.jsxs("div",{style:{width:"400px",height:"400px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",overflow:"hidden",position:"relative"},children:[b.jsx(br,{scale:2,position:[0,0,0],rotation:[.2,.3,0],modelSize:2.5,rotationSpeed:.005,showWireframe:!1,color:10233776,geometry:"icosahedron"}),b.jsxs("div",{style:{position:"absolute",bottom:"15px",left:"20px",right:"20px",textAlign:"center"},children:[b.jsx("h4",{style:{fontSize:"1.2rem",fontWeight:"500",color:"white",margin:"0 0 5px 0",fontFamily:"'Inter', sans-serif"},children:"Featured: Icosahedron"}),b.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.6)",margin:"0",fontFamily:"'Inter', sans-serif"},children:"Complex polyhedron with 20 triangular faces"})]})]})})]}),e&&b.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(0,0,0,0.9)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},onClick:()=>t(null),children:b.jsxs("div",{style:{background:"#1a1a1a",borderRadius:"12px",maxWidth:"800px",maxHeight:"90vh",overflow:"auto",position:"relative"},onClick:R=>R.stopPropagation(),children:[b.jsx("button",{onClick:()=>t(null),style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255,255,255,0.1)",border:"none",borderRadius:"50%",width:"40px",height:"40px",color:"white",fontSize:"20px",cursor:"pointer",zIndex:10},children:"×"}),b.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"400px",objectFit:"cover",borderRadius:"12px 12px 0 0"}}),b.jsxs("div",{style:{padding:"30px"},children:[b.jsxs("div",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",marginBottom:"15px",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:[e.category," • ",e.year]}),b.jsx("h2",{style:{fontSize:"2rem",fontWeight:"500",margin:"0 0 20px 0",color:"white",fontFamily:"'Inter', sans-serif"},children:e.title}),b.jsx("p",{style:{fontSize:"1.1rem",lineHeight:"1.7",color:"rgba(255,255,255,0.8)",margin:"0 0 30px 0",fontFamily:"'Inter', sans-serif"},children:e.description}),e.gallery&&b.jsxs("div",{children:[b.jsx("h3",{style:{fontSize:"1.2rem",color:"white",marginBottom:"20px",fontFamily:"'Inter', sans-serif"},children:"Gallery"}),b.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"25px"},children:e.gallery.map((R,V)=>b.jsx("img",{src:R,alt:`${e.title} ${V+1}`,style:{width:"100%",height:"auto",minHeight:"250px",objectFit:"contain",borderRadius:"12px",cursor:"pointer",transition:"transform 0.3s ease",border:"1px solid rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(0,0,0,0.3)"},onMouseEnter:j=>{j.target.style.transform="scale(1.03)"},onMouseLeave:j=>{j.target.style.transform="scale(1)"}},V))})]})]})]})}),d&&b.jsxs("div",{style:{position:"fixed",left:f.x,top:f.y,width:"400px",maxHeight:"500px",background:"rgba(0,0,0,0.95)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",zIndex:2e3,overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.5)",userSelect:"none"},children:[b.jsxs("div",{style:{background:"rgba(255,255,255,0.1)",padding:"12px 16px",borderBottom:"1px solid rgba(255,255,255,0.1)",cursor:x?"grabbing":"grab",display:"flex",alignItems:"center",justifyContent:"space-between"},onMouseDown:E,children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[b.jsx("div",{style:{width:"12px",height:"12px",background:"#ff5f57",borderRadius:"50%"}}),b.jsx("div",{style:{width:"12px",height:"12px",background:"#ffbd2e",borderRadius:"50%"}}),b.jsx("div",{style:{width:"12px",height:"12px",background:"#28ca42",borderRadius:"50%"}})]}),b.jsxs("h3",{style:{color:"white",fontSize:"0.9rem",fontWeight:"500",margin:0,fontFamily:"'Inter', sans-serif"},children:[d==="about"&&"About Me",d==="education"&&"Education",d==="showcase"&&"3D Showcase",d==="awards"&&"Awards",d==="interests"&&"Interests",d==="skills"&&"Skills"]}),b.jsx("button",{style:{background:"transparent",border:"none",color:"rgba(255,255,255,0.7)",fontSize:"16px",cursor:"pointer",padding:"4px",borderRadius:"4px",transition:"all 0.2s ease"},onClick:()=>h(null),onMouseEnter:R=>{R.target.style.background="rgba(255,255,255,0.1)",R.target.style.color="white"},onMouseLeave:R=>{R.target.style.background="transparent",R.target.style.color="rgba(255,255,255,0.7)"},children:"×"})]}),b.jsxs("div",{style:{padding:"20px",maxHeight:"420px",overflow:"auto",color:"white",fontFamily:"'Inter', sans-serif"},children:[d==="about"&&b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"2rem",textAlign:"center",marginBottom:"16px"},children:"👋"}),b.jsx("p",{style:{fontSize:"0.95rem",lineHeight:"1.6",color:"rgba(255,255,255,0.9)",margin:0},children:"I'm a digital artist and creative technologist passionate about exploring the intersection of art, technology, and human experience. My work focuses on creating immersive digital experiences that blur the boundaries between the virtual and physical worlds."})]}),d==="education"&&b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"2rem",textAlign:"center",marginBottom:"16px"},children:"🎓"}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[b.jsxs("div",{children:[b.jsx("h4",{style:{fontSize:"1rem",fontWeight:"600",margin:"0 0 4px 0",color:"white"},children:"Master's in Digital Arts"}),b.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",margin:"0 0 2px 0"},children:"University of Arts"}),b.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",margin:0},children:"2022-2024"})]}),b.jsxs("div",{children:[b.jsx("h4",{style:{fontSize:"1rem",fontWeight:"600",margin:"0 0 4px 0",color:"white"},children:"Bachelor's in Interactive Media"}),b.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.8)",margin:"0 0 2px 0"},children:"Design Institute"}),b.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",margin:0},children:"2018-2022"})]})]})]}),d==="showcase"&&b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"2rem",textAlign:"center",marginBottom:"16px"},children:"📫"}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[b.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"12px",borderRadius:"8px",textAlign:"center"},children:[b.jsx("div",{style:{fontSize:"1.2rem",marginBottom:"4px"},children:"✉️"}),b.jsx("p",{style:{fontSize:"0.9rem",margin:0,color:"rgba(255,255,255,0.9)"},children:"McKenzie.ouyang@gmail.com"})]}),b.jsxs("div",{style:{display:"flex",gap:"8px"},children:[b.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"10px",borderRadius:"8px",textAlign:"center",flex:1},children:[b.jsx("div",{style:{fontSize:"1rem",marginBottom:"2px"},children:"🇨🇳"}),b.jsx("p",{style:{fontSize:"0.8rem",margin:0,color:"rgba(255,255,255,0.8)"},children:"+86 15723351973"})]}),b.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"10px",borderRadius:"8px",textAlign:"center",flex:1},children:[b.jsx("div",{style:{fontSize:"1rem",marginBottom:"2px"},children:"🇭🇰"}),b.jsx("p",{style:{fontSize:"0.8rem",margin:0,color:"rgba(255,255,255,0.8)"},children:"+852 84963034"})]})]})]})]}),d==="awards"&&b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"2rem",textAlign:"center",marginBottom:"16px"},children:"🏆"}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[b.jsx("div",{style:{fontSize:"1.2rem"},children:"🥇"}),b.jsxs("div",{children:[b.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",margin:"0 0 2px 0"},children:"Digital Art Excellence Award"}),b.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",margin:0},children:"National Arts Competition 2024"})]})]}),b.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px"},children:[b.jsx("div",{style:{fontSize:"1.2rem"},children:"🥈"}),b.jsxs("div",{children:[b.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",margin:"0 0 2px 0"},children:"Innovation in Interactive Media"}),b.jsx("p",{style:{fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",margin:0},children:"Tech Arts Festival 2023"})]})]})]})]}),d==="interests"&&b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"2rem",textAlign:"center",marginBottom:"16px"},children:"🎨"}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"12px"},children:["3D Modeling","VR/AR","AI Art","Photography","Game Design","Motion Graphics"].map(R=>b.jsx("span",{style:{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"12px",padding:"4px 8px",fontSize:"0.75rem",color:"rgba(255,255,255,0.9)"},children:R},R))}),b.jsx("p",{style:{fontSize:"0.85rem",lineHeight:"1.5",color:"rgba(255,255,255,0.8)",margin:0},children:"My creative journey spans multiple disciplines, always seeking new ways to merge traditional artforms with emerging technologies."})]}),d==="skills"&&b.jsxs("div",{children:[b.jsx("div",{style:{fontSize:"2rem",textAlign:"center",marginBottom:"16px"},children:"⚡"}),b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[b.jsxs("div",{children:[b.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",marginBottom:"8px",color:"rgba(255,255,255,0.9)"},children:"Design & Creative"}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["Digital Art","Visual Design","Installation Art","Motion Graphics"].map(R=>b.jsx("span",{style:{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"10px",padding:"3px 8px",fontSize:"0.7rem",color:"rgba(255,255,255,0.8)"},children:R},R))})]}),b.jsxs("div",{children:[b.jsx("h4",{style:{fontSize:"0.9rem",fontWeight:"600",marginBottom:"8px",color:"rgba(255,255,255,0.9)"},children:"Technical"}),b.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["Creative Coding","Interactive Design","3D Modeling","VR/AR Development"].map(R=>b.jsx("span",{style:{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"10px",padding:"3px 8px",fontSize:"0.7rem",color:"rgba(255,255,255,0.8)"},children:R},R))})]})]})]})]})]})]})}pM.createRoot(document.getElementById("root")).render(b.jsx(Ae.StrictMode,{children:b.jsx(TA,{})}));
