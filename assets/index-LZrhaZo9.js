(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();var Ld={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function QE(){if(Nv)return Il;Nv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:l}}return Il.Fragment=t,Il.jsx=e,Il.jsxs=e,Il}var Pv;function JE(){return Pv||(Pv=1,Ld.exports=QE()),Ld.exports}var Kt=JE(),Od={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function $E(){if(zv)return ue;zv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(N,X,ft){this.props=N,this.context=X,this.refs=M,this.updater=ft||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function U(N,X,ft){this.props=N,this.context=X,this.refs=M,this.updater=ft||x}var D=U.prototype=new y;D.constructor=U,E(D,S.prototype),D.isPureReactComponent=!0;var A=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function z(N,X,ft,dt,vt,wt){return ft=wt.ref,{$$typeof:o,type:N,key:X,ref:ft!==void 0?ft:null,props:wt}}function F(N,X){return z(N.type,X,void 0,void 0,void 0,N.props)}function b(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function O(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ft){return X[ft]})}var k=/\/+/g;function Z(N,X){return typeof N=="object"&&N!==null&&N.key!=null?O(""+N.key):X.toString(36)}function et(){}function ht(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(et,et):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function rt(N,X,ft,dt,vt){var wt=typeof N;(wt==="undefined"||wt==="boolean")&&(N=null);var J=!1;if(N===null)J=!0;else switch(wt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(N.$$typeof){case o:case t:J=!0;break;case m:return J=N._init,rt(J(N._payload),X,ft,dt,vt)}}if(J)return vt=vt(N),J=dt===""?"."+Z(N,0):dt,A(vt)?(ft="",J!=null&&(ft=J.replace(k,"$&/")+"/"),rt(vt,X,ft,"",function(qt){return qt})):vt!=null&&(b(vt)&&(vt=F(vt,ft+(vt.key==null||N&&N.key===vt.key?"":(""+vt.key).replace(k,"$&/")+"/")+J)),X.push(vt)),1;J=0;var gt=dt===""?".":dt+":";if(A(N))for(var At=0;At<N.length;At++)dt=N[At],wt=gt+Z(dt,At),J+=rt(dt,X,ft,wt,vt);else if(At=v(N),typeof At=="function")for(N=At.call(N),At=0;!(dt=N.next()).done;)dt=dt.value,wt=gt+Z(dt,At++),J+=rt(dt,X,ft,wt,vt);else if(wt==="object"){if(typeof N.then=="function")return rt(ht(N),X,ft,dt,vt);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return J}function B(N,X,ft){if(N==null)return N;var dt=[],vt=0;return rt(N,dt,"","",function(wt){return X.call(ft,wt,vt++)}),dt}function Y(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(ft){(N._status===0||N._status===-1)&&(N._status=1,N._result=ft)},function(ft){(N._status===0||N._status===-1)&&(N._status=2,N._result=ft)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var G=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function ut(){}return ue.Children={map:B,forEach:function(N,X,ft){B(N,function(){X.apply(this,arguments)},ft)},count:function(N){var X=0;return B(N,function(){X++}),X},toArray:function(N){return B(N,function(X){return X})||[]},only:function(N){if(!b(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=S,ue.Fragment=e,ue.Profiler=r,ue.PureComponent=U,ue.StrictMode=a,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return L.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,X,ft){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var dt=E({},N.props),vt=N.key,wt=void 0;if(X!=null)for(J in X.ref!==void 0&&(wt=void 0),X.key!==void 0&&(vt=""+X.key),X)!P.call(X,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&X.ref===void 0||(dt[J]=X[J]);var J=arguments.length-2;if(J===1)dt.children=ft;else if(1<J){for(var gt=Array(J),At=0;At<J;At++)gt[At]=arguments[At+2];dt.children=gt}return z(N.type,vt,void 0,void 0,wt,dt)},ue.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},ue.createElement=function(N,X,ft){var dt,vt={},wt=null;if(X!=null)for(dt in X.key!==void 0&&(wt=""+X.key),X)P.call(X,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(vt[dt]=X[dt]);var J=arguments.length-2;if(J===1)vt.children=ft;else if(1<J){for(var gt=Array(J),At=0;At<J;At++)gt[At]=arguments[At+2];vt.children=gt}if(N&&N.defaultProps)for(dt in J=N.defaultProps,J)vt[dt]===void 0&&(vt[dt]=J[dt]);return z(N,wt,void 0,void 0,null,vt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:f,render:N}},ue.isValidElement=b,ue.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:Y}},ue.memo=function(N,X){return{$$typeof:h,type:N,compare:X===void 0?null:X}},ue.startTransition=function(N){var X=L.T,ft={};L.T=ft;try{var dt=N(),vt=L.S;vt!==null&&vt(ft,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(ut,G)}catch(wt){G(wt)}finally{L.T=X}},ue.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ue.use=function(N){return L.H.use(N)},ue.useActionState=function(N,X,ft){return L.H.useActionState(N,X,ft)},ue.useCallback=function(N,X){return L.H.useCallback(N,X)},ue.useContext=function(N){return L.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,X){return L.H.useDeferredValue(N,X)},ue.useEffect=function(N,X,ft){var dt=L.H;if(typeof ft=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return dt.useEffect(N,X)},ue.useId=function(){return L.H.useId()},ue.useImperativeHandle=function(N,X,ft){return L.H.useImperativeHandle(N,X,ft)},ue.useInsertionEffect=function(N,X){return L.H.useInsertionEffect(N,X)},ue.useLayoutEffect=function(N,X){return L.H.useLayoutEffect(N,X)},ue.useMemo=function(N,X){return L.H.useMemo(N,X)},ue.useOptimistic=function(N,X){return L.H.useOptimistic(N,X)},ue.useReducer=function(N,X,ft){return L.H.useReducer(N,X,ft)},ue.useRef=function(N){return L.H.useRef(N)},ue.useState=function(N){return L.H.useState(N)},ue.useSyncExternalStore=function(N,X,ft){return L.H.useSyncExternalStore(N,X,ft)},ue.useTransition=function(){return L.H.useTransition()},ue.version="19.1.1",ue}var Iv;function Dm(){return Iv||(Iv=1,Od.exports=$E()),Od.exports}var tu=Dm(),Nd={exports:{}},Bl={},Pd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function tT(){return Bv||(Bv=1,(function(o){function t(B,Y){var G=B.length;B.push(Y);t:for(;0<G;){var ut=G-1>>>1,N=B[ut];if(0<r(N,Y))B[ut]=Y,B[G]=N,G=ut;else break t}}function e(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var Y=B[0],G=B.pop();if(G!==Y){B[0]=G;t:for(var ut=0,N=B.length,X=N>>>1;ut<X;){var ft=2*(ut+1)-1,dt=B[ft],vt=ft+1,wt=B[vt];if(0>r(dt,G))vt<N&&0>r(wt,dt)?(B[ut]=wt,B[vt]=G,ut=vt):(B[ut]=dt,B[ft]=G,ut=ft);else if(vt<N&&0>r(wt,G))B[ut]=wt,B[vt]=G,ut=vt;else break t}}return Y}function r(B,Y){var G=B.sortIndex-Y.sortIndex;return G!==0?G:B.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],h=[],m=1,g=null,v=3,x=!1,E=!1,M=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var Y=e(h);Y!==null;){if(Y.callback===null)a(h);else if(Y.startTime<=B)a(h),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=e(h)}}function L(B){if(M=!1,A(B),!E)if(e(p)!==null)E=!0,P||(P=!0,Z());else{var Y=e(h);Y!==null&&rt(L,Y.startTime-B)}}var P=!1,z=-1,F=5,b=-1;function O(){return S?!0:!(o.unstable_now()-b<F)}function k(){if(S=!1,P){var B=o.unstable_now();b=B;var Y=!0;try{t:{E=!1,M&&(M=!1,U(z),z=-1),x=!0;var G=v;try{e:{for(A(B),g=e(p);g!==null&&!(g.expirationTime>B&&O());){var ut=g.callback;if(typeof ut=="function"){g.callback=null,v=g.priorityLevel;var N=ut(g.expirationTime<=B);if(B=o.unstable_now(),typeof N=="function"){g.callback=N,A(B),Y=!0;break e}g===e(p)&&a(p),A(B)}else a(p);g=e(p)}if(g!==null)Y=!0;else{var X=e(h);X!==null&&rt(L,X.startTime-B),Y=!1}}break t}finally{g=null,v=G,x=!1}Y=void 0}}finally{Y?Z():P=!1}}}var Z;if(typeof D=="function")Z=function(){D(k)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ht=et.port2;et.port1.onmessage=k,Z=function(){ht.postMessage(null)}}else Z=function(){y(k,0)};function rt(B,Y){z=y(function(){B(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var G=v;v=Y;try{return B()}finally{v=G}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=v;v=B;try{return Y()}finally{v=G}},o.unstable_scheduleCallback=function(B,Y,G){var ut=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ut+G:ut):G=ut,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=G+N,B={id:m++,callback:Y,priorityLevel:B,startTime:G,expirationTime:N,sortIndex:-1},G>ut?(B.sortIndex=G,t(h,B),e(p)===null&&B===e(h)&&(M?(U(z),z=-1):M=!0,rt(L,G-ut))):(B.sortIndex=N,t(p,B),E||x||(E=!0,P||(P=!0,Z()))),B},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(B){var Y=v;return function(){var G=v;v=Y;try{return B.apply(this,arguments)}finally{v=G}}}})(zd)),zd}var Fv;function eT(){return Fv||(Fv=1,Pd.exports=tT()),Pd.exports}var Id={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function nT(){if(Hv)return Fn;Hv=1;var o=Dm();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var a={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,h,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:h,implementation:m}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,m)},Fn.flushSync=function(p){var h=c.T,m=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=h,a.p=m,a.d.f()}},Fn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):m==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Fn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},Fn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,g=f(m,h.crossOrigin);a.d.L(p,m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Fn.preloadModule=function(p,h){if(typeof p=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,h){return p(h)},Fn.useFormState=function(p,h,m){return c.H.useFormState(p,h,m)},Fn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Fn.version="19.1.1",Fn}var Gv;function iT(){if(Gv)return Id.exports;Gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Id.exports=nT(),Id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function aT(){if(Vv)return Bl;Vv=1;var o=eT(),t=Dm(),e=iT();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function c(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function p(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var s=n,u=i;;){var d=s.return;if(d===null)break;var _=d.alternate;if(_===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===s)return f(d),n;if(_===u)return f(d),i;_=_.sibling}throw Error(a(188))}if(s.return!==u.return)s=d,u=_;else{for(var T=!1,w=d.child;w;){if(w===s){T=!0,s=d,u=_;break}if(w===u){T=!0,u=d,s=_;break}w=w.sibling}if(!T){for(w=_.child;w;){if(w===s){T=!0,s=_,u=d;break}if(w===u){T=!0,u=_,s=d;break}w=w.sibling}if(!T)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?n:i}function h(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=h(n),i!==null)return i;n=n.sibling}return null}var m=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var et=Symbol.for("react.client.reference");function ht(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===et?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case P:return"SuspenseList";case b:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case D:return(n.displayName||"Context")+".Provider";case U:return(n._context.displayName||"Context")+".Consumer";case A:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case z:return i=n.displayName||null,i!==null?i:ht(n.type)||"Memo";case F:i=n._payload,n=n._init;try{return ht(n(i))}catch{}}return null}var rt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ut=[],N=-1;function X(n){return{current:n}}function ft(n){0>N||(n.current=ut[N],ut[N]=null,N--)}function dt(n,i){N++,ut[N]=n.current,n.current=i}var vt=X(null),wt=X(null),J=X(null),gt=X(null);function At(n,i){switch(dt(J,i),dt(wt,n),dt(vt,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?lv(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=lv(i),n=uv(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ft(vt),dt(vt,n)}function qt(){ft(vt),ft(wt),ft(J)}function Dt(n){n.memoizedState!==null&&dt(gt,n);var i=vt.current,s=uv(i,n.type);i!==s&&(dt(wt,n),dt(vt,s))}function le(n){wt.current===n&&(ft(vt),ft(wt)),gt.current===n&&(ft(gt),Ll._currentValue=G)}var We=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,re=o.unstable_shouldYield,ne=o.unstable_requestPaint,zt=o.unstable_now,Ve=o.unstable_getCurrentPriorityLevel,Vt=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,Ze=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,I=o.unstable_IdlePriority,R=o.log,nt=o.unstable_setDisableYieldValue,pt=null,xt=null;function ct(n){if(typeof R=="function"&&nt(n),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(pt,n)}catch{}}var It=Math.clz32?Math.clz32:Yt,Rt=Math.log,Xt=Math.LN2;function Yt(n){return n>>>=0,n===0?32:31-(Rt(n)/Xt|0)|0}var Mt=256,Ot=4194304;function Zt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function kt(n,i,s){var u=n.pendingLanes;if(u===0)return 0;var d=0,_=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var w=u&134217727;return w!==0?(u=w&~_,u!==0?d=Zt(u):(T&=w,T!==0?d=Zt(T):s||(s=w&~n,s!==0&&(d=Zt(s))))):(w=u&~_,w!==0?d=Zt(w):T!==0?d=Zt(T):s||(s=u&~n,s!==0&&(d=Zt(s)))),d===0?0:i!==0&&i!==d&&(i&_)===0&&(_=d&-d,s=i&-i,_>=s||_===32&&(s&4194048)!==0)?i:d}function Ut(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function oe(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var n=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),n}function bt(){var n=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),n}function Ct(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Bt(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Et(n,i,s,u,d,_){var T=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var w=n.entanglements,H=n.expirationTimes,tt=n.hiddenUpdates;for(s=T&~s;0<s;){var mt=31-It(s),yt=1<<mt;w[mt]=0,H[mt]=-1;var at=tt[mt];if(at!==null)for(tt[mt]=null,mt=0;mt<at.length;mt++){var st=at[mt];st!==null&&(st.lane&=-536870913)}s&=~yt}u!==0&&St(n,u,0),_!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=_&~(T&~i))}function St(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var u=31-It(i);n.entangledLanes|=i,n.entanglements[u]=n.entanglements[u]|1073741824|s&4194090}function Gt(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var u=31-It(s),d=1<<u;d&i|n[u]&i&&(n[u]|=i),s&=~d}}function ae(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ce(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function be(){var n=Y.p;return n!==0?n:(n=window.event,n===void 0?32:wv(n.type))}function Gi(n,i){var s=Y.p;try{return Y.p=n,i()}finally{Y.p=s}}var gn=Math.random().toString(36).slice(2),vn="__reactFiber$"+gn,en="__reactProps$"+gn,$i="__reactContainer$"+gn,Ss="__reactEvents$"+gn,xu="__reactListeners$"+gn,Ms="__reactHandles$"+gn,Xo="__reactResources$"+gn,ta="__reactMarker$"+gn;function Es(n){delete n[vn],delete n[en],delete n[Ss],delete n[xu],delete n[Ms]}function ma(n){var i=n[vn];if(i)return i;for(var s=n.parentNode;s;){if(i=s[$i]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=dv(n);n!==null;){if(s=n[vn])return s;n=dv(n)}return i}n=s,s=n.parentNode}return null}function qa(n){if(n=n[vn]||n[$i]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Or(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function Ya(n){var i=n[Xo];return i||(i=n[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(n){n[ta]=!0}var yu=new Set,Su={};function C(n,i){j(n,i),j(n+"Capture",i)}function j(n,i){for(Su[n]=i,n=0;n<i.length;n++)yu.add(i[n])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Q={};function Tt(n){return We.call(Q,n)?!0:We.call(lt,n)?!1:ot.test(n)?Q[n]=!0:(lt[n]=!0,!1)}function Lt(n,i,s){if(Tt(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function Ft(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Nt(n,i,s,u){if(u===null)n.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+u)}}var Jt,te;function Wt(n){if(Jt===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Jt=i&&i[1]||"",te=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+n+te}var he=!1;function Ae(n,i){if(!n||he)return"";he=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(st){var at=st}Reflect.construct(n,[],yt)}else{try{yt.call()}catch(st){at=st}n.call(yt.prototype)}}else{try{throw Error()}catch(st){at=st}(yt=n())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],w=_[1];if(T&&w){var H=T.split(`
`),tt=w.split(`
`);for(d=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;d<tt.length&&!tt[d].includes("DetermineComponentFrameRoot");)d++;if(u===H.length||d===tt.length)for(u=H.length-1,d=tt.length-1;1<=u&&0<=d&&H[u]!==tt[d];)d--;for(;1<=u&&0<=d;u--,d--)if(H[u]!==tt[d]){if(u!==1||d!==1)do if(u--,d--,0>d||H[u]!==tt[d]){var mt=`
`+H[u].replace(" at new "," at ");return n.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",n.displayName)),mt}while(1<=u&&0<=d);break}}}finally{he=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Wt(s):""}function qe(n){switch(n.tag){case 26:case 27:case 5:return Wt(n.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Ae(n.type,!1);case 11:return Ae(n.type.render,!1);case 1:return Ae(n.type,!0);case 31:return Wt("Activity");default:return""}}function Oe(n){try{var i="";do i+=qe(n),n=n.return;while(n);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function de(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qt(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(n){var i=Qt(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,_=s.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(n,i,{enumerable:s.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ge(n){n._valueTracker||(n._valueTracker=Xe(n))}function zn(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return n&&(u=Qt(n)?n.checked?"true":"false":n.value),n=u,n!==s?(i.setValue(n),!0):!1}function Vi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Xn=/[\n"\\]/g;function En(n){return n.replace(Xn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Be(n,i,s,u,d,_,T,w){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),i!=null?T==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+de(i)):n.value!==""+de(i)&&(n.value=""+de(i)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),i!=null?In(n,T,de(i)):s!=null?In(n,T,de(s)):u!=null&&n.removeAttribute("value"),d==null&&_!=null&&(n.defaultChecked=!!_),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+de(w):n.removeAttribute("name")}function Wn(n,i,s,u,d,_,T,w){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),i!=null||s!=null){if(!(_!=="submit"&&_!=="reset"||i!=null))return;s=s!=null?""+de(s):"",i=i!=null?""+de(i):s,w||i===n.value||(n.value=i),n.defaultValue=i}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=w?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function In(n,i,s){i==="number"&&Vi(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function nn(n,i,s,u){if(n=n.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<n.length;s++)d=i.hasOwnProperty("$"+n[s].value),n[s].selected!==d&&(n[s].selected=d),d&&u&&(n[s].defaultSelected=!0)}else{for(s=""+de(s),i=null,d=0;d<n.length;d++){if(n[d].value===s){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Dn(n,i,s){if(i!=null&&(i=""+de(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+de(s):""}function Ts(n,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(rt(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=de(i),n.defaultValue=s,u=n.textContent,u===s&&u!==""&&u!==null&&(n.value=u)}function Qn(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var jS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function l_(n,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":u?n.setProperty(i,s):typeof s!="number"||s===0||jS.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function u_(n,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in i)u=i[d],i.hasOwnProperty(d)&&s[d]!==u&&l_(n,d,u)}else for(var _ in i)i.hasOwnProperty(_)&&l_(n,_,i[_])}function Uf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ZS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),KS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mu(n){return KS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Lf=null;function Of(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bs=null,As=null;function c_(n){var i=qa(n);if(i&&(n=i.stateNode)){var s=n[en]||null;t:switch(n=i.stateNode,i.type){case"input":if(Be(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+En(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==n&&u.form===n.form){var d=u[en]||null;if(!d)throw Error(a(90));Be(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===n.form&&zn(u)}break t;case"textarea":Dn(n,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&nn(n,!!s.multiple,i,!1)}}}var Nf=!1;function f_(n,i,s){if(Nf)return n(i,s);Nf=!0;try{var u=n(i);return u}finally{if(Nf=!1,(bs!==null||As!==null)&&(oc(),bs&&(i=bs,n=As,As=bs=null,c_(i),n)))for(i=0;i<n.length;i++)c_(n[i])}}function Wo(n,i){var s=n.stateNode;if(s===null)return null;var u=s[en]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pf=!1;if(_a)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{Pf=!1}var ja=null,zf=null,Eu=null;function h_(){if(Eu)return Eu;var n,i=zf,s=i.length,u,d="value"in ja?ja.value:ja.textContent,_=d.length;for(n=0;n<s&&i[n]===d[n];n++);var T=s-n;for(u=1;u<=T&&i[s-u]===d[_-u];u++);return Eu=d.slice(n,1<u?1-u:void 0)}function Tu(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bu(){return!0}function d_(){return!1}function Jn(n){function i(s,u,d,_,T){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(s=n[w],this[w]=s?s(_):_[w]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?bu:d_,this.isPropagationStopped=d_,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bu)},persist:function(){},isPersistent:bu}),i}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Jn(Nr),Yo=m({},Nr,{view:0,detail:0}),QS=Jn(Yo),If,Bf,jo,Ru=m({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jo&&(jo&&n.type==="mousemove"?(If=n.screenX-jo.screenX,Bf=n.screenY-jo.screenY):Bf=If=0,jo=n),If)},movementY:function(n){return"movementY"in n?n.movementY:Bf}}),p_=Jn(Ru),JS=m({},Ru,{dataTransfer:0}),$S=Jn(JS),tM=m({},Yo,{relatedTarget:0}),Ff=Jn(tM),eM=m({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),nM=Jn(eM),iM=m({},Nr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),aM=Jn(iM),rM=m({},Nr,{data:0}),m_=Jn(rM),sM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uM(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=lM[n])?!!i[n]:!1}function Hf(){return uM}var cM=m({},Yo,{key:function(n){if(n.key){var i=sM[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Tu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?oM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hf,charCode:function(n){return n.type==="keypress"?Tu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fM=Jn(cM),hM=m({},Ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),__=Jn(hM),dM=m({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hf}),pM=Jn(dM),mM=m({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_M=Jn(mM),gM=m({},Ru,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vM=Jn(gM),xM=m({},Nr,{newState:0,oldState:0}),yM=Jn(xM),SM=[9,13,27,32],Gf=_a&&"CompositionEvent"in window,Zo=null;_a&&"documentMode"in document&&(Zo=document.documentMode);var MM=_a&&"TextEvent"in window&&!Zo,g_=_a&&(!Gf||Zo&&8<Zo&&11>=Zo),v_=" ",x_=!1;function y_(n,i){switch(n){case"keyup":return SM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S_(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function EM(n,i){switch(n){case"compositionend":return S_(i);case"keypress":return i.which!==32?null:(x_=!0,v_);case"textInput":return n=i.data,n===v_&&x_?null:n;default:return null}}function TM(n,i){if(Rs)return n==="compositionend"||!Gf&&y_(n,i)?(n=h_(),Eu=zf=ja=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return g_&&i.locale!=="ko"?null:i.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M_(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!bM[n.type]:i==="textarea"}function E_(n,i,s,u){bs?As?As.push(u):As=[u]:bs=u,i=dc(i,"onChange"),0<i.length&&(s=new Au("onChange","change",null,s,u),n.push({event:s,listeners:i}))}var Ko=null,Qo=null;function AM(n){iv(n,0)}function wu(n){var i=Or(n);if(zn(i))return n}function T_(n,i){if(n==="change")return i}var b_=!1;if(_a){var Vf;if(_a){var kf="oninput"in document;if(!kf){var A_=document.createElement("div");A_.setAttribute("oninput","return;"),kf=typeof A_.oninput=="function"}Vf=kf}else Vf=!1;b_=Vf&&(!document.documentMode||9<document.documentMode)}function R_(){Ko&&(Ko.detachEvent("onpropertychange",w_),Qo=Ko=null)}function w_(n){if(n.propertyName==="value"&&wu(Qo)){var i=[];E_(i,Qo,n,Of(n)),f_(AM,i)}}function RM(n,i,s){n==="focusin"?(R_(),Ko=i,Qo=s,Ko.attachEvent("onpropertychange",w_)):n==="focusout"&&R_()}function wM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wu(Qo)}function CM(n,i){if(n==="click")return wu(i)}function DM(n,i){if(n==="input"||n==="change")return wu(i)}function UM(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:UM;function Jo(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!We.call(i,d)||!ci(n[d],i[d]))return!1}return!0}function C_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function D_(n,i){var s=C_(n);n=0;for(var u;s;){if(s.nodeType===3){if(u=n+s.textContent.length,n<=i&&u>=i)return{node:s,offset:i-n};n=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=C_(s)}}function U_(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?U_(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function L_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Vi(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Vi(n.document)}return i}function Xf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var LM=_a&&"documentMode"in document&&11>=document.documentMode,ws=null,Wf=null,$o=null,qf=!1;function O_(n,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;qf||ws==null||ws!==Vi(u)||(u=ws,"selectionStart"in u&&Xf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),$o&&Jo($o,u)||($o=u,u=dc(Wf,"onSelect"),0<u.length&&(i=new Au("onSelect","select",null,i,s),n.push({event:i,listeners:u}),i.target=ws)))}function Pr(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var Cs={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},Yf={},N_={};_a&&(N_=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function zr(n){if(Yf[n])return Yf[n];if(!Cs[n])return n;var i=Cs[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in N_)return Yf[n]=i[s];return n}var P_=zr("animationend"),z_=zr("animationiteration"),I_=zr("animationstart"),OM=zr("transitionrun"),NM=zr("transitionstart"),PM=zr("transitioncancel"),B_=zr("transitionend"),F_=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function ki(n,i){F_.set(n,i),C(i,[n])}var H_=new WeakMap;function Ri(n,i){if(typeof n=="object"&&n!==null){var s=H_.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Oe(i)},H_.set(n,i),i)}return{value:n,source:i,stack:Oe(i)}}var wi=[],Ds=0,Zf=0;function Cu(){for(var n=Ds,i=Zf=Ds=0;i<n;){var s=wi[i];wi[i++]=null;var u=wi[i];wi[i++]=null;var d=wi[i];wi[i++]=null;var _=wi[i];if(wi[i++]=null,u!==null&&d!==null){var T=u.pending;T===null?d.next=d:(d.next=T.next,T.next=d),u.pending=d}_!==0&&G_(s,d,_)}}function Du(n,i,s,u){wi[Ds++]=n,wi[Ds++]=i,wi[Ds++]=s,wi[Ds++]=u,Zf|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Kf(n,i,s,u){return Du(n,i,s,u),Uu(n)}function Us(n,i){return Du(n,null,null,i),Uu(n)}function G_(n,i,s){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s);for(var d=!1,_=n.return;_!==null;)_.childLanes|=s,u=_.alternate,u!==null&&(u.childLanes|=s),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(d=!0)),n=_,_=_.return;return n.tag===3?(_=n.stateNode,d&&i!==null&&(d=31-It(s),n=_.hiddenUpdates,u=n[d],u===null?n[d]=[i]:u.push(i),i.lane=s|536870912),_):null}function Uu(n){if(50<Tl)throw Tl=0,nd=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ls={};function zM(n,i,s,u){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,s,u){return new zM(n,i,s,u)}function Qf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ga(n,i){var s=n.alternate;return s===null?(s=fi(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function V_(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Lu(n,i,s,u,d,_){var T=0;if(u=n,typeof n=="function")Qf(n)&&(T=1);else if(typeof n=="string")T=BE(n,s,vt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case b:return n=fi(31,s,i,d),n.elementType=b,n.lanes=_,n;case E:return Ir(s.children,d,_,i);case M:T=8,d|=24;break;case S:return n=fi(12,s,i,d|2),n.elementType=S,n.lanes=_,n;case L:return n=fi(13,s,i,d),n.elementType=L,n.lanes=_,n;case P:return n=fi(19,s,i,d),n.elementType=P,n.lanes=_,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case D:T=10;break t;case U:T=9;break t;case A:T=11;break t;case z:T=14;break t;case F:T=16,u=null;break t}T=29,s=Error(a(130,n===null?"null":typeof n,"")),u=null}return i=fi(T,s,i,d),i.elementType=n,i.type=u,i.lanes=_,i}function Ir(n,i,s,u){return n=fi(7,n,u,i),n.lanes=s,n}function Jf(n,i,s){return n=fi(6,n,null,i),n.lanes=s,n}function $f(n,i,s){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Os=[],Ns=0,Ou=null,Nu=0,Ci=[],Di=0,Br=null,va=1,xa="";function Fr(n,i){Os[Ns++]=Nu,Os[Ns++]=Ou,Ou=n,Nu=i}function k_(n,i,s){Ci[Di++]=va,Ci[Di++]=xa,Ci[Di++]=Br,Br=n;var u=va;n=xa;var d=32-It(u)-1;u&=~(1<<d),s+=1;var _=32-It(i)+d;if(30<_){var T=d-d%5;_=(u&(1<<T)-1).toString(32),u>>=T,d-=T,va=1<<32-It(i)+d|s<<d|u,xa=_+n}else va=1<<_|s<<d|u,xa=n}function th(n){n.return!==null&&(Fr(n,1),k_(n,1,0))}function eh(n){for(;n===Ou;)Ou=Os[--Ns],Os[Ns]=null,Nu=Os[--Ns],Os[Ns]=null;for(;n===Br;)Br=Ci[--Di],Ci[Di]=null,xa=Ci[--Di],Ci[Di]=null,va=Ci[--Di],Ci[Di]=null}var qn=null,an=null,we=!1,Hr=null,ea=!1,nh=Error(a(519));function Gr(n){var i=Error(a(418,""));throw nl(Ri(i,n)),nh}function X_(n){var i=n.stateNode,s=n.type,u=n.memoizedProps;switch(i[vn]=n,i[en]=u,s){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(s=0;s<Al.length;s++)xe(Al[s],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),Wn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ge(i);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Ts(i,u.value,u.defaultValue,u.children),ge(i)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||ov(i.textContent,s)?(u.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),u.onScroll!=null&&xe("scroll",i),u.onScrollEnd!=null&&xe("scrollend",i),u.onClick!=null&&(i.onclick=pc),i=!0):i=!1,i||Gr(n)}function W_(n){for(qn=n.return;qn;)switch(qn.tag){case 5:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:qn=qn.return}}function tl(n){if(n!==qn)return!1;if(!we)return W_(n),we=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||vd(n.type,n.memoizedProps)),s=!s),s&&an&&Gr(n),W_(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));t:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){an=Wi(n.nextSibling);break t}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;n=n.nextSibling}an=null}}else i===27?(i=an,cr(n.type)?(n=Md,Md=null,an=n):an=i):an=qn?Wi(n.stateNode.nextSibling):null;return!0}function el(){an=qn=null,we=!1}function q_(){var n=Hr;return n!==null&&(ei===null?ei=n:ei.push.apply(ei,n),Hr=null),n}function nl(n){Hr===null?Hr=[n]:Hr.push(n)}var ih=X(null),Vr=null,ya=null;function Za(n,i,s){dt(ih,i._currentValue),i._currentValue=s}function Sa(n){n._currentValue=ih.current,ft(ih)}function ah(n,i,s){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===s)break;n=n.return}}function rh(n,i,s,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var _=d.dependencies;if(_!==null){var T=d.child;_=_.firstContext;t:for(;_!==null;){var w=_;_=d;for(var H=0;H<i.length;H++)if(w.context===i[H]){_.lanes|=s,w=_.alternate,w!==null&&(w.lanes|=s),ah(_.return,s,n),u||(T=null);break t}_=w.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(a(341));T.lanes|=s,_=T.alternate,_!==null&&(_.lanes|=s),ah(T,s,n),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===n){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function il(n,i,s,u){n=null;for(var d=i,_=!1;d!==null;){if(!_){if((d.flags&524288)!==0)_=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var w=d.type;ci(d.pendingProps.value,T.value)||(n!==null?n.push(w):n=[w])}}else if(d===gt.current){if(T=d.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(Ll):n=[Ll])}d=d.return}n!==null&&rh(i,n,s,u),i.flags|=262144}function Pu(n){for(n=n.firstContext;n!==null;){if(!ci(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function kr(n){Vr=n,ya=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Bn(n){return Y_(Vr,n)}function zu(n,i){return Vr===null&&kr(n),Y_(n,i)}function Y_(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ya===null){if(n===null)throw Error(a(308));ya=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ya=ya.next=i;return s}var IM=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,u){n.push(u)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},BM=o.unstable_scheduleCallback,FM=o.unstable_NormalPriority,xn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new IM,data:new Map,refCount:0}}function al(n){n.refCount--,n.refCount===0&&BM(FM,function(){n.controller.abort()})}var rl=null,oh=0,Ps=0,zs=null;function HM(n,i){if(rl===null){var s=rl=[];oh=0,Ps=ud(),zs={status:"pending",value:void 0,then:function(u){s.push(u)}}}return oh++,i.then(j_,j_),i}function j_(){if(--oh===0&&rl!==null){zs!==null&&(zs.status="fulfilled");var n=rl;rl=null,Ps=0,zs=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function GM(n,i){var s=[],u={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return n.then(function(){u.status="fulfilled",u.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(u.status="rejected",u.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),u}var Z_=B.S;B.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&HM(n,i),Z_!==null&&Z_(n,i)};var Xr=X(null);function lh(){var n=Xr.current;return n!==null?n:ke.pooledCache}function Iu(n,i){i===null?dt(Xr,Xr.current):dt(Xr,i.pool)}function K_(){var n=lh();return n===null?null:{parent:xn._currentValue,pool:n}}var sl=Error(a(460)),Q_=Error(a(474)),Bu=Error(a(542)),uh={then:function(){}};function J_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Fu(){}function $_(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(Fu,Fu),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,eg(n),n;default:if(typeof i.status=="string")i.then(Fu,Fu);else{if(n=ke,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(u){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=u}},function(u){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,eg(n),n}throw ol=i,sl}}var ol=null;function tg(){if(ol===null)throw Error(a(459));var n=ol;return ol=null,n}function eg(n){if(n===sl||n===Bu)throw Error(a(483))}var Ka=!1;function ch(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Qa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ja(n,i,s){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(De&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,i=Uu(n),G_(n,null,s),i}return Du(n,u,i,s),Uu(n)}function ll(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Gt(n,s)}}function hh(n,i){var s=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,_=null;if(s=s.firstBaseUpdate,s!==null){do{var T={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};_===null?d=_=T:_=_.next=T,s=s.next}while(s!==null);_===null?d=_=i:_=_.next=i}else d=_=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var dh=!1;function ul(){if(dh){var n=zs;if(n!==null)throw n}}function cl(n,i,s,u){dh=!1;var d=n.updateQueue;Ka=!1;var _=d.firstBaseUpdate,T=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var H=w,tt=H.next;H.next=null,T===null?_=tt:T.next=tt,T=H;var mt=n.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==T&&(w===null?mt.firstBaseUpdate=tt:w.next=tt,mt.lastBaseUpdate=H))}if(_!==null){var yt=d.baseState;T=0,mt=tt=H=null,w=_;do{var at=w.lane&-536870913,st=at!==w.lane;if(st?(Ee&at)===at:(u&at)===at){at!==0&&at===Ps&&(dh=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ie=n,$t=w;at=i;var ze=s;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){yt=ie.call(ze,yt,at);break t}yt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,at=typeof ie=="function"?ie.call(ze,yt,at):ie,at==null)break t;yt=m({},yt,at);break t;case 2:Ka=!0}}at=w.callback,at!==null&&(n.flags|=64,st&&(n.flags|=8192),st=d.callbacks,st===null?d.callbacks=[at]:st.push(at))}else st={lane:at,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(tt=mt=st,H=yt):mt=mt.next=st,T|=at;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;st=w,w=st.next,st.next=null,d.lastBaseUpdate=st,d.shared.pending=null}}while(!0);mt===null&&(H=yt),d.baseState=H,d.firstBaseUpdate=tt,d.lastBaseUpdate=mt,_===null&&(d.shared.lanes=0),sr|=T,n.lanes=T,n.memoizedState=yt}}function ng(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function ig(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)ng(s[n],i)}var Is=X(null),Hu=X(0);function ag(n,i){n=wa,dt(Hu,n),dt(Is,i),wa=n|i.baseLanes}function ph(){dt(Hu,wa),dt(Is,Is.current)}function mh(){wa=Hu.current,ft(Is),ft(Hu)}var $a=0,me=null,Ne=null,hn=null,Gu=!1,Bs=!1,Wr=!1,Vu=0,fl=0,Fs=null,VM=0;function ln(){throw Error(a(321))}function _h(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!ci(n[s],i[s]))return!1;return!0}function gh(n,i,s,u,d,_){return $a=_,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=n===null||n.memoizedState===null?Gg:Vg,Wr=!1,_=s(u,d),Wr=!1,Bs&&(_=sg(i,s,u,d)),rg(n),_}function rg(n){B.H=ju;var i=Ne!==null&&Ne.next!==null;if($a=0,hn=Ne=me=null,Gu=!1,fl=0,Fs=null,i)throw Error(a(300));n===null||Tn||(n=n.dependencies,n!==null&&Pu(n)&&(Tn=!0))}function sg(n,i,s,u){me=n;var d=0;do{if(Bs&&(Fs=null),fl=0,Bs=!1,25<=d)throw Error(a(301));if(d+=1,hn=Ne=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}B.H=ZM,_=i(s,u)}while(Bs);return _}function kM(){var n=B.H,i=n.useState()[0];return i=typeof i.then=="function"?hl(i):i,n=n.useState()[0],(Ne!==null?Ne.memoizedState:null)!==n&&(me.flags|=1024),i}function vh(){var n=Vu!==0;return Vu=0,n}function xh(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function yh(n){if(Gu){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Gu=!1}$a=0,hn=Ne=me=null,Bs=!1,fl=Vu=0,Fs=null}function $n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?me.memoizedState=hn=n:hn=hn.next=n,hn}function dn(){if(Ne===null){var n=me.alternate;n=n!==null?n.memoizedState:null}else n=Ne.next;var i=hn===null?me.memoizedState:hn.next;if(i!==null)hn=i,Ne=n;else{if(n===null)throw me.alternate===null?Error(a(467)):Error(a(310));Ne=n,n={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},hn===null?me.memoizedState=hn=n:hn=hn.next=n}return hn}function Sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(n){var i=fl;return fl+=1,Fs===null&&(Fs=[]),n=$_(Fs,n,i),i=me,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Gg:Vg),n}function ku(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return hl(n);if(n.$$typeof===D)return Bn(n)}throw Error(a(438,String(n)))}function Mh(n){var i=null,s=me.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=me.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Sh(),me.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),u=0;u<n;u++)s[u]=O;return i.index++,s}function Ma(n,i){return typeof i=="function"?i(n):i}function Xu(n){var i=dn();return Eh(i,Ne,n)}function Eh(n,i,s){var u=n.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var d=n.baseQueue,_=u.pending;if(_!==null){if(d!==null){var T=d.next;d.next=_.next,_.next=T}i.baseQueue=d=_,u.pending=null}if(_=n.baseState,d===null)n.memoizedState=_;else{i=d.next;var w=T=null,H=null,tt=i,mt=!1;do{var yt=tt.lane&-536870913;if(yt!==tt.lane?(Ee&yt)===yt:($a&yt)===yt){var at=tt.revertLane;if(at===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),yt===Ps&&(mt=!0);else if(($a&at)===at){tt=tt.next,at===Ps&&(mt=!0);continue}else yt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(w=H=yt,T=_):H=H.next=yt,me.lanes|=at,sr|=at;yt=tt.action,Wr&&s(_,yt),_=tt.hasEagerState?tt.eagerState:s(_,yt)}else at={lane:yt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(w=H=at,T=_):H=H.next=at,me.lanes|=yt,sr|=yt;tt=tt.next}while(tt!==null&&tt!==i);if(H===null?T=_:H.next=w,!ci(_,n.memoizedState)&&(Tn=!0,mt&&(s=zs,s!==null)))throw s;n.memoizedState=_,n.baseState=T,n.baseQueue=H,u.lastRenderedState=_}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Th(n){var i=dn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=n;var u=s.dispatch,d=s.pending,_=i.memoizedState;if(d!==null){s.pending=null;var T=d=d.next;do _=n(_,T.action),T=T.next;while(T!==d);ci(_,i.memoizedState)||(Tn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),s.lastRenderedState=_}return[_,u]}function og(n,i,s){var u=me,d=dn(),_=we;if(_){if(s===void 0)throw Error(a(407));s=s()}else s=i();var T=!ci((Ne||d).memoizedState,s);T&&(d.memoizedState=s,Tn=!0),d=d.queue;var w=cg.bind(null,u,d,n);if(dl(2048,8,w,[n]),d.getSnapshot!==i||T||hn!==null&&hn.memoizedState.tag&1){if(u.flags|=2048,Hs(9,Wu(),ug.bind(null,u,d,s,i),null),ke===null)throw Error(a(349));_||($a&124)!==0||lg(u,i,s)}return s}function lg(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=me.updateQueue,i===null?(i=Sh(),me.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function ug(n,i,s,u){i.value=s,i.getSnapshot=u,fg(i)&&hg(n)}function cg(n,i,s){return s(function(){fg(i)&&hg(n)})}function fg(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!ci(n,s)}catch{return!0}}function hg(n){var i=Us(n,2);i!==null&&_i(i,n,2)}function bh(n){var i=$n();if(typeof n=="function"){var s=n;if(n=s(),Wr){ct(!0);try{s()}finally{ct(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:n},i}function dg(n,i,s,u){return n.baseState=s,Eh(n,Ne,typeof u=="function"?u:Ma)}function XM(n,i,s,u,d){if(Yu(n))throw Error(a(485));if(n=i.action,n!==null){var _={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};B.T!==null?s(!0):_.isTransition=!1,u(_),s=i.pending,s===null?(_.next=i.pending=_,pg(i,_)):(_.next=s.next,i.pending=s.next=_)}}function pg(n,i){var s=i.action,u=i.payload,d=n.state;if(i.isTransition){var _=B.T,T={};B.T=T;try{var w=s(d,u),H=B.S;H!==null&&H(T,w),mg(n,i,w)}catch(tt){Ah(n,i,tt)}finally{B.T=_}}else try{_=s(d,u),mg(n,i,_)}catch(tt){Ah(n,i,tt)}}function mg(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){_g(n,i,u)},function(u){return Ah(n,i,u)}):_g(n,i,s)}function _g(n,i,s){i.status="fulfilled",i.value=s,gg(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,pg(n,s)))}function Ah(n,i,s){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,gg(i),i=i.next;while(i!==u)}n.action=null}function gg(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function vg(n,i){return i}function xg(n,i){if(we){var s=ke.formState;if(s!==null){t:{var u=me;if(we){if(an){e:{for(var d=an,_=ea;d.nodeType!==8;){if(!_){d=null;break e}if(d=Wi(d.nextSibling),d===null){d=null;break e}}_=d.data,d=_==="F!"||_==="F"?d:null}if(d){an=Wi(d.nextSibling),u=d.data==="F!";break t}}Gr(u)}u=!1}u&&(i=s[0])}}return s=$n(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vg,lastRenderedState:i},s.queue=u,s=Bg.bind(null,me,u),u.dispatch=s,u=bh(!1),_=Uh.bind(null,me,!1,u.queue),u=$n(),d={state:i,dispatch:null,action:n,pending:null},u.queue=d,s=XM.bind(null,me,d,_,s),d.dispatch=s,u.memoizedState=n,[i,s,!1]}function yg(n){var i=dn();return Sg(i,Ne,n)}function Sg(n,i,s){if(i=Eh(n,i,vg)[0],n=Xu(Ma)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=hl(i)}catch(T){throw T===sl?Bu:T}else u=i;i=dn();var d=i.queue,_=d.dispatch;return s!==i.memoizedState&&(me.flags|=2048,Hs(9,Wu(),WM.bind(null,d,s),null)),[u,_,n]}function WM(n,i){n.action=i}function Mg(n){var i=dn(),s=Ne;if(s!==null)return Sg(i,s,n);dn(),i=i.memoizedState,s=dn();var u=s.queue.dispatch;return s.memoizedState=n,[i,u,!1]}function Hs(n,i,s,u){return n={tag:n,create:s,deps:u,inst:i,next:null},i=me.updateQueue,i===null&&(i=Sh(),me.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(u=s.next,s.next=n,n.next=u,i.lastEffect=n),n}function Wu(){return{destroy:void 0,resource:void 0}}function Eg(){return dn().memoizedState}function qu(n,i,s,u){var d=$n();u=u===void 0?null:u,me.flags|=n,d.memoizedState=Hs(1|i,Wu(),s,u)}function dl(n,i,s,u){var d=dn();u=u===void 0?null:u;var _=d.memoizedState.inst;Ne!==null&&u!==null&&_h(u,Ne.memoizedState.deps)?d.memoizedState=Hs(i,_,s,u):(me.flags|=n,d.memoizedState=Hs(1|i,_,s,u))}function Tg(n,i){qu(8390656,8,n,i)}function bg(n,i){dl(2048,8,n,i)}function Ag(n,i){return dl(4,2,n,i)}function Rg(n,i){return dl(4,4,n,i)}function wg(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cg(n,i,s){s=s!=null?s.concat([n]):null,dl(4,4,wg.bind(null,i,n),s)}function Rh(){}function Dg(n,i){var s=dn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&_h(i,u[1])?u[0]:(s.memoizedState=[n,i],n)}function Ug(n,i){var s=dn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&_h(i,u[1]))return u[0];if(u=n(),Wr){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[u,i],u}function wh(n,i,s){return s===void 0||($a&1073741824)!==0?n.memoizedState=i:(n.memoizedState=s,n=N0(),me.lanes|=n,sr|=n,s)}function Lg(n,i,s,u){return ci(s,i)?s:Is.current!==null?(n=wh(n,s,u),ci(n,i)||(Tn=!0),n):($a&42)===0?(Tn=!0,n.memoizedState=s):(n=N0(),me.lanes|=n,sr|=n,i)}function Og(n,i,s,u,d){var _=Y.p;Y.p=_!==0&&8>_?_:8;var T=B.T,w={};B.T=w,Uh(n,!1,i,s);try{var H=d(),tt=B.S;if(tt!==null&&tt(w,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var mt=GM(H,u);pl(n,i,mt,mi(n))}else pl(n,i,u,mi(n))}catch(yt){pl(n,i,{then:function(){},status:"rejected",reason:yt},mi())}finally{Y.p=_,B.T=T}}function qM(){}function Ch(n,i,s,u){if(n.tag!==5)throw Error(a(476));var d=Ng(n).queue;Og(n,d,i,G,s===null?qM:function(){return Pg(n),s(u)})}function Ng(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:G},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Pg(n){var i=Ng(n).next.queue;pl(n,i,{},mi())}function Dh(){return Bn(Ll)}function zg(){return dn().memoizedState}function Ig(){return dn().memoizedState}function YM(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=mi();n=Qa(s);var u=Ja(i,n,s);u!==null&&(_i(u,i,s),ll(u,i,s)),i={cache:sh()},n.payload=i;return}i=i.return}}function jM(n,i,s){var u=mi();s={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Yu(n)?Fg(i,s):(s=Kf(n,i,s,u),s!==null&&(_i(s,n,u),Hg(s,i,u)))}function Bg(n,i,s){var u=mi();pl(n,i,s,u)}function pl(n,i,s,u){var d={lane:u,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Yu(n))Fg(i,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,w=_(T,s);if(d.hasEagerState=!0,d.eagerState=w,ci(w,T))return Du(n,i,d,0),ke===null&&Cu(),!1}catch{}finally{}if(s=Kf(n,i,d,u),s!==null)return _i(s,n,u),Hg(s,i,u),!0}return!1}function Uh(n,i,s,u){if(u={lane:2,revertLane:ud(),action:u,hasEagerState:!1,eagerState:null,next:null},Yu(n)){if(i)throw Error(a(479))}else i=Kf(n,s,u,2),i!==null&&_i(i,n,2)}function Yu(n){var i=n.alternate;return n===me||i!==null&&i===me}function Fg(n,i){Bs=Gu=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function Hg(n,i,s){if((s&4194048)!==0){var u=i.lanes;u&=n.pendingLanes,s|=u,i.lanes=s,Gt(n,s)}}var ju={readContext:Bn,use:ku,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},Gg={readContext:Bn,use:ku,useCallback:function(n,i){return $n().memoizedState=[n,i===void 0?null:i],n},useContext:Bn,useEffect:Tg,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,qu(4194308,4,wg.bind(null,i,n),s)},useLayoutEffect:function(n,i){return qu(4194308,4,n,i)},useInsertionEffect:function(n,i){qu(4,2,n,i)},useMemo:function(n,i){var s=$n();i=i===void 0?null:i;var u=n();if(Wr){ct(!0);try{n()}finally{ct(!1)}}return s.memoizedState=[u,i],u},useReducer:function(n,i,s){var u=$n();if(s!==void 0){var d=s(i);if(Wr){ct(!0);try{s(i)}finally{ct(!1)}}}else d=i;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=jM.bind(null,me,n),[u.memoizedState,n]},useRef:function(n){var i=$n();return n={current:n},i.memoizedState=n},useState:function(n){n=bh(n);var i=n.queue,s=Bg.bind(null,me,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:Rh,useDeferredValue:function(n,i){var s=$n();return wh(s,n,i)},useTransition:function(){var n=bh(!1);return n=Og.bind(null,me,n.queue,!0,!1),$n().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var u=me,d=$n();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ke===null)throw Error(a(349));(Ee&124)!==0||lg(u,i,s)}d.memoizedState=s;var _={value:s,getSnapshot:i};return d.queue=_,Tg(cg.bind(null,u,_,n),[n]),u.flags|=2048,Hs(9,Wu(),ug.bind(null,u,_,s,i),null),s},useId:function(){var n=$n(),i=ke.identifierPrefix;if(we){var s=xa,u=va;s=(u&~(1<<32-It(u)-1)).toString(32)+s,i="«"+i+"R"+s,s=Vu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=VM++,i="«"+i+"r"+s.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Dh,useFormState:xg,useActionState:xg,useOptimistic:function(n){var i=$n();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Uh.bind(null,me,!0,s),s.dispatch=i,[n,i]},useMemoCache:Mh,useCacheRefresh:function(){return $n().memoizedState=YM.bind(null,me)}},Vg={readContext:Bn,use:ku,useCallback:Dg,useContext:Bn,useEffect:bg,useImperativeHandle:Cg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Ug,useReducer:Xu,useRef:Eg,useState:function(){return Xu(Ma)},useDebugValue:Rh,useDeferredValue:function(n,i){var s=dn();return Lg(s,Ne.memoizedState,n,i)},useTransition:function(){var n=Xu(Ma)[0],i=dn().memoizedState;return[typeof n=="boolean"?n:hl(n),i]},useSyncExternalStore:og,useId:zg,useHostTransitionStatus:Dh,useFormState:yg,useActionState:yg,useOptimistic:function(n,i){var s=dn();return dg(s,Ne,n,i)},useMemoCache:Mh,useCacheRefresh:Ig},ZM={readContext:Bn,use:ku,useCallback:Dg,useContext:Bn,useEffect:bg,useImperativeHandle:Cg,useInsertionEffect:Ag,useLayoutEffect:Rg,useMemo:Ug,useReducer:Th,useRef:Eg,useState:function(){return Th(Ma)},useDebugValue:Rh,useDeferredValue:function(n,i){var s=dn();return Ne===null?wh(s,n,i):Lg(s,Ne.memoizedState,n,i)},useTransition:function(){var n=Th(Ma)[0],i=dn().memoizedState;return[typeof n=="boolean"?n:hl(n),i]},useSyncExternalStore:og,useId:zg,useHostTransitionStatus:Dh,useFormState:Mg,useActionState:Mg,useOptimistic:function(n,i){var s=dn();return Ne!==null?dg(s,Ne,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Mh,useCacheRefresh:Ig},Gs=null,ml=0;function Zu(n){var i=ml;return ml+=1,Gs===null&&(Gs=[]),$_(Gs,n,i)}function _l(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Ku(n,i){throw i.$$typeof===g?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function kg(n){var i=n._init;return i(n._payload)}function Xg(n){function i(K,W){if(n){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function s(K,W){if(!n)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function u(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function d(K,W){return K=ga(K,W),K.index=0,K.sibling=null,K}function _(K,W,$){return K.index=$,n?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=67108866,W):$):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function T(K){return n&&K.alternate===null&&(K.flags|=67108866),K}function w(K,W,$,_t){return W===null||W.tag!==6?(W=Jf($,K.mode,_t),W.return=K,W):(W=d(W,$),W.return=K,W)}function H(K,W,$,_t){var Ht=$.type;return Ht===E?mt(K,W,$.props.children,_t,$.key):W!==null&&(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&kg(Ht)===W.type)?(W=d(W,$.props),_l(W,$),W.return=K,W):(W=Lu($.type,$.key,$.props,null,K.mode,_t),_l(W,$),W.return=K,W)}function tt(K,W,$,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=$f($,K.mode,_t),W.return=K,W):(W=d(W,$.children||[]),W.return=K,W)}function mt(K,W,$,_t,Ht){return W===null||W.tag!==7?(W=Ir($,K.mode,_t,Ht),W.return=K,W):(W=d(W,$),W.return=K,W)}function yt(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Jf(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return $=Lu(W.type,W.key,W.props,null,K.mode,$),_l($,W),$.return=K,$;case x:return W=$f(W,K.mode,$),W.return=K,W;case F:var _t=W._init;return W=_t(W._payload),yt(K,W,$)}if(rt(W)||Z(W))return W=Ir(W,K.mode,$,null),W.return=K,W;if(typeof W.then=="function")return yt(K,Zu(W),$);if(W.$$typeof===D)return yt(K,zu(K,W),$);Ku(K,W)}return null}function at(K,W,$,_t){var Ht=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:w(K,W,""+$,_t);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Ht?H(K,W,$,_t):null;case x:return $.key===Ht?tt(K,W,$,_t):null;case F:return Ht=$._init,$=Ht($._payload),at(K,W,$,_t)}if(rt($)||Z($))return Ht!==null?null:mt(K,W,$,_t,null);if(typeof $.then=="function")return at(K,W,Zu($),_t);if($.$$typeof===D)return at(K,W,zu(K,$),_t);Ku(K,$)}return null}function st(K,W,$,_t,Ht){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get($)||null,w(W,K,""+_t,Ht);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case v:return K=K.get(_t.key===null?$:_t.key)||null,H(W,K,_t,Ht);case x:return K=K.get(_t.key===null?$:_t.key)||null,tt(W,K,_t,Ht);case F:var _e=_t._init;return _t=_e(_t._payload),st(K,W,$,_t,Ht)}if(rt(_t)||Z(_t))return K=K.get($)||null,mt(W,K,_t,Ht,null);if(typeof _t.then=="function")return st(K,W,$,Zu(_t),Ht);if(_t.$$typeof===D)return st(K,W,$,zu(W,_t),Ht);Ku(W,_t)}return null}function ie(K,W,$,_t){for(var Ht=null,_e=null,jt=W,ee=W=0,An=null;jt!==null&&ee<$.length;ee++){jt.index>ee?(An=jt,jt=null):An=jt.sibling;var Re=at(K,jt,$[ee],_t);if(Re===null){jt===null&&(jt=An);break}n&&jt&&Re.alternate===null&&i(K,jt),W=_(Re,W,ee),_e===null?Ht=Re:_e.sibling=Re,_e=Re,jt=An}if(ee===$.length)return s(K,jt),we&&Fr(K,ee),Ht;if(jt===null){for(;ee<$.length;ee++)jt=yt(K,$[ee],_t),jt!==null&&(W=_(jt,W,ee),_e===null?Ht=jt:_e.sibling=jt,_e=jt);return we&&Fr(K,ee),Ht}for(jt=u(jt);ee<$.length;ee++)An=st(jt,K,ee,$[ee],_t),An!==null&&(n&&An.alternate!==null&&jt.delete(An.key===null?ee:An.key),W=_(An,W,ee),_e===null?Ht=An:_e.sibling=An,_e=An);return n&&jt.forEach(function(mr){return i(K,mr)}),we&&Fr(K,ee),Ht}function $t(K,W,$,_t){if($==null)throw Error(a(151));for(var Ht=null,_e=null,jt=W,ee=W=0,An=null,Re=$.next();jt!==null&&!Re.done;ee++,Re=$.next()){jt.index>ee?(An=jt,jt=null):An=jt.sibling;var mr=at(K,jt,Re.value,_t);if(mr===null){jt===null&&(jt=An);break}n&&jt&&mr.alternate===null&&i(K,jt),W=_(mr,W,ee),_e===null?Ht=mr:_e.sibling=mr,_e=mr,jt=An}if(Re.done)return s(K,jt),we&&Fr(K,ee),Ht;if(jt===null){for(;!Re.done;ee++,Re=$.next())Re=yt(K,Re.value,_t),Re!==null&&(W=_(Re,W,ee),_e===null?Ht=Re:_e.sibling=Re,_e=Re);return we&&Fr(K,ee),Ht}for(jt=u(jt);!Re.done;ee++,Re=$.next())Re=st(jt,K,ee,Re.value,_t),Re!==null&&(n&&Re.alternate!==null&&jt.delete(Re.key===null?ee:Re.key),W=_(Re,W,ee),_e===null?Ht=Re:_e.sibling=Re,_e=Re);return n&&jt.forEach(function(KE){return i(K,KE)}),we&&Fr(K,ee),Ht}function ze(K,W,$,_t){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:t:{for(var Ht=$.key;W!==null;){if(W.key===Ht){if(Ht=$.type,Ht===E){if(W.tag===7){s(K,W.sibling),_t=d(W,$.props.children),_t.return=K,K=_t;break t}}else if(W.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&kg(Ht)===W.type){s(K,W.sibling),_t=d(W,$.props),_l(_t,$),_t.return=K,K=_t;break t}s(K,W);break}else i(K,W);W=W.sibling}$.type===E?(_t=Ir($.props.children,K.mode,_t,$.key),_t.return=K,K=_t):(_t=Lu($.type,$.key,$.props,null,K.mode,_t),_l(_t,$),_t.return=K,K=_t)}return T(K);case x:t:{for(Ht=$.key;W!==null;){if(W.key===Ht)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){s(K,W.sibling),_t=d(W,$.children||[]),_t.return=K,K=_t;break t}else{s(K,W);break}else i(K,W);W=W.sibling}_t=$f($,K.mode,_t),_t.return=K,K=_t}return T(K);case F:return Ht=$._init,$=Ht($._payload),ze(K,W,$,_t)}if(rt($))return ie(K,W,$,_t);if(Z($)){if(Ht=Z($),typeof Ht!="function")throw Error(a(150));return $=Ht.call($),$t(K,W,$,_t)}if(typeof $.then=="function")return ze(K,W,Zu($),_t);if($.$$typeof===D)return ze(K,W,zu(K,$),_t);Ku(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(s(K,W.sibling),_t=d(W,$),_t.return=K,K=_t):(s(K,W),_t=Jf($,K.mode,_t),_t.return=K,K=_t),T(K)):s(K,W)}return function(K,W,$,_t){try{ml=0;var Ht=ze(K,W,$,_t);return Gs=null,Ht}catch(jt){if(jt===sl||jt===Bu)throw jt;var _e=fi(29,jt,null,K.mode);return _e.lanes=_t,_e.return=K,_e}finally{}}}var Vs=Xg(!0),Wg=Xg(!1),Ui=X(null),na=null;function tr(n){var i=n.alternate;dt(yn,yn.current&1),dt(Ui,n),na===null&&(i===null||Is.current!==null||i.memoizedState!==null)&&(na=n)}function qg(n){if(n.tag===22){if(dt(yn,yn.current),dt(Ui,n),na===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(na=n)}}else er()}function er(){dt(yn,yn.current),dt(Ui,Ui.current)}function Ea(n){ft(Ui),na===n&&(na=null),ft(yn)}var yn=X(0);function Qu(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Sd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Lh(n,i,s,u){i=n.memoizedState,s=s(u,i),s=s==null?i:m({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Oh={enqueueSetState:function(n,i,s){n=n._reactInternals;var u=mi(),d=Qa(u);d.payload=i,s!=null&&(d.callback=s),i=Ja(n,d,u),i!==null&&(_i(i,n,u),ll(i,n,u))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var u=mi(),d=Qa(u);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=Ja(n,d,u),i!==null&&(_i(i,n,u),ll(i,n,u))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=mi(),u=Qa(s);u.tag=2,i!=null&&(u.callback=i),i=Ja(n,u,s),i!==null&&(_i(i,n,s),ll(i,n,s))}};function Yg(n,i,s,u,d,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,T):i.prototype&&i.prototype.isPureReactComponent?!Jo(s,u)||!Jo(d,_):!0}function jg(n,i,s,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==n&&Oh.enqueueReplaceState(i,i.state,null)}function qr(n,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(n=n.defaultProps){s===i&&(s=m({},s));for(var d in n)s[d]===void 0&&(s[d]=n[d])}return s}var Ju=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Zg(n){Ju(n)}function Kg(n){console.error(n)}function Qg(n){Ju(n)}function $u(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Jg(n,i,s){try{var u=n.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Nh(n,i,s){return s=Qa(s),s.tag=3,s.payload={element:null},s.callback=function(){$u(n,i)},s}function $g(n){return n=Qa(n),n.tag=3,n}function t0(n,i,s,u){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var _=u.value;n.payload=function(){return d(_)},n.callback=function(){Jg(i,s,u)}}var T=s.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){Jg(i,s,u),typeof d!="function"&&(or===null?or=new Set([this]):or.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function KM(n,i,s,u,d){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&il(i,s,d,!0),s=Ui.current,s!==null){switch(s.tag){case 13:return na===null?ad():s.alternate===null&&rn===0&&(rn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,u===uh?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),sd(n,u,d)),!1;case 22:return s.flags|=65536,u===uh?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),sd(n,u,d)),!1}throw Error(a(435,s.tag))}return sd(n,u,d),ad(),!1}if(we)return i=Ui.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,u!==nh&&(n=Error(a(422),{cause:u}),nl(Ri(n,s)))):(u!==nh&&(i=Error(a(423),{cause:u}),nl(Ri(i,s))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Ri(u,s),d=Nh(n.stateNode,u,d),hh(n,d),rn!==4&&(rn=2)),!1;var _=Error(a(520),{cause:u});if(_=Ri(_,s),El===null?El=[_]:El.push(_),rn!==4&&(rn=2),i===null)return!0;u=Ri(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=d&-d,s.lanes|=n,n=Nh(s.stateNode,u,n),hh(s,n),!1;case 1:if(i=s.type,_=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(or===null||!or.has(_))))return s.flags|=65536,d&=-d,s.lanes|=d,d=$g(d),t0(d,n,s,u),hh(s,d),!1}s=s.return}while(s!==null);return!1}var e0=Error(a(461)),Tn=!1;function Un(n,i,s,u){i.child=n===null?Wg(i,null,s,u):Vs(i,n.child,s,u)}function n0(n,i,s,u,d){s=s.render;var _=i.ref;if("ref"in u){var T={};for(var w in u)w!=="ref"&&(T[w]=u[w])}else T=u;return kr(i),u=gh(n,i,s,T,_,d),w=vh(),n!==null&&!Tn?(xh(n,i,d),Ta(n,i,d)):(we&&w&&th(i),i.flags|=1,Un(n,i,u,d),i.child)}function i0(n,i,s,u,d){if(n===null){var _=s.type;return typeof _=="function"&&!Qf(_)&&_.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=_,a0(n,i,_,u,d)):(n=Lu(s.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,!Vh(n,d)){var T=_.memoizedProps;if(s=s.compare,s=s!==null?s:Jo,s(T,u)&&n.ref===i.ref)return Ta(n,i,d)}return i.flags|=1,n=ga(_,u),n.ref=i.ref,n.return=i,i.child=n}function a0(n,i,s,u,d){if(n!==null){var _=n.memoizedProps;if(Jo(_,u)&&n.ref===i.ref)if(Tn=!1,i.pendingProps=u=_,Vh(n,d))(n.flags&131072)!==0&&(Tn=!0);else return i.lanes=n.lanes,Ta(n,i,d)}return Ph(n,i,s,u,d)}function r0(n,i,s){var u=i.pendingProps,d=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=_!==null?_.baseLanes|s:s,n!==null){for(d=i.child=n.child,_=0;d!==null;)_=_|d.lanes|d.childLanes,d=d.sibling;i.childLanes=_&~u}else i.childLanes=0,i.child=null;return s0(n,i,u,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Iu(i,_!==null?_.cachePool:null),_!==null?ag(i,_):ph(),qg(i);else return i.lanes=i.childLanes=536870912,s0(n,i,_!==null?_.baseLanes|s:s,s)}else _!==null?(Iu(i,_.cachePool),ag(i,_),er(),i.memoizedState=null):(n!==null&&Iu(i,null),ph(),er());return Un(n,i,d,s),i.child}function s0(n,i,s,u){var d=lh();return d=d===null?null:{parent:xn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},n!==null&&Iu(i,null),ph(),qg(i),n!==null&&il(n,i,u,!0),null}function tc(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function Ph(n,i,s,u,d){return kr(i),s=gh(n,i,s,u,void 0,d),u=vh(),n!==null&&!Tn?(xh(n,i,d),Ta(n,i,d)):(we&&u&&th(i),i.flags|=1,Un(n,i,s,d),i.child)}function o0(n,i,s,u,d,_){return kr(i),i.updateQueue=null,s=sg(i,u,s,d),rg(n),u=vh(),n!==null&&!Tn?(xh(n,i,_),Ta(n,i,_)):(we&&u&&th(i),i.flags|=1,Un(n,i,s,_),i.child)}function l0(n,i,s,u,d){if(kr(i),i.stateNode===null){var _=Ls,T=s.contextType;typeof T=="object"&&T!==null&&(_=Bn(T)),_=new s(u,_),i.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=Oh,i.stateNode=_,_._reactInternals=i,_=i.stateNode,_.props=u,_.state=i.memoizedState,_.refs={},ch(i),T=s.contextType,_.context=typeof T=="object"&&T!==null?Bn(T):Ls,_.state=i.memoizedState,T=s.getDerivedStateFromProps,typeof T=="function"&&(Lh(i,s,T,u),_.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&Oh.enqueueReplaceState(_,_.state,null),cl(i,u,_,d),ul(),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(n===null){_=i.stateNode;var w=i.memoizedProps,H=qr(s,w);_.props=H;var tt=_.context,mt=s.contextType;T=Ls,typeof mt=="object"&&mt!==null&&(T=Bn(mt));var yt=s.getDerivedStateFromProps;mt=typeof yt=="function"||typeof _.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,mt||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w||tt!==T)&&jg(i,_,u,T),Ka=!1;var at=i.memoizedState;_.state=at,cl(i,u,_,d),ul(),tt=i.memoizedState,w||at!==tt||Ka?(typeof yt=="function"&&(Lh(i,s,yt,u),tt=i.memoizedState),(H=Ka||Yg(i,s,H,u,at,tt,T))?(mt||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=tt),_.props=u,_.state=tt,_.context=T,u=H):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{_=i.stateNode,fh(n,i),T=i.memoizedProps,mt=qr(s,T),_.props=mt,yt=i.pendingProps,at=_.context,tt=s.contextType,H=Ls,typeof tt=="object"&&tt!==null&&(H=Bn(tt)),w=s.getDerivedStateFromProps,(tt=typeof w=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==yt||at!==H)&&jg(i,_,u,H),Ka=!1,at=i.memoizedState,_.state=at,cl(i,u,_,d),ul();var st=i.memoizedState;T!==yt||at!==st||Ka||n!==null&&n.dependencies!==null&&Pu(n.dependencies)?(typeof w=="function"&&(Lh(i,s,w,u),st=i.memoizedState),(mt=Ka||Yg(i,s,mt,u,at,st,H)||n!==null&&n.dependencies!==null&&Pu(n.dependencies))?(tt||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,st,H),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,st,H)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),_.props=u,_.state=st,_.context=H,u=mt):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&at===n.memoizedState||(i.flags|=1024),u=!1)}return _=u,tc(n,i),u=(i.flags&128)!==0,_||u?(_=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:_.render(),i.flags|=1,n!==null&&u?(i.child=Vs(i,n.child,null,d),i.child=Vs(i,null,s,d)):Un(n,i,s,d),i.memoizedState=_.state,n=i.child):n=Ta(n,i,d),n}function u0(n,i,s,u){return el(),i.flags|=256,Un(n,i,s,u),i.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ih(n){return{baseLanes:n,cachePool:K_()}}function Bh(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=Li),n}function c0(n,i,s){var u=i.pendingProps,d=!1,_=(i.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(yn.current&2)!==0),T&&(d=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,n===null){if(we){if(d?tr(i):er(),we){var w=an,H;if(H=w){t:{for(H=w,w=ea;H.nodeType!==8;){if(!w){w=null;break t}if(H=Wi(H.nextSibling),H===null){w=null;break t}}w=H}w!==null?(i.memoizedState={dehydrated:w,treeContext:Br!==null?{id:va,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},H=fi(18,null,null,0),H.stateNode=w,H.return=i,i.child=H,qn=i,an=null,H=!0):H=!1}H||Gr(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Sd(w)?i.lanes=32:i.lanes=536870912,null;Ea(i)}return w=u.children,u=u.fallback,d?(er(),d=i.mode,w=ec({mode:"hidden",children:w},d),u=Ir(u,d,s,null),w.return=i,u.return=i,w.sibling=u,i.child=w,d=i.child,d.memoizedState=Ih(s),d.childLanes=Bh(n,T,s),i.memoizedState=zh,u):(tr(i),Fh(i,w))}if(H=n.memoizedState,H!==null&&(w=H.dehydrated,w!==null)){if(_)i.flags&256?(tr(i),i.flags&=-257,i=Hh(n,i,s)):i.memoizedState!==null?(er(),i.child=n.child,i.flags|=128,i=null):(er(),d=u.fallback,w=i.mode,u=ec({mode:"visible",children:u.children},w),d=Ir(d,w,s,null),d.flags|=2,u.return=i,d.return=i,u.sibling=d,i.child=u,Vs(i,n.child,null,s),u=i.child,u.memoizedState=Ih(s),u.childLanes=Bh(n,T,s),i.memoizedState=zh,i=d);else if(tr(i),Sd(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var tt=T.dgst;T=tt,u=Error(a(419)),u.stack="",u.digest=T,nl({value:u,source:null,stack:null}),i=Hh(n,i,s)}else if(Tn||il(n,i,s,!1),T=(s&n.childLanes)!==0,Tn||T){if(T=ke,T!==null&&(u=s&-s,u=(u&42)!==0?1:ae(u),u=(u&(T.suspendedLanes|s))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,Us(n,u),_i(T,n,u),e0;w.data==="$?"||ad(),i=Hh(n,i,s)}else w.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=H.treeContext,an=Wi(w.nextSibling),qn=i,we=!0,Hr=null,ea=!1,n!==null&&(Ci[Di++]=va,Ci[Di++]=xa,Ci[Di++]=Br,va=n.id,xa=n.overflow,Br=i),i=Fh(i,u.children),i.flags|=4096);return i}return d?(er(),d=u.fallback,w=i.mode,H=n.child,tt=H.sibling,u=ga(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,tt!==null?d=ga(tt,d):(d=Ir(d,w,s,null),d.flags|=2),d.return=i,u.return=i,u.sibling=d,i.child=u,u=d,d=i.child,w=n.child.memoizedState,w===null?w=Ih(s):(H=w.cachePool,H!==null?(tt=xn._currentValue,H=H.parent!==tt?{parent:tt,pool:tt}:H):H=K_(),w={baseLanes:w.baseLanes|s,cachePool:H}),d.memoizedState=w,d.childLanes=Bh(n,T,s),i.memoizedState=zh,u):(tr(i),s=n.child,n=s.sibling,s=ga(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,n!==null&&(T=i.deletions,T===null?(i.deletions=[n],i.flags|=16):T.push(n)),i.child=s,i.memoizedState=null,s)}function Fh(n,i){return i=ec({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function ec(n,i){return n=fi(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Hh(n,i,s){return Vs(i,n.child,null,s),n=Fh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function f0(n,i,s){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ah(n.return,i,s)}function Gh(n,i,s,u,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=s,_.tailMode=d)}function h0(n,i,s){var u=i.pendingProps,d=u.revealOrder,_=u.tail;if(Un(n,i,u.children,s),u=yn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&f0(n,s,i);else if(n.tag===19)f0(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break t;for(;n.sibling===null;){if(n.return===null||n.return===i)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(dt(yn,u),d){case"forwards":for(s=i.child,d=null;s!==null;)n=s.alternate,n!==null&&Qu(n)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Gh(i,!1,d,s,_);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Qu(n)===null){i.child=d;break}n=d.sibling,d.sibling=s,s=d,d=n}Gh(i,!0,s,null,_);break;case"together":Gh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ta(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),sr|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(il(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,s=ga(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=ga(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function Vh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Pu(n)))}function QM(n,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),Za(i,xn,n.memoizedState.cache),el();break;case 27:case 5:Dt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:Za(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(tr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?c0(n,i,s):(tr(i),n=Ta(n,i,s),n!==null?n.sibling:null);tr(i);break;case 19:var d=(n.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(il(n,i,s,!1),u=(s&i.childLanes)!==0),d){if(u)return h0(n,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),dt(yn,yn.current),u)break;return null;case 22:case 23:return i.lanes=0,r0(n,i,s);case 24:Za(i,xn,n.memoizedState.cache)}return Ta(n,i,s)}function d0(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)Tn=!0;else{if(!Vh(n,s)&&(i.flags&128)===0)return Tn=!1,QM(n,i,s);Tn=(n.flags&131072)!==0}else Tn=!1,we&&(i.flags&1048576)!==0&&k_(i,Nu,i.index);switch(i.lanes=0,i.tag){case 16:t:{n=i.pendingProps;var u=i.elementType,d=u._init;if(u=d(u._payload),i.type=u,typeof u=="function")Qf(u)?(n=qr(u,n),i.tag=1,i=l0(null,i,u,n,s)):(i.tag=0,i=Ph(null,i,u,n,s));else{if(u!=null){if(d=u.$$typeof,d===A){i.tag=11,i=n0(null,i,u,n,s);break t}else if(d===z){i.tag=14,i=i0(null,i,u,n,s);break t}}throw i=ht(u)||u,Error(a(306,i,""))}}return i;case 0:return Ph(n,i,i.type,i.pendingProps,s);case 1:return u=i.type,d=qr(u,i.pendingProps),l0(n,i,u,d,s);case 3:t:{if(At(i,i.stateNode.containerInfo),n===null)throw Error(a(387));u=i.pendingProps;var _=i.memoizedState;d=_.element,fh(n,i),cl(i,u,null,s);var T=i.memoizedState;if(u=T.cache,Za(i,xn,u),u!==_.cache&&rh(i,[xn],s,!0),ul(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){i=u0(n,i,u,s);break t}else if(u!==d){d=Ri(Error(a(424)),i),nl(d),i=u0(n,i,u,s);break t}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(an=Wi(n.firstChild),qn=i,we=!0,Hr=null,ea=!0,s=Wg(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(el(),u===d){i=Ta(n,i,s);break t}Un(n,i,u,s)}i=i.child}return i;case 26:return tc(n,i),n===null?(s=gv(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,n=i.pendingProps,u=mc(J.current).createElement(s),u[vn]=i,u[en]=n,On(u,s,n),fn(u),i.stateNode=u):i.memoizedState=gv(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Dt(i),n===null&&we&&(u=i.stateNode=pv(i.type,i.pendingProps,J.current),qn=i,ea=!0,d=an,cr(i.type)?(Md=d,an=Wi(u.firstChild)):an=d),Un(n,i,i.pendingProps.children,s),tc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&we&&((d=u=an)&&(u=bE(u,i.type,i.pendingProps,ea),u!==null?(i.stateNode=u,qn=i,an=Wi(u.firstChild),ea=!1,d=!0):d=!1),d||Gr(i)),Dt(i),d=i.type,_=i.pendingProps,T=n!==null?n.memoizedProps:null,u=_.children,vd(d,_)?u=null:T!==null&&vd(d,T)&&(i.flags|=32),i.memoizedState!==null&&(d=gh(n,i,kM,null,null,s),Ll._currentValue=d),tc(n,i),Un(n,i,u,s),i.child;case 6:return n===null&&we&&((n=s=an)&&(s=AE(s,i.pendingProps,ea),s!==null?(i.stateNode=s,qn=i,an=null,n=!0):n=!1),n||Gr(i)),null;case 13:return c0(n,i,s);case 4:return At(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Vs(i,null,u,s):Un(n,i,u,s),i.child;case 11:return n0(n,i,i.type,i.pendingProps,s);case 7:return Un(n,i,i.pendingProps,s),i.child;case 8:return Un(n,i,i.pendingProps.children,s),i.child;case 12:return Un(n,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,Za(i,i.type,u.value),Un(n,i,u.children,s),i.child;case 9:return d=i.type._context,u=i.pendingProps.children,kr(i),d=Bn(d),u=u(d),i.flags|=1,Un(n,i,u,s),i.child;case 14:return i0(n,i,i.type,i.pendingProps,s);case 15:return a0(n,i,i.type,i.pendingProps,s);case 19:return h0(n,i,s);case 31:return u=i.pendingProps,s=i.mode,u={mode:u.mode,children:u.children},n===null?(s=ec(u,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ga(n.child,u),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return r0(n,i,s);case 24:return kr(i),u=Bn(xn),n===null?(d=lh(),d===null&&(d=ke,_=sh(),d.pooledCache=_,_.refCount++,_!==null&&(d.pooledCacheLanes|=s),d=_),i.memoizedState={parent:u,cache:d},ch(i),Za(i,xn,d)):((n.lanes&s)!==0&&(fh(n,i),cl(i,null,null,s),ul()),d=n.memoizedState,_=i.memoizedState,d.parent!==u?(d={parent:u,cache:u},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),Za(i,xn,u)):(u=_.cache,Za(i,xn,u),u!==d.cache&&rh(i,[xn],s,!0))),Un(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ba(n){n.flags|=4}function p0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Mv(i)){if(i=Ui.current,i!==null&&((Ee&4194048)===Ee?na!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||i!==na))throw ol=uh,Q_;n.flags|=8192}}function nc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?bt():536870912,n.lanes|=i,qs|=i)}function gl(n,i){if(!we)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Qe(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,u=0;if(i)for(var d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=s,i}function JM(n,i,s){var u=i.pendingProps;switch(eh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return s=i.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Sa(xn),qt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(tl(i)?ba(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,q_())),Qe(i),null;case 26:return s=i.memoizedState,n===null?(ba(i),s!==null?(Qe(i),p0(i,s)):(Qe(i),i.flags&=-16777217)):s?s!==n.memoizedState?(ba(i),Qe(i),p0(i,s)):(Qe(i),i.flags&=-16777217):(n.memoizedProps!==u&&ba(i),Qe(i),i.flags&=-16777217),null;case 27:le(i),s=J.current;var d=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==u&&ba(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}n=vt.current,tl(i)?X_(i):(n=pv(d,u,s),i.stateNode=n,ba(i))}return Qe(i),null;case 5:if(le(i),s=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==u&&ba(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}if(n=vt.current,tl(i))X_(i);else{switch(d=mc(J.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(s,{is:u.is}):d.createElement(s)}}n[vn]=i,n[en]=u;t:for(d=i.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===i)break t;for(;d.sibling===null;){if(d.return===null||d.return===i)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}i.stateNode=n;t:switch(On(n,s,u),s){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&ba(i)}}return Qe(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==u&&ba(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(n=J.current,tl(i)){if(n=i.stateNode,s=i.memoizedProps,u=null,d=qn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[vn]=i,n=!!(n.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||ov(n.nodeValue,s)),n||Gr(i)}else n=mc(n).createTextNode(u),n[vn]=i,i.stateNode=n}return Qe(i),null;case 13:if(u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=tl(i),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[vn]=i}else el(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),d=!1}else d=q_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?(Ea(i),i):(Ea(i),null)}if(Ea(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=u!==null,n=n!==null&&n.memoizedState!==null,s){u=i.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==d&&(u.flags|=2048)}return s!==n&&s&&(i.child.flags|=8192),nc(i,i.updateQueue),Qe(i),null;case 4:return qt(),n===null&&dd(i.stateNode.containerInfo),Qe(i),null;case 10:return Sa(i.type),Qe(i),null;case 19:if(ft(yn),d=i.memoizedState,d===null)return Qe(i),null;if(u=(i.flags&128)!==0,_=d.rendering,_===null)if(u)gl(d,!1);else{if(rn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=Qu(n),_!==null){for(i.flags|=128,gl(d,!1),n=_.updateQueue,i.updateQueue=n,nc(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)V_(s,n),s=s.sibling;return dt(yn,yn.current&1|2),i.child}n=n.sibling}d.tail!==null&&zt()>rc&&(i.flags|=128,u=!0,gl(d,!1),i.lanes=4194304)}else{if(!u)if(n=Qu(_),n!==null){if(i.flags|=128,u=!0,n=n.updateQueue,i.updateQueue=n,nc(i,n),gl(d,!0),d.tail===null&&d.tailMode==="hidden"&&!_.alternate&&!we)return Qe(i),null}else 2*zt()-d.renderingStartTime>rc&&s!==536870912&&(i.flags|=128,u=!0,gl(d,!1),i.lanes=4194304);d.isBackwards?(_.sibling=i.child,i.child=_):(n=d.last,n!==null?n.sibling=_:i.child=_,d.last=_)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=zt(),i.sibling=null,n=yn.current,dt(yn,u?n&1|2:n&1),i):(Qe(i),null);case 22:case 23:return Ea(i),mh(),u=i.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),s=i.updateQueue,s!==null&&nc(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),n!==null&&ft(Xr),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Sa(xn),Qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function $M(n,i){switch(eh(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Sa(xn),qt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 13:if(Ea(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));el()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ft(yn),null;case 4:return qt(),null;case 10:return Sa(i.type),null;case 22:case 23:return Ea(i),mh(),n!==null&&ft(Xr),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Sa(xn),null;case 25:return null;default:return null}}function m0(n,i){switch(eh(i),i.tag){case 3:Sa(xn),qt();break;case 26:case 27:case 5:le(i);break;case 4:qt();break;case 13:Ea(i);break;case 19:ft(yn);break;case 10:Sa(i.type);break;case 22:case 23:Ea(i),mh(),n!==null&&ft(Xr);break;case 24:Sa(xn)}}function vl(n,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&n)===n){u=void 0;var _=s.create,T=s.inst;u=_(),T.destroy=u}s=s.next}while(s!==d)}}catch(w){Fe(i,i.return,w)}}function nr(n,i,s){try{var u=i.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var _=d.next;u=_;do{if((u.tag&n)===n){var T=u.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,d=i;var H=s,tt=w;try{tt()}catch(mt){Fe(d,H,mt)}}}u=u.next}while(u!==_)}}catch(mt){Fe(i,i.return,mt)}}function _0(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{ig(i,s)}catch(u){Fe(n,n.return,u)}}}function g0(n,i,s){s.props=qr(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(u){Fe(n,i,u)}}function xl(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof s=="function"?n.refCleanup=s(u):s.current=u}}catch(d){Fe(n,i,d)}}function ia(n,i){var s=n.ref,u=n.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(d){Fe(n,i,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Fe(n,i,d)}else s.current=null}function v0(n){var i=n.type,s=n.memoizedProps,u=n.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(d){Fe(n,n.return,d)}}function kh(n,i,s){try{var u=n.stateNode;yE(u,n.type,s,i),u[en]=i}catch(d){Fe(n,n.return,d)}}function x0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&cr(n.type)||n.tag===4}function Xh(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||x0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&cr(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wh(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=pc));else if(u!==4&&(u===27&&cr(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(Wh(n,i,s),n=n.sibling;n!==null;)Wh(n,i,s),n=n.sibling}function ic(n,i,s){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(u!==4&&(u===27&&cr(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(ic(n,i,s),n=n.sibling;n!==null;)ic(n,i,s),n=n.sibling}function y0(n){var i=n.stateNode,s=n.memoizedProps;try{for(var u=n.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);On(i,u,s),i[vn]=n,i[en]=s}catch(_){Fe(n,n.return,_)}}var Aa=!1,un=!1,qh=!1,S0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function tE(n,i){if(n=n.containerInfo,_d=Sc,n=L_(n),Xf(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else t:{s=(s=n.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{s.nodeType,_.nodeType}catch{s=null;break t}var T=0,w=-1,H=-1,tt=0,mt=0,yt=n,at=null;e:for(;;){for(var st;yt!==s||d!==0&&yt.nodeType!==3||(w=T+d),yt!==_||u!==0&&yt.nodeType!==3||(H=T+u),yt.nodeType===3&&(T+=yt.nodeValue.length),(st=yt.firstChild)!==null;)at=yt,yt=st;for(;;){if(yt===n)break e;if(at===s&&++tt===d&&(w=T),at===_&&++mt===u&&(H=T),(st=yt.nextSibling)!==null)break;yt=at,at=yt.parentNode}yt=st}s=w===-1||H===-1?null:{start:w,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(gd={focusedElem:n,selectionRange:s},Sc=!1,bn=i;bn!==null;)if(i=bn,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,bn=n;else for(;bn!==null;){switch(i=bn,_=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,s=i,d=_.memoizedProps,_=_.memoizedState,u=s.stateNode;try{var ie=qr(s.type,d,s.elementType===s.type);n=u.getSnapshotBeforeUpdate(ie,_),u.__reactInternalSnapshotBeforeUpdate=n}catch($t){Fe(s,s.return,$t)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)yd(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":yd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,bn=n;break}bn=i.return}}function M0(n,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:ir(n,s),u&4&&vl(5,s);break;case 1:if(ir(n,s),u&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(T){Fe(s,s.return,T)}else{var d=qr(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(d,i,n.__reactInternalSnapshotBeforeUpdate)}catch(T){Fe(s,s.return,T)}}u&64&&_0(s),u&512&&xl(s,s.return);break;case 3:if(ir(n,s),u&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ig(n,i)}catch(T){Fe(s,s.return,T)}}break;case 27:i===null&&u&4&&y0(s);case 26:case 5:ir(n,s),i===null&&u&4&&v0(s),u&512&&xl(s,s.return);break;case 12:ir(n,s);break;case 13:ir(n,s),u&4&&b0(n,s),u&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=uE.bind(null,s),RE(n,s))));break;case 22:if(u=s.memoizedState!==null||Aa,!u){i=i!==null&&i.memoizedState!==null||un,d=Aa;var _=un;Aa=u,(un=i)&&!_?ar(n,s,(s.subtreeFlags&8772)!==0):ir(n,s),Aa=d,un=_}break;case 30:break;default:ir(n,s)}}function E0(n){var i=n.alternate;i!==null&&(n.alternate=null,E0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Es(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ye=null,ti=!1;function Ra(n,i,s){for(s=s.child;s!==null;)T0(n,i,s),s=s.sibling}function T0(n,i,s){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(pt,s)}catch{}switch(s.tag){case 26:un||ia(s,i),Ra(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:un||ia(s,i);var u=Ye,d=ti;cr(s.type)&&(Ye=s.stateNode,ti=!1),Ra(n,i,s),wl(s.stateNode),Ye=u,ti=d;break;case 5:un||ia(s,i);case 6:if(u=Ye,d=ti,Ye=null,Ra(n,i,s),Ye=u,ti=d,Ye!==null)if(ti)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(s.stateNode)}catch(_){Fe(s,i,_)}else try{Ye.removeChild(s.stateNode)}catch(_){Fe(s,i,_)}break;case 18:Ye!==null&&(ti?(n=Ye,hv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),zl(n)):hv(Ye,s.stateNode));break;case 4:u=Ye,d=ti,Ye=s.stateNode.containerInfo,ti=!0,Ra(n,i,s),Ye=u,ti=d;break;case 0:case 11:case 14:case 15:un||nr(2,s,i),un||nr(4,s,i),Ra(n,i,s);break;case 1:un||(ia(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&g0(s,i,u)),Ra(n,i,s);break;case 21:Ra(n,i,s);break;case 22:un=(u=un)||s.memoizedState!==null,Ra(n,i,s),un=u;break;default:Ra(n,i,s)}}function b0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{zl(n)}catch(s){Fe(i,i.return,s)}}function eE(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new S0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new S0),i;default:throw Error(a(435,n.tag))}}function Yh(n,i){var s=eE(n);i.forEach(function(u){var d=cE.bind(null,n,u);s.has(u)||(s.add(u),u.then(d,d))})}function hi(n,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u],_=n,T=i,w=T;t:for(;w!==null;){switch(w.tag){case 27:if(cr(w.type)){Ye=w.stateNode,ti=!1;break t}break;case 5:Ye=w.stateNode,ti=!1;break t;case 3:case 4:Ye=w.stateNode.containerInfo,ti=!0;break t}w=w.return}if(Ye===null)throw Error(a(160));T0(_,T,d),Ye=null,ti=!1,_=d.alternate,_!==null&&(_.return=null),d.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)A0(i,n),i=i.sibling}var Xi=null;function A0(n,i){var s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:hi(i,n),di(n),u&4&&(nr(3,n,n.return),vl(3,n),nr(5,n,n.return));break;case 1:hi(i,n),di(n),u&512&&(un||s===null||ia(s,s.return)),u&64&&Aa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var d=Xi;if(hi(i,n),di(n),u&512&&(un||s===null||ia(s,s.return)),u&4){var _=s!==null?s.memoizedState:null;if(u=n.memoizedState,s===null)if(u===null)if(n.stateNode===null){t:{u=n.type,s=n.memoizedProps,d=d.ownerDocument||d;e:switch(u){case"title":_=d.getElementsByTagName("title")[0],(!_||_[ta]||_[vn]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=d.createElement(u),d.head.insertBefore(_,d.querySelector("head > title"))),On(_,u,s),_[vn]=n,fn(_),u=_;break t;case"link":var T=yv("link","href",d).get(u+(s.href||""));if(T){for(var w=0;w<T.length;w++)if(_=T[w],_.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&_.getAttribute("rel")===(s.rel==null?null:s.rel)&&_.getAttribute("title")===(s.title==null?null:s.title)&&_.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){T.splice(w,1);break e}}_=d.createElement(u),On(_,u,s),d.head.appendChild(_);break;case"meta":if(T=yv("meta","content",d).get(u+(s.content||""))){for(w=0;w<T.length;w++)if(_=T[w],_.getAttribute("content")===(s.content==null?null:""+s.content)&&_.getAttribute("name")===(s.name==null?null:s.name)&&_.getAttribute("property")===(s.property==null?null:s.property)&&_.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&_.getAttribute("charset")===(s.charSet==null?null:s.charSet)){T.splice(w,1);break e}}_=d.createElement(u),On(_,u,s),d.head.appendChild(_);break;default:throw Error(a(468,u))}_[vn]=n,fn(_),u=_}n.stateNode=u}else Sv(d,n.type,n.stateNode);else n.stateNode=xv(d,u,n.memoizedProps);else _!==u?(_===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):_.count--,u===null?Sv(d,n.type,n.stateNode):xv(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&kh(n,n.memoizedProps,s.memoizedProps)}break;case 27:hi(i,n),di(n),u&512&&(un||s===null||ia(s,s.return)),s!==null&&u&4&&kh(n,n.memoizedProps,s.memoizedProps);break;case 5:if(hi(i,n),di(n),u&512&&(un||s===null||ia(s,s.return)),n.flags&32){d=n.stateNode;try{Qn(d,"")}catch(st){Fe(n,n.return,st)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,kh(n,d,s!==null?s.memoizedProps:d)),u&1024&&(qh=!0);break;case 6:if(hi(i,n),di(n),u&4){if(n.stateNode===null)throw Error(a(162));u=n.memoizedProps,s=n.stateNode;try{s.nodeValue=u}catch(st){Fe(n,n.return,st)}}break;case 3:if(vc=null,d=Xi,Xi=_c(i.containerInfo),hi(i,n),Xi=d,di(n),u&4&&s!==null&&s.memoizedState.isDehydrated)try{zl(i.containerInfo)}catch(st){Fe(n,n.return,st)}qh&&(qh=!1,R0(n));break;case 4:u=Xi,Xi=_c(n.stateNode.containerInfo),hi(i,n),di(n),Xi=u;break;case 12:hi(i,n),di(n);break;case 13:hi(i,n),di(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&($h=zt()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Yh(n,u)));break;case 22:d=n.memoizedState!==null;var H=s!==null&&s.memoizedState!==null,tt=Aa,mt=un;if(Aa=tt||d,un=mt||H,hi(i,n),un=mt,Aa=tt,di(n),u&8192)t:for(i=n.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||H||Aa||un||Yr(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){H=s=i;try{if(_=H.stateNode,d)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=H.stateNode;var yt=H.memoizedProps.style,at=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;w.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Fe(H,H.return,st)}}}else if(i.tag===6){if(s===null){H=i;try{H.stateNode.nodeValue=d?"":H.memoizedProps}catch(st){Fe(H,H.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break t;for(;i.sibling===null;){if(i.return===null||i.return===n)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=n.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Yh(n,s))));break;case 19:hi(i,n),di(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Yh(n,u)));break;case 30:break;case 21:break;default:hi(i,n),di(n)}}function di(n){var i=n.flags;if(i&2){try{for(var s,u=n.return;u!==null;){if(x0(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,_=Xh(n);ic(n,_,d);break;case 5:var T=s.stateNode;s.flags&32&&(Qn(T,""),s.flags&=-33);var w=Xh(n);ic(n,w,T);break;case 3:case 4:var H=s.stateNode.containerInfo,tt=Xh(n);Wh(n,tt,H);break;default:throw Error(a(161))}}catch(mt){Fe(n,n.return,mt)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function R0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;R0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ir(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)M0(n,i.alternate,i),i=i.sibling}function Yr(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:nr(4,i,i.return),Yr(i);break;case 1:ia(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&g0(i,i.return,s),Yr(i);break;case 27:wl(i.stateNode);case 26:case 5:ia(i,i.return),Yr(i);break;case 22:i.memoizedState===null&&Yr(i);break;case 30:Yr(i);break;default:Yr(i)}n=n.sibling}}function ar(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,d=n,_=i,T=_.flags;switch(_.tag){case 0:case 11:case 15:ar(d,_,s),vl(4,_);break;case 1:if(ar(d,_,s),u=_,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(tt){Fe(u,u.return,tt)}if(u=_,d=u.updateQueue,d!==null){var w=u.stateNode;try{var H=d.shared.hiddenCallbacks;if(H!==null)for(d.shared.hiddenCallbacks=null,d=0;d<H.length;d++)ng(H[d],w)}catch(tt){Fe(u,u.return,tt)}}s&&T&64&&_0(_),xl(_,_.return);break;case 27:y0(_);case 26:case 5:ar(d,_,s),s&&u===null&&T&4&&v0(_),xl(_,_.return);break;case 12:ar(d,_,s);break;case 13:ar(d,_,s),s&&T&4&&b0(d,_);break;case 22:_.memoizedState===null&&ar(d,_,s),xl(_,_.return);break;case 30:break;default:ar(d,_,s)}i=i.sibling}}function jh(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&al(s))}function Zh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&al(n))}function aa(n,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)w0(n,i,s,u),i=i.sibling}function w0(n,i,s,u){var d=i.flags;switch(i.tag){case 0:case 11:case 15:aa(n,i,s,u),d&2048&&vl(9,i);break;case 1:aa(n,i,s,u);break;case 3:aa(n,i,s,u),d&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&al(n)));break;case 12:if(d&2048){aa(n,i,s,u),n=i.stateNode;try{var _=i.memoizedProps,T=_.id,w=_.onPostCommit;typeof w=="function"&&w(T,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(H){Fe(i,i.return,H)}}else aa(n,i,s,u);break;case 13:aa(n,i,s,u);break;case 23:break;case 22:_=i.stateNode,T=i.alternate,i.memoizedState!==null?_._visibility&2?aa(n,i,s,u):yl(n,i):_._visibility&2?aa(n,i,s,u):(_._visibility|=2,ks(n,i,s,u,(i.subtreeFlags&10256)!==0)),d&2048&&jh(T,i);break;case 24:aa(n,i,s,u),d&2048&&Zh(i.alternate,i);break;default:aa(n,i,s,u)}}function ks(n,i,s,u,d){for(d=d&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var _=n,T=i,w=s,H=u,tt=T.flags;switch(T.tag){case 0:case 11:case 15:ks(_,T,w,H,d),vl(8,T);break;case 23:break;case 22:var mt=T.stateNode;T.memoizedState!==null?mt._visibility&2?ks(_,T,w,H,d):yl(_,T):(mt._visibility|=2,ks(_,T,w,H,d)),d&&tt&2048&&jh(T.alternate,T);break;case 24:ks(_,T,w,H,d),d&&tt&2048&&Zh(T.alternate,T);break;default:ks(_,T,w,H,d)}i=i.sibling}}function yl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,u=i,d=u.flags;switch(u.tag){case 22:yl(s,u),d&2048&&jh(u.alternate,u);break;case 24:yl(s,u),d&2048&&Zh(u.alternate,u);break;default:yl(s,u)}i=i.sibling}}var Sl=8192;function Xs(n){if(n.subtreeFlags&Sl)for(n=n.child;n!==null;)C0(n),n=n.sibling}function C0(n){switch(n.tag){case 26:Xs(n),n.flags&Sl&&n.memoizedState!==null&&HE(Xi,n.memoizedState,n.memoizedProps);break;case 5:Xs(n);break;case 3:case 4:var i=Xi;Xi=_c(n.stateNode.containerInfo),Xs(n),Xi=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Sl,Sl=16777216,Xs(n),Sl=i):Xs(n));break;default:Xs(n)}}function D0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ml(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];bn=u,L0(u,n)}D0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)U0(n),n=n.sibling}function U0(n){switch(n.tag){case 0:case 11:case 15:Ml(n),n.flags&2048&&nr(9,n,n.return);break;case 3:Ml(n);break;case 12:Ml(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,ac(n)):Ml(n);break;default:Ml(n)}}function ac(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];bn=u,L0(u,n)}D0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:nr(8,i,i.return),ac(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ac(i));break;default:ac(i)}n=n.sibling}}function L0(n,i){for(;bn!==null;){var s=bn;switch(s.tag){case 0:case 11:case 15:nr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:al(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,bn=u;else t:for(s=n;bn!==null;){u=bn;var d=u.sibling,_=u.return;if(E0(u),u===s){bn=null;break t}if(d!==null){d.return=_,bn=d;break t}bn=_}}}var nE={getCacheForType:function(n){var i=Bn(xn),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s}},iE=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ve=null,Ee=0,Ue=0,pi=null,rr=!1,Ws=!1,Kh=!1,wa=0,rn=0,sr=0,jr=0,Qh=0,Li=0,qs=0,El=null,ei=null,Jh=!1,$h=0,rc=1/0,sc=null,or=null,Ln=0,lr=null,Ys=null,js=0,td=0,ed=null,O0=null,Tl=0,nd=null;function mi(){if((De&2)!==0&&Ee!==0)return Ee&-Ee;if(B.T!==null){var n=Ps;return n!==0?n:ud()}return be()}function N0(){Li===0&&(Li=(Ee&536870912)===0||we?q():536870912);var n=Ui.current;return n!==null&&(n.flags|=32),Li}function _i(n,i,s){(n===ke&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)&&(Zs(n,0),ur(n,Ee,Li,!1)),Bt(n,s),((De&2)===0||n!==ke)&&(n===ke&&((De&2)===0&&(jr|=s),rn===4&&ur(n,Ee,Li,!1)),ra(n))}function P0(n,i,s){if((De&6)!==0)throw Error(a(327));var u=!s&&(i&124)===0&&(i&n.expiredLanes)===0||Ut(n,i),d=u?sE(n,i):rd(n,i,!0),_=u;do{if(d===0){Ws&&!u&&ur(n,i,0,!1);break}else{if(s=n.current.alternate,_&&!aE(s)){d=rd(n,i,!1),_=!1;continue}if(d===2){if(_=i,n.errorRecoveryDisabledLanes&_)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var w=n;d=El;var H=w.current.memoizedState.isDehydrated;if(H&&(Zs(w,T).flags|=256),T=rd(w,T,!1),T!==2){if(Kh&&!H){w.errorRecoveryDisabledLanes|=_,jr|=_,d=4;break t}_=ei,ei=d,_!==null&&(ei===null?ei=_:ei.push.apply(ei,_))}d=T}if(_=!1,d!==2)continue}}if(d===1){Zs(n,0),ur(n,i,0,!0);break}t:{switch(u=n,_=d,_){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ur(u,i,Li,!rr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=$h+300-zt(),10<d)){if(ur(u,i,Li,!rr),kt(u,0,!0)!==0)break t;u.timeoutHandle=cv(z0.bind(null,u,s,ei,sc,Jh,i,Li,jr,qs,rr,_,2,-0,0),d);break t}z0(u,s,ei,sc,Jh,i,Li,jr,qs,rr,_,0,-0,0)}}break}while(!0);ra(n)}function z0(n,i,s,u,d,_,T,w,H,tt,mt,yt,at,st){if(n.timeoutHandle=-1,yt=i.subtreeFlags,(yt&8192||(yt&16785408)===16785408)&&(Ul={stylesheets:null,count:0,unsuspend:FE},C0(i),yt=GE(),yt!==null)){n.cancelPendingCommit=yt(k0.bind(null,n,i,_,s,u,d,T,w,H,mt,1,at,st)),ur(n,_,T,!tt);return}k0(n,i,_,s,u,d,T,w,H)}function aE(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var d=s[u],_=d.getSnapshot;d=d.value;try{if(!ci(_(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(n,i,s,u){i&=~Qh,i&=~jr,n.suspendedLanes|=i,n.pingedLanes&=~i,u&&(n.warmLanes|=i),u=n.expirationTimes;for(var d=i;0<d;){var _=31-It(d),T=1<<_;u[_]=-1,d&=~T}s!==0&&St(n,s,i)}function oc(){return(De&6)===0?(bl(0),!1):!0}function id(){if(ve!==null){if(Ue===0)var n=ve.return;else n=ve,ya=Vr=null,yh(n),Gs=null,ml=0,n=ve;for(;n!==null;)m0(n.alternate,n),n=n.return;ve=null}}function Zs(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,ME(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),id(),ke=n,ve=s=ga(n.current,null),Ee=i,Ue=0,pi=null,rr=!1,Ws=Ut(n,i),Kh=!1,qs=Li=Qh=jr=sr=rn=0,ei=El=null,Jh=!1,(i&8)!==0&&(i|=i&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=i;0<u;){var d=31-It(u),_=1<<d;i|=n[d],u&=~_}return wa=i,Cu(),s}function I0(n,i){me=null,B.H=ju,i===sl||i===Bu?(i=tg(),Ue=3):i===Q_?(i=tg(),Ue=4):Ue=i===e0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pi=i,ve===null&&(rn=1,$u(n,Ri(i,n.current)))}function B0(){var n=B.H;return B.H=ju,n===null?ju:n}function F0(){var n=B.A;return B.A=nE,n}function ad(){rn=4,rr||(Ee&4194048)!==Ee&&Ui.current!==null||(Ws=!0),(sr&134217727)===0&&(jr&134217727)===0||ke===null||ur(ke,Ee,Li,!1)}function rd(n,i,s){var u=De;De|=2;var d=B0(),_=F0();(ke!==n||Ee!==i)&&(sc=null,Zs(n,i)),i=!1;var T=rn;t:do try{if(Ue!==0&&ve!==null){var w=ve,H=pi;switch(Ue){case 8:id(),T=6;break t;case 3:case 2:case 9:case 6:Ui.current===null&&(i=!0);var tt=Ue;if(Ue=0,pi=null,Ks(n,w,H,tt),s&&Ws){T=0;break t}break;default:tt=Ue,Ue=0,pi=null,Ks(n,w,H,tt)}}rE(),T=rn;break}catch(mt){I0(n,mt)}while(!0);return i&&n.shellSuspendCounter++,ya=Vr=null,De=u,B.H=d,B.A=_,ve===null&&(ke=null,Ee=0,Cu()),T}function rE(){for(;ve!==null;)H0(ve)}function sE(n,i){var s=De;De|=2;var u=B0(),d=F0();ke!==n||Ee!==i?(sc=null,rc=zt()+500,Zs(n,i)):Ws=Ut(n,i);t:do try{if(Ue!==0&&ve!==null){i=ve;var _=pi;e:switch(Ue){case 1:Ue=0,pi=null,Ks(n,i,_,1);break;case 2:case 9:if(J_(_)){Ue=0,pi=null,G0(i);break}i=function(){Ue!==2&&Ue!==9||ke!==n||(Ue=7),ra(n)},_.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:J_(_)?(Ue=0,pi=null,G0(i)):(Ue=0,pi=null,Ks(n,i,_,7));break;case 5:var T=null;switch(ve.tag){case 26:T=ve.memoizedState;case 5:case 27:var w=ve;if(!T||Mv(T)){Ue=0,pi=null;var H=w.sibling;if(H!==null)ve=H;else{var tt=w.return;tt!==null?(ve=tt,lc(tt)):ve=null}break e}}Ue=0,pi=null,Ks(n,i,_,5);break;case 6:Ue=0,pi=null,Ks(n,i,_,6);break;case 8:id(),rn=6;break t;default:throw Error(a(462))}}oE();break}catch(mt){I0(n,mt)}while(!0);return ya=Vr=null,B.H=u,B.A=d,De=s,ve!==null?0:(ke=null,Ee=0,Cu(),rn)}function oE(){for(;ve!==null&&!re();)H0(ve)}function H0(n){var i=d0(n.alternate,n,wa);n.memoizedProps=n.pendingProps,i===null?lc(n):ve=i}function G0(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=o0(s,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=o0(s,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:yh(i);default:m0(s,i),i=ve=V_(i,wa),i=d0(s,i,wa)}n.memoizedProps=n.pendingProps,i===null?lc(n):ve=i}function Ks(n,i,s,u){ya=Vr=null,yh(i),Gs=null,ml=0;var d=i.return;try{if(KM(n,d,i,s,Ee)){rn=1,$u(n,Ri(s,n.current)),ve=null;return}}catch(_){if(d!==null)throw ve=d,_;rn=1,$u(n,Ri(s,n.current)),ve=null;return}i.flags&32768?(we||u===1?n=!0:Ws||(Ee&536870912)!==0?n=!1:(rr=n=!0,(u===2||u===9||u===3||u===6)&&(u=Ui.current,u!==null&&u.tag===13&&(u.flags|=16384))),V0(i,n)):lc(i)}function lc(n){var i=n;do{if((i.flags&32768)!==0){V0(i,rr);return}n=i.return;var s=JM(i.alternate,i,wa);if(s!==null){ve=s;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=n}while(i!==null);rn===0&&(rn=5)}function V0(n,i){do{var s=$M(n.alternate,n);if(s!==null){s.flags&=32767,ve=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){ve=n;return}ve=n=s}while(n!==null);rn=6,ve=null}function k0(n,i,s,u,d,_,T,w,H){n.cancelPendingCommit=null;do uc();while(Ln!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(_=i.lanes|i.childLanes,_|=Zf,Et(n,s,_,T,w,H),n===ke&&(ve=ke=null,Ee=0),Ys=i,lr=n,js=s,td=_,ed=d,O0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,fE(Ze,function(){return j0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,d=Y.p,Y.p=2,T=De,De|=4;try{tE(n,i,s)}finally{De=T,Y.p=d,B.T=u}}Ln=1,X0(),W0(),q0()}}function X0(){if(Ln===1){Ln=0;var n=lr,i=Ys,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var u=Y.p;Y.p=2;var d=De;De|=4;try{A0(i,n);var _=gd,T=L_(n.containerInfo),w=_.focusedElem,H=_.selectionRange;if(T!==w&&w&&w.ownerDocument&&U_(w.ownerDocument.documentElement,w)){if(H!==null&&Xf(w)){var tt=H.start,mt=H.end;if(mt===void 0&&(mt=tt),"selectionStart"in w)w.selectionStart=tt,w.selectionEnd=Math.min(mt,w.value.length);else{var yt=w.ownerDocument||document,at=yt&&yt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ie=w.textContent.length,$t=Math.min(H.start,ie),ze=H.end===void 0?$t:Math.min(H.end,ie);!st.extend&&$t>ze&&(T=ze,ze=$t,$t=T);var K=D_(w,$t),W=D_(w,ze);if(K&&W&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==W.node||st.focusOffset!==W.offset)){var $=yt.createRange();$.setStart(K.node,K.offset),st.removeAllRanges(),$t>ze?(st.addRange($),st.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),st.addRange($))}}}}for(yt=[],st=w;st=st.parentNode;)st.nodeType===1&&yt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<yt.length;w++){var _t=yt[w];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Sc=!!_d,gd=_d=null}finally{De=d,Y.p=u,B.T=s}}n.current=i,Ln=2}}function W0(){if(Ln===2){Ln=0;var n=lr,i=Ys,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var u=Y.p;Y.p=2;var d=De;De|=4;try{M0(n,i.alternate,i)}finally{De=d,Y.p=u,B.T=s}}Ln=3}}function q0(){if(Ln===4||Ln===3){Ln=0,ne();var n=lr,i=Ys,s=js,u=O0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,Ys=lr=null,Y0(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(or=null),Ce(s),i=i.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(pt,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=B.T,d=Y.p,Y.p=2,B.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var w=u[T];_(w.value,{componentStack:w.stack})}}finally{B.T=i,Y.p=d}}(js&3)!==0&&uc(),ra(n),d=n.pendingLanes,(s&4194090)!==0&&(d&42)!==0?n===nd?Tl++:(Tl=0,nd=n):Tl=0,bl(0)}}function Y0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,al(i)))}function uc(n){return X0(),W0(),q0(),j0()}function j0(){if(Ln!==5)return!1;var n=lr,i=td;td=0;var s=Ce(js),u=B.T,d=Y.p;try{Y.p=32>s?32:s,B.T=null,s=ed,ed=null;var _=lr,T=js;if(Ln=0,Ys=lr=null,js=0,(De&6)!==0)throw Error(a(331));var w=De;if(De|=4,U0(_.current),w0(_,_.current,T,s),De=w,bl(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(pt,_)}catch{}return!0}finally{Y.p=d,B.T=u,Y0(n,i)}}function Z0(n,i,s){i=Ri(s,i),i=Nh(n.stateNode,i,2),n=Ja(n,i,2),n!==null&&(Bt(n,2),ra(n))}function Fe(n,i,s){if(n.tag===3)Z0(n,n,s);else for(;i!==null;){if(i.tag===3){Z0(i,n,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=Ri(s,n),s=$g(2),u=Ja(i,s,2),u!==null&&(t0(s,u,i,n),Bt(u,2),ra(u));break}}i=i.return}}function sd(n,i,s){var u=n.pingCache;if(u===null){u=n.pingCache=new iE;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(Kh=!0,d.add(s),n=lE.bind(null,n,i,s),i.then(n,n))}function lE(n,i,s){var u=n.pingCache;u!==null&&u.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,ke===n&&(Ee&s)===s&&(rn===4||rn===3&&(Ee&62914560)===Ee&&300>zt()-$h?(De&2)===0&&Zs(n,0):Qh|=s,qs===Ee&&(qs=0)),ra(n)}function K0(n,i){i===0&&(i=bt()),n=Us(n,i),n!==null&&(Bt(n,i),ra(n))}function uE(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),K0(n,s)}function cE(n,i){var s=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),K0(n,s)}function fE(n,i){return V(n,i)}var cc=null,Qs=null,od=!1,fc=!1,ld=!1,Zr=0;function ra(n){n!==Qs&&n.next===null&&(Qs===null?cc=Qs=n:Qs=Qs.next=n),fc=!0,od||(od=!0,dE())}function bl(n,i){if(!ld&&fc){ld=!0;do for(var s=!1,u=cc;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var _=0;else{var T=u.suspendedLanes,w=u.pingedLanes;_=(1<<31-It(42|n)+1)-1,_&=d&~(T&~w),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(s=!0,tv(u,_))}else _=Ee,_=kt(u,u===ke?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||Ut(u,_)||(s=!0,tv(u,_));u=u.next}while(s);ld=!1}}function hE(){Q0()}function Q0(){fc=od=!1;var n=0;Zr!==0&&(SE()&&(n=Zr),Zr=0);for(var i=zt(),s=null,u=cc;u!==null;){var d=u.next,_=J0(u,i);_===0?(u.next=null,s===null?cc=d:s.next=d,d===null&&(Qs=s)):(s=u,(n!==0||(_&3)!==0)&&(fc=!0)),u=d}bl(n)}function J0(n,i){for(var s=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var T=31-It(_),w=1<<T,H=d[T];H===-1?((w&s)===0||(w&u)!==0)&&(d[T]=oe(w,i)):H<=i&&(n.expiredLanes|=w),_&=~w}if(i=ke,s=Ee,s=kt(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,s===0||n===i&&(Ue===2||Ue===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Le(u),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Ut(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(u!==null&&Le(u),Ce(s)){case 2:case 8:s=se;break;case 32:s=Ze;break;case 268435456:s=I;break;default:s=Ze}return u=$0.bind(null,n),s=V(s,u),n.callbackPriority=i,n.callbackNode=s,i}return u!==null&&u!==null&&Le(u),n.callbackPriority=2,n.callbackNode=null,2}function $0(n,i){if(Ln!==0&&Ln!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(uc()&&n.callbackNode!==s)return null;var u=Ee;return u=kt(n,n===ke?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(P0(n,u,i),J0(n,zt()),n.callbackNode!=null&&n.callbackNode===s?$0.bind(null,n):null)}function tv(n,i){if(uc())return null;P0(n,i,!0)}function dE(){EE(function(){(De&6)!==0?V(Vt,hE):Q0()})}function ud(){return Zr===0&&(Zr=q()),Zr}function ev(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Mu(""+n)}function nv(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function pE(n,i,s,u,d){if(i==="submit"&&s&&s.stateNode===d){var _=ev((d[en]||null).action),T=u.submitter;T&&(i=(i=T[en]||null)?ev(i.formAction):T.getAttribute("formAction"),i!==null&&(_=i,T=null));var w=new Au("action","action",null,u,d);n.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Zr!==0){var H=T?nv(d,T):new FormData(d);Ch(s,{pending:!0,data:H,method:d.method,action:_},null,H)}}else typeof _=="function"&&(w.preventDefault(),H=T?nv(d,T):new FormData(d),Ch(s,{pending:!0,data:H,method:d.method,action:_},_,H))},currentTarget:d}]})}}for(var cd=0;cd<jf.length;cd++){var fd=jf[cd],mE=fd.toLowerCase(),_E=fd[0].toUpperCase()+fd.slice(1);ki(mE,"on"+_E)}ki(P_,"onAnimationEnd"),ki(z_,"onAnimationIteration"),ki(I_,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(OM,"onTransitionRun"),ki(NM,"onTransitionStart"),ki(PM,"onTransitionCancel"),ki(B_,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function iv(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var u=n[s],d=u.event;u=u.listeners;t:{var _=void 0;if(i)for(var T=u.length-1;0<=T;T--){var w=u[T],H=w.instance,tt=w.currentTarget;if(w=w.listener,H!==_&&d.isPropagationStopped())break t;_=w,d.currentTarget=tt;try{_(d)}catch(mt){Ju(mt)}d.currentTarget=null,_=H}else for(T=0;T<u.length;T++){if(w=u[T],H=w.instance,tt=w.currentTarget,w=w.listener,H!==_&&d.isPropagationStopped())break t;_=w,d.currentTarget=tt;try{_(d)}catch(mt){Ju(mt)}d.currentTarget=null,_=H}}}}function xe(n,i){var s=i[Ss];s===void 0&&(s=i[Ss]=new Set);var u=n+"__bubble";s.has(u)||(av(i,n,2,!1),s.add(u))}function hd(n,i,s){var u=0;i&&(u|=4),av(s,n,u,i)}var hc="_reactListening"+Math.random().toString(36).slice(2);function dd(n){if(!n[hc]){n[hc]=!0,yu.forEach(function(s){s!=="selectionchange"&&(gE.has(s)||hd(s,!1,n),hd(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[hc]||(i[hc]=!0,hd("selectionchange",!1,i))}}function av(n,i,s,u){switch(wv(i)){case 2:var d=XE;break;case 8:d=WE;break;default:d=Rd}s=d.bind(null,i,s,n),d=void 0,!Pf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,s,{capture:!0,passive:d}):n.addEventListener(i,s,!0):d!==void 0?n.addEventListener(i,s,{passive:d}):n.addEventListener(i,s,!1)}function pd(n,i,s,u,d){var _=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var w=u.stateNode.containerInfo;if(w===d)break;if(T===4)for(T=u.return;T!==null;){var H=T.tag;if((H===3||H===4)&&T.stateNode.containerInfo===d)return;T=T.return}for(;w!==null;){if(T=ma(w),T===null)return;if(H=T.tag,H===5||H===6||H===26||H===27){u=_=T;continue t}w=w.parentNode}}u=u.return}f_(function(){var tt=_,mt=Of(s),yt=[];t:{var at=F_.get(n);if(at!==void 0){var st=Au,ie=n;switch(n){case"keypress":if(Tu(s)===0)break t;case"keydown":case"keyup":st=fM;break;case"focusin":ie="focus",st=Ff;break;case"focusout":ie="blur",st=Ff;break;case"beforeblur":case"afterblur":st=Ff;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=p_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=$S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=pM;break;case P_:case z_:case I_:st=nM;break;case B_:st=_M;break;case"scroll":case"scrollend":st=QS;break;case"wheel":st=vM;break;case"copy":case"cut":case"paste":st=aM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=__;break;case"toggle":case"beforetoggle":st=yM}var $t=(i&4)!==0,ze=!$t&&(n==="scroll"||n==="scrollend"),K=$t?at!==null?at+"Capture":null:at;$t=[];for(var W=tt,$;W!==null;){var _t=W;if($=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||$===null||K===null||(_t=Wo(W,K),_t!=null&&$t.push(Rl(W,_t,$))),ze)break;W=W.return}0<$t.length&&(at=new st(at,ie,null,s,mt),yt.push({event:at,listeners:$t}))}}if((i&7)===0){t:{if(at=n==="mouseover"||n==="pointerover",st=n==="mouseout"||n==="pointerout",at&&s!==Lf&&(ie=s.relatedTarget||s.fromElement)&&(ma(ie)||ie[$i]))break t;if((st||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ie=s.relatedTarget||s.toElement,st=tt,ie=ie?ma(ie):null,ie!==null&&(ze=l(ie),$t=ie.tag,ie!==ze||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(st=null,ie=tt),st!==ie)){if($t=p_,_t="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&($t=__,_t="onPointerLeave",K="onPointerEnter",W="pointer"),ze=st==null?at:Or(st),$=ie==null?at:Or(ie),at=new $t(_t,W+"leave",st,s,mt),at.target=ze,at.relatedTarget=$,_t=null,ma(mt)===tt&&($t=new $t(K,W+"enter",ie,s,mt),$t.target=$,$t.relatedTarget=ze,_t=$t),ze=_t,st&&ie)e:{for($t=st,K=ie,W=0,$=$t;$;$=Js($))W++;for($=0,_t=K;_t;_t=Js(_t))$++;for(;0<W-$;)$t=Js($t),W--;for(;0<$-W;)K=Js(K),$--;for(;W--;){if($t===K||K!==null&&$t===K.alternate)break e;$t=Js($t),K=Js(K)}$t=null}else $t=null;st!==null&&rv(yt,at,st,$t,!1),ie!==null&&ze!==null&&rv(yt,ze,ie,$t,!0)}}t:{if(at=tt?Or(tt):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=T_;else if(M_(at))if(b_)Ht=DM;else{Ht=wM;var _e=RM}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&Uf(tt.elementType)&&(Ht=T_):Ht=CM;if(Ht&&(Ht=Ht(n,tt))){E_(yt,Ht,s,mt);break t}_e&&_e(n,at,tt),n==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&In(at,"number",at.value)}switch(_e=tt?Or(tt):window,n){case"focusin":(M_(_e)||_e.contentEditable==="true")&&(ws=_e,Wf=tt,$o=null);break;case"focusout":$o=Wf=ws=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,O_(yt,s,mt);break;case"selectionchange":if(LM)break;case"keydown":case"keyup":O_(yt,s,mt)}var jt;if(Gf)t:{switch(n){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Rs?y_(n,s)&&(ee="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ee="onCompositionStart");ee&&(g_&&s.locale!=="ko"&&(Rs||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Rs&&(jt=h_()):(ja=mt,zf="value"in ja?ja.value:ja.textContent,Rs=!0)),_e=dc(tt,ee),0<_e.length&&(ee=new m_(ee,n,null,s,mt),yt.push({event:ee,listeners:_e}),jt?ee.data=jt:(jt=S_(s),jt!==null&&(ee.data=jt)))),(jt=MM?EM(n,s):TM(n,s))&&(ee=dc(tt,"onBeforeInput"),0<ee.length&&(_e=new m_("onBeforeInput","beforeinput",null,s,mt),yt.push({event:_e,listeners:ee}),_e.data=jt)),pE(yt,n,tt,s,mt)}iv(yt,i)})}function Rl(n,i,s){return{instance:n,listener:i,currentTarget:s}}function dc(n,i){for(var s=i+"Capture",u=[];n!==null;){var d=n,_=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||_===null||(d=Wo(n,s),d!=null&&u.unshift(Rl(n,d,_)),d=Wo(n,i),d!=null&&u.push(Rl(n,d,_))),n.tag===3)return u;n=n.return}return[]}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function rv(n,i,s,u,d){for(var _=i._reactName,T=[];s!==null&&s!==u;){var w=s,H=w.alternate,tt=w.stateNode;if(w=w.tag,H!==null&&H===u)break;w!==5&&w!==26&&w!==27||tt===null||(H=tt,d?(tt=Wo(s,_),tt!=null&&T.unshift(Rl(s,tt,H))):d||(tt=Wo(s,_),tt!=null&&T.push(Rl(s,tt,H)))),s=s.return}T.length!==0&&n.push({event:i,listeners:T})}var vE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function sv(n){return(typeof n=="string"?n:""+n).replace(vE,`
`).replace(xE,"")}function ov(n,i){return i=sv(i),sv(n)===i}function pc(){}function Pe(n,i,s,u,d,_){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Qn(n,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Qn(n,""+u);break;case"className":Ft(n,"class",u);break;case"tabIndex":Ft(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(n,s,u);break;case"style":u_(n,u,_);break;case"data":if(i!=="object"){Ft(n,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Mu(""+u),n.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(s==="formAction"?(i!=="input"&&Pe(n,i,"name",d.name,d,null),Pe(n,i,"formEncType",d.formEncType,d,null),Pe(n,i,"formMethod",d.formMethod,d,null),Pe(n,i,"formTarget",d.formTarget,d,null)):(Pe(n,i,"encType",d.encType,d,null),Pe(n,i,"method",d.method,d,null),Pe(n,i,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(s);break}u=Mu(""+u),n.setAttribute(s,u);break;case"onClick":u!=null&&(n.onclick=pc);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(d.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}s=Mu(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""+u):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":u===!0?n.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(s,u):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(s,u):n.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(s):n.setAttribute(s,u);break;case"popover":xe("beforetoggle",n),xe("toggle",n),Lt(n,"popover",u);break;case"xlinkActuate":Nt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Nt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Nt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Nt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Nt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Nt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Lt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ZS.get(s)||s,Lt(n,s,u))}}function md(n,i,s,u,d,_){switch(s){case"style":u_(n,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(d.children!=null)throw Error(a(60));n.innerHTML=s}}break;case"children":typeof u=="string"?Qn(n,u):(typeof u=="number"||typeof u=="bigint")&&Qn(n,""+u);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Su.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),_=n[en]||null,_=_!=null?_[s]:null,typeof _=="function"&&n.removeEventListener(i,_,d),typeof u=="function")){typeof _!="function"&&_!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,u,d);break t}s in n?n[s]=u:u===!0?n.setAttribute(s,""):Lt(n,s,u)}}}function On(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var u=!1,d=!1,_;for(_ in s)if(s.hasOwnProperty(_)){var T=s[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(n,i,_,T,s,null)}}d&&Pe(n,i,"srcSet",s.srcSet,s,null),u&&Pe(n,i,"src",s.src,s,null);return;case"input":xe("invalid",n);var w=_=T=d=null,H=null,tt=null;for(u in s)if(s.hasOwnProperty(u)){var mt=s[u];if(mt!=null)switch(u){case"name":d=mt;break;case"type":T=mt;break;case"checked":H=mt;break;case"defaultChecked":tt=mt;break;case"value":_=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Pe(n,i,u,mt,s,null)}}Wn(n,_,w,H,tt,T,d,!1),ge(n);return;case"select":xe("invalid",n),u=T=_=null;for(d in s)if(s.hasOwnProperty(d)&&(w=s[d],w!=null))switch(d){case"value":_=w;break;case"defaultValue":T=w;break;case"multiple":u=w;default:Pe(n,i,d,w,s,null)}i=_,s=T,n.multiple=!!u,i!=null?nn(n,!!u,i,!1):s!=null&&nn(n,!!u,s,!0);return;case"textarea":xe("invalid",n),_=d=u=null;for(T in s)if(s.hasOwnProperty(T)&&(w=s[T],w!=null))switch(T){case"value":u=w;break;case"defaultValue":d=w;break;case"children":_=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Pe(n,i,T,w,s,null)}Ts(n,u,d,_),ge(n);return;case"option":for(H in s)if(s.hasOwnProperty(H)&&(u=s[H],u!=null))switch(H){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Pe(n,i,H,u,s,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(u=0;u<Al.length;u++)xe(Al[u],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(u=s[tt],u!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(n,i,tt,u,s,null)}return;default:if(Uf(i)){for(mt in s)s.hasOwnProperty(mt)&&(u=s[mt],u!==void 0&&md(n,i,mt,u,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(u=s[w],u!=null&&Pe(n,i,w,u,s,null))}function yE(n,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,_=null,T=null,w=null,H=null,tt=null,mt=null;for(st in s){var yt=s[st];if(s.hasOwnProperty(st)&&yt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":H=yt;default:u.hasOwnProperty(st)||Pe(n,i,st,null,u,yt)}}for(var at in u){var st=u[at];if(yt=s[at],u.hasOwnProperty(at)&&(st!=null||yt!=null))switch(at){case"type":_=st;break;case"name":d=st;break;case"checked":tt=st;break;case"defaultChecked":mt=st;break;case"value":T=st;break;case"defaultValue":w=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==yt&&Pe(n,i,at,st,u,yt)}}Be(n,T,w,H,tt,mt,_,d);return;case"select":st=T=w=at=null;for(_ in s)if(H=s[_],s.hasOwnProperty(_)&&H!=null)switch(_){case"value":break;case"multiple":st=H;default:u.hasOwnProperty(_)||Pe(n,i,_,null,u,H)}for(d in u)if(_=u[d],H=s[d],u.hasOwnProperty(d)&&(_!=null||H!=null))switch(d){case"value":at=_;break;case"defaultValue":w=_;break;case"multiple":T=_;default:_!==H&&Pe(n,i,d,_,u,H)}i=w,s=T,u=st,at!=null?nn(n,!!s,at,!1):!!u!=!!s&&(i!=null?nn(n,!!s,i,!0):nn(n,!!s,s?[]:"",!1));return;case"textarea":st=at=null;for(w in s)if(d=s[w],s.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Pe(n,i,w,null,u,d)}for(T in u)if(d=u[T],_=s[T],u.hasOwnProperty(T)&&(d!=null||_!=null))switch(T){case"value":at=d;break;case"defaultValue":st=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==_&&Pe(n,i,T,d,u,_)}Dn(n,at,st);return;case"option":for(var ie in s)if(at=s[ie],s.hasOwnProperty(ie)&&at!=null&&!u.hasOwnProperty(ie))switch(ie){case"selected":n.selected=!1;break;default:Pe(n,i,ie,null,u,at)}for(H in u)if(at=u[H],st=s[H],u.hasOwnProperty(H)&&at!==st&&(at!=null||st!=null))switch(H){case"selected":n.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(n,i,H,at,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in s)at=s[$t],s.hasOwnProperty($t)&&at!=null&&!u.hasOwnProperty($t)&&Pe(n,i,$t,null,u,at);for(tt in u)if(at=u[tt],st=s[tt],u.hasOwnProperty(tt)&&at!==st&&(at!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Pe(n,i,tt,at,u,st)}return;default:if(Uf(i)){for(var ze in s)at=s[ze],s.hasOwnProperty(ze)&&at!==void 0&&!u.hasOwnProperty(ze)&&md(n,i,ze,void 0,u,at);for(mt in u)at=u[mt],st=s[mt],!u.hasOwnProperty(mt)||at===st||at===void 0&&st===void 0||md(n,i,mt,at,u,st);return}}for(var K in s)at=s[K],s.hasOwnProperty(K)&&at!=null&&!u.hasOwnProperty(K)&&Pe(n,i,K,null,u,at);for(yt in u)at=u[yt],st=s[yt],!u.hasOwnProperty(yt)||at===st||at==null&&st==null||Pe(n,i,yt,at,u,st)}var _d=null,gd=null;function mc(n){return n.nodeType===9?n:n.ownerDocument}function lv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function uv(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function vd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=null;function SE(){var n=window.event;return n&&n.type==="popstate"?n===xd?!1:(xd=n,!0):(xd=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(n){return fv.resolve(null).then(n).catch(TE)}:cv;function TE(n){setTimeout(function(){throw n})}function cr(n){return n==="head"}function hv(n,i){var s=i,u=0,d=0;do{var _=s.nextSibling;if(n.removeChild(s),_&&_.nodeType===8)if(s=_.data,s==="/$"){if(0<u&&8>u){s=u;var T=n.ownerDocument;if(s&1&&wl(T.documentElement),s&2&&wl(T.body),s&4)for(s=T.head,wl(s),T=s.firstChild;T;){var w=T.nextSibling,H=T.nodeName;T[ta]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&T.rel.toLowerCase()==="stylesheet"||s.removeChild(T),T=w}}if(d===0){n.removeChild(_),zl(i);return}d--}else s==="$"||s==="$?"||s==="$!"?d++:u=s.charCodeAt(0)-48;else u=0;s=_}while(s);zl(i)}function yd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":yd(s),Es(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function bE(n,i,s,u){for(;n.nodeType===1;){var d=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[ta])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var _=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Wi(n.nextSibling),n===null)break}return null}function AE(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=Wi(n.nextSibling),n===null))return null;return n}function Sd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function RE(n,i){var s=n.ownerDocument;if(n.data!=="$?"||s.readyState==="complete")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Wi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Md=null;function dv(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return n;i--}else s==="/$"&&i++}n=n.previousSibling}return null}function pv(n,i,s){switch(i=mc(s),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function wl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Es(n)}var Oi=new Map,mv=new Set;function _c(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ca=Y.d;Y.d={f:wE,r:CE,D:DE,C:UE,L:LE,m:OE,X:PE,S:NE,M:zE};function wE(){var n=Ca.f(),i=oc();return n||i}function CE(n){var i=qa(n);i!==null&&i.tag===5&&i.type==="form"?Pg(i):Ca.r(n)}var $s=typeof document>"u"?null:document;function _v(n,i,s){var u=$s;if(u&&typeof i=="string"&&i){var d=En(i);d='link[rel="'+n+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),mv.has(d)||(mv.add(d),n={rel:n,crossOrigin:s,href:i},u.querySelector(d)===null&&(i=u.createElement("link"),On(i,"link",n),fn(i),u.head.appendChild(i)))}}function DE(n){Ca.D(n),_v("dns-prefetch",n,null)}function UE(n,i){Ca.C(n,i),_v("preconnect",n,i)}function LE(n,i,s){Ca.L(n,i,s);var u=$s;if(u&&n&&i){var d='link[rel="preload"][as="'+En(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+En(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+En(s.imageSizes)+'"]')):d+='[href="'+En(n)+'"]';var _=d;switch(i){case"style":_=to(n);break;case"script":_=eo(n)}Oi.has(_)||(n=m({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Oi.set(_,n),u.querySelector(d)!==null||i==="style"&&u.querySelector(Cl(_))||i==="script"&&u.querySelector(Dl(_))||(i=u.createElement("link"),On(i,"link",n),fn(i),u.head.appendChild(i)))}}function OE(n,i){Ca.m(n,i);var s=$s;if(s&&n){var u=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+En(u)+'"][href="'+En(n)+'"]',_=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=eo(n)}if(!Oi.has(_)&&(n=m({rel:"modulepreload",href:n},i),Oi.set(_,n),s.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Dl(_)))return}u=s.createElement("link"),On(u,"link",n),fn(u),s.head.appendChild(u)}}}function NE(n,i,s){Ca.S(n,i,s);var u=$s;if(u&&n){var d=Ya(u).hoistableStyles,_=to(n);i=i||"default";var T=d.get(_);if(!T){var w={loading:0,preload:null};if(T=u.querySelector(Cl(_)))w.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Oi.get(_))&&Ed(n,s);var H=T=u.createElement("link");fn(H),On(H,"link",n),H._p=new Promise(function(tt,mt){H.onload=tt,H.onerror=mt}),H.addEventListener("load",function(){w.loading|=1}),H.addEventListener("error",function(){w.loading|=2}),w.loading|=4,gc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:w},d.set(_,T)}}}function PE(n,i){Ca.X(n,i);var s=$s;if(s&&n){var u=Ya(s).hoistableScripts,d=eo(n),_=u.get(d);_||(_=s.querySelector(Dl(d)),_||(n=m({src:n,async:!0},i),(i=Oi.get(d))&&Td(n,i),_=s.createElement("script"),fn(_),On(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(d,_))}}function zE(n,i){Ca.M(n,i);var s=$s;if(s&&n){var u=Ya(s).hoistableScripts,d=eo(n),_=u.get(d);_||(_=s.querySelector(Dl(d)),_||(n=m({src:n,async:!0,type:"module"},i),(i=Oi.get(d))&&Td(n,i),_=s.createElement("script"),fn(_),On(_,"link",n),s.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(d,_))}}function gv(n,i,s,u){var d=(d=J.current)?_c(d):null;if(!d)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=to(s.href),s=Ya(d).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=to(s.href);var _=Ya(d).hoistableStyles,T=_.get(n);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,T),(_=d.querySelector(Cl(n)))&&!_._p&&(T.instance=_,T.state.loading=5),Oi.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Oi.set(n,s),_||IE(d,n,s,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=eo(s),s=Ya(d).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function to(n){return'href="'+En(n)+'"'}function Cl(n){return'link[rel="stylesheet"]['+n+"]"}function vv(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function IE(n,i,s,u){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=n.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),On(i,"link",s),fn(i),n.head.appendChild(i))}function eo(n){return'[src="'+En(n)+'"]'}function Dl(n){return"script[async]"+n}function xv(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=n.querySelector('style[data-href~="'+En(s.href)+'"]');if(u)return i.instance=u,fn(u),u;var d=m({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),fn(u),On(u,"style",d),gc(u,s.precedence,n),i.instance=u;case"stylesheet":d=to(s.href);var _=n.querySelector(Cl(d));if(_)return i.state.loading|=4,i.instance=_,fn(_),_;u=vv(s),(d=Oi.get(d))&&Ed(u,d),_=(n.ownerDocument||n).createElement("link"),fn(_);var T=_;return T._p=new Promise(function(w,H){T.onload=w,T.onerror=H}),On(_,"link",u),i.state.loading|=4,gc(_,s.precedence,n),i.instance=_;case"script":return _=eo(s.src),(d=n.querySelector(Dl(_)))?(i.instance=d,fn(d),d):(u=s,(d=Oi.get(_))&&(u=m({},s),Td(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),fn(d),On(d,"link",u),n.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,gc(u,s.precedence,n));return i.instance}function gc(n,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,_=d,T=0;T<u.length;T++){var w=u[T];if(w.dataset.precedence===i)_=w;else if(_!==d)break}_?_.parentNode.insertBefore(n,_.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function Ed(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Td(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var vc=null;function yv(n,i,s){if(vc===null){var u=new Map,d=vc=new Map;d.set(s,u)}else d=vc,u=d.get(s),u||(u=new Map,d.set(s,u));if(u.has(n))return u;for(u.set(n,null),s=s.getElementsByTagName(n),d=0;d<s.length;d++){var _=s[d];if(!(_[ta]||_[vn]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(i)||"";T=n+T;var w=u.get(T);w?w.push(_):u.set(T,[_])}}return u}function Sv(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function BE(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Mv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Ul=null;function FE(){}function HE(n,i,s){if(Ul===null)throw Error(a(475));var u=Ul;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var d=to(s.href),_=n.querySelector(Cl(d));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=xc.bind(u),n.then(u,u)),i.state.loading|=4,i.instance=_,fn(_);return}_=n.ownerDocument||n,s=vv(s),(d=Oi.get(d))&&Ed(s,d),_=_.createElement("link"),fn(_);var T=_;T._p=new Promise(function(w,H){T.onload=w,T.onerror=H}),On(_,"link",s),i.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=xc.bind(u),n.addEventListener("load",i),n.addEventListener("error",i))}}function GE(){if(Ul===null)throw Error(a(475));var n=Ul;return n.stylesheets&&n.count===0&&bd(n,n.stylesheets),0<n.count?function(i){var s=setTimeout(function(){if(n.stylesheets&&bd(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(s)}}:null}function xc(){if(this.count--,this.count===0){if(this.stylesheets)bd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var yc=null;function bd(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,yc=new Map,i.forEach(VE,n),yc=null,xc.call(n))}function VE(n,i){if(!(i.state.loading&4)){var s=yc.get(n);if(s)var u=s.get(null);else{s=new Map,yc.set(n,s);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<d.length;_++){var T=d[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(s.set(T.dataset.precedence,T),u=T)}u&&s.set(null,u)}d=i.instance,T=d.getAttribute("data-precedence"),_=s.get(T)||u,_===u&&s.set(null,d),s.set(T,d),this.count++,u=xc.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),_?_.parentNode.insertBefore(d,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),i.state.loading|=4}}var Ll={$$typeof:D,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function kE(n,i,s,u,d,_,T,w){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Ev(n,i,s,u,d,_,T,w,H,tt,mt,yt){return n=new kE(n,i,s,T,w,H,tt,yt),i=1,_===!0&&(i|=24),_=fi(3,null,null,i),n.current=_,_.stateNode=n,i=sh(),i.refCount++,n.pooledCache=i,i.refCount++,_.memoizedState={element:u,isDehydrated:s,cache:i},ch(_),n}function Tv(n){return n?(n=Ls,n):Ls}function bv(n,i,s,u,d,_){d=Tv(d),u.context===null?u.context=d:u.pendingContext=d,u=Qa(i),u.payload={element:s},_=_===void 0?null:_,_!==null&&(u.callback=_),s=Ja(n,u,i),s!==null&&(_i(s,n,i),ll(s,n,i))}function Av(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Ad(n,i){Av(n,i),(n=n.alternate)&&Av(n,i)}function Rv(n){if(n.tag===13){var i=Us(n,67108864);i!==null&&_i(i,n,67108864),Ad(n,67108864)}}var Sc=!0;function XE(n,i,s,u){var d=B.T;B.T=null;var _=Y.p;try{Y.p=2,Rd(n,i,s,u)}finally{Y.p=_,B.T=d}}function WE(n,i,s,u){var d=B.T;B.T=null;var _=Y.p;try{Y.p=8,Rd(n,i,s,u)}finally{Y.p=_,B.T=d}}function Rd(n,i,s,u){if(Sc){var d=wd(u);if(d===null)pd(n,i,u,Mc,s),Cv(n,u);else if(YE(d,n,i,s,u))u.stopPropagation();else if(Cv(n,u),i&4&&-1<qE.indexOf(n)){for(;d!==null;){var _=qa(d);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Zt(_.pendingLanes);if(T!==0){var w=_;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var H=1<<31-It(T);w.entanglements[1]|=H,T&=~H}ra(_),(De&6)===0&&(rc=zt()+500,bl(0))}}break;case 13:w=Us(_,2),w!==null&&_i(w,_,2),oc(),Ad(_,2)}if(_=wd(u),_===null&&pd(n,i,u,Mc,s),_===d)break;d=_}d!==null&&u.stopPropagation()}else pd(n,i,u,null,s)}}function wd(n){return n=Of(n),Cd(n)}var Mc=null;function Cd(n){if(Mc=null,n=ma(n),n!==null){var i=l(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=c(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Mc=n,null}function wv(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case Vt:return 2;case se:return 8;case Ze:case Ke:return 32;case I:return 268435456;default:return 32}default:return 32}}var Dd=!1,fr=null,hr=null,dr=null,Ol=new Map,Nl=new Map,pr=[],qE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cv(n,i){switch(n){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Ol.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(i.pointerId)}}function Pl(n,i,s,u,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:_,targetContainers:[d]},i!==null&&(i=qa(i),i!==null&&Rv(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function YE(n,i,s,u,d){switch(i){case"focusin":return fr=Pl(fr,n,i,s,u,d),!0;case"dragenter":return hr=Pl(hr,n,i,s,u,d),!0;case"mouseover":return dr=Pl(dr,n,i,s,u,d),!0;case"pointerover":var _=d.pointerId;return Ol.set(_,Pl(Ol.get(_)||null,n,i,s,u,d)),!0;case"gotpointercapture":return _=d.pointerId,Nl.set(_,Pl(Nl.get(_)||null,n,i,s,u,d)),!0}return!1}function Dv(n){var i=ma(n.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){n.blockedOn=i,Gi(n.priority,function(){if(s.tag===13){var u=mi();u=ae(u);var d=Us(s,u);d!==null&&_i(d,s,u),Ad(s,u)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ec(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=wd(n.nativeEvent);if(s===null){s=n.nativeEvent;var u=new s.constructor(s.type,s);Lf=u,s.target.dispatchEvent(u),Lf=null}else return i=qa(s),i!==null&&Rv(i),n.blockedOn=s,!1;i.shift()}return!0}function Uv(n,i,s){Ec(n)&&s.delete(i)}function jE(){Dd=!1,fr!==null&&Ec(fr)&&(fr=null),hr!==null&&Ec(hr)&&(hr=null),dr!==null&&Ec(dr)&&(dr=null),Ol.forEach(Uv),Nl.forEach(Uv)}function Tc(n,i){n.blockedOn===i&&(n.blockedOn=null,Dd||(Dd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jE)))}var bc=null;function Lv(n){bc!==n&&(bc=n,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){bc===n&&(bc=null);for(var i=0;i<n.length;i+=3){var s=n[i],u=n[i+1],d=n[i+2];if(typeof u!="function"){if(Cd(u||s)===null)continue;break}var _=qa(s);_!==null&&(n.splice(i,3),i-=3,Ch(_,{pending:!0,data:d,method:s.method,action:u},u,d))}}))}function zl(n){function i(H){return Tc(H,n)}fr!==null&&Tc(fr,n),hr!==null&&Tc(hr,n),dr!==null&&Tc(dr,n),Ol.forEach(i),Nl.forEach(i);for(var s=0;s<pr.length;s++){var u=pr[s];u.blockedOn===n&&(u.blockedOn=null)}for(;0<pr.length&&(s=pr[0],s.blockedOn===null);)Dv(s),s.blockedOn===null&&pr.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var d=s[u],_=s[u+1],T=d[en]||null;if(typeof _=="function")T||Lv(s);else if(T){var w=null;if(_&&_.hasAttribute("formAction")){if(d=_,T=_[en]||null)w=T.formAction;else if(Cd(d)!==null)continue}else w=T.action;typeof w=="function"?s[u+1]=w:(s.splice(u,3),u-=3),Lv(s)}}}function Ud(n){this._internalRoot=n}Ac.prototype.render=Ud.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=mi();bv(s,u,n,i,null,null)},Ac.prototype.unmount=Ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;bv(n.current,2,null,n,null,null),oc(),i[$i]=null}};function Ac(n){this._internalRoot=n}Ac.prototype.unstable_scheduleHydration=function(n){if(n){var i=be();n={blockedOn:null,target:n,priority:i};for(var s=0;s<pr.length&&i!==0&&i<pr[s].priority;s++);pr.splice(s,0,n),s===0&&Dv(n)}};var Ov=t.version;if(Ov!=="19.1.1")throw Error(a(527,Ov,"19.1.1"));Y.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=p(i),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var ZE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{pt=Rc.inject(ZE),xt=Rc}catch{}}return Bl.createRoot=function(n,i){if(!r(n))throw Error(a(299));var s=!1,u="",d=Zg,_=Kg,T=Qg,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(_=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=Ev(n,1,!1,null,null,s,u,d,_,T,w,null),n[$i]=i.current,dd(n),new Ud(i)},Bl.hydrateRoot=function(n,i,s){if(!r(n))throw Error(a(299));var u=!1,d="",_=Zg,T=Kg,w=Qg,H=null,tt=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(_=s.onUncaughtError),s.onCaughtError!==void 0&&(T=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(H=s.unstable_transitionCallbacks),s.formState!==void 0&&(tt=s.formState)),i=Ev(n,1,!0,i,s??null,u,d,_,T,w,H,tt),i.context=Tv(null),s=i.current,u=mi(),u=ae(u),d=Qa(u),d.callback=null,Ja(s,d,u),s=u,i.current.lanes=s,Bt(i,s),ra(i),n[$i]=i.current,dd(n),new Ac(i)},Bl.version="19.1.1",Bl}var kv;function rT(){if(kv)return Nd.exports;kv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nd.exports=aT(),Nd.exports}var sT=rT();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Um="180",oT=0,Xv=1,lT=2,my=1,uT=2,za=3,Va=0,ai=1,Fa=2,Ar=0,To=1,hf=2,Wv=3,qv=4,cT=5,os=100,fT=101,hT=102,dT=103,pT=104,mT=200,_T=201,gT=202,vT=203,Ap=204,Rp=205,xT=206,yT=207,ST=208,MT=209,ET=210,TT=211,bT=212,AT=213,RT=214,wp=0,Cp=1,Dp=2,Co=3,Up=4,Lp=5,Op=6,Np=7,Lm=0,wT=1,CT=2,Rr=0,DT=1,UT=2,LT=3,OT=4,NT=5,PT=6,zT=7,_y=300,Do=301,Uo=302,Pp=303,zp=304,bf=306,df=1e3,us=1001,Ip=1002,Qi=1003,IT=1004,wc=1005,ua=1006,Bd=1007,cs=1008,ha=1009,gy=1010,vy=1011,eu=1012,Om=1013,_s=1014,Ha=1015,pu=1016,Nm=1017,Pm=1018,nu=1020,xy=35902,yy=35899,Sy=1021,My=1022,Ki=1023,iu=1026,au=1027,Ey=1028,zm=1029,Ty=1030,Im=1031,Bm=1033,ef=33776,nf=33777,af=33778,rf=33779,Bp=35840,Fp=35841,Hp=35842,Gp=35843,Vp=36196,kp=37492,Xp=37496,Wp=37808,qp=37809,Yp=37810,jp=37811,Zp=37812,Kp=37813,Qp=37814,Jp=37815,$p=37816,tm=37817,em=37818,nm=37819,im=37820,am=37821,rm=36492,sm=36494,om=36495,lm=36283,um=36284,cm=36285,fm=36286,BT=3200,FT=3201,Fm=0,HT=1,Mr="",Nn="srgb",Lo="srgb-linear",pf="linear",Ie="srgb",no=7680,Yv=519,GT=512,VT=513,kT=514,by=515,XT=516,WT=517,qT=518,YT=519,jv=35044,Zv="300 es",ca=2e3,mf=2001;class Ho{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(e)===-1&&a[t].push(e)}hasEventListener(t,e){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(e)!==-1}removeEventListener(t,e){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(e);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const a=e[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=Math.PI/180,hm=180/Math.PI;function mu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[e&63|128]+Hn[e>>8&255]+"-"+Hn[e>>16&255]+Hn[e>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Se(o,t,e){return Math.max(t,Math.min(e,o))}function jT(o,t){return(o%t+t)%t}function Hd(o,t,e){return(1-e)*o+e*t}function Fl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ni(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(t=0,e=0){Te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,a=this.y,r=t.elements;return this.x=r[0]*e+r[3]*a+r[6],this.y=r[1]*e+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y;return e*e+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const a=Math.cos(e),r=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _u{constructor(t=0,e=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=a,this._w=r}static slerpFlat(t,e,a,r,l,c,f){let p=a[r+0],h=a[r+1],m=a[r+2],g=a[r+3];const v=l[c+0],x=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[e+0]=p,t[e+1]=h,t[e+2]=m,t[e+3]=g;return}if(f===1){t[e+0]=v,t[e+1]=x,t[e+2]=E,t[e+3]=M;return}if(g!==M||p!==v||h!==x||m!==E){let S=1-f;const y=p*v+h*x+m*E+g*M,U=y>=0?1:-1,D=1-y*y;if(D>Number.EPSILON){const L=Math.sqrt(D),P=Math.atan2(L,y*U);S=Math.sin(S*P)/L,f=Math.sin(f*P)/L}const A=f*U;if(p=p*S+v*A,h=h*S+x*A,m=m*S+E*A,g=g*S+M*A,S===1-f){const L=1/Math.sqrt(p*p+h*h+m*m+g*g);p*=L,h*=L,m*=L,g*=L}}t[e]=p,t[e+1]=h,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,a,r,l,c){const f=a[r],p=a[r+1],h=a[r+2],m=a[r+3],g=l[c],v=l[c+1],x=l[c+2],E=l[c+3];return t[e]=f*E+m*g+p*x-h*v,t[e+1]=p*E+m*v+h*g-f*x,t[e+2]=h*E+m*x+f*v-p*g,t[e+3]=m*E-f*g-p*v-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,a,r){return this._x=t,this._y=e,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,h=f(a/2),m=f(r/2),g=f(l/2),v=p(a/2),x=p(r/2),E=p(l/2);switch(c){case"XYZ":this._x=v*m*g+h*x*E,this._y=h*x*g-v*m*E,this._z=h*m*E+v*x*g,this._w=h*m*g-v*x*E;break;case"YXZ":this._x=v*m*g+h*x*E,this._y=h*x*g-v*m*E,this._z=h*m*E-v*x*g,this._w=h*m*g+v*x*E;break;case"ZXY":this._x=v*m*g-h*x*E,this._y=h*x*g+v*m*E,this._z=h*m*E+v*x*g,this._w=h*m*g-v*x*E;break;case"ZYX":this._x=v*m*g-h*x*E,this._y=h*x*g+v*m*E,this._z=h*m*E-v*x*g,this._w=h*m*g+v*x*E;break;case"YZX":this._x=v*m*g+h*x*E,this._y=h*x*g+v*m*E,this._z=h*m*E-v*x*g,this._w=h*m*g-v*x*E;break;case"XZY":this._x=v*m*g-h*x*E,this._y=h*x*g-v*m*E,this._z=h*m*E+v*x*g,this._w=h*m*g+v*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const a=e/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,a=e[0],r=e[4],l=e[8],c=e[1],f=e[5],p=e[9],h=e[2],m=e[6],g=e[10],v=a+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-p)*x,this._y=(l-h)*x,this._z=(c-r)*x}else if(a>f&&a>g){const x=2*Math.sqrt(1+a-f-g);this._w=(m-p)/x,this._x=.25*x,this._y=(r+c)/x,this._z=(l+h)/x}else if(f>g){const x=2*Math.sqrt(1+f-a-g);this._w=(l-h)/x,this._x=(r+c)/x,this._y=.25*x,this._z=(p+m)/x}else{const x=2*Math.sqrt(1+g-a-f);this._w=(c-r)/x,this._x=(l+h)/x,this._y=(p+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let a=t.dot(e)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,e/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const a=t._x,r=t._y,l=t._z,c=t._w,f=e._x,p=e._y,h=e._z,m=e._w;return this._x=a*m+c*f+r*h-l*p,this._y=r*m+c*p+l*f-a*h,this._z=l*m+c*h+a*p-r*f,this._w=c*m-a*f-r*p-l*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=r,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const x=1-e;return this._w=x*c+e*this._w,this._x=x*a+e*this._x,this._y=x*r+e*this._y,this._z=x*l+e*this._z,this.normalize(),this}const h=Math.sqrt(p),m=Math.atan2(h,f),g=Math.sin((1-e)*m)/h,v=Math.sin(e*m)/h;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=r*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,a){return this.copy(t).slerp(e,a)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class it{constructor(t=0,e=0,a=0){it.prototype.isVector3=!0,this.x=t,this.y=e,this.z=a}set(t,e,a){return a===void 0&&(a=this.z),this.x=t,this.y=e,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kv.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kv.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[3]*a+l[6]*r,this.y=l[1]*e+l[4]*a+l[7]*r,this.z=l[2]*e+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*e+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*e+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*e+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*e+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const e=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,p=t.w,h=2*(c*r-f*a),m=2*(f*e-l*r),g=2*(l*a-c*e);return this.x=e+p*h+c*g-f*m,this.y=a+p*m+f*h-l*g,this.z=r+p*g+l*m-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*e+l[4]*a+l[8]*r,this.y=l[1]*e+l[5]*a+l[9]*r,this.z=l[2]*e+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const a=t.x,r=t.y,l=t.z,c=e.x,f=e.y,p=e.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const a=t.dot(this)/e;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Gd.copy(this).projectOnVector(t),this.sub(Gd)}reflect(t){return this.sub(Gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const a=this.dot(t)/e;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return e*e+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,a){const r=Math.sin(e)*t;return this.x=r*Math.sin(a),this.y=Math.cos(e)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,a){return this.x=t*Math.sin(e),this.y=a,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=a,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,a=Math.sqrt(1-e*e);return this.x=a*Math.cos(t),this.y=e,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new it,Kv=new _u;class ce{constructor(t,e,a,r,l,c,f,p,h){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,c,f,p,h)}set(t,e,a,r,l,c,f,p,h){const m=this.elements;return m[0]=t,m[1]=r,m[2]=f,m[3]=e,m[4]=l,m[5]=p,m[6]=a,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],this}extractBasis(t,e,a){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,c=a[0],f=a[3],p=a[6],h=a[1],m=a[4],g=a[7],v=a[2],x=a[5],E=a[8],M=r[0],S=r[3],y=r[6],U=r[1],D=r[4],A=r[7],L=r[2],P=r[5],z=r[8];return l[0]=c*M+f*U+p*L,l[3]=c*S+f*D+p*P,l[6]=c*y+f*A+p*z,l[1]=h*M+m*U+g*L,l[4]=h*S+m*D+g*P,l[7]=h*y+m*A+g*z,l[2]=v*M+x*U+E*L,l[5]=v*S+x*D+E*P,l[8]=v*y+x*A+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],m=t[8];return e*c*m-e*f*h-a*l*m+a*f*p+r*l*h-r*c*p}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],m=t[8],g=m*c-f*h,v=f*p-m*l,x=h*l-c*p,E=e*g+a*v+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(r*h-m*a)*M,t[2]=(f*a-r*c)*M,t[3]=v*M,t[4]=(m*e-r*p)*M,t[5]=(r*l-f*e)*M,t[6]=x*M,t[7]=(a*p-h*e)*M,t[8]=(c*e-a*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,a,r,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(a*p,a*h,-a*(p*c+h*f)+c+t,-r*h,r*p,-r*(-h*c+p*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(Vd.makeScale(t,e)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,a,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<9;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<9;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new ce;function Ay(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ru(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ZT(){const o=ru("canvas");return o.style.display="block",o}const Qv={};function su(o){o in Qv||(Qv[o]=!0,console.warn(o))}function KT(o,t,e){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:a()}}setTimeout(l,e)})}const Jv=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$v=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QT(){const o={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ie&&(r.r=Ga(r.r),r.g=Ga(r.g),r.b=Ga(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ie&&(r.r=bo(r.r),r.g=bo(r.g),r.b=bo(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?pf:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return su("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return su("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Lo]:{primaries:t,whitePoint:a,transfer:pf,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:Jv,fromXYZ:$v,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),o}const ye=QT();function Ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let io;class JT{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{io===void 0&&(io=ru("canvas")),io.width=t.width,io.height=t.height;const r=io.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=io}return a.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ru("canvas");e.width=t.width,e.height=t.height;const a=e.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=Ga(l[c]/255)*255;return a.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let a=0;a<e.length;a++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[a]=Math.floor(Ga(e[a]/255)*255):e[a]=Ga(e[a]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $T=0;class Hm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=mu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(kd(r[c].image)):l.push(kd(r[c]))}else l=kd(r);a.url=l}return e||(t.images[this.uuid]=a),a}}function kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?JT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t1=0;const Xd=new it;class Kn extends Ho{constructor(t=Kn.DEFAULT_IMAGE,e=Kn.DEFAULT_MAPPING,a=us,r=us,l=ua,c=cs,f=Ki,p=ha,h=Kn.DEFAULT_ANISOTROPY,m=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=mu(),this.name="",this.source=new Hm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),e||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_y)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case df:t.x=t.x-Math.floor(t.x);break;case us:t.x=t.x<0?0:1;break;case Ip:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case df:t.y=t.y-Math.floor(t.y);break;case us:t.y=t.y<0?0:1;break;case Ip:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=_y;Kn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,e=0,a=0,r=1){sn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,a,r){return this.x=t,this.y=e,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*e+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*e+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*e+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,a,r,l;const p=t.elements,h=p[0],m=p[4],g=p[8],v=p[1],x=p[5],E=p[9],M=p[2],S=p[6],y=p[10];if(Math.abs(m-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(h+1)/2,A=(x+1)/2,L=(y+1)/2,P=(m+v)/4,z=(g+M)/4,F=(E+S)/4;return D>A&&D>L?D<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(D),r=P/a,l=z/a):A>L?A<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(A),a=P/r,l=F/r):L<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(L),a=z/l,r=F/l),this.set(a,r,l,e),this}let U=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-m)*(v-m));return Math.abs(U)<.001&&(U=1),this.x=(S-E)/U,this.y=(g-M)/U,this.z=(v-m)/U,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,a){return this.x=t.x+(e.x-t.x)*a,this.y=t.y+(e.y-t.y)*a,this.z=t.z+(e.z-t.z)*a,this.w=t.w+(e.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e1 extends Ho{constructor(t=1,e=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=a.depth,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e);const r={width:t,height:e,depth:a.depth},l=new Kn(r);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const e={minFilter:ua,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,a=1){if(this.width!==t||this.height!==e||this.depth!==a){this.width=t,this.height=e,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=a,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,a=t.textures.length;e<a;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Hm(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends e1{constructor(t=1,e=1,a={}){super(t,e,a),this.isWebGLRenderTarget=!0}}class Ry extends Kn{constructor(t=null,e=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n1 extends Kn{constructor(t=null,e=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:a,depth:r},this.magFilter=Qi,this.minFilter=Qi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,a=t.count;e<a;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,a=t.length;e<a;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const a=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,qi):qi.fromBufferAttribute(l,c),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Cc.copy(a.boundingBox)),Cc.applyMatrix4(t.matrixWorld),this.union(Cc)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,a;return t.normal.x>0?(e=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),e<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hl),Dc.subVectors(this.max,Hl),ao.subVectors(t.a,Hl),ro.subVectors(t.b,Hl),so.subVectors(t.c,Hl),_r.subVectors(ro,ao),gr.subVectors(so,ro),Kr.subVectors(ao,so);let e=[0,-_r.z,_r.y,0,-gr.z,gr.y,0,-Kr.z,Kr.y,_r.z,0,-_r.x,gr.z,0,-gr.x,Kr.z,0,-Kr.x,-_r.y,_r.x,0,-gr.y,gr.x,0,-Kr.y,Kr.x,0];return!Wd(e,ao,ro,so,Dc)||(e=[1,0,0,0,1,0,0,0,1],!Wd(e,ao,ro,so,Dc))?!1:(Uc.crossVectors(_r,gr),e=[Uc.x,Uc.y,Uc.z],Wd(e,ao,ro,so,Dc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new it,new it,new it,new it,new it,new it,new it,new it],qi=new it,Cc=new Go,ao=new it,ro=new it,so=new it,_r=new it,gr=new it,Kr=new it,Hl=new it,Dc=new it,Uc=new it,Qr=new it;function Wd(o,t,e,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){Qr.fromArray(o,l);const f=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),p=t.dot(Qr),h=e.dot(Qr),m=a.dot(Qr);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>f)return!1}return!0}const i1=new Go,Gl=new it,qd=new it;class gu{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const a=this.center;e!==void 0?a.copy(e):i1.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const a=this.center.distanceToSquared(t);return e.copy(t),a>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gl.subVectors(t,this.center);const e=Gl.lengthSq();if(e>this.radius*this.radius){const a=Math.sqrt(e),r=(a-this.radius)*.5;this.center.addScaledVector(Gl,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gl.copy(t.center).add(qd)),this.expandByPoint(Gl.copy(t.center).sub(qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ua=new it,Yd=new it,Lc=new it,vr=new it,jd=new it,Oc=new it,Zd=new it;class Gm{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const a=e.dot(this.direction);return a<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ua.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,e),Ua.distanceToSquared(t))}distanceSqToSegment(t,e,a,r){Yd.copy(t).add(e).multiplyScalar(.5),Lc.copy(e).sub(t).normalize(),vr.copy(this.origin).sub(Yd);const l=t.distanceTo(e)*.5,c=-this.direction.dot(Lc),f=vr.dot(this.direction),p=-vr.dot(Lc),h=vr.lengthSq(),m=Math.abs(1-c*c);let g,v,x,E;if(m>0)if(g=c*p-f,v=c*f-p,E=l*m,g>=0)if(v>=-E)if(v<=E){const M=1/m;g*=M,v*=M,x=g*(g+c*v+2*f)+v*(c*g+v+2*p)+h}else v=l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+h;else v=-l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+h;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),x=-g*g+v*(v+2*p)+h):v<=E?(g=0,v=Math.min(Math.max(-l,-p),l),x=v*(v+2*p)+h):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),x=-g*g+v*(v+2*p)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Yd).addScaledVector(Lc,v),x}intersectSphere(t,e){Ua.subVectors(t.center,this.origin);const a=Ua.dot(this.direction),r=Ua.dot(Ua)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/e;return a>=0?a:null}intersectPlane(t,e){const a=this.distanceToPlane(t);return a===null?null:this.at(a,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let a,r,l,c,f,p;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(a=(t.min.x-v.x)*h,r=(t.max.x-v.x)*h):(a=(t.max.x-v.x)*h,r=(t.min.x-v.x)*h),m>=0?(l=(t.min.y-v.y)*m,c=(t.max.y-v.y)*m):(l=(t.max.y-v.y)*m,c=(t.min.y-v.y)*m),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,e)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,e,a,r,l){jd.subVectors(e,t),Oc.subVectors(a,t),Zd.crossVectors(jd,Oc);let c=this.direction.dot(Zd),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;vr.subVectors(this.origin,t);const p=f*this.direction.dot(Oc.crossVectors(vr,Oc));if(p<0)return null;const h=f*this.direction.dot(jd.cross(vr));if(h<0||p+h>c)return null;const m=-f*vr.dot(Zd);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,e,a,r,l,c,f,p,h,m,g,v,x,E,M,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,a,r,l,c,f,p,h,m,g,v,x,E,M,S)}set(t,e,a,r,l,c,f,p,h,m,g,v,x,E,M,S){const y=this.elements;return y[0]=t,y[4]=e,y[8]=a,y[12]=r,y[1]=l,y[5]=c,y[9]=f,y[13]=p,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=E,y[11]=M,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const e=this.elements,a=t.elements;return e[0]=a[0],e[1]=a[1],e[2]=a[2],e[3]=a[3],e[4]=a[4],e[5]=a[5],e[6]=a[6],e[7]=a[7],e[8]=a[8],e[9]=a[9],e[10]=a[10],e[11]=a[11],e[12]=a[12],e[13]=a[13],e[14]=a[14],e[15]=a[15],this}copyPosition(t){const e=this.elements,a=t.elements;return e[12]=a[12],e[13]=a[13],e[14]=a[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,a){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,e,a){return this.set(t.x,e.x,a.x,0,t.y,e.y,a.y,0,t.z,e.z,a.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,a=t.elements,r=1/oo.setFromMatrixColumn(t,0).length(),l=1/oo.setFromMatrixColumn(t,1).length(),c=1/oo.setFromMatrixColumn(t,2).length();return e[0]=a[0]*r,e[1]=a[1]*r,e[2]=a[2]*r,e[3]=0,e[4]=a[4]*l,e[5]=a[5]*l,e[6]=a[6]*l,e[7]=0,e[8]=a[8]*c,e[9]=a[9]*c,e[10]=a[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*m,x=c*g,E=f*m,M=f*g;e[0]=p*m,e[4]=-p*g,e[8]=h,e[1]=x+E*h,e[5]=v-M*h,e[9]=-f*p,e[2]=M-v*h,e[6]=E+x*h,e[10]=c*p}else if(t.order==="YXZ"){const v=p*m,x=p*g,E=h*m,M=h*g;e[0]=v+M*f,e[4]=E*f-x,e[8]=c*h,e[1]=c*g,e[5]=c*m,e[9]=-f,e[2]=x*f-E,e[6]=M+v*f,e[10]=c*p}else if(t.order==="ZXY"){const v=p*m,x=p*g,E=h*m,M=h*g;e[0]=v-M*f,e[4]=-c*g,e[8]=E+x*f,e[1]=x+E*f,e[5]=c*m,e[9]=M-v*f,e[2]=-c*h,e[6]=f,e[10]=c*p}else if(t.order==="ZYX"){const v=c*m,x=c*g,E=f*m,M=f*g;e[0]=p*m,e[4]=E*h-x,e[8]=v*h+M,e[1]=p*g,e[5]=M*h+v,e[9]=x*h-E,e[2]=-h,e[6]=f*p,e[10]=c*p}else if(t.order==="YZX"){const v=c*p,x=c*h,E=f*p,M=f*h;e[0]=p*m,e[4]=M-v*g,e[8]=E*g+x,e[1]=g,e[5]=c*m,e[9]=-f*m,e[2]=-h*m,e[6]=x*g+E,e[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,x=c*h,E=f*p,M=f*h;e[0]=p*m,e[4]=-g,e[8]=h*m,e[1]=v*g+M,e[5]=c*m,e[9]=x*g-E,e[2]=E*g-x,e[6]=f*m,e[10]=M*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a1,t,r1)}lookAt(t,e,a){const r=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),xr.crossVectors(a,gi),xr.lengthSq()===0&&(Math.abs(a.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),xr.crossVectors(a,gi)),xr.normalize(),Nc.crossVectors(gi,xr),r[0]=xr.x,r[4]=Nc.x,r[8]=gi.x,r[1]=xr.y,r[5]=Nc.y,r[9]=gi.y,r[2]=xr.z,r[6]=Nc.z,r[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const a=t.elements,r=e.elements,l=this.elements,c=a[0],f=a[4],p=a[8],h=a[12],m=a[1],g=a[5],v=a[9],x=a[13],E=a[2],M=a[6],S=a[10],y=a[14],U=a[3],D=a[7],A=a[11],L=a[15],P=r[0],z=r[4],F=r[8],b=r[12],O=r[1],k=r[5],Z=r[9],et=r[13],ht=r[2],rt=r[6],B=r[10],Y=r[14],G=r[3],ut=r[7],N=r[11],X=r[15];return l[0]=c*P+f*O+p*ht+h*G,l[4]=c*z+f*k+p*rt+h*ut,l[8]=c*F+f*Z+p*B+h*N,l[12]=c*b+f*et+p*Y+h*X,l[1]=m*P+g*O+v*ht+x*G,l[5]=m*z+g*k+v*rt+x*ut,l[9]=m*F+g*Z+v*B+x*N,l[13]=m*b+g*et+v*Y+x*X,l[2]=E*P+M*O+S*ht+y*G,l[6]=E*z+M*k+S*rt+y*ut,l[10]=E*F+M*Z+S*B+y*N,l[14]=E*b+M*et+S*Y+y*X,l[3]=U*P+D*O+A*ht+L*G,l[7]=U*z+D*k+A*rt+L*ut,l[11]=U*F+D*Z+A*B+L*N,l[15]=U*b+D*et+A*Y+L*X,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],p=t[9],h=t[13],m=t[2],g=t[6],v=t[10],x=t[14],E=t[3],M=t[7],S=t[11],y=t[15];return E*(+l*p*g-r*h*g-l*f*v+a*h*v+r*f*x-a*p*x)+M*(+e*p*x-e*h*v+l*c*v-r*c*x+r*h*m-l*p*m)+S*(+e*h*g-e*f*x-l*c*g+a*c*x+l*f*m-a*h*m)+y*(-r*f*m-e*p*g+e*f*v+r*c*g-a*c*v+a*p*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=a),this}invert(){const t=this.elements,e=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],m=t[8],g=t[9],v=t[10],x=t[11],E=t[12],M=t[13],S=t[14],y=t[15],U=g*S*h-M*v*h+M*p*x-f*S*x-g*p*y+f*v*y,D=E*v*h-m*S*h-E*p*x+c*S*x+m*p*y-c*v*y,A=m*M*h-E*g*h+E*f*x-c*M*x-m*f*y+c*g*y,L=E*g*p-m*M*p-E*f*v+c*M*v+m*f*S-c*g*S,P=e*U+a*D+r*A+l*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return t[0]=U*z,t[1]=(M*v*l-g*S*l-M*r*x+a*S*x+g*r*y-a*v*y)*z,t[2]=(f*S*l-M*p*l+M*r*h-a*S*h-f*r*y+a*p*y)*z,t[3]=(g*p*l-f*v*l-g*r*h+a*v*h+f*r*x-a*p*x)*z,t[4]=D*z,t[5]=(m*S*l-E*v*l+E*r*x-e*S*x-m*r*y+e*v*y)*z,t[6]=(E*p*l-c*S*l-E*r*h+e*S*h+c*r*y-e*p*y)*z,t[7]=(c*v*l-m*p*l+m*r*h-e*v*h-c*r*x+e*p*x)*z,t[8]=A*z,t[9]=(E*g*l-m*M*l-E*a*x+e*M*x+m*a*y-e*g*y)*z,t[10]=(c*M*l-E*f*l+E*a*h-e*M*h-c*a*y+e*f*y)*z,t[11]=(m*f*l-c*g*l-m*a*h+e*g*h+c*a*x-e*f*x)*z,t[12]=L*z,t[13]=(m*M*r-E*g*r+E*a*v-e*M*v-m*a*S+e*g*S)*z,t[14]=(E*f*r-c*M*r-E*a*p+e*M*p+c*a*S-e*f*S)*z,t[15]=(c*g*r-m*f*r+m*a*p-e*g*p-c*a*v+e*f*v)*z,this}scale(t){const e=this.elements,a=t.x,r=t.y,l=t.z;return e[0]*=a,e[4]*=r,e[8]*=l,e[1]*=a,e[5]*=r,e[9]*=l,e[2]*=a,e[6]*=r,e[10]*=l,e[3]*=a,e[7]*=r,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,a,r))}makeTranslation(t,e,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,a,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,e,-a,0,0,a,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,0,a,0,0,1,0,0,-a,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),a=Math.sin(t);return this.set(e,-a,0,0,a,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const a=Math.cos(e),r=Math.sin(e),l=1-a,c=t.x,f=t.y,p=t.z,h=l*c,m=l*f;return this.set(h*c+a,h*f-r*p,h*p+r*f,0,h*f+r*p,m*f+a,m*p-r*c,0,h*p-r*f,m*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,e,a){return this.set(t,0,0,0,0,e,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,e,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,a){const r=this.elements,l=e._x,c=e._y,f=e._z,p=e._w,h=l+l,m=c+c,g=f+f,v=l*h,x=l*m,E=l*g,M=c*m,S=c*g,y=f*g,U=p*h,D=p*m,A=p*g,L=a.x,P=a.y,z=a.z;return r[0]=(1-(M+y))*L,r[1]=(x+A)*L,r[2]=(E-D)*L,r[3]=0,r[4]=(x-A)*P,r[5]=(1-(v+y))*P,r[6]=(S+U)*P,r[7]=0,r[8]=(E+D)*z,r[9]=(S-U)*z,r[10]=(1-(v+M))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,a){const r=this.elements;let l=oo.set(r[0],r[1],r[2]).length();const c=oo.set(r[4],r[5],r[6]).length(),f=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Yi.copy(this);const h=1/l,m=1/c,g=1/f;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=m,Yi.elements[5]*=m,Yi.elements[6]*=m,Yi.elements[8]*=g,Yi.elements[9]*=g,Yi.elements[10]*=g,e.setFromRotationMatrix(Yi),a.x=l,a.y=c,a.z=f,this}makePerspective(t,e,a,r,l,c,f=ca,p=!1){const h=this.elements,m=2*l/(e-t),g=2*l/(a-r),v=(e+t)/(e-t),x=(a+r)/(a-r);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===ca)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===mf)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,a,r,l,c,f=ca,p=!1){const h=this.elements,m=2/(e-t),g=2/(a-r),v=-(e+t)/(e-t),x=-(a+r)/(a-r);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===ca)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===mf)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,a=t.elements;for(let r=0;r<16;r++)if(e[r]!==a[r])return!1;return!0}fromArray(t,e=0){for(let a=0;a<16;a++)this.elements[a]=t[a+e];return this}toArray(t=[],e=0){const a=this.elements;return t[e]=a[0],t[e+1]=a[1],t[e+2]=a[2],t[e+3]=a[3],t[e+4]=a[4],t[e+5]=a[5],t[e+6]=a[6],t[e+7]=a[7],t[e+8]=a[8],t[e+9]=a[9],t[e+10]=a[10],t[e+11]=a[11],t[e+12]=a[12],t[e+13]=a[13],t[e+14]=a[14],t[e+15]=a[15],t}}const oo=new it,Yi=new tn,a1=new it(0,0,0),r1=new it(1,1,1),xr=new it,Nc=new it,gi=new it,tx=new tn,ex=new _u;class Ji{constructor(t=0,e=0,a=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,a,r=this._order){return this._x=t,this._y=e,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],p=r[1],h=r[5],m=r[9],g=r[2],v=r[6],x=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,a){return tx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tx,e,a)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ex.setFromEuler(this),this.setFromQuaternion(ex,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class wy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s1=0;const nx=new it,lo=new _u,La=new tn,Pc=new it,Vl=new it,o1=new it,l1=new _u,ix=new it(1,0,0),ax=new it(0,1,0),rx=new it(0,0,1),sx={type:"added"},u1={type:"removed"},uo={type:"childadded",child:null},Kd={type:"childremoved",child:null};class wn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=mu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new it,e=new Ji,a=new _u,r=new it(1,1,1);function l(){a.setFromEuler(e,!1)}function c(){e.setFromQuaternion(a,void 0,!1)}e._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tn},normalMatrix:{value:new ce}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lo.setFromAxisAngle(t,e),this.quaternion.multiply(lo),this}rotateOnWorldAxis(t,e){return lo.setFromAxisAngle(t,e),this.quaternion.premultiply(lo),this}rotateX(t){return this.rotateOnAxis(ix,t)}rotateY(t){return this.rotateOnAxis(ax,t)}rotateZ(t){return this.rotateOnAxis(rx,t)}translateOnAxis(t,e){return nx.copy(t).applyQuaternion(this.quaternion),this.position.add(nx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ix,t)}translateY(t){return this.translateOnAxis(ax,t)}translateZ(t){return this.translateOnAxis(rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,e,a){t.isVector3?Pc.copy(t):Pc.set(t,e,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(Vl,Pc,this.up):La.lookAt(Pc,Vl,this.up),this.quaternion.setFromRotationMatrix(La),r&&(La.extractRotation(r.matrixWorld),lo.setFromRotationMatrix(La),this.quaternion.premultiply(lo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sx),uo.child=t,this.dispatchEvent(uo),uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u1),Kd.child=t,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sx),uo.child=t,this.dispatchEvent(uo),uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,a=[]){this[t]===e&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,e,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,t,o1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vl,l1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let a=0,r=e.length;a<r;a++)e[a].updateMatrixWorld(t)}updateWorldMatrix(t,e){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",a={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const g=p[h];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(e){const f=c(t.geometries),p=c(t.materials),h=c(t.textures),m=c(t.images),g=c(t.shapes),v=c(t.skeletons),x=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=r,a;function c(f){const p=[];for(const h in f){const m=f[h];delete m.metadata,p.push(m)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}wn.DEFAULT_UP=new it(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new it,Oa=new it,Qd=new it,Na=new it,co=new it,fo=new it,ox=new it,Jd=new it,$d=new it,tp=new it,ep=new sn,np=new sn,ip=new sn;class Zi{constructor(t=new it,e=new it,a=new it){this.a=t,this.b=e,this.c=a}static getNormal(t,e,a,r){r.subVectors(a,e),ji.subVectors(t,e),r.cross(ji);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,e,a,r,l){ji.subVectors(r,e),Oa.subVectors(a,e),Qd.subVectors(t,e);const c=ji.dot(ji),f=ji.dot(Oa),p=ji.dot(Qd),h=Oa.dot(Oa),m=Oa.dot(Qd),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*p-f*m)*v,E=(c*m-f*p)*v;return l.set(1-x-E,E,x)}static containsPoint(t,e,a,r){return this.getBarycoord(t,e,a,r,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,e,a,r,l,c,f,p){return this.getBarycoord(t,e,a,r,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Na.x),p.addScaledVector(c,Na.y),p.addScaledVector(f,Na.z),p)}static getInterpolatedAttribute(t,e,a,r,l,c){return ep.setScalar(0),np.setScalar(0),ip.setScalar(0),ep.fromBufferAttribute(t,e),np.fromBufferAttribute(t,a),ip.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(ep,l.x),c.addScaledVector(np,l.y),c.addScaledVector(ip,l.z),c}static isFrontFacing(t,e,a,r){return ji.subVectors(a,e),Oa.subVectors(t,e),ji.cross(Oa).dot(r)<0}set(t,e,a){return this.a.copy(t),this.b.copy(e),this.c.copy(a),this}setFromPointsAndIndices(t,e,a,r){return this.a.copy(t[e]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,a,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Oa.subVectors(this.a,this.b),ji.cross(Oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,a,r,l){return Zi.getInterpolation(t,this.a,this.b,this.c,e,a,r,l)}containsPoint(t){return Zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const a=this.a,r=this.b,l=this.c;let c,f;co.subVectors(r,a),fo.subVectors(l,a),Jd.subVectors(t,a);const p=co.dot(Jd),h=fo.dot(Jd);if(p<=0&&h<=0)return e.copy(a);$d.subVectors(t,r);const m=co.dot($d),g=fo.dot($d);if(m>=0&&g<=m)return e.copy(r);const v=p*g-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),e.copy(a).addScaledVector(co,c);tp.subVectors(t,l);const x=co.dot(tp),E=fo.dot(tp);if(E>=0&&x<=E)return e.copy(l);const M=x*h-p*E;if(M<=0&&h>=0&&E<=0)return f=h/(h-E),e.copy(a).addScaledVector(fo,f);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return ox.subVectors(l,r),f=(g-m)/(g-m+(x-E)),e.copy(r).addScaledVector(ox,f);const y=1/(S+M+v);return c=M*y,f=v*y,e.copy(a).addScaledVector(co,c).addScaledVector(fo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},zc={h:0,s:0,l:0};function ap(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}class fe{constructor(t,e,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,a)}set(t,e,a){if(e===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.colorSpaceToWorking(this,e),this}setRGB(t,e,a,r=ye.workingColorSpace){return this.r=t,this.g=e,this.b=a,ye.colorSpaceToWorking(this,r),this}setHSL(t,e,a,r=ye.workingColorSpace){if(t=jT(t,1),e=Se(e,0,1),a=Se(a,0,1),e===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+e):a+e-a*e,c=2*a-l;this.r=ap(c,l,t+1/3),this.g=ap(c,l,t),this.b=ap(c,l,t-1/3)}return ye.colorSpaceToWorking(this,r),this}setStyle(t,e=Nn){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){const a=Cy[t.toLowerCase()];return a!==void 0?this.setHex(a,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}copyLinearToSRGB(t){return this.r=bo(t.r),this.g=bo(t.g),this.b=bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return ye.workingToColorSpace(Gn.copy(this),t),Math.round(Se(Gn.r*255,0,255))*65536+Math.round(Se(Gn.g*255,0,255))*256+Math.round(Se(Gn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.workingToColorSpace(Gn.copy(this),e);const a=Gn.r,r=Gn.g,l=Gn.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,h;const m=(f+c)/2;if(f===c)p=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case a:p=(r-l)/g+(r<l?6:0);break;case r:p=(l-a)/g+2;break;case l:p=(a-r)/g+4;break}p/=6}return t.h=p,t.s=h,t.l=m,t}getRGB(t,e=ye.workingColorSpace){return ye.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Nn){ye.workingToColorSpace(Gn.copy(this),t);const e=Gn.r,a=Gn.g,r=Gn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,e,a){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+e,yr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,a){return this.r=t.r+(e.r-t.r)*a,this.g=t.g+(e.g-t.g)*a,this.b=t.b+(e.b-t.b)*a,this}lerpHSL(t,e){this.getHSL(yr),t.getHSL(zc);const a=Hd(yr.h,zc.h,e),r=Hd(yr.s,zc.s,e),l=Hd(yr.l,zc.l,e);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*e+l[3]*a+l[6]*r,this.g=l[1]*e+l[4]*a+l[7]*r,this.b=l[2]*e+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new fe;fe.NAMES=Cy;let c1=0;class da extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=mu(),this.name="",this.type="Material",this.blending=To,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ap,this.blendDst=Rp,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const a=t[e];if(a===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[e]=a}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(a.blending=this.blending),this.side!==Va&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ap&&(a.blendSrc=this.blendSrc),this.blendDst!==Rp&&(a.blendDst=this.blendDst),this.blendEquation!==os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(a.stencilFail=this.stencilFail),this.stencilZFail!==no&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(e){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let a=null;if(e!==null){const r=e.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=e[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dy extends da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new it,Ic=new Te;let f1=0;class ii{constructor(t,e,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f1++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=a,this.usage=jv,this.updateRanges=[],this.gpuType=Ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,a){t*=this.itemSize,a*=e.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=e.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,a=this.count;e<a;e++)Ic.fromBufferAttribute(this,e),Ic.applyMatrix3(t),this.setXY(e,Ic.x,Ic.y);else if(this.itemSize===3)for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,a=this.count;e<a;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let a=this.array[t*this.itemSize+e];return this.normalized&&(a=Fl(a,this.array)),a}setComponent(t,e,a){return this.normalized&&(a=ni(a,this.array)),this.array[t*this.itemSize+e]=a,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fl(e,this.array)),e}setX(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fl(e,this.array)),e}setY(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fl(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fl(e,this.array)),e}setW(t,e){return this.normalized&&(e=ni(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,a){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),a=ni(a,this.array)),this.array[t+0]=e,this.array[t+1]=a,this}setXYZ(t,e,a,r){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),a=ni(a,this.array),r=ni(r,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,e,a,r,l){return t*=this.itemSize,this.normalized&&(e=ni(e,this.array),a=ni(a,this.array),r=ni(r,this.array),l=ni(l,this.array)),this.array[t+0]=e,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jv&&(t.usage=this.usage),t}}class Uy extends ii{constructor(t,e,a){super(new Uint16Array(t),e,a)}}class Ly extends ii{constructor(t,e,a){super(new Uint32Array(t),e,a)}}class jn extends ii{constructor(t,e,a){super(new Float32Array(t),e,a)}}let h1=0;const Ni=new tn,rp=new wn,ho=new it,vi=new Go,kl=new Go,Rn=new it;class Ti extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=mu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ay(t)?Ly:Uy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,a=0){this.groups.push({start:t,count:e,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ce().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,e,a){return Ni.makeTranslation(t,e,a),this.applyMatrix4(Ni),this}scale(t,e,a){return Ni.makeScale(t,e,a),this.applyMatrix4(Ni),this}lookAt(t){return rp.lookAt(t),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new jn(a,3))}else{const a=Math.min(t.length,e.count);for(let r=0;r<a;r++){const l=t[r];e.setXYZ(r,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const l=e[a];vi.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const a=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];kl.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(vi.min,kl.min),vi.expandByPoint(Rn),Rn.addVectors(vi.max,kl.max),vi.expandByPoint(Rn)):(vi.expandByPoint(kl.min),vi.expandByPoint(kl.max))}vi.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)Rn.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(Rn));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],p=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Rn.fromBufferAttribute(f,h),p&&(ho.fromBufferAttribute(t,h),Rn.add(ho)),r=Math.max(r,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=e.position,r=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let F=0;F<a.count;F++)f[F]=new it,p[F]=new it;const h=new it,m=new it,g=new it,v=new Te,x=new Te,E=new Te,M=new it,S=new it;function y(F,b,O){h.fromBufferAttribute(a,F),m.fromBufferAttribute(a,b),g.fromBufferAttribute(a,O),v.fromBufferAttribute(l,F),x.fromBufferAttribute(l,b),E.fromBufferAttribute(l,O),m.sub(h),g.sub(h),x.sub(v),E.sub(v);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(k),f[F].add(M),f[b].add(M),f[O].add(M),p[F].add(S),p[b].add(S),p[O].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let F=0,b=U.length;F<b;++F){const O=U[F],k=O.start,Z=O.count;for(let et=k,ht=k+Z;et<ht;et+=3)y(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const D=new it,A=new it,L=new it,P=new it;function z(F){L.fromBufferAttribute(r,F),P.copy(L);const b=f[F];D.copy(b),D.sub(L.multiplyScalar(L.dot(b))).normalize(),A.crossVectors(P,b);const k=A.dot(p[F])<0?-1:1;c.setXYZW(F,D.x,D.y,D.z,k)}for(let F=0,b=U.length;F<b;++F){const O=U[F],k=O.start,Z=O.count;for(let et=k,ht=k+Z;et<ht;et+=3)z(t.getX(et+0)),z(t.getX(et+1)),z(t.getX(et+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const r=new it,l=new it,c=new it,f=new it,p=new it,h=new it,m=new it,g=new it;if(t)for(let v=0,x=t.count;v<x;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);r.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),c.fromBufferAttribute(e,S),m.subVectors(c,l),g.subVectors(r,l),m.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),h.fromBufferAttribute(a,S),f.add(m),p.add(m),h.add(m),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=e.count;v<x;v+=3)r.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),m.subVectors(c,l),g.subVectors(r,l),m.cross(g),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,a=t.count;e<a;e++)Rn.fromBufferAttribute(t,e),Rn.normalize(),t.setXYZ(e,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,p){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(p.length*m);let x=0,E=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?x=p[M]*f.data.stride+f.offset:x=p[M]*m;for(let y=0;y<m;y++)v[E++]=h[x++]}return new ii(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ti,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=t(p,a);e.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],x=t(v,a);p.push(x)}e.morphAttributes[f]=p}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const a=this.attributes;for(const p in a){const h=a[p];t.data.attributes[p]=h.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];m.push(x.toJSON(t.data))}m.length>0&&(r[p]=m,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(e))}const l=t.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lx=new tn,Jr=new Gm,Bc=new gu,ux=new it,Fc=new it,Hc=new it,Gc=new it,sp=new it,Vc=new it,cx=new it,kc=new it;class Si extends wn{constructor(t=new Ti,e=new Dy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;e.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Vc.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const m=f[p],g=l[p];m!==0&&(sp.fromBufferAttribute(g,t),c?Vc.addScaledVector(sp,m):Vc.addScaledVector(sp.sub(e),m))}e.add(Vc)}return e}raycast(t,e){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(l),Jr.copy(t.ray).recast(t.near),!(Bc.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Bc,ux)===null||Jr.origin.distanceToSquared(ux)>(t.far-t.near)**2))&&(lx.copy(l).invert(),Jr.copy(t.ray).applyMatrix4(lx),!(a.boundingBox!==null&&Jr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,e,Jr)))}_computeIntersections(t,e,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=c[S.materialIndex],U=Math.max(S.start,x.start),D=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let A=U,L=D;A<L;A+=3){const P=f.getX(A),z=f.getX(A+1),F=f.getX(A+2);r=Xc(this,y,t,a,h,m,g,P,z,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const U=f.getX(S),D=f.getX(S+1),A=f.getX(S+2);r=Xc(this,c,t,a,h,m,g,U,D,A),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],y=c[S.materialIndex],U=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let A=U,L=D;A<L;A+=3){const P=A,z=A+1,F=A+2;r=Xc(this,y,t,a,h,m,g,P,z,F),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,e.push(r))}}else{const E=Math.max(0,x.start),M=Math.min(p.count,x.start+x.count);for(let S=E,y=M;S<y;S+=3){const U=S,D=S+1,A=S+2;r=Xc(this,c,t,a,h,m,g,U,D,A),r&&(r.faceIndex=Math.floor(S/3),e.push(r))}}}}function d1(o,t,e,a,r,l,c,f){let p;if(t.side===ai?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,t.side===Va,f),p===null)return null;kc.copy(f),kc.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(kc);return h<e.near||h>e.far?null:{distance:h,point:kc.clone(),object:o}}function Xc(o,t,e,a,r,l,c,f,p,h){o.getVertexPosition(f,Fc),o.getVertexPosition(p,Hc),o.getVertexPosition(h,Gc);const m=d1(o,t,e,a,Fc,Hc,Gc,cx);if(m){const g=new it;Zi.getBarycoord(cx,Fc,Hc,Gc,g),r&&(m.uv=Zi.getInterpolatedAttribute(r,f,p,h,g,new Te)),l&&(m.uv1=Zi.getInterpolatedAttribute(l,f,p,h,g,new Te)),c&&(m.normal=Zi.getInterpolatedAttribute(c,f,p,h,g,new it),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new it,materialIndex:0};Zi.getNormal(Fc,Hc,Gc,v.normal),m.face=v,m.barycoord=g}return m}class vs extends Ti{constructor(t=1,e=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],m=[],g=[];let v=0,x=0;E("z","y","x",-1,-1,a,e,t,c,l,0),E("z","y","x",1,-1,a,e,-t,c,l,1),E("x","z","y",1,1,t,a,e,r,c,2),E("x","z","y",1,-1,t,a,-e,r,c,3),E("x","y","z",1,-1,t,e,a,r,l,4),E("x","y","z",-1,-1,t,e,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(m,3)),this.setAttribute("uv",new jn(g,2));function E(M,S,y,U,D,A,L,P,z,F,b){const O=A/z,k=L/F,Z=A/2,et=L/2,ht=P/2,rt=z+1,B=F+1;let Y=0,G=0;const ut=new it;for(let N=0;N<B;N++){const X=N*k-et;for(let ft=0;ft<rt;ft++){const dt=ft*O-Z;ut[M]=dt*U,ut[S]=X*D,ut[y]=ht,h.push(ut.x,ut.y,ut.z),ut[M]=0,ut[S]=0,ut[y]=P>0?1:-1,m.push(ut.x,ut.y,ut.z),g.push(ft/z),g.push(1-N/F),Y+=1}}for(let N=0;N<F;N++)for(let X=0;X<z;X++){const ft=v+X+rt*N,dt=v+X+rt*(N+1),vt=v+(X+1)+rt*(N+1),wt=v+(X+1)+rt*N;p.push(ft,dt,wt),p.push(dt,vt,wt),G+=6}f.addGroup(x,G,b),x+=G,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oo(o){const t={};for(const e in o){t[e]={};for(const a in o[e]){const r=o[e][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][a]=null):t[e][a]=r.clone():Array.isArray(r)?t[e][a]=r.slice():t[e][a]=r}}return t}function Yn(o){const t={};for(let e=0;e<o.length;e++){const a=Oo(o[e]);for(const r in a)t[r]=a[r]}return t}function p1(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Oy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const m1={clone:Oo,merge:Yn};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oo(t.uniforms),this.uniformsGroups=p1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(e.extensions=a),e}}class Ny extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new it,fx=new Te,hx=new Te;class Ii extends Ny{constructor(t=50,e=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hm*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hm*2*Math.atan(Math.tan(Fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,a){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z)}getViewSize(t,e){return this.getViewBounds(t,fx,hx),e.subVectors(hx,fx)}setViewOffset(t,e,a,r,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fd*.5*this.fov)/this.zoom,a=2*e,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*r/p,e-=c.offsetY*a/h,r*=c.width/p,a*=c.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,e,e-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const po=-90,mo=1;class v1 extends wn{constructor(t,e,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ii(po,mo,t,e);r.layers=this.layers,this.add(r);const l=new Ii(po,mo,t,e);l.layers=this.layers,this.add(l);const c=new Ii(po,mo,t,e);c.layers=this.layers,this.add(c);const f=new Ii(po,mo,t,e);f.layers=this.layers,this.add(f);const p=new Ii(po,mo,t,e);p.layers=this.layers,this.add(p);const h=new Ii(po,mo,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[a,r,l,c,f,p]=e;for(const h of e)this.remove(h);if(t===ca)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===mf)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,m]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(e,l),t.setRenderTarget(a,1,r),t.render(e,c),t.setRenderTarget(a,2,r),t.render(e,f),t.setRenderTarget(a,3,r),t.render(e,p),t.setRenderTarget(a,4,r),t.render(e,h),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,r),t.render(e,m),t.setRenderTarget(g,v,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class Py extends Kn{constructor(t=[],e=Do,a,r,l,c,f,p,h,m){super(t,e,a,r,l,c,f,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class x1 extends gs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new Py(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vs(5,5,5),l=new ka({name:"CubemapFromEquirect",uniforms:Oo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ai,blending:Ar});l.uniforms.tEquirect.value=e;const c=new Si(r,l),f=e.minFilter;return e.minFilter===cs&&(e.minFilter=ua),new v1(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,a,r);t.setRenderTarget(l)}}class xo extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y1={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const a of t.hand.values())this._getHandJoint(e,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const M of t.hand.values()){const S=e.getJointPose(M,a),y=this._getHandJoint(h,M);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&v>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=e.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const a=new xo;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[e.jointName]=a,t.add(a)}return t.joints[e.jointName]}}class S1 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const lp=new it,M1=new it,E1=new ce;class as{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,a,r){return this.normal.set(t,e,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,a){const r=lp.subVectors(a,e).cross(M1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const a=t.delta(lp),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:e.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return e<0&&a>0||a<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const a=e||E1.getNormalMatrix(t),r=this.coplanarPoint(lp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new gu,T1=new Te(.5,.5),Wc=new it;class Vm{constructor(t=new as,e=new as,a=new as,r=new as,l=new as,c=new as){this.planes=[t,e,a,r,l,c]}set(t,e,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let a=0;a<6;a++)e[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,e=ca,a=!1){const r=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],h=l[3],m=l[4],g=l[5],v=l[6],x=l[7],E=l[8],M=l[9],S=l[10],y=l[11],U=l[12],D=l[13],A=l[14],L=l[15];if(r[0].setComponents(h-c,x-m,y-E,L-U).normalize(),r[1].setComponents(h+c,x+m,y+E,L+U).normalize(),r[2].setComponents(h+f,x+g,y+M,L+D).normalize(),r[3].setComponents(h-f,x-g,y-M,L-D).normalize(),a)r[4].setComponents(p,v,S,A).normalize(),r[5].setComponents(h-p,x-v,y-S,L-A).normalize();else if(r[4].setComponents(h-p,x-v,y-S,L-A).normalize(),e===ca)r[5].setComponents(h+p,x+v,y+S,L+A).normalize();else if(e===mf)r[5].setComponents(p,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){$r.center.set(0,0,0);const e=T1.distanceTo(t.center);return $r.radius=.7071067811865476+e,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){const e=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let a=0;a<6;a++){const r=e[a];if(Wc.x=r.normal.x>0?t.max.x:t.min.x,Wc.y=r.normal.y>0?t.max.y:t.min.y,Wc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let a=0;a<6;a++)if(e[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sf extends da{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _f=new it,gf=new it,dx=new tn,Xl=new Gm,qc=new gu,up=new it,px=new it;class b1 extends wn{constructor(t=new Ti,e=new sf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[0];for(let r=1,l=e.count;r<l;r++)_f.fromBufferAttribute(e,r-1),gf.fromBufferAttribute(e,r),a[r]=a[r-1],a[r]+=_f.distanceTo(gf);t.setAttribute("lineDistance",new jn(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,l=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(r),qc.radius+=l,t.ray.intersectsSphere(qc)===!1)return;dx.copy(r).invert(),Xl.copy(t.ray).applyMatrix4(dx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,m=a.index,v=a.attributes.position;if(m!==null){const x=Math.max(0,c.start),E=Math.min(m.count,c.start+c.count);for(let M=x,S=E-1;M<S;M+=h){const y=m.getX(M),U=m.getX(M+1),D=Yc(this,t,Xl,p,y,U,M);D&&e.push(D)}if(this.isLineLoop){const M=m.getX(E-1),S=m.getX(x),y=Yc(this,t,Xl,p,M,S,E-1);y&&e.push(y)}}else{const x=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let M=x,S=E-1;M<S;M+=h){const y=Yc(this,t,Xl,p,M,M+1,M);y&&e.push(y)}if(this.isLineLoop){const M=Yc(this,t,Xl,p,E-1,x,E-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Yc(o,t,e,a,r,l,c){const f=o.geometry.attributes.position;if(_f.fromBufferAttribute(f,r),gf.fromBufferAttribute(f,l),e.distanceSqToSegment(_f,gf,up,px)>a)return;up.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(up);if(!(h<t.near||h>t.far))return{distance:h,point:px.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const mx=new it,_x=new it;class gx extends b1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,a=[];for(let r=0,l=e.count;r<l;r+=2)mx.fromBufferAttribute(e,r),_x.fromBufferAttribute(e,r+1),a[r]=r===0?0:a[r-1],a[r+1]=a[r]+mx.distanceTo(_x);t.setAttribute("lineDistance",new jn(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yo extends da{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vx=new tn,dm=new Gm,jc=new gu,Zc=new it;class Zl extends wn{constructor(t=new Ti,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const a=this.geometry,r=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),jc.copy(a.boundingSphere),jc.applyMatrix4(r),jc.radius+=l,t.ray.intersectsSphere(jc)===!1)return;vx.copy(r).invert(),dm.copy(t.ray).applyMatrix4(vx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=a.index,g=a.attributes.position;if(h!==null){const v=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let E=v,M=x;E<M;E++){const S=h.getX(E);Zc.fromBufferAttribute(g,S),xx(Zc,S,p,r,t,e,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let E=v,M=x;E<M;E++)Zc.fromBufferAttribute(g,E),xx(Zc,E,p,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,a=Object.keys(e);if(a.length>0){const r=e[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function xx(o,t,e,a,r,l,c){const f=dm.distanceSqToPoint(o);if(f<e){const p=new it;dm.closestPointToPoint(o,p),p.applyMatrix4(a);const h=r.ray.origin.distanceTo(p);if(h<r.near||h>r.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class zy extends Kn{constructor(t,e,a=_s,r,l,c,f=Qi,p=Qi,h,m=iu,g=1){if(m!==iu&&m!==au)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:e,depth:g};super(v,r,l,c,f,p,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Iy extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Af extends Ti{constructor(t=1,e=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:a,heightSegments:r};const l=t/2,c=e/2,f=Math.floor(a),p=Math.floor(r),h=f+1,m=p+1,g=t/f,v=e/p,x=[],E=[],M=[],S=[];for(let y=0;y<m;y++){const U=y*v-c;for(let D=0;D<h;D++){const A=D*g-l;E.push(A,-U,0),M.push(0,0,1),S.push(D/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let U=0;U<f;U++){const D=U+h*y,A=U+h*(y+1),L=U+1+h*(y+1),P=U+1+h*y;x.push(D,A,P),x.push(A,L,P)}this.setIndex(x),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(M,3)),this.setAttribute("uv",new jn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Af(t.width,t.height,t.widthSegments,t.heightSegments)}}class yx extends da{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class By extends da{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fm,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class A1 extends da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R1 extends da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Fy{constructor(t,e,a){const r=this;let l=!1,c=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=a,this.abortController=new AbortController,this.itemStart=function(m){f++,l===!1&&r.onStart!==void 0&&r.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,r.onProgress!==void 0&&r.onProgress(m,c,f),c===f&&(l=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const x=h[g],E=h[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Hy=new Fy;class Vo{constructor(t){this.manager=t!==void 0?t:Hy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const a=this;return new Promise(function(r,l){a.load(t,r,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pa={};class w1 extends Error{constructor(t,e){super(t),this.response=e}}class Gy extends Vo{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,a,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=Kl.get(`file:${t}`);if(l!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(l),this.manager.itemEnd(t)},0),l;if(Pa[t]!==void 0){Pa[t].push({onLoad:e,onProgress:a,onError:r});return}Pa[t]=[],Pa[t].push({onLoad:e,onProgress:a,onError:r});const c=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Pa[t],g=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=v?parseInt(v):0,E=x!==0;let M=0;const S=new ReadableStream({start(y){U();function U(){g.read().then(({done:D,value:A})=>{if(D)y.close();else{M+=A.byteLength;const L=new ProgressEvent("progress",{lengthComputable:E,loaded:M,total:x});for(let P=0,z=m.length;P<z;P++){const F=m[P];F.onProgress&&F.onProgress(L)}y.enqueue(A),U()}},D=>{y.error(D)})}}});return new Response(S)}else throw new w1(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(f),v=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(v);return h.arrayBuffer().then(E=>x.decode(E))}}}).then(h=>{Kl.add(`file:${t}`,h);const m=Pa[t];delete Pa[t];for(let g=0,v=m.length;g<v;g++){const x=m[g];x.onLoad&&x.onLoad(h)}}).catch(h=>{const m=Pa[t];if(m===void 0)throw this.manager.itemError(t),h;delete Pa[t];for(let g=0,v=m.length;g<v;g++){const x=m[g];x.onError&&x.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const _o=new WeakMap;class C1 extends Vo{constructor(t){super(t)}load(t,e,a,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,c=Kl.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(t),setTimeout(function(){e&&e(c),l.manager.itemEnd(t)},0);else{let g=_o.get(c);g===void 0&&(g=[],_o.set(c,g)),g.push({onLoad:e,onError:r})}return c}const f=ru("img");function p(){m(),e&&e(this);const g=_o.get(this)||[];for(let v=0;v<g.length;v++){const x=g[v];x.onLoad&&x.onLoad(this)}_o.delete(this),l.manager.itemEnd(t)}function h(g){m(),r&&r(g),Kl.remove(`image:${t}`);const v=_o.get(this)||[];for(let x=0;x<v.length;x++){const E=v[x];E.onError&&E.onError(g)}_o.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){f.removeEventListener("load",p,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Kl.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class D1 extends Vo{constructor(t){super(t)}load(t,e,a,r){const l=new Kn,c=new C1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(t,function(f){l.image=f,l.needsUpdate=!0,e!==void 0&&e(l)},a,r),l}}class Vy extends wn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const cp=new tn,Sx=new it,Mx=new it;class U1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=ha,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vm,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,a=this.matrix;Sx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sx),Mx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mx),e.updateMatrixWorld(),cp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp,e.coordinateSystem,e.reversedDepth),e.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(cp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ky extends Ny{constructor(t=-1,e=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+e,p=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,p=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class L1 extends U1{constructor(){super(new ky(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O1 extends Vy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new L1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class N1 extends Vy{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class P1{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class z1 extends Ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class I1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ex(o,t,e,a){const r=B1(a);switch(e){case Sy:return o*t;case Ey:return o*t/r.components*r.byteLength;case zm:return o*t/r.components*r.byteLength;case Ty:return o*t*2/r.components*r.byteLength;case Im:return o*t*2/r.components*r.byteLength;case My:return o*t*3/r.components*r.byteLength;case Ki:return o*t*4/r.components*r.byteLength;case Bm:return o*t*4/r.components*r.byteLength;case ef:case nf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case af:case rf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fp:case Gp:return Math.max(o,16)*Math.max(t,8)/4;case Bp:case Hp:return Math.max(o,8)*Math.max(t,8)/2;case Vp:case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case im:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case am:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case rm:case sm:case om:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*8;case cm:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B1(o){switch(o){case ha:case gy:return{byteLength:1,components:1};case eu:case vy:case pu:return{byteLength:2,components:1};case Nm:case Pm:return{byteLength:2,components:4};case _s:case Om:case Ha:return{byteLength:4,components:1};case xy:case yy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Um);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xy(){let o=null,t=!1,e=null,a=null;function r(l,c){e(l,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){o=l}}}function F1(o){const t=new WeakMap;function e(f,p){const h=f.array,m=f.usage,g=h.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,h){const m=p.array,g=p.updateRanges;if(o.bindBuffer(h,f),g.length===0)o.bufferSubData(h,0,m);else{g.sort((x,E)=>x.start-E.start);let v=0;for(let x=1;x<g.length;x++){const E=g[v],M=g[x];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let x=0,E=g.length;x<E;x++){const M=g[x];o.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,e(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:l,update:c}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j1=`#ifdef USE_BATCHING
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
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$1=`#ifdef USE_IRIDESCENCE
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
#endif`,tb=`#ifdef USE_BUMPMAP
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ub=`#define PI 3.141592653589793
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
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fb=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rb=`#ifdef USE_GRADIENTMAP
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
}`,wb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
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
#endif`,Bb=`struct PhysicalMaterial {
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
}`,Fb=`
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zb=`#if defined( USE_POINTS_UV )
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
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$b=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eA=`#ifdef USE_MORPHTARGETS
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
#endif`,nA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lA=`#ifdef USE_NORMALMAP
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
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TA=`float getShadowMask() {
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
}`,bA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,RA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wA=`#ifdef USE_SKINNING
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
#endif`,CA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OA=`#ifdef USE_TRANSMISSION
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
#endif`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,PA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HA=`uniform sampler2D t2D;
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
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
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
}`,qA=`#if DEPTH_PACKING == 3200
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
}`,YA=`#define DISTANCE
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
}`,jA=`#define DISTANCE
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
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QA=`uniform float scale;
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
}`,JA=`uniform vec3 diffuse;
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
}`,$A=`#include <common>
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
}`,tR=`uniform vec3 diffuse;
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
}`,eR=`#define LAMBERT
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
}`,nR=`#define LAMBERT
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
}`,iR=`#define MATCAP
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
}`,aR=`#define MATCAP
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
}`,rR=`#define NORMAL
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
}`,sR=`#define NORMAL
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
}`,oR=`#define PHONG
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
}`,lR=`#define PHONG
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
}`,uR=`#define STANDARD
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
}`,cR=`#define STANDARD
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
}`,fR=`#define TOON
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
}`,hR=`#define TOON
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
}`,dR=`uniform float size;
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
}`,pR=`uniform vec3 diffuse;
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
}`,mR=`#include <common>
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
}`,_R=`uniform vec3 color;
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
}`,gR=`uniform float rotation;
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
}`,vR=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:H1,alphahash_pars_fragment:G1,alphamap_fragment:V1,alphamap_pars_fragment:k1,alphatest_fragment:X1,alphatest_pars_fragment:W1,aomap_fragment:q1,aomap_pars_fragment:Y1,batching_pars_vertex:j1,batching_vertex:Z1,begin_vertex:K1,beginnormal_vertex:Q1,bsdfs:J1,iridescence_fragment:$1,bumpmap_pars_fragment:tb,clipping_planes_fragment:eb,clipping_planes_pars_fragment:nb,clipping_planes_pars_vertex:ib,clipping_planes_vertex:ab,color_fragment:rb,color_pars_fragment:sb,color_pars_vertex:ob,color_vertex:lb,common:ub,cube_uv_reflection_fragment:cb,defaultnormal_vertex:fb,displacementmap_pars_vertex:hb,displacementmap_vertex:db,emissivemap_fragment:pb,emissivemap_pars_fragment:mb,colorspace_fragment:_b,colorspace_pars_fragment:gb,envmap_fragment:vb,envmap_common_pars_fragment:xb,envmap_pars_fragment:yb,envmap_pars_vertex:Sb,envmap_physical_pars_fragment:Lb,envmap_vertex:Mb,fog_vertex:Eb,fog_pars_vertex:Tb,fog_fragment:bb,fog_pars_fragment:Ab,gradientmap_pars_fragment:Rb,lightmap_pars_fragment:wb,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:Db,lights_pars_begin:Ub,lights_toon_fragment:Ob,lights_toon_pars_fragment:Nb,lights_phong_fragment:Pb,lights_phong_pars_fragment:zb,lights_physical_fragment:Ib,lights_physical_pars_fragment:Bb,lights_fragment_begin:Fb,lights_fragment_maps:Hb,lights_fragment_end:Gb,logdepthbuf_fragment:Vb,logdepthbuf_pars_fragment:kb,logdepthbuf_pars_vertex:Xb,logdepthbuf_vertex:Wb,map_fragment:qb,map_pars_fragment:Yb,map_particle_fragment:jb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:Qb,morphinstance_vertex:Jb,morphcolor_vertex:$b,morphnormal_vertex:tA,morphtarget_pars_vertex:eA,morphtarget_vertex:nA,normal_fragment_begin:iA,normal_fragment_maps:aA,normal_pars_fragment:rA,normal_pars_vertex:sA,normal_vertex:oA,normalmap_pars_fragment:lA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:cA,clearcoat_pars_fragment:fA,iridescence_pars_fragment:hA,opaque_fragment:dA,packing:pA,premultiplied_alpha_fragment:mA,project_vertex:_A,dithering_fragment:gA,dithering_pars_fragment:vA,roughnessmap_fragment:xA,roughnessmap_pars_fragment:yA,shadowmap_pars_fragment:SA,shadowmap_pars_vertex:MA,shadowmap_vertex:EA,shadowmask_pars_fragment:TA,skinbase_vertex:bA,skinning_pars_vertex:AA,skinning_vertex:RA,skinnormal_vertex:wA,specularmap_fragment:CA,specularmap_pars_fragment:DA,tonemapping_fragment:UA,tonemapping_pars_fragment:LA,transmission_fragment:OA,transmission_pars_fragment:NA,uv_pars_fragment:PA,uv_pars_vertex:zA,uv_vertex:IA,worldpos_vertex:BA,background_vert:FA,background_frag:HA,backgroundCube_vert:GA,backgroundCube_frag:VA,cube_vert:kA,cube_frag:XA,depth_vert:WA,depth_frag:qA,distanceRGBA_vert:YA,distanceRGBA_frag:jA,equirect_vert:ZA,equirect_frag:KA,linedashed_vert:QA,linedashed_frag:JA,meshbasic_vert:$A,meshbasic_frag:tR,meshlambert_vert:eR,meshlambert_frag:nR,meshmatcap_vert:iR,meshmatcap_frag:aR,meshnormal_vert:rR,meshnormal_frag:sR,meshphong_vert:oR,meshphong_frag:lR,meshphysical_vert:uR,meshphysical_frag:cR,meshtoon_vert:fR,meshtoon_frag:hR,points_vert:dR,points_frag:pR,shadow_vert:mR,shadow_frag:_R,sprite_vert:gR,sprite_frag:vR},Pt={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},oa={basic:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Yn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Yn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new fe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Yn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Yn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Yn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Yn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Yn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Yn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Yn([Pt.common,Pt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Yn([Pt.lights,Pt.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};oa.physical={uniforms:Yn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Kc={r:0,b:0,g:0},ts=new Ji,xR=new tn;function yR(o,t,e,a,r,l,c){const f=new fe(0);let p=l===!0?0:1,h,m,g=null,v=0,x=null;function E(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?e:t).get(A)),A}function M(D){let A=!1;const L=E(D);L===null?y(f,p):L&&L.isColor&&(y(L,1),A=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(D,A){const L=E(A);L&&(L.isCubeTexture||L.mapping===bf)?(m===void 0&&(m=new Si(new vs(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Oo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(P,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),ts.copy(A.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(xR.makeRotationFromEuler(ts)),m.material.toneMapped=ye.getTransfer(L.colorSpace)!==Ie,(g!==L||v!==L.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=L,v=L.version,x=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Si(new Af(2,2),new ka({name:"BackgroundMaterial",uniforms:Oo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=ye.getTransfer(L.colorSpace)!==Ie,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||x!==o.toneMapping)&&(h.material.needsUpdate=!0,g=L,v=L.version,x=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,A){D.getRGB(Kc,Oy(o)),a.buffers.color.setClear(Kc.r,Kc.g,Kc.b,A,c)}function U(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,A=1){f.set(D),p=A,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(f,p)},render:M,addToRenderList:S,dispose:U}}function SR(o,t){const e=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,c=!1;function f(O,k,Z,et,ht){let rt=!1;const B=g(et,Z,k);l!==B&&(l=B,h(l.object)),rt=x(O,et,Z,ht),rt&&E(O,et,Z,ht),ht!==null&&t.update(ht,o.ELEMENT_ARRAY_BUFFER),(rt||c)&&(c=!1,A(O,k,Z,et),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function p(){return o.createVertexArray()}function h(O){return o.bindVertexArray(O)}function m(O){return o.deleteVertexArray(O)}function g(O,k,Z){const et=Z.wireframe===!0;let ht=a[O.id];ht===void 0&&(ht={},a[O.id]=ht);let rt=ht[k.id];rt===void 0&&(rt={},ht[k.id]=rt);let B=rt[et];return B===void 0&&(B=v(p()),rt[et]=B),B}function v(O){const k=[],Z=[],et=[];for(let ht=0;ht<e;ht++)k[ht]=0,Z[ht]=0,et[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:et,object:O,attributes:{},index:null}}function x(O,k,Z,et){const ht=l.attributes,rt=k.attributes;let B=0;const Y=Z.getAttributes();for(const G in Y)if(Y[G].location>=0){const N=ht[G];let X=rt[G];if(X===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(X=O.instanceColor)),N===void 0||N.attribute!==X||X&&N.data!==X.data)return!0;B++}return l.attributesNum!==B||l.index!==et}function E(O,k,Z,et){const ht={},rt=k.attributes;let B=0;const Y=Z.getAttributes();for(const G in Y)if(Y[G].location>=0){let N=rt[G];N===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(N=O.instanceColor));const X={};X.attribute=N,N&&N.data&&(X.data=N.data),ht[G]=X,B++}l.attributes=ht,l.attributesNum=B,l.index=et}function M(){const O=l.newAttributes;for(let k=0,Z=O.length;k<Z;k++)O[k]=0}function S(O){y(O,0)}function y(O,k){const Z=l.newAttributes,et=l.enabledAttributes,ht=l.attributeDivisors;Z[O]=1,et[O]===0&&(o.enableVertexAttribArray(O),et[O]=1),ht[O]!==k&&(o.vertexAttribDivisor(O,k),ht[O]=k)}function U(){const O=l.newAttributes,k=l.enabledAttributes;for(let Z=0,et=k.length;Z<et;Z++)k[Z]!==O[Z]&&(o.disableVertexAttribArray(Z),k[Z]=0)}function D(O,k,Z,et,ht,rt,B){B===!0?o.vertexAttribIPointer(O,k,Z,ht,rt):o.vertexAttribPointer(O,k,Z,et,ht,rt)}function A(O,k,Z,et){M();const ht=et.attributes,rt=Z.getAttributes(),B=k.defaultAttributeValues;for(const Y in rt){const G=rt[Y];if(G.location>=0){let ut=ht[Y];if(ut===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ut=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ut=O.instanceColor)),ut!==void 0){const N=ut.normalized,X=ut.itemSize,ft=t.get(ut);if(ft===void 0)continue;const dt=ft.buffer,vt=ft.type,wt=ft.bytesPerElement,J=vt===o.INT||vt===o.UNSIGNED_INT||ut.gpuType===Om;if(ut.isInterleavedBufferAttribute){const gt=ut.data,At=gt.stride,qt=ut.offset;if(gt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<G.locationSize;Dt++)y(G.location+Dt,gt.meshPerAttribute);O.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Dt=0;Dt<G.locationSize;Dt++)S(G.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let Dt=0;Dt<G.locationSize;Dt++)D(G.location+Dt,X/G.locationSize,vt,N,At*wt,(qt+X/G.locationSize*Dt)*wt,J)}else{if(ut.isInstancedBufferAttribute){for(let gt=0;gt<G.locationSize;gt++)y(G.location+gt,ut.meshPerAttribute);O.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let gt=0;gt<G.locationSize;gt++)S(G.location+gt);o.bindBuffer(o.ARRAY_BUFFER,dt);for(let gt=0;gt<G.locationSize;gt++)D(G.location+gt,X/G.locationSize,vt,N,X*wt,X/G.locationSize*gt*wt,J)}}else if(B!==void 0){const N=B[Y];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(G.location,N);break;case 3:o.vertexAttrib3fv(G.location,N);break;case 4:o.vertexAttrib4fv(G.location,N);break;default:o.vertexAttrib1fv(G.location,N)}}}}U()}function L(){F();for(const O in a){const k=a[O];for(const Z in k){const et=k[Z];for(const ht in et)m(et[ht].object),delete et[ht];delete k[Z]}delete a[O]}}function P(O){if(a[O.id]===void 0)return;const k=a[O.id];for(const Z in k){const et=k[Z];for(const ht in et)m(et[ht].object),delete et[ht];delete k[Z]}delete a[O.id]}function z(O){for(const k in a){const Z=a[k];if(Z[O.id]===void 0)continue;const et=Z[O.id];for(const ht in et)m(et[ht].object),delete et[ht];delete Z[O.id]}}function F(){b(),c=!0,l!==r&&(l=r,h(l.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:S,disableUnusedAttributes:U}}function MR(o,t,e){let a;function r(h){a=h}function l(h,m){o.drawArrays(a,h,m),e.update(m,a,1)}function c(h,m,g){g!==0&&(o.drawArraysInstanced(a,h,m,g),e.update(m,a,g))}function f(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,g);let x=0;for(let E=0;E<g;E++)x+=m[E];e.update(x,a,1)}function p(h,m,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<h.length;E++)c(h[E],m[E],v[E]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,m,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*v[M];e.update(E,a,1)}}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function ER(o,t,e,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(z){return!(z!==Ki&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const F=z===pu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ha&&a.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ha&&!F)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const m=p(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=e.logarithmicDepthBuffer===!0,v=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:L,maxSamples:P}}function TR(o){const t=this;let e=null,a=0,r=!1,l=!1;const c=new as,f=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||a!==0||r;return r=v,a=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){e=m(g,v,0)},this.setState=function(g,v,x){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!r||E===null||E.length===0||l&&!S)l?m(null):h();else{const U=l?0:a,D=U*4;let A=y.clippingState||null;p.value=A,A=m(E,v,D,x);for(let L=0;L!==D;++L)A[L]=e[L];y.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==e&&(p.value=e,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function m(g,v,x,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=p.value,E!==!0||S===null){const y=x+M*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,A=x;D!==M;++D,A+=4)c.copy(g[D]).applyMatrix4(U,f),c.normal.toArray(S,A),S[A+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function bR(o){let t=new WeakMap;function e(c,f){return f===Pp?c.mapping=Do:f===zp&&(c.mapping=Uo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Pp||f===zp)if(t.has(c)){const p=t.get(c).texture;return e(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new x1(p.height);return h.fromEquirectangularTexture(o,c),t.set(c,h),c.addEventListener("dispose",r),e(h.texture,c.mapping)}else return null}}return c}function r(c){const f=c.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const So=4,Tx=[.125,.215,.35,.446,.526,.582],ls=20,fp=new ky,bx=new fe;let hp=null,dp=0,pp=0,mp=!1;const rs=(1+Math.sqrt(5))/2,go=1/rs,Ax=[new it(-rs,go,0),new it(rs,go,0),new it(-go,0,rs),new it(go,0,rs),new it(0,rs,-go),new it(0,rs,go),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)],AR=new it;class Rx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,a=.1,r=100,l={}){const{size:c=256,position:f=AR}=l;hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),e>0&&this._blur(p,0,0,e),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hp,dp,pp),this._renderer.xr.enabled=mp,t.scissorTest=!1,Qc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Do||t.mapping===Uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=e||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,a={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:pu,format:Ki,colorSpace:Lo,depthBuffer:!1},r=wx(t,e,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wx(t,e,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RR(l)),this._blurMaterial=wR(l,t,e)}return r}_compileMaterial(t){const e=new Si(this._lodPlanes[0],t);this._renderer.compile(e,fp)}_sceneToCubeUV(t,e,a,r,l){const p=new Ii(90,1,e,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(bx),g.toneMapping=Rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null));const M=new Dy({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),S=new Si(new vs,M);let y=!1;const U=t.background;U?U.isColor&&(M.color.copy(U),t.background=null,y=!0):(M.color.copy(bx),y=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(p.up.set(0,h[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[D],l.y,l.z)):A===1?(p.up.set(0,0,h[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[D],l.z)):(p.up.set(0,h[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[D]));const L=this._cubeSize;Qc(r,A*L,D>2?L:0,L,L),g.setRenderTarget(r),y&&g.render(S,p),g.render(t,p)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=U}_textureToCubeUV(t,e){const a=this._renderer,r=t.mapping===Do||t.mapping===Uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());const l=r?this._cubemapMaterial:this._equirectMaterial,c=new Si(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Qc(e,0,0,3*p,2*p),a.setRenderTarget(e),a.render(c,fp)}_applyPMREM(t){const e=this._renderer,a=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Ax[(r-l-1)%Ax.length];this._blur(t,l-1,l,c,f)}e.autoClear=a}_blur(t,e,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,e,a,r,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Si(this._lodPlanes[r],h),v=h.uniforms,x=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ls-1),M=l/E,S=isFinite(l)?1+Math.floor(m*M):ls;S>ls&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ls}`);const y=[];let U=0;for(let z=0;z<ls;++z){const F=z/M,b=Math.exp(-F*F/2);y.push(b),z===0?U+=b:z<S&&(U+=2*b)}for(let z=0;z<y.length;z++)y[z]=y[z]/U;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-a;const A=this._sizeLods[r],L=3*A*(r>D-So?r-D+So:0),P=4*(this._cubeSize-A);Qc(e,L,P,3*A,2*A),p.setRenderTarget(e),p.render(g,fp)}}function RR(o){const t=[],e=[],a=[];let r=o;const l=o-So+1+Tx.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);e.push(f);let p=1/f;c>o-So?p=Tx[c-o+So-1]:c===0&&(p=0),a.push(p);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,E=6,M=3,S=2,y=1,U=new Float32Array(M*E*x),D=new Float32Array(S*E*x),A=new Float32Array(y*E*x);for(let P=0;P<x;P++){const z=P%3*2/3-1,F=P>2?0:-1,b=[z,F,0,z+2/3,F,0,z+2/3,F+1,0,z,F,0,z+2/3,F+1,0,z,F+1,0];U.set(b,M*E*P),D.set(v,S*E*P);const O=[P,P,P,P,P,P];A.set(O,y*E*P)}const L=new Ti;L.setAttribute("position",new ii(U,M)),L.setAttribute("uv",new ii(D,S)),L.setAttribute("faceIndex",new ii(A,y)),t.push(L),r>So&&r--}return{lodPlanes:t,sizeLods:e,sigmas:a}}function wx(o,t,e){const a=new gs(o,t,e);return a.texture.mapping=bf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qc(o,t,e,a,r){o.viewport.set(t,e,a,r),o.scissor.set(t,e,a,r)}function wR(o,t,e){const a=new Float32Array(ls),r=new it(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:km(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Cx(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:km(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Dx(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:km(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function km(){return`

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
	`}function CR(o){let t=new WeakMap,e=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===Pp||p===zp,m=p===Do||p===Uo;if(h||m){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return e===null&&(e=new Rx(o)),g=h?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return h&&x&&x.height>0||m&&x&&r(x)?(e===null&&(e=new Rx(o)),g=h?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let p=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:a,dispose:c}}function DR(o){const t={};function e(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=o.getExtension(a)}return t[a]=r,r}return{has:function(a){return e(a)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(a){const r=e(a);return r===null&&su("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function UR(o,t,e,a){const r={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete r[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function f(g,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,e.memory.geometries++),v}function p(g){const v=g.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,E=g.attributes.position;let M=0;if(x!==null){const U=x.array;M=x.version;for(let D=0,A=U.length;D<A;D+=3){const L=U[D+0],P=U[D+1],z=U[D+2];v.push(L,P,P,z,z,L)}}else if(E!==void 0){const U=E.array;M=E.version;for(let D=0,A=U.length/3-1;D<A;D+=3){const L=D+0,P=D+1,z=D+2;v.push(L,P,P,z,z,L)}}else return;const S=new(Ay(v)?Ly:Uy)(v,1);S.version=M;const y=l.get(g);y&&t.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:m}}function LR(o,t,e){let a;function r(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,x){o.drawElements(a,x,l,v*c),e.update(x,a,1)}function h(v,x,E){E!==0&&(o.drawElementsInstanced(a,x,l,v*c,E),e.update(x,a,E))}function m(v,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];e.update(S,a,1)}function g(v,x,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/c,x[y],M[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,M,0,E);let y=0;for(let U=0;U<E;U++)y+=x[U]*M[U];e.update(y,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function OR(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(e.calls++,c){case o.TRIANGLES:e.triangles+=f*(l/3);break;case o.LINES:e.lines+=f*(l/2);break;case o.LINE_STRIP:e.lines+=f*(l-1);break;case o.LINE_LOOP:e.lines+=f*l;break;case o.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:a}}function NR(o,t,e){const a=new WeakMap,r=new sn;function l(c,f,p){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let O=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",O)};var x=O;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let L=f.attributes.position.count*A,P=1;L>t.maxTextureSize&&(P=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const z=new Float32Array(L*P*4*g),F=new Ry(z,L,P,g);F.type=Ha,F.needsUpdate=!0;const b=A*4;for(let k=0;k<g;k++){const Z=y[k],et=U[k],ht=D[k],rt=L*P*4*k;for(let B=0;B<Z.count;B++){const Y=B*b;E===!0&&(r.fromBufferAttribute(Z,B),z[rt+Y+0]=r.x,z[rt+Y+1]=r.y,z[rt+Y+2]=r.z,z[rt+Y+3]=0),M===!0&&(r.fromBufferAttribute(et,B),z[rt+Y+4]=r.x,z[rt+Y+5]=r.y,z[rt+Y+6]=r.z,z[rt+Y+7]=0),S===!0&&(r.fromBufferAttribute(ht,B),z[rt+Y+8]=r.x,z[rt+Y+9]=r.y,z[rt+Y+10]=r.z,z[rt+Y+11]=ht.itemSize===4?r.w:1)}}v={count:g,texture:F,size:new Te(L,P)},a.set(f,v),f.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,e);else{let E=0;for(let S=0;S<h.length;S++)E+=h[S];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",h)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,e),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function PR(o,t,e,a){let r=new WeakMap;function l(p){const h=a.render.frame,m=p.geometry,g=t.get(p,m);if(r.get(g)!==h&&(t.update(g),r.set(g,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(e.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&e.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;r.get(v)!==h&&(v.update(),r.set(v,h))}return g}function c(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:l,dispose:c}}const Wy=new Kn,Ux=new zy(1,1),qy=new Ry,Yy=new n1,jy=new Py,Lx=[],Ox=[],Nx=new Float32Array(16),Px=new Float32Array(9),zx=new Float32Array(4);function ko(o,t,e){const a=o[0];if(a<=0||a>0)return o;const r=t*e;let l=Lx[r];if(l===void 0&&(l=new Float32Array(r),Lx[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,o[c].toArray(l,f)}return l}function Sn(o,t){if(o.length!==t.length)return!1;for(let e=0,a=o.length;e<a;e++)if(o[e]!==t[e])return!1;return!0}function Mn(o,t){for(let e=0,a=t.length;e<a;e++)o[e]=t[e]}function Rf(o,t){let e=Ox[t];e===void 0&&(e=new Int32Array(t),Ox[t]=e);for(let a=0;a!==t;++a)e[a]=o.allocateTextureUnit();return e}function zR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function IR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;o.uniform2fv(this.addr,t),Mn(e,t)}}function BR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Sn(e,t))return;o.uniform3fv(this.addr,t),Mn(e,t)}}function FR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;o.uniform4fv(this.addr,t),Mn(e,t)}}function HR(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;zx.set(a),o.uniformMatrix2fv(this.addr,!1,zx),Mn(e,a)}}function GR(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;Px.set(a),o.uniformMatrix3fv(this.addr,!1,Px),Mn(e,a)}}function VR(o,t){const e=this.cache,a=t.elements;if(a===void 0){if(Sn(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(e,t)}else{if(Sn(e,a))return;Nx.set(a),o.uniformMatrix4fv(this.addr,!1,Nx),Mn(e,a)}}function kR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function XR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;o.uniform2iv(this.addr,t),Mn(e,t)}}function WR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;o.uniform3iv(this.addr,t),Mn(e,t)}}function qR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;o.uniform4iv(this.addr,t),Mn(e,t)}}function YR(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function jR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Sn(e,t))return;o.uniform2uiv(this.addr,t),Mn(e,t)}}function ZR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Sn(e,t))return;o.uniform3uiv(this.addr,t),Mn(e,t)}}function KR(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Sn(e,t))return;o.uniform4uiv(this.addr,t),Mn(e,t)}}function QR(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Ux.compareFunction=by,l=Ux):l=Wy,e.setTexture2D(t||l,r)}function JR(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture3D(t||Yy,r)}function $R(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTextureCube(t||jy,r)}function tw(o,t,e){const a=this.cache,r=e.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),e.setTexture2DArray(t||qy,r)}function ew(o){switch(o){case 5126:return zR;case 35664:return IR;case 35665:return BR;case 35666:return FR;case 35674:return HR;case 35675:return GR;case 35676:return VR;case 5124:case 35670:return kR;case 35667:case 35671:return XR;case 35668:case 35672:return WR;case 35669:case 35673:return qR;case 5125:return YR;case 36294:return jR;case 36295:return ZR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return $R;case 36289:case 36303:case 36311:case 36292:return tw}}function nw(o,t){o.uniform1fv(this.addr,t)}function iw(o,t){const e=ko(t,this.size,2);o.uniform2fv(this.addr,e)}function aw(o,t){const e=ko(t,this.size,3);o.uniform3fv(this.addr,e)}function rw(o,t){const e=ko(t,this.size,4);o.uniform4fv(this.addr,e)}function sw(o,t){const e=ko(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function ow(o,t){const e=ko(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function lw(o,t){const e=ko(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function uw(o,t){o.uniform1iv(this.addr,t)}function cw(o,t){o.uniform2iv(this.addr,t)}function fw(o,t){o.uniform3iv(this.addr,t)}function hw(o,t){o.uniform4iv(this.addr,t)}function dw(o,t){o.uniform1uiv(this.addr,t)}function pw(o,t){o.uniform2uiv(this.addr,t)}function mw(o,t){o.uniform3uiv(this.addr,t)}function _w(o,t){o.uniform4uiv(this.addr,t)}function gw(o,t,e){const a=this.cache,r=t.length,l=Rf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture2D(t[c]||Wy,l[c])}function vw(o,t,e){const a=this.cache,r=t.length,l=Rf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Yy,l[c])}function xw(o,t,e){const a=this.cache,r=t.length,l=Rf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||jy,l[c])}function yw(o,t,e){const a=this.cache,r=t.length,l=Rf(e,r);Sn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||qy,l[c])}function Sw(o){switch(o){case 5126:return nw;case 35664:return iw;case 35665:return aw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return uw;case 35667:case 35671:return cw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return dw;case 36294:return pw;case 36295:return mw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return yw}}class Mw{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.setValue=ew(e.type)}}class Ew{constructor(t,e,a){this.id=t,this.addr=a,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sw(e.type)}}class Tw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,e[f.id],a)}}}const _p=/(\w+)(\])?(\[|\.)?/g;function Ix(o,t){o.seq.push(t),o.map[t.id]=t}function bw(o,t,e){const a=o.name,r=a.length;for(_p.lastIndex=0;;){const l=_p.exec(a),c=_p.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===r){Ix(e,h===void 0?new Mw(f,o,t):new Ew(f,o,t));break}else{let g=e.map[f];g===void 0&&(g=new Tw(f),Ix(e,g)),e=g}}}class of{constructor(t,e){this.seq=[],this.map={};const a=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(e,r),c=t.getUniformLocation(e,l.name);bw(l,c,this)}}setValue(t,e,a,r){const l=this.map[e];l!==void 0&&l.setValue(t,a,r)}setOptional(t,e,a){const r=e[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,e,a,r){for(let l=0,c=e.length;l!==c;++l){const f=e[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,e){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in e&&a.push(c)}return a}}function Bx(o,t,e){const a=o.createShader(t);return o.shaderSource(a,e),o.compileShader(a),a}const Aw=37297;let Rw=0;function ww(o,t){const e=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return a.join(`
`)}const Fx=new ce;function Cw(o){ye._getMatrix(Fx,ye.workingColorSpace,o);const t=`mat3( ${Fx.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(o)){case pf:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Hx(o,t,e){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return e.toUpperCase()+`

`+l+`

`+ww(o.getShaderSource(t),f)}else return l}function Dw(o,t){const e=Cw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Uw(o,t){let e;switch(t){case DT:e="Linear";break;case UT:e="Reinhard";break;case LT:e="Cineon";break;case OT:e="ACESFilmic";break;case PT:e="AgX";break;case zT:e="Neutral";break;case NT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jc=new it;function Lw(){ye.getLuminanceCoefficients(Jc);const o=Jc.x.toFixed(4),t=Jc.y.toFixed(4),e=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ow(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function Nw(o){const t=[];for(const e in o){const a=o[e];a!==!1&&t.push("#define "+e+" "+a)}return t.join(`
`)}function Pw(o,t){const e={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return e}function ql(o){return o!==""}function Gx(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function pm(o){return o.replace(zw,Bw)}const Iw=new Map;function Bw(o,t){let e=pe[t];if(e===void 0){const a=Iw.get(t);if(a!==void 0)e=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return pm(e)}const Fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(o){return o.replace(Fw,Hw)}function Hw(o,t,e,a){let r="";for(let l=parseInt(t);l<parseInt(e);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function Xx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Gw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===my?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===uT?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===za&&(t="SHADOWMAP_TYPE_VSM"),t}function Vw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Do:case Uo:t="ENVMAP_TYPE_CUBE";break;case bf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Uo:t="ENVMAP_MODE_REFRACTION";break}return t}function Xw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lm:t="ENVMAP_BLENDING_MULTIPLY";break;case wT:t="ENVMAP_BLENDING_MIX";break;case CT:t="ENVMAP_BLENDING_ADD";break}return t}function Ww(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:a,maxMip:e}}function qw(o,t,e,a){const r=o.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const p=Gw(e),h=Vw(e),m=kw(e),g=Xw(e),v=Ww(e),x=Ow(e),E=Nw(l),M=r.createProgram();let S,y,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ql).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(ql).join(`
`),y.length>0&&(y+=`
`)):(S=[Xx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),y=[Xx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rr?"#define TONE_MAPPING":"",e.toneMapping!==Rr?pe.tonemapping_pars_fragment:"",e.toneMapping!==Rr?Uw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Dw("linearToOutputTexel",e.outputColorSpace),Lw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ql).join(`
`)),c=pm(c),c=Gx(c,e),c=Vx(c,e),f=pm(f),f=Gx(f,e),f=Vx(f,e),c=kx(c),f=kx(f),e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",e.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=U+S+c,A=U+y+f,L=Bx(r,r.VERTEX_SHADER,D),P=Bx(r,r.FRAGMENT_SHADER,A);r.attachShader(M,L),r.attachShader(M,P),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function z(k){if(o.debug.checkShaderErrors){const Z=r.getProgramInfoLog(M)||"",et=r.getShaderInfoLog(L)||"",ht=r.getShaderInfoLog(P)||"",rt=Z.trim(),B=et.trim(),Y=ht.trim();let G=!0,ut=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,M,L,P);else{const N=Hx(r,L,"vertex"),X=Hx(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+rt+`
`+N+`
`+X)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(B===""||Y==="")&&(ut=!1);ut&&(k.diagnostics={runnable:G,programLog:rt,vertexShader:{log:B,prefix:S},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(L),r.deleteShader(P),F=new of(r,M),b=Pw(r,M)}let F;this.getUniforms=function(){return F===void 0&&z(this),F};let b;this.getAttributes=function(){return b===void 0&&z(this),b};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(M,Aw)),O},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rw++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=P,this}let Yw=0;class jw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(e),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const a of e)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let a=e.get(t);return a===void 0&&(a=new Set,e.set(t,a)),a}_getShaderStage(t){const e=this.shaderCache;let a=e.get(t);return a===void 0&&(a=new Zw(t),e.set(t,a)),a}}class Zw{constructor(t){this.id=Yw++,this.code=t,this.usedTimes=0}}function Kw(o,t,e,a,r,l,c){const f=new wy,p=new jw,h=new Set,m=[],g=r.logarithmicDepthBuffer,v=r.vertexTextures;let x=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,O,k,Z,et){const ht=Z.fog,rt=et.geometry,B=b.isMeshStandardMaterial?Z.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),G=Y&&Y.mapping===bf?Y.image.height:null,ut=E[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const N=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,X=N!==void 0?N.length:0;let ft=0;rt.morphAttributes.position!==void 0&&(ft=1),rt.morphAttributes.normal!==void 0&&(ft=2),rt.morphAttributes.color!==void 0&&(ft=3);let dt,vt,wt,J;if(ut){const be=oa[ut];dt=be.vertexShader,vt=be.fragmentShader}else dt=b.vertexShader,vt=b.fragmentShader,p.update(b),wt=p.getVertexShaderID(b),J=p.getFragmentShaderID(b);const gt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),qt=et.isInstancedMesh===!0,Dt=et.isBatchedMesh===!0,le=!!b.map,We=!!b.matcap,V=!!Y,Le=!!b.aoMap,re=!!b.lightMap,ne=!!b.bumpMap,zt=!!b.normalMap,Ve=!!b.displacementMap,Vt=!!b.emissiveMap,se=!!b.metalnessMap,Ze=!!b.roughnessMap,Ke=b.anisotropy>0,I=b.clearcoat>0,R=b.dispersion>0,nt=b.iridescence>0,pt=b.sheen>0,xt=b.transmission>0,ct=Ke&&!!b.anisotropyMap,It=I&&!!b.clearcoatMap,Rt=I&&!!b.clearcoatNormalMap,Xt=I&&!!b.clearcoatRoughnessMap,Yt=nt&&!!b.iridescenceMap,Mt=nt&&!!b.iridescenceThicknessMap,Ot=pt&&!!b.sheenColorMap,Zt=pt&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Ut=!!b.specularColorMap,oe=!!b.specularIntensityMap,q=xt&&!!b.transmissionMap,bt=xt&&!!b.thicknessMap,Ct=!!b.gradientMap,Bt=!!b.alphaMap,Et=b.alphaTest>0,St=!!b.alphaHash,Gt=!!b.extensions;let ae=Rr;b.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Ce={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:dt,fragmentShader:vt,defines:b.defines,customVertexShaderID:wt,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Dt,batchingColor:Dt&&et._colorsTexture!==null,instancing:qt,instancingColor:qt&&et.instanceColor!==null,instancingMorph:qt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:gt===null?o.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Lo,alphaToCoverage:!!b.alphaToCoverage,map:le,matcap:We,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:G,aoMap:Le,lightMap:re,bumpMap:ne,normalMap:zt,displacementMap:v&&Ve,emissiveMap:Vt,normalMapObjectSpace:zt&&b.normalMapType===HT,normalMapTangentSpace:zt&&b.normalMapType===Fm,metalnessMap:se,roughnessMap:Ze,anisotropy:Ke,anisotropyMap:ct,clearcoat:I,clearcoatMap:It,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:R,iridescence:nt,iridescenceMap:Yt,iridescenceThicknessMap:Mt,sheen:pt,sheenColorMap:Ot,sheenRoughnessMap:Zt,specularMap:kt,specularColorMap:Ut,specularIntensityMap:oe,transmission:xt,transmissionMap:q,thicknessMap:bt,gradientMap:Ct,opaque:b.transparent===!1&&b.blending===To&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:St,combine:b.combine,mapUv:le&&M(b.map.channel),aoMapUv:Le&&M(b.aoMap.channel),lightMapUv:re&&M(b.lightMap.channel),bumpMapUv:ne&&M(b.bumpMap.channel),normalMapUv:zt&&M(b.normalMap.channel),displacementMapUv:Ve&&M(b.displacementMap.channel),emissiveMapUv:Vt&&M(b.emissiveMap.channel),metalnessMapUv:se&&M(b.metalnessMap.channel),roughnessMapUv:Ze&&M(b.roughnessMap.channel),anisotropyMapUv:ct&&M(b.anisotropyMap.channel),clearcoatMapUv:It&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&M(b.sheenRoughnessMap.channel),specularMapUv:kt&&M(b.specularMap.channel),specularColorMapUv:Ut&&M(b.specularColorMap.channel),specularIntensityMapUv:oe&&M(b.specularIntensityMap.channel),transmissionMapUv:q&&M(b.transmissionMap.channel),thicknessMapUv:bt&&M(b.thicknessMap.channel),alphaMapUv:Bt&&M(b.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(zt||Ke),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!rt.attributes.uv&&(le||Bt),fog:!!ht,useFog:b.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:et.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ft,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:le&&b.map.isVideoTexture===!0&&ye.getTransfer(b.map.colorSpace)===Ie,decodeVideoTextureEmissive:Vt&&b.emissiveMap.isVideoTexture===!0&&ye.getTransfer(b.emissiveMap.colorSpace)===Ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fa,flipSided:b.side===ai,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Dt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=h.has(1),Ce.vertexUv2s=h.has(2),Ce.vertexUv3s=h.has(3),h.clear(),Ce}function y(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)O.push(k),O.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(U(O,b),D(O,b),O.push(o.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function U(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function D(b,O){f.disableAll(),O.supportsVertexTextures&&f.enable(0),O.instancing&&f.enable(1),O.instancingColor&&f.enable(2),O.instancingMorph&&f.enable(3),O.matcap&&f.enable(4),O.envMap&&f.enable(5),O.normalMapObjectSpace&&f.enable(6),O.normalMapTangentSpace&&f.enable(7),O.clearcoat&&f.enable(8),O.iridescence&&f.enable(9),O.alphaTest&&f.enable(10),O.vertexColors&&f.enable(11),O.vertexAlphas&&f.enable(12),O.vertexUv1s&&f.enable(13),O.vertexUv2s&&f.enable(14),O.vertexUv3s&&f.enable(15),O.vertexTangents&&f.enable(16),O.anisotropy&&f.enable(17),O.alphaHash&&f.enable(18),O.batching&&f.enable(19),O.dispersion&&f.enable(20),O.batchingColor&&f.enable(21),O.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const O=E[b.type];let k;if(O){const Z=oa[O];k=m1.clone(Z.uniforms)}else k=b.uniforms;return k}function L(b,O){let k;for(let Z=0,et=m.length;Z<et;Z++){const ht=m[Z];if(ht.cacheKey===O){k=ht,++k.usedTimes;break}}return k===void 0&&(k=new qw(o,O,b,l),m.push(k)),k}function P(b){if(--b.usedTimes===0){const O=m.indexOf(b);m[O]=m[m.length-1],m.pop(),b.destroy()}}function z(b){p.remove(b)}function F(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:L,releaseProgram:P,releaseShaderCache:z,programs:m,dispose:F}}function Qw(){let o=new WeakMap;function t(c){return o.has(c)}function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:e,remove:a,update:r,dispose:l}}function Jw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Wx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function qx(){const o=[];let t=0;const e=[],a=[],r=[];function l(){t=0,e.length=0,a.length=0,r.length=0}function c(g,v,x,E,M,S){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=E,y.renderOrder=g.renderOrder,y.z=M,y.group=S),t++,y}function f(g,v,x,E,M,S){const y=c(g,v,x,E,M,S);x.transmission>0?a.push(y):x.transparent===!0?r.push(y):e.push(y)}function p(g,v,x,E,M,S){const y=c(g,v,x,E,M,S);x.transmission>0?a.unshift(y):x.transparent===!0?r.unshift(y):e.unshift(y)}function h(g,v){e.length>1&&e.sort(g||Jw),a.length>1&&a.sort(v||Wx),r.length>1&&r.sort(v||Wx)}function m(){for(let g=t,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:a,transparent:r,init:l,push:f,unshift:p,finish:m,sort:h}}function $w(){let o=new WeakMap;function t(a,r){const l=o.get(a);let c;return l===void 0?(c=new qx,o.set(a,[c])):r>=l.length?(c=new qx,l.push(c)):c=l[r],c}function e(){o=new WeakMap}return{get:t,dispose:e}}function tC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new it,color:new fe};break;case"SpotLight":e={position:new it,direction:new it,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":e={color:new fe,position:new it,halfWidth:new it,halfHeight:new it};break}return o[t.id]=e,e}}}function eC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let nC=0;function iC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function aC(o){const t=new tC,e=eC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new it);const r=new it,l=new tn,c=new tn;function f(h){let m=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let x=0,E=0,M=0,S=0,y=0,U=0,D=0,A=0,L=0,P=0,z=0;h.sort(iC);for(let b=0,O=h.length;b<O;b++){const k=h[b],Z=k.color,et=k.intensity,ht=k.distance,rt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=Z.r*et,g+=Z.g*et,v+=Z.b*et;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],et);z++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Y=k.shadow,G=e.get(k);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,a.directionalShadow[x]=G,a.directionalShadowMap[x]=rt,a.directionalShadowMatrix[x]=k.shadow.matrix,U++}a.directional[x]=B,x++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(Z).multiplyScalar(et),B.distance=ht,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[M]=B;const Y=k.shadow;if(k.map&&(a.spotLightMap[L]=k.map,L++,Y.updateMatrices(k),k.castShadow&&P++),a.spotLightMatrix[M]=Y.matrix,k.castShadow){const G=e.get(k);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,a.spotShadow[M]=G,a.spotShadowMap[M]=rt,A++}M++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(Z).multiplyScalar(et),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[S]=B,S++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const Y=k.shadow,G=e.get(k);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,a.pointShadow[E]=G,a.pointShadowMap[E]=rt,a.pointShadowMatrix[E]=k.shadow.matrix,D++}a.point[E]=B,E++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(et),B.groundColor.copy(k.groundColor).multiplyScalar(et),a.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pt.LTC_FLOAT_1,a.rectAreaLTC2=Pt.LTC_FLOAT_2):(a.rectAreaLTC1=Pt.LTC_HALF_1,a.rectAreaLTC2=Pt.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==x||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==S||F.hemiLength!==y||F.numDirectionalShadows!==U||F.numPointShadows!==D||F.numSpotShadows!==A||F.numSpotMaps!==L||F.numLightProbes!==z)&&(a.directional.length=x,a.spot.length=M,a.rectArea.length=S,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=A+L-P,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=z,F.directionalLength=x,F.pointLength=E,F.spotLength=M,F.rectAreaLength=S,F.hemiLength=y,F.numDirectionalShadows=U,F.numPointShadows=D,F.numSpotShadows=A,F.numSpotMaps=L,F.numLightProbes=z,a.version=nC++)}function p(h,m){let g=0,v=0,x=0,E=0,M=0;const S=m.matrixWorldInverse;for(let y=0,U=h.length;y<U;y++){const D=h[y];if(D.isDirectionalLight){const A=a.directional[g];A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(S),g++}else if(D.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const A=a.rectArea[E];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(S),v++}else if(D.isHemisphereLight){const A=a.hemi[M];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:a}}function Yx(o){const t=new aC(o),e=[],a=[];function r(m){h.camera=m,e.length=0,a.length=0}function l(m){e.push(m)}function c(m){a.push(m)}function f(){t.setup(e)}function p(m){t.setupView(e,m)}const h={lightsArray:e,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function rC(o){let t=new WeakMap;function e(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new Yx(o),t.set(r,[f])):l>=c.length?(f=new Yx(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:e,dispose:a}}const sC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oC=`uniform sampler2D shadow_pass;
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
}`;function lC(o,t,e){let a=new Vm;const r=new Te,l=new Te,c=new sn,f=new A1({depthPacking:FT}),p=new R1,h={},m=e.maxTextureSize,g={[Va]:ai,[ai]:Va,[Fa]:Fa},v=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:sC,fragmentShader:oC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const E=new Ti;E.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Si(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=my;let y=this.type;this.render=function(P,z,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const b=o.getRenderTarget(),O=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Ar),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const et=y!==za&&this.type===za,ht=y===za&&this.type!==za;for(let rt=0,B=P.length;rt<B;rt++){const Y=P[rt],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ut=G.getFrameExtents();if(r.multiply(ut),l.copy(G.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(l.x=Math.floor(m/ut.x),r.x=l.x*ut.x,G.mapSize.x=l.x),r.y>m&&(l.y=Math.floor(m/ut.y),r.y=l.y*ut.y,G.mapSize.y=l.y)),G.map===null||et===!0||ht===!0){const X=this.type!==za?{minFilter:Qi,magFilter:Qi}:{};G.map!==null&&G.map.dispose(),G.map=new gs(r.x,r.y,X),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const N=G.getViewportCount();for(let X=0;X<N;X++){const ft=G.getViewport(X);c.set(l.x*ft.x,l.y*ft.y,l.x*ft.z,l.y*ft.w),Z.viewport(c),G.updateMatrices(Y,X),a=G.getFrustum(),A(z,F,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===za&&U(G,F),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,O,k)};function U(P,z){const F=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new gs(r.x,r.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(z,null,F,v,M,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(z,null,F,x,M,null)}function D(P,z,F,b){let O=null;const k=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)O=k;else if(O=F.isPointLight===!0?p:f,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=O.uuid,et=z.uuid;let ht=h[Z];ht===void 0&&(ht={},h[Z]=ht);let rt=ht[et];rt===void 0&&(rt=O.clone(),ht[et]=rt,z.addEventListener("dispose",L)),O=rt}if(O.visible=z.visible,O.wireframe=z.wireframe,b===za?O.side=z.shadowSide!==null?z.shadowSide:z.side:O.side=z.shadowSide!==null?z.shadowSide:g[z.side],O.alphaMap=z.alphaMap,O.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,O.map=z.map,O.clipShadows=z.clipShadows,O.clippingPlanes=z.clippingPlanes,O.clipIntersection=z.clipIntersection,O.displacementMap=z.displacementMap,O.displacementScale=z.displacementScale,O.displacementBias=z.displacementBias,O.wireframeLinewidth=z.wireframeLinewidth,O.linewidth=z.linewidth,F.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const Z=o.properties.get(O);Z.light=F}return O}function A(P,z,F,b,O){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===za)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const et=t.update(P),ht=P.material;if(Array.isArray(ht)){const rt=et.groups;for(let B=0,Y=rt.length;B<Y;B++){const G=rt[B],ut=ht[G.materialIndex];if(ut&&ut.visible){const N=D(P,ut,b,O);P.onBeforeShadow(o,P,z,F,et,N,G),o.renderBufferDirect(F,null,et,N,P,G),P.onAfterShadow(o,P,z,F,et,N,G)}}}else if(ht.visible){const rt=D(P,ht,b,O);P.onBeforeShadow(o,P,z,F,et,rt,null),o.renderBufferDirect(F,null,et,rt,P,null),P.onAfterShadow(o,P,z,F,et,rt,null)}}const Z=P.children;for(let et=0,ht=Z.length;et<ht;et++)A(Z[et],z,F,b,O)}function L(P){P.target.removeEventListener("dispose",L);for(const F in h){const b=h[F],O=P.target.uuid;O in b&&(b[O].dispose(),delete b[O])}}}const uC={[wp]:Cp,[Dp]:Op,[Up]:Np,[Co]:Lp,[Cp]:wp,[Op]:Dp,[Np]:Up,[Lp]:Co};function cC(o,t){function e(){let q=!1;const bt=new sn;let Ct=null;const Bt=new sn(0,0,0,0);return{setMask:function(Et){Ct!==Et&&!q&&(o.colorMask(Et,Et,Et,Et),Ct=Et)},setLocked:function(Et){q=Et},setClear:function(Et,St,Gt,ae,Ce){Ce===!0&&(Et*=ae,St*=ae,Gt*=ae),bt.set(Et,St,Gt,ae),Bt.equals(bt)===!1&&(o.clearColor(Et,St,Gt,ae),Bt.copy(bt))},reset:function(){q=!1,Ct=null,Bt.set(-1,0,0,0)}}}function a(){let q=!1,bt=!1,Ct=null,Bt=null,Et=null;return{setReversed:function(St){if(bt!==St){const Gt=t.get("EXT_clip_control");St?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=St;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(St){St?gt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(St){Ct!==St&&!q&&(o.depthMask(St),Ct=St)},setFunc:function(St){if(bt&&(St=uC[St]),Bt!==St){switch(St){case wp:o.depthFunc(o.NEVER);break;case Cp:o.depthFunc(o.ALWAYS);break;case Dp:o.depthFunc(o.LESS);break;case Co:o.depthFunc(o.LEQUAL);break;case Up:o.depthFunc(o.EQUAL);break;case Lp:o.depthFunc(o.GEQUAL);break;case Op:o.depthFunc(o.GREATER);break;case Np:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=St}},setLocked:function(St){q=St},setClear:function(St){Et!==St&&(bt&&(St=1-St),o.clearDepth(St),Et=St)},reset:function(){q=!1,Ct=null,Bt=null,Et=null,bt=!1}}}function r(){let q=!1,bt=null,Ct=null,Bt=null,Et=null,St=null,Gt=null,ae=null,Ce=null;return{setTest:function(be){q||(be?gt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(be){bt!==be&&!q&&(o.stencilMask(be),bt=be)},setFunc:function(be,Gi,gn){(Ct!==be||Bt!==Gi||Et!==gn)&&(o.stencilFunc(be,Gi,gn),Ct=be,Bt=Gi,Et=gn)},setOp:function(be,Gi,gn){(St!==be||Gt!==Gi||ae!==gn)&&(o.stencilOp(be,Gi,gn),St=be,Gt=Gi,ae=gn)},setLocked:function(be){q=be},setClear:function(be){Ce!==be&&(o.clearStencil(be),Ce=be)},reset:function(){q=!1,bt=null,Ct=null,Bt=null,Et=null,St=null,Gt=null,ae=null,Ce=null}}}const l=new e,c=new a,f=new r,p=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,U=null,D=null,A=null,L=null,P=null,z=new fe(0,0,0),F=0,b=!1,O=null,k=null,Z=null,et=null,ht=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const G=o.getParameter(o.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=Y>=2);let ut=null,N={};const X=o.getParameter(o.SCISSOR_BOX),ft=o.getParameter(o.VIEWPORT),dt=new sn().fromArray(X),vt=new sn().fromArray(ft);function wt(q,bt,Ct,Bt){const Et=new Uint8Array(4),St=o.createTexture();o.bindTexture(q,St),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Ct;Gt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return St}const J={};J[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),gt(o.DEPTH_TEST),c.setFunc(Co),ne(!1),zt(Xv),gt(o.CULL_FACE),Le(Ar);function gt(q){m[q]!==!0&&(o.enable(q),m[q]=!0)}function At(q){m[q]!==!1&&(o.disable(q),m[q]=!1)}function qt(q,bt){return g[q]!==bt?(o.bindFramebuffer(q,bt),g[q]=bt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Dt(q,bt){let Ct=x,Bt=!1;if(q){Ct=v.get(bt),Ct===void 0&&(Ct=[],v.set(bt,Ct));const Et=q.textures;if(Ct.length!==Et.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Gt=Et.length;St<Gt;St++)Ct[St]=o.COLOR_ATTACHMENT0+St;Ct.length=Et.length,Bt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Ct)}function le(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const We={[os]:o.FUNC_ADD,[fT]:o.FUNC_SUBTRACT,[hT]:o.FUNC_REVERSE_SUBTRACT};We[dT]=o.MIN,We[pT]=o.MAX;const V={[mT]:o.ZERO,[_T]:o.ONE,[gT]:o.SRC_COLOR,[Ap]:o.SRC_ALPHA,[ET]:o.SRC_ALPHA_SATURATE,[ST]:o.DST_COLOR,[xT]:o.DST_ALPHA,[vT]:o.ONE_MINUS_SRC_COLOR,[Rp]:o.ONE_MINUS_SRC_ALPHA,[MT]:o.ONE_MINUS_DST_COLOR,[yT]:o.ONE_MINUS_DST_ALPHA,[TT]:o.CONSTANT_COLOR,[bT]:o.ONE_MINUS_CONSTANT_COLOR,[AT]:o.CONSTANT_ALPHA,[RT]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(q,bt,Ct,Bt,Et,St,Gt,ae,Ce,be){if(q===Ar){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(gt(o.BLEND),M=!0),q!==cT){if(q!==S||be!==b){if((y!==os||A!==os)&&(o.blendEquation(o.FUNC_ADD),y=os,A=os),be)switch(q){case To:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hf:o.blendFunc(o.ONE,o.ONE);break;case Wv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case To:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case hf:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Wv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,D=null,L=null,P=null,z.set(0,0,0),F=0,S=q,b=be}return}Et=Et||bt,St=St||Ct,Gt=Gt||Bt,(bt!==y||Et!==A)&&(o.blendEquationSeparate(We[bt],We[Et]),y=bt,A=Et),(Ct!==U||Bt!==D||St!==L||Gt!==P)&&(o.blendFuncSeparate(V[Ct],V[Bt],V[St],V[Gt]),U=Ct,D=Bt,L=St,P=Gt),(ae.equals(z)===!1||Ce!==F)&&(o.blendColor(ae.r,ae.g,ae.b,Ce),z.copy(ae),F=Ce),S=q,b=!1}function re(q,bt){q.side===Fa?At(o.CULL_FACE):gt(o.CULL_FACE);let Ct=q.side===ai;bt&&(Ct=!Ct),ne(Ct),q.blending===To&&q.transparent===!1?Le(Ar):Le(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const Bt=q.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Vt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(q){O!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),O=q)}function zt(q){q!==oT?(gt(o.CULL_FACE),q!==k&&(q===Xv?o.cullFace(o.BACK):q===lT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),k=q}function Ve(q){q!==Z&&(B&&o.lineWidth(q),Z=q)}function Vt(q,bt,Ct){q?(gt(o.POLYGON_OFFSET_FILL),(et!==bt||ht!==Ct)&&(o.polygonOffset(bt,Ct),et=bt,ht=Ct)):At(o.POLYGON_OFFSET_FILL)}function se(q){q?gt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Ze(q){q===void 0&&(q=o.TEXTURE0+rt-1),ut!==q&&(o.activeTexture(q),ut=q)}function Ke(q,bt,Ct){Ct===void 0&&(ut===null?Ct=o.TEXTURE0+rt-1:Ct=ut);let Bt=N[Ct];Bt===void 0&&(Bt={type:void 0,texture:void 0},N[Ct]=Bt),(Bt.type!==q||Bt.texture!==bt)&&(ut!==Ct&&(o.activeTexture(Ct),ut=Ct),o.bindTexture(q,bt||J[q]),Bt.type=q,Bt.texture=bt)}function I(){const q=N[ut];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(q){dt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),dt.copy(q))}function Zt(q){vt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),vt.copy(q))}function kt(q,bt){let Ct=h.get(bt);Ct===void 0&&(Ct=new WeakMap,h.set(bt,Ct));let Bt=Ct.get(q);Bt===void 0&&(Bt=o.getUniformBlockIndex(bt,q.name),Ct.set(q,Bt))}function Ut(q,bt){const Bt=h.get(bt).get(q);p.get(bt)!==Bt&&(o.uniformBlockBinding(bt,Bt,q.__bindingPointIndex),p.set(bt,Bt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ut=null,N={},g={},v=new WeakMap,x=[],E=null,M=!1,S=null,y=null,U=null,D=null,A=null,L=null,P=null,z=new fe(0,0,0),F=0,b=!1,O=null,k=null,Z=null,et=null,ht=null,dt.set(0,0,o.canvas.width,o.canvas.height),vt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:gt,disable:At,bindFramebuffer:qt,drawBuffers:Dt,useProgram:le,setBlending:Le,setMaterial:re,setFlipSided:ne,setCullFace:zt,setLineWidth:Ve,setPolygonOffset:Vt,setScissorTest:se,activeTexture:Ze,bindTexture:Ke,unbindTexture:I,compressedTexImage2D:R,compressedTexImage3D:nt,texImage2D:Yt,texImage3D:Mt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:It,scissor:Ot,viewport:Zt,reset:oe}}function fC(o,t,e,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Te,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,R){return x?new OffscreenCanvas(I,R):ru("canvas")}function M(I,R,nt){let pt=1;const xt=Ke(I);if((xt.width>nt||xt.height>nt)&&(pt=nt/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ct=Math.floor(pt*xt.width),It=Math.floor(pt*xt.height);g===void 0&&(g=E(ct,It));const Rt=R?E(ct,It):g;return Rt.width=ct,Rt.height=It,Rt.getContext("2d").drawImage(I,0,0,ct,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+It+")."),Rt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),I;return I}function S(I){return I.generateMipmaps}function y(I){o.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(I,R,nt,pt,xt=!1){if(I!==null){if(o[I]!==void 0)return o[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ct=R;if(R===o.RED&&(nt===o.FLOAT&&(ct=o.R32F),nt===o.HALF_FLOAT&&(ct=o.R16F),nt===o.UNSIGNED_BYTE&&(ct=o.R8)),R===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.R8UI),nt===o.UNSIGNED_SHORT&&(ct=o.R16UI),nt===o.UNSIGNED_INT&&(ct=o.R32UI),nt===o.BYTE&&(ct=o.R8I),nt===o.SHORT&&(ct=o.R16I),nt===o.INT&&(ct=o.R32I)),R===o.RG&&(nt===o.FLOAT&&(ct=o.RG32F),nt===o.HALF_FLOAT&&(ct=o.RG16F),nt===o.UNSIGNED_BYTE&&(ct=o.RG8)),R===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),nt===o.UNSIGNED_INT&&(ct=o.RG32UI),nt===o.BYTE&&(ct=o.RG8I),nt===o.SHORT&&(ct=o.RG16I),nt===o.INT&&(ct=o.RG32I)),R===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),nt===o.UNSIGNED_INT&&(ct=o.RGB32UI),nt===o.BYTE&&(ct=o.RGB8I),nt===o.SHORT&&(ct=o.RGB16I),nt===o.INT&&(ct=o.RGB32I)),R===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),nt===o.BYTE&&(ct=o.RGBA8I),nt===o.SHORT&&(ct=o.RGBA16I),nt===o.INT&&(ct=o.RGBA32I)),R===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),R===o.RGBA){const It=xt?pf:ye.getTransfer(pt);nt===o.FLOAT&&(ct=o.RGBA32F),nt===o.HALF_FLOAT&&(ct=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ct=It===Ie?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(I,R){let nt;return I?R===null||R===_s||R===nu?nt=o.DEPTH24_STENCIL8:R===Ha?nt=o.DEPTH32F_STENCIL8:R===eu&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===_s||R===nu?nt=o.DEPTH_COMPONENT24:R===Ha?nt=o.DEPTH_COMPONENT32F:R===eu&&(nt=o.DEPTH_COMPONENT16),nt}function L(I,R){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Qi&&I.minFilter!==ua?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function P(I){const R=I.target;R.removeEventListener("dispose",P),F(R),R.isVideoTexture&&m.delete(R)}function z(I){const R=I.target;R.removeEventListener("dispose",z),O(R)}function F(I){const R=a.get(I);if(R.__webglInit===void 0)return;const nt=I.source,pt=v.get(nt);if(pt){const xt=pt[R.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&b(I),Object.keys(pt).length===0&&v.delete(nt)}a.remove(I)}function b(I){const R=a.get(I);o.deleteTexture(R.__webglTexture);const nt=I.source,pt=v.get(nt);delete pt[R.__cacheKey],c.memory.textures--}function O(I){const R=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let xt=0;xt<R.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(R.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)o.deleteFramebuffer(R.__webglFramebuffer[pt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const nt=I.textures;for(let pt=0,xt=nt.length;pt<xt;pt++){const ct=a.get(nt[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),a.remove(nt[pt])}a.remove(I)}let k=0;function Z(){k=0}function et(){const I=k;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),k+=1,I}function ht(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function rt(I,R){const nt=a.get(I);if(I.isVideoTexture&&se(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&nt.__version!==I.version){const pt=I.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(nt,I,R);return}}else I.isExternalTexture&&(nt.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+R)}function B(I,R){const nt=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){J(nt,I,R);return}e.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+R)}function Y(I,R){const nt=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&nt.__version!==I.version){J(nt,I,R);return}e.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+R)}function G(I,R){const nt=a.get(I);if(I.version>0&&nt.__version!==I.version){gt(nt,I,R);return}e.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+R)}const ut={[df]:o.REPEAT,[us]:o.CLAMP_TO_EDGE,[Ip]:o.MIRRORED_REPEAT},N={[Qi]:o.NEAREST,[IT]:o.NEAREST_MIPMAP_NEAREST,[wc]:o.NEAREST_MIPMAP_LINEAR,[ua]:o.LINEAR,[Bd]:o.LINEAR_MIPMAP_NEAREST,[cs]:o.LINEAR_MIPMAP_LINEAR},X={[GT]:o.NEVER,[YT]:o.ALWAYS,[VT]:o.LESS,[by]:o.LEQUAL,[kT]:o.EQUAL,[qT]:o.GEQUAL,[XT]:o.GREATER,[WT]:o.NOTEQUAL};function ft(I,R){if(R.type===Ha&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===ua||R.magFilter===Bd||R.magFilter===wc||R.magFilter===cs||R.minFilter===ua||R.minFilter===Bd||R.minFilter===wc||R.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ut[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ut[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ut[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,N[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,N[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,X[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Qi||R.minFilter!==wc&&R.minFilter!==cs||R.type===Ha&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function dt(I,R){let nt=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",P));const pt=R.source;let xt=v.get(pt);xt===void 0&&(xt={},v.set(pt,xt));const ct=ht(R);if(ct!==I.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),xt[ct].usedTimes++;const It=xt[I.__cacheKey];It!==void 0&&(xt[I.__cacheKey].usedTimes--,It.usedTimes===0&&b(R)),I.__cacheKey=ct,I.__webglTexture=xt[ct].texture}return nt}function vt(I,R,nt){return Math.floor(Math.floor(I/nt)/R)}function wt(I,R,nt,pt){const ct=I.updateRanges;if(ct.length===0)e.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,nt,pt,R.data);else{ct.sort((Mt,Ot)=>Mt.start-Ot.start);let It=0;for(let Mt=1;Mt<ct.length;Mt++){const Ot=ct[It],Zt=ct[Mt],kt=Ot.start+Ot.count,Ut=vt(Zt.start,R.width,4),oe=vt(Ot.start,R.width,4);Zt.start<=kt+1&&Ut===oe&&vt(Zt.start+Zt.count-1,R.width,4)===Ut?Ot.count=Math.max(Ot.count,Zt.start+Zt.count-Ot.start):(++It,ct[It]=Zt)}ct.length=It+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Mt=0,Ot=ct.length;Mt<Ot;Mt++){const Zt=ct[Mt],kt=Math.floor(Zt.start/4),Ut=Math.ceil(Zt.count/4),oe=kt%R.width,q=Math.floor(kt/R.width),bt=Ut,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),e.texSubImage2D(o.TEXTURE_2D,0,oe,q,bt,Ct,nt,pt,R.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function J(I,R,nt){let pt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=dt(I,R),ct=R.source;e.bindTexture(pt,I.__webglTexture,o.TEXTURE0+nt);const It=a.get(ct);if(ct.version!==It.__version||xt===!0){e.activeTexture(o.TEXTURE0+nt);const Rt=ye.getPrimaries(ye.workingColorSpace),Xt=R.colorSpace===Mr?null:ye.getPrimaries(R.colorSpace),Yt=R.colorSpace===Mr||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Mt=M(R.image,!1,r.maxTextureSize);Mt=Ze(R,Mt);const Ot=l.convert(R.format,R.colorSpace),Zt=l.convert(R.type);let kt=D(R.internalFormat,Ot,Zt,R.colorSpace,R.isVideoTexture);ft(pt,R);let Ut;const oe=R.mipmaps,q=R.isVideoTexture!==!0,bt=It.__version===void 0||xt===!0,Ct=ct.dataReady,Bt=L(R,Mt);if(R.isDepthTexture)kt=A(R.format===au,R.type),bt&&(q?e.texStorage2D(o.TEXTURE_2D,1,kt,Mt.width,Mt.height):e.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Ot,Zt,null));else if(R.isDataTexture)if(oe.length>0){q&&bt&&e.texStorage2D(o.TEXTURE_2D,Bt,kt,oe[0].width,oe[0].height);for(let Et=0,St=oe.length;Et<St;Et++)Ut=oe[Et],q?Ct&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ut.width,Ut.height,Ot,Zt,Ut.data):e.texImage2D(o.TEXTURE_2D,Et,kt,Ut.width,Ut.height,0,Ot,Zt,Ut.data);R.generateMipmaps=!1}else q?(bt&&e.texStorage2D(o.TEXTURE_2D,Bt,kt,Mt.width,Mt.height),Ct&&wt(R,Mt,Ot,Zt)):e.texImage2D(o.TEXTURE_2D,0,kt,Mt.width,Mt.height,0,Ot,Zt,Mt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&bt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,kt,oe[0].width,oe[0].height,Mt.depth);for(let Et=0,St=oe.length;Et<St;Et++)if(Ut=oe[Et],R.format!==Ki)if(Ot!==null)if(q){if(Ct)if(R.layerUpdates.size>0){const Gt=Ex(Ut.width,Ut.height,R.format,R.type);for(const ae of R.layerUpdates){const Ce=Ut.data.subarray(ae*Gt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Gt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,Ut.width,Ut.height,1,Ot,Ce)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ut.width,Ut.height,Mt.depth,Ot,Ut.data)}else e.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ct&&e.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ut.width,Ut.height,Mt.depth,Ot,Zt,Ut.data):e.texImage3D(o.TEXTURE_2D_ARRAY,Et,kt,Ut.width,Ut.height,Mt.depth,0,Ot,Zt,Ut.data)}else{q&&bt&&e.texStorage2D(o.TEXTURE_2D,Bt,kt,oe[0].width,oe[0].height);for(let Et=0,St=oe.length;Et<St;Et++)Ut=oe[Et],R.format!==Ki?Ot!==null?q?Ct&&e.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ut.width,Ut.height,Ot,Ut.data):e.compressedTexImage2D(o.TEXTURE_2D,Et,kt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ct&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ut.width,Ut.height,Ot,Zt,Ut.data):e.texImage2D(o.TEXTURE_2D,Et,kt,Ut.width,Ut.height,0,Ot,Zt,Ut.data)}else if(R.isDataArrayTexture)if(q){if(bt&&e.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,kt,Mt.width,Mt.height,Mt.depth),Ct)if(R.layerUpdates.size>0){const Et=Ex(Mt.width,Mt.height,R.format,R.type);for(const St of R.layerUpdates){const Gt=Mt.data.subarray(St*Et/Mt.data.BYTES_PER_ELEMENT,(St+1)*Et/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,Mt.width,Mt.height,1,Ot,Zt,Gt)}R.clearLayerUpdates()}else e.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,Zt,Mt.data)}else e.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,Mt.width,Mt.height,Mt.depth,0,Ot,Zt,Mt.data);else if(R.isData3DTexture)q?(bt&&e.texStorage3D(o.TEXTURE_3D,Bt,kt,Mt.width,Mt.height,Mt.depth),Ct&&e.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ot,Zt,Mt.data)):e.texImage3D(o.TEXTURE_3D,0,kt,Mt.width,Mt.height,Mt.depth,0,Ot,Zt,Mt.data);else if(R.isFramebufferTexture){if(bt)if(q)e.texStorage2D(o.TEXTURE_2D,Bt,kt,Mt.width,Mt.height);else{let Et=Mt.width,St=Mt.height;for(let Gt=0;Gt<Bt;Gt++)e.texImage2D(o.TEXTURE_2D,Gt,kt,Et,St,0,Ot,Zt,null),Et>>=1,St>>=1}}else if(oe.length>0){if(q&&bt){const Et=Ke(oe[0]);e.texStorage2D(o.TEXTURE_2D,Bt,kt,Et.width,Et.height)}for(let Et=0,St=oe.length;Et<St;Et++)Ut=oe[Et],q?Ct&&e.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ot,Zt,Ut):e.texImage2D(o.TEXTURE_2D,Et,kt,Ot,Zt,Ut);R.generateMipmaps=!1}else if(q){if(bt){const Et=Ke(Mt);e.texStorage2D(o.TEXTURE_2D,Bt,kt,Et.width,Et.height)}Ct&&e.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,Zt,Mt)}else e.texImage2D(o.TEXTURE_2D,0,kt,Ot,Zt,Mt);S(R)&&y(pt),It.__version=ct.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function gt(I,R,nt){if(R.image.length!==6)return;const pt=dt(I,R),xt=R.source;e.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+nt);const ct=a.get(xt);if(xt.version!==ct.__version||pt===!0){e.activeTexture(o.TEXTURE0+nt);const It=ye.getPrimaries(ye.workingColorSpace),Rt=R.colorSpace===Mr?null:ye.getPrimaries(R.colorSpace),Xt=R.colorSpace===Mr||It===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Yt=R.isCompressedTexture||R.image[0].isCompressedTexture,Mt=R.image[0]&&R.image[0].isDataTexture,Ot=[];for(let St=0;St<6;St++)!Yt&&!Mt?Ot[St]=M(R.image[St],!0,r.maxCubemapSize):Ot[St]=Mt?R.image[St].image:R.image[St],Ot[St]=Ze(R,Ot[St]);const Zt=Ot[0],kt=l.convert(R.format,R.colorSpace),Ut=l.convert(R.type),oe=D(R.internalFormat,kt,Ut,R.colorSpace),q=R.isVideoTexture!==!0,bt=ct.__version===void 0||pt===!0,Ct=xt.dataReady;let Bt=L(R,Zt);ft(o.TEXTURE_CUBE_MAP,R);let Et;if(Yt){q&&bt&&e.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,Zt.width,Zt.height);for(let St=0;St<6;St++){Et=Ot[St].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];R.format!==Ki?kt!==null?q?Ct&&e.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,ae.width,ae.height,kt,ae.data):e.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ct&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,ae.width,ae.height,kt,Ut,ae.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,oe,ae.width,ae.height,0,kt,Ut,ae.data)}}}else{if(Et=R.mipmaps,q&&bt){Et.length>0&&Bt++;const St=Ke(Ot[0]);e.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,St.width,St.height)}for(let St=0;St<6;St++)if(Mt){q?Ct&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ot[St].width,Ot[St].height,kt,Ut,Ot[St].data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,oe,Ot[St].width,Ot[St].height,0,kt,Ut,Ot[St].data);for(let Gt=0;Gt<Et.length;Gt++){const Ce=Et[Gt].image[St].image;q?Ct&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,Ce.width,Ce.height,kt,Ut,Ce.data):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,oe,Ce.width,Ce.height,0,kt,Ut,Ce.data)}}else{q?Ct&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,kt,Ut,Ot[St]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,oe,kt,Ut,Ot[St]);for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];q?Ct&&e.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,kt,Ut,ae.image[St]):e.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,oe,kt,Ut,ae.image[St])}}}S(R)&&y(o.TEXTURE_CUBE_MAP),ct.__version=xt.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function At(I,R,nt,pt,xt,ct){const It=l.convert(nt.format,nt.colorSpace),Rt=l.convert(nt.type),Xt=D(nt.internalFormat,It,Rt,nt.colorSpace),Yt=a.get(R),Mt=a.get(nt);if(Mt.__renderTarget=R,!Yt.__hasExternalTextures){const Ot=Math.max(1,R.width>>ct),Zt=Math.max(1,R.height>>ct);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?e.texImage3D(xt,ct,Xt,Ot,Zt,R.depth,0,It,Rt,null):e.texImage2D(xt,ct,Xt,Ot,Zt,0,It,Rt,null)}e.bindFramebuffer(o.FRAMEBUFFER,I),Vt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,Mt.__webglTexture,0,Ve(R)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,Mt.__webglTexture,ct),e.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(I,R,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const pt=R.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ct=A(R.stencilBuffer,xt),It=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ve(R);Vt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ct,R.width,R.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ct,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ct,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,It,o.RENDERBUFFER,I)}else{const pt=R.textures;for(let xt=0;xt<pt.length;xt++){const ct=pt[xt],It=l.convert(ct.format,ct.colorSpace),Rt=l.convert(ct.type),Xt=D(ct.internalFormat,It,Rt,ct.colorSpace),Yt=Ve(R);nt&&Vt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Xt,R.width,R.height):Vt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Xt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Dt(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(R.depthTexture);pt.__renderTarget=R,(!pt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),rt(R.depthTexture,0);const xt=pt.__webglTexture,ct=Ve(R);if(R.depthTexture.format===iu)Vt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(R.depthTexture.format===au)Vt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function le(I){const R=a.get(I),nt=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const pt=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const xt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),R.__depthDisposeCallback=xt}R.__boundDepthTexture=pt}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=I.texture.mipmaps;pt&&pt.length>0?Dt(R.__webglFramebuffer[0],I):Dt(R.__webglFramebuffer,I)}else if(nt){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=o.createRenderbuffer(),qt(R.__webglDepthbuffer[pt],I,!1);else{const xt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}else{const pt=I.texture.mipmaps;if(pt&&pt.length>0?e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),qt(R.__webglDepthbuffer,I,!1);else{const xt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}e.bindFramebuffer(o.FRAMEBUFFER,null)}function We(I,R,nt){const pt=a.get(I);R!==void 0&&At(pt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&le(I)}function V(I){const R=I.texture,nt=a.get(I),pt=a.get(R);I.addEventListener("dispose",z);const xt=I.textures,ct=I.isWebGLCubeRenderTarget===!0,It=xt.length>1;if(It||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=R.version,c.memory.textures++),ct){nt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0){nt.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<R.mipmaps.length;Xt++)nt.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Rt=0;Rt<R.mipmaps.length;Rt++)nt.__webglFramebuffer[Rt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(It)for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const Yt=a.get(xt[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&Vt(I)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const Xt=xt[Rt];nt.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt]);const Yt=l.convert(Xt.format,Xt.colorSpace),Mt=l.convert(Xt.type),Ot=D(Xt.internalFormat,Yt,Mt,Xt.colorSpace,I.isXRRenderTarget===!0),Zt=Ve(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ot,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),qt(nt.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){e.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ft(o.TEXTURE_CUBE_MAP,R);for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Xt=0;Xt<R.mipmaps.length;Xt++)At(nt.__webglFramebuffer[Rt][Xt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else At(nt.__webglFramebuffer[Rt],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(R)&&y(o.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let Rt=0,Xt=xt.length;Rt<Xt;Rt++){const Yt=xt[Rt],Mt=a.get(Yt);let Ot=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ot=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Ot,Mt.__webglTexture),ft(Ot,Yt),At(nt.__webglFramebuffer,I,Yt,o.COLOR_ATTACHMENT0+Rt,Ot,0),S(Yt)&&y(Ot)}e.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Rt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),e.bindTexture(Rt,pt.__webglTexture),ft(Rt,R),R.mipmaps&&R.mipmaps.length>0)for(let Xt=0;Xt<R.mipmaps.length;Xt++)At(nt.__webglFramebuffer[Xt],I,R,o.COLOR_ATTACHMENT0,Rt,Xt);else At(nt.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,Rt,0);S(R)&&y(Rt),e.unbindTexture()}I.depthBuffer&&le(I)}function Le(I){const R=I.textures;for(let nt=0,pt=R.length;nt<pt;nt++){const xt=R[nt];if(S(xt)){const ct=U(I),It=a.get(xt).__webglTexture;e.bindTexture(ct,It),y(ct),e.unbindTexture()}}}const re=[],ne=[];function zt(I){if(I.samples>0){if(Vt(I)===!1){const R=I.textures,nt=I.width,pt=I.height;let xt=o.COLOR_BUFFER_BIT;const ct=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,It=a.get(I),Rt=R.length>1;if(Rt)for(let Yt=0;Yt<R.length;Yt++)e.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),e.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);e.bindFramebuffer(o.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Xt=I.texture.mipmaps;Xt&&Xt.length>0?e.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Yt=0;Yt<R.length;Yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Mt=a.get(R[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,xt,o.NEAREST),p===!0&&(re.length=0,ne.length=0,re.push(o.COLOR_ATTACHMENT0+Yt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(re.push(ct),ne.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(o.READ_FRAMEBUFFER,null),e.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<R.length;Yt++){e.bindFramebuffer(o.FRAMEBUFFER,It.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,It.__webglColorRenderbuffer[Yt]);const Mt=a.get(R[Yt]).__webglTexture;e.bindFramebuffer(o.FRAMEBUFFER,It.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Mt,0)}e.bindFramebuffer(o.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Ve(I){return Math.min(r.maxSamples,I.samples)}function Vt(I){const R=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function se(I){const R=c.render.frame;m.get(I)!==R&&(m.set(I,R),I.update())}function Ze(I,R){const nt=I.colorSpace,pt=I.format,xt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||nt!==Lo&&nt!==Mr&&(ye.getTransfer(nt)===Ie?(pt!==Ki||xt!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),R}function Ke(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=et,this.resetTextureUnits=Z,this.setTexture2D=rt,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=We,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Vt}function hC(o,t){function e(a,r=Mr){let l;const c=ye.getTransfer(r);if(a===ha)return o.UNSIGNED_BYTE;if(a===Nm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Pm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===xy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===yy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===gy)return o.BYTE;if(a===vy)return o.SHORT;if(a===eu)return o.UNSIGNED_SHORT;if(a===Om)return o.INT;if(a===_s)return o.UNSIGNED_INT;if(a===Ha)return o.FLOAT;if(a===pu)return o.HALF_FLOAT;if(a===Sy)return o.ALPHA;if(a===My)return o.RGB;if(a===Ki)return o.RGBA;if(a===iu)return o.DEPTH_COMPONENT;if(a===au)return o.DEPTH_STENCIL;if(a===Ey)return o.RED;if(a===zm)return o.RED_INTEGER;if(a===Ty)return o.RG;if(a===Im)return o.RG_INTEGER;if(a===Bm)return o.RGBA_INTEGER;if(a===ef||a===nf||a===af||a===rf)if(c===Ie)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===ef)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===nf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===rf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===ef)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===nf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===af)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===rf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Bp||a===Fp||a===Hp||a===Gp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Bp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Vp||a===kp||a===Xp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Vp||a===kp)return c===Ie?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Xp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Wp||a===qp||a===Yp||a===jp||a===Zp||a===Kp||a===Qp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Wp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===qp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===jp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$p)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tm)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===em)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===nm)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===im)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===am)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===rm||a===sm||a===om)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===rm)return c===Ie?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===om)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===lm||a===um||a===cm||a===fm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===lm)return l.COMPRESSED_RED_RGTC1_EXT;if(a===um)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===nu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:e}}const dC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pC=`
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

}`;class mC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const a=new Iy(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,a=new ka({vertexShader:dC,fragmentShader:pC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Si(new Af(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _C extends Ho{constructor(t,e){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,h=null,m=null,g=null,v=null,x=null,E=null;const M=typeof XRWebGLBinding<"u",S=new mC,y={},U=e.getContextAttributes();let D=null,A=null;const L=[],P=[],z=new Te;let F=null;const b=new Ii;b.viewport=new sn;const O=new Ii;O.viewport=new sn;const k=[b,O],Z=new z1;let et=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let gt=L[J];return gt===void 0&&(gt=new op,L[J]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(J){let gt=L[J];return gt===void 0&&(gt=new op,L[J]=gt),gt.getGripSpace()},this.getHand=function(J){let gt=L[J];return gt===void 0&&(gt=new op,L[J]=gt),gt.getHandSpace()};function rt(J){const gt=P.indexOf(J.inputSource);if(gt===-1)return;const At=L[gt];At!==void 0&&(At.update(J.inputSource,J.frame,h||c),At.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){r.removeEventListener("select",rt),r.removeEventListener("selectstart",rt),r.removeEventListener("selectend",rt),r.removeEventListener("squeeze",rt),r.removeEventListener("squeezestart",rt),r.removeEventListener("squeezeend",rt),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",Y);for(let J=0;J<L.length;J++){const gt=P[J];gt!==null&&(P[J]=null,L[J].disconnect(gt))}et=null,ht=null,S.reset();for(const J in y)delete y[J];t.setRenderTarget(D),x=null,v=null,g=null,r=null,A=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(D=t.getRenderTarget(),r.addEventListener("select",rt),r.addEventListener("selectstart",rt),r.addEventListener("selectend",rt),r.addEventListener("squeeze",rt),r.addEventListener("squeezestart",rt),r.addEventListener("squeezeend",rt),r.addEventListener("end",B),r.addEventListener("inputsourceschange",Y),U.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(z),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,qt=null,Dt=null;U.depth&&(Dt=U.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=U.stencil?au:iu,qt=U.stencil?nu:_s);const le={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(le),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new gs(v.textureWidth,v.textureHeight,{format:Ki,type:ha,depthTexture:new zy(v.textureWidth,v.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(r,e,At),r.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new gs(x.framebufferWidth,x.framebufferHeight,{format:Ki,type:ha,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await r.requestReferenceSpace(f),wt.setContext(r),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(J){for(let gt=0;gt<J.removed.length;gt++){const At=J.removed[gt],qt=P.indexOf(At);qt>=0&&(P[qt]=null,L[qt].disconnect(At))}for(let gt=0;gt<J.added.length;gt++){const At=J.added[gt];let qt=P.indexOf(At);if(qt===-1){for(let le=0;le<L.length;le++)if(le>=P.length){P.push(At),qt=le;break}else if(P[le]===null){P[le]=At,qt=le;break}if(qt===-1)break}const Dt=L[qt];Dt&&Dt.connect(At)}}const G=new it,ut=new it;function N(J,gt,At){G.setFromMatrixPosition(gt.matrixWorld),ut.setFromMatrixPosition(At.matrixWorld);const qt=G.distanceTo(ut),Dt=gt.projectionMatrix.elements,le=At.projectionMatrix.elements,We=Dt[14]/(Dt[10]-1),V=Dt[14]/(Dt[10]+1),Le=(Dt[9]+1)/Dt[5],re=(Dt[9]-1)/Dt[5],ne=(Dt[8]-1)/Dt[0],zt=(le[8]+1)/le[0],Ve=We*ne,Vt=We*zt,se=qt/(-ne+zt),Ze=se*-ne;if(gt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ze),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Ke=We+se,I=V+se,R=Ve-Ze,nt=Vt+(qt-Ze),pt=Le*V/I*Ke,xt=re*V/I*Ke;J.projectionMatrix.makePerspective(R,nt,pt,xt,Ke,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function X(J,gt){gt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(gt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let gt=J.near,At=J.far;S.texture!==null&&(S.depthNear>0&&(gt=S.depthNear),S.depthFar>0&&(At=S.depthFar)),Z.near=O.near=b.near=gt,Z.far=O.far=b.far=At,(et!==Z.near||ht!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),et=Z.near,ht=Z.far),Z.layers.mask=J.layers.mask|6,b.layers.mask=Z.layers.mask&3,O.layers.mask=Z.layers.mask&5;const qt=J.parent,Dt=Z.cameras;X(Z,qt);for(let le=0;le<Dt.length;le++)X(Dt[le],qt);Dt.length===2?N(Z,b,O):Z.projectionMatrix.copy(b.projectionMatrix),ft(J,Z,qt)};function ft(J,gt,At){At===null?J.matrix.copy(gt.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(gt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(gt.projectionMatrix),J.projectionMatrixInverse.copy(gt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hm*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(J){return y[J]};let dt=null;function vt(J,gt){if(m=gt.getViewerPose(h||c),E=gt,m!==null){const At=m.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let qt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,qt=!0);for(let V=0;V<At.length;V++){const Le=At[V];let re=null;if(x!==null)re=x.getViewport(Le);else{const zt=g.getViewSubImage(v,Le);re=zt.viewport,V===0&&(t.setRenderTargetTextures(A,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(A))}let ne=k[V];ne===void 0&&(ne=new Ii,ne.layers.enable(V),ne.viewport=new sn,k[V]=ne),ne.matrix.fromArray(Le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(re.x,re.y,re.width,re.height),V===0&&(Z.matrix.copy(ne.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),qt===!0&&Z.cameras.push(ne)}const Dt=r.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const V=g.getDepthInformation(At[0]);V&&V.isValid&&V.texture&&S.init(V,r.renderState)}if(Dt&&Dt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let V=0;V<At.length;V++){const Le=At[V].camera;if(Le){let re=y[Le];re||(re=new Iy,y[Le]=re);const ne=g.getCameraImage(Le);re.sourceTexture=ne}}}}for(let At=0;At<L.length;At++){const qt=P[At],Dt=L[At];qt!==null&&Dt!==void 0&&Dt.update(qt,gt,h||c)}dt&&dt(J,gt),gt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:gt}),E=null}const wt=new Xy;wt.setAnimationLoop(vt),this.setAnimationLoop=function(J){dt=J},this.dispose=function(){}}}const es=new Ji,gC=new tn;function vC(o,t){function e(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,Oy(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function r(S,y,U,D,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),M(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,U,D):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,e(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ai&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,e(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ai&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,e(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,e(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const U=t.get(y),D=U.envMap,A=U.envMapRotation;D&&(S.envMap.value=D,es.copy(A),es.x*=-1,es.y*=-1,es.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),S.envMapRotation.value.setFromMatrix4(gC.makeRotationFromEuler(es)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,U,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*U,S.scale.value=D*.5,y.map&&(S.map.value=y.map,e(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,e(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,e(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,U){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ai&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function M(S,y){const U=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function xC(o,t,e,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,D){const A=D.program;a.uniformBlockBinding(U,A)}function h(U,D){let A=r[U.id];A===void 0&&(E(U),A=m(U),r[U.id]=A,U.addEventListener("dispose",S));const L=D.program;a.updateUBOMapping(U,L);const P=t.render.frame;l[U.id]!==P&&(v(U),l[U.id]=P)}function m(U){const D=g();U.__bindingPointIndex=D;const A=o.createBuffer(),L=U.__size,P=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,L,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,A),A}function g(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const D=r[U.id],A=U.uniforms,L=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let P=0,z=A.length;P<z;P++){const F=Array.isArray(A[P])?A[P]:[A[P]];for(let b=0,O=F.length;b<O;b++){const k=F[b];if(x(k,P,b,L)===!0){const Z=k.__offset,et=Array.isArray(k.value)?k.value:[k.value];let ht=0;for(let rt=0;rt<et.length;rt++){const B=et[rt],Y=M(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Z+ht,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,ht),ht+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,k.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(U,D,A,L){const P=U.value,z=D+"_"+A;if(L[z]===void 0)return typeof P=="number"||typeof P=="boolean"?L[z]=P:L[z]=P.clone(),!0;{const F=L[z];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return L[z]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function E(U){const D=U.uniforms;let A=0;const L=16;for(let z=0,F=D.length;z<F;z++){const b=Array.isArray(D[z])?D[z]:[D[z]];for(let O=0,k=b.length;O<k;O++){const Z=b[O],et=Array.isArray(Z.value)?Z.value:[Z.value];for(let ht=0,rt=et.length;ht<rt;ht++){const B=et[ht],Y=M(B),G=A%L,ut=G%Y.boundary,N=G+ut;A+=ut,N!==0&&L-N<Y.storage&&(A+=L-N),Z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=Y.storage}}}const P=A%L;return P>0&&(A+=L-P),U.__size=A,U.__cache={},this}function M(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),D}function S(U){const D=U.target;D.removeEventListener("dispose",S);const A=c.indexOf(D.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(r[D.id]),delete r[D.id],delete l[D.id]}function y(){for(const U in r)o.deleteBuffer(r[U]);c=[],r={},l={}}return{bind:p,update:h,dispose:y}}class yC{constructor(t={}){const{canvas:e=ZT(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,y=null;const U=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Nn;let P=0,z=0,F=null,b=-1,O=null;const k=new sn,Z=new sn;let et=null;const ht=new fe(0);let rt=0,B=e.width,Y=e.height,G=1,ut=null,N=null;const X=new sn(0,0,B,Y),ft=new sn(0,0,B,Y);let dt=!1;const vt=new Vm;let wt=!1,J=!1;const gt=new tn,At=new it,qt=new sn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function We(){return F===null?G:1}let V=a;function Le(C,j){return e.getContext(C,j)}try{const C={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Um}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),V===null){const j="webgl2";if(V=Le(j,C),V===null)throw Le(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let re,ne,zt,Ve,Vt,se,Ze,Ke,I,R,nt,pt,xt,ct,It,Rt,Xt,Yt,Mt,Ot,Zt,kt,Ut,oe;function q(){re=new DR(V),re.init(),kt=new hC(V,re),ne=new ER(V,re,t,kt),zt=new cC(V,re),ne.reversedDepthBuffer&&v&&zt.buffers.depth.setReversed(!0),Ve=new OR(V),Vt=new Qw,se=new fC(V,re,zt,Vt,ne,kt,Ve),Ze=new bR(A),Ke=new CR(A),I=new F1(V),Ut=new SR(V,I),R=new UR(V,I,Ve,Ut),nt=new PR(V,R,I,Ve),Mt=new NR(V,ne,se),Rt=new TR(Vt),pt=new Kw(A,Ze,Ke,re,ne,Ut,Rt),xt=new vC(A,Vt),ct=new $w,It=new rC(re),Yt=new yR(A,Ze,Ke,zt,nt,x,p),Xt=new lC(A,nt,ne),oe=new xC(V,Ve,ne,zt),Ot=new MR(V,re,Ve),Zt=new LR(V,re,Ve),Ve.programs=pt.programs,A.capabilities=ne,A.extensions=re,A.properties=Vt,A.renderLists=ct,A.shadowMap=Xt,A.state=zt,A.info=Ve}q();const bt=new _C(A,V);this.xr=bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(B,Y,!1))},this.getSize=function(C){return C.set(B,Y)},this.setSize=function(C,j,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,Y=j,e.width=Math.floor(C*G),e.height=Math.floor(j*G),ot===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(B*G,Y*G).floor()},this.setDrawingBufferSize=function(C,j,ot){B=C,Y=j,G=ot,e.width=Math.floor(C*ot),e.height=Math.floor(j*ot),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,j,ot,lt){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,j,ot,lt),zt.viewport(k.copy(X).multiplyScalar(G).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,j,ot,lt){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,j,ot,lt),zt.scissor(Z.copy(ft).multiplyScalar(G).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(C){zt.setScissorTest(dt=C)},this.setOpaqueSort=function(C){ut=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,ot=!0){let lt=0;if(C){let Q=!1;if(F!==null){const Tt=F.texture.format;Q=Tt===Bm||Tt===Im||Tt===zm}if(Q){const Tt=F.texture.type,Lt=Tt===ha||Tt===_s||Tt===eu||Tt===nu||Tt===Nm||Tt===Pm,Ft=Yt.getClearColor(),Nt=Yt.getClearAlpha(),Jt=Ft.r,te=Ft.g,Wt=Ft.b;Lt?(E[0]=Jt,E[1]=te,E[2]=Wt,E[3]=Nt,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=Jt,M[1]=te,M[2]=Wt,M[3]=Nt,V.clearBufferiv(V.COLOR,0,M))}else lt|=V.COLOR_BUFFER_BIT}j&&(lt|=V.DEPTH_BUFFER_BIT),ot&&(lt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Yt.dispose(),ct.dispose(),It.dispose(),Vt.dispose(),Ze.dispose(),Ke.dispose(),nt.dispose(),Ut.dispose(),oe.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",gn),bt.removeEventListener("sessionend",vn),en.stop()};function Ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const C=Ve.autoReset,j=Xt.enabled,ot=Xt.autoUpdate,lt=Xt.needsUpdate,Q=Xt.type;q(),Ve.autoReset=C,Xt.enabled=j,Xt.autoUpdate=ot,Xt.needsUpdate=lt,Xt.type=Q}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function St(C){const j=C.target;j.removeEventListener("dispose",St),Gt(j)}function Gt(C){ae(C),Vt.remove(C)}function ae(C){const j=Vt.get(C).programs;j!==void 0&&(j.forEach(function(ot){pt.releaseProgram(ot)}),C.isShaderMaterial&&pt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ot,lt,Q,Tt){j===null&&(j=Dt);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=qa(C,j,ot,lt,Q);zt.setMaterial(lt,Lt);let Nt=ot.index,Jt=1;if(lt.wireframe===!0){if(Nt=R.getWireframeAttribute(ot),Nt===void 0)return;Jt=2}const te=ot.drawRange,Wt=ot.attributes.position;let he=te.start*Jt,Ae=(te.start+te.count)*Jt;Tt!==null&&(he=Math.max(he,Tt.start*Jt),Ae=Math.min(Ae,(Tt.start+Tt.count)*Jt)),Nt!==null?(he=Math.max(he,0),Ae=Math.min(Ae,Nt.count)):Wt!=null&&(he=Math.max(he,0),Ae=Math.min(Ae,Wt.count));const qe=Ae-he;if(qe<0||qe===1/0)return;Ut.setup(Q,lt,Ft,ot,Nt);let Oe,de=Ot;if(Nt!==null&&(Oe=I.get(Nt),de=Zt,de.setIndex(Oe)),Q.isMesh)lt.wireframe===!0?(zt.setLineWidth(lt.wireframeLinewidth*We()),de.setMode(V.LINES)):de.setMode(V.TRIANGLES);else if(Q.isLine){let Qt=lt.linewidth;Qt===void 0&&(Qt=1),zt.setLineWidth(Qt*We()),Q.isLineSegments?de.setMode(V.LINES):Q.isLineLoop?de.setMode(V.LINE_LOOP):de.setMode(V.LINE_STRIP)}else Q.isPoints?de.setMode(V.POINTS):Q.isSprite&&de.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)su("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))de.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,Xe=Q._multiDrawCounts,ge=Q._multiDrawCount,zn=Nt?I.get(Nt).bytesPerElement:1,Vi=Vt.get(lt).currentProgram.getUniforms();for(let Xn=0;Xn<ge;Xn++)Vi.setValue(V,"_gl_DrawID",Xn),de.render(Qt[Xn]/zn,Xe[Xn])}else if(Q.isInstancedMesh)de.renderInstances(he,qe,Q.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xe=Math.min(ot.instanceCount,Qt);de.renderInstances(he,qe,Xe)}else de.render(he,qe)};function Ce(C,j,ot){C.transparent===!0&&C.side===Fa&&C.forceSinglePass===!1?(C.side=ai,C.needsUpdate=!0,ta(C,j,ot),C.side=Va,C.needsUpdate=!0,ta(C,j,ot),C.side=Fa):ta(C,j,ot)}this.compile=function(C,j,ot=null){ot===null&&(ot=C),y=It.get(ot),y.init(j),D.push(y),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),C!==ot&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Ft=Tt[Lt];Ce(Ft,ot,Q),lt.add(Ft)}else Ce(Tt,ot,Q),lt.add(Tt)}),y=D.pop(),lt},this.compileAsync=function(C,j,ot=null){const lt=this.compile(C,j,ot);return new Promise(Q=>{function Tt(){if(lt.forEach(function(Lt){Vt.get(Lt).currentProgram.isReady()&&lt.delete(Lt)}),lt.size===0){Q(C);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let be=null;function Gi(C){be&&be(C)}function gn(){en.stop()}function vn(){en.start()}const en=new Xy;en.setAnimationLoop(Gi),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(C){be=C,bt.setAnimationLoop(C),C===null?en.stop():en.start()},bt.addEventListener("sessionstart",gn),bt.addEventListener("sessionend",vn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,j,F),y=It.get(C,D.length),y.init(j),D.push(y),gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),vt.setFromProjectionMatrix(gt,ca,j.reversedDepth),J=this.localClippingEnabled,wt=Rt.init(this.clippingPlanes,J),S=ct.get(C,U.length),S.init(),U.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Tt=A.xr.getDepthSensingMesh();Tt!==null&&$i(Tt,j,-1/0,A.sortObjects)}$i(C,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ut,N),le=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,le&&Yt.addToRenderList(S,C),this.info.render.frame++,wt===!0&&Rt.beginShadows();const ot=y.state.shadowsArray;Xt.render(ot,C,j),wt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,Q=S.transmissive;if(y.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Q.length>0)for(let Lt=0,Ft=Tt.length;Lt<Ft;Lt++){const Nt=Tt[Lt];xu(lt,Q,C,Nt)}le&&Yt.render(C);for(let Lt=0,Ft=Tt.length;Lt<Ft;Lt++){const Nt=Tt[Lt];Ss(S,C,Nt,Nt.viewport)}}else Q.length>0&&xu(lt,Q,C,j),le&&Yt.render(C),Ss(S,C,j);F!==null&&z===0&&(se.updateMultisampleRenderTarget(F),se.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(A,C,j),Ut.resetDefaultState(),b=-1,O=null,D.pop(),D.length>0?(y=D[D.length-1],wt===!0&&Rt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function $i(C,j,ot,lt){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ot=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||vt.intersectsSprite(C)){lt&&qt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(gt);const Lt=nt.update(C),Ft=C.material;Ft.visible&&S.push(C,Lt,Ft,ot,qt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||vt.intersectsObject(C))){const Lt=nt.update(C),Ft=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qt.copy(C.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),qt.copy(Lt.boundingSphere.center)),qt.applyMatrix4(C.matrixWorld).applyMatrix4(gt)),Array.isArray(Ft)){const Nt=Lt.groups;for(let Jt=0,te=Nt.length;Jt<te;Jt++){const Wt=Nt[Jt],he=Ft[Wt.materialIndex];he&&he.visible&&S.push(C,Lt,he,ot,qt.z,Wt)}}else Ft.visible&&S.push(C,Lt,Ft,ot,qt.z,null)}}const Tt=C.children;for(let Lt=0,Ft=Tt.length;Lt<Ft;Lt++)$i(Tt[Lt],j,ot,lt)}function Ss(C,j,ot,lt){const Q=C.opaque,Tt=C.transmissive,Lt=C.transparent;y.setupLightsView(ot),wt===!0&&Rt.setGlobalState(A.clippingPlanes,ot),lt&&zt.viewport(k.copy(lt)),Q.length>0&&Ms(Q,j,ot),Tt.length>0&&Ms(Tt,j,ot),Lt.length>0&&Ms(Lt,j,ot),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function xu(C,j,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new gs(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?pu:ha,minFilter:cs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[lt.id],Lt=lt.viewport||k;Tt.setSize(Lt.z*A.transmissionResolutionScale,Lt.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Nt=A.getActiveCubeFace(),Jt=A.getActiveMipmapLevel();A.setRenderTarget(Tt),A.getClearColor(ht),rt=A.getClearAlpha(),rt<1&&A.setClearColor(16777215,.5),A.clear(),le&&Yt.render(ot);const te=A.toneMapping;A.toneMapping=Rr;const Wt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),wt===!0&&Rt.setGlobalState(A.clippingPlanes,lt),Ms(C,ot,lt),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ae=0,qe=j.length;Ae<qe;Ae++){const Oe=j[Ae],de=Oe.object,Qt=Oe.geometry,Xe=Oe.material,ge=Oe.group;if(Xe.side===Fa&&de.layers.test(lt.layers)){const zn=Xe.side;Xe.side=ai,Xe.needsUpdate=!0,Xo(de,ot,lt,Qt,Xe,ge),Xe.side=zn,Xe.needsUpdate=!0,he=!0}}he===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}A.setRenderTarget(Ft,Nt,Jt),A.setClearColor(ht,rt),Wt!==void 0&&(lt.viewport=Wt),A.toneMapping=te}function Ms(C,j,ot){const lt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Tt=C.length;Q<Tt;Q++){const Lt=C[Q],Ft=Lt.object,Nt=Lt.geometry,Jt=Lt.group;let te=Lt.material;te.allowOverride===!0&&lt!==null&&(te=lt),Ft.layers.test(ot.layers)&&Xo(Ft,j,ot,Nt,te,Jt)}}function Xo(C,j,ot,lt,Q,Tt){C.onBeforeRender(A,j,ot,lt,Q,Tt),C.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(A,j,ot,lt,C,Tt),Q.transparent===!0&&Q.side===Fa&&Q.forceSinglePass===!1?(Q.side=ai,Q.needsUpdate=!0,A.renderBufferDirect(ot,j,lt,Q,C,Tt),Q.side=Va,Q.needsUpdate=!0,A.renderBufferDirect(ot,j,lt,Q,C,Tt),Q.side=Fa):A.renderBufferDirect(ot,j,lt,Q,C,Tt),C.onAfterRender(A,j,ot,lt,Q,Tt)}function ta(C,j,ot){j.isScene!==!0&&(j=Dt);const lt=Vt.get(C),Q=y.state.lights,Tt=y.state.shadowsArray,Lt=Q.state.version,Ft=pt.getParameters(C,Q.state,Tt,j,ot),Nt=pt.getProgramCacheKey(Ft);let Jt=lt.programs;lt.environment=C.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(C.isMeshStandardMaterial?Ke:Ze).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Jt===void 0&&(C.addEventListener("dispose",St),Jt=new Map,lt.programs=Jt);let te=Jt.get(Nt);if(te!==void 0){if(lt.currentProgram===te&&lt.lightsStateVersion===Lt)return ma(C,Ft),te}else Ft.uniforms=pt.getUniforms(C),C.onBeforeCompile(Ft,A),te=pt.acquireProgram(Ft,Nt),Jt.set(Nt,te),lt.uniforms=Ft.uniforms;const Wt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=Rt.uniform),ma(C,Ft),lt.needsLights=Ya(C),lt.lightsStateVersion=Lt,lt.needsLights&&(Wt.ambientLightColor.value=Q.state.ambient,Wt.lightProbe.value=Q.state.probe,Wt.directionalLights.value=Q.state.directional,Wt.directionalLightShadows.value=Q.state.directionalShadow,Wt.spotLights.value=Q.state.spot,Wt.spotLightShadows.value=Q.state.spotShadow,Wt.rectAreaLights.value=Q.state.rectArea,Wt.ltc_1.value=Q.state.rectAreaLTC1,Wt.ltc_2.value=Q.state.rectAreaLTC2,Wt.pointLights.value=Q.state.point,Wt.pointLightShadows.value=Q.state.pointShadow,Wt.hemisphereLights.value=Q.state.hemi,Wt.directionalShadowMap.value=Q.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Wt.spotShadowMap.value=Q.state.spotShadowMap,Wt.spotLightMatrix.value=Q.state.spotLightMatrix,Wt.spotLightMap.value=Q.state.spotLightMap,Wt.pointShadowMap.value=Q.state.pointShadowMap,Wt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=te,lt.uniformsList=null,te}function Es(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=of.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ma(C,j){const ot=Vt.get(C);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function qa(C,j,ot,lt,Q){j.isScene!==!0&&(j=Dt),se.resetTextureUnits();const Tt=j.fog,Lt=lt.isMeshStandardMaterial?j.environment:null,Ft=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Lo,Nt=(lt.isMeshStandardMaterial?Ke:Ze).get(lt.envMap||Lt),Jt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Wt=!!ot.morphAttributes.position,he=!!ot.morphAttributes.normal,Ae=!!ot.morphAttributes.color;let qe=Rr;lt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(qe=A.toneMapping);const Oe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,de=Oe!==void 0?Oe.length:0,Qt=Vt.get(lt),Xe=y.state.lights;if(wt===!0&&(J===!0||C!==O)){const nn=C===O&&lt.id===b;Rt.setState(lt,C,nn)}let ge=!1;lt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Xe.state.version||Qt.outputColorSpace!==Ft||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==Nt||lt.fog===!0&&Qt.fog!==Tt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==te||Qt.morphTargets!==Wt||Qt.morphNormals!==he||Qt.morphColors!==Ae||Qt.toneMapping!==qe||Qt.morphTargetsCount!==de)&&(ge=!0):(ge=!0,Qt.__version=lt.version);let zn=Qt.currentProgram;ge===!0&&(zn=ta(lt,j,Q));let Vi=!1,Xn=!1,En=!1;const Be=zn.getUniforms(),Wn=Qt.uniforms;if(zt.useProgram(zn.program)&&(Vi=!0,Xn=!0,En=!0),lt.id!==b&&(b=lt.id,Xn=!0),Vi||O!==C){zt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(V,"projectionMatrix",C.projectionMatrix),Be.setValue(V,"viewMatrix",C.matrixWorldInverse);const Dn=Be.map.cameraPosition;Dn!==void 0&&Dn.setValue(V,At.setFromMatrixPosition(C.matrixWorld)),ne.logarithmicDepthBuffer&&Be.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Be.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,Xn=!0,En=!0)}if(Q.isSkinnedMesh){Be.setOptional(V,Q,"bindMatrix"),Be.setOptional(V,Q,"bindMatrixInverse");const nn=Q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Be.setValue(V,"boneTexture",nn.boneTexture,se))}Q.isBatchedMesh&&(Be.setOptional(V,Q,"batchingTexture"),Be.setValue(V,"batchingTexture",Q._matricesTexture,se),Be.setOptional(V,Q,"batchingIdTexture"),Be.setValue(V,"batchingIdTexture",Q._indirectTexture,se),Be.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Be.setValue(V,"batchingColorTexture",Q._colorsTexture,se));const In=ot.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Mt.update(Q,ot,zn),(Xn||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,Be.setValue(V,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Wn.envMap.value=Nt,Wn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Wn.envMapIntensity.value=j.environmentIntensity),Xn&&(Be.setValue(V,"toneMappingExposure",A.toneMappingExposure),Qt.needsLights&&Or(Wn,En),Tt&&lt.fog===!0&&xt.refreshFogUniforms(Wn,Tt),xt.refreshMaterialUniforms(Wn,lt,G,Y,y.state.transmissionRenderTarget[C.id]),of.upload(V,Es(Qt),Wn,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(of.upload(V,Es(Qt),Wn,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Be.setValue(V,"center",Q.center),Be.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Be.setValue(V,"normalMatrix",Q.normalMatrix),Be.setValue(V,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const nn=lt.uniformsGroups;for(let Dn=0,Ts=nn.length;Dn<Ts;Dn++){const Qn=nn[Dn];oe.update(Qn,zn),oe.bind(Qn,zn)}}return zn}function Or(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ya(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,j,ot){const lt=Vt.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Vt.get(C.texture).__webglTexture=j,Vt.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const ot=Vt.get(C);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const fn=V.createFramebuffer();this.setRenderTarget=function(C,j=0,ot=0){F=C,P=j,z=ot;let lt=!0,Q=null,Tt=!1,Lt=!1;if(C){const Nt=Vt.get(C);if(Nt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(V.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Nt.__hasExternalTextures)se.rebindTextures(C,Vt.get(C.texture).__webglTexture,Vt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Wt=C.depthTexture;if(Nt.__boundDepthTexture!==Wt){if(Wt!==null&&Vt.has(Wt)&&(C.width!==Wt.image.width||C.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Lt=!0);const te=Vt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(te[j])?Q=te[j][ot]:Q=te[j],Tt=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Q=Vt.get(C).__webglMultisampledFramebuffer:Array.isArray(te)?Q=te[ot]:Q=te,k.copy(C.viewport),Z.copy(C.scissor),et=C.scissorTest}else k.copy(X).multiplyScalar(G).floor(),Z.copy(ft).multiplyScalar(G).floor(),et=dt;if(ot!==0&&(Q=fn),zt.bindFramebuffer(V.FRAMEBUFFER,Q)&&lt&&zt.drawBuffers(C,Q),zt.viewport(k),zt.scissor(Z),zt.setScissorTest(et),Tt){const Nt=Vt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,ot)}else if(Lt){const Nt=j;for(let Jt=0;Jt<C.textures.length;Jt++){const te=Vt.get(C.textures[Jt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Jt,te.__webglTexture,ot,Nt)}}else if(C!==null&&ot!==0){const Nt=Vt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,ot)}b=-1},this.readRenderTargetPixels=function(C,j,ot,lt,Q,Tt,Lt,Ft=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){zt.bindFramebuffer(V.FRAMEBUFFER,Nt);try{const Jt=C.textures[Ft],te=Jt.format,Wt=Jt.type;if(!ne.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-lt&&ot>=0&&ot<=C.height-Q&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ft),V.readPixels(j,ot,lt,Q,kt.convert(te),kt.convert(Wt),Tt))}finally{const Jt=F!==null?Vt.get(F).__webglFramebuffer:null;zt.bindFramebuffer(V.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(C,j,ot,lt,Q,Tt,Lt,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt)if(j>=0&&j<=C.width-lt&&ot>=0&&ot<=C.height-Q){zt.bindFramebuffer(V.FRAMEBUFFER,Nt);const Jt=C.textures[Ft],te=Jt.format,Wt=Jt.type;if(!ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.bufferData(V.PIXEL_PACK_BUFFER,Tt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ft),V.readPixels(j,ot,lt,Q,kt.convert(te),kt.convert(Wt),0);const Ae=F!==null?Vt.get(F).__webglFramebuffer:null;zt.bindFramebuffer(V.FRAMEBUFFER,Ae);const qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await KT(V,qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,he),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Tt),V.deleteBuffer(he),V.deleteSync(qe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(C.image.width*lt),Tt=Math.floor(C.image.height*lt),Lt=j!==null?j.x:0,Ft=j!==null?j.y:0;se.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Lt,Ft,Q,Tt),zt.unbindTexture()};const yu=V.createFramebuffer(),Su=V.createFramebuffer();this.copyTextureToTexture=function(C,j,ot=null,lt=null,Q=0,Tt=null){Tt===null&&(Q!==0?(su("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Lt,Ft,Nt,Jt,te,Wt,he,Ae,qe;const Oe=C.isCompressedTexture?C.mipmaps[Tt]:C.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,Jt=ot.min.x,te=ot.min.y,Wt=ot.isBox3?ot.min.z:0;else{const In=Math.pow(2,-Q);Lt=Math.floor(Oe.width*In),Ft=Math.floor(Oe.height*In),C.isDataArrayTexture?Nt=Oe.depth:C.isData3DTexture?Nt=Math.floor(Oe.depth*In):Nt=1,Jt=0,te=0,Wt=0}lt!==null?(he=lt.x,Ae=lt.y,qe=lt.z):(he=0,Ae=0,qe=0);const de=kt.convert(j.format),Qt=kt.convert(j.type);let Xe;j.isData3DTexture?(se.setTexture3D(j,0),Xe=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(se.setTexture2DArray(j,0),Xe=V.TEXTURE_2D_ARRAY):(se.setTexture2D(j,0),Xe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const ge=V.getParameter(V.UNPACK_ROW_LENGTH),zn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Vi=V.getParameter(V.UNPACK_SKIP_PIXELS),Xn=V.getParameter(V.UNPACK_SKIP_ROWS),En=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Oe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const Be=C.isDataArrayTexture||C.isData3DTexture,Wn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const In=Vt.get(C),nn=Vt.get(j),Dn=Vt.get(In.__renderTarget),Ts=Vt.get(nn.__renderTarget);zt.bindFramebuffer(V.READ_FRAMEBUFFER,Dn.__webglFramebuffer),zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Qn=0;Qn<Nt;Qn++)Be&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vt.get(C).__webglTexture,Q,Wt+Qn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vt.get(j).__webglTexture,Tt,qe+Qn)),V.blitFramebuffer(Jt,te,Lt,Ft,he,Ae,Lt,Ft,V.DEPTH_BUFFER_BIT,V.NEAREST);zt.bindFramebuffer(V.READ_FRAMEBUFFER,null),zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Vt.has(C)){const In=Vt.get(C),nn=Vt.get(j);zt.bindFramebuffer(V.READ_FRAMEBUFFER,yu),zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Su);for(let Dn=0;Dn<Nt;Dn++)Be?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,In.__webglTexture,Q,Wt+Dn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,In.__webglTexture,Q),Wn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,nn.__webglTexture,Tt,qe+Dn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,nn.__webglTexture,Tt),Q!==0?V.blitFramebuffer(Jt,te,Lt,Ft,he,Ae,Lt,Ft,V.COLOR_BUFFER_BIT,V.NEAREST):Wn?V.copyTexSubImage3D(Xe,Tt,he,Ae,qe+Dn,Jt,te,Lt,Ft):V.copyTexSubImage2D(Xe,Tt,he,Ae,Jt,te,Lt,Ft);zt.bindFramebuffer(V.READ_FRAMEBUFFER,null),zt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Wn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Xe,Tt,he,Ae,qe,Lt,Ft,Nt,de,Qt,Oe.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,Tt,he,Ae,qe,Lt,Ft,Nt,de,Oe.data):V.texSubImage3D(Xe,Tt,he,Ae,qe,Lt,Ft,Nt,de,Qt,Oe):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Tt,he,Ae,Lt,Ft,de,Qt,Oe.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Tt,he,Ae,Oe.width,Oe.height,de,Oe.data):V.texSubImage2D(V.TEXTURE_2D,Tt,he,Ae,Lt,Ft,de,Qt,Oe);V.pixelStorei(V.UNPACK_ROW_LENGTH,ge),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,zn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Vi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Xn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,En),Tt===0&&j.generateMipmaps&&V.generateMipmap(Xe),zt.unbindTexture()},this.initRenderTarget=function(C){Vt.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),zt.unbindTexture()},this.resetState=function(){P=0,z=0,F=null,zt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}const SC=/^[og]\s*(.+)?/,MC=/^mtllib /,EC=/^usemtl /,TC=/^usemap /,jx=/\s+/,Zx=new it,gp=new it,Kx=new it,Qx=new it,Pi=new it,$c=new fe;function bC(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const a=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,l){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const f={index:this.materials.length,name:r||"",mtllib:Array.isArray(l)&&l.length>0?l[l.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(p){const h={index:typeof p=="number"?p:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return h.clone=this.clone.bind(h),h}};return this.materials.push(f),f},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const l=this.currentMaterial();if(l&&l.groupEnd===-1&&(l.groupEnd=this.geometry.vertices.length/3,l.groupCount=l.groupEnd-l.groupStart,l.inherited=!1),r&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),l}},a&&a.name&&typeof a.clone=="function"){const r=a.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const a=parseInt(t,10);return(a>=0?a-1:a+e/3)*3},parseNormalIndex:function(t,e){const a=parseInt(t,10);return(a>=0?a-1:a+e/3)*3},parseUVIndex:function(t,e){const a=parseInt(t,10);return(a>=0?a-1:a+e/2)*2},addVertex:function(t,e,a){const r=this.vertices,l=this.object.geometry.vertices;l.push(r[t+0],r[t+1],r[t+2]),l.push(r[e+0],r[e+1],r[e+2]),l.push(r[a+0],r[a+1],r[a+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,a){const r=this.normals,l=this.object.geometry.normals;l.push(r[t+0],r[t+1],r[t+2]),l.push(r[e+0],r[e+1],r[e+2]),l.push(r[a+0],r[a+1],r[a+2])},addFaceNormal:function(t,e,a){const r=this.vertices,l=this.object.geometry.normals;Zx.fromArray(r,t),gp.fromArray(r,e),Kx.fromArray(r,a),Pi.subVectors(Kx,gp),Qx.subVectors(Zx,gp),Pi.cross(Qx),Pi.normalize(),l.push(Pi.x,Pi.y,Pi.z),l.push(Pi.x,Pi.y,Pi.z),l.push(Pi.x,Pi.y,Pi.z)},addColor:function(t,e,a){const r=this.colors,l=this.object.geometry.colors;r[t]!==void 0&&l.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&l.push(r[e+0],r[e+1],r[e+2]),r[a]!==void 0&&l.push(r[a+0],r[a+1],r[a+2])},addUV:function(t,e,a){const r=this.uvs,l=this.object.geometry.uvs;l.push(r[t+0],r[t+1]),l.push(r[e+0],r[e+1]),l.push(r[a+0],r[a+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,a,r,l,c,f,p,h){const m=this.vertices.length;let g=this.parseVertexIndex(t,m),v=this.parseVertexIndex(e,m),x=this.parseVertexIndex(a,m);if(this.addVertex(g,v,x),this.addColor(g,v,x),f!==void 0&&f!==""){const E=this.normals.length;g=this.parseNormalIndex(f,E),v=this.parseNormalIndex(p,E),x=this.parseNormalIndex(h,E),this.addNormal(g,v,x)}else this.addFaceNormal(g,v,x);if(r!==void 0&&r!==""){const E=this.uvs.length;g=this.parseUVIndex(r,E),v=this.parseUVIndex(l,E),x=this.parseUVIndex(c,E),this.addUV(g,v,x),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let a=0,r=t.length;a<r;a++){const l=this.parseVertexIndex(t[a],e);this.addVertexPoint(l),this.addColor(l)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const a=this.vertices.length,r=this.uvs.length;for(let l=0,c=t.length;l<c;l++)this.addVertexLine(this.parseVertexIndex(t[l],a));for(let l=0,c=e.length;l<c;l++)this.addUVLine(this.parseUVIndex(e[l],r))}};return o.startObject("",!1),o}class AC extends Vo{constructor(t){super(t),this.materials=null}load(t,e,a,r){const l=this,c=new Gy(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(f){try{e(l.parse(f))}catch(p){r?r(p):console.error(p),l.manager.itemError(t)}},a,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new bC;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const a=t.split(`
`);let r=[];for(let f=0,p=a.length;f<p;f++){const h=a[f].trimStart();if(h.length===0)continue;const m=h.charAt(0);if(m!=="#")if(m==="v"){const g=h.split(jx);switch(g[0]){case"v":e.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?($c.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),Nn),e.colors.push($c.r,$c.g,$c.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":e.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(m==="f"){const v=h.slice(1).trim().split(jx),x=[];for(let M=0,S=v.length;M<S;M++){const y=v[M];if(y.length>0){const U=y.split("/");x.push(U)}}const E=x[0];for(let M=1,S=x.length-1;M<S;M++){const y=x[M],U=x[M+1];e.addFace(E[0],y[0],U[0],E[1],y[1],U[1],E[2],y[2],U[2])}}else if(m==="l"){const g=h.substring(1).trim().split(" ");let v=[];const x=[];if(h.indexOf("/")===-1)v=g;else for(let E=0,M=g.length;E<M;E++){const S=g[E].split("/");S[0]!==""&&v.push(S[0]),S[1]!==""&&x.push(S[1])}e.addLineGeometry(v,x)}else if(m==="p"){const v=h.slice(1).trim().split(" ");e.addPointGeometry(v)}else if((r=SC.exec(h))!==null){const g=(" "+r[0].slice(1).trim()).slice(1);e.startObject(g)}else if(EC.test(h))e.object.startMaterial(h.substring(7).trim(),e.materialLibraries);else if(MC.test(h))e.materialLibraries.push(h.substring(7).trim());else if(TC.test(h))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(m==="s"){if(r=h.split(" "),r.length>1){const v=r[1].trim().toLowerCase();e.object.smooth=v!=="0"&&v!=="off"}else e.object.smooth=!0;const g=e.object.currentMaterial();g&&(g.smooth=e.object.smooth)}else{if(h==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+h+'"')}}e.finalize();const l=new xo;if(l.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let f=0,p=e.objects.length;f<p;f++){const h=e.objects[f],m=h.geometry,g=h.materials,v=m.type==="Line",x=m.type==="Points";let E=!1;if(m.vertices.length===0)continue;const M=new Ti;M.setAttribute("position",new jn(m.vertices,3)),m.normals.length>0&&M.setAttribute("normal",new jn(m.normals,3)),m.colors.length>0&&(E=!0,M.setAttribute("color",new jn(m.colors,3))),m.hasUVIndices===!0&&M.setAttribute("uv",new jn(m.uvs,2));const S=[];for(let U=0,D=g.length;U<D;U++){const A=g[U],L=A.name+"_"+A.smooth+"_"+E;let P=e.materials[L];if(this.materials!==null){if(P=this.materials.create(A.name),v&&P&&!(P instanceof sf)){const z=new sf;da.prototype.copy.call(z,P),z.color.copy(P.color),P=z}else if(x&&P&&!(P instanceof yo)){const z=new yo({size:10,sizeAttenuation:!1});da.prototype.copy.call(z,P),z.color.copy(P.color),z.map=P.map,P=z}}P===void 0&&(v?P=new sf:x?P=new yo({size:1,sizeAttenuation:!1}):P=new By,P.name=A.name,P.flatShading=!A.smooth,P.vertexColors=E,e.materials[L]=P),S.push(P)}let y;if(S.length>1){for(let U=0,D=g.length;U<D;U++){const A=g[U];M.addGroup(A.groupStart,A.groupCount,U)}v?y=new gx(M,S):x?y=new Zl(M,S):y=new Si(M,S)}else v?y=new gx(M,S[0]):x?y=new Zl(M,S[0]):y=new Si(M,S[0]);y.name=h.name,l.add(y)}else if(e.vertices.length>0){const f=new yo({size:1,sizeAttenuation:!1}),p=new Ti;p.setAttribute("position",new jn(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(p.setAttribute("color",new jn(e.colors,3)),f.vertexColors=!0);const h=new Zl(p,f);l.add(h)}return l}}class RC extends Vo{constructor(t){super(t)}load(t,e,a,r){const l=this,c=this.path===""?P1.extractUrlBase(t):this.path,f=new Gy(this.manager);f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(t,function(p){try{e(l.parse(p,c))}catch(h){r?r(h):console.error(h),l.manager.itemError(t)}},a,r)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const a=t.split(`
`);let r={};const l=/\s+/,c={};for(let p=0;p<a.length;p++){let h=a[p];if(h=h.trim(),h.length===0||h.charAt(0)==="#")continue;const m=h.indexOf(" ");let g=m>=0?h.substring(0,m):h;g=g.toLowerCase();let v=m>=0?h.substring(m+1):"";if(v=v.trim(),g==="newmtl")r={name:v},c[v]=r;else if(g==="ka"||g==="kd"||g==="ks"||g==="ke"){const x=v.split(l,3);r[g]=[parseFloat(x[0]),parseFloat(x[1]),parseFloat(x[2])]}else r[g]=v}const f=new wC(this.resourcePath||e,this.materialOptions);return f.setCrossOrigin(this.crossOrigin),f.setManager(this.manager),f.setMaterials(c),f}}class wC{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Va,this.wrap=this.options.wrap!==void 0?this.options.wrap:df}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const a in t){const r=t[a],l={};e[a]=l;for(const c in r){let f=!0,p=r[c];const h=c.toLowerCase();switch(h){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(p=[p[0]/255,p[1]/255,p[2]/255]),this.options&&this.options.ignoreZeroRGBs&&p[0]===0&&p[1]===0&&p[2]===0&&(f=!1);break}f&&(l[h]=p)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,a=this.materialsInfo[t],r={name:t,side:this.side};function l(f,p){return typeof p!="string"||p===""?"":/^https?:\/\//i.test(p)?p:f+p}function c(f,p){if(r[f])return;const h=e.getTextureParams(p,r),m=e.loadTexture(l(e.baseUrl,h.url));m.repeat.copy(h.scale),m.offset.copy(h.offset),m.wrapS=e.wrap,m.wrapT=e.wrap,(f==="map"||f==="emissiveMap")&&(m.colorSpace=Nn),r[f]=m}for(const f in a){const p=a[f];let h;if(p!=="")switch(f.toLowerCase()){case"kd":r.color=ye.colorSpaceToWorking(new fe().fromArray(p),Nn);break;case"ks":r.specular=ye.colorSpaceToWorking(new fe().fromArray(p),Nn);break;case"ke":r.emissive=ye.colorSpaceToWorking(new fe().fromArray(p),Nn);break;case"map_kd":c("map",p);break;case"map_ks":c("specularMap",p);break;case"map_ke":c("emissiveMap",p);break;case"norm":c("normalMap",p);break;case"map_bump":case"bump":c("bumpMap",p);break;case"disp":c("displacementMap",p);break;case"map_d":c("alphaMap",p),r.transparent=!0;break;case"ns":r.shininess=parseFloat(p);break;case"d":h=parseFloat(p),h<1&&(r.opacity=h,r.transparent=!0);break;case"tr":h=parseFloat(p),this.options&&this.options.invertTrProperty&&(h=1-h),h>0&&(r.opacity=1-h,r.transparent=!0);break}}return this.materials[t]=new By(r),this.materials[t]}getTextureParams(t,e){const a={scale:new Te(1,1),offset:new Te(0,0)},r=t.split(/\s+/);let l;return l=r.indexOf("-bm"),l>=0&&(e.bumpScale=parseFloat(r[l+1]),r.splice(l,2)),l=r.indexOf("-mm"),l>=0&&(e.displacementBias=parseFloat(r[l+1]),e.displacementScale=parseFloat(r[l+2]),r.splice(l,3)),l=r.indexOf("-s"),l>=0&&(a.scale.set(parseFloat(r[l+1]),parseFloat(r[l+2])),r.splice(l,4)),l=r.indexOf("-o"),l>=0&&(a.offset.set(parseFloat(r[l+1]),parseFloat(r[l+2])),r.splice(l,4)),a.url=r.join(" ").trim(),a}loadTexture(t,e,a,r,l){const c=this.manager!==void 0?this.manager:Hy;let f=c.getHandler(t);f===null&&(f=new D1(c)),f.setCrossOrigin&&f.setCrossOrigin(this.crossOrigin);const p=f.load(t,a,r,l);return e!==void 0&&(p.mapping=e),p}}function Ia(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Zy(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},No={duration:.5,overwrite:!1,delay:0},Xm,Pn,je,Bi=1e8,Ge=1/Bi,mm=Math.PI*2,CC=mm/4,DC=0,Ky=Math.sqrt,UC=Math.cos,LC=Math.sin,Cn=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},Xa=function(t){return typeof t=="number"},Wm=function(t){return typeof t>"u"},pa=function(t){return typeof t=="object"},ri=function(t){return t!==!1},qm=function(){return typeof window<"u"},tf=function(t){return on(t)||Cn(t)},Qy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,_m=/(?:-?\.?\d|\.)+/gi,Jy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$y=/[+-]=-?[.\d]+/,tS=/[^,'"\[\]\s]+/gi,OC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,sa,gm,Ym,bi={},vf={},eS,nS=function(t){return(vf=Po(t,bi))&&ui},jm=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ou=function(t,e){return!e&&console.warn(t)},iS=function(t,e){return t&&(bi[t]=e)&&vf&&(vf[t]=e)||bi},lu=function(){return 0},NC={suppressEvents:!0,isStart:!0,kill:!1},lf={suppressEvents:!0,kill:!1},PC={suppressEvents:!0},Zm={},wr=[],vm={},aS,xi={},xp={},Jx=30,uf=[],Km="",Qm=function(t){var e=t[0],a,r;if(pa(e)||on(e)||(t=[t]),!(a=(e._gsap||{}).harness)){for(r=uf.length;r--&&!uf[r].targetTest(e););a=uf[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new wS(t[r],a)))||t.splice(r,1);return t},hs=function(t){return t._gsap||Qm(Fi(t))[0]._gsap},rS=function(t,e,a){return(a=t[e])&&on(a)?t[e]():Wm(a)&&t.getAttribute&&t.getAttribute(e)||a},si=function(t,e){return(t=t.split(",")).forEach(e)||t},cn=function(t){return Math.round(t*1e5)/1e5||0},_n=function(t){return Math.round(t*1e7)/1e7||0},Ao=function(t,e){var a=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},zC=function(t,e){for(var a=e.length,r=0;t.indexOf(e[r])<0&&++r<a;);return r<a},xf=function(){var t=wr.length,e=wr.slice(0),a,r;for(vm={},wr.length=0,a=0;a<t;a++)r=e[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Jm=function(t){return!!(t._initted||t._startAt||t.add)},sS=function(t,e,a,r){wr.length&&!Pn&&xf(),t.render(e,a,!!(Pn&&e<0&&Jm(t))),wr.length&&!Pn&&xf()},oS=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(tS).length<2?e:Cn(t)?t.trim():t},lS=function(t){return t},Ai=function(t,e){for(var a in e)a in t||(t[a]=e[a]);return t},IC=function(t){return function(e,a){for(var r in a)r in e||r==="duration"&&t||r==="ease"||(e[r]=a[r])}},Po=function(t,e){for(var a in e)t[a]=e[a];return t},$x=function o(t,e){for(var a in e)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=pa(e[a])?o(t[a]||(t[a]={}),e[a]):e[a]);return t},yf=function(t,e){var a={},r;for(r in t)r in e||(a[r]=t[r]);return a},Ql=function(t){var e=t.parent||Je,a=t.keyframes?IC(kn(t.keyframes)):Ai;if(ri(t.inherit))for(;e;)a(t,e.vars.defaults),e=e.parent||e._dp;return t},BC=function(t,e){for(var a=t.length,r=a===e.length;r&&a--&&t[a]===e[a];);return a<0},uS=function(t,e,a,r,l){var c=t[r],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[a],t[a]=e),e._next?e._next._prev=e:t[r]=e,e._prev=c,e.parent=e._dp=t,e},wf=function(t,e,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=e._prev,c=e._next;l?l._next=c:t[a]===e&&(t[a]=c),c?c._prev=l:t[r]===e&&(t[r]=l),e._next=e._prev=e.parent=null},Dr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ds=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},FC=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xm=function(t,e,a,r){return t._startAt&&(Pn?t._startAt.revert(lf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},HC=function o(t){return!t||t._ts&&o(t.parent)},ty=function(t){return t._repeat?zo(t._tTime,t=t.duration()+t._rDelay)*t:0},zo=function(t,e){var a=Math.floor(t=_n(t/e));return t&&a===t?a-1:a},Sf=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Cf=function(t){return t._end=_n(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ge)||0))},Df=function(t,e){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=_n(a._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Cf(t),a._dirty||ds(a,t)),t},cS=function(t,e){var a;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(a=Sf(t.rawTime(),e),(!e._dur||vu(0,e.totalDuration(),a)-e._tTime>Ge)&&e.render(a,!0)),ds(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Ge}},la=function(t,e,a,r){return e.parent&&Dr(e),e._start=_n((Xa(a)?a:a||t!==Je?zi(t,a,e):t._time)+e._delay),e._end=_n(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),uS(t,e,"_first","_last",t._sort?"_start":0),ym(e)||(t._recent=e),r||cS(t,e),t._ts<0&&Df(t,t._tTime),t},fS=function(t,e){return(bi.ScrollTrigger||jm("scrollTrigger",e))&&bi.ScrollTrigger.create(e,t)},hS=function(t,e,a,r,l){if(t_(t,e,l),!t._initted)return 1;if(!a&&t._pt&&!Pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&aS!==yi.frame)return wr.push(t),t._lazy=[l,r],1},GC=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},ym=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},VC=function(t,e,a,r){var l=t.ratio,c=e<0||!e&&(!t._start&&GC(t)&&!(!t._initted&&ym(t))||(t._ts<0||t._dp._ts<0)&&!ym(t))?0:1,f=t._rDelay,p=0,h,m,g;if(f&&t._repeat&&(p=vu(0,t._tDur,e),m=zo(p,f),t._yoyo&&m&1&&(c=1-c),m!==zo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Pn||r||t._zTime===Ge||!e&&t._zTime){if(!t._initted&&hS(t,e,r,a,p))return;for(g=t._zTime,t._zTime=e||(a?Ge:0),a||(a=e&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,h=t._pt;h;)h.r(c,h.d),h=h._next;e<0&&xm(t,e,a,!0),t._onUpdate&&!a&&Mi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Mi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Dr(t,1),!a&&!Pn&&(Mi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kC=function(t,e,a){var r;if(a>e)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Io=function(t,e,a,r){var l=t._repeat,c=_n(e)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:_n(c*(l+1)+t._rDelay*l):c,f>0&&!r&&Df(t,t._tTime=t._tDur*f),t.parent&&Cf(t),a||ds(t.parent,t),t},ey=function(t){return t instanceof Zn?ds(t):Io(t,t._dur)},XC={_start:0,endTime:lu,totalDuration:lu},zi=function o(t,e,a){var r=t.labels,l=t._recent||XC,c=t.duration()>=Bi?l.endTime(!1):t._dur,f,p,h;return Cn(e)&&(isNaN(e)||e in r)?(p=e.charAt(0),h=e.substr(-1)==="%",f=e.indexOf("="),p==="<"||p===">"?(f>=0&&(e=e.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(f<0?l:a).totalDuration()/100:1)):f<0?(e in r||(r[e]=c),r[e]):(p=parseFloat(e.charAt(f-1)+e.substr(f+1)),h&&a&&(p=p/100*(kn(a)?a[0]:a).totalDuration()),f>1?o(t,e.substr(0,f-1),a)+p:c+p)):e==null?c:+e},Jl=function(t,e,a){var r=Xa(e[1]),l=(r?2:1)+(t<2?0:1),c=e[l],f,p;if(r&&(c.duration=e[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ri(p.vars.inherit)&&p.parent;c.immediateRender=ri(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new mn(e[0],c,e[l+1])},Lr=function(t,e){return t||t===0?e(t):e},vu=function(t,e,a){return a<t?t:a>e?e:a},Vn=function(t,e){return!Cn(t)||!(e=OC.exec(t))?"":e[1]},WC=function(t,e,a){return Lr(a,function(r){return vu(t,e,r)})},Sm=[].slice,dS=function(t,e){return t&&pa(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pa(t[0]))&&!t.nodeType&&t!==sa},qC=function(t,e,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return Cn(r)&&!e||dS(r,1)?(l=a).push.apply(l,Fi(r)):a.push(r)})||a},Fi=function(t,e,a){return je&&!e&&je.selector?je.selector(t):Cn(t)&&!a&&(gm||!Bo())?Sm.call((e||Ym).querySelectorAll(t),0):kn(t)?qC(t,a):dS(t)?Sm.call(t,0):t?[t]:[]},Mm=function(t){return t=Fi(t)[0]||ou("Invalid scope")||{},function(e){var a=t.current||t.nativeElement||t;return Fi(e,a.querySelectorAll?a:a===t?ou("Invalid scope")||Ym.createElement("div"):t)}},pS=function(t){return t.sort(function(){return .5-Math.random()})},mS=function(t){if(on(t))return t;var e=pa(t)?t:{each:t},a=ps(e.ease),r=e.from||0,l=parseFloat(e.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,h=e.axis,m=r,g=r;return Cn(r)?m=g={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(m=r[0],g=r[1]),function(v,x,E){var M=(E||e).length,S=c[M],y,U,D,A,L,P,z,F,b;if(!S){if(b=e.grid==="auto"?0:(e.grid||[1,Bi])[1],!b){for(z=-Bi;z<(z=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=c[M]=[],y=p?Math.min(b,M)*m-.5:r%b,U=b===Bi?0:p?M*g/b-.5:r/b|0,z=0,F=Bi,P=0;P<M;P++)D=P%b-y,A=U-(P/b|0),S[P]=L=h?Math.abs(h==="y"?A:D):Ky(D*D+A*A),L>z&&(z=L),L<F&&(F=L);r==="random"&&pS(S),S.max=z-F,S.min=F,S.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(b>M?M-1:h?h==="y"?M/b:b:Math.max(b,M/b))||0)*(r==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Vn(e.amount||e.each)||0,a=a&&M<0?bS(a):a}return M=(S[v]-S.min)/S.max||0,_n(S.b+(a?a(M):M)*S.v)+S.u}},Em=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=_n(Math.round(parseFloat(a)/t)*t*e);return(r-r%1)/e+(Xa(a)?0:Vn(a))}},_S=function(t,e){var a=kn(t),r,l;return!a&&pa(t)&&(r=a=t.radius||Bi,t.values?(t=Fi(t.values),(l=!Xa(t[0]))&&(r*=r)):t=Em(t.increment)),Lr(e,a?on(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),h=Bi,m=0,g=t.length,v,x;g--;)l?(v=t[g].x-f,x=t[g].y-p,v=v*v+x*x):v=Math.abs(t[g]-f),v<h&&(h=v,m=g);return m=!r||h<=r?t[m]:c,l||m===c||Xa(c)?m:m+Vn(c)}:Em(t))},gS=function(t,e,a,r){return Lr(kn(t)?!e:a===!0?!!(a=0):!r,function(){return kn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(e-t+a*.99))/a)*a*r)/r})},YC=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return function(r){return e.reduce(function(l,c){return c(l)},r)}},jC=function(t,e){return function(a){return t(parseFloat(a))+(e||Vn(a))}},ZC=function(t,e,a){return xS(t,e,0,1,a)},vS=function(t,e,a){return Lr(a,function(r){return t[~~e(r)]})},KC=function o(t,e,a){var r=e-t;return kn(t)?vS(t,o(0,t.length),e):Lr(a,function(l){return(r+(l-t)%r)%r+t})},QC=function o(t,e,a){var r=e-t,l=r*2;return kn(t)?vS(t,o(0,t.length-1),e):Lr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},uu=function(t){for(var e=0,a="",r,l,c,f;~(r=t.indexOf("random(",e));)c=t.indexOf(")",r),f=t.charAt(r+7)==="[",l=t.substr(r+7,c-r-7).match(f?tS:_m),a+=t.substr(e,r-e)+gS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=c+1;return a+t.substr(e,t.length-e)},xS=function(t,e,a,r,l){var c=e-t,f=r-a;return Lr(l,function(p){return a+((p-t)/c*f||0)})},JC=function o(t,e,a,r){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var c=Cn(t),f={},p,h,m,g,v;if(a===!0&&(r=1)&&(a=null),c)t={p:t},e={p:e};else if(kn(t)&&!kn(e)){for(m=[],g=t.length,v=g-2,h=1;h<g;h++)m.push(o(t[h-1],t[h]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return m[M](E-M)},a=e}else r||(t=Po(kn(t)?[]:{},t));if(!m){for(p in e)$m.call(f,t,p,"get",e[p]);l=function(E){return i_(E,f)||(c?t.p:t)}}}return Lr(a,l)},ny=function(t,e,a){var r=t.labels,l=Bi,c,f,p;for(c in r)f=r[c]-e,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Mi=function(t,e,a){var r=t.vars,l=r[e],c=je,f=t._ctx,p,h,m;if(l)return p=r[e+"Params"],h=r.callbackScope||t,a&&wr.length&&xf(),f&&(je=f),m=p?l.apply(h,p):l.call(h),je=c,m},Yl=function(t){return Dr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pn),t.progress()<1&&Mi(t,"onInterrupt"),t},Eo,yS=[],SS=function(t){if(t)if(t=!t.name&&t.default||t,qm()||t.headless){var e=t.name,a=on(t),r=e&&!a&&t.init?function(){this._props=[]}:t,l={init:lu,render:i_,add:$m,kill:p2,modifier:d2,rawVars:0},c={targetTest:0,get:0,getSetter:n_,aliases:{},register:0};if(Bo(),t!==r){if(xi[e])return;Ai(r,Ai(yf(t,l),c)),Po(r.prototype,Po(l,yf(t,c))),xi[r.prop=e]=r,t.targetTest&&(uf.push(r),Zm[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}iS(e,r),t.register&&t.register(ui,r,oi)}else yS.push(t)},He=255,jl={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},yp=function(t,e,a){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(a-e)*t*6:t<.5?a:t*3<2?e+(a-e)*(2/3-t)*6:e)*He+.5|0},MS=function(t,e,a){var r=t?Xa(t)?[t>>16,t>>8&He,t&He]:0:jl.black,l,c,f,p,h,m,g,v,x,E;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),jl[t])r=jl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&He,r&He,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&He,t&He]}else if(t.substr(0,3)==="hsl"){if(r=E=t.match(_m),!e)p=+r[0]%360/360,h=+r[1]/100,m=+r[2]/100,c=m<=.5?m*(h+1):m+h-m*h,l=m*2-c,r.length>3&&(r[3]*=1),r[0]=yp(p+1/3,l,c),r[1]=yp(p,l,c),r[2]=yp(p-1/3,l,c);else if(~t.indexOf("="))return r=t.match(Jy),a&&r.length<4&&(r[3]=1),r}else r=t.match(_m)||jl.transparent;r=r.map(Number)}return e&&!E&&(l=r[0]/He,c=r[1]/He,f=r[2]/He,g=Math.max(l,c,f),v=Math.min(l,c,f),m=(g+v)/2,g===v?p=h=0:(x=g-v,h=m>.5?x/(2-g-v):x/(g+v),p=g===l?(c-f)/x+(c<f?6:0):g===c?(f-l)/x+2:(l-c)/x+4,p*=60),r[0]=~~(p+.5),r[1]=~~(h*100+.5),r[2]=~~(m*100+.5)),a&&r.length<4&&(r[3]=1),r},ES=function(t){var e=[],a=[],r=-1;return t.split(Cr).forEach(function(l){var c=l.match(Mo)||[];e.push.apply(e,c),a.push(r+=c.length+1)}),e.c=a,e},iy=function(t,e,a){var r="",l=(t+r).match(Cr),c=e?"hsla(":"rgba(",f=0,p,h,m,g;if(!l)return t;if(l=l.map(function(v){return(v=MS(v,e,1))&&c+(e?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(m=ES(t),p=a.c,p.join(r)!==m.c.join(r)))for(h=t.replace(Cr,"1").split(Mo),g=h.length-1;f<g;f++)r+=h[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:a).shift());if(!h)for(h=t.split(Cr),g=h.length-1;f<g;f++)r+=h[f]+l[f];return r+h[g]},Cr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in jl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),$C=/hsl[a]?\(/,TS=function(t){var e=t.join(" "),a;if(Cr.lastIndex=0,Cr.test(e))return a=$C.test(e),t[1]=iy(t[1],a),t[0]=iy(t[0],a,ES(t[1])),!0},cu,yi=(function(){var o=Date.now,t=500,e=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,h,m,g,v,x,E=function M(S){var y=o()-r,U=S===!0,D,A,L,P;if((y>t||y<0)&&(a+=y-e),r+=y,L=r-a,D=L-c,(D>0||U)&&(P=++g.frame,v=L-g.time*1e3,g.time=L=L/1e3,c+=D+(D>=l?4:l-D),A=1),U||(p=h(M)),A)for(x=0;x<f.length;x++)f[x](L,v,P,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){eS&&(!gm&&qm()&&(sa=gm=window,Ym=sa.document||{},bi.gsap=ui,(sa.gsapVersions||(sa.gsapVersions=[])).push(ui.version),nS(vf||sa.GreenSockGlobals||!sa.gsap&&sa||{}),yS.forEach(SS)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),h=m||function(S){return setTimeout(S,c-g.time*1e3+1|0)},cu=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(p),cu=0,h=lu},lagSmoothing:function(S,y){t=S||1/0,e=Math.min(y||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,y,U){var D=y?function(A,L,P,z){S(A,L,P,z),g.remove(D)}:S;return g.remove(S),f[U?"unshift":"push"](D),Bo(),D},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},g})(),Bo=function(){return!cu&&yi.wake()},Me={},t2=/^[\d.\-M][\d.\-,\s]/,e2=/["']/g,n2=function(t){for(var e={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,h;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,h=p.substr(0,f),e[r]=isNaN(h)?h.replace(e2,"").trim():+h,r=p.substr(f+1).trim();return e},i2=function(t){var e=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<a?t.indexOf(")",a+1):a)},a2=function(t){var e=(t+"").split("("),a=Me[e[0]];return a&&e.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[n2(e[1])]:i2(t).split(",").map(oS)):Me._CE&&t2.test(t)?Me._CE("",t):a},bS=function(t){return function(e){return 1-t(1-e)}},AS=function o(t,e){for(var a=t._first,r;a;)a instanceof Zn?o(a,e):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==e&&(a.timeline?o(a.timeline,e):(r=a._ease,a._ease=a._yEase,a._yEase=r,a._yoyo=e)),a=a._next},ps=function(t,e){return t&&(on(t)?t:Me[t]||a2(t))||e},ys=function(t,e,a,r){a===void 0&&(a=function(p){return 1-e(1-p)}),r===void 0&&(r=function(p){return p<.5?e(p*2)/2:1-e((1-p)*2)/2});var l={easeIn:e,easeOut:a,easeInOut:r},c;return si(t,function(f){Me[f]=bi[f]=l,Me[c=f.toLowerCase()]=a;for(var p in l)Me[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Me[f+"."+p]=l[p]}),l},RS=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Sp=function o(t,e,a){var r=e>=1?e:1,l=(a||(t?.3:.45))/(e<1?e:1),c=l/mm*(Math.asin(1/r)||0),f=function(m){return m===1?1:r*Math.pow(2,-10*m)*LC((m-c)*l)+1},p=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:RS(f);return l=mm/l,p.config=function(h,m){return o(t,h,m)},p},Mp=function o(t,e){e===void 0&&(e=1.70158);var a=function(c){return c?--c*c*((e+1)*c+e)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:RS(a);return r.config=function(l){return o(t,l)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;ys(o+",Power"+(e-1),t?function(a){return Math.pow(a,e)}:function(a){return a},function(a){return 1-Math.pow(1-a,e)},function(a){return a<.5?Math.pow(a*2,e)/2:1-Math.pow((1-a)*2,e)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;ys("Elastic",Sp("in"),Sp("out"),Sp());(function(o,t){var e=1/t,a=2*e,r=2.5*e,l=function(f){return f<e?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};ys("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);ys("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});ys("Circ",function(o){return-(Ky(1-o*o)-1)});ys("Sine",function(o){return o===1?1:-UC(o*CC)+1});ys("Back",Mp("in"),Mp("out"),Mp());Me.SteppedEase=Me.steps=bi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var a=1/t,r=t+(e?0:1),l=e?1:0,c=1-Ge;return function(f){return((r*vu(0,c,f)|0)+l)*a}}};No.ease=Me["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Km+=o+","+o+"Params,"});var wS=function(t,e){this.id=DC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:rS,this.set=e?e.getSetter:n_},fu=(function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Io(this,+e.duration,1,1),this.data=e.data,je&&(this._ctx=je,je.data.push(this)),cu||yi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Io(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(Bo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Df(this,a),!l._dp||l.parent||cS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&la(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ge||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),sS(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+ty(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+ty(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?zo(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Sf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ge?0:this._rts,this.totalTime(vu(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),Cf(this),FC(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Bo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&la(r,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ri(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sf(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=PC);var r=Pn;return Pn=a,Jm(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Pn=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,ey(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,ey(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(zi(this,a),ri(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,ri(r)),this._dur||(this._zTime=-Ge),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-Ge)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this;return new Promise(function(l){var c=on(a)?a:lS,f=function(){var h=r.then;r.then=null,on(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=h),l(c),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){Yl(this)},o})();Ai(fu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Zn=(function(o){Zy(t,o);function t(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ri(a.sortChildren),Je&&la(a.parent||Je,Ia(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&fS(Ia(l),a.scrollTrigger),l}var e=t.prototype;return e.to=function(r,l,c){return Jl(0,arguments,this),this},e.from=function(r,l,c){return Jl(1,arguments,this),this},e.fromTo=function(r,l,c,f){return Jl(2,arguments,this),this},e.set=function(r,l,c){return l.duration=0,l.parent=this,Ql(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new mn(r,l,zi(this,c),1),this},e.call=function(r,l,c){return la(this,mn.delayedCall(0,r,l),c)},e.staggerTo=function(r,l,c,f,p,h,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=m,c.parent=this,new mn(r,c,zi(this,p)),this},e.staggerFrom=function(r,l,c,f,p,h,m){return c.runBackwards=1,Ql(c).immediateRender=ri(c.immediateRender),this.staggerTo(r,l,c,f,p,h,m)},e.staggerFromTo=function(r,l,c,f,p,h,m,g){return f.startAt=c,Ql(f).immediateRender=ri(f.immediateRender),this.staggerTo(r,l,f,p,h,m,g)},e.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=r<=0?0:_n(r),g=this._zTime<0!=r<0&&(this._initted||!h),v,x,E,M,S,y,U,D,A,L,P,z;if(this!==Je&&m>p&&r>=0&&(m=p),m!==this._tTime||c||g){if(f!==this._time&&h&&(m+=this._time-f,r+=this._time-f),v=m,A=this._start,D=this._ts,y=!D,g&&(h||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,S=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,l,c);if(v=_n(m%S),m===p?(M=this._repeat,v=h):(L=_n(m/S),M=~~L,M&&M===L&&(v=h,M--),v>h&&(v=h)),L=zo(this._tTime,S),!f&&this._tTime&&L!==M&&this._tTime-L*S-this._dur<=0&&(L=M),P&&M&1&&(v=h-v,z=1),M!==L&&!this._lock){var F=P&&L&1,b=F===(P&&M&1);if(M<L&&(F=!F),f=F?0:m%h?h:m,this._lock=1,this.render(f||(z?0:_n(M*S)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!z&&(this.invalidate()._lock=1),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,b&&(this._lock=2,f=F?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!z&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;AS(this,z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=kC(this,_n(f),_n(v)),U&&(m-=v-(v=U._start))),this._tTime=m,this._time=v,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&m&&!l&&!L&&(Mi(this,"onStart"),this._tTime!==m))return this;if(v>=f&&r>=0)for(x=this._first;x;){if(E=x._next,(x._act||v>=x._start)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,l,c),v!==this._time||!this._ts&&!y){U=0,E&&(m+=this._zTime=-Ge);break}}x=E}else{x=this._last;for(var O=r<0?r:v;x;){if(E=x._prev,(x._act||O<=x._end)&&x._ts&&U!==x){if(x.parent!==this)return this.render(r,l,c);if(x.render(x._ts>0?(O-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(O-x._start)*x._ts,l,c||Pn&&Jm(x)),v!==this._time||!this._ts&&!y){U=0,E&&(m+=this._zTime=O?-Ge:Ge);break}}x=E}}if(U&&!l&&(this.pause(),U.render(v>=f?0:-Ge)._zTime=v>=f?1:-1,this._ts))return this._start=A,Cf(this),this.render(r,l,c);this._onUpdate&&!l&&Mi(this,"onUpdate",!0),(m===p&&this._tTime>=this.totalDuration()||!m&&f)&&(A===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(m===p&&this._ts>0||!m&&this._ts<0)&&Dr(this,1),!l&&!(r<0&&!f)&&(m||f||!p)&&(Mi(this,m===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<p&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,l){var c=this;if(Xa(l)||(l=zi(this,l,r)),!(r instanceof fu)){if(kn(r))return r.forEach(function(f){return c.add(f,l)}),this;if(Cn(r))return this.addLabel(r,l);if(on(r))r=mn.delayedCall(0,r);else return this}return this!==r?la(this,r,l):this},e.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Bi);for(var p=[],h=this._first;h;)h._start>=f&&(h instanceof mn?l&&p.push(h):(c&&p.push(h),r&&p.push.apply(p,h.getChildren(!0,l,c)))),h=h._next;return p},e.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},e.remove=function(r){return Cn(r)?this.removeLabel(r):on(r)?this.killTweensOf(r):(r.parent===this&&wf(this,r),r===this._recent&&(this._recent=this._last),ds(this))},e.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(yi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},e.addLabel=function(r,l){return this.labels[r]=zi(this,l),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,l,c){var f=mn.delayedCall(0,l||lu,c);return f.data="isPause",this._hasPause=1,la(this,f,zi(this,r))},e.removePause=function(r){var l=this._first;for(r=zi(this,r);l;)l._start===r&&l.data==="isPause"&&Dr(l),l=l._next},e.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)Er!==f[p]&&f[p].kill(r,l);return this},e.getTweensOf=function(r,l){for(var c=[],f=Fi(r),p=this._first,h=Xa(l),m;p;)p instanceof mn?zC(p._targets,f)&&(h?(!Er||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(m=p.getTweensOf(f,l)).length&&c.push.apply(c,m),p=p._next;return c},e.tweenTo=function(r,l){l=l||{};var c=this,f=zi(c,r),p=l,h=p.startAt,m=p.onStart,g=p.onStartParams,v=p.immediateRender,x,E=mn.to(c,Ai({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||Ge,onStart:function(){if(c.pause(),!x){var S=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());E._dur!==S&&Io(E,S,0,1).render(E._time,!0,!0),x=1}m&&m.apply(E,g||[])}},l));return v?E.render(0):E},e.tweenFromTo=function(r,l,c){return this.tweenTo(l,Ai({startAt:{time:zi(this,r)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),ny(this,zi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),ny(this,zi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ge)},e.shiftChildren=function(r,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,h;f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(h in p)p[h]>=c&&(p[h]+=r);return ds(this)},e.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ds(this)},e.totalDuration=function(r){var l=0,c=this,f=c._last,p=Bi,h,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(g=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,la(c,f,m-f._delay,1)._lock=0):p=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=h;Io(c,c===Je&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Je._ts&&(sS(Je,Sf(r,Je)),aS=yi.frame),yi.frame>=Jx){Jx+=Ei.autoSleep||120;var l=Je._first;if((!l||!l._ts)&&Ei.autoSleep&&yi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||yi.sleep()}}},t})(fu);Ai(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var r2=function(t,e,a,r,l,c,f){var p=new oi(this._pt,t,e,0,1,NS,null,l),h=0,m=0,g,v,x,E,M,S,y,U;for(p.b=a,p.e=r,a+="",r+="",(y=~r.indexOf("random("))&&(r=uu(r)),c&&(U=[a,r],c(U,t,e),a=U[0],r=U[1]),v=a.match(vp)||[];g=vp.exec(r);)E=g[0],M=r.substring(h,g.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),E!==v[m++]&&(S=parseFloat(v[m-1])||0,p._pt={_next:p._pt,p:M||m===1?M:",",s:S,c:E.charAt(1)==="="?Ao(S,E)-S:parseFloat(E)-S,m:x&&x<4?Math.round:0},h=vp.lastIndex);return p.c=h<r.length?r.substring(h,r.length):"",p.fp=f,($y.test(r)||y)&&(p.e=0),this._pt=p,p},$m=function(t,e,a,r,l,c,f,p,h,m){on(r)&&(r=r(l||0,t,c));var g=t[e],v=a!=="get"?a:on(g)?h?t[e.indexOf("set")||!on(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():g,x=on(g)?h?c2:LS:e_,E;if(Cn(r)&&(~r.indexOf("random(")&&(r=uu(r)),r.charAt(1)==="="&&(E=Ao(v,r)+(Vn(v)||0),(E||E===0)&&(r=E))),!m||v!==r||Tm)return!isNaN(v*r)&&r!==""?(E=new oi(this._pt,t,e,+v||0,r-(v||0),typeof g=="boolean"?h2:OS,0,x),h&&(E.fp=h),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&jm(e,r),r2.call(this,t,e,v,r,x,p||Ei.stringFilter,h))},s2=function(t,e,a,r,l){if(on(t)&&(t=$l(t,l,e,a,r)),!pa(t)||t.style&&t.nodeType||kn(t)||Qy(t))return Cn(t)?$l(t,l,e,a,r):t;var c={},f;for(f in t)c[f]=$l(t[f],l,e,a,r);return c},CS=function(t,e,a,r,l,c){var f,p,h,m;if(xi[t]&&(f=new xi[t]).init(l,f.rawVars?e[t]:s2(e[t],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new oi(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==Eo))for(h=a._ptLookup[a._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=p;return f},Er,Tm,t_=function o(t,e,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,h=r.onUpdate,m=r.runBackwards,g=r.yoyoEase,v=r.keyframes,x=r.autoRevert,E=t._dur,M=t._startAt,S=t._targets,y=t.parent,U=y&&y.data==="nested"?y.vars.targets:S,D=t._overwrite==="auto"&&!Xm,A=t.timeline,L,P,z,F,b,O,k,Z,et,ht,rt,B,Y;if(A&&(!v||!l)&&(l="none"),t._ease=ps(l,No.ease),t._yEase=g?bS(ps(g===!0?l:g,No.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!r.runBackwards,!A||v&&!r.stagger){if(Z=S[0]?hs(S[0]).harness:0,B=Z&&r[Z.prop],L=yf(r,Zm),M&&(M._zTime<0&&M.progress(1),e<0&&m&&f&&!x?M.render(-1,!0):M.revert(m&&E?lf:NC),M._lazy=0),c){if(Dr(t._startAt=mn.set(S,Ai({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&ri(p),startAt:null,delay:0,onUpdate:h&&function(){return Mi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pn||!f&&!x)&&t._startAt.revert(lf),f&&E&&e<=0&&a<=0){e&&(t._zTime=e);return}}else if(m&&E&&!M){if(e&&(f=!1),z=Ai({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ri(p),immediateRender:f,stagger:0,parent:y},L),B&&(z[Z.prop]=B),Dr(t._startAt=mn.set(S,z)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Pn?t._startAt.revert(lf):t._startAt.render(-1,!0)),t._zTime=e,!f)o(t._startAt,Ge,Ge);else if(!e)return}for(t._pt=t._ptCache=0,p=E&&ri(p)||p&&!E,P=0;P<S.length;P++){if(b=S[P],k=b._gsap||Qm(S)[P]._gsap,t._ptLookup[P]=ht={},vm[k.id]&&wr.length&&xf(),rt=U===S?P:U.indexOf(b),Z&&(et=new Z).init(b,B||L,t,rt,U)!==!1&&(t._pt=F=new oi(t._pt,b,et.name,0,1,et.render,et,0,et.priority),et._props.forEach(function(G){ht[G]=F}),et.priority&&(O=1)),!Z||B)for(z in L)xi[z]&&(et=CS(z,L,t,rt,b,U))?et.priority&&(O=1):ht[z]=F=$m.call(t,b,z,"get",L[z],rt,U,0,r.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),D&&t._pt&&(Er=t,Je.killTweensOf(b,ht,t.globalTime(e)),Y=!t.parent,Er=0),t._pt&&p&&(vm[k.id]=1)}O&&PS(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!Y,v&&e<=0&&A.render(Bi,!0,!0)},o2=function(t,e,a,r,l,c,f,p){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,g,v,x;if(!h)for(h=t._ptCache[e]=[],v=t._ptLookup,x=t._targets.length;x--;){if(m=v[x][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return Tm=1,t.vars[e]="+=0",t_(t,f),Tm=0,p?ou(e+" not eligible for reset"):1;h.push(m)}for(x=h.length;x--;)g=h[x],m=g._pt||g,m.s=(r||r===0)&&!l?r:m.s+(r||0)+c*m.c,m.c=a-m.s,g.e&&(g.e=cn(a)+Vn(g.e)),g.b&&(g.b=m.s+Vn(g.b))},l2=function(t,e){var a=t[0]?hs(t[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return e;l=Po({},e);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},u2=function(t,e,a,r){var l=e.ease||r||"power1.inOut",c,f;if(kn(e))f=a[t]||(a[t]=[]),e.forEach(function(p,h){return f.push({t:h/(e.length-1)*100,v:p,e:l})});else for(c in e)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},$l=function(t,e,a,r,l){return on(t)?t.call(e,a,r,l):Cn(t)&&~t.indexOf("random(")?uu(t):t},DS=Km+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",US={};si(DS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return US[o]=1});var mn=(function(o){Zy(t,o);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:Ql(r))||this;var p=f.vars,h=p.duration,m=p.delay,g=p.immediateRender,v=p.stagger,x=p.overwrite,E=p.keyframes,M=p.defaults,S=p.scrollTrigger,y=p.yoyoEase,U=r.parent||Je,D=(kn(a)||Qy(a)?Xa(a[0]):"length"in r)?[a]:Fi(a),A,L,P,z,F,b,O,k;if(f._targets=D.length?Qm(D):ou("GSAP target "+a+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,E||v||tf(h)||tf(m)){if(r=f.vars,A=f.timeline=new Zn({data:"nested",defaults:M||{},targets:U&&U.data==="nested"?U.vars.targets:D}),A.kill(),A.parent=A._dp=Ia(f),A._start=0,v||tf(h)||tf(m)){if(z=D.length,O=v&&mS(v),pa(v))for(F in v)~DS.indexOf(F)&&(k||(k={}),k[F]=v[F]);for(L=0;L<z;L++)P=yf(r,US),P.stagger=0,y&&(P.yoyoEase=y),k&&Po(P,k),b=D[L],P.duration=+$l(h,Ia(f),L,b,D),P.delay=(+$l(m,Ia(f),L,b,D)||0)-f._delay,!v&&z===1&&P.delay&&(f._delay=m=P.delay,f._start+=m,P.delay=0),A.to(b,P,O?O(L,b,D):0),A._ease=Me.none;A.duration()?h=m=0:f.timeline=0}else if(E){Ql(Ai(A.vars.defaults,{ease:"none"})),A._ease=ps(E.ease||r.ease||"none");var Z=0,et,ht,rt;if(kn(E))E.forEach(function(B){return A.to(D,B,">")}),A.duration();else{P={};for(F in E)F==="ease"||F==="easeEach"||u2(F,E[F],P,E.easeEach);for(F in P)for(et=P[F].sort(function(B,Y){return B.t-Y.t}),Z=0,L=0;L<et.length;L++)ht=et[L],rt={ease:ht.e,duration:(ht.t-(L?et[L-1].t:0))/100*h},rt[F]=ht.v,A.to(D,rt,Z),Z+=rt.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||f.duration(h=A.duration())}else f.timeline=0;return x===!0&&!Xm&&(Er=Ia(f),Je.killTweensOf(D),Er=0),la(U,Ia(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!h&&!E&&f._start===_n(U._time)&&ri(g)&&HC(Ia(f))&&U.data!=="nested")&&(f._tTime=-Ge,f.render(Math.max(0,-m)||0)),S&&fS(Ia(f),S),f}var e=t.prototype;return e.render=function(r,l,c){var f=this._time,p=this._tDur,h=this._dur,m=r<0,g=r>p-Ge&&!m?p:r<Ge?0:r,v,x,E,M,S,y,U,D,A;if(!h)VC(this,r,l,c);else if(g!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(v=g,D=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+r,l,c);if(v=_n(g%M),g===p?(E=this._repeat,v=h):(S=_n(g/M),E=~~S,E&&E===S?(v=h,E--):v>h&&(v=h)),y=this._yoyo&&E&1,y&&(A=this._yEase,v=h-v),S=zo(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(D&&this._yEase&&AS(D,y),this.vars.repeatRefresh&&!y&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(_n(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(hS(this,m?r:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(h!==this._dur)return this.render(r,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=U=(A||this._ease)(v/h),this._from&&(this.ratio=U=1-U),!f&&g&&!l&&!S&&(Mi(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(U,x.d),x=x._next;D&&D.render(r<0?r:D._dur*D._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(m&&xm(this,r,l,c),Mi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&Mi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&xm(this,r,!0,!0),(r||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Dr(this,1),!l&&!(m&&!f)&&(g||f||y)&&(Mi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},e.resetTo=function(r,l,c,f,p){cu||yi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||t_(this,h),m=this._ease(h/this._dur),o2(this,r,l,c,f,m,h,p)?this.resetTo(r,l,c,f,1):(Df(this,0),this.parent||uS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Yl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Er&&Er.vars.overwrite!==!0)._first||Yl(this),this.parent&&c!==this.timeline.totalDuration()&&Io(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?Fi(r):f,h=this._ptLookup,m=this._pt,g,v,x,E,M,S,y;if((!l||l==="all")&&BC(f,p))return l==="all"&&(this._pt=0),Yl(this);for(g=this._op=this._op||[],l!=="all"&&(Cn(l)&&(M={},si(l,function(U){return M[U]=1}),l=M),l=l2(f,l)),y=f.length;y--;)if(~p.indexOf(f[y])){v=h[y],l==="all"?(g[y]=l,E=v,x={}):(x=g[y]=g[y]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&wf(this,S,"_pt"),delete v[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&m&&Yl(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return Jl(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return Jl(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Je.killTweensOf(r,l,c)},t})(fu);Ai(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(o){mn[o]=function(){var t=new Zn,e=Sm.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var e_=function(t,e,a){return t[e]=a},LS=function(t,e,a){return t[e](a)},c2=function(t,e,a,r){return t[e](r.fp,a)},f2=function(t,e,a){return t.setAttribute(e,a)},n_=function(t,e){return on(t[e])?LS:Wm(t[e])&&t.setAttribute?f2:e_},OS=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},h2=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},NS=function(t,e){var a=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=e.c}e.set(e.t,e.p,r,e)},i_=function(t,e){for(var a=e._pt;a;)a.r(t,a.d),a=a._next},d2=function(t,e,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,e,a),l=c},p2=function(t){for(var e=this._pt,a,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?wf(this,e,"_pt"):e.dep||(a=1),e=r;return!a},m2=function(t,e,a,r){r.mSet(t,e,r.m.call(r.tween,a,r.mt),r)},PS=function(t){for(var e=t._pt,a,r,l,c;e;){for(a=e._next,r=l;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:c)?e._prev._next=e:l=e,(e._next=r)?r._prev=e:c=e,e=a}t._pt=l},oi=(function(){function o(e,a,r,l,c,f,p,h,m){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||OS,this.d=p||this,this.set=h||e_,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=m2,this.m=a,this.mt=l,this.tween=r},o})();si(Km+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Zm[o]=1});bi.TweenMax=bi.TweenLite=mn;bi.TimelineLite=bi.TimelineMax=Zn;Je=new Zn({sortChildren:!1,defaults:No,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=TS;var ms=[],cf={},_2=[],ay=0,g2=0,Ep=function(t){return(cf[t]||_2).map(function(e){return e()})},bm=function(){var t=Date.now(),e=[];t-ay>2&&(Ep("matchMediaInit"),ms.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,h;for(f in r)c=sa.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,h=1);h&&(a.revert(),p&&e.push(a))}),Ep("matchMediaRevert"),e.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),ay=t,Ep("matchMedia"))},zS=(function(){function o(e,a){this.selector=a&&Mm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=g2++,e&&this.add(e)}var t=o.prototype;return t.add=function(a,r,l){on(a)&&(l=r,r=a,a=on);var c=this,f=function(){var h=je,m=c.selector,g;return h&&h!==c&&h.data.push(c),l&&(c.selector=Mm(l)),je=c,g=r.apply(c,arguments),on(g)&&c._r.push(g),je=h,c.selector=m,c.isReverted=!1,g};return c.last=f,a===on?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var r=je;je=null,a(this),je=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof mn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,h;p--;)h=l.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(a)}),p=l.data.length;p--;)h=l.data[p],h instanceof Zn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof mn)&&h.revert&&h.revert(a);l._r.forEach(function(m){return m(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=ms.length;c--;)ms[c].id===this.id&&ms.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),v2=(function(){function o(e){this.contexts=[],this.scope=e,je&&je.data.push(this)}var t=o.prototype;return t.add=function(a,r,l){pa(a)||(a={matches:a});var c=new zS(0,l||this.scope),f=c.conditions={},p,h,m;je&&!c.selector&&(c.selector=je.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(h in a)h==="all"?m=1:(p=sa.matchMedia(a[h]),p&&(ms.indexOf(c)<0&&ms.push(c),(f[h]=p.matches)&&(m=1),p.addListener?p.addListener(bm):p.addEventListener("change",bm)));return m&&r(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),Mf={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];e.forEach(function(r){return SS(r)})},timeline:function(t){return new Zn(t)},getTweensOf:function(t,e){return Je.getTweensOf(t,e)},getProperty:function(t,e,a,r){Cn(t)&&(t=Fi(t)[0]);var l=hs(t||{}).get,c=a?lS:oS;return a==="native"&&(a=""),t&&(e?c((xi[e]&&xi[e].get||l)(t,e,a,r)):function(f,p,h){return c((xi[f]&&xi[f].get||l)(t,f,p,h))})},quickSetter:function(t,e,a){if(t=Fi(t),t.length>1){var r=t.map(function(m){return ui.quickSetter(m,e,a)}),l=r.length;return function(m){for(var g=l;g--;)r[g](m)}}t=t[0]||{};var c=xi[e],f=hs(t),p=f.harness&&(f.harness.aliases||{})[e]||e,h=c?function(m){var g=new c;Eo._pt=0,g.init(t,a?m+a:m,Eo,0,[t]),g.render(1,g),Eo._pt&&i_(1,Eo)}:f.set(t,p);return c?h:function(m){return h(t,p,a?m+a:m,f,1)}},quickTo:function(t,e,a){var r,l=ui.to(t,Ai((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,h,m){return l.resetTo(e,p,h,m)};return c.tween=l,c},isTweening:function(t){return Je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ps(t.ease,No.ease)),$x(No,t||{})},config:function(t){return $x(Ei,t||{})},registerEffect:function(t){var e=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!xi[f]&&!bi[f]&&ou(e+" effect requires "+f+" plugin.")}),xp[e]=function(f,p,h){return a(Fi(f),Ai(p||{},l),h)},c&&(Zn.prototype[e]=function(f,p,h){return this.add(xp[e](f,pa(p)?p:(h=p)&&{},this),h)})},registerEase:function(t,e){Me[t]=ps(e)},parseEase:function(t,e){return arguments.length?ps(t,e):Me},getById:function(t){return Je.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var a=new Zn(t),r,l;for(a.smoothChildTiming=ri(t.smoothChildTiming),Je.remove(a),a._dp=0,a._time=a._tTime=Je._time,r=Je._first;r;)l=r._next,(e||!(!r._dur&&r instanceof mn&&r.vars.onComplete===r._targets[0]))&&la(a,r,r._start-r._delay),r=l;return la(Je,a,0),a},context:function(t,e){return t?new zS(t,e):je},matchMedia:function(t){return new v2(t)},matchMediaRefresh:function(){return ms.forEach(function(t){var e=t.conditions,a,r;for(r in e)e[r]&&(e[r]=!1,a=1);a&&t.revert()})||bm()},addEventListener:function(t,e){var a=cf[t]||(cf[t]=[]);~a.indexOf(e)||a.push(e)},removeEventListener:function(t,e){var a=cf[t],r=a&&a.indexOf(e);r>=0&&a.splice(r,1)},utils:{wrap:KC,wrapYoyo:QC,distribute:mS,random:gS,snap:_S,normalize:ZC,getUnit:Vn,clamp:WC,splitColor:MS,toArray:Fi,selector:Mm,mapRange:xS,pipe:YC,unitize:jC,interpolate:JC,shuffle:pS},install:nS,effects:xp,ticker:yi,updateRoot:Zn.updateRoot,plugins:xi,globalTimeline:Je,core:{PropTween:oi,globals:iS,Tween:mn,Timeline:Zn,Animation:fu,getCache:hs,_removeLinkedListItem:wf,reverting:function(){return Pn},context:function(t){return t&&je&&(je.data.push(t),t._ctx=je),je},suppressOverwrites:function(t){return Xm=t}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Mf[o]=mn[o]});yi.add(Zn.updateRoot);Eo=Mf.to({},{duration:0});var x2=function(t,e){for(var a=t._pt;a&&a.p!==e&&a.op!==e&&a.fp!==e;)a=a._next;return a},y2=function(t,e){var a=t._targets,r,l,c;for(r in e)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=x2(c,r)),c&&c.modifier&&c.modifier(e[r],t,a[l],r))},Tp=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,h;if(Cn(l)&&(p={},si(l,function(m){return p[m]=1}),l=p),e){p={};for(h in l)p[h]=e(l[h]);l=p}y2(f,l)}}}},ui=Mf.registerPlugin({name:"attr",init:function(t,e,a,r,l){var c,f,p;this.tween=a;for(c in e)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",e[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,e){for(var a=e._pt;a;)Pn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,e){for(var a=e.length;a--;)this.add(t,a,t[a]||0,e[a],0,0,0,0,0,1)}},Tp("roundProps",Em),Tp("modifiers"),Tp("snap",_S))||Mf;mn.version=Zn.version=ui.version="3.13.0";eS=1;qm()&&Bo();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ry,Tr,Ro,a_,fs,sy,r_,S2=function(){return typeof window<"u"},Wa={},ss=180/Math.PI,wo=Math.PI/180,vo=Math.atan2,oy=1e8,s_=/([A-Z])/g,M2=/(left|right|width|margin|padding|x)/i,E2=/[\s,\(]\S/,fa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Am=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},T2=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},b2=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},A2=function(t,e){var a=e.s+e.c*t;e.set(e.t,e.p,~~(a+(a<0?-.5:.5))+e.u,e)},IS=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},BS=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},R2=function(t,e,a){return t.style[e]=a},w2=function(t,e,a){return t.style.setProperty(e,a)},C2=function(t,e,a){return t._gsap[e]=a},D2=function(t,e,a){return t._gsap.scaleX=t._gsap.scaleY=a},U2=function(t,e,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},L2=function(t,e,a,r,l){var c=t._gsap;c[e]=a,c.renderTransform(l,c)},$e="transform",li=$e+"Origin",O2=function o(t,e){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in Wa&&l){if(this.tfm=this.tfm||{},t!=="transform")t=fa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Ba(r,f)}):this.tfm[t]=c.x?c[t]:Ba(r,t),t===li&&(this.tfm.zOrigin=c.zOrigin);else return fa.transform.split(",").forEach(function(f){return o.call(a,f,e)});if(this.props.indexOf($e)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,e,"")),t=$e}(l||e)&&this.props.push(t,e,l[t])},FS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},N2=function(){var t=this.props,e=this.target,a=e.style,r=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(s_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=r_(),(!l||!l.isStart)&&!a[$e]&&(FS(a),r.zOrigin&&a[li]&&(a[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},HS=function(t,e){var a={target:t,props:[],revert:N2,save:O2};return t._gsap||ui.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return a.save(r)}),a},GS,Rm=function(t,e){var a=Tr.createElementNS?Tr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Tr.createElement(t);return a&&a.style?a:Tr.createElement(t)},Hi=function o(t,e,a){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(s_,"-$1").toLowerCase())||r.getPropertyValue(e)||!a&&o(t,Fo(e)||e,1)||""},ly="O,Moz,ms,Ms,Webkit".split(","),Fo=function(t,e,a){var r=e||fs,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(ly[c]+t in l););return c<0?null:(c===3?"ms":c>=0?ly[c]:"")+t},wm=function(){S2()&&window.document&&(ry=window,Tr=ry.document,Ro=Tr.documentElement,fs=Rm("div")||{style:{}},Rm("div"),$e=Fo($e),li=$e+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",GS=!!Fo("perspective"),r_=ui.core.reverting,a_=1)},uy=function(t){var e=t.ownerSVGElement,a=Rm("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),Ro.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),Ro.removeChild(a),l},cy=function(t,e){for(var a=e.length;a--;)if(t.hasAttribute(e[a]))return t.getAttribute(e[a])},VS=function(t){var e,a;try{e=t.getBBox()}catch{e=uy(t),a=1}return e&&(e.width||e.height)||a||(e=uy(t)),e&&!e.width&&!e.x&&!e.y?{x:+cy(t,["x","cx","x1"])||0,y:+cy(t,["y","cy","y1"])||0,width:0,height:0}:e},kS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&VS(t))},xs=function(t,e){if(e){var a=t.style,r;e in Wa&&e!==li&&(e=$e),a.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),a.removeProperty(r==="--"?e:e.replace(s_,"-$1").toLowerCase())):a.removeAttribute(e)}},br=function(t,e,a,r,l,c){var f=new oi(t._pt,e,a,0,1,c?BS:IS);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},fy={deg:1,rad:1,turn:1},P2={grid:1,flex:1},Ur=function o(t,e,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=fs.style,p=M2.test(e),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(p?"Width":"Height"),g=100,v=r==="px",x=r==="%",E,M,S,y;if(r===c||!l||fy[r]||fy[c])return l;if(c!=="px"&&!v&&(l=o(t,e,a,"px")),y=t.getCTM&&kS(t),(x||c==="%")&&(Wa[e]||~e.indexOf("adius")))return E=y?t.getBBox()[p?"width":"height"]:t[m],cn(x?l/E*g:l/100*E);if(f[p?"width":"height"]=g+(v?c:r),M=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,y&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Tr||!M.appendChild)&&(M=Tr.body),S=M._gsap,S&&x&&S.width&&p&&S.time===yi.time&&!S.uncache)return cn(l/S.width*g);if(x&&(e==="height"||e==="width")){var U=t.style[e];t.style[e]=g+r,E=t[m],U?t.style[e]=U:xs(t,e)}else(x||c==="%")&&!P2[Hi(M,"display")]&&(f.position=Hi(t,"position")),M===t&&(f.position="static"),M.appendChild(fs),E=fs[m],M.removeChild(fs),f.position="absolute";return p&&x&&(S=hs(M),S.time=yi.time,S.width=M[m]),cn(v?E*l/g:E&&l?g/E*l:0)},Ba=function(t,e,a,r){var l;return a_||wm(),e in fa&&e!=="transform"&&(e=fa[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wa[e]&&e!=="transform"?(l=du(t,r),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Tf(Hi(t,li))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=Ef[e]&&Ef[e](t,e,a)||Hi(t,e)||rS(t,e)||(e==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Ur(t,e,l,a)+a:l},z2=function(t,e,a,r){if(!a||a==="none"){var l=Fo(e,t,1),c=l&&Hi(t,l,1);c&&c!==a?(e=l,a=c):e==="borderColor"&&(a=Hi(t,"borderTopColor"))}var f=new oi(this._pt,t.style,e,0,1,NS),p=0,h=0,m,g,v,x,E,M,S,y,U,D,A,L;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=Hi(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=t.style[e],t.style[e]=r,r=Hi(t,e)||r,M?t.style[e]=M:xs(t,e)),m=[a,r],TS(m),a=m[0],r=m[1],v=a.match(Mo)||[],L=r.match(Mo)||[],L.length){for(;g=Mo.exec(r);)S=g[0],U=r.substring(p,g.index),E?E=(E+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(E=1),S!==(M=v[h++]||"")&&(x=parseFloat(M)||0,A=M.substr((x+"").length),S.charAt(1)==="="&&(S=Ao(x,S)+A),y=parseFloat(S),D=S.substr((y+"").length),p=Mo.lastIndex-D.length,D||(D=D||Ei.units[e]||A,p===r.length&&(r+=D,f.e+=D)),A!==D&&(x=Ur(t,e,M,D)||0),f._pt={_next:f._pt,p:U||h===1?U:",",s:x,c:y-x,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=e==="display"&&r==="none"?BS:IS;return $y.test(r)&&(f.e=0),this._pt=f,f},hy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},I2=function(t){var e=t.split(" "),a=e[0],r=e[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),e[0]=hy[a]||a,e[1]=hy[r]||r,e.join(" ")},B2=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var a=e.t,r=a.style,l=e.u,c=a._gsap,f,p,h;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],Wa[f]&&(p=1,f=f==="transformOrigin"?li:$e),xs(a,f);p&&(xs(a,$e),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",du(a,1),c.uncache=1,FS(r)))}},Ef={clearProps:function(t,e,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new oi(t._pt,e,a,0,0,B2);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},hu=[1,0,0,1,0,0],XS={},WS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},dy=function(t){var e=Hi(t,$e);return WS(e)?hu:e.substr(7).match(Jy).map(cn)},o_=function(t,e){var a=t._gsap||hs(t),r=t.style,l=dy(t),c,f,p,h;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?hu:l):(l===hu&&!t.offsetParent&&t!==Ro&&!a.svg&&(p=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,Ro.appendChild(t)),l=dy(t),p?r.display=p:xs(t,"display"),h&&(f?c.insertBefore(t,f):c?c.appendChild(t):Ro.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Cm=function(t,e,a,r,l,c){var f=t._gsap,p=l||o_(t,!0),h=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,x=p[0],E=p[1],M=p[2],S=p[3],y=p[4],U=p[5],D=e.split(" "),A=parseFloat(D[0])||0,L=parseFloat(D[1])||0,P,z,F,b;a?p!==hu&&(z=x*S-E*M)&&(F=A*(S/z)+L*(-M/z)+(M*U-S*y)/z,b=A*(-E/z)+L*(x/z)-(x*U-E*y)/z,A=F,L=b):(P=VS(t),A=P.x+(~D[0].indexOf("%")?A/100*P.width:A),L=P.y+(~(D[1]||D[0]).indexOf("%")?L/100*P.height:L)),r||r!==!1&&f.smooth?(y=A-h,U=L-m,f.xOffset=g+(y*x+U*M)-y,f.yOffset=v+(y*E+U*S)-U):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=L,f.smooth=!!r,f.origin=e,f.originIsAbsolute=!!a,t.style[li]="0px 0px",c&&(br(c,f,"xOrigin",h,A),br(c,f,"yOrigin",m,L),br(c,f,"xOffset",g,f.xOffset),br(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+L)},du=function(t,e){var a=t._gsap||new wS(t);if("x"in a&&!e&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),h=Hi(t,li)||"0",m,g,v,x,E,M,S,y,U,D,A,L,P,z,F,b,O,k,Z,et,ht,rt,B,Y,G,ut,N,X,ft,dt,vt,wt;return m=g=v=M=S=y=U=D=A=0,x=E=1,a.svg=!!(t.getCTM&&kS(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[$e]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[$e]!=="none"?p[$e]:"")),r.scale=r.rotate=r.translate="none"),z=o_(t,a.svg),a.svg&&(a.uncache?(G=t.getBBox(),h=a.xOrigin-G.x+"px "+(a.yOrigin-G.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Cm(t,Y||h,!!Y||a.originIsAbsolute,a.smooth!==!1,z)),L=a.xOrigin||0,P=a.yOrigin||0,z!==hu&&(k=z[0],Z=z[1],et=z[2],ht=z[3],m=rt=z[4],g=B=z[5],z.length===6?(x=Math.sqrt(k*k+Z*Z),E=Math.sqrt(ht*ht+et*et),M=k||Z?vo(Z,k)*ss:0,U=et||ht?vo(et,ht)*ss+M:0,U&&(E*=Math.abs(Math.cos(U*wo))),a.svg&&(m-=L-(L*k+P*et),g-=P-(L*Z+P*ht))):(wt=z[6],dt=z[7],N=z[8],X=z[9],ft=z[10],vt=z[11],m=z[12],g=z[13],v=z[14],F=vo(wt,ft),S=F*ss,F&&(b=Math.cos(-F),O=Math.sin(-F),Y=rt*b+N*O,G=B*b+X*O,ut=wt*b+ft*O,N=rt*-O+N*b,X=B*-O+X*b,ft=wt*-O+ft*b,vt=dt*-O+vt*b,rt=Y,B=G,wt=ut),F=vo(-et,ft),y=F*ss,F&&(b=Math.cos(-F),O=Math.sin(-F),Y=k*b-N*O,G=Z*b-X*O,ut=et*b-ft*O,vt=ht*O+vt*b,k=Y,Z=G,et=ut),F=vo(Z,k),M=F*ss,F&&(b=Math.cos(F),O=Math.sin(F),Y=k*b+Z*O,G=rt*b+B*O,Z=Z*b-k*O,B=B*b-rt*O,k=Y,rt=G),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,y=180-y),x=cn(Math.sqrt(k*k+Z*Z+et*et)),E=cn(Math.sqrt(B*B+wt*wt)),F=vo(rt,B),U=Math.abs(F)>2e-4?F*ss:0,A=vt?1/(vt<0?-vt:vt):0),a.svg&&(Y=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!WS(Hi(t,$e)),Y&&t.setAttribute("transform",Y))),Math.abs(U)>90&&Math.abs(U)<270&&(l?(x*=-1,U+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,U+=U<=0?180:-180)),e=e||a.uncache,a.x=m-((a.xPercent=m&&(!e&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!e&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=cn(x),a.scaleY=cn(E),a.rotation=cn(M)+f,a.rotationX=cn(S)+f,a.rotationY=cn(y)+f,a.skewX=U+f,a.skewY=D+f,a.transformPerspective=A+c,(a.zOrigin=parseFloat(h.split(" ")[2])||!e&&a.zOrigin||0)&&(r[li]=Tf(h)),a.xOffset=a.yOffset=0,a.force3D=Ei.force3D,a.renderTransform=a.svg?H2:GS?qS:F2,a.uncache=0,a},Tf=function(t){return(t=t.split(" "))[0]+" "+t[1]},bp=function(t,e,a){var r=Vn(e);return cn(parseFloat(e)+parseFloat(Ur(t,"x",a+"px",r)))+r},F2=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,qS(t,e)},ns="0deg",Wl="0px",is=") ",qS=function(t,e){var a=e||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,h=a.rotation,m=a.rotationY,g=a.rotationX,v=a.skewX,x=a.skewY,E=a.scaleX,M=a.scaleY,S=a.transformPerspective,y=a.force3D,U=a.target,D=a.zOrigin,A="",L=y==="auto"&&t&&t!==1||y===!0;if(D&&(g!==ns||m!==ns)){var P=parseFloat(m)*wo,z=Math.sin(P),F=Math.cos(P),b;P=parseFloat(g)*wo,b=Math.cos(P),c=bp(U,c,z*b*-D),f=bp(U,f,-Math.sin(P)*-D),p=bp(U,p,F*b*-D+D)}S!==Wl&&(A+="perspective("+S+is),(r||l)&&(A+="translate("+r+"%, "+l+"%) "),(L||c!==Wl||f!==Wl||p!==Wl)&&(A+=p!==Wl||L?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+is),h!==ns&&(A+="rotate("+h+is),m!==ns&&(A+="rotateY("+m+is),g!==ns&&(A+="rotateX("+g+is),(v!==ns||x!==ns)&&(A+="skew("+v+", "+x+is),(E!==1||M!==1)&&(A+="scale("+E+", "+M+is),U.style[$e]=A||"translate(0, 0)"},H2=function(t,e){var a=e||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,h=a.skewX,m=a.skewY,g=a.scaleX,v=a.scaleY,x=a.target,E=a.xOrigin,M=a.yOrigin,S=a.xOffset,y=a.yOffset,U=a.forceCSS,D=parseFloat(c),A=parseFloat(f),L,P,z,F,b;p=parseFloat(p),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,p+=m),p||h?(p*=wo,h*=wo,L=Math.cos(p)*g,P=Math.sin(p)*g,z=Math.sin(p-h)*-v,F=Math.cos(p-h)*v,h&&(m*=wo,b=Math.tan(h-m),b=Math.sqrt(1+b*b),z*=b,F*=b,m&&(b=Math.tan(m),b=Math.sqrt(1+b*b),L*=b,P*=b)),L=cn(L),P=cn(P),z=cn(z),F=cn(F)):(L=g,F=v,P=z=0),(D&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(D=Ur(x,"x",c,"px"),A=Ur(x,"y",f,"px")),(E||M||S||y)&&(D=cn(D+E-(E*L+M*z)+S),A=cn(A+M-(E*P+M*F)+y)),(r||l)&&(b=x.getBBox(),D=cn(D+r/100*b.width),A=cn(A+l/100*b.height)),b="matrix("+L+","+P+","+z+","+F+","+D+","+A+")",x.setAttribute("transform",b),U&&(x.style[$e]=b)},G2=function(t,e,a,r,l){var c=360,f=Cn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?ss:1),h=p-r,m=r+h+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),g==="cw"&&h<0?h=(h+c*oy)%c-~~(h/c)*c:g==="ccw"&&h>0&&(h=(h-c*oy)%c-~~(h/c)*c)),t._pt=v=new oi(t._pt,e,a,r,h,T2),v.e=m,v.u="deg",t._props.push(a),v},py=function(t,e){for(var a in e)t[a]=e[a];return t},V2=function(t,e,a){var r=py({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,h,m,g,v,x,E;r.svg?(h=a.getAttribute("transform"),a.setAttribute("transform",""),c[$e]=e,f=du(a,1),xs(a,$e),a.setAttribute("transform",h)):(h=getComputedStyle(a)[$e],c[$e]=e,f=du(a,1),c[$e]=h);for(p in Wa)h=r[p],m=f[p],h!==m&&l.indexOf(p)<0&&(x=Vn(h),E=Vn(m),g=x!==E?Ur(a,p,h,E):parseFloat(h),v=parseFloat(m),t._pt=new oi(t._pt,f,p,g,v-g,Am),t._pt.u=E||0,t._props.push(p));py(f,r)};si("padding,margin,Width,Radius",function(o,t){var e="Top",a="Right",r="Bottom",l="Left",c=(t<3?[e,a,r,l]:[e+l,e+a,r+a,r+l]).map(function(f){return t<2?o+f:"border"+f+o});Ef[t>1?"border"+o:o]=function(f,p,h,m,g){var v,x;if(arguments.length<4)return v=c.map(function(E){return Ba(f,E,h)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(m+"").split(" "),x={},c.forEach(function(E,M){return x[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,x,g)}});var YS={name:"css",register:wm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,a,r,l){var c=this._props,f=t.style,p=a.vars.startAt,h,m,g,v,x,E,M,S,y,U,D,A,L,P,z,F;a_||wm(),this.styles=this.styles||HS(t),F=this.styles.props,this.tween=a;for(M in e)if(M!=="autoRound"&&(m=e[M],!(xi[M]&&CS(M,e,a,r,t,l)))){if(x=typeof m,E=Ef[M],x==="function"&&(m=m.call(a,r,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=uu(m)),E)E(this,t,M,m,a)&&(z=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Cr.lastIndex=0,Cr.test(h)||(S=Vn(h),y=Vn(m)),y?S!==y&&(h=Ur(t,M,h,y)+y):S&&(m+=S),this.add(f,"setProperty",h,m,r,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(x!=="undefined"){if(p&&M in p?(h=typeof p[M]=="function"?p[M].call(a,r,t,l):p[M],Cn(h)&&~h.indexOf("random(")&&(h=uu(h)),Vn(h+"")||h==="auto"||(h+=Ei.units[M]||Vn(Ba(t,M))||""),(h+"").charAt(1)==="="&&(h=Ba(t,M))):h=Ba(t,M),v=parseFloat(h),U=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),U&&(m=m.substr(2)),g=parseFloat(m),M in fa&&(M==="autoAlpha"&&(v===1&&Ba(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),br(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=fa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),D=M in Wa,D){if(this.styles.save(M),x==="string"&&m.substring(0,6)==="var(--"&&(m=Hi(t,m.substring(4,m.indexOf(")"))),g=parseFloat(m)),A||(L=t._gsap,L.renderTransform&&!e.parseTransform||du(t,e.parseTransform),P=e.smoothOrigin!==!1&&L.smooth,A=this._pt=new oi(this._pt,f,$e,0,1,L.renderTransform,L,0,-1),A.dep=1),M==="scale")this._pt=new oi(this._pt,L,"scaleY",L.scaleY,(U?Ao(L.scaleY,U+g):g)-L.scaleY||0,Am),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(li,0,f[li]),m=I2(m),L.svg?Cm(t,m,0,P,0,this):(y=parseFloat(m.split(" ")[2])||0,y!==L.zOrigin&&br(this,L,"zOrigin",L.zOrigin,y),br(this,f,M,Tf(h),Tf(m)));continue}else if(M==="svgOrigin"){Cm(t,m,1,P,0,this);continue}else if(M in XS){G2(this,L,M,v,U?Ao(v,U+m):m);continue}else if(M==="smoothOrigin"){br(this,L,"smooth",L.smooth,m);continue}else if(M==="force3D"){L[M]=m;continue}else if(M==="transform"){V2(this,m,t);continue}}else M in f||(M=Fo(M)||M);if(D||(g||g===0)&&(v||v===0)&&!E2.test(m)&&M in f)S=(h+"").substr((v+"").length),g||(g=0),y=Vn(m)||(M in Ei.units?Ei.units[M]:S),S!==y&&(v=Ur(t,M,h,y)),this._pt=new oi(this._pt,D?L:f,M,v,(U?Ao(v,U+g):g)-v,!D&&(y==="px"||M==="zIndex")&&e.autoRound!==!1?A2:Am),this._pt.u=y||0,S!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=b2);else if(M in f)z2.call(this,t,M,h,U?U+m:m);else if(M in t)this.add(t,M,h||t[M],U?U+m:m,r,l);else if(M!=="parseTransform"){jm(M,m);continue}D||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,h||t[M])),c.push(M)}}z&&PS(this)},render:function(t,e){if(e.tween._time||!r_())for(var a=e._pt;a;)a.r(t,a.d),a=a._next;else e.styles.revert()},get:Ba,aliases:fa,getSetter:function(t,e,a){var r=fa[e];return r&&r.indexOf(",")<0&&(e=r),e in Wa&&e!==li&&(t._gsap.x||Ba(t,"x"))?a&&sy===a?e==="scale"?D2:C2:(sy=a||{})&&(e==="scale"?U2:L2):t.style&&!Wm(t.style[e])?R2:~e.indexOf("-")?w2:n_(t,e)},core:{_removeProperty:xs,_getMatrix:o_}};ui.utils.checkPrefix=Fo;ui.core.getStyleSaver=HS;(function(o,t,e,a){var r=si(o+","+t+","+e,function(l){Wa[l]=1});si(t,function(l){Ei.units[l]="deg",XS[l]=1}),fa[r[13]]=o+","+t,si(a,function(l){var c=l.split(":");fa[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ei.units[o]="px"});ui.registerPlugin(YS);var ff=ui.registerPlugin(YS)||ui;ff.core.Tween;function k2(){const o=tu.useRef(null);return tu.useEffect(()=>{const t=o.current,e=t.clientWidth,a=t.clientHeight,r=new S1,l=new Ii(45,e/a,.1,1e3);l.position.z=5;const c=new yC({antialias:!0,alpha:!0});c.setSize(e,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0),t.appendChild(c.domElement);const f=new xo;r.add(f),console.log("Starting to load model files...");const p="/Personal-Website",h=`${p}/models/middle2.mtl`,m=`${p}/models/middle2.obj`;console.log("Using paths:",{mtlPath:h,objPath:m}),fetch(h).then(G=>{if(console.log("MTL file fetch response:",G.status,G.statusText),!G.ok)throw new Error(`MTL file not found: ${G.status}`);return G.text()}).then(G=>(console.log("MTL file content loaded, size:",G.length),fetch(m))).then(G=>{if(console.log("OBJ file fetch response:",G.status,G.statusText),!G.ok)throw new Error(`OBJ file not found: ${G.status}`);console.log("OBJ file is accessible, proceeding with Three.js loaders...");const ut=new RC,N=new Fy;N.onLoad=()=>console.log("All resources loaded"),N.onError=X=>console.error("Error loading:",X),ut.manager=N,ut.load(h,X=>{console.log("MTL loaded successfully with Three.js:",X),X.preload();const ft=new AC;ft.manager=N,ft.setMaterials(X),ft.load(m,dt=>{console.log("OBJ loaded successfully:",dt);const vt=new Go().setFromObject(dt),wt=vt.getSize(new it),J=vt.getCenter(new it);console.log("Model size:",wt),console.log("Model center:",J);const qt=2/Math.max(wt.x,wt.y,wt.z);dt.scale.setScalar(qt),dt.position.copy(J.multiplyScalar(-qt)),dt.traverse(Dt=>{Dt.isMesh&&(Dt.castShadow=!0,Dt.receiveShadow=!0,Dt.material&&(Dt.material.needsUpdate=!0))}),f.add(dt),console.log("Model successfully added to scene")},dt=>{const vt=dt.loaded/dt.total*100;console.log("OBJ loading progress:",vt+"%","Size:",(dt.loaded/1024/1024).toFixed(1)+"MB"),dt.total>10*1024*1024&&console.log("Large file detected, this may take a while...")},dt=>{console.error("Three.js OBJ loading error:",dt),g("red","OBJ loading failed")})},X=>{console.log("MTL loading progress:",X.loaded/X.total*100+"%")},X=>{console.error("Three.js MTL loading error:",X),g("orange","MTL loading failed")})}).catch(G=>{console.error("File accessibility test failed:",G),g("blue","Files not accessible")});function g(G,ut){console.log(`Adding ${G} fallback cube - ${ut}`);const N=new vs(1,1,1),X=G==="red"?16711680:G==="orange"?16746496:G==="blue"?255:8947848,ft=new yx({color:X}),dt=new Si(N,ft);f.add(dt)}const v=new vs(.1,.1,.1),x=new yx({transparent:!0,opacity:0});new Si(v,x);const E=new O1(16777215,1);E.position.set(5,5,5),r.add(E);const M=new N1(4210752,.6);r.add(M);const S=[],y=10;let U,D=0,A=0,L=0;function P(G,ut,N){const ft=new Float32Array(90),dt=new Float32Array(90),vt=new Float32Array(90),wt=new Float32Array(30);for(let Dt=0;Dt<30;Dt++){ft[Dt*3]=G+(Math.random()-.5)*.5,ft[Dt*3+1]=ut+(Math.random()-.5)*.5,ft[Dt*3+2]=N+(Math.random()-.5)*.5,dt[Dt*3]=(Math.random()-.5)*.02,dt[Dt*3+1]=(Math.random()-.5)*.02,dt[Dt*3+2]=(Math.random()-.5)*.02;const le=Math.random()*.3+.6,We=new fe().setHSL(le,.8,.6);vt[Dt*3]=We.r,vt[Dt*3+1]=We.g,vt[Dt*3+2]=We.b,wt[Dt]=1}const J=new Ti;J.setAttribute("position",new ii(ft,3)),J.setAttribute("color",new ii(vt,3)),J.setAttribute("opacity",new ii(wt,1));const gt=new ka({uniforms:{time:{value:0},pointSize:{value:25}},vertexShader:`
          attribute float opacity;
          attribute vec3 color;
          varying float vOpacity;
          varying vec3 vColor;
          uniform float time;
          uniform float pointSize;
          
          void main() {
            vOpacity = opacity;
            vColor = color;
            
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // Dynamic size based on distance and time
            float distance = length(mvPosition.xyz);
            gl_PointSize = pointSize * (300.0 / distance) * vOpacity;
          }
        `,fragmentShader:`
          varying float vOpacity;
          varying vec3 vColor;
          
          void main() {
            // Create circular particles
            vec2 center = gl_PointCoord - vec2(0.5);
            float distance = length(center);
            
            if (distance > 0.5) discard;
            
            // Soft edge with glow effect
            float alpha = (1.0 - distance * 2.0) * vOpacity;
            alpha = smoothstep(0.0, 1.0, alpha);
            
            // Add inner glow
            float glow = exp(-distance * 8.0) * 0.5;
            alpha += glow;
            
            gl_FragColor = vec4(vColor, alpha * 0.8);
          }
        `,transparent:!0,blending:hf,vertexColors:!0}),At=new Zl(J,gt);r.add(At);const qt={points:At,geometry:J,material:gt,velocities:dt,life:1,maxLife:1};if(S.push(qt),S.length>y){const Dt=S.shift();r.remove(Dt.points),Dt.geometry.dispose(),Dt.material.dispose()}}const z=200,F=new Float32Array(z*3);for(let G=0;G<z;G++)F[G*3]=(Math.random()-.5)*30,F[G*3+1]=(Math.random()-.5)*30,F[G*3+2]=(Math.random()-.5)*30;const b=new Ti;b.setAttribute("position",new ii(F,3));const O=new yo({size:2,transparent:!0,opacity:.2,color:8956671,blending:hf}),k=new Zl(b,O);r.add(k);const Z=new I1;let et;function ht(){const G=Z.getElapsedTime();for(let N=S.length-1;N>=0;N--){const X=S[N];if(X.life-=.016,X.life<=0){r.remove(X.points),X.geometry.dispose(),X.material.dispose(),S.splice(N,1);continue}const ft=X.geometry.attributes.position.array,dt=X.geometry.attributes.opacity.array;for(let vt=0;vt<ft.length/3;vt++)ft[vt*3]+=X.velocities[vt*3],ft[vt*3+1]+=X.velocities[vt*3+1],ft[vt*3+2]+=X.velocities[vt*3+2],X.velocities[vt*3]*=.98,X.velocities[vt*3+1]*=.98,X.velocities[vt*3+2]*=.98,X.velocities[vt*3+1]-=.001,dt[vt]=X.life/X.maxLife;X.geometry.attributes.position.needsUpdate=!0,X.geometry.attributes.opacity.needsUpdate=!0,X.material.uniforms.time.value=G}f.rotation.x+=.003,f.rotation.y+=.005,f.rotation.z+=.002;const ut=b.attributes.position.array;for(let N=0;N<z;N++)ut[N*3+1]+=Math.sin(G+N*.1)*.001,ut[N*3]+=Math.cos(G*.5+N*.05)*5e-4,ut[N*3+1]>15&&(ut[N*3+1]=-15),ut[N*3]>15&&(ut[N*3]=-15);b.attributes.position.needsUpdate=!0,c.render(r,l),et=requestAnimationFrame(ht)}ff.from(f.scale,{duration:2,x:.1,y:.1,z:.1,ease:"power3.out"}),ff.from(f.rotation,{duration:3,x:Math.PI*2,ease:"power2.out"}),ht();function rt(G){const ut=t.getBoundingClientRect(),N=(G.clientX-ut.left)/ut.width-.5,X=(G.clientY-ut.top)/ut.height-.5;D=N*8,A=-X*8,L=Math.sin(Date.now()*.001)*2,P(D,A,L),clearTimeout(U),U=setTimeout(()=>{},100),ff.to(l.position,{x:N*1.5,y:-X*1.5,duration:1.5,ease:"power2.out"}),l.lookAt(r.position)}function B(G){const ut=t.getBoundingClientRect(),N=(G.clientX-ut.left)/ut.width-.5,X=(G.clientY-ut.top)/ut.height-.5,ft=N*8,dt=-X*8,vt=0;for(let wt=0;wt<3;wt++)setTimeout(()=>{P(ft+(Math.random()-.5)*2,dt+(Math.random()-.5)*2,vt+(Math.random()-.5)*2)},wt*100)}function Y(){const G=t.clientWidth,ut=t.clientHeight;c.setSize(G,ut),l.aspect=G/ut,l.updateProjectionMatrix()}return t.addEventListener("pointermove",rt),t.addEventListener("click",B),window.addEventListener("resize",Y),()=>{cancelAnimationFrame(et),t.removeEventListener("pointermove",rt),t.removeEventListener("click",B),window.removeEventListener("resize",Y),S.forEach(G=>{r.remove(G.points),G.geometry.dispose(),G.material.dispose()}),b&&b.dispose(),O&&O.dispose(),t&&c.domElement&&t.removeChild(c.domElement),c.dispose()}},[]),Kt.jsx("div",{ref:o,style:{width:"100%",height:"100vh",position:"fixed",top:0,left:0,zIndex:0,overflow:"hidden"}})}const X2=[{id:1,title:"Virtual Soul",description:"An immersive digital exploration of consciousness and identity in virtual spaces. This project investigates the boundaries between digital and physical existence through interactive media.",image:"/Personal-Website/images/project1.jpg",pdfUrl:"/Personal-Website/images/1-Virtual Soul.pdf",technologies:["Interactive Media","Virtual Reality","Digital Art","Conceptual Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"Nether Portal",description:"A gateway between dimensions - exploring liminal spaces and transitional experiences. This project creates bridges between different states of being and perception.",image:"/Personal-Website/images/project2.jpg",pdfUrl:"/Personal-Website/images/2-Nether Portal.pdf",technologies:["Dimensional Design","Interactive Installation","Spatial Computing","Experience Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"Prayer of Wind and Bloom",description:"A poetic meditation on nature's cycles and renewal. This work celebrates the intersection of technology and organic growth, finding harmony in digital and natural systems.",image:"/Personal-Website/images/project3.jpg",pdfUrl:"/Personal-Website/images/3-Prayer of Wind and Bloom.pdf",technologies:["Generative Art","Nature Simulation","Poetic Computing","Bio-inspired Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:4,title:"Unnatural Chronologies",description:"An exploration of time, memory, and non-linear narratives. This project challenges conventional temporal structures and creates new ways of experiencing past, present, and future.",image:"/Personal-Website/images/project4.jpg",pdfUrl:"/Personal-Website/images/4-Unnatural Chronologies.pdf",technologies:["Temporal Design","Narrative Systems","Memory Interfaces","Experimental Media"],liveUrl:"#",githubUrl:"#",featured:!0}];function W2(){const[o,t]=tu.useState([]);return tu.useEffect(()=>{t(X2.filter(e=>e.featured))},[]),Kt.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"white"},children:[Kt.jsxs("header",{style:{position:"fixed",zIndex:10,top:40,left:40,fontSize:"18px"},children:[Kt.jsx("h1",{style:{margin:0,fontSize:"2.5rem",fontWeight:"300",letterSpacing:"2px"},children:"Your Name"}),Kt.jsx("p",{style:{margin:"10px 0",fontSize:"1.2rem",opacity:.8,letterSpacing:"1px"},children:"Creative Developer & Designer"}),Kt.jsx("p",{style:{margin:0,fontSize:"1rem",opacity:.6,maxWidth:"400px",lineHeight:"1.5"},children:"An Easter egg hunter in reality, raiding Earth-Online for creative treasures."})]}),Kt.jsx("nav",{style:{position:"fixed",zIndex:10,top:40,right:40,fontSize:"1rem"},children:Kt.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",gap:"30px"},children:[Kt.jsx("li",{children:Kt.jsx("a",{href:"#work",style:{color:"white",textDecoration:"none",opacity:.8},children:"Work"})}),Kt.jsx("li",{children:Kt.jsx("a",{href:"#about",style:{color:"white",textDecoration:"none",opacity:.8},children:"About"})}),Kt.jsx("li",{children:Kt.jsx("a",{href:"#contact",style:{color:"white",textDecoration:"none",opacity:.8},children:"Contact"})})]})}),Kt.jsxs("main",{style:{minHeight:"100vh",width:"100vw",position:"relative",overflow:"hidden"},children:[Kt.jsx(k2,{}),Kt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",zIndex:5,pointerEvents:"none"},children:[Kt.jsx("h2",{style:{fontSize:"3rem",fontWeight:"100",letterSpacing:"3px",margin:"0 0 20px 0",opacity:.9},children:"PORTFOLIO"}),Kt.jsx("p",{style:{fontSize:"1.2rem",opacity:.7,letterSpacing:"2px"},children:"Scroll to explore creative treasures"})]})]}),Kt.jsx("section",{id:"about",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(22,33,62,0.95) 100%)",position:"relative",zIndex:1},children:Kt.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",textAlign:"center"},children:[Kt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"About Me"}),Kt.jsx("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",opacity:.8,marginBottom:"30px"},children:"I'm a creative developer who sees the digital world as an endless playground. Like an easter egg hunter exploring every corner of reality, I search for hidden gems and creative possibilities in the intersection of technology and art."}),Kt.jsx("p",{style:{fontSize:"1.1rem",lineHeight:"1.7",opacity:.7},children:"My mission is to craft immersive digital experiences that surprise, delight, and inspire. Every project is a treasure hunt for that perfect blend of functionality and magic."})]})}),Kt.jsx("section",{id:"work",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(22,33,62,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(10,10,10,0.95) 100%)",position:"relative",zIndex:1},children:Kt.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[Kt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"60px",letterSpacing:"2px",textAlign:"center"},children:"Featured Work"}),Kt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"},children:o.map(e=>Kt.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"30px",borderRadius:"15px",border:"1px solid rgba(255,255,255,0.1)",transition:"all 0.3s ease",cursor:"pointer",backdropFilter:"blur(10px)"},onMouseEnter:a=>{a.target.style.transform="translateY(-10px)",a.target.style.boxShadow="0 20px 40px rgba(136,170,255,0.2)"},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow="none"},children:[Kt.jsx("div",{style:{width:"100%",height:"400px",background:"#f8f9fa",borderRadius:"10px",marginBottom:"20px",border:"2px solid rgba(136,170,255,0.3)",overflow:"hidden"},children:Kt.jsx("iframe",{src:e.pdfUrl,width:"100%",height:"100%",title:e.title,style:{border:"none",borderRadius:"8px"},children:Kt.jsxs("p",{style:{padding:"20px",textAlign:"center"},children:["Your browser doesn't support PDFs.",Kt.jsx("a",{href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff"},children:"Download the PDF"})]})})}),Kt.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"15px",color:"#88aaff"},children:e.title}),Kt.jsx("p",{style:{opacity:.7,lineHeight:"1.6",marginBottom:"20px"},children:e.description}),Kt.jsx("div",{style:{marginBottom:"20px"},children:Kt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.technologies.map((a,r)=>Kt.jsx("span",{style:{background:"rgba(136,170,255,0.2)",padding:"4px 12px",borderRadius:"20px",fontSize:"0.8rem",border:"1px solid rgba(136,170,255,0.3)"},children:a},r))})}),Kt.jsxs("div",{style:{display:"flex",gap:"15px",justifyContent:"center"},children:[Kt.jsx("a",{href:e.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid #88aaff",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.background="#88aaff",a.target.style.color="#000"},onMouseLeave:a=>{a.target.style.background="transparent",a.target.style.color="#88aaff"},children:"Open Fullscreen"}),e.liveUrl!=="#"&&Kt.jsx("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid rgba(136,170,255,0.5)",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.borderColor="#88aaff",a.target.style.background="rgba(136,170,255,0.1)"},onMouseLeave:a=>{a.target.style.borderColor="rgba(136,170,255,0.5)",a.target.style.background="transparent"},children:"Live Demo"})]})]},e.id))}),Kt.jsx("div",{style:{textAlign:"center",marginTop:"60px"},children:Kt.jsx("button",{style:{background:"transparent",border:"2px solid #88aaff",color:"#88aaff",padding:"12px 30px",borderRadius:"30px",fontSize:"1rem",cursor:"pointer",transition:"all 0.3s ease",letterSpacing:"1px"},onMouseEnter:e=>{e.target.style.background="#88aaff",e.target.style.color="#000",e.target.style.transform="scale(1.05)"},onMouseLeave:e=>{e.target.style.background="transparent",e.target.style.color="#88aaff",e.target.style.transform="scale(1)"},children:"View All Projects"})})]})}),Kt.jsx("section",{id:"contact",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 100%)",position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:Kt.jsxs("div",{style:{textAlign:"center"},children:[Kt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"Let's Create Together"}),Kt.jsx("p",{style:{fontSize:"1.2rem",opacity:.8,marginBottom:"40px"},children:"Ready to embark on a creative treasure hunt?"}),Kt.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"center"},children:[Kt.jsx("a",{href:"mailto:your@email.com",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"Email"}),Kt.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"LinkedIn"}),Kt.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"GitHub"})]})]})}),Kt.jsx("footer",{style:{padding:"40px",textAlign:"center",background:"rgba(10,10,10,0.9)",borderTop:"1px solid rgba(255,255,255,0.1)",position:"relative",zIndex:1},children:Kt.jsx("p",{style:{opacity:.6,margin:0},children:"© 2025 Your Name. All treasures reserved."})})]})}sT.createRoot(document.getElementById("root")).render(Kt.jsx(tu.StrictMode,{children:Kt.jsx(W2,{})}));
