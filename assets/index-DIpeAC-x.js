(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();var Od={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function QE(){if(Pv)return Il;Pv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:l}}return Il.Fragment=t,Il.jsx=e,Il.jsxs=e,Il}var zv;function JE(){return zv||(zv=1,Od.exports=QE()),Od.exports}var Zt=JE(),Nd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function $E(){if(Iv)return le;Iv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(N,K,pt){this.props=N,this.context=K,this.refs=M,this.updater=pt||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(N,K,pt){this.props=N,this.context=K,this.refs=M,this.updater=pt||x}var U=D.prototype=new y;U.constructor=D,E(U,S.prototype),U.isPureReactComponent=!0;var A=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function z(N,K,pt,yt,St,Ct){return pt=Ct.ref,{$$typeof:o,type:N,key:K,ref:pt!==void 0?pt:null,props:Ct}}function F(N,K){return z(N.type,K,void 0,void 0,void 0,N.props)}function b(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function O(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(pt){return K[pt]})}var V=/\/+/g;function j(N,K){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):K.toString(36)}function et(){}function ft(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(et,et):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function rt(N,K,pt,yt,St){var Ct=typeof N;(Ct==="undefined"||Ct==="boolean")&&(N=null);var tt=!1;if(N===null)tt=!0;else switch(Ct){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(N.$$typeof){case o:case t:tt=!0;break;case m:return tt=N._init,rt(tt(N._payload),K,pt,yt,St)}}if(tt)return St=St(N),tt=yt===""?"."+j(N,0):yt,A(St)?(pt="",tt!=null&&(pt=tt.replace(V,"$&/")+"/"),rt(St,K,pt,"",function(Kt){return Kt})):St!=null&&(b(St)&&(St=F(St,pt+(St.key==null||N&&N.key===St.key?"":(""+St.key).replace(V,"$&/")+"/")+tt)),K.push(St)),1;tt=0;var vt=yt===""?".":yt+":";if(A(N))for(var At=0;At<N.length;At++)yt=N[At],Ct=vt+j(yt,At),tt+=rt(yt,K,pt,Ct,St);else if(At=v(N),typeof At=="function")for(N=At.call(N),At=0;!(yt=N.next()).done;)yt=yt.value,Ct=vt+j(yt,At++),tt+=rt(yt,K,pt,Ct,St);else if(Ct==="object"){if(typeof N.then=="function")return rt(ft(N),K,pt,yt,St);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return tt}function B(N,K,pt){if(N==null)return N;var yt=[],St=0;return rt(N,yt,"","",function(Ct){return K.call(pt,Ct,St++)}),yt}function k(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(pt){(N._status===0||N._status===-1)&&(N._status=1,N._result=pt)},function(pt){(N._status===0||N._status===-1)&&(N._status=2,N._result=pt)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var X=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ut(){}return le.Children={map:B,forEach:function(N,K,pt){B(N,function(){K.apply(this,arguments)},pt)},count:function(N){var K=0;return B(N,function(){K++}),K},toArray:function(N){return B(N,function(K){return K})||[]},only:function(N){if(!b(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},le.Component=S,le.Fragment=e,le.Profiler=r,le.PureComponent=D,le.StrictMode=a,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return L.H.useMemoCache(N)}},le.cache=function(N){return function(){return N.apply(null,arguments)}},le.cloneElement=function(N,K,pt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=E({},N.props),St=N.key,Ct=void 0;if(K!=null)for(tt in K.ref!==void 0&&(Ct=void 0),K.key!==void 0&&(St=""+K.key),K)!P.call(K,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&K.ref===void 0||(yt[tt]=K[tt]);var tt=arguments.length-2;if(tt===1)yt.children=pt;else if(1<tt){for(var vt=Array(tt),At=0;At<tt;At++)vt[At]=arguments[At+2];yt.children=vt}return z(N.type,St,void 0,void 0,Ct,yt)},le.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},le.createElement=function(N,K,pt){var yt,St={},Ct=null;if(K!=null)for(yt in K.key!==void 0&&(Ct=""+K.key),K)P.call(K,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(St[yt]=K[yt]);var tt=arguments.length-2;if(tt===1)St.children=pt;else if(1<tt){for(var vt=Array(tt),At=0;At<tt;At++)vt[At]=arguments[At+2];St.children=vt}if(N&&N.defaultProps)for(yt in tt=N.defaultProps,tt)St[yt]===void 0&&(St[yt]=tt[yt]);return z(N,Ct,void 0,void 0,null,St)},le.createRef=function(){return{current:null}},le.forwardRef=function(N){return{$$typeof:f,render:N}},le.isValidElement=b,le.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:k}},le.memo=function(N,K){return{$$typeof:h,type:N,compare:K===void 0?null:K}},le.startTransition=function(N){var K=L.T,pt={};L.T=pt;try{var yt=N(),St=L.S;St!==null&&St(pt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(ut,X)}catch(Ct){X(Ct)}finally{L.T=K}},le.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},le.use=function(N){return L.H.use(N)},le.useActionState=function(N,K,pt){return L.H.useActionState(N,K,pt)},le.useCallback=function(N,K){return L.H.useCallback(N,K)},le.useContext=function(N){return L.H.useContext(N)},le.useDebugValue=function(){},le.useDeferredValue=function(N,K){return L.H.useDeferredValue(N,K)},le.useEffect=function(N,K,pt){var yt=L.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,K)},le.useId=function(){return L.H.useId()},le.useImperativeHandle=function(N,K,pt){return L.H.useImperativeHandle(N,K,pt)},le.useInsertionEffect=function(N,K){return L.H.useInsertionEffect(N,K)},le.useLayoutEffect=function(N,K){return L.H.useLayoutEffect(N,K)},le.useMemo=function(N,K){return L.H.useMemo(N,K)},le.useOptimistic=function(N,K){return L.H.useOptimistic(N,K)},le.useReducer=function(N,K,pt){return L.H.useReducer(N,K,pt)},le.useRef=function(N){return L.H.useRef(N)},le.useState=function(N){return L.H.useState(N)},le.useSyncExternalStore=function(N,K,pt){return L.H.useSyncExternalStore(N,K,pt)},le.useTransition=function(){return L.H.useTransition()},le.version="19.1.1",le}var Bv;function Um(){return Bv||(Bv=1,Nd.exports=$E()),Nd.exports}var tu=Um(),Pd={exports:{}},Bl={},zd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function tT(){return Fv||(Fv=1,(function(o){function t(B,k){var X=B.length;B.push(k);t:for(;0<X;){var ut=X-1>>>1,N=B[ut];if(0<r(N,k))B[ut]=k,B[X]=N,X=ut;else break t}}function e(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var k=B[0],X=B.pop();if(X!==k){B[0]=X;t:for(var ut=0,N=B.length,K=N>>>1;ut<K;){var pt=2*(ut+1)-1,yt=B[pt],St=pt+1,Ct=B[St];if(0>r(yt,X))St<N&&0>r(Ct,yt)?(B[ut]=Ct,B[St]=X,ut=St):(B[ut]=yt,B[pt]=X,ut=pt);else if(St<N&&0>r(Ct,X))B[ut]=Ct,B[St]=X,ut=St;else break t}}return k}function r(B,k){var X=B.sortIndex-k.sortIndex;return X!==0?X:B.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],h=[],m=1,g=null,v=3,x=!1,E=!1,M=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var k=e(h);k!==null;){if(k.callback===null)a(h);else if(k.startTime<=B)a(h),k.sortIndex=k.expirationTime,t(p,k);else break;k=e(h)}}function L(B){if(M=!1,A(B),!E)if(e(p)!==null)E=!0,P||(P=!0,j());else{var k=e(h);k!==null&&rt(L,k.startTime-B)}}var P=!1,z=-1,F=5,b=-1;function O(){return S?!0:!(o.unstable_now()-b<F)}function V(){if(S=!1,P){var B=o.unstable_now();b=B;var k=!0;try{t:{E=!1,M&&(M=!1,D(z),z=-1),x=!0;var X=v;try{e:{for(A(B),g=e(p);g!==null&&!(g.expirationTime>B&&O());){var ut=g.callback;if(typeof ut=="function"){g.callback=null,v=g.priorityLevel;var N=ut(g.expirationTime<=B);if(B=o.unstable_now(),typeof N=="function"){g.callback=N,A(B),k=!0;break e}g===e(p)&&a(p),A(B)}else a(p);g=e(p)}if(g!==null)k=!0;else{var K=e(h);K!==null&&rt(L,K.startTime-B),k=!1}}break t}finally{g=null,v=X,x=!1}k=void 0}}finally{k?j():P=!1}}}var j;if(typeof U=="function")j=function(){U(V)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ft=et.port2;et.port1.onmessage=V,j=function(){ft.postMessage(null)}}else j=function(){y(V,0)};function rt(B,k){z=y(function(){B(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var X=v;v=k;try{return B()}finally{v=X}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,k){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=v;v=B;try{return k()}finally{v=X}},o.unstable_scheduleCallback=function(B,k,X){var ut=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ut+X:ut):X=ut,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=X+N,B={id:m++,callback:k,priorityLevel:B,startTime:X,expirationTime:N,sortIndex:-1},X>ut?(B.sortIndex=X,t(h,B),e(p)===null&&B===e(h)&&(M?(D(z),z=-1):M=!0,rt(L,X-ut))):(B.sortIndex=N,t(p,B),E||x||(E=!0,P||(P=!0,j()))),B},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(B){var k=v;return function(){var X=v;v=k;try{return B.apply(this,arguments)}finally{v=X}}}})(Id)),Id}var Hv;function eT(){return Hv||(Hv=1,zd.exports=tT()),zd.exports}var Bd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function nT(){if(Gv)return Fn;Gv=1;var o=Um();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var a={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,h,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:h,implementation:m}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,m)},Fn.flushSync=function(p){var h=c.T,m=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=h,a.p=m,a.d.f()}},Fn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):m==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Fn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Fn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin);a.d.L(p,m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Fn.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,h){return p(h)},Fn.useFormState=function(p,h,m){return c.H.useFormState(p,h,m)},Fn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Fn.version="19.1.1",Fn}var Vv;function iT(){if(Vv)return Bd.exports;Vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bd.exports=nT(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function aT(){if(kv)return Bl;kv=1;var o=eT(),t=Um(),e=iT();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function c(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function p(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,u=i;;){var d=s.return;if(d===null)break;var _=d.alternate;if(_===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===s)return f(d),n;if(_===u)return f(d),i;_=_.sibling}throw Error(a(188))}if(s.return!==u.return)s=d,u=_;else{for(var T=!1,w=d.child;w;){if(w===s){T=!0,s=d,u=_;break}if(w===u){T=!0,u=d,s=_;break}w=w.sibling}if(!T){for(w=_.child;w;){if(w===s){T=!0,s=_,u=d;break}if(w===u){T=!0,u=_,s=d;break}w=w.sibling}if(!T)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function h(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=h(n),i!==null)return i;n=n.sibling}return null}var m=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var et=Symbol.for("react.client.reference");function ft(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===et?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case b:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case U:return(n.displayName||"Context")+".Provider";case D:return(n._context.displayName||"Context")+".Consumer";case A:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return i=n.displayName||null,i!==null?i:ft(n.type)||"Memo";case F:i=n._payload,n=n._init;try{return ft(n(i))}catch{}}return null}var rt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ut=[],N=-1;function K(n){return{current:n}}function pt(n){0>N||(n.current=ut[N],ut[N]=null,N--)}function yt(n,i){N++,ut[N]=n.current,n.current=i}var St=K(null),Ct=K(null),tt=K(null),vt=K(null);function At(n,i){switch(yt(tt,i),yt(Ct,n),yt(St,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?uv(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=uv(i),n=cv(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}pt(St),yt(St,n)}function Kt(){pt(St),pt(Ct),pt(tt)}function Wt(n){n.memoizedState!==null&&yt(vt,n);var i=St.current,s=cv(i,n.type);i!==s&&(yt(Ct,n),yt(St,s))}function pe(n){Ct.current===n&&(pt(St),pt(Ct)),vt.current===n&&(pt(vt),Ll._currentValue=X)}var cn=Object.prototype.hasOwnProperty,G=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,re=o.unstable_shouldYield,ne=o.unstable_requestPaint,Pt=o.unstable_now,Ve=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,je=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,I=o.unstable_IdlePriority,R=o.log,nt=o.unstable_setDisableYieldValue,ht=null,_t=null;function ct(n){if(typeof R=="function"&&nt(n),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ht,n)}catch{}}var zt=Math.clz32?Math.clz32:qt,Rt=Math.log,kt=Math.LN2;function qt(n){return n>>>=0,n===0?32:31-(Rt(n)/kt|0)|0}var Mt=256,Lt=4194304;function jt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Vt(n,i,s){var u=n.pendingLanes;if(u===0)return 0;var d=0,_=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var w=u&134217727;return w!==0?(u=w&~_,u!==0?d=jt(u):(T&=w,T!==0?d=jt(T):s||(s=w&~n,s!==0&&(d=jt(s))))):(w=u&~_,w!==0?d=jt(w):T!==0?d=jt(T):s||(s=u&~n,s!==0&&(d=jt(s)))),d===0?0:i!==0&&i!==d&&(i&_)===0&&(_=d&-d,s=i&-i,_>=s||_===32&&(s&4194048)!==0)?i:d}function Dt(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function oe(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var n=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),n}function bt(){var n=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),n}function wt(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function It(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Et(n,i,s,u,d,_){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var w=n.entanglements,H=n.expirationTimes,$=n.hiddenUpdates;for(s=T&~s;0<s;){var dt=31-zt(s),gt=1<<dt;w[dt]=0,H[dt]=-1;var at=$[dt];if(at!==null)for($[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}s&=~gt}u!==0&&xt(n,u,0),_!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=_&~(T&~i))}function xt(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-zt(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|s&4194090}function Ht(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var u=31-zt(s),d=1<<u;d&i|n[u]&i&&(n[u]|=i),s&=~d}}function ae(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ce(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function be(){var n=k.p;return n!==0?n:(n=window.event,n===void 0?32:Cv(n.type))}function Gi(n,i){var s=k.p;try{return k.p=n,i()}finally{k.p=s}}var gn=Math.random().toString(36).slice(2),vn="__reactFiber$"+gn,tn="__reactProps$"+gn,$i="__reactContainer$"+gn,Ms="__reactEvents$"+gn,xu="__reactListeners$"+gn,Es="__reactHandles$"+gn,Xo="__reactResources$"+gn,ta="__reactMarker$"+gn;function Ts(n){delete n[vn],delete n[tn],delete n[Ms],delete n[xu],delete n[Es]}function ma(n){var i=n[vn];if(i)return i;for(var s=n.parentNode;s;){if(i=s[$i]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=pv(n);n!==null;){if(s=n[vn])return s;n=pv(n)}return i}n=s,s=n.parentNode}return null}function qa(n){if(n=n[vn]||n[$i]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Nr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function Ya(n){var i=n[Xo];return i||(i=n[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(n){n[ta]=!0}var yu=new Set,Su={};function C(n,i){Y(n,i),Y(n+"Capture",i)}function Y(n,i){for(Su[n]=i,n=0;n<i.length;n++)yu.add(i[n])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Q={};function Tt(n){return cn.call(Q,n)?!0:cn.call(lt,n)?!1:ot.test(n)?Q[n]=!0:(lt[n]=!0,!1)}function Ut(n,i,s){if(Tt(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function Bt(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Ot(n,i,s,u){if(u===null)n.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+u)}}var Jt,te;function Xt(n){if(Jt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Jt=i&&i[1]||"",te=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+n+te}var fe=!1;function Ae(n,i){if(!n||fe)return"";fe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var at=st}Reflect.construct(n,[],gt)}else{try{gt.call()}catch(st){at=st}n.call(gt.prototype)}}else{try{throw Error()}catch(st){at=st}(gt=n())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],w=_[1];if(T&&w){var H=T.split(`
`),$=w.split(`
`);for(d=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;d<$.length&&!$[d].includes("DetermineComponentFrameRoot");)d++;if(u===H.length||d===$.length)for(u=H.length-1,d=$.length-1;1<=u&&0<=d&&H[u]!==$[d];)d--;for(;1<=u&&0<=d;u--,d--)if(H[u]!==$[d]){if(u!==1||d!==1)do if(u--,d--,0>d||H[u]!==$[d]){var dt=`
`+H[u].replace(" at new "," at ");return n.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",n.displayName)),dt}while(1<=u&&0<=d);break}}}finally{fe=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Xt(s):""}function We(n){switch(n.tag){case 26:case 27:case 5:return Xt(n.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Ae(n.type,!1);case 11:return Ae(n.type.render,!1);case 1:return Ae(n.type,!0);case 31:return Xt("Activity");default:return""}}function Oe(n){try{var i="";do i+=We(n),n=n.return;while(n);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function he(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(n){var i=Qt(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,_=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ge(n){n._valueTracker||(n._valueTracker=Xe(n))}function zn(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return n&&(u=Qt(n)?n.checked?"true":"false":n.value),n=u,n!==s?(i.setValue(n),!0):!1}function Vi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Xn=/[\n"\\]/g;function En(n){return n.replace(Xn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Be(n,i,s,u,d,_,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),i!=null?T==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+he(i)):n.value!==""+he(i)&&(n.value=""+he(i)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),i!=null?In(n,T,he(i)):s!=null?In(n,T,he(s)):u!=null&&n.removeAttribute("value"),d==null&&_!=null&&(n.defaultChecked=!!_),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+he(w):n.removeAttribute("name")}function Wn(n,i,s,u,d,_,T,w){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),i!=null||s!=null){if(!(_!=="submit"&&_!=="reset"||i!=null))return;s=s!=null?""+he(s):"",i=i!=null?""+he(i):s,w||i===n.value||(n.value=i),n.defaultValue=i}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=w?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function In(n,i,s){i==="number"&&Vi(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function en(n,i,s,u){if(n=n.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<n.length;s++)d=i.hasOwnProperty("$"+n[s].value),n[s].selected!==d&&(n[s].selected=d),d&&u&&(n[s].defaultSelected=!0)}else{for(s=""+he(s),i=null,d=0;d<n.length;d++){if(n[d].value===s){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Dn(n,i,s){if(i!=null&&(i=""+he(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+he(s):""}function bs(n,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(rt(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=he(i),n.defaultValue=s,u=n.textContent,u===s&&u!==""&&u!==null&&(n.value=u)}function Qn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var jS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function u_(n,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":u?n.setProperty(i,s):typeof s!="number"||s===0||jS.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function c_(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in i)u=i[d],i.hasOwnProperty(d)&&s[d]!==u&&u_(n,d,u)}else for(var _ in i)i.hasOwnProperty(_)&&u_(n,_,i[_])}function Lf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(n){return KS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Of=null;function Nf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var As=null,Rs=null;function f_(n){var i=qa(n);if(i&&(n=i.stateNode)){var s=n[tn]||null;t:switch(n=i.stateNode,i.type){case"input":if(Be(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+En(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==n&&u.form===n.form){var d=u[tn]||null;if(!d)throw Error(a(90));Be(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===n.form&&zn(u)}break t;case"textarea":Dn(n,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&en(n,!!s.multiple,i,!1)}}}var Pf=!1;function h_(n,i,s){if(Pf)return n(i,s);Pf=!0;try{var u=n(i);return u}finally{if(Pf=!1,(As!==null||Rs!==null)&&(oc(),As&&(i=As,n=Rs,Rs=As=null,f_(i),n)))for(i=0;i<n.length;i++)f_(n[i])}}function Wo(n,i){var s=n.stateNode;if(s===null)return null;var u=s[tn]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=!1;if(_a)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){zf=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{zf=!1}var ja=null,If=null,Eu=null;function d_(){if(Eu)return Eu;var n,i=If,s=i.length,u,d="value"in ja?ja.value:ja.textContent,_=d.length;for(n=0;n<s&&i[n]===d[n];n++);var T=s-n;for(u=1;u<=T&&i[s-u]===d[_-u];u++);return Eu=d.slice(n,1<u?1-u:void 0)}function Tu(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bu(){return!0}function p_(){return!1}function Jn(n){function i(s,u,d,_,T){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(s=n[w],this[w]=s?s(_):_[w]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?bu:p_,this.isPropagationStopped=p_,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bu)},persist:function(){},isPersistent:bu}),i}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Jn(Pr),Yo=m({},Pr,{view:0,detail:0}),QS=Jn(Yo),Bf,Ff,jo,Ru=m({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jo&&(jo&&n.type==="mousemove"?(Bf=n.screenX-jo.screenX,Ff=n.screenY-jo.screenY):Ff=Bf=0,jo=n),Bf)},movementY:function(n){return"movementY"in n?n.movementY:Ff}}),m_=Jn(Ru),JS=m({},Ru,{dataTransfer:0}),$S=Jn(JS),tM=m({},Yo,{relatedTarget:0}),Hf=Jn(tM),eM=m({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),nM=Jn(eM),iM=m({},Pr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),aM=Jn(iM),rM=m({},Pr,{data:0}),__=Jn(rM),sM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uM(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=lM[n])?!!i[n]:!1}function Gf(){return uM}var cM=m({},Yo,{key:function(n){if(n.key){var i=sM[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Tu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?oM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gf,charCode:function(n){return n.type==="keypress"?Tu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fM=Jn(cM),hM=m({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g_=Jn(hM),dM=m({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gf}),pM=Jn(dM),mM=m({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_M=Jn(mM),gM=m({},Ru,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vM=Jn(gM),xM=m({},Pr,{newState:0,oldState:0}),yM=Jn(xM),SM=[9,13,27,32],Vf=_a&&"CompositionEvent"in window,Zo=null;_a&&"documentMode"in document&&(Zo=document.documentMode);var MM=_a&&"TextEvent"in window&&!Zo,v_=_a&&(!Vf||Zo&&8<Zo&&11>=Zo),x_=" ",y_=!1;function S_(n,i){switch(n){case"keyup":return SM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function EM(n,i){switch(n){case"compositionend":return M_(i);case"keypress":return i.which!==32?null:(y_=!0,x_);case"textInput":return n=i.data,n===x_&&y_?null:n;default:return null}}function TM(n,i){if(ws)return n==="compositionend"||!Vf&&S_(n,i)?(n=d_(),Eu=If=ja=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v_&&i.locale!=="ko"?null:i.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function E_(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!bM[n.type]:i==="textarea"}function T_(n,i,s,u){As?Rs?Rs.push(u):Rs=[u]:As=u,i=dc(i,"onChange"),0<i.length&&(s=new Au("onChange","change",null,s,u),n.push({event:s,listeners:i}))}var Ko=null,Qo=null;function AM(n){av(n,0)}function wu(n){var i=Nr(n);if(zn(i))return n}function b_(n,i){if(n==="change")return i}var A_=!1;if(_a){var kf;if(_a){var Xf="oninput"in document;if(!Xf){var R_=document.createElement("div");R_.setAttribute("oninput","return;"),Xf=typeof R_.oninput=="function"}kf=Xf}else kf=!1;A_=kf&&(!document.documentMode||9<document.documentMode)}function w_(){Ko&&(Ko.detachEvent("onpropertychange",C_),Qo=Ko=null)}function C_(n){if(n.propertyName==="value"&&wu(Qo)){var i=[];T_(i,Qo,n,Nf(n)),h_(AM,i)}}function RM(n,i,s){n==="focusin"?(w_(),Ko=i,Qo=s,Ko.attachEvent("onpropertychange",C_)):n==="focusout"&&w_()}function wM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wu(Qo)}function CM(n,i){if(n==="click")return wu(i)}function DM(n,i){if(n==="input"||n==="change")return wu(i)}function UM(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:UM;function Jo(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!cn.call(i,d)||!ci(n[d],i[d]))return!1}return!0}function D_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function U_(n,i){var s=D_(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=i&&u>=i)return{node:s,offset:i-n};n=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=D_(s)}}function L_(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?L_(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function O_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Vi(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Vi(n.document)}return i}function Wf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var LM=_a&&"documentMode"in document&&11>=document.documentMode,Cs=null,qf=null,$o=null,Yf=!1;function N_(n,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yf||Cs==null||Cs!==Vi(u)||(u=Cs,"selectionStart"in u&&Wf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),$o&&Jo($o,u)||($o=u,u=dc(qf,"onSelect"),0<u.length&&(i=new Au("onSelect","select",null,i,s),n.push({event:i,listeners:u}),i.target=Cs)))}function zr(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var Ds={animationend:zr("Animation","AnimationEnd"),animationiteration:zr("Animation","AnimationIteration"),animationstart:zr("Animation","AnimationStart"),transitionrun:zr("Transition","TransitionRun"),transitionstart:zr("Transition","TransitionStart"),transitioncancel:zr("Transition","TransitionCancel"),transitionend:zr("Transition","TransitionEnd")},jf={},P_={};_a&&(P_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ir(n){if(jf[n])return jf[n];if(!Ds[n])return n;var i=Ds[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in P_)return jf[n]=i[s];return n}var z_=Ir("animationend"),I_=Ir("animationiteration"),B_=Ir("animationstart"),OM=Ir("transitionrun"),NM=Ir("transitionstart"),PM=Ir("transitioncancel"),F_=Ir("transitionend"),H_=new Map,Zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zf.push("scrollEnd");function ki(n,i){H_.set(n,i),C(i,[n])}var G_=new WeakMap;function Ri(n,i){if(typeof n=="object"&&n!==null){var s=G_.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Oe(i)},G_.set(n,i),i)}return{value:n,source:i,stack:Oe(i)}}var wi=[],Us=0,Kf=0;function Cu(){for(var n=Us,i=Kf=Us=0;i<n;){var s=wi[i];wi[i++]=null;var u=wi[i];wi[i++]=null;var d=wi[i];wi[i++]=null;var _=wi[i];if(wi[i++]=null,u!==null&&d!==null){var T=u.pending;T===null?d.next=d:(d.next=T.next,T.next=d),u.pending=d}_!==0&&V_(s,d,_)}}function Du(n,i,s,u){wi[Us++]=n,wi[Us++]=i,wi[Us++]=s,wi[Us++]=u,Kf|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Qf(n,i,s,u){return Du(n,i,s,u),Uu(n)}function Ls(n,i){return Du(n,null,null,i),Uu(n)}function V_(n,i,s){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s);for(var d=!1,_=n.return;_!==null;)_.childLanes|=s,u=_.alternate,u!==null&&(u.childLanes|=s),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(d=!0)),n=_,_=_.return;return n.tag===3?(_=n.stateNode,d&&i!==null&&(d=31-zt(s),n=_.hiddenUpdates,u=n[d],u===null?n[d]=[i]:u.push(i),i.lane=s|536870912),_):null}function Uu(n){if(50<Tl)throw Tl=0,id=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Os={};function zM(n,i,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,s,u){return new zM(n,i,s,u)}function Jf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ga(n,i){var s=n.alternate;return s===null?(s=fi(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function k_(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Lu(n,i,s,u,d,_){var T=0;if(u=n,typeof n=="function")Jf(n)&&(T=1);else if(typeof n=="string")T=BE(n,s,St.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case b:return n=fi(31,s,i,d),n.elementType=b,n.lanes=_,n;case E:return Br(s.children,d,_,i);case M:T=8,d|=24;break;case S:return n=fi(12,s,i,d|2),n.elementType=S,n.lanes=_,n;case L:return n=fi(13,s,i,d),n.elementType=L,n.lanes=_,n;case P:return n=fi(19,s,i,d),n.elementType=P,n.lanes=_,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case U:T=10;break t;case D:T=9;break t;case A:T=11;break t;case z:T=14;break t;case F:T=16,u=null;break t}T=29,s=Error(a(130,n===null?"null":typeof n,"")),u=null}return i=fi(T,s,i,d),i.elementType=n,i.type=u,i.lanes=_,i}function Br(n,i,s,u){return n=fi(7,n,u,i),n.lanes=s,n}function $f(n,i,s){return n=fi(6,n,null,i),n.lanes=s,n}function th(n,i,s){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Ns=[],Ps=0,Ou=null,Nu=0,Ci=[],Di=0,Fr=null,va=1,xa="";function Hr(n,i){Ns[Ps++]=Nu,Ns[Ps++]=Ou,Ou=n,Nu=i}function X_(n,i,s){Ci[Di++]=va,Ci[Di++]=xa,Ci[Di++]=Fr,Fr=n;var u=va;n=xa;var d=32-zt(u)-1;u&=~(1<<d),s+=1;var _=32-zt(i)+d;if(30<_){var T=d-d%5;_=(u&(1<<T)-1).toString(32),u>>=T,d-=T,va=1<<32-zt(i)+d|s<<d|u,xa=_+n}else va=1<<_|s<<d|u,xa=n}function eh(n){n.return!==null&&(Hr(n,1),X_(n,1,0))}function nh(n){for(;n===Ou;)Ou=Ns[--Ps],Ns[Ps]=null,Nu=Ns[--Ps],Ns[Ps]=null;for(;n===Fr;)Fr=Ci[--Di],Ci[Di]=null,xa=Ci[--Di],Ci[Di]=null,va=Ci[--Di],Ci[Di]=null}var qn=null,nn=null,we=!1,Gr=null,ea=!1,ih=Error(a(519));function Vr(n){var i=Error(a(418,""));throw nl(Ri(i,n)),ih}function W_(n){var i=n.stateNode,s=n.type,u=n.memoizedProps;switch(i[vn]=n,i[tn]=u,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<Al.length;s++)xe(Al[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),Wn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ge(i);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),bs(i,u.value,u.defaultValue,u.children),ge(i)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||lv(i.textContent,s)?(u.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),u.onScroll!=null&&xe("scroll",i),u.onScrollEnd!=null&&xe("scrollend",i),u.onClick!=null&&(i.onclick=pc),i=!0):i=!1,i||Vr(n)}function q_(n){for(qn=n.return;qn;)switch(qn.tag){case 5:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:qn=qn.return}}function tl(n){if(n!==qn)return!1;if(!we)return q_(n),we=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||xd(n.type,n.memoizedProps)),s=!s),s&&nn&&Vr(n),q_(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){nn=Wi(n.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;n=n.nextSibling}nn=null}}else i===27?(i=nn,cr(n.type)?(n=Ed,Ed=null,nn=n):nn=i):nn=qn?Wi(n.stateNode.nextSibling):null;return!0}function el(){nn=qn=null,we=!1}function Y_(){var n=Gr;return n!==null&&(ei===null?ei=n:ei.push.apply(ei,n),Gr=null),n}function nl(n){Gr===null?Gr=[n]:Gr.push(n)}var ah=K(null),kr=null,ya=null;function Za(n,i,s){yt(ah,i._currentValue),i._currentValue=s}function Sa(n){n._currentValue=ah.current,pt(ah)}function rh(n,i,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===s)break;n=n.return}}function sh(n,i,s,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var _=d.dependencies;if(_!==null){var T=d.child;_=_.firstContext;t:for(;_!==null;){var w=_;_=d;for(var H=0;H<i.length;H++)if(w.context===i[H]){_.lanes|=s,w=_.alternate,w!==null&&(w.lanes|=s),rh(_.return,s,n),u||(T=null);break t}_=w.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(a(341));T.lanes|=s,_=T.alternate,_!==null&&(_.lanes|=s),rh(T,s,n),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===n){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function il(n,i,s,u){n=null;for(var d=i,_=!1;d!==null;){if(!_){if((d.flags&524288)!==0)_=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var w=d.type;ci(d.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(d===vt.current){if(T=d.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Ll):n=[Ll])}d=d.return}n!==null&&sh(i,n,s,u),i.flags|=262144}function Pu(n){for(n=n.firstContext;n!==null;){if(!ci(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Xr(n){kr=n,ya=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bn(n){return j_(kr,n)}function zu(n,i){return kr===null&&Xr(n),j_(n,i)}function j_(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ya===null){if(n===null)throw Error(a(308));ya=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ya=ya.next=i;return s}var IM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},BM=o.unstable_scheduleCallback,FM=o.unstable_NormalPriority,xn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oh(){return{controller:new IM,data:new Map,refCount:0}}function al(n){n.refCount--,n.refCount===0&&BM(FM,function(){n.controller.abort()})}var rl=null,lh=0,zs=0,Is=null;function HM(n,i){if(rl===null){var s=rl=[];lh=0,zs=cd(),Is={status:"pending",value:void 0,then:function(u){s.push(u)}}}return lh++,i.then(Z_,Z_),i}function Z_(){if(--lh===0&&rl!==null){Is!==null&&(Is.status="fulfilled");var n=rl;rl=null,zs=0,Is=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function GM(n,i){var s=[],u={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(u.status="rejected",u.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),u}var K_=B.S;B.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&HM(n,i),K_!==null&&K_(n,i)};var Wr=K(null);function uh(){var n=Wr.current;return n!==null?n:ke.pooledCache}function Iu(n,i){i===null?yt(Wr,Wr.current):yt(Wr,i.pool)}function Q_(){var n=uh();return n===null?null:{parent:xn._currentValue,pool:n}}var sl=Error(a(460)),J_=Error(a(474)),Bu=Error(a(542)),ch={then:function(){}};function $_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Fu(){}function tg(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(Fu,Fu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ng(n),n;default:if(typeof i.status=="string")i.then(Fu,Fu);else{if(n=ke,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=u}},function(u){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,ng(n),n}throw ol=i,sl}}var ol=null;function eg(){if(ol===null)throw Error(a(459));var n=ol;return ol=null,n}function ng(n){if(n===sl||n===Bu)throw Error(a(483))}var Ka=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Qa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ja(n,i,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(De&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,i=Uu(n),V_(n,null,s),i}return Du(n,u,i,s),Uu(n)}function ll(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Ht(n,s)}}function dh(n,i){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,_=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};_===null?d=_=T:_=_.next=T,s=s.next}while(s!==null);_===null?d=_=i:_=_.next=i}else d=_=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var ph=!1;function ul(){if(ph){var n=Is;if(n!==null)throw n}}function cl(n,i,s,u){ph=!1;var d=n.updateQueue;Ka=!1;var _=d.firstBaseUpdate,T=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var H=w,$=H.next;H.next=null,T===null?_=$:T.next=$,T=H;var dt=n.alternate;dt!==null&&(dt=dt.updateQueue,w=dt.lastBaseUpdate,w!==T&&(w===null?dt.firstBaseUpdate=$:w.next=$,dt.lastBaseUpdate=H))}if(_!==null){var gt=d.baseState;T=0,dt=$=H=null,w=_;do{var at=w.lane&-536870913,st=at!==w.lane;if(st?(Ee&at)===at:(u&at)===at){at!==0&&at===zs&&(ph=!0),dt!==null&&(dt=dt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ie=n,$t=w;at=i;var ze=s;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){gt=ie.call(ze,gt,at);break t}gt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,at=typeof ie=="function"?ie.call(ze,gt,at):ie,at==null)break t;gt=m({},gt,at);break t;case 2:Ka=!0}}at=w.callback,at!==null&&(n.flags|=64,st&&(n.flags|=8192),st=d.callbacks,st===null?d.callbacks=[at]:st.push(at))}else st={lane:at,tag:w.tag,payload:w.payload,callback:w.callback,next:null},dt===null?($=dt=st,H=gt):dt=dt.next=st,T|=at;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;st=w,w=st.next,st.next=null,d.lastBaseUpdate=st,d.shared.pending=null}}while(!0);dt===null&&(H=gt),d.baseState=H,d.firstBaseUpdate=$,d.lastBaseUpdate=dt,_===null&&(d.shared.lanes=0),sr|=T,n.lanes=T,n.memoizedState=gt}}function ig(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function ag(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)ig(s[n],i)}var Bs=K(null),Hu=K(0);function rg(n,i){n=wa,yt(Hu,n),yt(Bs,i),wa=n|i.baseLanes}function mh(){yt(Hu,wa),yt(Bs,Bs.current)}function _h(){wa=Hu.current,pt(Bs),pt(Hu)}var $a=0,me=null,Ne=null,hn=null,Gu=!1,Fs=!1,qr=!1,Vu=0,fl=0,Hs=null,VM=0;function on(){throw Error(a(321))}function gh(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ci(n[s],i[s]))return!1;return!0}function vh(n,i,s,u,d,_){return $a=_,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=n===null||n.memoizedState===null?Vg:kg,qr=!1,_=s(u,d),qr=!1,Fs&&(_=og(i,s,u,d)),sg(n),_}function sg(n){B.H=ju;var i=Ne!==null&&Ne.next!==null;if($a=0,hn=Ne=me=null,Gu=!1,fl=0,Hs=null,i)throw Error(a(300));n===null||Tn||(n=n.dependencies,n!==null&&Pu(n)&&(Tn=!0))}function og(n,i,s,u){me=n;var d=0;do{if(Fs&&(Hs=null),fl=0,Fs=!1,25<=d)throw Error(a(301));if(d+=1,hn=Ne=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}B.H=ZM,_=i(s,u)}while(Fs);return _}function kM(){var n=B.H,i=n.useState()[0];return i=typeof i.then=="function"?hl(i):i,n=n.useState()[0],(Ne!==null?Ne.memoizedState:null)!==n&&(me.flags|=1024),i}function xh(){var n=Vu!==0;return Vu=0,n}function yh(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Sh(n){if(Gu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Gu=!1}$a=0,hn=Ne=me=null,Fs=!1,fl=Vu=0,Hs=null}function $n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?me.memoizedState=hn=n:hn=hn.next=n,hn}function dn(){if(Ne===null){var n=me.alternate;n=n!==null?n.memoizedState:null}else n=Ne.next;var i=hn===null?me.memoizedState:hn.next;if(i!==null)hn=i,Ne=n;else{if(n===null)throw me.alternate===null?Error(a(467)):Error(a(310));Ne=n,n={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},hn===null?me.memoizedState=hn=n:hn=hn.next=n}return hn}function Mh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(n){var i=fl;return fl+=1,Hs===null&&(Hs=[]),n=tg(Hs,n,i),i=me,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Vg:kg),n}function ku(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hl(n);if(n.$$typeof===U)return Bn(n)}throw Error(a(438,String(n)))}function Eh(n){var i=null,s=me.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=me.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Mh(),me.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),u=0;u<n;u++)s[u]=O;return i.index++,s}function Ma(n,i){return typeof i=="function"?i(n):i}function Xu(n){var i=dn();return Th(i,Ne,n)}function Th(n,i,s){var u=n.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var d=n.baseQueue,_=u.pending;if(_!==null){if(d!==null){var T=d.next;d.next=_.next,_.next=T}i.baseQueue=d=_,u.pending=null}if(_=n.baseState,d===null)n.memoizedState=_;else{i=d.next;var w=T=null,H=null,$=i,dt=!1;do{var gt=$.lane&-536870913;if(gt!==$.lane?(Ee&gt)===gt:($a&gt)===gt){var at=$.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),gt===zs&&(dt=!0);else if(($a&at)===at){$=$.next,at===zs&&(dt=!0);continue}else gt={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(w=H=gt,T=_):H=H.next=gt,me.lanes|=at,sr|=at;gt=$.action,qr&&s(_,gt),_=$.hasEagerState?$.eagerState:s(_,gt)}else at={lane:gt,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(w=H=at,T=_):H=H.next=at,me.lanes|=gt,sr|=gt;$=$.next}while($!==null&&$!==i);if(H===null?T=_:H.next=w,!ci(_,n.memoizedState)&&(Tn=!0,dt&&(s=Is,s!==null)))throw s;n.memoizedState=_,n.baseState=T,n.baseQueue=H,u.lastRenderedState=_}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function bh(n){var i=dn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var u=s.dispatch,d=s.pending,_=i.memoizedState;if(d!==null){s.pending=null;var T=d=d.next;do _=n(_,T.action),T=T.next;while(T!==d);ci(_,i.memoizedState)||(Tn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),s.lastRenderedState=_}return[_,u]}function lg(n,i,s){var u=me,d=dn(),_=we;if(_){if(s===void 0)throw Error(a(407));s=s()}else s=i();var T=!ci((Ne||d).memoizedState,s);T&&(d.memoizedState=s,Tn=!0),d=d.queue;var w=fg.bind(null,u,d,n);if(dl(2048,8,w,[n]),d.getSnapshot!==i||T||hn!==null&&hn.memoizedState.tag&1){if(u.flags|=2048,Gs(9,Wu(),cg.bind(null,u,d,s,i),null),ke===null)throw Error(a(349));_||($a&124)!==0||ug(u,i,s)}return s}function ug(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=me.updateQueue,i===null?(i=Mh(),me.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function cg(n,i,s,u){i.value=s,i.getSnapshot=u,hg(i)&&dg(n)}function fg(n,i,s){return s(function(){hg(i)&&dg(n)})}function hg(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ci(n,s)}catch{return!0}}function dg(n){var i=Ls(n,2);i!==null&&_i(i,n,2)}function Ah(n){var i=$n();if(typeof n=="function"){var s=n;if(n=s(),qr){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},i}function pg(n,i,s,u){return n.baseState=s,Th(n,Ne,typeof u=="function"?u:Ma)}function XM(n,i,s,u,d){if(Yu(n))throw Error(a(485));if(n=i.action,n!==null){var _={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};B.T!==null?s(!0):_.isTransition=!1,u(_),s=i.pending,s===null?(_.next=i.pending=_,mg(i,_)):(_.next=s.next,i.pending=s.next=_)}}function mg(n,i){var s=i.action,u=i.payload,d=n.state;if(i.isTransition){var _=B.T,T={};B.T=T;try{var w=s(d,u),H=B.S;H!==null&&H(T,w),_g(n,i,w)}catch($){Rh(n,i,$)}finally{B.T=_}}else try{_=s(d,u),_g(n,i,_)}catch($){Rh(n,i,$)}}function _g(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){gg(n,i,u)},function(u){return Rh(n,i,u)}):gg(n,i,s)}function gg(n,i,s){i.status="fulfilled",i.value=s,vg(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,mg(n,s)))}function Rh(n,i,s){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,vg(i),i=i.next;while(i!==u)}n.action=null}function vg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function xg(n,i){return i}function yg(n,i){if(we){var s=ke.formState;if(s!==null){t:{var u=me;if(we){if(nn){e:{for(var d=nn,_=ea;d.nodeType!==8;){if(!_){d=null;break e}if(d=Wi(d.nextSibling),d===null){d=null;break e}}_=d.data,d=_==="F!"||_==="F"?d:null}if(d){nn=Wi(d.nextSibling),u=d.data==="F!";break t}}Vr(u)}u=!1}u&&(i=s[0])}}return s=$n(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},s.queue=u,s=Fg.bind(null,me,u),u.dispatch=s,u=Ah(!1),_=Lh.bind(null,me,!1,u.queue),u=$n(),d={state:i,dispatch:null,action:n,pending:null},u.queue=d,s=XM.bind(null,me,d,_,s),d.dispatch=s,u.memoizedState=n,[i,s,!1]}function Sg(n){var i=dn();return Mg(i,Ne,n)}function Mg(n,i,s){if(i=Th(n,i,xg)[0],n=Xu(Ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=hl(i)}catch(T){throw T===sl?Bu:T}else u=i;i=dn();var d=i.queue,_=d.dispatch;return s!==i.memoizedState&&(me.flags|=2048,Gs(9,Wu(),WM.bind(null,d,s),null)),[u,_,n]}function WM(n,i){n.action=i}function Eg(n){var i=dn(),s=Ne;if(s!==null)return Mg(i,s,n);dn(),i=i.memoizedState,s=dn();var u=s.queue.dispatch;return s.memoizedState=n,[i,u,!1]}function Gs(n,i,s,u){return n={tag:n,create:s,deps:u,inst:i,next:null},i=me.updateQueue,i===null&&(i=Mh(),me.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,i.lastEffect=n),n}function Wu(){return{destroy:void 0,resource:void 0}}function Tg(){return dn().memoizedState}function qu(n,i,s,u){var d=$n();u=u===void 0?null:u,me.flags|=n,d.memoizedState=Gs(1|i,Wu(),s,u)}function dl(n,i,s,u){var d=dn();u=u===void 0?null:u;var _=d.memoizedState.inst;Ne!==null&&u!==null&&gh(u,Ne.memoizedState.deps)?d.memoizedState=Gs(i,_,s,u):(me.flags|=n,d.memoizedState=Gs(1|i,_,s,u))}function bg(n,i){qu(8390656,8,n,i)}function Ag(n,i){dl(2048,8,n,i)}function Rg(n,i){return dl(4,2,n,i)}function wg(n,i){return dl(4,4,n,i)}function Cg(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dg(n,i,s){s=s!=null?s.concat([n]):null,dl(4,4,Cg.bind(null,i,n),s)}function wh(){}function Ug(n,i){var s=dn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&gh(i,u[1])?u[0]:(s.memoizedState=[n,i],n)}function Lg(n,i){var s=dn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&gh(i,u[1]))return u[0];if(u=n(),qr){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[u,i],u}function Ch(n,i,s){return s===void 0||($a&1073741824)!==0?n.memoizedState=i:(n.memoizedState=s,n=P0(),me.lanes|=n,sr|=n,s)}function Og(n,i,s,u){return ci(s,i)?s:Bs.current!==null?(n=Ch(n,s,u),ci(n,i)||(Tn=!0),n):($a&42)===0?(Tn=!0,n.memoizedState=s):(n=P0(),me.lanes|=n,sr|=n,i)}function Ng(n,i,s,u,d){var _=k.p;k.p=_!==0&&8>_?_:8;var T=B.T,w={};B.T=w,Lh(n,!1,i,s);try{var H=d(),$=B.S;if($!==null&&$(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var dt=GM(H,u);pl(n,i,dt,mi(n))}else pl(n,i,u,mi(n))}catch(gt){pl(n,i,{then:function(){},status:"rejected",reason:gt},mi())}finally{k.p=_,B.T=T}}function qM(){}function Dh(n,i,s,u){if(n.tag!==5)throw Error(a(476));var d=Pg(n).queue;Ng(n,d,i,X,s===null?qM:function(){return zg(n),s(u)})}function Pg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:X},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function zg(n){var i=Pg(n).next.queue;pl(n,i,{},mi())}function Uh(){return Bn(Ll)}function Ig(){return dn().memoizedState}function Bg(){return dn().memoizedState}function YM(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=mi();n=Qa(s);var u=Ja(i,n,s);u!==null&&(_i(u,i,s),ll(u,i,s)),i={cache:oh()},n.payload=i;return}i=i.return}}function jM(n,i,s){var u=mi();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Yu(n)?Hg(i,s):(s=Qf(n,i,s,u),s!==null&&(_i(s,n,u),Gg(s,i,u)))}function Fg(n,i,s){var u=mi();pl(n,i,s,u)}function pl(n,i,s,u){var d={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Yu(n))Hg(i,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,w=_(T,s);if(d.hasEagerState=!0,d.eagerState=w,ci(w,T))return Du(n,i,d,0),ke===null&&Cu(),!1}catch{}finally{}if(s=Qf(n,i,d,u),s!==null)return _i(s,n,u),Gg(s,i,u),!0}return!1}function Lh(n,i,s,u){if(u={lane:2,revertLane:cd(),action:u,hasEagerState:!1,eagerState:null,next:null},Yu(n)){if(i)throw Error(a(479))}else i=Qf(n,s,u,2),i!==null&&_i(i,n,2)}function Yu(n){var i=n.alternate;return n===me||i!==null&&i===me}function Hg(n,i){Fs=Gu=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function Gg(n,i,s){if((s&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Ht(n,s)}}var ju={readContext:Bn,use:ku,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},Vg={readContext:Bn,use:ku,useCallback:function(n,i){return $n().memoizedState=[n,i===void 0?null:i],n},useContext:Bn,useEffect:bg,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,qu(4194308,4,Cg.bind(null,i,n),s)},useLayoutEffect:function(n,i){return qu(4194308,4,n,i)},useInsertionEffect:function(n,i){qu(4,2,n,i)},useMemo:function(n,i){var s=$n();i=i===void 0?null:i;var u=n();if(qr){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[u,i],u},useReducer:function(n,i,s){var u=$n();if(s!==void 0){var d=s(i);if(qr){ct(!0);try{s(i)}finally{ct(!1)}}}else d=i;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=jM.bind(null,me,n),[u.memoizedState,n]},useRef:function(n){var i=$n();return n={current:n},i.memoizedState=n},useState:function(n){n=Ah(n);var i=n.queue,s=Fg.bind(null,me,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:wh,useDeferredValue:function(n,i){var s=$n();return Ch(s,n,i)},useTransition:function(){var n=Ah(!1);return n=Ng.bind(null,me,n.queue,!0,!1),$n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var u=me,d=$n();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ke===null)throw Error(a(349));(Ee&124)!==0||ug(u,i,s)}d.memoizedState=s;var _={value:s,getSnapshot:i};return d.queue=_,bg(fg.bind(null,u,_,n),[n]),u.flags|=2048,Gs(9,Wu(),cg.bind(null,u,_,s,i),null),s},useId:function(){var n=$n(),i=ke.identifierPrefix;if(we){var s=xa,u=va;s=(u&~(1<<32-zt(u)-1)).toString(32)+s,i="«"+i+"R"+s,s=Vu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=VM++,i="«"+i+"r"+s.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Uh,useFormState:yg,useActionState:yg,useOptimistic:function(n){var i=$n();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Lh.bind(null,me,!0,s),s.dispatch=i,[n,i]},useMemoCache:Eh,useCacheRefresh:function(){return $n().memoizedState=YM.bind(null,me)}},kg={readContext:Bn,use:ku,useCallback:Ug,useContext:Bn,useEffect:Ag,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:wg,useMemo:Lg,useReducer:Xu,useRef:Tg,useState:function(){return Xu(Ma)},useDebugValue:wh,useDeferredValue:function(n,i){var s=dn();return Og(s,Ne.memoizedState,n,i)},useTransition:function(){var n=Xu(Ma)[0],i=dn().memoizedState;return[typeof n=="boolean"?n:hl(n),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:Uh,useFormState:Sg,useActionState:Sg,useOptimistic:function(n,i){var s=dn();return pg(s,Ne,n,i)},useMemoCache:Eh,useCacheRefresh:Bg},ZM={readContext:Bn,use:ku,useCallback:Ug,useContext:Bn,useEffect:Ag,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:wg,useMemo:Lg,useReducer:bh,useRef:Tg,useState:function(){return bh(Ma)},useDebugValue:wh,useDeferredValue:function(n,i){var s=dn();return Ne===null?Ch(s,n,i):Og(s,Ne.memoizedState,n,i)},useTransition:function(){var n=bh(Ma)[0],i=dn().memoizedState;return[typeof n=="boolean"?n:hl(n),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:Uh,useFormState:Eg,useActionState:Eg,useOptimistic:function(n,i){var s=dn();return Ne!==null?pg(s,Ne,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Eh,useCacheRefresh:Bg},Vs=null,ml=0;function Zu(n){var i=ml;return ml+=1,Vs===null&&(Vs=[]),tg(Vs,n,i)}function _l(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Ku(n,i){throw i.$$typeof===g?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Xg(n){var i=n._init;return i(n._payload)}function Wg(n){function i(Z,W){if(n){var J=Z.deletions;J===null?(Z.deletions=[W],Z.flags|=16):J.push(W)}}function s(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function u(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function d(Z,W){return Z=ga(Z,W),Z.index=0,Z.sibling=null,Z}function _(Z,W,J){return Z.index=J,n?(J=Z.alternate,J!==null?(J=J.index,J<W?(Z.flags|=67108866,W):J):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function T(Z){return n&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,W,J,mt){return W===null||W.tag!==6?(W=$f(J,Z.mode,mt),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function H(Z,W,J,mt){var Ft=J.type;return Ft===E?dt(Z,W,J.props.children,mt,J.key):W!==null&&(W.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===F&&Xg(Ft)===W.type)?(W=d(W,J.props),_l(W,J),W.return=Z,W):(W=Lu(J.type,J.key,J.props,null,Z.mode,mt),_l(W,J),W.return=Z,W)}function $(Z,W,J,mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=th(J,Z.mode,mt),W.return=Z,W):(W=d(W,J.children||[]),W.return=Z,W)}function dt(Z,W,J,mt,Ft){return W===null||W.tag!==7?(W=Br(J,Z.mode,mt,Ft),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function gt(Z,W,J){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=$f(""+W,Z.mode,J),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return J=Lu(W.type,W.key,W.props,null,Z.mode,J),_l(J,W),J.return=Z,J;case x:return W=th(W,Z.mode,J),W.return=Z,W;case F:var mt=W._init;return W=mt(W._payload),gt(Z,W,J)}if(rt(W)||j(W))return W=Br(W,Z.mode,J,null),W.return=Z,W;if(typeof W.then=="function")return gt(Z,Zu(W),J);if(W.$$typeof===U)return gt(Z,zu(Z,W),J);Ku(Z,W)}return null}function at(Z,W,J,mt){var Ft=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ft!==null?null:w(Z,W,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Ft?H(Z,W,J,mt):null;case x:return J.key===Ft?$(Z,W,J,mt):null;case F:return Ft=J._init,J=Ft(J._payload),at(Z,W,J,mt)}if(rt(J)||j(J))return Ft!==null?null:dt(Z,W,J,mt,null);if(typeof J.then=="function")return at(Z,W,Zu(J),mt);if(J.$$typeof===U)return at(Z,W,zu(Z,J),mt);Ku(Z,J)}return null}function st(Z,W,J,mt,Ft){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(J)||null,w(W,Z,""+mt,Ft);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case v:return Z=Z.get(mt.key===null?J:mt.key)||null,H(W,Z,mt,Ft);case x:return Z=Z.get(mt.key===null?J:mt.key)||null,$(W,Z,mt,Ft);case F:var _e=mt._init;return mt=_e(mt._payload),st(Z,W,J,mt,Ft)}if(rt(mt)||j(mt))return Z=Z.get(J)||null,dt(W,Z,mt,Ft,null);if(typeof mt.then=="function")return st(Z,W,J,Zu(mt),Ft);if(mt.$$typeof===U)return st(Z,W,J,zu(W,mt),Ft);Ku(W,mt)}return null}function ie(Z,W,J,mt){for(var Ft=null,_e=null,Yt=W,ee=W=0,An=null;Yt!==null&&ee<J.length;ee++){Yt.index>ee?(An=Yt,Yt=null):An=Yt.sibling;var Re=at(Z,Yt,J[ee],mt);if(Re===null){Yt===null&&(Yt=An);break}n&&Yt&&Re.alternate===null&&i(Z,Yt),W=_(Re,W,ee),_e===null?Ft=Re:_e.sibling=Re,_e=Re,Yt=An}if(ee===J.length)return s(Z,Yt),we&&Hr(Z,ee),Ft;if(Yt===null){for(;ee<J.length;ee++)Yt=gt(Z,J[ee],mt),Yt!==null&&(W=_(Yt,W,ee),_e===null?Ft=Yt:_e.sibling=Yt,_e=Yt);return we&&Hr(Z,ee),Ft}for(Yt=u(Yt);ee<J.length;ee++)An=st(Yt,Z,ee,J[ee],mt),An!==null&&(n&&An.alternate!==null&&Yt.delete(An.key===null?ee:An.key),W=_(An,W,ee),_e===null?Ft=An:_e.sibling=An,_e=An);return n&&Yt.forEach(function(mr){return i(Z,mr)}),we&&Hr(Z,ee),Ft}function $t(Z,W,J,mt){if(J==null)throw Error(a(151));for(var Ft=null,_e=null,Yt=W,ee=W=0,An=null,Re=J.next();Yt!==null&&!Re.done;ee++,Re=J.next()){Yt.index>ee?(An=Yt,Yt=null):An=Yt.sibling;var mr=at(Z,Yt,Re.value,mt);if(mr===null){Yt===null&&(Yt=An);break}n&&Yt&&mr.alternate===null&&i(Z,Yt),W=_(mr,W,ee),_e===null?Ft=mr:_e.sibling=mr,_e=mr,Yt=An}if(Re.done)return s(Z,Yt),we&&Hr(Z,ee),Ft;if(Yt===null){for(;!Re.done;ee++,Re=J.next())Re=gt(Z,Re.value,mt),Re!==null&&(W=_(Re,W,ee),_e===null?Ft=Re:_e.sibling=Re,_e=Re);return we&&Hr(Z,ee),Ft}for(Yt=u(Yt);!Re.done;ee++,Re=J.next())Re=st(Yt,Z,ee,Re.value,mt),Re!==null&&(n&&Re.alternate!==null&&Yt.delete(Re.key===null?ee:Re.key),W=_(Re,W,ee),_e===null?Ft=Re:_e.sibling=Re,_e=Re);return n&&Yt.forEach(function(KE){return i(Z,KE)}),we&&Hr(Z,ee),Ft}function ze(Z,W,J,mt){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Ft=J.key;W!==null;){if(W.key===Ft){if(Ft=J.type,Ft===E){if(W.tag===7){s(Z,W.sibling),mt=d(W,J.props.children),mt.return=Z,Z=mt;break t}}else if(W.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===F&&Xg(Ft)===W.type){s(Z,W.sibling),mt=d(W,J.props),_l(mt,J),mt.return=Z,Z=mt;break t}s(Z,W);break}else i(Z,W);W=W.sibling}J.type===E?(mt=Br(J.props.children,Z.mode,mt,J.key),mt.return=Z,Z=mt):(mt=Lu(J.type,J.key,J.props,null,Z.mode,mt),_l(mt,J),mt.return=Z,Z=mt)}return T(Z);case x:t:{for(Ft=J.key;W!==null;){if(W.key===Ft)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){s(Z,W.sibling),mt=d(W,J.children||[]),mt.return=Z,Z=mt;break t}else{s(Z,W);break}else i(Z,W);W=W.sibling}mt=th(J,Z.mode,mt),mt.return=Z,Z=mt}return T(Z);case F:return Ft=J._init,J=Ft(J._payload),ze(Z,W,J,mt)}if(rt(J))return ie(Z,W,J,mt);if(j(J)){if(Ft=j(J),typeof Ft!="function")throw Error(a(150));return J=Ft.call(J),$t(Z,W,J,mt)}if(typeof J.then=="function")return ze(Z,W,Zu(J),mt);if(J.$$typeof===U)return ze(Z,W,zu(Z,J),mt);Ku(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,W!==null&&W.tag===6?(s(Z,W.sibling),mt=d(W,J),mt.return=Z,Z=mt):(s(Z,W),mt=$f(J,Z.mode,mt),mt.return=Z,Z=mt),T(Z)):s(Z,W)}return function(Z,W,J,mt){try{ml=0;var Ft=ze(Z,W,J,mt);return Vs=null,Ft}catch(Yt){if(Yt===sl||Yt===Bu)throw Yt;var _e=fi(29,Yt,null,Z.mode);return _e.lanes=mt,_e.return=Z,_e}finally{}}}var ks=Wg(!0),qg=Wg(!1),Ui=K(null),na=null;function tr(n){var i=n.alternate;yt(yn,yn.current&1),yt(Ui,n),na===null&&(i===null||Bs.current!==null||i.memoizedState!==null)&&(na=n)}function Yg(n){if(n.tag===22){if(yt(yn,yn.current),yt(Ui,n),na===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(na=n)}}else er()}function er(){yt(yn,yn.current),yt(Ui,Ui.current)}function Ea(n){pt(Ui),na===n&&(na=null),pt(yn)}var yn=K(0);function Qu(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Md(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Oh(n,i,s,u){i=n.memoizedState,s=s(u,i),s=s==null?i:m({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Nh={enqueueSetState:function(n,i,s){n=n._reactInternals;var u=mi(),d=Qa(u);d.payload=i,s!=null&&(d.callback=s),i=Ja(n,d,u),i!==null&&(_i(i,n,u),ll(i,n,u))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var u=mi(),d=Qa(u);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=Ja(n,d,u),i!==null&&(_i(i,n,u),ll(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=mi(),u=Qa(s);u.tag=2,i!=null&&(u.callback=i),i=Ja(n,u,s),i!==null&&(_i(i,n,s),ll(i,n,s))}};function jg(n,i,s,u,d,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!Jo(s,u)||!Jo(d,_):!0}function Zg(n,i,s,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==n&&Nh.enqueueReplaceState(i,i.state,null)}function Yr(n,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(n=n.defaultProps){s===i&&(s=m({},s));for(var d in n)s[d]===void 0&&(s[d]=n[d])}return s}var Ju=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Kg(n){Ju(n)}function Qg(n){console.error(n)}function Jg(n){Ju(n)}function $u(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function $g(n,i,s){try{var u=n.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ph(n,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){$u(n,i)},s}function t0(n){return n=Qa(n),n.tag=3,n}function e0(n,i,s,u){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var _=u.value;n.payload=function(){return d(_)},n.callback=function(){$g(i,s,u)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){$g(i,s,u),typeof d!="function"&&(or===null?or=new Set([this]):or.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function KM(n,i,s,u,d){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&il(i,s,d,!0),s=Ui.current,s!==null){switch(s.tag){case 13:return na===null?rd():s.alternate===null&&an===0&&(an=3),s.flags&=-257,s.flags|=65536,s.lanes=d,u===ch?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),od(n,u,d)),!1;case 22:return s.flags|=65536,u===ch?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),od(n,u,d)),!1}throw Error(a(435,s.tag))}return od(n,u,d),rd(),!1}if(we)return i=Ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,u!==ih&&(n=Error(a(422),{cause:u}),nl(Ri(n,s)))):(u!==ih&&(i=Error(a(423),{cause:u}),nl(Ri(i,s))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Ri(u,s),d=Ph(n.stateNode,u,d),dh(n,d),an!==4&&(an=2)),!1;var _=Error(a(520),{cause:u});if(_=Ri(_,s),El===null?El=[_]:El.push(_),an!==4&&(an=2),i===null)return!0;u=Ri(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=d&-d,s.lanes|=n,n=Ph(s.stateNode,u,n),dh(s,n),!1;case 1:if(i=s.type,_=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(or===null||!or.has(_))))return s.flags|=65536,d&=-d,s.lanes|=d,d=t0(d),e0(d,n,s,u),dh(s,d),!1}s=s.return}while(s!==null);return!1}var n0=Error(a(461)),Tn=!1;function Un(n,i,s,u){i.child=n===null?qg(i,null,s,u):ks(i,n.child,s,u)}function i0(n,i,s,u,d){s=s.render;var _=i.ref;if("ref"in u){var T={};for(var w in u)w!=="ref"&&(T[w]=u[w])}else T=u;return Xr(i),u=vh(n,i,s,T,_,d),w=xh(),n!==null&&!Tn?(yh(n,i,d),Ta(n,i,d)):(we&&w&&eh(i),i.flags|=1,Un(n,i,u,d),i.child)}function a0(n,i,s,u,d){if(n===null){var _=s.type;return typeof _=="function"&&!Jf(_)&&_.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=_,r0(n,i,_,u,d)):(n=Lu(s.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,!kh(n,d)){var T=_.memoizedProps;if(s=s.compare,s=s!==null?s:Jo,s(T,u)&&n.ref===i.ref)return Ta(n,i,d)}return i.flags|=1,n=ga(_,u),n.ref=i.ref,n.return=i,i.child=n}function r0(n,i,s,u,d){if(n!==null){var _=n.memoizedProps;if(Jo(_,u)&&n.ref===i.ref)if(Tn=!1,i.pendingProps=u=_,kh(n,d))(n.flags&131072)!==0&&(Tn=!0);else return i.lanes=n.lanes,Ta(n,i,d)}return zh(n,i,s,u,d)}function s0(n,i,s){var u=i.pendingProps,d=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=_!==null?_.baseLanes|s:s,n!==null){for(d=i.child=n.child,_=0;d!==null;)_=_|d.lanes|d.childLanes,d=d.sibling;i.childLanes=_&~u}else i.childLanes=0,i.child=null;return o0(n,i,u,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Iu(i,_!==null?_.cachePool:null),_!==null?rg(i,_):mh(),Yg(i);else return i.lanes=i.childLanes=536870912,o0(n,i,_!==null?_.baseLanes|s:s,s)}else _!==null?(Iu(i,_.cachePool),rg(i,_),er(),i.memoizedState=null):(n!==null&&Iu(i,null),mh(),er());return Un(n,i,d,s),i.child}function o0(n,i,s,u){var d=uh();return d=d===null?null:{parent:xn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},n!==null&&Iu(i,null),mh(),Yg(i),n!==null&&il(n,i,u,!0),null}function tc(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function zh(n,i,s,u,d){return Xr(i),s=vh(n,i,s,u,void 0,d),u=xh(),n!==null&&!Tn?(yh(n,i,d),Ta(n,i,d)):(we&&u&&eh(i),i.flags|=1,Un(n,i,s,d),i.child)}function l0(n,i,s,u,d,_){return Xr(i),i.updateQueue=null,s=og(i,u,s,d),sg(n),u=xh(),n!==null&&!Tn?(yh(n,i,_),Ta(n,i,_)):(we&&u&&eh(i),i.flags|=1,Un(n,i,s,_),i.child)}function u0(n,i,s,u,d){if(Xr(i),i.stateNode===null){var _=Os,T=s.contextType;typeof T=="object"&&T!==null&&(_=Bn(T)),_=new s(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Nh,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},fh(i),T=s.contextType,_.context=typeof T=="object"&&T!==null?Bn(T):Os,_.state=i.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Oh(i,s,T,u),_.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&Nh.enqueueReplaceState(_,_.state,null),cl(i,u,_,d),ul(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){_=i.stateNode;var w=i.memoizedProps,H=Yr(s,w);_.props=H;var $=_.context,dt=s.contextType;T=Os,typeof dt=="object"&&dt!==null&&(T=Bn(dt));var gt=s.getDerivedStateFromProps;dt=typeof gt=="function"||typeof _.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,dt||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w||$!==T)&&Zg(i,_,u,T),Ka=!1;var at=i.memoizedState;_.state=at,cl(i,u,_,d),ul(),$=i.memoizedState,w||at!==$||Ka?(typeof gt=="function"&&(Oh(i,s,gt,u),$=i.memoizedState),(H=Ka||jg(i,s,H,u,at,$,T))?(dt||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=$),_.props=u,_.state=$,_.context=T,u=H):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,hh(n,i),T=i.memoizedProps,dt=Yr(s,T),_.props=dt,gt=i.pendingProps,at=_.context,$=s.contextType,H=Os,typeof $=="object"&&$!==null&&(H=Bn($)),w=s.getDerivedStateFromProps,($=typeof w=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==gt||at!==H)&&Zg(i,_,u,H),Ka=!1,at=i.memoizedState,_.state=at,cl(i,u,_,d),ul();var st=i.memoizedState;T!==gt||at!==st||Ka||n!==null&&n.dependencies!==null&&Pu(n.dependencies)?(typeof w=="function"&&(Oh(i,s,w,u),st=i.memoizedState),(dt=Ka||jg(i,s,dt,u,at,st,H)||n!==null&&n.dependencies!==null&&Pu(n.dependencies))?($||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,st,H),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,st,H)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),_.props=u,_.state=st,_.context=H,u=dt):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),u=!1)}return _=u,tc(n,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,n!==null&&u?(i.child=ks(i,n.child,null,d),i.child=ks(i,null,s,d)):Un(n,i,s,d),i.memoizedState=_.state,n=i.child):n=Ta(n,i,d),n}function c0(n,i,s,u){return el(),i.flags|=256,Un(n,i,s,u),i.child}var Ih={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bh(n){return{baseLanes:n,cachePool:Q_()}}function Fh(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=Li),n}function f0(n,i,s){var u=i.pendingProps,d=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),T&&(d=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,n===null){if(we){if(d?tr(i):er(),we){var w=nn,H;if(H=w){t:{for(H=w,w=ea;H.nodeType!==8;){if(!w){w=null;break t}if(H=Wi(H.nextSibling),H===null){w=null;break t}}w=H}w!==null?(i.memoizedState={dehydrated:w,treeContext:Fr!==null?{id:va,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},H=fi(18,null,null,0),H.stateNode=w,H.return=i,i.child=H,qn=i,nn=null,H=!0):H=!1}H||Vr(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Md(w)?i.lanes=32:i.lanes=536870912,null;Ea(i)}return w=u.children,u=u.fallback,d?(er(),d=i.mode,w=ec({mode:"hidden",children:w},d),u=Br(u,d,s,null),w.return=i,u.return=i,w.sibling=u,i.child=w,d=i.child,d.memoizedState=Bh(s),d.childLanes=Fh(n,T,s),i.memoizedState=Ih,u):(tr(i),Hh(i,w))}if(H=n.memoizedState,H!==null&&(w=H.dehydrated,w!==null)){if(_)i.flags&256?(tr(i),i.flags&=-257,i=Gh(n,i,s)):i.memoizedState!==null?(er(),i.child=n.child,i.flags|=128,i=null):(er(),d=u.fallback,w=i.mode,u=ec({mode:"visible",children:u.children},w),d=Br(d,w,s,null),d.flags|=2,u.return=i,d.return=i,u.sibling=d,i.child=u,ks(i,n.child,null,s),u=i.child,u.memoizedState=Bh(s),u.childLanes=Fh(n,T,s),i.memoizedState=Ih,i=d);else if(tr(i),Md(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var $=T.dgst;T=$,u=Error(a(419)),u.stack="",u.digest=T,nl({value:u,source:null,stack:null}),i=Gh(n,i,s)}else if(Tn||il(n,i,s,!1),T=(s&n.childLanes)!==0,Tn||T){if(T=ke,T!==null&&(u=s&-s,u=(u&42)!==0?1:ae(u),u=(u&(T.suspendedLanes|s))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,Ls(n,u),_i(T,n,u),n0;w.data==="$?"||rd(),i=Gh(n,i,s)}else w.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=H.treeContext,nn=Wi(w.nextSibling),qn=i,we=!0,Gr=null,ea=!1,n!==null&&(Ci[Di++]=va,Ci[Di++]=xa,Ci[Di++]=Fr,va=n.id,xa=n.overflow,Fr=i),i=Hh(i,u.children),i.flags|=4096);return i}return d?(er(),d=u.fallback,w=i.mode,H=n.child,$=H.sibling,u=ga(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,$!==null?d=ga($,d):(d=Br(d,w,s,null),d.flags|=2),d.return=i,u.return=i,u.sibling=d,i.child=u,u=d,d=i.child,w=n.child.memoizedState,w===null?w=Bh(s):(H=w.cachePool,H!==null?($=xn._currentValue,H=H.parent!==$?{parent:$,pool:$}:H):H=Q_(),w={baseLanes:w.baseLanes|s,cachePool:H}),d.memoizedState=w,d.childLanes=Fh(n,T,s),i.memoizedState=Ih,u):(tr(i),s=n.child,n=s.sibling,s=ga(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,n!==null&&(T=i.deletions,T===null?(i.deletions=[n],i.flags|=16):T.push(n)),i.child=s,i.memoizedState=null,s)}function Hh(n,i){return i=ec({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function ec(n,i){return n=fi(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Gh(n,i,s){return ks(i,n.child,null,s),n=Hh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function h0(n,i,s){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),rh(n.return,i,s)}function Vh(n,i,s,u,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=s,_.tailMode=d)}function d0(n,i,s){var u=i.pendingProps,d=u.revealOrder,_=u.tail;if(Un(n,i,u.children,s),u=yn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&h0(n,s,i);else if(n.tag===19)h0(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(yt(yn,u),d){case"forwards":for(s=i.child,d=null;s!==null;)n=s.alternate,n!==null&&Qu(n)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Vh(i,!1,d,s,_);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Qu(n)===null){i.child=d;break}n=d.sibling,d.sibling=s,s=d,d=n}Vh(i,!0,s,null,_);break;case"together":Vh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ta(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),sr|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(il(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=ga(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=ga(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function kh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Pu(n)))}function QM(n,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),Za(i,xn,n.memoizedState.cache),el();break;case 27:case 5:Wt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(tr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?f0(n,i,s):(tr(i),n=Ta(n,i,s),n!==null?n.sibling:null);tr(i);break;case 19:var d=(n.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(il(n,i,s,!1),u=(s&i.childLanes)!==0),d){if(u)return d0(n,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),yt(yn,yn.current),u)break;return null;case 22:case 23:return i.lanes=0,s0(n,i,s);case 24:Za(i,xn,n.memoizedState.cache)}return Ta(n,i,s)}function p0(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)Tn=!0;else{if(!kh(n,s)&&(i.flags&128)===0)return Tn=!1,QM(n,i,s);Tn=(n.flags&131072)!==0}else Tn=!1,we&&(i.flags&1048576)!==0&&X_(i,Nu,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var u=i.elementType,d=u._init;if(u=d(u._payload),i.type=u,typeof u=="function")Jf(u)?(n=Yr(u,n),i.tag=1,i=u0(null,i,u,n,s)):(i.tag=0,i=zh(null,i,u,n,s));else{if(u!=null){if(d=u.$$typeof,d===A){i.tag=11,i=i0(null,i,u,n,s);break t}else if(d===z){i.tag=14,i=a0(null,i,u,n,s);break t}}throw i=ft(u)||u,Error(a(306,i,""))}}return i;case 0:return zh(n,i,i.type,i.pendingProps,s);case 1:return u=i.type,d=Yr(u,i.pendingProps),u0(n,i,u,d,s);case 3:t:{if(At(i,i.stateNode.containerInfo),n===null)throw Error(a(387));u=i.pendingProps;var _=i.memoizedState;d=_.element,hh(n,i),cl(i,u,null,s);var T=i.memoizedState;if(u=T.cache,Za(i,xn,u),u!==_.cache&&sh(i,[xn],s,!0),ul(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=c0(n,i,u,s);break t}else if(u!==d){d=Ri(Error(a(424)),i),nl(d),i=c0(n,i,u,s);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(nn=Wi(n.firstChild),qn=i,we=!0,Gr=null,ea=!0,s=qg(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(el(),u===d){i=Ta(n,i,s);break t}Un(n,i,u,s)}i=i.child}return i;case 26:return tc(n,i),n===null?(s=vv(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,n=i.pendingProps,u=mc(tt.current).createElement(s),u[vn]=i,u[tn]=n,On(u,s,n),fn(u),i.stateNode=u):i.memoizedState=vv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Wt(i),n===null&&we&&(u=i.stateNode=mv(i.type,i.pendingProps,tt.current),qn=i,ea=!0,d=nn,cr(i.type)?(Ed=d,nn=Wi(u.firstChild)):nn=d),Un(n,i,i.pendingProps.children,s),tc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&we&&((d=u=nn)&&(u=bE(u,i.type,i.pendingProps,ea),u!==null?(i.stateNode=u,qn=i,nn=Wi(u.firstChild),ea=!1,d=!0):d=!1),d||Vr(i)),Wt(i),d=i.type,_=i.pendingProps,T=n!==null?n.memoizedProps:null,u=_.children,xd(d,_)?u=null:T!==null&&xd(d,T)&&(i.flags|=32),i.memoizedState!==null&&(d=vh(n,i,kM,null,null,s),Ll._currentValue=d),tc(n,i),Un(n,i,u,s),i.child;case 6:return n===null&&we&&((n=s=nn)&&(s=AE(s,i.pendingProps,ea),s!==null?(i.stateNode=s,qn=i,nn=null,n=!0):n=!1),n||Vr(i)),null;case 13:return f0(n,i,s);case 4:return At(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ks(i,null,u,s):Un(n,i,u,s),i.child;case 11:return i0(n,i,i.type,i.pendingProps,s);case 7:return Un(n,i,i.pendingProps,s),i.child;case 8:return Un(n,i,i.pendingProps.children,s),i.child;case 12:return Un(n,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,Za(i,i.type,u.value),Un(n,i,u.children,s),i.child;case 9:return d=i.type._context,u=i.pendingProps.children,Xr(i),d=Bn(d),u=u(d),i.flags|=1,Un(n,i,u,s),i.child;case 14:return a0(n,i,i.type,i.pendingProps,s);case 15:return r0(n,i,i.type,i.pendingProps,s);case 19:return d0(n,i,s);case 31:return u=i.pendingProps,s=i.mode,u={mode:u.mode,children:u.children},n===null?(s=ec(u,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ga(n.child,u),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return s0(n,i,s);case 24:return Xr(i),u=Bn(xn),n===null?(d=uh(),d===null&&(d=ke,_=oh(),d.pooledCache=_,_.refCount++,_!==null&&(d.pooledCacheLanes|=s),d=_),i.memoizedState={parent:u,cache:d},fh(i),Za(i,xn,d)):((n.lanes&s)!==0&&(hh(n,i),cl(i,null,null,s),ul()),d=n.memoizedState,_=i.memoizedState,d.parent!==u?(d={parent:u,cache:u},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),Za(i,xn,u)):(u=_.cache,Za(i,xn,u),u!==d.cache&&sh(i,[xn],s,!0))),Un(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ba(n){n.flags|=4}function m0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Ev(i)){if(i=Ui.current,i!==null&&((Ee&4194048)===Ee?na!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||i!==na))throw ol=ch,J_;n.flags|=8192}}function nc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?bt():536870912,n.lanes|=i,Ys|=i)}function gl(n,i){if(!we)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ke(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(i)for(var d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=s,i}function JM(n,i,s){var u=i.pendingProps;switch(nh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return s=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Sa(xn),Kt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(tl(i)?ba(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Y_())),Ke(i),null;case 26:return s=i.memoizedState,n===null?(ba(i),s!==null?(Ke(i),m0(i,s)):(Ke(i),i.flags&=-16777217)):s?s!==n.memoizedState?(ba(i),Ke(i),m0(i,s)):(Ke(i),i.flags&=-16777217):(n.memoizedProps!==u&&ba(i),Ke(i),i.flags&=-16777217),null;case 27:pe(i),s=tt.current;var d=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==u&&ba(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}n=St.current,tl(i)?W_(i):(n=mv(d,u,s),i.stateNode=n,ba(i))}return Ke(i),null;case 5:if(pe(i),s=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&ba(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}if(n=St.current,tl(i))W_(i);else{switch(d=mc(tt.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(s,{is:u.is}):d.createElement(s)}}n[vn]=i,n[tn]=u;t:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break t;for(;d.sibling===null;){if(d.return===null||d.return===i)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=n;t:switch(On(n,s,u),s){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&ba(i)}}return Ke(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==u&&ba(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(n=tt.current,tl(i)){if(n=i.stateNode,s=i.memoizedProps,u=null,d=qn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[vn]=i,n=!!(n.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||lv(n.nodeValue,s)),n||Vr(i)}else n=mc(n).createTextNode(u),n[vn]=i,i.stateNode=n}return Ke(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=tl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[vn]=i}else el(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),d=!1}else d=Y_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Ea(i),i):(Ea(i),null)}if(Ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=u!==null,n=n!==null&&n.memoizedState!==null,s){u=i.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==d&&(u.flags|=2048)}return s!==n&&s&&(i.child.flags|=8192),nc(i,i.updateQueue),Ke(i),null;case 4:return Kt(),n===null&&pd(i.stateNode.containerInfo),Ke(i),null;case 10:return Sa(i.type),Ke(i),null;case 19:if(pt(yn),d=i.memoizedState,d===null)return Ke(i),null;if(u=(i.flags&128)!==0,_=d.rendering,_===null)if(u)gl(d,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=Qu(n),_!==null){for(i.flags|=128,gl(d,!1),n=_.updateQueue,i.updateQueue=n,nc(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)k_(s,n),s=s.sibling;return yt(yn,yn.current&1|2),i.child}n=n.sibling}d.tail!==null&&Pt()>rc&&(i.flags|=128,u=!0,gl(d,!1),i.lanes=4194304)}else{if(!u)if(n=Qu(_),n!==null){if(i.flags|=128,u=!0,n=n.updateQueue,i.updateQueue=n,nc(i,n),gl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!_.alternate&&!we)return Ke(i),null}else 2*Pt()-d.renderingStartTime>rc&&s!==536870912&&(i.flags|=128,u=!0,gl(d,!1),i.lanes=4194304);d.isBackwards?(_.sibling=i.child,i.child=_):(n=d.last,n!==null?n.sibling=_:i.child=_,d.last=_)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Pt(),i.sibling=null,n=yn.current,yt(yn,u?n&1|2:n&1),i):(Ke(i),null);case 22:case 23:return Ea(i),_h(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),s=i.updateQueue,s!==null&&nc(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),n!==null&&pt(Wr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Sa(xn),Ke(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function $M(n,i){switch(nh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Sa(xn),Kt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return pe(i),null;case 13:if(Ea(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));el()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return pt(yn),null;case 4:return Kt(),null;case 10:return Sa(i.type),null;case 22:case 23:return Ea(i),_h(),n!==null&&pt(Wr),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Sa(xn),null;case 25:return null;default:return null}}function _0(n,i){switch(nh(i),i.tag){case 3:Sa(xn),Kt();break;case 26:case 27:case 5:pe(i);break;case 4:Kt();break;case 13:Ea(i);break;case 19:pt(yn);break;case 10:Sa(i.type);break;case 22:case 23:Ea(i),_h(),n!==null&&pt(Wr);break;case 24:Sa(xn)}}function vl(n,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&n)===n){u=void 0;var _=s.create,T=s.inst;u=_(),T.destroy=u}s=s.next}while(s!==d)}}catch(w){Fe(i,i.return,w)}}function nr(n,i,s){try{var u=i.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var _=d.next;u=_;do{if((u.tag&n)===n){var T=u.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,d=i;var H=s,$=w;try{$()}catch(dt){Fe(d,H,dt)}}}u=u.next}while(u!==_)}}catch(dt){Fe(i,i.return,dt)}}function g0(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{ag(i,s)}catch(u){Fe(n,n.return,u)}}}function v0(n,i,s){s.props=Yr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(u){Fe(n,i,u)}}function xl(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof s=="function"?n.refCleanup=s(u):s.current=u}}catch(d){Fe(n,i,d)}}function ia(n,i){var s=n.ref,u=n.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(d){Fe(n,i,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Fe(n,i,d)}else s.current=null}function x0(n){var i=n.type,s=n.memoizedProps,u=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(d){Fe(n,n.return,d)}}function Xh(n,i,s){try{var u=n.stateNode;yE(u,n.type,s,i),u[tn]=i}catch(d){Fe(n,n.return,d)}}function y0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&cr(n.type)||n.tag===4}function Wh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||y0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&cr(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qh(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pc));else if(u!==4&&(u===27&&cr(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(qh(n,i,s),n=n.sibling;n!==null;)qh(n,i,s),n=n.sibling}function ic(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(u!==4&&(u===27&&cr(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(ic(n,i,s),n=n.sibling;n!==null;)ic(n,i,s),n=n.sibling}function S0(n){var i=n.stateNode,s=n.memoizedProps;try{for(var u=n.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);On(i,u,s),i[vn]=n,i[tn]=s}catch(_){Fe(n,n.return,_)}}var Aa=!1,ln=!1,Yh=!1,M0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function tE(n,i){if(n=n.containerInfo,gd=Sc,n=O_(n),Wf(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,w=-1,H=-1,$=0,dt=0,gt=n,at=null;e:for(;;){for(var st;gt!==s||d!==0&&gt.nodeType!==3||(w=T+d),gt!==_||u!==0&&gt.nodeType!==3||(H=T+u),gt.nodeType===3&&(T+=gt.nodeValue.length),(st=gt.firstChild)!==null;)at=gt,gt=st;for(;;){if(gt===n)break e;if(at===s&&++$===d&&(w=T),at===_&&++dt===u&&(H=T),(st=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=st}s=w===-1||H===-1?null:{start:w,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(vd={focusedElem:n,selectionRange:s},Sc=!1,bn=i;bn!==null;)if(i=bn,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,bn=n;else for(;bn!==null;){switch(i=bn,_=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,s=i,d=_.memoizedProps,_=_.memoizedState,u=s.stateNode;try{var ie=Yr(s.type,d,s.elementType===s.type);n=u.getSnapshotBeforeUpdate(ie,_),u.__reactInternalSnapshotBeforeUpdate=n}catch($t){Fe(s,s.return,$t)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)Sd(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Sd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,bn=n;break}bn=i.return}}function E0(n,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:ir(n,s),u&4&&vl(5,s);break;case 1:if(ir(n,s),u&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(T){Fe(s,s.return,T)}else{var d=Yr(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(d,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Fe(s,s.return,T)}}u&64&&g0(s),u&512&&xl(s,s.return);break;case 3:if(ir(n,s),u&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ag(n,i)}catch(T){Fe(s,s.return,T)}}break;case 27:i===null&&u&4&&S0(s);case 26:case 5:ir(n,s),i===null&&u&4&&x0(s),u&512&&xl(s,s.return);break;case 12:ir(n,s);break;case 13:ir(n,s),u&4&&A0(n,s),u&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=uE.bind(null,s),RE(n,s))));break;case 22:if(u=s.memoizedState!==null||Aa,!u){i=i!==null&&i.memoizedState!==null||ln,d=Aa;var _=ln;Aa=u,(ln=i)&&!_?ar(n,s,(s.subtreeFlags&8772)!==0):ir(n,s),Aa=d,ln=_}break;case 30:break;default:ir(n,s)}}function T0(n){var i=n.alternate;i!==null&&(n.alternate=null,T0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ts(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var qe=null,ti=!1;function Ra(n,i,s){for(s=s.child;s!==null;)b0(n,i,s),s=s.sibling}function b0(n,i,s){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ht,s)}catch{}switch(s.tag){case 26:ln||ia(s,i),Ra(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ln||ia(s,i);var u=qe,d=ti;cr(s.type)&&(qe=s.stateNode,ti=!1),Ra(n,i,s),wl(s.stateNode),qe=u,ti=d;break;case 5:ln||ia(s,i);case 6:if(u=qe,d=ti,qe=null,Ra(n,i,s),qe=u,ti=d,qe!==null)if(ti)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(s.stateNode)}catch(_){Fe(s,i,_)}else try{qe.removeChild(s.stateNode)}catch(_){Fe(s,i,_)}break;case 18:qe!==null&&(ti?(n=qe,dv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),zl(n)):dv(qe,s.stateNode));break;case 4:u=qe,d=ti,qe=s.stateNode.containerInfo,ti=!0,Ra(n,i,s),qe=u,ti=d;break;case 0:case 11:case 14:case 15:ln||nr(2,s,i),ln||nr(4,s,i),Ra(n,i,s);break;case 1:ln||(ia(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&v0(s,i,u)),Ra(n,i,s);break;case 21:Ra(n,i,s);break;case 22:ln=(u=ln)||s.memoizedState!==null,Ra(n,i,s),ln=u;break;default:Ra(n,i,s)}}function A0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{zl(n)}catch(s){Fe(i,i.return,s)}}function eE(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new M0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new M0),i;default:throw Error(a(435,n.tag))}}function jh(n,i){var s=eE(n);i.forEach(function(u){var d=cE.bind(null,n,u);s.has(u)||(s.add(u),u.then(d,d))})}function hi(n,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u],_=n,T=i,w=T;t:for(;w!==null;){switch(w.tag){case 27:if(cr(w.type)){qe=w.stateNode,ti=!1;break t}break;case 5:qe=w.stateNode,ti=!1;break t;case 3:case 4:qe=w.stateNode.containerInfo,ti=!0;break t}w=w.return}if(qe===null)throw Error(a(160));b0(_,T,d),qe=null,ti=!1,_=d.alternate,_!==null&&(_.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)R0(i,n),i=i.sibling}var Xi=null;function R0(n,i){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:hi(i,n),di(n),u&4&&(nr(3,n,n.return),vl(3,n),nr(5,n,n.return));break;case 1:hi(i,n),di(n),u&512&&(ln||s===null||ia(s,s.return)),u&64&&Aa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var d=Xi;if(hi(i,n),di(n),u&512&&(ln||s===null||ia(s,s.return)),u&4){var _=s!==null?s.memoizedState:null;if(u=n.memoizedState,s===null)if(u===null)if(n.stateNode===null){t:{u=n.type,s=n.memoizedProps,d=d.ownerDocument||d;e:switch(u){case"title":_=d.getElementsByTagName("title")[0],(!_||_[ta]||_[vn]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=d.createElement(u),d.head.insertBefore(_,d.querySelector("head > title"))),On(_,u,s),_[vn]=n,fn(_),u=_;break t;case"link":var T=Sv("link","href",d).get(u+(s.href||""));if(T){for(var w=0;w<T.length;w++)if(_=T[w],_.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&_.getAttribute("rel")===(s.rel==null?null:s.rel)&&_.getAttribute("title")===(s.title==null?null:s.title)&&_.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(w,1);break e}}_=d.createElement(u),On(_,u,s),d.head.appendChild(_);break;case"meta":if(T=Sv("meta","content",d).get(u+(s.content||""))){for(w=0;w<T.length;w++)if(_=T[w],_.getAttribute("content")===(s.content==null?null:""+s.content)&&_.getAttribute("name")===(s.name==null?null:s.name)&&_.getAttribute("property")===(s.property==null?null:s.property)&&_.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&_.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(w,1);break e}}_=d.createElement(u),On(_,u,s),d.head.appendChild(_);break;default:throw Error(a(468,u))}_[vn]=n,fn(_),u=_}n.stateNode=u}else Mv(d,n.type,n.stateNode);else n.stateNode=yv(d,u,n.memoizedProps);else _!==u?(_===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):_.count--,u===null?Mv(d,n.type,n.stateNode):yv(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Xh(n,n.memoizedProps,s.memoizedProps)}break;case 27:hi(i,n),di(n),u&512&&(ln||s===null||ia(s,s.return)),s!==null&&u&4&&Xh(n,n.memoizedProps,s.memoizedProps);break;case 5:if(hi(i,n),di(n),u&512&&(ln||s===null||ia(s,s.return)),n.flags&32){d=n.stateNode;try{Qn(d,"")}catch(st){Fe(n,n.return,st)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,Xh(n,d,s!==null?s.memoizedProps:d)),u&1024&&(Yh=!0);break;case 6:if(hi(i,n),di(n),u&4){if(n.stateNode===null)throw Error(a(162));u=n.memoizedProps,s=n.stateNode;try{s.nodeValue=u}catch(st){Fe(n,n.return,st)}}break;case 3:if(vc=null,d=Xi,Xi=_c(i.containerInfo),hi(i,n),Xi=d,di(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{zl(i.containerInfo)}catch(st){Fe(n,n.return,st)}Yh&&(Yh=!1,w0(n));break;case 4:u=Xi,Xi=_c(n.stateNode.containerInfo),hi(i,n),di(n),Xi=u;break;case 12:hi(i,n),di(n);break;case 13:hi(i,n),di(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(td=Pt()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,jh(n,u)));break;case 22:d=n.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,$=Aa,dt=ln;if(Aa=$||d,ln=dt||H,hi(i,n),ln=dt,Aa=$,di(n),u&8192)t:for(i=n.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||H||Aa||ln||jr(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(_=H.stateNode,d)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=H.stateNode;var gt=H.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;w.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Fe(H,H.return,st)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=d?"":H.memoizedProps}catch(st){Fe(H,H.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=n.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,jh(n,s))));break;case 19:hi(i,n),di(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,jh(n,u)));break;case 30:break;case 21:break;default:hi(i,n),di(n)}}function di(n){var i=n.flags;if(i&2){try{for(var s,u=n.return;u!==null;){if(y0(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,_=Wh(n);ic(n,_,d);break;case 5:var T=s.stateNode;s.flags&32&&(Qn(T,""),s.flags&=-33);var w=Wh(n);ic(n,w,T);break;case 3:case 4:var H=s.stateNode.containerInfo,$=Wh(n);qh(n,$,H);break;default:throw Error(a(161))}}catch(dt){Fe(n,n.return,dt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function w0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;w0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ir(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)E0(n,i.alternate,i),i=i.sibling}function jr(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:nr(4,i,i.return),jr(i);break;case 1:ia(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&v0(i,i.return,s),jr(i);break;case 27:wl(i.stateNode);case 26:case 5:ia(i,i.return),jr(i);break;case 22:i.memoizedState===null&&jr(i);break;case 30:jr(i);break;default:jr(i)}n=n.sibling}}function ar(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,d=n,_=i,T=_.flags;switch(_.tag){case 0:case 11:case 15:ar(d,_,s),vl(4,_);break;case 1:if(ar(d,_,s),u=_,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch($){Fe(u,u.return,$)}if(u=_,d=u.updateQueue,d!==null){var w=u.stateNode;try{var H=d.shared.hiddenCallbacks;if(H!==null)for(d.shared.hiddenCallbacks=null,d=0;d<H.length;d++)ig(H[d],w)}catch($){Fe(u,u.return,$)}}s&&T&64&&g0(_),xl(_,_.return);break;case 27:S0(_);case 26:case 5:ar(d,_,s),s&&u===null&&T&4&&x0(_),xl(_,_.return);break;case 12:ar(d,_,s);break;case 13:ar(d,_,s),s&&T&4&&A0(d,_);break;case 22:_.memoizedState===null&&ar(d,_,s),xl(_,_.return);break;case 30:break;default:ar(d,_,s)}i=i.sibling}}function Zh(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&al(s))}function Kh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&al(n))}function aa(n,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)C0(n,i,s,u),i=i.sibling}function C0(n,i,s,u){var d=i.flags;switch(i.tag){case 0:case 11:case 15:aa(n,i,s,u),d&2048&&vl(9,i);break;case 1:aa(n,i,s,u);break;case 3:aa(n,i,s,u),d&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&al(n)));break;case 12:if(d&2048){aa(n,i,s,u),n=i.stateNode;try{var _=i.memoizedProps,T=_.id,w=_.onPostCommit;typeof w=="function"&&w(T,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Fe(i,i.return,H)}}else aa(n,i,s,u);break;case 13:aa(n,i,s,u);break;case 23:break;case 22:_=i.stateNode,T=i.alternate,i.memoizedState!==null?_._visibility&2?aa(n,i,s,u):yl(n,i):_._visibility&2?aa(n,i,s,u):(_._visibility|=2,Xs(n,i,s,u,(i.subtreeFlags&10256)!==0)),d&2048&&Zh(T,i);break;case 24:aa(n,i,s,u),d&2048&&Kh(i.alternate,i);break;default:aa(n,i,s,u)}}function Xs(n,i,s,u,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var _=n,T=i,w=s,H=u,$=T.flags;switch(T.tag){case 0:case 11:case 15:Xs(_,T,w,H,d),vl(8,T);break;case 23:break;case 22:var dt=T.stateNode;T.memoizedState!==null?dt._visibility&2?Xs(_,T,w,H,d):yl(_,T):(dt._visibility|=2,Xs(_,T,w,H,d)),d&&$&2048&&Zh(T.alternate,T);break;case 24:Xs(_,T,w,H,d),d&&$&2048&&Kh(T.alternate,T);break;default:Xs(_,T,w,H,d)}i=i.sibling}}function yl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,u=i,d=u.flags;switch(u.tag){case 22:yl(s,u),d&2048&&Zh(u.alternate,u);break;case 24:yl(s,u),d&2048&&Kh(u.alternate,u);break;default:yl(s,u)}i=i.sibling}}var Sl=8192;function Ws(n){if(n.subtreeFlags&Sl)for(n=n.child;n!==null;)D0(n),n=n.sibling}function D0(n){switch(n.tag){case 26:Ws(n),n.flags&Sl&&n.memoizedState!==null&&HE(Xi,n.memoizedState,n.memoizedProps);break;case 5:Ws(n);break;case 3:case 4:var i=Xi;Xi=_c(n.stateNode.containerInfo),Ws(n),Xi=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,Ws(n),Sl=i):Ws(n));break;default:Ws(n)}}function U0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ml(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];bn=u,O0(u,n)}U0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)L0(n),n=n.sibling}function L0(n){switch(n.tag){case 0:case 11:case 15:Ml(n),n.flags&2048&&nr(9,n,n.return);break;case 3:Ml(n);break;case 12:Ml(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ac(n)):Ml(n);break;default:Ml(n)}}function ac(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];bn=u,O0(u,n)}U0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:nr(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}n=n.sibling}}function O0(n,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:nr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:al(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,bn=u;else t:for(s=n;bn!==null;){u=bn;var d=u.sibling,_=u.return;if(T0(u),u===s){bn=null;break t}if(d!==null){d.return=_,bn=d;break t}bn=_}}}var nE={getCacheForType:function(n){var i=Bn(xn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s}},iE=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ve=null,Ee=0,Ue=0,pi=null,rr=!1,qs=!1,Qh=!1,wa=0,an=0,sr=0,Zr=0,Jh=0,Li=0,Ys=0,El=null,ei=null,$h=!1,td=0,rc=1/0,sc=null,or=null,Ln=0,lr=null,js=null,Zs=0,ed=0,nd=null,N0=null,Tl=0,id=null;function mi(){if((De&2)!==0&&Ee!==0)return Ee&-Ee;if(B.T!==null){var n=zs;return n!==0?n:cd()}return be()}function P0(){Li===0&&(Li=(Ee&536870912)===0||we?q():536870912);var n=Ui.current;return n!==null&&(n.flags|=32),Li}function _i(n,i,s){(n===ke&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)&&(Ks(n,0),ur(n,Ee,Li,!1)),It(n,s),((De&2)===0||n!==ke)&&(n===ke&&((De&2)===0&&(Zr|=s),an===4&&ur(n,Ee,Li,!1)),ra(n))}function z0(n,i,s){if((De&6)!==0)throw Error(a(327));var u=!s&&(i&124)===0&&(i&n.expiredLanes)===0||Dt(n,i),d=u?sE(n,i):sd(n,i,!0),_=u;do{if(d===0){qs&&!u&&ur(n,i,0,!1);break}else{if(s=n.current.alternate,_&&!aE(s)){d=sd(n,i,!1),_=!1;continue}if(d===2){if(_=i,n.errorRecoveryDisabledLanes&_)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var w=n;d=El;var H=w.current.memoizedState.isDehydrated;if(H&&(Ks(w,T).flags|=256),T=sd(w,T,!1),T!==2){if(Qh&&!H){w.errorRecoveryDisabledLanes|=_,Zr|=_,d=4;break t}_=ei,ei=d,_!==null&&(ei===null?ei=_:ei.push.apply(ei,_))}d=T}if(_=!1,d!==2)continue}}if(d===1){Ks(n,0),ur(n,i,0,!0);break}t:{switch(u=n,_=d,_){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ur(u,i,Li,!rr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=td+300-Pt(),10<d)){if(ur(u,i,Li,!rr),Vt(u,0,!0)!==0)break t;u.timeoutHandle=fv(I0.bind(null,u,s,ei,sc,$h,i,Li,Zr,Ys,rr,_,2,-0,0),d);break t}I0(u,s,ei,sc,$h,i,Li,Zr,Ys,rr,_,0,-0,0)}}break}while(!0);ra(n)}function I0(n,i,s,u,d,_,T,w,H,$,dt,gt,at,st){if(n.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Ul={stylesheets:null,count:0,unsuspend:FE},D0(i),gt=GE(),gt!==null)){n.cancelPendingCommit=gt(X0.bind(null,n,i,_,s,u,d,T,w,H,dt,1,at,st)),ur(n,_,T,!$);return}X0(n,i,_,s,u,d,T,w,H)}function aE(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var d=s[u],_=d.getSnapshot;d=d.value;try{if(!ci(_(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i,s,u){i&=~Jh,i&=~Zr,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var d=i;0<d;){var _=31-zt(d),T=1<<_;u[_]=-1,d&=~T}s!==0&&xt(n,s,i)}function oc(){return(De&6)===0?(bl(0),!1):!0}function ad(){if(ve!==null){if(Ue===0)var n=ve.return;else n=ve,ya=kr=null,Sh(n),Vs=null,ml=0,n=ve;for(;n!==null;)_0(n.alternate,n),n=n.return;ve=null}}function Ks(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,ME(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ad(),ke=n,ve=s=ga(n.current,null),Ee=i,Ue=0,pi=null,rr=!1,qs=Dt(n,i),Qh=!1,Ys=Li=Jh=Zr=sr=an=0,ei=El=null,$h=!1,(i&8)!==0&&(i|=i&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=i;0<u;){var d=31-zt(u),_=1<<d;i|=n[d],u&=~_}return wa=i,Cu(),s}function B0(n,i){me=null,B.H=ju,i===sl||i===Bu?(i=eg(),Ue=3):i===J_?(i=eg(),Ue=4):Ue=i===n0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pi=i,ve===null&&(an=1,$u(n,Ri(i,n.current)))}function F0(){var n=B.H;return B.H=ju,n===null?ju:n}function H0(){var n=B.A;return B.A=nE,n}function rd(){an=4,rr||(Ee&4194048)!==Ee&&Ui.current!==null||(qs=!0),(sr&134217727)===0&&(Zr&134217727)===0||ke===null||ur(ke,Ee,Li,!1)}function sd(n,i,s){var u=De;De|=2;var d=F0(),_=H0();(ke!==n||Ee!==i)&&(sc=null,Ks(n,i)),i=!1;var T=an;t:do try{if(Ue!==0&&ve!==null){var w=ve,H=pi;switch(Ue){case 8:ad(),T=6;break t;case 3:case 2:case 9:case 6:Ui.current===null&&(i=!0);var $=Ue;if(Ue=0,pi=null,Qs(n,w,H,$),s&&qs){T=0;break t}break;default:$=Ue,Ue=0,pi=null,Qs(n,w,H,$)}}rE(),T=an;break}catch(dt){B0(n,dt)}while(!0);return i&&n.shellSuspendCounter++,ya=kr=null,De=u,B.H=d,B.A=_,ve===null&&(ke=null,Ee=0,Cu()),T}function rE(){for(;ve!==null;)G0(ve)}function sE(n,i){var s=De;De|=2;var u=F0(),d=H0();ke!==n||Ee!==i?(sc=null,rc=Pt()+500,Ks(n,i)):qs=Dt(n,i);t:do try{if(Ue!==0&&ve!==null){i=ve;var _=pi;e:switch(Ue){case 1:Ue=0,pi=null,Qs(n,i,_,1);break;case 2:case 9:if($_(_)){Ue=0,pi=null,V0(i);break}i=function(){Ue!==2&&Ue!==9||ke!==n||(Ue=7),ra(n)},_.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:$_(_)?(Ue=0,pi=null,V0(i)):(Ue=0,pi=null,Qs(n,i,_,7));break;case 5:var T=null;switch(ve.tag){case 26:T=ve.memoizedState;case 5:case 27:var w=ve;if(!T||Ev(T)){Ue=0,pi=null;var H=w.sibling;if(H!==null)ve=H;else{var $=w.return;$!==null?(ve=$,lc($)):ve=null}break e}}Ue=0,pi=null,Qs(n,i,_,5);break;case 6:Ue=0,pi=null,Qs(n,i,_,6);break;case 8:ad(),an=6;break t;default:throw Error(a(462))}}oE();break}catch(dt){B0(n,dt)}while(!0);return ya=kr=null,B.H=u,B.A=d,De=s,ve!==null?0:(ke=null,Ee=0,Cu(),an)}function oE(){for(;ve!==null&&!re();)G0(ve)}function G0(n){var i=p0(n.alternate,n,wa);n.memoizedProps=n.pendingProps,i===null?lc(n):ve=i}function V0(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=l0(s,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=l0(s,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:Sh(i);default:_0(s,i),i=ve=k_(i,wa),i=p0(s,i,wa)}n.memoizedProps=n.pendingProps,i===null?lc(n):ve=i}function Qs(n,i,s,u){ya=kr=null,Sh(i),Vs=null,ml=0;var d=i.return;try{if(KM(n,d,i,s,Ee)){an=1,$u(n,Ri(s,n.current)),ve=null;return}}catch(_){if(d!==null)throw ve=d,_;an=1,$u(n,Ri(s,n.current)),ve=null;return}i.flags&32768?(we||u===1?n=!0:qs||(Ee&536870912)!==0?n=!1:(rr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Ui.current,u!==null&&u.tag===13&&(u.flags|=16384))),k0(i,n)):lc(i)}function lc(n){var i=n;do{if((i.flags&32768)!==0){k0(i,rr);return}n=i.return;var s=JM(i.alternate,i,wa);if(s!==null){ve=s;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=n}while(i!==null);an===0&&(an=5)}function k0(n,i){do{var s=$M(n.alternate,n);if(s!==null){s.flags&=32767,ve=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){ve=n;return}ve=n=s}while(n!==null);an=6,ve=null}function X0(n,i,s,u,d,_,T,w,H){n.cancelPendingCommit=null;do uc();while(Ln!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(_=i.lanes|i.childLanes,_|=Kf,Et(n,s,_,T,w,H),n===ke&&(ve=ke=null,Ee=0),js=i,lr=n,Zs=s,ed=_,nd=d,N0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,fE(je,function(){return Z0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,d=k.p,k.p=2,T=De,De|=4;try{tE(n,i,s)}finally{De=T,k.p=d,B.T=u}}Ln=1,W0(),q0(),Y0()}}function W0(){if(Ln===1){Ln=0;var n=lr,i=js,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var u=k.p;k.p=2;var d=De;De|=4;try{R0(i,n);var _=vd,T=O_(n.containerInfo),w=_.focusedElem,H=_.selectionRange;if(T!==w&&w&&w.ownerDocument&&L_(w.ownerDocument.documentElement,w)){if(H!==null&&Wf(w)){var $=H.start,dt=H.end;if(dt===void 0&&(dt=$),"selectionStart"in w)w.selectionStart=$,w.selectionEnd=Math.min(dt,w.value.length);else{var gt=w.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ie=w.textContent.length,$t=Math.min(H.start,ie),ze=H.end===void 0?$t:Math.min(H.end,ie);!st.extend&&$t>ze&&(T=ze,ze=$t,$t=T);var Z=U_(w,$t),W=U_(w,ze);if(Z&&W&&(st.rangeCount!==1||st.anchorNode!==Z.node||st.anchorOffset!==Z.offset||st.focusNode!==W.node||st.focusOffset!==W.offset)){var J=gt.createRange();J.setStart(Z.node,Z.offset),st.removeAllRanges(),$t>ze?(st.addRange(J),st.extend(W.node,W.offset)):(J.setEnd(W.node,W.offset),st.addRange(J))}}}}for(gt=[],st=w;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<gt.length;w++){var mt=gt[w];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Sc=!!gd,vd=gd=null}finally{De=d,k.p=u,B.T=s}}n.current=i,Ln=2}}function q0(){if(Ln===2){Ln=0;var n=lr,i=js,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var u=k.p;k.p=2;var d=De;De|=4;try{E0(n,i.alternate,i)}finally{De=d,k.p=u,B.T=s}}Ln=3}}function Y0(){if(Ln===4||Ln===3){Ln=0,ne();var n=lr,i=js,s=Zs,u=N0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,js=lr=null,j0(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(or=null),Ce(s),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ht,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=B.T,d=k.p,k.p=2,B.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var w=u[T];_(w.value,{componentStack:w.stack})}}finally{B.T=i,k.p=d}}(Zs&3)!==0&&uc(),ra(n),d=n.pendingLanes,(s&4194090)!==0&&(d&42)!==0?n===id?Tl++:(Tl=0,id=n):Tl=0,bl(0)}}function j0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,al(i)))}function uc(n){return W0(),q0(),Y0(),Z0()}function Z0(){if(Ln!==5)return!1;var n=lr,i=ed;ed=0;var s=Ce(Zs),u=B.T,d=k.p;try{k.p=32>s?32:s,B.T=null,s=nd,nd=null;var _=lr,T=Zs;if(Ln=0,js=lr=null,Zs=0,(De&6)!==0)throw Error(a(331));var w=De;if(De|=4,L0(_.current),C0(_,_.current,T,s),De=w,bl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ht,_)}catch{}return!0}finally{k.p=d,B.T=u,j0(n,i)}}function K0(n,i,s){i=Ri(s,i),i=Ph(n.stateNode,i,2),n=Ja(n,i,2),n!==null&&(It(n,2),ra(n))}function Fe(n,i,s){if(n.tag===3)K0(n,n,s);else for(;i!==null;){if(i.tag===3){K0(i,n,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=Ri(s,n),s=t0(2),u=Ja(i,s,2),u!==null&&(e0(s,u,i,n),It(u,2),ra(u));break}}i=i.return}}function od(n,i,s){var u=n.pingCache;if(u===null){u=n.pingCache=new iE;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(Qh=!0,d.add(s),n=lE.bind(null,n,i,s),i.then(n,n))}function lE(n,i,s){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,ke===n&&(Ee&s)===s&&(an===4||an===3&&(Ee&62914560)===Ee&&300>Pt()-td?(De&2)===0&&Ks(n,0):Jh|=s,Ys===Ee&&(Ys=0)),ra(n)}function Q0(n,i){i===0&&(i=bt()),n=Ls(n,i),n!==null&&(It(n,i),ra(n))}function uE(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),Q0(n,s)}function cE(n,i){var s=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),Q0(n,s)}function fE(n,i){return G(n,i)}var cc=null,Js=null,ld=!1,fc=!1,ud=!1,Kr=0;function ra(n){n!==Js&&n.next===null&&(Js===null?cc=Js=n:Js=Js.next=n),fc=!0,ld||(ld=!0,dE())}function bl(n,i){if(!ud&&fc){ud=!0;do for(var s=!1,u=cc;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var _=0;else{var T=u.suspendedLanes,w=u.pingedLanes;_=(1<<31-zt(42|n)+1)-1,_&=d&~(T&~w),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(s=!0,ev(u,_))}else _=Ee,_=Vt(u,u===ke?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||Dt(u,_)||(s=!0,ev(u,_));u=u.next}while(s);ud=!1}}function hE(){J0()}function J0(){fc=ld=!1;var n=0;Kr!==0&&(SE()&&(n=Kr),Kr=0);for(var i=Pt(),s=null,u=cc;u!==null;){var d=u.next,_=$0(u,i);_===0?(u.next=null,s===null?cc=d:s.next=d,d===null&&(Js=s)):(s=u,(n!==0||(_&3)!==0)&&(fc=!0)),u=d}bl(n)}function $0(n,i){for(var s=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var T=31-zt(_),w=1<<T,H=d[T];H===-1?((w&s)===0||(w&u)!==0)&&(d[T]=oe(w,i)):H<=i&&(n.expiredLanes|=w),_&=~w}if(i=ke,s=Ee,s=Vt(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,s===0||n===i&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Le(u),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Dt(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(u!==null&&Le(u),Ce(s)){case 2:case 8:s=se;break;case 32:s=je;break;case 268435456:s=I;break;default:s=je}return u=tv.bind(null,n),s=G(s,u),n.callbackPriority=i,n.callbackNode=s,i}return u!==null&&u!==null&&Le(u),n.callbackPriority=2,n.callbackNode=null,2}function tv(n,i){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(uc()&&n.callbackNode!==s)return null;var u=Ee;return u=Vt(n,n===ke?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(z0(n,u,i),$0(n,Pt()),n.callbackNode!=null&&n.callbackNode===s?tv.bind(null,n):null)}function ev(n,i){if(uc())return null;z0(n,i,!0)}function dE(){EE(function(){(De&6)!==0?G(Gt,hE):J0()})}function cd(){return Kr===0&&(Kr=q()),Kr}function nv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Mu(""+n)}function iv(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function pE(n,i,s,u,d){if(i==="submit"&&s&&s.stateNode===d){var _=nv((d[tn]||null).action),T=u.submitter;T&&(i=(i=T[tn]||null)?nv(i.formAction):T.getAttribute("formAction"),i!==null&&(_=i,T=null));var w=new Au("action","action",null,u,d);n.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Kr!==0){var H=T?iv(d,T):new FormData(d);Dh(s,{pending:!0,data:H,method:d.method,action:_},null,H)}}else typeof _=="function"&&(w.preventDefault(),H=T?iv(d,T):new FormData(d),Dh(s,{pending:!0,data:H,method:d.method,action:_},_,H))},currentTarget:d}]})}}for(var fd=0;fd<Zf.length;fd++){var hd=Zf[fd],mE=hd.toLowerCase(),_E=hd[0].toUpperCase()+hd.slice(1);ki(mE,"on"+_E)}ki(z_,"onAnimationEnd"),ki(I_,"onAnimationIteration"),ki(B_,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(OM,"onTransitionRun"),ki(NM,"onTransitionStart"),ki(PM,"onTransitionCancel"),ki(F_,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function av(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],d=u.event;u=u.listeners;t:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var w=u[T],H=w.instance,$=w.currentTarget;if(w=w.listener,H!==_&&d.isPropagationStopped())break t;_=w,d.currentTarget=$;try{_(d)}catch(dt){Ju(dt)}d.currentTarget=null,_=H}else for(T=0;T<u.length;T++){if(w=u[T],H=w.instance,$=w.currentTarget,w=w.listener,H!==_&&d.isPropagationStopped())break t;_=w,d.currentTarget=$;try{_(d)}catch(dt){Ju(dt)}d.currentTarget=null,_=H}}}}function xe(n,i){var s=i[Ms];s===void 0&&(s=i[Ms]=new Set);var u=n+"__bubble";s.has(u)||(rv(i,n,2,!1),s.add(u))}function dd(n,i,s){var u=0;i&&(u|=4),rv(s,n,u,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function pd(n){if(!n[hc]){n[hc]=!0,yu.forEach(function(s){s!=="selectionchange"&&(gE.has(s)||dd(s,!1,n),dd(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[hc]||(i[hc]=!0,dd("selectionchange",!1,i))}}function rv(n,i,s,u){switch(Cv(i)){case 2:var d=XE;break;case 8:d=WE;break;default:d=wd}s=d.bind(null,i,s,n),d=void 0,!zf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,s,{capture:!0,passive:d}):n.addEventListener(i,s,!0):d!==void 0?n.addEventListener(i,s,{passive:d}):n.addEventListener(i,s,!1)}function md(n,i,s,u,d){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var w=u.stateNode.containerInfo;if(w===d)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&T.stateNode.containerInfo===d)return;T=T.return}for(;w!==null;){if(T=ma(w),T===null)return;if(H=T.tag,H===5||H===6||H===26||H===27){u=_=T;continue t}w=w.parentNode}}u=u.return}h_(function(){var $=_,dt=Nf(s),gt=[];t:{var at=H_.get(n);if(at!==void 0){var st=Au,ie=n;switch(n){case"keypress":if(Tu(s)===0)break t;case"keydown":case"keyup":st=fM;break;case"focusin":ie="focus",st=Hf;break;case"focusout":ie="blur",st=Hf;break;case"beforeblur":case"afterblur":st=Hf;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=m_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=$S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=pM;break;case z_:case I_:case B_:st=nM;break;case F_:st=_M;break;case"scroll":case"scrollend":st=QS;break;case"wheel":st=vM;break;case"copy":case"cut":case"paste":st=aM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=g_;break;case"toggle":case"beforetoggle":st=yM}var $t=(i&4)!==0,ze=!$t&&(n==="scroll"||n==="scrollend"),Z=$t?at!==null?at+"Capture":null:at;$t=[];for(var W=$,J;W!==null;){var mt=W;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||Z===null||(mt=Wo(W,Z),mt!=null&&$t.push(Rl(W,mt,J))),ze)break;W=W.return}0<$t.length&&(at=new st(at,ie,null,s,dt),gt.push({event:at,listeners:$t}))}}if((i&7)===0){t:{if(at=n==="mouseover"||n==="pointerover",st=n==="mouseout"||n==="pointerout",at&&s!==Of&&(ie=s.relatedTarget||s.fromElement)&&(ma(ie)||ie[$i]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ie=s.relatedTarget||s.toElement,st=$,ie=ie?ma(ie):null,ie!==null&&(ze=l(ie),$t=ie.tag,ie!==ze||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(st=null,ie=$),st!==ie)){if($t=m_,mt="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&($t=g_,mt="onPointerLeave",Z="onPointerEnter",W="pointer"),ze=st==null?at:Nr(st),J=ie==null?at:Nr(ie),at=new $t(mt,W+"leave",st,s,dt),at.target=ze,at.relatedTarget=J,mt=null,ma(dt)===$&&($t=new $t(Z,W+"enter",ie,s,dt),$t.target=J,$t.relatedTarget=ze,mt=$t),ze=mt,st&&ie)e:{for($t=st,Z=ie,W=0,J=$t;J;J=$s(J))W++;for(J=0,mt=Z;mt;mt=$s(mt))J++;for(;0<W-J;)$t=$s($t),W--;for(;0<J-W;)Z=$s(Z),J--;for(;W--;){if($t===Z||Z!==null&&$t===Z.alternate)break e;$t=$s($t),Z=$s(Z)}$t=null}else $t=null;st!==null&&sv(gt,at,st,$t,!1),ie!==null&&ze!==null&&sv(gt,ze,ie,$t,!0)}}t:{if(at=$?Nr($):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ft=b_;else if(E_(at))if(A_)Ft=DM;else{Ft=wM;var _e=RM}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&Lf($.elementType)&&(Ft=b_):Ft=CM;if(Ft&&(Ft=Ft(n,$))){T_(gt,Ft,s,dt);break t}_e&&_e(n,at,$),n==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&In(at,"number",at.value)}switch(_e=$?Nr($):window,n){case"focusin":(E_(_e)||_e.contentEditable==="true")&&(Cs=_e,qf=$,$o=null);break;case"focusout":$o=qf=Cs=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,N_(gt,s,dt);break;case"selectionchange":if(LM)break;case"keydown":case"keyup":N_(gt,s,dt)}var Yt;if(Vf)t:{switch(n){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else ws?S_(n,s)&&(ee="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ee="onCompositionStart");ee&&(v_&&s.locale!=="ko"&&(ws||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&ws&&(Yt=d_()):(ja=dt,If="value"in ja?ja.value:ja.textContent,ws=!0)),_e=dc($,ee),0<_e.length&&(ee=new __(ee,n,null,s,dt),gt.push({event:ee,listeners:_e}),Yt?ee.data=Yt:(Yt=M_(s),Yt!==null&&(ee.data=Yt)))),(Yt=MM?EM(n,s):TM(n,s))&&(ee=dc($,"onBeforeInput"),0<ee.length&&(_e=new __("onBeforeInput","beforeinput",null,s,dt),gt.push({event:_e,listeners:ee}),_e.data=Yt)),pE(gt,n,$,s,dt)}av(gt,i)})}function Rl(n,i,s){return{instance:n,listener:i,currentTarget:s}}function dc(n,i){for(var s=i+"Capture",u=[];n!==null;){var d=n,_=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||_===null||(d=Wo(n,s),d!=null&&u.unshift(Rl(n,d,_)),d=Wo(n,i),d!=null&&u.push(Rl(n,d,_))),n.tag===3)return u;n=n.return}return[]}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function sv(n,i,s,u,d){for(var _=i._reactName,T=[];s!==null&&s!==u;){var w=s,H=w.alternate,$=w.stateNode;if(w=w.tag,H!==null&&H===u)break;w!==5&&w!==26&&w!==27||$===null||(H=$,d?($=Wo(s,_),$!=null&&T.unshift(Rl(s,$,H))):d||($=Wo(s,_),$!=null&&T.push(Rl(s,$,H)))),s=s.return}T.length!==0&&n.push({event:i,listeners:T})}var vE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function ov(n){return(typeof n=="string"?n:""+n).replace(vE,`
`).replace(xE,"")}function lv(n,i){return i=ov(i),ov(n)===i}function pc(){}function Pe(n,i,s,u,d,_){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Qn(n,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Qn(n,""+u);break;case"className":Bt(n,"class",u);break;case"tabIndex":Bt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(n,s,u);break;case"style":c_(n,u,_);break;case"data":if(i!=="object"){Bt(n,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Mu(""+u),n.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(s==="formAction"?(i!=="input"&&Pe(n,i,"name",d.name,d,null),Pe(n,i,"formEncType",d.formEncType,d,null),Pe(n,i,"formMethod",d.formMethod,d,null),Pe(n,i,"formTarget",d.formTarget,d,null)):(Pe(n,i,"encType",d.encType,d,null),Pe(n,i,"method",d.method,d,null),Pe(n,i,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Mu(""+u),n.setAttribute(s,u);break;case"onClick":u!=null&&(n.onclick=pc);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(d.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}s=Mu(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""+u):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":u===!0?n.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,u):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(s,u):n.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(s):n.setAttribute(s,u);break;case"popover":xe("beforetoggle",n),xe("toggle",n),Ut(n,"popover",u);break;case"xlinkActuate":Ot(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ot(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ot(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ot(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ot(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ot(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ot(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ot(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ot(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ut(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ZS.get(s)||s,Ut(n,s,u))}}function _d(n,i,s,u,d,_){switch(s){case"style":c_(n,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(d.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof u=="string"?Qn(n,u):(typeof u=="number"||typeof u=="bigint")&&Qn(n,""+u);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Su.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),_=n[tn]||null,_=_!=null?_[s]:null,typeof _=="function"&&n.removeEventListener(i,_,d),typeof u=="function")){typeof _!="function"&&_!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,u,d);break t}s in n?n[s]=u:u===!0?n.setAttribute(s,""):Ut(n,s,u)}}}function On(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var u=!1,d=!1,_;for(_ in s)if(s.hasOwnProperty(_)){var T=s[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(n,i,_,T,s,null)}}d&&Pe(n,i,"srcSet",s.srcSet,s,null),u&&Pe(n,i,"src",s.src,s,null);return;case"input":xe("invalid",n);var w=_=T=d=null,H=null,$=null;for(u in s)if(s.hasOwnProperty(u)){var dt=s[u];if(dt!=null)switch(u){case"name":d=dt;break;case"type":T=dt;break;case"checked":H=dt;break;case"defaultChecked":$=dt;break;case"value":_=dt;break;case"defaultValue":w=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Pe(n,i,u,dt,s,null)}}Wn(n,_,w,H,$,T,d,!1),ge(n);return;case"select":xe("invalid",n),u=T=_=null;for(d in s)if(s.hasOwnProperty(d)&&(w=s[d],w!=null))switch(d){case"value":_=w;break;case"defaultValue":T=w;break;case"multiple":u=w;default:Pe(n,i,d,w,s,null)}i=_,s=T,n.multiple=!!u,i!=null?en(n,!!u,i,!1):s!=null&&en(n,!!u,s,!0);return;case"textarea":xe("invalid",n),_=d=u=null;for(T in s)if(s.hasOwnProperty(T)&&(w=s[T],w!=null))switch(T){case"value":u=w;break;case"defaultValue":d=w;break;case"children":_=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Pe(n,i,T,w,s,null)}bs(n,u,d,_),ge(n);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(u=s[H],u!=null))switch(H){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Pe(n,i,H,u,s,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(u=0;u<Al.length;u++)xe(Al[u],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in s)if(s.hasOwnProperty($)&&(u=s[$],u!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(n,i,$,u,s,null)}return;default:if(Lf(i)){for(dt in s)s.hasOwnProperty(dt)&&(u=s[dt],u!==void 0&&_d(n,i,dt,u,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(u=s[w],u!=null&&Pe(n,i,w,u,s,null))}function yE(n,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,_=null,T=null,w=null,H=null,$=null,dt=null;for(st in s){var gt=s[st];if(s.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":H=gt;default:u.hasOwnProperty(st)||Pe(n,i,st,null,u,gt)}}for(var at in u){var st=u[at];if(gt=s[at],u.hasOwnProperty(at)&&(st!=null||gt!=null))switch(at){case"type":_=st;break;case"name":d=st;break;case"checked":$=st;break;case"defaultChecked":dt=st;break;case"value":T=st;break;case"defaultValue":w=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==gt&&Pe(n,i,at,st,u,gt)}}Be(n,T,w,H,$,dt,_,d);return;case"select":st=T=w=at=null;for(_ in s)if(H=s[_],s.hasOwnProperty(_)&&H!=null)switch(_){case"value":break;case"multiple":st=H;default:u.hasOwnProperty(_)||Pe(n,i,_,null,u,H)}for(d in u)if(_=u[d],H=s[d],u.hasOwnProperty(d)&&(_!=null||H!=null))switch(d){case"value":at=_;break;case"defaultValue":w=_;break;case"multiple":T=_;default:_!==H&&Pe(n,i,d,_,u,H)}i=w,s=T,u=st,at!=null?en(n,!!s,at,!1):!!u!=!!s&&(i!=null?en(n,!!s,i,!0):en(n,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(w in s)if(d=s[w],s.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Pe(n,i,w,null,u,d)}for(T in u)if(d=u[T],_=s[T],u.hasOwnProperty(T)&&(d!=null||_!=null))switch(T){case"value":at=d;break;case"defaultValue":st=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==_&&Pe(n,i,T,d,u,_)}Dn(n,at,st);return;case"option":for(var ie in s)if(at=s[ie],s.hasOwnProperty(ie)&&at!=null&&!u.hasOwnProperty(ie))switch(ie){case"selected":n.selected=!1;break;default:Pe(n,i,ie,null,u,at)}for(H in u)if(at=u[H],st=s[H],u.hasOwnProperty(H)&&at!==st&&(at!=null||st!=null))switch(H){case"selected":n.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(n,i,H,at,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in s)at=s[$t],s.hasOwnProperty($t)&&at!=null&&!u.hasOwnProperty($t)&&Pe(n,i,$t,null,u,at);for($ in u)if(at=u[$],st=s[$],u.hasOwnProperty($)&&at!==st&&(at!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Pe(n,i,$,at,u,st)}return;default:if(Lf(i)){for(var ze in s)at=s[ze],s.hasOwnProperty(ze)&&at!==void 0&&!u.hasOwnProperty(ze)&&_d(n,i,ze,void 0,u,at);for(dt in u)at=u[dt],st=s[dt],!u.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||_d(n,i,dt,at,u,st);return}}for(var Z in s)at=s[Z],s.hasOwnProperty(Z)&&at!=null&&!u.hasOwnProperty(Z)&&Pe(n,i,Z,null,u,at);for(gt in u)at=u[gt],st=s[gt],!u.hasOwnProperty(gt)||at===st||at==null&&st==null||Pe(n,i,gt,at,u,st)}var gd=null,vd=null;function mc(n){return n.nodeType===9?n:n.ownerDocument}function uv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function xd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var yd=null;function SE(){var n=window.event;return n&&n.type==="popstate"?n===yd?!1:(yd=n,!0):(yd=null,!1)}var fv=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(n){return hv.resolve(null).then(n).catch(TE)}:fv;function TE(n){setTimeout(function(){throw n})}function cr(n){return n==="head"}function dv(n,i){var s=i,u=0,d=0;do{var _=s.nextSibling;if(n.removeChild(s),_&&_.nodeType===8)if(s=_.data,s==="/$"){if(0<u&&8>u){s=u;var T=n.ownerDocument;if(s&1&&wl(T.documentElement),s&2&&wl(T.body),s&4)for(s=T.head,wl(s),T=s.firstChild;T;){var w=T.nextSibling,H=T.nodeName;T[ta]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=w}}if(d===0){n.removeChild(_),zl(i);return}d--}else s==="$"||s==="$?"||s==="$!"?d++:u=s.charCodeAt(0)-48;else u=0;s=_}while(s);zl(i)}function Sd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Sd(s),Ts(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function bE(n,i,s,u){for(;n.nodeType===1;){var d=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[ta])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var _=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Wi(n.nextSibling),n===null)break}return null}function AE(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Wi(n.nextSibling),n===null))return null;return n}function Md(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function RE(n,i){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Wi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Ed=null;function pv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}function mv(n,i,s){switch(i=mc(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function wl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ts(n)}var Oi=new Map,_v=new Set;function _c(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ca=k.d;k.d={f:wE,r:CE,D:DE,C:UE,L:LE,m:OE,X:PE,S:NE,M:zE};function wE(){var n=Ca.f(),i=oc();return n||i}function CE(n){var i=qa(n);i!==null&&i.tag===5&&i.type==="form"?zg(i):Ca.r(n)}var to=typeof document>"u"?null:document;function gv(n,i,s){var u=to;if(u&&typeof i=="string"&&i){var d=En(i);d='link[rel="'+n+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),_v.has(d)||(_v.add(d),n={rel:n,crossOrigin:s,href:i},u.querySelector(d)===null&&(i=u.createElement("link"),On(i,"link",n),fn(i),u.head.appendChild(i)))}}function DE(n){Ca.D(n),gv("dns-prefetch",n,null)}function UE(n,i){Ca.C(n,i),gv("preconnect",n,i)}function LE(n,i,s){Ca.L(n,i,s);var u=to;if(u&&n&&i){var d='link[rel="preload"][as="'+En(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+En(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+En(s.imageSizes)+'"]')):d+='[href="'+En(n)+'"]';var _=d;switch(i){case"style":_=eo(n);break;case"script":_=no(n)}Oi.has(_)||(n=m({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Oi.set(_,n),u.querySelector(d)!==null||i==="style"&&u.querySelector(Cl(_))||i==="script"&&u.querySelector(Dl(_))||(i=u.createElement("link"),On(i,"link",n),fn(i),u.head.appendChild(i)))}}function OE(n,i){Ca.m(n,i);var s=to;if(s&&n){var u=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+En(u)+'"][href="'+En(n)+'"]',_=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=no(n)}if(!Oi.has(_)&&(n=m({rel:"modulepreload",href:n},i),Oi.set(_,n),s.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Dl(_)))return}u=s.createElement("link"),On(u,"link",n),fn(u),s.head.appendChild(u)}}}function NE(n,i,s){Ca.S(n,i,s);var u=to;if(u&&n){var d=Ya(u).hoistableStyles,_=eo(n);i=i||"default";var T=d.get(_);if(!T){var w={loading:0,preload:null};if(T=u.querySelector(Cl(_)))w.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Oi.get(_))&&Td(n,s);var H=T=u.createElement("link");fn(H),On(H,"link",n),H._p=new Promise(function($,dt){H.onload=$,H.onerror=dt}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,gc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:w},d.set(_,T)}}}function PE(n,i){Ca.X(n,i);var s=to;if(s&&n){var u=Ya(s).hoistableScripts,d=no(n),_=u.get(d);_||(_=s.querySelector(Dl(d)),_||(n=m({src:n,async:!0},i),(i=Oi.get(d))&&bd(n,i),_=s.createElement("script"),fn(_),On(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(d,_))}}function zE(n,i){Ca.M(n,i);var s=to;if(s&&n){var u=Ya(s).hoistableScripts,d=no(n),_=u.get(d);_||(_=s.querySelector(Dl(d)),_||(n=m({src:n,async:!0,type:"module"},i),(i=Oi.get(d))&&bd(n,i),_=s.createElement("script"),fn(_),On(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(d,_))}}function vv(n,i,s,u){var d=(d=tt.current)?_c(d):null;if(!d)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=eo(s.href),s=Ya(d).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=eo(s.href);var _=Ya(d).hoistableStyles,T=_.get(n);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,T),(_=d.querySelector(Cl(n)))&&!_._p&&(T.instance=_,T.state.loading=5),Oi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Oi.set(n,s),_||IE(d,n,s,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=no(s),s=Ya(d).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function eo(n){return'href="'+En(n)+'"'}function Cl(n){return'link[rel="stylesheet"]['+n+"]"}function xv(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function IE(n,i,s,u){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=n.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),On(i,"link",s),fn(i),n.head.appendChild(i))}function no(n){return'[src="'+En(n)+'"]'}function Dl(n){return"script[async]"+n}function yv(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=n.querySelector('style[data-href~="'+En(s.href)+'"]');if(u)return i.instance=u,fn(u),u;var d=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),fn(u),On(u,"style",d),gc(u,s.precedence,n),i.instance=u;case"stylesheet":d=eo(s.href);var _=n.querySelector(Cl(d));if(_)return i.state.loading|=4,i.instance=_,fn(_),_;u=xv(s),(d=Oi.get(d))&&Td(u,d),_=(n.ownerDocument||n).createElement("link"),fn(_);var T=_;return T._p=new Promise(function(w,H){T.onload=w,T.onerror=H}),On(_,"link",u),i.state.loading|=4,gc(_,s.precedence,n),i.instance=_;case"script":return _=no(s.src),(d=n.querySelector(Dl(_)))?(i.instance=d,fn(d),d):(u=s,(d=Oi.get(_))&&(u=m({},s),bd(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),fn(d),On(d,"link",u),n.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,gc(u,s.precedence,n));return i.instance}function gc(n,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,_=d,T=0;T<u.length;T++){var w=u[T];if(w.dataset.precedence===i)_=w;else if(_!==d)break}_?_.parentNode.insertBefore(n,_.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function Td(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function bd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var vc=null;function Sv(n,i,s){if(vc===null){var u=new Map,d=vc=new Map;d.set(s,u)}else d=vc,u=d.get(s),u||(u=new Map,d.set(s,u));if(u.has(n))return u;for(u.set(n,null),s=s.getElementsByTagName(n),d=0;d<s.length;d++){var _=s[d];if(!(_[ta]||_[vn]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(i)||"";T=n+T;var w=u.get(T);w?w.push(_):u.set(T,[_])}}return u}function Mv(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function BE(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ev(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ul=null;function FE(){}function HE(n,i,s){if(Ul===null)throw Error(a(475));var u=Ul;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=eo(s.href),_=n.querySelector(Cl(d));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=xc.bind(u),n.then(u,u)),i.state.loading|=4,i.instance=_,fn(_);return}_=n.ownerDocument||n,s=xv(s),(d=Oi.get(d))&&Td(s,d),_=_.createElement("link"),fn(_);var T=_;T._p=new Promise(function(w,H){T.onload=w,T.onerror=H}),On(_,"link",s),i.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=xc.bind(u),n.addEventListener("load",i),n.addEventListener("error",i))}}function GE(){if(Ul===null)throw Error(a(475));var n=Ul;return n.stylesheets&&n.count===0&&Ad(n,n.stylesheets),0<n.count?function(i){var s=setTimeout(function(){if(n.stylesheets&&Ad(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(s)}}:null}function xc(){if(this.count--,this.count===0){if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var yc=null;function Ad(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,yc=new Map,i.forEach(VE,n),yc=null,xc.call(n))}function VE(n,i){if(!(i.state.loading&4)){var s=yc.get(n);if(s)var u=s.get(null);else{s=new Map,yc.set(n,s);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<d.length;_++){var T=d[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),u=T)}u&&s.set(null,u)}d=i.instance,T=d.getAttribute("data-precedence"),_=s.get(T)||u,_===u&&s.set(null,d),s.set(T,d),this.count++,u=xc.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),_?_.parentNode.insertBefore(d,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),i.state.loading|=4}}var Ll={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function kE(n,i,s,u,d,_,T,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Tv(n,i,s,u,d,_,T,w,H,$,dt,gt){return n=new kE(n,i,s,T,w,H,$,gt),i=1,_===!0&&(i|=24),_=fi(3,null,null,i),n.current=_,_.stateNode=n,i=oh(),i.refCount++,n.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:s,cache:i},fh(_),n}function bv(n){return n?(n=Os,n):Os}function Av(n,i,s,u,d,_){d=bv(d),u.context===null?u.context=d:u.pendingContext=d,u=Qa(i),u.payload={element:s},_=_===void 0?null:_,_!==null&&(u.callback=_),s=Ja(n,u,i),s!==null&&(_i(s,n,i),ll(s,n,i))}function Rv(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Rd(n,i){Rv(n,i),(n=n.alternate)&&Rv(n,i)}function wv(n){if(n.tag===13){var i=Ls(n,67108864);i!==null&&_i(i,n,67108864),Rd(n,67108864)}}var Sc=!0;function XE(n,i,s,u){var d=B.T;B.T=null;var _=k.p;try{k.p=2,wd(n,i,s,u)}finally{k.p=_,B.T=d}}function WE(n,i,s,u){var d=B.T;B.T=null;var _=k.p;try{k.p=8,wd(n,i,s,u)}finally{k.p=_,B.T=d}}function wd(n,i,s,u){if(Sc){var d=Cd(u);if(d===null)md(n,i,u,Mc,s),Dv(n,u);else if(YE(d,n,i,s,u))u.stopPropagation();else if(Dv(n,u),i&4&&-1<qE.indexOf(n)){for(;d!==null;){var _=qa(d);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=jt(_.pendingLanes);if(T!==0){var w=_;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var H=1<<31-zt(T);w.entanglements[1]|=H,T&=~H}ra(_),(De&6)===0&&(rc=Pt()+500,bl(0))}}break;case 13:w=Ls(_,2),w!==null&&_i(w,_,2),oc(),Rd(_,2)}if(_=Cd(u),_===null&&md(n,i,u,Mc,s),_===d)break;d=_}d!==null&&u.stopPropagation()}else md(n,i,u,null,s)}}function Cd(n){return n=Nf(n),Dd(n)}var Mc=null;function Dd(n){if(Mc=null,n=ma(n),n!==null){var i=l(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=c(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Mc=n,null}function Cv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case Gt:return 2;case se:return 8;case je:case Ze:return 32;case I:return 268435456;default:return 32}default:return 32}}var Ud=!1,fr=null,hr=null,dr=null,Ol=new Map,Nl=new Map,pr=[],qE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(n,i){switch(n){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ol.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(i.pointerId)}}function Pl(n,i,s,u,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:_,targetContainers:[d]},i!==null&&(i=qa(i),i!==null&&wv(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function YE(n,i,s,u,d){switch(i){case"focusin":return fr=Pl(fr,n,i,s,u,d),!0;case"dragenter":return hr=Pl(hr,n,i,s,u,d),!0;case"mouseover":return dr=Pl(dr,n,i,s,u,d),!0;case"pointerover":var _=d.pointerId;return Ol.set(_,Pl(Ol.get(_)||null,n,i,s,u,d)),!0;case"gotpointercapture":return _=d.pointerId,Nl.set(_,Pl(Nl.get(_)||null,n,i,s,u,d)),!0}return!1}function Uv(n){var i=ma(n.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){n.blockedOn=i,Gi(n.priority,function(){if(s.tag===13){var u=mi();u=ae(u);var d=Ls(s,u);d!==null&&_i(d,s,u),Rd(s,u)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ec(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=Cd(n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);Of=u,s.target.dispatchEvent(u),Of=null}else return i=qa(s),i!==null&&wv(i),n.blockedOn=s,!1;i.shift()}return!0}function Lv(n,i,s){Ec(n)&&s.delete(i)}function jE(){Ud=!1,fr!==null&&Ec(fr)&&(fr=null),hr!==null&&Ec(hr)&&(hr=null),dr!==null&&Ec(dr)&&(dr=null),Ol.forEach(Lv),Nl.forEach(Lv)}function Tc(n,i){n.blockedOn===i&&(n.blockedOn=null,Ud||(Ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jE)))}var bc=null;function Ov(n){bc!==n&&(bc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bc===n&&(bc=null);for(var i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],d=n[i+2];if(typeof u!="function"){if(Dd(u||s)===null)continue;break}var _=qa(s);_!==null&&(n.splice(i,3),i-=3,Dh(_,{pending:!0,data:d,method:s.method,action:u},u,d))}}))}function zl(n){function i(H){return Tc(H,n)}fr!==null&&Tc(fr,n),hr!==null&&Tc(hr,n),dr!==null&&Tc(dr,n),Ol.forEach(i),Nl.forEach(i);for(var s=0;s<pr.length;s++){var u=pr[s];u.blockedOn===n&&(u.blockedOn=null)}for(;0<pr.length&&(s=pr[0],s.blockedOn===null);)Uv(s),s.blockedOn===null&&pr.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var d=s[u],_=s[u+1],T=d[tn]||null;if(typeof _=="function")T||Ov(s);else if(T){var w=null;if(_&&_.hasAttribute("formAction")){if(d=_,T=_[tn]||null)w=T.formAction;else if(Dd(d)!==null)continue}else w=T.action;typeof w=="function"?s[u+1]=w:(s.splice(u,3),u-=3),Ov(s)}}}function Ld(n){this._internalRoot=n}Ac.prototype.render=Ld.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=mi();Av(s,u,n,i,null,null)},Ac.prototype.unmount=Ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Av(n.current,2,null,n,null,null),oc(),i[$i]=null}};function Ac(n){this._internalRoot=n}Ac.prototype.unstable_scheduleHydration=function(n){if(n){var i=be();n={blockedOn:null,target:n,priority:i};for(var s=0;s<pr.length&&i!==0&&i<pr[s].priority;s++);pr.splice(s,0,n),s===0&&Uv(n)}};var Nv=t.version;if(Nv!=="19.1.1")throw Error(a(527,Nv,"19.1.1"));k.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(i),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var ZE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{ht=Rc.inject(ZE),_t=Rc}catch{}}return Bl.createRoot=function(n,i){if(!r(n))throw Error(a(299));var s=!1,u="",d=Kg,_=Qg,T=Jg,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=Tv(n,1,!1,null,null,s,u,d,_,T,w,null),n[$i]=i.current,pd(n),new Ld(i)},Bl.hydrateRoot=function(n,i,s){if(!r(n))throw Error(a(299));var u=!1,d="",_=Kg,T=Qg,w=Jg,H=null,$=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(_=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&($=s.formState)),i=Tv(n,1,!0,i,s??null,u,d,_,T,w,H,$),i.context=bv(null),s=i.current,u=mi(),u=ae(u),d=Qa(u),d.callback=null,Ja(s,d,u),s=u,i.current.lanes=s,It(i,s),ra(i),n[$i]=i.current,pd(n),new Ac(i)},Bl.version="19.1.1",Bl}var Xv;function rT(){if(Xv)return Pd.exports;Xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pd.exports=aT(),Pd.exports}var sT=rT();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lm="180",oT=0,Wv=1,lT=2,_y=1,uT=2,za=3,Va=0,ai=1,Fa=2,Ar=0,bo=1,df=2,qv=3,Yv=4,cT=5,ls=100,fT=101,hT=102,dT=103,pT=104,mT=200,_T=201,gT=202,vT=203,Rp=204,wp=205,xT=206,yT=207,ST=208,MT=209,ET=210,TT=211,bT=212,AT=213,RT=214,Cp=0,Dp=1,Up=2,Do=3,Lp=4,Op=5,Np=6,Pp=7,Om=0,wT=1,CT=2,Rr=0,DT=1,UT=2,LT=3,OT=4,NT=5,PT=6,zT=7,gy=300,Uo=301,Lo=302,zp=303,Ip=304,Af=306,pf=1e3,cs=1001,Bp=1002,Qi=1003,IT=1004,wc=1005,ua=1006,Fd=1007,fs=1008,ha=1009,vy=1010,xy=1011,eu=1012,Nm=1013,gs=1014,Ha=1015,pu=1016,Pm=1017,zm=1018,nu=1020,yy=35902,Sy=35899,My=1021,Ey=1022,Ki=1023,iu=1026,au=1027,Ty=1028,Im=1029,by=1030,Bm=1031,Fm=1033,nf=33776,af=33777,rf=33778,sf=33779,Fp=35840,Hp=35841,Gp=35842,Vp=35843,kp=36196,Xp=37492,Wp=37496,qp=37808,Yp=37809,jp=37810,Zp=37811,Kp=37812,Qp=37813,Jp=37814,$p=37815,tm=37816,em=37817,nm=37818,im=37819,am=37820,rm=37821,sm=36492,om=36494,lm=36495,um=36283,cm=36284,fm=36285,hm=36286,BT=3200,FT=3201,Hm=0,HT=1,Mr="",Nn="srgb",Oo="srgb-linear",mf="linear",Ie="srgb",io=7680,jv=519,GT=512,VT=513,kT=514,Ay=515,XT=516,WT=517,qT=518,YT=519,Zv=35044,Kv="300 es",ca=2e3,_f=2001;class Go{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const a=e[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hd=Math.PI/180,dm=180/Math.PI;function mu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Se(o,t,e){return Math.max(t,Math.min(e,o))}function jT(o,t){return(o%t+t)%t}function Gd(o,t,e){return(1-e)*o+e*t}function Fl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ni(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,e=0){Te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6],this.y=r[1]*e+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),r=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _u{constructor(t=0,e=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=r}static slerpFlat(t,e,a,r,l,c,f){let p=a[r+0],h=a[r+1],m=a[r+2],g=a[r+3];const v=l[c+0],x=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[e+0]=p,t[e+1]=h,t[e+2]=m,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=x,t[e+2]=E,t[e+3]=M;return}if(g!==M||p!==v||h!==x||m!==E){let S=1-f;const y=p*v+h*x+m*E+g*M,D=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const L=Math.sqrt(U),P=Math.atan2(L,y*D);S=Math.sin(S*P)/L,f=Math.sin(f*P)/L}const A=f*D;if(p=p*S+v*A,h=h*S+x*A,m=m*S+E*A,g=g*S+M*A,S===1-f){const L=1/Math.sqrt(p*p+h*h+m*m+g*g);p*=L,h*=L,m*=L,g*=L}}t[e]=p,t[e+1]=h,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,a,r,l,c){const f=a[r],p=a[r+1],h=a[r+2],m=a[r+3],g=l[c],v=l[c+1],x=l[c+2],E=l[c+3];return t[e]=f*E+m*g+p*x-h*v,t[e+1]=p*E+m*v+h*g-f*x,t[e+2]=h*E+m*x+f*v-p*g,t[e+3]=m*E-f*g-p*v-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,r){return this._x=t,this._y=e,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,h=f(a/2),m=f(r/2),g=f(l/2),v=p(a/2),x=p(r/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*g+h*x*E,this._y=h*x*g-v*m*E,this._z=h*m*E+v*x*g,this._w=h*m*g-v*x*E;break;case"YXZ":this._x=v*m*g+h*x*E,this._y=h*x*g-v*m*E,this._z=h*m*E-v*x*g,this._w=h*m*g+v*x*E;break;case"ZXY":this._x=v*m*g-h*x*E,this._y=h*x*g+v*m*E,this._z=h*m*E+v*x*g,this._w=h*m*g-v*x*E;break;case"ZYX":this._x=v*m*g-h*x*E,this._y=h*x*g+v*m*E,this._z=h*m*E-v*x*g,this._w=h*m*g+v*x*E;break;case"YZX":this._x=v*m*g+h*x*E,this._y=h*x*g+v*m*E,this._z=h*m*E-v*x*g,this._w=h*m*g-v*x*E;break;case"XZY":this._x=v*m*g-h*x*E,this._y=h*x*g-v*m*E,this._z=h*m*E+v*x*g,this._w=h*m*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],r=e[4],l=e[8],c=e[1],f=e[5],p=e[9],h=e[2],m=e[6],g=e[10],v=a+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-p)*x,this._y=(l-h)*x,this._z=(c-r)*x}else if(a>f&&a>g){const x=2*Math.sqrt(1+a-f-g);this._w=(m-p)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(l+h)/x}else if(f>g){const x=2*Math.sqrt(1+f-a-g);this._w=(l-h)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(p+m)/x}else{const x=2*Math.sqrt(1+g-a-f);this._w=(c-r)/x,this._x=(l+h)/x,this._y=(p+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,e/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,r=t._y,l=t._z,c=t._w,f=e._x,p=e._y,h=e._z,m=e._w;return this._x=a*m+c*f+r*h-l*p,this._y=r*m+c*p+l*f-a*h,this._z=l*m+c*h+a*p-r*f,this._w=c*m-a*f-r*p-l*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=r,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*a+e*this._x,this._y=x*r+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),g=Math.sin((1-e)*m)/h,v=Math.sin(e*m)/h;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=r*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,a=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*a+l[6]*r,this.y=l[1]*e+l[4]*a+l[7]*r,this.z=l[2]*e+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*e+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*e+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*e+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const e=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,p=t.w,h=2*(c*r-f*a),m=2*(f*e-l*r),g=2*(l*a-c*e);return this.x=e+p*h+c*g-f*m,this.y=a+p*m+f*h-l*g,this.z=r+p*g+l*m-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*a+l[8]*r,this.y=l[1]*e+l[5]*a+l[9]*r,this.z=l[2]*e+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,r=t.y,l=t.z,c=e.x,f=e.y,p=e.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Vd.copy(this).projectOnVector(t),this.sub(Vd)}reflect(t){return this.sub(Vd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const r=Math.sin(e)*t;return this.x=r*Math.sin(a),this.y=Math.cos(e)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vd=new it,Qv=new _u;class ue{constructor(t,e,a,r,l,c,f,p,h){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,c,f,p,h)}set(t,e,a,r,l,c,f,p,h){const m=this.elements;return m[0]=t,m[1]=r,m[2]=f,m[3]=e,m[4]=l,m[5]=p,m[6]=a,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,c=a[0],f=a[3],p=a[6],h=a[1],m=a[4],g=a[7],v=a[2],x=a[5],E=a[8],M=r[0],S=r[3],y=r[6],D=r[1],U=r[4],A=r[7],L=r[2],P=r[5],z=r[8];return l[0]=c*M+f*D+p*L,l[3]=c*S+f*U+p*P,l[6]=c*y+f*A+p*z,l[1]=h*M+m*D+g*L,l[4]=h*S+m*U+g*P,l[7]=h*y+m*A+g*z,l[2]=v*M+x*D+E*L,l[5]=v*S+x*U+E*P,l[8]=v*y+x*A+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],m=t[8];return e*c*m-e*f*h-a*l*m+a*f*p+r*l*h-r*c*p}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],m=t[8],g=m*c-f*h,v=f*p-m*l,x=h*l-c*p,E=e*g+a*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(r*h-m*a)*M,t[2]=(f*a-r*c)*M,t[3]=v*M,t[4]=(m*e-r*p)*M,t[5]=(r*l-f*e)*M,t[6]=x*M,t[7]=(a*p-h*e)*M,t[8]=(c*e-a*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,r,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(a*p,a*h,-a*(p*c+h*f)+c+t,-r*h,r*p,-r*(-h*c+p*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(kd.makeScale(t,e)),this}rotate(t){return this.premultiply(kd.makeRotation(-t)),this}translate(t,e){return this.premultiply(kd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<9;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new ue;function Ry(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ru(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ZT(){const o=ru("canvas");return o.style.display="block",o}const Jv={};function su(o){o in Jv||(Jv[o]=!0,console.warn(o))}function KT(o,t,e){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:a()}}setTimeout(l,e)})}const $v=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tx=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QT(){const o={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ie&&(r.r=Ga(r.r),r.g=Ga(r.g),r.b=Ga(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ie&&(r.r=Ao(r.r),r.g=Ao(r.g),r.b=Ao(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?mf:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return su("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return su("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Oo]:{primaries:t,whitePoint:a,transfer:mf,toXYZ:$v,fromXYZ:tx,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:$v,fromXYZ:tx,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),o}const ye=QT();function Ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ao;class JT{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ao===void 0&&(ao=ru("canvas")),ao.width=t.width,ao.height=t.height;const r=ao.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=ao}return a.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ru("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=Ga(l[c]/255)*255;return a.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(Ga(e[a]/255)*255):e[a]=Ga(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $T=0;class Gm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=mu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(Xd(r[c].image)):l.push(Xd(r[c]))}else l=Xd(r);a.url=l}return e||(t.images[this.uuid]=a),a}}function Xd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t1=0;const Wd=new it;class Kn extends Go{constructor(t=Kn.DEFAULT_IMAGE,e=Kn.DEFAULT_MAPPING,a=cs,r=cs,l=ua,c=fs,f=Ki,p=ha,h=Kn.DEFAULT_ANISOTROPY,m=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=mu(),this.name="",this.source=new Gm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pf:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case Bp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pf:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case Bp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=gy;Kn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,e=0,a=0,r=1){rn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,r){return this.x=t,this.y=e,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*e+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*e+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*e+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,r,l;const p=t.elements,h=p[0],m=p[4],g=p[8],v=p[1],x=p[5],E=p[9],M=p[2],S=p[6],y=p[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const U=(h+1)/2,A=(x+1)/2,L=(y+1)/2,P=(m+v)/4,z=(g+M)/4,F=(E+S)/4;return U>A&&U>L?U<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(U),r=P/a,l=z/a):A>L?A<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(A),a=P/r,l=F/r):L<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(L),a=z/l,r=F/l),this.set(a,r,l,e),this}let D=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-E)/D,this.y=(g-M)/D,this.z=(v-m)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends Go{constructor(t=1,e=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=a.depth,this.scissor=new rn(0,0,t,e),this.scissorTest=!1,this.viewport=new rn(0,0,t,e);const r={width:t,height:e,depth:a.depth},l=new Kn(r);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const e={minFilter:ua,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,a=t.textures.length;e<a;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Gm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends e1{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}}class wy extends Kn{constructor(t=null,e=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends Kn{constructor(t=null,e=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,qi):qi.fromBufferAttribute(l,c),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Cc.copy(a.boundingBox)),Cc.applyMatrix4(t.matrixWorld),this.union(Cc)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),Dc.subVectors(this.max,Hl),ro.subVectors(t.a,Hl),so.subVectors(t.b,Hl),oo.subVectors(t.c,Hl),_r.subVectors(so,ro),gr.subVectors(oo,so),Qr.subVectors(ro,oo);let e=[0,-_r.z,_r.y,0,-gr.z,gr.y,0,-Qr.z,Qr.y,_r.z,0,-_r.x,gr.z,0,-gr.x,Qr.z,0,-Qr.x,-_r.y,_r.x,0,-gr.y,gr.x,0,-Qr.y,Qr.x,0];return!qd(e,ro,so,oo,Dc)||(e=[1,0,0,0,1,0,0,0,1],!qd(e,ro,so,oo,Dc))?!1:(Uc.crossVectors(_r,gr),e=[Uc.x,Uc.y,Uc.z],qd(e,ro,so,oo,Dc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new it,new it,new it,new it,new it,new it,new it,new it],qi=new it,Cc=new xs,ro=new it,so=new it,oo=new it,_r=new it,gr=new it,Qr=new it,Hl=new it,Dc=new it,Uc=new it,Jr=new it;function qd(o,t,e,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){Jr.fromArray(o,l);const f=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),p=t.dot(Jr),h=e.dot(Jr),m=a.dot(Jr);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const i1=new xs,Gl=new it,Yd=new it;class gu{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):i1.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const e=Gl.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),r=(a-this.radius)*.5;this.center.addScaledVector(Gl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(Yd)),this.expandByPoint(Gl.copy(t.center).sub(Yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ua=new it,jd=new it,Lc=new it,vr=new it,Zd=new it,Oc=new it,Kd=new it;class Vm{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ua.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,e),Ua.distanceToSquared(t))}distanceSqToSegment(t,e,a,r){jd.copy(t).add(e).multiplyScalar(.5),Lc.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(jd);const l=t.distanceTo(e)*.5,c=-this.direction.dot(Lc),f=vr.dot(this.direction),p=-vr.dot(Lc),h=vr.lengthSq(),m=Math.abs(1-c*c);let g,v,x,E;if(m>0)if(g=c*p-f,v=c*f-p,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,x=g*(g+c*v+2*f)+v*(c*g+v+2*p)+h}else v=l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+h;else v=-l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+h;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),x=-g*g+v*(v+2*p)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-p),l),x=v*(v+2*p)+h):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),x=-g*g+v*(v+2*p)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(jd).addScaledVector(Lc,v),x}intersectSphere(t,e){Ua.subVectors(t.center,this.origin);const a=Ua.dot(this.direction),r=Ua.dot(Ua)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,r,l,c,f,p;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(a=(t.min.x-v.x)*h,r=(t.max.x-v.x)*h):(a=(t.max.x-v.x)*h,r=(t.min.x-v.x)*h),m>=0?(l=(t.min.y-v.y)*m,c=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,c=(t.min.y-v.y)*m),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,e)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,e,a,r,l){Zd.subVectors(e,t),Oc.subVectors(a,t),Kd.crossVectors(Zd,Oc);let c=this.direction.dot(Kd),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;vr.subVectors(this.origin,t);const p=f*this.direction.dot(Oc.crossVectors(vr,Oc));if(p<0)return null;const h=f*this.direction.dot(Zd.cross(vr));if(h<0||p+h>c)return null;const m=-f*vr.dot(Kd);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,e,a,r,l,c,f,p,h,m,g,v,x,E,M,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,c,f,p,h,m,g,v,x,E,M,S)}set(t,e,a,r,l,c,f,p,h,m,g,v,x,E,M,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=a,y[12]=r,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,a=t.elements,r=1/lo.setFromMatrixColumn(t,0).length(),l=1/lo.setFromMatrixColumn(t,1).length(),c=1/lo.setFromMatrixColumn(t,2).length();return e[0]=a[0]*r,e[1]=a[1]*r,e[2]=a[2]*r,e[3]=0,e[4]=a[4]*l,e[5]=a[5]*l,e[6]=a[6]*l,e[7]=0,e[8]=a[8]*c,e[9]=a[9]*c,e[10]=a[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*m,x=c*g,E=f*m,M=f*g;e[0]=p*m,e[4]=-p*g,e[8]=h,e[1]=x+E*h,e[5]=v-M*h,e[9]=-f*p,e[2]=M-v*h,e[6]=E+x*h,e[10]=c*p}else if(t.order==="YXZ"){const v=p*m,x=p*g,E=h*m,M=h*g;e[0]=v+M*f,e[4]=E*f-x,e[8]=c*h,e[1]=c*g,e[5]=c*m,e[9]=-f,e[2]=x*f-E,e[6]=M+v*f,e[10]=c*p}else if(t.order==="ZXY"){const v=p*m,x=p*g,E=h*m,M=h*g;e[0]=v-M*f,e[4]=-c*g,e[8]=E+x*f,e[1]=x+E*f,e[5]=c*m,e[9]=M-v*f,e[2]=-c*h,e[6]=f,e[10]=c*p}else if(t.order==="ZYX"){const v=c*m,x=c*g,E=f*m,M=f*g;e[0]=p*m,e[4]=E*h-x,e[8]=v*h+M,e[1]=p*g,e[5]=M*h+v,e[9]=x*h-E,e[2]=-h,e[6]=f*p,e[10]=c*p}else if(t.order==="YZX"){const v=c*p,x=c*h,E=f*p,M=f*h;e[0]=p*m,e[4]=M-v*g,e[8]=E*g+x,e[1]=g,e[5]=c*m,e[9]=-f*m,e[2]=-h*m,e[6]=x*g+E,e[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,x=c*h,E=f*p,M=f*h;e[0]=p*m,e[4]=-g,e[8]=h*m,e[1]=v*g+M,e[5]=c*m,e[9]=x*g-E,e[2]=E*g-x,e[6]=f*m,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a1,t,r1)}lookAt(t,e,a){const r=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),xr.crossVectors(a,gi),xr.lengthSq()===0&&(Math.abs(a.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),xr.crossVectors(a,gi)),xr.normalize(),Nc.crossVectors(gi,xr),r[0]=xr.x,r[4]=Nc.x,r[8]=gi.x,r[1]=xr.y,r[5]=Nc.y,r[9]=gi.y,r[2]=xr.z,r[6]=Nc.z,r[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,c=a[0],f=a[4],p=a[8],h=a[12],m=a[1],g=a[5],v=a[9],x=a[13],E=a[2],M=a[6],S=a[10],y=a[14],D=a[3],U=a[7],A=a[11],L=a[15],P=r[0],z=r[4],F=r[8],b=r[12],O=r[1],V=r[5],j=r[9],et=r[13],ft=r[2],rt=r[6],B=r[10],k=r[14],X=r[3],ut=r[7],N=r[11],K=r[15];return l[0]=c*P+f*O+p*ft+h*X,l[4]=c*z+f*V+p*rt+h*ut,l[8]=c*F+f*j+p*B+h*N,l[12]=c*b+f*et+p*k+h*K,l[1]=m*P+g*O+v*ft+x*X,l[5]=m*z+g*V+v*rt+x*ut,l[9]=m*F+g*j+v*B+x*N,l[13]=m*b+g*et+v*k+x*K,l[2]=E*P+M*O+S*ft+y*X,l[6]=E*z+M*V+S*rt+y*ut,l[10]=E*F+M*j+S*B+y*N,l[14]=E*b+M*et+S*k+y*K,l[3]=D*P+U*O+A*ft+L*X,l[7]=D*z+U*V+A*rt+L*ut,l[11]=D*F+U*j+A*B+L*N,l[15]=D*b+U*et+A*k+L*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],p=t[9],h=t[13],m=t[2],g=t[6],v=t[10],x=t[14],E=t[3],M=t[7],S=t[11],y=t[15];return E*(+l*p*g-r*h*g-l*f*v+a*h*v+r*f*x-a*p*x)+M*(+e*p*x-e*h*v+l*c*v-r*c*x+r*h*m-l*p*m)+S*(+e*h*g-e*f*x-l*c*g+a*c*x+l*f*m-a*h*m)+y*(-r*f*m-e*p*g+e*f*v+r*c*g-a*c*v+a*p*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],m=t[8],g=t[9],v=t[10],x=t[11],E=t[12],M=t[13],S=t[14],y=t[15],D=g*S*h-M*v*h+M*p*x-f*S*x-g*p*y+f*v*y,U=E*v*h-m*S*h-E*p*x+c*S*x+m*p*y-c*v*y,A=m*M*h-E*g*h+E*f*x-c*M*x-m*f*y+c*g*y,L=E*g*p-m*M*p-E*f*v+c*M*v+m*f*S-c*g*S,P=e*D+a*U+r*A+l*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return t[0]=D*z,t[1]=(M*v*l-g*S*l-M*r*x+a*S*x+g*r*y-a*v*y)*z,t[2]=(f*S*l-M*p*l+M*r*h-a*S*h-f*r*y+a*p*y)*z,t[3]=(g*p*l-f*v*l-g*r*h+a*v*h+f*r*x-a*p*x)*z,t[4]=U*z,t[5]=(m*S*l-E*v*l+E*r*x-e*S*x-m*r*y+e*v*y)*z,t[6]=(E*p*l-c*S*l-E*r*h+e*S*h+c*r*y-e*p*y)*z,t[7]=(c*v*l-m*p*l+m*r*h-e*v*h-c*r*x+e*p*x)*z,t[8]=A*z,t[9]=(E*g*l-m*M*l-E*a*x+e*M*x+m*a*y-e*g*y)*z,t[10]=(c*M*l-E*f*l+E*a*h-e*M*h-c*a*y+e*f*y)*z,t[11]=(m*f*l-c*g*l-m*a*h+e*g*h+c*a*x-e*f*x)*z,t[12]=L*z,t[13]=(m*M*r-E*g*r+E*a*v-e*M*v-m*a*S+e*g*S)*z,t[14]=(E*f*r-c*M*r-E*a*p+e*M*p+c*a*S-e*f*S)*z,t[15]=(c*g*r-m*f*r+m*a*p-e*g*p-c*a*v+e*f*v)*z,this}scale(t){const e=this.elements,a=t.x,r=t.y,l=t.z;return e[0]*=a,e[4]*=r,e[8]*=l,e[1]*=a,e[5]*=r,e[9]*=l,e[2]*=a,e[6]*=r,e[10]*=l,e[3]*=a,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,r))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),r=Math.sin(e),l=1-a,c=t.x,f=t.y,p=t.z,h=l*c,m=l*f;return this.set(h*c+a,h*f-r*p,h*p+r*f,0,h*f+r*p,m*f+a,m*p-r*c,0,h*p-r*f,m*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,a){const r=this.elements,l=e._x,c=e._y,f=e._z,p=e._w,h=l+l,m=c+c,g=f+f,v=l*h,x=l*m,E=l*g,M=c*m,S=c*g,y=f*g,D=p*h,U=p*m,A=p*g,L=a.x,P=a.y,z=a.z;return r[0]=(1-(M+y))*L,r[1]=(x+A)*L,r[2]=(E-U)*L,r[3]=0,r[4]=(x-A)*P,r[5]=(1-(v+y))*P,r[6]=(S+D)*P,r[7]=0,r[8]=(E+U)*z,r[9]=(S-D)*z,r[10]=(1-(v+M))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,a){const r=this.elements;let l=lo.set(r[0],r[1],r[2]).length();const c=lo.set(r[4],r[5],r[6]).length(),f=lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Yi.copy(this);const h=1/l,m=1/c,g=1/f;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=m,Yi.elements[5]*=m,Yi.elements[6]*=m,Yi.elements[8]*=g,Yi.elements[9]*=g,Yi.elements[10]*=g,e.setFromRotationMatrix(Yi),a.x=l,a.y=c,a.z=f,this}makePerspective(t,e,a,r,l,c,f=ca,p=!1){const h=this.elements,m=2*l/(e-t),g=2*l/(a-r),v=(e+t)/(e-t),x=(a+r)/(a-r);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===ca)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===_f)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,a,r,l,c,f=ca,p=!1){const h=this.elements,m=2/(e-t),g=2/(a-r),v=-(e+t)/(e-t),x=-(a+r)/(a-r);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===ca)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===_f)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<16;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}}const lo=new it,Yi=new $e,a1=new it(0,0,0),r1=new it(1,1,1),xr=new it,Nc=new it,gi=new it,ex=new $e,nx=new _u;class Ji{constructor(t=0,e=0,a=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,r=this._order){return this._x=t,this._y=e,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],p=r[1],h=r[5],m=r[9],g=r[2],v=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return ex.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ex,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nx.setFromEuler(this),this.setFromQuaternion(nx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Cy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s1=0;const ix=new it,uo=new _u,La=new $e,Pc=new it,Vl=new it,o1=new it,l1=new _u,ax=new it(1,0,0),rx=new it(0,1,0),sx=new it(0,0,1),ox={type:"added"},u1={type:"removed"},co={type:"childadded",child:null},Qd={type:"childremoved",child:null};class wn extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=mu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new it,e=new Ji,a=new _u,r=new it(1,1,1);function l(){a.setFromEuler(e,!1)}function c(){e.setFromQuaternion(a,void 0,!1)}e._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new ue}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return uo.setFromAxisAngle(t,e),this.quaternion.multiply(uo),this}rotateOnWorldAxis(t,e){return uo.setFromAxisAngle(t,e),this.quaternion.premultiply(uo),this}rotateX(t){return this.rotateOnAxis(ax,t)}rotateY(t){return this.rotateOnAxis(rx,t)}rotateZ(t){return this.rotateOnAxis(sx,t)}translateOnAxis(t,e){return ix.copy(t).applyQuaternion(this.quaternion),this.position.add(ix.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ax,t)}translateY(t){return this.translateOnAxis(rx,t)}translateZ(t){return this.translateOnAxis(sx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?Pc.copy(t):Pc.set(t,e,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(Vl,Pc,this.up):La.lookAt(Pc,Vl,this.up),this.quaternion.setFromRotationMatrix(La),r&&(La.extractRotation(r.matrixWorld),uo.setFromRotationMatrix(La),this.quaternion.premultiply(uo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ox),co.child=t,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u1),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ox),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,o1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,l1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const g=p[h];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(e){const f=c(t.geometries),p=c(t.materials),h=c(t.textures),m=c(t.images),g=c(t.shapes),v=c(t.skeletons),x=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=r,a;function c(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}wn.DEFAULT_UP=new it(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new it,Oa=new it,Jd=new it,Na=new it,fo=new it,ho=new it,lx=new it,$d=new it,tp=new it,ep=new it,np=new rn,ip=new rn,ap=new rn;class Zi{constructor(t=new it,e=new it,a=new it){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,r){r.subVectors(a,e),ji.subVectors(t,e),r.cross(ji);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,a,r,l){ji.subVectors(r,e),Oa.subVectors(a,e),Jd.subVectors(t,e);const c=ji.dot(ji),f=ji.dot(Oa),p=ji.dot(Jd),h=Oa.dot(Oa),m=Oa.dot(Jd),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-x-E,E,x)}static containsPoint(t,e,a,r){return this.getBarycoord(t,e,a,r,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,e,a,r,l,c,f,p){return this.getBarycoord(t,e,a,r,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Na.x),p.addScaledVector(c,Na.y),p.addScaledVector(f,Na.z),p)}static getInterpolatedAttribute(t,e,a,r,l,c){return np.setScalar(0),ip.setScalar(0),ap.setScalar(0),np.fromBufferAttribute(t,e),ip.fromBufferAttribute(t,a),ap.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(np,l.x),c.addScaledVector(ip,l.y),c.addScaledVector(ap,l.z),c}static isFrontFacing(t,e,a,r){return ji.subVectors(a,e),Oa.subVectors(t,e),ji.cross(Oa).dot(r)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,r){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,a,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),ji.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,r,l){return Zi.getInterpolation(t,this.a,this.b,this.c,e,a,r,l)}containsPoint(t){return Zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const a=this.a,r=this.b,l=this.c;let c,f;fo.subVectors(r,a),ho.subVectors(l,a),$d.subVectors(t,a);const p=fo.dot($d),h=ho.dot($d);if(p<=0&&h<=0)return e.copy(a);tp.subVectors(t,r);const m=fo.dot(tp),g=ho.dot(tp);if(m>=0&&g<=m)return e.copy(r);const v=p*g-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),e.copy(a).addScaledVector(fo,c);ep.subVectors(t,l);const x=fo.dot(ep),E=ho.dot(ep);if(E>=0&&x<=E)return e.copy(l);const M=x*h-p*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),e.copy(a).addScaledVector(ho,f);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return lx.subVectors(l,r),f=(g-m)/(g-m+(x-E)),e.copy(r).addScaledVector(lx,f);const y=1/(S+M+v);return c=M*y,f=v*y,e.copy(a).addScaledVector(fo,c).addScaledVector(ho,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},zc={h:0,s:0,l:0};function rp(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class ce{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,a,r=ye.workingColorSpace){return this.r=t,this.g=e,this.b=a,ye.colorSpaceToWorking(this,r),this}setHSL(t,e,a,r=ye.workingColorSpace){if(t=jT(t,1),e=Se(e,0,1),a=Se(a,0,1),e===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+e):a+e-a*e,c=2*a-l;this.r=rp(c,l,t+1/3),this.g=rp(c,l,t),this.b=rp(c,l,t-1/3)}return ye.colorSpaceToWorking(this,r),this}setStyle(t,e=Nn){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){const a=Dy[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return ye.workingToColorSpace(Gn.copy(this),t),Math.round(Se(Gn.r*255,0,255))*65536+Math.round(Se(Gn.g*255,0,255))*256+Math.round(Se(Gn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(Gn.copy(this),e);const a=Gn.r,r=Gn.g,l=Gn.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,h;const m=(f+c)/2;if(f===c)p=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case a:p=(r-l)/g+(r<l?6:0);break;case r:p=(l-a)/g+2;break;case l:p=(a-r)/g+4;break}p/=6}return t.h=p,t.s=h,t.l=m,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Nn){ye.workingToColorSpace(Gn.copy(this),t);const e=Gn.r,a=Gn.g,r=Gn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,e,a){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+e,yr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(yr),t.getHSL(zc);const a=Gd(yr.h,zc.h,e),r=Gd(yr.s,zc.s,e),l=Gd(yr.l,zc.l,e);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*a+l[6]*r,this.g=l[1]*e+l[4]*a+l[7]*r,this.b=l[2]*e+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new ce;ce.NAMES=Dy;let c1=0;class da extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=mu(),this.name="",this.type="Material",this.blending=bo,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rp,this.blendDst=wp,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(a.blending=this.blending),this.side!==Va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Rp&&(a.blendSrc=this.blendSrc),this.blendDst!==wp&&(a.blendDst=this.blendDst),this.blendEquation!==ls&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(a.stencilFail=this.stencilFail),this.stencilZFail!==io&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(e){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const r=e.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=e[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Uy extends da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new it,Ic=new Te;let f1=0;class Mi{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=Zv,this.updateRanges=[],this.gpuType=Ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)Ic.fromBufferAttribute(this,e),Ic.applyMatrix3(t),this.setXY(e,Ic.x,Ic.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=Fl(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=ni(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fl(e,this.array)),e}setX(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fl(e,this.array)),e}setY(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fl(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fl(e,this.array)),e}setW(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),a=ni(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,r){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),a=ni(a,this.array),r=ni(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,e,a,r,l){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),a=ni(a,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zv&&(t.usage=this.usage),t}}class Ly extends Mi{constructor(t,e,a){super(new Uint16Array(t),e,a)}}class Oy extends Mi{constructor(t,e,a){super(new Uint32Array(t),e,a)}}class jn extends Mi{constructor(t,e,a){super(new Float32Array(t),e,a)}}let h1=0;const Ni=new $e,sp=new wn,po=new it,vi=new xs,kl=new xs,Rn=new it;class Ti extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=mu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ry(t)?Oy:Ly)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ue().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,e,a){return Ni.makeTranslation(t,e,a),this.applyMatrix4(Ni),this}scale(t,e,a){return Ni.makeScale(t,e,a),this.applyMatrix4(Ni),this}lookAt(t){return sp.lookAt(t),sp.updateMatrix(),this.applyMatrix4(sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jn(a,3))}else{const a=Math.min(t.length,e.count);for(let r=0;r<a;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const l=e[a];vi.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const a=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];kl.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(vi.min,kl.min),vi.expandByPoint(Rn),Rn.addVectors(vi.max,kl.max),vi.expandByPoint(Rn)):(vi.expandByPoint(kl.min),vi.expandByPoint(kl.max))}vi.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)Rn.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(Rn));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Rn.fromBufferAttribute(f,h),p&&(po.fromBufferAttribute(t,h),Rn.add(po)),r=Math.max(r,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let F=0;F<a.count;F++)f[F]=new it,p[F]=new it;const h=new it,m=new it,g=new it,v=new Te,x=new Te,E=new Te,M=new it,S=new it;function y(F,b,O){h.fromBufferAttribute(a,F),m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,O),v.fromBufferAttribute(l,F),x.fromBufferAttribute(l,b),E.fromBufferAttribute(l,O),m.sub(h),g.sub(h),x.sub(v),E.sub(v);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(V),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(V),f[F].add(M),f[b].add(M),f[O].add(M),p[F].add(S),p[b].add(S),p[O].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let F=0,b=D.length;F<b;++F){const O=D[F],V=O.start,j=O.count;for(let et=V,ft=V+j;et<ft;et+=3)y(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new it,A=new it,L=new it,P=new it;function z(F){L.fromBufferAttribute(r,F),P.copy(L);const b=f[F];U.copy(b),U.sub(L.multiplyScalar(L.dot(b))).normalize(),A.crossVectors(P,b);const V=A.dot(p[F])<0?-1:1;c.setXYZW(F,U.x,U.y,U.z,V)}for(let F=0,b=D.length;F<b;++F){const O=D[F],V=O.start,j=O.count;for(let et=V,ft=V+j;et<ft;et+=3)z(t.getX(et+0)),z(t.getX(et+1)),z(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new it,l=new it,c=new it,f=new it,p=new it,h=new it,m=new it,g=new it;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),c.fromBufferAttribute(e,S),m.subVectors(c,l),g.subVectors(r,l),m.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),h.fromBufferAttribute(a,S),f.add(m),p.add(m),h.add(m),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=e.count;v<x;v+=3)r.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),m.subVectors(c,l),g.subVectors(r,l),m.cross(g),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)Rn.fromBufferAttribute(t,e),Rn.normalize(),t.setXYZ(e,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,p){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(p.length*m);let x=0,E=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?x=p[M]*f.data.stride+f.offset:x=p[M]*m;for(let y=0;y<m;y++)v[E++]=h[x++]}return new Mi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ti,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=t(p,a);e.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],x=t(v,a);p.push(x)}e.morphAttributes[f]=p}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const p in a){const h=a[p];t.data.attributes[p]=h.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];m.push(x.toJSON(t.data))}m.length>0&&(r[p]=m,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(e))}const l=t.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ux=new $e,$r=new Vm,Bc=new gu,cx=new it,Fc=new it,Hc=new it,Gc=new it,op=new it,Vc=new it,fx=new it,kc=new it;class ii extends wn{constructor(t=new Ti,e=new Uy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;e.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Vc.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],g=l[p];m!==0&&(op.fromBufferAttribute(g,t),c?Vc.addScaledVector(op,m):Vc.addScaledVector(op.sub(e),m))}e.add(Vc)}return e}raycast(t,e){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(l),$r.copy(t.ray).recast(t.near),!(Bc.containsPoint($r.origin)===!1&&($r.intersectSphere(Bc,cx)===null||$r.origin.distanceToSquared(cx)>(t.far-t.near)**2))&&(ux.copy(l).invert(),$r.copy(t.ray).applyMatrix4(ux),!(a.boundingBox!==null&&$r.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,$r)))}_computeIntersections(t,e,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=c[S.materialIndex],D=Math.max(S.start,x.start),U=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,L=U;A<L;A+=3){const P=f.getX(A),z=f.getX(A+1),F=f.getX(A+2);r=Xc(this,y,t,a,h,m,g,P,z,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const D=f.getX(S),U=f.getX(S+1),A=f.getX(S+2);r=Xc(this,c,t,a,h,m,g,D,U,A),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=c[S.materialIndex],D=Math.max(S.start,x.start),U=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let A=D,L=U;A<L;A+=3){const P=A,z=A+1,F=A+2;r=Xc(this,y,t,a,h,m,g,P,z,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(p.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const D=S,U=S+1,A=S+2;r=Xc(this,c,t,a,h,m,g,D,U,A),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}}function d1(o,t,e,a,r,l,c,f){let p;if(t.side===ai?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,t.side===Va,f),p===null)return null;kc.copy(f),kc.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(kc);return h<e.near||h>e.far?null:{distance:h,point:kc.clone(),object:o}}function Xc(o,t,e,a,r,l,c,f,p,h){o.getVertexPosition(f,Fc),o.getVertexPosition(p,Hc),o.getVertexPosition(h,Gc);const m=d1(o,t,e,a,Fc,Hc,Gc,fx);if(m){const g=new it;Zi.getBarycoord(fx,Fc,Hc,Gc,g),r&&(m.uv=Zi.getInterpolatedAttribute(r,f,p,h,g,new Te)),l&&(m.uv1=Zi.getInterpolatedAttribute(l,f,p,h,g,new Te)),c&&(m.normal=Zi.getInterpolatedAttribute(c,f,p,h,g,new it),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new it,materialIndex:0};Zi.getNormal(Fc,Hc,Gc,v.normal),m.face=v,m.barycoord=g}return m}class wr extends Ti{constructor(t=1,e=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],m=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,a,e,t,c,l,0),E("z","y","x",1,-1,a,e,-t,c,l,1),E("x","z","y",1,1,t,a,e,r,c,2),E("x","z","y",1,-1,t,a,-e,r,c,3),E("x","y","z",1,-1,t,e,a,r,l,4),E("x","y","z",-1,-1,t,e,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(m,3)),this.setAttribute("uv",new jn(g,2));function E(M,S,y,D,U,A,L,P,z,F,b){const O=A/z,V=L/F,j=A/2,et=L/2,ft=P/2,rt=z+1,B=F+1;let k=0,X=0;const ut=new it;for(let N=0;N<B;N++){const K=N*V-et;for(let pt=0;pt<rt;pt++){const yt=pt*O-j;ut[M]=yt*D,ut[S]=K*U,ut[y]=ft,h.push(ut.x,ut.y,ut.z),ut[M]=0,ut[S]=0,ut[y]=P>0?1:-1,m.push(ut.x,ut.y,ut.z),g.push(pt/z),g.push(1-N/F),k+=1}}for(let N=0;N<F;N++)for(let K=0;K<z;K++){const pt=v+K+rt*N,yt=v+K+rt*(N+1),St=v+(K+1)+rt*(N+1),Ct=v+(K+1)+rt*N;p.push(pt,yt,Ct),p.push(yt,St,Ct),X+=6}f.addGroup(x,X,b),x+=X,v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function No(o){const t={};for(const e in o){t[e]={};for(const a in o[e]){const r=o[e][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=r.clone():Array.isArray(r)?t[e][a]=r.slice():t[e][a]=r}}return t}function Yn(o){const t={};for(let e=0;e<o.length;e++){const a=No(o[e]);for(const r in a)t[r]=a[r]}return t}function p1(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Ny(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const m1={clone:No,merge:Yn};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=No(t.uniforms),this.uniformsGroups=p1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}class Py extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new it,hx=new Te,dx=new Te;class Ii extends Py{constructor(t=50,e=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dm*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dm*2*Math.atan(Math.tan(Hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z)}getViewSize(t,e){return this.getViewBounds(t,hx,dx),e.subVectors(dx,hx)}setViewOffset(t,e,a,r,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hd*.5*this.fov)/this.zoom,a=2*e,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*r/p,e-=c.offsetY*a/h,r*=c.width/p,a*=c.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mo=-90,_o=1;class v1 extends wn{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ii(mo,_o,t,e);r.layers=this.layers,this.add(r);const l=new Ii(mo,_o,t,e);l.layers=this.layers,this.add(l);const c=new Ii(mo,_o,t,e);c.layers=this.layers,this.add(c);const f=new Ii(mo,_o,t,e);f.layers=this.layers,this.add(f);const p=new Ii(mo,_o,t,e);p.layers=this.layers,this.add(p);const h=new Ii(mo,_o,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[a,r,l,c,f,p]=e;for(const h of e)this.remove(h);if(t===ca)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===_f)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(e,l),t.setRenderTarget(a,1,r),t.render(e,c),t.setRenderTarget(a,2,r),t.render(e,f),t.setRenderTarget(a,3,r),t.render(e,p),t.setRenderTarget(a,4,r),t.render(e,h),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,r),t.render(e,m),t.setRenderTarget(g,v,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class zy extends Kn{constructor(t=[],e=Uo,a,r,l,c,f,p,h,m){super(t,e,a,r,l,c,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class x1 extends vs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new zy(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),l=new ka({name:"CubemapFromEquirect",uniforms:No(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ai,blending:Ar});l.uniforms.tEquirect.value=e;const c=new ii(r,l),f=e.minFilter;return e.minFilter===fs&&(e.minFilter=ua),new v1(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,a,r);t.setRenderTarget(l)}}class yo extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y1={type:"move"};class lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const M of t.hand.values()){const S=e.getJointPose(M,a),y=this._getHandJoint(h,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=e.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const a=new yo;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}}class S1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const up=new it,M1=new it,E1=new ue;class rs{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,r){return this.normal.set(t,e,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const r=up.subVectors(a,e).cross(M1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(up),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||E1.getNormalMatrix(t),r=this.coplanarPoint(up).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new gu,T1=new Te(.5,.5),Wc=new it;class km{constructor(t=new rs,e=new rs,a=new rs,r=new rs,l=new rs,c=new rs){this.planes=[t,e,a,r,l,c]}set(t,e,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=ca,a=!1){const r=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],h=l[3],m=l[4],g=l[5],v=l[6],x=l[7],E=l[8],M=l[9],S=l[10],y=l[11],D=l[12],U=l[13],A=l[14],L=l[15];if(r[0].setComponents(h-c,x-m,y-E,L-D).normalize(),r[1].setComponents(h+c,x+m,y+E,L+D).normalize(),r[2].setComponents(h+f,x+g,y+M,L+U).normalize(),r[3].setComponents(h-f,x-g,y-M,L-U).normalize(),a)r[4].setComponents(p,v,S,A).normalize(),r[5].setComponents(h-p,x-v,y-S,L-A).normalize();else if(r[4].setComponents(h-p,x-v,y-S,L-A).normalize(),e===ca)r[5].setComponents(h+p,x+v,y+S,L+A).normalize();else if(e===_f)r[5].setComponents(p,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=T1.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const r=e[a];if(Wc.x=r.normal.x>0?t.max.x:t.min.x,Wc.y=r.normal.y>0?t.max.y:t.min.y,Wc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class of extends da{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gf=new it,vf=new it,px=new $e,Xl=new Vm,qc=new gu,cp=new it,mx=new it;class b1 extends wn{constructor(t=new Ti,e=new of){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[0];for(let r=1,l=e.count;r<l;r++)gf.fromBufferAttribute(e,r-1),vf.fromBufferAttribute(e,r),a[r]=a[r-1],a[r]+=gf.distanceTo(vf);t.setAttribute("lineDistance",new jn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(r),qc.radius+=l,t.ray.intersectsSphere(qc)===!1)return;px.copy(r).invert(),Xl.copy(t.ray).applyMatrix4(px);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,m=a.index,v=a.attributes.position;if(m!==null){const x=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let M=x,S=E-1;M<S;M+=h){const y=m.getX(M),D=m.getX(M+1),U=Yc(this,t,Xl,p,y,D,M);U&&e.push(U)}if(this.isLineLoop){const M=m.getX(E-1),S=m.getX(x),y=Yc(this,t,Xl,p,M,S,E-1);y&&e.push(y)}}else{const x=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let M=x,S=E-1;M<S;M+=h){const y=Yc(this,t,Xl,p,M,M+1,M);y&&e.push(y)}if(this.isLineLoop){const M=Yc(this,t,Xl,p,E-1,x,E-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Yc(o,t,e,a,r,l,c){const f=o.geometry.attributes.position;if(gf.fromBufferAttribute(f,r),vf.fromBufferAttribute(f,l),e.distanceSqToSegment(gf,vf,cp,mx)>a)return;cp.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(cp);if(!(h<t.near||h>t.far))return{distance:h,point:mx.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const _x=new it,gx=new it;class vx extends b1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[];for(let r=0,l=e.count;r<l;r+=2)_x.fromBufferAttribute(e,r),gx.fromBufferAttribute(e,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+_x.distanceTo(gx);t.setAttribute("lineDistance",new jn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class So extends da{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xx=new $e,pm=new Vm,jc=new gu,Zc=new it;class Zl extends wn{constructor(t=new Ti,e=new So){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),jc.copy(a.boundingSphere),jc.applyMatrix4(r),jc.radius+=l,t.ray.intersectsSphere(jc)===!1)return;xx.copy(r).invert(),pm.copy(t.ray).applyMatrix4(xx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=a.index,g=a.attributes.position;if(h!==null){const v=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let E=v,M=x;E<M;E++){const S=h.getX(E);Zc.fromBufferAttribute(g,S),yx(Zc,S,p,r,t,e,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let E=v,M=x;E<M;E++)Zc.fromBufferAttribute(g,E),yx(Zc,E,p,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function yx(o,t,e,a,r,l,c){const f=pm.distanceSqToPoint(o);if(f<e){const p=new it;pm.closestPointToPoint(o,p),p.applyMatrix4(a);const h=r.ray.origin.distanceTo(p);if(h<r.near||h>r.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class Iy extends Kn{constructor(t,e,a=gs,r,l,c,f=Qi,p=Qi,h,m=iu,g=1){if(m!==iu&&m!==au)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:e,depth:g};super(v,r,l,c,f,p,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class By extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rf extends Ti{constructor(t=1,e=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:r};const l=t/2,c=e/2,f=Math.floor(a),p=Math.floor(r),h=f+1,m=p+1,g=t/f,v=e/p,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const D=y*v-c;for(let U=0;U<h;U++){const A=U*g-l;E.push(A,-D,0),M.push(0,0,1),S.push(U/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let D=0;D<f;D++){const U=D+h*y,A=D+h*(y+1),L=D+1+h*(y+1),P=D+1+h*y;x.push(U,A,P),x.push(A,L,P)}this.setIndex(x),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(M,3)),this.setAttribute("uv",new jn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rf(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kc extends da{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fy extends da{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hm,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class A1 extends da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R1 extends da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class w1{constructor(t,e,a){const r=this;let l=!1,c=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=a,this.abortController=new AbortController,this.itemStart=function(m){f++,l===!1&&r.onStart!==void 0&&r.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,r.onProgress!==void 0&&r.onProgress(m,c,f),c===f&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const x=h[g],E=h[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Hy=new w1;class Vo{constructor(t){this.manager=t!==void 0?t:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const a=this;return new Promise(function(r,l){a.load(t,r,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pa={};class C1 extends Error{constructor(t,e){super(t),this.response=e}}class Gy extends Vo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,a,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=Kl.get(`file:${t}`);if(l!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(l),this.manager.itemEnd(t)},0),l;if(Pa[t]!==void 0){Pa[t].push({onLoad:e,onProgress:a,onError:r});return}Pa[t]=[],Pa[t].push({onLoad:e,onProgress:a,onError:r});const c=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Pa[t],g=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=v?parseInt(v):0,E=x!==0;let M=0;const S=new ReadableStream({start(y){D();function D(){g.read().then(({done:U,value:A})=>{if(U)y.close();else{M+=A.byteLength;const L=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:x});for(let P=0,z=m.length;P<z;P++){const F=m[P];F.onProgress&&F.onProgress(L)}y.enqueue(A),D()}},U=>{y.error(U)})}}});return new Response(S)}else throw new C1(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),v=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(v);return h.arrayBuffer().then(E=>x.decode(E))}}}).then(h=>{Kl.add(`file:${t}`,h);const m=Pa[t];delete Pa[t];for(let g=0,v=m.length;g<v;g++){const x=m[g];x.onLoad&&x.onLoad(h)}}).catch(h=>{const m=Pa[t];if(m===void 0)throw this.manager.itemError(t),h;delete Pa[t];for(let g=0,v=m.length;g<v;g++){const x=m[g];x.onError&&x.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const go=new WeakMap;class D1 extends Vo{constructor(t){super(t)}load(t,e,a,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,c=Kl.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(t),setTimeout(function(){e&&e(c),l.manager.itemEnd(t)},0);else{let g=go.get(c);g===void 0&&(g=[],go.set(c,g)),g.push({onLoad:e,onError:r})}return c}const f=ru("img");function p(){m(),e&&e(this);const g=go.get(this)||[];for(let v=0;v<g.length;v++){const x=g[v];x.onLoad&&x.onLoad(this)}go.delete(this),l.manager.itemEnd(t)}function h(g){m(),r&&r(g),Kl.remove(`image:${t}`);const v=go.get(this)||[];for(let x=0;x<v.length;x++){const E=v[x];E.onError&&E.onError(g)}go.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Kl.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class U1 extends Vo{constructor(t){super(t)}load(t,e,a,r){const l=new Kn,c=new D1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(f){l.image=f,l.needsUpdate=!0,e!==void 0&&e(l)},a,r),l}}class Vy extends wn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const fp=new $e,Sx=new it,Mx=new it;class L1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=ha,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new km,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;Sx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sx),Mx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mx),e.updateMatrixWorld(),fp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fp,e.coordinateSystem,e.reversedDepth),e.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(fp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ky extends Py{constructor(t=-1,e=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+e,p=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class O1 extends L1{constructor(){super(new ky(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N1 extends Vy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new O1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class P1 extends Vy{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class z1{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class I1 extends Ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class B1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ex(o,t,e,a){const r=F1(a);switch(e){case My:return o*t;case Ty:return o*t/r.components*r.byteLength;case Im:return o*t/r.components*r.byteLength;case by:return o*t*2/r.components*r.byteLength;case Bm:return o*t*2/r.components*r.byteLength;case Ey:return o*t*3/r.components*r.byteLength;case Ki:return o*t*4/r.components*r.byteLength;case Fm:return o*t*4/r.components*r.byteLength;case nf:case af:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rf:case sf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hp:case Vp:return Math.max(o,16)*Math.max(t,8)/4;case Fp:case Gp:return Math.max(o,8)*Math.max(t,8)/2;case kp:case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case jp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case $p:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case im:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case sm:case om:case lm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case um:case cm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case fm:case hm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function F1(o){switch(o){case ha:case vy:return{byteLength:1,components:1};case eu:case xy:case pu:return{byteLength:2,components:1};case Pm:case zm:return{byteLength:2,components:4};case gs:case Nm:case Ha:return{byteLength:4,components:1};case yy:case Sy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xy(){let o=null,t=!1,e=null,a=null;function r(l,c){e(l,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function H1(o){const t=new WeakMap;function e(f,p){const h=f.array,m=f.usage,g=h.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,h){const m=p.array,g=p.updateRanges;if(o.bindBuffer(h,f),g.length===0)o.bufferSubData(h,0,m);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];o.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,e(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:l,update:c}}var G1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
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
#endif`,j1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z1=`#ifdef USE_BATCHING
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
#endif`,K1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,eb=`#ifdef USE_BUMPMAP
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cb=`#define PI 3.141592653589793
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
} // validated`,fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hb=`vec3 transformedNormal = objectNormal;
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
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
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
}`,Cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
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
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
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
#endif`,Fb=`struct PhysicalMaterial {
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
}`,Hb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kb=`#if defined( USE_POINTS_UV )
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
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uA=`#ifdef USE_NORMALMAP
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
#endif`,cA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bA=`float getShadowMask() {
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
}`,AA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,wA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CA=`#ifdef USE_SKINNING
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
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,PA=`#ifdef USE_TRANSMISSION
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GA=`uniform sampler2D t2D;
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`#include <common>
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
}`,YA=`#if DEPTH_PACKING == 3200
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
}`,jA=`#define DISTANCE
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
}`,ZA=`#define DISTANCE
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
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JA=`uniform float scale;
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
}`,$A=`uniform vec3 diffuse;
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
}`,tR=`#include <common>
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
}`,eR=`uniform vec3 diffuse;
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
}`,nR=`#define LAMBERT
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
}`,iR=`#define LAMBERT
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
}`,aR=`#define MATCAP
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
}`,rR=`#define MATCAP
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
}`,sR=`#define NORMAL
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
}`,oR=`#define NORMAL
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
}`,lR=`#define PHONG
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
}`,uR=`#define PHONG
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
}`,cR=`#define STANDARD
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
}`,fR=`#define STANDARD
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
}`,hR=`#define TOON
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
}`,dR=`#define TOON
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
}`,pR=`uniform float size;
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
}`,mR=`uniform vec3 diffuse;
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
}`,_R=`#include <common>
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
}`,gR=`uniform vec3 color;
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
}`,vR=`uniform float rotation;
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
}`,xR=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:G1,alphahash_pars_fragment:V1,alphamap_fragment:k1,alphamap_pars_fragment:X1,alphatest_fragment:W1,alphatest_pars_fragment:q1,aomap_fragment:Y1,aomap_pars_fragment:j1,batching_pars_vertex:Z1,batching_vertex:K1,begin_vertex:Q1,beginnormal_vertex:J1,bsdfs:$1,iridescence_fragment:tb,bumpmap_pars_fragment:eb,clipping_planes_fragment:nb,clipping_planes_pars_fragment:ib,clipping_planes_pars_vertex:ab,clipping_planes_vertex:rb,color_fragment:sb,color_pars_fragment:ob,color_pars_vertex:lb,color_vertex:ub,common:cb,cube_uv_reflection_fragment:fb,defaultnormal_vertex:hb,displacementmap_pars_vertex:db,displacementmap_vertex:pb,emissivemap_fragment:mb,emissivemap_pars_fragment:_b,colorspace_fragment:gb,colorspace_pars_fragment:vb,envmap_fragment:xb,envmap_common_pars_fragment:yb,envmap_pars_fragment:Sb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Ob,envmap_vertex:Eb,fog_vertex:Tb,fog_pars_vertex:bb,fog_fragment:Ab,fog_pars_fragment:Rb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Cb,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Ub,lights_pars_begin:Lb,lights_toon_fragment:Nb,lights_toon_pars_fragment:Pb,lights_phong_fragment:zb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Bb,lights_physical_pars_fragment:Fb,lights_fragment_begin:Hb,lights_fragment_maps:Gb,lights_fragment_end:Vb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:qb,map_fragment:Yb,map_pars_fragment:jb,map_particle_fragment:Zb,map_particle_pars_fragment:Kb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:Jb,morphinstance_vertex:$b,morphcolor_vertex:tA,morphnormal_vertex:eA,morphtarget_pars_vertex:nA,morphtarget_vertex:iA,normal_fragment_begin:aA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:lA,normalmap_pars_fragment:uA,clearcoat_normal_fragment_begin:cA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:dA,opaque_fragment:pA,packing:mA,premultiplied_alpha_fragment:_A,project_vertex:gA,dithering_fragment:vA,dithering_pars_fragment:xA,roughnessmap_fragment:yA,roughnessmap_pars_fragment:SA,shadowmap_pars_fragment:MA,shadowmap_pars_vertex:EA,shadowmap_vertex:TA,shadowmask_pars_fragment:bA,skinbase_vertex:AA,skinning_pars_vertex:RA,skinning_vertex:wA,skinnormal_vertex:CA,specularmap_fragment:DA,specularmap_pars_fragment:UA,tonemapping_fragment:LA,tonemapping_pars_fragment:OA,transmission_fragment:NA,transmission_pars_fragment:PA,uv_pars_fragment:zA,uv_pars_vertex:IA,uv_vertex:BA,worldpos_vertex:FA,background_vert:HA,background_frag:GA,backgroundCube_vert:VA,backgroundCube_frag:kA,cube_vert:XA,cube_frag:WA,depth_vert:qA,depth_frag:YA,distanceRGBA_vert:jA,distanceRGBA_frag:ZA,equirect_vert:KA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:$A,meshbasic_vert:tR,meshbasic_frag:eR,meshlambert_vert:nR,meshlambert_frag:iR,meshmatcap_vert:aR,meshmatcap_frag:rR,meshnormal_vert:sR,meshnormal_frag:oR,meshphong_vert:lR,meshphong_frag:uR,meshphysical_vert:cR,meshphysical_frag:fR,meshtoon_vert:hR,meshtoon_frag:dR,points_vert:pR,points_frag:mR,shadow_vert:_R,shadow_frag:gR,sprite_vert:vR,sprite_frag:xR},Nt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},oa={basic:{uniforms:Yn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Yn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Yn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Yn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Yn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ce(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Yn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Yn([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Yn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Yn([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Yn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Yn([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Yn([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Yn([Nt.lights,Nt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};oa.physical={uniforms:Yn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Qc={r:0,b:0,g:0},es=new Ji,yR=new $e;function SR(o,t,e,a,r,l,c){const f=new ce(0);let p=l===!0?0:1,h,m,g=null,v=0,x=null;function E(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?e:t).get(A)),A}function M(U){let A=!1;const L=E(U);L===null?y(f,p):L&&L.isColor&&(y(L,1),A=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,A){const L=E(A);L&&(L.isCubeTexture||L.mapping===Af)?(m===void 0&&(m=new ii(new wr(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:No(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),es.copy(A.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(yR.makeRotationFromEuler(es)),m.material.toneMapped=ye.getTransfer(L.colorSpace)!==Ie,(g!==L||v!==L.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=L,v=L.version,x=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new ii(new Rf(2,2),new ka({name:"BackgroundMaterial",uniforms:No(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=ye.getTransfer(L.colorSpace)!==Ie,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||x!==o.toneMapping)&&(h.material.needsUpdate=!0,g=L,v=L.version,x=o.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function y(U,A){U.getRGB(Qc,Ny(o)),a.buffers.color.setClear(Qc.r,Qc.g,Qc.b,A,c)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,A=1){f.set(U),p=A,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(f,p)},render:M,addToRenderList:S,dispose:D}}function MR(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,c=!1;function f(O,V,j,et,ft){let rt=!1;const B=g(et,j,V);l!==B&&(l=B,h(l.object)),rt=x(O,et,j,ft),rt&&E(O,et,j,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(rt||c)&&(c=!1,A(O,V,j,et),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return o.createVertexArray()}function h(O){return o.bindVertexArray(O)}function m(O){return o.deleteVertexArray(O)}function g(O,V,j){const et=j.wireframe===!0;let ft=a[O.id];ft===void 0&&(ft={},a[O.id]=ft);let rt=ft[V.id];rt===void 0&&(rt={},ft[V.id]=rt);let B=rt[et];return B===void 0&&(B=v(p()),rt[et]=B),B}function v(O){const V=[],j=[],et=[];for(let ft=0;ft<e;ft++)V[ft]=0,j[ft]=0,et[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:et,object:O,attributes:{},index:null}}function x(O,V,j,et){const ft=l.attributes,rt=V.attributes;let B=0;const k=j.getAttributes();for(const X in k)if(k[X].location>=0){const N=ft[X];let K=rt[X];if(K===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;B++}return l.attributesNum!==B||l.index!==et}function E(O,V,j,et){const ft={},rt=V.attributes;let B=0;const k=j.getAttributes();for(const X in k)if(k[X].location>=0){let N=rt[X];N===void 0&&(X==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),X==="instanceColor"&&O.instanceColor&&(N=O.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),ft[X]=K,B++}l.attributes=ft,l.attributesNum=B,l.index=et}function M(){const O=l.newAttributes;for(let V=0,j=O.length;V<j;V++)O[V]=0}function S(O){y(O,0)}function y(O,V){const j=l.newAttributes,et=l.enabledAttributes,ft=l.attributeDivisors;j[O]=1,et[O]===0&&(o.enableVertexAttribArray(O),et[O]=1),ft[O]!==V&&(o.vertexAttribDivisor(O,V),ft[O]=V)}function D(){const O=l.newAttributes,V=l.enabledAttributes;for(let j=0,et=V.length;j<et;j++)V[j]!==O[j]&&(o.disableVertexAttribArray(j),V[j]=0)}function U(O,V,j,et,ft,rt,B){B===!0?o.vertexAttribIPointer(O,V,j,ft,rt):o.vertexAttribPointer(O,V,j,et,ft,rt)}function A(O,V,j,et){M();const ft=et.attributes,rt=j.getAttributes(),B=V.defaultAttributeValues;for(const k in rt){const X=rt[k];if(X.location>=0){let ut=ft[k];if(ut===void 0&&(k==="instanceMatrix"&&O.instanceMatrix&&(ut=O.instanceMatrix),k==="instanceColor"&&O.instanceColor&&(ut=O.instanceColor)),ut!==void 0){const N=ut.normalized,K=ut.itemSize,pt=t.get(ut);if(pt===void 0)continue;const yt=pt.buffer,St=pt.type,Ct=pt.bytesPerElement,tt=St===o.INT||St===o.UNSIGNED_INT||ut.gpuType===Nm;if(ut.isInterleavedBufferAttribute){const vt=ut.data,At=vt.stride,Kt=ut.offset;if(vt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)y(X.location+Wt,vt.meshPerAttribute);O.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)S(X.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Wt=0;Wt<X.locationSize;Wt++)U(X.location+Wt,K/X.locationSize,St,N,At*Ct,(Kt+K/X.locationSize*Wt)*Ct,tt)}else{if(ut.isInstancedBufferAttribute){for(let vt=0;vt<X.locationSize;vt++)y(X.location+vt,ut.meshPerAttribute);O.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let vt=0;vt<X.locationSize;vt++)S(X.location+vt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let vt=0;vt<X.locationSize;vt++)U(X.location+vt,K/X.locationSize,St,N,K*Ct,K/X.locationSize*vt*Ct,tt)}}else if(B!==void 0){const N=B[k];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(X.location,N);break;case 3:o.vertexAttrib3fv(X.location,N);break;case 4:o.vertexAttrib4fv(X.location,N);break;default:o.vertexAttrib1fv(X.location,N)}}}}D()}function L(){F();for(const O in a){const V=a[O];for(const j in V){const et=V[j];for(const ft in et)m(et[ft].object),delete et[ft];delete V[j]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const V=a[O.id];for(const j in V){const et=V[j];for(const ft in et)m(et[ft].object),delete et[ft];delete V[j]}delete a[O.id]}function z(O){for(const V in a){const j=a[V];if(j[O.id]===void 0)continue;const et=j[O.id];for(const ft in et)m(et[ft].object),delete et[ft];delete j[O.id]}}function F(){b(),c=!0,l!==r&&(l=r,h(l.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:S,disableUnusedAttributes:D}}function ER(o,t,e){let a;function r(h){a=h}function l(h,m){o.drawArrays(a,h,m),e.update(m,a,1)}function c(h,m,g){g!==0&&(o.drawArraysInstanced(a,h,m,g),e.update(m,a,g))}function f(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];e.update(x,a,1)}function p(h,m,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];e.update(E,a,1)}}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function TR(o,t,e,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(z){return!(z!==Ki&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const F=z===pu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ha&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ha&&!F)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=e.logarithmicDepthBuffer===!0,v=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:L,maxSamples:P}}function bR(o){const t=this;let e=null,a=0,r=!1,l=!1;const c=new rs,f=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||a!==0||r;return r=v,a=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=m(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!r||E===null||E.length===0||l&&!S)l?m(null):h();else{const D=l?0:a,U=D*4;let A=y.clippingState||null;p.value=A,A=m(E,v,U,x);for(let L=0;L!==U;++L)A[L]=e[L];y.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function h(){p.value!==e&&(p.value=e,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function m(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=p.value,E!==!0||S===null){const y=x+M*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,A=x;U!==M;++U,A+=4)c.copy(g[U]).applyMatrix4(D,f),c.normal.toArray(S,A),S[A+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function AR(o){let t=new WeakMap;function e(c,f){return f===zp?c.mapping=Uo:f===Ip&&(c.mapping=Lo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===zp||f===Ip)if(t.has(c)){const p=t.get(c).texture;return e(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new x1(p.height);return h.fromEquirectangularTexture(o,c),t.set(c,h),c.addEventListener("dispose",r),e(h.texture,c.mapping)}else return null}}return c}function r(c){const f=c.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Mo=4,Tx=[.125,.215,.35,.446,.526,.582],us=20,hp=new ky,bx=new ce;let dp=null,pp=0,mp=0,_p=!1;const ss=(1+Math.sqrt(5))/2,vo=1/ss,Ax=[new it(-ss,vo,0),new it(ss,vo,0),new it(-vo,0,ss),new it(vo,0,ss),new it(0,ss,-vo),new it(0,ss,vo),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],RR=new it;class Rx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,r=100,l={}){const{size:c=256,position:f=RR}=l;dp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),e>0&&this._blur(p,0,0,e),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dp,pp,mp),this._renderer.xr.enabled=_p,t.scissorTest=!1,Jc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Uo||t.mapping===Lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dp=this._renderer.getRenderTarget(),pp=this._renderer.getActiveCubeFace(),mp=this._renderer.getActiveMipmapLevel(),_p=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:pu,format:Ki,colorSpace:Oo,depthBuffer:!1},r=wx(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(t,e,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wR(l)),this._blurMaterial=CR(l,t,e)}return r}_compileMaterial(t){const e=new ii(this._lodPlanes[0],t);this._renderer.compile(e,hp)}_sceneToCubeUV(t,e,a,r,l){const p=new Ii(90,1,e,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(bx),g.toneMapping=Rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const M=new Uy({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),S=new ii(new wr,M);let y=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,y=!0):(M.color.copy(bx),y=!0);for(let U=0;U<6;U++){const A=U%3;A===0?(p.up.set(0,h[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[U],l.y,l.z)):A===1?(p.up.set(0,0,h[U]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[U],l.z)):(p.up.set(0,h[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[U]));const L=this._cubeSize;Jc(r,A*L,U>2?L:0,L,L),g.setRenderTarget(r),y&&g.render(S,p),g.render(t,p)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=D}_textureToCubeUV(t,e){const a=this._renderer,r=t.mapping===Uo||t.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());const l=r?this._cubemapMaterial:this._equirectMaterial,c=new ii(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Jc(e,0,0,3*p,2*p),a.setRenderTarget(e),a.render(c,hp)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Ax[(r-l-1)%Ax.length];this._blur(t,l-1,l,c,f)}e.autoClear=a}_blur(t,e,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,e,a,r,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ii(this._lodPlanes[r],h),v=h.uniforms,x=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*us-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):us;S>us&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${us}`);const y=[];let D=0;for(let z=0;z<us;++z){const F=z/M,b=Math.exp(-F*F/2);y.push(b),z===0?D+=b:z<S&&(D+=2*b)}for(let z=0;z<y.length;z++)y[z]=y[z]/D;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-a;const A=this._sizeLods[r],L=3*A*(r>U-Mo?r-U+Mo:0),P=4*(this._cubeSize-A);Jc(e,L,P,3*A,2*A),p.setRenderTarget(e),p.render(g,hp)}}function wR(o){const t=[],e=[],a=[];let r=o;const l=o-Mo+1+Tx.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);e.push(f);let p=1/f;c>o-Mo?p=Tx[c-o+Mo-1]:c===0&&(p=0),a.push(p);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,S=2,y=1,D=new Float32Array(M*E*x),U=new Float32Array(S*E*x),A=new Float32Array(y*E*x);for(let P=0;P<x;P++){const z=P%3*2/3-1,F=P>2?0:-1,b=[z,F,0,z+2/3,F,0,z+2/3,F+1,0,z,F,0,z+2/3,F+1,0,z,F+1,0];D.set(b,M*E*P),U.set(v,S*E*P);const O=[P,P,P,P,P,P];A.set(O,y*E*P)}const L=new Ti;L.setAttribute("position",new Mi(D,M)),L.setAttribute("uv",new Mi(U,S)),L.setAttribute("faceIndex",new Mi(A,y)),t.push(L),r>Mo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function wx(o,t,e){const a=new vs(o,t,e);return a.texture.mapping=Af,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Jc(o,t,e,a,r){o.viewport.set(t,e,a,r),o.scissor.set(t,e,a,r)}function CR(o,t,e){const a=new Float32Array(us),r=new it(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Cx(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xm(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Dx(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Xm(){return`

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
	`}function DR(o){let t=new WeakMap,e=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===zp||p===Ip,m=p===Uo||p===Lo;if(h||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new Rx(o)),g=h?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return h&&x&&x.height>0||m&&x&&r(x)?(e===null&&(e=new Rx(o)),g=h?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:c}}function UR(o){const t={};function e(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return t[a]=r,r}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){const r=e(a);return r===null&&su("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function LR(o,t,e,a){const r={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete r[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,e.memory.geometries++),v}function p(g){const v=g.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const D=x.array;M=x.version;for(let U=0,A=D.length;U<A;U+=3){const L=D[U+0],P=D[U+1],z=D[U+2];v.push(L,P,P,z,z,L)}}else if(E!==void 0){const D=E.array;M=E.version;for(let U=0,A=D.length/3-1;U<A;U+=3){const L=U+0,P=U+1,z=U+2;v.push(L,P,P,z,z,L)}}else return;const S=new(Ry(v)?Oy:Ly)(v,1);S.version=M;const y=l.get(g);y&&t.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:m}}function OR(o,t,e){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,x){o.drawElements(a,x,l,v*c),e.update(x,a,1)}function h(v,x,E){E!==0&&(o.drawElementsInstanced(a,x,l,v*c,E),e.update(x,a,E))}function m(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];e.update(S,a,1)}function g(v,x,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/c,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,M,0,E);let y=0;for(let D=0;D<E;D++)y+=x[D]*M[D];e.update(y,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function NR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:a}}function PR(o,t,e){const a=new WeakMap,r=new rn;function l(c,f,p){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let O=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",O)};var x=O;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let L=f.attributes.position.count*A,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const z=new Float32Array(L*P*4*g),F=new wy(z,L,P,g);F.type=Ha,F.needsUpdate=!0;const b=A*4;for(let V=0;V<g;V++){const j=y[V],et=D[V],ft=U[V],rt=L*P*4*V;for(let B=0;B<j.count;B++){const k=B*b;E===!0&&(r.fromBufferAttribute(j,B),z[rt+k+0]=r.x,z[rt+k+1]=r.y,z[rt+k+2]=r.z,z[rt+k+3]=0),M===!0&&(r.fromBufferAttribute(et,B),z[rt+k+4]=r.x,z[rt+k+5]=r.y,z[rt+k+6]=r.z,z[rt+k+7]=0),S===!0&&(r.fromBufferAttribute(ft,B),z[rt+k+8]=r.x,z[rt+k+9]=r.y,z[rt+k+10]=r.z,z[rt+k+11]=ft.itemSize===4?r.w:1)}}v={count:g,texture:F,size:new Te(L,P)},a.set(f,v),f.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",h)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function zR(o,t,e,a){let r=new WeakMap;function l(p){const h=a.render.frame,m=p.geometry,g=t.get(p,m);if(r.get(g)!==h&&(t.update(g),r.set(g,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(e.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return g}function c(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:l,dispose:c}}const Wy=new Kn,Ux=new Iy(1,1),qy=new wy,Yy=new n1,jy=new zy,Lx=[],Ox=[],Nx=new Float32Array(16),Px=new Float32Array(9),zx=new Float32Array(4);function ko(o,t,e){const a=o[0];if(a<=0||a>0)return o;const r=t*e;let l=Lx[r];if(l===void 0&&(l=new Float32Array(r),Lx[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,o[c].toArray(l,f)}return l}function Sn(o,t){if(o.length!==t.length)return!1;for(let e=0,a=o.length;e<a;e++)if(o[e]!==t[e])return!1;return!0}function Mn(o,t){for(let e=0,a=t.length;e<a;e++)o[e]=t[e]}function wf(o,t){let e=Ox[t];e===void 0&&(e=new Int32Array(t),Ox[t]=e);for(let a=0;a!==t;++a)e[a]=o.allocateTextureUnit();return e}function IR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function BR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;o.uniform2fv(this.addr,t),Mn(e,t)}}function FR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;o.uniform3fv(this.addr,t),Mn(e,t)}}function HR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;o.uniform4fv(this.addr,t),Mn(e,t)}}function GR(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;zx.set(a),o.uniformMatrix2fv(this.addr,!1,zx),Mn(e,a)}}function VR(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;Px.set(a),o.uniformMatrix3fv(this.addr,!1,Px),Mn(e,a)}}function kR(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;Nx.set(a),o.uniformMatrix4fv(this.addr,!1,Nx),Mn(e,a)}}function XR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function WR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;o.uniform2iv(this.addr,t),Mn(e,t)}}function qR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;o.uniform3iv(this.addr,t),Mn(e,t)}}function YR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;o.uniform4iv(this.addr,t),Mn(e,t)}}function jR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function ZR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;o.uniform2uiv(this.addr,t),Mn(e,t)}}function KR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;o.uniform3uiv(this.addr,t),Mn(e,t)}}function QR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;o.uniform4uiv(this.addr,t),Mn(e,t)}}function JR(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Ux.compareFunction=Ay,l=Ux):l=Wy,e.setTexture2D(t||l,r)}function $R(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture3D(t||Yy,r)}function tw(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTextureCube(t||jy,r)}function ew(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture2DArray(t||qy,r)}function nw(o){switch(o){case 5126:return IR;case 35664:return BR;case 35665:return FR;case 35666:return HR;case 35674:return GR;case 35675:return VR;case 35676:return kR;case 5124:case 35670:return XR;case 35667:case 35671:return WR;case 35668:case 35672:return qR;case 35669:case 35673:return YR;case 5125:return jR;case 36294:return ZR;case 36295:return KR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return JR;case 35679:case 36299:case 36307:return $R;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return ew}}function iw(o,t){o.uniform1fv(this.addr,t)}function aw(o,t){const e=ko(t,this.size,2);o.uniform2fv(this.addr,e)}function rw(o,t){const e=ko(t,this.size,3);o.uniform3fv(this.addr,e)}function sw(o,t){const e=ko(t,this.size,4);o.uniform4fv(this.addr,e)}function ow(o,t){const e=ko(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function lw(o,t){const e=ko(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function uw(o,t){const e=ko(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function cw(o,t){o.uniform1iv(this.addr,t)}function fw(o,t){o.uniform2iv(this.addr,t)}function hw(o,t){o.uniform3iv(this.addr,t)}function dw(o,t){o.uniform4iv(this.addr,t)}function pw(o,t){o.uniform1uiv(this.addr,t)}function mw(o,t){o.uniform2uiv(this.addr,t)}function _w(o,t){o.uniform3uiv(this.addr,t)}function gw(o,t){o.uniform4uiv(this.addr,t)}function vw(o,t,e){const a=this.cache,r=t.length,l=wf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||Wy,l[c])}function xw(o,t,e){const a=this.cache,r=t.length,l=wf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Yy,l[c])}function yw(o,t,e){const a=this.cache,r=t.length,l=wf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||jy,l[c])}function Sw(o,t,e){const a=this.cache,r=t.length,l=wf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||qy,l[c])}function Mw(o){switch(o){case 5126:return iw;case 35664:return aw;case 35665:return rw;case 35666:return sw;case 35674:return ow;case 35675:return lw;case 35676:return uw;case 5124:case 35670:return cw;case 35667:case 35671:return fw;case 35668:case 35672:return hw;case 35669:case 35673:return dw;case 5125:return pw;case 36294:return mw;case 36295:return _w;case 36296:return gw;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}class Ew{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=nw(e.type)}}class Tw{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mw(e.type)}}class bw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,e[f.id],a)}}}const gp=/(\w+)(\])?(\[|\.)?/g;function Ix(o,t){o.seq.push(t),o.map[t.id]=t}function Aw(o,t,e){const a=o.name,r=a.length;for(gp.lastIndex=0;;){const l=gp.exec(a),c=gp.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===r){Ix(e,h===void 0?new Ew(f,o,t):new Tw(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new bw(f),Ix(e,g)),e=g}}}class lf{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(e,r),c=t.getUniformLocation(e,l.name);Aw(l,c,this)}}setValue(t,e,a,r){const l=this.map[e];l!==void 0&&l.setValue(t,a,r)}setOptional(t,e,a){const r=e[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,e,a,r){for(let l=0,c=e.length;l!==c;++l){const f=e[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,e){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in e&&a.push(c)}return a}}function Bx(o,t,e){const a=o.createShader(t);return o.shaderSource(a,e),o.compileShader(a),a}const Rw=37297;let ww=0;function Cw(o,t){const e=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return a.join(`
`)}const Fx=new ue;function Dw(o){ye._getMatrix(Fx,ye.workingColorSpace,o);const t=`mat3( ${Fx.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(o)){case mf:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Hx(o,t,e){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return e.toUpperCase()+`

`+l+`

`+Cw(o.getShaderSource(t),f)}else return l}function Uw(o,t){const e=Dw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lw(o,t){let e;switch(t){case DT:e="Linear";break;case UT:e="Reinhard";break;case LT:e="Cineon";break;case OT:e="ACESFilmic";break;case PT:e="AgX";break;case zT:e="Neutral";break;case NT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $c=new it;function Ow(){ye.getLuminanceCoefficients($c);const o=$c.x.toFixed(4),t=$c.y.toFixed(4),e=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function Pw(o){const t=[];for(const e in o){const a=o[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function zw(o,t){const e={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return e}function ql(o){return o!==""}function Gx(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(o){return o.replace(Iw,Fw)}const Bw=new Map;function Fw(o,t){let e=de[t];if(e===void 0){const a=Bw.get(t);if(a!==void 0)e=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return mm(e)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(o){return o.replace(Hw,Gw)}function Gw(o,t,e,a){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function Xx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_y?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===uT?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===za&&(t="SHADOWMAP_TYPE_VSM"),t}function kw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Uo:case Lo:t="ENVMAP_TYPE_CUBE";break;case Af:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Lo:t="ENVMAP_MODE_REFRACTION";break}return t}function Ww(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Om:t="ENVMAP_BLENDING_MULTIPLY";break;case wT:t="ENVMAP_BLENDING_MIX";break;case CT:t="ENVMAP_BLENDING_ADD";break}return t}function qw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:a,maxMip:e}}function Yw(o,t,e,a){const r=o.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const p=Vw(e),h=kw(e),m=Xw(e),g=Ww(e),v=qw(e),x=Nw(e),E=Pw(l),M=r.createProgram();let S,y,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ql).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ql).join(`
`),y.length>0&&(y+=`
`)):(S=[Xx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),y=[Xx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rr?"#define TONE_MAPPING":"",e.toneMapping!==Rr?de.tonemapping_pars_fragment:"",e.toneMapping!==Rr?Lw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Uw("linearToOutputTexel",e.outputColorSpace),Ow(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ql).join(`
`)),c=mm(c),c=Gx(c,e),c=Vx(c,e),f=mm(f),f=Gx(f,e),f=Vx(f,e),c=kx(c),f=kx(f),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=D+S+c,A=D+y+f,L=Bx(r,r.VERTEX_SHADER,U),P=Bx(r,r.FRAGMENT_SHADER,A);r.attachShader(M,L),r.attachShader(M,P),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function z(V){if(o.debug.checkShaderErrors){const j=r.getProgramInfoLog(M)||"",et=r.getShaderInfoLog(L)||"",ft=r.getShaderInfoLog(P)||"",rt=j.trim(),B=et.trim(),k=ft.trim();let X=!0,ut=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(X=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,L,P);else{const N=Hx(r,L,"vertex"),K=Hx(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+rt+`
`+N+`
`+K)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(B===""||k==="")&&(ut=!1);ut&&(V.diagnostics={runnable:X,programLog:rt,vertexShader:{log:B,prefix:S},fragmentShader:{log:k,prefix:y}})}r.deleteShader(L),r.deleteShader(P),F=new lf(r,M),b=zw(r,M)}let F;this.getUniforms=function(){return F===void 0&&z(this),F};let b;this.getAttributes=function(){return b===void 0&&z(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(M,Rw)),O},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ww++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let jw=0;class Zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){const e=this.shaderCache;let a=e.get(t);return a===void 0&&(a=new Kw(t),e.set(t,a)),a}}class Kw{constructor(t){this.id=jw++,this.code=t,this.usedTimes=0}}function Qw(o,t,e,a,r,l,c){const f=new Cy,p=new Zw,h=new Set,m=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,O,V,j,et){const ft=j.fog,rt=et.geometry,B=b.isMeshStandardMaterial?j.environment:null,k=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),X=k&&k.mapping===Af?k.image.height:null,ut=E[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const N=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,K=N!==void 0?N.length:0;let pt=0;rt.morphAttributes.position!==void 0&&(pt=1),rt.morphAttributes.normal!==void 0&&(pt=2),rt.morphAttributes.color!==void 0&&(pt=3);let yt,St,Ct,tt;if(ut){const be=oa[ut];yt=be.vertexShader,St=be.fragmentShader}else yt=b.vertexShader,St=b.fragmentShader,p.update(b),Ct=p.getVertexShaderID(b),tt=p.getFragmentShaderID(b);const vt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Kt=et.isInstancedMesh===!0,Wt=et.isBatchedMesh===!0,pe=!!b.map,cn=!!b.matcap,G=!!k,Le=!!b.aoMap,re=!!b.lightMap,ne=!!b.bumpMap,Pt=!!b.normalMap,Ve=!!b.displacementMap,Gt=!!b.emissiveMap,se=!!b.metalnessMap,je=!!b.roughnessMap,Ze=b.anisotropy>0,I=b.clearcoat>0,R=b.dispersion>0,nt=b.iridescence>0,ht=b.sheen>0,_t=b.transmission>0,ct=Ze&&!!b.anisotropyMap,zt=I&&!!b.clearcoatMap,Rt=I&&!!b.clearcoatNormalMap,kt=I&&!!b.clearcoatRoughnessMap,qt=nt&&!!b.iridescenceMap,Mt=nt&&!!b.iridescenceThicknessMap,Lt=ht&&!!b.sheenColorMap,jt=ht&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Dt=!!b.specularColorMap,oe=!!b.specularIntensityMap,q=_t&&!!b.transmissionMap,bt=_t&&!!b.thicknessMap,wt=!!b.gradientMap,It=!!b.alphaMap,Et=b.alphaTest>0,xt=!!b.alphaHash,Ht=!!b.extensions;let ae=Rr;b.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Ce={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:yt,fragmentShader:St,defines:b.defines,customVertexShaderID:Ct,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Wt,batchingColor:Wt&&et._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&et.instanceColor!==null,instancingMorph:Kt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Oo,alphaToCoverage:!!b.alphaToCoverage,map:pe,matcap:cn,envMap:G,envMapMode:G&&k.mapping,envMapCubeUVHeight:X,aoMap:Le,lightMap:re,bumpMap:ne,normalMap:Pt,displacementMap:v&&Ve,emissiveMap:Gt,normalMapObjectSpace:Pt&&b.normalMapType===HT,normalMapTangentSpace:Pt&&b.normalMapType===Hm,metalnessMap:se,roughnessMap:je,anisotropy:Ze,anisotropyMap:ct,clearcoat:I,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:kt,dispersion:R,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:Dt,specularIntensityMap:oe,transmission:_t,transmissionMap:q,thicknessMap:bt,gradientMap:wt,opaque:b.transparent===!1&&b.blending===bo&&b.alphaToCoverage===!1,alphaMap:It,alphaTest:Et,alphaHash:xt,combine:b.combine,mapUv:pe&&M(b.map.channel),aoMapUv:Le&&M(b.aoMap.channel),lightMapUv:re&&M(b.lightMap.channel),bumpMapUv:ne&&M(b.bumpMap.channel),normalMapUv:Pt&&M(b.normalMap.channel),displacementMapUv:Ve&&M(b.displacementMap.channel),emissiveMapUv:Gt&&M(b.emissiveMap.channel),metalnessMapUv:se&&M(b.metalnessMap.channel),roughnessMapUv:je&&M(b.roughnessMap.channel),anisotropyMapUv:ct&&M(b.anisotropyMap.channel),clearcoatMapUv:zt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:jt&&M(b.sheenRoughnessMap.channel),specularMapUv:Vt&&M(b.specularMap.channel),specularColorMapUv:Dt&&M(b.specularColorMap.channel),specularIntensityMapUv:oe&&M(b.specularIntensityMap.channel),transmissionMapUv:q&&M(b.transmissionMap.channel),thicknessMapUv:bt&&M(b.thicknessMap.channel),alphaMapUv:It&&M(b.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Pt||Ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!rt.attributes.uv&&(pe||It),fog:!!ft,useFog:b.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:et.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&b.map.isVideoTexture===!0&&ye.getTransfer(b.map.colorSpace)===Ie,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&ye.getTransfer(b.emissiveMap.colorSpace)===Ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fa,flipSided:b.side===ai,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Wt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=h.has(1),Ce.vertexUv2s=h.has(2),Ce.vertexUv3s=h.has(3),h.clear(),Ce}function y(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)O.push(V),O.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(D(O,b),U(O,b),O.push(o.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function D(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function U(b,O){f.disableAll(),O.supportsVertexTextures&&f.enable(0),O.instancing&&f.enable(1),O.instancingColor&&f.enable(2),O.instancingMorph&&f.enable(3),O.matcap&&f.enable(4),O.envMap&&f.enable(5),O.normalMapObjectSpace&&f.enable(6),O.normalMapTangentSpace&&f.enable(7),O.clearcoat&&f.enable(8),O.iridescence&&f.enable(9),O.alphaTest&&f.enable(10),O.vertexColors&&f.enable(11),O.vertexAlphas&&f.enable(12),O.vertexUv1s&&f.enable(13),O.vertexUv2s&&f.enable(14),O.vertexUv3s&&f.enable(15),O.vertexTangents&&f.enable(16),O.anisotropy&&f.enable(17),O.alphaHash&&f.enable(18),O.batching&&f.enable(19),O.dispersion&&f.enable(20),O.batchingColor&&f.enable(21),O.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const O=E[b.type];let V;if(O){const j=oa[O];V=m1.clone(j.uniforms)}else V=b.uniforms;return V}function L(b,O){let V;for(let j=0,et=m.length;j<et;j++){const ft=m[j];if(ft.cacheKey===O){V=ft,++V.usedTimes;break}}return V===void 0&&(V=new Yw(o,O,b,l),m.push(V)),V}function P(b){if(--b.usedTimes===0){const O=m.indexOf(b);m[O]=m[m.length-1],m.pop(),b.destroy()}}function z(b){p.remove(b)}function F(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:L,releaseProgram:P,releaseShaderCache:z,programs:m,dispose:F}}function Jw(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:e,remove:a,update:r,dispose:l}}function $w(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Wx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function qx(){const o=[];let t=0;const e=[],a=[],r=[];function l(){t=0,e.length=0,a.length=0,r.length=0}function c(g,v,x,E,M,S){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),t++,y}function f(g,v,x,E,M,S){const y=c(g,v,x,E,M,S);x.transmission>0?a.push(y):x.transparent===!0?r.push(y):e.push(y)}function p(g,v,x,E,M,S){const y=c(g,v,x,E,M,S);x.transmission>0?a.unshift(y):x.transparent===!0?r.unshift(y):e.unshift(y)}function h(g,v){e.length>1&&e.sort(g||$w),a.length>1&&a.sort(v||Wx),r.length>1&&r.sort(v||Wx)}function m(){for(let g=t,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:a,transparent:r,init:l,push:f,unshift:p,finish:m,sort:h}}function tC(){let o=new WeakMap;function t(a,r){const l=o.get(a);let c;return l===void 0?(c=new qx,o.set(a,[c])):r>=l.length?(c=new qx,l.push(c)):c=l[r],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function eC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new ce};break;case"SpotLight":e={position:new it,direction:new it,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=e,e}}}function nC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let iC=0;function aC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function rC(o){const t=new eC,e=nC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new it);const r=new it,l=new $e,c=new $e;function f(h){let m=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,D=0,U=0,A=0,L=0,P=0,z=0;h.sort(aC);for(let b=0,O=h.length;b<O;b++){const V=h[b],j=V.color,et=V.intensity,ft=V.distance,rt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=j.r*et,g+=j.g*et,v+=j.b*et;else if(V.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(V.sh.coefficients[B],et);z++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const k=V.shadow,X=e.get(V);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,a.directionalShadow[x]=X,a.directionalShadowMap[x]=rt,a.directionalShadowMatrix[x]=V.shadow.matrix,D++}a.directional[x]=B,x++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(j).multiplyScalar(et),B.distance=ft,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,a.spot[M]=B;const k=V.shadow;if(V.map&&(a.spotLightMap[L]=V.map,L++,k.updateMatrices(V),V.castShadow&&P++),a.spotLightMatrix[M]=k.matrix,V.castShadow){const X=e.get(V);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,a.spotShadow[M]=X,a.spotShadowMap[M]=rt,A++}M++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(j).multiplyScalar(et),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=B,S++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const k=V.shadow,X=e.get(V);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,a.pointShadow[E]=X,a.pointShadowMap[E]=rt,a.pointShadowMatrix[E]=V.shadow.matrix,U++}a.point[E]=B,E++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(et),B.groundColor.copy(V.groundColor).multiplyScalar(et),a.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==x||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==D||F.numPointShadows!==U||F.numSpotShadows!==A||F.numSpotMaps!==L||F.numLightProbes!==z)&&(a.directional.length=x,a.spot.length=M,a.rectArea.length=S,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=A+L-P,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=z,F.directionalLength=x,F.pointLength=E,F.spotLength=M,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=D,F.numPointShadows=U,F.numSpotShadows=A,F.numSpotMaps=L,F.numLightProbes=z,a.version=iC++)}function p(h,m){let g=0,v=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const U=h[y];if(U.isDirectionalLight){const A=a.directional[g];A.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(S),g++}else if(U.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(U.matrixWorld),r.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(S),x++}else if(U.isRectAreaLight){const A=a.rectArea[E];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(U.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(U.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const A=a.hemi[M];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:a}}function Yx(o){const t=new rC(o),e=[],a=[];function r(m){h.camera=m,e.length=0,a.length=0}function l(m){e.push(m)}function c(m){a.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}const h={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function sC(o){let t=new WeakMap;function e(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new Yx(o),t.set(r,[f])):l>=c.length?(f=new Yx(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:e,dispose:a}}const oC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lC=`uniform sampler2D shadow_pass;
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
}`;function uC(o,t,e){let a=new km;const r=new Te,l=new Te,c=new rn,f=new A1({depthPacking:FT}),p=new R1,h={},m=e.maxTextureSize,g={[Va]:ai,[ai]:Va,[Fa]:Fa},v=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:oC,fragmentShader:lC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ti;E.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ii(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_y;let y=this.type;this.render=function(P,z,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const b=o.getRenderTarget(),O=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),j=o.state;j.setBlending(Ar),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const et=y!==za&&this.type===za,ft=y===za&&this.type!==za;for(let rt=0,B=P.length;rt<B;rt++){const k=P[rt],X=k.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ut=X.getFrameExtents();if(r.multiply(ut),l.copy(X.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/ut.x),r.x=l.x*ut.x,X.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/ut.y),r.y=l.y*ut.y,X.mapSize.y=l.y)),X.map===null||et===!0||ft===!0){const K=this.type!==za?{minFilter:Qi,magFilter:Qi}:{};X.map!==null&&X.map.dispose(),X.map=new vs(r.x,r.y,K),X.map.texture.name=k.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const N=X.getViewportCount();for(let K=0;K<N;K++){const pt=X.getViewport(K);c.set(l.x*pt.x,l.y*pt.y,l.x*pt.z,l.y*pt.w),j.viewport(c),X.updateMatrices(k,K),a=X.getFrustum(),A(z,F,X.camera,k,this.type)}X.isPointLightShadow!==!0&&this.type===za&&D(X,F),X.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,O,V)};function D(P,z){const F=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vs(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(z,null,F,v,M,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(z,null,F,x,M,null)}function U(P,z,F,b){let O=null;const V=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)O=V;else if(O=F.isPointLight===!0?p:f,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const j=O.uuid,et=z.uuid;let ft=h[j];ft===void 0&&(ft={},h[j]=ft);let rt=ft[et];rt===void 0&&(rt=O.clone(),ft[et]=rt,z.addEventListener("dispose",L)),O=rt}if(O.visible=z.visible,O.wireframe=z.wireframe,b===za?O.side=z.shadowSide!==null?z.shadowSide:z.side:O.side=z.shadowSide!==null?z.shadowSide:g[z.side],O.alphaMap=z.alphaMap,O.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,O.map=z.map,O.clipShadows=z.clipShadows,O.clippingPlanes=z.clippingPlanes,O.clipIntersection=z.clipIntersection,O.displacementMap=z.displacementMap,O.displacementScale=z.displacementScale,O.displacementBias=z.displacementBias,O.wireframeLinewidth=z.wireframeLinewidth,O.linewidth=z.linewidth,F.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const j=o.properties.get(O);j.light=F}return O}function A(P,z,F,b,O){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===za)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const et=t.update(P),ft=P.material;if(Array.isArray(ft)){const rt=et.groups;for(let B=0,k=rt.length;B<k;B++){const X=rt[B],ut=ft[X.materialIndex];if(ut&&ut.visible){const N=U(P,ut,b,O);P.onBeforeShadow(o,P,z,F,et,N,X),o.renderBufferDirect(F,null,et,N,P,X),P.onAfterShadow(o,P,z,F,et,N,X)}}}else if(ft.visible){const rt=U(P,ft,b,O);P.onBeforeShadow(o,P,z,F,et,rt,null),o.renderBufferDirect(F,null,et,rt,P,null),P.onAfterShadow(o,P,z,F,et,rt,null)}}const j=P.children;for(let et=0,ft=j.length;et<ft;et++)A(j[et],z,F,b,O)}function L(P){P.target.removeEventListener("dispose",L);for(const F in h){const b=h[F],O=P.target.uuid;O in b&&(b[O].dispose(),delete b[O])}}}const cC={[Cp]:Dp,[Up]:Np,[Lp]:Pp,[Do]:Op,[Dp]:Cp,[Np]:Up,[Pp]:Lp,[Op]:Do};function fC(o,t){function e(){let q=!1;const bt=new rn;let wt=null;const It=new rn(0,0,0,0);return{setMask:function(Et){wt!==Et&&!q&&(o.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){q=Et},setClear:function(Et,xt,Ht,ae,Ce){Ce===!0&&(Et*=ae,xt*=ae,Ht*=ae),bt.set(Et,xt,Ht,ae),It.equals(bt)===!1&&(o.clearColor(Et,xt,Ht,ae),It.copy(bt))},reset:function(){q=!1,wt=null,It.set(-1,0,0,0)}}}function a(){let q=!1,bt=!1,wt=null,It=null,Et=null;return{setReversed:function(xt){if(bt!==xt){const Ht=t.get("EXT_clip_control");xt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),bt=xt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(xt){xt?vt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(xt){wt!==xt&&!q&&(o.depthMask(xt),wt=xt)},setFunc:function(xt){if(bt&&(xt=cC[xt]),It!==xt){switch(xt){case Cp:o.depthFunc(o.NEVER);break;case Dp:o.depthFunc(o.ALWAYS);break;case Up:o.depthFunc(o.LESS);break;case Do:o.depthFunc(o.LEQUAL);break;case Lp:o.depthFunc(o.EQUAL);break;case Op:o.depthFunc(o.GEQUAL);break;case Np:o.depthFunc(o.GREATER);break;case Pp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=xt}},setLocked:function(xt){q=xt},setClear:function(xt){Et!==xt&&(bt&&(xt=1-xt),o.clearDepth(xt),Et=xt)},reset:function(){q=!1,wt=null,It=null,Et=null,bt=!1}}}function r(){let q=!1,bt=null,wt=null,It=null,Et=null,xt=null,Ht=null,ae=null,Ce=null;return{setTest:function(be){q||(be?vt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(be){bt!==be&&!q&&(o.stencilMask(be),bt=be)},setFunc:function(be,Gi,gn){(wt!==be||It!==Gi||Et!==gn)&&(o.stencilFunc(be,Gi,gn),wt=be,It=Gi,Et=gn)},setOp:function(be,Gi,gn){(xt!==be||Ht!==Gi||ae!==gn)&&(o.stencilOp(be,Gi,gn),xt=be,Ht=Gi,ae=gn)},setLocked:function(be){q=be},setClear:function(be){Ce!==be&&(o.clearStencil(be),Ce=be)},reset:function(){q=!1,bt=null,wt=null,It=null,Et=null,xt=null,Ht=null,ae=null,Ce=null}}}const l=new e,c=new a,f=new r,p=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,D=null,U=null,A=null,L=null,P=null,z=new ce(0,0,0),F=0,b=!1,O=null,V=null,j=null,et=null,ft=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=k>=2);let ut=null,N={};const K=o.getParameter(o.SCISSOR_BOX),pt=o.getParameter(o.VIEWPORT),yt=new rn().fromArray(K),St=new rn().fromArray(pt);function Ct(q,bt,wt,It){const Et=new Uint8Array(4),xt=o.createTexture();o.bindTexture(q,xt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<wt;Ht++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return xt}const tt={};tt[o.TEXTURE_2D]=Ct(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),vt(o.DEPTH_TEST),c.setFunc(Do),ne(!1),Pt(Wv),vt(o.CULL_FACE),Le(Ar);function vt(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function At(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function Kt(q,bt){return g[q]!==bt?(o.bindFramebuffer(q,bt),g[q]=bt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(q,bt){let wt=x,It=!1;if(q){wt=v.get(bt),wt===void 0&&(wt=[],v.set(bt,wt));const Et=q.textures;if(wt.length!==Et.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Ht=Et.length;xt<Ht;xt++)wt[xt]=o.COLOR_ATTACHMENT0+xt;wt.length=Et.length,It=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,It=!0);It&&o.drawBuffers(wt)}function pe(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const cn={[ls]:o.FUNC_ADD,[fT]:o.FUNC_SUBTRACT,[hT]:o.FUNC_REVERSE_SUBTRACT};cn[dT]=o.MIN,cn[pT]=o.MAX;const G={[mT]:o.ZERO,[_T]:o.ONE,[gT]:o.SRC_COLOR,[Rp]:o.SRC_ALPHA,[ET]:o.SRC_ALPHA_SATURATE,[ST]:o.DST_COLOR,[xT]:o.DST_ALPHA,[vT]:o.ONE_MINUS_SRC_COLOR,[wp]:o.ONE_MINUS_SRC_ALPHA,[MT]:o.ONE_MINUS_DST_COLOR,[yT]:o.ONE_MINUS_DST_ALPHA,[TT]:o.CONSTANT_COLOR,[bT]:o.ONE_MINUS_CONSTANT_COLOR,[AT]:o.CONSTANT_ALPHA,[RT]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(q,bt,wt,It,Et,xt,Ht,ae,Ce,be){if(q===Ar){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(vt(o.BLEND),M=!0),q!==cT){if(q!==S||be!==b){if((y!==ls||A!==ls)&&(o.blendEquation(o.FUNC_ADD),y=ls,A=ls),be)switch(q){case bo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case df:o.blendFunc(o.ONE,o.ONE);break;case qv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Yv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case bo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case df:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case qv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}D=null,U=null,L=null,P=null,z.set(0,0,0),F=0,S=q,b=be}return}Et=Et||bt,xt=xt||wt,Ht=Ht||It,(bt!==y||Et!==A)&&(o.blendEquationSeparate(cn[bt],cn[Et]),y=bt,A=Et),(wt!==D||It!==U||xt!==L||Ht!==P)&&(o.blendFuncSeparate(G[wt],G[It],G[xt],G[Ht]),D=wt,U=It,L=xt,P=Ht),(ae.equals(z)===!1||Ce!==F)&&(o.blendColor(ae.r,ae.g,ae.b,Ce),z.copy(ae),F=Ce),S=q,b=!1}function re(q,bt){q.side===Fa?At(o.CULL_FACE):vt(o.CULL_FACE);let wt=q.side===ai;bt&&(wt=!wt),ne(wt),q.blending===bo&&q.transparent===!1?Le(Ar):Le(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const It=q.stencilWrite;f.setTest(It),It&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Gt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(q){O!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),O=q)}function Pt(q){q!==oT?(vt(o.CULL_FACE),q!==V&&(q===Wv?o.cullFace(o.BACK):q===lT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),V=q}function Ve(q){q!==j&&(B&&o.lineWidth(q),j=q)}function Gt(q,bt,wt){q?(vt(o.POLYGON_OFFSET_FILL),(et!==bt||ft!==wt)&&(o.polygonOffset(bt,wt),et=bt,ft=wt)):At(o.POLYGON_OFFSET_FILL)}function se(q){q?vt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function je(q){q===void 0&&(q=o.TEXTURE0+rt-1),ut!==q&&(o.activeTexture(q),ut=q)}function Ze(q,bt,wt){wt===void 0&&(ut===null?wt=o.TEXTURE0+rt-1:wt=ut);let It=N[wt];It===void 0&&(It={type:void 0,texture:void 0},N[wt]=It),(It.type!==q||It.texture!==bt)&&(ut!==wt&&(o.activeTexture(wt),ut=wt),o.bindTexture(q,bt||tt[q]),It.type=q,It.texture=bt)}function I(){const q=N[ut];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ht(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function kt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(q){yt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),yt.copy(q))}function jt(q){St.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),St.copy(q))}function Vt(q,bt){let wt=h.get(bt);wt===void 0&&(wt=new WeakMap,h.set(bt,wt));let It=wt.get(q);It===void 0&&(It=o.getUniformBlockIndex(bt,q.name),wt.set(q,It))}function Dt(q,bt){const It=h.get(bt).get(q);p.get(bt)!==It&&(o.uniformBlockBinding(bt,It,q.__bindingPointIndex),p.set(bt,It))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ut=null,N={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,D=null,U=null,A=null,L=null,P=null,z=new ce(0,0,0),F=0,b=!1,O=null,V=null,j=null,et=null,ft=null,yt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:vt,disable:At,bindFramebuffer:Kt,drawBuffers:Wt,useProgram:pe,setBlending:Le,setMaterial:re,setFlipSided:ne,setCullFace:Pt,setLineWidth:Ve,setPolygonOffset:Gt,setScissorTest:se,activeTexture:je,bindTexture:Ze,unbindTexture:I,compressedTexImage2D:R,compressedTexImage3D:nt,texImage2D:qt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Dt,texStorage2D:Rt,texStorage3D:kt,texSubImage2D:ht,texSubImage3D:_t,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:Lt,viewport:jt,reset:oe}}function hC(o,t,e,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Te,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,R){return x?new OffscreenCanvas(I,R):ru("canvas")}function M(I,R,nt){let ht=1;const _t=Ze(I);if((_t.width>nt||_t.height>nt)&&(ht=nt/Math.max(_t.width,_t.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ct=Math.floor(ht*_t.width),zt=Math.floor(ht*_t.height);g===void 0&&(g=E(ct,zt));const Rt=R?E(ct,zt):g;return Rt.width=ct,Rt.height=zt,Rt.getContext("2d").drawImage(I,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ct+"x"+zt+")."),Rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),I;return I}function S(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function D(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(I,R,nt,ht,_t=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ct=R;if(R===o.RED&&(nt===o.FLOAT&&(ct=o.R32F),nt===o.HALF_FLOAT&&(ct=o.R16F),nt===o.UNSIGNED_BYTE&&(ct=o.R8)),R===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.R8UI),nt===o.UNSIGNED_SHORT&&(ct=o.R16UI),nt===o.UNSIGNED_INT&&(ct=o.R32UI),nt===o.BYTE&&(ct=o.R8I),nt===o.SHORT&&(ct=o.R16I),nt===o.INT&&(ct=o.R32I)),R===o.RG&&(nt===o.FLOAT&&(ct=o.RG32F),nt===o.HALF_FLOAT&&(ct=o.RG16F),nt===o.UNSIGNED_BYTE&&(ct=o.RG8)),R===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),nt===o.UNSIGNED_INT&&(ct=o.RG32UI),nt===o.BYTE&&(ct=o.RG8I),nt===o.SHORT&&(ct=o.RG16I),nt===o.INT&&(ct=o.RG32I)),R===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),nt===o.UNSIGNED_INT&&(ct=o.RGB32UI),nt===o.BYTE&&(ct=o.RGB8I),nt===o.SHORT&&(ct=o.RGB16I),nt===o.INT&&(ct=o.RGB32I)),R===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),nt===o.BYTE&&(ct=o.RGBA8I),nt===o.SHORT&&(ct=o.RGBA16I),nt===o.INT&&(ct=o.RGBA32I)),R===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),R===o.RGBA){const zt=_t?mf:ye.getTransfer(ht);nt===o.FLOAT&&(ct=o.RGBA32F),nt===o.HALF_FLOAT&&(ct=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ct=zt===Ie?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(I,R){let nt;return I?R===null||R===gs||R===nu?nt=o.DEPTH24_STENCIL8:R===Ha?nt=o.DEPTH32F_STENCIL8:R===eu&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===gs||R===nu?nt=o.DEPTH_COMPONENT24:R===Ha?nt=o.DEPTH_COMPONENT32F:R===eu&&(nt=o.DEPTH_COMPONENT16),nt}function L(I,R){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qi&&I.minFilter!==ua?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function P(I){const R=I.target;R.removeEventListener("dispose",P),F(R),R.isVideoTexture&&m.delete(R)}function z(I){const R=I.target;R.removeEventListener("dispose",z),O(R)}function F(I){const R=a.get(I);if(R.__webglInit===void 0)return;const nt=I.source,ht=v.get(nt);if(ht){const _t=ht[R.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&b(I),Object.keys(ht).length===0&&v.delete(nt)}a.remove(I)}function b(I){const R=a.get(I);o.deleteTexture(R.__webglTexture);const nt=I.source,ht=v.get(nt);delete ht[R.__cacheKey],c.memory.textures--}function O(I){const R=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(R.__webglFramebuffer[ht]))for(let _t=0;_t<R.__webglFramebuffer[ht].length;_t++)o.deleteFramebuffer(R.__webglFramebuffer[ht][_t]);else o.deleteFramebuffer(R.__webglFramebuffer[ht]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ht])}else{if(Array.isArray(R.__webglFramebuffer))for(let ht=0;ht<R.__webglFramebuffer.length;ht++)o.deleteFramebuffer(R.__webglFramebuffer[ht]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ht=0;ht<R.__webglColorRenderbuffer.length;ht++)R.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ht]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const nt=I.textures;for(let ht=0,_t=nt.length;ht<_t;ht++){const ct=a.get(nt[ht]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),a.remove(nt[ht])}a.remove(I)}let V=0;function j(){V=0}function et(){const I=V;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),V+=1,I}function ft(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function rt(I,R){const nt=a.get(I);if(I.isVideoTexture&&se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&nt.__version!==I.version){const ht=I.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(nt,I,R);return}}else I.isExternalTexture&&(nt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+R)}function B(I,R){const nt=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){tt(nt,I,R);return}e.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+R)}function k(I,R){const nt=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){tt(nt,I,R);return}e.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+R)}function X(I,R){const nt=a.get(I);if(I.version>0&&nt.__version!==I.version){vt(nt,I,R);return}e.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+R)}const ut={[pf]:o.REPEAT,[cs]:o.CLAMP_TO_EDGE,[Bp]:o.MIRRORED_REPEAT},N={[Qi]:o.NEAREST,[IT]:o.NEAREST_MIPMAP_NEAREST,[wc]:o.NEAREST_MIPMAP_LINEAR,[ua]:o.LINEAR,[Fd]:o.LINEAR_MIPMAP_NEAREST,[fs]:o.LINEAR_MIPMAP_LINEAR},K={[GT]:o.NEVER,[YT]:o.ALWAYS,[VT]:o.LESS,[Ay]:o.LEQUAL,[kT]:o.EQUAL,[qT]:o.GEQUAL,[XT]:o.GREATER,[WT]:o.NOTEQUAL};function pt(I,R){if(R.type===Ha&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===ua||R.magFilter===Fd||R.magFilter===wc||R.magFilter===fs||R.minFilter===ua||R.minFilter===Fd||R.minFilter===wc||R.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ut[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ut[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ut[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,N[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,N[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,K[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Qi||R.minFilter!==wc&&R.minFilter!==fs||R.type===Ha&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function yt(I,R){let nt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",P));const ht=R.source;let _t=v.get(ht);_t===void 0&&(_t={},v.set(ht,_t));const ct=ft(R);if(ct!==I.__cacheKey){_t[ct]===void 0&&(_t[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),_t[ct].usedTimes++;const zt=_t[I.__cacheKey];zt!==void 0&&(_t[I.__cacheKey].usedTimes--,zt.usedTimes===0&&b(R)),I.__cacheKey=ct,I.__webglTexture=_t[ct].texture}return nt}function St(I,R,nt){return Math.floor(Math.floor(I/nt)/R)}function Ct(I,R,nt,ht){const ct=I.updateRanges;if(ct.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,nt,ht,R.data);else{ct.sort((Mt,Lt)=>Mt.start-Lt.start);let zt=0;for(let Mt=1;Mt<ct.length;Mt++){const Lt=ct[zt],jt=ct[Mt],Vt=Lt.start+Lt.count,Dt=St(jt.start,R.width,4),oe=St(Lt.start,R.width,4);jt.start<=Vt+1&&Dt===oe&&St(jt.start+jt.count-1,R.width,4)===Dt?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++zt,ct[zt]=jt)}ct.length=zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Mt=0,Lt=ct.length;Mt<Lt;Mt++){const jt=ct[Mt],Vt=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),oe=Vt%R.width,q=Math.floor(Vt/R.width),bt=Dt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),e.texSubImage2D(o.TEXTURE_2D,0,oe,q,bt,wt,nt,ht,R.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function tt(I,R,nt){let ht=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ht=o.TEXTURE_3D);const _t=yt(I,R),ct=R.source;e.bindTexture(ht,I.__webglTexture,o.TEXTURE0+nt);const zt=a.get(ct);if(ct.version!==zt.__version||_t===!0){e.activeTexture(o.TEXTURE0+nt);const Rt=ye.getPrimaries(ye.workingColorSpace),kt=R.colorSpace===Mr?null:ye.getPrimaries(R.colorSpace),qt=R.colorSpace===Mr||Rt===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=M(R.image,!1,r.maxTextureSize);Mt=je(R,Mt);const Lt=l.convert(R.format,R.colorSpace),jt=l.convert(R.type);let Vt=U(R.internalFormat,Lt,jt,R.colorSpace,R.isVideoTexture);pt(ht,R);let Dt;const oe=R.mipmaps,q=R.isVideoTexture!==!0,bt=zt.__version===void 0||_t===!0,wt=ct.dataReady,It=L(R,Mt);if(R.isDepthTexture)Vt=A(R.format===au,R.type),bt&&(q?e.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):e.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Lt,jt,null));else if(R.isDataTexture)if(oe.length>0){q&&bt&&e.texStorage2D(o.TEXTURE_2D,It,Vt,oe[0].width,oe[0].height);for(let Et=0,xt=oe.length;Et<xt;Et++)Dt=oe[Et],q?wt&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):e.texImage2D(o.TEXTURE_2D,Et,Vt,Dt.width,Dt.height,0,Lt,jt,Dt.data);R.generateMipmaps=!1}else q?(bt&&e.texStorage2D(o.TEXTURE_2D,It,Vt,Mt.width,Mt.height),wt&&Ct(R,Mt,Lt,jt)):e.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Lt,jt,Mt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&bt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Vt,oe[0].width,oe[0].height,Mt.depth);for(let Et=0,xt=oe.length;Et<xt;Et++)if(Dt=oe[Et],R.format!==Ki)if(Lt!==null)if(q){if(wt)if(R.layerUpdates.size>0){const Ht=Ex(Dt.width,Dt.height,R.format,R.type);for(const ae of R.layerUpdates){const Ce=Dt.data.subarray(ae*Ht/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,Dt.width,Dt.height,1,Lt,Ce)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Lt,Dt.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Vt,Dt.width,Dt.height,Mt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?wt&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Lt,jt,Dt.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Et,Vt,Dt.width,Dt.height,Mt.depth,0,Lt,jt,Dt.data)}else{q&&bt&&e.texStorage2D(o.TEXTURE_2D,It,Vt,oe[0].width,oe[0].height);for(let Et=0,xt=oe.length;Et<xt;Et++)Dt=oe[Et],R.format!==Ki?Lt!==null?q?wt&&e.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Dt.data):e.compressedTexImage2D(o.TEXTURE_2D,Et,Vt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?wt&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):e.texImage2D(o.TEXTURE_2D,Et,Vt,Dt.width,Dt.height,0,Lt,jt,Dt.data)}else if(R.isDataArrayTexture)if(q){if(bt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,It,Vt,Mt.width,Mt.height,Mt.depth),wt)if(R.layerUpdates.size>0){const Et=Ex(Mt.width,Mt.height,R.format,R.type);for(const xt of R.layerUpdates){const Ht=Mt.data.subarray(xt*Et/Mt.data.BYTES_PER_ELEMENT,(xt+1)*Et/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,Mt.width,Mt.height,1,Lt,jt,Ht)}R.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,jt,Mt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Lt,jt,Mt.data);else if(R.isData3DTexture)q?(bt&&e.texStorage3D(o.TEXTURE_3D,It,Vt,Mt.width,Mt.height,Mt.depth),wt&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,jt,Mt.data)):e.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Lt,jt,Mt.data);else if(R.isFramebufferTexture){if(bt)if(q)e.texStorage2D(o.TEXTURE_2D,It,Vt,Mt.width,Mt.height);else{let Et=Mt.width,xt=Mt.height;for(let Ht=0;Ht<It;Ht++)e.texImage2D(o.TEXTURE_2D,Ht,Vt,Et,xt,0,Lt,jt,null),Et>>=1,xt>>=1}}else if(oe.length>0){if(q&&bt){const Et=Ze(oe[0]);e.texStorage2D(o.TEXTURE_2D,It,Vt,Et.width,Et.height)}for(let Et=0,xt=oe.length;Et<xt;Et++)Dt=oe[Et],q?wt&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Lt,jt,Dt):e.texImage2D(o.TEXTURE_2D,Et,Vt,Lt,jt,Dt);R.generateMipmaps=!1}else if(q){if(bt){const Et=Ze(Mt);e.texStorage2D(o.TEXTURE_2D,It,Vt,Et.width,Et.height)}wt&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,jt,Mt)}else e.texImage2D(o.TEXTURE_2D,0,Vt,Lt,jt,Mt);S(R)&&y(ht),zt.__version=ct.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function vt(I,R,nt){if(R.image.length!==6)return;const ht=yt(I,R),_t=R.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+nt);const ct=a.get(_t);if(_t.version!==ct.__version||ht===!0){e.activeTexture(o.TEXTURE0+nt);const zt=ye.getPrimaries(ye.workingColorSpace),Rt=R.colorSpace===Mr?null:ye.getPrimaries(R.colorSpace),kt=R.colorSpace===Mr||zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=R.isCompressedTexture||R.image[0].isCompressedTexture,Mt=R.image[0]&&R.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!qt&&!Mt?Lt[xt]=M(R.image[xt],!0,r.maxCubemapSize):Lt[xt]=Mt?R.image[xt].image:R.image[xt],Lt[xt]=je(R,Lt[xt]);const jt=Lt[0],Vt=l.convert(R.format,R.colorSpace),Dt=l.convert(R.type),oe=U(R.internalFormat,Vt,Dt,R.colorSpace),q=R.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,wt=_t.dataReady;let It=L(R,jt);pt(o.TEXTURE_CUBE_MAP,R);let Et;if(qt){q&&bt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,jt.width,jt.height);for(let xt=0;xt<6;xt++){Et=Lt[xt].mipmaps;for(let Ht=0;Ht<Et.length;Ht++){const ae=Et[Ht];R.format!==Ki?Vt!==null?q?wt&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,ae.width,ae.height,Vt,ae.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?wt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,0,0,ae.width,ae.height,Vt,Dt,ae.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht,oe,ae.width,ae.height,0,Vt,Dt,ae.data)}}}else{if(Et=R.mipmaps,q&&bt){Et.length>0&&It++;const xt=Ze(Lt[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,It,oe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Mt){q?wt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,Vt,Dt,Lt[xt].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,Lt[xt].width,Lt[xt].height,0,Vt,Dt,Lt[xt].data);for(let Ht=0;Ht<Et.length;Ht++){const Ce=Et[Ht].image[xt].image;q?wt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Ce.width,Ce.height,Vt,Dt,Ce.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,oe,Ce.width,Ce.height,0,Vt,Dt,Ce.data)}}else{q?wt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt,Dt,Lt[xt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,oe,Vt,Dt,Lt[xt]);for(let Ht=0;Ht<Et.length;Ht++){const ae=Et[Ht];q?wt&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,0,0,Vt,Dt,ae.image[xt]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ht+1,oe,Vt,Dt,ae.image[xt])}}}S(R)&&y(o.TEXTURE_CUBE_MAP),ct.__version=_t.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function At(I,R,nt,ht,_t,ct){const zt=l.convert(nt.format,nt.colorSpace),Rt=l.convert(nt.type),kt=U(nt.internalFormat,zt,Rt,nt.colorSpace),qt=a.get(R),Mt=a.get(nt);if(Mt.__renderTarget=R,!qt.__hasExternalTextures){const Lt=Math.max(1,R.width>>ct),jt=Math.max(1,R.height>>ct);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?e.texImage3D(_t,ct,kt,Lt,jt,R.depth,0,zt,Rt,null):e.texImage2D(_t,ct,kt,Lt,jt,0,zt,Rt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),Gt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,_t,Mt.__webglTexture,0,Ve(R)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,_t,Mt.__webglTexture,ct),e.bindFramebuffer(o.FRAMEBUFFER,null)}function Kt(I,R,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const ht=R.depthTexture,_t=ht&&ht.isDepthTexture?ht.type:null,ct=A(R.stencilBuffer,_t),zt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ve(R);Gt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ct,R.width,R.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ct,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ct,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,I)}else{const ht=R.textures;for(let _t=0;_t<ht.length;_t++){const ct=ht[_t],zt=l.convert(ct.format,ct.colorSpace),Rt=l.convert(ct.type),kt=U(ct.internalFormat,zt,Rt,ct.colorSpace),qt=Ve(R);nt&&Gt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,R.width,R.height):Gt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,kt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(R.depthTexture);ht.__renderTarget=R,(!ht.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),rt(R.depthTexture,0);const _t=ht.__webglTexture,ct=Ve(R);if(R.depthTexture.format===iu)Gt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(R.depthTexture.format===au)Gt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function pe(I){const R=a.get(I),nt=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const ht=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ht){const _t=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ht.removeEventListener("dispose",_t)};ht.addEventListener("dispose",_t),R.__depthDisposeCallback=_t}R.__boundDepthTexture=ht}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=I.texture.mipmaps;ht&&ht.length>0?Wt(R.__webglFramebuffer[0],I):Wt(R.__webglFramebuffer,I)}else if(nt){R.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ht]),R.__webglDepthbuffer[ht]===void 0)R.__webglDepthbuffer[ht]=o.createRenderbuffer(),Kt(R.__webglDepthbuffer[ht],I,!1);else{const _t=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}else{const ht=I.texture.mipmaps;if(ht&&ht.length>0?e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Kt(R.__webglDepthbuffer,I,!1);else{const _t=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ct)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function cn(I,R,nt){const ht=a.get(I);R!==void 0&&At(ht.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&pe(I)}function G(I){const R=I.texture,nt=a.get(I),ht=a.get(R);I.addEventListener("dispose",z);const _t=I.textures,ct=I.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=R.version,c.memory.textures++),ct){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let kt=0;kt<R.mipmaps.length;kt++)nt.__webglFramebuffer[Rt][kt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<R.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Rt=0,kt=_t.length;Rt<kt;Rt++){const qt=a.get(_t[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&Gt(I)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const kt=_t[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const qt=l.convert(kt.format,kt.colorSpace),Mt=l.convert(kt.type),Lt=U(kt.internalFormat,qt,Mt,kt.colorSpace,I.isXRRenderTarget===!0),jt=Ve(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Lt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Kt(nt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){e.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),pt(o.TEXTURE_CUBE_MAP,R);for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let kt=0;kt<R.mipmaps.length;kt++)At(nt.__webglFramebuffer[Rt][kt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,kt);else At(nt.__webglFramebuffer[Rt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(R)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let Rt=0,kt=_t.length;Rt<kt;Rt++){const qt=_t[Rt],Mt=a.get(qt);let Lt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Lt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Lt,Mt.__webglTexture),pt(Lt,qt),At(nt.__webglFramebuffer,I,qt,o.COLOR_ATTACHMENT0+Rt,Lt,0),S(qt)&&y(Lt)}e.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Rt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Rt,ht.__webglTexture),pt(Rt,R),R.mipmaps&&R.mipmaps.length>0)for(let kt=0;kt<R.mipmaps.length;kt++)At(nt.__webglFramebuffer[kt],I,R,o.COLOR_ATTACHMENT0,Rt,kt);else At(nt.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,Rt,0);S(R)&&y(Rt),e.unbindTexture()}I.depthBuffer&&pe(I)}function Le(I){const R=I.textures;for(let nt=0,ht=R.length;nt<ht;nt++){const _t=R[nt];if(S(_t)){const ct=D(I),zt=a.get(_t).__webglTexture;e.bindTexture(ct,zt),y(ct),e.unbindTexture()}}}const re=[],ne=[];function Pt(I){if(I.samples>0){if(Gt(I)===!1){const R=I.textures,nt=I.width,ht=I.height;let _t=o.COLOR_BUFFER_BIT;const ct=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=a.get(I),Rt=R.length>1;if(Rt)for(let qt=0;qt<R.length;qt++)e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const kt=I.texture.mipmaps;kt&&kt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<R.length;qt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Mt=a.get(R[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,nt,ht,0,0,nt,ht,_t,o.NEAREST),p===!0&&(re.length=0,ne.length=0,re.push(o.COLOR_ATTACHMENT0+qt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(re.push(ct),ne.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<R.length;qt++){e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Mt=a.get(R[qt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Mt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Ve(I){return Math.min(r.maxSamples,I.samples)}function Gt(I){const R=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function se(I){const R=c.render.frame;m.get(I)!==R&&(m.set(I,R),I.update())}function je(I,R){const nt=I.colorSpace,ht=I.format,_t=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||nt!==Oo&&nt!==Mr&&(ye.getTransfer(nt)===Ie?(ht!==Ki||_t!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),R}function Ze(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=et,this.resetTextureUnits=j,this.setTexture2D=rt,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=cn,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Gt}function dC(o,t){function e(a,r=Mr){let l;const c=ye.getTransfer(r);if(a===ha)return o.UNSIGNED_BYTE;if(a===Pm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===zm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===yy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Sy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===vy)return o.BYTE;if(a===xy)return o.SHORT;if(a===eu)return o.UNSIGNED_SHORT;if(a===Nm)return o.INT;if(a===gs)return o.UNSIGNED_INT;if(a===Ha)return o.FLOAT;if(a===pu)return o.HALF_FLOAT;if(a===My)return o.ALPHA;if(a===Ey)return o.RGB;if(a===Ki)return o.RGBA;if(a===iu)return o.DEPTH_COMPONENT;if(a===au)return o.DEPTH_STENCIL;if(a===Ty)return o.RED;if(a===Im)return o.RED_INTEGER;if(a===by)return o.RG;if(a===Bm)return o.RG_INTEGER;if(a===Fm)return o.RGBA_INTEGER;if(a===nf||a===af||a===rf||a===sf)if(c===Ie)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===nf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===rf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===nf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===af)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===rf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===sf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Fp||a===Hp||a===Gp||a===Vp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Fp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Gp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kp||a===Xp||a===Wp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===kp||a===Xp)return c===Ie?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Wp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===qp||a===Yp||a===jp||a===Zp||a===Kp||a===Qp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am||a===rm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===qp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Yp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===jp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Kp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Qp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Jp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$p)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===tm)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===em)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===nm)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===im)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===am)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===rm)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===sm||a===om||a===lm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===sm)return c===Ie?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===om)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===lm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===um||a===cm||a===fm||a===hm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===um)return l.COMPRESSED_RED_RGTC1_EXT;if(a===cm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===fm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===hm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===nu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:e}}const pC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mC=`
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

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const a=new By(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,a=new ka({vertexShader:pC,fragmentShader:mC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ii(new Rf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gC extends Go{constructor(t,e){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,h=null,m=null,g=null,v=null,x=null,E=null;const M=typeof XRWebGLBinding<"u",S=new _C,y={},D=e.getContextAttributes();let U=null,A=null;const L=[],P=[],z=new Te;let F=null;const b=new Ii;b.viewport=new rn;const O=new Ii;O.viewport=new rn;const V=[b,O],j=new I1;let et=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let vt=L[tt];return vt===void 0&&(vt=new lp,L[tt]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(tt){let vt=L[tt];return vt===void 0&&(vt=new lp,L[tt]=vt),vt.getGripSpace()},this.getHand=function(tt){let vt=L[tt];return vt===void 0&&(vt=new lp,L[tt]=vt),vt.getHandSpace()};function rt(tt){const vt=P.indexOf(tt.inputSource);if(vt===-1)return;const At=L[vt];At!==void 0&&(At.update(tt.inputSource,tt.frame,h||c),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function B(){r.removeEventListener("select",rt),r.removeEventListener("selectstart",rt),r.removeEventListener("selectend",rt),r.removeEventListener("squeeze",rt),r.removeEventListener("squeezestart",rt),r.removeEventListener("squeezeend",rt),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",k);for(let tt=0;tt<L.length;tt++){const vt=P[tt];vt!==null&&(P[tt]=null,L[tt].disconnect(vt))}et=null,ft=null,S.reset();for(const tt in y)delete y[tt];t.setRenderTarget(U),x=null,v=null,g=null,r=null,A=null,Ct.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){l=tt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(tt){h=tt},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(tt){if(r=tt,r!==null){if(U=t.getRenderTarget(),r.addEventListener("select",rt),r.addEventListener("selectstart",rt),r.addEventListener("selectend",rt),r.addEventListener("squeeze",rt),r.addEventListener("squeezestart",rt),r.addEventListener("squeezeend",rt),r.addEventListener("end",B),r.addEventListener("inputsourceschange",k),D.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(z),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Kt=null,Wt=null;D.depth&&(Wt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=D.stencil?au:iu,Kt=D.stencil?nu:gs);const pe={colorFormat:e.RGBA8,depthFormat:Wt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(pe),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new vs(v.textureWidth,v.textureHeight,{format:Ki,type:ha,depthTexture:new Iy(v.textureWidth,v.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,e,At),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new vs(x.framebufferWidth,x.framebufferHeight,{format:Ki,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await r.requestReferenceSpace(f),Ct.setContext(r),Ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(tt){for(let vt=0;vt<tt.removed.length;vt++){const At=tt.removed[vt],Kt=P.indexOf(At);Kt>=0&&(P[Kt]=null,L[Kt].disconnect(At))}for(let vt=0;vt<tt.added.length;vt++){const At=tt.added[vt];let Kt=P.indexOf(At);if(Kt===-1){for(let pe=0;pe<L.length;pe++)if(pe>=P.length){P.push(At),Kt=pe;break}else if(P[pe]===null){P[pe]=At,Kt=pe;break}if(Kt===-1)break}const Wt=L[Kt];Wt&&Wt.connect(At)}}const X=new it,ut=new it;function N(tt,vt,At){X.setFromMatrixPosition(vt.matrixWorld),ut.setFromMatrixPosition(At.matrixWorld);const Kt=X.distanceTo(ut),Wt=vt.projectionMatrix.elements,pe=At.projectionMatrix.elements,cn=Wt[14]/(Wt[10]-1),G=Wt[14]/(Wt[10]+1),Le=(Wt[9]+1)/Wt[5],re=(Wt[9]-1)/Wt[5],ne=(Wt[8]-1)/Wt[0],Pt=(pe[8]+1)/pe[0],Ve=cn*ne,Gt=cn*Pt,se=Kt/(-ne+Pt),je=se*-ne;if(vt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(je),tt.translateZ(se),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Ze=cn+se,I=G+se,R=Ve-je,nt=Gt+(Kt-je),ht=Le*G/I*Ze,_t=re*G/I*Ze;tt.projectionMatrix.makePerspective(R,nt,ht,_t,Ze,I),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function K(tt,vt){vt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(vt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(r===null)return;let vt=tt.near,At=tt.far;S.texture!==null&&(S.depthNear>0&&(vt=S.depthNear),S.depthFar>0&&(At=S.depthFar)),j.near=O.near=b.near=vt,j.far=O.far=b.far=At,(et!==j.near||ft!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),et=j.near,ft=j.far),j.layers.mask=tt.layers.mask|6,b.layers.mask=j.layers.mask&3,O.layers.mask=j.layers.mask&5;const Kt=tt.parent,Wt=j.cameras;K(j,Kt);for(let pe=0;pe<Wt.length;pe++)K(Wt[pe],Kt);Wt.length===2?N(j,b,O):j.projectionMatrix.copy(b.projectionMatrix),pt(tt,j,Kt)};function pt(tt,vt,At){At===null?tt.matrix.copy(vt.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(vt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(vt.projectionMatrix),tt.projectionMatrixInverse.copy(vt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=dm*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(tt){p=tt,v!==null&&(v.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(j)},this.getCameraTexture=function(tt){return y[tt]};let yt=null;function St(tt,vt){if(m=vt.getViewerPose(h||c),E=vt,m!==null){const At=m.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let Kt=!1;At.length!==j.cameras.length&&(j.cameras.length=0,Kt=!0);for(let G=0;G<At.length;G++){const Le=At[G];let re=null;if(x!==null)re=x.getViewport(Le);else{const Pt=g.getViewSubImage(v,Le);re=Pt.viewport,G===0&&(t.setRenderTargetTextures(A,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(A))}let ne=V[G];ne===void 0&&(ne=new Ii,ne.layers.enable(G),ne.viewport=new rn,V[G]=ne),ne.matrix.fromArray(Le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(re.x,re.y,re.width,re.height),G===0&&(j.matrix.copy(ne.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Kt===!0&&j.cameras.push(ne)}const Wt=r.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const G=g.getDepthInformation(At[0]);G&&G.isValid&&G.texture&&S.init(G,r.renderState)}if(Wt&&Wt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let G=0;G<At.length;G++){const Le=At[G].camera;if(Le){let re=y[Le];re||(re=new By,y[Le]=re);const ne=g.getCameraImage(Le);re.sourceTexture=ne}}}}for(let At=0;At<L.length;At++){const Kt=P[At],Wt=L[At];Kt!==null&&Wt!==void 0&&Wt.update(Kt,vt,h||c)}yt&&yt(tt,vt),vt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:vt}),E=null}const Ct=new Xy;Ct.setAnimationLoop(St),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const ns=new Ji,vC=new $e;function xC(o,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Ny(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,D,U,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),M(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,D,U):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ai&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ai&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=t.get(y),U=D.envMap,A=D.envMapRotation;U&&(S.envMap.value=U,ns.copy(A),ns.x*=-1,ns.y*=-1,ns.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),S.envMapRotation.value.setFromMatrix4(vC.makeRotationFromEuler(ns)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,D,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=U*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ai&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const D=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function yC(o,t,e,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,U){const A=U.program;a.uniformBlockBinding(D,A)}function h(D,U){let A=r[D.id];A===void 0&&(E(D),A=m(D),r[D.id]=A,D.addEventListener("dispose",S));const L=U.program;a.updateUBOMapping(D,L);const P=t.render.frame;l[D.id]!==P&&(v(D),l[D.id]=P)}function m(D){const U=g();D.__bindingPointIndex=U;const A=o.createBuffer(),L=D.__size,P=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,L,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,A),A}function g(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const U=r[D.id],A=D.uniforms,L=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,z=A.length;P<z;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let b=0,O=F.length;b<O;b++){const V=F[b];if(x(V,P,b,L)===!0){const j=V.__offset,et=Array.isArray(V.value)?V.value:[V.value];let ft=0;for(let rt=0;rt<et.length;rt++){const B=et[rt],k=M(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,j+ft,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,ft),ft+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,U,A,L){const P=D.value,z=U+"_"+A;if(L[z]===void 0)return typeof P=="number"||typeof P=="boolean"?L[z]=P:L[z]=P.clone(),!0;{const F=L[z];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return L[z]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function E(D){const U=D.uniforms;let A=0;const L=16;for(let z=0,F=U.length;z<F;z++){const b=Array.isArray(U[z])?U[z]:[U[z]];for(let O=0,V=b.length;O<V;O++){const j=b[O],et=Array.isArray(j.value)?j.value:[j.value];for(let ft=0,rt=et.length;ft<rt;ft++){const B=et[ft],k=M(B),X=A%L,ut=X%k.boundary,N=X+ut;A+=ut,N!==0&&L-N<k.storage&&(A+=L-N),j.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=A,A+=k.storage}}}const P=A%L;return P>0&&(A+=L-P),D.__size=A,D.__cache={},this}function M(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),U}function S(D){const U=D.target;U.removeEventListener("dispose",S);const A=c.indexOf(U.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(r[U.id]),delete r[U.id],delete l[U.id]}function y(){for(const D in r)o.deleteBuffer(r[D]);c=[],r={},l={}}return{bind:p,update:h,dispose:y}}class SC{constructor(t={}){const{canvas:e=ZT(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const D=[],U=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Nn;let P=0,z=0,F=null,b=-1,O=null;const V=new rn,j=new rn;let et=null;const ft=new ce(0);let rt=0,B=e.width,k=e.height,X=1,ut=null,N=null;const K=new rn(0,0,B,k),pt=new rn(0,0,B,k);let yt=!1;const St=new km;let Ct=!1,tt=!1;const vt=new $e,At=new it,Kt=new rn,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function cn(){return F===null?X:1}let G=a;function Le(C,Y){return e.getContext(C,Y)}try{const C={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lm}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Et,!1),G===null){const Y="webgl2";if(G=Le(Y,C),G===null)throw Le(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let re,ne,Pt,Ve,Gt,se,je,Ze,I,R,nt,ht,_t,ct,zt,Rt,kt,qt,Mt,Lt,jt,Vt,Dt,oe;function q(){re=new UR(G),re.init(),Vt=new dC(G,re),ne=new TR(G,re,t,Vt),Pt=new fC(G,re),ne.reversedDepthBuffer&&v&&Pt.buffers.depth.setReversed(!0),Ve=new NR(G),Gt=new Jw,se=new hC(G,re,Pt,Gt,ne,Vt,Ve),je=new AR(A),Ze=new DR(A),I=new H1(G),Dt=new MR(G,I),R=new LR(G,I,Ve,Dt),nt=new zR(G,R,I,Ve),Mt=new PR(G,ne,se),Rt=new bR(Gt),ht=new Qw(A,je,Ze,re,ne,Dt,Rt),_t=new xC(A,Gt),ct=new tC,zt=new sC(re),qt=new SR(A,je,Ze,Pt,nt,x,p),kt=new uC(A,nt,ne),oe=new yC(G,Ve,ne,Pt),Lt=new ER(G,re,Ve),jt=new OR(G,re,Ve),Ve.programs=ht.programs,A.capabilities=ne,A.extensions=re,A.properties=Gt,A.renderLists=ct,A.shadowMap=kt,A.state=Pt,A.info=Ve}q();const bt=new gC(A,G);this.xr=bt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(B,k,!1))},this.getSize=function(C){return C.set(B,k)},this.setSize=function(C,Y,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,k=Y,e.width=Math.floor(C*X),e.height=Math.floor(Y*X),ot===!0&&(e.style.width=C+"px",e.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(B*X,k*X).floor()},this.setDrawingBufferSize=function(C,Y,ot){B=C,k=Y,X=ot,e.width=Math.floor(C*ot),e.height=Math.floor(Y*ot),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,Y,ot,lt){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,Y,ot,lt),Pt.viewport(V.copy(K).multiplyScalar(X).round())},this.getScissor=function(C){return C.copy(pt)},this.setScissor=function(C,Y,ot,lt){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,Y,ot,lt),Pt.scissor(j.copy(pt).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){Pt.setScissorTest(yt=C)},this.setOpaqueSort=function(C){ut=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ot=!0){let lt=0;if(C){let Q=!1;if(F!==null){const Tt=F.texture.format;Q=Tt===Fm||Tt===Bm||Tt===Im}if(Q){const Tt=F.texture.type,Ut=Tt===ha||Tt===gs||Tt===eu||Tt===nu||Tt===Pm||Tt===zm,Bt=qt.getClearColor(),Ot=qt.getClearAlpha(),Jt=Bt.r,te=Bt.g,Xt=Bt.b;Ut?(E[0]=Jt,E[1]=te,E[2]=Xt,E[3]=Ot,G.clearBufferuiv(G.COLOR,0,E)):(M[0]=Jt,M[1]=te,M[2]=Xt,M[3]=Ot,G.clearBufferiv(G.COLOR,0,M))}else lt|=G.COLOR_BUFFER_BIT}Y&&(lt|=G.DEPTH_BUFFER_BIT),ot&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),qt.dispose(),ct.dispose(),zt.dispose(),Gt.dispose(),je.dispose(),Ze.dispose(),nt.dispose(),Dt.dispose(),oe.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",gn),bt.removeEventListener("sessionend",vn),tn.stop()};function wt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=Ve.autoReset,Y=kt.enabled,ot=kt.autoUpdate,lt=kt.needsUpdate,Q=kt.type;q(),Ve.autoReset=C,kt.enabled=Y,kt.autoUpdate=ot,kt.needsUpdate=lt,kt.type=Q}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const Y=C.target;Y.removeEventListener("dispose",xt),Ht(Y)}function Ht(C){ae(C),Gt.remove(C)}function ae(C){const Y=Gt.get(C).programs;Y!==void 0&&(Y.forEach(function(ot){ht.releaseProgram(ot)}),C.isShaderMaterial&&ht.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ot,lt,Q,Tt){Y===null&&(Y=Wt);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=qa(C,Y,ot,lt,Q);Pt.setMaterial(lt,Ut);let Ot=ot.index,Jt=1;if(lt.wireframe===!0){if(Ot=R.getWireframeAttribute(ot),Ot===void 0)return;Jt=2}const te=ot.drawRange,Xt=ot.attributes.position;let fe=te.start*Jt,Ae=(te.start+te.count)*Jt;Tt!==null&&(fe=Math.max(fe,Tt.start*Jt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Jt)),Ot!==null?(fe=Math.max(fe,0),Ae=Math.min(Ae,Ot.count)):Xt!=null&&(fe=Math.max(fe,0),Ae=Math.min(Ae,Xt.count));const We=Ae-fe;if(We<0||We===1/0)return;Dt.setup(Q,lt,Bt,ot,Ot);let Oe,he=Lt;if(Ot!==null&&(Oe=I.get(Ot),he=jt,he.setIndex(Oe)),Q.isMesh)lt.wireframe===!0?(Pt.setLineWidth(lt.wireframeLinewidth*cn()),he.setMode(G.LINES)):he.setMode(G.TRIANGLES);else if(Q.isLine){let Qt=lt.linewidth;Qt===void 0&&(Qt=1),Pt.setLineWidth(Qt*cn()),Q.isLineSegments?he.setMode(G.LINES):Q.isLineLoop?he.setMode(G.LINE_LOOP):he.setMode(G.LINE_STRIP)}else Q.isPoints?he.setMode(G.POINTS):Q.isSprite&&he.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)su("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))he.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,Xe=Q._multiDrawCounts,ge=Q._multiDrawCount,zn=Ot?I.get(Ot).bytesPerElement:1,Vi=Gt.get(lt).currentProgram.getUniforms();for(let Xn=0;Xn<ge;Xn++)Vi.setValue(G,"_gl_DrawID",Xn),he.render(Qt[Xn]/zn,Xe[Xn])}else if(Q.isInstancedMesh)he.renderInstances(fe,We,Q.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xe=Math.min(ot.instanceCount,Qt);he.renderInstances(fe,We,Xe)}else he.render(fe,We)};function Ce(C,Y,ot){C.transparent===!0&&C.side===Fa&&C.forceSinglePass===!1?(C.side=ai,C.needsUpdate=!0,ta(C,Y,ot),C.side=Va,C.needsUpdate=!0,ta(C,Y,ot),C.side=Fa):ta(C,Y,ot)}this.compile=function(C,Y,ot=null){ot===null&&(ot=C),y=zt.get(ot),y.init(Y),U.push(y),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),C!==ot&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Bt=Tt[Ut];Ce(Bt,ot,Q),lt.add(Bt)}else Ce(Tt,ot,Q),lt.add(Tt)}),y=U.pop(),lt},this.compileAsync=function(C,Y,ot=null){const lt=this.compile(C,Y,ot);return new Promise(Q=>{function Tt(){if(lt.forEach(function(Ut){Gt.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){Q(C);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let be=null;function Gi(C){be&&be(C)}function gn(){tn.stop()}function vn(){tn.start()}const tn=new Xy;tn.setAnimationLoop(Gi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(C){be=C,bt.setAnimationLoop(C),C===null?tn.stop():tn.start()},bt.addEventListener("sessionstart",gn),bt.addEventListener("sessionend",vn),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(Y),Y=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,Y,F),y=zt.get(C,U.length),y.init(Y),U.push(y),vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),St.setFromProjectionMatrix(vt,ca,Y.reversedDepth),tt=this.localClippingEnabled,Ct=Rt.init(this.clippingPlanes,tt),S=ct.get(C,D.length),S.init(),D.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Tt=A.xr.getDepthSensingMesh();Tt!==null&&$i(Tt,Y,-1/0,A.sortObjects)}$i(C,Y,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ut,N),pe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,pe&&qt.addToRenderList(S,C),this.info.render.frame++,Ct===!0&&Rt.beginShadows();const ot=y.state.shadowsArray;kt.render(ot,C,Y),Ct===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,Q=S.transmissive;if(y.setupLights(),Y.isArrayCamera){const Tt=Y.cameras;if(Q.length>0)for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Ot=Tt[Ut];xu(lt,Q,C,Ot)}pe&&qt.render(C);for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++){const Ot=Tt[Ut];Ms(S,C,Ot,Ot.viewport)}}else Q.length>0&&xu(lt,Q,C,Y),pe&&qt.render(C),Ms(S,C,Y);F!==null&&z===0&&(se.updateMultisampleRenderTarget(F),se.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(A,C,Y),Dt.resetDefaultState(),b=-1,O=null,U.pop(),U.length>0?(y=U[U.length-1],Ct===!0&&Rt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function $i(C,Y,ot,lt){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||St.intersectsSprite(C)){lt&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(vt);const Ut=nt.update(C),Bt=C.material;Bt.visible&&S.push(C,Ut,Bt,ot,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||St.intersectsObject(C))){const Ut=nt.update(C),Bt=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Kt.copy(Ut.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(vt)),Array.isArray(Bt)){const Ot=Ut.groups;for(let Jt=0,te=Ot.length;Jt<te;Jt++){const Xt=Ot[Jt],fe=Bt[Xt.materialIndex];fe&&fe.visible&&S.push(C,Ut,fe,ot,Kt.z,Xt)}}else Bt.visible&&S.push(C,Ut,Bt,ot,Kt.z,null)}}const Tt=C.children;for(let Ut=0,Bt=Tt.length;Ut<Bt;Ut++)$i(Tt[Ut],Y,ot,lt)}function Ms(C,Y,ot,lt){const Q=C.opaque,Tt=C.transmissive,Ut=C.transparent;y.setupLightsView(ot),Ct===!0&&Rt.setGlobalState(A.clippingPlanes,ot),lt&&Pt.viewport(V.copy(lt)),Q.length>0&&Es(Q,Y,ot),Tt.length>0&&Es(Tt,Y,ot),Ut.length>0&&Es(Ut,Y,ot),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function xu(C,Y,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new vs(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?pu:ha,minFilter:fs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[lt.id],Ut=lt.viewport||V;Tt.setSize(Ut.z*A.transmissionResolutionScale,Ut.w*A.transmissionResolutionScale);const Bt=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Jt=A.getActiveMipmapLevel();A.setRenderTarget(Tt),A.getClearColor(ft),rt=A.getClearAlpha(),rt<1&&A.setClearColor(16777215,.5),A.clear(),pe&&qt.render(ot);const te=A.toneMapping;A.toneMapping=Rr;const Xt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),Ct===!0&&Rt.setGlobalState(A.clippingPlanes,lt),Es(C,ot,lt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ae=0,We=Y.length;Ae<We;Ae++){const Oe=Y[Ae],he=Oe.object,Qt=Oe.geometry,Xe=Oe.material,ge=Oe.group;if(Xe.side===Fa&&he.layers.test(lt.layers)){const zn=Xe.side;Xe.side=ai,Xe.needsUpdate=!0,Xo(he,ot,lt,Qt,Xe,ge),Xe.side=zn,Xe.needsUpdate=!0,fe=!0}}fe===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}A.setRenderTarget(Bt,Ot,Jt),A.setClearColor(ft,rt),Xt!==void 0&&(lt.viewport=Xt),A.toneMapping=te}function Es(C,Y,ot){const lt=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Tt=C.length;Q<Tt;Q++){const Ut=C[Q],Bt=Ut.object,Ot=Ut.geometry,Jt=Ut.group;let te=Ut.material;te.allowOverride===!0&&lt!==null&&(te=lt),Bt.layers.test(ot.layers)&&Xo(Bt,Y,ot,Ot,te,Jt)}}function Xo(C,Y,ot,lt,Q,Tt){C.onBeforeRender(A,Y,ot,lt,Q,Tt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(A,Y,ot,lt,C,Tt),Q.transparent===!0&&Q.side===Fa&&Q.forceSinglePass===!1?(Q.side=ai,Q.needsUpdate=!0,A.renderBufferDirect(ot,Y,lt,Q,C,Tt),Q.side=Va,Q.needsUpdate=!0,A.renderBufferDirect(ot,Y,lt,Q,C,Tt),Q.side=Fa):A.renderBufferDirect(ot,Y,lt,Q,C,Tt),C.onAfterRender(A,Y,ot,lt,Q,Tt)}function ta(C,Y,ot){Y.isScene!==!0&&(Y=Wt);const lt=Gt.get(C),Q=y.state.lights,Tt=y.state.shadowsArray,Ut=Q.state.version,Bt=ht.getParameters(C,Q.state,Tt,Y,ot),Ot=ht.getProgramCacheKey(Bt);let Jt=lt.programs;lt.environment=C.isMeshStandardMaterial?Y.environment:null,lt.fog=Y.fog,lt.envMap=(C.isMeshStandardMaterial?Ze:je).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",xt),Jt=new Map,lt.programs=Jt);let te=Jt.get(Ot);if(te!==void 0){if(lt.currentProgram===te&&lt.lightsStateVersion===Ut)return ma(C,Bt),te}else Bt.uniforms=ht.getUniforms(C),C.onBeforeCompile(Bt,A),te=ht.acquireProgram(Bt,Ot),Jt.set(Ot,te),lt.uniforms=Bt.uniforms;const Xt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xt.clippingPlanes=Rt.uniform),ma(C,Bt),lt.needsLights=Ya(C),lt.lightsStateVersion=Ut,lt.needsLights&&(Xt.ambientLightColor.value=Q.state.ambient,Xt.lightProbe.value=Q.state.probe,Xt.directionalLights.value=Q.state.directional,Xt.directionalLightShadows.value=Q.state.directionalShadow,Xt.spotLights.value=Q.state.spot,Xt.spotLightShadows.value=Q.state.spotShadow,Xt.rectAreaLights.value=Q.state.rectArea,Xt.ltc_1.value=Q.state.rectAreaLTC1,Xt.ltc_2.value=Q.state.rectAreaLTC2,Xt.pointLights.value=Q.state.point,Xt.pointLightShadows.value=Q.state.pointShadow,Xt.hemisphereLights.value=Q.state.hemi,Xt.directionalShadowMap.value=Q.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xt.spotShadowMap.value=Q.state.spotShadowMap,Xt.spotLightMatrix.value=Q.state.spotLightMatrix,Xt.spotLightMap.value=Q.state.spotLightMap,Xt.pointShadowMap.value=Q.state.pointShadowMap,Xt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=te,lt.uniformsList=null,te}function Ts(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=lf.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ma(C,Y){const ot=Gt.get(C);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function qa(C,Y,ot,lt,Q){Y.isScene!==!0&&(Y=Wt),se.resetTextureUnits();const Tt=Y.fog,Ut=lt.isMeshStandardMaterial?Y.environment:null,Bt=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Oo,Ot=(lt.isMeshStandardMaterial?Ze:je).get(lt.envMap||Ut),Jt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Xt=!!ot.morphAttributes.position,fe=!!ot.morphAttributes.normal,Ae=!!ot.morphAttributes.color;let We=Rr;lt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(We=A.toneMapping);const Oe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,he=Oe!==void 0?Oe.length:0,Qt=Gt.get(lt),Xe=y.state.lights;if(Ct===!0&&(tt===!0||C!==O)){const en=C===O&&lt.id===b;Rt.setState(lt,C,en)}let ge=!1;lt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Xe.state.version||Qt.outputColorSpace!==Bt||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==Ot||lt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==Xt||Qt.morphNormals!==fe||Qt.morphColors!==Ae||Qt.toneMapping!==We||Qt.morphTargetsCount!==he)&&(ge=!0):(ge=!0,Qt.__version=lt.version);let zn=Qt.currentProgram;ge===!0&&(zn=ta(lt,Y,Q));let Vi=!1,Xn=!1,En=!1;const Be=zn.getUniforms(),Wn=Qt.uniforms;if(Pt.useProgram(zn.program)&&(Vi=!0,Xn=!0,En=!0),lt.id!==b&&(b=lt.id,Xn=!0),Vi||O!==C){Pt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(G,"projectionMatrix",C.projectionMatrix),Be.setValue(G,"viewMatrix",C.matrixWorldInverse);const Dn=Be.map.cameraPosition;Dn!==void 0&&Dn.setValue(G,At.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&Be.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Be.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,Xn=!0,En=!0)}if(Q.isSkinnedMesh){Be.setOptional(G,Q,"bindMatrix"),Be.setOptional(G,Q,"bindMatrixInverse");const en=Q.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Be.setValue(G,"boneTexture",en.boneTexture,se))}Q.isBatchedMesh&&(Be.setOptional(G,Q,"batchingTexture"),Be.setValue(G,"batchingTexture",Q._matricesTexture,se),Be.setOptional(G,Q,"batchingIdTexture"),Be.setValue(G,"batchingIdTexture",Q._indirectTexture,se),Be.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(G,"batchingColorTexture",Q._colorsTexture,se));const In=ot.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Mt.update(Q,ot,zn),(Xn||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,Be.setValue(G,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Wn.envMap.value=Ot,Wn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Y.environment!==null&&(Wn.envMapIntensity.value=Y.environmentIntensity),Xn&&(Be.setValue(G,"toneMappingExposure",A.toneMappingExposure),Qt.needsLights&&Nr(Wn,En),Tt&&lt.fog===!0&&_t.refreshFogUniforms(Wn,Tt),_t.refreshMaterialUniforms(Wn,lt,X,k,y.state.transmissionRenderTarget[C.id]),lf.upload(G,Ts(Qt),Wn,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(lf.upload(G,Ts(Qt),Wn,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Be.setValue(G,"center",Q.center),Be.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(G,"normalMatrix",Q.normalMatrix),Be.setValue(G,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let Dn=0,bs=en.length;Dn<bs;Dn++){const Qn=en[Dn];oe.update(Qn,zn),oe.bind(Qn,zn)}}return zn}function Nr(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ya(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,Y,ot){const lt=Gt.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Gt.get(C.texture).__webglTexture=Y,Gt.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ot=Gt.get(C);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const fn=G.createFramebuffer();this.setRenderTarget=function(C,Y=0,ot=0){F=C,P=Y,z=ot;let lt=!0,Q=null,Tt=!1,Ut=!1;if(C){const Ot=Gt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(G.FRAMEBUFFER,null),lt=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Ot.__hasExternalTextures)se.rebindTextures(C,Gt.get(C.texture).__webglTexture,Gt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xt=C.depthTexture;if(Ot.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(C.width!==Xt.image.width||C.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const te=Gt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[Y])?Q=te[Y][ot]:Q=te[Y],Tt=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Q=Gt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?Q=te[ot]:Q=te,V.copy(C.viewport),j.copy(C.scissor),et=C.scissorTest}else V.copy(K).multiplyScalar(X).floor(),j.copy(pt).multiplyScalar(X).floor(),et=yt;if(ot!==0&&(Q=fn),Pt.bindFramebuffer(G.FRAMEBUFFER,Q)&&lt&&Pt.drawBuffers(C,Q),Pt.viewport(V),Pt.scissor(j),Pt.setScissorTest(et),Tt){const Ot=Gt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ot.__webglTexture,ot)}else if(Ut){const Ot=Y;for(let Jt=0;Jt<C.textures.length;Jt++){const te=Gt.get(C.textures[Jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Jt,te.__webglTexture,ot,Ot)}}else if(C!==null&&ot!==0){const Ot=Gt.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,ot)}b=-1},this.readRenderTargetPixels=function(C,Y,ot,lt,Q,Tt,Ut,Bt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Pt.bindFramebuffer(G.FRAMEBUFFER,Ot);try{const Jt=C.textures[Bt],te=Jt.format,Xt=Jt.type;if(!ne.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-lt&&ot>=0&&ot<=C.height-Q&&(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Bt),G.readPixels(Y,ot,lt,Q,Vt.convert(te),Vt.convert(Xt),Tt))}finally{const Jt=F!==null?Gt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ot,lt,Q,Tt,Ut,Bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(Y>=0&&Y<=C.width-lt&&ot>=0&&ot<=C.height-Q){Pt.bindFramebuffer(G.FRAMEBUFFER,Ot);const Jt=C.textures[Bt],te=Jt.format,Xt=Jt.type;if(!ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Bt),G.readPixels(Y,ot,lt,Q,Vt.convert(te),Vt.convert(Xt),0);const Ae=F!==null?Gt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer(G.FRAMEBUFFER,Ae);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await KT(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,fe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.deleteBuffer(fe),G.deleteSync(We),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(C.image.width*lt),Tt=Math.floor(C.image.height*lt),Ut=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;se.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Ut,Bt,Q,Tt),Pt.unbindTexture()};const yu=G.createFramebuffer(),Su=G.createFramebuffer();this.copyTextureToTexture=function(C,Y,ot=null,lt=null,Q=0,Tt=null){Tt===null&&(Q!==0?(su("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Ut,Bt,Ot,Jt,te,Xt,fe,Ae,We;const Oe=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(ot!==null)Ut=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,Ot=ot.isBox3?ot.max.z-ot.min.z:1,Jt=ot.min.x,te=ot.min.y,Xt=ot.isBox3?ot.min.z:0;else{const In=Math.pow(2,-Q);Ut=Math.floor(Oe.width*In),Bt=Math.floor(Oe.height*In),C.isDataArrayTexture?Ot=Oe.depth:C.isData3DTexture?Ot=Math.floor(Oe.depth*In):Ot=1,Jt=0,te=0,Xt=0}lt!==null?(fe=lt.x,Ae=lt.y,We=lt.z):(fe=0,Ae=0,We=0);const he=Vt.convert(Y.format),Qt=Vt.convert(Y.type);let Xe;Y.isData3DTexture?(se.setTexture3D(Y,0),Xe=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),Xe=G.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),Xe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ge=G.getParameter(G.UNPACK_ROW_LENGTH),zn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Vi=G.getParameter(G.UNPACK_SKIP_PIXELS),Xn=G.getParameter(G.UNPACK_SKIP_ROWS),En=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Oe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Oe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Xt);const Be=C.isDataArrayTexture||C.isData3DTexture,Wn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const In=Gt.get(C),en=Gt.get(Y),Dn=Gt.get(In.__renderTarget),bs=Gt.get(en.__renderTarget);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,bs.__webglFramebuffer);for(let Qn=0;Qn<Ot;Qn++)Be&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.get(C).__webglTexture,Q,Xt+Qn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Gt.get(Y).__webglTexture,Tt,We+Qn)),G.blitFramebuffer(Jt,te,Ut,Bt,fe,Ae,Ut,Bt,G.DEPTH_BUFFER_BIT,G.NEAREST);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Gt.has(C)){const In=Gt.get(C),en=Gt.get(Y);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,yu),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Su);for(let Dn=0;Dn<Ot;Dn++)Be?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,In.__webglTexture,Q,Xt+Dn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,In.__webglTexture,Q),Wn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,en.__webglTexture,Tt,We+Dn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,en.__webglTexture,Tt),Q!==0?G.blitFramebuffer(Jt,te,Ut,Bt,fe,Ae,Ut,Bt,G.COLOR_BUFFER_BIT,G.NEAREST):Wn?G.copyTexSubImage3D(Xe,Tt,fe,Ae,We+Dn,Jt,te,Ut,Bt):G.copyTexSubImage2D(Xe,Tt,fe,Ae,Jt,te,Ut,Bt);Pt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Wn?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Xe,Tt,fe,Ae,We,Ut,Bt,Ot,he,Qt,Oe.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Xe,Tt,fe,Ae,We,Ut,Bt,Ot,he,Oe.data):G.texSubImage3D(Xe,Tt,fe,Ae,We,Ut,Bt,Ot,he,Qt,Oe):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,fe,Ae,Ut,Bt,he,Qt,Oe.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,fe,Ae,Oe.width,Oe.height,he,Oe.data):G.texSubImage2D(G.TEXTURE_2D,Tt,fe,Ae,Ut,Bt,he,Qt,Oe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ge),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,En),Tt===0&&Y.generateMipmaps&&G.generateMipmap(Xe),Pt.unbindTexture()},this.initRenderTarget=function(C){Gt.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),Pt.unbindTexture()},this.resetState=function(){P=0,z=0,F=null,Pt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}const MC=/^[og]\s*(.+)?/,EC=/^mtllib /,TC=/^usemtl /,bC=/^usemap /,jx=/\s+/,Zx=new it,vp=new it,Kx=new it,Qx=new it,Pi=new it,tf=new ce;function AC(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const a=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const f={index:this.materials.length,name:r||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(p){const h={index:typeof p=="number"?p:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),r&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},a&&a.name&&typeof a.clone=="function"){const r=a.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const a=parseInt(t,10);return(a>=0?a-1:a+e/3)*3},parseNormalIndex:function(t,e){const a=parseInt(t,10);return(a>=0?a-1:a+e/3)*3},parseUVIndex:function(t,e){const a=parseInt(t,10);return(a>=0?a-1:a+e/2)*2},addVertex:function(t,e,a){const r=this.vertices,l=this.object.geometry.vertices;l.push(r[t+0],r[t+1],r[t+2]),l.push(r[e+0],r[e+1],r[e+2]),l.push(r[a+0],r[a+1],r[a+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,a){const r=this.normals,l=this.object.geometry.normals;l.push(r[t+0],r[t+1],r[t+2]),l.push(r[e+0],r[e+1],r[e+2]),l.push(r[a+0],r[a+1],r[a+2])},addFaceNormal:function(t,e,a){const r=this.vertices,l=this.object.geometry.normals;Zx.fromArray(r,t),vp.fromArray(r,e),Kx.fromArray(r,a),Pi.subVectors(Kx,vp),Qx.subVectors(Zx,vp),Pi.cross(Qx),Pi.normalize(),l.push(Pi.x,Pi.y,Pi.z),l.push(Pi.x,Pi.y,Pi.z),l.push(Pi.x,Pi.y,Pi.z)},addColor:function(t,e,a){const r=this.colors,l=this.object.geometry.colors;r[t]!==void 0&&l.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&l.push(r[e+0],r[e+1],r[e+2]),r[a]!==void 0&&l.push(r[a+0],r[a+1],r[a+2])},addUV:function(t,e,a){const r=this.uvs,l=this.object.geometry.uvs;l.push(r[t+0],r[t+1]),l.push(r[e+0],r[e+1]),l.push(r[a+0],r[a+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,a,r,l,c,f,p,h){const m=this.vertices.length;let g=this.parseVertexIndex(t,m),v=this.parseVertexIndex(e,m),x=this.parseVertexIndex(a,m);if(this.addVertex(g,v,x),this.addColor(g,v,x),f!==void 0&&f!==""){const E=this.normals.length;g=this.parseNormalIndex(f,E),v=this.parseNormalIndex(p,E),x=this.parseNormalIndex(h,E),this.addNormal(g,v,x)}else this.addFaceNormal(g,v,x);if(r!==void 0&&r!==""){const E=this.uvs.length;g=this.parseUVIndex(r,E),v=this.parseUVIndex(l,E),x=this.parseUVIndex(c,E),this.addUV(g,v,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let a=0,r=t.length;a<r;a++){const l=this.parseVertexIndex(t[a],e);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const a=this.vertices.length,r=this.uvs.length;for(let l=0,c=t.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(t[l],a));for(let l=0,c=e.length;l<c;l++)this.addUVLine(this.parseUVIndex(e[l],r))}};return o.startObject("",!1),o}class Jx extends Vo{constructor(t){super(t),this.materials=null}load(t,e,a,r){const l=this,c=new Gy(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(f){try{e(l.parse(f))}catch(p){r?r(p):console.error(p),l.manager.itemError(t)}},a,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new AC;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const a=t.split(`
`);let r=[];for(let f=0,p=a.length;f<p;f++){const h=a[f].trimStart();if(h.length===0)continue;const m=h.charAt(0);if(m!=="#")if(m==="v"){const g=h.split(jx);switch(g[0]){case"v":e.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(tf.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),Nn),e.colors.push(tf.r,tf.g,tf.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":e.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(m==="f"){const v=h.slice(1).trim().split(jx),x=[];for(let M=0,S=v.length;M<S;M++){const y=v[M];if(y.length>0){const D=y.split("/");x.push(D)}}const E=x[0];for(let M=1,S=x.length-1;M<S;M++){const y=x[M],D=x[M+1];e.addFace(E[0],y[0],D[0],E[1],y[1],D[1],E[2],y[2],D[2])}}else if(m==="l"){const g=h.substring(1).trim().split(" ");let v=[];const x=[];if(h.indexOf("/")===-1)v=g;else for(let E=0,M=g.length;E<M;E++){const S=g[E].split("/");S[0]!==""&&v.push(S[0]),S[1]!==""&&x.push(S[1])}e.addLineGeometry(v,x)}else if(m==="p"){const v=h.slice(1).trim().split(" ");e.addPointGeometry(v)}else if((r=MC.exec(h))!==null){const g=(" "+r[0].slice(1).trim()).slice(1);e.startObject(g)}else if(TC.test(h))e.object.startMaterial(h.substring(7).trim(),e.materialLibraries);else if(EC.test(h))e.materialLibraries.push(h.substring(7).trim());else if(bC.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(m==="s"){if(r=h.split(" "),r.length>1){const v=r[1].trim().toLowerCase();e.object.smooth=v!=="0"&&v!=="off"}else e.object.smooth=!0;const g=e.object.currentMaterial();g&&(g.smooth=e.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}e.finalize();const l=new yo;if(l.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let f=0,p=e.objects.length;f<p;f++){const h=e.objects[f],m=h.geometry,g=h.materials,v=m.type==="Line",x=m.type==="Points";let E=!1;if(m.vertices.length===0)continue;const M=new Ti;M.setAttribute("position",new jn(m.vertices,3)),m.normals.length>0&&M.setAttribute("normal",new jn(m.normals,3)),m.colors.length>0&&(E=!0,M.setAttribute("color",new jn(m.colors,3))),m.hasUVIndices===!0&&M.setAttribute("uv",new jn(m.uvs,2));const S=[];for(let D=0,U=g.length;D<U;D++){const A=g[D],L=A.name+"_"+A.smooth+"_"+E;let P=e.materials[L];if(this.materials!==null){if(P=this.materials.create(A.name),v&&P&&!(P instanceof of)){const z=new of;da.prototype.copy.call(z,P),z.color.copy(P.color),P=z}else if(x&&P&&!(P instanceof So)){const z=new So({size:10,sizeAttenuation:!1});da.prototype.copy.call(z,P),z.color.copy(P.color),z.map=P.map,P=z}}P===void 0&&(v?P=new of:x?P=new So({size:1,sizeAttenuation:!1}):P=new Fy,P.name=A.name,P.flatShading=!A.smooth,P.vertexColors=E,e.materials[L]=P),S.push(P)}let y;if(S.length>1){for(let D=0,U=g.length;D<U;D++){const A=g[D];M.addGroup(A.groupStart,A.groupCount,D)}v?y=new vx(M,S):x?y=new Zl(M,S):y=new ii(M,S)}else v?y=new vx(M,S[0]):x?y=new Zl(M,S[0]):y=new ii(M,S[0]);y.name=h.name,l.add(y)}else if(e.vertices.length>0){const f=new So({size:1,sizeAttenuation:!1}),p=new Ti;p.setAttribute("position",new jn(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(p.setAttribute("color",new jn(e.colors,3)),f.vertexColors=!0);const h=new Zl(p,f);l.add(h)}return l}}class RC extends Vo{constructor(t){super(t)}load(t,e,a,r){const l=this,c=this.path===""?z1.extractUrlBase(t):this.path,f=new Gy(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(p){try{e(l.parse(p,c))}catch(h){r?r(h):console.error(h),l.manager.itemError(t)}},a,r)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const a=t.split(`
`);let r={};const l=/\s+/,c={};for(let p=0;p<a.length;p++){let h=a[p];if(h=h.trim(),h.length===0||h.charAt(0)==="#")continue;const m=h.indexOf(" ");let g=m>=0?h.substring(0,m):h;g=g.toLowerCase();let v=m>=0?h.substring(m+1):"";if(v=v.trim(),g==="newmtl")r={name:v},c[v]=r;else if(g==="ka"||g==="kd"||g==="ks"||g==="ke"){const x=v.split(l,3);r[g]=[parseFloat(x[0]),parseFloat(x[1]),parseFloat(x[2])]}else r[g]=v}const f=new wC(this.resourcePath||e,this.materialOptions);return f.setCrossOrigin(this.crossOrigin),f.setManager(this.manager),f.setMaterials(c),f}}class wC{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Va,this.wrap=this.options.wrap!==void 0?this.options.wrap:pf}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const a in t){const r=t[a],l={};e[a]=l;for(const c in r){let f=!0,p=r[c];const h=c.toLowerCase();switch(h){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(p=[p[0]/255,p[1]/255,p[2]/255]),this.options&&this.options.ignoreZeroRGBs&&p[0]===0&&p[1]===0&&p[2]===0&&(f=!1);break}f&&(l[h]=p)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,a=this.materialsInfo[t],r={name:t,side:this.side};function l(f,p){return typeof p!="string"||p===""?"":/^https?:\/\//i.test(p)?p:f+p}function c(f,p){if(r[f])return;const h=e.getTextureParams(p,r),m=e.loadTexture(l(e.baseUrl,h.url));m.repeat.copy(h.scale),m.offset.copy(h.offset),m.wrapS=e.wrap,m.wrapT=e.wrap,(f==="map"||f==="emissiveMap")&&(m.colorSpace=Nn),r[f]=m}for(const f in a){const p=a[f];let h;if(p!=="")switch(f.toLowerCase()){case"kd":r.color=ye.colorSpaceToWorking(new ce().fromArray(p),Nn);break;case"ks":r.specular=ye.colorSpaceToWorking(new ce().fromArray(p),Nn);break;case"ke":r.emissive=ye.colorSpaceToWorking(new ce().fromArray(p),Nn);break;case"map_kd":c("map",p);break;case"map_ks":c("specularMap",p);break;case"map_ke":c("emissiveMap",p);break;case"norm":c("normalMap",p);break;case"map_bump":case"bump":c("bumpMap",p);break;case"disp":c("displacementMap",p);break;case"map_d":c("alphaMap",p),r.transparent=!0;break;case"ns":r.shininess=parseFloat(p);break;case"d":h=parseFloat(p),h<1&&(r.opacity=h,r.transparent=!0);break;case"tr":h=parseFloat(p),this.options&&this.options.invertTrProperty&&(h=1-h),h>0&&(r.opacity=1-h,r.transparent=!0);break}}return this.materials[t]=new Fy(r),this.materials[t]}getTextureParams(t,e){const a={scale:new Te(1,1),offset:new Te(0,0)},r=t.split(/\s+/);let l;return l=r.indexOf("-bm"),l>=0&&(e.bumpScale=parseFloat(r[l+1]),r.splice(l,2)),l=r.indexOf("-mm"),l>=0&&(e.displacementBias=parseFloat(r[l+1]),e.displacementScale=parseFloat(r[l+2]),r.splice(l,3)),l=r.indexOf("-s"),l>=0&&(a.scale.set(parseFloat(r[l+1]),parseFloat(r[l+2])),r.splice(l,4)),l=r.indexOf("-o"),l>=0&&(a.offset.set(parseFloat(r[l+1]),parseFloat(r[l+2])),r.splice(l,4)),a.url=r.join(" ").trim(),a}loadTexture(t,e,a,r,l){const c=this.manager!==void 0?this.manager:Hy;let f=c.getHandler(t);f===null&&(f=new U1(c)),f.setCrossOrigin&&f.setCrossOrigin(this.crossOrigin);const p=f.load(t,a,r,l);return e!==void 0&&(p.mapping=e),p}}function Ia(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Zy(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Po={duration:.5,overwrite:!1,delay:0},Wm,Pn,Ye,Bi=1e8,Ge=1/Bi,_m=Math.PI*2,CC=_m/4,DC=0,Ky=Math.sqrt,UC=Math.cos,LC=Math.sin,Cn=function(t){return typeof t=="string"},sn=function(t){return typeof t=="function"},Xa=function(t){return typeof t=="number"},qm=function(t){return typeof t>"u"},pa=function(t){return typeof t=="object"},ri=function(t){return t!==!1},Ym=function(){return typeof window<"u"},ef=function(t){return sn(t)||Cn(t)},Qy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,gm=/(?:-?\.?\d|\.)+/gi,Jy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Eo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$y=/[+-]=-?[.\d]+/,tS=/[^,'"\[\]\s]+/gi,OC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,sa,vm,jm,bi={},xf={},eS,nS=function(t){return(xf=zo(t,bi))&&ui},Zm=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ou=function(t,e){return!e&&console.warn(t)},iS=function(t,e){return t&&(bi[t]=e)&&xf&&(xf[t]=e)||bi},lu=function(){return 0},NC={suppressEvents:!0,isStart:!0,kill:!1},uf={suppressEvents:!0,kill:!1},PC={suppressEvents:!0},Km={},Cr=[],xm={},aS,xi={},yp={},$x=30,cf=[],Qm="",Jm=function(t){var e=t[0],a,r;if(pa(e)||sn(e)||(t=[t]),!(a=(e._gsap||{}).harness)){for(r=cf.length;r--&&!cf[r].targetTest(e););a=cf[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new wS(t[r],a)))||t.splice(r,1);return t},ds=function(t){return t._gsap||Jm(Fi(t))[0]._gsap},rS=function(t,e,a){return(a=t[e])&&sn(a)?t[e]():qm(a)&&t.getAttribute&&t.getAttribute(e)||a},si=function(t,e){return(t=t.split(",")).forEach(e)||t},un=function(t){return Math.round(t*1e5)/1e5||0},_n=function(t){return Math.round(t*1e7)/1e7||0},Ro=function(t,e){var a=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},zC=function(t,e){for(var a=e.length,r=0;t.indexOf(e[r])<0&&++r<a;);return r<a},yf=function(){var t=Cr.length,e=Cr.slice(0),a,r;for(xm={},Cr.length=0,a=0;a<t;a++)r=e[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},$m=function(t){return!!(t._initted||t._startAt||t.add)},sS=function(t,e,a,r){Cr.length&&!Pn&&yf(),t.render(e,a,!!(Pn&&e<0&&$m(t))),Cr.length&&!Pn&&yf()},oS=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(tS).length<2?e:Cn(t)?t.trim():t},lS=function(t){return t},Ai=function(t,e){for(var a in e)a in t||(t[a]=e[a]);return t},IC=function(t){return function(e,a){for(var r in a)r in e||r==="duration"&&t||r==="ease"||(e[r]=a[r])}},zo=function(t,e){for(var a in e)t[a]=e[a];return t},ty=function o(t,e){for(var a in e)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=pa(e[a])?o(t[a]||(t[a]={}),e[a]):e[a]);return t},Sf=function(t,e){var a={},r;for(r in t)r in e||(a[r]=t[r]);return a},Ql=function(t){var e=t.parent||Qe,a=t.keyframes?IC(kn(t.keyframes)):Ai;if(ri(t.inherit))for(;e;)a(t,e.vars.defaults),e=e.parent||e._dp;return t},BC=function(t,e){for(var a=t.length,r=a===e.length;r&&a--&&t[a]===e[a];);return a<0},uS=function(t,e,a,r,l){var c=t[r],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[a],t[a]=e),e._next?e._next._prev=e:t[r]=e,e._prev=c,e.parent=e._dp=t,e},Cf=function(t,e,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=e._prev,c=e._next;l?l._next=c:t[a]===e&&(t[a]=c),c?c._prev=l:t[r]===e&&(t[r]=l),e._next=e._prev=e.parent=null},Ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},FC=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ym=function(t,e,a,r){return t._startAt&&(Pn?t._startAt.revert(uf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},HC=function o(t){return!t||t._ts&&o(t.parent)},ey=function(t){return t._repeat?Io(t._tTime,t=t.duration()+t._rDelay)*t:0},Io=function(t,e){var a=Math.floor(t=_n(t/e));return t&&a===t?a-1:a},Mf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Df=function(t){return t._end=_n(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ge)||0))},Uf=function(t,e){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=_n(a._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Df(t),a._dirty||ps(a,t)),t},cS=function(t,e){var a;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(a=Mf(t.rawTime(),e),(!e._dur||vu(0,e.totalDuration(),a)-e._tTime>Ge)&&e.render(a,!0)),ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Ge}},la=function(t,e,a,r){return e.parent&&Ur(e),e._start=_n((Xa(a)?a:a||t!==Qe?zi(t,a,e):t._time)+e._delay),e._end=_n(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),uS(t,e,"_first","_last",t._sort?"_start":0),Sm(e)||(t._recent=e),r||cS(t,e),t._ts<0&&Uf(t,t._tTime),t},fS=function(t,e){return(bi.ScrollTrigger||Zm("scrollTrigger",e))&&bi.ScrollTrigger.create(e,t)},hS=function(t,e,a,r,l){if(e_(t,e,l),!t._initted)return 1;if(!a&&t._pt&&!Pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&aS!==yi.frame)return Cr.push(t),t._lazy=[l,r],1},GC=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Sm=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},VC=function(t,e,a,r){var l=t.ratio,c=e<0||!e&&(!t._start&&GC(t)&&!(!t._initted&&Sm(t))||(t._ts<0||t._dp._ts<0)&&!Sm(t))?0:1,f=t._rDelay,p=0,h,m,g;if(f&&t._repeat&&(p=vu(0,t._tDur,e),m=Io(p,f),t._yoyo&&m&1&&(c=1-c),m!==Io(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Pn||r||t._zTime===Ge||!e&&t._zTime){if(!t._initted&&hS(t,e,r,a,p))return;for(g=t._zTime,t._zTime=e||(a?Ge:0),a||(a=e&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,h=t._pt;h;)h.r(c,h.d),h=h._next;e<0&&ym(t,e,a,!0),t._onUpdate&&!a&&Si(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Si(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Ur(t,1),!a&&!Pn&&(Si(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kC=function(t,e,a){var r;if(a>e)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Bo=function(t,e,a,r){var l=t._repeat,c=_n(e)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:_n(c*(l+1)+t._rDelay*l):c,f>0&&!r&&Uf(t,t._tTime=t._tDur*f),t.parent&&Df(t),a||ps(t.parent,t),t},ny=function(t){return t instanceof Zn?ps(t):Bo(t,t._dur)},XC={_start:0,endTime:lu,totalDuration:lu},zi=function o(t,e,a){var r=t.labels,l=t._recent||XC,c=t.duration()>=Bi?l.endTime(!1):t._dur,f,p,h;return Cn(e)&&(isNaN(e)||e in r)?(p=e.charAt(0),h=e.substr(-1)==="%",f=e.indexOf("="),p==="<"||p===">"?(f>=0&&(e=e.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(f<0?l:a).totalDuration()/100:1)):f<0?(e in r||(r[e]=c),r[e]):(p=parseFloat(e.charAt(f-1)+e.substr(f+1)),h&&a&&(p=p/100*(kn(a)?a[0]:a).totalDuration()),f>1?o(t,e.substr(0,f-1),a)+p:c+p)):e==null?c:+e},Jl=function(t,e,a){var r=Xa(e[1]),l=(r?2:1)+(t<2?0:1),c=e[l],f,p;if(r&&(c.duration=e[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ri(p.vars.inherit)&&p.parent;c.immediateRender=ri(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new mn(e[0],c,e[l+1])},Or=function(t,e){return t||t===0?e(t):e},vu=function(t,e,a){return a<t?t:a>e?e:a},Vn=function(t,e){return!Cn(t)||!(e=OC.exec(t))?"":e[1]},WC=function(t,e,a){return Or(a,function(r){return vu(t,e,r)})},Mm=[].slice,dS=function(t,e){return t&&pa(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pa(t[0]))&&!t.nodeType&&t!==sa},qC=function(t,e,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return Cn(r)&&!e||dS(r,1)?(l=a).push.apply(l,Fi(r)):a.push(r)})||a},Fi=function(t,e,a){return Ye&&!e&&Ye.selector?Ye.selector(t):Cn(t)&&!a&&(vm||!Fo())?Mm.call((e||jm).querySelectorAll(t),0):kn(t)?qC(t,a):dS(t)?Mm.call(t,0):t?[t]:[]},Em=function(t){return t=Fi(t)[0]||ou("Invalid scope")||{},function(e){var a=t.current||t.nativeElement||t;return Fi(e,a.querySelectorAll?a:a===t?ou("Invalid scope")||jm.createElement("div"):t)}},pS=function(t){return t.sort(function(){return .5-Math.random()})},mS=function(t){if(sn(t))return t;var e=pa(t)?t:{each:t},a=ms(e.ease),r=e.from||0,l=parseFloat(e.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,h=e.axis,m=r,g=r;return Cn(r)?m=g={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(m=r[0],g=r[1]),function(v,x,E){var M=(E||e).length,S=c[M],y,D,U,A,L,P,z,F,b;if(!S){if(b=e.grid==="auto"?0:(e.grid||[1,Bi])[1],!b){for(z=-Bi;z<(z=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=c[M]=[],y=p?Math.min(b,M)*m-.5:r%b,D=b===Bi?0:p?M*g/b-.5:r/b|0,z=0,F=Bi,P=0;P<M;P++)U=P%b-y,A=D-(P/b|0),S[P]=L=h?Math.abs(h==="y"?A:U):Ky(U*U+A*A),L>z&&(z=L),L<F&&(F=L);r==="random"&&pS(S),S.max=z-F,S.min=F,S.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(b>M?M-1:h?h==="y"?M/b:b:Math.max(b,M/b))||0)*(r==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Vn(e.amount||e.each)||0,a=a&&M<0?bS(a):a}return M=(S[v]-S.min)/S.max||0,_n(S.b+(a?a(M):M)*S.v)+S.u}},Tm=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=_n(Math.round(parseFloat(a)/t)*t*e);return(r-r%1)/e+(Xa(a)?0:Vn(a))}},_S=function(t,e){var a=kn(t),r,l;return!a&&pa(t)&&(r=a=t.radius||Bi,t.values?(t=Fi(t.values),(l=!Xa(t[0]))&&(r*=r)):t=Tm(t.increment)),Or(e,a?sn(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),h=Bi,m=0,g=t.length,v,x;g--;)l?(v=t[g].x-f,x=t[g].y-p,v=v*v+x*x):v=Math.abs(t[g]-f),v<h&&(h=v,m=g);return m=!r||h<=r?t[m]:c,l||m===c||Xa(c)?m:m+Vn(c)}:Tm(t))},gS=function(t,e,a,r){return Or(kn(t)?!e:a===!0?!!(a=0):!r,function(){return kn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(e-t+a*.99))/a)*a*r)/r})},YC=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return function(r){return e.reduce(function(l,c){return c(l)},r)}},jC=function(t,e){return function(a){return t(parseFloat(a))+(e||Vn(a))}},ZC=function(t,e,a){return xS(t,e,0,1,a)},vS=function(t,e,a){return Or(a,function(r){return t[~~e(r)]})},KC=function o(t,e,a){var r=e-t;return kn(t)?vS(t,o(0,t.length),e):Or(a,function(l){return(r+(l-t)%r)%r+t})},QC=function o(t,e,a){var r=e-t,l=r*2;return kn(t)?vS(t,o(0,t.length-1),e):Or(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},uu=function(t){for(var e=0,a="",r,l,c,f;~(r=t.indexOf("random(",e));)c=t.indexOf(")",r),f=t.charAt(r+7)==="[",l=t.substr(r+7,c-r-7).match(f?tS:gm),a+=t.substr(e,r-e)+gS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=c+1;return a+t.substr(e,t.length-e)},xS=function(t,e,a,r,l){var c=e-t,f=r-a;return Or(l,function(p){return a+((p-t)/c*f||0)})},JC=function o(t,e,a,r){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var c=Cn(t),f={},p,h,m,g,v;if(a===!0&&(r=1)&&(a=null),c)t={p:t},e={p:e};else if(kn(t)&&!kn(e)){for(m=[],g=t.length,v=g-2,h=1;h<g;h++)m.push(o(t[h-1],t[h]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},a=e}else r||(t=zo(kn(t)?[]:{},t));if(!m){for(p in e)t_.call(f,t,p,"get",e[p]);l=function(E){return a_(E,f)||(c?t.p:t)}}}return Or(a,l)},iy=function(t,e,a){var r=t.labels,l=Bi,c,f,p;for(c in r)f=r[c]-e,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Si=function(t,e,a){var r=t.vars,l=r[e],c=Ye,f=t._ctx,p,h,m;if(l)return p=r[e+"Params"],h=r.callbackScope||t,a&&Cr.length&&yf(),f&&(Ye=f),m=p?l.apply(h,p):l.call(h),Ye=c,m},Yl=function(t){return Ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pn),t.progress()<1&&Si(t,"onInterrupt"),t},To,yS=[],SS=function(t){if(t)if(t=!t.name&&t.default||t,Ym()||t.headless){var e=t.name,a=sn(t),r=e&&!a&&t.init?function(){this._props=[]}:t,l={init:lu,render:a_,add:t_,kill:p2,modifier:d2,rawVars:0},c={targetTest:0,get:0,getSetter:i_,aliases:{},register:0};if(Fo(),t!==r){if(xi[e])return;Ai(r,Ai(Sf(t,l),c)),zo(r.prototype,zo(l,Sf(t,c))),xi[r.prop=e]=r,t.targetTest&&(cf.push(r),Km[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}iS(e,r),t.register&&t.register(ui,r,oi)}else yS.push(t)},He=255,jl={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},Sp=function(t,e,a){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(a-e)*t*6:t<.5?a:t*3<2?e+(a-e)*(2/3-t)*6:e)*He+.5|0},MS=function(t,e,a){var r=t?Xa(t)?[t>>16,t>>8&He,t&He]:0:jl.black,l,c,f,p,h,m,g,v,x,E;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),jl[t])r=jl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&He,r&He,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&He,t&He]}else if(t.substr(0,3)==="hsl"){if(r=E=t.match(gm),!e)p=+r[0]%360/360,h=+r[1]/100,m=+r[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,r.length>3&&(r[3]*=1),r[0]=Sp(p+1/3,l,c),r[1]=Sp(p,l,c),r[2]=Sp(p-1/3,l,c);else if(~t.indexOf("="))return r=t.match(Jy),a&&r.length<4&&(r[3]=1),r}else r=t.match(gm)||jl.transparent;r=r.map(Number)}return e&&!E&&(l=r[0]/He,c=r[1]/He,f=r[2]/He,g=Math.max(l,c,f),v=Math.min(l,c,f),m=(g+v)/2,g===v?p=h=0:(x=g-v,h=m>.5?x/(2-g-v):x/(g+v),p=g===l?(c-f)/x+(c<f?6:0):g===c?(f-l)/x+2:(l-c)/x+4,p*=60),r[0]=~~(p+.5),r[1]=~~(h*100+.5),r[2]=~~(m*100+.5)),a&&r.length<4&&(r[3]=1),r},ES=function(t){var e=[],a=[],r=-1;return t.split(Dr).forEach(function(l){var c=l.match(Eo)||[];e.push.apply(e,c),a.push(r+=c.length+1)}),e.c=a,e},ay=function(t,e,a){var r="",l=(t+r).match(Dr),c=e?"hsla(":"rgba(",f=0,p,h,m,g;if(!l)return t;if(l=l.map(function(v){return(v=MS(v,e,1))&&c+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(m=ES(t),p=a.c,p.join(r)!==m.c.join(r)))for(h=t.replace(Dr,"1").split(Eo),g=h.length-1;f<g;f++)r+=h[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:a).shift());if(!h)for(h=t.split(Dr),g=h.length-1;f<g;f++)r+=h[f]+l[f];return r+h[g]},Dr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in jl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),$C=/hsl[a]?\(/,TS=function(t){var e=t.join(" "),a;if(Dr.lastIndex=0,Dr.test(e))return a=$C.test(e),t[1]=ay(t[1],a),t[0]=ay(t[0],a,ES(t[1])),!0},cu,yi=(function(){var o=Date.now,t=500,e=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,h,m,g,v,x,E=function M(S){var y=o()-r,D=S===!0,U,A,L,P;if((y>t||y<0)&&(a+=y-e),r+=y,L=r-a,U=L-c,(U>0||D)&&(P=++g.frame,v=L-g.time*1e3,g.time=L=L/1e3,c+=U+(U>=l?4:l-U),A=1),D||(p=h(M)),A)for(x=0;x<f.length;x++)f[x](L,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){eS&&(!vm&&Ym()&&(sa=vm=window,jm=sa.document||{},bi.gsap=ui,(sa.gsapVersions||(sa.gsapVersions=[])).push(ui.version),nS(xf||sa.GreenSockGlobals||!sa.gsap&&sa||{}),yS.forEach(SS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),h=m||function(S){return setTimeout(S,c-g.time*1e3+1|0)},cu=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),cu=0,h=lu},lagSmoothing:function(S,y){t=S||1/0,e=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,y,D){var U=y?function(A,L,P,z){S(A,L,P,z),g.remove(U)}:S;return g.remove(S),f[D?"unshift":"push"](U),Fo(),U},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},g})(),Fo=function(){return!cu&&yi.wake()},Me={},t2=/^[\d.\-M][\d.\-,\s]/,e2=/["']/g,n2=function(t){for(var e={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,h;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,h=p.substr(0,f),e[r]=isNaN(h)?h.replace(e2,"").trim():+h,r=p.substr(f+1).trim();return e},i2=function(t){var e=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<a?t.indexOf(")",a+1):a)},a2=function(t){var e=(t+"").split("("),a=Me[e[0]];return a&&e.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[n2(e[1])]:i2(t).split(",").map(oS)):Me._CE&&t2.test(t)?Me._CE("",t):a},bS=function(t){return function(e){return 1-t(1-e)}},AS=function o(t,e){for(var a=t._first,r;a;)a instanceof Zn?o(a,e):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==e&&(a.timeline?o(a.timeline,e):(r=a._ease,a._ease=a._yEase,a._yEase=r,a._yoyo=e)),a=a._next},ms=function(t,e){return t&&(sn(t)?t:Me[t]||a2(t))||e},Ss=function(t,e,a,r){a===void 0&&(a=function(p){return 1-e(1-p)}),r===void 0&&(r=function(p){return p<.5?e(p*2)/2:1-e((1-p)*2)/2});var l={easeIn:e,easeOut:a,easeInOut:r},c;return si(t,function(f){Me[f]=bi[f]=l,Me[c=f.toLowerCase()]=a;for(var p in l)Me[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Me[f+"."+p]=l[p]}),l},RS=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Mp=function o(t,e,a){var r=e>=1?e:1,l=(a||(t?.3:.45))/(e<1?e:1),c=l/_m*(Math.asin(1/r)||0),f=function(m){return m===1?1:r*Math.pow(2,-10*m)*LC((m-c)*l)+1},p=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:RS(f);return l=_m/l,p.config=function(h,m){return o(t,h,m)},p},Ep=function o(t,e){e===void 0&&(e=1.70158);var a=function(c){return c?--c*c*((e+1)*c+e)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:RS(a);return r.config=function(l){return o(t,l)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Ss(o+",Power"+(e-1),t?function(a){return Math.pow(a,e)}:function(a){return a},function(a){return 1-Math.pow(1-a,e)},function(a){return a<.5?Math.pow(a*2,e)/2:1-Math.pow((1-a)*2,e)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;Ss("Elastic",Mp("in"),Mp("out"),Mp());(function(o,t){var e=1/t,a=2*e,r=2.5*e,l=function(f){return f<e?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ss("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Ss("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ss("Circ",function(o){return-(Ky(1-o*o)-1)});Ss("Sine",function(o){return o===1?1:-UC(o*CC)+1});Ss("Back",Ep("in"),Ep("out"),Ep());Me.SteppedEase=Me.steps=bi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var a=1/t,r=t+(e?0:1),l=e?1:0,c=1-Ge;return function(f){return((r*vu(0,c,f)|0)+l)*a}}};Po.ease=Me["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Qm+=o+","+o+"Params,"});var wS=function(t,e){this.id=DC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:rS,this.set=e?e.getSetter:i_},fu=(function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bo(this,+e.duration,1,1),this.data=e.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),cu||yi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Bo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(Fo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Uf(this,a),!l._dp||l.parent||cS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&la(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ge||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),sS(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+ey(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+ey(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?Io(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Mf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ge?0:this._rts,this.totalTime(vu(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),Df(this),FC(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Fo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&la(r,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ri(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mf(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=PC);var r=Pn;return Pn=a,$m(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Pn=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,ny(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,ny(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(zi(this,a),ri(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,ri(r)),this._dur||(this._zTime=-Ge),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-Ge)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this;return new Promise(function(l){var c=sn(a)?a:lS,f=function(){var h=r.then;r.then=null,sn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=h),l(c),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){Yl(this)},o})();Ai(fu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Zn=(function(o){Zy(t,o);function t(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ri(a.sortChildren),Qe&&la(a.parent||Qe,Ia(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&fS(Ia(l),a.scrollTrigger),l}var e=t.prototype;return e.to=function(r,l,c){return Jl(0,arguments,this),this},e.from=function(r,l,c){return Jl(1,arguments,this),this},e.fromTo=function(r,l,c,f){return Jl(2,arguments,this),this},e.set=function(r,l,c){return l.duration=0,l.parent=this,Ql(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new mn(r,l,zi(this,c),1),this},e.call=function(r,l,c){return la(this,mn.delayedCall(0,r,l),c)},e.staggerTo=function(r,l,c,f,p,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new mn(r,c,zi(this,p)),this},e.staggerFrom=function(r,l,c,f,p,h,m){return c.runBackwards=1,Ql(c).immediateRender=ri(c.immediateRender),this.staggerTo(r,l,c,f,p,h,m)},e.staggerFromTo=function(r,l,c,f,p,h,m,g){return f.startAt=c,Ql(f).immediateRender=ri(f.immediateRender),this.staggerTo(r,l,f,p,h,m,g)},e.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=r<=0?0:_n(r),g=this._zTime<0!=r<0&&(this._initted||!h),v,x,E,M,S,y,D,U,A,L,P,z;if(this!==Qe&&m>p&&r>=0&&(m=p),m!==this._tTime||c||g){if(f!==this._time&&h&&(m+=this._time-f,r+=this._time-f),v=m,A=this._start,U=this._ts,y=!U,g&&(h||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,S=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,l,c);if(v=_n(m%S),m===p?(M=this._repeat,v=h):(L=_n(m/S),M=~~L,M&&M===L&&(v=h,M--),v>h&&(v=h)),L=Io(this._tTime,S),!f&&this._tTime&&L!==M&&this._tTime-L*S-this._dur<=0&&(L=M),P&&M&1&&(v=h-v,z=1),M!==L&&!this._lock){var F=P&&L&1,b=F===(P&&M&1);if(M<L&&(F=!F),f=F?0:m%h?h:m,this._lock=1,this.render(f||(z?0:_n(M*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,b&&(this._lock=2,f=F?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;AS(this,z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=kC(this,_n(f),_n(v)),D&&(m-=v-(v=D._start))),this._tTime=m,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&m&&!l&&!L&&(Si(this,"onStart"),this._tTime!==m))return this;if(v>=f&&r>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&D!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,c),v!==this._time||!this._ts&&!y){D=0,E&&(m+=this._zTime=-Ge);break}}x=E}else{x=this._last;for(var O=r<0?r:v;x;){if(E=x._prev,(x._act||O<=x._end)&&x._ts&&D!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(O-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(O-x._start)*x._ts,l,c||Pn&&$m(x)),v!==this._time||!this._ts&&!y){D=0,E&&(m+=this._zTime=O?-Ge:Ge);break}}x=E}}if(D&&!l&&(this.pause(),D.render(v>=f?0:-Ge)._zTime=v>=f?1:-1,this._ts))return this._start=A,Df(this),this.render(r,l,c);this._onUpdate&&!l&&Si(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&f)&&(A===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(m===p&&this._ts>0||!m&&this._ts<0)&&Ur(this,1),!l&&!(r<0&&!f)&&(m||f||!p)&&(Si(this,m===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,l){var c=this;if(Xa(l)||(l=zi(this,l,r)),!(r instanceof fu)){if(kn(r))return r.forEach(function(f){return c.add(f,l)}),this;if(Cn(r))return this.addLabel(r,l);if(sn(r))r=mn.delayedCall(0,r);else return this}return this!==r?la(this,r,l):this},e.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Bi);for(var p=[],h=this._first;h;)h._start>=f&&(h instanceof mn?l&&p.push(h):(c&&p.push(h),r&&p.push.apply(p,h.getChildren(!0,l,c)))),h=h._next;return p},e.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},e.remove=function(r){return Cn(r)?this.removeLabel(r):sn(r)?this.killTweensOf(r):(r.parent===this&&Cf(this,r),r===this._recent&&(this._recent=this._last),ps(this))},e.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(yi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},e.addLabel=function(r,l){return this.labels[r]=zi(this,l),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,l,c){var f=mn.delayedCall(0,l||lu,c);return f.data="isPause",this._hasPause=1,la(this,f,zi(this,r))},e.removePause=function(r){var l=this._first;for(r=zi(this,r);l;)l._start===r&&l.data==="isPause"&&Ur(l),l=l._next},e.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)Er!==f[p]&&f[p].kill(r,l);return this},e.getTweensOf=function(r,l){for(var c=[],f=Fi(r),p=this._first,h=Xa(l),m;p;)p instanceof mn?zC(p._targets,f)&&(h?(!Er||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(m=p.getTweensOf(f,l)).length&&c.push.apply(c,m),p=p._next;return c},e.tweenTo=function(r,l){l=l||{};var c=this,f=zi(c,r),p=l,h=p.startAt,m=p.onStart,g=p.onStartParams,v=p.immediateRender,x,E=mn.to(c,Ai({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||Ge,onStart:function(){if(c.pause(),!x){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());E._dur!==S&&Bo(E,S,0,1).render(E._time,!0,!0),x=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},e.tweenFromTo=function(r,l,c){return this.tweenTo(l,Ai({startAt:{time:zi(this,r)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),iy(this,zi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),iy(this,zi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ge)},e.shiftChildren=function(r,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,h;f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(h in p)p[h]>=c&&(p[h]+=r);return ps(this)},e.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ps(this)},e.totalDuration=function(r){var l=0,c=this,f=c._last,p=Bi,h,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(g=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,la(c,f,m-f._delay,1)._lock=0):p=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=h;Bo(c,c===Qe&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Qe._ts&&(sS(Qe,Mf(r,Qe)),aS=yi.frame),yi.frame>=$x){$x+=Ei.autoSleep||120;var l=Qe._first;if((!l||!l._ts)&&Ei.autoSleep&&yi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||yi.sleep()}}},t})(fu);Ai(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var r2=function(t,e,a,r,l,c,f){var p=new oi(this._pt,t,e,0,1,NS,null,l),h=0,m=0,g,v,x,E,M,S,y,D;for(p.b=a,p.e=r,a+="",r+="",(y=~r.indexOf("random("))&&(r=uu(r)),c&&(D=[a,r],c(D,t,e),a=D[0],r=D[1]),v=a.match(xp)||[];g=xp.exec(r);)E=g[0],M=r.substring(h,g.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,p._pt={_next:p._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?Ro(S,E)-S:parseFloat(E)-S,m:x&&x<4?Math.round:0},h=xp.lastIndex);return p.c=h<r.length?r.substring(h,r.length):"",p.fp=f,($y.test(r)||y)&&(p.e=0),this._pt=p,p},t_=function(t,e,a,r,l,c,f,p,h,m){sn(r)&&(r=r(l||0,t,c));var g=t[e],v=a!=="get"?a:sn(g)?h?t[e.indexOf("set")||!sn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():g,x=sn(g)?h?c2:LS:n_,E;if(Cn(r)&&(~r.indexOf("random(")&&(r=uu(r)),r.charAt(1)==="="&&(E=Ro(v,r)+(Vn(v)||0),(E||E===0)&&(r=E))),!m||v!==r||bm)return!isNaN(v*r)&&r!==""?(E=new oi(this._pt,t,e,+v||0,r-(v||0),typeof g=="boolean"?h2:OS,0,x),h&&(E.fp=h),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&Zm(e,r),r2.call(this,t,e,v,r,x,p||Ei.stringFilter,h))},s2=function(t,e,a,r,l){if(sn(t)&&(t=$l(t,l,e,a,r)),!pa(t)||t.style&&t.nodeType||kn(t)||Qy(t))return Cn(t)?$l(t,l,e,a,r):t;var c={},f;for(f in t)c[f]=$l(t[f],l,e,a,r);return c},CS=function(t,e,a,r,l,c){var f,p,h,m;if(xi[t]&&(f=new xi[t]).init(l,f.rawVars?e[t]:s2(e[t],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new oi(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==To))for(h=a._ptLookup[a._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=p;return f},Er,bm,e_=function o(t,e,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,h=r.onUpdate,m=r.runBackwards,g=r.yoyoEase,v=r.keyframes,x=r.autoRevert,E=t._dur,M=t._startAt,S=t._targets,y=t.parent,D=y&&y.data==="nested"?y.vars.targets:S,U=t._overwrite==="auto"&&!Wm,A=t.timeline,L,P,z,F,b,O,V,j,et,ft,rt,B,k;if(A&&(!v||!l)&&(l="none"),t._ease=ms(l,Po.ease),t._yEase=g?bS(ms(g===!0?l:g,Po.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!r.runBackwards,!A||v&&!r.stagger){if(j=S[0]?ds(S[0]).harness:0,B=j&&r[j.prop],L=Sf(r,Km),M&&(M._zTime<0&&M.progress(1),e<0&&m&&f&&!x?M.render(-1,!0):M.revert(m&&E?uf:NC),M._lazy=0),c){if(Ur(t._startAt=mn.set(S,Ai({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&ri(p),startAt:null,delay:0,onUpdate:h&&function(){return Si(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pn||!f&&!x)&&t._startAt.revert(uf),f&&E&&e<=0&&a<=0){e&&(t._zTime=e);return}}else if(m&&E&&!M){if(e&&(f=!1),z=Ai({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ri(p),immediateRender:f,stagger:0,parent:y},L),B&&(z[j.prop]=B),Ur(t._startAt=mn.set(S,z)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pn?t._startAt.revert(uf):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,Ge,Ge);else if(!e)return}for(t._pt=t._ptCache=0,p=E&&ri(p)||p&&!E,P=0;P<S.length;P++){if(b=S[P],V=b._gsap||Jm(S)[P]._gsap,t._ptLookup[P]=ft={},xm[V.id]&&Cr.length&&yf(),rt=D===S?P:D.indexOf(b),j&&(et=new j).init(b,B||L,t,rt,D)!==!1&&(t._pt=F=new oi(t._pt,b,et.name,0,1,et.render,et,0,et.priority),et._props.forEach(function(X){ft[X]=F}),et.priority&&(O=1)),!j||B)for(z in L)xi[z]&&(et=CS(z,L,t,rt,b,D))?et.priority&&(O=1):ft[z]=F=t_.call(t,b,z,"get",L[z],rt,D,0,r.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),U&&t._pt&&(Er=t,Qe.killTweensOf(b,ft,t.globalTime(e)),k=!t.parent,Er=0),t._pt&&p&&(xm[V.id]=1)}O&&PS(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!k,v&&e<=0&&A.render(Bi,!0,!0)},o2=function(t,e,a,r,l,c,f,p){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,g,v,x;if(!h)for(h=t._ptCache[e]=[],v=t._ptLookup,x=t._targets.length;x--;){if(m=v[x][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return bm=1,t.vars[e]="+=0",e_(t,f),bm=0,p?ou(e+" not eligible for reset"):1;h.push(m)}for(x=h.length;x--;)g=h[x],m=g._pt||g,m.s=(r||r===0)&&!l?r:m.s+(r||0)+c*m.c,m.c=a-m.s,g.e&&(g.e=un(a)+Vn(g.e)),g.b&&(g.b=m.s+Vn(g.b))},l2=function(t,e){var a=t[0]?ds(t[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return e;l=zo({},e);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},u2=function(t,e,a,r){var l=e.ease||r||"power1.inOut",c,f;if(kn(e))f=a[t]||(a[t]=[]),e.forEach(function(p,h){return f.push({t:h/(e.length-1)*100,v:p,e:l})});else for(c in e)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},$l=function(t,e,a,r,l){return sn(t)?t.call(e,a,r,l):Cn(t)&&~t.indexOf("random(")?uu(t):t},DS=Qm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",US={};si(DS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return US[o]=1});var mn=(function(o){Zy(t,o);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:Ql(r))||this;var p=f.vars,h=p.duration,m=p.delay,g=p.immediateRender,v=p.stagger,x=p.overwrite,E=p.keyframes,M=p.defaults,S=p.scrollTrigger,y=p.yoyoEase,D=r.parent||Qe,U=(kn(a)||Qy(a)?Xa(a[0]):"length"in r)?[a]:Fi(a),A,L,P,z,F,b,O,V;if(f._targets=U.length?Jm(U):ou("GSAP target "+a+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||v||ef(h)||ef(m)){if(r=f.vars,A=f.timeline=new Zn({data:"nested",defaults:M||{},targets:D&&D.data==="nested"?D.vars.targets:U}),A.kill(),A.parent=A._dp=Ia(f),A._start=0,v||ef(h)||ef(m)){if(z=U.length,O=v&&mS(v),pa(v))for(F in v)~DS.indexOf(F)&&(V||(V={}),V[F]=v[F]);for(L=0;L<z;L++)P=Sf(r,US),P.stagger=0,y&&(P.yoyoEase=y),V&&zo(P,V),b=U[L],P.duration=+$l(h,Ia(f),L,b,U),P.delay=(+$l(m,Ia(f),L,b,U)||0)-f._delay,!v&&z===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),A.to(b,P,O?O(L,b,U):0),A._ease=Me.none;A.duration()?h=m=0:f.timeline=0}else if(E){Ql(Ai(A.vars.defaults,{ease:"none"})),A._ease=ms(E.ease||r.ease||"none");var j=0,et,ft,rt;if(kn(E))E.forEach(function(B){return A.to(U,B,">")}),A.duration();else{P={};for(F in E)F==="ease"||F==="easeEach"||u2(F,E[F],P,E.easeEach);for(F in P)for(et=P[F].sort(function(B,k){return B.t-k.t}),j=0,L=0;L<et.length;L++)ft=et[L],rt={ease:ft.e,duration:(ft.t-(L?et[L-1].t:0))/100*h},rt[F]=ft.v,A.to(U,rt,j),j+=rt.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||f.duration(h=A.duration())}else f.timeline=0;return x===!0&&!Wm&&(Er=Ia(f),Qe.killTweensOf(U),Er=0),la(D,Ia(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!h&&!E&&f._start===_n(D._time)&&ri(g)&&HC(Ia(f))&&D.data!=="nested")&&(f._tTime=-Ge,f.render(Math.max(0,-m)||0)),S&&fS(Ia(f),S),f}var e=t.prototype;return e.render=function(r,l,c){var f=this._time,p=this._tDur,h=this._dur,m=r<0,g=r>p-Ge&&!m?p:r<Ge?0:r,v,x,E,M,S,y,D,U,A;if(!h)VC(this,r,l,c);else if(g!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,U=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+r,l,c);if(v=_n(g%M),g===p?(E=this._repeat,v=h):(S=_n(g/M),E=~~S,E&&E===S?(v=h,E--):v>h&&(v=h)),y=this._yoyo&&E&1,y&&(A=this._yEase,v=h-v),S=Io(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(U&&this._yEase&&AS(U,y),this.vars.repeatRefresh&&!y&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(_n(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(hS(this,m?r:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(r,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(A||this._ease)(v/h),this._from&&(this.ratio=D=1-D),!f&&g&&!l&&!S&&(Si(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(D,x.d),x=x._next;U&&U.render(r<0?r:U._dur*U._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&ym(this,r,l,c),Si(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&Si(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&ym(this,r,!0,!0),(r||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ur(this,1),!l&&!(m&&!f)&&(g||f||y)&&(Si(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},e.resetTo=function(r,l,c,f,p){cu||yi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||e_(this,h),m=this._ease(h/this._dur),o2(this,r,l,c,f,m,h,p)?this.resetTo(r,l,c,f,1):(Uf(this,0),this.parent||uS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Yl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Er&&Er.vars.overwrite!==!0)._first||Yl(this),this.parent&&c!==this.timeline.totalDuration()&&Bo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?Fi(r):f,h=this._ptLookup,m=this._pt,g,v,x,E,M,S,y;if((!l||l==="all")&&BC(f,p))return l==="all"&&(this._pt=0),Yl(this);for(g=this._op=this._op||[],l!=="all"&&(Cn(l)&&(M={},si(l,function(D){return M[D]=1}),l=M),l=l2(f,l)),y=f.length;y--;)if(~p.indexOf(f[y])){v=h[y],l==="all"?(g[y]=l,E=v,x={}):(x=g[y]=g[y]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&Cf(this,S,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&m&&Yl(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return Jl(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return Jl(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Qe.killTweensOf(r,l,c)},t})(fu);Ai(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(o){mn[o]=function(){var t=new Zn,e=Mm.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var n_=function(t,e,a){return t[e]=a},LS=function(t,e,a){return t[e](a)},c2=function(t,e,a,r){return t[e](r.fp,a)},f2=function(t,e,a){return t.setAttribute(e,a)},i_=function(t,e){return sn(t[e])?LS:qm(t[e])&&t.setAttribute?f2:n_},OS=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},h2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},NS=function(t,e){var a=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=e.c}e.set(e.t,e.p,r,e)},a_=function(t,e){for(var a=e._pt;a;)a.r(t,a.d),a=a._next},d2=function(t,e,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,e,a),l=c},p2=function(t){for(var e=this._pt,a,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Cf(this,e,"_pt"):e.dep||(a=1),e=r;return!a},m2=function(t,e,a,r){r.mSet(t,e,r.m.call(r.tween,a,r.mt),r)},PS=function(t){for(var e=t._pt,a,r,l,c;e;){for(a=e._next,r=l;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:c)?e._prev._next=e:l=e,(e._next=r)?r._prev=e:c=e,e=a}t._pt=l},oi=(function(){function o(e,a,r,l,c,f,p,h,m){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||OS,this.d=p||this,this.set=h||n_,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=m2,this.m=a,this.mt=l,this.tween=r},o})();si(Qm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Km[o]=1});bi.TweenMax=bi.TweenLite=mn;bi.TimelineLite=bi.TimelineMax=Zn;Qe=new Zn({sortChildren:!1,defaults:Po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=TS;var _s=[],ff={},_2=[],ry=0,g2=0,Tp=function(t){return(ff[t]||_2).map(function(e){return e()})},Am=function(){var t=Date.now(),e=[];t-ry>2&&(Tp("matchMediaInit"),_s.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,h;for(f in r)c=sa.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,h=1);h&&(a.revert(),p&&e.push(a))}),Tp("matchMediaRevert"),e.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),ry=t,Tp("matchMedia"))},zS=(function(){function o(e,a){this.selector=a&&Em(a),this.data=[],this._r=[],this.isReverted=!1,this.id=g2++,e&&this.add(e)}var t=o.prototype;return t.add=function(a,r,l){sn(a)&&(l=r,r=a,a=sn);var c=this,f=function(){var h=Ye,m=c.selector,g;return h&&h!==c&&h.data.push(c),l&&(c.selector=Em(l)),Ye=c,g=r.apply(c,arguments),sn(g)&&c._r.push(g),Ye=h,c.selector=m,c.isReverted=!1,g};return c.last=f,a===sn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var r=Ye;Ye=null,a(this),Ye=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof mn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,h;p--;)h=l.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(a)}),p=l.data.length;p--;)h=l.data[p],h instanceof Zn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof mn)&&h.revert&&h.revert(a);l._r.forEach(function(m){return m(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=_s.length;c--;)_s[c].id===this.id&&_s.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),v2=(function(){function o(e){this.contexts=[],this.scope=e,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(a,r,l){pa(a)||(a={matches:a});var c=new zS(0,l||this.scope),f=c.conditions={},p,h,m;Ye&&!c.selector&&(c.selector=Ye.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(h in a)h==="all"?m=1:(p=sa.matchMedia(a[h]),p&&(_s.indexOf(c)<0&&_s.push(c),(f[h]=p.matches)&&(m=1),p.addListener?p.addListener(Am):p.addEventListener("change",Am)));return m&&r(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),Ef={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];e.forEach(function(r){return SS(r)})},timeline:function(t){return new Zn(t)},getTweensOf:function(t,e){return Qe.getTweensOf(t,e)},getProperty:function(t,e,a,r){Cn(t)&&(t=Fi(t)[0]);var l=ds(t||{}).get,c=a?lS:oS;return a==="native"&&(a=""),t&&(e?c((xi[e]&&xi[e].get||l)(t,e,a,r)):function(f,p,h){return c((xi[f]&&xi[f].get||l)(t,f,p,h))})},quickSetter:function(t,e,a){if(t=Fi(t),t.length>1){var r=t.map(function(m){return ui.quickSetter(m,e,a)}),l=r.length;return function(m){for(var g=l;g--;)r[g](m)}}t=t[0]||{};var c=xi[e],f=ds(t),p=f.harness&&(f.harness.aliases||{})[e]||e,h=c?function(m){var g=new c;To._pt=0,g.init(t,a?m+a:m,To,0,[t]),g.render(1,g),To._pt&&a_(1,To)}:f.set(t,p);return c?h:function(m){return h(t,p,a?m+a:m,f,1)}},quickTo:function(t,e,a){var r,l=ui.to(t,Ai((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,h,m){return l.resetTo(e,p,h,m)};return c.tween=l,c},isTweening:function(t){return Qe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ms(t.ease,Po.ease)),ty(Po,t||{})},config:function(t){return ty(Ei,t||{})},registerEffect:function(t){var e=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!xi[f]&&!bi[f]&&ou(e+" effect requires "+f+" plugin.")}),yp[e]=function(f,p,h){return a(Fi(f),Ai(p||{},l),h)},c&&(Zn.prototype[e]=function(f,p,h){return this.add(yp[e](f,pa(p)?p:(h=p)&&{},this),h)})},registerEase:function(t,e){Me[t]=ms(e)},parseEase:function(t,e){return arguments.length?ms(t,e):Me},getById:function(t){return Qe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var a=new Zn(t),r,l;for(a.smoothChildTiming=ri(t.smoothChildTiming),Qe.remove(a),a._dp=0,a._time=a._tTime=Qe._time,r=Qe._first;r;)l=r._next,(e||!(!r._dur&&r instanceof mn&&r.vars.onComplete===r._targets[0]))&&la(a,r,r._start-r._delay),r=l;return la(Qe,a,0),a},context:function(t,e){return t?new zS(t,e):Ye},matchMedia:function(t){return new v2(t)},matchMediaRefresh:function(){return _s.forEach(function(t){var e=t.conditions,a,r;for(r in e)e[r]&&(e[r]=!1,a=1);a&&t.revert()})||Am()},addEventListener:function(t,e){var a=ff[t]||(ff[t]=[]);~a.indexOf(e)||a.push(e)},removeEventListener:function(t,e){var a=ff[t],r=a&&a.indexOf(e);r>=0&&a.splice(r,1)},utils:{wrap:KC,wrapYoyo:QC,distribute:mS,random:gS,snap:_S,normalize:ZC,getUnit:Vn,clamp:WC,splitColor:MS,toArray:Fi,selector:Em,mapRange:xS,pipe:YC,unitize:jC,interpolate:JC,shuffle:pS},install:nS,effects:yp,ticker:yi,updateRoot:Zn.updateRoot,plugins:xi,globalTimeline:Qe,core:{PropTween:oi,globals:iS,Tween:mn,Timeline:Zn,Animation:fu,getCache:ds,_removeLinkedListItem:Cf,reverting:function(){return Pn},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return Wm=t}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ef[o]=mn[o]});yi.add(Zn.updateRoot);To=Ef.to({},{duration:0});var x2=function(t,e){for(var a=t._pt;a&&a.p!==e&&a.op!==e&&a.fp!==e;)a=a._next;return a},y2=function(t,e){var a=t._targets,r,l,c;for(r in e)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=x2(c,r)),c&&c.modifier&&c.modifier(e[r],t,a[l],r))},bp=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,h;if(Cn(l)&&(p={},si(l,function(m){return p[m]=1}),l=p),e){p={};for(h in l)p[h]=e(l[h]);l=p}y2(f,l)}}}},ui=Ef.registerPlugin({name:"attr",init:function(t,e,a,r,l){var c,f,p;this.tween=a;for(c in e)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",e[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,e){for(var a=e._pt;a;)Pn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,e){for(var a=e.length;a--;)this.add(t,a,t[a]||0,e[a],0,0,0,0,0,1)}},bp("roundProps",Tm),bp("modifiers"),bp("snap",_S))||Ef;mn.version=Zn.version=ui.version="3.13.0";eS=1;Ym()&&Fo();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sy,Tr,wo,r_,hs,oy,s_,S2=function(){return typeof window<"u"},Wa={},os=180/Math.PI,Co=Math.PI/180,xo=Math.atan2,ly=1e8,o_=/([A-Z])/g,M2=/(left|right|width|margin|padding|x)/i,E2=/[\s,\(]\S/,fa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},T2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},b2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A2=function(t,e){var a=e.s+e.c*t;e.set(e.t,e.p,~~(a+(a<0?-.5:.5))+e.u,e)},IS=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},BS=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},R2=function(t,e,a){return t.style[e]=a},w2=function(t,e,a){return t.style.setProperty(e,a)},C2=function(t,e,a){return t._gsap[e]=a},D2=function(t,e,a){return t._gsap.scaleX=t._gsap.scaleY=a},U2=function(t,e,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},L2=function(t,e,a,r,l){var c=t._gsap;c[e]=a,c.renderTransform(l,c)},Je="transform",li=Je+"Origin",O2=function o(t,e){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in Wa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=fa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Ba(r,f)}):this.tfm[t]=c.x?c[t]:Ba(r,t),t===li&&(this.tfm.zOrigin=c.zOrigin);else return fa.transform.split(",").forEach(function(f){return o.call(a,f,e)});if(this.props.indexOf(Je)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,e,"")),t=Je}(l||e)&&this.props.push(t,e,l[t])},FS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},N2=function(){var t=this.props,e=this.target,a=e.style,r=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(o_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=s_(),(!l||!l.isStart)&&!a[Je]&&(FS(a),r.zOrigin&&a[li]&&(a[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},HS=function(t,e){var a={target:t,props:[],revert:N2,save:O2};return t._gsap||ui.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return a.save(r)}),a},GS,wm=function(t,e){var a=Tr.createElementNS?Tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Tr.createElement(t);return a&&a.style?a:Tr.createElement(t)},Hi=function o(t,e,a){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(o_,"-$1").toLowerCase())||r.getPropertyValue(e)||!a&&o(t,Ho(e)||e,1)||""},uy="O,Moz,ms,Ms,Webkit".split(","),Ho=function(t,e,a){var r=e||hs,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(uy[c]+t in l););return c<0?null:(c===3?"ms":c>=0?uy[c]:"")+t},Cm=function(){S2()&&window.document&&(sy=window,Tr=sy.document,wo=Tr.documentElement,hs=wm("div")||{style:{}},wm("div"),Je=Ho(Je),li=Je+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",GS=!!Ho("perspective"),s_=ui.core.reverting,r_=1)},cy=function(t){var e=t.ownerSVGElement,a=wm("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),wo.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),wo.removeChild(a),l},fy=function(t,e){for(var a=e.length;a--;)if(t.hasAttribute(e[a]))return t.getAttribute(e[a])},VS=function(t){var e,a;try{e=t.getBBox()}catch{e=cy(t),a=1}return e&&(e.width||e.height)||a||(e=cy(t)),e&&!e.width&&!e.x&&!e.y?{x:+fy(t,["x","cx","x1"])||0,y:+fy(t,["y","cy","y1"])||0,width:0,height:0}:e},kS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&VS(t))},ys=function(t,e){if(e){var a=t.style,r;e in Wa&&e!==li&&(e=Je),a.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),a.removeProperty(r==="--"?e:e.replace(o_,"-$1").toLowerCase())):a.removeAttribute(e)}},br=function(t,e,a,r,l,c){var f=new oi(t._pt,e,a,0,1,c?BS:IS);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},hy={deg:1,rad:1,turn:1},P2={grid:1,flex:1},Lr=function o(t,e,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=hs.style,p=M2.test(e),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(p?"Width":"Height"),g=100,v=r==="px",x=r==="%",E,M,S,y;if(r===c||!l||hy[r]||hy[c])return l;if(c!=="px"&&!v&&(l=o(t,e,a,"px")),y=t.getCTM&&kS(t),(x||c==="%")&&(Wa[e]||~e.indexOf("adius")))return E=y?t.getBBox()[p?"width":"height"]:t[m],un(x?l/E*g:l/100*E);if(f[p?"width":"height"]=g+(v?c:r),M=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,y&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Tr||!M.appendChild)&&(M=Tr.body),S=M._gsap,S&&x&&S.width&&p&&S.time===yi.time&&!S.uncache)return un(l/S.width*g);if(x&&(e==="height"||e==="width")){var D=t.style[e];t.style[e]=g+r,E=t[m],D?t.style[e]=D:ys(t,e)}else(x||c==="%")&&!P2[Hi(M,"display")]&&(f.position=Hi(t,"position")),M===t&&(f.position="static"),M.appendChild(hs),E=hs[m],M.removeChild(hs),f.position="absolute";return p&&x&&(S=ds(M),S.time=yi.time,S.width=M[m]),un(v?E*l/g:E&&l?g/E*l:0)},Ba=function(t,e,a,r){var l;return r_||Cm(),e in fa&&e!=="transform"&&(e=fa[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wa[e]&&e!=="transform"?(l=du(t,r),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:bf(Hi(t,li))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=Tf[e]&&Tf[e](t,e,a)||Hi(t,e)||rS(t,e)||(e==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Lr(t,e,l,a)+a:l},z2=function(t,e,a,r){if(!a||a==="none"){var l=Ho(e,t,1),c=l&&Hi(t,l,1);c&&c!==a?(e=l,a=c):e==="borderColor"&&(a=Hi(t,"borderTopColor"))}var f=new oi(this._pt,t.style,e,0,1,NS),p=0,h=0,m,g,v,x,E,M,S,y,D,U,A,L;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=Hi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=t.style[e],t.style[e]=r,r=Hi(t,e)||r,M?t.style[e]=M:ys(t,e)),m=[a,r],TS(m),a=m[0],r=m[1],v=a.match(Eo)||[],L=r.match(Eo)||[],L.length){for(;g=Eo.exec(r);)S=g[0],D=r.substring(p,g.index),E?E=(E+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(E=1),S!==(M=v[h++]||"")&&(x=parseFloat(M)||0,A=M.substr((x+"").length),S.charAt(1)==="="&&(S=Ro(x,S)+A),y=parseFloat(S),U=S.substr((y+"").length),p=Eo.lastIndex-U.length,U||(U=U||Ei.units[e]||A,p===r.length&&(r+=U,f.e+=U)),A!==U&&(x=Lr(t,e,M,U)||0),f._pt={_next:f._pt,p:D||h===1?D:",",s:x,c:y-x,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=e==="display"&&r==="none"?BS:IS;return $y.test(r)&&(f.e=0),this._pt=f,f},dy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I2=function(t){var e=t.split(" "),a=e[0],r=e[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),e[0]=dy[a]||a,e[1]=dy[r]||r,e.join(" ")},B2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var a=e.t,r=a.style,l=e.u,c=a._gsap,f,p,h;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],Wa[f]&&(p=1,f=f==="transformOrigin"?li:Je),ys(a,f);p&&(ys(a,Je),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",du(a,1),c.uncache=1,FS(r)))}},Tf={clearProps:function(t,e,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new oi(t._pt,e,a,0,0,B2);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},hu=[1,0,0,1,0,0],XS={},WS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},py=function(t){var e=Hi(t,Je);return WS(e)?hu:e.substr(7).match(Jy).map(un)},l_=function(t,e){var a=t._gsap||ds(t),r=t.style,l=py(t),c,f,p,h;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?hu:l):(l===hu&&!t.offsetParent&&t!==wo&&!a.svg&&(p=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,wo.appendChild(t)),l=py(t),p?r.display=p:ys(t,"display"),h&&(f?c.insertBefore(t,f):c?c.appendChild(t):wo.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Dm=function(t,e,a,r,l,c){var f=t._gsap,p=l||l_(t,!0),h=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,x=p[0],E=p[1],M=p[2],S=p[3],y=p[4],D=p[5],U=e.split(" "),A=parseFloat(U[0])||0,L=parseFloat(U[1])||0,P,z,F,b;a?p!==hu&&(z=x*S-E*M)&&(F=A*(S/z)+L*(-M/z)+(M*D-S*y)/z,b=A*(-E/z)+L*(x/z)-(x*D-E*y)/z,A=F,L=b):(P=VS(t),A=P.x+(~U[0].indexOf("%")?A/100*P.width:A),L=P.y+(~(U[1]||U[0]).indexOf("%")?L/100*P.height:L)),r||r!==!1&&f.smooth?(y=A-h,D=L-m,f.xOffset=g+(y*x+D*M)-y,f.yOffset=v+(y*E+D*S)-D):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=L,f.smooth=!!r,f.origin=e,f.originIsAbsolute=!!a,t.style[li]="0px 0px",c&&(br(c,f,"xOrigin",h,A),br(c,f,"yOrigin",m,L),br(c,f,"xOffset",g,f.xOffset),br(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+L)},du=function(t,e){var a=t._gsap||new wS(t);if("x"in a&&!e&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),h=Hi(t,li)||"0",m,g,v,x,E,M,S,y,D,U,A,L,P,z,F,b,O,V,j,et,ft,rt,B,k,X,ut,N,K,pt,yt,St,Ct;return m=g=v=M=S=y=D=U=A=0,x=E=1,a.svg=!!(t.getCTM&&kS(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[Je]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[Je]!=="none"?p[Je]:"")),r.scale=r.rotate=r.translate="none"),z=l_(t,a.svg),a.svg&&(a.uncache?(X=t.getBBox(),h=a.xOrigin-X.x+"px "+(a.yOrigin-X.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Dm(t,k||h,!!k||a.originIsAbsolute,a.smooth!==!1,z)),L=a.xOrigin||0,P=a.yOrigin||0,z!==hu&&(V=z[0],j=z[1],et=z[2],ft=z[3],m=rt=z[4],g=B=z[5],z.length===6?(x=Math.sqrt(V*V+j*j),E=Math.sqrt(ft*ft+et*et),M=V||j?xo(j,V)*os:0,D=et||ft?xo(et,ft)*os+M:0,D&&(E*=Math.abs(Math.cos(D*Co))),a.svg&&(m-=L-(L*V+P*et),g-=P-(L*j+P*ft))):(Ct=z[6],yt=z[7],N=z[8],K=z[9],pt=z[10],St=z[11],m=z[12],g=z[13],v=z[14],F=xo(Ct,pt),S=F*os,F&&(b=Math.cos(-F),O=Math.sin(-F),k=rt*b+N*O,X=B*b+K*O,ut=Ct*b+pt*O,N=rt*-O+N*b,K=B*-O+K*b,pt=Ct*-O+pt*b,St=yt*-O+St*b,rt=k,B=X,Ct=ut),F=xo(-et,pt),y=F*os,F&&(b=Math.cos(-F),O=Math.sin(-F),k=V*b-N*O,X=j*b-K*O,ut=et*b-pt*O,St=ft*O+St*b,V=k,j=X,et=ut),F=xo(j,V),M=F*os,F&&(b=Math.cos(F),O=Math.sin(F),k=V*b+j*O,X=rt*b+B*O,j=j*b-V*O,B=B*b-rt*O,V=k,rt=X),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,y=180-y),x=un(Math.sqrt(V*V+j*j+et*et)),E=un(Math.sqrt(B*B+Ct*Ct)),F=xo(rt,B),D=Math.abs(F)>2e-4?F*os:0,A=St?1/(St<0?-St:St):0),a.svg&&(k=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!WS(Hi(t,Je)),k&&t.setAttribute("transform",k))),Math.abs(D)>90&&Math.abs(D)<270&&(l?(x*=-1,D+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,D+=D<=0?180:-180)),e=e||a.uncache,a.x=m-((a.xPercent=m&&(!e&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!e&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=un(x),a.scaleY=un(E),a.rotation=un(M)+f,a.rotationX=un(S)+f,a.rotationY=un(y)+f,a.skewX=D+f,a.skewY=U+f,a.transformPerspective=A+c,(a.zOrigin=parseFloat(h.split(" ")[2])||!e&&a.zOrigin||0)&&(r[li]=bf(h)),a.xOffset=a.yOffset=0,a.force3D=Ei.force3D,a.renderTransform=a.svg?H2:GS?qS:F2,a.uncache=0,a},bf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ap=function(t,e,a){var r=Vn(e);return un(parseFloat(e)+parseFloat(Lr(t,"x",a+"px",r)))+r},F2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qS(t,e)},is="0deg",Wl="0px",as=") ",qS=function(t,e){var a=e||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,h=a.rotation,m=a.rotationY,g=a.rotationX,v=a.skewX,x=a.skewY,E=a.scaleX,M=a.scaleY,S=a.transformPerspective,y=a.force3D,D=a.target,U=a.zOrigin,A="",L=y==="auto"&&t&&t!==1||y===!0;if(U&&(g!==is||m!==is)){var P=parseFloat(m)*Co,z=Math.sin(P),F=Math.cos(P),b;P=parseFloat(g)*Co,b=Math.cos(P),c=Ap(D,c,z*b*-U),f=Ap(D,f,-Math.sin(P)*-U),p=Ap(D,p,F*b*-U+U)}S!==Wl&&(A+="perspective("+S+as),(r||l)&&(A+="translate("+r+"%, "+l+"%) "),(L||c!==Wl||f!==Wl||p!==Wl)&&(A+=p!==Wl||L?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+as),h!==is&&(A+="rotate("+h+as),m!==is&&(A+="rotateY("+m+as),g!==is&&(A+="rotateX("+g+as),(v!==is||x!==is)&&(A+="skew("+v+", "+x+as),(E!==1||M!==1)&&(A+="scale("+E+", "+M+as),D.style[Je]=A||"translate(0, 0)"},H2=function(t,e){var a=e||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,h=a.skewX,m=a.skewY,g=a.scaleX,v=a.scaleY,x=a.target,E=a.xOrigin,M=a.yOrigin,S=a.xOffset,y=a.yOffset,D=a.forceCSS,U=parseFloat(c),A=parseFloat(f),L,P,z,F,b;p=parseFloat(p),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,p+=m),p||h?(p*=Co,h*=Co,L=Math.cos(p)*g,P=Math.sin(p)*g,z=Math.sin(p-h)*-v,F=Math.cos(p-h)*v,h&&(m*=Co,b=Math.tan(h-m),b=Math.sqrt(1+b*b),z*=b,F*=b,m&&(b=Math.tan(m),b=Math.sqrt(1+b*b),L*=b,P*=b)),L=un(L),P=un(P),z=un(z),F=un(F)):(L=g,F=v,P=z=0),(U&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(U=Lr(x,"x",c,"px"),A=Lr(x,"y",f,"px")),(E||M||S||y)&&(U=un(U+E-(E*L+M*z)+S),A=un(A+M-(E*P+M*F)+y)),(r||l)&&(b=x.getBBox(),U=un(U+r/100*b.width),A=un(A+l/100*b.height)),b="matrix("+L+","+P+","+z+","+F+","+U+","+A+")",x.setAttribute("transform",b),D&&(x.style[Je]=b)},G2=function(t,e,a,r,l){var c=360,f=Cn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?os:1),h=p-r,m=r+h+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),g==="cw"&&h<0?h=(h+c*ly)%c-~~(h/c)*c:g==="ccw"&&h>0&&(h=(h-c*ly)%c-~~(h/c)*c)),t._pt=v=new oi(t._pt,e,a,r,h,T2),v.e=m,v.u="deg",t._props.push(a),v},my=function(t,e){for(var a in e)t[a]=e[a];return t},V2=function(t,e,a){var r=my({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,h,m,g,v,x,E;r.svg?(h=a.getAttribute("transform"),a.setAttribute("transform",""),c[Je]=e,f=du(a,1),ys(a,Je),a.setAttribute("transform",h)):(h=getComputedStyle(a)[Je],c[Je]=e,f=du(a,1),c[Je]=h);for(p in Wa)h=r[p],m=f[p],h!==m&&l.indexOf(p)<0&&(x=Vn(h),E=Vn(m),g=x!==E?Lr(a,p,h,E):parseFloat(h),v=parseFloat(m),t._pt=new oi(t._pt,f,p,g,v-g,Rm),t._pt.u=E||0,t._props.push(p));my(f,r)};si("padding,margin,Width,Radius",function(o,t){var e="Top",a="Right",r="Bottom",l="Left",c=(t<3?[e,a,r,l]:[e+l,e+a,r+a,r+l]).map(function(f){return t<2?o+f:"border"+f+o});Tf[t>1?"border"+o:o]=function(f,p,h,m,g){var v,x;if(arguments.length<4)return v=c.map(function(E){return Ba(f,E,h)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(m+"").split(" "),x={},c.forEach(function(E,M){return x[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,x,g)}});var YS={name:"css",register:Cm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,a,r,l){var c=this._props,f=t.style,p=a.vars.startAt,h,m,g,v,x,E,M,S,y,D,U,A,L,P,z,F;r_||Cm(),this.styles=this.styles||HS(t),F=this.styles.props,this.tween=a;for(M in e)if(M!=="autoRound"&&(m=e[M],!(xi[M]&&CS(M,e,a,r,t,l)))){if(x=typeof m,E=Tf[M],x==="function"&&(m=m.call(a,r,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=uu(m)),E)E(this,t,M,m,a)&&(z=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Dr.lastIndex=0,Dr.test(h)||(S=Vn(h),y=Vn(m)),y?S!==y&&(h=Lr(t,M,h,y)+y):S&&(m+=S),this.add(f,"setProperty",h,m,r,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(x!=="undefined"){if(p&&M in p?(h=typeof p[M]=="function"?p[M].call(a,r,t,l):p[M],Cn(h)&&~h.indexOf("random(")&&(h=uu(h)),Vn(h+"")||h==="auto"||(h+=Ei.units[M]||Vn(Ba(t,M))||""),(h+"").charAt(1)==="="&&(h=Ba(t,M))):h=Ba(t,M),v=parseFloat(h),D=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),D&&(m=m.substr(2)),g=parseFloat(m),M in fa&&(M==="autoAlpha"&&(v===1&&Ba(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),br(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=fa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),U=M in Wa,U){if(this.styles.save(M),x==="string"&&m.substring(0,6)==="var(--"&&(m=Hi(t,m.substring(4,m.indexOf(")"))),g=parseFloat(m)),A||(L=t._gsap,L.renderTransform&&!e.parseTransform||du(t,e.parseTransform),P=e.smoothOrigin!==!1&&L.smooth,A=this._pt=new oi(this._pt,f,Je,0,1,L.renderTransform,L,0,-1),A.dep=1),M==="scale")this._pt=new oi(this._pt,L,"scaleY",L.scaleY,(D?Ro(L.scaleY,D+g):g)-L.scaleY||0,Rm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(li,0,f[li]),m=I2(m),L.svg?Dm(t,m,0,P,0,this):(y=parseFloat(m.split(" ")[2])||0,y!==L.zOrigin&&br(this,L,"zOrigin",L.zOrigin,y),br(this,f,M,bf(h),bf(m)));continue}else if(M==="svgOrigin"){Dm(t,m,1,P,0,this);continue}else if(M in XS){G2(this,L,M,v,D?Ro(v,D+m):m);continue}else if(M==="smoothOrigin"){br(this,L,"smooth",L.smooth,m);continue}else if(M==="force3D"){L[M]=m;continue}else if(M==="transform"){V2(this,m,t);continue}}else M in f||(M=Ho(M)||M);if(U||(g||g===0)&&(v||v===0)&&!E2.test(m)&&M in f)S=(h+"").substr((v+"").length),g||(g=0),y=Vn(m)||(M in Ei.units?Ei.units[M]:S),S!==y&&(v=Lr(t,M,h,y)),this._pt=new oi(this._pt,U?L:f,M,v,(D?Ro(v,D+g):g)-v,!U&&(y==="px"||M==="zIndex")&&e.autoRound!==!1?A2:Rm),this._pt.u=y||0,S!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=b2);else if(M in f)z2.call(this,t,M,h,D?D+m:m);else if(M in t)this.add(t,M,h||t[M],D?D+m:m,r,l);else if(M!=="parseTransform"){Zm(M,m);continue}U||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,h||t[M])),c.push(M)}}z&&PS(this)},render:function(t,e){if(e.tween._time||!s_())for(var a=e._pt;a;)a.r(t,a.d),a=a._next;else e.styles.revert()},get:Ba,aliases:fa,getSetter:function(t,e,a){var r=fa[e];return r&&r.indexOf(",")<0&&(e=r),e in Wa&&e!==li&&(t._gsap.x||Ba(t,"x"))?a&&oy===a?e==="scale"?D2:C2:(oy=a||{})&&(e==="scale"?U2:L2):t.style&&!qm(t.style[e])?R2:~e.indexOf("-")?w2:i_(t,e)},core:{_removeProperty:ys,_getMatrix:l_}};ui.utils.checkPrefix=Ho;ui.core.getStyleSaver=HS;(function(o,t,e,a){var r=si(o+","+t+","+e,function(l){Wa[l]=1});si(t,function(l){Ei.units[l]="deg",XS[l]=1}),fa[r[13]]=o+","+t,si(a,function(l){var c=l.split(":");fa[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ei.units[o]="px"});ui.registerPlugin(YS);var hf=ui.registerPlugin(YS)||ui;hf.core.Tween;function k2(){const o=tu.useRef(null);return tu.useEffect(()=>{const t=o.current,e=t.clientWidth,a=t.clientHeight,r=new S1,l=new Ii(45,e/a,.1,1e3);l.position.z=5;const c=new SC({antialias:!0,alpha:!0});c.setSize(e,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0),t.appendChild(c.domElement);const f=new yo;r.add(f),new RC().load("/models/middle2.mtl",k=>{console.log("MTL loaded successfully:",k),k.preload();const X=new Jx;X.setMaterials(k),X.load("/models/middle2.obj",ut=>{console.log("OBJ loaded successfully:",ut);const N=new xs().setFromObject(ut),K=N.getSize(new it);console.log("Model size:",K),console.log("Model bounding box:",N);const St=2/Math.max(K.x,K.y,K.z);console.log("Calculated scale:",St),ut.scale.setScalar(St),ut.position.set(0,0,0),ut.traverse(Ct=>{Ct.isMesh&&(console.log("Setting up mesh:",Ct.name,Ct.material),Ct.castShadow=!0,Ct.receiveShadow=!0,Ct.material&&(Ct.material.needsUpdate=!0,Array.isArray(Ct.material)&&Ct.material.forEach(tt=>{tt.needsUpdate=!0})))}),f.add(ut),console.log("Model added to scene successfully")},ut=>{console.log("OBJ loading progress:",ut.loaded/ut.total*100+"%")},ut=>{console.error("Error loading OBJ model:",ut);const N=new wr(1,1,1),K=new Kc({color:16711680}),pt=new ii(N,K);f.add(pt),console.log("Added red fallback cube due to OBJ loading error")})},k=>{console.log("MTL loading progress:",k.loaded/k.total*100+"%")},k=>{console.error("Error loading MTL materials:",k),new Jx().load("/models/middle2.obj",ut=>{console.log("OBJ loaded without materials:",ut);const K=new xs().setFromObject(ut).getSize(new it),yt=2/Math.max(K.x,K.y,K.z);ut.scale.setScalar(yt),ut.position.set(0,0,0),ut.traverse(St=>{St.isMesh&&(St.material=new Kc({color:8947848,roughness:.5,metalness:.3}),St.castShadow=!0,St.receiveShadow=!0)}),f.add(ut),console.log("Model added without MTL materials")},void 0,ut=>{console.error("Error loading OBJ without materials:",ut);const N=new wr(1,1,1),K=new Kc({color:255}),pt=new ii(N,K);f.add(pt),console.log("Added blue fallback cube - all loading failed")})});const h=new wr(.1,.1,.1),m=new Kc({transparent:!0,opacity:0});new ii(h,m);const g=new N1(16777215,1);g.position.set(5,5,5),r.add(g);const v=new P1(4210752,.6);r.add(v);const x=50;let E=0,M=0,S=0,y=0;const D=new Ti,U=new Float32Array(x*3),A=new Float32Array(x);for(let k=0;k<x;k++)U[k*3]=0,U[k*3+1]=0,U[k*3+2]=0,A[k]=(x-k)/x;D.setAttribute("position",new Mi(U,3)),D.setAttribute("opacity",new Mi(A,1));const L=new ka({uniforms:{time:{value:0},color:{value:new ce(8956671)}},vertexShader:`
        attribute float opacity;
        varying float vOpacity;
        uniform float time;
        
        void main() {
          vOpacity = opacity * (0.5 + 0.5 * sin(time * 2.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 8.0 * vOpacity;
        }
      `,fragmentShader:`
        uniform vec3 color;
        varying float vOpacity;
        
        void main() {
          float distance = length(gl_PointCoord - vec2(0.5));
          if (distance > 0.5) discard;
          
          float alpha = (1.0 - distance * 2.0) * vOpacity * 0.6;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:df}),P=new Zl(D,L);r.add(P);const z=800,F=new Float32Array(z*3);for(let k=0;k<z;k++)F[k*3]=(Math.random()-.5)*20,F[k*3+1]=(Math.random()-.5)*20,F[k*3+2]=(Math.random()-.5)*20;const b=new Ti;b.setAttribute("position",new Mi(F,3));const O=new So({size:.04,transparent:!0,opacity:.4,color:8956671,blending:df}),V=new Zl(b,O);r.add(V);const j=new B1;let et;function ft(){const k=j.getElapsedTime();L.uniforms.time.value=k,E+=(S-E)*.1,M+=(y-M)*.1;const X=D.attributes.position.array;for(let N=x-1;N>0;N--)X[N*3]=X[(N-1)*3],X[N*3+1]=X[(N-1)*3+1],X[N*3+2]=X[(N-1)*3+2];X[0]=E*5,X[1]=-M*5,X[2]=Math.sin(k*2)*.5,D.attributes.position.needsUpdate=!0,f.rotation.x+=.003,f.rotation.y+=.005,f.rotation.z+=.002;const ut=b.attributes.position.array;for(let N=0;N<z;N++)ut[N*3+1]+=Math.sin(k+N*.1)*.001,ut[N*3]+=Math.cos(k*.5+N*.05)*5e-4,ut[N*3+1]>10&&(ut[N*3+1]=-10),ut[N*3]>10&&(ut[N*3]=-10);b.attributes.position.needsUpdate=!0,c.render(r,l),et=requestAnimationFrame(ft)}hf.from(f.scale,{duration:2,x:.1,y:.1,z:.1,ease:"power3.out"}),hf.from(f.rotation,{duration:3,x:Math.PI*2,ease:"power2.out"}),ft();function rt(k){const X=t.getBoundingClientRect();S=(k.clientX-X.left)/X.width-.5,y=(k.clientY-X.top)/X.height-.5,hf.to(l.position,{x:S*1,y:-y*1,duration:1,ease:"power2.out"}),l.lookAt(r.position)}function B(){const k=t.clientWidth,X=t.clientHeight;c.setSize(k,X),l.aspect=k/X,l.updateProjectionMatrix()}return t.addEventListener("pointermove",rt),window.addEventListener("resize",B),()=>{cancelAnimationFrame(et),t.removeEventListener("pointermove",rt),window.removeEventListener("resize",B),t&&c.domElement&&t.removeChild(c.domElement),geometry.dispose(),material.dispose(),b.dispose(),O.dispose(),D.dispose(),L.dispose(),c.dispose()}},[]),Zt.jsx("div",{ref:o,style:{width:"100%",height:"100vh",position:"fixed",top:0,left:0,zIndex:0,overflow:"hidden"}})}const X2=[{id:1,title:"Virtual Soul",description:"An immersive digital exploration of consciousness and identity in virtual spaces. This project investigates the boundaries between digital and physical existence through interactive media.",image:"/Personal-Website/images/project1.jpg",pdfUrl:"/Personal-Website/images/1-Virtual Soul.pdf",technologies:["Interactive Media","Virtual Reality","Digital Art","Conceptual Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"Nether Portal",description:"A gateway between dimensions - exploring liminal spaces and transitional experiences. This project creates bridges between different states of being and perception.",image:"/Personal-Website/images/project2.jpg",pdfUrl:"/Personal-Website/images/2-Nether Portal.pdf",technologies:["Dimensional Design","Interactive Installation","Spatial Computing","Experience Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"Prayer of Wind and Bloom",description:"A poetic meditation on nature's cycles and renewal. This work celebrates the intersection of technology and organic growth, finding harmony in digital and natural systems.",image:"/Personal-Website/images/project3.jpg",pdfUrl:"/Personal-Website/images/3-Prayer of Wind and Bloom.pdf",technologies:["Generative Art","Nature Simulation","Poetic Computing","Bio-inspired Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:4,title:"Unnatural Chronologies",description:"An exploration of time, memory, and non-linear narratives. This project challenges conventional temporal structures and creates new ways of experiencing past, present, and future.",image:"/Personal-Website/images/project4.jpg",pdfUrl:"/Personal-Website/images/4-Unnatural Chronologies.pdf",technologies:["Temporal Design","Narrative Systems","Memory Interfaces","Experimental Media"],liveUrl:"#",githubUrl:"#",featured:!0}];function W2(){const[o,t]=tu.useState([]);return tu.useEffect(()=>{t(X2.filter(e=>e.featured))},[]),Zt.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"white"},children:[Zt.jsxs("header",{style:{position:"fixed",zIndex:10,top:40,left:40,fontSize:"18px"},children:[Zt.jsx("h1",{style:{margin:0,fontSize:"2.5rem",fontWeight:"300",letterSpacing:"2px"},children:"Your Name"}),Zt.jsx("p",{style:{margin:"10px 0",fontSize:"1.2rem",opacity:.8,letterSpacing:"1px"},children:"Creative Developer & Designer"}),Zt.jsx("p",{style:{margin:0,fontSize:"1rem",opacity:.6,maxWidth:"400px",lineHeight:"1.5"},children:"An Easter egg hunter in reality, raiding Earth-Online for creative treasures."})]}),Zt.jsx("nav",{style:{position:"fixed",zIndex:10,top:40,right:40,fontSize:"1rem"},children:Zt.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",gap:"30px"},children:[Zt.jsx("li",{children:Zt.jsx("a",{href:"#work",style:{color:"white",textDecoration:"none",opacity:.8},children:"Work"})}),Zt.jsx("li",{children:Zt.jsx("a",{href:"#about",style:{color:"white",textDecoration:"none",opacity:.8},children:"About"})}),Zt.jsx("li",{children:Zt.jsx("a",{href:"#contact",style:{color:"white",textDecoration:"none",opacity:.8},children:"Contact"})})]})}),Zt.jsxs("main",{style:{minHeight:"100vh",width:"100vw",position:"relative",overflow:"hidden"},children:[Zt.jsx(k2,{}),Zt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",zIndex:5,pointerEvents:"none"},children:[Zt.jsx("h2",{style:{fontSize:"3rem",fontWeight:"100",letterSpacing:"3px",margin:"0 0 20px 0",opacity:.9},children:"PORTFOLIO"}),Zt.jsx("p",{style:{fontSize:"1.2rem",opacity:.7,letterSpacing:"2px"},children:"Scroll to explore creative treasures"})]})]}),Zt.jsx("section",{id:"about",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(22,33,62,0.95) 100%)",position:"relative",zIndex:1},children:Zt.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",textAlign:"center"},children:[Zt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"About Me"}),Zt.jsx("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",opacity:.8,marginBottom:"30px"},children:"I'm a creative developer who sees the digital world as an endless playground. Like an easter egg hunter exploring every corner of reality, I search for hidden gems and creative possibilities in the intersection of technology and art."}),Zt.jsx("p",{style:{fontSize:"1.1rem",lineHeight:"1.7",opacity:.7},children:"My mission is to craft immersive digital experiences that surprise, delight, and inspire. Every project is a treasure hunt for that perfect blend of functionality and magic."})]})}),Zt.jsx("section",{id:"work",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(22,33,62,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(10,10,10,0.95) 100%)",position:"relative",zIndex:1},children:Zt.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[Zt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"60px",letterSpacing:"2px",textAlign:"center"},children:"Featured Work"}),Zt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"},children:o.map(e=>Zt.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"30px",borderRadius:"15px",border:"1px solid rgba(255,255,255,0.1)",transition:"all 0.3s ease",cursor:"pointer",backdropFilter:"blur(10px)"},onMouseEnter:a=>{a.target.style.transform="translateY(-10px)",a.target.style.boxShadow="0 20px 40px rgba(136,170,255,0.2)"},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow="none"},children:[Zt.jsx("div",{style:{width:"100%",height:"400px",background:"#f8f9fa",borderRadius:"10px",marginBottom:"20px",border:"2px solid rgba(136,170,255,0.3)",overflow:"hidden"},children:Zt.jsx("iframe",{src:e.pdfUrl,width:"100%",height:"100%",title:e.title,style:{border:"none",borderRadius:"8px"},children:Zt.jsxs("p",{style:{padding:"20px",textAlign:"center"},children:["Your browser doesn't support PDFs.",Zt.jsx("a",{href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff"},children:"Download the PDF"})]})})}),Zt.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"15px",color:"#88aaff"},children:e.title}),Zt.jsx("p",{style:{opacity:.7,lineHeight:"1.6",marginBottom:"20px"},children:e.description}),Zt.jsx("div",{style:{marginBottom:"20px"},children:Zt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.technologies.map((a,r)=>Zt.jsx("span",{style:{background:"rgba(136,170,255,0.2)",padding:"4px 12px",borderRadius:"20px",fontSize:"0.8rem",border:"1px solid rgba(136,170,255,0.3)"},children:a},r))})}),Zt.jsxs("div",{style:{display:"flex",gap:"15px",justifyContent:"center"},children:[Zt.jsx("a",{href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid #88aaff",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.background="#88aaff",a.target.style.color="#000"},onMouseLeave:a=>{a.target.style.background="transparent",a.target.style.color="#88aaff"},children:"Open Fullscreen"}),e.liveUrl!=="#"&&Zt.jsx("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid rgba(136,170,255,0.5)",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.borderColor="#88aaff",a.target.style.background="rgba(136,170,255,0.1)"},onMouseLeave:a=>{a.target.style.borderColor="rgba(136,170,255,0.5)",a.target.style.background="transparent"},children:"Live Demo"})]})]},e.id))}),Zt.jsx("div",{style:{textAlign:"center",marginTop:"60px"},children:Zt.jsx("button",{style:{background:"transparent",border:"2px solid #88aaff",color:"#88aaff",padding:"12px 30px",borderRadius:"30px",fontSize:"1rem",cursor:"pointer",transition:"all 0.3s ease",letterSpacing:"1px"},onMouseEnter:e=>{e.target.style.background="#88aaff",e.target.style.color="#000",e.target.style.transform="scale(1.05)"},onMouseLeave:e=>{e.target.style.background="transparent",e.target.style.color="#88aaff",e.target.style.transform="scale(1)"},children:"View All Projects"})})]})}),Zt.jsx("section",{id:"contact",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 100%)",position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:Zt.jsxs("div",{style:{textAlign:"center"},children:[Zt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"Let's Create Together"}),Zt.jsx("p",{style:{fontSize:"1.2rem",opacity:.8,marginBottom:"40px"},children:"Ready to embark on a creative treasure hunt?"}),Zt.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"center"},children:[Zt.jsx("a",{href:"mailto:your@email.com",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"Email"}),Zt.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"LinkedIn"}),Zt.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"GitHub"})]})]})}),Zt.jsx("footer",{style:{padding:"40px",textAlign:"center",background:"rgba(10,10,10,0.9)",borderTop:"1px solid rgba(255,255,255,0.1)",position:"relative",zIndex:1},children:Zt.jsx("p",{style:{opacity:.6,margin:0},children:"© 2025 Your Name. All treasures reserved."})})]})}sT.createRoot(document.getElementById("root")).render(Zt.jsx(tu.StrictMode,{children:Zt.jsx(W2,{})}));
