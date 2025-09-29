(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var gd={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function RE(){if(xv)return Dl;xv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:l}}return Dl.Fragment=t,Dl.jsx=n,Dl.jsxs=n,Dl}var yv;function wE(){return yv||(yv=1,gd.exports=RE()),gd.exports}var $t=wE(),vd={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function CE(){if(Sv)return ce;Sv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function v(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function S(z,J,pt){this.props=z,this.context=J,this.refs=M,this.updater=pt||y}S.prototype.isReactComponent={},S.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function x(){}x.prototype=S.prototype;function N(z,J,pt){this.props=z,this.context=J,this.refs=M,this.updater=pt||y}var L=N.prototype=new x;L.constructor=N,E(L,S.prototype),L.isPureReactComponent=!0;var A=Array.isArray,C={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function P(z,J,pt,yt,Tt,Dt){return pt=Dt.ref,{$$typeof:o,type:z,key:J,ref:pt!==void 0?pt:null,props:Dt}}function F(z,J){return P(z.type,J,void 0,void 0,void 0,z.props)}function b(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function U(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(pt){return J[pt]})}var V=/\/+/g;function X(z,J){return typeof z=="object"&&z!==null&&z.key!=null?U(""+z.key):J.toString(36)}function Q(){}function ot(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(Q,Q):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function nt(z,J,pt,yt,Tt){var Dt=typeof z;(Dt==="undefined"||Dt==="boolean")&&(z=null);var et=!1;if(z===null)et=!0;else switch(Dt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(z.$$typeof){case o:case t:et=!0;break;case _:return et=z._init,nt(et(z._payload),J,pt,yt,Tt)}}if(et)return Tt=Tt(z),et=yt===""?"."+X(z,0):yt,A(Tt)?(pt="",et!=null&&(pt=et.replace(V,"$&/")+"/"),nt(Tt,J,pt,"",function(jt){return jt})):Tt!=null&&(b(Tt)&&(Tt=F(Tt,pt+(Tt.key==null||z&&z.key===Tt.key?"":(""+Tt.key).replace(V,"$&/")+"/")+et)),J.push(Tt)),1;et=0;var mt=yt===""?".":yt+":";if(A(z))for(var At=0;At<z.length;At++)yt=z[At],Dt=mt+X(yt,At),et+=nt(yt,J,pt,Dt,Tt);else if(At=v(z),typeof At=="function")for(z=At.call(z),At=0;!(yt=z.next()).done;)yt=yt.value,Dt=mt+X(yt,At++),et+=nt(yt,J,pt,Dt,Tt);else if(Dt==="object"){if(typeof z.then=="function")return nt(ot(z),J,pt,yt,Tt);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return et}function I(z,J,pt){if(z==null)return z;var yt=[],Tt=0;return nt(z,yt,"","",function(Dt){return J.call(pt,Dt,Tt++)}),yt}function Y(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(pt){(z._status===0||z._status===-1)&&(z._status=1,z._result=pt)},function(pt){(z._status===0||z._status===-1)&&(z._status=2,z._result=pt)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var W=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function _t(){}return ce.Children={map:I,forEach:function(z,J,pt){I(z,function(){J.apply(this,arguments)},pt)},count:function(z){var J=0;return I(z,function(){J++}),J},toArray:function(z){return I(z,function(J){return J})||[]},only:function(z){if(!b(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ce.Component=S,ce.Fragment=n,ce.Profiler=s,ce.PureComponent=N,ce.StrictMode=a,ce.Suspense=p,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return C.H.useMemoCache(z)}},ce.cache=function(z){return function(){return z.apply(null,arguments)}},ce.cloneElement=function(z,J,pt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var yt=E({},z.props),Tt=z.key,Dt=void 0;if(J!=null)for(et in J.ref!==void 0&&(Dt=void 0),J.key!==void 0&&(Tt=""+J.key),J)!O.call(J,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&J.ref===void 0||(yt[et]=J[et]);var et=arguments.length-2;if(et===1)yt.children=pt;else if(1<et){for(var mt=Array(et),At=0;At<et;At++)mt[At]=arguments[At+2];yt.children=mt}return P(z.type,Tt,void 0,void 0,Dt,yt)},ce.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},ce.createElement=function(z,J,pt){var yt,Tt={},Dt=null;if(J!=null)for(yt in J.key!==void 0&&(Dt=""+J.key),J)O.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Tt[yt]=J[yt]);var et=arguments.length-2;if(et===1)Tt.children=pt;else if(1<et){for(var mt=Array(et),At=0;At<et;At++)mt[At]=arguments[At+2];Tt.children=mt}if(z&&z.defaultProps)for(yt in et=z.defaultProps,et)Tt[yt]===void 0&&(Tt[yt]=et[yt]);return P(z,Dt,void 0,void 0,null,Tt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(z){return{$$typeof:f,render:z}},ce.isValidElement=b,ce.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:Y}},ce.memo=function(z,J){return{$$typeof:d,type:z,compare:J===void 0?null:J}},ce.startTransition=function(z){var J=C.T,pt={};C.T=pt;try{var yt=z(),Tt=C.S;Tt!==null&&Tt(pt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(_t,W)}catch(Dt){W(Dt)}finally{C.T=J}},ce.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},ce.use=function(z){return C.H.use(z)},ce.useActionState=function(z,J,pt){return C.H.useActionState(z,J,pt)},ce.useCallback=function(z,J){return C.H.useCallback(z,J)},ce.useContext=function(z){return C.H.useContext(z)},ce.useDebugValue=function(){},ce.useDeferredValue=function(z,J){return C.H.useDeferredValue(z,J)},ce.useEffect=function(z,J,pt){var yt=C.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(z,J)},ce.useId=function(){return C.H.useId()},ce.useImperativeHandle=function(z,J,pt){return C.H.useImperativeHandle(z,J,pt)},ce.useInsertionEffect=function(z,J){return C.H.useInsertionEffect(z,J)},ce.useLayoutEffect=function(z,J){return C.H.useLayoutEffect(z,J)},ce.useMemo=function(z,J){return C.H.useMemo(z,J)},ce.useOptimistic=function(z,J){return C.H.useOptimistic(z,J)},ce.useReducer=function(z,J,pt){return C.H.useReducer(z,J,pt)},ce.useRef=function(z){return C.H.useRef(z)},ce.useState=function(z){return C.H.useState(z)},ce.useSyncExternalStore=function(z,J,pt){return C.H.useSyncExternalStore(z,J,pt)},ce.useTransition=function(){return C.H.useTransition()},ce.version="19.1.1",ce}var Mv;function pm(){return Mv||(Mv=1,vd.exports=CE()),vd.exports}var Wl=pm(),xd={exports:{}},Ul={},yd={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev;function DE(){return Ev||(Ev=1,(function(o){function t(I,Y){var W=I.length;I.push(Y);t:for(;0<W;){var _t=W-1>>>1,z=I[_t];if(0<s(z,Y))I[_t]=Y,I[W]=z,W=_t;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var Y=I[0],W=I.pop();if(W!==Y){I[0]=W;t:for(var _t=0,z=I.length,J=z>>>1;_t<J;){var pt=2*(_t+1)-1,yt=I[pt],Tt=pt+1,Dt=I[Tt];if(0>s(yt,W))Tt<z&&0>s(Dt,yt)?(I[_t]=Dt,I[Tt]=W,_t=Tt):(I[_t]=yt,I[pt]=W,_t=pt);else if(Tt<z&&0>s(Dt,W))I[_t]=Dt,I[Tt]=W,_t=Tt;else break t}}return Y}function s(I,Y){var W=I.sortIndex-Y.sortIndex;return W!==0?W:I.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,y=!1,E=!1,M=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function A(I){for(var Y=n(d);Y!==null;){if(Y.callback===null)a(d);else if(Y.startTime<=I)a(d),Y.sortIndex=Y.expirationTime,t(p,Y);else break;Y=n(d)}}function C(I){if(M=!1,A(I),!E)if(n(p)!==null)E=!0,O||(O=!0,X());else{var Y=n(d);Y!==null&&nt(C,Y.startTime-I)}}var O=!1,P=-1,F=5,b=-1;function U(){return S?!0:!(o.unstable_now()-b<F)}function V(){if(S=!1,O){var I=o.unstable_now();b=I;var Y=!0;try{t:{E=!1,M&&(M=!1,N(P),P=-1),y=!0;var W=v;try{e:{for(A(I),g=n(p);g!==null&&!(g.expirationTime>I&&U());){var _t=g.callback;if(typeof _t=="function"){g.callback=null,v=g.priorityLevel;var z=_t(g.expirationTime<=I);if(I=o.unstable_now(),typeof z=="function"){g.callback=z,A(I),Y=!0;break e}g===n(p)&&a(p),A(I)}else a(p);g=n(p)}if(g!==null)Y=!0;else{var J=n(d);J!==null&&nt(C,J.startTime-I),Y=!1}}break t}finally{g=null,v=W,y=!1}Y=void 0}}finally{Y?X():O=!1}}}var X;if(typeof L=="function")X=function(){L(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ot=Q.port2;Q.port1.onmessage=V,X=function(){ot.postMessage(null)}}else X=function(){x(V,0)};function nt(I,Y){P=x(function(){I(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var W=v;v=Y;try{return I()}finally{v=W}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=v;v=I;try{return Y()}finally{v=W}},o.unstable_scheduleCallback=function(I,Y,W){var _t=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?_t+W:_t):W=_t,I){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=W+z,I={id:_++,callback:Y,priorityLevel:I,startTime:W,expirationTime:z,sortIndex:-1},W>_t?(I.sortIndex=W,t(d,I),n(p)===null&&I===n(d)&&(M?(N(P),P=-1):M=!0,nt(C,W-_t))):(I.sortIndex=z,t(p,I),E||y||(E=!0,O||(O=!0,X()))),I},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(I){var Y=v;return function(){var W=v;v=Y;try{return I.apply(this,arguments)}finally{v=W}}}})(Sd)),Sd}var Tv;function UE(){return Tv||(Tv=1,yd.exports=DE()),yd.exports}var Md={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function LE(){if(bv)return Fn;bv=1;var o=pm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},Fn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},Fn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Fn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Fn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Fn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,d){return p(d)},Fn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},Fn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Fn.version="19.1.1",Fn}var Av;function NE(){if(Av)return Md.exports;Av=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Md.exports=LE(),Md.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function OE(){if(Rv)return Ul;Rv=1;var o=UE(),t=pm(),n=NE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return f(h),e;if(m===u)return f(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=m;else{for(var T=!1,w=h.child;w;){if(w===r){T=!0,r=h,u=m;break}if(w===u){T=!0,u=h,r=m;break}w=w.sibling}if(!T){for(w=m.child;w;){if(w===r){T=!0,r=m,u=h;break}if(w===u){T=!0,u=m,r=h;break}w=w.sibling}if(!T)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case C:return"Suspense";case O:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case L:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:ot(e.type)||"Memo";case F:i=e._payload,e=e._init;try{return ot(e(i))}catch{}}return null}var nt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},_t=[],z=-1;function J(e){return{current:e}}function pt(e){0>z||(e.current=_t[z],_t[z]=null,z--)}function yt(e,i){z++,_t[z]=e.current,e.current=i}var Tt=J(null),Dt=J(null),et=J(null),mt=J(null);function At(e,i){switch(yt(et,i),yt(Dt,e),yt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Y0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Y0(i),e=j0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(Tt),yt(Tt,e)}function jt(){pt(Tt),pt(Dt),pt(et)}function Vt(e){e.memoizedState!==null&&yt(mt,e);var i=Tt.current,r=j0(i,e.type);i!==r&&(yt(Dt,e),yt(Tt,r))}function ue(e){Dt.current===e&&(pt(Tt),pt(Dt)),mt.current===e&&(pt(mt),bl._currentValue=W)}var je=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,se=o.unstable_cancelCallback,te=o.unstable_shouldYield,It=o.unstable_requestPaint,Pt=o.unstable_now,Ve=o.unstable_getCurrentPriorityLevel,kt=o.unstable_ImmediatePriority,oe=o.unstable_UserBlockingPriority,Ze=o.unstable_NormalPriority,Ke=o.unstable_LowPriority,B=o.unstable_IdlePriority,R=o.log,it=o.unstable_setDisableYieldValue,ft=null,gt=null;function ct(e){if(typeof R=="function"&&it(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(ft,e)}catch{}}var zt=Math.clz32?Math.clz32:Yt,Rt=Math.log,Wt=Math.LN2;function Yt(e){return e>>>=0,e===0?32:31-(Rt(e)/Wt|0)|0}var St=256,Lt=4194304;function Kt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,i,r){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?h=Kt(u):(T&=w,T!==0?h=Kt(T):r||(r=w&~e,r!==0&&(h=Kt(r))))):(w=u&~m,w!==0?h=Kt(w):T!==0?h=Kt(T):r||(r=u&~e,r!==0&&(h=Kt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function le(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mt(e,i,r,u,h,m){var T=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,tt=e.hiddenUpdates;for(r=T&~r;0<r;){var ht=31-zt(r),vt=1<<ht;w[ht]=0,G[ht]=-1;var at=tt[ht];if(at!==null)for(tt[ht]=null,ht=0;ht<at.length;ht++){var st=at[ht];st!==null&&(st.lane&=-536870913)}r&=~vt}u!==0&&xt(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~i))}function xt(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-zt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&4194090}function Gt(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-zt(r),h=1<<u;h&i|e[u]&i&&(e[u]|=i),r&=~h}}function re(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:dv(e.type))}function Hi(e,i){var r=Y.p;try{return Y.p=e,i()}finally{Y.p=r}}var gn=Math.random().toString(36).slice(2),vn="__reactFiber$"+gn,tn="__reactProps$"+gn,Qi="__reactContainer$"+gn,vs="__reactEvents$"+gn,uu="__reactListeners$"+gn,xs="__reactHandles$"+gn,Io="__reactResources$"+gn,Ji="__reactMarker$"+gn;function ys(e){delete e[vn],delete e[tn],delete e[vs],delete e[uu],delete e[xs]}function pa(e){var i=e[vn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Qi]||r[vn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=J0(e);e!==null;){if(r=e[vn])return r;e=J0(e)}return i}e=r,r=e.parentNode}return null}function ka(e){if(e=e[vn]||e[Qi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Ur(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Xa(e){var i=e[Io];return i||(i=e[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(e){e[Ji]=!0}var cu=new Set,fu={};function D(e,i){j(e,i),j(e+"Capture",i)}function j(e,i){for(fu[e]=i,e=0;e<i.length;e++)cu.add(i[e])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},K={};function Et(e){return je.call(K,e)?!0:je.call(ut,e)?!1:lt.test(e)?K[e]=!0:(ut[e]=!0,!1)}function Ut(e,i,r){if(Et(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Ft(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Nt(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}var Jt,ne;function qt(e){if(Jt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Jt=i&&i[1]||"",ne=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+ne}var he=!1;function Ae(e,i){if(!e||he)return"";he=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(st){var at=st}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(st){at=st}e.call(vt.prototype)}}else{try{throw Error()}catch(st){at=st}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),T=m[0],w=m[1];if(T&&w){var G=T.split(`
`),tt=w.split(`
`);for(h=u=0;u<G.length&&!G[u].includes("DetermineComponentFrameRoot");)u++;for(;h<tt.length&&!tt[h].includes("DetermineComponentFrameRoot");)h++;if(u===G.length||h===tt.length)for(u=G.length-1,h=tt.length-1;1<=u&&0<=h&&G[u]!==tt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(G[u]!==tt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||G[u]!==tt[h]){var ht=`
`+G[u].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=u&&0<=h);break}}}finally{he=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?qt(r):""}function We(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return qt("Activity");default:return""}}function Ne(e){try{var i="";do i+=We(e),e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(e){var i=Qt(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var h=r.get,m=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ge(e){e._valueTracker||(e._valueTracker=Xe(e))}function zn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=Qt(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wn=/[\n"\\]/g;function Tn(e){return e.replace(Wn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Be(e,i,r,u,h,m,T,w){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+de(i)):e.value!==""+de(i)&&(e.value=""+de(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?In(e,T,de(i)):r!=null?In(e,T,de(r)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+de(w):e.removeAttribute("name")}function qn(e,i,r,u,h,m,T,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;r=r!=null?""+de(r):"",i=i!=null?""+de(i):r,w||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=w?e.checked:!!u,e.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T)}function In(e,i,r){i==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function en(e,i,r,u){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&u&&(e[r].defaultSelected=!0)}else{for(r=""+de(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Dn(e,i,r){if(i!=null&&(i=""+de(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+de(r):""}function Ss(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(nt(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=de(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u)}function Qn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var TS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ym(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||TS.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function jm(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&Ym(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&Ym(e,m,i[m])}function _f(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),AS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hu(e){return AS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var gf=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ms=null,Es=null;function Zm(e){var i=ka(e);if(i&&(e=i.stateNode)){var r=e[tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Be(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Tn(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var h=u[tn]||null;if(!h)throw Error(a(90));Be(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&zn(u)}break t;case"textarea":Dn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&en(e,!!r.multiple,i,!1)}}}var xf=!1;function Km(e,i,r){if(xf)return e(i,r);xf=!0;try{var u=e(i);return u}finally{if(xf=!1,(Ms!==null||Es!==null)&&(Qu(),Ms&&(i=Ms,e=Es,Es=Ms=null,Zm(i),e)))for(i=0;i<e.length;i++)Zm(e[i])}}function Bo(e,i){var r=e.stateNode;if(r===null)return null;var u=r[tn]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(ma)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{yf=!1}var Wa=null,Sf=null,du=null;function Qm(){if(du)return du;var e,i=Sf,r=i.length,u,h="value"in Wa?Wa.value:Wa.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var T=r-e;for(u=1;u<=T&&i[r-u]===h[m-u];u++);return du=h.slice(e,1<u?1-u:void 0)}function pu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function mu(){return!0}function Jm(){return!1}function Jn(e){function i(r,u,h,m,T){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?mu:Jm,this.isPropagationStopped=Jm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=mu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=mu)},persist:function(){},isPersistent:mu}),i}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Jn(Lr),Ho=_({},Lr,{view:0,detail:0}),RS=Jn(Ho),Mf,Ef,Go,gu=_({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Go&&(Go&&e.type==="mousemove"?(Mf=e.screenX-Go.screenX,Ef=e.screenY-Go.screenY):Ef=Mf=0,Go=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),$m=Jn(gu),wS=_({},gu,{dataTransfer:0}),CS=Jn(wS),DS=_({},Ho,{relatedTarget:0}),Tf=Jn(DS),US=_({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),LS=Jn(US),NS=_({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),OS=Jn(NS),PS=_({},Lr,{data:0}),t_=Jn(PS),zS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=BS[e])?!!i[e]:!1}function bf(){return FS}var HS=_({},Ho,{key:function(e){if(e.key){var i=zS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(e){return e.type==="keypress"?pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),GS=Jn(HS),VS=_({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),e_=Jn(VS),kS=_({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),XS=Jn(kS),WS=_({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=Jn(WS),YS=_({},gu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jS=Jn(YS),ZS=_({},Lr,{newState:0,oldState:0}),KS=Jn(ZS),QS=[9,13,27,32],Af=ma&&"CompositionEvent"in window,Vo=null;ma&&"documentMode"in document&&(Vo=document.documentMode);var JS=ma&&"TextEvent"in window&&!Vo,n_=ma&&(!Af||Vo&&8<Vo&&11>=Vo),i_=" ",a_=!1;function r_(e,i){switch(e){case"keyup":return QS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ts=!1;function $S(e,i){switch(e){case"compositionend":return s_(i);case"keypress":return i.which!==32?null:(a_=!0,i_);case"textInput":return e=i.data,e===i_&&a_?null:e;default:return null}}function tM(e,i){if(Ts)return e==="compositionend"||!Af&&r_(e,i)?(e=Qm(),du=Sf=Wa=null,Ts=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return n_&&i.locale!=="ko"?null:i.data;default:return null}}var eM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!eM[e.type]:i==="textarea"}function l_(e,i,r,u){Ms?Es?Es.push(u):Es=[u]:Ms=u,i=ic(i,"onChange"),0<i.length&&(r=new _u("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var ko=null,Xo=null;function nM(e){V0(e,0)}function vu(e){var i=Ur(e);if(zn(i))return e}function u_(e,i){if(e==="change")return i}var c_=!1;if(ma){var Rf;if(ma){var wf="oninput"in document;if(!wf){var f_=document.createElement("div");f_.setAttribute("oninput","return;"),wf=typeof f_.oninput=="function"}Rf=wf}else Rf=!1;c_=Rf&&(!document.documentMode||9<document.documentMode)}function h_(){ko&&(ko.detachEvent("onpropertychange",d_),Xo=ko=null)}function d_(e){if(e.propertyName==="value"&&vu(Xo)){var i=[];l_(i,Xo,e,vf(e)),Km(nM,i)}}function iM(e,i,r){e==="focusin"?(h_(),ko=i,Xo=r,ko.attachEvent("onpropertychange",d_)):e==="focusout"&&h_()}function aM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vu(Xo)}function rM(e,i){if(e==="click")return vu(i)}function sM(e,i){if(e==="input"||e==="change")return vu(i)}function oM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ui=typeof Object.is=="function"?Object.is:oM;function Wo(e,i){if(ui(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!je.call(i,h)||!ui(e[h],i[h]))return!1}return!0}function p_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function m_(e,i){var r=p_(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=p_(r)}}function __(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?__(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function g_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Gi(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Gi(e.document)}return i}function Cf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var lM=ma&&"documentMode"in document&&11>=document.documentMode,bs=null,Df=null,qo=null,Uf=!1;function v_(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Uf||bs==null||bs!==Gi(u)||(u=bs,"selectionStart"in u&&Cf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),qo&&Wo(qo,u)||(qo=u,u=ic(Df,"onSelect"),0<u.length&&(i=new _u("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=bs)))}function Nr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var As={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},Lf={},x_={};ma&&(x_=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Or(e){if(Lf[e])return Lf[e];if(!As[e])return e;var i=As[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in x_)return Lf[e]=i[r];return e}var y_=Or("animationend"),S_=Or("animationiteration"),M_=Or("animationstart"),uM=Or("transitionrun"),cM=Or("transitionstart"),fM=Or("transitioncancel"),E_=Or("transitionend"),T_=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Vi(e,i){T_.set(e,i),D(i,[e])}var b_=new WeakMap;function Ai(e,i){if(typeof e=="object"&&e!==null){var r=b_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ne(i)},b_.set(e,i),i)}return{value:e,source:i,stack:Ne(i)}}var Ri=[],Rs=0,Of=0;function xu(){for(var e=Rs,i=Of=Rs=0;i<e;){var r=Ri[i];Ri[i++]=null;var u=Ri[i];Ri[i++]=null;var h=Ri[i];Ri[i++]=null;var m=Ri[i];if(Ri[i++]=null,u!==null&&h!==null){var T=u.pending;T===null?h.next=h:(h.next=T.next,T.next=h),u.pending=h}m!==0&&A_(r,h,m)}}function yu(e,i,r,u){Ri[Rs++]=e,Ri[Rs++]=i,Ri[Rs++]=r,Ri[Rs++]=u,Of|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Pf(e,i,r,u){return yu(e,i,r,u),Su(e)}function ws(e,i){return yu(e,null,null,i),Su(e)}function A_(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-zt(r),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=r|536870912),m):null}function Su(e){if(50<gl)throw gl=0,Gh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Cs={};function hM(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,r,u){return new hM(e,i,r,u)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,i){var r=e.alternate;return r===null?(r=ci(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function R_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Mu(e,i,r,u,h,m){var T=0;if(u=e,typeof e=="function")zf(e)&&(T=1);else if(typeof e=="string")T=pE(e,r,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=ci(31,r,i,h),e.elementType=b,e.lanes=m,e;case E:return Pr(r.children,h,m,i);case M:T=8,h|=24;break;case S:return e=ci(12,r,i,h|2),e.elementType=S,e.lanes=m,e;case C:return e=ci(13,r,i,h),e.elementType=C,e.lanes=m,e;case O:return e=ci(19,r,i,h),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case L:T=10;break t;case N:T=9;break t;case A:T=11;break t;case P:T=14;break t;case F:T=16,u=null;break t}T=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=ci(T,r,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function Pr(e,i,r,u){return e=ci(7,e,u,i),e.lanes=r,e}function If(e,i,r){return e=ci(6,e,null,i),e.lanes=r,e}function Bf(e,i,r){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ds=[],Us=0,Eu=null,Tu=0,wi=[],Ci=0,zr=null,ga=1,va="";function Ir(e,i){Ds[Us++]=Tu,Ds[Us++]=Eu,Eu=e,Tu=i}function w_(e,i,r){wi[Ci++]=ga,wi[Ci++]=va,wi[Ci++]=zr,zr=e;var u=ga;e=va;var h=32-zt(u)-1;u&=~(1<<h),r+=1;var m=32-zt(i)+h;if(30<m){var T=h-h%5;m=(u&(1<<T)-1).toString(32),u>>=T,h-=T,ga=1<<32-zt(i)+h|r<<h|u,va=m+e}else ga=1<<m|r<<h|u,va=e}function Ff(e){e.return!==null&&(Ir(e,1),w_(e,1,0))}function Hf(e){for(;e===Eu;)Eu=Ds[--Us],Ds[Us]=null,Tu=Ds[--Us],Ds[Us]=null;for(;e===zr;)zr=wi[--Ci],wi[Ci]=null,va=wi[--Ci],wi[Ci]=null,ga=wi[--Ci],wi[Ci]=null}var Yn=null,nn=null,Ce=!1,Br=null,$i=!1,Gf=Error(a(519));function Fr(e){var i=Error(a(418,""));throw Zo(Ai(i,e)),Gf}function C_(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[vn]=e,i[tn]=u,r){case"dialog":xe("cancel",i),xe("close",i);break;case"iframe":case"object":case"embed":xe("load",i);break;case"video":case"audio":for(r=0;r<xl.length;r++)xe(xl[r],i);break;case"source":xe("error",i);break;case"img":case"image":case"link":xe("error",i),xe("load",i);break;case"details":xe("toggle",i);break;case"input":xe("invalid",i),qn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),ge(i);break;case"select":xe("invalid",i);break;case"textarea":xe("invalid",i),Ss(i,u.value,u.defaultValue,u.children),ge(i)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||q0(i.textContent,r)?(u.popover!=null&&(xe("beforetoggle",i),xe("toggle",i)),u.onScroll!=null&&xe("scroll",i),u.onScrollEnd!=null&&xe("scrollend",i),u.onClick!=null&&(i.onclick=ac),i=!0):i=!1,i||Fr(e)}function D_(e){for(Yn=e.return;Yn;)switch(Yn.tag){case 5:case 13:$i=!1;return;case 27:case 3:$i=!0;return;default:Yn=Yn.return}}function Yo(e){if(e!==Yn)return!1;if(!Ce)return D_(e),Ce=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||id(e.type,e.memoizedProps)),r=!r),r&&nn&&Fr(e),D_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(i===0){nn=Xi(e.nextSibling);break t}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;e=e.nextSibling}nn=null}}else i===27?(i=nn,or(e.type)?(e=od,od=null,nn=e):nn=i):nn=Yn?Xi(e.stateNode.nextSibling):null;return!0}function jo(){nn=Yn=null,Ce=!1}function U_(){var e=Br;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Br=null),e}function Zo(e){Br===null?Br=[e]:Br.push(e)}var Vf=J(null),Hr=null,xa=null;function qa(e,i,r){yt(Vf,i._currentValue),i._currentValue=r}function ya(e){e._currentValue=Vf.current,pt(Vf)}function kf(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function Xf(e,i,r,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=h;for(var G=0;G<i.length;G++)if(w.context===i[G]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),kf(m.return,r,e),u||(T=null);break t}m=w.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=r,m=T.alternate,m!==null&&(m.lanes|=r),kf(T,r,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function Ko(e,i,r,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var w=h.type;ui(h.pendingProps.value,T.value)||(e!==null?e.push(w):e=[w])}}else if(h===mt.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}h=h.return}e!==null&&Xf(i,e,r,u),i.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gr(e){Hr=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return L_(Hr,e)}function Au(e,i){return Hr===null&&Gr(e),L_(e,i)}function L_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},xa===null){if(e===null)throw Error(a(308));xa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else xa=xa.next=i;return r}var dM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},pM=o.unstable_scheduleCallback,mM=o.unstable_NormalPriority,xn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wf(){return{controller:new dM,data:new Map,refCount:0}}function Qo(e){e.refCount--,e.refCount===0&&pM(mM,function(){e.controller.abort()})}var Jo=null,qf=0,Ls=0,Ns=null;function _M(e,i){if(Jo===null){var r=Jo=[];qf=0,Ls=jh(),Ns={status:"pending",value:void 0,then:function(u){r.push(u)}}}return qf++,i.then(N_,N_),i}function N_(){if(--qf===0&&Jo!==null){Ns!==null&&(Ns.status="fulfilled");var e=Jo;Jo=null,Ls=0,Ns=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function gM(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var O_=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&_M(e,i),O_!==null&&O_(e,i)};var Vr=J(null);function Yf(){var e=Vr.current;return e!==null?e:ke.pooledCache}function Ru(e,i){i===null?yt(Vr,Vr.current):yt(Vr,i.pool)}function P_(){var e=Yf();return e===null?null:{parent:xn._currentValue,pool:e}}var $o=Error(a(460)),z_=Error(a(474)),wu=Error(a(542)),jf={then:function(){}};function I_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cu(){}function B_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Cu,Cu),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,H_(e),e;default:if(typeof i.status=="string")i.then(Cu,Cu);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,H_(e),e}throw tl=i,$o}}var tl=null;function F_(){if(tl===null)throw Error(a(459));var e=tl;return tl=null,e}function H_(e){if(e===$o||e===wu)throw Error(a(483))}var Ya=!1;function Zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Ue&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Su(e),A_(e,null,r),i}return yu(e,u,i,r),Su(e)}function el(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Gt(e,r)}}function Qf(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Jf=!1;function nl(){if(Jf){var e=Ns;if(e!==null)throw e}}function il(e,i,r,u){Jf=!1;var h=e.updateQueue;Ya=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var G=w,tt=G.next;G.next=null,T===null?m=tt:T.next=tt,T=G;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,w=ht.lastBaseUpdate,w!==T&&(w===null?ht.firstBaseUpdate=tt:w.next=tt,ht.lastBaseUpdate=G))}if(m!==null){var vt=h.baseState;T=0,ht=tt=G=null,w=m;do{var at=w.lane&-536870913,st=at!==w.lane;if(st?(Me&at)===at:(u&at)===at){at!==0&&at===Ls&&(Jf=!0),ht!==null&&(ht=ht.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var ae=e,ee=w;at=i;var ze=r;switch(ee.tag){case 1:if(ae=ee.payload,typeof ae=="function"){vt=ae.call(ze,vt,at);break t}vt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ee.payload,at=typeof ae=="function"?ae.call(ze,vt,at):ae,at==null)break t;vt=_({},vt,at);break t;case 2:Ya=!0}}at=w.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=h.callbacks,st===null?h.callbacks=[at]:st.push(at))}else st={lane:at,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ht===null?(tt=ht=st,G=vt):ht=ht.next=st,T|=at;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;st=w,w=st.next,st.next=null,h.lastBaseUpdate=st,h.shared.pending=null}}while(!0);ht===null&&(G=vt),h.baseState=G,h.firstBaseUpdate=tt,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),ir|=T,e.lanes=T,e.memoizedState=vt}}function G_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function V_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)G_(r[e],i)}var Os=J(null),Du=J(0);function k_(e,i){e=Ra,yt(Du,e),yt(Os,i),Ra=e|i.baseLanes}function $f(){yt(Du,Ra),yt(Os,Os.current)}function th(){Ra=Du.current,pt(Os),pt(Du)}var Ka=0,me=null,Oe=null,hn=null,Uu=!1,Ps=!1,kr=!1,Lu=0,al=0,zs=null,vM=0;function ln(){throw Error(a(321))}function eh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ui(e[r],i[r]))return!1;return!0}function nh(e,i,r,u,h,m){return Ka=m,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Ag:Rg,kr=!1,m=r(u,h),kr=!1,Ps&&(m=W_(i,r,u,h)),X_(e),m}function X_(e){I.H=Bu;var i=Oe!==null&&Oe.next!==null;if(Ka=0,hn=Oe=me=null,Uu=!1,al=0,zs=null,i)throw Error(a(300));e===null||bn||(e=e.dependencies,e!==null&&bu(e)&&(bn=!0))}function W_(e,i,r,u){me=e;var h=0;do{if(Ps&&(zs=null),al=0,Ps=!1,25<=h)throw Error(a(301));if(h+=1,hn=Oe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=bM,m=i(r,u)}while(Ps);return m}function xM(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?rl(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(me.flags|=1024),i}function ih(){var e=Lu!==0;return Lu=0,e}function ah(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function rh(e){if(Uu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Uu=!1}Ka=0,hn=Oe=me=null,Ps=!1,al=Lu=0,zs=null}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?me.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if(Oe===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=hn===null?me.memoizedState:hn.next;if(i!==null)hn=i,Oe=e;else{if(e===null)throw me.alternate===null?Error(a(467)):Error(a(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},hn===null?me.memoizedState=hn=e:hn=hn.next=e}return hn}function sh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var i=al;return al+=1,zs===null&&(zs=[]),e=B_(zs,e,i),i=me,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Ag:Rg),e}function Nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===L)return Bn(e)}throw Error(a(438,String(e)))}function oh(e){var i=null,r=me.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=me.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=sh(),me.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=U;return i.index++,r}function Sa(e,i){return typeof i=="function"?i(e):i}function Ou(e){var i=dn();return lh(i,Oe,e)}function lh(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var w=T=null,G=null,tt=i,ht=!1;do{var vt=tt.lane&-536870913;if(vt!==tt.lane?(Me&vt)===vt:(Ka&vt)===vt){var at=tt.revertLane;if(at===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),vt===Ls&&(ht=!0);else if((Ka&at)===at){tt=tt.next,at===Ls&&(ht=!0);continue}else vt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(w=G=vt,T=m):G=G.next=vt,me.lanes|=at,ir|=at;vt=tt.action,kr&&r(m,vt),m=tt.hasEagerState?tt.eagerState:r(m,vt)}else at={lane:vt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},G===null?(w=G=at,T=m):G=G.next=at,me.lanes|=vt,ir|=vt;tt=tt.next}while(tt!==null&&tt!==i);if(G===null?T=m:G.next=w,!ui(m,e.memoizedState)&&(bn=!0,ht&&(r=Ns,r!==null)))throw r;e.memoizedState=m,e.baseState=T,e.baseQueue=G,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function uh(e){var i=dn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var T=h=h.next;do m=e(m,T.action),T=T.next;while(T!==h);ui(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function q_(e,i,r){var u=me,h=dn(),m=Ce;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var T=!ui((Oe||h).memoizedState,r);T&&(h.memoizedState=r,bn=!0),h=h.queue;var w=Z_.bind(null,u,h,e);if(sl(2048,8,w,[e]),h.getSnapshot!==i||T||hn!==null&&hn.memoizedState.tag&1){if(u.flags|=2048,Is(9,Pu(),j_.bind(null,u,h,r,i),null),ke===null)throw Error(a(349));m||(Ka&124)!==0||Y_(u,i,r)}return r}function Y_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=me.updateQueue,i===null?(i=sh(),me.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function j_(e,i,r,u){i.value=r,i.getSnapshot=u,K_(i)&&Q_(e)}function Z_(e,i,r){return r(function(){K_(i)&&Q_(e)})}function K_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ui(e,r)}catch{return!0}}function Q_(e){var i=ws(e,2);i!==null&&mi(i,e,2)}function ch(e){var i=$n();if(typeof e=="function"){var r=e;if(e=r(),kr){ct(!0);try{r()}finally{ct(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},i}function J_(e,i,r,u){return e.baseState=r,lh(e,Oe,typeof u=="function"?u:Sa)}function yM(e,i,r,u,h){if(Iu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};I.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,$_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function $_(e,i){var r=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=I.T,T={};I.T=T;try{var w=r(h,u),G=I.S;G!==null&&G(T,w),tg(e,i,w)}catch(tt){fh(e,i,tt)}finally{I.T=m}}else try{m=r(h,u),tg(e,i,m)}catch(tt){fh(e,i,tt)}}function tg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){eg(e,i,u)},function(u){return fh(e,i,u)}):eg(e,i,r)}function eg(e,i,r){i.status="fulfilled",i.value=r,ng(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,$_(e,r)))}function fh(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,ng(i),i=i.next;while(i!==u)}e.action=null}function ng(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ig(e,i){return i}function ag(e,i){if(Ce){var r=ke.formState;if(r!==null){t:{var u=me;if(Ce){if(nn){e:{for(var h=nn,m=$i;h.nodeType!==8;){if(!m){h=null;break e}if(h=Xi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){nn=Xi(h.nextSibling),u=h.data==="F!";break t}}Fr(u)}u=!1}u&&(i=r[0])}}return r=$n(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:i},r.queue=u,r=Eg.bind(null,me,u),u.dispatch=r,u=ch(!1),m=_h.bind(null,me,!1,u.queue),u=$n(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,r=yM.bind(null,me,h,m,r),h.dispatch=r,u.memoizedState=e,[i,r,!1]}function rg(e){var i=dn();return sg(i,Oe,e)}function sg(e,i,r){if(i=lh(e,i,ig)[0],e=Ou(Sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=rl(i)}catch(T){throw T===$o?wu:T}else u=i;i=dn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(me.flags|=2048,Is(9,Pu(),SM.bind(null,h,r),null)),[u,m,e]}function SM(e,i){e.action=i}function og(e){var i=dn(),r=Oe;if(r!==null)return sg(i,r,e);dn(),i=i.memoizedState,r=dn();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function Is(e,i,r,u){return e={tag:e,create:r,deps:u,inst:i,next:null},i=me.updateQueue,i===null&&(i=sh(),me.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function Pu(){return{destroy:void 0,resource:void 0}}function lg(){return dn().memoizedState}function zu(e,i,r,u){var h=$n();u=u===void 0?null:u,me.flags|=e,h.memoizedState=Is(1|i,Pu(),r,u)}function sl(e,i,r,u){var h=dn();u=u===void 0?null:u;var m=h.memoizedState.inst;Oe!==null&&u!==null&&eh(u,Oe.memoizedState.deps)?h.memoizedState=Is(i,m,r,u):(me.flags|=e,h.memoizedState=Is(1|i,m,r,u))}function ug(e,i){zu(8390656,8,e,i)}function cg(e,i){sl(2048,8,e,i)}function fg(e,i){return sl(4,2,e,i)}function hg(e,i){return sl(4,4,e,i)}function dg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function pg(e,i,r){r=r!=null?r.concat([e]):null,sl(4,4,dg.bind(null,i,e),r)}function hh(){}function mg(e,i){var r=dn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&eh(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function _g(e,i){var r=dn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&eh(i,u[1]))return u[0];if(u=e(),kr){ct(!0);try{e()}finally{ct(!1)}}return r.memoizedState=[u,i],u}function dh(e,i,r){return r===void 0||(Ka&1073741824)!==0?e.memoizedState=i:(e.memoizedState=r,e=x0(),me.lanes|=e,ir|=e,r)}function gg(e,i,r,u){return ui(r,i)?r:Os.current!==null?(e=dh(e,r,u),ui(e,i)||(bn=!0),e):(Ka&42)===0?(bn=!0,e.memoizedState=r):(e=x0(),me.lanes|=e,ir|=e,i)}function vg(e,i,r,u,h){var m=Y.p;Y.p=m!==0&&8>m?m:8;var T=I.T,w={};I.T=w,_h(e,!1,i,r);try{var G=h(),tt=I.S;if(tt!==null&&tt(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=gM(G,u);ol(e,i,ht,pi(e))}else ol(e,i,u,pi(e))}catch(vt){ol(e,i,{then:function(){},status:"rejected",reason:vt},pi())}finally{Y.p=m,I.T=T}}function MM(){}function ph(e,i,r,u){if(e.tag!==5)throw Error(a(476));var h=xg(e).queue;vg(e,h,i,W,r===null?MM:function(){return yg(e),r(u)})}function xg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:W},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function yg(e){var i=xg(e).next.queue;ol(e,i,{},pi())}function mh(){return Bn(bl)}function Sg(){return dn().memoizedState}function Mg(){return dn().memoizedState}function EM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=pi();e=ja(r);var u=Za(i,e,r);u!==null&&(mi(u,i,r),el(u,i,r)),i={cache:Wf()},e.payload=i;return}i=i.return}}function TM(e,i,r){var u=pi();r={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Iu(e)?Tg(i,r):(r=Pf(e,i,r,u),r!==null&&(mi(r,e,u),bg(r,i,u)))}function Eg(e,i,r){var u=pi();ol(e,i,r,u)}function ol(e,i,r,u){var h={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Tg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,w=m(T,r);if(h.hasEagerState=!0,h.eagerState=w,ui(w,T))return yu(e,i,h,0),ke===null&&xu(),!1}catch{}finally{}if(r=Pf(e,i,h,u),r!==null)return mi(r,e,u),bg(r,i,u),!0}return!1}function _h(e,i,r,u){if(u={lane:2,revertLane:jh(),action:u,hasEagerState:!1,eagerState:null,next:null},Iu(e)){if(i)throw Error(a(479))}else i=Pf(e,r,u,2),i!==null&&mi(i,e,2)}function Iu(e){var i=e.alternate;return e===me||i!==null&&i===me}function Tg(e,i){Ps=Uu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function bg(e,i,r){if((r&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Gt(e,r)}}var Bu={readContext:Bn,use:Nu,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},Ag={readContext:Bn,use:Nu,useCallback:function(e,i){return $n().memoizedState=[e,i===void 0?null:i],e},useContext:Bn,useEffect:ug,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,zu(4194308,4,dg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return zu(4194308,4,e,i)},useInsertionEffect:function(e,i){zu(4,2,e,i)},useMemo:function(e,i){var r=$n();i=i===void 0?null:i;var u=e();if(kr){ct(!0);try{e()}finally{ct(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=$n();if(r!==void 0){var h=r(i);if(kr){ct(!0);try{r(i)}finally{ct(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=TM.bind(null,me,e),[u.memoizedState,e]},useRef:function(e){var i=$n();return e={current:e},i.memoizedState=e},useState:function(e){e=ch(e);var i=e.queue,r=Eg.bind(null,me,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:hh,useDeferredValue:function(e,i){var r=$n();return dh(r,e,i)},useTransition:function(){var e=ch(!1);return e=vg.bind(null,me,e.queue,!0,!1),$n().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=me,h=$n();if(Ce){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),ke===null)throw Error(a(349));(Me&124)!==0||Y_(u,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,ug(Z_.bind(null,u,m,e),[e]),u.flags|=2048,Is(9,Pu(),j_.bind(null,u,m,r,i),null),r},useId:function(){var e=$n(),i=ke.identifierPrefix;if(Ce){var r=va,u=ga;r=(u&~(1<<32-zt(u)-1)).toString(32)+r,i="«"+i+"R"+r,r=Lu++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=vM++,i="«"+i+"r"+r.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:mh,useFormState:ag,useActionState:ag,useOptimistic:function(e){var i=$n();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=_h.bind(null,me,!0,r),r.dispatch=i,[e,i]},useMemoCache:oh,useCacheRefresh:function(){return $n().memoizedState=EM.bind(null,me)}},Rg={readContext:Bn,use:Nu,useCallback:mg,useContext:Bn,useEffect:cg,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:_g,useReducer:Ou,useRef:lg,useState:function(){return Ou(Sa)},useDebugValue:hh,useDeferredValue:function(e,i){var r=dn();return gg(r,Oe.memoizedState,e,i)},useTransition:function(){var e=Ou(Sa)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:rl(e),i]},useSyncExternalStore:q_,useId:Sg,useHostTransitionStatus:mh,useFormState:rg,useActionState:rg,useOptimistic:function(e,i){var r=dn();return J_(r,Oe,e,i)},useMemoCache:oh,useCacheRefresh:Mg},bM={readContext:Bn,use:Nu,useCallback:mg,useContext:Bn,useEffect:cg,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:_g,useReducer:uh,useRef:lg,useState:function(){return uh(Sa)},useDebugValue:hh,useDeferredValue:function(e,i){var r=dn();return Oe===null?dh(r,e,i):gg(r,Oe.memoizedState,e,i)},useTransition:function(){var e=uh(Sa)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:rl(e),i]},useSyncExternalStore:q_,useId:Sg,useHostTransitionStatus:mh,useFormState:og,useActionState:og,useOptimistic:function(e,i){var r=dn();return Oe!==null?J_(r,Oe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:oh,useCacheRefresh:Mg},Bs=null,ll=0;function Fu(e){var i=ll;return ll+=1,Bs===null&&(Bs=[]),B_(Bs,e,i)}function ul(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Hu(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function wg(e){var i=e._init;return i(e._payload)}function Cg(e){function i(Z,k){if(e){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function r(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function u(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function h(Z,k){return Z=_a(Z,k),Z.index=0,Z.sibling=null,Z}function m(Z,k,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function T(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function w(Z,k,$,dt){return k===null||k.tag!==6?(k=If($,Z.mode,dt),k.return=Z,k):(k=h(k,$),k.return=Z,k)}function G(Z,k,$,dt){var Ht=$.type;return Ht===E?ht(Z,k,$.props.children,dt,$.key):k!==null&&(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&wg(Ht)===k.type)?(k=h(k,$.props),ul(k,$),k.return=Z,k):(k=Mu($.type,$.key,$.props,null,Z.mode,dt),ul(k,$),k.return=Z,k)}function tt(Z,k,$,dt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Bf($,Z.mode,dt),k.return=Z,k):(k=h(k,$.children||[]),k.return=Z,k)}function ht(Z,k,$,dt,Ht){return k===null||k.tag!==7?(k=Pr($,Z.mode,dt,Ht),k.return=Z,k):(k=h(k,$),k.return=Z,k)}function vt(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=If(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return $=Mu(k.type,k.key,k.props,null,Z.mode,$),ul($,k),$.return=Z,$;case y:return k=Bf(k,Z.mode,$),k.return=Z,k;case F:var dt=k._init;return k=dt(k._payload),vt(Z,k,$)}if(nt(k)||X(k))return k=Pr(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return vt(Z,Fu(k),$);if(k.$$typeof===L)return vt(Z,Au(Z,k),$);Hu(Z,k)}return null}function at(Z,k,$,dt){var Ht=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:w(Z,k,""+$,dt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Ht?G(Z,k,$,dt):null;case y:return $.key===Ht?tt(Z,k,$,dt):null;case F:return Ht=$._init,$=Ht($._payload),at(Z,k,$,dt)}if(nt($)||X($))return Ht!==null?null:ht(Z,k,$,dt,null);if(typeof $.then=="function")return at(Z,k,Fu($),dt);if($.$$typeof===L)return at(Z,k,Au(Z,$),dt);Hu(Z,$)}return null}function st(Z,k,$,dt,Ht){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Z=Z.get($)||null,w(k,Z,""+dt,Ht);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case v:return Z=Z.get(dt.key===null?$:dt.key)||null,G(k,Z,dt,Ht);case y:return Z=Z.get(dt.key===null?$:dt.key)||null,tt(k,Z,dt,Ht);case F:var _e=dt._init;return dt=_e(dt._payload),st(Z,k,$,dt,Ht)}if(nt(dt)||X(dt))return Z=Z.get($)||null,ht(k,Z,dt,Ht,null);if(typeof dt.then=="function")return st(Z,k,$,Fu(dt),Ht);if(dt.$$typeof===L)return st(Z,k,$,Au(k,dt),Ht);Hu(k,dt)}return null}function ae(Z,k,$,dt){for(var Ht=null,_e=null,Zt=k,ie=k=0,Rn=null;Zt!==null&&ie<$.length;ie++){Zt.index>ie?(Rn=Zt,Zt=null):Rn=Zt.sibling;var Re=at(Z,Zt,$[ie],dt);if(Re===null){Zt===null&&(Zt=Rn);break}e&&Zt&&Re.alternate===null&&i(Z,Zt),k=m(Re,k,ie),_e===null?Ht=Re:_e.sibling=Re,_e=Re,Zt=Rn}if(ie===$.length)return r(Z,Zt),Ce&&Ir(Z,ie),Ht;if(Zt===null){for(;ie<$.length;ie++)Zt=vt(Z,$[ie],dt),Zt!==null&&(k=m(Zt,k,ie),_e===null?Ht=Zt:_e.sibling=Zt,_e=Zt);return Ce&&Ir(Z,ie),Ht}for(Zt=u(Zt);ie<$.length;ie++)Rn=st(Zt,Z,ie,$[ie],dt),Rn!==null&&(e&&Rn.alternate!==null&&Zt.delete(Rn.key===null?ie:Rn.key),k=m(Rn,k,ie),_e===null?Ht=Rn:_e.sibling=Rn,_e=Rn);return e&&Zt.forEach(function(hr){return i(Z,hr)}),Ce&&Ir(Z,ie),Ht}function ee(Z,k,$,dt){if($==null)throw Error(a(151));for(var Ht=null,_e=null,Zt=k,ie=k=0,Rn=null,Re=$.next();Zt!==null&&!Re.done;ie++,Re=$.next()){Zt.index>ie?(Rn=Zt,Zt=null):Rn=Zt.sibling;var hr=at(Z,Zt,Re.value,dt);if(hr===null){Zt===null&&(Zt=Rn);break}e&&Zt&&hr.alternate===null&&i(Z,Zt),k=m(hr,k,ie),_e===null?Ht=hr:_e.sibling=hr,_e=hr,Zt=Rn}if(Re.done)return r(Z,Zt),Ce&&Ir(Z,ie),Ht;if(Zt===null){for(;!Re.done;ie++,Re=$.next())Re=vt(Z,Re.value,dt),Re!==null&&(k=m(Re,k,ie),_e===null?Ht=Re:_e.sibling=Re,_e=Re);return Ce&&Ir(Z,ie),Ht}for(Zt=u(Zt);!Re.done;ie++,Re=$.next())Re=st(Zt,Z,ie,Re.value,dt),Re!==null&&(e&&Re.alternate!==null&&Zt.delete(Re.key===null?ie:Re.key),k=m(Re,k,ie),_e===null?Ht=Re:_e.sibling=Re,_e=Re);return e&&Zt.forEach(function(AE){return i(Z,AE)}),Ce&&Ir(Z,ie),Ht}function ze(Z,k,$,dt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:t:{for(var Ht=$.key;k!==null;){if(k.key===Ht){if(Ht=$.type,Ht===E){if(k.tag===7){r(Z,k.sibling),dt=h(k,$.props.children),dt.return=Z,Z=dt;break t}}else if(k.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===F&&wg(Ht)===k.type){r(Z,k.sibling),dt=h(k,$.props),ul(dt,$),dt.return=Z,Z=dt;break t}r(Z,k);break}else i(Z,k);k=k.sibling}$.type===E?(dt=Pr($.props.children,Z.mode,dt,$.key),dt.return=Z,Z=dt):(dt=Mu($.type,$.key,$.props,null,Z.mode,dt),ul(dt,$),dt.return=Z,Z=dt)}return T(Z);case y:t:{for(Ht=$.key;k!==null;){if(k.key===Ht)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){r(Z,k.sibling),dt=h(k,$.children||[]),dt.return=Z,Z=dt;break t}else{r(Z,k);break}else i(Z,k);k=k.sibling}dt=Bf($,Z.mode,dt),dt.return=Z,Z=dt}return T(Z);case F:return Ht=$._init,$=Ht($._payload),ze(Z,k,$,dt)}if(nt($))return ae(Z,k,$,dt);if(X($)){if(Ht=X($),typeof Ht!="function")throw Error(a(150));return $=Ht.call($),ee(Z,k,$,dt)}if(typeof $.then=="function")return ze(Z,k,Fu($),dt);if($.$$typeof===L)return ze(Z,k,Au(Z,$),dt);Hu(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(r(Z,k.sibling),dt=h(k,$),dt.return=Z,Z=dt):(r(Z,k),dt=If($,Z.mode,dt),dt.return=Z,Z=dt),T(Z)):r(Z,k)}return function(Z,k,$,dt){try{ll=0;var Ht=ze(Z,k,$,dt);return Bs=null,Ht}catch(Zt){if(Zt===$o||Zt===wu)throw Zt;var _e=ci(29,Zt,null,Z.mode);return _e.lanes=dt,_e.return=Z,_e}finally{}}}var Fs=Cg(!0),Dg=Cg(!1),Di=J(null),ta=null;function Qa(e){var i=e.alternate;yt(yn,yn.current&1),yt(Di,e),ta===null&&(i===null||Os.current!==null||i.memoizedState!==null)&&(ta=e)}function Ug(e){if(e.tag===22){if(yt(yn,yn.current),yt(Di,e),ta===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ta=e)}}else Ja()}function Ja(){yt(yn,yn.current),yt(Di,Di.current)}function Ma(e){pt(Di),ta===e&&(ta=null),pt(yn)}var yn=J(0);function Gu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||sd(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function gh(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vh={enqueueSetState:function(e,i,r){e=e._reactInternals;var u=pi(),h=ja(u);h.payload=i,r!=null&&(h.callback=r),i=Za(e,h,u),i!==null&&(mi(i,e,u),el(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=pi(),h=ja(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Za(e,h,u),i!==null&&(mi(i,e,u),el(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=pi(),u=ja(r);u.tag=2,i!=null&&(u.callback=i),i=Za(e,u,r),i!==null&&(mi(i,e,r),el(i,e,r))}};function Lg(e,i,r,u,h,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!Wo(r,u)||!Wo(h,m):!0}function Ng(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&vh.enqueueReplaceState(i,i.state,null)}function Xr(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Og(e){Vu(e)}function Pg(e){console.error(e)}function zg(e){Vu(e)}function ku(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Ig(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function xh(e,i,r){return r=ja(r),r.tag=3,r.payload={element:null},r.callback=function(){ku(e,i)},r}function Bg(e){return e=ja(e),e.tag=3,e}function Fg(e,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Ig(i,r,u)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Ig(i,r,u),typeof h!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function AM(e,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&Ko(i,r,h,!0),r=Di.current,r!==null){switch(r.tag){case 13:return ta===null?kh():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===jf?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),Wh(e,u,h)),!1;case 22:return r.flags|=65536,u===jf?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),Wh(e,u,h)),!1}throw Error(a(435,r.tag))}return Wh(e,u,h),kh(),!1}if(Ce)return i=Di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Gf&&(e=Error(a(422),{cause:u}),Zo(Ai(e,r)))):(u!==Gf&&(i=Error(a(423),{cause:u}),Zo(Ai(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Ai(u,r),h=xh(e.stateNode,u,h),Qf(e,h),an!==4&&(an=2)),!1;var m=Error(a(520),{cause:u});if(m=Ai(m,r),_l===null?_l=[m]:_l.push(m),an!==4&&(an=2),i===null)return!0;u=Ai(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=xh(r.stateNode,u,e),Qf(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ar===null||!ar.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Bg(h),Fg(h,e,r,u),Qf(r,h),!1}r=r.return}while(r!==null);return!1}var Hg=Error(a(461)),bn=!1;function Un(e,i,r,u){i.child=e===null?Dg(i,null,r,u):Fs(i,e.child,r,u)}function Gg(e,i,r,u,h){r=r.render;var m=i.ref;if("ref"in u){var T={};for(var w in u)w!=="ref"&&(T[w]=u[w])}else T=u;return Gr(i),u=nh(e,i,r,T,m,h),w=ih(),e!==null&&!bn?(ah(e,i,h),Ea(e,i,h)):(Ce&&w&&Ff(i),i.flags|=1,Un(e,i,u,h),i.child)}function Vg(e,i,r,u,h){if(e===null){var m=r.type;return typeof m=="function"&&!zf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,kg(e,i,m,u,h)):(e=Mu(r.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Rh(e,h)){var T=m.memoizedProps;if(r=r.compare,r=r!==null?r:Wo,r(T,u)&&e.ref===i.ref)return Ea(e,i,h)}return i.flags|=1,e=_a(m,u),e.ref=i.ref,e.return=i,i.child=e}function kg(e,i,r,u,h){if(e!==null){var m=e.memoizedProps;if(Wo(m,u)&&e.ref===i.ref)if(bn=!1,i.pendingProps=u=m,Rh(e,h))(e.flags&131072)!==0&&(bn=!0);else return i.lanes=e.lanes,Ea(e,i,h)}return yh(e,i,r,u,h)}function Xg(e,i,r){var u=i.pendingProps,h=u.children,m=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=m!==null?m.baseLanes|r:r,e!==null){for(h=i.child=e.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;i.childLanes=m&~u}else i.childLanes=0,i.child=null;return Wg(e,i,u,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ru(i,m!==null?m.cachePool:null),m!==null?k_(i,m):$f(),Ug(i);else return i.lanes=i.childLanes=536870912,Wg(e,i,m!==null?m.baseLanes|r:r,r)}else m!==null?(Ru(i,m.cachePool),k_(i,m),Ja(),i.memoizedState=null):(e!==null&&Ru(i,null),$f(),Ja());return Un(e,i,h,r),i.child}function Wg(e,i,r,u){var h=Yf();return h=h===null?null:{parent:xn._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},e!==null&&Ru(i,null),$f(),Ug(i),e!==null&&Ko(e,i,u,!0),null}function Xu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function yh(e,i,r,u,h){return Gr(i),r=nh(e,i,r,u,void 0,h),u=ih(),e!==null&&!bn?(ah(e,i,h),Ea(e,i,h)):(Ce&&u&&Ff(i),i.flags|=1,Un(e,i,r,h),i.child)}function qg(e,i,r,u,h,m){return Gr(i),i.updateQueue=null,r=W_(i,u,r,h),X_(e),u=ih(),e!==null&&!bn?(ah(e,i,m),Ea(e,i,m)):(Ce&&u&&Ff(i),i.flags|=1,Un(e,i,r,m),i.child)}function Yg(e,i,r,u,h){if(Gr(i),i.stateNode===null){var m=Cs,T=r.contextType;typeof T=="object"&&T!==null&&(m=Bn(T)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=vh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},Zf(i),T=r.contextType,m.context=typeof T=="object"&&T!==null?Bn(T):Cs,m.state=i.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(gh(i,r,T,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&vh.enqueueReplaceState(m,m.state,null),il(i,u,m,h),nl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var w=i.memoizedProps,G=Xr(r,w);m.props=G;var tt=m.context,ht=r.contextType;T=Cs,typeof ht=="object"&&ht!==null&&(T=Bn(ht));var vt=r.getDerivedStateFromProps;ht=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||tt!==T)&&Ng(i,m,u,T),Ya=!1;var at=i.memoizedState;m.state=at,il(i,u,m,h),nl(),tt=i.memoizedState,w||at!==tt||Ya?(typeof vt=="function"&&(gh(i,r,vt,u),tt=i.memoizedState),(G=Ya||Lg(i,r,G,u,at,tt,T))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=tt),m.props=u,m.state=tt,m.context=T,u=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,Kf(e,i),T=i.memoizedProps,ht=Xr(r,T),m.props=ht,vt=i.pendingProps,at=m.context,tt=r.contextType,G=Cs,typeof tt=="object"&&tt!==null&&(G=Bn(tt)),w=r.getDerivedStateFromProps,(tt=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==vt||at!==G)&&Ng(i,m,u,G),Ya=!1,at=i.memoizedState,m.state=at,il(i,u,m,h),nl();var st=i.memoizedState;T!==vt||at!==st||Ya||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof w=="function"&&(gh(i,r,w,u),st=i.memoizedState),(ht=Ya||Lg(i,r,ht,u,at,st,G)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(tt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,st,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,st,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=st),m.props=u,m.state=st,m.context=G,u=ht):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,Xu(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=Fs(i,e.child,null,h),i.child=Fs(i,null,r,h)):Un(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Ea(e,i,h),e}function jg(e,i,r,u){return jo(),i.flags|=256,Un(e,i,r,u),i.child}var Sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Mh(e){return{baseLanes:e,cachePool:P_()}}function Eh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Ui),e}function Zg(e,i,r){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(yn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ce){if(h?Qa(i):Ja(),Ce){var w=nn,G;if(G=w){t:{for(G=w,w=$i;G.nodeType!==8;){if(!w){w=null;break t}if(G=Xi(G.nextSibling),G===null){w=null;break t}}w=G}w!==null?(i.memoizedState={dehydrated:w,treeContext:zr!==null?{id:ga,overflow:va}:null,retryLane:536870912,hydrationErrors:null},G=ci(18,null,null,0),G.stateNode=w,G.return=i,i.child=G,Yn=i,nn=null,G=!0):G=!1}G||Fr(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return sd(w)?i.lanes=32:i.lanes=536870912,null;Ma(i)}return w=u.children,u=u.fallback,h?(Ja(),h=i.mode,w=Wu({mode:"hidden",children:w},h),u=Pr(u,h,r,null),w.return=i,u.return=i,w.sibling=u,i.child=w,h=i.child,h.memoizedState=Mh(r),h.childLanes=Eh(e,T,r),i.memoizedState=Sh,u):(Qa(i),Th(i,w))}if(G=e.memoizedState,G!==null&&(w=G.dehydrated,w!==null)){if(m)i.flags&256?(Qa(i),i.flags&=-257,i=bh(e,i,r)):i.memoizedState!==null?(Ja(),i.child=e.child,i.flags|=128,i=null):(Ja(),h=u.fallback,w=i.mode,u=Wu({mode:"visible",children:u.children},w),h=Pr(h,w,r,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Fs(i,e.child,null,r),u=i.child,u.memoizedState=Mh(r),u.childLanes=Eh(e,T,r),i.memoizedState=Sh,i=h);else if(Qa(i),sd(w)){if(T=w.nextSibling&&w.nextSibling.dataset,T)var tt=T.dgst;T=tt,u=Error(a(419)),u.stack="",u.digest=T,Zo({value:u,source:null,stack:null}),i=bh(e,i,r)}else if(bn||Ko(e,i,r,!1),T=(r&e.childLanes)!==0,bn||T){if(T=ke,T!==null&&(u=r&-r,u=(u&42)!==0?1:re(u),u=(u&(T.suspendedLanes|r))!==0?0:u,u!==0&&u!==G.retryLane))throw G.retryLane=u,ws(e,u),mi(T,e,u),Hg;w.data==="$?"||kh(),i=bh(e,i,r)}else w.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,nn=Xi(w.nextSibling),Yn=i,Ce=!0,Br=null,$i=!1,e!==null&&(wi[Ci++]=ga,wi[Ci++]=va,wi[Ci++]=zr,ga=e.id,va=e.overflow,zr=i),i=Th(i,u.children),i.flags|=4096);return i}return h?(Ja(),h=u.fallback,w=i.mode,G=e.child,tt=G.sibling,u=_a(G,{mode:"hidden",children:u.children}),u.subtreeFlags=G.subtreeFlags&65011712,tt!==null?h=_a(tt,h):(h=Pr(h,w,r,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,w=e.child.memoizedState,w===null?w=Mh(r):(G=w.cachePool,G!==null?(tt=xn._currentValue,G=G.parent!==tt?{parent:tt,pool:tt}:G):G=P_(),w={baseLanes:w.baseLanes|r,cachePool:G}),h.memoizedState=w,h.childLanes=Eh(e,T,r),i.memoizedState=Sh,u):(Qa(i),r=e.child,e=r.sibling,r=_a(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=r,i.memoizedState=null,r)}function Th(e,i){return i=Wu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Wu(e,i){return e=ci(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function bh(e,i,r){return Fs(i,e.child,null,r),e=Th(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Kg(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),kf(e.return,i,r)}function Ah(e,i,r,u,h){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=r,m.tailMode=h)}function Qg(e,i,r){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(Un(e,i,u.children,r),u=yn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kg(e,r,i);else if(e.tag===19)Kg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(yt(yn,u),h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Gu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Ah(i,!1,h,r,m);break;case"backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Gu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Ah(i,!0,r,null,m);break;case"together":Ah(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ea(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ir|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ko(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=_a(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=_a(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Rh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function RM(e,i,r){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),qa(i,xn,e.memoizedState.cache),jo();break;case 27:case 5:Vt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:qa(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Qa(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Zg(e,i,r):(Qa(i),e=Ea(e,i,r),e!==null?e.sibling:null);Qa(i);break;case 19:var h=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(Ko(e,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return Qg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),yt(yn,yn.current),u)break;return null;case 22:case 23:return i.lanes=0,Xg(e,i,r);case 24:qa(i,xn,e.memoizedState.cache)}return Ea(e,i,r)}function Jg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)bn=!0;else{if(!Rh(e,r)&&(i.flags&128)===0)return bn=!1,RM(e,i,r);bn=(e.flags&131072)!==0}else bn=!1,Ce&&(i.flags&1048576)!==0&&w_(i,Tu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")zf(u)?(e=Xr(u,e),i.tag=1,i=Yg(null,i,u,e,r)):(i.tag=0,i=yh(null,i,u,e,r));else{if(u!=null){if(h=u.$$typeof,h===A){i.tag=11,i=Gg(null,i,u,e,r);break t}else if(h===P){i.tag=14,i=Vg(null,i,u,e,r);break t}}throw i=ot(u)||u,Error(a(306,i,""))}}return i;case 0:return yh(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=Xr(u,i.pendingProps),Yg(e,i,u,h,r);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,Kf(e,i),il(i,u,null,r);var T=i.memoizedState;if(u=T.cache,qa(i,xn,u),u!==m.cache&&Xf(i,[xn],r,!0),nl(),u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=jg(e,i,u,r);break t}else if(u!==h){h=Ai(Error(a(424)),i),Zo(h),i=jg(e,i,u,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Xi(e.firstChild),Yn=i,Ce=!0,Br=null,$i=!0,r=Dg(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(jo(),u===h){i=Ea(e,i,r);break t}Un(e,i,u,r)}i=i.child}return i;case 26:return Xu(e,i),e===null?(r=nv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ce||(r=i.type,e=i.pendingProps,u=rc(et.current).createElement(r),u[vn]=i,u[tn]=e,Nn(u,r,e),fn(u),i.stateNode=u):i.memoizedState=nv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Vt(i),e===null&&Ce&&(u=i.stateNode=$0(i.type,i.pendingProps,et.current),Yn=i,$i=!0,h=nn,or(i.type)?(od=h,nn=Xi(u.firstChild)):nn=h),Un(e,i,i.pendingProps.children,r),Xu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ce&&((h=u=nn)&&(u=eE(u,i.type,i.pendingProps,$i),u!==null?(i.stateNode=u,Yn=i,nn=Xi(u.firstChild),$i=!1,h=!0):h=!1),h||Fr(i)),Vt(i),h=i.type,m=i.pendingProps,T=e!==null?e.memoizedProps:null,u=m.children,id(h,m)?u=null:T!==null&&id(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=nh(e,i,xM,null,null,r),bl._currentValue=h),Xu(e,i),Un(e,i,u,r),i.child;case 6:return e===null&&Ce&&((e=r=nn)&&(r=nE(r,i.pendingProps,$i),r!==null?(i.stateNode=r,Yn=i,nn=null,e=!0):e=!1),e||Fr(i)),null;case 13:return Zg(e,i,r);case 4:return At(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Fs(i,null,u,r):Un(e,i,u,r),i.child;case 11:return Gg(e,i,i.type,i.pendingProps,r);case 7:return Un(e,i,i.pendingProps,r),i.child;case 8:return Un(e,i,i.pendingProps.children,r),i.child;case 12:return Un(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,qa(i,i.type,u.value),Un(e,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Gr(i),h=Bn(h),u=u(h),i.flags|=1,Un(e,i,u,r),i.child;case 14:return Vg(e,i,i.type,i.pendingProps,r);case 15:return kg(e,i,i.type,i.pendingProps,r);case 19:return Qg(e,i,r);case 31:return u=i.pendingProps,r=i.mode,u={mode:u.mode,children:u.children},e===null?(r=Wu(u,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=_a(e.child,u),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return Xg(e,i,r);case 24:return Gr(i),u=Bn(xn),e===null?(h=Yf(),h===null&&(h=ke,m=Wf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:u,cache:h},Zf(i),qa(i,xn,h)):((e.lanes&r)!==0&&(Kf(e,i),il(i,null,null,r),nl()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),qa(i,xn,u)):(u=m.cache,qa(i,xn,u),u!==h.cache&&Xf(i,[xn],r,!0))),Un(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ta(e){e.flags|=4}function $g(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ov(i)){if(i=Di.current,i!==null&&((Me&4194048)===Me?ta!==null:(Me&62914560)!==Me&&(Me&536870912)===0||i!==ta))throw tl=jf,z_;e.flags|=8192}}function qu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?bt():536870912,e.lanes|=i,ks|=i)}function cl(e,i){if(!Ce)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function wM(e,i,r){var u=i.pendingProps;switch(Hf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),ya(xn),jt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(i)?Ta(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,U_())),Qe(i),null;case 26:return r=i.memoizedState,e===null?(Ta(i),r!==null?(Qe(i),$g(i,r)):(Qe(i),i.flags&=-16777217)):r?r!==e.memoizedState?(Ta(i),Qe(i),$g(i,r)):(Qe(i),i.flags&=-16777217):(e.memoizedProps!==u&&Ta(i),Qe(i),i.flags&=-16777217),null;case 27:ue(i),r=et.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Ta(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}e=Tt.current,Yo(i)?C_(i):(e=$0(h,u,r),i.stateNode=e,Ta(i))}return Qe(i),null;case 5:if(ue(i),r=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Ta(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}if(e=Tt.current,Yo(i))C_(i);else{switch(h=rc(et.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(r,{is:u.is}):h.createElement(r)}}e[vn]=i,e[tn]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Nn(e,r,u),r){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ta(i)}}return Qe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Ta(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=et.current,Yo(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,h=Yn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[vn]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||q0(e.nodeValue,r)),e||Fr(i)}else e=rc(e).createTextNode(u),e[vn]=i,i.stateNode=e}return Qe(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Yo(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[vn]=i}else jo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),h=!1}else h=U_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ma(i),i):(Ma(i),null)}if(Ma(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=u!==null,e=e!==null&&e.memoizedState!==null,r){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return r!==e&&r&&(i.child.flags|=8192),qu(i,i.updateQueue),Qe(i),null;case 4:return jt(),e===null&&Jh(i.stateNode.containerInfo),Qe(i),null;case 10:return ya(i.type),Qe(i),null;case 19:if(pt(yn),h=i.memoizedState,h===null)return Qe(i),null;if(u=(i.flags&128)!==0,m=h.rendering,m===null)if(u)cl(h,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Gu(e),m!==null){for(i.flags|=128,cl(h,!1),e=m.updateQueue,i.updateQueue=e,qu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)R_(r,e),r=r.sibling;return yt(yn,yn.current&1|2),i.child}e=e.sibling}h.tail!==null&&Pt()>Zu&&(i.flags|=128,u=!0,cl(h,!1),i.lanes=4194304)}else{if(!u)if(e=Gu(m),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,qu(i,e),cl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ce)return Qe(i),null}else 2*Pt()-h.renderingStartTime>Zu&&r!==536870912&&(i.flags|=128,u=!0,cl(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(e=h.last,e!==null?e.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Pt(),i.sibling=null,e=yn.current,yt(yn,u?e&1|2:e&1),i):(Qe(i),null);case 22:case 23:return Ma(i),th(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),r=i.updateQueue,r!==null&&qu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&pt(Vr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ya(xn),Qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function CM(e,i){switch(Hf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ya(xn),jt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ue(i),null;case 13:if(Ma(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));jo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return pt(yn),null;case 4:return jt(),null;case 10:return ya(i.type),null;case 22:case 23:return Ma(i),th(),e!==null&&pt(Vr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ya(xn),null;case 25:return null;default:return null}}function t0(e,i){switch(Hf(i),i.tag){case 3:ya(xn),jt();break;case 26:case 27:case 5:ue(i);break;case 4:jt();break;case 13:Ma(i);break;case 19:pt(yn);break;case 10:ya(i.type);break;case 22:case 23:Ma(i),th(),e!==null&&pt(Vr);break;case 24:ya(xn)}}function fl(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){u=void 0;var m=r.create,T=r.inst;u=m(),T.destroy=u}r=r.next}while(r!==h)}}catch(w){Fe(i,i.return,w)}}function $a(e,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var T=u.inst,w=T.destroy;if(w!==void 0){T.destroy=void 0,h=i;var G=r,tt=w;try{tt()}catch(ht){Fe(h,G,ht)}}}u=u.next}while(u!==m)}}catch(ht){Fe(i,i.return,ht)}}function e0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{V_(i,r)}catch(u){Fe(e,e.return,u)}}}function n0(e,i,r){r.props=Xr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){Fe(e,i,u)}}function hl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof r=="function"?e.refCleanup=r(u):r.current=u}}catch(h){Fe(e,i,h)}}function ea(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){Fe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Fe(e,i,h)}else r.current=null}function i0(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){Fe(e,e.return,h)}}function wh(e,i,r){try{var u=e.stateNode;KM(u,e.type,r,i),u[tn]=i}catch(h){Fe(e,e.return,h)}}function a0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&or(e.type)||e.tag===4}function Ch(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||a0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&or(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dh(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ac));else if(u!==4&&(u===27&&or(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Dh(e,i,r),e=e.sibling;e!==null;)Dh(e,i,r),e=e.sibling}function Yu(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&(u===27&&or(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Yu(e,i,r),e=e.sibling;e!==null;)Yu(e,i,r),e=e.sibling}function r0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Nn(i,u,r),i[vn]=e,i[tn]=r}catch(m){Fe(e,e.return,m)}}var ba=!1,un=!1,Uh=!1,s0=typeof WeakSet=="function"?WeakSet:Set,An=null;function DM(e,i){if(e=e.containerInfo,ed=fc,e=g_(e),Cf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var T=0,w=-1,G=-1,tt=0,ht=0,vt=e,at=null;e:for(;;){for(var st;vt!==r||h!==0&&vt.nodeType!==3||(w=T+h),vt!==m||u!==0&&vt.nodeType!==3||(G=T+u),vt.nodeType===3&&(T+=vt.nodeValue.length),(st=vt.firstChild)!==null;)at=vt,vt=st;for(;;){if(vt===e)break e;if(at===r&&++tt===h&&(w=T),at===m&&++ht===u&&(G=T),(st=vt.nextSibling)!==null)break;vt=at,at=vt.parentNode}vt=st}r=w===-1||G===-1?null:{start:w,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(nd={focusedElem:e,selectionRange:r},fc=!1,An=i;An!==null;)if(i=An,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,An=e;else for(;An!==null;){switch(i=An,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var ae=Xr(r.type,h,r.elementType===r.type);e=u.getSnapshotBeforeUpdate(ae,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Fe(r,r.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)rd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,An=e;break}An=i.return}}function o0(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:tr(e,r),u&4&&fl(5,r);break;case 1:if(tr(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(T){Fe(r,r.return,T)}else{var h=Xr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Fe(r,r.return,T)}}u&64&&e0(r),u&512&&hl(r,r.return);break;case 3:if(tr(e,r),u&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{V_(e,i)}catch(T){Fe(r,r.return,T)}}break;case 27:i===null&&u&4&&r0(r);case 26:case 5:tr(e,r),i===null&&u&4&&i0(r),u&512&&hl(r,r.return);break;case 12:tr(e,r);break;case 13:tr(e,r),u&4&&c0(e,r),u&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=FM.bind(null,r),iE(e,r))));break;case 22:if(u=r.memoizedState!==null||ba,!u){i=i!==null&&i.memoizedState!==null||un,h=ba;var m=un;ba=u,(un=i)&&!m?er(e,r,(r.subtreeFlags&8772)!==0):tr(e,r),ba=h,un=m}break;case 30:break;default:tr(e,r)}}function l0(e){var i=e.alternate;i!==null&&(e.alternate=null,l0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ys(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,ti=!1;function Aa(e,i,r){for(r=r.child;r!==null;)u0(e,i,r),r=r.sibling}function u0(e,i,r){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ft,r)}catch{}switch(r.tag){case 26:un||ea(r,i),Aa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:un||ea(r,i);var u=qe,h=ti;or(r.type)&&(qe=r.stateNode,ti=!1),Aa(e,i,r),Sl(r.stateNode),qe=u,ti=h;break;case 5:un||ea(r,i);case 6:if(u=qe,h=ti,qe=null,Aa(e,i,r),qe=u,ti=h,qe!==null)if(ti)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(r.stateNode)}catch(m){Fe(r,i,m)}else try{qe.removeChild(r.stateNode)}catch(m){Fe(r,i,m)}break;case 18:qe!==null&&(ti?(e=qe,Q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Cl(e)):Q0(qe,r.stateNode));break;case 4:u=qe,h=ti,qe=r.stateNode.containerInfo,ti=!0,Aa(e,i,r),qe=u,ti=h;break;case 0:case 11:case 14:case 15:un||$a(2,r,i),un||$a(4,r,i),Aa(e,i,r);break;case 1:un||(ea(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&n0(r,i,u)),Aa(e,i,r);break;case 21:Aa(e,i,r);break;case 22:un=(u=un)||r.memoizedState!==null,Aa(e,i,r),un=u;break;default:Aa(e,i,r)}}function c0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cl(e)}catch(r){Fe(i,i.return,r)}}function UM(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new s0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new s0),i;default:throw Error(a(435,e.tag))}}function Lh(e,i){var r=UM(e);i.forEach(function(u){var h=HM.bind(null,e,u);r.has(u)||(r.add(u),u.then(h,h))})}function fi(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=e,T=i,w=T;t:for(;w!==null;){switch(w.tag){case 27:if(or(w.type)){qe=w.stateNode,ti=!1;break t}break;case 5:qe=w.stateNode,ti=!1;break t;case 3:case 4:qe=w.stateNode.containerInfo,ti=!0;break t}w=w.return}if(qe===null)throw Error(a(160));u0(m,T,h),qe=null,ti=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)f0(i,e),i=i.sibling}var ki=null;function f0(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fi(i,e),hi(e),u&4&&($a(3,e,e.return),fl(3,e),$a(5,e,e.return));break;case 1:fi(i,e),hi(e),u&512&&(un||r===null||ea(r,r.return)),u&64&&ba&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=ki;if(fi(i,e),hi(e),u&512&&(un||r===null||ea(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Ji]||m[vn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Nn(m,u,r),m[vn]=e,fn(m),u=m;break t;case"link":var T=rv("link","href",h).get(u+(r.href||""));if(T){for(var w=0;w<T.length;w++)if(m=T[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(w,1);break e}}m=h.createElement(u),Nn(m,u,r),h.head.appendChild(m);break;case"meta":if(T=rv("meta","content",h).get(u+(r.content||""))){for(w=0;w<T.length;w++)if(m=T[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(w,1);break e}}m=h.createElement(u),Nn(m,u,r),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[vn]=e,fn(m),u=m}e.stateNode=u}else sv(h,e.type,e.stateNode);else e.stateNode=av(h,u,e.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?sv(h,e.type,e.stateNode):av(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&wh(e,e.memoizedProps,r.memoizedProps)}break;case 27:fi(i,e),hi(e),u&512&&(un||r===null||ea(r,r.return)),r!==null&&u&4&&wh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(fi(i,e),hi(e),u&512&&(un||r===null||ea(r,r.return)),e.flags&32){h=e.stateNode;try{Qn(h,"")}catch(st){Fe(e,e.return,st)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,wh(e,h,r!==null?r.memoizedProps:h)),u&1024&&(Uh=!0);break;case 6:if(fi(i,e),hi(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(st){Fe(e,e.return,st)}}break;case 3:if(lc=null,h=ki,ki=sc(i.containerInfo),fi(i,e),ki=h,hi(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Cl(i.containerInfo)}catch(st){Fe(e,e.return,st)}Uh&&(Uh=!1,h0(e));break;case 4:u=ki,ki=sc(e.stateNode.containerInfo),fi(i,e),hi(e),ki=u;break;case 12:fi(i,e),hi(e);break;case 13:fi(i,e),hi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Bh=Pt()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Lh(e,u)));break;case 22:h=e.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,tt=ba,ht=un;if(ba=tt||h,un=ht||G,fi(i,e),un=ht,ba=tt,hi(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||G||ba||un||Wr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(m=G.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{w=G.stateNode;var vt=G.memoizedProps.style,at=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;w.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Fe(G,G.return,st)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(st){Fe(G,G.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,Lh(e,r))));break;case 19:fi(i,e),hi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Lh(e,u)));break;case 30:break;case 21:break;default:fi(i,e),hi(e)}}function hi(e){var i=e.flags;if(i&2){try{for(var r,u=e.return;u!==null;){if(a0(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Ch(e);Yu(e,m,h);break;case 5:var T=r.stateNode;r.flags&32&&(Qn(T,""),r.flags&=-33);var w=Ch(e);Yu(e,w,T);break;case 3:case 4:var G=r.stateNode.containerInfo,tt=Ch(e);Dh(e,tt,G);break;default:throw Error(a(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function h0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;h0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function tr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)o0(e,i.alternate,i),i=i.sibling}function Wr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:$a(4,i,i.return),Wr(i);break;case 1:ea(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&n0(i,i.return,r),Wr(i);break;case 27:Sl(i.stateNode);case 26:case 5:ea(i,i.return),Wr(i);break;case 22:i.memoizedState===null&&Wr(i);break;case 30:Wr(i);break;default:Wr(i)}e=e.sibling}}function er(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,T=m.flags;switch(m.tag){case 0:case 11:case 15:er(h,m,r),fl(4,m);break;case 1:if(er(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(tt){Fe(u,u.return,tt)}if(u=m,h=u.updateQueue,h!==null){var w=u.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)G_(G[h],w)}catch(tt){Fe(u,u.return,tt)}}r&&T&64&&e0(m),hl(m,m.return);break;case 27:r0(m);case 26:case 5:er(h,m,r),r&&u===null&&T&4&&i0(m),hl(m,m.return);break;case 12:er(h,m,r);break;case 13:er(h,m,r),r&&T&4&&c0(h,m);break;case 22:m.memoizedState===null&&er(h,m,r),hl(m,m.return);break;case 30:break;default:er(h,m,r)}i=i.sibling}}function Nh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Qo(r))}function Oh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Qo(e))}function na(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)d0(e,i,r,u),i=i.sibling}function d0(e,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:na(e,i,r,u),h&2048&&fl(9,i);break;case 1:na(e,i,r,u);break;case 3:na(e,i,r,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Qo(e)));break;case 12:if(h&2048){na(e,i,r,u),e=i.stateNode;try{var m=i.memoizedProps,T=m.id,w=m.onPostCommit;typeof w=="function"&&w(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Fe(i,i.return,G)}}else na(e,i,r,u);break;case 13:na(e,i,r,u);break;case 23:break;case 22:m=i.stateNode,T=i.alternate,i.memoizedState!==null?m._visibility&2?na(e,i,r,u):dl(e,i):m._visibility&2?na(e,i,r,u):(m._visibility|=2,Hs(e,i,r,u,(i.subtreeFlags&10256)!==0)),h&2048&&Nh(T,i);break;case 24:na(e,i,r,u),h&2048&&Oh(i.alternate,i);break;default:na(e,i,r,u)}}function Hs(e,i,r,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,T=i,w=r,G=u,tt=T.flags;switch(T.tag){case 0:case 11:case 15:Hs(m,T,w,G,h),fl(8,T);break;case 23:break;case 22:var ht=T.stateNode;T.memoizedState!==null?ht._visibility&2?Hs(m,T,w,G,h):dl(m,T):(ht._visibility|=2,Hs(m,T,w,G,h)),h&&tt&2048&&Nh(T.alternate,T);break;case 24:Hs(m,T,w,G,h),h&&tt&2048&&Oh(T.alternate,T);break;default:Hs(m,T,w,G,h)}i=i.sibling}}function dl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,h=u.flags;switch(u.tag){case 22:dl(r,u),h&2048&&Nh(u.alternate,u);break;case 24:dl(r,u),h&2048&&Oh(u.alternate,u);break;default:dl(r,u)}i=i.sibling}}var pl=8192;function Gs(e){if(e.subtreeFlags&pl)for(e=e.child;e!==null;)p0(e),e=e.sibling}function p0(e){switch(e.tag){case 26:Gs(e),e.flags&pl&&e.memoizedState!==null&&_E(ki,e.memoizedState,e.memoizedProps);break;case 5:Gs(e);break;case 3:case 4:var i=ki;ki=sc(e.stateNode.containerInfo),Gs(e),ki=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=pl,pl=16777216,Gs(e),pl=i):Gs(e));break;default:Gs(e)}}function m0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ml(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];An=u,g0(u,e)}m0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_0(e),e=e.sibling}function _0(e){switch(e.tag){case 0:case 11:case 15:ml(e),e.flags&2048&&$a(9,e,e.return);break;case 3:ml(e);break;case 12:ml(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ju(e)):ml(e);break;default:ml(e)}}function ju(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];An=u,g0(u,e)}m0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:$a(8,i,i.return),ju(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,ju(i));break;default:ju(i)}e=e.sibling}}function g0(e,i){for(;An!==null;){var r=An;switch(r.tag){case 0:case 11:case 15:$a(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Qo(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,An=u;else t:for(r=e;An!==null;){u=An;var h=u.sibling,m=u.return;if(l0(u),u===r){An=null;break t}if(h!==null){h.return=m,An=h;break t}An=m}}}var LM={getCacheForType:function(e){var i=Bn(xn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r}},NM=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,ve=null,Me=0,Le=0,di=null,nr=!1,Vs=!1,Ph=!1,Ra=0,an=0,ir=0,qr=0,zh=0,Ui=0,ks=0,_l=null,ei=null,Ih=!1,Bh=0,Zu=1/0,Ku=null,ar=null,Ln=0,rr=null,Xs=null,Ws=0,Fh=0,Hh=null,v0=null,gl=0,Gh=null;function pi(){if((Ue&2)!==0&&Me!==0)return Me&-Me;if(I.T!==null){var e=Ls;return e!==0?e:jh()}return Ee()}function x0(){Ui===0&&(Ui=(Me&536870912)===0||Ce?q():536870912);var e=Di.current;return e!==null&&(e.flags|=32),Ui}function mi(e,i,r){(e===ke&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(qs(e,0),sr(e,Me,Ui,!1)),Bt(e,r),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(qr|=r),an===4&&sr(e,Me,Ui,!1)),ia(e))}function y0(e,i,r){if((Ue&6)!==0)throw Error(a(327));var u=!r&&(i&124)===0&&(i&e.expiredLanes)===0||Ct(e,i),h=u?zM(e,i):Xh(e,i,!0),m=u;do{if(h===0){Vs&&!u&&sr(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!OM(r)){h=Xh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var w=e;h=_l;var G=w.current.memoizedState.isDehydrated;if(G&&(qs(w,T).flags|=256),T=Xh(w,T,!1),T!==2){if(Ph&&!G){w.errorRecoveryDisabledLanes|=m,qr|=m,h=4;break t}m=ei,ei=h,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){qs(e,0),sr(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:sr(u,i,Ui,!nr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Bh+300-Pt(),10<h)){if(sr(u,i,Ui,!nr),Xt(u,0,!0)!==0)break t;u.timeoutHandle=Z0(S0.bind(null,u,r,ei,Ku,Ih,i,Ui,qr,ks,nr,m,2,-0,0),h);break t}S0(u,r,ei,Ku,Ih,i,Ui,qr,ks,nr,m,0,-0,0)}}break}while(!0);ia(e)}function S0(e,i,r,u,h,m,T,w,G,tt,ht,vt,at,st){if(e.timeoutHandle=-1,vt=i.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Tl={stylesheets:null,count:0,unsuspend:mE},p0(i),vt=gE(),vt!==null)){e.cancelPendingCommit=vt(w0.bind(null,e,i,m,r,u,h,T,w,G,ht,1,at,st)),sr(e,m,T,!tt);return}w0(e,i,m,r,u,h,T,w,G)}function OM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!ui(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(e,i,r,u){i&=~zh,i&=~qr,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-zt(h),T=1<<m;u[m]=-1,h&=~T}r!==0&&xt(e,r,i)}function Qu(){return(Ue&6)===0?(vl(0),!1):!0}function Vh(){if(ve!==null){if(Le===0)var e=ve.return;else e=ve,xa=Hr=null,rh(e),Bs=null,ll=0,e=ve;for(;e!==null;)t0(e.alternate,e),e=e.return;ve=null}}function qs(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,JM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Vh(),ke=e,ve=r=_a(e.current,null),Me=i,Le=0,di=null,nr=!1,Vs=Ct(e,i),Ph=!1,ks=Ui=zh=qr=ir=an=0,ei=_l=null,Ih=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-zt(u),m=1<<h;i|=e[h],u&=~m}return Ra=i,xu(),r}function M0(e,i){me=null,I.H=Bu,i===$o||i===wu?(i=F_(),Le=3):i===z_?(i=F_(),Le=4):Le=i===Hg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,ve===null&&(an=1,ku(e,Ai(i,e.current)))}function E0(){var e=I.H;return I.H=Bu,e===null?Bu:e}function T0(){var e=I.A;return I.A=LM,e}function kh(){an=4,nr||(Me&4194048)!==Me&&Di.current!==null||(Vs=!0),(ir&134217727)===0&&(qr&134217727)===0||ke===null||sr(ke,Me,Ui,!1)}function Xh(e,i,r){var u=Ue;Ue|=2;var h=E0(),m=T0();(ke!==e||Me!==i)&&(Ku=null,qs(e,i)),i=!1;var T=an;t:do try{if(Le!==0&&ve!==null){var w=ve,G=di;switch(Le){case 8:Vh(),T=6;break t;case 3:case 2:case 9:case 6:Di.current===null&&(i=!0);var tt=Le;if(Le=0,di=null,Ys(e,w,G,tt),r&&Vs){T=0;break t}break;default:tt=Le,Le=0,di=null,Ys(e,w,G,tt)}}PM(),T=an;break}catch(ht){M0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,xa=Hr=null,Ue=u,I.H=h,I.A=m,ve===null&&(ke=null,Me=0,xu()),T}function PM(){for(;ve!==null;)b0(ve)}function zM(e,i){var r=Ue;Ue|=2;var u=E0(),h=T0();ke!==e||Me!==i?(Ku=null,Zu=Pt()+500,qs(e,i)):Vs=Ct(e,i);t:do try{if(Le!==0&&ve!==null){i=ve;var m=di;e:switch(Le){case 1:Le=0,di=null,Ys(e,i,m,1);break;case 2:case 9:if(I_(m)){Le=0,di=null,A0(i);break}i=function(){Le!==2&&Le!==9||ke!==e||(Le=7),ia(e)},m.then(i,i);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:I_(m)?(Le=0,di=null,A0(i)):(Le=0,di=null,Ys(e,i,m,7));break;case 5:var T=null;switch(ve.tag){case 26:T=ve.memoizedState;case 5:case 27:var w=ve;if(!T||ov(T)){Le=0,di=null;var G=w.sibling;if(G!==null)ve=G;else{var tt=w.return;tt!==null?(ve=tt,Ju(tt)):ve=null}break e}}Le=0,di=null,Ys(e,i,m,5);break;case 6:Le=0,di=null,Ys(e,i,m,6);break;case 8:Vh(),an=6;break t;default:throw Error(a(462))}}IM();break}catch(ht){M0(e,ht)}while(!0);return xa=Hr=null,I.H=u,I.A=h,Ue=r,ve!==null?0:(ke=null,Me=0,xu(),an)}function IM(){for(;ve!==null&&!te();)b0(ve)}function b0(e){var i=Jg(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,i===null?Ju(e):ve=i}function A0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=qg(r,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=qg(r,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:rh(i);default:t0(r,i),i=ve=R_(i,Ra),i=Jg(r,i,Ra)}e.memoizedProps=e.pendingProps,i===null?Ju(e):ve=i}function Ys(e,i,r,u){xa=Hr=null,rh(i),Bs=null,ll=0;var h=i.return;try{if(AM(e,h,i,r,Me)){an=1,ku(e,Ai(r,e.current)),ve=null;return}}catch(m){if(h!==null)throw ve=h,m;an=1,ku(e,Ai(r,e.current)),ve=null;return}i.flags&32768?(Ce||u===1?e=!0:Vs||(Me&536870912)!==0?e=!1:(nr=e=!0,(u===2||u===9||u===3||u===6)&&(u=Di.current,u!==null&&u.tag===13&&(u.flags|=16384))),R0(i,e)):Ju(i)}function Ju(e){var i=e;do{if((i.flags&32768)!==0){R0(i,nr);return}e=i.return;var r=wM(i.alternate,i,Ra);if(r!==null){ve=r;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);an===0&&(an=5)}function R0(e,i){do{var r=CM(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);an=6,ve=null}function w0(e,i,r,u,h,m,T,w,G){e.cancelPendingCommit=null;do $u();while(Ln!==0);if((Ue&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Of,Mt(e,r,m,T,w,G),e===ke&&(ve=ke=null,Me=0),Xs=i,rr=e,Ws=r,Fh=m,Hh=h,v0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,GM(Ze,function(){return N0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,h=Y.p,Y.p=2,T=Ue,Ue|=4;try{DM(e,i,r)}finally{Ue=T,Y.p=h,I.T=u}}Ln=1,C0(),D0(),U0()}}function C0(){if(Ln===1){Ln=0;var e=rr,i=Xs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var u=Y.p;Y.p=2;var h=Ue;Ue|=4;try{f0(i,e);var m=nd,T=g_(e.containerInfo),w=m.focusedElem,G=m.selectionRange;if(T!==w&&w&&w.ownerDocument&&__(w.ownerDocument.documentElement,w)){if(G!==null&&Cf(w)){var tt=G.start,ht=G.end;if(ht===void 0&&(ht=tt),"selectionStart"in w)w.selectionStart=tt,w.selectionEnd=Math.min(ht,w.value.length);else{var vt=w.ownerDocument||document,at=vt&&vt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ae=w.textContent.length,ee=Math.min(G.start,ae),ze=G.end===void 0?ee:Math.min(G.end,ae);!st.extend&&ee>ze&&(T=ze,ze=ee,ee=T);var Z=m_(w,ee),k=m_(w,ze);if(Z&&k&&(st.rangeCount!==1||st.anchorNode!==Z.node||st.anchorOffset!==Z.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var $=vt.createRange();$.setStart(Z.node,Z.offset),st.removeAllRanges(),ee>ze?(st.addRange($),st.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),st.addRange($))}}}}for(vt=[],st=w;st=st.parentNode;)st.nodeType===1&&vt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<vt.length;w++){var dt=vt[w];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}fc=!!ed,nd=ed=null}finally{Ue=h,Y.p=u,I.T=r}}e.current=i,Ln=2}}function D0(){if(Ln===2){Ln=0;var e=rr,i=Xs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var u=Y.p;Y.p=2;var h=Ue;Ue|=4;try{o0(e,i.alternate,i)}finally{Ue=h,Y.p=u,I.T=r}}Ln=3}}function U0(){if(Ln===4||Ln===3){Ln=0,It();var e=rr,i=Xs,r=Ws,u=v0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,Xs=rr=null,L0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(ar=null),De(r),i=i.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,h=Y.p,Y.p=2,I.T=null;try{for(var m=e.onRecoverableError,T=0;T<u.length;T++){var w=u[T];m(w.value,{componentStack:w.stack})}}finally{I.T=i,Y.p=h}}(Ws&3)!==0&&$u(),ia(e),h=e.pendingLanes,(r&4194090)!==0&&(h&42)!==0?e===Gh?gl++:(gl=0,Gh=e):gl=0,vl(0)}}function L0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Qo(i)))}function $u(e){return C0(),D0(),U0(),N0()}function N0(){if(Ln!==5)return!1;var e=rr,i=Fh;Fh=0;var r=De(Ws),u=I.T,h=Y.p;try{Y.p=32>r?32:r,I.T=null,r=Hh,Hh=null;var m=rr,T=Ws;if(Ln=0,Xs=rr=null,Ws=0,(Ue&6)!==0)throw Error(a(331));var w=Ue;if(Ue|=4,_0(m.current),d0(m,m.current,T,r),Ue=w,vl(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ft,m)}catch{}return!0}finally{Y.p=h,I.T=u,L0(e,i)}}function O0(e,i,r){i=Ai(r,i),i=xh(e.stateNode,i,2),e=Za(e,i,2),e!==null&&(Bt(e,2),ia(e))}function Fe(e,i,r){if(e.tag===3)O0(e,e,r);else for(;i!==null;){if(i.tag===3){O0(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){e=Ai(r,e),r=Bg(2),u=Za(i,r,2),u!==null&&(Fg(r,u,i,e),Bt(u,2),ia(u));break}}i=i.return}}function Wh(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new NM;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(Ph=!0,h.add(r),e=BM.bind(null,e,i,r),i.then(e,e))}function BM(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(Me&r)===r&&(an===4||an===3&&(Me&62914560)===Me&&300>Pt()-Bh?(Ue&2)===0&&qs(e,0):zh|=r,ks===Me&&(ks=0)),ia(e)}function P0(e,i){i===0&&(i=bt()),e=ws(e,i),e!==null&&(Bt(e,i),ia(e))}function FM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),P0(e,r)}function HM(e,i){var r=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),P0(e,r)}function GM(e,i){return H(e,i)}var tc=null,js=null,qh=!1,ec=!1,Yh=!1,Yr=0;function ia(e){e!==js&&e.next===null&&(js===null?tc=js=e:js=js.next=e),ec=!0,qh||(qh=!0,kM())}function vl(e,i){if(!Yh&&ec){Yh=!0;do for(var r=!1,u=tc;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var T=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=h&~(T&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,F0(u,m))}else m=Me,m=Xt(u,u===ke?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ct(u,m)||(r=!0,F0(u,m));u=u.next}while(r);Yh=!1}}function VM(){z0()}function z0(){ec=qh=!1;var e=0;Yr!==0&&(QM()&&(e=Yr),Yr=0);for(var i=Pt(),r=null,u=tc;u!==null;){var h=u.next,m=I0(u,i);m===0?(u.next=null,r===null?tc=h:r.next=h,h===null&&(js=r)):(r=u,(e!==0||(m&3)!==0)&&(ec=!0)),u=h}vl(e)}function I0(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-zt(m),w=1<<T,G=h[T];G===-1?((w&r)===0||(w&u)!==0)&&(h[T]=le(w,i)):G<=i&&(e.expiredLanes|=w),m&=~w}if(i=ke,r=Me,r=Xt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,r===0||e===i&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&se(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ct(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&se(u),De(r)){case 2:case 8:r=oe;break;case 32:r=Ze;break;case 268435456:r=B;break;default:r=Ze}return u=B0.bind(null,e),r=H(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&se(u),e.callbackPriority=2,e.callbackNode=null,2}function B0(e,i){if(Ln!==0&&Ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if($u()&&e.callbackNode!==r)return null;var u=Me;return u=Xt(e,e===ke?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(y0(e,u,i),I0(e,Pt()),e.callbackNode!=null&&e.callbackNode===r?B0.bind(null,e):null)}function F0(e,i){if($u())return null;y0(e,i,!0)}function kM(){$M(function(){(Ue&6)!==0?H(kt,VM):z0()})}function jh(){return Yr===0&&(Yr=q()),Yr}function H0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hu(""+e)}function G0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function XM(e,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var m=H0((h[tn]||null).action),T=u.submitter;T&&(i=(i=T[tn]||null)?H0(i.formAction):T.getAttribute("formAction"),i!==null&&(m=i,T=null));var w=new _u("action","action",null,u,h);e.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Yr!==0){var G=T?G0(h,T):new FormData(h);ph(r,{pending:!0,data:G,method:h.method,action:m},null,G)}}else typeof m=="function"&&(w.preventDefault(),G=T?G0(h,T):new FormData(h),ph(r,{pending:!0,data:G,method:h.method,action:m},m,G))},currentTarget:h}]})}}for(var Zh=0;Zh<Nf.length;Zh++){var Kh=Nf[Zh],WM=Kh.toLowerCase(),qM=Kh[0].toUpperCase()+Kh.slice(1);Vi(WM,"on"+qM)}Vi(y_,"onAnimationEnd"),Vi(S_,"onAnimationIteration"),Vi(M_,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(uM,"onTransitionRun"),Vi(cM,"onTransitionStart"),Vi(fM,"onTransitionCancel"),Vi(E_,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),D("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),D("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),D("onBeforeInput",["compositionend","keypress","textInput","paste"]),D("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),D("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function V0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var w=u[T],G=w.instance,tt=w.currentTarget;if(w=w.listener,G!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=tt;try{m(h)}catch(ht){Vu(ht)}h.currentTarget=null,m=G}else for(T=0;T<u.length;T++){if(w=u[T],G=w.instance,tt=w.currentTarget,w=w.listener,G!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=tt;try{m(h)}catch(ht){Vu(ht)}h.currentTarget=null,m=G}}}}function xe(e,i){var r=i[vs];r===void 0&&(r=i[vs]=new Set);var u=e+"__bubble";r.has(u)||(k0(i,e,2,!1),r.add(u))}function Qh(e,i,r){var u=0;i&&(u|=4),k0(r,e,u,i)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Jh(e){if(!e[nc]){e[nc]=!0,cu.forEach(function(r){r!=="selectionchange"&&(YM.has(r)||Qh(r,!1,e),Qh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[nc]||(i[nc]=!0,Qh("selectionchange",!1,i))}}function k0(e,i,r,u){switch(dv(i)){case 2:var h=yE;break;case 8:h=SE;break;default:h=hd}r=h.bind(null,i,r,e),h=void 0,!yf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function $h(e,i,r,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var w=u.stateNode.containerInfo;if(w===h)break;if(T===4)for(T=u.return;T!==null;){var G=T.tag;if((G===3||G===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;w!==null;){if(T=pa(w),T===null)return;if(G=T.tag,G===5||G===6||G===26||G===27){u=m=T;continue t}w=w.parentNode}}u=u.return}Km(function(){var tt=m,ht=vf(r),vt=[];t:{var at=T_.get(e);if(at!==void 0){var st=_u,ae=e;switch(e){case"keypress":if(pu(r)===0)break t;case"keydown":case"keyup":st=GS;break;case"focusin":ae="focus",st=Tf;break;case"focusout":ae="blur",st=Tf;break;case"beforeblur":case"afterblur":st=Tf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=XS;break;case y_:case S_:case M_:st=LS;break;case E_:st=qS;break;case"scroll":case"scrollend":st=RS;break;case"wheel":st=jS;break;case"copy":case"cut":case"paste":st=OS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=e_;break;case"toggle":case"beforetoggle":st=KS}var ee=(i&4)!==0,ze=!ee&&(e==="scroll"||e==="scrollend"),Z=ee?at!==null?at+"Capture":null:at;ee=[];for(var k=tt,$;k!==null;){var dt=k;if($=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||$===null||Z===null||(dt=Bo(k,Z),dt!=null&&ee.push(yl(k,dt,$))),ze)break;k=k.return}0<ee.length&&(at=new st(at,ae,null,r,ht),vt.push({event:at,listeners:ee}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&r!==gf&&(ae=r.relatedTarget||r.fromElement)&&(pa(ae)||ae[Qi]))break t;if((st||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ae=r.relatedTarget||r.toElement,st=tt,ae=ae?pa(ae):null,ae!==null&&(ze=l(ae),ee=ae.tag,ae!==ze||ee!==5&&ee!==27&&ee!==6)&&(ae=null)):(st=null,ae=tt),st!==ae)){if(ee=$m,dt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ee=e_,dt="onPointerLeave",Z="onPointerEnter",k="pointer"),ze=st==null?at:Ur(st),$=ae==null?at:Ur(ae),at=new ee(dt,k+"leave",st,r,ht),at.target=ze,at.relatedTarget=$,dt=null,pa(ht)===tt&&(ee=new ee(Z,k+"enter",ae,r,ht),ee.target=$,ee.relatedTarget=ze,dt=ee),ze=dt,st&&ae)e:{for(ee=st,Z=ae,k=0,$=ee;$;$=Zs($))k++;for($=0,dt=Z;dt;dt=Zs(dt))$++;for(;0<k-$;)ee=Zs(ee),k--;for(;0<$-k;)Z=Zs(Z),$--;for(;k--;){if(ee===Z||Z!==null&&ee===Z.alternate)break e;ee=Zs(ee),Z=Zs(Z)}ee=null}else ee=null;st!==null&&X0(vt,at,st,ee,!1),ae!==null&&ze!==null&&X0(vt,ze,ae,ee,!0)}}t:{if(at=tt?Ur(tt):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Ht=u_;else if(o_(at))if(c_)Ht=sM;else{Ht=aM;var _e=iM}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&_f(tt.elementType)&&(Ht=u_):Ht=rM;if(Ht&&(Ht=Ht(e,tt))){l_(vt,Ht,r,ht);break t}_e&&_e(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&In(at,"number",at.value)}switch(_e=tt?Ur(tt):window,e){case"focusin":(o_(_e)||_e.contentEditable==="true")&&(bs=_e,Df=tt,qo=null);break;case"focusout":qo=Df=bs=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,v_(vt,r,ht);break;case"selectionchange":if(lM)break;case"keydown":case"keyup":v_(vt,r,ht)}var Zt;if(Af)t:{switch(e){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else Ts?r_(e,r)&&(ie="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ie="onCompositionStart");ie&&(n_&&r.locale!=="ko"&&(Ts||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Ts&&(Zt=Qm()):(Wa=ht,Sf="value"in Wa?Wa.value:Wa.textContent,Ts=!0)),_e=ic(tt,ie),0<_e.length&&(ie=new t_(ie,e,null,r,ht),vt.push({event:ie,listeners:_e}),Zt?ie.data=Zt:(Zt=s_(r),Zt!==null&&(ie.data=Zt)))),(Zt=JS?$S(e,r):tM(e,r))&&(ie=ic(tt,"onBeforeInput"),0<ie.length&&(_e=new t_("onBeforeInput","beforeinput",null,r,ht),vt.push({event:_e,listeners:ie}),_e.data=Zt)),XM(vt,e,tt,r,ht)}V0(vt,i)})}function yl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function ic(e,i){for(var r=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Bo(e,r),h!=null&&u.unshift(yl(e,h,m)),h=Bo(e,i),h!=null&&u.push(yl(e,h,m))),e.tag===3)return u;e=e.return}return[]}function Zs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X0(e,i,r,u,h){for(var m=i._reactName,T=[];r!==null&&r!==u;){var w=r,G=w.alternate,tt=w.stateNode;if(w=w.tag,G!==null&&G===u)break;w!==5&&w!==26&&w!==27||tt===null||(G=tt,h?(tt=Bo(r,m),tt!=null&&T.unshift(yl(r,tt,G))):h||(tt=Bo(r,m),tt!=null&&T.push(yl(r,tt,G)))),r=r.return}T.length!==0&&e.push({event:i,listeners:T})}var jM=/\r\n?/g,ZM=/\u0000|\uFFFD/g;function W0(e){return(typeof e=="string"?e:""+e).replace(jM,`
`).replace(ZM,"")}function q0(e,i){return i=W0(i),W0(e)===i}function ac(){}function Pe(e,i,r,u,h,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Qn(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Qn(e,""+u);break;case"className":Ft(e,"class",u);break;case"tabIndex":Ft(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,r,u);break;case"style":jm(e,u,m);break;case"data":if(i!=="object"){Ft(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=hu(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Pe(e,i,"name",h.name,h,null),Pe(e,i,"formEncType",h.formEncType,h,null),Pe(e,i,"formMethod",h.formMethod,h,null),Pe(e,i,"formTarget",h.formTarget,h,null)):(Pe(e,i,"encType",h.encType,h,null),Pe(e,i,"method",h.method,h,null),Pe(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=hu(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=ac);break;case"onScroll":u!=null&&xe("scroll",e);break;case"onScrollEnd":u!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=hu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Ut(e,"popover",u);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ut(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=bS.get(r)||r,Ut(e,r,u))}}function td(e,i,r,u,h,m){switch(r){case"style":jm(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?Qn(e,u):(typeof u=="number"||typeof u=="bigint")&&Qn(e,""+u);break;case"onScroll":u!=null&&xe("scroll",e);break;case"onScrollEnd":u!=null&&xe("scrollend",e);break;case"onClick":u!=null&&(e.onclick=ac);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fu.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[tn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,h);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):Ut(e,r,u)}}}function Nn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var T=r[m];if(T!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,m,T,r,null)}}h&&Pe(e,i,"srcSet",r.srcSet,r,null),u&&Pe(e,i,"src",r.src,r,null);return;case"input":xe("invalid",e);var w=m=T=h=null,G=null,tt=null;for(u in r)if(r.hasOwnProperty(u)){var ht=r[u];if(ht!=null)switch(u){case"name":h=ht;break;case"type":T=ht;break;case"checked":G=ht;break;case"defaultChecked":tt=ht;break;case"value":m=ht;break;case"defaultValue":w=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Pe(e,i,u,ht,r,null)}}qn(e,m,w,G,tt,T,h,!1),ge(e);return;case"select":xe("invalid",e),u=T=m=null;for(h in r)if(r.hasOwnProperty(h)&&(w=r[h],w!=null))switch(h){case"value":m=w;break;case"defaultValue":T=w;break;case"multiple":u=w;default:Pe(e,i,h,w,r,null)}i=m,r=T,e.multiple=!!u,i!=null?en(e,!!u,i,!1):r!=null&&en(e,!!u,r,!0);return;case"textarea":xe("invalid",e),m=h=u=null;for(T in r)if(r.hasOwnProperty(T)&&(w=r[T],w!=null))switch(T){case"value":u=w;break;case"defaultValue":h=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Pe(e,i,T,w,r,null)}Ss(e,u,h,m),ge(e);return;case"option":for(G in r)if(r.hasOwnProperty(G)&&(u=r[G],u!=null))switch(G){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Pe(e,i,G,u,r,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(u=0;u<xl.length;u++)xe(xl[u],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(u=r[tt],u!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,tt,u,r,null)}return;default:if(_f(i)){for(ht in r)r.hasOwnProperty(ht)&&(u=r[ht],u!==void 0&&td(e,i,ht,u,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(u=r[w],u!=null&&Pe(e,i,w,u,r,null))}function KM(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,w=null,G=null,tt=null,ht=null;for(st in r){var vt=r[st];if(r.hasOwnProperty(st)&&vt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":G=vt;default:u.hasOwnProperty(st)||Pe(e,i,st,null,u,vt)}}for(var at in u){var st=u[at];if(vt=r[at],u.hasOwnProperty(at)&&(st!=null||vt!=null))switch(at){case"type":m=st;break;case"name":h=st;break;case"checked":tt=st;break;case"defaultChecked":ht=st;break;case"value":T=st;break;case"defaultValue":w=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:st!==vt&&Pe(e,i,at,st,u,vt)}}Be(e,T,w,G,tt,ht,m,h);return;case"select":st=T=w=at=null;for(m in r)if(G=r[m],r.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":st=G;default:u.hasOwnProperty(m)||Pe(e,i,m,null,u,G)}for(h in u)if(m=u[h],G=r[h],u.hasOwnProperty(h)&&(m!=null||G!=null))switch(h){case"value":at=m;break;case"defaultValue":w=m;break;case"multiple":T=m;default:m!==G&&Pe(e,i,h,m,u,G)}i=w,r=T,u=st,at!=null?en(e,!!r,at,!1):!!u!=!!r&&(i!=null?en(e,!!r,i,!0):en(e,!!r,r?[]:"",!1));return;case"textarea":st=at=null;for(w in r)if(h=r[w],r.hasOwnProperty(w)&&h!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Pe(e,i,w,null,u,h)}for(T in u)if(h=u[T],m=r[T],u.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":at=h;break;case"defaultValue":st=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Pe(e,i,T,h,u,m)}Dn(e,at,st);return;case"option":for(var ae in r)if(at=r[ae],r.hasOwnProperty(ae)&&at!=null&&!u.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Pe(e,i,ae,null,u,at)}for(G in u)if(at=u[G],st=r[G],u.hasOwnProperty(G)&&at!==st&&(at!=null||st!=null))switch(G){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(e,i,G,at,u,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in r)at=r[ee],r.hasOwnProperty(ee)&&at!=null&&!u.hasOwnProperty(ee)&&Pe(e,i,ee,null,u,at);for(tt in u)if(at=u[tt],st=r[tt],u.hasOwnProperty(tt)&&at!==st&&(at!=null||st!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Pe(e,i,tt,at,u,st)}return;default:if(_f(i)){for(var ze in r)at=r[ze],r.hasOwnProperty(ze)&&at!==void 0&&!u.hasOwnProperty(ze)&&td(e,i,ze,void 0,u,at);for(ht in u)at=u[ht],st=r[ht],!u.hasOwnProperty(ht)||at===st||at===void 0&&st===void 0||td(e,i,ht,at,u,st);return}}for(var Z in r)at=r[Z],r.hasOwnProperty(Z)&&at!=null&&!u.hasOwnProperty(Z)&&Pe(e,i,Z,null,u,at);for(vt in u)at=u[vt],st=r[vt],!u.hasOwnProperty(vt)||at===st||at==null&&st==null||Pe(e,i,vt,at,u,st)}var ed=null,nd=null;function rc(e){return e.nodeType===9?e:e.ownerDocument}function Y0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function id(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ad=null;function QM(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var Z0=typeof setTimeout=="function"?setTimeout:void 0,JM=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(e){return K0.resolve(null).then(e).catch(tE)}:Z0;function tE(e){setTimeout(function(){throw e})}function or(e){return e==="head"}function Q0(e,i){var r=i,u=0,h=0;do{var m=r.nextSibling;if(e.removeChild(r),m&&m.nodeType===8)if(r=m.data,r==="/$"){if(0<u&&8>u){r=u;var T=e.ownerDocument;if(r&1&&Sl(T.documentElement),r&2&&Sl(T.body),r&4)for(r=T.head,Sl(r),T=r.firstChild;T;){var w=T.nextSibling,G=T.nodeName;T[Ji]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&T.rel.toLowerCase()==="stylesheet"||r.removeChild(T),T=w}}if(h===0){e.removeChild(m),Cl(i);return}h--}else r==="$"||r==="$?"||r==="$!"?h++:u=r.charCodeAt(0)-48;else u=0;r=m}while(r);Cl(i)}function rd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":rd(r),ys(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function eE(e,i,r,u){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Ji])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Xi(e.nextSibling),e===null)break}return null}function nE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Xi(e.nextSibling),e===null))return null;return e}function sd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function iE(e,i){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Xi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var od=null;function J0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return e;i--}else r==="/$"&&i++}e=e.previousSibling}return null}function $0(e,i,r){switch(i=rc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Sl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ys(e)}var Li=new Map,tv=new Set;function sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=Y.d;Y.d={f:aE,r:rE,D:sE,C:oE,L:lE,m:uE,X:fE,S:cE,M:hE};function aE(){var e=wa.f(),i=Qu();return e||i}function rE(e){var i=ka(e);i!==null&&i.tag===5&&i.type==="form"?yg(i):wa.r(e)}var Ks=typeof document>"u"?null:document;function ev(e,i,r){var u=Ks;if(u&&typeof i=="string"&&i){var h=Tn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),tv.has(h)||(tv.add(h),e={rel:e,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Nn(i,"link",e),fn(i),u.head.appendChild(i)))}}function sE(e){wa.D(e),ev("dns-prefetch",e,null)}function oE(e,i){wa.C(e,i),ev("preconnect",e,i)}function lE(e,i,r){wa.L(e,i,r);var u=Ks;if(u&&e&&i){var h='link[rel="preload"][as="'+Tn(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Tn(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Tn(r.imageSizes)+'"]')):h+='[href="'+Tn(e)+'"]';var m=h;switch(i){case"style":m=Qs(e);break;case"script":m=Js(e)}Li.has(m)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Li.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Ml(m))||i==="script"&&u.querySelector(El(m))||(i=u.createElement("link"),Nn(i,"link",e),fn(i),u.head.appendChild(i)))}}function uE(e,i){wa.m(e,i);var r=Ks;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Tn(u)+'"][href="'+Tn(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Js(e)}if(!Li.has(m)&&(e=_({rel:"modulepreload",href:e},i),Li.set(m,e),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(El(m)))return}u=r.createElement("link"),Nn(u,"link",e),fn(u),r.head.appendChild(u)}}}function cE(e,i,r){wa.S(e,i,r);var u=Ks;if(u&&e){var h=Xa(u).hoistableStyles,m=Qs(e);i=i||"default";var T=h.get(m);if(!T){var w={loading:0,preload:null};if(T=u.querySelector(Ml(m)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Li.get(m))&&ld(e,r);var G=T=u.createElement("link");fn(G),Nn(G,"link",e),G._p=new Promise(function(tt,ht){G.onload=tt,G.onerror=ht}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,oc(T,i,u)}T={type:"stylesheet",instance:T,count:1,state:w},h.set(m,T)}}}function fE(e,i){wa.X(e,i);var r=Ks;if(r&&e){var u=Xa(r).hoistableScripts,h=Js(e),m=u.get(h);m||(m=r.querySelector(El(h)),m||(e=_({src:e,async:!0},i),(i=Li.get(h))&&ud(e,i),m=r.createElement("script"),fn(m),Nn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function hE(e,i){wa.M(e,i);var r=Ks;if(r&&e){var u=Xa(r).hoistableScripts,h=Js(e),m=u.get(h);m||(m=r.querySelector(El(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Li.get(h))&&ud(e,i),m=r.createElement("script"),fn(m),Nn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function nv(e,i,r,u){var h=(h=et.current)?sc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Qs(r.href),r=Xa(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Qs(r.href);var m=Xa(h).hoistableStyles,T=m.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=h.querySelector(Ml(e)))&&!m._p&&(T.instance=m,T.state.loading=5),Li.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Li.set(e,r),m||dE(h,e,r,T.state))),i&&u===null)throw Error(a(528,""));return T}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Js(r),r=Xa(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Qs(e){return'href="'+Tn(e)+'"'}function Ml(e){return'link[rel="stylesheet"]['+e+"]"}function iv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function dE(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Nn(i,"link",r),fn(i),e.head.appendChild(i))}function Js(e){return'[src="'+Tn(e)+'"]'}function El(e){return"script[async]"+e}function av(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+Tn(r.href)+'"]');if(u)return i.instance=u,fn(u),u;var h=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),fn(u),Nn(u,"style",h),oc(u,r.precedence,e),i.instance=u;case"stylesheet":h=Qs(r.href);var m=e.querySelector(Ml(h));if(m)return i.state.loading|=4,i.instance=m,fn(m),m;u=iv(r),(h=Li.get(h))&&ld(u,h),m=(e.ownerDocument||e).createElement("link"),fn(m);var T=m;return T._p=new Promise(function(w,G){T.onload=w,T.onerror=G}),Nn(m,"link",u),i.state.loading|=4,oc(m,r.precedence,e),i.instance=m;case"script":return m=Js(r.src),(h=e.querySelector(El(m)))?(i.instance=h,fn(h),h):(u=r,(h=Li.get(m))&&(u=_({},r),ud(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),fn(h),Nn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,oc(u,r.precedence,e));return i.instance}function oc(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,T=0;T<u.length;T++){var w=u[T];if(w.dataset.precedence===i)m=w;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function ld(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ud(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var lc=null;function rv(e,i,r){if(lc===null){var u=new Map,h=lc=new Map;h.set(r,u)}else h=lc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Ji]||m[vn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(i)||"";T=e+T;var w=u.get(T);w?w.push(m):u.set(T,[m])}}return u}function sv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function pE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function ov(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Tl=null;function mE(){}function _E(e,i,r){if(Tl===null)throw Error(a(475));var u=Tl;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Qs(r.href),m=e.querySelector(Ml(h));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=uc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=m,fn(m);return}m=e.ownerDocument||e,r=iv(r),(h=Li.get(h))&&ld(r,h),m=m.createElement("link"),fn(m);var T=m;T._p=new Promise(function(w,G){T.onload=w,T.onerror=G}),Nn(m,"link",r),i.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=uc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function gE(){if(Tl===null)throw Error(a(475));var e=Tl;return e.stylesheets&&e.count===0&&cd(e,e.stylesheets),0<e.count?function(i){var r=setTimeout(function(){if(e.stylesheets&&cd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)cd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function cd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,i.forEach(vE,e),cc=null,uc.call(e))}function vE(e,i){if(!(i.state.loading&4)){var r=cc.get(e);if(r)var u=r.get(null);else{r=new Map,cc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),u=T)}u&&r.set(null,u)}h=i.instance,T=h.getAttribute("data-precedence"),m=r.get(T)||u,m===u&&r.set(null,h),r.set(T,h),this.count++,u=uc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var bl={$$typeof:L,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function xE(e,i,r,u,h,m,T,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function lv(e,i,r,u,h,m,T,w,G,tt,ht,vt){return e=new xE(e,i,r,T,w,G,tt,vt),i=1,m===!0&&(i|=24),m=ci(3,null,null,i),e.current=m,m.stateNode=e,i=Wf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},Zf(m),e}function uv(e){return e?(e=Cs,e):Cs}function cv(e,i,r,u,h,m){h=uv(h),u.context===null?u.context=h:u.pendingContext=h,u=ja(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=Za(e,u,i),r!==null&&(mi(r,e,i),el(r,e,i))}function fv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function fd(e,i){fv(e,i),(e=e.alternate)&&fv(e,i)}function hv(e){if(e.tag===13){var i=ws(e,67108864);i!==null&&mi(i,e,67108864),fd(e,67108864)}}var fc=!0;function yE(e,i,r,u){var h=I.T;I.T=null;var m=Y.p;try{Y.p=2,hd(e,i,r,u)}finally{Y.p=m,I.T=h}}function SE(e,i,r,u){var h=I.T;I.T=null;var m=Y.p;try{Y.p=8,hd(e,i,r,u)}finally{Y.p=m,I.T=h}}function hd(e,i,r,u){if(fc){var h=dd(u);if(h===null)$h(e,i,u,hc,r),pv(e,u);else if(EE(h,e,i,r,u))u.stopPropagation();else if(pv(e,u),i&4&&-1<ME.indexOf(e)){for(;h!==null;){var m=ka(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Kt(m.pendingLanes);if(T!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;T;){var G=1<<31-zt(T);w.entanglements[1]|=G,T&=~G}ia(m),(Ue&6)===0&&(Zu=Pt()+500,vl(0))}}break;case 13:w=ws(m,2),w!==null&&mi(w,m,2),Qu(),fd(m,2)}if(m=dd(u),m===null&&$h(e,i,u,hc,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else $h(e,i,u,null,r)}}function dd(e){return e=vf(e),pd(e)}var hc=null;function pd(e){if(hc=null,e=pa(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return hc=e,null}function dv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case kt:return 2;case oe:return 8;case Ze:case Ke:return 32;case B:return 268435456;default:return 32}default:return 32}}var md=!1,lr=null,ur=null,cr=null,Al=new Map,Rl=new Map,fr=[],ME="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pv(e,i){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Al.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function wl(e,i,r,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&hv(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function EE(e,i,r,u,h){switch(i){case"focusin":return lr=wl(lr,e,i,r,u,h),!0;case"dragenter":return ur=wl(ur,e,i,r,u,h),!0;case"mouseover":return cr=wl(cr,e,i,r,u,h),!0;case"pointerover":var m=h.pointerId;return Al.set(m,wl(Al.get(m)||null,e,i,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Rl.set(m,wl(Rl.get(m)||null,e,i,r,u,h)),!0}return!1}function mv(e){var i=pa(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Hi(e.priority,function(){if(r.tag===13){var u=pi();u=re(u);var h=ws(r,u);h!==null&&mi(h,r,u),fd(r,u)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=dd(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);gf=u,r.target.dispatchEvent(u),gf=null}else return i=ka(r),i!==null&&hv(i),e.blockedOn=r,!1;i.shift()}return!0}function _v(e,i,r){dc(e)&&r.delete(i)}function TE(){md=!1,lr!==null&&dc(lr)&&(lr=null),ur!==null&&dc(ur)&&(ur=null),cr!==null&&dc(cr)&&(cr=null),Al.forEach(_v),Rl.forEach(_v)}function pc(e,i){e.blockedOn===i&&(e.blockedOn=null,md||(md=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,TE)))}var mc=null;function gv(e){mc!==e&&(mc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(pd(u||r)===null)continue;break}var m=ka(r);m!==null&&(e.splice(i,3),i-=3,ph(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function Cl(e){function i(G){return pc(G,e)}lr!==null&&pc(lr,e),ur!==null&&pc(ur,e),cr!==null&&pc(cr,e),Al.forEach(i),Rl.forEach(i);for(var r=0;r<fr.length;r++){var u=fr[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<fr.length&&(r=fr[0],r.blockedOn===null);)mv(r),r.blockedOn===null&&fr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],T=h[tn]||null;if(typeof m=="function")T||gv(r);else if(T){var w=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[tn]||null)w=T.formAction;else if(pd(h)!==null)continue}else w=T.action;typeof w=="function"?r[u+1]=w:(r.splice(u,3),u-=3),gv(r)}}}function _d(e){this._internalRoot=e}_c.prototype.render=_d.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=pi();cv(r,u,e,i,null,null)},_c.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;cv(e.current,2,null,e,null,null),Qu(),i[Qi]=null}};function _c(e){this._internalRoot=e}_c.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ee();e={blockedOn:null,target:e,priority:i};for(var r=0;r<fr.length&&i!==0&&i<fr[r].priority;r++);fr.splice(r,0,e),r===0&&mv(e)}};var vv=t.version;if(vv!=="19.1.1")throw Error(a(527,vv,"19.1.1"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var bE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{ft=gc.inject(bE),gt=gc}catch{}}return Ul.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,u="",h=Og,m=Pg,T=zg,w=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=lv(e,1,!1,null,null,r,u,h,m,T,w,null),e[Qi]=i.current,Jh(e),new _d(i)},Ul.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var u=!1,h="",m=Og,T=Pg,w=zg,G=null,tt=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(G=r.unstable_transitionCallbacks),r.formState!==void 0&&(tt=r.formState)),i=lv(e,1,!0,i,r??null,u,h,m,T,w,G,tt),i.context=uv(null),r=i.current,u=pi(),u=re(u),h=ja(u),h.callback=null,Za(r,h,u),r=u,i.current.lanes=r,Bt(i,r),ia(i),e[Qi]=i.current,Jh(e),new _c(i)},Ul.version="19.1.1",Ul}var wv;function PE(){if(wv)return xd.exports;wv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),xd.exports=OE(),xd.exports}var zE=PE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mm="180",IE=0,Cv=1,BE=2,qx=1,FE=2,Oa=3,Rr=0,Kn=1,Ia=2,Er=0,vo=1,Qc=2,Dv=3,Uv=4,HE=5,rs=100,GE=101,VE=102,kE=103,XE=104,WE=200,qE=201,YE=202,jE=203,up=204,cp=205,ZE=206,KE=207,QE=208,JE=209,$E=210,tT=211,eT=212,nT=213,iT=214,fp=0,hp=1,dp=2,Eo=3,pp=4,mp=5,_p=6,gp=7,Yx=0,aT=1,rT=2,Tr=0,sT=1,oT=2,lT=3,uT=4,cT=5,fT=6,hT=7,jx=300,To=301,bo=302,vp=303,xp=304,uf=306,yp=1e3,os=1001,Sp=1002,Ki=1003,dT=1004,vc=1005,la=1006,Ed=1007,ls=1008,fa=1009,Zx=1010,Kx=1011,ql=1012,_m=1013,ps=1014,Ba=1015,au=1016,gm=1017,vm=1018,Yl=1020,Qx=35902,Jx=35899,$x=1021,ty=1022,Zi=1023,jl=1026,Zl=1027,ey=1028,xm=1029,ny=1030,ym=1031,Sm=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,Mp=35840,Ep=35841,Tp=35842,bp=35843,Ap=36196,Rp=37492,wp=37496,Cp=37808,Dp=37809,Up=37810,Lp=37811,Np=37812,Op=37813,Pp=37814,zp=37815,Ip=37816,Bp=37817,Fp=37818,Hp=37819,Gp=37820,Vp=37821,kp=36492,Xp=36494,Wp=36495,qp=36283,Yp=36284,jp=36285,Zp=36286,pT=3200,mT=3201,iy=0,_T=1,xr="",Pi="srgb",Ao="srgb-linear",Jc="linear",Ie="srgb",$s=7680,Lv=519,gT=512,vT=513,xT=514,ay=515,yT=516,ST=517,MT=518,ET=519,Nv=35044,Ov="300 es",ua=2e3,$c=2001;class Oo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,Kp=180/Math.PI;function ru(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[n&63|128]+Hn[n>>8&255]+"-"+Hn[n>>16&255]+Hn[n>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function TT(o,t){return(o%t+t)%t}function bd(o,t,n){return(1-n)*o+n*t}function Ll(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ni(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,n=0){be.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class su{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3];const v=l[c+0],y=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=M;return}if(g!==M||p!==v||d!==y||_!==E){let S=1-f;const x=p*v+d*y+_*E+g*M,N=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const C=Math.sqrt(L),O=Math.atan2(C,x*N);S=Math.sin(S*O)/C,f=Math.sin(f*O)/C}const A=f*N;if(p=p*S+v*A,d=d*S+y*A,_=_*S+E*A,g=g*S+M*A,S===1-f){const C=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=C,d*=C,_*=C,g*=C}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=l[c],v=l[c+1],y=l[c+2],E=l[c+3];return t[n]=f*E+_*g+p*y-d*v,t[n+1]=p*E+_*v+d*g-f*y,t[n+2]=d*E+_*y+f*v-p*g,t[n+3]=_*E-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(l/2),v=p(a/2),y=p(s/2),E=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*y*E,this._y=d*y*g-v*_*E,this._z=d*_*E+v*y*g,this._w=d*_*g-v*y*E;break;case"YXZ":this._x=v*_*g+d*y*E,this._y=d*y*g-v*_*E,this._z=d*_*E-v*y*g,this._w=d*_*g+v*y*E;break;case"ZXY":this._x=v*_*g-d*y*E,this._y=d*y*g+v*_*E,this._z=d*_*E+v*y*g,this._w=d*_*g-v*y*E;break;case"ZYX":this._x=v*_*g-d*y*E,this._y=d*y*g+v*_*E,this._z=d*_*E-v*y*g,this._w=d*_*g+v*y*E;break;case"YZX":this._x=v*_*g+d*y*E,this._y=d*y*g+v*_*E,this._z=d*_*E-v*y*g,this._w=d*_*g-v*y*E;break;case"XZY":this._x=v*_*g-d*y*E,this._y=d*y*g-v*_*E,this._z=d*_*E+v*y*g,this._w=d*_*g+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(l-d)*y,this._z=(c-s)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(l+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(l-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(c-s)/y,this._x=(l+d)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-l*p,this._y=s*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*a+n*this._x,this._y=y*s+n*this._y,this._z=y*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,f),g=Math.sin((1-n)*_)/d,v=Math.sin(n*_)/d;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,n=0,a=0){rt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Pv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Pv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-l*s),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=s+p*g+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Ad.copy(this).projectOnVector(t),this.sub(Ad)}reflect(t){return this.sub(Ad.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new rt,Pv=new su;class fe{constructor(t,n,a,s,l,c,f,p,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d)}set(t,n,a,s,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],y=a[5],E=a[8],M=s[0],S=s[3],x=s[6],N=s[1],L=s[4],A=s[7],C=s[2],O=s[5],P=s[8];return l[0]=c*M+f*N+p*C,l[3]=c*S+f*L+p*O,l[6]=c*x+f*A+p*P,l[1]=d*M+_*N+g*C,l[4]=d*S+_*L+g*O,l[7]=d*x+_*A+g*P,l[2]=v*M+y*N+E*C,l[5]=v*S+y*L+E*O,l[8]=v*x+y*A+E*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+s*l*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*l,y=d*l-c*p,E=n*g+a*v+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(s*d-_*a)*M,t[2]=(f*a-s*c)*M,t[3]=v*M,t[4]=(_*n-s*p)*M,t[5]=(s*l-f*n)*M,t[6]=y*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Rd.makeScale(t,n)),this}rotate(t){return this.premultiply(Rd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Rd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new fe;function ry(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function tf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function bT(){const o=tf("canvas");return o.style.display="block",o}const zv={};function Kl(o){o in zv||(zv[o]=!0,console.warn(o))}function AT(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const Iv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RT(){const o={enabled:!0,workingColorSpace:Ao,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ie&&(s.r=Fa(s.r),s.g=Fa(s.g),s.b=Fa(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ie&&(s.r=xo(s.r),s.g=xo(s.g),s.b=xo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xr?Jc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Kl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Kl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Ao]:{primaries:t,whitePoint:a,transfer:Jc,toXYZ:Iv,fromXYZ:Bv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:Iv,fromXYZ:Bv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),o}const we=RT();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function xo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let to;class wT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{to===void 0&&(to=tf("canvas")),to.width=t.width,to.height=t.height;const s=to.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=to}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=tf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Fa(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Fa(n[a]/255)*255):n[a]=Fa(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let CT=0;class Mm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=ru(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(wd(s[c].image)):l.push(wd(s[c]))}else l=wd(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function wd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DT=0;const Cd=new rt;class ii extends Oo{constructor(t=ii.DEFAULT_IMAGE,n=ii.DEFAULT_MAPPING,a=os,s=os,l=la,c=ls,f=Zi,p=fa,d=ii.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=ru(),this.name="",this.source=new Mm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yp:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case Sp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yp:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case Sp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=jx;ii.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,n=0,a=0,s=1){rn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],y=p[5],E=p[9],M=p[2],S=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+S)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,A=(y+1)/2,C=(x+1)/2,O=(_+v)/4,P=(g+M)/4,F=(E+S)/4;return L>A&&L>C?L<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(L),s=O/a,l=P/a):A>C?A<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),a=O/s,l=F/s):C<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(C),a=P/l,s=F/l),this.set(a,s,l,n),this}let N=Math.sqrt((S-E)*(S-E)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(g-M)/N,this.z=(v-_)/N,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UT extends Oo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:la,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new rn(0,0,t,n),this.scissorTest=!1,this.viewport=new rn(0,0,t,n);const s={width:t,height:n,depth:a.depth},l=new ii(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:la,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Mm(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends UT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class sy extends ii{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LT extends ii{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Ki,this.minFilter=Ki,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Wi):Wi.fromBufferAttribute(l,c),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),xc.copy(a.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nl),yc.subVectors(this.max,Nl),eo.subVectors(t.a,Nl),no.subVectors(t.b,Nl),io.subVectors(t.c,Nl),dr.subVectors(no,eo),pr.subVectors(io,no),jr.subVectors(eo,io);let n=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-jr.z,jr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,jr.z,0,-jr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-jr.y,jr.x,0];return!Dd(n,eo,no,io,yc)||(n=[1,0,0,0,1,0,0,0,1],!Dd(n,eo,no,io,yc))?!1:(Sc.crossVectors(dr,pr),n=[Sc.x,Sc.y,Sc.z],Dd(n,eo,no,io,yc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Wi=new rt,xc=new ou,eo=new rt,no=new rt,io=new rt,dr=new rt,pr=new rt,jr=new rt,Nl=new rt,yc=new rt,Sc=new rt,Zr=new rt;function Dd(o,t,n,a,s){for(let l=0,c=o.length-3;l<=c;l+=3){Zr.fromArray(o,l);const f=s.x*Math.abs(Zr.x)+s.y*Math.abs(Zr.y)+s.z*Math.abs(Zr.z),p=t.dot(Zr),d=n.dot(Zr),_=a.dot(Zr);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const NT=new ou,Ol=new rt,Ud=new rt;class cf{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):NT.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ol.subVectors(t,this.center);const n=Ol.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Ol,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ol.copy(t.center).add(Ud)),this.expandByPoint(Ol.copy(t.center).sub(Ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Da=new rt,Ld=new rt,Mc=new rt,mr=new rt,Nd=new rt,Ec=new rt,Od=new rt;class oy{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Ld.copy(t).add(n).multiplyScalar(.5),Mc.copy(n).sub(t).normalize(),mr.copy(this.origin).sub(Ld);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Mc),f=mr.dot(this.direction),p=-mr.dot(Mc),d=mr.lengthSq(),_=Math.abs(1-c*c);let g,v,y,E;if(_>0)if(g=c*p-f,v=c*f-p,E=l*_,g>=0)if(v>=-E)if(v<=E){const M=1/_;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-E?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d):v<=E?(g=0,v=Math.min(Math.max(-l,-p),l),y=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),y=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Ld).addScaledVector(Mc,v),y}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const a=Da.dot(this.direction),s=Da.dot(Da)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,a,s,l){Nd.subVectors(n,t),Ec.subVectors(a,t),Od.crossVectors(Nd,Ec);let c=this.direction.dot(Od),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;mr.subVectors(this.origin,t);const p=f*this.direction.dot(Ec.crossVectors(mr,Ec));if(p<0)return null;const d=f*this.direction.dot(Nd.cross(mr));if(d<0||p+d>c)return null;const _=-f*mr.dot(Od);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(t,n,a,s,l,c,f,p,d,_,g,v,y,E,M,S){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d,_,g,v,y,E,M,S)}set(t,n,a,s,l,c,f,p,d,_,g,v,y,E,M,S){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=E,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/ao.setFromMatrixColumn(t,0).length(),l=1/ao.setFromMatrixColumn(t,1).length(),c=1/ao.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,y=c*g,E=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=y+E*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=E+y*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,E=d*_,M=d*g;n[0]=v+M*f,n[4]=E*f-y,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=y*f-E,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,E=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=E+y*f,n[1]=y+E*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,y=c*g,E=f*_,M=f*g;n[0]=p*_,n[4]=E*d-y,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=y*d-E,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,y=c*d,E=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=E*g+y,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=y*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,y=c*d,E=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=y*g-E,n[2]=E*g-y,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(OT,t,PT)}lookAt(t,n,a){const s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),_r.crossVectors(a,_i),_r.lengthSq()===0&&(Math.abs(a.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),_r.crossVectors(a,_i)),_r.normalize(),Tc.crossVectors(_i,_r),s[0]=_r.x,s[4]=Tc.x,s[8]=_i.x,s[1]=_r.y,s[5]=Tc.y,s[9]=_i.y,s[2]=_r.z,s[6]=Tc.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],y=a[13],E=a[2],M=a[6],S=a[10],x=a[14],N=a[3],L=a[7],A=a[11],C=a[15],O=s[0],P=s[4],F=s[8],b=s[12],U=s[1],V=s[5],X=s[9],Q=s[13],ot=s[2],nt=s[6],I=s[10],Y=s[14],W=s[3],_t=s[7],z=s[11],J=s[15];return l[0]=c*O+f*U+p*ot+d*W,l[4]=c*P+f*V+p*nt+d*_t,l[8]=c*F+f*X+p*I+d*z,l[12]=c*b+f*Q+p*Y+d*J,l[1]=_*O+g*U+v*ot+y*W,l[5]=_*P+g*V+v*nt+y*_t,l[9]=_*F+g*X+v*I+y*z,l[13]=_*b+g*Q+v*Y+y*J,l[2]=E*O+M*U+S*ot+x*W,l[6]=E*P+M*V+S*nt+x*_t,l[10]=E*F+M*X+S*I+x*z,l[14]=E*b+M*Q+S*Y+x*J,l[3]=N*O+L*U+A*ot+C*W,l[7]=N*P+L*V+A*nt+C*_t,l[11]=N*F+L*X+A*I+C*z,l[15]=N*b+L*Q+A*Y+C*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],y=t[14],E=t[3],M=t[7],S=t[11],x=t[15];return E*(+l*p*g-s*d*g-l*f*v+a*d*v+s*f*y-a*p*y)+M*(+n*p*y-n*d*v+l*c*v-s*c*y+s*d*_-l*p*_)+S*(+n*d*g-n*f*y-l*c*g+a*c*y+l*f*_-a*d*_)+x*(-s*f*_-n*p*g+n*f*v+s*c*g-a*c*v+a*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],y=t[11],E=t[12],M=t[13],S=t[14],x=t[15],N=g*S*d-M*v*d+M*p*y-f*S*y-g*p*x+f*v*x,L=E*v*d-_*S*d-E*p*y+c*S*y+_*p*x-c*v*x,A=_*M*d-E*g*d+E*f*y-c*M*y-_*f*x+c*g*x,C=E*g*p-_*M*p-E*f*v+c*M*v+_*f*S-c*g*S,O=n*N+a*L+s*A+l*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return t[0]=N*P,t[1]=(M*v*l-g*S*l-M*s*y+a*S*y+g*s*x-a*v*x)*P,t[2]=(f*S*l-M*p*l+M*s*d-a*S*d-f*s*x+a*p*x)*P,t[3]=(g*p*l-f*v*l-g*s*d+a*v*d+f*s*y-a*p*y)*P,t[4]=L*P,t[5]=(_*S*l-E*v*l+E*s*y-n*S*y-_*s*x+n*v*x)*P,t[6]=(E*p*l-c*S*l-E*s*d+n*S*d+c*s*x-n*p*x)*P,t[7]=(c*v*l-_*p*l+_*s*d-n*v*d-c*s*y+n*p*y)*P,t[8]=A*P,t[9]=(E*g*l-_*M*l-E*a*y+n*M*y+_*a*x-n*g*x)*P,t[10]=(c*M*l-E*f*l+E*a*d-n*M*d-c*a*x+n*f*x)*P,t[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*y-n*f*y)*P,t[12]=C*P,t[13]=(_*M*s-E*g*s+E*a*v-n*M*v-_*a*S+n*g*S)*P,t[14]=(E*f*s-c*M*s-E*a*p+n*M*p+c*a*S-n*f*S)*P,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*P,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,y=l*_,E=l*g,M=c*_,S=c*g,x=f*g,N=p*d,L=p*_,A=p*g,C=a.x,O=a.y,P=a.z;return s[0]=(1-(M+x))*C,s[1]=(y+A)*C,s[2]=(E-L)*C,s[3]=0,s[4]=(y-A)*O,s[5]=(1-(v+x))*O,s[6]=(S+N)*O,s[7]=0,s[8]=(E+L)*P,s[9]=(S-N)*P,s[10]=(1-(v+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let l=ao.set(s[0],s[1],s[2]).length();const c=ao.set(s[4],s[5],s[6]).length(),f=ao.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],qi.copy(this);const d=1/l,_=1/c,g=1/f;return qi.elements[0]*=d,qi.elements[1]*=d,qi.elements[2]*=d,qi.elements[4]*=_,qi.elements[5]*=_,qi.elements[6]*=_,qi.elements[8]*=g,qi.elements[9]*=g,qi.elements[10]*=g,n.setFromRotationMatrix(qi),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,s,l,c,f=ua,p=!1){const d=this.elements,_=2*l/(n-t),g=2*l/(a-s),v=(n+t)/(n-t),y=(a+s)/(a-s);let E,M;if(p)E=l/(c-l),M=c*l/(c-l);else if(f===ua)E=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===$c)E=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=ua,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),y=-(a+s)/(a-s);let E,M;if(p)E=1/(c-l),M=c/(c-l);else if(f===ua)E=-2/(c-l),M=-(c+l)/(c-l);else if(f===$c)E=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ao=new rt,qi=new on,OT=new rt(0,0,0),PT=new rt(1,1,1),_r=new rt,Tc=new rt,_i=new rt,Fv=new on,Hv=new su;class ha{constructor(t=0,n=0,a=0,s=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Fv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Hv.setFromEuler(this),this.setFromQuaternion(Hv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class ly{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zT=0;const Gv=new rt,ro=new su,Ua=new on,bc=new rt,Pl=new rt,IT=new rt,BT=new su,Vv=new rt(1,0,0),kv=new rt(0,1,0),Xv=new rt(0,0,1),Wv={type:"added"},FT={type:"removed"},so={type:"childadded",child:null},Pd={type:"childremoved",child:null};class On extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=ru(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const t=new rt,n=new ha,a=new su,s=new rt(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new on},normalMatrix:{value:new fe}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ro.setFromAxisAngle(t,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(t,n){return ro.setFromAxisAngle(t,n),this.quaternion.premultiply(ro),this}rotateX(t){return this.rotateOnAxis(Vv,t)}rotateY(t){return this.rotateOnAxis(kv,t)}rotateZ(t){return this.rotateOnAxis(Xv,t)}translateOnAxis(t,n){return Gv.copy(t).applyQuaternion(this.quaternion),this.position.add(Gv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Vv,t)}translateY(t){return this.translateOnAxis(kv,t)}translateZ(t){return this.translateOnAxis(Xv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?bc.copy(t):bc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(Pl,bc,this.up):Ua.lookAt(bc,Pl,this.up),this.quaternion.setFromRotationMatrix(Ua),s&&(Ua.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(Ua),this.quaternion.premultiply(ro.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wv),so.child=t,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(FT),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wv),so.child=t,this.dispatchEvent(so),so.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,t,IT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,BT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),E=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}On.DEFAULT_UP=new rt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new rt,La=new rt,zd=new rt,Na=new rt,oo=new rt,lo=new rt,qv=new rt,Id=new rt,Bd=new rt,Fd=new rt,Hd=new rn,Gd=new rn,Vd=new rn;class ji{constructor(t=new rt,n=new rt,a=new rt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Yi.subVectors(t,n),s.cross(Yi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Yi.subVectors(s,n),La.subVectors(a,n),zd.subVectors(t,n);const c=Yi.dot(Yi),f=Yi.dot(La),p=Yi.dot(zd),d=La.dot(La),_=La.dot(zd),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(d*p-f*_)*v,E=(c*_-f*p)*v;return l.set(1-y-E,E,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,n,a,s,l,c,f,p){return this.getBarycoord(t,n,a,s,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Na.x),p.addScaledVector(c,Na.y),p.addScaledVector(f,Na.z),p)}static getInterpolatedAttribute(t,n,a,s,l,c){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(t,n),Gd.fromBufferAttribute(t,a),Vd.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Hd,l.x),c.addScaledVector(Gd,l.y),c.addScaledVector(Vd,l.z),c}static isFrontFacing(t,n,a,s){return Yi.subVectors(a,n),La.subVectors(t,n),Yi.cross(La).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Yi.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ji.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return ji.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;oo.subVectors(s,a),lo.subVectors(l,a),Id.subVectors(t,a);const p=oo.dot(Id),d=lo.dot(Id);if(p<=0&&d<=0)return n.copy(a);Bd.subVectors(t,s);const _=oo.dot(Bd),g=lo.dot(Bd);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(oo,c);Fd.subVectors(t,l);const y=oo.dot(Fd),E=lo.dot(Fd);if(E>=0&&y<=E)return n.copy(l);const M=y*d-p*E;if(M<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(lo,f);const S=_*E-y*g;if(S<=0&&g-_>=0&&y-E>=0)return qv.subVectors(l,s),f=(g-_)/(g-_+(y-E)),n.copy(s).addScaledVector(qv,f);const x=1/(S+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(oo,c).addScaledVector(lo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function kd(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Te{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=we.workingColorSpace){if(t=TT(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=kd(c,l,t+1/3),this.g=kd(c,l,t),this.b=kd(c,l,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,n=Pi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Pi){const a=uy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pi){return we.workingToColorSpace(Gn.copy(this),t),Math.round(ye(Gn.r*255,0,255))*65536+Math.round(ye(Gn.g*255,0,255))*256+Math.round(ye(Gn.b*255,0,255))}getHexString(t=Pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(Gn.copy(this),n);const a=Gn.r,s=Gn.g,l=Gn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-l)/g+(s<l?6:0);break;case s:p=(l-a)/g+2;break;case l:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(Gn.copy(this),n),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Pi){we.workingToColorSpace(Gn.copy(this),t);const n=Gn.r,a=Gn.g,s=Gn.b;return t!==Pi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(gr),this.setHSL(gr.h+t,gr.s+n,gr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(gr),t.getHSL(Ac);const a=bd(gr.h,Ac.h,n),s=bd(gr.s,Ac.s,n),l=bd(gr.l,Ac.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Te;Te.NAMES=uy;let HT=0;class Po extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=ru(),this.name="",this.type="Material",this.blending=vo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=up,this.blendDst=cp,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(a.blending=this.blending),this.side!==Rr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==up&&(a.blendSrc=this.blendSrc),this.blendDst!==cp&&(a.blendDst=this.blendDst),this.blendEquation!==rs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Eo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(a.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Em extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=Yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new rt,Rc=new be;let GT=0;class Si{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Nv,this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Rc.fromBufferAttribute(this,n),Rc.applyMatrix3(t),this.setXY(n,Rc.x,Rc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ll(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ni(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ll(n,this.array)),n}setX(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ll(n,this.array)),n}setY(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ll(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ll(n,this.array)),n}setW(t,n){return this.normalized&&(n=ni(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array),s=ni(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=ni(n,this.array),a=ni(a,this.array),s=ni(s,this.array),l=ni(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nv&&(t.usage=this.usage),t}}class cy extends Si{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class fy extends Si{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class kn extends Si{constructor(t,n,a){super(new Float32Array(t),n,a)}}let VT=0;const Ni=new on,Xd=new On,uo=new rt,gi=new ou,zl=new ou,wn=new rt;class Ei extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=ru(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ry(t)?fy:cy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new fe().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,n,a){return Ni.makeTranslation(t,n,a),this.applyMatrix4(Ni),this}scale(t,n,a){return Ni.makeScale(t,n,a),this.applyMatrix4(Ni),this}lookAt(t){return Xd.lookAt(t),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new kn(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ou);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const a=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];zl.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(gi.min,zl.min),gi.expandByPoint(wn),wn.addVectors(gi.max,zl.max),gi.expandByPoint(wn)):(gi.expandByPoint(zl.min),gi.expandByPoint(zl.max))}gi.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)wn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(wn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)wn.fromBufferAttribute(f,d),p&&(uo.fromBufferAttribute(t,d),wn.add(uo)),s=Math.max(s,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let F=0;F<a.count;F++)f[F]=new rt,p[F]=new rt;const d=new rt,_=new rt,g=new rt,v=new be,y=new be,E=new be,M=new rt,S=new rt;function x(F,b,U){d.fromBufferAttribute(a,F),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,U),v.fromBufferAttribute(l,F),y.fromBufferAttribute(l,b),E.fromBufferAttribute(l,U),_.sub(d),g.sub(d),y.sub(v),E.sub(v);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(V),S.copy(g).multiplyScalar(y.x).addScaledVector(_,-E.x).multiplyScalar(V),f[F].add(M),f[b].add(M),f[U].add(M),p[F].add(S),p[b].add(S),p[U].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let F=0,b=N.length;F<b;++F){const U=N[F],V=U.start,X=U.count;for(let Q=V,ot=V+X;Q<ot;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const L=new rt,A=new rt,C=new rt,O=new rt;function P(F){C.fromBufferAttribute(s,F),O.copy(C);const b=f[F];L.copy(b),L.sub(C.multiplyScalar(C.dot(b))).normalize(),A.crossVectors(O,b);const V=A.dot(p[F])<0?-1:1;c.setXYZW(F,L.x,L.y,L.z,V)}for(let F=0,b=N.length;F<b;++F){const U=N[F],V=U.start,X=U.count;for(let Q=V,ot=V+X;Q<ot;Q+=3)P(t.getX(Q+0)),P(t.getX(Q+1)),P(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new rt,l=new rt,c=new rt,f=new rt,p=new rt,d=new rt,_=new rt,g=new rt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),M=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,E),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,S),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,S),f.add(_),p.add(_),d.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let y=0,E=0;for(let M=0,S=p.length;M<S;M++){f.isInterleavedBufferAttribute?y=p[M]*f.data.stride+f.offset:y=p[M]*_;for(let x=0;x<_;x++)v[E++]=d[y++]}return new Si(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];_.push(y.toJSON(t.data))}_.length>0&&(s[p]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yv=new on,Kr=new oy,wc=new cf,jv=new rt,Cc=new rt,Dc=new rt,Uc=new rt,Wd=new rt,Lc=new rt,Zv=new rt,Nc=new rt;class Sn extends On{constructor(t=new Ei,n=new Em){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Lc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(Wd.fromBufferAttribute(g,t),c?Lc.addScaledVector(Wd,_):Lc.addScaledVector(Wd.sub(n),_))}n.add(Lc)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),wc.copy(a.boundingSphere),wc.applyMatrix4(l),Kr.copy(t.ray).recast(t.near),!(wc.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(wc,jv)===null||Kr.origin.distanceToSquared(jv)>(t.far-t.near)**2))&&(Yv.copy(l).invert(),Kr.copy(t.ray).applyMatrix4(Yv),!(a.boundingBox!==null&&Kr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Kr)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let A=N,C=L;A<C;A+=3){const O=f.getX(A),P=f.getX(A+1),F=f.getX(A+2);s=Oc(this,x,t,a,d,_,g,O,P,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const N=f.getX(S),L=f.getX(S+1),A=f.getX(S+2);s=Oc(this,c,t,a,d,_,g,N,L,A),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,M=v.length;E<M;E++){const S=v[E],x=c[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let A=N,C=L;A<C;A+=3){const O=A,P=A+1,F=A+2;s=Oc(this,x,t,a,d,_,g,O,P,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const E=Math.max(0,y.start),M=Math.min(p.count,y.start+y.count);for(let S=E,x=M;S<x;S+=3){const N=S,L=S+1,A=S+2;s=Oc(this,c,t,a,d,_,g,N,L,A),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function kT(o,t,n,a,s,l,c,f){let p;if(t.side===Kn?p=a.intersectTriangle(c,l,s,!0,f):p=a.intersectTriangle(s,l,c,t.side===Rr,f),p===null)return null;Nc.copy(f),Nc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Nc);return d<n.near||d>n.far?null:{distance:d,point:Nc.clone(),object:o}}function Oc(o,t,n,a,s,l,c,f,p,d){o.getVertexPosition(f,Cc),o.getVertexPosition(p,Dc),o.getVertexPosition(d,Uc);const _=kT(o,t,n,a,Cc,Dc,Uc,Zv);if(_){const g=new rt;ji.getBarycoord(Zv,Cc,Dc,Uc,g),s&&(_.uv=ji.getInterpolatedAttribute(s,f,p,d,g,new be)),l&&(_.uv1=ji.getInterpolatedAttribute(l,f,p,d,g,new be)),c&&(_.normal=ji.getInterpolatedAttribute(c,f,p,d,g,new rt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new rt,materialIndex:0};ji.getNormal(Cc,Dc,Uc,v.normal),_.face=v,_.barycoord=g}return _}class sa extends Ei{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,y=0;E("z","y","x",-1,-1,a,n,t,c,l,0),E("z","y","x",1,-1,a,n,-t,c,l,1),E("x","z","y",1,1,t,a,n,s,c,2),E("x","z","y",1,-1,t,a,-n,s,c,3),E("x","y","z",1,-1,t,n,a,s,l,4),E("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(p),this.setAttribute("position",new kn(d,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(g,2));function E(M,S,x,N,L,A,C,O,P,F,b){const U=A/P,V=C/F,X=A/2,Q=C/2,ot=O/2,nt=P+1,I=F+1;let Y=0,W=0;const _t=new rt;for(let z=0;z<I;z++){const J=z*V-Q;for(let pt=0;pt<nt;pt++){const yt=pt*U-X;_t[M]=yt*N,_t[S]=J*L,_t[x]=ot,d.push(_t.x,_t.y,_t.z),_t[M]=0,_t[S]=0,_t[x]=O>0?1:-1,_.push(_t.x,_t.y,_t.z),g.push(pt/P),g.push(1-z/F),Y+=1}}for(let z=0;z<F;z++)for(let J=0;J<P;J++){const pt=v+J+nt*z,yt=v+J+nt*(z+1),Tt=v+(J+1)+nt*(z+1),Dt=v+(J+1)+nt*z;p.push(pt,yt,Dt),p.push(yt,Tt,Dt),W+=6}f.addGroup(y,W,b),y+=W,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ro(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function jn(o){const t={};for(let n=0;n<o.length;n++){const a=Ro(o[n]);for(const s in a)t[s]=a[s]}return t}function XT(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function hy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const WT={clone:Ro,merge:jn};var qT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qT,this.fragmentShader=YT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=XT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class dy extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new rt,Kv=new be,Qv=new be;class zi extends dy{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Kp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kp*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-t/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(vr.x,vr.y).multiplyScalar(-t/vr.z)}getViewSize(t,n){return this.getViewBounds(t,Kv,Qv),n.subVectors(Qv,Kv)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Td*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const co=-90,fo=1;class jT extends On{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zi(co,fo,t,n);s.layers=this.layers,this.add(s);const l=new zi(co,fo,t,n);l.layers=this.layers,this.add(l);const c=new zi(co,fo,t,n);c.layers=this.layers,this.add(c);const f=new zi(co,fo,t,n);f.layers=this.layers,this.add(f);const p=new zi(co,fo,t,n);p.layers=this.layers,this.add(p);const d=new zi(co,fo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===ua)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===$c)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class py extends ii{constructor(t=[],n=To,a,s,l,c,f,p,d,_){super(t,n,a,s,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ZT extends ms{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new py(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sa(5,5,5),l=new Ha({name:"CubemapFromEquirect",uniforms:Ro(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:Er});l.uniforms.tEquirect.value=n;const c=new Sn(s,l),f=n.minFilter;return n.minFilter===ls&&(n.minFilter=la),new jT(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}class Bl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const S=n.getJointPose(M,a),x=this._getHandJoint(d,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,E=.005;d.inputState.pinching&&v>y+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Bl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class QT extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Yd=new rt,JT=new rt,$T=new fe;class ns{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=Yd.subVectors(a,n).cross(JT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Yd),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||$T.getNormalMatrix(t),s=this.coplanarPoint(Yd).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new cf,t1=new be(.5,.5),Pc=new rt;class Tm{constructor(t=new ns,n=new ns,a=new ns,s=new ns,l=new ns,c=new ns){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ua,a=!1){const s=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],y=l[7],E=l[8],M=l[9],S=l[10],x=l[11],N=l[12],L=l[13],A=l[14],C=l[15];if(s[0].setComponents(d-c,y-_,x-E,C-N).normalize(),s[1].setComponents(d+c,y+_,x+E,C+N).normalize(),s[2].setComponents(d+f,y+g,x+M,C+L).normalize(),s[3].setComponents(d-f,y-g,x-M,C-L).normalize(),a)s[4].setComponents(p,v,S,A).normalize(),s[5].setComponents(d-p,y-v,x-S,C-A).normalize();else if(s[4].setComponents(d-p,y-v,x-S,C-A).normalize(),n===ua)s[5].setComponents(d+p,y+v,x+S,C+A).normalize();else if(n===$c)s[5].setComponents(p,v,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(t){Qr.center.set(0,0,0);const n=t1.distanceTo(t.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(Pc.x=s.normal.x>0?t.max.x:t.min.x,Pc.y=s.normal.y>0?t.max.y:t.min.y,Pc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class my extends Po{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jv=new on,Qp=new oy,zc=new cf,Ic=new rt;class $v extends On{constructor(t=new Ei,n=new my){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),zc.copy(a.boundingSphere),zc.applyMatrix4(s),zc.radius+=l,t.ray.intersectsSphere(zc)===!1)return;Jv.copy(s).invert(),Qp.copy(t.ray).applyMatrix4(Jv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let E=v,M=y;E<M;E++){const S=d.getX(E);Ic.fromBufferAttribute(g,S),tx(Ic,S,p,s,t,n,this)}}else{const v=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let E=v,M=y;E<M;E++)Ic.fromBufferAttribute(g,E),tx(Ic,E,p,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function tx(o,t,n,a,s,l,c){const f=Qp.distanceSqToPoint(o);if(f<n){const p=new rt;Qp.closestPointToPoint(o,p),p.applyMatrix4(a);const d=s.ray.origin.distanceTo(p);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class _y extends ii{constructor(t,n,a=ps,s,l,c,f=Ki,p=Ki,d,_=jl,g=1){if(_!==jl&&_!==Zl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gy extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bm extends Ei{constructor(t=1,n=1,a=1,s=32,l=1,c=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p};const d=this;s=Math.floor(s),l=Math.floor(l);const _=[],g=[],v=[],y=[];let E=0;const M=[],S=a/2;let x=0;N(),c===!1&&(t>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(y,2));function N(){const A=new rt,C=new rt;let O=0;const P=(n-t)/a;for(let F=0;F<=l;F++){const b=[],U=F/l,V=U*(n-t)+t;for(let X=0;X<=s;X++){const Q=X/s,ot=Q*p+f,nt=Math.sin(ot),I=Math.cos(ot);C.x=V*nt,C.y=-U*a+S,C.z=V*I,g.push(C.x,C.y,C.z),A.set(nt,P,I).normalize(),v.push(A.x,A.y,A.z),y.push(Q,1-U),b.push(E++)}M.push(b)}for(let F=0;F<s;F++)for(let b=0;b<l;b++){const U=M[b][F],V=M[b+1][F],X=M[b+1][F+1],Q=M[b][F+1];(t>0||b!==0)&&(_.push(U,V,Q),O+=3),(n>0||b!==l-1)&&(_.push(V,X,Q),O+=3)}d.addGroup(x,O,0),x+=O}function L(A){const C=E,O=new be,P=new rt;let F=0;const b=A===!0?t:n,U=A===!0?1:-1;for(let X=1;X<=s;X++)g.push(0,S*U,0),v.push(0,U,0),y.push(.5,.5),E++;const V=E;for(let X=0;X<=s;X++){const ot=X/s*p+f,nt=Math.cos(ot),I=Math.sin(ot);P.x=b*I,P.y=S*U,P.z=b*nt,g.push(P.x,P.y,P.z),v.push(0,U,0),O.x=nt*.5+.5,O.y=I*.5*U+.5,y.push(O.x,O.y),E++}for(let X=0;X<s;X++){const Q=C+X,ot=V+X;A===!0?_.push(ot,ot+1,Q):_.push(ot+1,ot,Q),F+=3}d.addGroup(x,F,A===!0?1:2),x+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ff extends Ei{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,y=[],E=[],M=[],S=[];for(let x=0;x<_;x++){const N=x*v-c;for(let L=0;L<d;L++){const A=L*g-l;E.push(A,-N,0),M.push(0,0,1),S.push(L/f),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<f;N++){const L=N+d*x,A=N+d*(x+1),C=N+1+d*(x+1),O=N+1+d*x;y.push(L,A,O),y.push(A,C,O)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ff(t.width,t.height,t.widthSegments,t.heightSegments)}}class Am extends Ei{constructor(t=.5,n=1,a=32,s=1,l=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:a,phiSegments:s,thetaStart:l,thetaLength:c},a=Math.max(3,a),s=Math.max(1,s);const f=[],p=[],d=[],_=[];let g=t;const v=(n-t)/s,y=new rt,E=new be;for(let M=0;M<=s;M++){for(let S=0;S<=a;S++){const x=l+S/a*c;y.x=g*Math.cos(x),y.y=g*Math.sin(x),p.push(y.x,y.y,y.z),d.push(0,0,1),E.x=(y.x/n+1)/2,E.y=(y.y/n+1)/2,_.push(E.x,E.y)}g+=v}for(let M=0;M<s;M++){const S=M*(a+1);for(let x=0;x<a;x++){const N=x+S,L=N,A=N+a+1,C=N+a+2,O=N+1;f.push(L,A,O),f.push(A,C,O)}}this.setIndex(f),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(d,3)),this.setAttribute("uv",new kn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Am(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Rm extends Ei{constructor(t=1,n=32,a=16,s=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:s,phiLength:l,thetaStart:c,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(c+f,Math.PI);let d=0;const _=[],g=new rt,v=new rt,y=[],E=[],M=[],S=[];for(let x=0;x<=a;x++){const N=[],L=x/a;let A=0;x===0&&c===0?A=.5/n:x===a&&p===Math.PI&&(A=-.5/n);for(let C=0;C<=n;C++){const O=C/n;g.x=-t*Math.cos(s+O*l)*Math.sin(c+L*f),g.y=t*Math.cos(c+L*f),g.z=t*Math.sin(s+O*l)*Math.sin(c+L*f),E.push(g.x,g.y,g.z),v.copy(g).normalize(),M.push(v.x,v.y,v.z),S.push(O+A,1-L),N.push(d++)}_.push(N)}for(let x=0;x<a;x++)for(let N=0;N<n;N++){const L=_[x][N+1],A=_[x][N],C=_[x+1][N],O=_[x+1][N+1];(x!==0||c>0)&&y.push(L,A,O),(x!==a-1||p<Math.PI)&&y.push(A,C,O)}this.setIndex(y),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(M,3)),this.setAttribute("uv",new kn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ex extends Po{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iy,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class e1 extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n1 extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vy extends On{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const jd=new on,nx=new rt,ix=new rt;class i1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=fa,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tm,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;nx.setFromMatrixPosition(t.matrixWorld),n.position.copy(nx),ix.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(ix),n.updateMatrixWorld(),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(jd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xy extends dy{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class a1 extends i1{constructor(){super(new xy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r1 extends vy{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new a1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class s1 extends vy{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1 extends zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class l1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function ax(o,t,n,a){const s=u1(a);switch(n){case $x:return o*t;case ey:return o*t/s.components*s.byteLength;case xm:return o*t/s.components*s.byteLength;case ny:return o*t*2/s.components*s.byteLength;case ym:return o*t*2/s.components*s.byteLength;case ty:return o*t*3/s.components*s.byteLength;case Zi:return o*t*4/s.components*s.byteLength;case Sm:return o*t*4/s.components*s.byteLength;case Vc:case kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ep:case bp:return Math.max(o,16)*Math.max(t,8)/4;case Mp:case Tp:return Math.max(o,8)*Math.max(t,8)/2;case Ap:case Rp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case zp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Gp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case kp:case Xp:case Wp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case qp:case Yp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case jp:case Zp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function u1(o){switch(o){case fa:case Zx:return{byteLength:1,components:1};case ql:case Kx:case au:return{byteLength:2,components:1};case gm:case vm:return{byteLength:2,components:4};case ps:case _m:case Ba:return{byteLength:4,components:1};case Qx:case Jx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yy(){let o=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function c1(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<g.length;y++){const E=g[v],M=g[y];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,E=g.length;y<E;y++){const M=g[y];o.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:c}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
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
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
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
#endif`,y1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O1=`#define PI 3.141592653589793
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
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,z1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
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
}`,$1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
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
#endif`,ib=`#ifdef USE_ENVMAP
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
#endif`,ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
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
#endif`,ub=`struct PhysicalMaterial {
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
}`,cb=`
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`#ifdef USE_MORPHTARGETS
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
#endif`,Rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
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
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zb=`float getShadowMask() {
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
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,Jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,tA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aA=`#ifdef USE_TRANSMISSION
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
#endif`,rA=`#ifdef USE_TRANSMISSION
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fA=`uniform sampler2D t2D;
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`#include <common>
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
}`,gA=`#if DEPTH_PACKING == 3200
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
}`,vA=`#define DISTANCE
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
}`,xA=`#define DISTANCE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
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
}`,EA=`uniform vec3 diffuse;
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
}`,TA=`#include <common>
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
}`,bA=`uniform vec3 diffuse;
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
}`,AA=`#define LAMBERT
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
}`,RA=`#define LAMBERT
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
}`,wA=`#define MATCAP
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
}`,CA=`#define MATCAP
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
}`,DA=`#define NORMAL
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
}`,UA=`#define NORMAL
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
}`,LA=`#define PHONG
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
}`,NA=`#define PHONG
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
}`,OA=`#define STANDARD
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
}`,PA=`#define STANDARD
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
}`,zA=`#define TOON
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
}`,IA=`#define TOON
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
}`,BA=`uniform float size;
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
}`,FA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,GA=`uniform vec3 color;
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
}`,VA=`uniform float rotation;
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
}`,kA=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:f1,alphahash_pars_fragment:h1,alphamap_fragment:d1,alphamap_pars_fragment:p1,alphatest_fragment:m1,alphatest_pars_fragment:_1,aomap_fragment:g1,aomap_pars_fragment:v1,batching_pars_vertex:x1,batching_vertex:y1,begin_vertex:S1,beginnormal_vertex:M1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:b1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:C1,color_fragment:D1,color_pars_fragment:U1,color_pars_vertex:L1,color_vertex:N1,common:O1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:z1,displacementmap_pars_vertex:I1,displacementmap_vertex:B1,emissivemap_fragment:F1,emissivemap_pars_fragment:H1,colorspace_fragment:G1,colorspace_pars_fragment:V1,envmap_fragment:k1,envmap_common_pars_fragment:X1,envmap_pars_fragment:W1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:ib,envmap_vertex:Y1,fog_vertex:j1,fog_pars_vertex:Z1,fog_fragment:K1,fog_pars_fragment:Q1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:$1,lights_lambert_fragment:tb,lights_lambert_pars_fragment:eb,lights_pars_begin:nb,lights_toon_fragment:ab,lights_toon_pars_fragment:rb,lights_phong_fragment:sb,lights_phong_pars_fragment:ob,lights_physical_fragment:lb,lights_physical_pars_fragment:ub,lights_fragment_begin:cb,lights_fragment_maps:fb,lights_fragment_end:hb,logdepthbuf_fragment:db,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:_b,map_fragment:gb,map_pars_fragment:vb,map_particle_fragment:xb,map_particle_pars_fragment:yb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:Eb,morphcolor_vertex:Tb,morphnormal_vertex:bb,morphtarget_pars_vertex:Ab,morphtarget_vertex:Rb,normal_fragment_begin:wb,normal_fragment_maps:Cb,normal_pars_fragment:Db,normal_pars_vertex:Ub,normal_vertex:Lb,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:zb,iridescence_pars_fragment:Ib,opaque_fragment:Bb,packing:Fb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Vb,dithering_pars_fragment:kb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:Wb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Yb,shadowmap_vertex:jb,shadowmask_pars_fragment:Zb,skinbase_vertex:Kb,skinning_pars_vertex:Qb,skinning_vertex:Jb,skinnormal_vertex:$b,specularmap_fragment:tA,specularmap_pars_fragment:eA,tonemapping_fragment:nA,tonemapping_pars_fragment:iA,transmission_fragment:aA,transmission_pars_fragment:rA,uv_pars_fragment:sA,uv_pars_vertex:oA,uv_vertex:lA,worldpos_vertex:uA,background_vert:cA,background_frag:fA,backgroundCube_vert:hA,backgroundCube_frag:dA,cube_vert:pA,cube_frag:mA,depth_vert:_A,depth_frag:gA,distanceRGBA_vert:vA,distanceRGBA_frag:xA,equirect_vert:yA,equirect_frag:SA,linedashed_vert:MA,linedashed_frag:EA,meshbasic_vert:TA,meshbasic_frag:bA,meshlambert_vert:AA,meshlambert_frag:RA,meshmatcap_vert:wA,meshmatcap_frag:CA,meshnormal_vert:DA,meshnormal_frag:UA,meshphong_vert:LA,meshphong_frag:NA,meshphysical_vert:OA,meshphysical_frag:PA,meshtoon_vert:zA,meshtoon_frag:IA,points_vert:BA,points_frag:FA,shadow_vert:HA,shadow_frag:GA,sprite_vert:VA,sprite_frag:kA},Ot={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},ra={basic:{uniforms:jn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:jn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:jn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:jn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:jn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Te(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:jn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:jn([Ot.points,Ot.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:jn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:jn([Ot.common,Ot.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:jn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:jn([Ot.sprite,Ot.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:jn([Ot.common,Ot.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:jn([Ot.lights,Ot.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ra.physical={uniforms:jn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Bc={r:0,b:0,g:0},Jr=new ha,XA=new on;function WA(o,t,n,a,s,l,c){const f=new Te(0);let p=l===!0?0:1,d,_,g=null,v=0,y=null;function E(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?n:t).get(A)),A}function M(L){let A=!1;const C=E(L);C===null?x(f,p):C&&C.isColor&&(x(C,1),A=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,A){const C=E(A);C&&(C.isCubeTexture||C.mapping===uf)?(_===void 0&&(_=new Sn(new sa(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Ro(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),Jr.copy(A.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),_.material.uniforms.envMap.value=C,_.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Jr)),_.material.toneMapped=we.getTransfer(C.colorSpace)!==Ie,(g!==C||v!==C.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=C,v=C.version,y=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new Sn(new ff(2,2),new Ha({name:"BackgroundMaterial",uniforms:Ro(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=we.getTransfer(C.colorSpace)!==Ie,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,y=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function x(L,A){L.getRGB(Bc,hy(o)),a.buffers.color.setClear(Bc.r,Bc.g,Bc.b,A,c)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,A=1){f.set(L),p=A,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(f,p)},render:M,addToRenderList:S,dispose:N}}function qA(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(U,V,X,Q,ot){let nt=!1;const I=g(Q,X,V);l!==I&&(l=I,d(l.object)),nt=y(U,Q,X,ot),nt&&E(U,Q,X,ot),ot!==null&&t.update(ot,o.ELEMENT_ARRAY_BUFFER),(nt||c)&&(c=!1,A(U,V,X,Q),ot!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function p(){return o.createVertexArray()}function d(U){return o.bindVertexArray(U)}function _(U){return o.deleteVertexArray(U)}function g(U,V,X){const Q=X.wireframe===!0;let ot=a[U.id];ot===void 0&&(ot={},a[U.id]=ot);let nt=ot[V.id];nt===void 0&&(nt={},ot[V.id]=nt);let I=nt[Q];return I===void 0&&(I=v(p()),nt[Q]=I),I}function v(U){const V=[],X=[],Q=[];for(let ot=0;ot<n;ot++)V[ot]=0,X[ot]=0,Q[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:Q,object:U,attributes:{},index:null}}function y(U,V,X,Q){const ot=l.attributes,nt=V.attributes;let I=0;const Y=X.getAttributes();for(const W in Y)if(Y[W].location>=0){const z=ot[W];let J=nt[W];if(J===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),z===void 0||z.attribute!==J||J&&z.data!==J.data)return!0;I++}return l.attributesNum!==I||l.index!==Q}function E(U,V,X,Q){const ot={},nt=V.attributes;let I=0;const Y=X.getAttributes();for(const W in Y)if(Y[W].location>=0){let z=nt[W];z===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(z=U.instanceColor));const J={};J.attribute=z,z&&z.data&&(J.data=z.data),ot[W]=J,I++}l.attributes=ot,l.attributesNum=I,l.index=Q}function M(){const U=l.newAttributes;for(let V=0,X=U.length;V<X;V++)U[V]=0}function S(U){x(U,0)}function x(U,V){const X=l.newAttributes,Q=l.enabledAttributes,ot=l.attributeDivisors;X[U]=1,Q[U]===0&&(o.enableVertexAttribArray(U),Q[U]=1),ot[U]!==V&&(o.vertexAttribDivisor(U,V),ot[U]=V)}function N(){const U=l.newAttributes,V=l.enabledAttributes;for(let X=0,Q=V.length;X<Q;X++)V[X]!==U[X]&&(o.disableVertexAttribArray(X),V[X]=0)}function L(U,V,X,Q,ot,nt,I){I===!0?o.vertexAttribIPointer(U,V,X,ot,nt):o.vertexAttribPointer(U,V,X,Q,ot,nt)}function A(U,V,X,Q){M();const ot=Q.attributes,nt=X.getAttributes(),I=V.defaultAttributeValues;for(const Y in nt){const W=nt[Y];if(W.location>=0){let _t=ot[Y];if(_t===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(_t=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(_t=U.instanceColor)),_t!==void 0){const z=_t.normalized,J=_t.itemSize,pt=t.get(_t);if(pt===void 0)continue;const yt=pt.buffer,Tt=pt.type,Dt=pt.bytesPerElement,et=Tt===o.INT||Tt===o.UNSIGNED_INT||_t.gpuType===_m;if(_t.isInterleavedBufferAttribute){const mt=_t.data,At=mt.stride,jt=_t.offset;if(mt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<W.locationSize;Vt++)x(W.location+Vt,mt.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Vt=0;Vt<W.locationSize;Vt++)S(W.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Vt=0;Vt<W.locationSize;Vt++)L(W.location+Vt,J/W.locationSize,Tt,z,At*Dt,(jt+J/W.locationSize*Vt)*Dt,et)}else{if(_t.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)x(W.location+mt,_t.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let mt=0;mt<W.locationSize;mt++)S(W.location+mt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let mt=0;mt<W.locationSize;mt++)L(W.location+mt,J/W.locationSize,Tt,z,J*Dt,J/W.locationSize*mt*Dt,et)}}else if(I!==void 0){const z=I[Y];if(z!==void 0)switch(z.length){case 2:o.vertexAttrib2fv(W.location,z);break;case 3:o.vertexAttrib3fv(W.location,z);break;case 4:o.vertexAttrib4fv(W.location,z);break;default:o.vertexAttrib1fv(W.location,z)}}}}N()}function C(){F();for(const U in a){const V=a[U];for(const X in V){const Q=V[X];for(const ot in Q)_(Q[ot].object),delete Q[ot];delete V[X]}delete a[U]}}function O(U){if(a[U.id]===void 0)return;const V=a[U.id];for(const X in V){const Q=V[X];for(const ot in Q)_(Q[ot].object),delete Q[ot];delete V[X]}delete a[U.id]}function P(U){for(const V in a){const X=a[V];if(X[U.id]===void 0)continue;const Q=X[U.id];for(const ot in Q)_(Q[ot].object),delete Q[ot];delete X[U.id]}}function F(){b(),c=!0,l!==s&&(l=s,d(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:S,disableUnusedAttributes:N}}function YA(o,t,n){let a;function s(d){a=d}function l(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let y=0;for(let E=0;E<g;E++)y+=_[E];n.update(y,a,1)}function p(d,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<d.length;E++)c(d[E],_[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*v[M];n.update(E,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function jA(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){return!(P!==Zi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const F=P===au&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==fa&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ba&&!F)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=E>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:C,maxSamples:O}}function ZA(o){const t=this;let n=null,a=0,s=!1,l=!1;const c=new ns,f=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const E=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||E===null||E.length===0||l&&!S)l?_(null):d();else{const N=l?0:a,L=N*4;let A=x.clippingState||null;p.value=A,A=_(E,v,L,y);for(let C=0;C!==L;++C)A[C]=n[C];x.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,E){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=p.value,E!==!0||S===null){const x=y+M*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,A=y;L!==M;++L,A+=4)c.copy(g[L]).applyMatrix4(N,f),c.normal.toArray(S,A),S[A+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,S}}function KA(o){let t=new WeakMap;function n(c,f){return f===vp?c.mapping=To:f===xp&&(c.mapping=bo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===vp||f===xp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new ZT(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const mo=4,rx=[.125,.215,.35,.446,.526,.582],ss=20,Zd=new xy,sx=new Te;let Kd=null,Qd=0,Jd=0,$d=!1;const is=(1+Math.sqrt(5))/2,ho=1/is,ox=[new rt(-is,ho,0),new rt(is,ho,0),new rt(-ho,0,is),new rt(ho,0,is),new rt(0,is,-ho),new rt(0,is,ho),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],QA=new rt;class lx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=QA}=l;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Fc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===To||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:la,minFilter:la,generateMipmaps:!1,type:au,format:Zi,colorSpace:Ao,depthBuffer:!1},s=ux(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ux(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JA(l)),this._blurMaterial=$A(l,t,n)}return s}_compileMaterial(t){const n=new Sn(this._lodPlanes[0],t);this._renderer.compile(n,Zd)}_sceneToCubeUV(t,n,a,s,l){const p=new zi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(sx),g.toneMapping=Tr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const M=new Em({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),S=new Sn(new sa,M);let x=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,x=!0):(M.color.copy(sx),x=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(p.up.set(0,d[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[L],l.y,l.z)):A===1?(p.up.set(0,0,d[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[L],l.z)):(p.up.set(0,d[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[L]));const C=this._cubeSize;Fc(s,A*C,L>2?C:0,C,C),g.setRenderTarget(s),x&&g.render(S,p),g.render(t,p)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=N}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===To||t.mapping===bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Sn(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Fc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,Zd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ox[(s-l-1)%ox.length];this._blur(t,l-1,l,c,f)}n.autoClear=a}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Sn(this._lodPlanes[s],d),v=d.uniforms,y=this._sizeLods[a]-1,E=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ss-1),M=l/E,S=isFinite(l)?1+Math.floor(_*M):ss;S>ss&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ss}`);const x=[];let N=0;for(let P=0;P<ss;++P){const F=P/M,b=Math.exp(-F*F/2);x.push(b),P===0?N+=b:P<S&&(N+=2*b)}for(let P=0;P<x.length;P++)x[P]=x[P]/N;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-a;const A=this._sizeLods[s],C=3*A*(s>L-mo?s-L+mo:0),O=4*(this._cubeSize-A);Fc(n,C,O,3*A,2*A),p.setRenderTarget(n),p.render(g,Zd)}}function JA(o){const t=[],n=[],a=[];let s=o;const l=o-mo+1+rx.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let p=1/f;c>o-mo?p=rx[c-o+mo-1]:c===0&&(p=0),a.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,E=6,M=3,S=2,x=1,N=new Float32Array(M*E*y),L=new Float32Array(S*E*y),A=new Float32Array(x*E*y);for(let O=0;O<y;O++){const P=O%3*2/3-1,F=O>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];N.set(b,M*E*O),L.set(v,S*E*O);const U=[O,O,O,O,O,O];A.set(U,x*E*O)}const C=new Ei;C.setAttribute("position",new Si(N,M)),C.setAttribute("uv",new Si(L,S)),C.setAttribute("faceIndex",new Si(A,x)),t.push(C),s>mo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function ux(o,t,n){const a=new ms(o,t,n);return a.texture.mapping=uf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Fc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function $A(o,t,n){const a=new Float32Array(ss),s=new rt(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wm(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function cx(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wm(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function fx(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function wm(){return`

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
	`}function tR(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===vp||p===xp,_=p===To||p===bo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new lx(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||_&&y&&s(y)?(n===null&&(n=new lx(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function eR(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Kl("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function nR(o,t,n,a){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete s[v.id];const y=l.get(v);y&&(t.remove(y),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,E=g.attributes.position;let M=0;if(y!==null){const N=y.array;M=y.version;for(let L=0,A=N.length;L<A;L+=3){const C=N[L+0],O=N[L+1],P=N[L+2];v.push(C,O,O,P,P,C)}}else if(E!==void 0){const N=E.array;M=E.version;for(let L=0,A=N.length/3-1;L<A;L+=3){const C=L+0,O=L+1,P=L+2;v.push(C,O,O,P,P,C)}}else return;const S=new(ry(v)?fy:cy)(v,1);S.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,S)}function _(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function iR(o,t,n){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,y){o.drawElements(a,y,l,v*c),n.update(y,a,1)}function d(v,y,E){E!==0&&(o.drawElementsInstanced(a,y,l,v*c,E),n.update(y,a,E))}function _(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,l,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];n.update(S,a,1)}function g(v,y,E,M){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,l,v,0,M,0,E);let x=0;for(let N=0;N<E;N++)x+=y[N]*M[N];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function aR(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function rR(o,t,n){const a=new WeakMap,s=new rn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let U=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",U)};var y=U;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),S===!0&&(A=3);let C=f.attributes.position.count*A,O=1;C>t.maxTextureSize&&(O=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*O*4*g),F=new sy(P,C,O,g);F.type=Ba,F.needsUpdate=!0;const b=A*4;for(let V=0;V<g;V++){const X=x[V],Q=N[V],ot=L[V],nt=C*O*4*V;for(let I=0;I<X.count;I++){const Y=I*b;E===!0&&(s.fromBufferAttribute(X,I),P[nt+Y+0]=s.x,P[nt+Y+1]=s.y,P[nt+Y+2]=s.z,P[nt+Y+3]=0),M===!0&&(s.fromBufferAttribute(Q,I),P[nt+Y+4]=s.x,P[nt+Y+5]=s.y,P[nt+Y+6]=s.z,P[nt+Y+7]=0),S===!0&&(s.fromBufferAttribute(ot,I),P[nt+Y+8]=s.x,P[nt+Y+9]=s.y,P[nt+Y+10]=s.z,P[nt+Y+11]=ot.itemSize===4?s.w:1)}}v={count:g,texture:F,size:new be(C,O)},a.set(f,v),f.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<d.length;S++)E+=d[S];const M=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function sR(o,t,n,a){let s=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const Sy=new ii,hx=new _y(1,1),My=new sy,Ey=new LT,Ty=new py,dx=[],px=[],mx=new Float32Array(16),_x=new Float32Array(9),gx=new Float32Array(4);function zo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=dx[s];if(l===void 0&&(l=new Float32Array(s),dx[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Mn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function En(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function hf(o,t){let n=px[t];n===void 0&&(n=new Int32Array(t),px[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function oR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function lR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2fv(this.addr,t),En(n,t)}}function uR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;o.uniform3fv(this.addr,t),En(n,t)}}function cR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4fv(this.addr,t),En(n,t)}}function fR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;gx.set(a),o.uniformMatrix2fv(this.addr,!1,gx),En(n,a)}}function hR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;_x.set(a),o.uniformMatrix3fv(this.addr,!1,_x),En(n,a)}}function dR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;mx.set(a),o.uniformMatrix4fv(this.addr,!1,mx),En(n,a)}}function pR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function mR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2iv(this.addr,t),En(n,t)}}function _R(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;o.uniform3iv(this.addr,t),En(n,t)}}function gR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4iv(this.addr,t),En(n,t)}}function vR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function xR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2uiv(this.addr,t),En(n,t)}}function yR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;o.uniform3uiv(this.addr,t),En(n,t)}}function SR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4uiv(this.addr,t),En(n,t)}}function MR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(hx.compareFunction=ay,l=hx):l=Sy,n.setTexture2D(t||l,s)}function ER(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||Ey,s)}function TR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||Ty,s)}function bR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||My,s)}function AR(o){switch(o){case 5126:return oR;case 35664:return lR;case 35665:return uR;case 35666:return cR;case 35674:return fR;case 35675:return hR;case 35676:return dR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return _R;case 35669:case 35673:return gR;case 5125:return vR;case 36294:return xR;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return bR}}function RR(o,t){o.uniform1fv(this.addr,t)}function wR(o,t){const n=zo(t,this.size,2);o.uniform2fv(this.addr,n)}function CR(o,t){const n=zo(t,this.size,3);o.uniform3fv(this.addr,n)}function DR(o,t){const n=zo(t,this.size,4);o.uniform4fv(this.addr,n)}function UR(o,t){const n=zo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function LR(o,t){const n=zo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function NR(o,t){const n=zo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function OR(o,t){o.uniform1iv(this.addr,t)}function PR(o,t){o.uniform2iv(this.addr,t)}function zR(o,t){o.uniform3iv(this.addr,t)}function IR(o,t){o.uniform4iv(this.addr,t)}function BR(o,t){o.uniform1uiv(this.addr,t)}function FR(o,t){o.uniform2uiv(this.addr,t)}function HR(o,t){o.uniform3uiv(this.addr,t)}function GR(o,t){o.uniform4uiv(this.addr,t)}function VR(o,t,n){const a=this.cache,s=t.length,l=hf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||Sy,l[c])}function kR(o,t,n){const a=this.cache,s=t.length,l=hf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||Ey,l[c])}function XR(o,t,n){const a=this.cache,s=t.length,l=hf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||Ty,l[c])}function WR(o,t,n){const a=this.cache,s=t.length,l=hf(n,s);Mn(a,l)||(o.uniform1iv(this.addr,l),En(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||My,l[c])}function qR(o){switch(o){case 5126:return RR;case 35664:return wR;case 35665:return CR;case 35666:return DR;case 35674:return UR;case 35675:return LR;case 35676:return NR;case 5124:case 35670:return OR;case 35667:case 35671:return PR;case 35668:case 35672:return zR;case 35669:case 35673:return IR;case 5125:return BR;case 36294:return FR;case 36295:return HR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return WR}}class YR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=AR(n.type)}}class jR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qR(n.type)}}class ZR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function vx(o,t){o.seq.push(t),o.map[t.id]=t}function KR(o,t,n){const a=o.name,s=a.length;for(tp.lastIndex=0;;){const l=tp.exec(a),c=tp.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){vx(n,d===void 0?new YR(f,o,t):new jR(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new ZR(f),vx(n,g)),n=g}}}class qc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);KR(l,c,this)}}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function xx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const QR=37297;let JR=0;function $R(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const yx=new fe;function tw(o){we._getMatrix(yx,we.workingColorSpace,o);const t=`mat3( ${yx.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(o)){case Jc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Sx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+$R(o.getShaderSource(t),f)}else return l}function ew(o,t){const n=tw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nw(o,t){let n;switch(t){case sT:n="Linear";break;case oT:n="Reinhard";break;case lT:n="Cineon";break;case uT:n="ACESFilmic";break;case fT:n="AgX";break;case hT:n="Neutral";break;case cT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hc=new rt;function iw(){we.getLuminanceCoefficients(Hc);const o=Hc.x.toFixed(4),t=Hc.y.toFixed(4),n=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fl).join(`
`)}function rw(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function sw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function Fl(o){return o!==""}function Mx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ex(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(o){return o.replace(ow,uw)}const lw=new Map;function uw(o,t){let n=pe[t];if(n===void 0){const a=lw.get(t);if(a!==void 0)n=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Jp(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tx(o){return o.replace(cw,fw)}function fw(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function bx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function hw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===qx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===FE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(t="SHADOWMAP_TYPE_VSM"),t}function dw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case To:case bo:t="ENVMAP_TYPE_CUBE";break;case uf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bo:t="ENVMAP_MODE_REFRACTION";break}return t}function mw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Yx:t="ENVMAP_BLENDING_MULTIPLY";break;case aT:t="ENVMAP_BLENDING_MIX";break;case rT:t="ENVMAP_BLENDING_ADD";break}return t}function _w(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function gw(o,t,n,a){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=hw(n),d=dw(n),_=pw(n),g=mw(n),v=_w(n),y=aw(n),E=rw(l),M=s.createProgram();let S,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Fl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Fl).join(`
`),x.length>0&&(x+=`
`)):(S=[bx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fl).join(`
`),x=[bx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tr?"#define TONE_MAPPING":"",n.toneMapping!==Tr?pe.tonemapping_pars_fragment:"",n.toneMapping!==Tr?nw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,ew("linearToOutputTexel",n.outputColorSpace),iw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fl).join(`
`)),c=Jp(c),c=Mx(c,n),c=Ex(c,n),f=Jp(f),f=Mx(f,n),f=Ex(f,n),c=Tx(c),f=Tx(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+S+c,A=N+x+f,C=xx(s,s.VERTEX_SHADER,L),O=xx(s,s.FRAGMENT_SHADER,A);s.attachShader(M,C),s.attachShader(M,O),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(V){if(o.debug.checkShaderErrors){const X=s.getProgramInfoLog(M)||"",Q=s.getShaderInfoLog(C)||"",ot=s.getShaderInfoLog(O)||"",nt=X.trim(),I=Q.trim(),Y=ot.trim();let W=!0,_t=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,C,O);else{const z=Sx(s,C,"vertex"),J=Sx(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+nt+`
`+z+`
`+J)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(I===""||Y==="")&&(_t=!1);_t&&(V.diagnostics={runnable:W,programLog:nt,vertexShader:{log:I,prefix:S},fragmentShader:{log:Y,prefix:x}})}s.deleteShader(C),s.deleteShader(O),F=new qc(s,M),b=sw(s,M)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(M,QR)),U},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=O,this}let vw=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new yw(t),n.set(t,a)),a}}class yw{constructor(t){this.id=vw++,this.code=t,this.usedTimes=0}}function Sw(o,t,n,a,s,l,c){const f=new ly,p=new xw,d=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,U,V,X,Q){const ot=X.fog,nt=Q.geometry,I=b.isMeshStandardMaterial?X.environment:null,Y=(b.isMeshStandardMaterial?n:t).get(b.envMap||I),W=Y&&Y.mapping===uf?Y.image.height:null,_t=E[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const z=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,J=z!==void 0?z.length:0;let pt=0;nt.morphAttributes.position!==void 0&&(pt=1),nt.morphAttributes.normal!==void 0&&(pt=2),nt.morphAttributes.color!==void 0&&(pt=3);let yt,Tt,Dt,et;if(_t){const Ee=ra[_t];yt=Ee.vertexShader,Tt=Ee.fragmentShader}else yt=b.vertexShader,Tt=b.fragmentShader,p.update(b),Dt=p.getVertexShaderID(b),et=p.getFragmentShaderID(b);const mt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),jt=Q.isInstancedMesh===!0,Vt=Q.isBatchedMesh===!0,ue=!!b.map,je=!!b.matcap,H=!!Y,se=!!b.aoMap,te=!!b.lightMap,It=!!b.bumpMap,Pt=!!b.normalMap,Ve=!!b.displacementMap,kt=!!b.emissiveMap,oe=!!b.metalnessMap,Ze=!!b.roughnessMap,Ke=b.anisotropy>0,B=b.clearcoat>0,R=b.dispersion>0,it=b.iridescence>0,ft=b.sheen>0,gt=b.transmission>0,ct=Ke&&!!b.anisotropyMap,zt=B&&!!b.clearcoatMap,Rt=B&&!!b.clearcoatNormalMap,Wt=B&&!!b.clearcoatRoughnessMap,Yt=it&&!!b.iridescenceMap,St=it&&!!b.iridescenceThicknessMap,Lt=ft&&!!b.sheenColorMap,Kt=ft&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Ct=!!b.specularColorMap,le=!!b.specularIntensityMap,q=gt&&!!b.transmissionMap,bt=gt&&!!b.thicknessMap,wt=!!b.gradientMap,Bt=!!b.alphaMap,Mt=b.alphaTest>0,xt=!!b.alphaHash,Gt=!!b.extensions;let re=Tr;b.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(re=o.toneMapping);const De={shaderID:_t,shaderType:b.type,shaderName:b.name,vertexShader:yt,fragmentShader:Tt,defines:b.defines,customVertexShaderID:Dt,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&Q._colorsTexture!==null,instancing:jt,instancingColor:jt&&Q.instanceColor!==null,instancingMorph:jt&&Q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Ao,alphaToCoverage:!!b.alphaToCoverage,map:ue,matcap:je,envMap:H,envMapMode:H&&Y.mapping,envMapCubeUVHeight:W,aoMap:se,lightMap:te,bumpMap:It,normalMap:Pt,displacementMap:v&&Ve,emissiveMap:kt,normalMapObjectSpace:Pt&&b.normalMapType===_T,normalMapTangentSpace:Pt&&b.normalMapType===iy,metalnessMap:oe,roughnessMap:Ze,anisotropy:Ke,anisotropyMap:ct,clearcoat:B,clearcoatMap:zt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:R,iridescence:it,iridescenceMap:Yt,iridescenceThicknessMap:St,sheen:ft,sheenColorMap:Lt,sheenRoughnessMap:Kt,specularMap:Xt,specularColorMap:Ct,specularIntensityMap:le,transmission:gt,transmissionMap:q,thicknessMap:bt,gradientMap:wt,opaque:b.transparent===!1&&b.blending===vo&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:xt,combine:b.combine,mapUv:ue&&M(b.map.channel),aoMapUv:se&&M(b.aoMap.channel),lightMapUv:te&&M(b.lightMap.channel),bumpMapUv:It&&M(b.bumpMap.channel),normalMapUv:Pt&&M(b.normalMap.channel),displacementMapUv:Ve&&M(b.displacementMap.channel),emissiveMapUv:kt&&M(b.emissiveMap.channel),metalnessMapUv:oe&&M(b.metalnessMap.channel),roughnessMapUv:Ze&&M(b.roughnessMap.channel),anisotropyMapUv:ct&&M(b.anisotropyMap.channel),clearcoatMapUv:zt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&M(b.sheenRoughnessMap.channel),specularMapUv:Xt&&M(b.specularMap.channel),specularColorMapUv:Ct&&M(b.specularColorMap.channel),specularIntensityMapUv:le&&M(b.specularIntensityMap.channel),transmissionMapUv:q&&M(b.transmissionMap.channel),thicknessMapUv:bt&&M(b.thicknessMap.channel),alphaMapUv:Bt&&M(b.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Pt||Ke),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!nt.attributes.uv&&(ue||Bt),fog:!!ot,useFog:b.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:Q.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:pt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:ue&&b.map.isVideoTexture===!0&&we.getTransfer(b.map.colorSpace)===Ie,decodeVideoTextureEmissive:kt&&b.emissiveMap.isVideoTexture===!0&&we.getTransfer(b.emissiveMap.colorSpace)===Ie,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ia,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Vt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return De.vertexUv1s=d.has(1),De.vertexUv2s=d.has(2),De.vertexUv3s=d.has(3),d.clear(),De}function x(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)U.push(V),U.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(N(U,b),L(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function N(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function L(b,U){f.disableAll(),U.supportsVertexTextures&&f.enable(0),U.instancing&&f.enable(1),U.instancingColor&&f.enable(2),U.instancingMorph&&f.enable(3),U.matcap&&f.enable(4),U.envMap&&f.enable(5),U.normalMapObjectSpace&&f.enable(6),U.normalMapTangentSpace&&f.enable(7),U.clearcoat&&f.enable(8),U.iridescence&&f.enable(9),U.alphaTest&&f.enable(10),U.vertexColors&&f.enable(11),U.vertexAlphas&&f.enable(12),U.vertexUv1s&&f.enable(13),U.vertexUv2s&&f.enable(14),U.vertexUv3s&&f.enable(15),U.vertexTangents&&f.enable(16),U.anisotropy&&f.enable(17),U.alphaHash&&f.enable(18),U.batching&&f.enable(19),U.dispersion&&f.enable(20),U.batchingColor&&f.enable(21),U.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),U.fog&&f.enable(0),U.useFog&&f.enable(1),U.flatShading&&f.enable(2),U.logarithmicDepthBuffer&&f.enable(3),U.reversedDepthBuffer&&f.enable(4),U.skinning&&f.enable(5),U.morphTargets&&f.enable(6),U.morphNormals&&f.enable(7),U.morphColors&&f.enable(8),U.premultipliedAlpha&&f.enable(9),U.shadowMapEnabled&&f.enable(10),U.doubleSided&&f.enable(11),U.flipSided&&f.enable(12),U.useDepthPacking&&f.enable(13),U.dithering&&f.enable(14),U.transmission&&f.enable(15),U.sheen&&f.enable(16),U.opaque&&f.enable(17),U.pointsUvs&&f.enable(18),U.decodeVideoTexture&&f.enable(19),U.decodeVideoTextureEmissive&&f.enable(20),U.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const U=E[b.type];let V;if(U){const X=ra[U];V=WT.clone(X.uniforms)}else V=b.uniforms;return V}function C(b,U){let V;for(let X=0,Q=_.length;X<Q;X++){const ot=_[X];if(ot.cacheKey===U){V=ot,++V.usedTimes;break}}return V===void 0&&(V=new gw(o,U,b,l),_.push(V)),V}function O(b){if(--b.usedTimes===0){const U=_.indexOf(b);_[U]=_[_.length-1],_.pop(),b.destroy()}}function P(b){p.remove(b)}function F(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:A,acquireProgram:C,releaseProgram:O,releaseShaderCache:P,programs:_,dispose:F}}function Mw(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function Ew(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ax(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Rx(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,y,E,M,S){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:E,renderOrder:g.renderOrder,z:M,group:S},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=S),t++,x}function f(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):n.push(x)}function p(g,v,y,E,M,S){const x=c(g,v,y,E,M,S);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||Ew),a.length>1&&a.sort(v||Ax),s.length>1&&s.sort(v||Ax)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:p,finish:_,sort:d}}function Tw(){let o=new WeakMap;function t(a,s){const l=o.get(a);let c;return l===void 0?(c=new Rx,o.set(a,[c])):s>=l.length?(c=new Rx,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function bw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new Te};break;case"SpotLight":n={position:new rt,direction:new rt,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new Te,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":n={color:new Te,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[t.id]=n,n}}}function Aw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let Rw=0;function ww(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Cw(o){const t=new bw,n=Aw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new rt);const s=new rt,l=new on,c=new on;function f(d){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let y=0,E=0,M=0,S=0,x=0,N=0,L=0,A=0,C=0,O=0,P=0;d.sort(ww);for(let b=0,U=d.length;b<U;b++){const V=d[b],X=V.color,Q=V.intensity,ot=V.distance,nt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=X.r*Q,g+=X.g*Q,v+=X.b*Q;else if(V.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(V.sh.coefficients[I],Q);P++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,W=n.get(V);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,a.directionalShadow[y]=W,a.directionalShadowMap[y]=nt,a.directionalShadowMatrix[y]=V.shadow.matrix,N++}a.directional[y]=I,y++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(X).multiplyScalar(Q),I.distance=ot,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,a.spot[M]=I;const Y=V.shadow;if(V.map&&(a.spotLightMap[C]=V.map,C++,Y.updateMatrices(V),V.castShadow&&O++),a.spotLightMatrix[M]=Y.matrix,V.castShadow){const W=n.get(V);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,a.spotShadow[M]=W,a.spotShadowMap[M]=nt,A++}M++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(X).multiplyScalar(Q),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=I,S++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Y=V.shadow,W=n.get(V);W.shadowIntensity=Y.intensity,W.shadowBias=Y.bias,W.shadowNormalBias=Y.normalBias,W.shadowRadius=Y.radius,W.shadowMapSize=Y.mapSize,W.shadowCameraNear=Y.camera.near,W.shadowCameraFar=Y.camera.far,a.pointShadow[E]=W,a.pointShadowMap[E]=nt,a.pointShadowMatrix[E]=V.shadow.matrix,L++}a.point[E]=I,E++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(Q),I.groundColor.copy(V.groundColor).multiplyScalar(Q),a.hemi[x]=I,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==y||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==S||F.hemiLength!==x||F.numDirectionalShadows!==N||F.numPointShadows!==L||F.numSpotShadows!==A||F.numSpotMaps!==C||F.numLightProbes!==P)&&(a.directional.length=y,a.spot.length=M,a.rectArea.length=S,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=A+C-O,a.spotLightMap.length=C,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=P,F.directionalLength=y,F.pointLength=E,F.spotLength=M,F.rectAreaLength=S,F.hemiLength=x,F.numDirectionalShadows=N,F.numPointShadows=L,F.numSpotShadows=A,F.numSpotMaps=C,F.numLightProbes=P,a.version=Rw++)}function p(d,_){let g=0,v=0,y=0,E=0,M=0;const S=_.matrixWorldInverse;for(let x=0,N=d.length;x<N;x++){const L=d[x];if(L.isDirectionalLight){const A=a.directional[g];A.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),g++}else if(L.isSpotLight){const A=a.spot[y];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const A=a.rectArea[E];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(L.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const A=a.hemi[M];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(S),M++}}}return{setup:f,setupView:p,state:a}}function wx(o){const t=new Cw(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function Dw(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new wx(o),t.set(s,[f])):l>=c.length?(f=new wx(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lw=`uniform sampler2D shadow_pass;
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
}`;function Nw(o,t,n){let a=new Tm;const s=new be,l=new be,c=new rn,f=new e1({depthPacking:mT}),p=new n1,d={},_=n.maxTextureSize,g={[Rr]:Kn,[Kn]:Rr,[Ia]:Ia},v=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Uw,fragmentShader:Lw}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ei;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sn(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qx;let x=this.type;this.render=function(O,P,F){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),U=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),X=o.state;X.setBlending(Er),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Q=x!==Oa&&this.type===Oa,ot=x===Oa&&this.type!==Oa;for(let nt=0,I=O.length;nt<I;nt++){const Y=O[nt],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const _t=W.getFrameExtents();if(s.multiply(_t),l.copy(W.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/_t.x),s.x=l.x*_t.x,W.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/_t.y),s.y=l.y*_t.y,W.mapSize.y=l.y)),W.map===null||Q===!0||ot===!0){const J=this.type!==Oa?{minFilter:Ki,magFilter:Ki}:{};W.map!==null&&W.map.dispose(),W.map=new ms(s.x,s.y,J),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const z=W.getViewportCount();for(let J=0;J<z;J++){const pt=W.getViewport(J);c.set(l.x*pt.x,l.y*pt.y,l.x*pt.z,l.y*pt.w),X.viewport(c),W.updateMatrices(Y,J),a=W.getFrustum(),A(P,F,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Oa&&N(W,F),W.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,U,V)};function N(O,P){const F=t.update(M);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ms(s.x,s.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(P,null,F,v,M,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(P,null,F,y,M,null)}function L(O,P,F,b){let U=null;const V=F.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(V!==void 0)U=V;else if(U=F.isPointLight===!0?p:f,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const X=U.uuid,Q=P.uuid;let ot=d[X];ot===void 0&&(ot={},d[X]=ot);let nt=ot[Q];nt===void 0&&(nt=U.clone(),ot[Q]=nt,P.addEventListener("dispose",C)),U=nt}if(U.visible=P.visible,U.wireframe=P.wireframe,b===Oa?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:g[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,F.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const X=o.properties.get(U);X.light=F}return U}function A(O,P,F,b,U){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&U===Oa)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,O.matrixWorld);const Q=t.update(O),ot=O.material;if(Array.isArray(ot)){const nt=Q.groups;for(let I=0,Y=nt.length;I<Y;I++){const W=nt[I],_t=ot[W.materialIndex];if(_t&&_t.visible){const z=L(O,_t,b,U);O.onBeforeShadow(o,O,P,F,Q,z,W),o.renderBufferDirect(F,null,Q,z,O,W),O.onAfterShadow(o,O,P,F,Q,z,W)}}}else if(ot.visible){const nt=L(O,ot,b,U);O.onBeforeShadow(o,O,P,F,Q,nt,null),o.renderBufferDirect(F,null,Q,nt,O,null),O.onAfterShadow(o,O,P,F,Q,nt,null)}}const X=O.children;for(let Q=0,ot=X.length;Q<ot;Q++)A(X[Q],P,F,b,U)}function C(O){O.target.removeEventListener("dispose",C);for(const F in d){const b=d[F],U=O.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}const Ow={[fp]:hp,[dp]:_p,[pp]:gp,[Eo]:mp,[hp]:fp,[_p]:dp,[gp]:pp,[mp]:Eo};function Pw(o,t){function n(){let q=!1;const bt=new rn;let wt=null;const Bt=new rn(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!q&&(o.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,xt,Gt,re,De){De===!0&&(Mt*=re,xt*=re,Gt*=re),bt.set(Mt,xt,Gt,re),Bt.equals(bt)===!1&&(o.clearColor(Mt,xt,Gt,re),Bt.copy(bt))},reset:function(){q=!1,wt=null,Bt.set(-1,0,0,0)}}}function a(){let q=!1,bt=!1,wt=null,Bt=null,Mt=null;return{setReversed:function(xt){if(bt!==xt){const Gt=t.get("EXT_clip_control");xt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=xt;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return bt},setTest:function(xt){xt?mt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(xt){wt!==xt&&!q&&(o.depthMask(xt),wt=xt)},setFunc:function(xt){if(bt&&(xt=Ow[xt]),Bt!==xt){switch(xt){case fp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case dp:o.depthFunc(o.LESS);break;case Eo:o.depthFunc(o.LEQUAL);break;case pp:o.depthFunc(o.EQUAL);break;case mp:o.depthFunc(o.GEQUAL);break;case _p:o.depthFunc(o.GREATER);break;case gp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=xt}},setLocked:function(xt){q=xt},setClear:function(xt){Mt!==xt&&(bt&&(xt=1-xt),o.clearDepth(xt),Mt=xt)},reset:function(){q=!1,wt=null,Bt=null,Mt=null,bt=!1}}}function s(){let q=!1,bt=null,wt=null,Bt=null,Mt=null,xt=null,Gt=null,re=null,De=null;return{setTest:function(Ee){q||(Ee?mt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ee){bt!==Ee&&!q&&(o.stencilMask(Ee),bt=Ee)},setFunc:function(Ee,Hi,gn){(wt!==Ee||Bt!==Hi||Mt!==gn)&&(o.stencilFunc(Ee,Hi,gn),wt=Ee,Bt=Hi,Mt=gn)},setOp:function(Ee,Hi,gn){(xt!==Ee||Gt!==Hi||re!==gn)&&(o.stencilOp(Ee,Hi,gn),xt=Ee,Gt=Hi,re=gn)},setLocked:function(Ee){q=Ee},setClear:function(Ee){De!==Ee&&(o.clearStencil(Ee),De=Ee)},reset:function(){q=!1,bt=null,wt=null,Bt=null,Mt=null,xt=null,Gt=null,re=null,De=null}}}const l=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,N=null,L=null,A=null,C=null,O=null,P=new Te(0,0,0),F=0,b=!1,U=null,V=null,X=null,Q=null,ot=null;const nt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=Y>=2);let _t=null,z={};const J=o.getParameter(o.SCISSOR_BOX),pt=o.getParameter(o.VIEWPORT),yt=new rn().fromArray(J),Tt=new rn().fromArray(pt);function Dt(q,bt,wt,Bt){const Mt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(q,xt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<wt;Gt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return xt}const et={};et[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),mt(o.DEPTH_TEST),c.setFunc(Eo),It(!1),Pt(Cv),mt(o.CULL_FACE),se(Er);function mt(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function At(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function jt(q,bt){return g[q]!==bt?(o.bindFramebuffer(q,bt),g[q]=bt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Vt(q,bt){let wt=y,Bt=!1;if(q){wt=v.get(bt),wt===void 0&&(wt=[],v.set(bt,wt));const Mt=q.textures;if(wt.length!==Mt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Gt=Mt.length;xt<Gt;xt++)wt[xt]=o.COLOR_ATTACHMENT0+xt;wt.length=Mt.length,Bt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(wt)}function ue(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const je={[rs]:o.FUNC_ADD,[GE]:o.FUNC_SUBTRACT,[VE]:o.FUNC_REVERSE_SUBTRACT};je[kE]=o.MIN,je[XE]=o.MAX;const H={[WE]:o.ZERO,[qE]:o.ONE,[YE]:o.SRC_COLOR,[up]:o.SRC_ALPHA,[$E]:o.SRC_ALPHA_SATURATE,[QE]:o.DST_COLOR,[ZE]:o.DST_ALPHA,[jE]:o.ONE_MINUS_SRC_COLOR,[cp]:o.ONE_MINUS_SRC_ALPHA,[JE]:o.ONE_MINUS_DST_COLOR,[KE]:o.ONE_MINUS_DST_ALPHA,[tT]:o.CONSTANT_COLOR,[eT]:o.ONE_MINUS_CONSTANT_COLOR,[nT]:o.CONSTANT_ALPHA,[iT]:o.ONE_MINUS_CONSTANT_ALPHA};function se(q,bt,wt,Bt,Mt,xt,Gt,re,De,Ee){if(q===Er){M===!0&&(At(o.BLEND),M=!1);return}if(M===!1&&(mt(o.BLEND),M=!0),q!==HE){if(q!==S||Ee!==b){if((x!==rs||A!==rs)&&(o.blendEquation(o.FUNC_ADD),x=rs,A=rs),Ee)switch(q){case vo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qc:o.blendFunc(o.ONE,o.ONE);break;case Dv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Uv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case vo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Qc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}N=null,L=null,C=null,O=null,P.set(0,0,0),F=0,S=q,b=Ee}return}Mt=Mt||bt,xt=xt||wt,Gt=Gt||Bt,(bt!==x||Mt!==A)&&(o.blendEquationSeparate(je[bt],je[Mt]),x=bt,A=Mt),(wt!==N||Bt!==L||xt!==C||Gt!==O)&&(o.blendFuncSeparate(H[wt],H[Bt],H[xt],H[Gt]),N=wt,L=Bt,C=xt,O=Gt),(re.equals(P)===!1||De!==F)&&(o.blendColor(re.r,re.g,re.b,De),P.copy(re),F=De),S=q,b=!1}function te(q,bt){q.side===Ia?At(o.CULL_FACE):mt(o.CULL_FACE);let wt=q.side===Kn;bt&&(wt=!wt),It(wt),q.blending===vo&&q.transparent===!1?se(Er):se(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const Bt=q.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),kt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function It(q){U!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),U=q)}function Pt(q){q!==IE?(mt(o.CULL_FACE),q!==V&&(q===Cv?o.cullFace(o.BACK):q===BE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),V=q}function Ve(q){q!==X&&(I&&o.lineWidth(q),X=q)}function kt(q,bt,wt){q?(mt(o.POLYGON_OFFSET_FILL),(Q!==bt||ot!==wt)&&(o.polygonOffset(bt,wt),Q=bt,ot=wt)):At(o.POLYGON_OFFSET_FILL)}function oe(q){q?mt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Ze(q){q===void 0&&(q=o.TEXTURE0+nt-1),_t!==q&&(o.activeTexture(q),_t=q)}function Ke(q,bt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+nt-1:wt=_t);let Bt=z[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},z[wt]=Bt),(Bt.type!==q||Bt.texture!==bt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(q,bt||et[q]),Bt.type=q,Bt.texture=bt)}function B(){const q=z[_t];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(q){yt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),yt.copy(q))}function Kt(q){Tt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Tt.copy(q))}function Xt(q,bt){let wt=d.get(bt);wt===void 0&&(wt=new WeakMap,d.set(bt,wt));let Bt=wt.get(q);Bt===void 0&&(Bt=o.getUniformBlockIndex(bt,q.name),wt.set(q,Bt))}function Ct(q,bt){const Bt=d.get(bt).get(q);p.get(bt)!==Bt&&(o.uniformBlockBinding(bt,Bt,q.__bindingPointIndex),p.set(bt,Bt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_t=null,z={},g={},v=new WeakMap,y=[],E=null,M=!1,S=null,x=null,N=null,L=null,A=null,C=null,O=null,P=new Te(0,0,0),F=0,b=!1,U=null,V=null,X=null,Q=null,ot=null,yt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:mt,disable:At,bindFramebuffer:jt,drawBuffers:Vt,useProgram:ue,setBlending:se,setMaterial:te,setFlipSided:It,setCullFace:Pt,setLineWidth:Ve,setPolygonOffset:kt,setScissorTest:oe,activeTexture:Ze,bindTexture:Ke,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:it,texImage2D:Yt,texImage3D:St,updateUBOMapping:Xt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ft,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:zt,scissor:Lt,viewport:Kt,reset:le}}function zw(o,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new be,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,R){return y?new OffscreenCanvas(B,R):tf("canvas")}function M(B,R,it){let ft=1;const gt=Ke(B);if((gt.width>it||gt.height>it)&&(ft=it/Math.max(gt.width,gt.height)),ft<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ct=Math.floor(ft*gt.width),zt=Math.floor(ft*gt.height);g===void 0&&(g=E(ct,zt));const Rt=R?E(ct,zt):g;return Rt.width=ct,Rt.height=zt,Rt.getContext("2d").drawImage(B,0,0,ct,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ct+"x"+zt+")."),Rt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),B;return B}function S(B){return B.generateMipmaps}function x(B){o.generateMipmap(B)}function N(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(B,R,it,ft,gt=!1){if(B!==null){if(o[B]!==void 0)return o[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ct=R;if(R===o.RED&&(it===o.FLOAT&&(ct=o.R32F),it===o.HALF_FLOAT&&(ct=o.R16F),it===o.UNSIGNED_BYTE&&(ct=o.R8)),R===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.R8UI),it===o.UNSIGNED_SHORT&&(ct=o.R16UI),it===o.UNSIGNED_INT&&(ct=o.R32UI),it===o.BYTE&&(ct=o.R8I),it===o.SHORT&&(ct=o.R16I),it===o.INT&&(ct=o.R32I)),R===o.RG&&(it===o.FLOAT&&(ct=o.RG32F),it===o.HALF_FLOAT&&(ct=o.RG16F),it===o.UNSIGNED_BYTE&&(ct=o.RG8)),R===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.RG8UI),it===o.UNSIGNED_SHORT&&(ct=o.RG16UI),it===o.UNSIGNED_INT&&(ct=o.RG32UI),it===o.BYTE&&(ct=o.RG8I),it===o.SHORT&&(ct=o.RG16I),it===o.INT&&(ct=o.RG32I)),R===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),it===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),it===o.UNSIGNED_INT&&(ct=o.RGB32UI),it===o.BYTE&&(ct=o.RGB8I),it===o.SHORT&&(ct=o.RGB16I),it===o.INT&&(ct=o.RGB32I)),R===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),it===o.UNSIGNED_INT&&(ct=o.RGBA32UI),it===o.BYTE&&(ct=o.RGBA8I),it===o.SHORT&&(ct=o.RGBA16I),it===o.INT&&(ct=o.RGBA32I)),R===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),R===o.RGBA){const zt=gt?Jc:we.getTransfer(ft);it===o.FLOAT&&(ct=o.RGBA32F),it===o.HALF_FLOAT&&(ct=o.RGBA16F),it===o.UNSIGNED_BYTE&&(ct=zt===Ie?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function A(B,R){let it;return B?R===null||R===ps||R===Yl?it=o.DEPTH24_STENCIL8:R===Ba?it=o.DEPTH32F_STENCIL8:R===ql&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ps||R===Yl?it=o.DEPTH_COMPONENT24:R===Ba?it=o.DEPTH_COMPONENT32F:R===ql&&(it=o.DEPTH_COMPONENT16),it}function C(B,R){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ki&&B.minFilter!==la?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function O(B){const R=B.target;R.removeEventListener("dispose",O),F(R),R.isVideoTexture&&_.delete(R)}function P(B){const R=B.target;R.removeEventListener("dispose",P),U(R)}function F(B){const R=a.get(B);if(R.__webglInit===void 0)return;const it=B.source,ft=v.get(it);if(ft){const gt=ft[R.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&b(B),Object.keys(ft).length===0&&v.delete(it)}a.remove(B)}function b(B){const R=a.get(B);o.deleteTexture(R.__webglTexture);const it=B.source,ft=v.get(it);delete ft[R.__cacheKey],c.memory.textures--}function U(B){const R=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(R.__webglFramebuffer[ft]))for(let gt=0;gt<R.__webglFramebuffer[ft].length;gt++)o.deleteFramebuffer(R.__webglFramebuffer[ft][gt]);else o.deleteFramebuffer(R.__webglFramebuffer[ft]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[ft])}else{if(Array.isArray(R.__webglFramebuffer))for(let ft=0;ft<R.__webglFramebuffer.length;ft++)o.deleteFramebuffer(R.__webglFramebuffer[ft]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ft=0;ft<R.__webglColorRenderbuffer.length;ft++)R.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[ft]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const it=B.textures;for(let ft=0,gt=it.length;ft<gt;ft++){const ct=a.get(it[ft]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),c.memory.textures--),a.remove(it[ft])}a.remove(B)}let V=0;function X(){V=0}function Q(){const B=V;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),V+=1,B}function ot(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function nt(B,R){const it=a.get(B);if(B.isVideoTexture&&oe(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&it.__version!==B.version){const ft=B.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(it,B,R);return}}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+R)}function I(B,R){const it=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){et(it,B,R);return}n.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+R)}function Y(B,R){const it=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){et(it,B,R);return}n.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+R)}function W(B,R){const it=a.get(B);if(B.version>0&&it.__version!==B.version){mt(it,B,R);return}n.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+R)}const _t={[yp]:o.REPEAT,[os]:o.CLAMP_TO_EDGE,[Sp]:o.MIRRORED_REPEAT},z={[Ki]:o.NEAREST,[dT]:o.NEAREST_MIPMAP_NEAREST,[vc]:o.NEAREST_MIPMAP_LINEAR,[la]:o.LINEAR,[Ed]:o.LINEAR_MIPMAP_NEAREST,[ls]:o.LINEAR_MIPMAP_LINEAR},J={[gT]:o.NEVER,[ET]:o.ALWAYS,[vT]:o.LESS,[ay]:o.LEQUAL,[xT]:o.EQUAL,[MT]:o.GEQUAL,[yT]:o.GREATER,[ST]:o.NOTEQUAL};function pt(B,R){if(R.type===Ba&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===la||R.magFilter===Ed||R.magFilter===vc||R.magFilter===ls||R.minFilter===la||R.minFilter===Ed||R.minFilter===vc||R.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,_t[R.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,_t[R.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,_t[R.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,z[R.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,z[R.minFilter]),R.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,J[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ki||R.minFilter!==vc&&R.minFilter!==ls||R.type===Ba&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function yt(B,R){let it=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",O));const ft=R.source;let gt=v.get(ft);gt===void 0&&(gt={},v.set(ft,gt));const ct=ot(R);if(ct!==B.__cacheKey){gt[ct]===void 0&&(gt[ct]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,it=!0),gt[ct].usedTimes++;const zt=gt[B.__cacheKey];zt!==void 0&&(gt[B.__cacheKey].usedTimes--,zt.usedTimes===0&&b(R)),B.__cacheKey=ct,B.__webglTexture=gt[ct].texture}return it}function Tt(B,R,it){return Math.floor(Math.floor(B/it)/R)}function Dt(B,R,it,ft){const ct=B.updateRanges;if(ct.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,it,ft,R.data);else{ct.sort((St,Lt)=>St.start-Lt.start);let zt=0;for(let St=1;St<ct.length;St++){const Lt=ct[zt],Kt=ct[St],Xt=Lt.start+Lt.count,Ct=Tt(Kt.start,R.width,4),le=Tt(Lt.start,R.width,4);Kt.start<=Xt+1&&Ct===le&&Tt(Kt.start+Kt.count-1,R.width,4)===Ct?Lt.count=Math.max(Lt.count,Kt.start+Kt.count-Lt.start):(++zt,ct[zt]=Kt)}ct.length=zt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let St=0,Lt=ct.length;St<Lt;St++){const Kt=ct[St],Xt=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),le=Xt%R.width,q=Math.floor(Xt/R.width),bt=Ct,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),n.texSubImage2D(o.TEXTURE_2D,0,le,q,bt,wt,it,ft,R.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function et(B,R,it){let ft=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ft=o.TEXTURE_3D);const gt=yt(B,R),ct=R.source;n.bindTexture(ft,B.__webglTexture,o.TEXTURE0+it);const zt=a.get(ct);if(ct.version!==zt.__version||gt===!0){n.activeTexture(o.TEXTURE0+it);const Rt=we.getPrimaries(we.workingColorSpace),Wt=R.colorSpace===xr?null:we.getPrimaries(R.colorSpace),Yt=R.colorSpace===xr||Rt===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let St=M(R.image,!1,s.maxTextureSize);St=Ze(R,St);const Lt=l.convert(R.format,R.colorSpace),Kt=l.convert(R.type);let Xt=L(R.internalFormat,Lt,Kt,R.colorSpace,R.isVideoTexture);pt(ft,R);let Ct;const le=R.mipmaps,q=R.isVideoTexture!==!0,bt=zt.__version===void 0||gt===!0,wt=ct.dataReady,Bt=C(R,St);if(R.isDepthTexture)Xt=A(R.format===Zl,R.type),bt&&(q?n.texStorage2D(o.TEXTURE_2D,1,Xt,St.width,St.height):n.texImage2D(o.TEXTURE_2D,0,Xt,St.width,St.height,0,Lt,Kt,null));else if(R.isDataTexture)if(le.length>0){q&&bt&&n.texStorage2D(o.TEXTURE_2D,Bt,Xt,le[0].width,le[0].height);for(let Mt=0,xt=le.length;Mt<xt;Mt++)Ct=le[Mt],q?wt&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(o.TEXTURE_2D,Mt,Xt,Ct.width,Ct.height,0,Lt,Kt,Ct.data);R.generateMipmaps=!1}else q?(bt&&n.texStorage2D(o.TEXTURE_2D,Bt,Xt,St.width,St.height),wt&&Dt(R,St,Lt,Kt)):n.texImage2D(o.TEXTURE_2D,0,Xt,St.width,St.height,0,Lt,Kt,St.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&bt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Xt,le[0].width,le[0].height,St.depth);for(let Mt=0,xt=le.length;Mt<xt;Mt++)if(Ct=le[Mt],R.format!==Zi)if(Lt!==null)if(q){if(wt)if(R.layerUpdates.size>0){const Gt=ax(Ct.width,Ct.height,R.format,R.type);for(const re of R.layerUpdates){const De=Ct.data.subarray(re*Gt/Ct.data.BYTES_PER_ELEMENT,(re+1)*Gt/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,re,Ct.width,Ct.height,1,Lt,De)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ct.width,Ct.height,St.depth,Lt,Ct.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Xt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?wt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Ct.width,Ct.height,St.depth,Lt,Kt,Ct.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Xt,Ct.width,Ct.height,St.depth,0,Lt,Kt,Ct.data)}else{q&&bt&&n.texStorage2D(o.TEXTURE_2D,Bt,Xt,le[0].width,le[0].height);for(let Mt=0,xt=le.length;Mt<xt;Mt++)Ct=le[Mt],R.format!==Zi?Lt!==null?q?wt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Lt,Ct.data):n.compressedTexImage2D(o.TEXTURE_2D,Mt,Xt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?wt&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Lt,Kt,Ct.data):n.texImage2D(o.TEXTURE_2D,Mt,Xt,Ct.width,Ct.height,0,Lt,Kt,Ct.data)}else if(R.isDataArrayTexture)if(q){if(bt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Xt,St.width,St.height,St.depth),wt)if(R.layerUpdates.size>0){const Mt=ax(St.width,St.height,R.format,R.type);for(const xt of R.layerUpdates){const Gt=St.data.subarray(xt*Mt/St.data.BYTES_PER_ELEMENT,(xt+1)*Mt/St.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,Lt,Kt,Gt)}R.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Lt,Kt,St.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,St.width,St.height,St.depth,0,Lt,Kt,St.data);else if(R.isData3DTexture)q?(bt&&n.texStorage3D(o.TEXTURE_3D,Bt,Xt,St.width,St.height,St.depth),wt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Lt,Kt,St.data)):n.texImage3D(o.TEXTURE_3D,0,Xt,St.width,St.height,St.depth,0,Lt,Kt,St.data);else if(R.isFramebufferTexture){if(bt)if(q)n.texStorage2D(o.TEXTURE_2D,Bt,Xt,St.width,St.height);else{let Mt=St.width,xt=St.height;for(let Gt=0;Gt<Bt;Gt++)n.texImage2D(o.TEXTURE_2D,Gt,Xt,Mt,xt,0,Lt,Kt,null),Mt>>=1,xt>>=1}}else if(le.length>0){if(q&&bt){const Mt=Ke(le[0]);n.texStorage2D(o.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height)}for(let Mt=0,xt=le.length;Mt<xt;Mt++)Ct=le[Mt],q?wt&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Lt,Kt,Ct):n.texImage2D(o.TEXTURE_2D,Mt,Xt,Lt,Kt,Ct);R.generateMipmaps=!1}else if(q){if(bt){const Mt=Ke(St);n.texStorage2D(o.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height)}wt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,Kt,St)}else n.texImage2D(o.TEXTURE_2D,0,Xt,Lt,Kt,St);S(R)&&x(ft),zt.__version=ct.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function mt(B,R,it){if(R.image.length!==6)return;const ft=yt(B,R),gt=R.source;n.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+it);const ct=a.get(gt);if(gt.version!==ct.__version||ft===!0){n.activeTexture(o.TEXTURE0+it);const zt=we.getPrimaries(we.workingColorSpace),Rt=R.colorSpace===xr?null:we.getPrimaries(R.colorSpace),Wt=R.colorSpace===xr||zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Yt=R.isCompressedTexture||R.image[0].isCompressedTexture,St=R.image[0]&&R.image[0].isDataTexture,Lt=[];for(let xt=0;xt<6;xt++)!Yt&&!St?Lt[xt]=M(R.image[xt],!0,s.maxCubemapSize):Lt[xt]=St?R.image[xt].image:R.image[xt],Lt[xt]=Ze(R,Lt[xt]);const Kt=Lt[0],Xt=l.convert(R.format,R.colorSpace),Ct=l.convert(R.type),le=L(R.internalFormat,Xt,Ct,R.colorSpace),q=R.isVideoTexture!==!0,bt=ct.__version===void 0||ft===!0,wt=gt.dataReady;let Bt=C(R,Kt);pt(o.TEXTURE_CUBE_MAP,R);let Mt;if(Yt){q&&bt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,le,Kt.width,Kt.height);for(let xt=0;xt<6;xt++){Mt=Lt[xt].mipmaps;for(let Gt=0;Gt<Mt.length;Gt++){const re=Mt[Gt];R.format!==Zi?Xt!==null?q?wt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,re.width,re.height,Xt,re.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,le,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,0,0,re.width,re.height,Xt,Ct,re.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt,le,re.width,re.height,0,Xt,Ct,re.data)}}}else{if(Mt=R.mipmaps,q&&bt){Mt.length>0&&Bt++;const xt=Ke(Lt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,le,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){q?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt[xt].width,Lt[xt].height,Xt,Ct,Lt[xt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,le,Lt[xt].width,Lt[xt].height,0,Xt,Ct,Lt[xt].data);for(let Gt=0;Gt<Mt.length;Gt++){const De=Mt[Gt].image[xt].image;q?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,De.width,De.height,Xt,Ct,De.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,le,De.width,De.height,0,Xt,Ct,De.data)}}else{q?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Xt,Ct,Lt[xt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,le,Xt,Ct,Lt[xt]);for(let Gt=0;Gt<Mt.length;Gt++){const re=Mt[Gt];q?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,0,0,Xt,Ct,re.image[xt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Gt+1,le,Xt,Ct,re.image[xt])}}}S(R)&&x(o.TEXTURE_CUBE_MAP),ct.__version=gt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function At(B,R,it,ft,gt,ct){const zt=l.convert(it.format,it.colorSpace),Rt=l.convert(it.type),Wt=L(it.internalFormat,zt,Rt,it.colorSpace),Yt=a.get(R),St=a.get(it);if(St.__renderTarget=R,!Yt.__hasExternalTextures){const Lt=Math.max(1,R.width>>ct),Kt=Math.max(1,R.height>>ct);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?n.texImage3D(gt,ct,Wt,Lt,Kt,R.depth,0,zt,Rt,null):n.texImage2D(gt,ct,Wt,Lt,Kt,0,zt,Rt,null)}n.bindFramebuffer(o.FRAMEBUFFER,B),kt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,gt,St.__webglTexture,0,Ve(R)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,gt,St.__webglTexture,ct),n.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(B,R,it){if(o.bindRenderbuffer(o.RENDERBUFFER,B),R.depthBuffer){const ft=R.depthTexture,gt=ft&&ft.isDepthTexture?ft.type:null,ct=A(R.stencilBuffer,gt),zt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=Ve(R);kt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ct,R.width,R.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ct,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ct,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,B)}else{const ft=R.textures;for(let gt=0;gt<ft.length;gt++){const ct=ft[gt],zt=l.convert(ct.format,ct.colorSpace),Rt=l.convert(ct.type),Wt=L(ct.internalFormat,zt,Rt,ct.colorSpace),Yt=Ve(R);it&&kt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Wt,R.width,R.height):kt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Wt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=a.get(R.depthTexture);ft.__renderTarget=R,(!ft.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),nt(R.depthTexture,0);const gt=ft.__webglTexture,ct=Ve(R);if(R.depthTexture.format===jl)kt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,gt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,gt,0);else if(R.depthTexture.format===Zl)kt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,gt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function ue(B){const R=a.get(B),it=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const ft=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ft){const gt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ft.removeEventListener("dispose",gt)};ft.addEventListener("dispose",gt),R.__depthDisposeCallback=gt}R.__boundDepthTexture=ft}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const ft=B.texture.mipmaps;ft&&ft.length>0?Vt(R.__webglFramebuffer[0],B):Vt(R.__webglFramebuffer,B)}else if(it){R.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[ft]),R.__webglDepthbuffer[ft]===void 0)R.__webglDepthbuffer[ft]=o.createRenderbuffer(),jt(R.__webglDepthbuffer[ft],B,!1);else{const gt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,ct)}}else{const ft=B.texture.mipmaps;if(ft&&ft.length>0?n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),jt(R.__webglDepthbuffer,B,!1);else{const gt=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,ct)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function je(B,R,it){const ft=a.get(B);R!==void 0&&At(ft.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&ue(B)}function H(B){const R=B.texture,it=a.get(B),ft=a.get(R);B.addEventListener("dispose",P);const gt=B.textures,ct=B.isWebGLCubeRenderTarget===!0,zt=gt.length>1;if(zt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=R.version,c.memory.textures++),ct){it.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<R.mipmaps.length;Wt++)it.__webglFramebuffer[Rt][Wt]=o.createFramebuffer()}else it.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer=[];for(let Rt=0;Rt<R.mipmaps.length;Rt++)it.__webglFramebuffer[Rt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Rt=0,Wt=gt.length;Rt<Wt;Rt++){const Yt=a.get(gt[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),c.memory.textures++)}if(B.samples>0&&kt(B)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Rt=0;Rt<gt.length;Rt++){const Wt=gt[Rt];it.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Rt]);const Yt=l.convert(Wt.format,Wt.colorSpace),St=l.convert(Wt.type),Lt=L(Wt.internalFormat,Yt,St,Wt.colorSpace,B.isXRRenderTarget===!0),Kt=Ve(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Lt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,it.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),jt(it.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){n.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),pt(o.TEXTURE_CUBE_MAP,R);for(let Rt=0;Rt<6;Rt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Wt=0;Wt<R.mipmaps.length;Wt++)At(it.__webglFramebuffer[Rt][Wt],B,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else At(it.__webglFramebuffer[Rt],B,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(R)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Rt=0,Wt=gt.length;Rt<Wt;Rt++){const Yt=gt[Rt],St=a.get(Yt);let Lt=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Lt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Lt,St.__webglTexture),pt(Lt,Yt),At(it.__webglFramebuffer,B,Yt,o.COLOR_ATTACHMENT0+Rt,Lt,0),S(Yt)&&x(Lt)}n.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Rt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Rt,ft.__webglTexture),pt(Rt,R),R.mipmaps&&R.mipmaps.length>0)for(let Wt=0;Wt<R.mipmaps.length;Wt++)At(it.__webglFramebuffer[Wt],B,R,o.COLOR_ATTACHMENT0,Rt,Wt);else At(it.__webglFramebuffer,B,R,o.COLOR_ATTACHMENT0,Rt,0);S(R)&&x(Rt),n.unbindTexture()}B.depthBuffer&&ue(B)}function se(B){const R=B.textures;for(let it=0,ft=R.length;it<ft;it++){const gt=R[it];if(S(gt)){const ct=N(B),zt=a.get(gt).__webglTexture;n.bindTexture(ct,zt),x(ct),n.unbindTexture()}}}const te=[],It=[];function Pt(B){if(B.samples>0){if(kt(B)===!1){const R=B.textures,it=B.width,ft=B.height;let gt=o.COLOR_BUFFER_BIT;const ct=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=a.get(B),Rt=R.length>1;if(Rt)for(let Yt=0;Yt<R.length;Yt++)n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const Wt=B.texture.mipmaps;Wt&&Wt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Yt=0;Yt<R.length;Yt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Yt]);const St=a.get(R[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,it,ft,0,0,it,ft,gt,o.NEAREST),p===!0&&(te.length=0,It.length=0,te.push(o.COLOR_ATTACHMENT0+Yt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(te.push(ct),It.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,It)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,te))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<R.length;Yt++){n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Yt]);const St=a.get(R[Yt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,St,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const R=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Ve(B){return Math.min(s.maxSamples,B.samples)}function kt(B){const R=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function oe(B){const R=c.render.frame;_.get(B)!==R&&(_.set(B,R),B.update())}function Ze(B,R){const it=B.colorSpace,ft=B.format,gt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||it!==Ao&&it!==xr&&(we.getTransfer(it)===Ie?(ft!==Zi||gt!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),R}function Ke(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=X,this.setTexture2D=nt,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=je,this.setupRenderTarget=H,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=At,this.useMultisampledRTT=kt}function Iw(o,t){function n(a,s=xr){let l;const c=we.getTransfer(s);if(a===fa)return o.UNSIGNED_BYTE;if(a===gm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===vm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Qx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Jx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Zx)return o.BYTE;if(a===Kx)return o.SHORT;if(a===ql)return o.UNSIGNED_SHORT;if(a===_m)return o.INT;if(a===ps)return o.UNSIGNED_INT;if(a===Ba)return o.FLOAT;if(a===au)return o.HALF_FLOAT;if(a===$x)return o.ALPHA;if(a===ty)return o.RGB;if(a===Zi)return o.RGBA;if(a===jl)return o.DEPTH_COMPONENT;if(a===Zl)return o.DEPTH_STENCIL;if(a===ey)return o.RED;if(a===xm)return o.RED_INTEGER;if(a===ny)return o.RG;if(a===ym)return o.RG_INTEGER;if(a===Sm)return o.RGBA_INTEGER;if(a===Vc||a===kc||a===Xc||a===Wc)if(c===Ie)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Vc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===kc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Xc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Wc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Vc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===kc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Xc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Wc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Mp||a===Ep||a===Tp||a===bp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Mp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Ep)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Tp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===bp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ap||a===Rp||a===wp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Ap||a===Rp)return c===Ie?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===wp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Cp||a===Dp||a===Up||a===Lp||a===Np||a===Op||a===Pp||a===zp||a===Ip||a===Bp||a===Fp||a===Hp||a===Gp||a===Vp)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Cp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Dp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Up)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Lp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Np)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Op)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ip)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vp)return c===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===kp||a===Xp||a===Wp)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===kp)return c===Ie?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Xp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Wp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===qp||a===Yp||a===jp||a===Zp)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===qp)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Yp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===jp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Yl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
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

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new gy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ha({vertexShader:Bw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new ff(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gw extends Oo{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,y=null,E=null;const M=typeof XRWebGLBinding<"u",S=new Hw,x={},N=n.getContextAttributes();let L=null,A=null;const C=[],O=[],P=new be;let F=null;const b=new zi;b.viewport=new rn;const U=new zi;U.viewport=new rn;const V=[b,U],X=new o1;let Q=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let mt=C[et];return mt===void 0&&(mt=new qd,C[et]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(et){let mt=C[et];return mt===void 0&&(mt=new qd,C[et]=mt),mt.getGripSpace()},this.getHand=function(et){let mt=C[et];return mt===void 0&&(mt=new qd,C[et]=mt),mt.getHandSpace()};function nt(et){const mt=O.indexOf(et.inputSource);if(mt===-1)return;const At=C[mt];At!==void 0&&(At.update(et.inputSource,et.frame,d||c),At.dispatchEvent({type:et.type,data:et.inputSource}))}function I(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",Y);for(let et=0;et<C.length;et++){const mt=O[et];mt!==null&&(O[et]=null,C[et].disconnect(mt))}Q=null,ot=null,S.reset();for(const et in x)delete x[et];t.setRenderTarget(L),y=null,v=null,g=null,s=null,A=null,Dt.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){l=et,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){f=et,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",I),s.addEventListener("inputsourceschange",Y),N.xrCompatible!==!0&&await n.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,jt=null,Vt=null;N.depth&&(Vt=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=N.stencil?Zl:jl,jt=N.stencil?Yl:ps);const ue={colorFormat:n.RGBA8,depthFormat:Vt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(ue),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new ms(v.textureWidth,v.textureHeight,{format:Zi,type:fa,depthTexture:new _y(v.textureWidth,v.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(s,n,At),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new ms(y.framebufferWidth,y.framebufferHeight,{format:Zi,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Dt.setContext(s),Dt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(et){for(let mt=0;mt<et.removed.length;mt++){const At=et.removed[mt],jt=O.indexOf(At);jt>=0&&(O[jt]=null,C[jt].disconnect(At))}for(let mt=0;mt<et.added.length;mt++){const At=et.added[mt];let jt=O.indexOf(At);if(jt===-1){for(let ue=0;ue<C.length;ue++)if(ue>=O.length){O.push(At),jt=ue;break}else if(O[ue]===null){O[ue]=At,jt=ue;break}if(jt===-1)break}const Vt=C[jt];Vt&&Vt.connect(At)}}const W=new rt,_t=new rt;function z(et,mt,At){W.setFromMatrixPosition(mt.matrixWorld),_t.setFromMatrixPosition(At.matrixWorld);const jt=W.distanceTo(_t),Vt=mt.projectionMatrix.elements,ue=At.projectionMatrix.elements,je=Vt[14]/(Vt[10]-1),H=Vt[14]/(Vt[10]+1),se=(Vt[9]+1)/Vt[5],te=(Vt[9]-1)/Vt[5],It=(Vt[8]-1)/Vt[0],Pt=(ue[8]+1)/ue[0],Ve=je*It,kt=je*Pt,oe=jt/(-It+Pt),Ze=oe*-It;if(mt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ze),et.translateZ(oe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Vt[10]===-1)et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Ke=je+oe,B=H+oe,R=Ve-Ze,it=kt+(jt-Ze),ft=se*H/B*Ke,gt=te*H/B*Ke;et.projectionMatrix.makePerspective(R,it,ft,gt,Ke,B),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function J(et,mt){mt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(mt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let mt=et.near,At=et.far;S.texture!==null&&(S.depthNear>0&&(mt=S.depthNear),S.depthFar>0&&(At=S.depthFar)),X.near=U.near=b.near=mt,X.far=U.far=b.far=At,(Q!==X.near||ot!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),Q=X.near,ot=X.far),X.layers.mask=et.layers.mask|6,b.layers.mask=X.layers.mask&3,U.layers.mask=X.layers.mask&5;const jt=et.parent,Vt=X.cameras;J(X,jt);for(let ue=0;ue<Vt.length;ue++)J(Vt[ue],jt);Vt.length===2?z(X,b,U):X.projectionMatrix.copy(b.projectionMatrix),pt(et,X,jt)};function pt(et,mt,At){At===null?et.matrix.copy(mt.matrixWorld):(et.matrix.copy(At.matrixWorld),et.matrix.invert(),et.matrix.multiply(mt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(mt.projectionMatrix),et.projectionMatrixInverse.copy(mt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Kp*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(et){p=et,v!==null&&(v.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(et){return x[et]};let yt=null;function Tt(et,mt){if(_=mt.getViewerPose(d||c),E=mt,_!==null){const At=_.views;y!==null&&(t.setRenderTargetFramebuffer(A,y.framebuffer),t.setRenderTarget(A));let jt=!1;At.length!==X.cameras.length&&(X.cameras.length=0,jt=!0);for(let H=0;H<At.length;H++){const se=At[H];let te=null;if(y!==null)te=y.getViewport(se);else{const Pt=g.getViewSubImage(v,se);te=Pt.viewport,H===0&&(t.setRenderTargetTextures(A,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(A))}let It=V[H];It===void 0&&(It=new zi,It.layers.enable(H),It.viewport=new rn,V[H]=It),It.matrix.fromArray(se.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(se.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(te.x,te.y,te.width,te.height),H===0&&(X.matrix.copy(It.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),jt===!0&&X.cameras.push(It)}const Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const H=g.getDepthInformation(At[0]);H&&H.isValid&&H.texture&&S.init(H,s.renderState)}if(Vt&&Vt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let H=0;H<At.length;H++){const se=At[H].camera;if(se){let te=x[se];te||(te=new gy,x[se]=te);const It=g.getCameraImage(se);te.sourceTexture=It}}}}for(let At=0;At<C.length;At++){const jt=O[At],Vt=C[At];jt!==null&&Vt!==void 0&&Vt.update(jt,mt,d||c)}yt&&yt(et,mt),mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Dt=new yy;Dt.setAnimationLoop(Tt),this.setAnimationLoop=function(et){yt=et},this.dispose=function(){}}}const $r=new ha,Vw=new on;function kw(o,t){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function a(S,x){x.color.getRGB(S.fogColor.value,hy(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,N,L,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),_(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,A)):x.isMeshMatcapMaterial?(l(S,x),E(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),M(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?p(S,x,N,L):x.isSpriteMaterial?d(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Kn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Kn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const N=t.get(x),L=N.envMap,A=N.envMapRotation;L&&(S.envMap.value=L,$r.copy(A),$r.x*=-1,$r.y*=-1,$r.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),S.envMapRotation.value.setFromMatrix4(Vw.makeRotationFromEuler($r)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,N,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*N,S.scale.value=L*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function d(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function _(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,N){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const N=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function Xw(o,t,n,a){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const A=L.program;a.uniformBlockBinding(N,A)}function d(N,L){let A=s[N.id];A===void 0&&(E(N),A=_(N),s[N.id]=A,N.addEventListener("dispose",S));const C=L.program;a.updateUBOMapping(N,C);const O=t.render.frame;l[N.id]!==O&&(v(N),l[N.id]=O)}function _(N){const L=g();N.__bindingPointIndex=L;const A=o.createBuffer(),C=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,C,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,A),A}function g(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=s[N.id],A=N.uniforms,C=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,P=A.length;O<P;O++){const F=Array.isArray(A[O])?A[O]:[A[O]];for(let b=0,U=F.length;b<U;b++){const V=F[b];if(y(V,O,b,C)===!0){const X=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let ot=0;for(let nt=0;nt<Q.length;nt++){const I=Q[nt],Y=M(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,X+ot,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ot),ot+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,X,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,L,A,C){const O=N.value,P=L+"_"+A;if(C[P]===void 0)return typeof O=="number"||typeof O=="boolean"?C[P]=O:C[P]=O.clone(),!0;{const F=C[P];if(typeof O=="number"||typeof O=="boolean"){if(F!==O)return C[P]=O,!0}else if(F.equals(O)===!1)return F.copy(O),!0}return!1}function E(N){const L=N.uniforms;let A=0;const C=16;for(let P=0,F=L.length;P<F;P++){const b=Array.isArray(L[P])?L[P]:[L[P]];for(let U=0,V=b.length;U<V;U++){const X=b[U],Q=Array.isArray(X.value)?X.value:[X.value];for(let ot=0,nt=Q.length;ot<nt;ot++){const I=Q[ot],Y=M(I),W=A%C,_t=W%Y.boundary,z=W+_t;A+=_t,z!==0&&C-z<Y.storage&&(A+=C-z),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=A,A+=Y.storage}}}const O=A%C;return O>0&&(A+=C-O),N.__size=A,N.__cache={},this}function M(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const A=c.indexOf(L.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function x(){for(const N in s)o.deleteBuffer(s[N]);c=[],s={},l={}}return{bind:p,update:d,dispose:x}}class Ww{constructor(t={}){const{canvas:n=bT(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=c;const E=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1;this._outputColorSpace=Pi;let O=0,P=0,F=null,b=-1,U=null;const V=new rn,X=new rn;let Q=null;const ot=new Te(0);let nt=0,I=n.width,Y=n.height,W=1,_t=null,z=null;const J=new rn(0,0,I,Y),pt=new rn(0,0,I,Y);let yt=!1;const Tt=new Tm;let Dt=!1,et=!1;const mt=new on,At=new rt,jt=new rn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function je(){return F===null?W:1}let H=a;function se(D,j){return n.getContext(D,j)}try{const D={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mm}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const j="webgl2";if(H=se(j,D),H===null)throw se(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let te,It,Pt,Ve,kt,oe,Ze,Ke,B,R,it,ft,gt,ct,zt,Rt,Wt,Yt,St,Lt,Kt,Xt,Ct,le;function q(){te=new eR(H),te.init(),Xt=new Iw(H,te),It=new jA(H,te,t,Xt),Pt=new Pw(H,te),It.reversedDepthBuffer&&v&&Pt.buffers.depth.setReversed(!0),Ve=new aR(H),kt=new Mw,oe=new zw(H,te,Pt,kt,It,Xt,Ve),Ze=new KA(A),Ke=new tR(A),B=new c1(H),Ct=new qA(H,B),R=new nR(H,B,Ve,Ct),it=new sR(H,R,B,Ve),St=new rR(H,It,oe),Rt=new ZA(kt),ft=new Sw(A,Ze,Ke,te,It,Ct,Rt),gt=new kw(A,kt),ct=new Tw,zt=new Dw(te),Yt=new WA(A,Ze,Ke,Pt,it,y,p),Wt=new Nw(A,it,It),le=new Xw(H,Ve,It,Pt),Lt=new YA(H,te,Ve),Kt=new iR(H,te,Ve),Ve.programs=ft.programs,A.capabilities=It,A.extensions=te,A.properties=kt,A.renderLists=ct,A.shadowMap=Wt,A.state=Pt,A.info=Ve}q();const bt=new Gw(A,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const D=te.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=te.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(I,Y,!1))},this.getSize=function(D){return D.set(I,Y)},this.setSize=function(D,j,lt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=D,Y=j,n.width=Math.floor(D*W),n.height=Math.floor(j*W),lt===!0&&(n.style.width=D+"px",n.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(I*W,Y*W).floor()},this.setDrawingBufferSize=function(D,j,lt){I=D,Y=j,W=lt,n.width=Math.floor(D*lt),n.height=Math.floor(j*lt),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(J)},this.setViewport=function(D,j,lt,ut){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,j,lt,ut),Pt.viewport(V.copy(J).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy(pt)},this.setScissor=function(D,j,lt,ut){D.isVector4?pt.set(D.x,D.y,D.z,D.w):pt.set(D,j,lt,ut),Pt.scissor(X.copy(pt).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(D){Pt.setScissorTest(yt=D)},this.setOpaqueSort=function(D){_t=D},this.setTransparentSort=function(D){z=D},this.getClearColor=function(D){return D.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,lt=!0){let ut=0;if(D){let K=!1;if(F!==null){const Et=F.texture.format;K=Et===Sm||Et===ym||Et===xm}if(K){const Et=F.texture.type,Ut=Et===fa||Et===ps||Et===ql||Et===Yl||Et===gm||Et===vm,Ft=Yt.getClearColor(),Nt=Yt.getClearAlpha(),Jt=Ft.r,ne=Ft.g,qt=Ft.b;Ut?(E[0]=Jt,E[1]=ne,E[2]=qt,E[3]=Nt,H.clearBufferuiv(H.COLOR,0,E)):(M[0]=Jt,M[1]=ne,M[2]=qt,M[3]=Nt,H.clearBufferiv(H.COLOR,0,M))}else ut|=H.COLOR_BUFFER_BIT}j&&(ut|=H.DEPTH_BUFFER_BIT),lt&&(ut|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Mt,!1),Yt.dispose(),ct.dispose(),zt.dispose(),kt.dispose(),Ze.dispose(),Ke.dispose(),it.dispose(),Ct.dispose(),le.dispose(),ft.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",gn),bt.removeEventListener("sessionend",vn),tn.stop()};function wt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=Ve.autoReset,j=Wt.enabled,lt=Wt.autoUpdate,ut=Wt.needsUpdate,K=Wt.type;q(),Ve.autoReset=D,Wt.enabled=j,Wt.autoUpdate=lt,Wt.needsUpdate=ut,Wt.type=K}function Mt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function xt(D){const j=D.target;j.removeEventListener("dispose",xt),Gt(j)}function Gt(D){re(D),kt.remove(D)}function re(D){const j=kt.get(D).programs;j!==void 0&&(j.forEach(function(lt){ft.releaseProgram(lt)}),D.isShaderMaterial&&ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,lt,ut,K,Et){j===null&&(j=Vt);const Ut=K.isMesh&&K.matrixWorld.determinant()<0,Ft=ka(D,j,lt,ut,K);Pt.setMaterial(ut,Ut);let Nt=lt.index,Jt=1;if(ut.wireframe===!0){if(Nt=R.getWireframeAttribute(lt),Nt===void 0)return;Jt=2}const ne=lt.drawRange,qt=lt.attributes.position;let he=ne.start*Jt,Ae=(ne.start+ne.count)*Jt;Et!==null&&(he=Math.max(he,Et.start*Jt),Ae=Math.min(Ae,(Et.start+Et.count)*Jt)),Nt!==null?(he=Math.max(he,0),Ae=Math.min(Ae,Nt.count)):qt!=null&&(he=Math.max(he,0),Ae=Math.min(Ae,qt.count));const We=Ae-he;if(We<0||We===1/0)return;Ct.setup(K,ut,Ft,lt,Nt);let Ne,de=Lt;if(Nt!==null&&(Ne=B.get(Nt),de=Kt,de.setIndex(Ne)),K.isMesh)ut.wireframe===!0?(Pt.setLineWidth(ut.wireframeLinewidth*je()),de.setMode(H.LINES)):de.setMode(H.TRIANGLES);else if(K.isLine){let Qt=ut.linewidth;Qt===void 0&&(Qt=1),Pt.setLineWidth(Qt*je()),K.isLineSegments?de.setMode(H.LINES):K.isLineLoop?de.setMode(H.LINE_LOOP):de.setMode(H.LINE_STRIP)}else K.isPoints?de.setMode(H.POINTS):K.isSprite&&de.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Kl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))de.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Qt=K._multiDrawStarts,Xe=K._multiDrawCounts,ge=K._multiDrawCount,zn=Nt?B.get(Nt).bytesPerElement:1,Gi=kt.get(ut).currentProgram.getUniforms();for(let Wn=0;Wn<ge;Wn++)Gi.setValue(H,"_gl_DrawID",Wn),de.render(Qt[Wn]/zn,Xe[Wn])}else if(K.isInstancedMesh)de.renderInstances(he,We,K.count);else if(lt.isInstancedBufferGeometry){const Qt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Xe=Math.min(lt.instanceCount,Qt);de.renderInstances(he,We,Xe)}else de.render(he,We)};function De(D,j,lt){D.transparent===!0&&D.side===Ia&&D.forceSinglePass===!1?(D.side=Kn,D.needsUpdate=!0,Ji(D,j,lt),D.side=Rr,D.needsUpdate=!0,Ji(D,j,lt),D.side=Ia):Ji(D,j,lt)}this.compile=function(D,j,lt=null){lt===null&&(lt=D),x=zt.get(lt),x.init(j),L.push(x),lt.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),D!==lt&&D.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(x.pushLight(K),K.castShadow&&x.pushShadow(K))}),x.setupLights();const ut=new Set;return D.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Et=K.material;if(Et)if(Array.isArray(Et))for(let Ut=0;Ut<Et.length;Ut++){const Ft=Et[Ut];De(Ft,lt,K),ut.add(Ft)}else De(Et,lt,K),ut.add(Et)}),x=L.pop(),ut},this.compileAsync=function(D,j,lt=null){const ut=this.compile(D,j,lt);return new Promise(K=>{function Et(){if(ut.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){K(D);return}setTimeout(Et,10)}te.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ee=null;function Hi(D){Ee&&Ee(D)}function gn(){tn.stop()}function vn(){tn.start()}const tn=new yy;tn.setAnimationLoop(Hi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(D){Ee=D,bt.setAnimationLoop(D),D===null?tn.stop():tn.start()},bt.addEventListener("sessionstart",gn),bt.addEventListener("sessionend",vn),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,j,F),x=zt.get(D,L.length),x.init(j),L.push(x),mt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Tt.setFromProjectionMatrix(mt,ua,j.reversedDepth),et=this.localClippingEnabled,Dt=Rt.init(this.clippingPlanes,et),S=ct.get(D,N.length),S.init(),N.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Et=A.xr.getDepthSensingMesh();Et!==null&&Qi(Et,j,-1/0,A.sortObjects)}Qi(D,j,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(_t,z),ue=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ue&&Yt.addToRenderList(S,D),this.info.render.frame++,Dt===!0&&Rt.beginShadows();const lt=x.state.shadowsArray;Wt.render(lt,D,j),Dt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=S.opaque,K=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Et=j.cameras;if(K.length>0)for(let Ut=0,Ft=Et.length;Ut<Ft;Ut++){const Nt=Et[Ut];uu(ut,K,D,Nt)}ue&&Yt.render(D);for(let Ut=0,Ft=Et.length;Ut<Ft;Ut++){const Nt=Et[Ut];vs(S,D,Nt,Nt.viewport)}}else K.length>0&&uu(ut,K,D,j),ue&&Yt.render(D),vs(S,D,j);F!==null&&P===0&&(oe.updateMultisampleRenderTarget(F),oe.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(A,D,j),Ct.resetDefaultState(),b=-1,U=null,L.pop(),L.length>0?(x=L[L.length-1],Dt===!0&&Rt.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Qi(D,j,lt,ut){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)lt=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Tt.intersectsSprite(D)){ut&&jt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(mt);const Ut=it.update(D),Ft=D.material;Ft.visible&&S.push(D,Ut,Ft,lt,jt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Tt.intersectsObject(D))){const Ut=it.update(D),Ft=D.material;if(ut&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),jt.copy(D.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),jt.copy(Ut.boundingSphere.center)),jt.applyMatrix4(D.matrixWorld).applyMatrix4(mt)),Array.isArray(Ft)){const Nt=Ut.groups;for(let Jt=0,ne=Nt.length;Jt<ne;Jt++){const qt=Nt[Jt],he=Ft[qt.materialIndex];he&&he.visible&&S.push(D,Ut,he,lt,jt.z,qt)}}else Ft.visible&&S.push(D,Ut,Ft,lt,jt.z,null)}}const Et=D.children;for(let Ut=0,Ft=Et.length;Ut<Ft;Ut++)Qi(Et[Ut],j,lt,ut)}function vs(D,j,lt,ut){const K=D.opaque,Et=D.transmissive,Ut=D.transparent;x.setupLightsView(lt),Dt===!0&&Rt.setGlobalState(A.clippingPlanes,lt),ut&&Pt.viewport(V.copy(ut)),K.length>0&&xs(K,j,lt),Et.length>0&&xs(Et,j,lt),Ut.length>0&&xs(Ut,j,lt),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function uu(D,j,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ut.id]===void 0&&(x.state.transmissionRenderTarget[ut.id]=new ms(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?au:fa,minFilter:ls,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Et=x.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||V;Et.setSize(Ut.z*A.transmissionResolutionScale,Ut.w*A.transmissionResolutionScale);const Ft=A.getRenderTarget(),Nt=A.getActiveCubeFace(),Jt=A.getActiveMipmapLevel();A.setRenderTarget(Et),A.getClearColor(ot),nt=A.getClearAlpha(),nt<1&&A.setClearColor(16777215,.5),A.clear(),ue&&Yt.render(lt);const ne=A.toneMapping;A.toneMapping=Tr;const qt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),x.setupLightsView(ut),Dt===!0&&Rt.setGlobalState(A.clippingPlanes,ut),xs(D,lt,ut),oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et),te.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ae=0,We=j.length;Ae<We;Ae++){const Ne=j[Ae],de=Ne.object,Qt=Ne.geometry,Xe=Ne.material,ge=Ne.group;if(Xe.side===Ia&&de.layers.test(ut.layers)){const zn=Xe.side;Xe.side=Kn,Xe.needsUpdate=!0,Io(de,lt,ut,Qt,Xe,ge),Xe.side=zn,Xe.needsUpdate=!0,he=!0}}he===!0&&(oe.updateMultisampleRenderTarget(Et),oe.updateRenderTargetMipmap(Et))}A.setRenderTarget(Ft,Nt,Jt),A.setClearColor(ot,nt),qt!==void 0&&(ut.viewport=qt),A.toneMapping=ne}function xs(D,j,lt){const ut=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Et=D.length;K<Et;K++){const Ut=D[K],Ft=Ut.object,Nt=Ut.geometry,Jt=Ut.group;let ne=Ut.material;ne.allowOverride===!0&&ut!==null&&(ne=ut),Ft.layers.test(lt.layers)&&Io(Ft,j,lt,Nt,ne,Jt)}}function Io(D,j,lt,ut,K,Et){D.onBeforeRender(A,j,lt,ut,K,Et),D.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),K.onBeforeRender(A,j,lt,ut,D,Et),K.transparent===!0&&K.side===Ia&&K.forceSinglePass===!1?(K.side=Kn,K.needsUpdate=!0,A.renderBufferDirect(lt,j,ut,K,D,Et),K.side=Rr,K.needsUpdate=!0,A.renderBufferDirect(lt,j,ut,K,D,Et),K.side=Ia):A.renderBufferDirect(lt,j,ut,K,D,Et),D.onAfterRender(A,j,lt,ut,K,Et)}function Ji(D,j,lt){j.isScene!==!0&&(j=Vt);const ut=kt.get(D),K=x.state.lights,Et=x.state.shadowsArray,Ut=K.state.version,Ft=ft.getParameters(D,K.state,Et,j,lt),Nt=ft.getProgramCacheKey(Ft);let Jt=ut.programs;ut.environment=D.isMeshStandardMaterial?j.environment:null,ut.fog=j.fog,ut.envMap=(D.isMeshStandardMaterial?Ke:Ze).get(D.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Jt===void 0&&(D.addEventListener("dispose",xt),Jt=new Map,ut.programs=Jt);let ne=Jt.get(Nt);if(ne!==void 0){if(ut.currentProgram===ne&&ut.lightsStateVersion===Ut)return pa(D,Ft),ne}else Ft.uniforms=ft.getUniforms(D),D.onBeforeCompile(Ft,A),ne=ft.acquireProgram(Ft,Nt),Jt.set(Nt,ne),ut.uniforms=Ft.uniforms;const qt=ut.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qt.clippingPlanes=Rt.uniform),pa(D,Ft),ut.needsLights=Xa(D),ut.lightsStateVersion=Ut,ut.needsLights&&(qt.ambientLightColor.value=K.state.ambient,qt.lightProbe.value=K.state.probe,qt.directionalLights.value=K.state.directional,qt.directionalLightShadows.value=K.state.directionalShadow,qt.spotLights.value=K.state.spot,qt.spotLightShadows.value=K.state.spotShadow,qt.rectAreaLights.value=K.state.rectArea,qt.ltc_1.value=K.state.rectAreaLTC1,qt.ltc_2.value=K.state.rectAreaLTC2,qt.pointLights.value=K.state.point,qt.pointLightShadows.value=K.state.pointShadow,qt.hemisphereLights.value=K.state.hemi,qt.directionalShadowMap.value=K.state.directionalShadowMap,qt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,qt.spotShadowMap.value=K.state.spotShadowMap,qt.spotLightMatrix.value=K.state.spotLightMatrix,qt.spotLightMap.value=K.state.spotLightMap,qt.pointShadowMap.value=K.state.pointShadowMap,qt.pointShadowMatrix.value=K.state.pointShadowMatrix),ut.currentProgram=ne,ut.uniformsList=null,ne}function ys(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=qc.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function pa(D,j){const lt=kt.get(D);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function ka(D,j,lt,ut,K){j.isScene!==!0&&(j=Vt),oe.resetTextureUnits();const Et=j.fog,Ut=ut.isMeshStandardMaterial?j.environment:null,Ft=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ao,Nt=(ut.isMeshStandardMaterial?Ke:Ze).get(ut.envMap||Ut),Jt=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ne=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),qt=!!lt.morphAttributes.position,he=!!lt.morphAttributes.normal,Ae=!!lt.morphAttributes.color;let We=Tr;ut.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(We=A.toneMapping);const Ne=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,de=Ne!==void 0?Ne.length:0,Qt=kt.get(ut),Xe=x.state.lights;if(Dt===!0&&(et===!0||D!==U)){const en=D===U&&ut.id===b;Rt.setState(ut,D,en)}let ge=!1;ut.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Xe.state.version||Qt.outputColorSpace!==Ft||K.isBatchedMesh&&Qt.batching===!1||!K.isBatchedMesh&&Qt.batching===!0||K.isBatchedMesh&&Qt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Qt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Qt.instancing===!1||!K.isInstancedMesh&&Qt.instancing===!0||K.isSkinnedMesh&&Qt.skinning===!1||!K.isSkinnedMesh&&Qt.skinning===!0||K.isInstancedMesh&&Qt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Qt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Qt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Qt.instancingMorph===!1&&K.morphTexture!==null||Qt.envMap!==Nt||ut.fog===!0&&Qt.fog!==Et||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Rt.numPlanes||Qt.numIntersection!==Rt.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==ne||Qt.morphTargets!==qt||Qt.morphNormals!==he||Qt.morphColors!==Ae||Qt.toneMapping!==We||Qt.morphTargetsCount!==de)&&(ge=!0):(ge=!0,Qt.__version=ut.version);let zn=Qt.currentProgram;ge===!0&&(zn=Ji(ut,j,K));let Gi=!1,Wn=!1,Tn=!1;const Be=zn.getUniforms(),qn=Qt.uniforms;if(Pt.useProgram(zn.program)&&(Gi=!0,Wn=!0,Tn=!0),ut.id!==b&&(b=ut.id,Wn=!0),Gi||U!==D){Pt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Be.setValue(H,"projectionMatrix",D.projectionMatrix),Be.setValue(H,"viewMatrix",D.matrixWorldInverse);const Dn=Be.map.cameraPosition;Dn!==void 0&&Dn.setValue(H,At.setFromMatrixPosition(D.matrixWorld)),It.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Be.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),U!==D&&(U=D,Wn=!0,Tn=!0)}if(K.isSkinnedMesh){Be.setOptional(H,K,"bindMatrix"),Be.setOptional(H,K,"bindMatrixInverse");const en=K.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Be.setValue(H,"boneTexture",en.boneTexture,oe))}K.isBatchedMesh&&(Be.setOptional(H,K,"batchingTexture"),Be.setValue(H,"batchingTexture",K._matricesTexture,oe),Be.setOptional(H,K,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",K._indirectTexture,oe),Be.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",K._colorsTexture,oe));const In=lt.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&St.update(K,lt,zn),(Wn||Qt.receiveShadow!==K.receiveShadow)&&(Qt.receiveShadow=K.receiveShadow,Be.setValue(H,"receiveShadow",K.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(qn.envMap.value=Nt,qn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&j.environment!==null&&(qn.envMapIntensity.value=j.environmentIntensity),Wn&&(Be.setValue(H,"toneMappingExposure",A.toneMappingExposure),Qt.needsLights&&Ur(qn,Tn),Et&&ut.fog===!0&&gt.refreshFogUniforms(qn,Et),gt.refreshMaterialUniforms(qn,ut,W,Y,x.state.transmissionRenderTarget[D.id]),qc.upload(H,ys(Qt),qn,oe)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(qc.upload(H,ys(Qt),qn,oe),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Be.setValue(H,"center",K.center),Be.setValue(H,"modelViewMatrix",K.modelViewMatrix),Be.setValue(H,"normalMatrix",K.normalMatrix),Be.setValue(H,"modelMatrix",K.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const en=ut.uniformsGroups;for(let Dn=0,Ss=en.length;Dn<Ss;Dn++){const Qn=en[Dn];le.update(Qn,zn),le.bind(Qn,zn)}}return zn}function Ur(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Xa(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,j,lt){const ut=kt.get(D);ut.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),kt.get(D.texture).__webglTexture=j,kt.get(D.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){const lt=kt.get(D);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const fn=H.createFramebuffer();this.setRenderTarget=function(D,j=0,lt=0){F=D,O=j,P=lt;let ut=!0,K=null,Et=!1,Ut=!1;if(D){const Nt=kt.get(D);if(Nt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(H.FRAMEBUFFER,null),ut=!1;else if(Nt.__webglFramebuffer===void 0)oe.setupRenderTarget(D);else if(Nt.__hasExternalTextures)oe.rebindTextures(D,kt.get(D.texture).__webglTexture,kt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const qt=D.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&kt.has(qt)&&(D.width!==qt.image.width||D.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(D)}}const Jt=D.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ut=!0);const ne=kt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ne[j])?K=ne[j][lt]:K=ne[j],Et=!0):D.samples>0&&oe.useMultisampledRTT(D)===!1?K=kt.get(D).__webglMultisampledFramebuffer:Array.isArray(ne)?K=ne[lt]:K=ne,V.copy(D.viewport),X.copy(D.scissor),Q=D.scissorTest}else V.copy(J).multiplyScalar(W).floor(),X.copy(pt).multiplyScalar(W).floor(),Q=yt;if(lt!==0&&(K=fn),Pt.bindFramebuffer(H.FRAMEBUFFER,K)&&ut&&Pt.drawBuffers(D,K),Pt.viewport(V),Pt.scissor(X),Pt.setScissorTest(Q),Et){const Nt=kt.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,lt)}else if(Ut){const Nt=j;for(let Jt=0;Jt<D.textures.length;Jt++){const ne=kt.get(D.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,ne.__webglTexture,lt,Nt)}}else if(D!==null&&lt!==0){const Nt=kt.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,lt)}b=-1},this.readRenderTargetPixels=function(D,j,lt,ut,K,Et,Ut,Ft=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Pt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Jt=D.textures[Ft],ne=Jt.format,qt=Jt.type;if(!It.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ut&&lt>=0&&lt<=D.height-K&&(D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ft),H.readPixels(j,lt,ut,K,Xt.convert(ne),Xt.convert(qt),Et))}finally{const Jt=F!==null?kt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer(H.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(D,j,lt,ut,K,Et,Ut,Ft=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=kt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(j>=0&&j<=D.width-ut&&lt>=0&&lt<=D.height-K){Pt.bindFramebuffer(H.FRAMEBUFFER,Nt);const Jt=D.textures[Ft],ne=Jt.format,qt=Jt.type;if(!It.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ft),H.readPixels(j,lt,ut,K,Xt.convert(ne),Xt.convert(qt),0);const Ae=F!==null?kt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer(H.FRAMEBUFFER,Ae);const We=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await AT(H,We,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,he),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.deleteBuffer(he),H.deleteSync(We),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,lt=0){const ut=Math.pow(2,-lt),K=Math.floor(D.image.width*ut),Et=Math.floor(D.image.height*ut),Ut=j!==null?j.x:0,Ft=j!==null?j.y:0;oe.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,lt,0,0,Ut,Ft,K,Et),Pt.unbindTexture()};const cu=H.createFramebuffer(),fu=H.createFramebuffer();this.copyTextureToTexture=function(D,j,lt=null,ut=null,K=0,Et=null){Et===null&&(K!==0?(Kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=K,K=0):Et=0);let Ut,Ft,Nt,Jt,ne,qt,he,Ae,We;const Ne=D.isCompressedTexture?D.mipmaps[Et]:D.image;if(lt!==null)Ut=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Nt=lt.isBox3?lt.max.z-lt.min.z:1,Jt=lt.min.x,ne=lt.min.y,qt=lt.isBox3?lt.min.z:0;else{const In=Math.pow(2,-K);Ut=Math.floor(Ne.width*In),Ft=Math.floor(Ne.height*In),D.isDataArrayTexture?Nt=Ne.depth:D.isData3DTexture?Nt=Math.floor(Ne.depth*In):Nt=1,Jt=0,ne=0,qt=0}ut!==null?(he=ut.x,Ae=ut.y,We=ut.z):(he=0,Ae=0,We=0);const de=Xt.convert(j.format),Qt=Xt.convert(j.type);let Xe;j.isData3DTexture?(oe.setTexture3D(j,0),Xe=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(oe.setTexture2DArray(j,0),Xe=H.TEXTURE_2D_ARRAY):(oe.setTexture2D(j,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const ge=H.getParameter(H.UNPACK_ROW_LENGTH),zn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Wn=H.getParameter(H.UNPACK_SKIP_ROWS),Tn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ne.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ne.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jt),H.pixelStorei(H.UNPACK_SKIP_ROWS,ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt);const Be=D.isDataArrayTexture||D.isData3DTexture,qn=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const In=kt.get(D),en=kt.get(j),Dn=kt.get(In.__renderTarget),Ss=kt.get(en.__renderTarget);Pt.bindFramebuffer(H.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Pt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let Qn=0;Qn<Nt;Qn++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(D).__webglTexture,K,qt+Qn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(j).__webglTexture,Et,We+Qn)),H.blitFramebuffer(Jt,ne,Ut,Ft,he,Ae,Ut,Ft,H.DEPTH_BUFFER_BIT,H.NEAREST);Pt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||D.isRenderTargetTexture||kt.has(D)){const In=kt.get(D),en=kt.get(j);Pt.bindFramebuffer(H.READ_FRAMEBUFFER,cu),Pt.bindFramebuffer(H.DRAW_FRAMEBUFFER,fu);for(let Dn=0;Dn<Nt;Dn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,In.__webglTexture,K,qt+Dn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,In.__webglTexture,K),qn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Et,We+Dn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Et),K!==0?H.blitFramebuffer(Jt,ne,Ut,Ft,he,Ae,Ut,Ft,H.COLOR_BUFFER_BIT,H.NEAREST):qn?H.copyTexSubImage3D(Xe,Et,he,Ae,We+Dn,Jt,ne,Ut,Ft):H.copyTexSubImage2D(Xe,Et,he,Ae,Jt,ne,Ut,Ft);Pt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else qn?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Xe,Et,he,Ae,We,Ut,Ft,Nt,de,Qt,Ne.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,Et,he,Ae,We,Ut,Ft,Nt,de,Ne.data):H.texSubImage3D(Xe,Et,he,Ae,We,Ut,Ft,Nt,de,Qt,Ne):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,he,Ae,Ut,Ft,de,Qt,Ne.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,he,Ae,Ne.width,Ne.height,de,Ne.data):H.texSubImage2D(H.TEXTURE_2D,Et,he,Ae,Ut,Ft,de,Qt,Ne);H.pixelStorei(H.UNPACK_ROW_LENGTH,ge),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Wn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Tn),Et===0&&j.generateMipmaps&&H.generateMipmap(Xe),Pt.unbindTexture()},this.initRenderTarget=function(D){kt.get(D).__webglFramebuffer===void 0&&oe.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?oe.setTextureCube(D,0):D.isData3DTexture?oe.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?oe.setTexture2DArray(D,0):oe.setTexture2D(D,0),Pt.unbindTexture()},this.resetState=function(){O=0,P=0,F=null,Pt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}function Pa(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function by(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wo={duration:.5,overwrite:!1,delay:0},Cm,Pn,Ye,Ii=1e8,Ge=1/Ii,$p=Math.PI*2,qw=$p/4,Yw=0,Ay=Math.sqrt,jw=Math.cos,Zw=Math.sin,Cn=function(t){return typeof t=="string"},sn=function(t){return typeof t=="function"},Ga=function(t){return typeof t=="number"},Dm=function(t){return typeof t>"u"},da=function(t){return typeof t=="object"},ai=function(t){return t!==!1},Um=function(){return typeof window<"u"},Gc=function(t){return sn(t)||Cn(t)},Ry=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xn=Array.isArray,tm=/(?:-?\.?\d|\.)+/gi,wy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_o=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ep=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cy=/[+-]=-?[.\d]+/,Dy=/[^,'"\[\]\s]+/gi,Kw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,aa,em,Lm,Ti={},ef={},Uy,Ly=function(t){return(ef=Co(t,Ti))&&li},Nm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Ql=function(t,n){return!n&&console.warn(t)},Ny=function(t,n){return t&&(Ti[t]=n)&&ef&&(ef[t]=n)||Ti},Jl=function(){return 0},Qw={suppressEvents:!0,isStart:!0,kill:!1},Yc={suppressEvents:!0,kill:!1},Jw={suppressEvents:!0},Om={},br=[],nm={},Oy,vi={},np={},Cx=30,jc=[],Pm="",zm=function(t){var n=t[0],a,s;if(da(n)||sn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=jc.length;s--&&!jc[s].targetTest(n););a=jc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new aS(t[s],a)))||t.splice(s,1);return t},cs=function(t){return t._gsap||zm(Bi(t))[0]._gsap},Py=function(t,n,a){return(a=t[n])&&sn(a)?t[n]():Dm(a)&&t.getAttribute&&t.getAttribute(n)||a},ri=function(t,n){return(t=t.split(",")).forEach(n)||t},cn=function(t){return Math.round(t*1e5)/1e5||0},_n=function(t){return Math.round(t*1e7)/1e7||0},yo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},$w=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},nf=function(){var t=br.length,n=br.slice(0),a,s;for(nm={},br.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Im=function(t){return!!(t._initted||t._startAt||t.add)},zy=function(t,n,a,s){br.length&&!Pn&&nf(),t.render(n,a,!!(Pn&&n<0&&Im(t))),br.length&&!Pn&&nf()},Iy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(Dy).length<2?n:Cn(t)?t.trim():t},By=function(t){return t},bi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},tC=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Co=function(t,n){for(var a in n)t[a]=n[a];return t},Dx=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=da(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},af=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},Vl=function(t){var n=t.parent||Je,a=t.keyframes?tC(Xn(t.keyframes)):bi;if(ai(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},eC=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},Fy=function(t,n,a,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},df=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},wr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},fs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},nC=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},im=function(t,n,a,s){return t._startAt&&(Pn?t._startAt.revert(Yc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},iC=function o(t){return!t||t._ts&&o(t.parent)},Ux=function(t){return t._repeat?Do(t._tTime,t=t.duration()+t._rDelay)*t:0},Do=function(t,n){var a=Math.floor(t=_n(t/n));return t&&a===t?a-1:a},rf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},pf=function(t){return t._end=_n(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ge)||0))},mf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=_n(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),pf(t),a._dirty||fs(a,t)),t},Hy=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=rf(t.rawTime(),n),(!n._dur||lu(0,n.totalDuration(),a)-n._tTime>Ge)&&n.render(a,!0)),fs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Ge}},oa=function(t,n,a,s){return n.parent&&wr(n),n._start=_n((Ga(a)?a:a||t!==Je?Oi(t,a,n):t._time)+n._delay),n._end=_n(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Fy(t,n,"_first","_last",t._sort?"_start":0),am(n)||(t._recent=n),s||Hy(t,n),t._ts<0&&mf(t,t._tTime),t},Gy=function(t,n){return(Ti.ScrollTrigger||Nm("scrollTrigger",n))&&Ti.ScrollTrigger.create(n,t)},Vy=function(t,n,a,s,l){if(Fm(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!Pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Oy!==xi.frame)return br.push(t),t._lazy=[l,s],1},aC=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},am=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},rC=function(t,n,a,s){var l=t.ratio,c=n<0||!n&&(!t._start&&aC(t)&&!(!t._initted&&am(t))||(t._ts<0||t._dp._ts<0)&&!am(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=lu(0,t._tDur,n),_=Do(p,f),t._yoyo&&_&1&&(c=1-c),_!==Do(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Pn||s||t._zTime===Ge||!n&&t._zTime){if(!t._initted&&Vy(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?Ge:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&im(t,n,a,!0),t._onUpdate&&!a&&yi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&yi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&wr(t,1),!a&&!Pn&&(yi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},sC=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Uo=function(t,n,a,s){var l=t._repeat,c=_n(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:_n(c*(l+1)+t._rDelay*l):c,f>0&&!s&&mf(t,t._tTime=t._tDur*f),t.parent&&pf(t),a||fs(t.parent,t),t},Lx=function(t){return t instanceof Zn?fs(t):Uo(t,t._dur)},oC={_start:0,endTime:Jl,totalDuration:Jl},Oi=function o(t,n,a){var s=t.labels,l=t._recent||oC,c=t.duration()>=Ii?l.endTime(!1):t._dur,f,p,d;return Cn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Xn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},kl=function(t,n,a){var s=Ga(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ai(p.vars.inherit)&&p.parent;c.immediateRender=ai(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new mn(n[0],c,n[l+1])},Dr=function(t,n){return t||t===0?n(t):n},lu=function(t,n,a){return a<t?t:a>n?n:a},Vn=function(t,n){return!Cn(t)||!(n=Kw.exec(t))?"":n[1]},lC=function(t,n,a){return Dr(a,function(s){return lu(t,n,s)})},rm=[].slice,ky=function(t,n){return t&&da(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&da(t[0]))&&!t.nodeType&&t!==aa},uC=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return Cn(s)&&!n||ky(s,1)?(l=a).push.apply(l,Bi(s)):a.push(s)})||a},Bi=function(t,n,a){return Ye&&!n&&Ye.selector?Ye.selector(t):Cn(t)&&!a&&(em||!Lo())?rm.call((n||Lm).querySelectorAll(t),0):Xn(t)?uC(t,a):ky(t)?rm.call(t,0):t?[t]:[]},sm=function(t){return t=Bi(t)[0]||Ql("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Bi(n,a.querySelectorAll?a:a===t?Ql("Invalid scope")||Lm.createElement("div"):t)}},Xy=function(t){return t.sort(function(){return .5-Math.random()})},Wy=function(t){if(sn(t))return t;var n=da(t)?t:{each:t},a=hs(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return Cn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,y,E){var M=(E||n).length,S=c[M],x,N,L,A,C,O,P,F,b;if(!S){if(b=n.grid==="auto"?0:(n.grid||[1,Ii])[1],!b){for(P=-Ii;P<(P=E[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(S=c[M]=[],x=p?Math.min(b,M)*_-.5:s%b,N=b===Ii?0:p?M*g/b-.5:s/b|0,P=0,F=Ii,O=0;O<M;O++)L=O%b-x,A=N-(O/b|0),S[O]=C=d?Math.abs(d==="y"?A:L):Ay(L*L+A*A),C>P&&(P=C),C<F&&(F=C);s==="random"&&Xy(S),S.max=P-F,S.min=F,S.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:d?d==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),S.b=M<0?l-M:l,S.u=Vn(n.amount||n.each)||0,a=a&&M<0?eS(a):a}return M=(S[v]-S.min)/S.max||0,_n(S.b+(a?a(M):M)*S.v)+S.u}},om=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=_n(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Ga(a)?0:Vn(a))}},qy=function(t,n){var a=Xn(t),s,l;return!a&&da(t)&&(s=a=t.radius||Ii,t.values?(t=Bi(t.values),(l=!Ga(t[0]))&&(s*=s)):t=om(t.increment)),Dr(n,a?sn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Ii,_=0,g=t.length,v,y;g--;)l?(v=t[g].x-f,y=t[g].y-p,v=v*v+y*y):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,l||_===c||Ga(c)?_:_+Vn(c)}:om(t))},Yy=function(t,n,a,s){return Dr(Xn(t)?!n:a===!0?!!(a=0):!s,function(){return Xn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},cC=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},fC=function(t,n){return function(a){return t(parseFloat(a))+(n||Vn(a))}},hC=function(t,n,a){return Zy(t,n,0,1,a)},jy=function(t,n,a){return Dr(a,function(s){return t[~~n(s)]})},dC=function o(t,n,a){var s=n-t;return Xn(t)?jy(t,o(0,t.length),n):Dr(a,function(l){return(s+(l-t)%s)%s+t})},pC=function o(t,n,a){var s=n-t,l=s*2;return Xn(t)?jy(t,o(0,t.length-1),n):Dr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},$l=function(t){for(var n=0,a="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?Dy:tm),a+=t.substr(n,s-n)+Yy(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},Zy=function(t,n,a,s,l){var c=n-t,f=s-a;return Dr(l,function(p){return a+((p-t)/c*f||0)})},mC=function o(t,n,a,s){var l=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!l){var c=Cn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Xn(t)&&!Xn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,l=function(E){E*=g;var M=Math.min(v,~~E);return _[M](E-M)},a=n}else s||(t=Co(Xn(t)?[]:{},t));if(!_){for(p in n)Bm.call(f,t,p,"get",n[p]);l=function(E){return Vm(E,f)||(c?t.p:t)}}}return Dr(a,l)},Nx=function(t,n,a){var s=t.labels,l=Ii,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},yi=function(t,n,a){var s=t.vars,l=s[n],c=Ye,f=t._ctx,p,d,_;if(l)return p=s[n+"Params"],d=s.callbackScope||t,a&&br.length&&nf(),f&&(Ye=f),_=p?l.apply(d,p):l.call(d),Ye=c,_},Hl=function(t){return wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pn),t.progress()<1&&yi(t,"onInterrupt"),t},go,Ky=[],Qy=function(t){if(t)if(t=!t.name&&t.default||t,Um()||t.headless){var n=t.name,a=sn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:Jl,render:Vm,add:Bm,kill:UC,modifier:DC,rawVars:0},c={targetTest:0,get:0,getSetter:Gm,aliases:{},register:0};if(Lo(),t!==s){if(vi[n])return;bi(s,bi(af(t,l),c)),Co(s.prototype,Co(l,af(t,c))),vi[s.prop=n]=s,t.targetTest&&(jc.push(s),Om[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Ny(n,s),t.register&&t.register(li,s,si)}else Ky.push(t)},He=255,Gl={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},ip=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*He+.5|0},Jy=function(t,n,a){var s=t?Ga(t)?[t>>16,t>>8&He,t&He]:0:Gl.black,l,c,f,p,d,_,g,v,y,E;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Gl[t])s=Gl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&He,s&He,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&He,t&He]}else if(t.substr(0,3)==="hsl"){if(s=E=t.match(tm),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,s.length>3&&(s[3]*=1),s[0]=ip(p+1/3,l,c),s[1]=ip(p,l,c),s[2]=ip(p-1/3,l,c);else if(~t.indexOf("="))return s=t.match(wy),a&&s.length<4&&(s[3]=1),s}else s=t.match(tm)||Gl.transparent;s=s.map(Number)}return n&&!E&&(l=s[0]/He,c=s[1]/He,f=s[2]/He,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(y=g-v,d=_>.5?y/(2-g-v):y/(g+v),p=g===l?(c-f)/y+(c<f?6:0):g===c?(f-l)/y+2:(l-c)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},$y=function(t){var n=[],a=[],s=-1;return t.split(Ar).forEach(function(l){var c=l.match(_o)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},Ox=function(t,n,a){var s="",l=(t+s).match(Ar),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return t;if(l=l.map(function(v){return(v=Jy(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=$y(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Ar,"1").split(_o),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Ar),g=d.length-1;f<g;f++)s+=d[f]+l[f];return s+d[g]},Ar=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Gl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),_C=/hsl[a]?\(/,tS=function(t){var n=t.join(" "),a;if(Ar.lastIndex=0,Ar.test(n))return a=_C.test(n),t[1]=Ox(t[1],a),t[0]=Ox(t[0],a,$y(t[1])),!0},tu,xi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,c=l,f=[],p,d,_,g,v,y,E=function M(S){var x=o()-s,N=S===!0,L,A,C,O;if((x>t||x<0)&&(a+=x-n),s+=x,C=s-a,L=C-c,(L>0||N)&&(O=++g.frame,v=C-g.time*1e3,g.time=C=C/1e3,c+=L+(L>=l?4:l-L),A=1),N||(p=d(M)),A)for(y=0;y<f.length;y++)f[y](C,v,O,S)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){Uy&&(!em&&Um()&&(aa=em=window,Lm=aa.document||{},Ti.gsap=li,(aa.gsapVersions||(aa.gsapVersions=[])).push(li.version),Ly(ef||aa.GreenSockGlobals||!aa.gsap&&aa||{}),Ky.forEach(Qy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(S){return setTimeout(S,c-g.time*1e3+1|0)},tu=1,E(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),tu=0,d=Jl},lagSmoothing:function(S,x){t=S||1/0,n=Math.min(x||33,t)},fps:function(S){l=1e3/(S||240),c=g.time*1e3+l},add:function(S,x,N){var L=x?function(A,C,O,P){S(A,C,O,P),g.remove(L)}:S;return g.remove(S),f[N?"unshift":"push"](L),Lo(),L},remove:function(S,x){~(x=f.indexOf(S))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g})(),Lo=function(){return!tu&&xi.wake()},Se={},gC=/^[\d.\-M][\d.\-,\s]/,vC=/["']/g,xC=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(vC,"").trim():+d,s=p.substr(f+1).trim();return n},yC=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},SC=function(t){var n=(t+"").split("("),a=Se[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[xC(n[1])]:yC(t).split(",").map(Iy)):Se._CE&&gC.test(t)?Se._CE("",t):a},eS=function(t){return function(n){return 1-t(1-n)}},nS=function o(t,n){for(var a=t._first,s;a;)a instanceof Zn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},hs=function(t,n){return t&&(sn(t)?t:Se[t]||SC(t))||n},gs=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return ri(t,function(f){Se[f]=Ti[f]=l,Se[c=f.toLowerCase()]=a;for(var p in l)Se[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Se[f+"."+p]=l[p]}),l},iS=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},ap=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/$p*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*Zw((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:iS(f);return l=$p/l,p.config=function(d,_){return o(t,d,_)},p},rp=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:iS(a);return s.config=function(l){return o(t,l)},s};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;gs(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;gs("Elastic",ap("in"),ap("out"),ap());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};gs("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);gs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});gs("Circ",function(o){return-(Ay(1-o*o)-1)});gs("Sine",function(o){return o===1?1:-jw(o*qw)+1});gs("Back",rp("in"),rp("out"),rp());Se.SteppedEase=Se.steps=Ti.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,c=1-Ge;return function(f){return((s*lu(0,c,f)|0)+l)*a}}};wo.ease=Se["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Pm+=o+","+o+"Params,"});var aS=function(t,n){this.id=Yw++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Py,this.set=n?n.getSetter:Gm},eu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Uo(this,+n.duration,1,1),this.data=n.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),tu||xi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Uo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Lo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(mf(this,a),!l._dp||l.parent||Hy(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&oa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ge||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),zy(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Ux(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Ux(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Do(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?rf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ge?0:this._rts,this.totalTime(lu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),pf(this),nC(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&oa(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ai(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?rf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=Jw);var s=Pn;return Pn=a,Im(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Pn=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Lx(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Lx(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Oi(this,a),ai(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ai(s)),this._dur||(this._zTime=-Ge),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-Ge)},t.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(l){var c=sn(a)?a:By,f=function(){var d=s.then;s.then=null,sn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),l(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Hl(this)},o})();bi(eu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Zn=(function(o){by(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ai(a.sortChildren),Je&&oa(a.parent||Je,Pa(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&Gy(Pa(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return kl(0,arguments,this),this},n.from=function(s,l,c){return kl(1,arguments,this),this},n.fromTo=function(s,l,c,f){return kl(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,Vl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new mn(s,l,Oi(this,c),1),this},n.call=function(s,l,c){return oa(this,mn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new mn(s,c,Oi(this,p)),this},n.staggerFrom=function(s,l,c,f,p,d,_){return c.runBackwards=1,Vl(c).immediateRender=ai(c.immediateRender),this.staggerTo(s,l,c,f,p,d,_)},n.staggerFromTo=function(s,l,c,f,p,d,_,g){return f.startAt=c,Vl(f).immediateRender=ai(f.immediateRender),this.staggerTo(s,l,f,p,d,_,g)},n.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:_n(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,y,E,M,S,x,N,L,A,C,O,P;if(this!==Je&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,A=this._start,L=this._ts,x=!L,g&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,S=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,l,c);if(v=_n(_%S),_===p?(M=this._repeat,v=d):(C=_n(_/S),M=~~C,M&&M===C&&(v=d,M--),v>d&&(v=d)),C=Do(this._tTime,S),!f&&this._tTime&&C!==M&&this._tTime-C*S-this._dur<=0&&(C=M),O&&M&1&&(v=d-v,P=1),M!==C&&!this._lock){var F=O&&C&1,b=F===(O&&M&1);if(M<C&&(F=!F),f=F?0:_%d?d:_,this._lock=1,this.render(f||(P?0:_n(M*S)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,b&&(this._lock=2,f=F?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;nS(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(N=sC(this,_n(f),_n(v)),N&&(_-=v-(v=N._start))),this._tTime=_,this._time=v,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&!l&&!C&&(yi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(E=y._next,(y._act||v>=y._start)&&y._ts&&N!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,l,c),v!==this._time||!this._ts&&!x){N=0,E&&(_+=this._zTime=-Ge);break}}y=E}else{y=this._last;for(var U=s<0?s:v;y;){if(E=y._prev,(y._act||U<=y._end)&&y._ts&&N!==y){if(y.parent!==this)return this.render(s,l,c);if(y.render(y._ts>0?(U-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(U-y._start)*y._ts,l,c||Pn&&Im(y)),v!==this._time||!this._ts&&!x){N=0,E&&(_+=this._zTime=U?-Ge:Ge);break}}y=E}}if(N&&!l&&(this.pause(),N.render(v>=f?0:-Ge)._zTime=v>=f?1:-1,this._ts))return this._start=A,pf(this),this.render(s,l,c);this._onUpdate&&!l&&yi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(A===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&wr(this,1),!l&&!(s<0&&!f)&&(_||f||!p)&&(yi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Ga(l)||(l=Oi(this,l,s)),!(s instanceof eu)){if(Xn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Cn(s))return this.addLabel(s,l);if(sn(s))s=mn.delayedCall(0,s);else return this}return this!==s?oa(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ii);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof mn?l&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Cn(s)?this.removeLabel(s):sn(s)?this.killTweensOf(s):(s.parent===this&&df(this,s),s===this._recent&&(this._recent=this._last),fs(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(xi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Oi(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=mn.delayedCall(0,l||Jl,c);return f.data="isPause",this._hasPause=1,oa(this,f,Oi(this,s))},n.removePause=function(s){var l=this._first;for(s=Oi(this,s);l;)l._start===s&&l.data==="isPause"&&wr(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)yr!==f[p]&&f[p].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=Bi(s),p=this._first,d=Ga(l),_;p;)p instanceof mn?$w(p._targets,f)&&(d?(!yr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Oi(c,s),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,y,E=mn.to(c,bi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Ge,onStart:function(){if(c.pause(),!y){var S=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());E._dur!==S&&Uo(E,S,0,1).render(E._time,!0,!0),y=1}_&&_.apply(E,g||[])}},l));return v?E.render(0):E},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,bi({startAt:{time:Oi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),Nx(this,Oi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),Nx(this,Oi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ge)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=s);return fs(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),fs(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,p=Ii,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,oa(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Uo(c,c===Je&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Je._ts&&(zy(Je,rf(s,Je)),Oy=xi.frame),xi.frame>=Cx){Cx+=Mi.autoSleep||120;var l=Je._first;if((!l||!l._ts)&&Mi.autoSleep&&xi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||xi.sleep()}}},t})(eu);bi(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var MC=function(t,n,a,s,l,c,f){var p=new si(this._pt,t,n,0,1,cS,null,l),d=0,_=0,g,v,y,E,M,S,x,N;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=$l(s)),c&&(N=[a,s],c(N,t,n),a=N[0],s=N[1]),v=a.match(ep)||[];g=ep.exec(s);)E=g[0],M=s.substring(d,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),E!==v[_++]&&(S=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:S,c:E.charAt(1)==="="?yo(S,E)-S:parseFloat(E)-S,m:y&&y<4?Math.round:0},d=ep.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(Cy.test(s)||x)&&(p.e=0),this._pt=p,p},Bm=function(t,n,a,s,l,c,f,p,d,_){sn(s)&&(s=s(l||0,t,c));var g=t[n],v=a!=="get"?a:sn(g)?d?t[n.indexOf("set")||!sn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,y=sn(g)?d?RC:lS:Hm,E;if(Cn(s)&&(~s.indexOf("random(")&&(s=$l(s)),s.charAt(1)==="="&&(E=yo(v,s)+(Vn(v)||0),(E||E===0)&&(s=E))),!_||v!==s||lm)return!isNaN(v*s)&&s!==""?(E=new si(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?CC:uS,0,y),d&&(E.fp=d),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(n in t)&&Nm(n,s),MC.call(this,t,n,v,s,y,p||Mi.stringFilter,d))},EC=function(t,n,a,s,l){if(sn(t)&&(t=Xl(t,l,n,a,s)),!da(t)||t.style&&t.nodeType||Xn(t)||Ry(t))return Cn(t)?Xl(t,l,n,a,s):t;var c={},f;for(f in t)c[f]=Xl(t[f],l,n,a,s);return c},rS=function(t,n,a,s,l,c){var f,p,d,_;if(vi[t]&&(f=new vi[t]).init(l,f.rawVars?n[t]:EC(n[t],s,l,c,a),a,s,c)!==!1&&(a._pt=p=new si(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==go))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},yr,lm,Fm=function o(t,n,a){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,E=t._dur,M=t._startAt,S=t._targets,x=t.parent,N=x&&x.data==="nested"?x.vars.targets:S,L=t._overwrite==="auto"&&!Cm,A=t.timeline,C,O,P,F,b,U,V,X,Q,ot,nt,I,Y;if(A&&(!v||!l)&&(l="none"),t._ease=hs(l,wo.ease),t._yEase=g?eS(hs(g===!0?l:g,wo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!s.runBackwards,!A||v&&!s.stagger){if(X=S[0]?cs(S[0]).harness:0,I=X&&s[X.prop],C=af(s,Om),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!y?M.render(-1,!0):M.revert(_&&E?Yc:Qw),M._lazy=0),c){if(wr(t._startAt=mn.set(S,bi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ai(p),startAt:null,delay:0,onUpdate:d&&function(){return yi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Pn||!f&&!y)&&t._startAt.revert(Yc),f&&E&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&E&&!M){if(n&&(f=!1),P=bi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ai(p),immediateRender:f,stagger:0,parent:x},C),I&&(P[X.prop]=I),wr(t._startAt=mn.set(S,P)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Pn?t._startAt.revert(Yc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Ge,Ge);else if(!n)return}for(t._pt=t._ptCache=0,p=E&&ai(p)||p&&!E,O=0;O<S.length;O++){if(b=S[O],V=b._gsap||zm(S)[O]._gsap,t._ptLookup[O]=ot={},nm[V.id]&&br.length&&nf(),nt=N===S?O:N.indexOf(b),X&&(Q=new X).init(b,I||C,t,nt,N)!==!1&&(t._pt=F=new si(t._pt,b,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(W){ot[W]=F}),Q.priority&&(U=1)),!X||I)for(P in C)vi[P]&&(Q=rS(P,C,t,nt,b,N))?Q.priority&&(U=1):ot[P]=F=Bm.call(t,b,P,"get",C[P],nt,N,0,s.stringFilter);t._op&&t._op[O]&&t.kill(b,t._op[O]),L&&t._pt&&(yr=t,Je.killTweensOf(b,ot,t.globalTime(n)),Y=!t.parent,yr=0),t._pt&&p&&(nm[V.id]=1)}U&&fS(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!Y,v&&n<=0&&A.render(Ii,!0,!0)},TC=function(t,n,a,s,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return lm=1,t.vars[n]="+=0",Fm(t,f),lm=0,p?Ql(n+" not eligible for reset"):1;d.push(_)}for(y=d.length;y--;)g=d[y],_=g._pt||g,_.s=(s||s===0)&&!l?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=cn(a)+Vn(g.e)),g.b&&(g.b=_.s+Vn(g.b))},bC=function(t,n){var a=t[0]?cs(t[0]).harness:0,s=a&&a.aliases,l,c,f,p;if(!s)return n;l=Co({},n);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},AC=function(t,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(Xn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},Xl=function(t,n,a,s,l){return sn(t)?t.call(n,a,s,l):Cn(t)&&~t.indexOf("random(")?$l(t):t},sS=Pm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oS={};ri(sS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return oS[o]=1});var mn=(function(o){by(t,o);function t(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:Vl(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,y=p.overwrite,E=p.keyframes,M=p.defaults,S=p.scrollTrigger,x=p.yoyoEase,N=s.parent||Je,L=(Xn(a)||Ry(a)?Ga(a[0]):"length"in s)?[a]:Bi(a),A,C,O,P,F,b,U,V;if(f._targets=L.length?zm(L):Ql("GSAP target "+a+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,E||v||Gc(d)||Gc(_)){if(s=f.vars,A=f.timeline=new Zn({data:"nested",defaults:M||{},targets:N&&N.data==="nested"?N.vars.targets:L}),A.kill(),A.parent=A._dp=Pa(f),A._start=0,v||Gc(d)||Gc(_)){if(P=L.length,U=v&&Wy(v),da(v))for(F in v)~sS.indexOf(F)&&(V||(V={}),V[F]=v[F]);for(C=0;C<P;C++)O=af(s,oS),O.stagger=0,x&&(O.yoyoEase=x),V&&Co(O,V),b=L[C],O.duration=+Xl(d,Pa(f),C,b,L),O.delay=(+Xl(_,Pa(f),C,b,L)||0)-f._delay,!v&&P===1&&O.delay&&(f._delay=_=O.delay,f._start+=_,O.delay=0),A.to(b,O,U?U(C,b,L):0),A._ease=Se.none;A.duration()?d=_=0:f.timeline=0}else if(E){Vl(bi(A.vars.defaults,{ease:"none"})),A._ease=hs(E.ease||s.ease||"none");var X=0,Q,ot,nt;if(Xn(E))E.forEach(function(I){return A.to(L,I,">")}),A.duration();else{O={};for(F in E)F==="ease"||F==="easeEach"||AC(F,E[F],O,E.easeEach);for(F in O)for(Q=O[F].sort(function(I,Y){return I.t-Y.t}),X=0,C=0;C<Q.length;C++)ot=Q[C],nt={ease:ot.e,duration:(ot.t-(C?Q[C-1].t:0))/100*d},nt[F]=ot.v,A.to(L,nt,X),X+=nt.duration;A.duration()<d&&A.to({},{duration:d-A.duration()})}}d||f.duration(d=A.duration())}else f.timeline=0;return y===!0&&!Cm&&(yr=Pa(f),Je.killTweensOf(L),yr=0),oa(N,Pa(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!E&&f._start===_n(N._time)&&ai(g)&&iC(Pa(f))&&N.data!=="nested")&&(f._tTime=-Ge,f.render(Math.max(0,-_)||0)),S&&Gy(Pa(f),S),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-Ge&&!_?p:s<Ge?0:s,v,y,E,M,S,x,N,L,A;if(!d)rC(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,L=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,l,c);if(v=_n(g%M),g===p?(E=this._repeat,v=d):(S=_n(g/M),E=~~S,E&&E===S?(v=d,E--):v>d&&(v=d)),x=this._yoyo&&E&1,x&&(A=this._yEase,v=d-v),S=Do(this._tTime,M),v===f&&!c&&this._initted&&E===S)return this._tTime=g,this;E!==S&&(L&&this._yEase&&nS(L,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(_n(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Vy(this,_?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==S))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=N=(A||this._ease)(v/d),this._from&&(this.ratio=N=1-N),!f&&g&&!l&&!S&&(yi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(N,y.d),y=y._next;L&&L.render(s<0?s:L._dur*L._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&im(this,s,l,c),yi(this,"onUpdate")),this._repeat&&E!==S&&this.vars.onRepeat&&!l&&this.parent&&yi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&im(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&wr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(yi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,p){tu||xi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Fm(this,d),_=this._ease(d/this._dur),TC(this,s,l,c,f,_,d,p)?this.resetTo(s,l,c,f,1):(mf(this,0),this.parent||Fy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Hl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,yr&&yr.vars.overwrite!==!0)._first||Hl(this),this.parent&&c!==this.timeline.totalDuration()&&Uo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Bi(s):f,d=this._ptLookup,_=this._pt,g,v,y,E,M,S,x;if((!l||l==="all")&&eC(f,p))return l==="all"&&(this._pt=0),Hl(this);for(g=this._op=this._op||[],l!=="all"&&(Cn(l)&&(M={},ri(l,function(N){return M[N]=1}),l=M),l=bC(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,E=v,y={}):(y=g[x]=g[x]||{},E=l);for(M in E)S=v&&v[M],S&&((!("kill"in S.d)||S.d.kill(M)===!0)&&df(this,S,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&Hl(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return kl(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return kl(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Je.killTweensOf(s,l,c)},t})(eu);bi(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(o){mn[o]=function(){var t=new Zn,n=rm.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Hm=function(t,n,a){return t[n]=a},lS=function(t,n,a){return t[n](a)},RC=function(t,n,a,s){return t[n](s.fp,a)},wC=function(t,n,a){return t.setAttribute(n,a)},Gm=function(t,n){return sn(t[n])?lS:Dm(t[n])&&t.setAttribute?wC:Hm},uS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},CC=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},cS=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Vm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},DC=function(t,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,a),l=c},UC=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?df(this,n,"_pt"):n.dep||(a=1),n=s;return!a},LC=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},fS=function(t){for(var n=t._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=l},si=(function(){function o(n,a,s,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||uS,this.d=p||this,this.set=d||Hm,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=LC,this.m=a,this.mt=l,this.tween=s},o})();ri(Pm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Om[o]=1});Ti.TweenMax=Ti.TweenLite=mn;Ti.TimelineLite=Ti.TimelineMax=Zn;Je=new Zn({sortChildren:!1,defaults:wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=tS;var ds=[],Zc={},NC=[],Px=0,OC=0,sp=function(t){return(Zc[t]||NC).map(function(n){return n()})},um=function(){var t=Date.now(),n=[];t-Px>2&&(sp("matchMediaInit"),ds.forEach(function(a){var s=a.queries,l=a.conditions,c,f,p,d;for(f in s)c=aa.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),sp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Px=t,sp("matchMedia"))},hS=(function(){function o(n,a){this.selector=a&&sm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=OC++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){sn(a)&&(l=s,s=a,a=sn);var c=this,f=function(){var d=Ye,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=sm(l)),Ye=c,g=s.apply(c,arguments),sn(g)&&c._r.push(g),Ye=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===sn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=Ye;Ye=null,a(this),Ye=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof mn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Zn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof mn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=ds.length;c--;)ds[c].id===this.id&&ds.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),PC=(function(){function o(n){this.contexts=[],this.scope=n,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){da(a)||(a={matches:a});var c=new hS(0,l||this.scope),f=c.conditions={},p,d,_;Ye&&!c.selector&&(c.selector=Ye.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=aa.matchMedia(a[d]),p&&(ds.indexOf(c)<0&&ds.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(um):p.addEventListener("change",um)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),sf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return Qy(s)})},timeline:function(t){return new Zn(t)},getTweensOf:function(t,n){return Je.getTweensOf(t,n)},getProperty:function(t,n,a,s){Cn(t)&&(t=Bi(t)[0]);var l=cs(t||{}).get,c=a?By:Iy;return a==="native"&&(a=""),t&&(n?c((vi[n]&&vi[n].get||l)(t,n,a,s)):function(f,p,d){return c((vi[f]&&vi[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Bi(t),t.length>1){var s=t.map(function(_){return li.quickSetter(_,n,a)}),l=s.length;return function(_){for(var g=l;g--;)s[g](_)}}t=t[0]||{};var c=vi[n],f=cs(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;go._pt=0,g.init(t,a?_+a:_,go,0,[t]),g.render(1,g),go._pt&&Vm(1,go)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,l=li.to(t,bi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return Je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hs(t.ease,wo.ease)),Dx(wo,t||{})},config:function(t){return Dx(Mi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!vi[f]&&!Ti[f]&&Ql(n+" effect requires "+f+" plugin.")}),np[n]=function(f,p,d){return a(Bi(f),bi(p||{},l),d)},c&&(Zn.prototype[n]=function(f,p,d){return this.add(np[n](f,da(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Se[t]=hs(n)},parseEase:function(t,n){return arguments.length?hs(t,n):Se},getById:function(t){return Je.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Zn(t),s,l;for(a.smoothChildTiming=ai(t.smoothChildTiming),Je.remove(a),a._dp=0,a._time=a._tTime=Je._time,s=Je._first;s;)l=s._next,(n||!(!s._dur&&s instanceof mn&&s.vars.onComplete===s._targets[0]))&&oa(a,s,s._start-s._delay),s=l;return oa(Je,a,0),a},context:function(t,n){return t?new hS(t,n):Ye},matchMedia:function(t){return new PC(t)},matchMediaRefresh:function(){return ds.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||um()},addEventListener:function(t,n){var a=Zc[t]||(Zc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Zc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:dC,wrapYoyo:pC,distribute:Wy,random:Yy,snap:qy,normalize:hC,getUnit:Vn,clamp:lC,splitColor:Jy,toArray:Bi,selector:sm,mapRange:Zy,pipe:cC,unitize:fC,interpolate:mC,shuffle:Xy},install:Ly,effects:np,ticker:xi,updateRoot:Zn.updateRoot,plugins:vi,globalTimeline:Je,core:{PropTween:si,globals:Ny,Tween:mn,Timeline:Zn,Animation:eu,getCache:cs,_removeLinkedListItem:df,reverting:function(){return Pn},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return Cm=t}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return sf[o]=mn[o]});xi.add(Zn.updateRoot);go=sf.to({},{duration:0});var zC=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},IC=function(t,n){var a=t._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=zC(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[l],s))},op=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,d;if(Cn(l)&&(p={},ri(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}IC(f,l)}}}},li=sf.registerPlugin({name:"attr",init:function(t,n,a,s,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Pn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},op("roundProps",om),op("modifiers"),op("snap",qy))||sf;mn.version=Zn.version=li.version="3.13.0";Uy=1;Um()&&Lo();Se.Power0;Se.Power1;Se.Power2;Se.Power3;Se.Power4;Se.Linear;Se.Quad;Se.Cubic;Se.Quart;Se.Quint;Se.Strong;Se.Elastic;Se.Back;Se.SteppedEase;Se.Bounce;Se.Sine;Se.Expo;Se.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zx,Sr,So,km,us,Ix,Xm,BC=function(){return typeof window<"u"},Va={},as=180/Math.PI,Mo=Math.PI/180,po=Math.atan2,Bx=1e8,Wm=/([A-Z])/g,FC=/(left|right|width|margin|padding|x)/i,HC=/[\s,\(]\S/,ca={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},GC=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},VC=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},kC=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},dS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},pS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},XC=function(t,n,a){return t.style[n]=a},WC=function(t,n,a){return t.style.setProperty(n,a)},qC=function(t,n,a){return t._gsap[n]=a},YC=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},jC=function(t,n,a,s,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},ZC=function(t,n,a,s,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},$e="transform",oi=$e+"Origin",KC=function o(t,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(t in Va&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ca[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=za(s,f)}):this.tfm[t]=c.x?c[t]:za(s,t),t===oi&&(this.tfm.zOrigin=c.zOrigin);else return ca.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf($e)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(oi,n,"")),t=$e}(l||n)&&this.props.push(t,n,l[t])},mS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},QC=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(Wm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Xm(),(!l||!l.isStart)&&!a[$e]&&(mS(a),s.zOrigin&&a[oi]&&(a[oi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},_S=function(t,n){var a={target:t,props:[],revert:QC,save:KC};return t._gsap||li.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},gS,fm=function(t,n){var a=Sr.createElementNS?Sr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Sr.createElement(t);return a&&a.style?a:Sr.createElement(t)},Fi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Wm,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,No(n)||n,1)||""},Fx="O,Moz,ms,Ms,Webkit".split(","),No=function(t,n,a){var s=n||us,l=s.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Fx[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Fx[c]:"")+t},hm=function(){BC()&&window.document&&(zx=window,Sr=zx.document,So=Sr.documentElement,us=fm("div")||{style:{}},fm("div"),$e=No($e),oi=$e+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gS=!!No("perspective"),Xm=li.core.reverting,km=1)},Hx=function(t){var n=t.ownerSVGElement,a=fm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),So.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),So.removeChild(a),l},Gx=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},vS=function(t){var n,a;try{n=t.getBBox()}catch{n=Hx(t),a=1}return n&&(n.width||n.height)||a||(n=Hx(t)),n&&!n.width&&!n.x&&!n.y?{x:+Gx(t,["x","cx","x1"])||0,y:+Gx(t,["y","cy","y1"])||0,width:0,height:0}:n},xS=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vS(t))},_s=function(t,n){if(n){var a=t.style,s;n in Va&&n!==oi&&(n=$e),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(Wm,"-$1").toLowerCase())):a.removeAttribute(n)}},Mr=function(t,n,a,s,l,c){var f=new si(t._pt,n,a,0,1,c?pS:dS);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},Vx={deg:1,rad:1,turn:1},JC={grid:1,flex:1},Cr=function o(t,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=us.style,p=FC.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",y=s==="%",E,M,S,x;if(s===c||!l||Vx[s]||Vx[c])return l;if(c!=="px"&&!v&&(l=o(t,n,a,"px")),x=t.getCTM&&xS(t),(y||c==="%")&&(Va[n]||~n.indexOf("adius")))return E=x?t.getBBox()[p?"width":"height"]:t[_],cn(y?l/E*g:l/100*E);if(f[p?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Sr||!M.appendChild)&&(M=Sr.body),S=M._gsap,S&&y&&S.width&&p&&S.time===xi.time&&!S.uncache)return cn(l/S.width*g);if(y&&(n==="height"||n==="width")){var N=t.style[n];t.style[n]=g+s,E=t[_],N?t.style[n]=N:_s(t,n)}else(y||c==="%")&&!JC[Fi(M,"display")]&&(f.position=Fi(t,"position")),M===t&&(f.position="static"),M.appendChild(us),E=us[_],M.removeChild(us),f.position="absolute";return p&&y&&(S=cs(M),S.time=xi.time,S.width=M[_]),cn(v?E*l/g:E&&l?g/E*l:0)},za=function(t,n,a,s){var l;return km||hm(),n in ca&&n!=="transform"&&(n=ca[n],~n.indexOf(",")&&(n=n.split(",")[0])),Va[n]&&n!=="transform"?(l=iu(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:lf(Fi(t,oi))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=of[n]&&of[n](t,n,a)||Fi(t,n)||Py(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Cr(t,n,l,a)+a:l},$C=function(t,n,a,s){if(!a||a==="none"){var l=No(n,t,1),c=l&&Fi(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Fi(t,"borderTopColor"))}var f=new si(this._pt,t.style,n,0,1,cS),p=0,d=0,_,g,v,y,E,M,S,x,N,L,A,C;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Fi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=Fi(t,n)||s,M?t.style[n]=M:_s(t,n)),_=[a,s],tS(_),a=_[0],s=_[1],v=a.match(_o)||[],C=s.match(_o)||[],C.length){for(;g=_o.exec(s);)S=g[0],N=s.substring(p,g.index),E?E=(E+1)%5:(N.substr(-5)==="rgba("||N.substr(-5)==="hsla(")&&(E=1),S!==(M=v[d++]||"")&&(y=parseFloat(M)||0,A=M.substr((y+"").length),S.charAt(1)==="="&&(S=yo(y,S)+A),x=parseFloat(S),L=S.substr((x+"").length),p=_o.lastIndex-L.length,L||(L=L||Mi.units[n]||A,p===s.length&&(s+=L,f.e+=L)),A!==L&&(y=Cr(t,n,M,L)||0),f._pt={_next:f._pt,p:N||d===1?N:",",s:y,c:x-y,m:E&&E<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?pS:dS;return Cy.test(s)&&(f.e=0),this._pt=f,f},kx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},t2=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=kx[a]||a,n[1]=kx[s]||s,n.join(" ")},e2=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Va[f]&&(p=1,f=f==="transformOrigin"?oi:$e),_s(a,f);p&&(_s(a,$e),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",iu(a,1),c.uncache=1,mS(s)))}},of={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var c=t._pt=new si(t._pt,n,a,0,0,e2);return c.u=s,c.pr=-10,c.tween=l,t._props.push(a),1}}},nu=[1,0,0,1,0,0],yS={},SS=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Xx=function(t){var n=Fi(t,$e);return SS(n)?nu:n.substr(7).match(wy).map(cn)},qm=function(t,n){var a=t._gsap||cs(t),s=t.style,l=Xx(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?nu:l):(l===nu&&!t.offsetParent&&t!==So&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,So.appendChild(t)),l=Xx(t),p?s.display=p:_s(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):So.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},dm=function(t,n,a,s,l,c){var f=t._gsap,p=l||qm(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=p[0],E=p[1],M=p[2],S=p[3],x=p[4],N=p[5],L=n.split(" "),A=parseFloat(L[0])||0,C=parseFloat(L[1])||0,O,P,F,b;a?p!==nu&&(P=y*S-E*M)&&(F=A*(S/P)+C*(-M/P)+(M*N-S*x)/P,b=A*(-E/P)+C*(y/P)-(y*N-E*x)/P,A=F,C=b):(O=vS(t),A=O.x+(~L[0].indexOf("%")?A/100*O.width:A),C=O.y+(~(L[1]||L[0]).indexOf("%")?C/100*O.height:C)),s||s!==!1&&f.smooth?(x=A-d,N=C-_,f.xOffset=g+(x*y+N*M)-x,f.yOffset=v+(x*E+N*S)-N):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=C,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[oi]="0px 0px",c&&(Mr(c,f,"xOrigin",d,A),Mr(c,f,"yOrigin",_,C),Mr(c,f,"xOffset",g,f.xOffset),Mr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+C)},iu=function(t,n){var a=t._gsap||new aS(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Fi(t,oi)||"0",_,g,v,y,E,M,S,x,N,L,A,C,O,P,F,b,U,V,X,Q,ot,nt,I,Y,W,_t,z,J,pt,yt,Tt,Dt;return _=g=v=M=S=x=N=L=A=0,y=E=1,a.svg=!!(t.getCTM&&xS(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[$e]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[$e]!=="none"?p[$e]:"")),s.scale=s.rotate=s.translate="none"),P=qm(t,a.svg),a.svg&&(a.uncache?(W=t.getBBox(),d=a.xOrigin-W.x+"px "+(a.yOrigin-W.y)+"px",Y=""):Y=!n&&t.getAttribute("data-svg-origin"),dm(t,Y||d,!!Y||a.originIsAbsolute,a.smooth!==!1,P)),C=a.xOrigin||0,O=a.yOrigin||0,P!==nu&&(V=P[0],X=P[1],Q=P[2],ot=P[3],_=nt=P[4],g=I=P[5],P.length===6?(y=Math.sqrt(V*V+X*X),E=Math.sqrt(ot*ot+Q*Q),M=V||X?po(X,V)*as:0,N=Q||ot?po(Q,ot)*as+M:0,N&&(E*=Math.abs(Math.cos(N*Mo))),a.svg&&(_-=C-(C*V+O*Q),g-=O-(C*X+O*ot))):(Dt=P[6],yt=P[7],z=P[8],J=P[9],pt=P[10],Tt=P[11],_=P[12],g=P[13],v=P[14],F=po(Dt,pt),S=F*as,F&&(b=Math.cos(-F),U=Math.sin(-F),Y=nt*b+z*U,W=I*b+J*U,_t=Dt*b+pt*U,z=nt*-U+z*b,J=I*-U+J*b,pt=Dt*-U+pt*b,Tt=yt*-U+Tt*b,nt=Y,I=W,Dt=_t),F=po(-Q,pt),x=F*as,F&&(b=Math.cos(-F),U=Math.sin(-F),Y=V*b-z*U,W=X*b-J*U,_t=Q*b-pt*U,Tt=ot*U+Tt*b,V=Y,X=W,Q=_t),F=po(X,V),M=F*as,F&&(b=Math.cos(F),U=Math.sin(F),Y=V*b+X*U,W=nt*b+I*U,X=X*b-V*U,I=I*b-nt*U,V=Y,nt=W),S&&Math.abs(S)+Math.abs(M)>359.9&&(S=M=0,x=180-x),y=cn(Math.sqrt(V*V+X*X+Q*Q)),E=cn(Math.sqrt(I*I+Dt*Dt)),F=po(nt,I),N=Math.abs(F)>2e-4?F*as:0,A=Tt?1/(Tt<0?-Tt:Tt):0),a.svg&&(Y=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!SS(Fi(t,$e)),Y&&t.setAttribute("transform",Y))),Math.abs(N)>90&&Math.abs(N)<270&&(l?(y*=-1,N+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,N+=N<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=cn(y),a.scaleY=cn(E),a.rotation=cn(M)+f,a.rotationX=cn(S)+f,a.rotationY=cn(x)+f,a.skewX=N+f,a.skewY=L+f,a.transformPerspective=A+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[oi]=lf(d)),a.xOffset=a.yOffset=0,a.force3D=Mi.force3D,a.renderTransform=a.svg?i2:gS?MS:n2,a.uncache=0,a},lf=function(t){return(t=t.split(" "))[0]+" "+t[1]},lp=function(t,n,a){var s=Vn(n);return cn(parseFloat(n)+parseFloat(Cr(t,"x",a+"px",s)))+s},n2=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,MS(t,n)},ts="0deg",Il="0px",es=") ",MS=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,E=a.scaleX,M=a.scaleY,S=a.transformPerspective,x=a.force3D,N=a.target,L=a.zOrigin,A="",C=x==="auto"&&t&&t!==1||x===!0;if(L&&(g!==ts||_!==ts)){var O=parseFloat(_)*Mo,P=Math.sin(O),F=Math.cos(O),b;O=parseFloat(g)*Mo,b=Math.cos(O),c=lp(N,c,P*b*-L),f=lp(N,f,-Math.sin(O)*-L),p=lp(N,p,F*b*-L+L)}S!==Il&&(A+="perspective("+S+es),(s||l)&&(A+="translate("+s+"%, "+l+"%) "),(C||c!==Il||f!==Il||p!==Il)&&(A+=p!==Il||C?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+es),d!==ts&&(A+="rotate("+d+es),_!==ts&&(A+="rotateY("+_+es),g!==ts&&(A+="rotateX("+g+es),(v!==ts||y!==ts)&&(A+="skew("+v+", "+y+es),(E!==1||M!==1)&&(A+="scale("+E+", "+M+es),N.style[$e]=A||"translate(0, 0)"},i2=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,E=a.xOrigin,M=a.yOrigin,S=a.xOffset,x=a.yOffset,N=a.forceCSS,L=parseFloat(c),A=parseFloat(f),C,O,P,F,b;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Mo,d*=Mo,C=Math.cos(p)*g,O=Math.sin(p)*g,P=Math.sin(p-d)*-v,F=Math.cos(p-d)*v,d&&(_*=Mo,b=Math.tan(d-_),b=Math.sqrt(1+b*b),P*=b,F*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),C*=b,O*=b)),C=cn(C),O=cn(O),P=cn(P),F=cn(F)):(C=g,F=v,O=P=0),(L&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(L=Cr(y,"x",c,"px"),A=Cr(y,"y",f,"px")),(E||M||S||x)&&(L=cn(L+E-(E*C+M*P)+S),A=cn(A+M-(E*O+M*F)+x)),(s||l)&&(b=y.getBBox(),L=cn(L+s/100*b.width),A=cn(A+l/100*b.height)),b="matrix("+C+","+O+","+P+","+F+","+L+","+A+")",y.setAttribute("transform",b),N&&(y.style[$e]=b)},a2=function(t,n,a,s,l){var c=360,f=Cn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?as:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*Bx)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*Bx)%c-~~(d/c)*c)),t._pt=v=new si(t._pt,n,a,s,d,GC),v.e=_,v.u="deg",t._props.push(a),v},Wx=function(t,n){for(var a in n)t[a]=n[a];return t},r2=function(t,n,a){var s=Wx({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,y,E;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[$e]=n,f=iu(a,1),_s(a,$e),a.setAttribute("transform",d)):(d=getComputedStyle(a)[$e],c[$e]=n,f=iu(a,1),c[$e]=d);for(p in Va)d=s[p],_=f[p],d!==_&&l.indexOf(p)<0&&(y=Vn(d),E=Vn(_),g=y!==E?Cr(a,p,d,E):parseFloat(d),v=parseFloat(_),t._pt=new si(t._pt,f,p,g,v-g,cm),t._pt.u=E||0,t._props.push(p));Wx(f,s)};ri("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",c=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});of[t>1?"border"+o:o]=function(f,p,d,_,g){var v,y;if(arguments.length<4)return v=c.map(function(E){return za(f,E,d)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(E,M){return y[E]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,y,g)}});var ES={name:"css",register:hm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,y,E,M,S,x,N,L,A,C,O,P,F;km||hm(),this.styles=this.styles||_S(t),F=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(vi[M]&&rS(M,n,a,s,t,l)))){if(y=typeof _,E=of[M],y==="function"&&(_=_.call(a,s,t,l),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=$l(_)),E)E(this,t,M,_,a)&&(P=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Ar.lastIndex=0,Ar.test(d)||(S=Vn(d),x=Vn(_)),x?S!==x&&(d=Cr(t,M,d,x)+x):S&&(_+=S),this.add(f,"setProperty",d,_,s,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(y!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,s,t,l):p[M],Cn(d)&&~d.indexOf("random(")&&(d=$l(d)),Vn(d+"")||d==="auto"||(d+=Mi.units[M]||Vn(za(t,M))||""),(d+"").charAt(1)==="="&&(d=za(t,M))):d=za(t,M),v=parseFloat(d),N=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),N&&(_=_.substr(2)),g=parseFloat(_),M in ca&&(M==="autoAlpha"&&(v===1&&za(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),Mr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ca[M],~M.indexOf(",")&&(M=M.split(",")[0]))),L=M in Va,L){if(this.styles.save(M),y==="string"&&_.substring(0,6)==="var(--"&&(_=Fi(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),A||(C=t._gsap,C.renderTransform&&!n.parseTransform||iu(t,n.parseTransform),O=n.smoothOrigin!==!1&&C.smooth,A=this._pt=new si(this._pt,f,$e,0,1,C.renderTransform,C,0,-1),A.dep=1),M==="scale")this._pt=new si(this._pt,C,"scaleY",C.scaleY,(N?yo(C.scaleY,N+g):g)-C.scaleY||0,cm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(oi,0,f[oi]),_=t2(_),C.svg?dm(t,_,0,O,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==C.zOrigin&&Mr(this,C,"zOrigin",C.zOrigin,x),Mr(this,f,M,lf(d),lf(_)));continue}else if(M==="svgOrigin"){dm(t,_,1,O,0,this);continue}else if(M in yS){a2(this,C,M,v,N?yo(v,N+_):_);continue}else if(M==="smoothOrigin"){Mr(this,C,"smooth",C.smooth,_);continue}else if(M==="force3D"){C[M]=_;continue}else if(M==="transform"){r2(this,_,t);continue}}else M in f||(M=No(M)||M);if(L||(g||g===0)&&(v||v===0)&&!HC.test(_)&&M in f)S=(d+"").substr((v+"").length),g||(g=0),x=Vn(_)||(M in Mi.units?Mi.units[M]:S),S!==x&&(v=Cr(t,M,d,x)),this._pt=new si(this._pt,L?C:f,M,v,(N?yo(v,N+g):g)-v,!L&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?kC:cm),this._pt.u=x||0,S!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=VC);else if(M in f)$C.call(this,t,M,d,N?N+_:_);else if(M in t)this.add(t,M,d||t[M],N?N+_:_,s,l);else if(M!=="parseTransform"){Nm(M,_);continue}L||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,d||t[M])),c.push(M)}}P&&fS(this)},render:function(t,n){if(n.tween._time||!Xm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:za,aliases:ca,getSetter:function(t,n,a){var s=ca[n];return s&&s.indexOf(",")<0&&(n=s),n in Va&&n!==oi&&(t._gsap.x||za(t,"x"))?a&&Ix===a?n==="scale"?YC:qC:(Ix=a||{})&&(n==="scale"?jC:ZC):t.style&&!Dm(t.style[n])?XC:~n.indexOf("-")?WC:Gm(t,n)},core:{_removeProperty:_s,_getMatrix:qm}};li.utils.checkPrefix=No;li.core.getStyleSaver=_S;(function(o,t,n,a){var s=ri(o+","+t+","+n,function(l){Va[l]=1});ri(t,function(l){Mi.units[l]="deg",yS[l]=1}),ca[s[13]]=o+","+t,ri(a,function(l){var c=l.split(":");ca[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Mi.units[o]="px"});li.registerPlugin(ES);var Kc=li.registerPlugin(ES)||li;Kc.core.Tween;function s2(){const o=Wl.useRef(null);return Wl.useEffect(()=>{const t=o.current,n=t.clientWidth,a=t.clientHeight,s=new QT,l=new zi(45,n/a,.1,1e3);l.position.z=5;const c=new Ww({antialias:!0,alpha:!0});c.setSize(n,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0),t.appendChild(c.domElement);const f=new Bl;s.add(f);const p=new ex({color:8956671,metalness:.7,roughness:.2,transparent:!0,opacity:.8,emissive:8772,emissiveIntensity:.1}),d=new Am(.2,.35,16),_=new Sn(d,p);_.position.x=-1.2,f.add(_);const g=new sa(.1,.4,.1),v=new Sn(g,p);v.position.set(-.4,.2,0),v.rotation.z=Math.PI/4,f.add(v);const y=new Sn(g,p);y.position.set(-.4,.2,0),y.rotation.z=-Math.PI/4,f.add(y);const E=new Sn(new sa(.1,.3,.1),p);E.position.set(-.4,-.15,0),f.add(E);const M=new sa(.5,.1,.1),S=new Sn(M,p);S.position.x=.4,S.rotation.z=Math.PI/4,f.add(S);const x=new Sn(M,p);x.position.x=.4,x.rotation.z=-Math.PI/4,f.add(x);const N=new bm(.25,.25,.7,8,1,!1,0,Math.PI),L=new Sn(N,p);L.position.x=1.2,L.rotation.z=Math.PI/2,f.add(L);const A=new sa(.1,.7,.1),C=new Sn(A,p);C.position.set(1,0,0),f.add(C);const O=new Rm(2.5,32,32),P=new Em({color:8956671,transparent:!0,opacity:.05,side:Kn}),F=new Sn(O,P);f.add(F);const b=new sa(.1,.1,.1),U=new ex({transparent:!0,opacity:0});new Sn(b,U);const V=new r1(16777215,1);V.position.set(5,5,5),s.add(V);const X=new s1(4210752,.6);s.add(X);const Q=50;let ot=0,nt=0,I=0,Y=0;const W=new Ei,_t=new Float32Array(Q*3),z=new Float32Array(Q);for(let H=0;H<Q;H++)_t[H*3]=0,_t[H*3+1]=0,_t[H*3+2]=0,z[H]=(Q-H)/Q;W.setAttribute("position",new Si(_t,3)),W.setAttribute("opacity",new Si(z,1));const J=new Ha({uniforms:{time:{value:0},color:{value:new Te(8956671)}},vertexShader:`
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
      `,transparent:!0,blending:Qc}),pt=new $v(W,J);s.add(pt);const yt=800,Tt=new Float32Array(yt*3);for(let H=0;H<yt;H++)Tt[H*3]=(Math.random()-.5)*20,Tt[H*3+1]=(Math.random()-.5)*20,Tt[H*3+2]=(Math.random()-.5)*20;const Dt=new Ei;Dt.setAttribute("position",new Si(Tt,3));const et=new my({size:.04,transparent:!0,opacity:.4,color:8956671,blending:Qc}),mt=new $v(Dt,et);s.add(mt);const At=new l1;let jt;function Vt(){const H=At.getElapsedTime();J.uniforms.time.value=H,ot+=(I-ot)*.1,nt+=(Y-nt)*.1;const se=W.attributes.position.array;for(let It=Q-1;It>0;It--)se[It*3]=se[(It-1)*3],se[It*3+1]=se[(It-1)*3+1],se[It*3+2]=se[(It-1)*3+2];se[0]=ot*5,se[1]=-nt*5,se[2]=Math.sin(H*2)*.5,W.attributes.position.needsUpdate=!0,f.rotation.x+=.003,f.rotation.y+=.005,f.rotation.z+=.002;const te=Dt.attributes.position.array;for(let It=0;It<yt;It++)te[It*3+1]+=Math.sin(H+It*.1)*.001,te[It*3]+=Math.cos(H*.5+It*.05)*5e-4,te[It*3+1]>10&&(te[It*3+1]=-10),te[It*3]>10&&(te[It*3]=-10);Dt.attributes.position.needsUpdate=!0,c.render(s,l),jt=requestAnimationFrame(Vt)}Kc.from(f.scale,{duration:2,x:.1,y:.1,z:.1,ease:"power3.out"}),Kc.from(f.rotation,{duration:3,x:Math.PI*2,ease:"power2.out"}),Vt();function ue(H){const se=t.getBoundingClientRect();I=(H.clientX-se.left)/se.width-.5,Y=(H.clientY-se.top)/se.height-.5,Kc.to(l.position,{x:I*1,y:-Y*1,duration:1,ease:"power2.out"}),l.lookAt(s.position)}function je(){const H=t.clientWidth,se=t.clientHeight;c.setSize(H,se),l.aspect=H/se,l.updateProjectionMatrix()}return t.addEventListener("pointermove",ue),window.addEventListener("resize",je),()=>{cancelAnimationFrame(jt),t.removeEventListener("pointermove",ue),window.removeEventListener("resize",je),t&&c.domElement&&t.removeChild(c.domElement),geometry.dispose(),material.dispose(),Dt.dispose(),et.dispose(),W.dispose(),J.dispose(),c.dispose()}},[]),$t.jsx("div",{ref:o,style:{width:"100%",height:"100vh",position:"fixed",top:0,left:0,zIndex:0,overflow:"hidden"}})}const o2=[{id:1,title:"Virtual Soul",description:"An immersive digital exploration of consciousness and identity in virtual spaces. This project investigates the boundaries between digital and physical existence through interactive media.",image:"/Personal-Website/images/project1.jpg",pdfUrl:"/Personal-Website/images/1-Virtual Soul.pdf",technologies:["Interactive Media","Virtual Reality","Digital Art","Conceptual Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"Nether Portal",description:"A gateway between dimensions - exploring liminal spaces and transitional experiences. This project creates bridges between different states of being and perception.",image:"/Personal-Website/images/project2.jpg",pdfUrl:"/Personal-Website/images/2-Nether Portal.pdf",technologies:["Dimensional Design","Interactive Installation","Spatial Computing","Experience Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"Prayer of Wind and Bloom",description:"A poetic meditation on nature's cycles and renewal. This work celebrates the intersection of technology and organic growth, finding harmony in digital and natural systems.",image:"/Personal-Website/images/project3.jpg",pdfUrl:"/Personal-Website/images/3-Prayer of Wind and Bloom.pdf",technologies:["Generative Art","Nature Simulation","Poetic Computing","Bio-inspired Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:4,title:"Unnatural Chronologies",description:"An exploration of time, memory, and non-linear narratives. This project challenges conventional temporal structures and creates new ways of experiencing past, present, and future.",image:"/Personal-Website/images/project4.jpg",pdfUrl:"/Personal-Website/images/4-Unnatural Chronologies.pdf",technologies:["Temporal Design","Narrative Systems","Memory Interfaces","Experimental Media"],liveUrl:"#",githubUrl:"#",featured:!0}];function l2(){const[o,t]=Wl.useState([]);return Wl.useEffect(()=>{t(o2.filter(n=>n.featured))},[]),$t.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"white"},children:[$t.jsxs("header",{style:{position:"fixed",zIndex:10,top:40,left:40,fontSize:"18px"},children:[$t.jsx("h1",{style:{margin:0,fontSize:"2.5rem",fontWeight:"300",letterSpacing:"2px"},children:"Your Name"}),$t.jsx("p",{style:{margin:"10px 0",fontSize:"1.2rem",opacity:.8,letterSpacing:"1px"},children:"Creative Developer & Designer"}),$t.jsx("p",{style:{margin:0,fontSize:"1rem",opacity:.6,maxWidth:"400px",lineHeight:"1.5"},children:"An Easter egg hunter in reality, raiding Earth-Online for creative treasures."})]}),$t.jsx("nav",{style:{position:"fixed",zIndex:10,top:40,right:40,fontSize:"1rem"},children:$t.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",gap:"30px"},children:[$t.jsx("li",{children:$t.jsx("a",{href:"#work",style:{color:"white",textDecoration:"none",opacity:.8},children:"Work"})}),$t.jsx("li",{children:$t.jsx("a",{href:"#about",style:{color:"white",textDecoration:"none",opacity:.8},children:"About"})}),$t.jsx("li",{children:$t.jsx("a",{href:"#contact",style:{color:"white",textDecoration:"none",opacity:.8},children:"Contact"})})]})}),$t.jsxs("main",{style:{minHeight:"100vh",width:"100vw",position:"relative",overflow:"hidden"},children:[$t.jsx(s2,{}),$t.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",zIndex:5,pointerEvents:"none"},children:[$t.jsx("h2",{style:{fontSize:"3rem",fontWeight:"100",letterSpacing:"3px",margin:"0 0 20px 0",opacity:.9},children:"PORTFOLIO"}),$t.jsx("p",{style:{fontSize:"1.2rem",opacity:.7,letterSpacing:"2px"},children:"Scroll to explore creative treasures"})]})]}),$t.jsx("section",{id:"about",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(22,33,62,0.95) 100%)",position:"relative",zIndex:1},children:$t.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",textAlign:"center"},children:[$t.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"About Me"}),$t.jsx("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",opacity:.8,marginBottom:"30px"},children:"I'm a creative developer who sees the digital world as an endless playground. Like an easter egg hunter exploring every corner of reality, I search for hidden gems and creative possibilities in the intersection of technology and art."}),$t.jsx("p",{style:{fontSize:"1.1rem",lineHeight:"1.7",opacity:.7},children:"My mission is to craft immersive digital experiences that surprise, delight, and inspire. Every project is a treasure hunt for that perfect blend of functionality and magic."})]})}),$t.jsx("section",{id:"work",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(22,33,62,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(10,10,10,0.95) 100%)",position:"relative",zIndex:1},children:$t.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[$t.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"60px",letterSpacing:"2px",textAlign:"center"},children:"Featured Work"}),$t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"},children:o.map(n=>$t.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"30px",borderRadius:"15px",border:"1px solid rgba(255,255,255,0.1)",transition:"all 0.3s ease",cursor:"pointer",backdropFilter:"blur(10px)"},onMouseEnter:a=>{a.target.style.transform="translateY(-10px)",a.target.style.boxShadow="0 20px 40px rgba(136,170,255,0.2)"},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow="none"},children:[$t.jsx("div",{style:{width:"100%",height:"200px",background:"linear-gradient(135deg, #88aaff, #0066cc)",borderRadius:"10px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",opacity:.7},children:"Project Image"}),$t.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"15px",color:"#88aaff"},children:n.title}),$t.jsx("p",{style:{opacity:.7,lineHeight:"1.6",marginBottom:"20px"},children:n.description}),$t.jsx("div",{style:{marginBottom:"20px"},children:$t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:n.technologies.map((a,s)=>$t.jsx("span",{style:{background:"rgba(136,170,255,0.2)",padding:"4px 12px",borderRadius:"20px",fontSize:"0.8rem",border:"1px solid rgba(136,170,255,0.3)"},children:a},s))})}),$t.jsxs("div",{style:{display:"flex",gap:"15px"},children:[$t.jsx("a",{href:n.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid #88aaff",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.background="#88aaff",a.target.style.color="#000"},onMouseLeave:a=>{a.target.style.background="transparent",a.target.style.color="#88aaff"},children:"View PDF"}),n.liveUrl!=="#"&&$t.jsx("a",{href:n.liveUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid rgba(136,170,255,0.5)",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.borderColor="#88aaff",a.target.style.background="rgba(136,170,255,0.1)"},onMouseLeave:a=>{a.target.style.borderColor="rgba(136,170,255,0.5)",a.target.style.background="transparent"},children:"Live Demo"})]})]},n.id))}),$t.jsx("div",{style:{textAlign:"center",marginTop:"60px"},children:$t.jsx("button",{style:{background:"transparent",border:"2px solid #88aaff",color:"#88aaff",padding:"12px 30px",borderRadius:"30px",fontSize:"1rem",cursor:"pointer",transition:"all 0.3s ease",letterSpacing:"1px"},onMouseEnter:n=>{n.target.style.background="#88aaff",n.target.style.color="#000",n.target.style.transform="scale(1.05)"},onMouseLeave:n=>{n.target.style.background="transparent",n.target.style.color="#88aaff",n.target.style.transform="scale(1)"},children:"View All Projects"})})]})}),$t.jsx("section",{id:"contact",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 100%)",position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:$t.jsxs("div",{style:{textAlign:"center"},children:[$t.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"Let's Create Together"}),$t.jsx("p",{style:{fontSize:"1.2rem",opacity:.8,marginBottom:"40px"},children:"Ready to embark on a creative treasure hunt?"}),$t.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"center"},children:[$t.jsx("a",{href:"mailto:your@email.com",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"Email"}),$t.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"LinkedIn"}),$t.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"GitHub"})]})]})}),$t.jsx("footer",{style:{padding:"40px",textAlign:"center",background:"rgba(10,10,10,0.9)",borderTop:"1px solid rgba(255,255,255,0.1)",position:"relative",zIndex:1},children:$t.jsx("p",{style:{opacity:.6,margin:0},children:"© 2025 Your Name. All treasures reserved."})})]})}zE.createRoot(document.getElementById("root")).render($t.jsx(Wl.StrictMode,{children:$t.jsx(l2,{})}));
