(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var zg={exports:{}},Rc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vx=Symbol.for("react.transitional.element"),xx=Symbol.for("react.fragment");function Fg(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:vx,type:e,key:i,ref:t!==void 0?t:null,props:n}}Rc.Fragment=xx;Rc.jsx=Fg;Rc.jsxs=Fg;zg.exports=Rc;var nt=zg.exports,Hg={exports:{}},Ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh=Symbol.for("react.transitional.element"),Sx=Symbol.for("react.portal"),yx=Symbol.for("react.fragment"),Mx=Symbol.for("react.strict_mode"),Ex=Symbol.for("react.profiler"),Tx=Symbol.for("react.consumer"),bx=Symbol.for("react.context"),Ax=Symbol.for("react.forward_ref"),Rx=Symbol.for("react.suspense"),Cx=Symbol.for("react.memo"),Gg=Symbol.for("react.lazy"),mp=Symbol.iterator;function wx(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var Vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Xg={};function ds(e,t,n){this.props=e,this.context=t,this.refs=Xg,this.updater=n||Vg}ds.prototype.isReactComponent={};ds.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ds.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wg(){}Wg.prototype=ds.prototype;function Kh(e,t,n){this.props=e,this.context=t,this.refs=Xg,this.updater=n||Vg}var Qh=Kh.prototype=new Wg;Qh.constructor=Kh;kg(Qh,ds.prototype);Qh.isPureReactComponent=!0;var gp=Array.isArray,Se={H:null,A:null,T:null,S:null,V:null},Yg=Object.prototype.hasOwnProperty;function Jh(e,t,n,i,a,r){return n=r.ref,{$$typeof:Zh,type:e,key:t,ref:n!==void 0?n:null,props:r}}function Dx(e,t){return Jh(e.type,t,void 0,void 0,void 0,e.props)}function $h(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zh}function Ux(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _p=/\/+/g;function Kc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ux(""+e.key):t.toString(36)}function vp(){}function Lx(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(vp,vp):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Tr(e,t,n,i,a){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zh:case Sx:s=!0;break;case Gg:return s=e._init,Tr(s(e._payload),t,n,i,a)}}if(s)return a=a(e),s=i===""?"."+Kc(e,0):i,gp(a)?(n="",s!=null&&(n=s.replace(_p,"$&/")+"/"),Tr(a,t,n,"",function(c){return c})):a!=null&&($h(a)&&(a=Dx(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(_p,"$&/")+"/")+s)),t.push(a)),1;s=0;var o=i===""?".":i+":";if(gp(e))for(var l=0;l<e.length;l++)i=e[l],r=o+Kc(i,l),s+=Tr(i,t,n,r,a);else if(l=wx(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+Kc(i,l++),s+=Tr(i,t,n,r,a);else if(r==="object"){if(typeof e.then=="function")return Tr(Lx(e),t,n,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function qo(e,t,n){if(e==null)return e;var i=[],a=0;return Tr(e,i,"","",function(r){return t.call(n,r,a++)}),i}function Nx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xp=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ox(){}Ht.Children={map:qo,forEach:function(e,t,n){qo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qo(e,function(){t++}),t},toArray:function(e){return qo(e,function(t){return t})||[]},only:function(e){if(!$h(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ht.Component=ds;Ht.Fragment=yx;Ht.Profiler=Ex;Ht.PureComponent=Kh;Ht.StrictMode=Mx;Ht.Suspense=Rx;Ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;Ht.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};Ht.cache=function(e){return function(){return e.apply(null,arguments)}};Ht.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=kg({},e.props),a=e.key,r=void 0;if(t!=null)for(s in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(a=""+t.key),t)!Yg.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return Jh(e.type,a,void 0,void 0,r,i)};Ht.createContext=function(e){return e={$$typeof:bx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Tx,_context:e},e};Ht.createElement=function(e,t,n){var i,a={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)Yg.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=t[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Jh(e,r,void 0,void 0,null,a)};Ht.createRef=function(){return{current:null}};Ht.forwardRef=function(e){return{$$typeof:Ax,render:e}};Ht.isValidElement=$h;Ht.lazy=function(e){return{$$typeof:Gg,_payload:{_status:-1,_result:e},_init:Nx}};Ht.memo=function(e,t){return{$$typeof:Cx,type:e,compare:t===void 0?null:t}};Ht.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),a=Se.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Ox,xp)}catch(r){xp(r)}finally{Se.T=t}};Ht.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};Ht.use=function(e){return Se.H.use(e)};Ht.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};Ht.useCallback=function(e,t){return Se.H.useCallback(e,t)};Ht.useContext=function(e){return Se.H.useContext(e)};Ht.useDebugValue=function(){};Ht.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};Ht.useEffect=function(e,t,n){var i=Se.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Ht.useId=function(){return Se.H.useId()};Ht.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};Ht.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};Ht.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};Ht.useMemo=function(e,t){return Se.H.useMemo(e,t)};Ht.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};Ht.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};Ht.useRef=function(e){return Se.H.useRef(e)};Ht.useState=function(e){return Se.H.useState(e)};Ht.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};Ht.useTransition=function(){return Se.H.useTransition()};Ht.version="19.1.1";Hg.exports=Ht;var be=Hg.exports,qg={exports:{}},Cc={},jg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,V){var I=N.length;N.push(V);t:for(;0<I;){var $=I-1>>>1,rt=N[$];if(0<a(rt,V))N[$]=V,N[I]=rt,I=$;else break t}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var V=N[0],I=N.pop();if(I!==V){N[0]=I;t:for(var $=0,rt=N.length,_t=rt>>>1;$<_t;){var Ot=2*($+1)-1,ne=N[Ot],Zt=Ot+1,Wt=N[Zt];if(0>a(ne,I))Zt<rt&&0>a(Wt,ne)?(N[$]=Wt,N[Zt]=I,$=Zt):(N[$]=ne,N[Ot]=I,$=Ot);else if(Zt<rt&&0>a(Wt,I))N[$]=Wt,N[Zt]=I,$=Zt;else break t}}return V}function a(N,V){var I=N.sortIndex-V.sortIndex;return I!==0?I:N.id-V.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,x=!1,S=!1,g=!1,u=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function v(N){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=N)i(c),V.sortIndex=V.expirationTime,t(l,V);else break;V=n(c)}}function b(N){if(S=!1,v(N),!x)if(n(l)!==null)x=!0,C||(C=!0,F());else{var V=n(c);V!==null&&Y(b,V.startTime-N)}}var C=!1,A=-1,D=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<D)}function U(){if(g=!1,C){var N=e.unstable_now();T=N;var V=!0;try{t:{x=!1,S&&(S=!1,m(A),A=-1),p=!0;var I=f;try{e:{for(v(N),h=n(l);h!==null&&!(h.expirationTime>N&&E());){var $=h.callback;if(typeof $=="function"){h.callback=null,f=h.priorityLevel;var rt=$(h.expirationTime<=N);if(N=e.unstable_now(),typeof rt=="function"){h.callback=rt,v(N),V=!0;break e}h===n(l)&&i(l),v(N)}else i(l);h=n(l)}if(h!==null)V=!0;else{var _t=n(c);_t!==null&&Y(b,_t.startTime-N),V=!1}}break t}finally{h=null,f=I,p=!1}V=void 0}}finally{V?F():C=!1}}}var F;if(typeof _=="function")F=function(){_(U)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,K=k.port2;k.port1.onmessage=U,F=function(){K.postMessage(null)}}else F=function(){u(U,0)};function Y(N,V){A=u(function(){N(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(N){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var I=f;f=V;try{return N()}finally{f=I}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var I=f;f=N;try{return V()}finally{f=I}},e.unstable_scheduleCallback=function(N,V,I){var $=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?$+I:$):I=$,N){case 1:var rt=-1;break;case 2:rt=250;break;case 5:rt=1073741823;break;case 4:rt=1e4;break;default:rt=5e3}return rt=I+rt,N={id:d++,callback:V,priorityLevel:N,startTime:I,expirationTime:rt,sortIndex:-1},I>$?(N.sortIndex=I,t(c,N),n(l)===null&&N===n(c)&&(S?(m(A),A=-1):S=!0,Y(b,I-$))):(N.sortIndex=rt,t(l,N),x||p||(x=!0,C||(C=!0,F()))),N},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(N){var V=f;return function(){var I=f;f=V;try{return N.apply(this,arguments)}finally{f=I}}}})(Zg);jg.exports=Zg;var Px=jg.exports,Kg={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix=be;function Qg(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ki(){}var sn={d:{f:ki,r:function(){throw Error(Qg(522))},D:ki,C:ki,L:ki,m:ki,X:ki,S:ki,M:ki},p:0,findDOMNode:null},Bx=Symbol.for("react.portal");function zx(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bx,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var ks=Ix.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=sn;on.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Qg(299));return zx(e,t,null,n)};on.flushSync=function(e){var t=ks.T,n=sn.p;try{if(ks.T=null,sn.p=2,e)return e()}finally{ks.T=t,sn.p=n,sn.d.f()}};on.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,sn.d.C(e,t))};on.prefetchDNS=function(e){typeof e=="string"&&sn.d.D(e)};on.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wc(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?sn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&sn.d.X(e,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};on.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wc(t.as,t.crossOrigin);sn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&sn.d.M(e)};on.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wc(n,t.crossOrigin);sn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};on.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wc(t.as,t.crossOrigin);sn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else sn.d.m(e)};on.requestFormReset=function(e){sn.d.r(e)};on.unstable_batchedUpdates=function(e,t){return e(t)};on.useFormState=function(e,t,n){return ks.H.useFormState(e,t,n)};on.useFormStatus=function(){return ks.H.useHostTransitionStatus()};on.version="19.1.1";function Jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg)}catch(e){console.error(e)}}Jg(),Kg.exports=on;var Fx=Kg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze=Px,$g=be,Hx=Fx;function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function To(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function e0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sp(e){if(To(e)!==e)throw Error(j(188))}function Gx(e){var t=e.alternate;if(!t){if(t=To(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Sp(a),e;if(r===i)return Sp(a),t;r=r.sibling}throw Error(j(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function n0(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=n0(e),t!==null)return t;e=e.sibling}return null}var ge=Object.assign,Vx=Symbol.for("react.element"),jo=Symbol.for("react.transitional.element"),zs=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),kx=Symbol.for("react.provider"),a0=Symbol.for("react.consumer"),Ci=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),hf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),ed=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),pf=Symbol.for("react.activity"),Xx=Symbol.for("react.memo_cache_sentinel"),yp=Symbol.iterator;function Ts(e){return e===null||typeof e!="object"?null:(e=yp&&e[yp]||e["@@iterator"],typeof e=="function"?e:null)}var Wx=Symbol.for("react.client.reference");function mf(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Wx?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case ff:return"Profiler";case i0:return"StrictMode";case hf:return"Suspense";case df:return"SuspenseList";case pf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zs:return"Portal";case Ci:return(e.displayName||"Context")+".Provider";case a0:return(e._context.displayName||"Context")+".Consumer";case td:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ed:return t=e.displayName||null,t!==null?t:mf(e.type)||"Memo";case Ji:t=e._payload,e=e._init;try{return mf(e(t))}catch{}}return null}var Fs=Array.isArray,wt=$g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=Hx.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xa={pending:!1,data:null,method:null,action:null},gf=[],wr=-1;function pi(e){return{current:e}}function Ye(e){0>wr||(e.current=gf[wr],gf[wr]=null,wr--)}function ye(e,t){wr++,gf[wr]=e.current,e.current=t}var li=pi(null),ao=pi(null),ca=pi(null),jl=pi(null);function Zl(e,t){switch(ye(ca,t),ye(ao,e),ye(li,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Am(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Am(t),e=yv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ye(li),ye(li,e)}function Qr(){Ye(li),Ye(ao),Ye(ca)}function _f(e){e.memoizedState!==null&&ye(jl,e);var t=li.current,n=yv(t,e.type);t!==n&&(ye(ao,e),ye(li,n))}function Kl(e){ao.current===e&&(Ye(li),Ye(ao)),jl.current===e&&(Ye(jl),mo._currentValue=Xa)}var vf=Object.prototype.hasOwnProperty,nd=ze.unstable_scheduleCallback,Qc=ze.unstable_cancelCallback,Yx=ze.unstable_shouldYield,qx=ze.unstable_requestPaint,ci=ze.unstable_now,jx=ze.unstable_getCurrentPriorityLevel,r0=ze.unstable_ImmediatePriority,s0=ze.unstable_UserBlockingPriority,Ql=ze.unstable_NormalPriority,Zx=ze.unstable_LowPriority,o0=ze.unstable_IdlePriority,Kx=ze.log,Qx=ze.unstable_setDisableYieldValue,bo=null,An=null;function ra(e){if(typeof Kx=="function"&&Qx(e),An&&typeof An.setStrictMode=="function")try{An.setStrictMode(bo,e)}catch{}}var Rn=Math.clz32?Math.clz32:tS,Jx=Math.log,$x=Math.LN2;function tS(e){return e>>>=0,e===0?32:31-(Jx(e)/$x|0)|0}var Zo=256,Ko=4194304;function Pa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dc(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Pa(i):(s&=o,s!==0?a=Pa(s):n||(n=o&~e,n!==0&&(a=Pa(n))))):(o=i&~r,o!==0?a=Pa(o):s!==0?a=Pa(s):n||(n=i&~e,n!==0&&(a=Pa(n)))),a===0?0:t!==0&&t!==a&&!(t&r)&&(r=a&-a,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:a}function Ao(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function eS(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l0(){var e=Zo;return Zo<<=1,!(Zo&4194048)&&(Zo=256),e}function c0(){var e=Ko;return Ko<<=1,!(Ko&62914560)&&(Ko=4194304),e}function Jc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ro(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nS(e,t,n,i,a,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var d=31-Rn(n),h=1<<d;o[d]=0,l[d]=-1;var f=c[d];if(f!==null)for(c[d]=null,d=0;d<f.length;d++){var p=f[d];p!==null&&(p.lane&=-536870913)}n&=~h}i!==0&&u0(e,i,0),r!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function u0(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Rn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function f0(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Rn(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function id(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ad(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function h0(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:Uv(e.type))}function iS(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var Ta=Math.random().toString(36).slice(2),$e="__reactFiber$"+Ta,mn="__reactProps$"+Ta,ps="__reactContainer$"+Ta,xf="__reactEvents$"+Ta,aS="__reactListeners$"+Ta,rS="__reactHandles$"+Ta,Mp="__reactResources$"+Ta,Co="__reactMarker$"+Ta;function rd(e){delete e[$e],delete e[mn],delete e[xf],delete e[aS],delete e[rS]}function Dr(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ps]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wm(e);e!==null;){if(n=e[$e])return n;e=wm(e)}return t}e=n,n=e.parentNode}return null}function ms(e){if(e=e[$e]||e[ps]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Hs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function Gr(e){var t=e[Mp];return t||(t=e[Mp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[Co]=!0}var d0=new Set,p0={};function ir(e,t){Jr(e,t),Jr(e+"Capture",t)}function Jr(e,t){for(p0[e]=t,e=0;e<t.length;e++)d0.add(t[e])}var sS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ep={},Tp={};function oS(e){return vf.call(Tp,e)?!0:vf.call(Ep,e)?!1:sS.test(e)?Tp[e]=!0:(Ep[e]=!0,!1)}function Dl(e,t,n){if(oS(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function _i(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var $c,bp;function br(e){if($c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$c=t&&t[1]||"",bp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$c+e+bp}var tu=!1;function eu(e,t){if(!e||tu)return"";tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var f=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){f=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){f=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?br(n):""}function lS(e){switch(e.tag){case 26:case 27:case 5:return br(e.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 15:return eu(e.type,!1);case 11:return eu(e.type.render,!1);case 1:return eu(e.type,!0);case 31:return br("Activity");default:return""}}function Ap(e){try{var t="";do t+=lS(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function m0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cS(e){var t=m0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jl(e){e._valueTracker||(e._valueTracker=cS(e))}function g0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=m0(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function $l(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var uS=/[\n"\\]/g;function Hn(e){return e.replace(uS,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Sf(e,t,n,i,a,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bn(t)):e.value!==""+Bn(t)&&(e.value=""+Bn(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?yf(e,s,Bn(t)):n!=null?yf(e,s,Bn(n)):i!=null&&e.removeAttribute("value"),a==null&&r!=null&&(e.defaultChecked=!!r),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Bn(o):e.removeAttribute("name")}function _0(e,t,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Bn(n):"",t=t!=null?""+Bn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function yf(e,t,n){t==="number"&&$l(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vr(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Bn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function v0(e,t,n){if(t!=null&&(t=""+Bn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Bn(n):""}function x0(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Fs(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Bn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||fS.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function S0(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Rp(e,a,i)}else for(var r in t)t.hasOwnProperty(r)&&Rp(e,r,t[r])}function sd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return dS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mf=null;function od(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,kr=null;function Cp(e){var t=ms(e);if(t&&(e=t.stateNode)){var n=e[mn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Sf(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Hn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[mn]||null;if(!a)throw Error(j(90));Sf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&g0(i)}break t;case"textarea":v0(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}}}var nu=!1;function y0(e,t,n){if(nu)return e(t,n);nu=!0;try{var i=e(t);return i}finally{if(nu=!1,(Ur!==null||kr!==null)&&(Hc(),Ur&&(t=Ur,e=kr,kr=Ur=null,Cp(t),e)))for(t=0;t<e.length;t++)Cp(e[t])}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var i=n[mn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(Bi)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Ef=!1}var sa=null,ld=null,Ll=null;function M0(){if(Ll)return Ll;var e,t=ld,n=t.length,i,a="value"in sa?sa.value:sa.textContent,r=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(i=1;i<=s&&t[n-i]===a[r-i];i++);return Ll=a.slice(e,1<i?1-i:void 0)}function Nl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function wp(){return!1}function gn(e){function t(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Jo:wp,this.isPropagationStopped=wp,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=gn(ar),wo=ge({},ar,{view:0,detail:0}),pS=gn(wo),iu,au,As,Lc=ge({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==As&&(As&&e.type==="mousemove"?(iu=e.screenX-As.screenX,au=e.screenY-As.screenY):au=iu=0,As=e),iu)},movementY:function(e){return"movementY"in e?e.movementY:au}}),Dp=gn(Lc),mS=ge({},Lc,{dataTransfer:0}),gS=gn(mS),_S=ge({},wo,{relatedTarget:0}),ru=gn(_S),vS=ge({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),xS=gn(vS),SS=ge({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yS=gn(SS),MS=ge({},ar,{data:0}),Up=gn(MS),ES={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bS[e])?!!t[e]:!1}function cd(){return AS}var RS=ge({},wo,{key:function(e){if(e.key){var t=ES[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?TS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),CS=gn(RS),wS=ge({},Lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=gn(wS),DS=ge({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),US=gn(DS),LS=ge({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),NS=gn(LS),OS=ge({},Lc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),PS=gn(OS),IS=ge({},ar,{newState:0,oldState:0}),BS=gn(IS),zS=[9,13,27,32],ud=Bi&&"CompositionEvent"in window,Xs=null;Bi&&"documentMode"in document&&(Xs=document.documentMode);var FS=Bi&&"TextEvent"in window&&!Xs,E0=Bi&&(!ud||Xs&&8<Xs&&11>=Xs),Np=" ",Op=!1;function T0(e,t){switch(e){case"keyup":return zS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function HS(e,t){switch(e){case"compositionend":return b0(t);case"keypress":return t.which!==32?null:(Op=!0,Np);case"textInput":return e=t.data,e===Np&&Op?null:e;default:return null}}function GS(e,t){if(Lr)return e==="compositionend"||!ud&&T0(e,t)?(e=M0(),Ll=ld=sa=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return E0&&t.locale!=="ko"?null:t.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!VS[e.type]:t==="textarea"}function A0(e,t,n,i){Ur?kr?kr.push(i):kr=[i]:Ur=i,t=_c(t,"onChange"),0<t.length&&(n=new Uc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ws=null,so=null;function kS(e){vv(e,0)}function Nc(e){var t=Hs(e);if(g0(t))return e}function Ip(e,t){if(e==="change")return t}var R0=!1;if(Bi){var su;if(Bi){var ou="oninput"in document;if(!ou){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),ou=typeof Bp.oninput=="function"}su=ou}else su=!1;R0=su&&(!document.documentMode||9<document.documentMode)}function zp(){Ws&&(Ws.detachEvent("onpropertychange",C0),so=Ws=null)}function C0(e){if(e.propertyName==="value"&&Nc(so)){var t=[];A0(t,so,e,od(e)),y0(kS,t)}}function XS(e,t,n){e==="focusin"?(zp(),Ws=t,so=n,Ws.attachEvent("onpropertychange",C0)):e==="focusout"&&zp()}function WS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nc(so)}function YS(e,t){if(e==="click")return Nc(t)}function qS(e,t){if(e==="input"||e==="change")return Nc(t)}function jS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Un=typeof Object.is=="function"?Object.is:jS;function oo(e,t){if(Un(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!vf.call(t,a)||!Un(e[a],t[a]))return!1}return!0}function Fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,t){var n=Fp(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Fp(n)}}function w0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?w0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function D0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$l(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$l(e.document)}return t}function fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ZS=Bi&&"documentMode"in document&&11>=document.documentMode,Nr=null,Tf=null,Ys=null,bf=!1;function Gp(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bf||Nr==null||Nr!==$l(i)||(i=Nr,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ys&&oo(Ys,i)||(Ys=i,i=_c(Tf,"onSelect"),0<i.length&&(t=new Uc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Nr)))}function Ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Or={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},lu={},U0={};Bi&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function rr(e){if(lu[e])return lu[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in U0)return lu[e]=t[n];return e}var L0=rr("animationend"),N0=rr("animationiteration"),O0=rr("animationstart"),KS=rr("transitionrun"),QS=rr("transitionstart"),JS=rr("transitioncancel"),P0=rr("transitionend"),I0=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function $n(e,t){I0.set(e,t),ir(t,[e])}var Vp=new WeakMap;function Gn(e,t){if(typeof e=="object"&&e!==null){var n=Vp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ap(t)},Vp.set(e,t),t)}return{value:e,source:t,stack:Ap(t)}}var Pn=[],Pr=0,hd=0;function Oc(){for(var e=Pr,t=hd=Pr=0;t<e;){var n=Pn[t];Pn[t++]=null;var i=Pn[t];Pn[t++]=null;var a=Pn[t];Pn[t++]=null;var r=Pn[t];if(Pn[t++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&B0(n,a,r)}}function Pc(e,t,n,i){Pn[Pr++]=e,Pn[Pr++]=t,Pn[Pr++]=n,Pn[Pr++]=i,hd|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dd(e,t,n,i){return Pc(e,t,n,i),tc(e)}function gs(e,t){return Pc(e,null,null,t),tc(e)}function B0(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(a=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,a&&t!==null&&(a=31-Rn(n),e=r.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),r):null}function tc(e){if(50<no)throw no=0,qf=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ir={};function $S(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(e,t,n,i){return new $S(e,t,n,i)}function pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,t){var n=e.alternate;return n===null?(n=bn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function z0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ol(e,t,n,i,a,r){var s=0;if(i=e,typeof e=="function")pd(e)&&(s=1);else if(typeof e=="string")s=eM(e,n,li.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case pf:return e=bn(31,n,t,a),e.elementType=pf,e.lanes=r,e;case Cr:return Wa(n.children,a,r,t);case i0:s=8,a|=24;break;case ff:return e=bn(12,n,t,a|2),e.elementType=ff,e.lanes=r,e;case hf:return e=bn(13,n,t,a),e.elementType=hf,e.lanes=r,e;case df:return e=bn(19,n,t,a),e.elementType=df,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kx:case Ci:s=10;break t;case a0:s=9;break t;case td:s=11;break t;case ed:s=14;break t;case Ji:s=16,i=null;break t}s=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=bn(s,n,t,a),t.elementType=e,t.type=i,t.lanes=r,t}function Wa(e,t,n,i){return e=bn(7,e,i,t),e.lanes=n,e}function cu(e,t,n){return e=bn(6,e,null,t),e.lanes=n,e}function uu(e,t,n){return t=bn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Br=[],zr=0,ec=null,nc=0,zn=[],Fn=0,Ya=null,wi=1,Di="";function Ia(e,t){Br[zr++]=nc,Br[zr++]=ec,ec=e,nc=t}function F0(e,t,n){zn[Fn++]=wi,zn[Fn++]=Di,zn[Fn++]=Ya,Ya=e;var i=wi;e=Di;var a=32-Rn(i)-1;i&=~(1<<a),n+=1;var r=32-Rn(t)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,wi=1<<32-Rn(t)+a|n<<a|i,Di=r+e}else wi=1<<r|n<<a|i,Di=e}function md(e){e.return!==null&&(Ia(e,1),F0(e,1,0))}function gd(e){for(;e===ec;)ec=Br[--zr],Br[zr]=null,nc=Br[--zr],Br[zr]=null;for(;e===Ya;)Ya=zn[--Fn],zn[Fn]=null,Di=zn[--Fn],zn[Fn]=null,wi=zn[--Fn],zn[Fn]=null}var rn=null,Re=null,te=!1,qa=null,ii=!1,Rf=Error(j(519));function Qa(e){var t=Error(j(418,""));throw lo(Gn(t,e)),Rf}function kp(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[$e]=e,t[mn]=i,n){case"dialog":Vt("cancel",t),Vt("close",t);break;case"iframe":case"object":case"embed":Vt("load",t);break;case"video":case"audio":for(n=0;n<fo.length;n++)Vt(fo[n],t);break;case"source":Vt("error",t);break;case"img":case"image":case"link":Vt("error",t),Vt("load",t);break;case"details":Vt("toggle",t);break;case"input":Vt("invalid",t),_0(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Jl(t);break;case"select":Vt("invalid",t);break;case"textarea":Vt("invalid",t),x0(t,i.value,i.defaultValue,i.children),Jl(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Sv(t.textContent,n)?(i.popover!=null&&(Vt("beforetoggle",t),Vt("toggle",t)),i.onScroll!=null&&Vt("scroll",t),i.onScrollEnd!=null&&Vt("scrollend",t),i.onClick!=null&&(t.onclick=kc),t=!0):t=!1,t||Qa(e)}function Xp(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:rn=rn.return}}function Rs(e){if(e!==rn)return!1;if(!te)return Xp(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$f(e.type,e.memoizedProps)),n=!n),n&&Re&&Qa(e),Xp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Re=Qn(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Re=null}}else t===27?(t=Re,ba(e.type)?(e=nh,nh=null,Re=e):Re=t):Re=rn?Qn(e.stateNode.nextSibling):null;return!0}function Do(){Re=rn=null,te=!1}function Wp(){var e=qa;return e!==null&&(hn===null?hn=e:hn.push.apply(hn,e),qa=null),e}function lo(e){qa===null?qa=[e]:qa.push(e)}var Cf=pi(null),sr=null,Ui=null;function ta(e,t,n){ye(Cf,t._currentValue),t._currentValue=n}function Pi(e){e._currentValue=Cf.current,Ye(Cf)}function wf(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Df(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=a;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),wf(r.return,n,e),i||(s=null);break t}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(j(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),wf(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Uo(e,t,n,i){e=null;for(var a=t,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(j(387));if(s=s.memoizedProps,s!==null){var o=a.type;Un(a.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(a===jl.current){if(s=a.alternate,s===null)throw Error(j(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}a=a.return}e!==null&&Df(t,e,n,i),t.flags|=262144}function ic(e){for(e=e.firstContext;e!==null;){if(!Un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){sr=e,Ui=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tn(e){return H0(sr,e)}function $o(e,t){return sr===null&&Ja(e),H0(e,t)}function H0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ui===null){if(e===null)throw Error(j(308));Ui=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ui=Ui.next=t;return n}var ty=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ey=ze.unstable_scheduleCallback,ny=ze.unstable_NormalPriority,Ie={$$typeof:Ci,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _d(){return{controller:new ty,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&ey(ny,function(){e.controller.abort()})}var qs=null,Uf=0,ts=0,Xr=null;function iy(e,t){if(qs===null){var n=qs=[];Uf=0,ts=Hd(),Xr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Uf++,t.then(Yp,Yp),t}function Yp(){if(--Uf===0&&qs!==null){Xr!==null&&(Xr.status="fulfilled");var e=qs;qs=null,ts=0,Xr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ay(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var qp=wt.S;wt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&iy(e,t),qp!==null&&qp(e,t)};var ja=pi(null);function vd(){var e=ja.current;return e!==null?e:pe.pooledCache}function Pl(e,t){t===null?ye(ja,ja.current):ye(ja,t.pool)}function G0(){var e=vd();return e===null?null:{parent:Ie._currentValue,pool:e}}var No=Error(j(460)),V0=Error(j(474)),Ic=Error(j(542)),Lf={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tl(){}function k0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(tl,tl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kp(e),e;default:if(typeof t.status=="string")t.then(tl,tl);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kp(e),e}throw js=t,No}}var js=null;function Zp(){if(js===null)throw Error(j(459));var e=js;return js=null,e}function Kp(e){if(e===No||e===Ic)throw Error(j(483))}var $i=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=tc(e),B0(e,null,n),t}return Pc(e,i,t,n),tc(e)}function Zs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,f0(e,n)}}function fu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=t:r=r.next=t}else a=r=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Of=!1;function Ks(){if(Of){var e=Xr;if(e!==null)throw e}}function Qs(e,t,n,i){Of=!1;var a=e.updateQueue;$i=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var h=a.baseState;s=0,d=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(jt&f)===f:(i&f)===f){f!==0&&f===ts&&(Of=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var x=e,S=o;f=t;var g=n;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(g,h,f);break t}h=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(g,h,f):x,f==null)break t;h=ge({},h,f);break t;case 2:$i=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=a.callbacks,p===null?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,s|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=h),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),ya|=s,e.lanes=s,e.memoizedState=h}}function X0(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function W0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)X0(n[e],t)}var es=pi(null),ac=pi(0);function Qp(e,t){e=Hi,ye(ac,e),ye(es,t),Hi=e|t.baseLanes}function Pf(){ye(ac,Hi),ye(es,es.current)}function Sd(){Hi=ac.current,Ye(es),Ye(ac)}var xa=0,Gt=null,ce=null,Oe=null,rc=!1,Wr=!1,$a=!1,sc=0,co=0,Yr=null,ry=0;function Ue(){throw Error(j(321))}function yd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Un(e[n],t[n]))return!1;return!0}function Md(e,t,n,i,a,r){return xa=r,Gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wt.H=e===null||e.memoizedState===null?M_:E_,$a=!1,r=n(i,a),$a=!1,Wr&&(r=q0(t,n,i,a)),Y0(e),r}function Y0(e){wt.H=oc;var t=ce!==null&&ce.next!==null;if(xa=0,Oe=ce=Gt=null,rc=!1,co=0,Yr=null,t)throw Error(j(300));e===null||We||(e=e.dependencies,e!==null&&ic(e)&&(We=!0))}function q0(e,t,n,i){Gt=e;var a=0;do{if(Wr&&(Yr=null),co=0,Wr=!1,25<=a)throw Error(j(301));if(a+=1,Oe=ce=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}wt.H=hy,r=t(n,i)}while(Wr);return r}function sy(){var e=wt.H,t=e.useState()[0];return t=typeof t.then=="function"?Oo(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(Gt.flags|=1024),t}function Ed(){var e=sc!==0;return sc=0,e}function Td(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bd(e){if(rc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rc=!1}xa=0,Oe=ce=Gt=null,Wr=!1,co=sc=0,Yr=null}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Gt.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Pe(){if(ce===null){var e=Gt.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Oe===null?Gt.memoizedState:Oe.next;if(t!==null)Oe=t,ce=e;else{if(e===null)throw Gt.alternate===null?Error(j(467)):Error(j(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Oe===null?Gt.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Ad(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Oo(e){var t=co;return co+=1,Yr===null&&(Yr=[]),e=k0(Yr,e,t),t=Gt,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,wt.H=t===null||t.memoizedState===null?M_:E_),e}function Bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Oo(e);if(e.$$typeof===Ci)return tn(e)}throw Error(j(438,String(e)))}function Rd(e){var t=null,n=Gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Gt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ad(),Gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Xx;return t.index++,n}function zi(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=Pe();return Cd(t,ce,e)}function Cd(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var a=e.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}t.baseQueue=a=r,i.pending=null}if(r=e.baseState,a===null)e.memoizedState=r;else{t=a.next;var o=s=null,l=null,c=t,d=!1;do{var h=c.lane&-536870913;if(h!==c.lane?(jt&h)===h:(xa&h)===h){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),h===ts&&(d=!0);else if((xa&f)===f){c=c.next,f===ts&&(d=!0);continue}else h={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Gt.lanes|=f,ya|=f;h=c.action,$a&&n(r,h),r=c.hasEagerState?c.eagerState:n(r,h)}else f={lane:h,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Gt.lanes|=h,ya|=h;c=c.next}while(c!==null&&c!==t);if(l===null?s=r:l.next=o,!Un(r,e.memoizedState)&&(We=!0,d&&(n=Xr,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function hu(e){var t=Pe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,r=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=e(r,s.action),s=s.next;while(s!==a);Un(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function j0(e,t,n){var i=Gt,a=Pe(),r=te;if(r){if(n===void 0)throw Error(j(407));n=n()}else n=t();var s=!Un((ce||a).memoizedState,n);s&&(a.memoizedState=n,We=!0),a=a.queue;var o=Q0.bind(null,i,a,e);if(Po(2048,8,o,[e]),a.getSnapshot!==t||s||Oe!==null&&Oe.memoizedState.tag&1){if(i.flags|=2048,ns(9,zc(),K0.bind(null,i,a,n,t),null),pe===null)throw Error(j(349));r||xa&124||Z0(i,t,n)}return n}function Z0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Gt.updateQueue,t===null?(t=Ad(),Gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function K0(e,t,n,i){t.value=n,t.getSnapshot=i,J0(t)&&$0(e)}function Q0(e,t,n){return n(function(){J0(t)&&$0(e)})}function J0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Un(e,n)}catch{return!0}}function $0(e){var t=gs(e,2);t!==null&&wn(t,e,2)}function If(e){var t=un();if(typeof e=="function"){var n=e;if(e=n(),$a){ra(!0);try{n()}finally{ra(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},t}function t_(e,t,n,i){return e.baseState=n,Cd(e,ce,typeof i=="function"?i:zi)}function oy(e,t,n,i,a){if(Fc(e))throw Error(j(485));if(e=t.action,e!==null){var r={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};wt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,e_(t,r)):(r.next=n.next,t.pending=n.next=r)}}function e_(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var r=wt.T,s={};wt.T=s;try{var o=n(a,i),l=wt.S;l!==null&&l(s,o),Jp(e,t,o)}catch(c){Bf(e,t,c)}finally{wt.T=r}}else try{r=n(a,i),Jp(e,t,r)}catch(c){Bf(e,t,c)}}function Jp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){$p(e,t,i)},function(i){return Bf(e,t,i)}):$p(e,t,n)}function $p(e,t,n){t.status="fulfilled",t.value=n,n_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,e_(e,n)))}function Bf(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,n_(t),t=t.next;while(t!==i)}e.action=null}function n_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function i_(e,t){return t}function tm(e,t){if(te){var n=pe.formState;if(n!==null){t:{var i=Gt;if(te){if(Re){e:{for(var a=Re,r=ii;a.nodeType!==8;){if(!r){a=null;break e}if(a=Qn(a.nextSibling),a===null){a=null;break e}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){Re=Qn(a.nextSibling),i=a.data==="F!";break t}}Qa(i)}i=!1}i&&(t=n[0])}}return n=un(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i_,lastRenderedState:t},n.queue=i,n=x_.bind(null,Gt,i),i.dispatch=n,i=If(!1),r=Ld.bind(null,Gt,!1,i.queue),i=un(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=oy.bind(null,Gt,a,r,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function em(e){var t=Pe();return a_(t,ce,e)}function a_(e,t,n){if(t=Cd(e,t,i_)[0],e=Il(zi)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Oo(t)}catch(s){throw s===No?Ic:s}else i=t;t=Pe();var a=t.queue,r=a.dispatch;return n!==t.memoizedState&&(Gt.flags|=2048,ns(9,zc(),ly.bind(null,a,n),null)),[i,r,e]}function ly(e,t){e.action=t}function nm(e){var t=Pe(),n=ce;if(n!==null)return a_(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ns(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Gt.updateQueue,t===null&&(t=Ad(),Gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function zc(){return{destroy:void 0,resource:void 0}}function r_(){return Pe().memoizedState}function Bl(e,t,n,i){var a=un();i=i===void 0?null:i,Gt.flags|=e,a.memoizedState=ns(1|t,zc(),n,i)}function Po(e,t,n,i){var a=Pe();i=i===void 0?null:i;var r=a.memoizedState.inst;ce!==null&&i!==null&&yd(i,ce.memoizedState.deps)?a.memoizedState=ns(t,r,n,i):(Gt.flags|=e,a.memoizedState=ns(1|t,r,n,i))}function im(e,t){Bl(8390656,8,e,t)}function s_(e,t){Po(2048,8,e,t)}function o_(e,t){return Po(4,2,e,t)}function l_(e,t){return Po(4,4,e,t)}function c_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function u_(e,t,n){n=n!=null?n.concat([e]):null,Po(4,4,c_.bind(null,t,e),n)}function wd(){}function f_(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&yd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function h_(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&yd(t,i[1]))return i[0];if(i=e(),$a){ra(!0);try{e()}finally{ra(!1)}}return n.memoizedState=[i,t],i}function Dd(e,t,n){return n===void 0||xa&1073741824?e.memoizedState=t:(e.memoizedState=n,e=nv(),Gt.lanes|=e,ya|=e,n)}function d_(e,t,n,i){return Un(n,t)?n:es.current!==null?(e=Dd(e,n,i),Un(e,t)||(We=!0),e):xa&42?(e=nv(),Gt.lanes|=e,ya|=e,t):(We=!0,e.memoizedState=n)}function p_(e,t,n,i,a){var r=ee.p;ee.p=r!==0&&8>r?r:8;var s=wt.T,o={};wt.T=o,Ld(e,!1,t,n);try{var l=a(),c=wt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=ay(l,i);Js(e,t,d,Cn(e))}else Js(e,t,i,Cn(e))}catch(h){Js(e,t,{then:function(){},status:"rejected",reason:h},Cn())}finally{ee.p=r,wt.T=s}}function cy(){}function zf(e,t,n,i){if(e.tag!==5)throw Error(j(476));var a=m_(e).queue;p_(e,a,t,Xa,n===null?cy:function(){return g_(e),n(i)})}function m_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Xa,baseState:Xa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:Xa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function g_(e){var t=m_(e).next.queue;Js(e,t,{},Cn())}function Ud(){return tn(mo)}function __(){return Pe().memoizedState}function v_(){return Pe().memoizedState}function uy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Cn();e=ua(n);var i=fa(t,e,n);i!==null&&(wn(i,t,n),Zs(i,t,n)),t={cache:_d()},e.payload=t;return}t=t.return}}function fy(e,t,n){var i=Cn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e)?S_(t,n):(n=dd(e,t,n,i),n!==null&&(wn(n,e,i),y_(n,t,i)))}function x_(e,t,n){var i=Cn();Js(e,t,n,i)}function Js(e,t,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))S_(t,a);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Un(o,s))return Pc(e,t,a,0),pe===null&&Oc(),!1}catch{}finally{}if(n=dd(e,t,a,i),n!==null)return wn(n,e,i),y_(n,t,i),!0}return!1}function Ld(e,t,n,i){if(i={lane:2,revertLane:Hd(),action:i,hasEagerState:!1,eagerState:null,next:null},Fc(e)){if(t)throw Error(j(479))}else t=dd(e,n,i,2),t!==null&&wn(t,e,2)}function Fc(e){var t=e.alternate;return e===Gt||t!==null&&t===Gt}function S_(e,t){Wr=rc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function y_(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,f0(e,n)}}var oc={readContext:tn,use:Bc,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},M_={readContext:tn,use:Bc,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:im,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Bl(4194308,4,c_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){Bl(4,2,e,t)},useMemo:function(e,t){var n=un();t=t===void 0?null:t;var i=e();if($a){ra(!0);try{e()}finally{ra(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=un();if(n!==void 0){var a=n(t);if($a){ra(!0);try{n(t)}finally{ra(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=fy.bind(null,Gt,e),[i.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:function(e){e=If(e);var t=e.queue,n=x_.bind(null,Gt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:wd,useDeferredValue:function(e,t){var n=un();return Dd(n,e,t)},useTransition:function(){var e=If(!1);return e=p_.bind(null,Gt,e.queue,!0,!1),un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Gt,a=un();if(te){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),pe===null)throw Error(j(349));jt&124||Z0(i,t,n)}a.memoizedState=n;var r={value:n,getSnapshot:t};return a.queue=r,im(Q0.bind(null,i,r,e),[e]),i.flags|=2048,ns(9,zc(),K0.bind(null,i,r,n,t),null),n},useId:function(){var e=un(),t=pe.identifierPrefix;if(te){var n=Di,i=wi;n=(i&~(1<<32-Rn(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=sc++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=ry++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ud,useFormState:tm,useActionState:tm,useOptimistic:function(e){var t=un();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ld.bind(null,Gt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Rd,useCacheRefresh:function(){return un().memoizedState=uy.bind(null,Gt)}},E_={readContext:tn,use:Bc,useCallback:f_,useContext:tn,useEffect:s_,useImperativeHandle:u_,useInsertionEffect:o_,useLayoutEffect:l_,useMemo:h_,useReducer:Il,useRef:r_,useState:function(){return Il(zi)},useDebugValue:wd,useDeferredValue:function(e,t){var n=Pe();return d_(n,ce.memoizedState,e,t)},useTransition:function(){var e=Il(zi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Oo(e),t]},useSyncExternalStore:j0,useId:__,useHostTransitionStatus:Ud,useFormState:em,useActionState:em,useOptimistic:function(e,t){var n=Pe();return t_(n,ce,e,t)},useMemoCache:Rd,useCacheRefresh:v_},hy={readContext:tn,use:Bc,useCallback:f_,useContext:tn,useEffect:s_,useImperativeHandle:u_,useInsertionEffect:o_,useLayoutEffect:l_,useMemo:h_,useReducer:hu,useRef:r_,useState:function(){return hu(zi)},useDebugValue:wd,useDeferredValue:function(e,t){var n=Pe();return ce===null?Dd(n,e,t):d_(n,ce.memoizedState,e,t)},useTransition:function(){var e=hu(zi)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Oo(e),t]},useSyncExternalStore:j0,useId:__,useHostTransitionStatus:Ud,useFormState:nm,useActionState:nm,useOptimistic:function(e,t){var n=Pe();return ce!==null?t_(n,ce,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Rd,useCacheRefresh:v_},qr=null,uo=0;function el(e){var t=uo;return uo+=1,qr===null&&(qr=[]),k0(qr,e,t)}function Cs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function nl(e,t){throw t.$$typeof===Vx?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function am(e){var t=e._init;return t(e._payload)}function T_(e){function t(u,m){if(e){var _=u.deletions;_===null?(u.deletions=[m],u.flags|=16):_.push(m)}}function n(u,m){if(!e)return null;for(;m!==null;)t(u,m),m=m.sibling;return null}function i(u){for(var m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function a(u,m){return u=Oi(u,m),u.index=0,u.sibling=null,u}function r(u,m,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<m?(u.flags|=67108866,m):_):(u.flags|=67108866,m)):(u.flags|=1048576,m)}function s(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,m,_,v){return m===null||m.tag!==6?(m=cu(_,u.mode,v),m.return=u,m):(m=a(m,_),m.return=u,m)}function l(u,m,_,v){var b=_.type;return b===Cr?d(u,m,_.props.children,v,_.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ji&&am(b)===m.type)?(m=a(m,_.props),Cs(m,_),m.return=u,m):(m=Ol(_.type,_.key,_.props,null,u.mode,v),Cs(m,_),m.return=u,m)}function c(u,m,_,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=uu(_,u.mode,v),m.return=u,m):(m=a(m,_.children||[]),m.return=u,m)}function d(u,m,_,v,b){return m===null||m.tag!==7?(m=Wa(_,u.mode,v,b),m.return=u,m):(m=a(m,_),m.return=u,m)}function h(u,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=cu(""+m,u.mode,_),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case jo:return _=Ol(m.type,m.key,m.props,null,u.mode,_),Cs(_,m),_.return=u,_;case zs:return m=uu(m,u.mode,_),m.return=u,m;case Ji:var v=m._init;return m=v(m._payload),h(u,m,_)}if(Fs(m)||Ts(m))return m=Wa(m,u.mode,_,null),m.return=u,m;if(typeof m.then=="function")return h(u,el(m),_);if(m.$$typeof===Ci)return h(u,$o(u,m),_);nl(u,m)}return null}function f(u,m,_,v){var b=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return b!==null?null:o(u,m,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return _.key===b?l(u,m,_,v):null;case zs:return _.key===b?c(u,m,_,v):null;case Ji:return b=_._init,_=b(_._payload),f(u,m,_,v)}if(Fs(_)||Ts(_))return b!==null?null:d(u,m,_,v,null);if(typeof _.then=="function")return f(u,m,el(_),v);if(_.$$typeof===Ci)return f(u,m,$o(u,_),v);nl(u,_)}return null}function p(u,m,_,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(m,u,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jo:return u=u.get(v.key===null?_:v.key)||null,l(m,u,v,b);case zs:return u=u.get(v.key===null?_:v.key)||null,c(m,u,v,b);case Ji:var C=v._init;return v=C(v._payload),p(u,m,_,v,b)}if(Fs(v)||Ts(v))return u=u.get(_)||null,d(m,u,v,b,null);if(typeof v.then=="function")return p(u,m,_,el(v),b);if(v.$$typeof===Ci)return p(u,m,_,$o(m,v),b);nl(m,v)}return null}function x(u,m,_,v){for(var b=null,C=null,A=m,D=m=0,T=null;A!==null&&D<_.length;D++){A.index>D?(T=A,A=null):T=A.sibling;var E=f(u,A,_[D],v);if(E===null){A===null&&(A=T);break}e&&A&&E.alternate===null&&t(u,A),m=r(E,m,D),C===null?b=E:C.sibling=E,C=E,A=T}if(D===_.length)return n(u,A),te&&Ia(u,D),b;if(A===null){for(;D<_.length;D++)A=h(u,_[D],v),A!==null&&(m=r(A,m,D),C===null?b=A:C.sibling=A,C=A);return te&&Ia(u,D),b}for(A=i(A);D<_.length;D++)T=p(A,u,D,_[D],v),T!==null&&(e&&T.alternate!==null&&A.delete(T.key===null?D:T.key),m=r(T,m,D),C===null?b=T:C.sibling=T,C=T);return e&&A.forEach(function(U){return t(u,U)}),te&&Ia(u,D),b}function S(u,m,_,v){if(_==null)throw Error(j(151));for(var b=null,C=null,A=m,D=m=0,T=null,E=_.next();A!==null&&!E.done;D++,E=_.next()){A.index>D?(T=A,A=null):T=A.sibling;var U=f(u,A,E.value,v);if(U===null){A===null&&(A=T);break}e&&A&&U.alternate===null&&t(u,A),m=r(U,m,D),C===null?b=U:C.sibling=U,C=U,A=T}if(E.done)return n(u,A),te&&Ia(u,D),b;if(A===null){for(;!E.done;D++,E=_.next())E=h(u,E.value,v),E!==null&&(m=r(E,m,D),C===null?b=E:C.sibling=E,C=E);return te&&Ia(u,D),b}for(A=i(A);!E.done;D++,E=_.next())E=p(A,u,D,E.value,v),E!==null&&(e&&E.alternate!==null&&A.delete(E.key===null?D:E.key),m=r(E,m,D),C===null?b=E:C.sibling=E,C=E);return e&&A.forEach(function(F){return t(u,F)}),te&&Ia(u,D),b}function g(u,m,_,v){if(typeof _=="object"&&_!==null&&_.type===Cr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:t:{for(var b=_.key;m!==null;){if(m.key===b){if(b=_.type,b===Cr){if(m.tag===7){n(u,m.sibling),v=a(m,_.props.children),v.return=u,u=v;break t}}else if(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ji&&am(b)===m.type){n(u,m.sibling),v=a(m,_.props),Cs(v,_),v.return=u,u=v;break t}n(u,m);break}else t(u,m);m=m.sibling}_.type===Cr?(v=Wa(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Ol(_.type,_.key,_.props,null,u.mode,v),Cs(v,_),v.return=u,u=v)}return s(u);case zs:t:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(u,m.sibling),v=a(m,_.children||[]),v.return=u,u=v;break t}else{n(u,m);break}else t(u,m);m=m.sibling}v=uu(_,u.mode,v),v.return=u,u=v}return s(u);case Ji:return b=_._init,_=b(_._payload),g(u,m,_,v)}if(Fs(_))return x(u,m,_,v);if(Ts(_)){if(b=Ts(_),typeof b!="function")throw Error(j(150));return _=b.call(_),S(u,m,_,v)}if(typeof _.then=="function")return g(u,m,el(_),v);if(_.$$typeof===Ci)return g(u,m,$o(u,_),v);nl(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(n(u,m.sibling),v=a(m,_),v.return=u,u=v):(n(u,m),v=cu(_,u.mode,v),v.return=u,u=v),s(u)):n(u,m)}return function(u,m,_,v){try{uo=0;var b=g(u,m,_,v);return qr=null,b}catch(A){if(A===No||A===Ic)throw A;var C=bn(29,A,null,u.mode);return C.lanes=v,C.return=u,C}finally{}}}var is=T_(!0),b_=T_(!1),kn=pi(null),ui=null;function ea(e){var t=e.alternate;ye(Be,Be.current&1),ye(kn,e),ui===null&&(t===null||es.current!==null||t.memoizedState!==null)&&(ui=e)}function A_(e){if(e.tag===22){if(ye(Be,Be.current),ye(kn,e),ui===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(ui=e)}}else na()}function na(){ye(Be,Be.current),ye(kn,kn.current)}function Li(e){Ye(kn),ui===e&&(ui=null),Ye(Be)}var Be=pi(0);function lc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||eh(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function du(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ff={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Cn(),a=ua(i);a.payload=t,n!=null&&(a.callback=n),t=fa(e,a,i),t!==null&&(wn(t,e,i),Zs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Cn(),a=ua(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=fa(e,a,i),t!==null&&(wn(t,e,i),Zs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Cn(),i=ua(n);i.tag=2,t!=null&&(i.callback=t),t=fa(e,i,n),t!==null&&(wn(t,e,n),Zs(t,e,n))}};function rm(e,t,n,i,a,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,s):t.prototype&&t.prototype.isPureReactComponent?!oo(n,i)||!oo(a,r):!0}function sm(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ff.enqueueReplaceState(t,t.state,null)}function tr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ge({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}var cc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function R_(e){cc(e)}function C_(e){console.error(e)}function w_(e){cc(e)}function uc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function om(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Hf(e,t,n){return n=ua(n),n.tag=3,n.payload={element:null},n.callback=function(){uc(e,t)},n}function D_(e){return e=ua(e),e.tag=3,e}function U_(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;e.payload=function(){return a(r)},e.callback=function(){om(t,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){om(t,n,i),typeof a!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function dy(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Uo(t,n,a,!0),n=kn.current,n!==null){switch(n.tag){case 13:return ui===null?jf():n.alternate===null&&Ce===0&&(Ce=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Lf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Tu(e,i,a)),!1;case 22:return n.flags|=65536,i===Lf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Tu(e,i,a)),!1}throw Error(j(435,n.tag))}return Tu(e,i,a),jf(),!1}if(te)return t=kn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Rf&&(e=Error(j(422),{cause:i}),lo(Gn(e,n)))):(i!==Rf&&(t=Error(j(423),{cause:i}),lo(Gn(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Gn(i,n),a=Hf(e.stateNode,i,a),fu(e,a),Ce!==4&&(Ce=2)),!1;var r=Error(j(520),{cause:i});if(r=Gn(r,n),eo===null?eo=[r]:eo.push(r),Ce!==4&&(Ce=2),t===null)return!0;i=Gn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Hf(n.stateNode,i,e),fu(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ha===null||!ha.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=D_(a),U_(a,e,n,i),fu(n,a),!1}n=n.return}while(n!==null);return!1}var L_=Error(j(461)),We=!1;function qe(e,t,n,i){t.child=e===null?b_(t,null,n,i):is(t,e.child,n,i)}function lm(e,t,n,i,a){n=n.render;var r=t.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return Ja(t),i=Md(e,t,n,s,r,a),o=Ed(),e!==null&&!We?(Td(e,t,a),Fi(e,t,a)):(te&&o&&md(t),t.flags|=1,qe(e,t,i,a),t.child)}function cm(e,t,n,i,a){if(e===null){var r=n.type;return typeof r=="function"&&!pd(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,N_(e,t,r,i,a)):(e=Ol(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Nd(e,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(s,i)&&e.ref===t.ref)return Fi(e,t,a)}return t.flags|=1,e=Oi(r,i),e.ref=t.ref,e.return=t,t.child=e}function N_(e,t,n,i,a){if(e!==null){var r=e.memoizedProps;if(oo(r,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=r,Nd(e,a))e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Fi(e,t,a)}return Gf(e,t,n,i,a)}function O_(e,t,n){var i=t.pendingProps,a=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if(t.flags&128){if(i=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return um(e,t,i,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(t,r!==null?r.cachePool:null),r!==null?Qp(t,r):Pf(),A_(t);else return t.lanes=t.childLanes=536870912,um(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Pl(t,r.cachePool),Qp(t,r),na(),t.memoizedState=null):(e!==null&&Pl(t,null),Pf(),na());return qe(e,t,a,n),t.child}function um(e,t,n,i){var a=vd();return a=a===null?null:{parent:Ie._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Pl(t,null),Pf(),A_(t),e!==null&&Uo(e,t,i,!0),null}function zl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gf(e,t,n,i,a){return Ja(t),n=Md(e,t,n,i,void 0,a),i=Ed(),e!==null&&!We?(Td(e,t,a),Fi(e,t,a)):(te&&i&&md(t),t.flags|=1,qe(e,t,n,a),t.child)}function fm(e,t,n,i,a,r){return Ja(t),t.updateQueue=null,n=q0(t,i,n,a),Y0(e),i=Ed(),e!==null&&!We?(Td(e,t,r),Fi(e,t,r)):(te&&i&&md(t),t.flags|=1,qe(e,t,n,r),t.child)}function hm(e,t,n,i,a){if(Ja(t),t.stateNode===null){var r=Ir,s=n.contextType;typeof s=="object"&&s!==null&&(r=tn(s)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ff,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},xd(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?tn(s):Ir,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(du(t,n,s,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Ff.enqueueReplaceState(r,r.state,null),Qs(t,i,r,a),Ks(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=tr(n,o);r.props=l;var c=r.context,d=n.contextType;s=Ir,typeof d=="object"&&d!==null&&(s=tn(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&sm(t,r,i,s),$i=!1;var f=t.memoizedState;r.state=f,Qs(t,i,r,a),Ks(),c=t.memoizedState,o||f!==c||$i?(typeof h=="function"&&(du(t,n,h,i),c=t.memoizedState),(l=$i||rm(t,n,l,i,f,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,Nf(e,t),s=t.memoizedProps,d=tr(n,s),r.props=d,h=t.pendingProps,f=r.context,c=n.contextType,l=Ir,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==h||f!==l)&&sm(t,r,i,l),$i=!1,f=t.memoizedState,r.state=f,Qs(t,i,r,a),Ks();var p=t.memoizedState;s!==h||f!==p||$i||e!==null&&e.dependencies!==null&&ic(e.dependencies)?(typeof o=="function"&&(du(t,n,o,i),p=t.memoizedState),(d=$i||rm(t,n,d,i,f,p,l)||e!==null&&e.dependencies!==null&&ic(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,zl(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=is(t,e.child,null,a),t.child=is(t,null,n,a)):qe(e,t,n,a),t.memoizedState=r.state,e=t.child):e=Fi(e,t,a),e}function dm(e,t,n,i){return Do(),t.flags|=256,qe(e,t,n,i),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mu(e){return{baseLanes:e,cachePool:G0()}}function gu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vn),e}function P_(e,t,n){var i=t.pendingProps,a=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(a?ea(t):na(),te){var o=Re,l;if(l=o){t:{for(l=o,o=ii;l.nodeType!==8;){if(!o){o=null;break t}if(l=Qn(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Ya!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},l=bn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,rn=t,Re=null,l=!0):l=!1}l||Qa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return eh(o)?t.lanes=32:t.lanes=536870912,null;Li(t)}return o=i.children,i=i.fallback,a?(na(),a=t.mode,o=fc({mode:"hidden",children:o},a),i=Wa(i,a,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,a=t.child,a.memoizedState=mu(n),a.childLanes=gu(e,s,n),t.memoizedState=pu,i):(ea(t),Vf(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(ea(t),t.flags&=-257,t=_u(e,t,n)):t.memoizedState!==null?(na(),t.child=e.child,t.flags|=128,t=null):(na(),a=i.fallback,o=t.mode,i=fc({mode:"visible",children:i.children},o),a=Wa(a,o,n,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,is(t,e.child,null,n),i=t.child,i.memoizedState=mu(n),i.childLanes=gu(e,s,n),t.memoizedState=pu,t=a);else if(ea(t),eh(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(j(419)),i.stack="",i.digest=s,lo({value:i,source:null,stack:null}),t=_u(e,t,n)}else if(We||Uo(e,t,n,!1),s=(n&e.childLanes)!==0,We||s){if(s=pe,s!==null&&(i=n&-n,i=i&42?1:id(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,gs(e,i),wn(s,e,i),L_;o.data==="$?"||jf(),t=_u(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Re=Qn(o.nextSibling),rn=t,te=!0,qa=null,ii=!1,e!==null&&(zn[Fn++]=wi,zn[Fn++]=Di,zn[Fn++]=Ya,wi=e.id,Di=e.overflow,Ya=t),t=Vf(t,i.children),t.flags|=4096);return t}return a?(na(),a=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=Oi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Oi(c,a):(a=Wa(a,o,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=e.child.memoizedState,o===null?o=mu(n):(l=o.cachePool,l!==null?(c=Ie._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=G0(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=gu(e,s,n),t.memoizedState=pu,i):(ea(t),n=e.child,e=n.sibling,n=Oi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Vf(e,t){return t=fc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fc(e,t){return e=bn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function _u(e,t,n){return is(t,e.child,null,n),e=Vf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),wf(e.return,t,n)}function vu(e,t,n,i,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function I_(e,t,n){var i=t.pendingProps,a=i.revealOrder,r=i.tail;if(qe(e,t,i.children,n),i=Be.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pm(e,n,t);else if(e.tag===19)pm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(ye(Be,i),a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&lc(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),vu(t,!1,a,n,r);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&lc(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}vu(t,!0,n,null,r);break;case"together":vu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,!(n&t.childLanes))if(e!==null){if(Uo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nd(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&ic(e)))}function py(e,t,n){switch(t.tag){case 3:Zl(t,t.stateNode.containerInfo),ta(t,Ie,e.memoizedState.cache),Do();break;case 27:case 5:_f(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ea(t),t.flags|=128,null):n&t.child.childLanes?P_(e,t,n):(ea(t),e=Fi(e,t,n),e!==null?e.sibling:null);ea(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Uo(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return I_(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(Be,Be.current),i)break;return null;case 22:case 23:return t.lanes=0,O_(e,t,n);case 24:ta(t,Ie,e.memoizedState.cache)}return Fi(e,t,n)}function B_(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!Nd(e,n)&&!(t.flags&128))return We=!1,py(e,t,n);We=!!(e.flags&131072)}else We=!1,te&&t.flags&1048576&&F0(t,nc,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,a=i._init;if(i=a(i._payload),t.type=i,typeof i=="function")pd(i)?(e=tr(i,e),t.tag=1,t=hm(null,t,i,e,n)):(t.tag=0,t=Gf(null,t,i,e,n));else{if(i!=null){if(a=i.$$typeof,a===td){t.tag=11,t=lm(null,t,i,e,n);break t}else if(a===ed){t.tag=14,t=cm(null,t,i,e,n);break t}}throw t=mf(i)||i,Error(j(306,t,""))}}return t;case 0:return Gf(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=tr(i,t.pendingProps),hm(e,t,i,a,n);case 3:t:{if(Zl(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var r=t.memoizedState;a=r.element,Nf(e,t),Qs(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ta(t,Ie,i),i!==r.cache&&Df(t,[Ie],n,!0),Ks(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=dm(e,t,i,n);break t}else if(i!==a){a=Gn(Error(j(424)),t),lo(a),t=dm(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Qn(e.firstChild),rn=t,te=!0,qa=null,ii=!0,n=b_(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Do(),i===a){t=Fi(e,t,n);break t}qe(e,t,i,n)}t=t.child}return t;case 26:return zl(e,t),e===null?(n=Um(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=vc(ca.current).createElement(n),i[$e]=t,i[mn]=e,Ze(i,n,e),Xe(i),t.stateNode=i):t.memoizedState=Um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _f(t),e===null&&te&&(i=t.stateNode=Ev(t.type,t.pendingProps,ca.current),rn=t,ii=!0,a=Re,ba(t.type)?(nh=a,Re=Qn(i.firstChild)):Re=a),qe(e,t,t.pendingProps.children,n),zl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((a=i=Re)&&(i=Vy(i,t.type,t.pendingProps,ii),i!==null?(t.stateNode=i,rn=t,Re=Qn(i.firstChild),ii=!1,a=!0):a=!1),a||Qa(t)),_f(t),a=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,$f(a,r)?i=null:s!==null&&$f(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Md(e,t,sy,null,null,n),mo._currentValue=a),zl(e,t),qe(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Re)&&(n=ky(n,t.pendingProps,ii),n!==null?(t.stateNode=n,rn=t,Re=null,e=!0):e=!1),e||Qa(t)),null;case 13:return P_(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=is(t,null,i,n):qe(e,t,i,n),t.child;case 11:return lm(e,t,t.type,t.pendingProps,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ta(t,t.type,i.value),qe(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,Ja(t),a=tn(a),i=i(a),t.flags|=1,qe(e,t,i,n),t.child;case 14:return cm(e,t,t.type,t.pendingProps,n);case 15:return N_(e,t,t.type,t.pendingProps,n);case 19:return I_(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=fc(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Oi(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return O_(e,t,n);case 24:return Ja(t),i=tn(Ie),e===null?(a=vd(),a===null&&(a=pe,r=_d(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),t.memoizedState={parent:i,cache:a},xd(t),ta(t,Ie,a)):(e.lanes&n&&(Nf(e,t),Qs(t,null,null,n),Ks()),a=e.memoizedState,r=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,Ie,i)):(i=r.cache,ta(t,Ie,i),i!==a.cache&&Df(t,[Ie],n,!0))),qe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function vi(e){e.flags|=4}function mm(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Av(t)){if(t=kn.current,t!==null&&((jt&4194048)===jt?ui!==null:(jt&62914560)!==jt&&!(jt&536870912)||t!==ui))throw js=Lf,V0;e.flags|=8192}}function il(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?c0():536870912,e.lanes|=t,as|=t)}function ws(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function my(e,t,n){var i=t.pendingProps;switch(gd(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Pi(Ie),Qr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Rs(t)?vi(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wp())),Te(t),null;case 26:return n=t.memoizedState,e===null?(vi(t),n!==null?(Te(t),mm(t,n)):(Te(t),t.flags&=-16777217)):n?n!==e.memoizedState?(vi(t),Te(t),mm(t,n)):(Te(t),t.flags&=-16777217):(e.memoizedProps!==i&&vi(t),Te(t),t.flags&=-16777217),null;case 27:Kl(t),n=ca.current;var a=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Te(t),null}e=li.current,Rs(t)?kp(t):(e=Ev(a,i,n),t.stateNode=e,vi(t))}return Te(t),null;case 5:if(Kl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return Te(t),null}if(e=li.current,Rs(t))kp(t);else{switch(a=vc(ca.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}e[$e]=t,e[mn]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;t:switch(Ze(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&vi(t)}}return Te(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&vi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=ca.current,Rs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=rn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[$e]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Sv(e.nodeValue,n)),e||Qa(t)}else e=vc(e).createTextNode(i),e[$e]=t,t.stateNode=e}return Te(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Rs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[$e]=t}else Do(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),a=!1}else a=Wp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Li(t),t):(Li(t),null)}if(Li(t),t.flags&128)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),il(t,t.updateQueue),Te(t),null;case 4:return Qr(),e===null&&Gd(t.stateNode.containerInfo),Te(t),null;case 10:return Pi(t.type),Te(t),null;case 19:if(Ye(Be),a=t.memoizedState,a===null)return Te(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)ws(a,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=lc(e),r!==null){for(t.flags|=128,ws(a,!1),e=r.updateQueue,t.updateQueue=e,il(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)z0(n,e),n=n.sibling;return ye(Be,Be.current&1|2),t.child}e=e.sibling}a.tail!==null&&ci()>dc&&(t.flags|=128,i=!0,ws(a,!1),t.lanes=4194304)}else{if(!i)if(e=lc(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,il(t,e),ws(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!te)return Te(t),null}else 2*ci()-a.renderingStartTime>dc&&n!==536870912&&(t.flags|=128,i=!0,ws(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ci(),t.sibling=null,e=Be.current,ye(Be,i?e&1|2:e&1),t):(Te(t),null);case 22:case 23:return Li(t),Sd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&il(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Ye(ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pi(Ie),Te(t),null;case 25:return null;case 30:return null}throw Error(j(156,t.tag))}function gy(e,t){switch(gd(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pi(Ie),Qr(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Kl(t),null;case 13:if(Li(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Do()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Be),null;case 4:return Qr(),null;case 10:return Pi(t.type),null;case 22:case 23:return Li(t),Sd(),e!==null&&Ye(ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Pi(Ie),null;case 25:return null;default:return null}}function z_(e,t){switch(gd(t),t.tag){case 3:Pi(Ie),Qr();break;case 26:case 27:case 5:Kl(t);break;case 4:Qr();break;case 13:Li(t);break;case 19:Ye(Be);break;case 10:Pi(t.type);break;case 22:case 23:Li(t),Sd(),e!==null&&Ye(ja);break;case 24:Pi(Ie)}}function Io(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){he(t,t.return,o)}}function Sa(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&e)===e){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=t;var l=n,c=o;try{c()}catch(d){he(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){he(t,t.return,d)}}function F_(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{W0(t,n)}catch(i){he(e,e.return,i)}}}function H_(e,t,n){n.props=tr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){he(e,t,i)}}function $s(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){he(e,t,a)}}function ai(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){he(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){he(e,t,a)}else n.current=null}function G_(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){he(e,e.return,a)}}function xu(e,t,n){try{var i=e.stateNode;By(i,e.type,n,t),i[mn]=t}catch(a){he(e,e.return,a)}}function V_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Su(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||V_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kf(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=kc));else if(i!==4&&(i===27&&ba(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kf(e,t,n),e=e.sibling;e!==null;)kf(e,t,n),e=e.sibling}function hc(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ba(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(hc(e,t,n),e=e.sibling;e!==null;)hc(e,t,n),e=e.sibling}function k_(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ze(t,i,n),t[$e]=e,t[mn]=n}catch(r){he(e,e.return,r)}}var Ai=!1,Le=!1,yu=!1,gm=typeof WeakSet=="function"?WeakSet:Set,ke=null;function _y(e,t){if(e=e.containerInfo,Qf=Mc,e=D0(e),fd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,o=-1,l=-1,c=0,d=0,h=e,f=null;e:for(;;){for(var p;h!==n||a!==0&&h.nodeType!==3||(o=s+a),h!==r||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===e)break e;if(f===n&&++c===a&&(o=s),f===r&&++d===i&&(l=s),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jf={focusedElem:e,selectionRange:n},Mc=!1,ke=t;ke!==null;)if(t=ke,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ke=e;else for(;ke!==null;){switch(t=ke,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,n=t,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=tr(n.type,a,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(S){he(n,n.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)th(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":th(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(j(163))}if(e=t.sibling,e!==null){e.return=t.return,ke=e;break}ke=t.return}}function X_(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(e,n),i&4&&Io(5,n);break;case 1:if(Xi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){he(n,n.return,s)}else{var a=tr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){he(n,n.return,s)}}i&64&&F_(n),i&512&&$s(n,n.return);break;case 3:if(Xi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{W0(e,t)}catch(s){he(n,n.return,s)}}break;case 27:t===null&&i&4&&k_(n);case 26:case 5:Xi(e,n),t===null&&i&4&&G_(n),i&512&&$s(n,n.return);break;case 12:Xi(e,n);break;case 13:Xi(e,n),i&4&&q_(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ay.bind(null,n),Xy(e,n))));break;case 22:if(i=n.memoizedState!==null||Ai,!i){t=t!==null&&t.memoizedState!==null||Le,a=Ai;var r=Le;Ai=i,(Le=t)&&!r?Qi(e,n,(n.subtreeFlags&8772)!==0):Xi(e,n),Ai=a,Le=r}break;case 30:break;default:Xi(e,n)}}function W_(e){var t=e.alternate;t!==null&&(e.alternate=null,W_(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&rd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var xe=null,fn=!1;function xi(e,t,n){for(n=n.child;n!==null;)Y_(e,t,n),n=n.sibling}function Y_(e,t,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(bo,n)}catch{}switch(n.tag){case 26:Le||ai(n,t),xi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Le||ai(n,t);var i=xe,a=fn;ba(n.type)&&(xe=n.stateNode,fn=!1),xi(e,t,n),io(n.stateNode),xe=i,fn=a;break;case 5:Le||ai(n,t);case 6:if(i=xe,a=fn,xe=null,xi(e,t,n),xe=i,fn=a,xe!==null)if(fn)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(r){he(n,t,r)}else try{xe.removeChild(n.stateNode)}catch(r){he(n,t,r)}break;case 18:xe!==null&&(fn?(e=xe,Cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vo(e)):Cm(xe,n.stateNode));break;case 4:i=xe,a=fn,xe=n.stateNode.containerInfo,fn=!0,xi(e,t,n),xe=i,fn=a;break;case 0:case 11:case 14:case 15:Le||Sa(2,n,t),Le||Sa(4,n,t),xi(e,t,n);break;case 1:Le||(ai(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&H_(n,t,i)),xi(e,t,n);break;case 21:xi(e,t,n);break;case 22:Le=(i=Le)||n.memoizedState!==null,xi(e,t,n),Le=i;break;default:xi(e,t,n)}}function q_(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(n){he(t,t.return,n)}}function vy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gm),t;default:throw Error(j(435,e.tag))}}function Mu(e,t){var n=vy(e);t.forEach(function(i){var a=Ry.bind(null,e,i);n.has(i)||(n.add(i),i.then(a,a))})}function xn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=e,s=t,o=s;t:for(;o!==null;){switch(o.tag){case 27:if(ba(o.type)){xe=o.stateNode,fn=!1;break t}break;case 5:xe=o.stateNode,fn=!1;break t;case 3:case 4:xe=o.stateNode.containerInfo,fn=!0;break t}o=o.return}if(xe===null)throw Error(j(160));Y_(r,s,a),xe=null,fn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)j_(t,e),t=t.sibling}var jn=null;function j_(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),Sn(e),i&4&&(Sa(3,e,e.return),Io(3,e),Sa(5,e,e.return));break;case 1:xn(t,e),Sn(e),i&512&&(Le||n===null||ai(n,n.return)),i&64&&Ai&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=jn;if(xn(t,e),Sn(e),i&512&&(Le||n===null||ai(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;e:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[Co]||r[$e]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),Ze(r,i,n),r[$e]=e,Xe(r),i=r;break t;case"link":var s=Nm("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;case"meta":if(s=Nm("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break e}}r=a.createElement(i),Ze(r,i,n),a.head.appendChild(r);break;default:throw Error(j(468,i))}r[$e]=e,Xe(r),i=r}e.stateNode=i}else Om(a,e.type,e.stateNode);else e.stateNode=Lm(a,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Om(a,e.type,e.stateNode):Lm(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xu(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),Sn(e),i&512&&(Le||n===null||ai(n,n.return)),n!==null&&i&4&&xu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),Sn(e),i&512&&(Le||n===null||ai(n,n.return)),e.flags&32){a=e.stateNode;try{$r(a,"")}catch(p){he(e,e.return,p)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,xu(e,a,n!==null?n.memoizedProps:a)),i&1024&&(yu=!0);break;case 6:if(xn(t,e),Sn(e),i&4){if(e.stateNode===null)throw Error(j(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){he(e,e.return,p)}}break;case 3:if(Gl=null,a=jn,jn=xc(t.containerInfo),xn(t,e),jn=a,Sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(p){he(e,e.return,p)}yu&&(yu=!1,Z_(e));break;case 4:i=jn,jn=xc(e.stateNode.containerInfo),xn(t,e),Sn(e),jn=i;break;case 12:xn(t,e),Sn(e);break;case 13:xn(t,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zd=ci()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mu(e,i)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Ai,d=Le;if(Ai=c||a,Le=d||l,xn(t,e),Le=d,Ai=c,Sn(e),i&8192)t:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||Ai||Le||Ba(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var h=l.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){he(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){he(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Mu(e,n))));break;case 19:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Mu(e,i)));break;case 30:break;case 21:break;default:xn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(V_(i)){n=i;break}i=i.return}if(n==null)throw Error(j(160));switch(n.tag){case 27:var a=n.stateNode,r=Su(e);hc(e,r,a);break;case 5:var s=n.stateNode;n.flags&32&&($r(s,""),n.flags&=-33);var o=Su(e);hc(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Su(e);kf(e,c,l);break;default:throw Error(j(161))}}catch(d){he(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Z_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Z_(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)X_(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Sa(4,t,t.return),Ba(t);break;case 1:ai(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&H_(t,t.return,n),Ba(t);break;case 27:io(t.stateNode);case 26:case 5:ai(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:Qi(a,r,n),Io(4,r);break;case 1:if(Qi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){he(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)X0(l[a],o)}catch(c){he(i,i.return,c)}}n&&s&64&&F_(r),$s(r,r.return);break;case 27:k_(r);case 26:case 5:Qi(a,r,n),n&&i===null&&s&4&&G_(r),$s(r,r.return);break;case 12:Qi(a,r,n);break;case 13:Qi(a,r,n),n&&s&4&&q_(a,r);break;case 22:r.memoizedState===null&&Qi(a,r,n),$s(r,r.return);break;case 30:break;default:Qi(a,r,n)}t=t.sibling}}function Od(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lo(n))}function Pd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e))}function ei(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)K_(e,t,n,i),t=t.sibling}function K_(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ei(e,t,n,i),a&2048&&Io(9,t);break;case 1:ei(e,t,n,i);break;case 3:ei(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e)));break;case 12:if(a&2048){ei(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){he(t,t.return,l)}}else ei(e,t,n,i);break;case 13:ei(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?ei(e,t,n,i):to(e,t):r._visibility&2?ei(e,t,n,i):(r._visibility|=2,Ar(e,t,n,i,(t.subtreeFlags&10256)!==0)),a&2048&&Od(s,t);break;case 24:ei(e,t,n,i),a&2048&&Pd(t.alternate,t);break;default:ei(e,t,n,i)}}function Ar(e,t,n,i,a){for(a=a&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Ar(r,s,o,l,a),Io(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Ar(r,s,o,l,a):to(r,s):(d._visibility|=2,Ar(r,s,o,l,a)),a&&c&2048&&Od(s.alternate,s);break;case 24:Ar(r,s,o,l,a),a&&c&2048&&Pd(s.alternate,s);break;default:Ar(r,s,o,l,a)}t=t.sibling}}function to(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:to(n,i),a&2048&&Od(i.alternate,i);break;case 24:to(n,i),a&2048&&Pd(i.alternate,i);break;default:to(n,i)}t=t.sibling}}var Gs=8192;function lr(e){if(e.subtreeFlags&Gs)for(e=e.child;e!==null;)Q_(e),e=e.sibling}function Q_(e){switch(e.tag){case 26:lr(e),e.flags&Gs&&e.memoizedState!==null&&iM(jn,e.memoizedState,e.memoizedProps);break;case 5:lr(e);break;case 3:case 4:var t=jn;jn=xc(e.stateNode.containerInfo),lr(e),jn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Gs,Gs=16777216,lr(e),Gs=t):lr(e));break;default:lr(e)}}function J_(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ds(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,tv(i,e)}J_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$_(e),e=e.sibling}function $_(e){switch(e.tag){case 0:case 11:case 15:Ds(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:Ds(e);break;case 12:Ds(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Ds(e);break;default:Ds(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ke=i,tv(i,e)}J_(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sa(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function tv(e,t){for(;ke!==null;){var n=ke;switch(n.tag){case 0:case 11:case 15:Sa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ke=i;else t:for(n=e;ke!==null;){i=ke;var a=i.sibling,r=i.return;if(W_(i),i===n){ke=null;break t}if(a!==null){a.return=r,ke=a;break t}ke=r}}}var xy={getCacheForType:function(e){var t=tn(Ie),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Sy=typeof WeakMap=="function"?WeakMap:Map,re=0,pe=null,kt=null,jt=0,ae=0,En=null,oa=!1,_s=!1,Id=!1,Hi=0,Ce=0,ya=0,Za=0,Bd=0,Vn=0,as=0,eo=null,hn=null,Xf=!1,zd=0,dc=1/0,pc=null,ha=null,je=0,da=null,rs=null,jr=0,Wf=0,Yf=null,ev=null,no=0,qf=null;function Cn(){if(re&2&&jt!==0)return jt&-jt;if(wt.T!==null){var e=ts;return e!==0?e:Hd()}return h0()}function nv(){Vn===0&&(Vn=!(jt&536870912)||te?l0():536870912);var e=kn.current;return e!==null&&(e.flags|=32),Vn}function wn(e,t,n){(e===pe&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(ss(e,0),la(e,jt,Vn,!1)),Ro(e,n),(!(re&2)||e!==pe)&&(e===pe&&(!(re&2)&&(Za|=n),Ce===4&&la(e,jt,Vn,!1)),mi(e))}function iv(e,t,n){if(re&6)throw Error(j(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ao(e,t),a=i?Ey(e,t):Eu(e,t,!0),r=i;do{if(a===0){_s&&!i&&la(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!yy(n)){a=Eu(e,t,!1),r=!1;continue}if(a===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;t:{var o=e;a=eo;var l=o.current.memoizedState.isDehydrated;if(l&&(ss(o,s).flags|=256),s=Eu(o,s,!1),s!==2){if(Id&&!l){o.errorRecoveryDisabledLanes|=r,Za|=r,a=4;break t}r=hn,hn=a,r!==null&&(hn===null?hn=r:hn.push.apply(hn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){ss(e,0),la(e,t,0,!0);break}t:{switch(i=e,r=a,r){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t)break;case 6:la(i,t,Vn,!oa);break t;case 2:hn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(a=zd+300-ci(),10<a)){if(la(i,t,Vn,!oa),Dc(i,0,!0)!==0)break t;i.timeoutHandle=Mv(_m.bind(null,i,n,hn,pc,Xf,t,Vn,Za,as,oa,r,2,-0,0),a);break t}_m(i,n,hn,pc,Xf,t,Vn,Za,as,oa,r,0,-0,0)}}break}while(!0);mi(e)}function _m(e,t,n,i,a,r,s,o,l,c,d,h,f,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:nM},Q_(t),h=aM(),h!==null)){e.cancelPendingCommit=h(xm.bind(null,e,t,r,n,i,a,s,o,l,d,1,f,p)),la(e,r,s,!c);return}xm(e,t,r,n,i,a,s,o,l)}function yy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Un(r(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t,n,i){t&=~Bd,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var r=31-Rn(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&u0(e,n,t)}function Hc(){return re&6?!0:(Bo(0),!1)}function Fd(){if(kt!==null){if(ae===0)var e=kt.return;else e=kt,Ui=sr=null,bd(e),qr=null,uo=0,e=kt;for(;e!==null;)z_(e.alternate,e),e=e.return;kt=null}}function ss(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Fy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Fd(),pe=e,kt=n=Oi(e.current,null),jt=t,ae=0,En=null,oa=!1,_s=Ao(e,t),Id=!1,as=Vn=Bd=Za=ya=Ce=0,hn=eo=null,Xf=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-Rn(i),r=1<<a;t|=e[a],i&=~r}return Hi=t,Oc(),n}function av(e,t){Gt=null,wt.H=oc,t===No||t===Ic?(t=Zp(),ae=3):t===V0?(t=Zp(),ae=4):ae=t===L_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,En=t,kt===null&&(Ce=1,uc(e,Gn(t,e.current)))}function rv(){var e=wt.H;return wt.H=oc,e===null?oc:e}function sv(){var e=wt.A;return wt.A=xy,e}function jf(){Ce=4,oa||(jt&4194048)!==jt&&kn.current!==null||(_s=!0),!(ya&134217727)&&!(Za&134217727)||pe===null||la(pe,jt,Vn,!1)}function Eu(e,t,n){var i=re;re|=2;var a=rv(),r=sv();(pe!==e||jt!==t)&&(pc=null,ss(e,t)),t=!1;var s=Ce;t:do try{if(ae!==0&&kt!==null){var o=kt,l=En;switch(ae){case 8:Fd(),s=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(t=!0);var c=ae;if(ae=0,En=null,Fr(e,o,l,c),n&&_s){s=0;break t}break;default:c=ae,ae=0,En=null,Fr(e,o,l,c)}}My(),s=Ce;break}catch(d){av(e,d)}while(!0);return t&&e.shellSuspendCounter++,Ui=sr=null,re=i,wt.H=a,wt.A=r,kt===null&&(pe=null,jt=0,Oc()),s}function My(){for(;kt!==null;)ov(kt)}function Ey(e,t){var n=re;re|=2;var i=rv(),a=sv();pe!==e||jt!==t?(pc=null,dc=ci()+500,ss(e,t)):_s=Ao(e,t);t:do try{if(ae!==0&&kt!==null){t=kt;var r=En;e:switch(ae){case 1:ae=0,En=null,Fr(e,t,r,1);break;case 2:case 9:if(jp(r)){ae=0,En=null,vm(t);break}t=function(){ae!==2&&ae!==9||pe!==e||(ae=7),mi(e)},r.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:jp(r)?(ae=0,En=null,vm(t)):(ae=0,En=null,Fr(e,t,r,7));break;case 5:var s=null;switch(kt.tag){case 26:s=kt.memoizedState;case 5:case 27:var o=kt;if(!s||Av(s)){ae=0,En=null;var l=o.sibling;if(l!==null)kt=l;else{var c=o.return;c!==null?(kt=c,Gc(c)):kt=null}break e}}ae=0,En=null,Fr(e,t,r,5);break;case 6:ae=0,En=null,Fr(e,t,r,6);break;case 8:Fd(),Ce=6;break t;default:throw Error(j(462))}}Ty();break}catch(d){av(e,d)}while(!0);return Ui=sr=null,wt.H=i,wt.A=a,re=n,kt!==null?0:(pe=null,jt=0,Oc(),Ce)}function Ty(){for(;kt!==null&&!Yx();)ov(kt)}function ov(e){var t=B_(e.alternate,e,Hi);e.memoizedProps=e.pendingProps,t===null?Gc(e):kt=t}function vm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fm(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=fm(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:bd(t);default:z_(n,t),t=kt=z0(t,Hi),t=B_(n,t,Hi)}e.memoizedProps=e.pendingProps,t===null?Gc(e):kt=t}function Fr(e,t,n,i){Ui=sr=null,bd(t),qr=null,uo=0;var a=t.return;try{if(dy(e,a,t,n,jt)){Ce=1,uc(e,Gn(n,e.current)),kt=null;return}}catch(r){if(a!==null)throw kt=a,r;Ce=1,uc(e,Gn(n,e.current)),kt=null;return}t.flags&32768?(te||i===1?e=!0:_s||jt&536870912?e=!1:(oa=e=!0,(i===2||i===9||i===3||i===6)&&(i=kn.current,i!==null&&i.tag===13&&(i.flags|=16384))),lv(t,e)):Gc(t)}function Gc(e){var t=e;do{if(t.flags&32768){lv(t,oa);return}e=t.return;var n=my(t.alternate,t,Hi);if(n!==null){kt=n;return}if(t=t.sibling,t!==null){kt=t;return}kt=t=e}while(t!==null);Ce===0&&(Ce=5)}function lv(e,t){do{var n=gy(e.alternate,e);if(n!==null){n.flags&=32767,kt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){kt=e;return}kt=e=n}while(e!==null);Ce=6,kt=null}function xm(e,t,n,i,a,r,s,o,l){e.cancelPendingCommit=null;do Vc();while(je!==0);if(re&6)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));if(r=t.lanes|t.childLanes,r|=hd,nS(e,n,r,s,o,l),e===pe&&(kt=pe=null,jt=0),rs=t,da=e,jr=n,Wf=r,Yf=a,ev=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Cy(Ql,function(){return dv(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=wt.T,wt.T=null,a=ee.p,ee.p=2,s=re,re|=4;try{_y(e,t,n)}finally{re=s,ee.p=a,wt.T=i}}je=1,cv(),uv(),fv()}}function cv(){if(je===1){je=0;var e=da,t=rs,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=wt.T,wt.T=null;var i=ee.p;ee.p=2;var a=re;re|=4;try{j_(t,e);var r=Jf,s=D0(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&w0(o.ownerDocument.documentElement,o)){if(l!==null&&fd(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var p=f.getSelection(),x=o.textContent.length,S=Math.min(l.start,x),g=l.end===void 0?S:Math.min(l.end,x);!p.extend&&S>g&&(s=g,g=S,S=s);var u=Hp(o,S),m=Hp(o,g);if(u&&m&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==m.node||p.focusOffset!==m.offset)){var _=h.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),S>g?(p.addRange(_),p.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),p.addRange(_))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var v=h[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Mc=!!Qf,Jf=Qf=null}finally{re=a,ee.p=i,wt.T=n}}e.current=t,je=2}}function uv(){if(je===2){je=0;var e=da,t=rs,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=wt.T,wt.T=null;var i=ee.p;ee.p=2;var a=re;re|=4;try{X_(e,t.alternate,t)}finally{re=a,ee.p=i,wt.T=n}}je=3}}function fv(){if(je===4||je===3){je=0,qx();var e=da,t=rs,n=jr,i=ev;t.subtreeFlags&10256||t.flags&10256?je=5:(je=0,rs=da=null,hv(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(ha=null),ad(n),t=t.stateNode,An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(bo,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=wt.T,a=ee.p,ee.p=2,wt.T=null;try{for(var r=e.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{wt.T=t,ee.p=a}}jr&3&&Vc(),mi(e),a=e.pendingLanes,n&4194090&&a&42?e===qf?no++:(no=0,qf=e):no=0,Bo(0)}}function hv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lo(t)))}function Vc(e){return cv(),uv(),fv(),dv()}function dv(){if(je!==5)return!1;var e=da,t=Wf;Wf=0;var n=ad(jr),i=wt.T,a=ee.p;try{ee.p=32>n?32:n,wt.T=null,n=Yf,Yf=null;var r=da,s=jr;if(je=0,rs=da=null,jr=0,re&6)throw Error(j(331));var o=re;if(re|=4,$_(r.current),K_(r,r.current,s,n),re=o,Bo(0,!1),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(bo,r)}catch{}return!0}finally{ee.p=a,wt.T=i,hv(e,t)}}function Sm(e,t,n){t=Gn(n,t),t=Hf(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(Ro(e,2),mi(e))}function he(e,t,n){if(e.tag===3)Sm(e,e,n);else for(;t!==null;){if(t.tag===3){Sm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ha===null||!ha.has(i))){e=Gn(n,e),n=D_(2),i=fa(t,n,2),i!==null&&(U_(n,i,t,e),Ro(i,2),mi(i));break}}t=t.return}}function Tu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Sy;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Id=!0,a.add(n),e=by.bind(null,e,t,n),t.then(e,e))}function by(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,pe===e&&(jt&n)===n&&(Ce===4||Ce===3&&(jt&62914560)===jt&&300>ci()-zd?!(re&2)&&ss(e,0):Bd|=n,as===jt&&(as=0)),mi(e)}function pv(e,t){t===0&&(t=c0()),e=gs(e,t),e!==null&&(Ro(e,t),mi(e))}function Ay(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pv(e,n)}function Ry(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),pv(e,n)}function Cy(e,t){return nd(e,t)}var mc=null,Rr=null,Zf=!1,gc=!1,bu=!1,Ka=0;function mi(e){e!==Rr&&e.next===null&&(Rr===null?mc=Rr=e:Rr=Rr.next=e),gc=!0,Zf||(Zf=!0,Dy())}function Bo(e,t){if(!bu&&gc){bu=!0;do for(var n=!1,i=mc;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Rn(42|e)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,ym(i,r))}else r=jt,r=Dc(i,i===pe?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||Ao(i,r)||(n=!0,ym(i,r));i=i.next}while(n);bu=!1}}function wy(){mv()}function mv(){gc=Zf=!1;var e=0;Ka!==0&&(zy()&&(e=Ka),Ka=0);for(var t=ci(),n=null,i=mc;i!==null;){var a=i.next,r=gv(i,t);r===0?(i.next=null,n===null?mc=a:n.next=a,a===null&&(Rr=n)):(n=i,(e!==0||r&3)&&(gc=!0)),i=a}Bo(e)}function gv(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-Rn(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=eS(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=pe,n=jt,n=Dc(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Qc(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ao(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Qc(i),ad(n)){case 2:case 8:n=s0;break;case 32:n=Ql;break;case 268435456:n=o0;break;default:n=Ql}return i=_v.bind(null,e),n=nd(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Qc(i),e.callbackPriority=2,e.callbackNode=null,2}function _v(e,t){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Vc()&&e.callbackNode!==n)return null;var i=jt;return i=Dc(e,e===pe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(iv(e,i,t),gv(e,ci()),e.callbackNode!=null&&e.callbackNode===n?_v.bind(null,e):null)}function ym(e,t){if(Vc())return null;iv(e,t,!0)}function Dy(){Hy(function(){re&6?nd(r0,wy):mv()})}function Hd(){return Ka===0&&(Ka=l0()),Ka}function Mm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function Em(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Uy(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var r=Mm((a[mn]||null).action),s=i.submitter;s&&(t=(t=s[mn]||null)?Mm(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Uc("action","action",null,i,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ka!==0){var l=s?Em(a,s):new FormData(a);zf(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Em(a,s):new FormData(a),zf(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Au=0;Au<Af.length;Au++){var Ru=Af[Au],Ly=Ru.toLowerCase(),Ny=Ru[0].toUpperCase()+Ru.slice(1);$n(Ly,"on"+Ny)}$n(L0,"onAnimationEnd");$n(N0,"onAnimationIteration");$n(O0,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(KS,"onTransitionRun");$n(QS,"onTransitionStart");$n(JS,"onTransitionCancel");$n(P0,"onTransitionEnd");Jr("onMouseEnter",["mouseout","mouseover"]);Jr("onMouseLeave",["mouseout","mouseover"]);Jr("onPointerEnter",["pointerout","pointerover"]);Jr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function vv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(d){cc(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break t;r=o,a.currentTarget=c;try{r(a)}catch(d){cc(d)}a.currentTarget=null,r=l}}}}function Vt(e,t){var n=t[xf];n===void 0&&(n=t[xf]=new Set);var i=e+"__bubble";n.has(i)||(xv(t,e,2,!1),n.add(i))}function Cu(e,t,n){var i=0;t&&(i|=4),xv(n,e,i,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function Gd(e){if(!e[al]){e[al]=!0,d0.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||Cu(n,!1,e),Cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Cu("selectionchange",!1,t))}}function xv(e,t,n,i){switch(Uv(t)){case 2:var a=oM;break;case 8:a=lM;break;default:a=Wd}n=a.bind(null,t,n,e),a=void 0,!Ef||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wu(e,t,n,i,a){var r=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=Dr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue t}o=o.parentNode}}i=i.return}y0(function(){var c=r,d=od(n),h=[];t:{var f=I0.get(e);if(f!==void 0){var p=Uc,x=e;switch(e){case"keypress":if(Nl(n)===0)break t;case"keydown":case"keyup":p=CS;break;case"focusin":x="focus",p=ru;break;case"focusout":x="blur",p=ru;break;case"beforeblur":case"afterblur":p=ru;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=US;break;case L0:case N0:case O0:p=xS;break;case P0:p=NS;break;case"scroll":case"scrollend":p=pS;break;case"wheel":p=PS;break;case"copy":case"cut":case"paste":p=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Lp;break;case"toggle":case"beforetoggle":p=BS}var S=(t&4)!==0,g=!S&&(e==="scroll"||e==="scrollend"),u=S?f!==null?f+"Capture":null:f;S=[];for(var m=c,_;m!==null;){var v=m;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=ro(m,u),v!=null&&S.push(ho(m,v,_))),g)break;m=m.return}0<S.length&&(f=new p(f,x,null,n,d),h.push({event:f,listeners:S}))}}if(!(t&7)){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==Mf&&(x=n.relatedTarget||n.fromElement)&&(Dr(x)||x[ps]))break t;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Dr(x):null,x!==null&&(g=To(x),S=x.tag,x!==g||S!==5&&S!==27&&S!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=Dp,v="onMouseLeave",u="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=Lp,v="onPointerLeave",u="onPointerEnter",m="pointer"),g=p==null?f:Hs(p),_=x==null?f:Hs(x),f=new S(v,m+"leave",p,n,d),f.target=g,f.relatedTarget=_,v=null,Dr(d)===c&&(S=new S(u,m+"enter",x,n,d),S.target=_,S.relatedTarget=g,v=S),g=v,p&&x)e:{for(S=p,u=x,m=0,_=S;_;_=cr(_))m++;for(_=0,v=u;v;v=cr(v))_++;for(;0<m-_;)S=cr(S),m--;for(;0<_-m;)u=cr(u),_--;for(;m--;){if(S===u||u!==null&&S===u.alternate)break e;S=cr(S),u=cr(u)}S=null}else S=null;p!==null&&Tm(h,f,p,S,!1),x!==null&&g!==null&&Tm(h,g,x,S,!0)}}t:{if(f=c?Hs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=Ip;else if(Pp(f))if(R0)b=qS;else{b=WS;var C=XS}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&sd(c.elementType)&&(b=Ip):b=YS;if(b&&(b=b(e,c))){A0(h,b,n,d);break t}C&&C(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&yf(f,"number",f.value)}switch(C=c?Hs(c):window,e){case"focusin":(Pp(C)||C.contentEditable==="true")&&(Nr=C,Tf=c,Ys=null);break;case"focusout":Ys=Tf=Nr=null;break;case"mousedown":bf=!0;break;case"contextmenu":case"mouseup":case"dragend":bf=!1,Gp(h,n,d);break;case"selectionchange":if(ZS)break;case"keydown":case"keyup":Gp(h,n,d)}var A;if(ud)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Lr?T0(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(E0&&n.locale!=="ko"&&(Lr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Lr&&(A=M0()):(sa=d,ld="value"in sa?sa.value:sa.textContent,Lr=!0)),C=_c(c,D),0<C.length&&(D=new Up(D,e,null,n,d),h.push({event:D,listeners:C}),A?D.data=A:(A=b0(n),A!==null&&(D.data=A)))),(A=FS?HS(e,n):GS(e,n))&&(D=_c(c,"onBeforeInput"),0<D.length&&(C=new Up("onBeforeInput","beforeinput",null,n,d),h.push({event:C,listeners:D}),C.data=A)),Uy(h,e,c,n,d)}vv(h,t)})}function ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _c(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=ro(e,n),a!=null&&i.unshift(ho(e,a,r)),a=ro(e,t),a!=null&&i.push(ho(e,a,r))),e.tag===3)return i;e=e.return}return[]}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tm(e,t,n,i,a){for(var r=t._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=ro(n,r),c!=null&&s.unshift(ho(n,c,l))):a||(c=ro(n,r),c!=null&&s.push(ho(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Py=/\r\n?/g,Iy=/\u0000|\uFFFD/g;function bm(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Iy,"")}function Sv(e,t){return t=bm(t),bm(e)===t}function kc(){}function le(e,t,n,i,a,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||$r(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&$r(e,""+i);break;case"className":Qo(e,"class",i);break;case"tabIndex":Qo(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qo(e,n,i);break;case"style":S0(e,i,r);break;case"data":if(t!=="object"){Qo(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&le(e,t,"name",a.name,a,null),le(e,t,"formEncType",a.formEncType,a,null),le(e,t,"formMethod",a.formMethod,a,null),le(e,t,"formTarget",a.formTarget,a,null)):(le(e,t,"encType",a.encType,a,null),le(e,t,"method",a.method,a,null),le(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ul(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=kc);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ul(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),Dl(e,"popover",i);break;case"xlinkActuate":_i(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":_i(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":_i(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":_i(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":_i(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":_i(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":_i(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":_i(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":_i(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hS.get(n)||n,Dl(e,n,i))}}function Kf(e,t,n,i,a,r){switch(n){case"style":S0(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(j(60));e.innerHTML=n}}break;case"children":typeof i=="string"?$r(e,i):(typeof i=="number"||typeof i=="bigint")&&$r(e,""+i);break;case"onScroll":i!=null&&Vt("scroll",e);break;case"onScrollEnd":i!=null&&Vt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=kc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!p0.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),r=e[mn]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Dl(e,n,i)}}}function Ze(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:le(e,t,r,s,n,null)}}a&&le(e,t,"srcSet",n.srcSet,n,null),i&&le(e,t,"src",n.src,n,null);return;case"input":Vt("invalid",e);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:le(e,t,i,d,n,null)}}_0(e,r,o,l,c,s,a,!1),Jl(e);return;case"select":Vt("invalid",e),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:le(e,t,a,o,n,null)}t=r,n=s,e.multiple=!!i,t!=null?Vr(e,!!i,t,!1):n!=null&&Vr(e,!!i,n,!0);return;case"textarea":Vt("invalid",e),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:le(e,t,s,o,n,null)}x0(e,i,a,r),Jl(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:le(e,t,l,i,n,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(i=0;i<fo.length;i++)Vt(fo[i],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:le(e,t,c,i,n,null)}return;default:if(sd(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Kf(e,t,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&le(e,t,o,i,n,null))}function By(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=h;default:i.hasOwnProperty(p)||le(e,t,p,null,i,h)}}for(var f in i){var p=i[f];if(h=n[f],i.hasOwnProperty(f)&&(p!=null||h!=null))switch(f){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(j(137,t));break;default:p!==h&&le(e,t,f,p,i,h)}}Sf(e,s,o,l,c,d,r,a);return;case"select":p=s=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||le(e,t,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&le(e,t,a,r,i,l)}t=o,n=s,i=p,f!=null?Vr(e,!!n,f,!1):!!i!=!!n&&(t!=null?Vr(e,!!n,t,!0):Vr(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:le(e,t,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":f=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(j(91));break;default:a!==r&&le(e,t,s,a,i,r)}v0(e,f,p);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:le(e,t,x,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:le(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!i.hasOwnProperty(S)&&le(e,t,S,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:le(e,t,c,f,i,p)}return;default:if(sd(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!i.hasOwnProperty(g)&&Kf(e,t,g,void 0,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f===void 0&&p===void 0||Kf(e,t,d,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&le(e,t,u,null,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f==null&&p==null||le(e,t,h,f,i,p)}var Qf=null,Jf=null;function vc(e){return e.nodeType===9?e:e.ownerDocument}function Am(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Du=null;function zy(){var e=window.event;return e&&e.type==="popstate"?e===Du?!1:(Du=e,!0):(Du=null,!1)}var Mv=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(e){return Rm.resolve(null).then(e).catch(Gy)}:Mv;function Gy(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function Cm(e,t){var n=t,i=0,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=e.ownerDocument;if(n&1&&io(s.documentElement),n&2&&io(s.body),n&4)for(n=s.head,io(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[Co]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){e.removeChild(r),vo(t);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);vo(t)}function th(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":th(n),rd(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Vy(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Co])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function ky(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qn(e.nextSibling),e===null))return null;return e}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Xy(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var nh=null;function wm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Ev(e,t,n){switch(t=vc(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function io(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);rd(e)}var Xn=new Map,Dm=new Set;function xc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gi=ee.d;ee.d={f:Wy,r:Yy,D:qy,C:jy,L:Zy,m:Ky,X:Jy,S:Qy,M:$y};function Wy(){var e=Gi.f(),t=Hc();return e||t}function Yy(e){var t=ms(e);t!==null&&t.tag===5&&t.type==="form"?g_(t):Gi.r(e)}var vs=typeof document>"u"?null:document;function Tv(e,t,n){var i=vs;if(i&&typeof t=="string"&&t){var a=Hn(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Dm.has(a)||(Dm.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),Ze(t,"link",e),Xe(t),i.head.appendChild(t)))}}function qy(e){Gi.D(e),Tv("dns-prefetch",e,null)}function jy(e,t){Gi.C(e,t),Tv("preconnect",e,t)}function Zy(e,t,n){Gi.L(e,t,n);var i=vs;if(i&&e&&t){var a='link[rel="preload"][as="'+Hn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Hn(n.imageSizes)+'"]')):a+='[href="'+Hn(e)+'"]';var r=a;switch(t){case"style":r=os(e);break;case"script":r=xs(e)}Xn.has(r)||(e=ge({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Xn.set(r,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(zo(r))||t==="script"&&i.querySelector(Fo(r))||(t=i.createElement("link"),Ze(t,"link",e),Xe(t),i.head.appendChild(t)))}}function Ky(e,t){Gi.m(e,t);var n=vs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Hn(i)+'"][href="'+Hn(e)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=xs(e)}if(!Xn.has(r)&&(e=ge({rel:"modulepreload",href:e},t),Xn.set(r,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fo(r)))return}i=n.createElement("link"),Ze(i,"link",e),Xe(i),n.head.appendChild(i)}}}function Qy(e,t,n){Gi.S(e,t,n);var i=vs;if(i&&e){var a=Gr(i).hoistableStyles,r=os(e);t=t||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(zo(r)))o.loading=5;else{e=ge({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Xn.get(r))&&Vd(e,n);var l=s=i.createElement("link");Xe(l),Ze(l,"link",e),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hl(s,t,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function Jy(e,t){Gi.X(e,t);var n=vs;if(n&&e){var i=Gr(n).hoistableScripts,a=xs(e),r=i.get(a);r||(r=n.querySelector(Fo(a)),r||(e=ge({src:e,async:!0},t),(t=Xn.get(a))&&kd(e,t),r=n.createElement("script"),Xe(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function $y(e,t){Gi.M(e,t);var n=vs;if(n&&e){var i=Gr(n).hoistableScripts,a=xs(e),r=i.get(a);r||(r=n.querySelector(Fo(a)),r||(e=ge({src:e,async:!0,type:"module"},t),(t=Xn.get(a))&&kd(e,t),r=n.createElement("script"),Xe(r),Ze(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function Um(e,t,n,i){var a=(a=ca.current)?xc(a):null;if(!a)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=os(n.href),n=Gr(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=os(n.href);var r=Gr(a).hoistableStyles,s=r.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=a.querySelector(zo(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Xn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Xn.set(e,n),r||tM(a,e,n,s.state))),t&&i===null)throw Error(j(528,""));return s}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=xs(n),n=Gr(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function os(e){return'href="'+Hn(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function bv(e){return ge({},e,{"data-precedence":e.precedence,precedence:null})}function tM(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Ze(t,"link",n),Xe(t),e.head.appendChild(t))}function xs(e){return'[src="'+Hn(e)+'"]'}function Fo(e){return"script[async]"+e}function Lm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Hn(n.href)+'"]');if(i)return t.instance=i,Xe(i),i;var a=ge({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Xe(i),Ze(i,"style",a),Hl(i,n.precedence,e),t.instance=i;case"stylesheet":a=os(n.href);var r=e.querySelector(zo(a));if(r)return t.state.loading|=4,t.instance=r,Xe(r),r;i=bv(n),(a=Xn.get(a))&&Vd(i,a),r=(e.ownerDocument||e).createElement("link"),Xe(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",i),t.state.loading|=4,Hl(r,n.precedence,e),t.instance=r;case"script":return r=xs(n.src),(a=e.querySelector(Fo(r)))?(t.instance=a,Xe(a),a):(i=n,(a=Xn.get(r))&&(i=ge({},n),kd(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),Xe(a),Ze(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,Hl(i,n.precedence,e));return t.instance}function Hl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===t)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function kd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gl=null;function Nm(e,t,n){if(Gl===null){var i=new Map,a=Gl=new Map;a.set(n,i)}else a=Gl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var r=n[a];if(!(r[Co]||r[$e]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function Om(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function eM(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Av(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var po=null;function nM(){}function iM(e,t,n){if(po===null)throw Error(j(475));var i=po;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var a=os(n.href),r=e.querySelector(zo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Sc.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Xe(r);return}r=e.ownerDocument||e,n=bv(n),(a=Xn.get(a))&&Vd(n,a),r=r.createElement("link"),Xe(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),Ze(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(i.count++,t=Sc.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function aM(){if(po===null)throw Error(j(475));var e=po;return e.stylesheets&&e.count===0&&ih(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ih(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Sc(){if(this.count--,this.count===0){if(this.stylesheets)ih(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yc=null;function ih(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yc=new Map,t.forEach(rM,e),yc=null,Sc.call(e))}function rM(e,t){if(!(t.state.loading&4)){var n=yc.get(e);if(n)var i=n.get(null);else{n=new Map,yc.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=t.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=Sc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var mo={$$typeof:Ci,Provider:null,Consumer:null,_currentValue:Xa,_currentValue2:Xa,_threadCount:0};function sM(e,t,n,i,a,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.hiddenUpdates=Jc(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Rv(e,t,n,i,a,r,s,o,l,c,d,h){return e=new sM(e,t,n,s,o,l,c,h),t=1,r===!0&&(t|=24),r=bn(3,null,null,t),e.current=r,r.stateNode=e,t=_d(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},xd(r),e}function Cv(e){return e?(e=Ir,e):Ir}function wv(e,t,n,i,a,r){a=Cv(a),i.context===null?i.context=a:i.pendingContext=a,i=ua(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=fa(e,i,t),n!==null&&(wn(n,e,t),Zs(n,e,t))}function Pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xd(e,t){Pm(e,t),(e=e.alternate)&&Pm(e,t)}function Dv(e){if(e.tag===13){var t=gs(e,67108864);t!==null&&wn(t,e,67108864),Xd(e,67108864)}}var Mc=!0;function oM(e,t,n,i){var a=wt.T;wt.T=null;var r=ee.p;try{ee.p=2,Wd(e,t,n,i)}finally{ee.p=r,wt.T=a}}function lM(e,t,n,i){var a=wt.T;wt.T=null;var r=ee.p;try{ee.p=8,Wd(e,t,n,i)}finally{ee.p=r,wt.T=a}}function Wd(e,t,n,i){if(Mc){var a=ah(i);if(a===null)wu(e,t,i,Ec,n),Im(e,i);else if(uM(a,e,t,n,i))i.stopPropagation();else if(Im(e,i),t&4&&-1<cM.indexOf(e)){for(;a!==null;){var r=ms(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Pa(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Rn(s);o.entanglements[1]|=l,s&=~l}mi(r),!(re&6)&&(dc=ci()+500,Bo(0))}}break;case 13:o=gs(r,2),o!==null&&wn(o,r,2),Hc(),Xd(r,2)}if(r=ah(i),r===null&&wu(e,t,i,Ec,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else wu(e,t,i,null,n)}}function ah(e){return e=od(e),Yd(e)}var Ec=null;function Yd(e){if(Ec=null,e=Dr(e),e!==null){var t=To(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=e0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ec=e,null}function Uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jx()){case r0:return 2;case s0:return 8;case Ql:case Zx:return 32;case o0:return 268435456;default:return 32}default:return 32}}var rh=!1,pa=null,ma=null,ga=null,go=new Map,_o=new Map,ia=[],cM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(e,t){switch(e){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ma=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(t.pointerId)}}function Us(e,t,n,i,a,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},t!==null&&(t=ms(t),t!==null&&Dv(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function uM(e,t,n,i,a){switch(t){case"focusin":return pa=Us(pa,e,t,n,i,a),!0;case"dragenter":return ma=Us(ma,e,t,n,i,a),!0;case"mouseover":return ga=Us(ga,e,t,n,i,a),!0;case"pointerover":var r=a.pointerId;return go.set(r,Us(go.get(r)||null,e,t,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,_o.set(r,Us(_o.get(r)||null,e,t,n,i,a)),!0}return!1}function Lv(e){var t=Dr(e.target);if(t!==null){var n=To(t);if(n!==null){if(t=n.tag,t===13){if(t=e0(n),t!==null){e.blockedOn=t,iS(e.priority,function(){if(n.tag===13){var i=Cn();i=id(i);var a=gs(n,i);a!==null&&wn(a,n,i),Xd(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ah(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return t=ms(n),t!==null&&Dv(t),e.blockedOn=n,!1;t.shift()}return!0}function Bm(e,t,n){Vl(e)&&n.delete(t)}function fM(){rh=!1,pa!==null&&Vl(pa)&&(pa=null),ma!==null&&Vl(ma)&&(ma=null),ga!==null&&Vl(ga)&&(ga=null),go.forEach(Bm),_o.forEach(Bm)}function rl(e,t){e.blockedOn===t&&(e.blockedOn=null,rh||(rh=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,fM)))}var sl=null;function zm(e){sl!==e&&(sl=e,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,function(){sl===e&&(sl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Yd(i||n)===null)continue;break}var r=ms(n);r!==null&&(e.splice(t,3),t-=3,zf(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function vo(e){function t(l){return rl(l,e)}pa!==null&&rl(pa,e),ma!==null&&rl(ma,e),ga!==null&&rl(ga,e),go.forEach(t),_o.forEach(t);for(var n=0;n<ia.length;n++){var i=ia[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ia.length&&(n=ia[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&ia.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[mn]||null;if(typeof r=="function")s||zm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[mn]||null)o=s.formAction;else if(Yd(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),zm(n)}}}function qd(e){this._internalRoot=e}Xc.prototype.render=qd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=Cn();wv(n,i,e,t,null,null)};Xc.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wv(e.current,2,null,e,null,null),Hc(),t[ps]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=h0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ia.length&&t!==0&&t<ia[n].priority;n++);ia.splice(n,0,e),n===0&&Lv(e)}};var Fm=$g.version;if(Fm!=="19.1.1")throw Error(j(527,Fm,"19.1.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Gx(t),e=e!==null?n0(e):null,e=e===null?null:e.stateNode,e};var hM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{bo=ol.inject(hM),An=ol}catch{}}Cc.createRoot=function(e,t){if(!t0(e))throw Error(j(299));var n=!1,i="",a=R_,r=C_,s=w_,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=Rv(e,1,!1,null,null,n,i,a,r,s,o,null),e[ps]=t.current,Gd(e),new qd(t)};Cc.hydrateRoot=function(e,t,n){if(!t0(e))throw Error(j(299));var i=!1,a="",r=R_,s=C_,o=w_,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=Rv(e,1,!0,t,n??null,i,a,r,s,o,l,c),t.context=Cv(null),n=t.current,i=Cn(),i=id(i),a=ua(i),a.callback=null,fa(n,a,i),n=i,t.current.lanes=n,Ro(t,n),mi(t),e[ps]=t.current,Gd(e),new Xc(t)};Cc.version="19.1.1";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(e){console.error(e)}}Nv(),qg.exports=Cc;var dM=qg.exports;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jd="180",pM=0,Hm=1,mM=2,Ov=1,Pv=2,bi=3,Ma=0,dn=1,Ri=2,_a=0,Zr=1,Gm=2,Vm=3,km=4,gM=5,Ha=100,_M=101,vM=102,xM=103,SM=104,yM=200,MM=201,EM=202,TM=203,sh=204,oh=205,bM=206,AM=207,RM=208,CM=209,wM=210,DM=211,UM=212,LM=213,NM=214,lh=0,ch=1,uh=2,ls=3,fh=4,hh=5,dh=6,ph=7,Zd=0,OM=1,PM=2,va=0,IM=1,BM=2,zM=3,FM=4,HM=5,GM=6,VM=7,Iv=300,cs=301,us=302,mh=303,gh=304,Wc=306,_h=1e3,Va=1001,vh=1002,Jn=1003,kM=1004,ll=1005,ri=1006,Uu=1007,ka=1008,hi=1009,Bv=1010,zv=1011,xo=1012,Kd=1013,er=1014,Ni=1015,Ho=1016,Qd=1017,Jd=1018,So=1020,Fv=35902,Hv=35899,Gv=1021,Vv=1022,Kn=1023,yo=1026,Mo=1027,kv=1028,$d=1029,Xv=1030,tp=1031,ep=1033,kl=33776,Xl=33777,Wl=33778,Yl=33779,xh=35840,Sh=35841,yh=35842,Mh=35843,Eh=36196,Th=37492,bh=37496,Ah=37808,Rh=37809,Ch=37810,wh=37811,Dh=37812,Uh=37813,Lh=37814,Nh=37815,Oh=37816,Ph=37817,Ih=37818,Bh=37819,zh=37820,Fh=37821,Hh=36492,Gh=36494,Vh=36495,kh=36283,Xh=36284,Wh=36285,Yh=36286,XM=3200,WM=3201,Wv=0,YM=1,aa="",In="srgb",fs="srgb-linear",Tc="linear",oe="srgb",ur=7680,Xm=519,qM=512,jM=513,ZM=514,Yv=515,KM=516,QM=517,JM=518,$M=519,Wm=35044,Ym="300 es",si=2e3,bc=2001;class Ss{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=Math.PI/180,qh=180/Math.PI;function Go(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[n&63|128]+Qe[n>>8&255]+"-"+Qe[n>>16&255]+Qe[n>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function Yt(e,t,n){return Math.max(t,Math.min(n,e))}function tE(e,t){return(e%t+t)%t}function Nu(e,t,n){return(1-n)*e+n*t}function Ls(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function cn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,n=0){$t.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*a+t.x,this.y=r*a+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(t=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=a}static slerpFlat(t,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],h=i[a+3];const f=r[s+0],p=r[s+1],x=r[s+2],S=r[s+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=x,t[n+3]=S;return}if(h!==S||l!==f||c!==p||d!==x){let g=1-o;const u=l*f+c*p+d*x+h*S,m=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const b=Math.sqrt(_),C=Math.atan2(b,u*m);g=Math.sin(g*C)/b,o=Math.sin(o*C)/b}const v=o*m;if(l=l*g+f*v,c=c*g+p*v,d=d*g+x*v,h=h*g+S*v,g===1-o){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}t[n]=l,t[n+1]=c,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],h=r[s],f=r[s+1],p=r[s+2],x=r[s+3];return t[n]=o*x+d*h+l*p-c*f,t[n+1]=l*x+d*f+c*h-o*p,t[n+2]=c*x+d*p+o*f-l*h,t[n+3]=d*x-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,a){return this._x=t,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),h=o(r/2),f=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"YXZ":this._x=f*d*h+c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"ZXY":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h-f*p*x;break;case"ZYX":this._x=f*d*h-c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h+f*p*x;break;case"YZX":this._x=f*d*h+c*p*x,this._y=c*p*h+f*d*x,this._z=c*d*x-f*p*h,this._w=c*d*h-f*p*x;break;case"XZY":this._x=f*d*h-c*p*x,this._y=c*p*h-f*d*x,this._z=c*d*x+f*p*h,this._w=c*d*h+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,a=t._y,r=t._z,s=t._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+i*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=a*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,n=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(qm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(qm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=t.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(t){const n=this.x,i=this.y,a=this.z,r=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*i),d=2*(o*n-r*a),h=2*(r*i-s*n);return this.x=n+l*c+s*h-o*d,this.y=i+l*d+o*c-r*h,this.z=a+l*h+r*d-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,a=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,a=t.y,r=t.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ou.copy(this).projectOnVector(t),this.sub(Ou)}reflect(t){return this.sub(Ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return n*n+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const a=Math.sin(n)*t;return this.x=a*Math.sin(i),this.y=Math.cos(n)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new B,qm=new Vo;class Bt{constructor(t,n,i,a,r,s,o,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c)}set(t,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=t,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],x=i[8],S=a[0],g=a[3],u=a[6],m=a[1],_=a[4],v=a[7],b=a[2],C=a[5],A=a[8];return r[0]=s*S+o*m+l*b,r[3]=s*g+o*_+l*C,r[6]=s*u+o*v+l*A,r[1]=c*S+d*m+h*b,r[4]=c*g+d*_+h*C,r[7]=c*u+d*v+h*A,r[2]=f*S+p*m+x*b,r[5]=f*g+p*_+x*C,r[8]=f*u+p*v+x*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*s-o*c,f=o*l-d*r,p=c*r-s*l,x=n*h+i*f+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=h*S,t[1]=(a*c-d*i)*S,t[2]=(o*i-a*s)*S,t[3]=f*S,t[4]=(d*n-a*l)*S,t[5]=(a*r-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(s*n-i*r)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Pu.makeScale(t,n)),this}rotate(t){return this.premultiply(Pu.makeRotation(-t)),this}translate(t,n){return this.premultiply(Pu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new Bt;function qv(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ac(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function eE(){const e=Ac("canvas");return e.style.display="block",e}const jm={};function Eo(e){e in jm||(jm[e]=!0,console.warn(e))}function nE(e,t,n){return new Promise(function(i,a){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const Zm=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iE(){const e={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===oe&&(a.r=Ii(a.r),a.g=Ii(a.g),a.b=Ii(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===oe&&(a.r=Kr(a.r),a.g=Kr(a.g),a.b=Kr(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===aa?Tc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[fs]:{primaries:t,whitePoint:i,transfer:Tc,toXYZ:Zm,fromXYZ:Km,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:Zm,fromXYZ:Km,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),e}const Qt=iE();function Ii(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Kr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let fr;class aE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fr===void 0&&(fr=Ac("canvas")),fr.width=t.width,fr.height=t.height;const a=fr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=fr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ac("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Ii(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ii(n[i]/255)*255):n[i]=Ii(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rE=0;class np{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Go(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Iu(a[s].image)):r.push(Iu(a[s]))}else r=Iu(a);i.url=r}return n||(t.images[this.uuid]=i),i}}function Iu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?aE.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sE=0;const Bu=new B;class pn extends Ss{constructor(t=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=Va,a=Va,r=ri,s=ka,o=Kn,l=hi,c=pn.DEFAULT_ANISOTROPY,d=aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=Go(),this.name="",this.source=new np(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _h:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case vh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _h:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case vh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Iv;pn.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,n=0,i=0,a=1){ue.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,a){return this.x=t,this.y=n,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,a,r;const l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],x=l[9],S=l[2],g=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,v=(p+1)/2,b=(u+1)/2,C=(d+f)/4,A=(h+S)/4,D=(x+g)/4;return _>v&&_>b?_<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(_),a=C/i,r=A/i):v>b?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=C/a,r=D/a):b<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(b),i=A/r,a=D/r),this.set(i,a,r,n),this}let m=Math.sqrt((g-x)*(g-x)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(h-S)/m,this.z=(f-d)/m,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Yt(this.x,t.x,n.x),this.y=Yt(this.y,t.y,n.y),this.z=Yt(this.z,t.z,n.z),this.w=Yt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Yt(this.x,t,n),this.y=Yt(this.y,t,n),this.z=Yt(this.z,t,n),this.w=Yt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oE extends Ss{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ue(0,0,t,n),this.scissorTest=!1,this.viewport=new ue(0,0,t,n);const a={width:t,height:n,depth:i.depth},r=new pn(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},t.textures[n].image);this.textures[n].source=new np(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends oE{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class jv extends pn{constructor(t=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lE extends pn{constructor(t=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,Wn):Wn.fromBufferAttribute(r,s),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(t.matrixWorld),this.union(cl)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),ul.subVectors(this.max,Ns),hr.subVectors(t.a,Ns),dr.subVectors(t.b,Ns),pr.subVectors(t.c,Ns),Wi.subVectors(dr,hr),Yi.subVectors(pr,dr),wa.subVectors(hr,pr);let n=[0,-Wi.z,Wi.y,0,-Yi.z,Yi.y,0,-wa.z,wa.y,Wi.z,0,-Wi.x,Yi.z,0,-Yi.x,wa.z,0,-wa.x,-Wi.y,Wi.x,0,-Yi.y,Yi.x,0,-wa.y,wa.x,0];return!zu(n,hr,dr,pr,ul)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,hr,dr,pr,ul))?!1:(fl.crossVectors(Wi,Yi),n=[fl.x,fl.y,fl.z],zu(n,hr,dr,pr,ul))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Si=[new B,new B,new B,new B,new B,new B,new B,new B],Wn=new B,cl=new ko,hr=new B,dr=new B,pr=new B,Wi=new B,Yi=new B,wa=new B,Ns=new B,ul=new B,fl=new B,Da=new B;function zu(e,t,n,i,a){for(let r=0,s=e.length-3;r<=s;r+=3){Da.fromArray(e,r);const o=a.x*Math.abs(Da.x)+a.y*Math.abs(Da.y)+a.z*Math.abs(Da.z),l=t.dot(Da),c=n.dot(Da),d=i.dot(Da);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const cE=new ko,Os=new B,Fu=new B;class ip{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):cE.setFromPoints(t).getCenter(i);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Os,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(Fu)),this.expandByPoint(Os.copy(t.center).sub(Fu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const yi=new B,Hu=new B,hl=new B,qi=new B,Gu=new B,dl=new B,Vu=new B;class uE{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=yi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(t))}distanceSqToSegment(t,n,i,a){Hu.copy(t).add(n).multiplyScalar(.5),hl.copy(n).sub(t).normalize(),qi.copy(this.origin).sub(Hu);const r=t.distanceTo(n)*.5,s=-this.direction.dot(hl),o=qi.dot(this.direction),l=-qi.dot(hl),c=qi.lengthSq(),d=Math.abs(1-s*s);let h,f,p,x;if(d>0)if(h=s*l-o,f=s*o-l,x=r*d,h>=0)if(f>=-x)if(f<=x){const S=1/d;h*=S,f*=S,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Hu).addScaledVector(hl,f),p}intersectSphere(t,n){yi.subVectors(t.center,this.origin);const i=yi.dot(this.direction),a=yi.dot(yi)-i*i,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,a=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,a=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,s=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,s=(t.min.y-f.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,n,i,a,r){Gu.subVectors(n,t),dl.subVectors(i,t),Vu.crossVectors(Gu,dl);let s=this.direction.dot(Vu),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qi.subVectors(this.origin,t);const l=o*this.direction.dot(dl.crossVectors(qi,dl));if(l<0)return null;const c=o*this.direction.dot(Gu.cross(qi));if(c<0||l+c>s)return null;const d=-o*qi.dot(Vu);return d<0?null:this.at(d/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,n,i,a,r,s,o,l,c,d,h,f,p,x,S,g){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,a,r,s,o,l,c,d,h,f,p,x,S,g)}set(t,n,i,a,r,s,o,l,c,d,h,f,p,x,S,g){const u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=x,u[11]=S,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,a=1/mr.setFromMatrixColumn(t,0).length(),r=1/mr.setFromMatrixColumn(t,1).length(),s=1/mr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,a=t.y,r=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=s*d,p=s*h,x=o*d,S=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=x+p*c,n[10]=s*l}else if(t.order==="YXZ"){const f=l*d,p=l*h,x=c*d,S=c*h;n[0]=f+S*o,n[4]=x*o-p,n[8]=s*c,n[1]=s*h,n[5]=s*d,n[9]=-o,n[2]=p*o-x,n[6]=S+f*o,n[10]=s*l}else if(t.order==="ZXY"){const f=l*d,p=l*h,x=c*d,S=c*h;n[0]=f-S*o,n[4]=-s*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*d,n[9]=S-f*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(t.order==="ZYX"){const f=s*d,p=s*h,x=o*d,S=o*h;n[0]=l*d,n[4]=x*c-p,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(t.order==="YZX"){const f=s*l,p=s*c,x=o*l,S=o*c;n[0]=l*d,n[4]=S-f*h,n[8]=x*h+p,n[1]=h,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+x,n[10]=f-S*h}else if(t.order==="XZY"){const f=s*l,p=s*c,x=o*l,S=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+S,n[5]=s*d,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*d,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fE,t,hE)}lookAt(t,n,i){const a=this.elements;return yn.subVectors(t,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ji.crossVectors(i,yn),ji.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ji.crossVectors(i,yn)),ji.normalize(),pl.crossVectors(yn,ji),a[0]=ji.x,a[4]=pl.x,a[8]=yn.x,a[1]=ji.y,a[5]=pl.y,a[9]=yn.y,a[2]=ji.z,a[6]=pl.z,a[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],x=i[2],S=i[6],g=i[10],u=i[14],m=i[3],_=i[7],v=i[11],b=i[15],C=a[0],A=a[4],D=a[8],T=a[12],E=a[1],U=a[5],F=a[9],k=a[13],K=a[2],Y=a[6],N=a[10],V=a[14],I=a[3],$=a[7],rt=a[11],_t=a[15];return r[0]=s*C+o*E+l*K+c*I,r[4]=s*A+o*U+l*Y+c*$,r[8]=s*D+o*F+l*N+c*rt,r[12]=s*T+o*k+l*V+c*_t,r[1]=d*C+h*E+f*K+p*I,r[5]=d*A+h*U+f*Y+p*$,r[9]=d*D+h*F+f*N+p*rt,r[13]=d*T+h*k+f*V+p*_t,r[2]=x*C+S*E+g*K+u*I,r[6]=x*A+S*U+g*Y+u*$,r[10]=x*D+S*F+g*N+u*rt,r[14]=x*T+S*k+g*V+u*_t,r[3]=m*C+_*E+v*K+b*I,r[7]=m*A+_*U+v*Y+b*$,r[11]=m*D+_*F+v*N+b*rt,r[15]=m*T+_*k+v*V+b*_t,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],a=t[8],r=t[12],s=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],p=t[14],x=t[3],S=t[7],g=t[11],u=t[15];return x*(+r*l*h-a*c*h-r*o*f+i*c*f+a*o*p-i*l*p)+S*(+n*l*p-n*c*f+r*s*f-a*s*p+a*c*d-r*l*d)+g*(+n*c*h-n*o*p-r*s*h+i*s*p+r*o*d-i*c*d)+u*(-a*o*d-n*l*h+n*o*f+a*s*h-i*s*f+i*l*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=n,a[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],a=t[2],r=t[3],s=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],p=t[11],x=t[12],S=t[13],g=t[14],u=t[15],m=h*g*c-S*f*c+S*l*p-o*g*p-h*l*u+o*f*u,_=x*f*c-d*g*c-x*l*p+s*g*p+d*l*u-s*f*u,v=d*S*c-x*h*c+x*o*p-s*S*p-d*o*u+s*h*u,b=x*h*l-d*S*l-x*o*f+s*S*f+d*o*g-s*h*g,C=n*m+i*_+a*v+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=m*A,t[1]=(S*f*r-h*g*r-S*a*p+i*g*p+h*a*u-i*f*u)*A,t[2]=(o*g*r-S*l*r+S*a*c-i*g*c-o*a*u+i*l*u)*A,t[3]=(h*l*r-o*f*r-h*a*c+i*f*c+o*a*p-i*l*p)*A,t[4]=_*A,t[5]=(d*g*r-x*f*r+x*a*p-n*g*p-d*a*u+n*f*u)*A,t[6]=(x*l*r-s*g*r-x*a*c+n*g*c+s*a*u-n*l*u)*A,t[7]=(s*f*r-d*l*r+d*a*c-n*f*c-s*a*p+n*l*p)*A,t[8]=v*A,t[9]=(x*h*r-d*S*r-x*i*p+n*S*p+d*i*u-n*h*u)*A,t[10]=(s*S*r-x*o*r+x*i*c-n*S*c-s*i*u+n*o*u)*A,t[11]=(d*o*r-s*h*r-d*i*c+n*h*c+s*i*p-n*o*p)*A,t[12]=b*A,t[13]=(d*S*a-x*h*a+x*i*f-n*S*f-d*i*g+n*h*g)*A,t[14]=(x*o*a-s*S*a-x*i*l+n*S*l+s*i*g-n*o*g)*A,t[15]=(s*h*a-d*o*a+d*i*l-n*h*l-s*i*f+n*o*f)*A,this}scale(t){const n=this.elements,i=t.x,a=t.y,r=t.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=t.x,o=t.y,l=t.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,a,r,s){return this.set(1,i,r,0,t,1,s,0,n,a,1,0,0,0,0,1),this}compose(t,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,h=o+o,f=r*c,p=r*d,x=r*h,S=s*d,g=s*h,u=o*h,m=l*c,_=l*d,v=l*h,b=i.x,C=i.y,A=i.z;return a[0]=(1-(S+u))*b,a[1]=(p+v)*b,a[2]=(x-_)*b,a[3]=0,a[4]=(p-v)*C,a[5]=(1-(f+u))*C,a[6]=(g+m)*C,a[7]=0,a[8]=(x+_)*A,a[9]=(g-m)*A,a[10]=(1-(f+S))*A,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,n,i){const a=this.elements;let r=mr.set(a[0],a[1],a[2]).length();const s=mr.set(a[4],a[5],a[6]).length(),o=mr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],Yn.copy(this);const c=1/r,d=1/s,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,n.setFromRotationMatrix(Yn),i.x=r,i.y=s,i.z=o,this}makePerspective(t,n,i,a,r,s,o=si,l=!1){const c=this.elements,d=2*r/(n-t),h=2*r/(i-a),f=(n+t)/(n-t),p=(i+a)/(i-a);let x,S;if(l)x=r/(s-r),S=s*r/(s-r);else if(o===si)x=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===bc)x=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,a,r,s,o=si,l=!1){const c=this.elements,d=2/(n-t),h=2/(i-a),f=-(n+t)/(n-t),p=-(i+a)/(i-a);let x,S;if(l)x=1/(s-r),S=s/(s-r);else if(o===si)x=-2/(s-r),S=-(s+r)/(s-r);else if(o===bc)x=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const mr=new B,Yn=new we,fE=new B(0,0,0),hE=new B(1,1,1),ji=new B,pl=new B,yn=new B,Qm=new we,Jm=new Vo;class di{constructor(t=0,n=0,i=0,a=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,a=this._order){return this._x=t,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],h=a[2],f=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Qm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Zv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dE=0;const $m=new B,gr=new Vo,Mi=new we,ml=new B,Ps=new B,pE=new B,mE=new Vo,tg=new B(1,0,0),eg=new B(0,1,0),ng=new B(0,0,1),ig={type:"added"},gE={type:"removed"},_r={type:"childadded",child:null},ku={type:"childremoved",child:null};class en extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new B,n=new di,i=new Vo,a=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new we},normalMatrix:{value:new Bt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,n){return gr.setFromAxisAngle(t,n),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(tg,t)}rotateY(t){return this.rotateOnAxis(eg,t)}rotateZ(t){return this.rotateOnAxis(ng,t)}translateOnAxis(t,n){return $m.copy(t).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(tg,t)}translateY(t){return this.translateOnAxis(eg,t)}translateZ(t){return this.translateOnAxis(ng,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ml.copy(t):ml.set(t,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ps,ml,this.up):Mi.lookAt(ml,Ps,this.up),this.quaternion.setFromRotationMatrix(Mi),a&&(Mi.extractRotation(a.matrixWorld),gr.setFromRotationMatrix(Mi),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ig),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gE),ku.child=t,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ig),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(t,n);if(s!==void 0)return s}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,pE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,mE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(t.animations,l))}}if(n){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),d=s(t.images),h=s(t.shapes),f=s(t.skeletons),p=s(t.animations),x=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}en.DEFAULT_UP=new B(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new B,Ei=new B,Xu=new B,Ti=new B,vr=new B,xr=new B,ag=new B,Wu=new B,Yu=new B,qu=new B,ju=new ue,Zu=new ue,Ku=new ue;class Zn{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,a){a.subVectors(i,n),qn.subVectors(t,n),a.cross(qn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,n,i,a,r){qn.subVectors(a,n),Ei.subVectors(i,n),Xu.subVectors(t,n);const s=qn.dot(qn),o=qn.dot(Ei),l=qn.dot(Xu),c=Ei.dot(Ei),d=Ei.dot(Xu),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,x=(s*d-o*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,n,i,a){return this.getBarycoord(t,n,i,a,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,n,i,a,r,s,o,l){return this.getBarycoord(t,n,i,a,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(s,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(t,n,i,a,r,s){return ju.setScalar(0),Zu.setScalar(0),Ku.setScalar(0),ju.fromBufferAttribute(t,n),Zu.fromBufferAttribute(t,i),Ku.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ju,r.x),s.addScaledVector(Zu,r.y),s.addScaledVector(Ku,r.z),s}static isFrontFacing(t,n,i,a){return qn.subVectors(i,n),Ei.subVectors(t,n),qn.cross(Ei).dot(a)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,a){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,n,i,a){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),qn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Zn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,a,r){return Zn.getInterpolation(t,this.a,this.b,this.c,n,i,a,r)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,a=this.b,r=this.c;let s,o;vr.subVectors(a,i),xr.subVectors(r,i),Wu.subVectors(t,i);const l=vr.dot(Wu),c=xr.dot(Wu);if(l<=0&&c<=0)return n.copy(i);Yu.subVectors(t,a);const d=vr.dot(Yu),h=xr.dot(Yu);if(d>=0&&h<=d)return n.copy(a);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(vr,s);qu.subVectors(t,r);const p=vr.dot(qu),x=xr.dot(qu);if(x>=0&&p<=x)return n.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(xr,o);const g=d*x-p*h;if(g<=0&&h-d>=0&&p-x>=0)return ag.subVectors(r,a),o=(h-d)/(h-d+(p-x)),n.copy(a).addScaledVector(ag,o);const u=1/(g+S+f);return s=S*u,o=f*u,n.copy(i).addScaledVector(vr,s).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},gl={h:0,s:0,l:0};function Qu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=In){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,a=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,a),this}setHSL(t,n,i,a=Qt.workingColorSpace){if(t=tE(t,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Qu(s,r,t+1/3),this.g=Qu(s,r,t),this.b=Qu(s,r,t-1/3)}return Qt.colorSpaceToWorking(this,a),this}setStyle(t,n=In){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=In){const i=Kv[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=In){return Qt.workingToColorSpace(Je.copy(this),t),Math.round(Yt(Je.r*255,0,255))*65536+Math.round(Yt(Je.g*255,0,255))*256+Math.round(Yt(Je.b*255,0,255))}getHexString(t=In){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(Je.copy(this),n);const i=Je.r,a=Je.g,r=Je.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=d<=.5?h/(s+o):h/(2-s-o),s){case i:l=(a-r)/h+(a<r?6:0);break;case a:l=(r-i)/h+2;break;case r:l=(i-a)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(Je.copy(this),n),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=In){Qt.workingToColorSpace(Je.copy(this),t);const n=Je.r,i=Je.g,a=Je.b;return t!==In?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,n,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+n,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Zi),t.getHSL(gl);const i=Nu(Zi.h,gl.h,n),a=Nu(Zi.s,gl.s,n),r=Nu(Zi.l,gl.l,n);return this.setHSL(i,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,a=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new Jt;Jt.NAMES=Kv;let _E=0;class Xo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=Zr,this.side=Ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Ha&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(t.textures),s=a(t.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Qv extends Xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new B,_l=new $t;let vE=0;class fi{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Wm,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=n.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(t),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix3(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix4(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyNormalMatrix(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.transformDirection(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(t,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,a){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),a=cn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,n,i,a,r){return t*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),a=cn(a,this.array),r=cn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wm&&(t.usage=this.usage),t}}class Jv extends fi{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class $v extends fi{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Dn extends fi{constructor(t,n,i){super(new Float32Array(t),n,i)}}let xE=0;const On=new we,Ju=new en,Sr=new B,Mn=new ko,Is=new ko,Ve=new B;class Vi extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qv(t)?$v:Jv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,n,i){return On.makeTranslation(t,n,i),this.applyMatrix4(On),this}scale(t,n,i){return On.makeScale(t,n,i),this.applyMatrix4(On),this}lookAt(t){return Ju.lookAt(t),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(t.length,n.count);for(let a=0;a<i;a++){const r=t[a];n.setXYZ(a,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ip);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(Mn.min,Is.min),Mn.expandByPoint(Ve),Ve.addVectors(Mn.max,Is.max),Mn.expandByPoint(Ve)):(Mn.expandByPoint(Is.min),Mn.expandByPoint(Is.max))}Mn.getCenter(i);let a=0;for(let r=0,s=t.count;r<s;r++)Ve.fromBufferAttribute(t,r),a=Math.max(a,i.distanceToSquared(Ve));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ve.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(t,c),Ve.add(Sr)),a=Math.max(a,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;const c=new B,d=new B,h=new B,f=new $t,p=new $t,x=new $t,S=new B,g=new B;function u(D,T,E){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),d.sub(c),h.sub(c),p.sub(f),x.sub(f);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(U),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(U),o[D].add(S),o[T].add(S),o[E].add(S),l[D].add(g),l[T].add(g),l[E].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let D=0,T=m.length;D<T;++D){const E=m[D],U=E.start,F=E.count;for(let k=U,K=U+F;k<K;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const _=new B,v=new B,b=new B,C=new B;function A(D){b.fromBufferAttribute(a,D),C.copy(b);const T=o[D];_.copy(T),_.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(C,T);const U=v.dot(l[D])<0?-1:1;s.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,T=m.length;D<T;++D){const E=m[D],U=E.start,F=E.count;for(let k=U,K=U+F;k<K;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new B,r=new B,s=new B,o=new B,l=new B,c=new B,d=new B,h=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),S=t.getX(f+1),g=t.getX(f+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,g),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)a.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),d.subVectors(s,r),h.subVectors(a,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ve.fromBufferAttribute(t,n),Ve.normalize(),t.setXYZ(n,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*d;for(let u=0;u<d;u++)f[x++]=c[p++]}return new fi(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vi,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=t(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(a[l]=d,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=t.morphAttributes;for(const c in r){const d=[],h=r[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,d=s.length;c<d;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rg=new we,Ua=new uE,vl=new ip,sg=new B,xl=new B,Sl=new B,yl=new B,$u=new B,Ml=new B,og=new B,El=new B;class oi extends en{constructor(t=new Vi,n=new Qv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){Ml.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&($u.fromBufferAttribute(h,t),s?Ml.addScaledVector($u,d):Ml.addScaledVector($u.sub(n),d))}n.add(Ml)}return n}raycast(t,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(r),Ua.copy(t.ray).recast(t.near),!(vl.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(vl,sg)===null||Ua.origin.distanceToSquared(sg)>(t.far-t.near)**2))&&(rg.copy(r).invert(),Ua.copy(t.ray).applyMatrix4(rg),!(i.boundingBox!==null&&Ua.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ua)))}_computeIntersections(t,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,S=f.length;x<S;x++){const g=f[x],u=s[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=m,b=_;v<b;v+=3){const C=o.getX(v),A=o.getX(v+1),D=o.getX(v+2);a=Tl(this,u,t,i,c,d,h,C,A,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=x,u=S;g<u;g+=3){const m=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);a=Tl(this,s,t,i,c,d,h,m,_,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,S=f.length;x<S;x++){const g=f[x],u=s[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=m,b=_;v<b;v+=3){const C=v,A=v+1,D=v+2;a=Tl(this,u,t,i,c,d,h,C,A,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,u=S;g<u;g+=3){const m=g,_=g+1,v=g+2;a=Tl(this,s,t,i,c,d,h,m,_,v),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function SE(e,t,n,i,a,r,s,o){let l;if(t.side===dn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,t.side===Ma,o),l===null)return null;El.copy(o),El.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(El);return c<n.near||c>n.far?null:{distance:c,point:El.clone(),object:e}}function Tl(e,t,n,i,a,r,s,o,l,c){e.getVertexPosition(o,xl),e.getVertexPosition(l,Sl),e.getVertexPosition(c,yl);const d=SE(e,t,n,i,xl,Sl,yl,og);if(d){const h=new B;Zn.getBarycoord(og,xl,Sl,yl,h),a&&(d.uv=Zn.getInterpolatedAttribute(a,o,l,c,h,new $t)),r&&(d.uv1=Zn.getInterpolatedAttribute(r,o,l,c,h,new $t)),s&&(d.normal=Zn.getInterpolatedAttribute(s,o,l,c,h,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};Zn.getNormal(xl,Sl,yl,f.normal),d.face=f,d.barycoord=h}return d}class ys extends Vi{constructor(t=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],h=[];let f=0,p=0;x("z","y","x",-1,-1,i,n,t,s,r,0),x("z","y","x",1,-1,i,n,-t,s,r,1),x("x","z","y",1,1,t,i,n,a,s,2),x("x","z","y",1,-1,t,i,-n,a,s,3),x("x","y","z",1,-1,t,n,i,a,r,4),x("x","y","z",-1,-1,t,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(h,2));function x(S,g,u,m,_,v,b,C,A,D,T){const E=v/A,U=b/D,F=v/2,k=b/2,K=C/2,Y=A+1,N=D+1;let V=0,I=0;const $=new B;for(let rt=0;rt<N;rt++){const _t=rt*U-k;for(let Ot=0;Ot<Y;Ot++){const ne=Ot*E-F;$[S]=ne*m,$[g]=_t*_,$[u]=K,c.push($.x,$.y,$.z),$[S]=0,$[g]=0,$[u]=C>0?1:-1,d.push($.x,$.y,$.z),h.push(Ot/A),h.push(1-rt/D),V+=1}}for(let rt=0;rt<D;rt++)for(let _t=0;_t<A;_t++){const Ot=f+_t+Y*rt,ne=f+_t+Y*(rt+1),Zt=f+(_t+1)+Y*(rt+1),Wt=f+(_t+1)+Y*rt;l.push(Ot,ne,Wt),l.push(ne,Zt,Wt),I+=6}o.addGroup(p,I,T),p+=I,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const a=e[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=a.clone():Array.isArray(a)?t[n][i]=a.slice():t[n][i]=a}}return t}function an(e){const t={};for(let n=0;n<e.length;n++){const i=hs(e[n]);for(const a in i)t[a]=i[a]}return t}function yE(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function tx(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const ME={clone:hs,merge:an};var EE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends Xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=yE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ex extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new B,lg=new $t,cg=new $t;class Tn extends ex{constructor(t=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,n){return this.getViewBounds(t,lg,cg),n.subVectors(cg,lg)}setViewOffset(t,n,i,a,r,s){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Lu*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yr=-90,Mr=1;class bE extends en{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Tn(yr,Mr,t,n);a.layers=this.layers,this.add(a);const r=new Tn(yr,Mr,t,n);r.layers=this.layers,this.add(r);const s=new Tn(yr,Mr,t,n);s.layers=this.layers,this.add(s);const o=new Tn(yr,Mr,t,n);o.layers=this.layers,this.add(o);const l=new Tn(yr,Mr,t,n);l.layers=this.layers,this.add(l);const c=new Tn(yr,Mr,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(n,r),t.setRenderTarget(i,1,a),t.render(n,s),t.setRenderTarget(i,2,a),t.render(n,o),t.setRenderTarget(i,3,a),t.render(n,l),t.setRenderTarget(i,4,a),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,a),t.render(n,d),t.setRenderTarget(h,f,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class nx extends pn{constructor(t=[],n=cs,i,a,r,s,o,l,c,d){super(t,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AE extends nr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new nx(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ys(5,5,5),r=new Ea({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:_a});r.uniforms.tEquirect.value=n;const s=new oi(a,r),o=n.minFilter;return n.minFilter===ka&&(n.minFilter=ri),new bE(1,10,this).update(t,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,n=!0,i=!0,a=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(n,i,a);t.setRenderTarget(r)}}class bl extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RE={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const S of t.hand.values()){const g=n.getJointPose(S,i),u=this._getHandJoint(c,S);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(t.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RE)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new bl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}class CE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ef=new B,wE=new B,DE=new Bt;class za{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,a){return this.normal.set(t,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const a=ef.subVectors(i,n).cross(wE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(ef),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||DE.getNormalMatrix(t),a=this.coplanarPoint(ef).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const La=new ip,UE=new $t(.5,.5),Al=new B;class ap{constructor(t=new za,n=new za,i=new za,a=new za,r=new za,s=new za){this.planes=[t,n,i,a,r,s]}set(t,n,i,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=si,i=!1){const a=this.planes,r=t.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],p=r[7],x=r[8],S=r[9],g=r[10],u=r[11],m=r[12],_=r[13],v=r[14],b=r[15];if(a[0].setComponents(c-s,p-d,u-x,b-m).normalize(),a[1].setComponents(c+s,p+d,u+x,b+m).normalize(),a[2].setComponents(c+o,p+h,u+S,b+_).normalize(),a[3].setComponents(c-o,p-h,u-S,b-_).normalize(),i)a[4].setComponents(l,f,g,v).normalize(),a[5].setComponents(c-l,p-f,u-g,b-v).normalize();else if(a[4].setComponents(c-l,p-f,u-g,b-v).normalize(),n===si)a[5].setComponents(c+l,p+f,u+g,b+v).normalize();else if(n===bc)a[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),La.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(La)}intersectsSprite(t){La.center.set(0,0,0);const n=UE.distanceTo(t.center);return La.radius=.7071067811865476+n,La.applyMatrix4(t.matrixWorld),this.intersectsSphere(La)}intersectsSphere(t){const n=this.planes,i=t.center,a=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Al.x=a.normal.x>0?t.max.x:t.min.x,Al.y=a.normal.y>0?t.max.y:t.min.y,Al.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ix extends pn{constructor(t,n,i=er,a,r,s,o=Jn,l=Jn,c,d=yo,h=1){if(d!==yo&&d!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:h};super(f,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new np(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ax extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yc extends Vi{constructor(t=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:a};const r=t/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,h=t/o,f=n/l,p=[],x=[],S=[],g=[];for(let u=0;u<d;u++){const m=u*f-s;for(let _=0;_<c;_++){const v=_*h-r;x.push(v,-m,0),S.push(0,0,1),g.push(_/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<o;m++){const _=m+c*u,v=m+c*(u+1),b=m+1+c*(u+1),C=m+1+c*u;p.push(_,v,C),p.push(v,b,C)}this.setIndex(p),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(S,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class rp extends Vi{constructor(t=1,n=32,i=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],h=new B,f=new B,p=[],x=[],S=[],g=[];for(let u=0;u<=i;u++){const m=[],_=u/i;let v=0;u===0&&s===0?v=.5/n:u===i&&l===Math.PI&&(v=-.5/n);for(let b=0;b<=n;b++){const C=b/n;h.x=-t*Math.cos(a+C*r)*Math.sin(s+_*o),h.y=t*Math.cos(s+_*o),h.z=t*Math.sin(a+C*r)*Math.sin(s+_*o),x.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),g.push(C+v,1-_),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const _=d[u][m+1],v=d[u][m],b=d[u+1][m],C=d[u+1][m+1];(u!==0||s>0)&&p.push(_,v,C),(u!==i-1||l<Math.PI)&&p.push(v,b,C)}this.setIndex(p),this.setAttribute("position",new Dn(x,3)),this.setAttribute("normal",new Dn(S,3)),this.setAttribute("uv",new Dn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rp(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sp extends Vi{constructor(t=1,n=.4,i=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:a,arc:r},i=Math.floor(i),a=Math.floor(a);const s=[],o=[],l=[],c=[],d=new B,h=new B,f=new B;for(let p=0;p<=i;p++)for(let x=0;x<=a;x++){const S=x/a*r,g=p/i*Math.PI*2;h.x=(t+n*Math.cos(g))*Math.cos(S),h.y=(t+n*Math.cos(g))*Math.sin(S),h.z=n*Math.sin(g),o.push(h.x,h.y,h.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(x/a),c.push(p/i)}for(let p=1;p<=i;p++)for(let x=1;x<=a;x++){const S=(a+1)*p+x-1,g=(a+1)*(p-1)+x-1,u=(a+1)*(p-1)+x,m=(a+1)*p+x;s.push(S,g,m),s.push(g,u,m)}this.setIndex(s),this.setAttribute("position",new Dn(o,3)),this.setAttribute("normal",new Dn(l,3)),this.setAttribute("uv",new Dn(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class LE extends Xo{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wv,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class NE extends Xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OE extends Xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class op extends en{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const nf=new we,ug=new B,fg=new B;class rx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ap,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;ug.setFromMatrixPosition(t.matrixWorld),n.position.copy(ug),fg.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fg),n.updateMatrixWorld(),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hg=new we,Bs=new B,af=new B;class PE extends rx{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $t(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,a=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Bs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Bs),af.copy(i.position),af.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(af),i.updateMatrixWorld(),a.makeTranslation(-Bs.x,-Bs.y,-Bs.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg,i.coordinateSystem,i.reversedDepth)}}class IE extends op{constructor(t,n,i=0,a=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new PE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sx extends ex{constructor(t=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-t,s=i+t,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class BE extends rx{constructor(){super(new sx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zE extends op{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class FE extends op{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class HE extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function dg(e,t,n,i){const a=GE(i);switch(n){case Gv:return e*t;case kv:return e*t/a.components*a.byteLength;case $d:return e*t/a.components*a.byteLength;case Xv:return e*t*2/a.components*a.byteLength;case tp:return e*t*2/a.components*a.byteLength;case Vv:return e*t*3/a.components*a.byteLength;case Kn:return e*t*4/a.components*a.byteLength;case ep:return e*t*4/a.components*a.byteLength;case kl:case Xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wl:case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Sh:case Mh:return Math.max(e,16)*Math.max(t,8)/4;case xh:case yh:return Math.max(e,8)*Math.max(t,8)/2;case Eh:case Th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Oh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Bh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Hh:case Gh:case Vh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case kh:case Xh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Wh:case Yh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GE(e){switch(e){case hi:case Bv:return{byteLength:1,components:1};case xo:case zv:case Ho:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case er:case Kd:case Ni:return{byteLength:4,components:1};case Fv:case Hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let e=null,t=!1,n=null,i=null;function a(r,s){n(r,s),i=e.requestAnimationFrame(a)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(a),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function VE(e){const t=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(e.bindBuffer(c,o),h.length===0)e.bufferSubData(c,0,d);else{h.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<h.length;p++){const x=h[f],S=h[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,x=h.length;p<x;p++){const S=h[p];e.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var kE=`#ifdef USE_ALPHAHASH
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
#endif`,WE=`#ifdef USE_ALPHAMAP
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
#endif`,jE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZE=`#ifdef USE_AOMAP
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
#endif`,KE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QE=`#ifdef USE_BATCHING
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
#endif`,JE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nT=`#ifdef USE_IRIDESCENCE
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
#endif`,iT=`#ifdef USE_BUMPMAP
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
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hT=`#define PI 3.141592653589793
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
} // validated`,dT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pT=`vec3 transformedNormal = objectNormal;
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
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xT="gl_FragColor = linearToOutputTexel( gl_FragColor );",ST=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yT=`#ifdef USE_ENVMAP
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
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
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
#endif`,AT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DT=`#ifdef USE_GRADIENTMAP
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
}`,UT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OT=`uniform bool receiveShadow;
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
#endif`,PT=`#ifdef USE_ENVMAP
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
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HT=`PhysicalMaterial material;
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
#endif`,GT=`struct PhysicalMaterial {
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
}`,VT=`
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
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
#endif`,XT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JT=`#if defined( USE_POINTS_UV )
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
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fb=`#ifdef USE_NORMALMAP
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
#endif`,hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rb=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ub=`#ifdef USE_SKINNING
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
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`#include <common>
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
}`,Zb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Qb=`#define DISTANCE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,f1=`#define PHONG
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
}`,h1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,S1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:kE,alphahash_pars_fragment:XE,alphamap_fragment:WE,alphamap_pars_fragment:YE,alphatest_fragment:qE,alphatest_pars_fragment:jE,aomap_fragment:ZE,aomap_pars_fragment:KE,batching_pars_vertex:QE,batching_vertex:JE,begin_vertex:$E,beginnormal_vertex:tT,bsdfs:eT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:aT,clipping_planes_pars_fragment:rT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:oT,color_fragment:lT,color_pars_fragment:cT,color_pars_vertex:uT,color_vertex:fT,common:hT,cube_uv_reflection_fragment:dT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:_T,emissivemap_pars_fragment:vT,colorspace_fragment:xT,colorspace_pars_fragment:ST,envmap_fragment:yT,envmap_common_pars_fragment:MT,envmap_pars_fragment:ET,envmap_pars_vertex:TT,envmap_physical_pars_fragment:PT,envmap_vertex:bT,fog_vertex:AT,fog_pars_vertex:RT,fog_fragment:CT,fog_pars_fragment:wT,gradientmap_pars_fragment:DT,lightmap_pars_fragment:UT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:NT,lights_pars_begin:OT,lights_toon_fragment:IT,lights_toon_pars_fragment:BT,lights_phong_fragment:zT,lights_phong_pars_fragment:FT,lights_physical_fragment:HT,lights_physical_pars_fragment:GT,lights_fragment_begin:VT,lights_fragment_maps:kT,lights_fragment_end:XT,logdepthbuf_fragment:WT,logdepthbuf_pars_fragment:YT,logdepthbuf_pars_vertex:qT,logdepthbuf_vertex:jT,map_fragment:ZT,map_pars_fragment:KT,map_particle_fragment:QT,map_particle_pars_fragment:JT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:tb,morphinstance_vertex:eb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:ab,morphtarget_vertex:rb,normal_fragment_begin:sb,normal_fragment_maps:ob,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:ub,normalmap_pars_fragment:fb,clearcoat_normal_fragment_begin:hb,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:Sb,dithering_pars_fragment:yb,roughnessmap_fragment:Mb,roughnessmap_pars_fragment:Eb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:bb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:Cb,skinning_pars_vertex:wb,skinning_vertex:Db,skinnormal_vertex:Ub,specularmap_fragment:Lb,specularmap_pars_fragment:Nb,tonemapping_fragment:Ob,tonemapping_pars_fragment:Pb,transmission_fragment:Ib,transmission_pars_fragment:Bb,uv_pars_fragment:zb,uv_pars_vertex:Fb,uv_vertex:Hb,worldpos_vertex:Gb,background_vert:Vb,background_frag:kb,backgroundCube_vert:Xb,backgroundCube_frag:Wb,cube_vert:Yb,cube_frag:qb,depth_vert:jb,depth_frag:Zb,distanceRGBA_vert:Kb,distanceRGBA_frag:Qb,equirect_vert:Jb,equirect_frag:$b,linedashed_vert:t1,linedashed_frag:e1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:a1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:u1,meshphong_frag:f1,meshphysical_vert:h1,meshphysical_frag:d1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:_1,shadow_vert:v1,shadow_frag:x1,sprite_vert:S1,sprite_frag:y1},lt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ni={basic:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:an([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:an([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:an([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:an([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:an([lt.points,lt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:an([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:an([lt.common,lt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:an([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:an([lt.sprite,lt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:an([lt.common,lt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:an([lt.lights,lt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Rl={r:0,b:0,g:0},Na=new di,M1=new we;function E1(e,t,n,i,a,r,s){const o=new Jt(0);let l=r===!0?0:1,c,d,h=null,f=0,p=null;function x(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function S(_){let v=!1;const b=x(_);b===null?u(o,l):b&&b.isColor&&(u(b,1),v=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(_,v){const b=x(v);b&&(b.isCubeTexture||b.mapping===Wc)?(d===void 0&&(d=new oi(new ys(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:hs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Na.copy(v.backgroundRotation),Na.x*=-1,Na.y*=-1,Na.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Na.y*=-1,Na.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(Na)),d.material.toneMapped=Qt.getTransfer(b.colorSpace)!==oe,(h!==b||f!==b.version||p!==e.toneMapping)&&(d.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new oi(new Yc(2,2),new Ea({name:"BackgroundMaterial",uniforms:hs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(b.colorSpace)!==oe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Rl,tx(e)),i.buffers.color.setClear(Rl.r,Rl.g,Rl.b,v,s)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:S,addToRenderList:g,dispose:m}}function T1(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=f(null);let r=a,s=!1;function o(E,U,F,k,K){let Y=!1;const N=h(k,F,U);r!==N&&(r=N,c(r.object)),Y=p(E,k,F,K),Y&&x(E,k,F,K),K!==null&&t.update(K,e.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,v(E,U,F,k),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return e.createVertexArray()}function c(E){return e.bindVertexArray(E)}function d(E){return e.deleteVertexArray(E)}function h(E,U,F){const k=F.wireframe===!0;let K=i[E.id];K===void 0&&(K={},i[E.id]=K);let Y=K[U.id];Y===void 0&&(Y={},K[U.id]=Y);let N=Y[k];return N===void 0&&(N=f(l()),Y[k]=N),N}function f(E){const U=[],F=[],k=[];for(let K=0;K<n;K++)U[K]=0,F[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:k,object:E,attributes:{},index:null}}function p(E,U,F,k){const K=r.attributes,Y=U.attributes;let N=0;const V=F.getAttributes();for(const I in V)if(V[I].location>=0){const rt=K[I];let _t=Y[I];if(_t===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),rt===void 0||rt.attribute!==_t||_t&&rt.data!==_t.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function x(E,U,F,k){const K={},Y=U.attributes;let N=0;const V=F.getAttributes();for(const I in V)if(V[I].location>=0){let rt=Y[I];rt===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(rt=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(rt=E.instanceColor));const _t={};_t.attribute=rt,rt&&rt.data&&(_t.data=rt.data),K[I]=_t,N++}r.attributes=K,r.attributesNum=N,r.index=k}function S(){const E=r.newAttributes;for(let U=0,F=E.length;U<F;U++)E[U]=0}function g(E){u(E,0)}function u(E,U){const F=r.newAttributes,k=r.enabledAttributes,K=r.attributeDivisors;F[E]=1,k[E]===0&&(e.enableVertexAttribArray(E),k[E]=1),K[E]!==U&&(e.vertexAttribDivisor(E,U),K[E]=U)}function m(){const E=r.newAttributes,U=r.enabledAttributes;for(let F=0,k=U.length;F<k;F++)U[F]!==E[F]&&(e.disableVertexAttribArray(F),U[F]=0)}function _(E,U,F,k,K,Y,N){N===!0?e.vertexAttribIPointer(E,U,F,K,Y):e.vertexAttribPointer(E,U,F,k,K,Y)}function v(E,U,F,k){S();const K=k.attributes,Y=F.getAttributes(),N=U.defaultAttributeValues;for(const V in Y){const I=Y[V];if(I.location>=0){let $=K[V];if($===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),$!==void 0){const rt=$.normalized,_t=$.itemSize,Ot=t.get($);if(Ot===void 0)continue;const ne=Ot.buffer,Zt=Ot.type,Wt=Ot.bytesPerElement,q=Zt===e.INT||Zt===e.UNSIGNED_INT||$.gpuType===Kd;if($.isInterleavedBufferAttribute){const J=$.data,pt=J.stride,Lt=$.offset;if(J.isInstancedInterleavedBuffer){for(let Tt=0;Tt<I.locationSize;Tt++)u(I.location+Tt,J.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<I.locationSize;Tt++)g(I.location+Tt);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let Tt=0;Tt<I.locationSize;Tt++)_(I.location+Tt,_t/I.locationSize,Zt,rt,pt*Wt,(Lt+_t/I.locationSize*Tt)*Wt,q)}else{if($.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)u(I.location+J,$.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let J=0;J<I.locationSize;J++)g(I.location+J);e.bindBuffer(e.ARRAY_BUFFER,ne);for(let J=0;J<I.locationSize;J++)_(I.location+J,_t/I.locationSize,Zt,rt,_t*Wt,_t/I.locationSize*J*Wt,q)}}else if(N!==void 0){const rt=N[V];if(rt!==void 0)switch(rt.length){case 2:e.vertexAttrib2fv(I.location,rt);break;case 3:e.vertexAttrib3fv(I.location,rt);break;case 4:e.vertexAttrib4fv(I.location,rt);break;default:e.vertexAttrib1fv(I.location,rt)}}}}m()}function b(){D();for(const E in i){const U=i[E];for(const F in U){const k=U[F];for(const K in k)d(k[K].object),delete k[K];delete U[F]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const F in U){const k=U[F];for(const K in k)d(k[K].object),delete k[K];delete U[F]}delete i[E.id]}function A(E){for(const U in i){const F=i[U];if(F[E.id]===void 0)continue;const k=F[E.id];for(const K in k)d(k[K].object),delete k[K];delete F[E.id]}}function D(){T(),s=!0,r!==a&&(r=a,c(r.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function b1(e,t,n){let i;function a(c){i=c}function r(c,d){e.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,h){h!==0&&(e.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let x=0;x<h;x++)p+=d[x];n.update(p,i,1)}function l(c,d,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],d[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let x=0;for(let S=0;S<h;S++)x+=d[S]*f[S];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function A1(e,t,n,i){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==Kn&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ni&&!D)}function l(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:b,maxSamples:C}}function R1(e){const t=this;let n=null,i=0,a=!1,r=!1;const s=new za,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||a;return a=f,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const x=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,u=e.get(h);if(!a||x===null||x.length===0||r&&!g)r?d(null):c();else{const m=r?0:i,_=m*4;let v=u.clippingState||null;l.value=v,v=d(x,f,_,p);for(let b=0;b!==_;++b)v[b]=n[b];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,p,x){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const u=p+S*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<u)&&(g=new Float32Array(u));for(let _=0,v=p;_!==S;++_,v+=4)s.copy(h[_]).applyMatrix4(m,o),s.normal.toArray(g,v),g[v+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}function C1(e){let t=new WeakMap;function n(s,o){return o===mh?s.mapping=cs:o===gh&&(s.mapping=us),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===mh||o===gh)if(t.has(s)){const l=t.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new AE(l.height);return c.fromEquirectangularTexture(e,s),t.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Hr=4,pg=[.125,.215,.35,.446,.526,.582],Ga=20,rf=new sx,mg=new Jt;let sf=null,of=0,lf=0,cf=!1;const Fa=(1+Math.sqrt(5))/2,Er=1/Fa,gg=[new B(-Fa,Er,0),new B(Fa,Er,0),new B(-Er,0,Fa),new B(Er,0,Fa),new B(0,Fa,-Er),new B(0,Fa,Er),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],w1=new B;class _g{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=w1}=r;sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sf,of,lf),this._renderer.xr.enabled=cf,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===cs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Ho,format:Kn,colorSpace:fs,depthBuffer:!1},a=vg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D1(r)),this._blurMaterial=U1(r,t,n)}return a}_compileMaterial(t){const n=new oi(this._lodPlanes[0],t);this._renderer.compile(n,rf)}_sceneToCubeUV(t,n,i,a,r){const l=new Tn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(mg),h.toneMapping=va,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null));const S=new Qv({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),g=new oi(new ys,S);let u=!1;const m=t.background;m?m.isColor&&(S.color.copy(m),t.background=null,u=!0):(S.color.copy(mg),u=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[_]));const b=this._cubeSize;Cl(a,v*b,_>2?b:0,b,b),h.setRenderTarget(a),u&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,a=t.mapping===cs||t.mapping===us;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,rf)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gg[(a-r-1)%gg.length];this._blur(t,r-1,r,s,o)}n.autoClear=i}_blur(t,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,n,i,a,"latitudinal",r),this._halfBlur(s,t,i,i,a,"longitudinal",r)}_halfBlur(t,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new oi(this._lodPlanes[a],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ga-1),S=r/x,g=isFinite(r)?1+Math.floor(d*S):Ga;g>Ga&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ga}`);const u=[];let m=0;for(let A=0;A<Ga;++A){const D=A/S,T=Math.exp(-D*D/2);u.push(T),A===0?m+=T:A<g&&(m+=2*T)}for(let A=0;A<u.length;A++)u[A]=u[A]/m;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const v=this._sizeLods[a],b=3*v*(a>_-Hr?a-_+Hr:0),C=4*(this._cubeSize-v);Cl(n,b,C,3*v,2*v),l.setRenderTarget(n),l.render(h,rf)}}function D1(e){const t=[],n=[],i=[];let a=e;const r=e-Hr+1+pg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>e-Hr?l=pg[s-e+Hr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,x=6,S=3,g=2,u=1,m=new Float32Array(S*x*p),_=new Float32Array(g*x*p),v=new Float32Array(u*x*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,D=C>2?0:-1,T=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];m.set(T,S*x*C),_.set(f,g*x*C);const E=[C,C,C,C,C,C];v.set(E,u*x*C)}const b=new Vi;b.setAttribute("position",new fi(m,S)),b.setAttribute("uv",new fi(_,g)),b.setAttribute("faceIndex",new fi(v,u)),t.push(b),a>Hr&&a--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function vg(e,t,n){const i=new nr(e,t,n);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(e,t,n,i,a){e.viewport.set(t,n,i,a),e.scissor.set(t,n,i,a)}function U1(e,t,n){const i=new Float32Array(Ga),a=new B(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Ga,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:lp(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function xg(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Sg(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function lp(){return`

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
	`}function L1(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mh||l===gh,d=l===cs||l===us;if(c||d){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new _g(e)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&a(p)?(n===null&&(n=new _g(e)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function N1(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return t[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function O1(e,t,n,i){const a={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",s),delete a[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,x=h.attributes.position;let S=0;if(p!==null){const m=p.array;S=p.version;for(let _=0,v=m.length;_<v;_+=3){const b=m[_+0],C=m[_+1],A=m[_+2];f.push(b,C,C,A,A,b)}}else if(x!==void 0){const m=x.array;S=x.version;for(let _=0,v=m.length/3-1;_<v;_+=3){const b=_+0,C=_+1,A=_+2;f.push(b,C,C,A,A,b)}}else return;const g=new(qv(f)?$v:Jv)(f,1);g.version=S;const u=r.get(h);u&&t.remove(u),r.set(h,g)}function d(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function P1(e,t,n){let i;function a(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*s),n.update(p,i,1)}function c(f,p,x){x!==0&&(e.drawElementsInstanced(i,p,r,f*s,x),n.update(p,i,x))}function d(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let g=0;for(let u=0;u<x;u++)g+=p[u];n.update(g,i,1)}function h(f,p,x,S){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<f.length;u++)c(f[u]/s,p[u],S[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,S,0,x);let u=0;for(let m=0;m<x;m++)u+=p[m]*S[m];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function I1(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:a,update:i}}function B1(e,t,n){const i=new WeakMap,a=new ue;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let E=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),g===!0&&(v=3);let b=o.attributes.position.count*v,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*C*4*h),D=new jv(A,b,C,h);D.type=Ni,D.needsUpdate=!0;const T=v*4;for(let U=0;U<h;U++){const F=u[U],k=m[U],K=_[U],Y=b*C*4*U;for(let N=0;N<F.count;N++){const V=N*T;x===!0&&(a.fromBufferAttribute(F,N),A[Y+V+0]=a.x,A[Y+V+1]=a.y,A[Y+V+2]=a.z,A[Y+V+3]=0),S===!0&&(a.fromBufferAttribute(k,N),A[Y+V+4]=a.x,A[Y+V+5]=a.y,A[Y+V+6]=a.z,A[Y+V+7]=0),g===!0&&(a.fromBufferAttribute(K,N),A[Y+V+8]=a.x,A[Y+V+9]=a.y,A[Y+V+10]=a.z,A[Y+V+11]=K.itemSize===4?a.w:1)}}f={count:h,texture:D,size:new $t(b,C)},i.set(o,f),o.addEventListener("dispose",E)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function z1(e,t,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,h=t.get(l,d);if(a.get(h)!==c&&(t.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const lx=new pn,yg=new ix(1,1),cx=new jv,ux=new lE,fx=new nx,Mg=[],Eg=[],Tg=new Float32Array(16),bg=new Float32Array(9),Ag=new Float32Array(4);function Ms(e,t,n){const i=e[0];if(i<=0||i>0)return e;const a=t*n;let r=Mg[a];if(r===void 0&&(r=new Float32Array(a),Mg[a]=r),t!==0){i.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=n,e[s].toArray(r,o)}return r}function Fe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function He(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function qc(e,t){let n=Eg[t];n===void 0&&(n=new Int32Array(t),Eg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function F1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function H1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2fv(this.addr,t),He(n,t)}}function G1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Fe(n,t))return;e.uniform3fv(this.addr,t),He(n,t)}}function V1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4fv(this.addr,t),He(n,t)}}function k1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Ag.set(i),e.uniformMatrix2fv(this.addr,!1,Ag),He(n,i)}}function X1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;bg.set(i),e.uniformMatrix3fv(this.addr,!1,bg),He(n,i)}}function W1(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Fe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),He(n,t)}else{if(Fe(n,i))return;Tg.set(i),e.uniformMatrix4fv(this.addr,!1,Tg),He(n,i)}}function Y1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function q1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2iv(this.addr,t),He(n,t)}}function j1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3iv(this.addr,t),He(n,t)}}function Z1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4iv(this.addr,t),He(n,t)}}function K1(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Q1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Fe(n,t))return;e.uniform2uiv(this.addr,t),He(n,t)}}function J1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Fe(n,t))return;e.uniform3uiv(this.addr,t),He(n,t)}}function $1(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Fe(n,t))return;e.uniform4uiv(this.addr,t),He(n,t)}}function tA(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(yg.compareFunction=Yv,r=yg):r=lx,n.setTexture2D(t||r,a)}function eA(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(t||ux,a)}function nA(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(t||fx,a)}function iA(e,t,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(t||cx,a)}function aA(e){switch(e){case 5126:return F1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return X1;case 35676:return W1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function rA(e,t){e.uniform1fv(this.addr,t)}function sA(e,t){const n=Ms(t,this.size,2);e.uniform2fv(this.addr,n)}function oA(e,t){const n=Ms(t,this.size,3);e.uniform3fv(this.addr,n)}function lA(e,t){const n=Ms(t,this.size,4);e.uniform4fv(this.addr,n)}function cA(e,t){const n=Ms(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function uA(e,t){const n=Ms(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fA(e,t){const n=Ms(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function hA(e,t){e.uniform1iv(this.addr,t)}function dA(e,t){e.uniform2iv(this.addr,t)}function pA(e,t){e.uniform3iv(this.addr,t)}function mA(e,t){e.uniform4iv(this.addr,t)}function gA(e,t){e.uniform1uiv(this.addr,t)}function _A(e,t){e.uniform2uiv(this.addr,t)}function vA(e,t){e.uniform3uiv(this.addr,t)}function xA(e,t){e.uniform4uiv(this.addr,t)}function SA(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2D(t[s]||lx,r[s])}function yA(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture3D(t[s]||ux,r[s])}function MA(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTextureCube(t[s]||fx,r[s])}function EA(e,t,n){const i=this.cache,a=t.length,r=qc(n,a);Fe(i,r)||(e.uniform1iv(this.addr,r),He(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(t[s]||cx,r[s])}function TA(e){switch(e){case 5126:return rA;case 35664:return sA;case 35665:return oA;case 35666:return lA;case 35674:return cA;case 35675:return uA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return dA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return _A;case 36295:return vA;case 36296:return xA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}class bA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aA(n.type)}}class AA{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TA(n.type)}}class RA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,n[o.id],i)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function Rg(e,t){e.seq.push(t),e.map[t.id]=t}function CA(e,t,n){const i=e.name,a=i.length;for(uf.lastIndex=0;;){const r=uf.exec(i),s=uf.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){Rg(n,c===void 0?new bA(o,e,t):new AA(o,e,t));break}else{let h=n.map[o];h===void 0&&(h=new RA(o),Rg(n,h)),n=h}}}class ql{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=t.getActiveUniform(n,a),s=t.getUniformLocation(n,r.name);CA(r,s,this)}}setValue(t,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(t,i,a)}setOptional(t,n,i){const a=n[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,a)}}static seqWithValue(t,n){const i=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in n&&i.push(s)}return i}}function Cg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const wA=37297;let DA=0;function UA(e,t){const n=e.split(`
`),i=[],a=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const wg=new Bt;function LA(e){Qt._getMatrix(wg,Qt.workingColorSpace,e);const t=`mat3( ${wg.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case Tc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Dg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UA(e.getShaderSource(t),o)}else return r}function NA(e,t){const n=LA(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function OA(e,t){let n;switch(t){case IM:n="Linear";break;case BM:n="Reinhard";break;case zM:n="Cineon";break;case FM:n="ACESFilmic";break;case GM:n="AgX";break;case VM:n="Neutral";break;case HM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new B;function PA(){Qt.getLuminanceCoefficients(wl);const e=wl.x.toFixed(4),t=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IA(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function BA(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function zA(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(t,a),s=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:e.getAttribLocation(t,s),locationSize:o}}return n}function Vs(e){return e!==""}function Ug(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(e){return e.replace(FA,GA)}const HA=new Map;function GA(e,t){let n=Ft[t];if(n===void 0){const i=HA.get(t);if(i!==void 0)n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return jh(n)}const VA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(e){return e.replace(VA,kA)}function kA(e,t,n,i){let a="";for(let r=parseInt(t);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Og(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function XA(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Ov?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Pv?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function WA(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case cs:case us:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function YA(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function qA(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case OM:t="ENVMAP_BLENDING_MIX";break;case PM:t="ENVMAP_BLENDING_ADD";break}return t}function jA(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ZA(e,t,n,i){const a=e.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=XA(n),c=WA(n),d=YA(n),h=qA(n),f=jA(n),p=IA(n),x=BA(r),S=a.createProgram();let g,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Vs).join(`
`),u.length>0&&(u+=`
`)):(g=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),u=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==va?"#define TONE_MAPPING":"",n.toneMapping!==va?Ft.tonemapping_pars_fragment:"",n.toneMapping!==va?OA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,NA("linearToOutputTexel",n.outputColorSpace),PA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vs).join(`
`)),s=jh(s),s=Ug(s,n),s=Lg(s,n),o=jh(o),o=Ug(o,n),o=Lg(o,n),s=Ng(s),o=Ng(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=m+g+s,v=m+u+o,b=Cg(a,a.VERTEX_SHADER,_),C=Cg(a,a.FRAGMENT_SHADER,v);a.attachShader(S,b),a.attachShader(S,C),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function A(U){if(e.debug.checkShaderErrors){const F=a.getProgramInfoLog(S)||"",k=a.getShaderInfoLog(b)||"",K=a.getShaderInfoLog(C)||"",Y=F.trim(),N=k.trim(),V=K.trim();let I=!0,$=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(I=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,S,b,C);else{const rt=Dg(a,b,"vertex"),_t=Dg(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+rt+`
`+_t)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(N===""||V==="")&&($=!1);$&&(U.diagnostics={runnable:I,programLog:Y,vertexShader:{log:N,prefix:g},fragmentShader:{log:V,prefix:u}})}a.deleteShader(b),a.deleteShader(C),D=new ql(a,S),T=zA(a,S)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(S,wA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DA++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=C,this}let KA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new JA(t),n.set(t,i)),i}}class JA{constructor(t){this.id=KA++,this.code=t,this.usedTimes=0}}function $A(e,t,n,i,a,r,s){const o=new Zv,l=new QA,c=new Set,d=[],h=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,E,U,F,k){const K=F.fog,Y=k.geometry,N=T.isMeshStandardMaterial?F.environment:null,V=(T.isMeshStandardMaterial?n:t).get(T.envMap||N),I=V&&V.mapping===Wc?V.image.height:null,$=x[T.type];T.precision!==null&&(p=a.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=rt!==void 0?rt.length:0;let Ot=0;Y.morphAttributes.position!==void 0&&(Ot=1),Y.morphAttributes.normal!==void 0&&(Ot=2),Y.morphAttributes.color!==void 0&&(Ot=3);let ne,Zt,Wt,q;if($){const ie=ni[$];ne=ie.vertexShader,Zt=ie.fragmentShader}else ne=T.vertexShader,Zt=T.fragmentShader,l.update(T),Wt=l.getVertexShaderID(T),q=l.getFragmentShaderID(T);const J=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Lt=k.isInstancedMesh===!0,Tt=k.isBatchedMesh===!0,qt=!!T.map,Ke=!!T.matcap,w=!!V,_e=!!T.aoMap,Pt=!!T.lightMap,Dt=!!T.bumpMap,vt=!!T.normalMap,ve=!!T.displacementMap,xt=!!T.emissiveMap,zt=!!T.metalnessMap,Ge=!!T.roughnessMap,De=T.anisotropy>0,R=T.clearcoat>0,y=T.dispersion>0,z=T.iridescence>0,W=T.sheen>0,Q=T.transmission>0,X=De&&!!T.anisotropyMap,Et=R&&!!T.clearcoatMap,st=R&&!!T.clearcoatNormalMap,St=R&&!!T.clearcoatRoughnessMap,yt=z&&!!T.iridescenceMap,it=z&&!!T.iridescenceThicknessMap,ft=W&&!!T.sheenColorMap,Ct=W&&!!T.sheenRoughnessMap,Mt=!!T.specularMap,ct=!!T.specularColorMap,It=!!T.specularIntensityMap,L=Q&&!!T.transmissionMap,at=Q&&!!T.thicknessMap,ot=!!T.gradientMap,dt=!!T.alphaMap,tt=T.alphaTest>0,Z=!!T.alphaHash,gt=!!T.extensions;let Nt=va;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Nt=e.toneMapping);const de={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:Zt,defines:T.defines,customVertexShaderID:Wt,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&k._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&k.instanceColor!==null,instancingMorph:Lt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:fs,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:Ke,envMap:w,envMapMode:w&&V.mapping,envMapCubeUVHeight:I,aoMap:_e,lightMap:Pt,bumpMap:Dt,normalMap:vt,displacementMap:f&&ve,emissiveMap:xt,normalMapObjectSpace:vt&&T.normalMapType===YM,normalMapTangentSpace:vt&&T.normalMapType===Wv,metalnessMap:zt,roughnessMap:Ge,anisotropy:De,anisotropyMap:X,clearcoat:R,clearcoatMap:Et,clearcoatNormalMap:st,clearcoatRoughnessMap:St,dispersion:y,iridescence:z,iridescenceMap:yt,iridescenceThicknessMap:it,sheen:W,sheenColorMap:ft,sheenRoughnessMap:Ct,specularMap:Mt,specularColorMap:ct,specularIntensityMap:It,transmission:Q,transmissionMap:L,thicknessMap:at,gradientMap:ot,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:dt,alphaTest:tt,alphaHash:Z,combine:T.combine,mapUv:qt&&S(T.map.channel),aoMapUv:_e&&S(T.aoMap.channel),lightMapUv:Pt&&S(T.lightMap.channel),bumpMapUv:Dt&&S(T.bumpMap.channel),normalMapUv:vt&&S(T.normalMap.channel),displacementMapUv:ve&&S(T.displacementMap.channel),emissiveMapUv:xt&&S(T.emissiveMap.channel),metalnessMapUv:zt&&S(T.metalnessMap.channel),roughnessMapUv:Ge&&S(T.roughnessMap.channel),anisotropyMapUv:X&&S(T.anisotropyMap.channel),clearcoatMapUv:Et&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:st&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:it&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&S(T.sheenRoughnessMap.channel),specularMapUv:Mt&&S(T.specularMap.channel),specularColorMapUv:ct&&S(T.specularColorMap.channel),specularIntensityMapUv:It&&S(T.specularIntensityMap.channel),transmissionMapUv:L&&S(T.transmissionMap.channel),thicknessMapUv:at&&S(T.thicknessMap.channel),alphaMapUv:dt&&S(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(vt||De),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(qt||dt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&Qt.getTransfer(T.map.colorSpace)===oe,decodeVideoTextureEmissive:xt&&T.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(T.emissiveMap.colorSpace)===oe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ri,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&T.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)E.push(U),E.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(m(E,T),_(E,T),E.push(e.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function m(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function _(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const E=x[T.type];let U;if(E){const F=ni[E];U=ME.clone(F.uniforms)}else U=T.uniforms;return U}function b(T,E){let U;for(let F=0,k=d.length;F<k;F++){const K=d[F];if(K.cacheKey===E){U=K,++U.usedTimes;break}}return U===void 0&&(U=new ZA(e,E,T,r),d.push(U)),U}function C(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function A(T){l.remove(T)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:v,acquireProgram:b,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:D}}function tR(){let e=new WeakMap;function t(s){return e.has(s)}function n(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function i(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:a,dispose:r}}function eR(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Pg(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ig(){const e=[];let t=0;const n=[],i=[],a=[];function r(){t=0,n.length=0,i.length=0,a.length=0}function s(h,f,p,x,S,g){let u=e[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:x,renderOrder:h.renderOrder,z:S,group:g},e[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=S,u.group=g),t++,u}function o(h,f,p,x,S,g){const u=s(h,f,p,x,S,g);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(h,f,p,x,S,g){const u=s(h,f,p,x,S,g);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||eR),i.length>1&&i.sort(f||Pg),a.length>1&&a.sort(f||Pg)}function d(){for(let h=t,f=e.length;h<f;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function nR(){let e=new WeakMap;function t(i,a){const r=e.get(i);let s;return r===void 0?(s=new Ig,e.set(i,[s])):a>=r.length?(s=new Ig,r.push(s)):s=r[a],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function iR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new Jt};break;case"SpotLight":n={position:new B,direction:new B,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function aR(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let rR=0;function sR(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function oR(e){const t=new iR,n=aR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const a=new B,r=new we,s=new we;function o(c){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,S=0,g=0,u=0,m=0,_=0,v=0,b=0,C=0,A=0;c.sort(sR);for(let T=0,E=c.length;T<E;T++){const U=c[T],F=U.color,k=U.intensity,K=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=F.r*k,h+=F.g*k,f+=F.b*k;else if(U.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(U.sh.coefficients[N],k);A++}else if(U.isDirectionalLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,I=n.get(U);I.shadowIntensity=V.intensity,I.shadowBias=V.bias,I.shadowNormalBias=V.normalBias,I.shadowRadius=V.radius,I.shadowMapSize=V.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=U.shadow.matrix,m++}i.directional[p]=N,p++}else if(U.isSpotLight){const N=t.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(F).multiplyScalar(k),N.distance=K,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,i.spot[S]=N;const V=U.shadow;if(U.map&&(i.spotLightMap[b]=U.map,b++,V.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[S]=V.matrix,U.castShadow){const I=n.get(U);I.shadowIntensity=V.intensity,I.shadowBias=V.bias,I.shadowNormalBias=V.normalBias,I.shadowRadius=V.radius,I.shadowMapSize=V.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=Y,v++}S++}else if(U.isRectAreaLight){const N=t.get(U);N.color.copy(F).multiplyScalar(k),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=N,g++}else if(U.isPointLight){const N=t.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity),N.distance=U.distance,N.decay=U.decay,U.castShadow){const V=U.shadow,I=n.get(U);I.shadowIntensity=V.intensity,I.shadowBias=V.bias,I.shadowNormalBias=V.normalBias,I.shadowRadius=V.radius,I.shadowMapSize=V.mapSize,I.shadowCameraNear=V.camera.near,I.shadowCameraFar=V.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=U.shadow.matrix,_++}i.point[x]=N,x++}else if(U.isHemisphereLight){const N=t.get(U);N.skyColor.copy(U.color).multiplyScalar(k),N.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[u]=N,u++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==x||D.spotLength!==S||D.rectAreaLength!==g||D.hemiLength!==u||D.numDirectionalShadows!==m||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==b||D.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,D.directionalLength=p,D.pointLength=x,D.spotLength=S,D.rectAreaLength=g,D.hemiLength=u,D.numDirectionalShadows=m,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=b,D.numLightProbes=A,i.version=rR++)}function l(c,d){let h=0,f=0,p=0,x=0,S=0;const g=d.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const _=c[u];if(_.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(g),h++}else if(_.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),s.identity(),r.copy(_.matrixWorld),r.premultiply(g),s.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(_.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=i.hemi[S];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function Bg(e){const t=new oR(e),n=[],i=[];function a(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function s(d){i.push(d)}function o(){t.setup(n)}function l(d){t.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function lR(e){let t=new WeakMap;function n(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new Bg(e),t.set(a,[o])):r>=s.length?(o=new Bg(e),s.push(o)):o=s[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const cR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uR=`uniform sampler2D shadow_pass;
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
}`;function fR(e,t,n){let i=new ap;const a=new $t,r=new $t,s=new ue,o=new NE({depthPacking:WM}),l=new OE,c={},d=n.maxTextureSize,h={[Ma]:dn,[dn]:Ma,[Ri]:Ri},f=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:cR,fragmentShader:uR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new Vi;x.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oi(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ov;let u=this.type;this.render=function(C,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=e.getRenderTarget(),E=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(_a),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=u!==bi&&this.type===bi,K=u===bi&&this.type!==bi;for(let Y=0,N=C.length;Y<N;Y++){const V=C[Y],I=V.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const $=I.getFrameExtents();if(a.multiply($),r.copy(I.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/$.x),a.x=r.x*$.x,I.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/$.y),a.y=r.y*$.y,I.mapSize.y=r.y)),I.map===null||k===!0||K===!0){const _t=this.type!==bi?{minFilter:Jn,magFilter:Jn}:{};I.map!==null&&I.map.dispose(),I.map=new nr(a.x,a.y,_t),I.map.texture.name=V.name+".shadowMap",I.camera.updateProjectionMatrix()}e.setRenderTarget(I.map),e.clear();const rt=I.getViewportCount();for(let _t=0;_t<rt;_t++){const Ot=I.getViewport(_t);s.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),F.viewport(s),I.updateMatrices(V,_t),i=I.getFrustum(),v(A,D,I.camera,V,this.type)}I.isPointLightShadow!==!0&&this.type===bi&&m(I,D),I.needsUpdate=!1}u=this.type,g.needsUpdate=!1,e.setRenderTarget(T,E,U)};function m(C,A){const D=t.update(S);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new nr(a.x,a.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(A,null,D,f,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(A,null,D,p,S,null)}function _(C,A,D,T){let E=null;const U=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)E=U;else if(E=D.isPointLight===!0?l:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=E.uuid,k=A.uuid;let K=c[F];K===void 0&&(K={},c[F]=K);let Y=K[k];Y===void 0&&(Y=E.clone(),K[k]=Y,A.addEventListener("dispose",b)),E=Y}if(E.visible=A.visible,E.wireframe=A.wireframe,T===bi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=e.properties.get(E);F.light=D}return E}function v(C,A,D,T,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===bi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const k=t.update(C),K=C.material;if(Array.isArray(K)){const Y=k.groups;for(let N=0,V=Y.length;N<V;N++){const I=Y[N],$=K[I.materialIndex];if($&&$.visible){const rt=_(C,$,T,E);C.onBeforeShadow(e,C,A,D,k,rt,I),e.renderBufferDirect(D,null,k,rt,C,I),C.onAfterShadow(e,C,A,D,k,rt,I)}}}else if(K.visible){const Y=_(C,K,T,E);C.onBeforeShadow(e,C,A,D,k,Y,null),e.renderBufferDirect(D,null,k,Y,C,null),C.onAfterShadow(e,C,A,D,k,Y,null)}}const F=C.children;for(let k=0,K=F.length;k<K;k++)v(F[k],A,D,T,E)}function b(C){C.target.removeEventListener("dispose",b);for(const D in c){const T=c[D],E=C.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const hR={[lh]:ch,[uh]:dh,[fh]:ph,[ls]:hh,[ch]:lh,[dh]:uh,[ph]:fh,[hh]:ls};function dR(e,t){function n(){let L=!1;const at=new ue;let ot=null;const dt=new ue(0,0,0,0);return{setMask:function(tt){ot!==tt&&!L&&(e.colorMask(tt,tt,tt,tt),ot=tt)},setLocked:function(tt){L=tt},setClear:function(tt,Z,gt,Nt,de){de===!0&&(tt*=Nt,Z*=Nt,gt*=Nt),at.set(tt,Z,gt,Nt),dt.equals(at)===!1&&(e.clearColor(tt,Z,gt,Nt),dt.copy(at))},reset:function(){L=!1,ot=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,at=!1,ot=null,dt=null,tt=null;return{setReversed:function(Z){if(at!==Z){const gt=t.get("EXT_clip_control");Z?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),at=Z;const Nt=tt;tt=null,this.setClear(Nt)}},getReversed:function(){return at},setTest:function(Z){Z?J(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(Z){ot!==Z&&!L&&(e.depthMask(Z),ot=Z)},setFunc:function(Z){if(at&&(Z=hR[Z]),dt!==Z){switch(Z){case lh:e.depthFunc(e.NEVER);break;case ch:e.depthFunc(e.ALWAYS);break;case uh:e.depthFunc(e.LESS);break;case ls:e.depthFunc(e.LEQUAL);break;case fh:e.depthFunc(e.EQUAL);break;case hh:e.depthFunc(e.GEQUAL);break;case dh:e.depthFunc(e.GREATER);break;case ph:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){tt!==Z&&(at&&(Z=1-Z),e.clearDepth(Z),tt=Z)},reset:function(){L=!1,ot=null,dt=null,tt=null,at=!1}}}function a(){let L=!1,at=null,ot=null,dt=null,tt=null,Z=null,gt=null,Nt=null,de=null;return{setTest:function(ie){L||(ie?J(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ie){at!==ie&&!L&&(e.stencilMask(ie),at=ie)},setFunc:function(ie,gi,ti){(ot!==ie||dt!==gi||tt!==ti)&&(e.stencilFunc(ie,gi,ti),ot=ie,dt=gi,tt=ti)},setOp:function(ie,gi,ti){(Z!==ie||gt!==gi||Nt!==ti)&&(e.stencilOp(ie,gi,ti),Z=ie,gt=gi,Nt=ti)},setLocked:function(ie){L=ie},setClear:function(ie){de!==ie&&(e.clearStencil(ie),de=ie)},reset:function(){L=!1,at=null,ot=null,dt=null,tt=null,Z=null,gt=null,Nt=null,de=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},h={},f=new WeakMap,p=[],x=null,S=!1,g=null,u=null,m=null,_=null,v=null,b=null,C=null,A=new Jt(0,0,0),D=0,T=!1,E=null,U=null,F=null,k=null,K=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const I=e.getParameter(e.VERSION);I.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(I)[1]),N=V>=1):I.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),N=V>=2);let $=null,rt={};const _t=e.getParameter(e.SCISSOR_BOX),Ot=e.getParameter(e.VIEWPORT),ne=new ue().fromArray(_t),Zt=new ue().fromArray(Ot);function Wt(L,at,ot,dt){const tt=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<ot;gt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,tt):e.texImage2D(at+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,tt);return Z}const q={};q[e.TEXTURE_2D]=Wt(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=Wt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=Wt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=Wt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),J(e.DEPTH_TEST),s.setFunc(ls),Dt(!1),vt(Hm),J(e.CULL_FACE),_e(_a);function J(L){d[L]!==!0&&(e.enable(L),d[L]=!0)}function pt(L){d[L]!==!1&&(e.disable(L),d[L]=!1)}function Lt(L,at){return h[L]!==at?(e.bindFramebuffer(L,at),h[L]=at,L===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=at),L===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=at),!0):!1}function Tt(L,at){let ot=p,dt=!1;if(L){ot=f.get(at),ot===void 0&&(ot=[],f.set(at,ot));const tt=L.textures;if(ot.length!==tt.length||ot[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,gt=tt.length;Z<gt;Z++)ot[Z]=e.COLOR_ATTACHMENT0+Z;ot.length=tt.length,dt=!0}}else ot[0]!==e.BACK&&(ot[0]=e.BACK,dt=!0);dt&&e.drawBuffers(ot)}function qt(L){return x!==L?(e.useProgram(L),x=L,!0):!1}const Ke={[Ha]:e.FUNC_ADD,[_M]:e.FUNC_SUBTRACT,[vM]:e.FUNC_REVERSE_SUBTRACT};Ke[xM]=e.MIN,Ke[SM]=e.MAX;const w={[yM]:e.ZERO,[MM]:e.ONE,[EM]:e.SRC_COLOR,[sh]:e.SRC_ALPHA,[wM]:e.SRC_ALPHA_SATURATE,[RM]:e.DST_COLOR,[bM]:e.DST_ALPHA,[TM]:e.ONE_MINUS_SRC_COLOR,[oh]:e.ONE_MINUS_SRC_ALPHA,[CM]:e.ONE_MINUS_DST_COLOR,[AM]:e.ONE_MINUS_DST_ALPHA,[DM]:e.CONSTANT_COLOR,[UM]:e.ONE_MINUS_CONSTANT_COLOR,[LM]:e.CONSTANT_ALPHA,[NM]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(L,at,ot,dt,tt,Z,gt,Nt,de,ie){if(L===_a){S===!0&&(pt(e.BLEND),S=!1);return}if(S===!1&&(J(e.BLEND),S=!0),L!==gM){if(L!==g||ie!==T){if((u!==Ha||v!==Ha)&&(e.blendEquation(e.FUNC_ADD),u=Ha,v=Ha),ie)switch(L){case Zr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gm:e.blendFunc(e.ONE,e.ONE);break;case Vm:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case km:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Zr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gm:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Vm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,_=null,b=null,C=null,A.set(0,0,0),D=0,g=L,T=ie}return}tt=tt||at,Z=Z||ot,gt=gt||dt,(at!==u||tt!==v)&&(e.blendEquationSeparate(Ke[at],Ke[tt]),u=at,v=tt),(ot!==m||dt!==_||Z!==b||gt!==C)&&(e.blendFuncSeparate(w[ot],w[dt],w[Z],w[gt]),m=ot,_=dt,b=Z,C=gt),(Nt.equals(A)===!1||de!==D)&&(e.blendColor(Nt.r,Nt.g,Nt.b,de),A.copy(Nt),D=de),g=L,T=!1}function Pt(L,at){L.side===Ri?pt(e.CULL_FACE):J(e.CULL_FACE);let ot=L.side===dn;at&&(ot=!ot),Dt(ot),L.blending===Zr&&L.transparent===!1?_e(_a):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){E!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),E=L)}function vt(L){L!==pM?(J(e.CULL_FACE),L!==U&&(L===Hm?e.cullFace(e.BACK):L===mM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),U=L}function ve(L){L!==F&&(N&&e.lineWidth(L),F=L)}function xt(L,at,ot){L?(J(e.POLYGON_OFFSET_FILL),(k!==at||K!==ot)&&(e.polygonOffset(at,ot),k=at,K=ot)):pt(e.POLYGON_OFFSET_FILL)}function zt(L){L?J(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function Ge(L){L===void 0&&(L=e.TEXTURE0+Y-1),$!==L&&(e.activeTexture(L),$=L)}function De(L,at,ot){ot===void 0&&($===null?ot=e.TEXTURE0+Y-1:ot=$);let dt=rt[ot];dt===void 0&&(dt={type:void 0,texture:void 0},rt[ot]=dt),(dt.type!==L||dt.texture!==at)&&($!==ot&&(e.activeTexture(ot),$=ot),e.bindTexture(L,at||q[L]),dt.type=L,dt.texture=at)}function R(){const L=rt[$];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){ne.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function Ct(L){Zt.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Zt.copy(L))}function Mt(L,at){let ot=c.get(at);ot===void 0&&(ot=new WeakMap,c.set(at,ot));let dt=ot.get(L);dt===void 0&&(dt=e.getUniformBlockIndex(at,L.name),ot.set(L,dt))}function ct(L,at){const dt=c.get(at).get(L);l.get(at)!==dt&&(e.uniformBlockBinding(at,dt,L.__bindingPointIndex),l.set(at,dt))}function It(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},$=null,rt={},h={},f=new WeakMap,p=[],x=null,S=!1,g=null,u=null,m=null,_=null,v=null,b=null,C=null,A=new Jt(0,0,0),D=0,T=!1,E=null,U=null,F=null,k=null,K=null,ne.set(0,0,e.canvas.width,e.canvas.height),Zt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:J,disable:pt,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:qt,setBlending:_e,setMaterial:Pt,setFlipSided:Dt,setCullFace:vt,setLineWidth:ve,setPolygonOffset:xt,setScissorTest:zt,activeTexture:Ge,bindTexture:De,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:yt,texImage3D:it,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:St,texSubImage2D:W,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:Et,scissor:ft,viewport:Ct,reset:It}}function pR(e,t,n,i,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,y){return p?new OffscreenCanvas(R,y):Ac("canvas")}function S(R,y,z){let W=1;const Q=De(R);if((Q.width>z||Q.height>z)&&(W=z/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(W*Q.width),Et=Math.floor(W*Q.height);h===void 0&&(h=x(X,Et));const st=y?x(X,Et):h;return st.width=X,st.height=Et,st.getContext("2d").drawImage(R,0,0,X,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+Et+")."),st}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function u(R){e.generateMipmap(R)}function m(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(R,y,z,W,Q=!1){if(R!==null){if(e[R]!==void 0)return e[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=y;if(y===e.RED&&(z===e.FLOAT&&(X=e.R32F),z===e.HALF_FLOAT&&(X=e.R16F),z===e.UNSIGNED_BYTE&&(X=e.R8)),y===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.R8UI),z===e.UNSIGNED_SHORT&&(X=e.R16UI),z===e.UNSIGNED_INT&&(X=e.R32UI),z===e.BYTE&&(X=e.R8I),z===e.SHORT&&(X=e.R16I),z===e.INT&&(X=e.R32I)),y===e.RG&&(z===e.FLOAT&&(X=e.RG32F),z===e.HALF_FLOAT&&(X=e.RG16F),z===e.UNSIGNED_BYTE&&(X=e.RG8)),y===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RG8UI),z===e.UNSIGNED_SHORT&&(X=e.RG16UI),z===e.UNSIGNED_INT&&(X=e.RG32UI),z===e.BYTE&&(X=e.RG8I),z===e.SHORT&&(X=e.RG16I),z===e.INT&&(X=e.RG32I)),y===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGB8UI),z===e.UNSIGNED_SHORT&&(X=e.RGB16UI),z===e.UNSIGNED_INT&&(X=e.RGB32UI),z===e.BYTE&&(X=e.RGB8I),z===e.SHORT&&(X=e.RGB16I),z===e.INT&&(X=e.RGB32I)),y===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),z===e.UNSIGNED_INT&&(X=e.RGBA32UI),z===e.BYTE&&(X=e.RGBA8I),z===e.SHORT&&(X=e.RGBA16I),z===e.INT&&(X=e.RGBA32I)),y===e.RGB&&(z===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),z===e.UNSIGNED_INT_10F_11F_11F_REV&&(X=e.R11F_G11F_B10F)),y===e.RGBA){const Et=Q?Tc:Qt.getTransfer(W);z===e.FLOAT&&(X=e.RGBA32F),z===e.HALF_FLOAT&&(X=e.RGBA16F),z===e.UNSIGNED_BYTE&&(X=Et===oe?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(R,y){let z;return R?y===null||y===er||y===So?z=e.DEPTH24_STENCIL8:y===Ni?z=e.DEPTH32F_STENCIL8:y===xo&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===So?z=e.DEPTH_COMPONENT24:y===Ni?z=e.DEPTH_COMPONENT32F:y===xo&&(z=e.DEPTH_COMPONENT16),z}function b(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jn&&R.minFilter!==ri?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),D(y),y.isVideoTexture&&d.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),E(y)}function D(R){const y=i.get(R);if(y.__webglInit===void 0)return;const z=R.source,W=f.get(z);if(W){const Q=W[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(R),Object.keys(W).length===0&&f.delete(z)}i.remove(R)}function T(R){const y=i.get(R);e.deleteTexture(y.__webglTexture);const z=R.source,W=f.get(z);delete W[y.__cacheKey],s.memory.textures--}function E(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let Q=0;Q<y.__webglFramebuffer[W].length;Q++)e.deleteFramebuffer(y.__webglFramebuffer[W][Q]);else e.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)e.deleteFramebuffer(y.__webglFramebuffer[W]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=R.textures;for(let W=0,Q=z.length;W<Q;W++){const X=i.get(z[W]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),s.memory.textures--),i.remove(z[W])}i.remove(R)}let U=0;function F(){U=0}function k(){const R=U;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),U+=1,R}function K(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Y(R,y){const z=i.get(R);if(R.isVideoTexture&&zt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const W=R.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+y)}function N(R,y){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){q(z,R,y);return}n.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+y)}function V(R,y){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){q(z,R,y);return}n.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+y)}function I(R,y){const z=i.get(R);if(R.version>0&&z.__version!==R.version){J(z,R,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+y)}const $={[_h]:e.REPEAT,[Va]:e.CLAMP_TO_EDGE,[vh]:e.MIRRORED_REPEAT},rt={[Jn]:e.NEAREST,[kM]:e.NEAREST_MIPMAP_NEAREST,[ll]:e.NEAREST_MIPMAP_LINEAR,[ri]:e.LINEAR,[Uu]:e.LINEAR_MIPMAP_NEAREST,[ka]:e.LINEAR_MIPMAP_LINEAR},_t={[qM]:e.NEVER,[$M]:e.ALWAYS,[jM]:e.LESS,[Yv]:e.LEQUAL,[ZM]:e.EQUAL,[JM]:e.GEQUAL,[KM]:e.GREATER,[QM]:e.NOTEQUAL};function Ot(R,y){if(y.type===Ni&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ri||y.magFilter===Uu||y.magFilter===ll||y.magFilter===ka||y.minFilter===ri||y.minFilter===Uu||y.minFilter===ll||y.minFilter===ka)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,$[y.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,$[y.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,$[y.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,rt[y.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,rt[y.minFilter]),y.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,_t[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jn||y.minFilter!==ll&&y.minFilter!==ka||y.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ne(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const W=y.source;let Q=f.get(W);Q===void 0&&(Q={},f.set(W,Q));const X=K(y);if(X!==R.__cacheKey){Q[X]===void 0&&(Q[X]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),Q[X].usedTimes++;const Et=Q[R.__cacheKey];Et!==void 0&&(Q[R.__cacheKey].usedTimes--,Et.usedTimes===0&&T(y)),R.__cacheKey=X,R.__webglTexture=Q[X].texture}return z}function Zt(R,y,z){return Math.floor(Math.floor(R/z)/y)}function Wt(R,y,z,W){const X=R.updateRanges;if(X.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,z,W,y.data);else{X.sort((it,ft)=>it.start-ft.start);let Et=0;for(let it=1;it<X.length;it++){const ft=X[Et],Ct=X[it],Mt=ft.start+ft.count,ct=Zt(Ct.start,y.width,4),It=Zt(ft.start,y.width,4);Ct.start<=Mt+1&&ct===It&&Zt(Ct.start+Ct.count-1,y.width,4)===ct?ft.count=Math.max(ft.count,Ct.start+Ct.count-ft.start):(++Et,X[Et]=Ct)}X.length=Et+1;const st=e.getParameter(e.UNPACK_ROW_LENGTH),St=e.getParameter(e.UNPACK_SKIP_PIXELS),yt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let it=0,ft=X.length;it<ft;it++){const Ct=X[it],Mt=Math.floor(Ct.start/4),ct=Math.ceil(Ct.count/4),It=Mt%y.width,L=Math.floor(Mt/y.width),at=ct,ot=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,It),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,It,L,at,ot,z,W,y.data)}R.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,St),e.pixelStorei(e.UNPACK_SKIP_ROWS,yt)}}function q(R,y,z){let W=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=e.TEXTURE_3D);const Q=ne(R,y),X=y.source;n.bindTexture(W,R.__webglTexture,e.TEXTURE0+z);const Et=i.get(X);if(X.version!==Et.__version||Q===!0){n.activeTexture(e.TEXTURE0+z);const st=Qt.getPrimaries(Qt.workingColorSpace),St=y.colorSpace===aa?null:Qt.getPrimaries(y.colorSpace),yt=y.colorSpace===aa||st===St?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let it=S(y.image,!1,a.maxTextureSize);it=Ge(y,it);const ft=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type);let Mt=_(y.internalFormat,ft,Ct,y.colorSpace,y.isVideoTexture);Ot(W,y);let ct;const It=y.mipmaps,L=y.isVideoTexture!==!0,at=Et.__version===void 0||Q===!0,ot=X.dataReady,dt=b(y,it);if(y.isDepthTexture)Mt=v(y.format===Mo,y.type),at&&(L?n.texStorage2D(e.TEXTURE_2D,1,Mt,it.width,it.height):n.texImage2D(e.TEXTURE_2D,0,Mt,it.width,it.height,0,ft,Ct,null));else if(y.isDataTexture)if(It.length>0){L&&at&&n.texStorage2D(e.TEXTURE_2D,dt,Mt,It[0].width,It[0].height);for(let tt=0,Z=It.length;tt<Z;tt++)ct=It[tt],L?ot&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,ft,Ct,ct.data):n.texImage2D(e.TEXTURE_2D,tt,Mt,ct.width,ct.height,0,ft,Ct,ct.data);y.generateMipmaps=!1}else L?(at&&n.texStorage2D(e.TEXTURE_2D,dt,Mt,it.width,it.height),ot&&Wt(y,it,ft,Ct)):n.texImage2D(e.TEXTURE_2D,0,Mt,it.width,it.height,0,ft,Ct,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,Mt,It[0].width,It[0].height,it.depth);for(let tt=0,Z=It.length;tt<Z;tt++)if(ct=It[tt],y.format!==Kn)if(ft!==null)if(L){if(ot)if(y.layerUpdates.size>0){const gt=dg(ct.width,ct.height,y.format,y.type);for(const Nt of y.layerUpdates){const de=ct.data.subarray(Nt*gt/ct.data.BYTES_PER_ELEMENT,(Nt+1)*gt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,Nt,ct.width,ct.height,1,ft,de)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,it.depth,ft,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,tt,Mt,ct.width,ct.height,it.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ot&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,it.depth,ft,Ct,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,tt,Mt,ct.width,ct.height,it.depth,0,ft,Ct,ct.data)}else{L&&at&&n.texStorage2D(e.TEXTURE_2D,dt,Mt,It[0].width,It[0].height);for(let tt=0,Z=It.length;tt<Z;tt++)ct=It[tt],y.format!==Kn?ft!==null?L?ot&&n.compressedTexSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,ft,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,tt,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ot&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ct.width,ct.height,ft,Ct,ct.data):n.texImage2D(e.TEXTURE_2D,tt,Mt,ct.width,ct.height,0,ft,Ct,ct.data)}else if(y.isDataArrayTexture)if(L){if(at&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,Mt,it.width,it.height,it.depth),ot)if(y.layerUpdates.size>0){const tt=dg(it.width,it.height,y.format,y.type);for(const Z of y.layerUpdates){const gt=it.data.subarray(Z*tt/it.data.BYTES_PER_ELEMENT,(Z+1)*tt/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,ft,Ct,gt)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,Ct,it.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Mt,it.width,it.height,it.depth,0,ft,Ct,it.data);else if(y.isData3DTexture)L?(at&&n.texStorage3D(e.TEXTURE_3D,dt,Mt,it.width,it.height,it.depth),ot&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,Ct,it.data)):n.texImage3D(e.TEXTURE_3D,0,Mt,it.width,it.height,it.depth,0,ft,Ct,it.data);else if(y.isFramebufferTexture){if(at)if(L)n.texStorage2D(e.TEXTURE_2D,dt,Mt,it.width,it.height);else{let tt=it.width,Z=it.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,Mt,tt,Z,0,ft,Ct,null),tt>>=1,Z>>=1}}else if(It.length>0){if(L&&at){const tt=De(It[0]);n.texStorage2D(e.TEXTURE_2D,dt,Mt,tt.width,tt.height)}for(let tt=0,Z=It.length;tt<Z;tt++)ct=It[tt],L?ot&&n.texSubImage2D(e.TEXTURE_2D,tt,0,0,ft,Ct,ct):n.texImage2D(e.TEXTURE_2D,tt,Mt,ft,Ct,ct);y.generateMipmaps=!1}else if(L){if(at){const tt=De(it);n.texStorage2D(e.TEXTURE_2D,dt,Mt,tt.width,tt.height)}ot&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,Ct,it)}else n.texImage2D(e.TEXTURE_2D,0,Mt,ft,Ct,it);g(y)&&u(W),Et.__version=X.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function J(R,y,z){if(y.image.length!==6)return;const W=ne(R,y),Q=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+z);const X=i.get(Q);if(Q.version!==X.__version||W===!0){n.activeTexture(e.TEXTURE0+z);const Et=Qt.getPrimaries(Qt.workingColorSpace),st=y.colorSpace===aa?null:Qt.getPrimaries(y.colorSpace),St=y.colorSpace===aa||Et===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const yt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,ft=[];for(let Z=0;Z<6;Z++)!yt&&!it?ft[Z]=S(y.image[Z],!0,a.maxCubemapSize):ft[Z]=it?y.image[Z].image:y.image[Z],ft[Z]=Ge(y,ft[Z]);const Ct=ft[0],Mt=r.convert(y.format,y.colorSpace),ct=r.convert(y.type),It=_(y.internalFormat,Mt,ct,y.colorSpace),L=y.isVideoTexture!==!0,at=X.__version===void 0||W===!0,ot=Q.dataReady;let dt=b(y,Ct);Ot(e.TEXTURE_CUBE_MAP,y);let tt;if(yt){L&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,It,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){tt=ft[Z].mipmaps;for(let gt=0;gt<tt.length;gt++){const Nt=tt[gt];y.format!==Kn?Mt!==null?L?ot&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,Nt.width,Nt.height,Mt,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,It,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,Nt.width,Nt.height,Mt,ct,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,It,Nt.width,Nt.height,0,Mt,ct,Nt.data)}}}else{if(tt=y.mipmaps,L&&at){tt.length>0&&dt++;const Z=De(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,It,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ft[Z].width,ft[Z].height,Mt,ct,ft[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,ft[Z].width,ft[Z].height,0,Mt,ct,ft[Z].data);for(let gt=0;gt<tt.length;gt++){const de=tt[gt].image[Z].image;L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,de.width,de.height,Mt,ct,de.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,It,de.width,de.height,0,Mt,ct,de.data)}}else{L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Mt,ct,ft[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,Mt,ct,ft[Z]);for(let gt=0;gt<tt.length;gt++){const Nt=tt[gt];L?ot&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,Mt,ct,Nt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,It,Mt,ct,Nt.image[Z])}}}g(y)&&u(e.TEXTURE_CUBE_MAP),X.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pt(R,y,z,W,Q,X){const Et=r.convert(z.format,z.colorSpace),st=r.convert(z.type),St=_(z.internalFormat,Et,st,z.colorSpace),yt=i.get(y),it=i.get(z);if(it.__renderTarget=y,!yt.__hasExternalTextures){const ft=Math.max(1,y.width>>X),Ct=Math.max(1,y.height>>X);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?n.texImage3D(Q,X,St,ft,Ct,y.depth,0,Et,st,null):n.texImage2D(Q,X,St,ft,Ct,0,Et,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),xt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,Q,it.__webglTexture,0,ve(y)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,Q,it.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(R,y,z){if(e.bindRenderbuffer(e.RENDERBUFFER,R),y.depthBuffer){const W=y.depthTexture,Q=W&&W.isDepthTexture?W.type:null,X=v(y.stencilBuffer,Q),Et=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=ve(y);xt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,X,y.width,y.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,X,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,X,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,R)}else{const W=y.textures;for(let Q=0;Q<W.length;Q++){const X=W[Q],Et=r.convert(X.format,X.colorSpace),st=r.convert(X.type),St=_(X.internalFormat,Et,st,X.colorSpace),yt=ve(y);z&&xt(y)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,yt,St,y.width,y.height):xt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,yt,St,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,St,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Tt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const Q=W.__webglTexture,X=ve(y);if(y.depthTexture.format===yo)xt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Mo)xt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function qt(R){const y=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=W}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const W=R.texture.mipmaps;W&&W.length>0?Tt(y.__webglFramebuffer[0],R):Tt(y.__webglFramebuffer,R)}else if(z){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=e.createRenderbuffer(),Lt(y.__webglDepthbuffer[W],R,!1);else{const Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Lt(y.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,X)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(R,y,z){const W=i.get(R);y!==void 0&&pt(W.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&qt(R)}function w(R){const y=R.texture,z=i.get(R),W=i.get(y);R.addEventListener("dispose",A);const Q=R.textures,X=R.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=y.version,s.memory.textures++),X){z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[st]=[];for(let St=0;St<y.mipmaps.length;St++)z.__webglFramebuffer[st][St]=e.createFramebuffer()}else z.__webglFramebuffer[st]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)z.__webglFramebuffer[st]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Et)for(let st=0,St=Q.length;st<St;st++){const yt=i.get(Q[st]);yt.__webglTexture===void 0&&(yt.__webglTexture=e.createTexture(),s.memory.textures++)}if(R.samples>0&&xt(R)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){const St=Q[st];z.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[st]);const yt=r.convert(St.format,St.colorSpace),it=r.convert(St.type),ft=_(St.internalFormat,yt,it,St.colorSpace,R.isXRRenderTarget===!0),Ct=ve(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ft,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,z.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),Lt(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Ot(e.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)pt(z.__webglFramebuffer[st][St],R,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,St);else pt(z.__webglFramebuffer[st],R,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(y)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let st=0,St=Q.length;st<St;st++){const yt=Q[st],it=i.get(yt);let ft=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ft,it.__webglTexture),Ot(ft,yt),pt(z.__webglFramebuffer,R,yt,e.COLOR_ATTACHMENT0+st,ft,0),g(yt)&&u(ft)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,W.__webglTexture),Ot(st,y),y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)pt(z.__webglFramebuffer[St],R,y,e.COLOR_ATTACHMENT0,st,St);else pt(z.__webglFramebuffer,R,y,e.COLOR_ATTACHMENT0,st,0);g(y)&&u(st),n.unbindTexture()}R.depthBuffer&&qt(R)}function _e(R){const y=R.textures;for(let z=0,W=y.length;z<W;z++){const Q=y[z];if(g(Q)){const X=m(R),Et=i.get(Q).__webglTexture;n.bindTexture(X,Et),u(X),n.unbindTexture()}}}const Pt=[],Dt=[];function vt(R){if(R.samples>0){if(xt(R)===!1){const y=R.textures,z=R.width,W=R.height;let Q=e.COLOR_BUFFER_BIT;const X=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(R),st=y.length>1;if(st)for(let yt=0;yt<y.length;yt++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const St=R.texture.mipmaps;St&&St.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const it=i.get(y[yt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,it,0)}e.blitFramebuffer(0,0,z,W,0,0,z,W,Q,e.NEAREST),l===!0&&(Pt.length=0,Dt.length=0,Pt.push(e.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pt.push(X),Dt.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let yt=0;yt<y.length;yt++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.RENDERBUFFER,Et.__webglColorRenderbuffer[yt]);const it=i.get(y[yt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+yt,e.TEXTURE_2D,it,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function ve(R){return Math.min(a.maxSamples,R.samples)}function xt(R){const y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(R){const y=s.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function Ge(R,y){const z=R.colorSpace,W=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==fs&&z!==aa&&(Qt.getTransfer(z)===oe?(W!==Kn||Q!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=I,this.rebindTextures=Ke,this.setupRenderTarget=w,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function mR(e,t){function n(i,a=aa){let r;const s=Qt.getTransfer(a);if(i===hi)return e.UNSIGNED_BYTE;if(i===Qd)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Fv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Hv)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Bv)return e.BYTE;if(i===zv)return e.SHORT;if(i===xo)return e.UNSIGNED_SHORT;if(i===Kd)return e.INT;if(i===er)return e.UNSIGNED_INT;if(i===Ni)return e.FLOAT;if(i===Ho)return e.HALF_FLOAT;if(i===Gv)return e.ALPHA;if(i===Vv)return e.RGB;if(i===Kn)return e.RGBA;if(i===yo)return e.DEPTH_COMPONENT;if(i===Mo)return e.DEPTH_STENCIL;if(i===kv)return e.RED;if(i===$d)return e.RED_INTEGER;if(i===Xv)return e.RG;if(i===tp)return e.RG_INTEGER;if(i===ep)return e.RGBA_INTEGER;if(i===kl||i===Xl||i===Wl||i===Yl)if(s===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===Sh||i===yh||i===Mh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eh||i===Th||i===bh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Eh||i===Th)return s===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ah||i===Rh||i===Ch||i===wh||i===Dh||i===Uh||i===Lh||i===Nh||i===Oh||i===Ph||i===Ih||i===Bh||i===zh||i===Fh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ah)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ch)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ph)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ih)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return s===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hh||i===Gh||i===Vh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Hh)return s===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kh||i===Xh||i===Wh||i===Yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===kh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===So?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
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

}`;class vR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new ax(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ea({vertexShader:gR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xR extends Ss{constructor(t,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",g=new vR,u={},m=n.getContextAttributes();let _=null,v=null;const b=[],C=[],A=new $t;let D=null;const T=new Tn;T.viewport=new ue;const E=new Tn;E.viewport=new ue;const U=[T,E],F=new HE;let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=b[q];return J===void 0&&(J=new tf,b[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=b[q];return J===void 0&&(J=new tf,b[q]=J),J.getGripSpace()},this.getHand=function(q){let J=b[q];return J===void 0&&(J=new tf,b[q]=J),J.getHandSpace()};function Y(q){const J=C.indexOf(q.inputSource);if(J===-1)return;const pt=b[J];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||s),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",N),a.removeEventListener("inputsourceschange",V);for(let q=0;q<b.length;q++){const J=C[q];J!==null&&(C[q]=null,b[q].disconnect(J))}k=null,K=null,g.reset();for(const q in u)delete u[q];t.setRenderTarget(_),p=null,f=null,h=null,a=null,v=null,Wt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(a,n)),h},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",N),a.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Lt=null,Tt=null;m.depth&&(Tt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=m.stencil?Mo:yo,Lt=m.stencil?So:er);const qt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(qt),a.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new nr(f.textureWidth,f.textureHeight,{format:Kn,type:hi,depthTexture:new ix(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,pt),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new nr(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),Wt.setContext(a),Wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let J=0;J<q.removed.length;J++){const pt=q.removed[J],Lt=C.indexOf(pt);Lt>=0&&(C[Lt]=null,b[Lt].disconnect(pt))}for(let J=0;J<q.added.length;J++){const pt=q.added[J];let Lt=C.indexOf(pt);if(Lt===-1){for(let qt=0;qt<b.length;qt++)if(qt>=C.length){C.push(pt),Lt=qt;break}else if(C[qt]===null){C[qt]=pt,Lt=qt;break}if(Lt===-1)break}const Tt=b[Lt];Tt&&Tt.connect(pt)}}const I=new B,$=new B;function rt(q,J,pt){I.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(pt.matrixWorld);const Lt=I.distanceTo($),Tt=J.projectionMatrix.elements,qt=pt.projectionMatrix.elements,Ke=Tt[14]/(Tt[10]-1),w=Tt[14]/(Tt[10]+1),_e=(Tt[9]+1)/Tt[5],Pt=(Tt[9]-1)/Tt[5],Dt=(Tt[8]-1)/Tt[0],vt=(qt[8]+1)/qt[0],ve=Ke*Dt,xt=Ke*vt,zt=Lt/(-Dt+vt),Ge=zt*-Dt;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ge),q.translateZ(zt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Tt[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const De=Ke+zt,R=w+zt,y=ve-Ge,z=xt+(Lt-Ge),W=_e*w/R*De,Q=Pt*w/R*De;q.projectionMatrix.makePerspective(y,z,W,Q,De,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function _t(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let J=q.near,pt=q.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),F.near=E.near=T.near=J,F.far=E.far=T.far=pt,(k!==F.near||K!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,K=F.far),F.layers.mask=q.layers.mask|6,T.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Lt=q.parent,Tt=F.cameras;_t(F,Lt);for(let qt=0;qt<Tt.length;qt++)_t(Tt[qt],Lt);Tt.length===2?rt(F,T,E):F.projectionMatrix.copy(T.projectionMatrix),Ot(q,F,Lt)};function Ot(q,J,pt){pt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(q){return u[q]};let ne=null;function Zt(q,J){if(d=J.getViewerPose(c||s),x=J,d!==null){const pt=d.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Lt=!1;pt.length!==F.cameras.length&&(F.cameras.length=0,Lt=!0);for(let w=0;w<pt.length;w++){const _e=pt[w];let Pt=null;if(p!==null)Pt=p.getViewport(_e);else{const vt=h.getViewSubImage(f,_e);Pt=vt.viewport,w===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let Dt=U[w];Dt===void 0&&(Dt=new Tn,Dt.layers.enable(w),Dt.viewport=new ue,U[w]=Dt),Dt.matrix.fromArray(_e.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(_e.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),w===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Lt===!0&&F.cameras.push(Dt)}const Tt=a.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const w=h.getDepthInformation(pt[0]);w&&w.isValid&&w.texture&&g.init(w,a.renderState)}if(Tt&&Tt.includes("camera-access")&&S){t.state.unbindTexture(),h=i.getBinding();for(let w=0;w<pt.length;w++){const _e=pt[w].camera;if(_e){let Pt=u[_e];Pt||(Pt=new ax,u[_e]=Pt);const Dt=h.getCameraImage(_e);Pt.sourceTexture=Dt}}}}for(let pt=0;pt<b.length;pt++){const Lt=C[pt],Tt=b[pt];Lt!==null&&Tt!==void 0&&Tt.update(Lt,J,c||s)}ne&&ne(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const Wt=new ox;Wt.setAnimationLoop(Zt),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const Oa=new di,SR=new we;function yR(e,t){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,tx(e)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function a(g,u,m,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(g,u):u.isMeshToonMaterial?(r(g,u),h(g,u)):u.isMeshPhongMaterial?(r(g,u),d(g,u)):u.isMeshStandardMaterial?(r(g,u),f(g,u),u.isMeshPhysicalMaterial&&p(g,u,v)):u.isMeshMatcapMaterial?(r(g,u),x(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),S(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(s(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,m,_):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===dn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===dn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const m=t.get(u),_=m.envMap,v=m.envMapRotation;_&&(g.envMap.value=_,Oa.copy(v),Oa.x*=-1,Oa.y*=-1,Oa.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oa.y*=-1,Oa.z*=-1),g.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(Oa)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function s(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,m,_){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*m,g.scale.value=_*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,m){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function S(g,u){const m=t.get(u).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function MR(e,t,n,i){let a={},r={},s=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const v=_.program;i.uniformBlockBinding(m,v)}function c(m,_){let v=a[m.id];v===void 0&&(x(m),v=d(m),a[m.id]=v,m.addEventListener("dispose",g));const b=_.program;i.updateUBOMapping(m,b);const C=t.render.frame;r[m.id]!==C&&(f(m),r[m.id]=C)}function d(m){const _=h();m.__bindingPointIndex=_;const v=e.createBuffer(),b=m.__size,C=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,b,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function h(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const _=a[m.id],v=m.uniforms,b=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let C=0,A=v.length;C<A;C++){const D=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,E=D.length;T<E;T++){const U=D[T];if(p(U,C,T,b)===!0){const F=U.__offset,k=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let Y=0;Y<k.length;Y++){const N=k[Y],V=S(N);typeof N=="number"||typeof N=="boolean"?(U.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,F+K,U.__data)):N.isMatrix3?(U.__data[0]=N.elements[0],U.__data[1]=N.elements[1],U.__data[2]=N.elements[2],U.__data[3]=0,U.__data[4]=N.elements[3],U.__data[5]=N.elements[4],U.__data[6]=N.elements[5],U.__data[7]=0,U.__data[8]=N.elements[6],U.__data[9]=N.elements[7],U.__data[10]=N.elements[8],U.__data[11]=0):(N.toArray(U.__data,K),K+=V.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(m,_,v,b){const C=m.value,A=_+"_"+v;if(b[A]===void 0)return typeof C=="number"||typeof C=="boolean"?b[A]=C:b[A]=C.clone(),!0;{const D=b[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return b[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function x(m){const _=m.uniforms;let v=0;const b=16;for(let A=0,D=_.length;A<D;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,U=T.length;E<U;E++){const F=T[E],k=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Y=k.length;K<Y;K++){const N=k[K],V=S(N),I=v%b,$=I%V.boundary,rt=I+$;v+=$,rt!==0&&b-rt<V.storage&&(v+=b-rt),F.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=V.storage}}}const C=v%b;return C>0&&(v+=b-C),m.__size=v,m.__cache={},this}function S(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const v=s.indexOf(_.__bindingPointIndex);s.splice(v,1),e.deleteBuffer(a[_.id]),delete a[_.id],delete r[_.id]}function u(){for(const m in a)e.deleteBuffer(a[m]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}class ER{constructor(t={}){const{canvas:n=eE(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),S=new Int32Array(4);let g=null,u=null;const m=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=In;let C=0,A=0,D=null,T=-1,E=null;const U=new ue,F=new ue;let k=null;const K=new Jt(0);let Y=0,N=n.width,V=n.height,I=1,$=null,rt=null;const _t=new ue(0,0,N,V),Ot=new ue(0,0,N,V);let ne=!1;const Zt=new ap;let Wt=!1,q=!1;const J=new we,pt=new B,Lt=new ue,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Ke(){return D===null?I:1}let w=i;function _e(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jd}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",tt,!1),w===null){const O="webgl2";if(w=_e(O,M),w===null)throw _e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Pt,Dt,vt,ve,xt,zt,Ge,De,R,y,z,W,Q,X,Et,st,St,yt,it,ft,Ct,Mt,ct,It;function L(){Pt=new N1(w),Pt.init(),Mt=new mR(w,Pt),Dt=new A1(w,Pt,t,Mt),vt=new dR(w,Pt),Dt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),ve=new I1(w),xt=new tR,zt=new pR(w,Pt,vt,xt,Dt,Mt,ve),Ge=new C1(v),De=new L1(v),R=new VE(w),ct=new T1(w,R),y=new O1(w,R,ve,ct),z=new z1(w,y,R,ve),it=new B1(w,Dt,zt),st=new R1(xt),W=new $A(v,Ge,De,Pt,Dt,ct,st),Q=new yR(v,xt),X=new nR,Et=new lR(Pt),yt=new E1(v,Ge,De,vt,z,p,l),St=new fR(v,z,Dt),It=new MR(w,ve,Dt,vt),ft=new b1(w,Pt,ve),Ct=new P1(w,Pt,ve),ve.programs=W.programs,v.capabilities=Dt,v.extensions=Pt,v.properties=xt,v.renderLists=X,v.shadowMap=St,v.state=vt,v.info=ve}L();const at=new xR(v,w);this.xr=at,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Pt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Pt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(N,V,!1))},this.getSize=function(M){return M.set(N,V)},this.setSize=function(M,O,H=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=M,V=O,n.width=Math.floor(M*I),n.height=Math.floor(O*I),H===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(N*I,V*I).floor()},this.setDrawingBufferSize=function(M,O,H){N=M,V=O,I=H,n.width=Math.floor(M*H),n.height=Math.floor(O*H),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(_t)},this.setViewport=function(M,O,H,G){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,O,H,G),vt.viewport(U.copy(_t).multiplyScalar(I).round())},this.getScissor=function(M){return M.copy(Ot)},this.setScissor=function(M,O,H,G){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,O,H,G),vt.scissor(F.copy(Ot).multiplyScalar(I).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(M){vt.setScissorTest(ne=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){rt=M},this.getClearColor=function(M){return M.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,H=!0){let G=0;if(M){let P=!1;if(D!==null){const et=D.texture.format;P=et===ep||et===tp||et===$d}if(P){const et=D.texture.type,ut=et===hi||et===er||et===xo||et===So||et===Qd||et===Jd,mt=yt.getClearColor(),ht=yt.getClearAlpha(),Rt=mt.r,Ut=mt.g,bt=mt.b;ut?(x[0]=Rt,x[1]=Ut,x[2]=bt,x[3]=ht,w.clearBufferuiv(w.COLOR,0,x)):(S[0]=Rt,S[1]=Ut,S[2]=bt,S[3]=ht,w.clearBufferiv(w.COLOR,0,S))}else G|=w.COLOR_BUFFER_BIT}O&&(G|=w.DEPTH_BUFFER_BIT),H&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",tt,!1),yt.dispose(),X.dispose(),Et.dispose(),xt.dispose(),Ge.dispose(),De.dispose(),z.dispose(),ct.dispose(),It.dispose(),W.dispose(),at.dispose(),at.removeEventListener("sessionstart",ti),at.removeEventListener("sessionend",cp),Aa.stop()};function ot(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=ve.autoReset,O=St.enabled,H=St.autoUpdate,G=St.needsUpdate,P=St.type;L(),ve.autoReset=M,St.enabled=O,St.autoUpdate=H,St.needsUpdate=G,St.type=P}function tt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){const O=M.target;O.removeEventListener("dispose",Z),gt(O)}function gt(M){Nt(M),xt.remove(M)}function Nt(M){const O=xt.get(M).programs;O!==void 0&&(O.forEach(function(H){W.releaseProgram(H)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,H,G,P,et){O===null&&(O=Tt);const ut=P.isMesh&&P.matrixWorld.determinant()<0,mt=hx(M,O,H,G,P);vt.setMaterial(G,ut);let ht=H.index,Rt=1;if(G.wireframe===!0){if(ht=y.getWireframeAttribute(H),ht===void 0)return;Rt=2}const Ut=H.drawRange,bt=H.attributes.position;let Xt=Ut.start*Rt,se=(Ut.start+Ut.count)*Rt;et!==null&&(Xt=Math.max(Xt,et.start*Rt),se=Math.min(se,(et.start+et.count)*Rt)),ht!==null?(Xt=Math.max(Xt,0),se=Math.min(se,ht.count)):bt!=null&&(Xt=Math.max(Xt,0),se=Math.min(se,bt.count));const Ae=se-Xt;if(Ae<0||Ae===1/0)return;ct.setup(P,G,mt,H,ht);let me,fe=ft;if(ht!==null&&(me=R.get(ht),fe=Ct,fe.setIndex(me)),P.isMesh)G.wireframe===!0?(vt.setLineWidth(G.wireframeLinewidth*Ke()),fe.setMode(w.LINES)):fe.setMode(w.TRIANGLES);else if(P.isLine){let At=G.linewidth;At===void 0&&(At=1),vt.setLineWidth(At*Ke()),P.isLineSegments?fe.setMode(w.LINES):P.isLineLoop?fe.setMode(w.LINE_LOOP):fe.setMode(w.LINE_STRIP)}else P.isPoints?fe.setMode(w.POINTS):P.isSprite&&fe.setMode(w.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))fe.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const At=P._multiDrawStarts,Me=P._multiDrawCounts,Kt=P._multiDrawCount,_n=ht?R.get(ht).bytesPerElement:1,or=xt.get(G).currentProgram.getUniforms();for(let vn=0;vn<Kt;vn++)or.setValue(w,"_gl_DrawID",vn),fe.render(At[vn]/_n,Me[vn])}else if(P.isInstancedMesh)fe.renderInstances(Xt,Ae,P.count);else if(H.isInstancedBufferGeometry){const At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,At);fe.renderInstances(Xt,Ae,Me)}else fe.render(Xt,Ae)};function de(M,O,H){M.transparent===!0&&M.side===Ri&&M.forceSinglePass===!1?(M.side=dn,M.needsUpdate=!0,Yo(M,O,H),M.side=Ma,M.needsUpdate=!0,Yo(M,O,H),M.side=Ri):Yo(M,O,H)}this.compile=function(M,O,H=null){H===null&&(H=M),u=Et.get(H),u.init(O),_.push(u),H.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),M!==H&&M.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const G=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const et=P.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const mt=et[ut];de(mt,H,P),G.add(mt)}else de(et,H,P),G.add(et)}),u=_.pop(),G},this.compileAsync=function(M,O,H=null){const G=this.compile(M,O,H);return new Promise(P=>{function et(){if(G.forEach(function(ut){xt.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){P(M);return}setTimeout(et,10)}Pt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ie=null;function gi(M){ie&&ie(M)}function ti(){Aa.stop()}function cp(){Aa.start()}const Aa=new ox;Aa.setAnimationLoop(gi),typeof self<"u"&&Aa.setContext(self),this.setAnimationLoop=function(M){ie=M,at.setAnimationLoop(M),M===null?Aa.stop():Aa.start()},at.addEventListener("sessionstart",ti),at.addEventListener("sessionend",cp),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(O),O=at.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,D),u=Et.get(M,_.length),u.init(O),_.push(u),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Zt.setFromProjectionMatrix(J,si,O.reversedDepth),q=this.localClippingEnabled,Wt=st.init(this.clippingPlanes,q),g=X.get(M,m.length),g.init(),m.push(g),at.enabled===!0&&at.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&jc(et,O,-1/0,v.sortObjects)}jc(M,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,rt),qt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,qt&&yt.addToRenderList(g,M),this.info.render.frame++,Wt===!0&&st.beginShadows();const H=u.state.shadowsArray;St.render(H,M,O),Wt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,P=g.transmissive;if(u.setupLights(),O.isArrayCamera){const et=O.cameras;if(P.length>0)for(let ut=0,mt=et.length;ut<mt;ut++){const ht=et[ut];fp(G,P,M,ht)}qt&&yt.render(M);for(let ut=0,mt=et.length;ut<mt;ut++){const ht=et[ut];up(g,M,ht,ht.viewport)}}else P.length>0&&fp(G,P,M,O),qt&&yt.render(M),up(g,M,O);D!==null&&A===0&&(zt.updateMultisampleRenderTarget(D),zt.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,O),ct.resetDefaultState(),T=-1,E=null,_.pop(),_.length>0?(u=_[_.length-1],Wt===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function jc(M,O,H,G){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Zt.intersectsSprite(M)){G&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(J);const ut=z.update(M),mt=M.material;mt.visible&&g.push(M,ut,mt,H,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Zt.intersectsObject(M))){const ut=z.update(M),mt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Lt.copy(ut.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(J)),Array.isArray(mt)){const ht=ut.groups;for(let Rt=0,Ut=ht.length;Rt<Ut;Rt++){const bt=ht[Rt],Xt=mt[bt.materialIndex];Xt&&Xt.visible&&g.push(M,ut,Xt,H,Lt.z,bt)}}else mt.visible&&g.push(M,ut,mt,H,Lt.z,null)}}const et=M.children;for(let ut=0,mt=et.length;ut<mt;ut++)jc(et[ut],O,H,G)}function up(M,O,H,G){const P=M.opaque,et=M.transmissive,ut=M.transparent;u.setupLightsView(H),Wt===!0&&st.setGlobalState(v.clippingPlanes,H),G&&vt.viewport(U.copy(G)),P.length>0&&Wo(P,O,H),et.length>0&&Wo(et,O,H),ut.length>0&&Wo(ut,O,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function fp(M,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new nr(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Ho:hi,minFilter:ka,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=u.state.transmissionRenderTarget[G.id],ut=G.viewport||U;et.setSize(ut.z*v.transmissionResolutionScale,ut.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Rt=v.getActiveMipmapLevel();v.setRenderTarget(et),v.getClearColor(K),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),qt&&yt.render(H);const Ut=v.toneMapping;v.toneMapping=va;const bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),Wt===!0&&st.setGlobalState(v.clippingPlanes,G),Wo(M,H,G),zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let se=0,Ae=O.length;se<Ae;se++){const me=O[se],fe=me.object,At=me.geometry,Me=me.material,Kt=me.group;if(Me.side===Ri&&fe.layers.test(G.layers)){const _n=Me.side;Me.side=dn,Me.needsUpdate=!0,hp(fe,H,G,At,Me,Kt),Me.side=_n,Me.needsUpdate=!0,Xt=!0}}Xt===!0&&(zt.updateMultisampleRenderTarget(et),zt.updateRenderTargetMipmap(et))}v.setRenderTarget(mt,ht,Rt),v.setClearColor(K,Y),bt!==void 0&&(G.viewport=bt),v.toneMapping=Ut}function Wo(M,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let P=0,et=M.length;P<et;P++){const ut=M[P],mt=ut.object,ht=ut.geometry,Rt=ut.group;let Ut=ut.material;Ut.allowOverride===!0&&G!==null&&(Ut=G),mt.layers.test(H.layers)&&hp(mt,O,H,ht,Ut,Rt)}}function hp(M,O,H,G,P,et){M.onBeforeRender(v,O,H,G,P,et),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(v,O,H,G,M,et),P.transparent===!0&&P.side===Ri&&P.forceSinglePass===!1?(P.side=dn,P.needsUpdate=!0,v.renderBufferDirect(H,O,G,P,M,et),P.side=Ma,P.needsUpdate=!0,v.renderBufferDirect(H,O,G,P,M,et),P.side=Ri):v.renderBufferDirect(H,O,G,P,M,et),M.onAfterRender(v,O,H,G,P,et)}function Yo(M,O,H){O.isScene!==!0&&(O=Tt);const G=xt.get(M),P=u.state.lights,et=u.state.shadowsArray,ut=P.state.version,mt=W.getParameters(M,P.state,et,O,H),ht=W.getProgramCacheKey(mt);let Rt=G.programs;G.environment=M.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(M.isMeshStandardMaterial?De:Ge).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",Z),Rt=new Map,G.programs=Rt);let Ut=Rt.get(ht);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===ut)return pp(M,mt),Ut}else mt.uniforms=W.getUniforms(M),M.onBeforeCompile(mt,v),Ut=W.acquireProgram(mt,ht),Rt.set(ht,Ut),G.uniforms=mt.uniforms;const bt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=st.uniform),pp(M,mt),G.needsLights=px(M),G.lightsStateVersion=ut,G.needsLights&&(bt.ambientLightColor.value=P.state.ambient,bt.lightProbe.value=P.state.probe,bt.directionalLights.value=P.state.directional,bt.directionalLightShadows.value=P.state.directionalShadow,bt.spotLights.value=P.state.spot,bt.spotLightShadows.value=P.state.spotShadow,bt.rectAreaLights.value=P.state.rectArea,bt.ltc_1.value=P.state.rectAreaLTC1,bt.ltc_2.value=P.state.rectAreaLTC2,bt.pointLights.value=P.state.point,bt.pointLightShadows.value=P.state.pointShadow,bt.hemisphereLights.value=P.state.hemi,bt.directionalShadowMap.value=P.state.directionalShadowMap,bt.directionalShadowMatrix.value=P.state.directionalShadowMatrix,bt.spotShadowMap.value=P.state.spotShadowMap,bt.spotLightMatrix.value=P.state.spotLightMatrix,bt.spotLightMap.value=P.state.spotLightMap,bt.pointShadowMap.value=P.state.pointShadowMap,bt.pointShadowMatrix.value=P.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function dp(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=ql.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function pp(M,O){const H=xt.get(M);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function hx(M,O,H,G,P){O.isScene!==!0&&(O=Tt),zt.resetTextureUnits();const et=O.fog,ut=G.isMeshStandardMaterial?O.environment:null,mt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:fs,ht=(G.isMeshStandardMaterial?De:Ge).get(G.envMap||ut),Rt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),bt=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,se=!!H.morphAttributes.color;let Ae=va;G.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const me=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=me!==void 0?me.length:0,At=xt.get(G),Me=u.state.lights;if(Wt===!0&&(q===!0||M!==E)){const nn=M===E&&G.id===T;st.setState(G,M,nn)}let Kt=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Me.state.version||At.outputColorSpace!==mt||P.isBatchedMesh&&At.batching===!1||!P.isBatchedMesh&&At.batching===!0||P.isBatchedMesh&&At.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&At.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&At.instancing===!1||!P.isInstancedMesh&&At.instancing===!0||P.isSkinnedMesh&&At.skinning===!1||!P.isSkinnedMesh&&At.skinning===!0||P.isInstancedMesh&&At.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&At.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&At.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&At.instancingMorph===!1&&P.morphTexture!==null||At.envMap!==ht||G.fog===!0&&At.fog!==et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==Rt||At.vertexTangents!==Ut||At.morphTargets!==bt||At.morphNormals!==Xt||At.morphColors!==se||At.toneMapping!==Ae||At.morphTargetsCount!==fe)&&(Kt=!0):(Kt=!0,At.__version=G.version);let _n=At.currentProgram;Kt===!0&&(_n=Yo(G,O,P));let or=!1,vn=!1,Es=!1;const Ee=_n.getUniforms(),Ln=At.uniforms;if(vt.useProgram(_n.program)&&(or=!0,vn=!0,Es=!0),G.id!==T&&(T=G.id,vn=!0),or||E!==M){vt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ee.setValue(w,"projectionMatrix",M.projectionMatrix),Ee.setValue(w,"viewMatrix",M.matrixWorldInverse);const ln=Ee.map.cameraPosition;ln!==void 0&&ln.setValue(w,pt.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&Ee.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ee.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,vn=!0,Es=!0)}if(P.isSkinnedMesh){Ee.setOptional(w,P,"bindMatrix"),Ee.setOptional(w,P,"bindMatrixInverse");const nn=P.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ee.setValue(w,"boneTexture",nn.boneTexture,zt))}P.isBatchedMesh&&(Ee.setOptional(w,P,"batchingTexture"),Ee.setValue(w,"batchingTexture",P._matricesTexture,zt),Ee.setOptional(w,P,"batchingIdTexture"),Ee.setValue(w,"batchingIdTexture",P._indirectTexture,zt),Ee.setOptional(w,P,"batchingColorTexture"),P._colorsTexture!==null&&Ee.setValue(w,"batchingColorTexture",P._colorsTexture,zt));const Nn=H.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&it.update(P,H,_n),(vn||At.receiveShadow!==P.receiveShadow)&&(At.receiveShadow=P.receiveShadow,Ee.setValue(w,"receiveShadow",P.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ln.envMap.value=ht,Ln.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Ln.envMapIntensity.value=O.environmentIntensity),vn&&(Ee.setValue(w,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&dx(Ln,Es),et&&G.fog===!0&&Q.refreshFogUniforms(Ln,et),Q.refreshMaterialUniforms(Ln,G,I,V,u.state.transmissionRenderTarget[M.id]),ql.upload(w,dp(At),Ln,zt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ql.upload(w,dp(At),Ln,zt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ee.setValue(w,"center",P.center),Ee.setValue(w,"modelViewMatrix",P.modelViewMatrix),Ee.setValue(w,"normalMatrix",P.normalMatrix),Ee.setValue(w,"modelMatrix",P.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const nn=G.uniformsGroups;for(let ln=0,Zc=nn.length;ln<Zc;ln++){const Ra=nn[ln];It.update(Ra,_n),It.bind(Ra,_n)}}return _n}function dx(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function px(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,O,H){const G=xt.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),xt.get(M.texture).__webglTexture=O,xt.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const H=xt.get(M);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const mx=w.createFramebuffer();this.setRenderTarget=function(M,O=0,H=0){D=M,C=O,A=H;let G=!0,P=null,et=!1,ut=!1;if(M){const ht=xt.get(M);if(ht.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(ht.__webglFramebuffer===void 0)zt.setupRenderTarget(M);else if(ht.__hasExternalTextures)zt.rebindTextures(M,xt.get(M.texture).__webglTexture,xt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const bt=M.depthTexture;if(ht.__boundDepthTexture!==bt){if(bt!==null&&xt.has(bt)&&(M.width!==bt.image.width||M.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(M)}}const Rt=M.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ut=!0);const Ut=xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[O])?P=Ut[O][H]:P=Ut[O],et=!0):M.samples>0&&zt.useMultisampledRTT(M)===!1?P=xt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?P=Ut[H]:P=Ut,U.copy(M.viewport),F.copy(M.scissor),k=M.scissorTest}else U.copy(_t).multiplyScalar(I).floor(),F.copy(Ot).multiplyScalar(I).floor(),k=ne;if(H!==0&&(P=mx),vt.bindFramebuffer(w.FRAMEBUFFER,P)&&G&&vt.drawBuffers(M,P),vt.viewport(U),vt.scissor(F),vt.setScissorTest(k),et){const ht=xt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+O,ht.__webglTexture,H)}else if(ut){const ht=O;for(let Rt=0;Rt<M.textures.length;Rt++){const Ut=xt.get(M.textures[Rt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Rt,Ut.__webglTexture,H,ht)}}else if(M!==null&&H!==0){const ht=xt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ht.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(M,O,H,G,P,et,ut,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht){vt.bindFramebuffer(w.FRAMEBUFFER,ht);try{const Rt=M.textures[mt],Ut=Rt.format,bt=Rt.type;if(!Dt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-G&&H>=0&&H<=M.height-P&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),w.readPixels(O,H,G,P,Mt.convert(Ut),Mt.convert(bt),et))}finally{const Rt=D!==null?xt.get(D).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,O,H,G,P,et,ut,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(ht=ht[ut]),ht)if(O>=0&&O<=M.width-G&&H>=0&&H<=M.height-P){vt.bindFramebuffer(w.FRAMEBUFFER,ht);const Rt=M.textures[mt],Ut=Rt.format,bt=Rt.type;if(!Dt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.bufferData(w.PIXEL_PACK_BUFFER,et.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),w.readPixels(O,H,G,P,Mt.convert(Ut),Mt.convert(bt),0);const se=D!==null?xt.get(D).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,se);const Ae=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await nE(w,Ae,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Xt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,et),w.deleteBuffer(Xt),w.deleteSync(Ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,H=0){const G=Math.pow(2,-H),P=Math.floor(M.image.width*G),et=Math.floor(M.image.height*G),ut=O!==null?O.x:0,mt=O!==null?O.y:0;zt.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,ut,mt,P,et),vt.unbindTexture()};const gx=w.createFramebuffer(),_x=w.createFramebuffer();this.copyTextureToTexture=function(M,O,H=null,G=null,P=0,et=null){et===null&&(P!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=P,P=0):et=0);let ut,mt,ht,Rt,Ut,bt,Xt,se,Ae;const me=M.isCompressedTexture?M.mipmaps[et]:M.image;if(H!==null)ut=H.max.x-H.min.x,mt=H.max.y-H.min.y,ht=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Ut=H.min.y,bt=H.isBox3?H.min.z:0;else{const Nn=Math.pow(2,-P);ut=Math.floor(me.width*Nn),mt=Math.floor(me.height*Nn),M.isDataArrayTexture?ht=me.depth:M.isData3DTexture?ht=Math.floor(me.depth*Nn):ht=1,Rt=0,Ut=0,bt=0}G!==null?(Xt=G.x,se=G.y,Ae=G.z):(Xt=0,se=0,Ae=0);const fe=Mt.convert(O.format),At=Mt.convert(O.type);let Me;O.isData3DTexture?(zt.setTexture3D(O,0),Me=w.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(zt.setTexture2DArray(O,0),Me=w.TEXTURE_2D_ARRAY):(zt.setTexture2D(O,0),Me=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,O.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,O.unpackAlignment);const Kt=w.getParameter(w.UNPACK_ROW_LENGTH),_n=w.getParameter(w.UNPACK_IMAGE_HEIGHT),or=w.getParameter(w.UNPACK_SKIP_PIXELS),vn=w.getParameter(w.UNPACK_SKIP_ROWS),Es=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Rt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ut),w.pixelStorei(w.UNPACK_SKIP_IMAGES,bt);const Ee=M.isDataArrayTexture||M.isData3DTexture,Ln=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Nn=xt.get(M),nn=xt.get(O),ln=xt.get(Nn.__renderTarget),Zc=xt.get(nn.__renderTarget);vt.bindFramebuffer(w.READ_FRAMEBUFFER,ln.__webglFramebuffer),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Zc.__webglFramebuffer);for(let Ra=0;Ra<ht;Ra++)Ee&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(M).__webglTexture,P,bt+Ra),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,xt.get(O).__webglTexture,et,Ae+Ra)),w.blitFramebuffer(Rt,Ut,ut,mt,Xt,se,ut,mt,w.DEPTH_BUFFER_BIT,w.NEAREST);vt.bindFramebuffer(w.READ_FRAMEBUFFER,null),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(P!==0||M.isRenderTargetTexture||xt.has(M)){const Nn=xt.get(M),nn=xt.get(O);vt.bindFramebuffer(w.READ_FRAMEBUFFER,gx),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,_x);for(let ln=0;ln<ht;ln++)Ee?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Nn.__webglTexture,P,bt+ln):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Nn.__webglTexture,P),Ln?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,nn.__webglTexture,et,Ae+ln):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,nn.__webglTexture,et),P!==0?w.blitFramebuffer(Rt,Ut,ut,mt,Xt,se,ut,mt,w.COLOR_BUFFER_BIT,w.NEAREST):Ln?w.copyTexSubImage3D(Me,et,Xt,se,Ae+ln,Rt,Ut,ut,mt):w.copyTexSubImage2D(Me,et,Xt,se,Rt,Ut,ut,mt);vt.bindFramebuffer(w.READ_FRAMEBUFFER,null),vt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ln?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Me,et,Xt,se,Ae,ut,mt,ht,fe,At,me.data):O.isCompressedArrayTexture?w.compressedTexSubImage3D(Me,et,Xt,se,Ae,ut,mt,ht,fe,me.data):w.texSubImage3D(Me,et,Xt,se,Ae,ut,mt,ht,fe,At,me):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,et,Xt,se,ut,mt,fe,At,me.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,et,Xt,se,me.width,me.height,fe,me.data):w.texSubImage2D(w.TEXTURE_2D,et,Xt,se,ut,mt,fe,At,me);w.pixelStorei(w.UNPACK_ROW_LENGTH,Kt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_n),w.pixelStorei(w.UNPACK_SKIP_PIXELS,or),w.pixelStorei(w.UNPACK_SKIP_ROWS,vn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Es),et===0&&O.generateMipmaps&&w.generateMipmap(Me),vt.unbindTexture()},this.initRenderTarget=function(M){xt.get(M).__webglFramebuffer===void 0&&zt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),vt.unbindTexture()},this.resetState=function(){C=0,A=0,D=null,vt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}}const TR=({modelPath:e,scale:t=1,position:n=[0,0,0],rotation:i=[0,0,0],modelSize:a=2,rotationSpeed:r=.01,showWireframe:s=!1,color:o=4886754,geometry:l="box"})=>{const c=be.useRef(null),d=be.useRef(null),h=be.useRef(null),f=be.useRef(null);return be.useEffect(()=>{if(!c.current)return;const p=new CE;d.current=p;const x=new Tn(75,c.current.clientWidth/c.current.clientHeight,.1,1e3);x.position.set(0,0,5);const S=new ER({alpha:!0,antialias:!0});S.setSize(c.current.clientWidth,c.current.clientHeight),S.setClearColor(0,0),S.shadowMap.enabled=!0,S.shadowMap.type=Pv,h.current=S,c.current.appendChild(S.domElement);const g=new FE(16777215,.6);p.add(g);const u=new zE(16777215,.8);u.position.set(10,10,5),u.castShadow=!0,p.add(u);const m=new IE(4886754,.5);m.position.set(-10,-10,-5),p.add(m);let _;switch(l){case"sphere":_=new rp(a,32,32);break;case"torus":_=new sp(a,a*.4,16,32);break;default:_=new ys(a,a,a)}const v=new LE({color:o,transparent:!0,opacity:s?.6:.8,wireframe:s}),b=new oi(_,v);b.position.set(...n),b.rotation.set(...i),b.scale.setScalar(t),b.castShadow=!0,b.receiveShadow=!0,p.add(b);const C=()=>{f.current=requestAnimationFrame(C),b.rotation.x+=r,b.rotation.y+=r*.7,b.rotation.z+=r*.3,b.position.y=n[1]+Math.sin(Date.now()*.001)*.3,S.render(p,x)};C();const A=()=>{c.current&&(x.aspect=c.current.clientWidth/c.current.clientHeight,x.updateProjectionMatrix(),S.setSize(c.current.clientWidth,c.current.clientHeight))};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),f.current&&cancelAnimationFrame(f.current),c.current&&S.domElement&&c.current.removeChild(S.domElement),_.dispose(),v.dispose(),S.dispose()}},[e,t,n,i,a,r,s,o,l]),nt.jsx("div",{ref:c,style:{width:"100%",height:"100%",position:"relative"}})},bR=()=>{const e=be.useRef(null),t=be.useRef([]),n=be.useRef([]),i=be.useRef({x:0,y:0,prevX:0,prevY:0,isPressed:!1}),a=be.useRef(null),r=3e3,s=20,o=.98;class l{constructor(g,u){this.x=Math.random()*g,this.y=Math.random()*u,this.vx=0,this.vy=0,this.radius=Math.random()*2+1,this.alpha=Math.random()*.5+.5,this.color=this.getRandomColor(),this.life=1,this.maxLife=Math.random()*200+100,this.age=0}getRandomColor(){const g=[{r:100,g:200,b:255},{r:150,g:150,b:255},{r:200,g:150,b:255},{r:255,g:200,b:150},{r:150,g:255,b:200}];return g[Math.floor(Math.random()*g.length)]}update(g,u,m,_){const v=Math.floor(this.x/_),b=Math.floor(this.y/_),C=Math.floor(g/_);if(v>=0&&v<C&&b>=0&&b<Math.floor(u/_)){const A=b*C+v;m[A]&&(this.vx+=m[A].vx*.5,this.vy+=m[A].vy*.5)}this.vx+=(Math.random()-.5)*.1,this.vy+=(Math.random()-.5)*.1,this.vx*=.99,this.vy*=.99,this.x+=this.vx,this.y+=this.vy,this.x<0&&(this.x=g),this.x>g&&(this.x=0),this.y<0&&(this.y=u),this.y>u&&(this.y=0),this.age++,this.life=1-this.age/this.maxLife,this.life<=0&&this.reset(g,u)}reset(g,u){this.x=Math.random()*g,this.y=Math.random()*u,this.vx=0,this.vy=0,this.age=0,this.life=1,this.color=this.getRandomColor()}draw(g){g.beginPath(),g.arc(this.x,this.y,this.radius,0,Math.PI*2),g.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha*this.life})`,g.fill()}}const c=(S,g,u)=>{const m=Math.floor(S/u),_=Math.floor(g/u),v=[];for(let b=0;b<m*_;b++)v.push({vx:0,vy:0,density:0});return v},d=(S,g,u,m,_,v,b)=>{const C=Math.floor(S/v),A=Math.floor(g/v),D=Math.floor(_/v),T=3;for(let E=-T;E<=T;E++)for(let U=-T;U<=T;U++){const F=C+E,k=A+U;if(F>=0&&F<D&&k>=0){const K=k*D+F;if(b[K]){const Y=Math.sqrt(E*E+U*U),N=Math.max(0,1-Y/T);b[K].vx+=u*N*.5,b[K].vy+=m*N*.5}}}},h=S=>{for(let g of S)g.vx*=o,g.vy*=o};be.useEffect(()=>{const S=e.current;if(!S)return;const g=S.getContext("2d"),u=S.width,m=S.height,_=[];for(let C=0;C<r;C++)_.push(new l(u,m));t.current=_;const v=c(u,m,s);n.current=v;const b=()=>{g.fillStyle="rgba(10, 10, 20, 0.1)",g.fillRect(0,0,u,m),h(v);for(let C of _)C.update(u,m,v,s),C.draw(g);a.current=requestAnimationFrame(b)};return g.fillStyle="rgba(10, 10, 20, 1)",g.fillRect(0,0,u,m),b(),()=>{a.current&&cancelAnimationFrame(a.current)}},[]);const f=S=>{const g=e.current.getBoundingClientRect(),u=S.clientX-g.left,m=S.clientY-g.top;i.current={x:u,y:m,prevX:u,prevY:m,isPressed:!0}},p=S=>{if(!i.current.isPressed)return;const g=e.current.getBoundingClientRect(),u=S.clientX-g.left,m=S.clientY-g.top,_=u-i.current.prevX,v=m-i.current.prevY;d(u,m,_,v,e.current.width,s,n.current),i.current={...i.current,x:u,y:m,prevX:u,prevY:m}},x=()=>{i.current.isPressed=!1};return nt.jsx("div",{className:"fluid-particles-page",children:nt.jsx("canvas",{ref:e,width:Math.floor(window.innerWidth*.85),height:Math.floor(window.innerHeight*.85),className:"fluid-canvas",onMouseDown:f,onMouseMove:p,onMouseUp:x,onMouseLeave:x,onTouchStart:S=>{S.preventDefault(),f(S.touches[0])},onTouchMove:S=>{S.preventDefault(),p(S.touches[0])},onTouchEnd:x})})};function AR(){const[e,t]=be.useState(null),[n,i]=be.useState(0),[a,r]=be.useState(!1),[s,o]=be.useState("all"),[l,c]=be.useState("home"),[d,h]=be.useState(!0),[f,p]=be.useState(0),x=[{id:"virtual-soul",title:"Virtual Soul",category:"Digital Art",year:"2024",description:"A series exploring the ethereal essence of identity in digital realms.",software:["photoshop","aftereffects","cinema4d","3dmax","unrealengine"],image:"/Personal-Website/images/1-Virtual%20Soul/image001.jpg",gallery:["/Personal-Website/images/1-Virtual%20Soul/image001.jpg","/Personal-Website/images/1-Virtual%20Soul/image002.jpg","/Personal-Website/images/1-Virtual%20Soul/image003.jpg","/Personal-Website/images/1-Virtual%20Soul/image004.jpg","/Personal-Website/images/1-Virtual%20Soul/image005.jpg","/Personal-Website/images/1-Virtual%20Soul/image006.jpg","/Personal-Website/images/1-Virtual%20Soul/image007.jpg"]},{id:"nether-portal",title:"Nether Portal",category:"Generative Art",year:"2023",description:"Hypnotic tunnels and geometry bending through imaginary space. This project incorporates AI for code generation and image creation.",software:["touchdesigner","aftereffects","photoshop","arduino","ai"],image:"/Personal-Website/images/2-Nether%20Portal/image008.jpg",gallery:["/Personal-Website/images/2-Nether%20Portal/image008.jpg","/Personal-Website/images/2-Nether%20Portal/image009.jpg","/Personal-Website/images/2-Nether%20Portal/image010.jpg","/Personal-Website/images/2-Nether%20Portal/image011.jpg","/Personal-Website/images/2-Nether%20Portal/image013.jpg","/Personal-Website/images/2-Nether%20Portal/image014.jpg"]},{id:"prayer-bloom",title:"Prayer of Wind and Bloom",category:"Interactive Installation",year:"2023",description:"An immersive experience connecting nature and technology. This project combines digital tools with traditional handcraft techniques.",software:["arduino","photoshop"],image:"/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg",gallery:["/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image015.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image016.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image017.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image018.jpg","/Personal-Website/images/3-Prayer%20of%20Wind%20and%20Bloom/image019.jpg"]},{id:"unnatural-chronologies",title:"Unnatural Chronologies",category:"Video Art",year:"2022",description:"A meditation on time and digital decay through glitch aesthetics.",software:["touchdesigner","aftereffects","photoshop","artivive","blender"],image:"/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg",gallery:["/Personal-Website/images/4-Unnatural%20Chronologies/image020.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image021.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image022.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image023.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image024.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image025.jpg","/Personal-Website/images/4-Unnatural%20Chronologies/image026.jpg"]}],S=[{id:"all",name:"All",icon:"🎨"},{id:"photoshop",name:"Photoshop",icon:"🖼️"},{id:"blender",name:"Blender",icon:"🌪️"},{id:"aftereffects",name:"After Effects",icon:"🎬"},{id:"cinema4d",name:"Cinema 4D",icon:"🎭"},{id:"touchdesigner",name:"TouchDesigner",icon:"⚡"},{id:"arduino",name:"Arduino",icon:"🔧"},{id:"3dmax",name:"3D Max",icon:"🏗️"},{id:"unrealengine",name:"Unreal Engine",icon:"🎮"},{id:"ai",name:"AI Tools",icon:"🤖"},{id:"artivive",name:"Artivive",icon:"🔮"}],g=s==="all"?x:x.filter(m=>m.software.includes(s)),u=m=>{a||(r(!0),i(m==="next"?_=>(_+1)%x.length:_=>(_-1+x.length)%x.length),setTimeout(()=>r(!1),800))};return be.useEffect(()=>{const m=setInterval(()=>{!e&&!a&&u("next")},5e3);return()=>clearInterval(m)},[e,a]),be.useEffect(()=>{const m=setInterval(()=>{p(_=>_>=100?(clearInterval(m),setTimeout(()=>h(!1),300),100):_+Math.random()*25)},50);return()=>clearInterval(m)},[]),d?nt.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:9999,color:"white",fontFamily:"'Inter', sans-serif"},children:[nt.jsx("div",{style:{marginBottom:"40px",animation:"pulse 2s ease-in-out infinite",transform:`scale(${1+Math.sin(Date.now()/500)*.1})`},children:nt.jsx("img",{src:"/Personal-Website/images/logo111.svg",alt:"OYXR Logo",style:{width:"100px",height:"100px",filter:"invert(1)",opacity:.9,backgroundColor:"white",borderRadius:"50%",padding:"15px",border:"3px solid rgba(255,255,255,0.8)",boxShadow:"0 0 30px rgba(255,255,255,0.3)"}})}),nt.jsx("div",{style:{fontSize:"2rem",fontWeight:"300",color:"white",letterSpacing:"0.2em",marginBottom:"30px",fontFamily:"'Inter', sans-serif"},children:"OYXR"}),nt.jsxs("div",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.7)",letterSpacing:"0.1em",marginBottom:"40px",textAlign:"center"},children:["Loading",nt.jsx("br",{}),nt.jsx("span",{style:{opacity:.5},children:"Step Into My Universe"})]}),nt.jsx("div",{style:{width:"300px",height:"3px",background:"rgba(255,255,255,0.1)",borderRadius:"2px",overflow:"hidden",marginBottom:"20px"},children:nt.jsx("div",{style:{width:`${f}%`,height:"100%",background:"linear-gradient(90deg, #ffffff 0%, #888888 50%, #ffffff 100%)",borderRadius:"2px",transition:"width 0.3s ease",boxShadow:"0 0 10px rgba(255,255,255,0.5)"}})}),nt.jsxs("div",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",letterSpacing:"0.1em"},children:[Math.round(f),"%"]}),nt.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",height:"400px",pointerEvents:"none",zIndex:-1},children:[...Array(20)].map((m,_)=>nt.jsx("div",{style:{position:"absolute",width:"4px",height:"4px",background:"rgba(255,255,255,0.3)",borderRadius:"50%",top:"50%",left:"50%",transform:`
                  translate(-50%, -50%) 
                  rotate(${_*18}deg) 
                  translateY(-${100+_*10}px)
                  rotate(${Date.now()/(1e3+_*100)}deg)
                `,animation:`float ${2+_*.1}s ease-in-out infinite`,animationDelay:`${_*.1}s`}},_))}),nt.jsx("style",{jsx:!0,children:`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) rotate(${Math.random()*360}deg) translateY(-100px) scale(0.8); }
            50% { transform: translate(-50%, -50%) rotate(${Math.random()*360}deg) translateY(-120px) scale(1.2); }
          }
        `})]}):l==="fluid"?nt.jsxs("div",{style:{position:"relative"},children:[nt.jsx("button",{onClick:()=>c("home"),style:{position:"fixed",top:"30px",left:"30px",zIndex:1e3,background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.3)",color:"white",padding:"12px 24px",borderRadius:"8px",cursor:"pointer",fontSize:"1rem",fontFamily:"'Inter', sans-serif",backdropFilter:"blur(10px)",transition:"all 0.3s ease"},onMouseEnter:m=>{m.target.style.background="rgba(255, 255, 255, 0.2)",m.target.style.borderColor="rgba(255, 255, 255, 0.5)"},onMouseLeave:m=>{m.target.style.background="rgba(255, 255, 255, 0.1)",m.target.style.borderColor="rgba(255, 255, 255, 0.3)"},children:"← Back to Portfolio"}),nt.jsx(bR,{})]}):nt.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#000000",color:"white",margin:0,padding:0,overflow:"hidden auto",scrollSnapType:"y mandatory"},children:[nt.jsx("style",{children:`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.4; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-5px); }
        }
      `}),nt.jsxs("section",{style:{minHeight:"100vh",height:"100vh",width:"100vw",padding:"40px",background:"linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",scrollSnapAlign:"start",scrollSnapStop:"always",overflow:"hidden"},children:[nt.jsx("div",{style:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0 60px",zIndex:2,maxWidth:"600px"},children:nt.jsxs("div",{style:{width:"100%",textAlign:"center"},children:[nt.jsx("h1",{style:{fontSize:"clamp(4rem, 8vw, 6rem)",fontWeight:"100",margin:"0 0 30px 0",letterSpacing:"-0.03em",lineHeight:"1.1",background:"linear-gradient(135deg, #ffffff 0%, #888888 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"'Inter', sans-serif"},children:"OYXR"}),nt.jsx("div",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.15em",marginBottom:"60px",textTransform:"uppercase",fontWeight:"300",fontFamily:"'Inter', sans-serif",whiteSpace:"nowrap"},children:"Designer · Coder · Gamer · Occasional Reality Glitcher"}),nt.jsx("button",{onClick:()=>c("fluid"),style:{background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"rgba(255, 255, 255, 0.8)",padding:"18px 40px",borderRadius:"8px",cursor:"pointer",fontSize:"0.9rem",fontFamily:"'Inter', sans-serif",backdropFilter:"blur(10px)",transition:"all 0.3s ease",letterSpacing:"0.15em",marginBottom:"40px"},onMouseEnter:m=>{m.target.style.background="rgba(100, 120, 255, 0.2)",m.target.style.borderColor="rgba(100, 120, 255, 0.4)",m.target.style.color="rgba(255, 255, 255, 1)",m.target.style.transform="translateY(-2px)"},onMouseLeave:m=>{m.target.style.background="rgba(255, 255, 255, 0.05)",m.target.style.borderColor="rgba(255, 255, 255, 0.2)",m.target.style.color="rgba(255, 255, 255, 0.8)",m.target.style.transform="translateY(0)"},children:"🌊 FLUID PARTICLES"}),nt.jsx("div",{style:{width:"60px",height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",margin:"0 auto 30px"}}),nt.jsx("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.4)",letterSpacing:"0.2em",textTransform:"uppercase",fontFamily:"'Inter', sans-serif",animation:"fadeInOut 2s ease-in-out infinite"},children:"Scroll to Explore"})]})}),nt.jsxs("div",{style:{flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"0 80px 0 20px",perspective:"1000px",position:"relative"},children:[nt.jsx("div",{style:{position:"absolute",top:"20%",right:"-100px",width:"300px",height:"300px",opacity:.3,zIndex:0,pointerEvents:"none"},children:nt.jsx(TR,{modelSize:1.5,rotationSpeed:.01,showWireframe:!0,color:4890367,geometry:"torus"})}),nt.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:"700px",height:"400px",zIndex:1},children:[nt.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"600px",height:"300px",transform:`translate(-50%, -50%) rotateY(${n*-90}deg)`,transformStyle:"preserve-3d",transition:a?"transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)":"none"},children:x.map((m,_)=>{const v=_*90,b=_===n;return nt.jsx("div",{style:{position:"absolute",width:"450px",height:"280px",top:"50%",left:"50%",transform:`translate(-50%, -50%) rotateY(${v}deg) translateZ(300px)`,transformStyle:"preserve-3d",cursor:"pointer",transition:"all 0.3s ease"},onClick:()=>t(m),children:nt.jsxs("div",{style:{width:"100%",height:"100%",background:"rgba(0,0,0,0.8)",borderRadius:"16px",border:b?"2px solid rgba(255,255,255,0.3)":"1px solid rgba(255,255,255,0.1)",overflow:"hidden",position:"relative",transform:b?"scale(1.05)":"scale(0.9)",opacity:b?1:.7,transition:"all 0.3s ease",boxShadow:b?"0 20px 40px rgba(0,0,0,0.5)":"0 10px 20px rgba(0,0,0,0.3)",display:"flex",padding:"20px",gap:"20px"},children:[nt.jsxs("div",{style:{flex:"2",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,0.05)",borderRadius:"12px",overflow:"hidden"},children:[nt.jsx("img",{src:m.image,alt:m.title,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:"8px"},onError:C=>{C.target.style.display="none",C.target.nextSibling.style.display="flex"}}),nt.jsx("div",{style:{display:"none",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.6)",fontSize:"1rem",fontFamily:"'Inter', sans-serif",textAlign:"center",padding:"20px"},children:m.title})]}),nt.jsxs("div",{style:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"center",padding:"10px 0"},children:[nt.jsxs("div",{style:{fontSize:"0.7rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",marginBottom:"12px",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:[m.category," • ",m.year]}),nt.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"500",margin:"0",color:"white",letterSpacing:"-0.01em",fontFamily:"'Inter', sans-serif",lineHeight:"1.3"},children:m.title})]}),nt.jsx("div",{style:{position:"absolute",top:"15px",right:"15px",width:"30px",height:"30px",background:"rgba(0,0,0,0.7)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",opacity:b?1:.7,border:"1px solid rgba(255,255,255,0.2)"},children:"↗"})]})},m.id)})}),nt.jsxs("div",{style:{position:"absolute",bottom:"-60px",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"20px"},children:[nt.jsx("button",{onClick:()=>u("prev"),disabled:a,style:{width:"35px",height:"35px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(0,0,0,0.5)",color:"white",borderRadius:"50%",cursor:a?"not-allowed":"pointer",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",opacity:a?.5:1},children:"←"}),nt.jsx("div",{style:{display:"flex",gap:"8px"},children:x.map((m,_)=>nt.jsx("div",{onClick:()=>{a||i(_)},style:{width:"8px",height:"8px",borderRadius:"50%",background:_===n?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.3)",cursor:a?"not-allowed":"pointer",transition:"all 0.3s ease"}},_))}),nt.jsx("button",{onClick:()=>u("next"),disabled:a,style:{width:"35px",height:"35px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(0,0,0,0.5)",color:"white",borderRadius:"50%",cursor:a?"not-allowed":"pointer",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease",opacity:a?.5:1},children:"→"})]})]})]}),nt.jsx("div",{style:{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",color:"rgba(255,255,255,0.4)",fontSize:"0.8rem",letterSpacing:"0.1em",fontFamily:"'Inter', sans-serif"},children:"SCROLL TO EXPLORE"})]}),nt.jsxs("section",{id:"work",style:{height:"100vh",width:"100vw",padding:"40px",background:"linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%)",display:"flex",alignItems:"center",justifyContent:"center",scrollSnapAlign:"start",scrollSnapStop:"always",overflow:"hidden"},children:[nt.jsxs("div",{style:{width:"320px",display:"flex",flexDirection:"column",paddingRight:"40px"},children:[nt.jsxs("div",{style:{marginBottom:"40px"},children:[nt.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:"300",margin:"0 0 15px 0",letterSpacing:"-0.02em",color:"white",fontFamily:"'Inter', sans-serif"},children:"Featured Work"}),nt.jsx("p",{style:{fontSize:"1rem",color:"rgba(255,255,255,0.6)",margin:0,fontFamily:"'Inter', sans-serif",lineHeight:"1.6"},children:"A selection of recent projects exploring digital art and interactive experiences"})]}),nt.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",flex:1,maxHeight:"calc(100vh - 200px)",overflowY:"auto"},children:S.map(m=>nt.jsxs("button",{onClick:()=>o(m.id),style:{background:s===m.id?"linear-gradient(135deg, #667eea 0%, #764ba2 100%)":"rgba(255, 255, 255, 0.05)",border:s===m.id?"none":"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",padding:"12px 16px",color:"white",fontSize:"0.9rem",fontWeight:"400",cursor:"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"10px",textAlign:"left",fontFamily:"'Inter', sans-serif",transform:s===m.id?"translateX(5px)":"translateX(0)",boxShadow:s===m.id?"0 4px 15px rgba(102, 126, 234, 0.3)":"none"},onMouseEnter:_=>{s!==m.id&&(_.target.style.background="rgba(255, 255, 255, 0.1)",_.target.style.transform="translateX(3px)")},onMouseLeave:_=>{s!==m.id&&(_.target.style.background="rgba(255, 255, 255, 0.05)",_.target.style.transform="translateX(0)")},children:[nt.jsx("span",{style:{fontSize:"1.1rem"},children:m.icon}),nt.jsx("span",{children:m.name})]},m.id))})]}),nt.jsx("div",{style:{flex:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gap:"20px",height:"100%",overflow:"hidden"},children:g.map((m,_)=>nt.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",transform:"translateY(0)",opacity:1,display:"flex",flexDirection:"column",height:"100%"},onClick:()=>t(m),onMouseEnter:v=>{v.target.style.transform="translateY(-8px)",v.target.style.borderColor="rgba(255,255,255,0.3)",v.target.style.boxShadow="0 20px 40px rgba(0,0,0,0.3)"},onMouseLeave:v=>{v.target.style.transform="translateY(0)",v.target.style.borderColor="rgba(255,255,255,0.1)",v.target.style.boxShadow="none"},children:[nt.jsxs("div",{style:{width:"100%",flex:"1",position:"relative",overflow:"hidden",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"180px"},children:[nt.jsx("img",{src:`${m.image}?v=${Date.now()}`,alt:m.title,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",transition:"transform 0.4s ease"},onError:v=>{v.target.style.display="none",v.target.nextSibling.style.display="flex"}}),nt.jsx("div",{style:{display:"none",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,0.6)",fontSize:"1.2rem",fontFamily:"'Inter', sans-serif",textAlign:"center",height:"100%"},children:m.title}),nt.jsx("div",{style:{position:"absolute",top:"12px",right:"12px",width:"32px",height:"32px",background:"rgba(0,0,0,0.7)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"14px",opacity:.8,transition:"all 0.3s ease"},children:"↗"})]}),nt.jsxs("div",{style:{padding:"12px 16px",background:"rgba(0,0,0,0.3)",borderTop:"1px solid rgba(255,255,255,0.1)"},children:[nt.jsxs("div",{style:{fontSize:"0.75rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",marginBottom:"6px",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:[m.category," • ",m.year]}),nt.jsx("h3",{style:{fontSize:"1rem",fontWeight:"500",margin:"0",color:"white",letterSpacing:"-0.01em",fontFamily:"'Inter', sans-serif",lineHeight:"1.3"},children:m.title})]})]},m.id))})]}),e&&nt.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3,padding:"20px"},onClick:()=>t(null),children:nt.jsxs("div",{style:{position:"relative",maxWidth:"90vw",maxHeight:"90vh",background:"#1a1a1a",borderRadius:"20px",overflow:"hidden",boxShadow:"0 25px 50px rgba(0,0,0,0.5)"},onClick:m=>m.stopPropagation(),children:[nt.jsx("button",{onClick:()=>t(null),style:{position:"absolute",top:"15px",right:"15px",background:"rgba(255,255,255,0.1)",border:"none",color:"white",fontSize:"1.5rem",padding:"10px",borderRadius:"50%",cursor:"pointer",zIndex:10,transition:"all 0.3s ease"},onMouseEnter:m=>{m.target.style.background="rgba(255,255,255,0.2)"},onMouseLeave:m=>{m.target.style.background="rgba(255,255,255,0.1)"},children:"×"}),nt.jsxs("div",{style:{display:"flex",flexDirection:"row",maxHeight:"90vh",overflow:"hidden"},children:[nt.jsxs("div",{style:{flex:"1.5",position:"relative",minHeight:"500px",background:"#0a0a0a"},children:[nt.jsx("img",{src:e.gallery[n],alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}}),e.gallery.length>1&&nt.jsxs(nt.Fragment,{children:[nt.jsx("button",{onClick:()=>i(n>0?n-1:e.gallery.length-1),style:{position:"absolute",left:"15px",top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.5)",border:"none",color:"white",fontSize:"1.5rem",padding:"15px 20px",borderRadius:"50%",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:m=>{m.target.style.background="rgba(0,0,0,0.7)"},onMouseLeave:m=>{m.target.style.background="rgba(0,0,0,0.5)"},children:"‹"}),nt.jsx("button",{onClick:()=>i(n<e.gallery.length-1?n+1:0),style:{position:"absolute",right:"15px",top:"50%",transform:"translateY(-50%)",background:"rgba(0,0,0,0.5)",border:"none",color:"white",fontSize:"1.5rem",padding:"15px 20px",borderRadius:"50%",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:m=>{m.target.style.background="rgba(0,0,0,0.7)"},onMouseLeave:m=>{m.target.style.background="rgba(0,0,0,0.5)"},children:"›"})]}),nt.jsxs("div",{style:{position:"absolute",bottom:"15px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.7)",color:"white",padding:"8px 16px",borderRadius:"20px",fontSize:"0.85rem",fontFamily:"'Inter', sans-serif"},children:[n+1," / ",e.gallery.length]})]}),nt.jsxs("div",{style:{flex:"1",padding:"40px",display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[nt.jsxs("div",{style:{marginBottom:"20px"},children:[nt.jsxs("div",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.6)",letterSpacing:"0.1em",marginBottom:"8px",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:[e.category," • ",e.year]}),nt.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"200",margin:"0 0 15px 0",color:"white",fontFamily:"'Inter', sans-serif"},children:e.title}),nt.jsx("p",{style:{fontSize:"1rem",lineHeight:"1.6",color:"rgba(255,255,255,0.8)",margin:"0 0 30px 0",fontFamily:"'Inter', sans-serif"},children:e.description})]}),nt.jsxs("div",{style:{marginBottom:"30px"},children:[nt.jsx("h3",{style:{fontSize:"1rem",fontWeight:"500",margin:"0 0 12px 0",color:"rgba(255,255,255,0.8)",letterSpacing:"0.05em",textTransform:"uppercase",fontFamily:"'Inter', sans-serif"},children:"Tools Used"}),nt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.software.map((m,_)=>{const v=S.find(b=>b.id===m);return nt.jsxs("span",{style:{padding:"6px 12px",background:"rgba(255,255,255,0.1)",borderRadius:"15px",fontSize:"0.8rem",color:"rgba(255,255,255,0.8)",fontFamily:"'Inter', sans-serif",display:"flex",alignItems:"center",gap:"6px"},children:[v==null?void 0:v.icon," ",(v==null?void 0:v.name)||m]},_)})})]})]})]})]})})]})}dM.createRoot(document.getElementById("root")).render(nt.jsx(be.StrictMode,{children:nt.jsx(AR,{})}));
