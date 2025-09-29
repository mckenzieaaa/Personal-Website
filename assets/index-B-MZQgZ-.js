(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var vd={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function EE(){if(_v)return Ul;_v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:l}}return Ul.Fragment=t,Ul.jsx=n,Ul.jsxs=n,Ul}var gv;function TE(){return gv||(gv=1,vd.exports=EE()),vd.exports}var Jt=TE(),xd={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function bE(){if(vv)return le;vv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function y(O,J,mt){this.props=O,this.context=J,this.refs=M,this.updater=mt||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function N(O,J,mt){this.props=O,this.context=J,this.refs=M,this.updater=mt||S}var L=N.prototype=new x;L.constructor=N,T(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,U={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function P(O,J,mt,yt,Rt,Mt){return mt=Mt.ref,{$$typeof:o,type:O,key:J,ref:mt!==void 0?mt:null,props:Mt}}function F(O,J){return P(O.type,J,void 0,void 0,void 0,O.props)}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function D(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(mt){return J[mt]})}var G=/\/+/g;function Y(O,J){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):J.toString(36)}function et(){}function ct(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(et,et):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function at(O,J,mt,yt,Rt){var Mt=typeof O;(Mt==="undefined"||Mt==="boolean")&&(O=null);var K=!1;if(O===null)K=!0;else switch(Mt){case"bigint":case"string":case"number":K=!0;break;case"object":switch(O.$$typeof){case o:case t:K=!0;break;case _:return K=O._init,at(K(O._payload),J,mt,yt,Rt)}}if(K)return Rt=Rt(O),K=yt===""?"."+Y(O,0):yt,C(Rt)?(mt="",K!=null&&(mt=K.replace(G,"$&/")+"/"),at(Rt,J,mt,"",function(Zt){return Zt})):Rt!=null&&(b(Rt)&&(Rt=F(Rt,mt+(Rt.key==null||O&&O.key===Rt.key?"":(""+Rt.key).replace(G,"$&/")+"/")+K)),J.push(Rt)),1;K=0;var dt=yt===""?".":yt+":";if(C(O))for(var St=0;St<O.length;St++)yt=O[St],Mt=dt+Y(yt,St),K+=at(yt,J,mt,Mt,Rt);else if(St=v(O),typeof St=="function")for(O=St.call(O),St=0;!(yt=O.next()).done;)yt=yt.value,Mt=dt+Y(yt,St++),K+=at(yt,J,mt,Mt,Rt);else if(Mt==="object"){if(typeof O.then=="function")return at(ct(O),J,mt,yt,Rt);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return K}function I(O,J,mt){if(O==null)return O;var yt=[],Rt=0;return at(O,yt,"","",function(Mt){return J.call(mt,Mt,Rt++)}),yt}function X(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(mt){(O._status===0||O._status===-1)&&(O._status=1,O._result=mt)},function(mt){(O._status===0||O._status===-1)&&(O._status=2,O._result=mt)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var q=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function xt(){}return le.Children={map:I,forEach:function(O,J,mt){I(O,function(){J.apply(this,arguments)},mt)},count:function(O){var J=0;return I(O,function(){J++}),J},toArray:function(O){return I(O,function(J){return J})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},le.Component=y,le.Fragment=n,le.Profiler=s,le.PureComponent=N,le.StrictMode=a,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,le.__COMPILER_RUNTIME={__proto__:null,c:function(O){return U.H.useMemoCache(O)}},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cloneElement=function(O,J,mt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var yt=T({},O.props),Rt=O.key,Mt=void 0;if(J!=null)for(K in J.ref!==void 0&&(Mt=void 0),J.key!==void 0&&(Rt=""+J.key),J)!z.call(J,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&J.ref===void 0||(yt[K]=J[K]);var K=arguments.length-2;if(K===1)yt.children=mt;else if(1<K){for(var dt=Array(K),St=0;St<K;St++)dt[St]=arguments[St+2];yt.children=dt}return P(O.type,Rt,void 0,void 0,Mt,yt)},le.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},le.createElement=function(O,J,mt){var yt,Rt={},Mt=null;if(J!=null)for(yt in J.key!==void 0&&(Mt=""+J.key),J)z.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Rt[yt]=J[yt]);var K=arguments.length-2;if(K===1)Rt.children=mt;else if(1<K){for(var dt=Array(K),St=0;St<K;St++)dt[St]=arguments[St+2];Rt.children=dt}if(O&&O.defaultProps)for(yt in K=O.defaultProps,K)Rt[yt]===void 0&&(Rt[yt]=K[yt]);return P(O,Mt,void 0,void 0,null,Rt)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:f,render:O}},le.isValidElement=b,le.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:X}},le.memo=function(O,J){return{$$typeof:d,type:O,compare:J===void 0?null:J}},le.startTransition=function(O){var J=U.T,mt={};U.T=mt;try{var yt=O(),Rt=U.S;Rt!==null&&Rt(mt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(xt,q)}catch(Mt){q(Mt)}finally{U.T=J}},le.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},le.use=function(O){return U.H.use(O)},le.useActionState=function(O,J,mt){return U.H.useActionState(O,J,mt)},le.useCallback=function(O,J){return U.H.useCallback(O,J)},le.useContext=function(O){return U.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,J){return U.H.useDeferredValue(O,J)},le.useEffect=function(O,J,mt){var yt=U.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(O,J)},le.useId=function(){return U.H.useId()},le.useImperativeHandle=function(O,J,mt){return U.H.useImperativeHandle(O,J,mt)},le.useInsertionEffect=function(O,J){return U.H.useInsertionEffect(O,J)},le.useLayoutEffect=function(O,J){return U.H.useLayoutEffect(O,J)},le.useMemo=function(O,J){return U.H.useMemo(O,J)},le.useOptimistic=function(O,J){return U.H.useOptimistic(O,J)},le.useReducer=function(O,J,mt){return U.H.useReducer(O,J,mt)},le.useRef=function(O){return U.H.useRef(O)},le.useState=function(O){return U.H.useState(O)},le.useSyncExternalStore=function(O,J,mt){return U.H.useSyncExternalStore(O,J,mt)},le.useTransition=function(){return U.H.useTransition()},le.version="19.1.1",le}var xv;function mm(){return xv||(xv=1,xd.exports=bE()),xd.exports}var ql=mm(),Sd={exports:{}},Ll={},yd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function AE(){return Sv||(Sv=1,(function(o){function t(I,X){var q=I.length;I.push(X);t:for(;0<q;){var xt=q-1>>>1,O=I[xt];if(0<s(O,X))I[xt]=X,I[q]=O,q=xt;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var X=I[0],q=I.pop();if(q!==X){I[0]=q;t:for(var xt=0,O=I.length,J=O>>>1;xt<J;){var mt=2*(xt+1)-1,yt=I[mt],Rt=mt+1,Mt=I[Rt];if(0>s(yt,q))Rt<O&&0>s(Mt,yt)?(I[xt]=Mt,I[Rt]=q,xt=Rt):(I[xt]=yt,I[mt]=q,xt=mt);else if(Rt<O&&0>s(Mt,q))I[xt]=Mt,I[Rt]=q,xt=Rt;else break t}}return X}function s(I,X){var q=I.sortIndex-X.sortIndex;return q!==0?q:I.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,S=!1,T=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var X=n(d);X!==null;){if(X.callback===null)a(d);else if(X.startTime<=I)a(d),X.sortIndex=X.expirationTime,t(p,X);else break;X=n(d)}}function U(I){if(M=!1,C(I),!T)if(n(p)!==null)T=!0,z||(z=!0,Y());else{var X=n(d);X!==null&&at(U,X.startTime-I)}}var z=!1,P=-1,F=5,b=-1;function D(){return y?!0:!(o.unstable_now()-b<F)}function G(){if(y=!1,z){var I=o.unstable_now();b=I;var X=!0;try{t:{T=!1,M&&(M=!1,N(P),P=-1),S=!0;var q=v;try{e:{for(C(I),g=n(p);g!==null&&!(g.expirationTime>I&&D());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,v=g.priorityLevel;var O=xt(g.expirationTime<=I);if(I=o.unstable_now(),typeof O=="function"){g.callback=O,C(I),X=!0;break e}g===n(p)&&a(p),C(I)}else a(p);g=n(p)}if(g!==null)X=!0;else{var J=n(d);J!==null&&at(U,J.startTime-I),X=!1}}break t}finally{g=null,v=q,S=!1}X=void 0}}finally{X?Y():z=!1}}}var Y;if(typeof L=="function")Y=function(){L(G)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=G,Y=function(){ct.postMessage(null)}}else Y=function(){x(G,0)};function at(I,X){P=x(function(){I(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var q=v;v=X;try{return I()}finally{v=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=v;v=I;try{return X()}finally{v=q}},o.unstable_scheduleCallback=function(I,X,q){var xt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xt+q:xt):q=xt,I){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=q+O,I={id:_++,callback:X,priorityLevel:I,startTime:q,expirationTime:O,sortIndex:-1},q>xt?(I.sortIndex=q,t(d,I),n(p)===null&&I===n(d)&&(M?(N(P),P=-1):M=!0,at(U,q-xt))):(I.sortIndex=O,t(p,I),T||S||(T=!0,z||(z=!0,Y()))),I},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(I){var X=v;return function(){var q=v;v=X;try{return I.apply(this,arguments)}finally{v=q}}}})(Md)),Md}var yv;function RE(){return yv||(yv=1,yd.exports=AE()),yd.exports}var Ed={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function CE(){if(Mv)return In;Mv=1;var o=mm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,In.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},In.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},In.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},In.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},In.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},In.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},In.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},In.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},In.requestFormReset=function(p){a.d.r(p)},In.unstable_batchedUpdates=function(p,d){return p(d)},In.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},In.useFormStatus=function(){return c.H.useHostTransitionStatus()},In.version="19.1.1",In}var Ev;function wE(){if(Ev)return Ed.exports;Ev=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ed.exports=CE(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function DE(){if(Tv)return Ll;Tv=1;var o=RE(),t=mm(),n=wE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){r=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return f(h),e;if(m===u)return f(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=h,u=m;else{for(var E=!1,R=h.child;R;){if(R===r){E=!0,r=h,u=m;break}if(R===u){E=!0,u=h,r=m;break}R=R.sibling}if(!E){for(R=m.child;R;){if(R===r){E=!0,r=m,u=h;break}if(R===u){E=!0,u=m,r=h;break}R=R.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function d(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=d(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case U:return"Suspense";case z:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case L:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case F:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var at=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},xt=[],O=-1;function J(e){return{current:e}}function mt(e){0>O||(e.current=xt[O],xt[O]=null,O--)}function yt(e,i){O++,xt[O]=e.current,e.current=i}var Rt=J(null),Mt=J(null),K=J(null),dt=J(null);function St(e,i){switch(yt(K,i),yt(Mt,e),yt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?X0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=X0(i),e=W0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mt(Rt),yt(Rt,e)}function Zt(){mt(Rt),mt(Mt),mt(K)}function Wt(e){e.memoizedState!==null&&yt(dt,e);var i=Rt.current,r=W0(i,e.type);i!==r&&(yt(Mt,e),yt(Rt,r))}function de(e){Mt.current===e&&(mt(Rt),mt(Mt)),dt.current===e&&(mt(dt),Al._currentValue=q)}var cn=Object.prototype.hasOwnProperty,V=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,re=o.unstable_shouldYield,ne=o.unstable_requestPaint,Pt=o.unstable_now,Ve=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,se=o.unstable_UserBlockingPriority,je=o.unstable_NormalPriority,Ze=o.unstable_LowPriority,B=o.unstable_IdlePriority,A=o.log,nt=o.unstable_setDisableYieldValue,ft=null,_t=null;function ut(e){if(typeof A=="function"&&nt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(ft,e)}catch{}}var zt=Math.clz32?Math.clz32:qt,Ct=Math.log,kt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Ct(e)/kt|0)|0}var Et=256,Lt=4194304;function jt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,i,r){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var R=u&134217727;return R!==0?(u=R&~m,u!==0?h=jt(u):(E&=R,E!==0?h=jt(E):r||(r=R&~e,r!==0&&(h=jt(r))))):(R=u&~m,R!==0?h=jt(R):E!==0?h=jt(E):r||(r=u&~e,r!==0&&(h=jt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Dt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function oe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Et;return Et<<=1,(Et&4194048)===0&&(Et=256),e}function At(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function wt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Bt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tt(e,i,r,u,h,m){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var R=e.entanglements,H=e.expirationTimes,tt=e.hiddenUpdates;for(r=E&~r;0<r;){var ht=31-zt(r),gt=1<<ht;R[ht]=0,H[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var rt=it[ht];rt!==null&&(rt.lane&=-536870913)}r&=~gt}u!==0&&vt(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function vt(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-zt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&4194090}function Ht(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-zt(r),h=1<<u;h&i|e[u]&i&&(e[u]|=i),r&=~h}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:cv(e.type))}function Ii(e,i){var r=X.p;try{return X.p=e,i()}finally{X.p=r}}var gn=Math.random().toString(36).slice(2),vn="__reactFiber$"+gn,$e="__reactProps$"+gn,Zi="__reactContainer$"+gn,gs="__reactEvents$"+gn,cu="__reactListeners$"+gn,vs="__reactHandles$"+gn,Io="__reactResources$"+gn,Ki="__reactMarker$"+gn;function xs(e){delete e[vn],delete e[$e],delete e[gs],delete e[cu],delete e[vs]}function ha(e){var i=e[vn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Zi]||r[vn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Z0(e);e!==null;){if(r=e[vn])return r;e=Z0(e)}return i}e=r,r=e.parentNode}return null}function Ga(e){if(e=e[vn]||e[Zi]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function wr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Va(e){var i=e[Io];return i||(i=e[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function fn(e){e[Ki]=!0}var fu=new Set,hu={};function w(e,i){j(e,i),j(e+"Capture",i)}function j(e,i){for(hu[e]=i,e=0;e<i.length;e++)fu.add(i[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Q={};function bt(e){return cn.call(Q,e)?!0:cn.call(lt,e)?!1:ot.test(e)?Q[e]=!0:(lt[e]=!0,!1)}function Ut(e,i,r){if(bt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function It(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Nt(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}var Qt,te;function Xt(e){if(Qt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Qt=i&&i[1]||"",te=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+te}var ce=!1;function Te(e,i){if(!e||ce)return"";ce=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(rt){var it=rt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(rt){it=rt}e.call(gt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],R=m[1];if(E&&R){var H=E.split(`
`),tt=R.split(`
`);for(h=u=0;u<H.length&&!H[u].includes("DetermineComponentFrameRoot");)u++;for(;h<tt.length&&!tt[h].includes("DetermineComponentFrameRoot");)h++;if(u===H.length||h===tt.length)for(u=H.length-1,h=tt.length-1;1<=u&&0<=h&&H[u]!==tt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(H[u]!==tt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||H[u]!==tt[h]){var ht=`
`+H[u].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=u&&0<=h);break}}}finally{ce=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Xt(r):""}function We(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return Xt("Activity");default:return""}}function Ne(e){try{var i="";do i+=We(e),e=e.return;while(e);return i}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(e){var i=Kt(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),u=""+e[i];if(!e.hasOwnProperty(i)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var h=r.get,m=r.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:r.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function _e(e){e._valueTracker||(e._valueTracker=Xe(e))}function Pn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=Kt(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kn=/[\n"\\]/g;function En(e){return e.replace(kn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ie(e,i,r,u,h,m,E,R){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?zn(e,E,fe(i)):r!=null?zn(e,E,fe(r)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+fe(R):e.removeAttribute("name")}function Xn(e,i,r,u,h,m,E,R){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;r=r!=null?""+fe(r):"",i=i!=null?""+fe(i):r,R||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=R?e.checked:!!u,e.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function zn(e,i,r){i==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function tn(e,i,r,u){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&u&&(e[r].defaultSelected=!0)}else{for(r=""+fe(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function wn(e,i,r){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+fe(r):""}function Ss(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if(at(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=fe(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u)}function Zn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Sy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xm(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||Sy.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Wm(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&r[h]!==u&&Xm(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&Xm(e,m,i[m])}function gf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),My=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function du(e){return My.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vf=null;function xf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,Ms=null;function qm(e){var i=Ga(e);if(i&&(e=i.stateNode)){var r=e[$e]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ie(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+En(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var h=u[$e]||null;if(!h)throw Error(a(90));Ie(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&Pn(u)}break t;case"textarea":wn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&tn(e,!!r.multiple,i,!1)}}}var Sf=!1;function Ym(e,i,r){if(Sf)return e(i,r);Sf=!0;try{var u=e(i);return u}finally{if(Sf=!1,(ys!==null||Ms!==null)&&(Ju(),ys&&(i=ys,e=Ms,Ms=ys=null,qm(i),e)))for(i=0;i<e.length;i++)qm(e[i])}}function Fo(e,i){var r=e.stateNode;if(r===null)return null;var u=r[$e]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=!1;if(da)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{yf=!1}var ka=null,Mf=null,pu=null;function jm(){if(pu)return pu;var e,i=Mf,r=i.length,u,h="value"in ka?ka.value:ka.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var E=r-e;for(u=1;u<=E&&i[r-u]===h[m-u];u++);return pu=h.slice(e,1<u?1-u:void 0)}function mu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function _u(){return!0}function Zm(){return!1}function Kn(e){function i(r,u,h,m,E){this._reactName=r,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(r=e[R],this[R]=r?r(m):m[R]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_u:Zm,this.isPropagationStopped=Zm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),i}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=Kn(Dr),Go=_({},Dr,{view:0,detail:0}),Ey=Kn(Go),Ef,Tf,Vo,vu=_({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vo&&(Vo&&e.type==="mousemove"?(Ef=e.screenX-Vo.screenX,Tf=e.screenY-Vo.screenY):Tf=Ef=0,Vo=e),Ef)},movementY:function(e){return"movementY"in e?e.movementY:Tf}}),Km=Kn(vu),Ty=_({},vu,{dataTransfer:0}),by=Kn(Ty),Ay=_({},Go,{relatedTarget:0}),bf=Kn(Ay),Ry=_({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cy=Kn(Ry),wy=_({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dy=Kn(wy),Uy=_({},Dr,{data:0}),Qm=Kn(Uy),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Py(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Oy[e])?!!i[e]:!1}function Af(){return Py}var zy=_({},Go,{key:function(e){if(e.key){var i=Ly[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=mu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Af,charCode:function(e){return e.type==="keypress"?mu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),By=Kn(zy),Iy=_({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Kn(Iy),Fy=_({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Af}),Hy=Kn(Fy),Gy=_({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vy=Kn(Gy),ky=_({},vu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=Kn(ky),Wy=_({},Dr,{newState:0,oldState:0}),qy=Kn(Wy),Yy=[9,13,27,32],Rf=da&&"CompositionEvent"in window,ko=null;da&&"documentMode"in document&&(ko=document.documentMode);var jy=da&&"TextEvent"in window&&!ko,$m=da&&(!Rf||ko&&8<ko&&11>=ko),t_=" ",e_=!1;function n_(e,i){switch(e){case"keyup":return Yy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Es=!1;function Zy(e,i){switch(e){case"compositionend":return i_(i);case"keypress":return i.which!==32?null:(e_=!0,t_);case"textInput":return e=i.data,e===t_&&e_?null:e;default:return null}}function Ky(e,i){if(Es)return e==="compositionend"||!Rf&&n_(e,i)?(e=jm(),pu=Mf=ka=null,Es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $m&&i.locale!=="ko"?null:i.data;default:return null}}var Qy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function a_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Qy[e.type]:i==="textarea"}function r_(e,i,r,u){ys?Ms?Ms.push(u):Ms=[u]:ys=u,i=ac(i,"onChange"),0<i.length&&(r=new gu("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var Xo=null,Wo=null;function Jy(e){F0(e,0)}function xu(e){var i=wr(e);if(Pn(i))return e}function s_(e,i){if(e==="change")return i}var o_=!1;if(da){var Cf;if(da){var wf="oninput"in document;if(!wf){var l_=document.createElement("div");l_.setAttribute("oninput","return;"),wf=typeof l_.oninput=="function"}Cf=wf}else Cf=!1;o_=Cf&&(!document.documentMode||9<document.documentMode)}function u_(){Xo&&(Xo.detachEvent("onpropertychange",c_),Wo=Xo=null)}function c_(e){if(e.propertyName==="value"&&xu(Wo)){var i=[];r_(i,Wo,e,xf(e)),Ym(Jy,i)}}function $y(e,i,r){e==="focusin"?(u_(),Xo=i,Wo=r,Xo.attachEvent("onpropertychange",c_)):e==="focusout"&&u_()}function tM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xu(Wo)}function eM(e,i){if(e==="click")return xu(i)}function nM(e,i){if(e==="input"||e==="change")return xu(i)}function iM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var oi=typeof Object.is=="function"?Object.is:iM;function qo(e,i){if(oi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var h=r[u];if(!cn.call(i,h)||!oi(e[h],i[h]))return!1}return!0}function f_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function h_(e,i){var r=f_(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=f_(r)}}function d_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?d_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function p_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Fi(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Fi(e.document)}return i}function Df(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var aM=da&&"documentMode"in document&&11>=document.documentMode,Ts=null,Uf=null,Yo=null,Lf=!1;function m_(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lf||Ts==null||Ts!==Fi(u)||(u=Ts,"selectionStart"in u&&Df(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Yo&&qo(Yo,u)||(Yo=u,u=ac(Uf,"onSelect"),0<u.length&&(i=new gu("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=Ts)))}function Ur(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var bs={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionrun:Ur("Transition","TransitionRun"),transitionstart:Ur("Transition","TransitionStart"),transitioncancel:Ur("Transition","TransitionCancel"),transitionend:Ur("Transition","TransitionEnd")},Nf={},__={};da&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Lr(e){if(Nf[e])return Nf[e];if(!bs[e])return e;var i=bs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in __)return Nf[e]=i[r];return e}var g_=Lr("animationend"),v_=Lr("animationiteration"),x_=Lr("animationstart"),rM=Lr("transitionrun"),sM=Lr("transitionstart"),oM=Lr("transitioncancel"),S_=Lr("transitionend"),y_=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function Hi(e,i){y_.set(e,i),w(i,[e])}var M_=new WeakMap;function Ei(e,i){if(typeof e=="object"&&e!==null){var r=M_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ne(i)},M_.set(e,i),i)}return{value:e,source:i,stack:Ne(i)}}var Ti=[],As=0,Pf=0;function Su(){for(var e=As,i=Pf=As=0;i<e;){var r=Ti[i];Ti[i++]=null;var u=Ti[i];Ti[i++]=null;var h=Ti[i];Ti[i++]=null;var m=Ti[i];if(Ti[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&E_(r,h,m)}}function yu(e,i,r,u){Ti[As++]=e,Ti[As++]=i,Ti[As++]=r,Ti[As++]=u,Pf|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function zf(e,i,r,u){return yu(e,i,r,u),Mu(e)}function Rs(e,i){return yu(e,null,null,i),Mu(e)}function E_(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-zt(r),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=r|536870912),m):null}function Mu(e){if(50<vl)throw vl=0,Vh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Cs={};function lM(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,i,r,u){return new lM(e,i,r,u)}function Bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,i){var r=e.alternate;return r===null?(r=li(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function T_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Eu(e,i,r,u,h,m){var E=0;if(u=e,typeof e=="function")Bf(e)&&(E=1);else if(typeof e=="string")E=cE(e,r,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=li(31,r,i,h),e.elementType=b,e.lanes=m,e;case T:return Nr(r.children,h,m,i);case M:E=8,h|=24;break;case y:return e=li(12,r,i,h|2),e.elementType=y,e.lanes=m,e;case U:return e=li(13,r,i,h),e.elementType=U,e.lanes=m,e;case z:return e=li(19,r,i,h),e.elementType=z,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case L:E=10;break t;case N:E=9;break t;case C:E=11;break t;case P:E=14;break t;case F:E=16,u=null;break t}E=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=li(E,r,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function Nr(e,i,r,u){return e=li(7,e,u,i),e.lanes=r,e}function If(e,i,r){return e=li(6,e,null,i),e.lanes=r,e}function Ff(e,i,r){return i=li(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ws=[],Ds=0,Tu=null,bu=0,bi=[],Ai=0,Or=null,ma=1,_a="";function Pr(e,i){ws[Ds++]=bu,ws[Ds++]=Tu,Tu=e,bu=i}function b_(e,i,r){bi[Ai++]=ma,bi[Ai++]=_a,bi[Ai++]=Or,Or=e;var u=ma;e=_a;var h=32-zt(u)-1;u&=~(1<<h),r+=1;var m=32-zt(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,ma=1<<32-zt(i)+h|r<<h|u,_a=m+e}else ma=1<<m|r<<h|u,_a=e}function Hf(e){e.return!==null&&(Pr(e,1),b_(e,1,0))}function Gf(e){for(;e===Tu;)Tu=ws[--Ds],ws[Ds]=null,bu=ws[--Ds],ws[Ds]=null;for(;e===Or;)Or=bi[--Ai],bi[Ai]=null,_a=bi[--Ai],bi[Ai]=null,ma=bi[--Ai],bi[Ai]=null}var Wn=null,en=null,Re=!1,zr=null,Qi=!1,Vf=Error(a(519));function Br(e){var i=Error(a(418,""));throw Ko(Ei(i,e)),Vf}function A_(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[vn]=e,i[$e]=u,r){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(r=0;r<Sl.length;r++)ve(Sl[r],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),Xn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),_e(i);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),Ss(i,u.value,u.defaultValue,u.children),_e(i)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||k0(i.textContent,r)?(u.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),u.onScroll!=null&&ve("scroll",i),u.onScrollEnd!=null&&ve("scrollend",i),u.onClick!=null&&(i.onclick=rc),i=!0):i=!1,i||Br(e)}function R_(e){for(Wn=e.return;Wn;)switch(Wn.tag){case 5:case 13:Qi=!1;return;case 27:case 3:Qi=!0;return;default:Wn=Wn.return}}function jo(e){if(e!==Wn)return!1;if(!Re)return R_(e),Re=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||ad(e.type,e.memoizedProps)),r=!r),r&&en&&Br(e),R_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(i===0){en=Vi(e.nextSibling);break t}i--}else r!=="$"&&r!=="$!"&&r!=="$?"||i++;e=e.nextSibling}en=null}}else i===27?(i=en,rr(e.type)?(e=ld,ld=null,en=e):en=i):en=Wn?Vi(e.stateNode.nextSibling):null;return!0}function Zo(){en=Wn=null,Re=!1}function C_(){var e=zr;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),zr=null),e}function Ko(e){zr===null?zr=[e]:zr.push(e)}var kf=J(null),Ir=null,ga=null;function Xa(e,i,r){yt(kf,i._currentValue),i._currentValue=r}function va(e){e._currentValue=kf.current,mt(kf)}function Xf(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function Wf(e,i,r,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var R=m;m=h;for(var H=0;H<i.length;H++)if(R.context===i[H]){m.lanes|=r,R=m.alternate,R!==null&&(R.lanes|=r),Xf(m.return,r,e),u||(E=null);break t}m=R.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),Xf(E,r,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Qo(e,i,r,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var R=h.type;oi(h.pendingProps.value,E.value)||(e!==null?e.push(R):e=[R])}}else if(h===dt.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}h=h.return}e!==null&&Wf(i,e,r,u),i.flags|=262144}function Au(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fr(e){Ir=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return w_(Ir,e)}function Ru(e,i){return Ir===null&&Fr(e),w_(e,i)}function w_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ga===null){if(e===null)throw Error(a(308));ga=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ga=ga.next=i;return r}var uM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},cM=o.unstable_scheduleCallback,fM=o.unstable_NormalPriority,xn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new uM,data:new Map,refCount:0}}function Jo(e){e.refCount--,e.refCount===0&&cM(fM,function(){e.controller.abort()})}var $o=null,Yf=0,Us=0,Ls=null;function hM(e,i){if($o===null){var r=$o=[];Yf=0,Us=Zh(),Ls={status:"pending",value:void 0,then:function(u){r.push(u)}}}return Yf++,i.then(D_,D_),i}function D_(){if(--Yf===0&&$o!==null){Ls!==null&&(Ls.status="fulfilled");var e=$o;$o=null,Us=0,Ls=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function dM(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),u}var U_=I.S;I.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&hM(e,i),U_!==null&&U_(e,i)};var Hr=J(null);function jf(){var e=Hr.current;return e!==null?e:ke.pooledCache}function Cu(e,i){i===null?yt(Hr,Hr.current):yt(Hr,i.pool)}function L_(){var e=jf();return e===null?null:{parent:xn._currentValue,pool:e}}var tl=Error(a(460)),N_=Error(a(474)),wu=Error(a(542)),Zf={then:function(){}};function O_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Du(){}function P_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Du,Du),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,B_(e),e;default:if(typeof i.status=="string")i.then(Du,Du);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,B_(e),e}throw el=i,tl}}var el=null;function z_(){if(el===null)throw Error(a(459));var e=el;return el=null,e}function B_(e){if(e===tl||e===wu)throw Error(a(483))}var Wa=!1;function Kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(De&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=Mu(e),E_(e,null,r),i}return yu(e,u,i,r),Mu(e)}function nl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Ht(e,r)}}function Jf(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var $f=!1;function il(){if($f){var e=Ls;if(e!==null)throw e}}function al(e,i,r,u){$f=!1;var h=e.updateQueue;Wa=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,R=h.shared.pending;if(R!==null){h.shared.pending=null;var H=R,tt=H.next;H.next=null,E===null?m=tt:E.next=tt,E=H;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==E&&(R===null?ht.firstBaseUpdate=tt:R.next=tt,ht.lastBaseUpdate=H))}if(m!==null){var gt=h.baseState;E=0,ht=tt=H=null,R=m;do{var it=R.lane&-536870913,rt=it!==R.lane;if(rt?(ye&it)===it:(u&it)===it){it!==0&&it===Us&&($f=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var ie=e,$t=R;it=i;var ze=r;switch($t.tag){case 1:if(ie=$t.payload,typeof ie=="function"){gt=ie.call(ze,gt,it);break t}gt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=$t.payload,it=typeof ie=="function"?ie.call(ze,gt,it):ie,it==null)break t;gt=_({},gt,it);break t;case 2:Wa=!0}}it=R.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=h.callbacks,rt===null?h.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?(tt=ht=rt,H=gt):ht=ht.next=rt,E|=it;if(R=R.next,R===null){if(R=h.shared.pending,R===null)break;rt=R,R=rt.next,rt.next=null,h.lastBaseUpdate=rt,h.shared.pending=null}}while(!0);ht===null&&(H=gt),h.baseState=H,h.firstBaseUpdate=tt,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),er|=E,e.lanes=E,e.memoizedState=gt}}function I_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function F_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)I_(r[e],i)}var Ns=J(null),Uu=J(0);function H_(e,i){e=ba,yt(Uu,e),yt(Ns,i),ba=e|i.baseLanes}function th(){yt(Uu,ba),yt(Ns,Ns.current)}function eh(){ba=Uu.current,mt(Ns),mt(Uu)}var ja=0,pe=null,Oe=null,hn=null,Lu=!1,Os=!1,Gr=!1,Nu=0,rl=0,Ps=null,pM=0;function on(){throw Error(a(321))}function nh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!oi(e[r],i[r]))return!1;return!0}function ih(e,i,r,u,h,m){return ja=m,pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Eg:Tg,Gr=!1,m=r(u,h),Gr=!1,Os&&(m=V_(i,r,u,h)),G_(e),m}function G_(e){I.H=Fu;var i=Oe!==null&&Oe.next!==null;if(ja=0,hn=Oe=pe=null,Lu=!1,rl=0,Ps=null,i)throw Error(a(300));e===null||Tn||(e=e.dependencies,e!==null&&Au(e)&&(Tn=!0))}function V_(e,i,r,u){pe=e;var h=0;do{if(Os&&(Ps=null),rl=0,Os=!1,25<=h)throw Error(a(301));if(h+=1,hn=Oe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=yM,m=i(r,u)}while(Os);return m}function mM(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?sl(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(pe.flags|=1024),i}function ah(){var e=Nu!==0;return Nu=0,e}function rh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function sh(e){if(Lu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Lu=!1}ja=0,hn=Oe=pe=null,Os=!1,rl=Nu=0,Ps=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?pe.memoizedState=hn=e:hn=hn.next=e,hn}function dn(){if(Oe===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=hn===null?pe.memoizedState:hn.next;if(i!==null)hn=i,Oe=e;else{if(e===null)throw pe.alternate===null?Error(a(467)):Error(a(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},hn===null?pe.memoizedState=hn=e:hn=hn.next=e}return hn}function oh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(e){var i=rl;return rl+=1,Ps===null&&(Ps=[]),e=P_(Ps,e,i),i=pe,(hn===null?i.memoizedState:hn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Eg:Tg),e}function Ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sl(e);if(e.$$typeof===L)return Bn(e)}throw Error(a(438,String(e)))}function lh(e){var i=null,r=pe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=oh(),pe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=D;return i.index++,r}function xa(e,i){return typeof i=="function"?i(e):i}function Pu(e){var i=dn();return uh(i,Oe,e)}function uh(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var R=E=null,H=null,tt=i,ht=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(ye&gt)===gt:(ja&gt)===gt){var it=tt.revertLane;if(it===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===Us&&(ht=!0);else if((ja&it)===it){tt=tt.next,it===Us&&(ht=!0);continue}else gt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(R=H=gt,E=m):H=H.next=gt,pe.lanes|=it,er|=it;gt=tt.action,Gr&&r(m,gt),m=tt.hasEagerState?tt.eagerState:r(m,gt)}else it={lane:gt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},H===null?(R=H=it,E=m):H=H.next=it,pe.lanes|=gt,er|=gt;tt=tt.next}while(tt!==null&&tt!==i);if(H===null?E=m:H.next=R,!oi(m,e.memoizedState)&&(Tn=!0,ht&&(r=Ls,r!==null)))throw r;e.memoizedState=m,e.baseState=E,e.baseQueue=H,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function ch(e){var i=dn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);oi(m,i.memoizedState)||(Tn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function k_(e,i,r){var u=pe,h=dn(),m=Re;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!oi((Oe||h).memoizedState,r);E&&(h.memoizedState=r,Tn=!0),h=h.queue;var R=q_.bind(null,u,h,e);if(ol(2048,8,R,[e]),h.getSnapshot!==i||E||hn!==null&&hn.memoizedState.tag&1){if(u.flags|=2048,zs(9,zu(),W_.bind(null,u,h,r,i),null),ke===null)throw Error(a(349));m||(ja&124)!==0||X_(u,i,r)}return r}function X_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=pe.updateQueue,i===null?(i=oh(),pe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function W_(e,i,r,u){i.value=r,i.getSnapshot=u,Y_(i)&&j_(e)}function q_(e,i,r){return r(function(){Y_(i)&&j_(e)})}function Y_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!oi(e,r)}catch{return!0}}function j_(e){var i=Rs(e,2);i!==null&&di(i,e,2)}function fh(e){var i=Qn();if(typeof e=="function"){var r=e;if(e=r(),Gr){ut(!0);try{r()}finally{ut(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},i}function Z_(e,i,r,u){return e.baseState=r,uh(e,Oe,typeof u=="function"?u:xa)}function _M(e,i,r,u,h){if(Iu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,K_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function K_(e,i){var r=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var R=r(h,u),H=I.S;H!==null&&H(E,R),Q_(e,i,R)}catch(tt){hh(e,i,tt)}finally{I.T=m}}else try{m=r(h,u),Q_(e,i,m)}catch(tt){hh(e,i,tt)}}function Q_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){J_(e,i,u)},function(u){return hh(e,i,u)}):J_(e,i,r)}function J_(e,i,r){i.status="fulfilled",i.value=r,$_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,K_(e,r)))}function hh(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,$_(i),i=i.next;while(i!==u)}e.action=null}function $_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function tg(e,i){return i}function eg(e,i){if(Re){var r=ke.formState;if(r!==null){t:{var u=pe;if(Re){if(en){e:{for(var h=en,m=Qi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Vi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){en=Vi(h.nextSibling),u=h.data==="F!";break t}}Br(u)}u=!1}u&&(i=r[0])}}return r=Qn(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:i},r.queue=u,r=Sg.bind(null,pe,u),u.dispatch=r,u=fh(!1),m=gh.bind(null,pe,!1,u.queue),u=Qn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,r=_M.bind(null,pe,h,m,r),h.dispatch=r,u.memoizedState=e,[i,r,!1]}function ng(e){var i=dn();return ig(i,Oe,e)}function ig(e,i,r){if(i=uh(e,i,tg)[0],e=Pu(xa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=sl(i)}catch(E){throw E===tl?wu:E}else u=i;i=dn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(pe.flags|=2048,zs(9,zu(),gM.bind(null,h,r),null)),[u,m,e]}function gM(e,i){e.action=i}function ag(e){var i=dn(),r=Oe;if(r!==null)return ig(i,r,e);dn(),i=i.memoizedState,r=dn();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function zs(e,i,r,u){return e={tag:e,create:r,deps:u,inst:i,next:null},i=pe.updateQueue,i===null&&(i=oh(),pe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function zu(){return{destroy:void 0,resource:void 0}}function rg(){return dn().memoizedState}function Bu(e,i,r,u){var h=Qn();u=u===void 0?null:u,pe.flags|=e,h.memoizedState=zs(1|i,zu(),r,u)}function ol(e,i,r,u){var h=dn();u=u===void 0?null:u;var m=h.memoizedState.inst;Oe!==null&&u!==null&&nh(u,Oe.memoizedState.deps)?h.memoizedState=zs(i,m,r,u):(pe.flags|=e,h.memoizedState=zs(1|i,m,r,u))}function sg(e,i){Bu(8390656,8,e,i)}function og(e,i){ol(2048,8,e,i)}function lg(e,i){return ol(4,2,e,i)}function ug(e,i){return ol(4,4,e,i)}function cg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function fg(e,i,r){r=r!=null?r.concat([e]):null,ol(4,4,cg.bind(null,i,e),r)}function dh(){}function hg(e,i){var r=dn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&nh(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function dg(e,i){var r=dn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&nh(i,u[1]))return u[0];if(u=e(),Gr){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[u,i],u}function ph(e,i,r){return r===void 0||(ja&1073741824)!==0?e.memoizedState=i:(e.memoizedState=r,e=_0(),pe.lanes|=e,er|=e,r)}function pg(e,i,r,u){return oi(r,i)?r:Ns.current!==null?(e=ph(e,r,u),oi(e,i)||(Tn=!0),e):(ja&42)===0?(Tn=!0,e.memoizedState=r):(e=_0(),pe.lanes|=e,er|=e,i)}function mg(e,i,r,u,h){var m=X.p;X.p=m!==0&&8>m?m:8;var E=I.T,R={};I.T=R,gh(e,!1,i,r);try{var H=h(),tt=I.S;if(tt!==null&&tt(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var ht=dM(H,u);ll(e,i,ht,hi(e))}else ll(e,i,u,hi(e))}catch(gt){ll(e,i,{then:function(){},status:"rejected",reason:gt},hi())}finally{X.p=m,I.T=E}}function vM(){}function mh(e,i,r,u){if(e.tag!==5)throw Error(a(476));var h=_g(e).queue;mg(e,h,i,q,r===null?vM:function(){return gg(e),r(u)})}function _g(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function gg(e){var i=_g(e).next.queue;ll(e,i,{},hi())}function _h(){return Bn(Al)}function vg(){return dn().memoizedState}function xg(){return dn().memoizedState}function xM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=hi();e=qa(r);var u=Ya(i,e,r);u!==null&&(di(u,i,r),nl(u,i,r)),i={cache:qf()},e.payload=i;return}i=i.return}}function SM(e,i,r){var u=hi();r={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Iu(e)?yg(i,r):(r=zf(e,i,r,u),r!==null&&(di(r,e,u),Mg(r,i,u)))}function Sg(e,i,r){var u=hi();ll(e,i,r,u)}function ll(e,i,r,u){var h={lane:u,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))yg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,R=m(E,r);if(h.hasEagerState=!0,h.eagerState=R,oi(R,E))return yu(e,i,h,0),ke===null&&Su(),!1}catch{}finally{}if(r=zf(e,i,h,u),r!==null)return di(r,e,u),Mg(r,i,u),!0}return!1}function gh(e,i,r,u){if(u={lane:2,revertLane:Zh(),action:u,hasEagerState:!1,eagerState:null,next:null},Iu(e)){if(i)throw Error(a(479))}else i=zf(e,r,u,2),i!==null&&di(i,e,2)}function Iu(e){var i=e.alternate;return e===pe||i!==null&&i===pe}function yg(e,i){Os=Lu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Mg(e,i,r){if((r&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,Ht(e,r)}}var Fu={readContext:Bn,use:Ou,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},Eg={readContext:Bn,use:Ou,useCallback:function(e,i){return Qn().memoizedState=[e,i===void 0?null:i],e},useContext:Bn,useEffect:sg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Bu(4194308,4,cg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Bu(4194308,4,e,i)},useInsertionEffect:function(e,i){Bu(4,2,e,i)},useMemo:function(e,i){var r=Qn();i=i===void 0?null:i;var u=e();if(Gr){ut(!0);try{e()}finally{ut(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=Qn();if(r!==void 0){var h=r(i);if(Gr){ut(!0);try{r(i)}finally{ut(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=SM.bind(null,pe,e),[u.memoizedState,e]},useRef:function(e){var i=Qn();return e={current:e},i.memoizedState=e},useState:function(e){e=fh(e);var i=e.queue,r=Sg.bind(null,pe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:dh,useDeferredValue:function(e,i){var r=Qn();return ph(r,e,i)},useTransition:function(){var e=fh(!1);return e=mg.bind(null,pe,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=pe,h=Qn();if(Re){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),ke===null)throw Error(a(349));(ye&124)!==0||X_(u,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,sg(q_.bind(null,u,m,e),[e]),u.flags|=2048,zs(9,zu(),W_.bind(null,u,m,r,i),null),r},useId:function(){var e=Qn(),i=ke.identifierPrefix;if(Re){var r=_a,u=ma;r=(u&~(1<<32-zt(u)-1)).toString(32)+r,i="«"+i+"R"+r,r=Nu++,0<r&&(i+="H"+r.toString(32)),i+="»"}else r=pM++,i="«"+i+"r"+r.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:_h,useFormState:eg,useActionState:eg,useOptimistic:function(e){var i=Qn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=gh.bind(null,pe,!0,r),r.dispatch=i,[e,i]},useMemoCache:lh,useCacheRefresh:function(){return Qn().memoizedState=xM.bind(null,pe)}},Tg={readContext:Bn,use:Ou,useCallback:hg,useContext:Bn,useEffect:og,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:Pu,useRef:rg,useState:function(){return Pu(xa)},useDebugValue:dh,useDeferredValue:function(e,i){var r=dn();return pg(r,Oe.memoizedState,e,i)},useTransition:function(){var e=Pu(xa)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:sl(e),i]},useSyncExternalStore:k_,useId:vg,useHostTransitionStatus:_h,useFormState:ng,useActionState:ng,useOptimistic:function(e,i){var r=dn();return Z_(r,Oe,e,i)},useMemoCache:lh,useCacheRefresh:xg},yM={readContext:Bn,use:Ou,useCallback:hg,useContext:Bn,useEffect:og,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:ch,useRef:rg,useState:function(){return ch(xa)},useDebugValue:dh,useDeferredValue:function(e,i){var r=dn();return Oe===null?ph(r,e,i):pg(r,Oe.memoizedState,e,i)},useTransition:function(){var e=ch(xa)[0],i=dn().memoizedState;return[typeof e=="boolean"?e:sl(e),i]},useSyncExternalStore:k_,useId:vg,useHostTransitionStatus:_h,useFormState:ag,useActionState:ag,useOptimistic:function(e,i){var r=dn();return Oe!==null?Z_(r,Oe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:lh,useCacheRefresh:xg},Bs=null,ul=0;function Hu(e){var i=ul;return ul+=1,Bs===null&&(Bs=[]),P_(Bs,e,i)}function cl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Gu(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function bg(e){var i=e._init;return i(e._payload)}function Ag(e){function i(Z,k){if(e){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function r(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function u(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function h(Z,k){return Z=pa(Z,k),Z.index=0,Z.sibling=null,Z}function m(Z,k,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function E(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,k,$,pt){return k===null||k.tag!==6?(k=If($,Z.mode,pt),k.return=Z,k):(k=h(k,$),k.return=Z,k)}function H(Z,k,$,pt){var Ft=$.type;return Ft===T?ht(Z,k,$.props.children,pt,$.key):k!==null&&(k.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===F&&bg(Ft)===k.type)?(k=h(k,$.props),cl(k,$),k.return=Z,k):(k=Eu($.type,$.key,$.props,null,Z.mode,pt),cl(k,$),k.return=Z,k)}function tt(Z,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Ff($,Z.mode,pt),k.return=Z,k):(k=h(k,$.children||[]),k.return=Z,k)}function ht(Z,k,$,pt,Ft){return k===null||k.tag!==7?(k=Nr($,Z.mode,pt,Ft),k.return=Z,k):(k=h(k,$),k.return=Z,k)}function gt(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=If(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return $=Eu(k.type,k.key,k.props,null,Z.mode,$),cl($,k),$.return=Z,$;case S:return k=Ff(k,Z.mode,$),k.return=Z,k;case F:var pt=k._init;return k=pt(k._payload),gt(Z,k,$)}if(at(k)||Y(k))return k=Nr(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return gt(Z,Hu(k),$);if(k.$$typeof===L)return gt(Z,Ru(Z,k),$);Gu(Z,k)}return null}function it(Z,k,$,pt){var Ft=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ft!==null?null:R(Z,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Ft?H(Z,k,$,pt):null;case S:return $.key===Ft?tt(Z,k,$,pt):null;case F:return Ft=$._init,$=Ft($._payload),it(Z,k,$,pt)}if(at($)||Y($))return Ft!==null?null:ht(Z,k,$,pt,null);if(typeof $.then=="function")return it(Z,k,Hu($),pt);if($.$$typeof===L)return it(Z,k,Ru(Z,$),pt);Gu(Z,$)}return null}function rt(Z,k,$,pt,Ft){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get($)||null,R(k,Z,""+pt,Ft);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return Z=Z.get(pt.key===null?$:pt.key)||null,H(k,Z,pt,Ft);case S:return Z=Z.get(pt.key===null?$:pt.key)||null,tt(k,Z,pt,Ft);case F:var me=pt._init;return pt=me(pt._payload),rt(Z,k,$,pt,Ft)}if(at(pt)||Y(pt))return Z=Z.get($)||null,ht(k,Z,pt,Ft,null);if(typeof pt.then=="function")return rt(Z,k,$,Hu(pt),Ft);if(pt.$$typeof===L)return rt(Z,k,$,Ru(k,pt),Ft);Gu(k,pt)}return null}function ie(Z,k,$,pt){for(var Ft=null,me=null,Yt=k,ee=k=0,An=null;Yt!==null&&ee<$.length;ee++){Yt.index>ee?(An=Yt,Yt=null):An=Yt.sibling;var be=it(Z,Yt,$[ee],pt);if(be===null){Yt===null&&(Yt=An);break}e&&Yt&&be.alternate===null&&i(Z,Yt),k=m(be,k,ee),me===null?Ft=be:me.sibling=be,me=be,Yt=An}if(ee===$.length)return r(Z,Yt),Re&&Pr(Z,ee),Ft;if(Yt===null){for(;ee<$.length;ee++)Yt=gt(Z,$[ee],pt),Yt!==null&&(k=m(Yt,k,ee),me===null?Ft=Yt:me.sibling=Yt,me=Yt);return Re&&Pr(Z,ee),Ft}for(Yt=u(Yt);ee<$.length;ee++)An=rt(Yt,Z,ee,$[ee],pt),An!==null&&(e&&An.alternate!==null&&Yt.delete(An.key===null?ee:An.key),k=m(An,k,ee),me===null?Ft=An:me.sibling=An,me=An);return e&&Yt.forEach(function(cr){return i(Z,cr)}),Re&&Pr(Z,ee),Ft}function $t(Z,k,$,pt){if($==null)throw Error(a(151));for(var Ft=null,me=null,Yt=k,ee=k=0,An=null,be=$.next();Yt!==null&&!be.done;ee++,be=$.next()){Yt.index>ee?(An=Yt,Yt=null):An=Yt.sibling;var cr=it(Z,Yt,be.value,pt);if(cr===null){Yt===null&&(Yt=An);break}e&&Yt&&cr.alternate===null&&i(Z,Yt),k=m(cr,k,ee),me===null?Ft=cr:me.sibling=cr,me=cr,Yt=An}if(be.done)return r(Z,Yt),Re&&Pr(Z,ee),Ft;if(Yt===null){for(;!be.done;ee++,be=$.next())be=gt(Z,be.value,pt),be!==null&&(k=m(be,k,ee),me===null?Ft=be:me.sibling=be,me=be);return Re&&Pr(Z,ee),Ft}for(Yt=u(Yt);!be.done;ee++,be=$.next())be=rt(Yt,Z,ee,be.value,pt),be!==null&&(e&&be.alternate!==null&&Yt.delete(be.key===null?ee:be.key),k=m(be,k,ee),me===null?Ft=be:me.sibling=be,me=be);return e&&Yt.forEach(function(ME){return i(Z,ME)}),Re&&Pr(Z,ee),Ft}function ze(Z,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:t:{for(var Ft=$.key;k!==null;){if(k.key===Ft){if(Ft=$.type,Ft===T){if(k.tag===7){r(Z,k.sibling),pt=h(k,$.props.children),pt.return=Z,Z=pt;break t}}else if(k.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===F&&bg(Ft)===k.type){r(Z,k.sibling),pt=h(k,$.props),cl(pt,$),pt.return=Z,Z=pt;break t}r(Z,k);break}else i(Z,k);k=k.sibling}$.type===T?(pt=Nr($.props.children,Z.mode,pt,$.key),pt.return=Z,Z=pt):(pt=Eu($.type,$.key,$.props,null,Z.mode,pt),cl(pt,$),pt.return=Z,Z=pt)}return E(Z);case S:t:{for(Ft=$.key;k!==null;){if(k.key===Ft)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){r(Z,k.sibling),pt=h(k,$.children||[]),pt.return=Z,Z=pt;break t}else{r(Z,k);break}else i(Z,k);k=k.sibling}pt=Ff($,Z.mode,pt),pt.return=Z,Z=pt}return E(Z);case F:return Ft=$._init,$=Ft($._payload),ze(Z,k,$,pt)}if(at($))return ie(Z,k,$,pt);if(Y($)){if(Ft=Y($),typeof Ft!="function")throw Error(a(150));return $=Ft.call($),$t(Z,k,$,pt)}if(typeof $.then=="function")return ze(Z,k,Hu($),pt);if($.$$typeof===L)return ze(Z,k,Ru(Z,$),pt);Gu(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(r(Z,k.sibling),pt=h(k,$),pt.return=Z,Z=pt):(r(Z,k),pt=If($,Z.mode,pt),pt.return=Z,Z=pt),E(Z)):r(Z,k)}return function(Z,k,$,pt){try{ul=0;var Ft=ze(Z,k,$,pt);return Bs=null,Ft}catch(Yt){if(Yt===tl||Yt===wu)throw Yt;var me=li(29,Yt,null,Z.mode);return me.lanes=pt,me.return=Z,me}finally{}}}var Is=Ag(!0),Rg=Ag(!1),Ri=J(null),Ji=null;function Za(e){var i=e.alternate;yt(Sn,Sn.current&1),yt(Ri,e),Ji===null&&(i===null||Ns.current!==null||i.memoizedState!==null)&&(Ji=e)}function Cg(e){if(e.tag===22){if(yt(Sn,Sn.current),yt(Ri,e),Ji===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(Ji=e)}}else Ka()}function Ka(){yt(Sn,Sn.current),yt(Ri,Ri.current)}function Sa(e){mt(Ri),Ji===e&&(Ji=null),mt(Sn)}var Sn=J(0);function Vu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||od(r)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function vh(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xh={enqueueSetState:function(e,i,r){e=e._reactInternals;var u=hi(),h=qa(u);h.payload=i,r!=null&&(h.callback=r),i=Ya(e,h,u),i!==null&&(di(i,e,u),nl(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=hi(),h=qa(u);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Ya(e,h,u),i!==null&&(di(i,e,u),nl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=hi(),u=qa(r);u.tag=2,i!=null&&(u.callback=i),i=Ya(e,u,r),i!==null&&(di(i,e,r),nl(i,e,r))}};function wg(e,i,r,u,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!qo(r,u)||!qo(h,m):!0}function Dg(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&xh.enqueueReplaceState(i,i.state,null)}function Vr(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}var ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Ug(e){ku(e)}function Lg(e){console.error(e)}function Ng(e){ku(e)}function Xu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Og(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sh(e,i,r){return r=qa(r),r.tag=3,r.payload={element:null},r.callback=function(){Xu(e,i)},r}function Pg(e){return e=qa(e),e.tag=3,e}function zg(e,i,r,u){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Og(i,r,u)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Og(i,r,u),typeof h!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var R=u.stack;this.componentDidCatch(u.value,{componentStack:R!==null?R:""})})}function MM(e,i,r,u,h){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&Qo(i,r,h,!0),r=Ri.current,r!==null){switch(r.tag){case 13:return Ji===null?Xh():r.alternate===null&&nn===0&&(nn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,u===Zf?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),qh(e,u,h)),!1;case 22:return r.flags|=65536,u===Zf?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),qh(e,u,h)),!1}throw Error(a(435,r.tag))}return qh(e,u,h),Xh(),!1}if(Re)return i=Ri.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Vf&&(e=Error(a(422),{cause:u}),Ko(Ei(e,r)))):(u!==Vf&&(i=Error(a(423),{cause:u}),Ko(Ei(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Ei(u,r),h=Sh(e.stateNode,u,h),Jf(e,h),nn!==4&&(nn=2)),!1;var m=Error(a(520),{cause:u});if(m=Ei(m,r),gl===null?gl=[m]:gl.push(m),nn!==4&&(nn=2),i===null)return!0;u=Ei(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Sh(r.stateNode,u,e),Jf(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nr===null||!nr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Pg(h),zg(h,e,r,u),Jf(r,h),!1}r=r.return}while(r!==null);return!1}var Bg=Error(a(461)),Tn=!1;function Dn(e,i,r,u){i.child=e===null?Rg(i,null,r,u):Is(i,e.child,r,u)}function Ig(e,i,r,u,h){r=r.render;var m=i.ref;if("ref"in u){var E={};for(var R in u)R!=="ref"&&(E[R]=u[R])}else E=u;return Fr(i),u=ih(e,i,r,E,m,h),R=ah(),e!==null&&!Tn?(rh(e,i,h),ya(e,i,h)):(Re&&R&&Hf(i),i.flags|=1,Dn(e,i,u,h),i.child)}function Fg(e,i,r,u,h){if(e===null){var m=r.type;return typeof m=="function"&&!Bf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Hg(e,i,m,u,h)):(e=Eu(r.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Ch(e,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:qo,r(E,u)&&e.ref===i.ref)return ya(e,i,h)}return i.flags|=1,e=pa(m,u),e.ref=i.ref,e.return=i,i.child=e}function Hg(e,i,r,u,h){if(e!==null){var m=e.memoizedProps;if(qo(m,u)&&e.ref===i.ref)if(Tn=!1,i.pendingProps=u=m,Ch(e,h))(e.flags&131072)!==0&&(Tn=!0);else return i.lanes=e.lanes,ya(e,i,h)}return yh(e,i,r,u,h)}function Gg(e,i,r){var u=i.pendingProps,h=u.children,m=e!==null?e.memoizedState:null;if(u.mode==="hidden"){if((i.flags&128)!==0){if(u=m!==null?m.baseLanes|r:r,e!==null){for(h=i.child=e.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;i.childLanes=m&~u}else i.childLanes=0,i.child=null;return Vg(e,i,u,r)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cu(i,m!==null?m.cachePool:null),m!==null?H_(i,m):th(),Cg(i);else return i.lanes=i.childLanes=536870912,Vg(e,i,m!==null?m.baseLanes|r:r,r)}else m!==null?(Cu(i,m.cachePool),H_(i,m),Ka(),i.memoizedState=null):(e!==null&&Cu(i,null),th(),Ka());return Dn(e,i,h,r),i.child}function Vg(e,i,r,u){var h=jf();return h=h===null?null:{parent:xn._currentValue,pool:h},i.memoizedState={baseLanes:r,cachePool:h},e!==null&&Cu(i,null),th(),Cg(i),e!==null&&Qo(e,i,u,!0),null}function Wu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function yh(e,i,r,u,h){return Fr(i),r=ih(e,i,r,u,void 0,h),u=ah(),e!==null&&!Tn?(rh(e,i,h),ya(e,i,h)):(Re&&u&&Hf(i),i.flags|=1,Dn(e,i,r,h),i.child)}function kg(e,i,r,u,h,m){return Fr(i),i.updateQueue=null,r=V_(i,u,r,h),G_(e),u=ah(),e!==null&&!Tn?(rh(e,i,m),ya(e,i,m)):(Re&&u&&Hf(i),i.flags|=1,Dn(e,i,r,m),i.child)}function Xg(e,i,r,u,h){if(Fr(i),i.stateNode===null){var m=Cs,E=r.contextType;typeof E=="object"&&E!==null&&(m=Bn(E)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=xh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},Kf(i),E=r.contextType,m.context=typeof E=="object"&&E!==null?Bn(E):Cs,m.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(vh(i,r,E,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&xh.enqueueReplaceState(m,m.state,null),al(i,u,m,h),il(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var R=i.memoizedProps,H=Vr(r,R);m.props=H;var tt=m.context,ht=r.contextType;E=Cs,typeof ht=="object"&&ht!==null&&(E=Bn(ht));var gt=r.getDerivedStateFromProps;ht=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(R||tt!==E)&&Dg(i,m,u,E),Wa=!1;var it=i.memoizedState;m.state=it,al(i,u,m,h),il(),tt=i.memoizedState,R||it!==tt||Wa?(typeof gt=="function"&&(vh(i,r,gt,u),tt=i.memoizedState),(H=Wa||wg(i,r,H,u,it,tt,E))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=tt),m.props=u,m.state=tt,m.context=E,u=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,Qf(e,i),E=i.memoizedProps,ht=Vr(r,E),m.props=ht,gt=i.pendingProps,it=m.context,tt=r.contextType,H=Cs,typeof tt=="object"&&tt!==null&&(H=Bn(tt)),R=r.getDerivedStateFromProps,(tt=typeof R=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==gt||it!==H)&&Dg(i,m,u,H),Wa=!1,it=i.memoizedState,m.state=it,al(i,u,m,h),il();var rt=i.memoizedState;E!==gt||it!==rt||Wa||e!==null&&e.dependencies!==null&&Au(e.dependencies)?(typeof R=="function"&&(vh(i,r,R,u),rt=i.memoizedState),(ht=Wa||wg(i,r,ht,u,it,rt,H)||e!==null&&e.dependencies!==null&&Au(e.dependencies))?(tt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,rt,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,rt,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),m.props=u,m.state=rt,m.context=H,u=ht):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,Wu(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=Is(i,e.child,null,h),i.child=Is(i,null,r,h)):Dn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=ya(e,i,h),e}function Wg(e,i,r,u){return Zo(),i.flags|=256,Dn(e,i,r,u),i.child}var Mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(e){return{baseLanes:e,cachePool:L_()}}function Th(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Ci),e}function qg(e,i,r){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(Sn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(h?Za(i):Ka(),Re){var R=en,H;if(H=R){t:{for(H=R,R=Qi;H.nodeType!==8;){if(!R){R=null;break t}if(H=Vi(H.nextSibling),H===null){R=null;break t}}R=H}R!==null?(i.memoizedState={dehydrated:R,treeContext:Or!==null?{id:ma,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},H=li(18,null,null,0),H.stateNode=R,H.return=i,i.child=H,Wn=i,en=null,H=!0):H=!1}H||Br(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return od(R)?i.lanes=32:i.lanes=536870912,null;Sa(i)}return R=u.children,u=u.fallback,h?(Ka(),h=i.mode,R=qu({mode:"hidden",children:R},h),u=Nr(u,h,r,null),R.return=i,u.return=i,R.sibling=u,i.child=R,h=i.child,h.memoizedState=Eh(r),h.childLanes=Th(e,E,r),i.memoizedState=Mh,u):(Za(i),bh(i,R))}if(H=e.memoizedState,H!==null&&(R=H.dehydrated,R!==null)){if(m)i.flags&256?(Za(i),i.flags&=-257,i=Ah(e,i,r)):i.memoizedState!==null?(Ka(),i.child=e.child,i.flags|=128,i=null):(Ka(),h=u.fallback,R=i.mode,u=qu({mode:"visible",children:u.children},R),h=Nr(h,R,r,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,Is(i,e.child,null,r),u=i.child,u.memoizedState=Eh(r),u.childLanes=Th(e,E,r),i.memoizedState=Mh,i=h);else if(Za(i),od(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var tt=E.dgst;E=tt,u=Error(a(419)),u.stack="",u.digest=E,Ko({value:u,source:null,stack:null}),i=Ah(e,i,r)}else if(Tn||Qo(e,i,r,!1),E=(r&e.childLanes)!==0,Tn||E){if(E=ke,E!==null&&(u=r&-r,u=(u&42)!==0?1:ae(u),u=(u&(E.suspendedLanes|r))!==0?0:u,u!==0&&u!==H.retryLane))throw H.retryLane=u,Rs(e,u),di(E,e,u),Bg;R.data==="$?"||Xh(),i=Ah(e,i,r)}else R.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,en=Vi(R.nextSibling),Wn=i,Re=!0,zr=null,Qi=!1,e!==null&&(bi[Ai++]=ma,bi[Ai++]=_a,bi[Ai++]=Or,ma=e.id,_a=e.overflow,Or=i),i=bh(i,u.children),i.flags|=4096);return i}return h?(Ka(),h=u.fallback,R=i.mode,H=e.child,tt=H.sibling,u=pa(H,{mode:"hidden",children:u.children}),u.subtreeFlags=H.subtreeFlags&65011712,tt!==null?h=pa(tt,h):(h=Nr(h,R,r,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,R=e.child.memoizedState,R===null?R=Eh(r):(H=R.cachePool,H!==null?(tt=xn._currentValue,H=H.parent!==tt?{parent:tt,pool:tt}:H):H=L_(),R={baseLanes:R.baseLanes|r,cachePool:H}),h.memoizedState=R,h.childLanes=Th(e,E,r),i.memoizedState=Mh,u):(Za(i),r=e.child,e=r.sibling,r=pa(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=r,i.memoizedState=null,r)}function bh(e,i){return i=qu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function qu(e,i){return e=li(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ah(e,i,r){return Is(i,e.child,null,r),e=bh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Yg(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),Xf(e.return,i,r)}function Rh(e,i,r,u,h){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=r,m.tailMode=h)}function jg(e,i,r){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(Dn(e,i,u.children,r),u=Sn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yg(e,r,i);else if(e.tag===19)Yg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}u&=1}switch(yt(Sn,u),h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Vu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Rh(i,!1,h,r,m);break;case"backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Vu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Rh(i,!0,r,null,m);break;case"together":Rh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ya(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),er|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Qo(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=pa(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=pa(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Ch(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Au(e)))}function EM(e,i,r){switch(i.tag){case 3:St(i,i.stateNode.containerInfo),Xa(i,xn,e.memoizedState.cache),Zo();break;case 27:case 5:Wt(i);break;case 4:St(i,i.stateNode.containerInfo);break;case 10:Xa(i,i.type,i.memoizedProps.value);break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(Za(i),i.flags|=128,null):(r&i.child.childLanes)!==0?qg(e,i,r):(Za(i),e=ya(e,i,r),e!==null?e.sibling:null);Za(i);break;case 19:var h=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(Qo(e,i,r,!1),u=(r&i.childLanes)!==0),h){if(u)return jg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),yt(Sn,Sn.current),u)break;return null;case 22:case 23:return i.lanes=0,Gg(e,i,r);case 24:Xa(i,xn,e.memoizedState.cache)}return ya(e,i,r)}function Zg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Tn=!0;else{if(!Ch(e,r)&&(i.flags&128)===0)return Tn=!1,EM(e,i,r);Tn=(e.flags&131072)!==0}else Tn=!1,Re&&(i.flags&1048576)!==0&&b_(i,bu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var u=i.elementType,h=u._init;if(u=h(u._payload),i.type=u,typeof u=="function")Bf(u)?(e=Vr(u,e),i.tag=1,i=Xg(null,i,u,e,r)):(i.tag=0,i=yh(null,i,u,e,r));else{if(u!=null){if(h=u.$$typeof,h===C){i.tag=11,i=Ig(null,i,u,e,r);break t}else if(h===P){i.tag=14,i=Fg(null,i,u,e,r);break t}}throw i=ct(u)||u,Error(a(306,i,""))}}return i;case 0:return yh(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,h=Vr(u,i.pendingProps),Xg(e,i,u,h,r);case 3:t:{if(St(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,Qf(e,i),al(i,u,null,r);var E=i.memoizedState;if(u=E.cache,Xa(i,xn,u),u!==m.cache&&Wf(i,[xn],r,!0),il(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Wg(e,i,u,r);break t}else if(u!==h){h=Ei(Error(a(424)),i),Ko(h),i=Wg(e,i,u,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(en=Vi(e.firstChild),Wn=i,Re=!0,zr=null,Qi=!0,r=Rg(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Zo(),u===h){i=ya(e,i,r);break t}Dn(e,i,u,r)}i=i.child}return i;case 26:return Wu(e,i),e===null?(r=$0(i.type,null,i.pendingProps,null))?i.memoizedState=r:Re||(r=i.type,e=i.pendingProps,u=sc(K.current).createElement(r),u[vn]=i,u[$e]=e,Ln(u,r,e),fn(u),i.stateNode=u):i.memoizedState=$0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Wt(i),e===null&&Re&&(u=i.stateNode=K0(i.type,i.pendingProps,K.current),Wn=i,Qi=!0,h=en,rr(i.type)?(ld=h,en=Vi(u.firstChild)):en=h),Dn(e,i,i.pendingProps.children,r),Wu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((h=u=en)&&(u=QM(u,i.type,i.pendingProps,Qi),u!==null?(i.stateNode=u,Wn=i,en=Vi(u.firstChild),Qi=!1,h=!0):h=!1),h||Br(i)),Wt(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,u=m.children,ad(h,m)?u=null:E!==null&&ad(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=ih(e,i,mM,null,null,r),Al._currentValue=h),Wu(e,i),Dn(e,i,u,r),i.child;case 6:return e===null&&Re&&((e=r=en)&&(r=JM(r,i.pendingProps,Qi),r!==null?(i.stateNode=r,Wn=i,en=null,e=!0):e=!1),e||Br(i)),null;case 13:return qg(e,i,r);case 4:return St(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=Is(i,null,u,r):Dn(e,i,u,r),i.child;case 11:return Ig(e,i,i.type,i.pendingProps,r);case 7:return Dn(e,i,i.pendingProps,r),i.child;case 8:return Dn(e,i,i.pendingProps.children,r),i.child;case 12:return Dn(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,Xa(i,i.type,u.value),Dn(e,i,u.children,r),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,Fr(i),h=Bn(h),u=u(h),i.flags|=1,Dn(e,i,u,r),i.child;case 14:return Fg(e,i,i.type,i.pendingProps,r);case 15:return Hg(e,i,i.type,i.pendingProps,r);case 19:return jg(e,i,r);case 31:return u=i.pendingProps,r=i.mode,u={mode:u.mode,children:u.children},e===null?(r=qu(u,r),r.ref=i.ref,i.child=r,r.return=i,i=r):(r=pa(e.child,u),r.ref=i.ref,i.child=r,r.return=i,i=r),i;case 22:return Gg(e,i,r);case 24:return Fr(i),u=Bn(xn),e===null?(h=jf(),h===null&&(h=ke,m=qf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:u,cache:h},Kf(i),Xa(i,xn,h)):((e.lanes&r)!==0&&(Qf(e,i),al(i,null,null,r),il()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Xa(i,xn,u)):(u=m.cache,Xa(i,xn,u),u!==h.cache&&Wf(i,[xn],r,!0))),Dn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ma(e){e.flags|=4}function Kg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!av(i)){if(i=Ri.current,i!==null&&((ye&4194048)===ye?Ji!==null:(ye&62914560)!==ye&&(ye&536870912)===0||i!==Ji))throw el=Zf,N_;e.flags|=8192}}function Yu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?At():536870912,e.lanes|=i,Vs|=i)}function fl(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function TM(e,i,r){var u=i.pendingProps;switch(Gf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),va(xn),Zt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(i)?Ma(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,C_())),Ke(i),null;case 26:return r=i.memoizedState,e===null?(Ma(i),r!==null?(Ke(i),Kg(i,r)):(Ke(i),i.flags&=-16777217)):r?r!==e.memoizedState?(Ma(i),Ke(i),Kg(i,r)):(Ke(i),i.flags&=-16777217):(e.memoizedProps!==u&&Ma(i),Ke(i),i.flags&=-16777217),null;case 27:de(i),r=K.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Ma(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}e=Rt.current,jo(i)?A_(i):(e=K0(h,u,r),i.stateNode=e,Ma(i))}return Ke(i),null;case 5:if(de(i),r=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Ma(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}if(e=Rt.current,jo(i))A_(i);else{switch(h=sc(K.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?e.multiple=!0:u.size&&(e.size=u.size);break;default:e=typeof u.is=="string"?h.createElement(r,{is:u.is}):h.createElement(r)}}e[vn]=i,e[$e]=u;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Ln(e,r,u),r){case"button":case"input":case"select":case"textarea":e=!!u.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ma(i)}}return Ke(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Ma(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=K.current,jo(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,h=Wn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[vn]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||k0(e.nodeValue,r)),e||Br(i)}else e=sc(e).createTextNode(u),e[vn]=i,i.stateNode=e}return Ke(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=jo(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[vn]=i}else Zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),h=!1}else h=C_(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Sa(i),i):(Sa(i),null)}if(Sa(i),(i.flags&128)!==0)return i.lanes=r,i;if(r=u!==null,e=e!==null&&e.memoizedState!==null,r){u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return r!==e&&r&&(i.child.flags|=8192),Yu(i,i.updateQueue),Ke(i),null;case 4:return Zt(),e===null&&$h(i.stateNode.containerInfo),Ke(i),null;case 10:return va(i.type),Ke(i),null;case 19:if(mt(Sn),h=i.memoizedState,h===null)return Ke(i),null;if(u=(i.flags&128)!==0,m=h.rendering,m===null)if(u)fl(h,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Vu(e),m!==null){for(i.flags|=128,fl(h,!1),e=m.updateQueue,i.updateQueue=e,Yu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)T_(r,e),r=r.sibling;return yt(Sn,Sn.current&1|2),i.child}e=e.sibling}h.tail!==null&&Pt()>Ku&&(i.flags|=128,u=!0,fl(h,!1),i.lanes=4194304)}else{if(!u)if(e=Vu(m),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Yu(i,e),fl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Re)return Ke(i),null}else 2*Pt()-h.renderingStartTime>Ku&&r!==536870912&&(i.flags|=128,u=!0,fl(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(e=h.last,e!==null?e.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Pt(),i.sibling=null,e=Sn.current,yt(Sn,u?e&1|2:e&1),i):(Ke(i),null);case 22:case 23:return Sa(i),eh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),r=i.updateQueue,r!==null&&Yu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&mt(Hr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),va(xn),Ke(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function bM(e,i){switch(Gf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return va(xn),Zt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return de(i),null;case 13:if(Sa(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Zo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return mt(Sn),null;case 4:return Zt(),null;case 10:return va(i.type),null;case 22:case 23:return Sa(i),eh(),e!==null&&mt(Hr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return va(xn),null;case 25:return null;default:return null}}function Qg(e,i){switch(Gf(i),i.tag){case 3:va(xn),Zt();break;case 26:case 27:case 5:de(i);break;case 4:Zt();break;case 13:Sa(i);break;case 19:mt(Sn);break;case 10:va(i.type);break;case 22:case 23:Sa(i),eh(),e!==null&&mt(Hr);break;case 24:va(xn)}}function hl(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){u=void 0;var m=r.create,E=r.inst;u=m(),E.destroy=u}r=r.next}while(r!==h)}}catch(R){Fe(i,i.return,R)}}function Qa(e,i,r){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var E=u.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,h=i;var H=r,tt=R;try{tt()}catch(ht){Fe(h,H,ht)}}}u=u.next}while(u!==m)}}catch(ht){Fe(i,i.return,ht)}}function Jg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{F_(i,r)}catch(u){Fe(e,e.return,u)}}}function $g(e,i,r){r.props=Vr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){Fe(e,i,u)}}function dl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof r=="function"?e.refCleanup=r(u):r.current=u}}catch(h){Fe(e,i,h)}}function $i(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(h){Fe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Fe(e,i,h)}else r.current=null}function t0(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(h){Fe(e,e.return,h)}}function wh(e,i,r){try{var u=e.stateNode;qM(u,e.type,r,i),u[$e]=i}catch(h){Fe(e,e.return,h)}}function e0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rr(e.type)||e.tag===4}function Dh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||e0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uh(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=rc));else if(u!==4&&(u===27&&rr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Uh(e,i,r),e=e.sibling;e!==null;)Uh(e,i,r),e=e.sibling}function ju(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&(u===27&&rr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(ju(e,i,r),e=e.sibling;e!==null;)ju(e,i,r),e=e.sibling}function n0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ln(i,u,r),i[vn]=e,i[$e]=r}catch(m){Fe(e,e.return,m)}}var Ea=!1,ln=!1,Lh=!1,i0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function AM(e,i){if(e=e.containerInfo,nd=hc,e=p_(e),Df(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,R=-1,H=-1,tt=0,ht=0,gt=e,it=null;e:for(;;){for(var rt;gt!==r||h!==0&&gt.nodeType!==3||(R=E+h),gt!==m||u!==0&&gt.nodeType!==3||(H=E+u),gt.nodeType===3&&(E+=gt.nodeValue.length),(rt=gt.firstChild)!==null;)it=gt,gt=rt;for(;;){if(gt===e)break e;if(it===r&&++tt===h&&(R=E),it===m&&++ht===u&&(H=E),(rt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=rt}r=R===-1||H===-1?null:{start:R,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(id={focusedElem:e,selectionRange:r},hc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,m=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var ie=Vr(r.type,h,r.elementType===r.type);e=u.getSnapshotBeforeUpdate(ie,m),u.__reactInternalSnapshotBeforeUpdate=e}catch($t){Fe(r,r.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)sd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function a0(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ja(e,r),u&4&&hl(5,r);break;case 1:if(Ja(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(E){Fe(r,r.return,E)}else{var h=Vr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Fe(r,r.return,E)}}u&64&&Jg(r),u&512&&dl(r,r.return);break;case 3:if(Ja(e,r),u&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{F_(e,i)}catch(E){Fe(r,r.return,E)}}break;case 27:i===null&&u&4&&n0(r);case 26:case 5:Ja(e,r),i===null&&u&4&&t0(r),u&512&&dl(r,r.return);break;case 12:Ja(e,r);break;case 13:Ja(e,r),u&4&&o0(e,r),u&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=PM.bind(null,r),$M(e,r))));break;case 22:if(u=r.memoizedState!==null||Ea,!u){i=i!==null&&i.memoizedState!==null||ln,h=Ea;var m=ln;Ea=u,(ln=i)&&!m?$a(e,r,(r.subtreeFlags&8772)!==0):Ja(e,r),Ea=h,ln=m}break;case 30:break;default:Ja(e,r)}}function r0(e){var i=e.alternate;i!==null&&(e.alternate=null,r0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&xs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Jn=!1;function Ta(e,i,r){for(r=r.child;r!==null;)s0(e,i,r),r=r.sibling}function s0(e,i,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(ft,r)}catch{}switch(r.tag){case 26:ln||$i(r,i),Ta(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ln||$i(r,i);var u=qe,h=Jn;rr(r.type)&&(qe=r.stateNode,Jn=!1),Ta(e,i,r),Ml(r.stateNode),qe=u,Jn=h;break;case 5:ln||$i(r,i);case 6:if(u=qe,h=Jn,qe=null,Ta(e,i,r),qe=u,Jn=h,qe!==null)if(Jn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(r.stateNode)}catch(m){Fe(r,i,m)}else try{qe.removeChild(r.stateNode)}catch(m){Fe(r,i,m)}break;case 18:qe!==null&&(Jn?(e=qe,j0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Dl(e)):j0(qe,r.stateNode));break;case 4:u=qe,h=Jn,qe=r.stateNode.containerInfo,Jn=!0,Ta(e,i,r),qe=u,Jn=h;break;case 0:case 11:case 14:case 15:ln||Qa(2,r,i),ln||Qa(4,r,i),Ta(e,i,r);break;case 1:ln||($i(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&$g(r,i,u)),Ta(e,i,r);break;case 21:Ta(e,i,r);break;case 22:ln=(u=ln)||r.memoizedState!==null,Ta(e,i,r),ln=u;break;default:Ta(e,i,r)}}function o0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dl(e)}catch(r){Fe(i,i.return,r)}}function RM(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new i0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new i0),i;default:throw Error(a(435,e.tag))}}function Nh(e,i){var r=RM(e);i.forEach(function(u){var h=zM.bind(null,e,u);r.has(u)||(r.add(u),u.then(h,h))})}function ui(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var h=r[u],m=e,E=i,R=E;t:for(;R!==null;){switch(R.tag){case 27:if(rr(R.type)){qe=R.stateNode,Jn=!1;break t}break;case 5:qe=R.stateNode,Jn=!1;break t;case 3:case 4:qe=R.stateNode.containerInfo,Jn=!0;break t}R=R.return}if(qe===null)throw Error(a(160));s0(m,E,h),qe=null,Jn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)l0(i,e),i=i.sibling}var Gi=null;function l0(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ui(i,e),ci(e),u&4&&(Qa(3,e,e.return),hl(3,e),Qa(5,e,e.return));break;case 1:ui(i,e),ci(e),u&512&&(ln||r===null||$i(r,r.return)),u&64&&Ea&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var h=Gi;if(ui(i,e),ci(e),u&512&&(ln||r===null||$i(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Ki]||m[vn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Ln(m,u,r),m[vn]=e,fn(m),u=m;break t;case"link":var E=nv("link","href",h).get(u+(r.href||""));if(E){for(var R=0;R<E.length;R++)if(m=E[R],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(R,1);break e}}m=h.createElement(u),Ln(m,u,r),h.head.appendChild(m);break;case"meta":if(E=nv("meta","content",h).get(u+(r.content||""))){for(R=0;R<E.length;R++)if(m=E[R],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(R,1);break e}}m=h.createElement(u),Ln(m,u,r),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[vn]=e,fn(m),u=m}e.stateNode=u}else iv(h,e.type,e.stateNode);else e.stateNode=ev(h,u,e.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?iv(h,e.type,e.stateNode):ev(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&wh(e,e.memoizedProps,r.memoizedProps)}break;case 27:ui(i,e),ci(e),u&512&&(ln||r===null||$i(r,r.return)),r!==null&&u&4&&wh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ui(i,e),ci(e),u&512&&(ln||r===null||$i(r,r.return)),e.flags&32){h=e.stateNode;try{Zn(h,"")}catch(rt){Fe(e,e.return,rt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,wh(e,h,r!==null?r.memoizedProps:h)),u&1024&&(Lh=!0);break;case 6:if(ui(i,e),ci(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(rt){Fe(e,e.return,rt)}}break;case 3:if(uc=null,h=Gi,Gi=oc(i.containerInfo),ui(i,e),Gi=h,ci(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Dl(i.containerInfo)}catch(rt){Fe(e,e.return,rt)}Lh&&(Lh=!1,u0(e));break;case 4:u=Gi,Gi=oc(e.stateNode.containerInfo),ui(i,e),ci(e),Gi=u;break;case 12:ui(i,e),ci(e);break;case 13:ui(i,e),ci(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Fh=Pt()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Nh(e,u)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,tt=Ea,ht=ln;if(Ea=tt||h,ln=ht||H,ui(i,e),ln=ht,Ea=tt,ci(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||Ea||ln||kr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(m=H.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=H.stateNode;var gt=H.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;R.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(rt){Fe(H,H.return,rt)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(rt){Fe(H,H.return,rt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,Nh(e,r))));break;case 19:ui(i,e),ci(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Nh(e,u)));break;case 30:break;case 21:break;default:ui(i,e),ci(e)}}function ci(e){var i=e.flags;if(i&2){try{for(var r,u=e.return;u!==null;){if(e0(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Dh(e);ju(e,m,h);break;case 5:var E=r.stateNode;r.flags&32&&(Zn(E,""),r.flags&=-33);var R=Dh(e);ju(e,R,E);break;case 3:case 4:var H=r.stateNode.containerInfo,tt=Dh(e);Uh(e,tt,H);break;default:throw Error(a(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function u0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;u0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ja(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)a0(e,i.alternate,i),i=i.sibling}function kr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Qa(4,i,i.return),kr(i);break;case 1:$i(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&$g(i,i.return,r),kr(i);break;case 27:Ml(i.stateNode);case 26:case 5:$i(i,i.return),kr(i);break;case 22:i.memoizedState===null&&kr(i);break;case 30:kr(i);break;default:kr(i)}e=e.sibling}}function $a(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:$a(h,m,r),hl(4,m);break;case 1:if($a(h,m,r),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(tt){Fe(u,u.return,tt)}if(u=m,h=u.updateQueue,h!==null){var R=u.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)I_(H[h],R)}catch(tt){Fe(u,u.return,tt)}}r&&E&64&&Jg(m),dl(m,m.return);break;case 27:n0(m);case 26:case 5:$a(h,m,r),r&&u===null&&E&4&&t0(m),dl(m,m.return);break;case 12:$a(h,m,r);break;case 13:$a(h,m,r),r&&E&4&&o0(h,m);break;case 22:m.memoizedState===null&&$a(h,m,r),dl(m,m.return);break;case 30:break;default:$a(h,m,r)}i=i.sibling}}function Oh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Jo(r))}function Ph(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Jo(e))}function ta(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)c0(e,i,r,u),i=i.sibling}function c0(e,i,r,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ta(e,i,r,u),h&2048&&hl(9,i);break;case 1:ta(e,i,r,u);break;case 3:ta(e,i,r,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Jo(e)));break;case 12:if(h&2048){ta(e,i,r,u),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,R=m.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Fe(i,i.return,H)}}else ta(e,i,r,u);break;case 13:ta(e,i,r,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?ta(e,i,r,u):pl(e,i):m._visibility&2?ta(e,i,r,u):(m._visibility|=2,Fs(e,i,r,u,(i.subtreeFlags&10256)!==0)),h&2048&&Oh(E,i);break;case 24:ta(e,i,r,u),h&2048&&Ph(i.alternate,i);break;default:ta(e,i,r,u)}}function Fs(e,i,r,u,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=e,E=i,R=r,H=u,tt=E.flags;switch(E.tag){case 0:case 11:case 15:Fs(m,E,R,H,h),hl(8,E);break;case 23:break;case 22:var ht=E.stateNode;E.memoizedState!==null?ht._visibility&2?Fs(m,E,R,H,h):pl(m,E):(ht._visibility|=2,Fs(m,E,R,H,h)),h&&tt&2048&&Oh(E.alternate,E);break;case 24:Fs(m,E,R,H,h),h&&tt&2048&&Ph(E.alternate,E);break;default:Fs(m,E,R,H,h)}i=i.sibling}}function pl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,h=u.flags;switch(u.tag){case 22:pl(r,u),h&2048&&Oh(u.alternate,u);break;case 24:pl(r,u),h&2048&&Ph(u.alternate,u);break;default:pl(r,u)}i=i.sibling}}var ml=8192;function Hs(e){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)f0(e),e=e.sibling}function f0(e){switch(e.tag){case 26:Hs(e),e.flags&ml&&e.memoizedState!==null&&hE(Gi,e.memoizedState,e.memoizedProps);break;case 5:Hs(e);break;case 3:case 4:var i=Gi;Gi=oc(e.stateNode.containerInfo),Hs(e),Gi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ml,ml=16777216,Hs(e),ml=i):Hs(e));break;default:Hs(e)}}function h0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function _l(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];bn=u,p0(u,e)}h0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)d0(e),e=e.sibling}function d0(e){switch(e.tag){case 0:case 11:case 15:_l(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:_l(e);break;case 12:_l(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Zu(e)):_l(e);break;default:_l(e)}}function Zu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];bn=u,p0(u,e)}h0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Qa(8,i,i.return),Zu(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Zu(i));break;default:Zu(i)}e=e.sibling}}function p0(e,i){for(;bn!==null;){var r=bn;switch(r.tag){case 0:case 11:case 15:Qa(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Jo(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,bn=u;else t:for(r=e;bn!==null;){u=bn;var h=u.sibling,m=u.return;if(r0(u),u===r){bn=null;break t}if(h!==null){h.return=m,bn=h;break t}bn=m}}}var CM={getCacheForType:function(e){var i=Bn(xn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r}},wM=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,ge=null,ye=0,Ue=0,fi=null,tr=!1,Gs=!1,zh=!1,ba=0,nn=0,er=0,Xr=0,Bh=0,Ci=0,Vs=0,gl=null,$n=null,Ih=!1,Fh=0,Ku=1/0,Qu=null,nr=null,Un=0,ir=null,ks=null,Xs=0,Hh=0,Gh=null,m0=null,vl=0,Vh=null;function hi(){if((De&2)!==0&&ye!==0)return ye&-ye;if(I.T!==null){var e=Us;return e!==0?e:Zh()}return Me()}function _0(){Ci===0&&(Ci=(ye&536870912)===0||Re?W():536870912);var e=Ri.current;return e!==null&&(e.flags|=32),Ci}function di(e,i,r){(e===ke&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Ws(e,0),ar(e,ye,Ci,!1)),Bt(e,r),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(Xr|=r),nn===4&&ar(e,ye,Ci,!1)),ea(e))}function g0(e,i,r){if((De&6)!==0)throw Error(a(327));var u=!r&&(i&124)===0&&(i&e.expiredLanes)===0||Dt(e,i),h=u?LM(e,i):Wh(e,i,!0),m=u;do{if(h===0){Gs&&!u&&ar(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!DM(r)){h=Wh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var R=e;h=gl;var H=R.current.memoizedState.isDehydrated;if(H&&(Ws(R,E).flags|=256),E=Wh(R,E,!1),E!==2){if(zh&&!H){R.errorRecoveryDisabledLanes|=m,Xr|=m,h=4;break t}m=$n,$n=h,m!==null&&($n===null?$n=m:$n.push.apply($n,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){Ws(e,0),ar(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ar(u,i,Ci,!tr);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Fh+300-Pt(),10<h)){if(ar(u,i,Ci,!tr),Vt(u,0,!0)!==0)break t;u.timeoutHandle=q0(v0.bind(null,u,r,$n,Qu,Ih,i,Ci,Xr,Vs,tr,m,2,-0,0),h);break t}v0(u,r,$n,Qu,Ih,i,Ci,Xr,Vs,tr,m,0,-0,0)}}break}while(!0);ea(e)}function v0(e,i,r,u,h,m,E,R,H,tt,ht,gt,it,rt){if(e.timeoutHandle=-1,gt=i.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(bl={stylesheets:null,count:0,unsuspend:fE},f0(i),gt=dE(),gt!==null)){e.cancelPendingCommit=gt(b0.bind(null,e,i,m,r,u,h,E,R,H,ht,1,it,rt)),ar(e,m,E,!tt);return}b0(e,i,m,r,u,h,E,R,H)}function DM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var h=r[u],m=h.getSnapshot;h=h.value;try{if(!oi(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(e,i,r,u){i&=~Bh,i&=~Xr,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-zt(h),E=1<<m;u[m]=-1,h&=~E}r!==0&&vt(e,r,i)}function Ju(){return(De&6)===0?(xl(0),!1):!0}function kh(){if(ge!==null){if(Ue===0)var e=ge.return;else e=ge,ga=Ir=null,sh(e),Bs=null,ul=0,e=ge;for(;e!==null;)Qg(e.alternate,e),e=e.return;ge=null}}function Ws(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,jM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),kh(),ke=e,ge=r=pa(e.current,null),ye=i,Ue=0,fi=null,tr=!1,Gs=Dt(e,i),zh=!1,Vs=Ci=Bh=Xr=er=nn=0,$n=gl=null,Ih=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-zt(u),m=1<<h;i|=e[h],u&=~m}return ba=i,Su(),r}function x0(e,i){pe=null,I.H=Fu,i===tl||i===wu?(i=z_(),Ue=3):i===N_?(i=z_(),Ue=4):Ue=i===Bg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,ge===null&&(nn=1,Xu(e,Ei(i,e.current)))}function S0(){var e=I.H;return I.H=Fu,e===null?Fu:e}function y0(){var e=I.A;return I.A=CM,e}function Xh(){nn=4,tr||(ye&4194048)!==ye&&Ri.current!==null||(Gs=!0),(er&134217727)===0&&(Xr&134217727)===0||ke===null||ar(ke,ye,Ci,!1)}function Wh(e,i,r){var u=De;De|=2;var h=S0(),m=y0();(ke!==e||ye!==i)&&(Qu=null,Ws(e,i)),i=!1;var E=nn;t:do try{if(Ue!==0&&ge!==null){var R=ge,H=fi;switch(Ue){case 8:kh(),E=6;break t;case 3:case 2:case 9:case 6:Ri.current===null&&(i=!0);var tt=Ue;if(Ue=0,fi=null,qs(e,R,H,tt),r&&Gs){E=0;break t}break;default:tt=Ue,Ue=0,fi=null,qs(e,R,H,tt)}}UM(),E=nn;break}catch(ht){x0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,ga=Ir=null,De=u,I.H=h,I.A=m,ge===null&&(ke=null,ye=0,Su()),E}function UM(){for(;ge!==null;)M0(ge)}function LM(e,i){var r=De;De|=2;var u=S0(),h=y0();ke!==e||ye!==i?(Qu=null,Ku=Pt()+500,Ws(e,i)):Gs=Dt(e,i);t:do try{if(Ue!==0&&ge!==null){i=ge;var m=fi;e:switch(Ue){case 1:Ue=0,fi=null,qs(e,i,m,1);break;case 2:case 9:if(O_(m)){Ue=0,fi=null,E0(i);break}i=function(){Ue!==2&&Ue!==9||ke!==e||(Ue=7),ea(e)},m.then(i,i);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:O_(m)?(Ue=0,fi=null,E0(i)):(Ue=0,fi=null,qs(e,i,m,7));break;case 5:var E=null;switch(ge.tag){case 26:E=ge.memoizedState;case 5:case 27:var R=ge;if(!E||av(E)){Ue=0,fi=null;var H=R.sibling;if(H!==null)ge=H;else{var tt=R.return;tt!==null?(ge=tt,$u(tt)):ge=null}break e}}Ue=0,fi=null,qs(e,i,m,5);break;case 6:Ue=0,fi=null,qs(e,i,m,6);break;case 8:kh(),nn=6;break t;default:throw Error(a(462))}}NM();break}catch(ht){x0(e,ht)}while(!0);return ga=Ir=null,I.H=u,I.A=h,De=r,ge!==null?0:(ke=null,ye=0,Su(),nn)}function NM(){for(;ge!==null&&!re();)M0(ge)}function M0(e){var i=Zg(e.alternate,e,ba);e.memoizedProps=e.pendingProps,i===null?$u(e):ge=i}function E0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=kg(r,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=kg(r,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:sh(i);default:Qg(r,i),i=ge=T_(i,ba),i=Zg(r,i,ba)}e.memoizedProps=e.pendingProps,i===null?$u(e):ge=i}function qs(e,i,r,u){ga=Ir=null,sh(i),Bs=null,ul=0;var h=i.return;try{if(MM(e,h,i,r,ye)){nn=1,Xu(e,Ei(r,e.current)),ge=null;return}}catch(m){if(h!==null)throw ge=h,m;nn=1,Xu(e,Ei(r,e.current)),ge=null;return}i.flags&32768?(Re||u===1?e=!0:Gs||(ye&536870912)!==0?e=!1:(tr=e=!0,(u===2||u===9||u===3||u===6)&&(u=Ri.current,u!==null&&u.tag===13&&(u.flags|=16384))),T0(i,e)):$u(i)}function $u(e){var i=e;do{if((i.flags&32768)!==0){T0(i,tr);return}e=i.return;var r=TM(i.alternate,i,ba);if(r!==null){ge=r;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=e}while(i!==null);nn===0&&(nn=5)}function T0(e,i){do{var r=bM(e.alternate,e);if(r!==null){r.flags&=32767,ge=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ge=e;return}ge=e=r}while(e!==null);nn=6,ge=null}function b0(e,i,r,u,h,m,E,R,H){e.cancelPendingCommit=null;do tc();while(Un!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Pf,Tt(e,r,m,E,R,H),e===ke&&(ge=ke=null,ye=0),ks=i,ir=e,Xs=r,Hh=m,Gh=h,m0=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,BM(je,function(){return D0(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,h=X.p,X.p=2,E=De,De|=4;try{AM(e,i,r)}finally{De=E,X.p=h,I.T=u}}Un=1,A0(),R0(),C0()}}function A0(){if(Un===1){Un=0;var e=ir,i=ks,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var u=X.p;X.p=2;var h=De;De|=4;try{l0(i,e);var m=id,E=p_(e.containerInfo),R=m.focusedElem,H=m.selectionRange;if(E!==R&&R&&R.ownerDocument&&d_(R.ownerDocument.documentElement,R)){if(H!==null&&Df(R)){var tt=H.start,ht=H.end;if(ht===void 0&&(ht=tt),"selectionStart"in R)R.selectionStart=tt,R.selectionEnd=Math.min(ht,R.value.length);else{var gt=R.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),ie=R.textContent.length,$t=Math.min(H.start,ie),ze=H.end===void 0?$t:Math.min(H.end,ie);!rt.extend&&$t>ze&&(E=ze,ze=$t,$t=E);var Z=h_(R,$t),k=h_(R,ze);if(Z&&k&&(rt.rangeCount!==1||rt.anchorNode!==Z.node||rt.anchorOffset!==Z.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var $=gt.createRange();$.setStart(Z.node,Z.offset),rt.removeAllRanges(),$t>ze?(rt.addRange($),rt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),rt.addRange($))}}}}for(gt=[],rt=R;rt=rt.parentNode;)rt.nodeType===1&&gt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<gt.length;R++){var pt=gt[R];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}hc=!!nd,id=nd=null}finally{De=h,X.p=u,I.T=r}}e.current=i,Un=2}}function R0(){if(Un===2){Un=0;var e=ir,i=ks,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var u=X.p;X.p=2;var h=De;De|=4;try{a0(e,i.alternate,i)}finally{De=h,X.p=u,I.T=r}}Un=3}}function C0(){if(Un===4||Un===3){Un=0,ne();var e=ir,i=ks,r=Xs,u=m0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,ks=ir=null,w0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(nr=null),we(r),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,h=X.p,X.p=2,I.T=null;try{for(var m=e.onRecoverableError,E=0;E<u.length;E++){var R=u[E];m(R.value,{componentStack:R.stack})}}finally{I.T=i,X.p=h}}(Xs&3)!==0&&tc(),ea(e),h=e.pendingLanes,(r&4194090)!==0&&(h&42)!==0?e===Vh?vl++:(vl=0,Vh=e):vl=0,xl(0)}}function w0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Jo(i)))}function tc(e){return A0(),R0(),C0(),D0()}function D0(){if(Un!==5)return!1;var e=ir,i=Hh;Hh=0;var r=we(Xs),u=I.T,h=X.p;try{X.p=32>r?32:r,I.T=null,r=Gh,Gh=null;var m=ir,E=Xs;if(Un=0,ks=ir=null,Xs=0,(De&6)!==0)throw Error(a(331));var R=De;if(De|=4,d0(m.current),c0(m,m.current,E,r),De=R,xl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(ft,m)}catch{}return!0}finally{X.p=h,I.T=u,w0(e,i)}}function U0(e,i,r){i=Ei(r,i),i=Sh(e.stateNode,i,2),e=Ya(e,i,2),e!==null&&(Bt(e,2),ea(e))}function Fe(e,i,r){if(e.tag===3)U0(e,e,r);else for(;i!==null;){if(i.tag===3){U0(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(nr===null||!nr.has(u))){e=Ei(r,e),r=Pg(2),u=Ya(i,r,2),u!==null&&(zg(r,u,i,e),Bt(u,2),ea(u));break}}i=i.return}}function qh(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new wM;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(r)||(zh=!0,h.add(r),e=OM.bind(null,e,i,r),i.then(e,e))}function OM(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ke===e&&(ye&r)===r&&(nn===4||nn===3&&(ye&62914560)===ye&&300>Pt()-Fh?(De&2)===0&&Ws(e,0):Bh|=r,Vs===ye&&(Vs=0)),ea(e)}function L0(e,i){i===0&&(i=At()),e=Rs(e,i),e!==null&&(Bt(e,i),ea(e))}function PM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),L0(e,r)}function zM(e,i){var r=0;switch(e.tag){case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),L0(e,r)}function BM(e,i){return V(e,i)}var ec=null,Ys=null,Yh=!1,nc=!1,jh=!1,Wr=0;function ea(e){e!==Ys&&e.next===null&&(Ys===null?ec=Ys=e:Ys=Ys.next=e),nc=!0,Yh||(Yh=!0,FM())}function xl(e,i){if(!jh&&nc){jh=!0;do for(var r=!1,u=ec;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,R=u.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=h&~(E&~R),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,z0(u,m))}else m=ye,m=Vt(u,u===ke?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Dt(u,m)||(r=!0,z0(u,m));u=u.next}while(r);jh=!1}}function IM(){N0()}function N0(){nc=Yh=!1;var e=0;Wr!==0&&(YM()&&(e=Wr),Wr=0);for(var i=Pt(),r=null,u=ec;u!==null;){var h=u.next,m=O0(u,i);m===0?(u.next=null,r===null?ec=h:r.next=h,h===null&&(Ys=r)):(r=u,(e!==0||(m&3)!==0)&&(nc=!0)),u=h}xl(e)}function O0(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-zt(m),R=1<<E,H=h[E];H===-1?((R&r)===0||(R&u)!==0)&&(h[E]=oe(R,i)):H<=i&&(e.expiredLanes|=R),m&=~R}if(i=ke,r=ye,r=Vt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,r===0||e===i&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&Le(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Dt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&Le(u),we(r)){case 2:case 8:r=se;break;case 32:r=je;break;case 268435456:r=B;break;default:r=je}return u=P0.bind(null,e),r=V(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&Le(u),e.callbackPriority=2,e.callbackNode=null,2}function P0(e,i){if(Un!==0&&Un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(tc()&&e.callbackNode!==r)return null;var u=ye;return u=Vt(e,e===ke?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(g0(e,u,i),O0(e,Pt()),e.callbackNode!=null&&e.callbackNode===r?P0.bind(null,e):null)}function z0(e,i){if(tc())return null;g0(e,i,!0)}function FM(){ZM(function(){(De&6)!==0?V(Gt,IM):N0()})}function Zh(){return Wr===0&&(Wr=W()),Wr}function B0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:du(""+e)}function I0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function HM(e,i,r,u,h){if(i==="submit"&&r&&r.stateNode===h){var m=B0((h[$e]||null).action),E=u.submitter;E&&(i=(i=E[$e]||null)?B0(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var R=new gu("action","action",null,u,h);e.push({event:R,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Wr!==0){var H=E?I0(h,E):new FormData(h);mh(r,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(R.preventDefault(),H=E?I0(h,E):new FormData(h),mh(r,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var Kh=0;Kh<Of.length;Kh++){var Qh=Of[Kh],GM=Qh.toLowerCase(),VM=Qh[0].toUpperCase()+Qh.slice(1);Hi(GM,"on"+VM)}Hi(g_,"onAnimationEnd"),Hi(v_,"onAnimationIteration"),Hi(x_,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(rM,"onTransitionRun"),Hi(sM,"onTransitionStart"),Hi(oM,"onTransitionCancel"),Hi(S_,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function F0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var R=u[E],H=R.instance,tt=R.currentTarget;if(R=R.listener,H!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=tt;try{m(h)}catch(ht){ku(ht)}h.currentTarget=null,m=H}else for(E=0;E<u.length;E++){if(R=u[E],H=R.instance,tt=R.currentTarget,R=R.listener,H!==m&&h.isPropagationStopped())break t;m=R,h.currentTarget=tt;try{m(h)}catch(ht){ku(ht)}h.currentTarget=null,m=H}}}}function ve(e,i){var r=i[gs];r===void 0&&(r=i[gs]=new Set);var u=e+"__bubble";r.has(u)||(H0(i,e,2,!1),r.add(u))}function Jh(e,i,r){var u=0;i&&(u|=4),H0(r,e,u,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function $h(e){if(!e[ic]){e[ic]=!0,fu.forEach(function(r){r!=="selectionchange"&&(kM.has(r)||Jh(r,!1,e),Jh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,Jh("selectionchange",!1,i))}}function H0(e,i,r,u){switch(cv(i)){case 2:var h=_E;break;case 8:h=gE;break;default:h=dd}r=h.bind(null,i,r,e),h=void 0,!yf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function td(e,i,r,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var R=u.stateNode.containerInfo;if(R===h)break;if(E===4)for(E=u.return;E!==null;){var H=E.tag;if((H===3||H===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;R!==null;){if(E=ha(R),E===null)return;if(H=E.tag,H===5||H===6||H===26||H===27){u=m=E;continue t}R=R.parentNode}}u=u.return}Ym(function(){var tt=m,ht=xf(r),gt=[];t:{var it=y_.get(e);if(it!==void 0){var rt=gu,ie=e;switch(e){case"keypress":if(mu(r)===0)break t;case"keydown":case"keyup":rt=By;break;case"focusin":ie="focus",rt=bf;break;case"focusout":ie="blur",rt=bf;break;case"beforeblur":case"afterblur":rt=bf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Hy;break;case g_:case v_:case x_:rt=Cy;break;case S_:rt=Vy;break;case"scroll":case"scrollend":rt=Ey;break;case"wheel":rt=Xy;break;case"copy":case"cut":case"paste":rt=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Jm;break;case"toggle":case"beforetoggle":rt=qy}var $t=(i&4)!==0,ze=!$t&&(e==="scroll"||e==="scrollend"),Z=$t?it!==null?it+"Capture":null:it;$t=[];for(var k=tt,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Z===null||(pt=Fo(k,Z),pt!=null&&$t.push(yl(k,pt,$))),ze)break;k=k.return}0<$t.length&&(it=new rt(it,ie,null,r,ht),gt.push({event:it,listeners:$t}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&r!==vf&&(ie=r.relatedTarget||r.fromElement)&&(ha(ie)||ie[Zi]))break t;if((rt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(ie=r.relatedTarget||r.toElement,rt=tt,ie=ie?ha(ie):null,ie!==null&&(ze=l(ie),$t=ie.tag,ie!==ze||$t!==5&&$t!==27&&$t!==6)&&(ie=null)):(rt=null,ie=tt),rt!==ie)){if($t=Km,pt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=Jm,pt="onPointerLeave",Z="onPointerEnter",k="pointer"),ze=rt==null?it:wr(rt),$=ie==null?it:wr(ie),it=new $t(pt,k+"leave",rt,r,ht),it.target=ze,it.relatedTarget=$,pt=null,ha(ht)===tt&&($t=new $t(Z,k+"enter",ie,r,ht),$t.target=$,$t.relatedTarget=ze,pt=$t),ze=pt,rt&&ie)e:{for($t=rt,Z=ie,k=0,$=$t;$;$=js($))k++;for($=0,pt=Z;pt;pt=js(pt))$++;for(;0<k-$;)$t=js($t),k--;for(;0<$-k;)Z=js(Z),$--;for(;k--;){if($t===Z||Z!==null&&$t===Z.alternate)break e;$t=js($t),Z=js(Z)}$t=null}else $t=null;rt!==null&&G0(gt,it,rt,$t,!1),ie!==null&&ze!==null&&G0(gt,ze,ie,$t,!0)}}t:{if(it=tt?wr(tt):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Ft=s_;else if(a_(it))if(o_)Ft=nM;else{Ft=tM;var me=$y}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&gf(tt.elementType)&&(Ft=s_):Ft=eM;if(Ft&&(Ft=Ft(e,tt))){r_(gt,Ft,r,ht);break t}me&&me(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&zn(it,"number",it.value)}switch(me=tt?wr(tt):window,e){case"focusin":(a_(me)||me.contentEditable==="true")&&(Ts=me,Uf=tt,Yo=null);break;case"focusout":Yo=Uf=Ts=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,m_(gt,r,ht);break;case"selectionchange":if(aM)break;case"keydown":case"keyup":m_(gt,r,ht)}var Yt;if(Rf)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Es?n_(e,r)&&(ee="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ee="onCompositionStart");ee&&($m&&r.locale!=="ko"&&(Es||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Es&&(Yt=jm()):(ka=ht,Mf="value"in ka?ka.value:ka.textContent,Es=!0)),me=ac(tt,ee),0<me.length&&(ee=new Qm(ee,e,null,r,ht),gt.push({event:ee,listeners:me}),Yt?ee.data=Yt:(Yt=i_(r),Yt!==null&&(ee.data=Yt)))),(Yt=jy?Zy(e,r):Ky(e,r))&&(ee=ac(tt,"onBeforeInput"),0<ee.length&&(me=new Qm("onBeforeInput","beforeinput",null,r,ht),gt.push({event:me,listeners:ee}),me.data=Yt)),HM(gt,e,tt,r,ht)}F0(gt,i)})}function yl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function ac(e,i){for(var r=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Fo(e,r),h!=null&&u.unshift(yl(e,h,m)),h=Fo(e,i),h!=null&&u.push(yl(e,h,m))),e.tag===3)return u;e=e.return}return[]}function js(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G0(e,i,r,u,h){for(var m=i._reactName,E=[];r!==null&&r!==u;){var R=r,H=R.alternate,tt=R.stateNode;if(R=R.tag,H!==null&&H===u)break;R!==5&&R!==26&&R!==27||tt===null||(H=tt,h?(tt=Fo(r,m),tt!=null&&E.unshift(yl(r,tt,H))):h||(tt=Fo(r,m),tt!=null&&E.push(yl(r,tt,H)))),r=r.return}E.length!==0&&e.push({event:i,listeners:E})}var XM=/\r\n?/g,WM=/\u0000|\uFFFD/g;function V0(e){return(typeof e=="string"?e:""+e).replace(XM,`
`).replace(WM,"")}function k0(e,i){return i=V0(i),V0(e)===i}function rc(){}function Pe(e,i,r,u,h,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Zn(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Zn(e,""+u);break;case"className":It(e,"class",u);break;case"tabIndex":It(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,r,u);break;case"style":Wm(e,u,m);break;case"data":if(i!=="object"){It(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=du(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Pe(e,i,"name",h.name,h,null),Pe(e,i,"formEncType",h.formEncType,h,null),Pe(e,i,"formMethod",h.formMethod,h,null),Pe(e,i,"formTarget",h.formTarget,h,null)):(Pe(e,i,"encType",h.encType,h,null),Pe(e,i,"method",h.method,h,null),Pe(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=du(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=rc);break;case"onScroll":u!=null&&ve("scroll",e);break;case"onScrollEnd":u!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=du(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ut(e,"popover",u);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ut(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=yy.get(r)||r,Ut(e,r,u))}}function ed(e,i,r,u,h,m){switch(r){case"style":Wm(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?Zn(e,u):(typeof u=="number"||typeof u=="bigint")&&Zn(e,""+u);break;case"onScroll":u!=null&&ve("scroll",e);break;case"onScrollEnd":u!=null&&ve("scrollend",e);break;case"onClick":u!=null&&(e.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hu.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[$e]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,h);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):Ut(e,r,u)}}}function Ln(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var u=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,m,E,r,null)}}h&&Pe(e,i,"srcSet",r.srcSet,r,null),u&&Pe(e,i,"src",r.src,r,null);return;case"input":ve("invalid",e);var R=m=E=h=null,H=null,tt=null;for(u in r)if(r.hasOwnProperty(u)){var ht=r[u];if(ht!=null)switch(u){case"name":h=ht;break;case"type":E=ht;break;case"checked":H=ht;break;case"defaultChecked":tt=ht;break;case"value":m=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Pe(e,i,u,ht,r,null)}}Xn(e,m,R,H,tt,E,h,!1),_e(e);return;case"select":ve("invalid",e),u=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(R=r[h],R!=null))switch(h){case"value":m=R;break;case"defaultValue":E=R;break;case"multiple":u=R;default:Pe(e,i,h,R,r,null)}i=m,r=E,e.multiple=!!u,i!=null?tn(e,!!u,i,!1):r!=null&&tn(e,!!u,r,!0);return;case"textarea":ve("invalid",e),m=h=u=null;for(E in r)if(r.hasOwnProperty(E)&&(R=r[E],R!=null))switch(E){case"value":u=R;break;case"defaultValue":h=R;break;case"children":m=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Pe(e,i,E,R,r,null)}Ss(e,u,h,m),_e(e);return;case"option":for(H in r)if(r.hasOwnProperty(H)&&(u=r[H],u!=null))switch(H){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:Pe(e,i,H,u,r,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(u=0;u<Sl.length;u++)ve(Sl[u],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in r)if(r.hasOwnProperty(tt)&&(u=r[tt],u!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Pe(e,i,tt,u,r,null)}return;default:if(gf(i)){for(ht in r)r.hasOwnProperty(ht)&&(u=r[ht],u!==void 0&&ed(e,i,ht,u,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(u=r[R],u!=null&&Pe(e,i,R,u,r,null))}function qM(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,R=null,H=null,tt=null,ht=null;for(rt in r){var gt=r[rt];if(r.hasOwnProperty(rt)&&gt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":H=gt;default:u.hasOwnProperty(rt)||Pe(e,i,rt,null,u,gt)}}for(var it in u){var rt=u[it];if(gt=r[it],u.hasOwnProperty(it)&&(rt!=null||gt!=null))switch(it){case"type":m=rt;break;case"name":h=rt;break;case"checked":tt=rt;break;case"defaultChecked":ht=rt;break;case"value":E=rt;break;case"defaultValue":R=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:rt!==gt&&Pe(e,i,it,rt,u,gt)}}Ie(e,E,R,H,tt,ht,m,h);return;case"select":rt=E=R=it=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":rt=H;default:u.hasOwnProperty(m)||Pe(e,i,m,null,u,H)}for(h in u)if(m=u[h],H=r[h],u.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":it=m;break;case"defaultValue":R=m;break;case"multiple":E=m;default:m!==H&&Pe(e,i,h,m,u,H)}i=R,r=E,u=rt,it!=null?tn(e,!!r,it,!1):!!u!=!!r&&(i!=null?tn(e,!!r,i,!0):tn(e,!!r,r?[]:"",!1));return;case"textarea":rt=it=null;for(R in r)if(h=r[R],r.hasOwnProperty(R)&&h!=null&&!u.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Pe(e,i,R,null,u,h)}for(E in u)if(h=u[E],m=r[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":it=h;break;case"defaultValue":rt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Pe(e,i,E,h,u,m)}wn(e,it,rt);return;case"option":for(var ie in r)if(it=r[ie],r.hasOwnProperty(ie)&&it!=null&&!u.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Pe(e,i,ie,null,u,it)}for(H in u)if(it=u[H],rt=r[H],u.hasOwnProperty(H)&&it!==rt&&(it!=null||rt!=null))switch(H){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Pe(e,i,H,it,u,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in r)it=r[$t],r.hasOwnProperty($t)&&it!=null&&!u.hasOwnProperty($t)&&Pe(e,i,$t,null,u,it);for(tt in u)if(it=u[tt],rt=r[tt],u.hasOwnProperty(tt)&&it!==rt&&(it!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:Pe(e,i,tt,it,u,rt)}return;default:if(gf(i)){for(var ze in r)it=r[ze],r.hasOwnProperty(ze)&&it!==void 0&&!u.hasOwnProperty(ze)&&ed(e,i,ze,void 0,u,it);for(ht in u)it=u[ht],rt=r[ht],!u.hasOwnProperty(ht)||it===rt||it===void 0&&rt===void 0||ed(e,i,ht,it,u,rt);return}}for(var Z in r)it=r[Z],r.hasOwnProperty(Z)&&it!=null&&!u.hasOwnProperty(Z)&&Pe(e,i,Z,null,u,it);for(gt in u)it=u[gt],rt=r[gt],!u.hasOwnProperty(gt)||it===rt||it==null&&rt==null||Pe(e,i,gt,it,u,rt)}var nd=null,id=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function X0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rd=null;function YM(){var e=window.event;return e&&e.type==="popstate"?e===rd?!1:(rd=e,!0):(rd=null,!1)}var q0=typeof setTimeout=="function"?setTimeout:void 0,jM=typeof clearTimeout=="function"?clearTimeout:void 0,Y0=typeof Promise=="function"?Promise:void 0,ZM=typeof queueMicrotask=="function"?queueMicrotask:typeof Y0<"u"?function(e){return Y0.resolve(null).then(e).catch(KM)}:q0;function KM(e){setTimeout(function(){throw e})}function rr(e){return e==="head"}function j0(e,i){var r=i,u=0,h=0;do{var m=r.nextSibling;if(e.removeChild(r),m&&m.nodeType===8)if(r=m.data,r==="/$"){if(0<u&&8>u){r=u;var E=e.ownerDocument;if(r&1&&Ml(E.documentElement),r&2&&Ml(E.body),r&4)for(r=E.head,Ml(r),E=r.firstChild;E;){var R=E.nextSibling,H=E.nodeName;E[Ki]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&E.rel.toLowerCase()==="stylesheet"||r.removeChild(E),E=R}}if(h===0){e.removeChild(m),Dl(i);return}h--}else r==="$"||r==="$?"||r==="$!"?h++:u=r.charCodeAt(0)-48;else u=0;r=m}while(r);Dl(i)}function sd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":sd(r),xs(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function QM(e,i,r,u){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Ki])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function JM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Vi(e.nextSibling),e===null))return null;return e}function od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function $M(e,i){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var ld=null;function Z0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(i===0)return e;i--}else r==="/$"&&i++}e=e.previousSibling}return null}function K0(e,i,r){switch(i=sc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ml(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);xs(e)}var wi=new Map,Q0=new Set;function oc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Aa=X.d;X.d={f:tE,r:eE,D:nE,C:iE,L:aE,m:rE,X:oE,S:sE,M:lE};function tE(){var e=Aa.f(),i=Ju();return e||i}function eE(e){var i=Ga(e);i!==null&&i.tag===5&&i.type==="form"?gg(i):Aa.r(e)}var Zs=typeof document>"u"?null:document;function J0(e,i,r){var u=Zs;if(u&&typeof i=="string"&&i){var h=En(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Q0.has(h)||(Q0.add(h),e={rel:e,crossOrigin:r,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Ln(i,"link",e),fn(i),u.head.appendChild(i)))}}function nE(e){Aa.D(e),J0("dns-prefetch",e,null)}function iE(e,i){Aa.C(e,i),J0("preconnect",e,i)}function aE(e,i,r){Aa.L(e,i,r);var u=Zs;if(u&&e&&i){var h='link[rel="preload"][as="'+En(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+En(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+En(r.imageSizes)+'"]')):h+='[href="'+En(e)+'"]';var m=h;switch(i){case"style":m=Ks(e);break;case"script":m=Qs(e)}wi.has(m)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),wi.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(El(m))||i==="script"&&u.querySelector(Tl(m))||(i=u.createElement("link"),Ln(i,"link",e),fn(i),u.head.appendChild(i)))}}function rE(e,i){Aa.m(e,i);var r=Zs;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+En(u)+'"][href="'+En(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Qs(e)}if(!wi.has(m)&&(e=_({rel:"modulepreload",href:e},i),wi.set(m,e),r.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Tl(m)))return}u=r.createElement("link"),Ln(u,"link",e),fn(u),r.head.appendChild(u)}}}function sE(e,i,r){Aa.S(e,i,r);var u=Zs;if(u&&e){var h=Va(u).hoistableStyles,m=Ks(e);i=i||"default";var E=h.get(m);if(!E){var R={loading:0,preload:null};if(E=u.querySelector(El(m)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=wi.get(m))&&ud(e,r);var H=E=u.createElement("link");fn(H),Ln(H,"link",e),H._p=new Promise(function(tt,ht){H.onload=tt,H.onerror=ht}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,lc(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:R},h.set(m,E)}}}function oE(e,i){Aa.X(e,i);var r=Zs;if(r&&e){var u=Va(r).hoistableScripts,h=Qs(e),m=u.get(h);m||(m=r.querySelector(Tl(h)),m||(e=_({src:e,async:!0},i),(i=wi.get(h))&&cd(e,i),m=r.createElement("script"),fn(m),Ln(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function lE(e,i){Aa.M(e,i);var r=Zs;if(r&&e){var u=Va(r).hoistableScripts,h=Qs(e),m=u.get(h);m||(m=r.querySelector(Tl(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=wi.get(h))&&cd(e,i),m=r.createElement("script"),fn(m),Ln(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function $0(e,i,r,u){var h=(h=K.current)?oc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Ks(r.href),r=Va(h).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Ks(r.href);var m=Va(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(El(e)))&&!m._p&&(E.instance=m,E.state.loading=5),wi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},wi.set(e,r),m||uE(h,e,r,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Qs(r),r=Va(h).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ks(e){return'href="'+En(e)+'"'}function El(e){return'link[rel="stylesheet"]['+e+"]"}function tv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function uE(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Ln(i,"link",r),fn(i),e.head.appendChild(i))}function Qs(e){return'[src="'+En(e)+'"]'}function Tl(e){return"script[async]"+e}function ev(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+En(r.href)+'"]');if(u)return i.instance=u,fn(u),u;var h=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),fn(u),Ln(u,"style",h),lc(u,r.precedence,e),i.instance=u;case"stylesheet":h=Ks(r.href);var m=e.querySelector(El(h));if(m)return i.state.loading|=4,i.instance=m,fn(m),m;u=tv(r),(h=wi.get(h))&&ud(u,h),m=(e.ownerDocument||e).createElement("link"),fn(m);var E=m;return E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),Ln(m,"link",u),i.state.loading|=4,lc(m,r.precedence,e),i.instance=m;case"script":return m=Qs(r.src),(h=e.querySelector(Tl(m)))?(i.instance=h,fn(h),h):(u=r,(h=wi.get(m))&&(u=_({},r),cd(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),fn(h),Ln(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,lc(u,r.precedence,e));return i.instance}function lc(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var R=u[E];if(R.dataset.precedence===i)m=R;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function ud(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var uc=null;function nv(e,i,r){if(uc===null){var u=new Map,h=uc=new Map;h.set(r,u)}else h=uc,u=h.get(r),u||(u=new Map,h.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Ki]||m[vn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var R=u.get(E);R?R.push(m):u.set(E,[m])}}return u}function iv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function cE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function av(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bl=null;function fE(){}function hE(e,i,r){if(bl===null)throw Error(a(475));var u=bl;if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ks(r.href),m=e.querySelector(El(h));if(m){e=m._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(u.count++,u=cc.bind(u),e.then(u,u)),i.state.loading|=4,i.instance=m,fn(m);return}m=e.ownerDocument||e,r=tv(r),(h=wi.get(h))&&ud(r,h),m=m.createElement("link"),fn(m);var E=m;E._p=new Promise(function(R,H){E.onload=R,E.onerror=H}),Ln(m,"link",r),i.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(u.count++,i=cc.bind(u),e.addEventListener("load",i),e.addEventListener("error",i))}}function dE(){if(bl===null)throw Error(a(475));var e=bl;return e.stylesheets&&e.count===0&&fd(e,e.stylesheets),0<e.count?function(i){var r=setTimeout(function(){if(e.stylesheets&&fd(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(r)}}:null}function cc(){if(this.count--,this.count===0){if(this.stylesheets)fd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function fd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,i.forEach(pE,e),fc=null,cc.call(e))}function pE(e,i){if(!(i.state.loading&4)){var r=fc.get(e);if(r)var u=r.get(null);else{r=new Map,fc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),u=E)}u&&r.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||u,m===u&&r.set(null,h),r.set(E,h),this.count++,u=cc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Al={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function mE(e,i,r,u,h,m,E,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function rv(e,i,r,u,h,m,E,R,H,tt,ht,gt){return e=new mE(e,i,r,E,R,H,tt,gt),i=1,m===!0&&(i|=24),m=li(3,null,null,i),e.current=m,m.stateNode=e,i=qf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},Kf(m),e}function sv(e){return e?(e=Cs,e):Cs}function ov(e,i,r,u,h,m){h=sv(h),u.context===null?u.context=h:u.pendingContext=h,u=qa(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=Ya(e,u,i),r!==null&&(di(r,e,i),nl(r,e,i))}function lv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function hd(e,i){lv(e,i),(e=e.alternate)&&lv(e,i)}function uv(e){if(e.tag===13){var i=Rs(e,67108864);i!==null&&di(i,e,67108864),hd(e,67108864)}}var hc=!0;function _E(e,i,r,u){var h=I.T;I.T=null;var m=X.p;try{X.p=2,dd(e,i,r,u)}finally{X.p=m,I.T=h}}function gE(e,i,r,u){var h=I.T;I.T=null;var m=X.p;try{X.p=8,dd(e,i,r,u)}finally{X.p=m,I.T=h}}function dd(e,i,r,u){if(hc){var h=pd(u);if(h===null)td(e,i,u,dc,r),fv(e,u);else if(xE(h,e,i,r,u))u.stopPropagation();else if(fv(e,u),i&4&&-1<vE.indexOf(e)){for(;h!==null;){var m=Ga(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=jt(m.pendingLanes);if(E!==0){var R=m;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var H=1<<31-zt(E);R.entanglements[1]|=H,E&=~H}ea(m),(De&6)===0&&(Ku=Pt()+500,xl(0))}}break;case 13:R=Rs(m,2),R!==null&&di(R,m,2),Ju(),hd(m,2)}if(m=pd(u),m===null&&td(e,i,u,dc,r),m===h)break;h=m}h!==null&&u.stopPropagation()}else td(e,i,u,null,r)}}function pd(e){return e=xf(e),md(e)}var dc=null;function md(e){if(dc=null,e=ha(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function cv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case Gt:return 2;case se:return 8;case je:case Ze:return 32;case B:return 268435456;default:return 32}default:return 32}}var _d=!1,sr=null,or=null,lr=null,Rl=new Map,Cl=new Map,ur=[],vE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fv(e,i){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(i.pointerId)}}function wl(e,i,r,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ga(i),i!==null&&uv(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function xE(e,i,r,u,h){switch(i){case"focusin":return sr=wl(sr,e,i,r,u,h),!0;case"dragenter":return or=wl(or,e,i,r,u,h),!0;case"mouseover":return lr=wl(lr,e,i,r,u,h),!0;case"pointerover":var m=h.pointerId;return Rl.set(m,wl(Rl.get(m)||null,e,i,r,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Cl.set(m,wl(Cl.get(m)||null,e,i,r,u,h)),!0}return!1}function hv(e){var i=ha(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Ii(e.priority,function(){if(r.tag===13){var u=hi();u=ae(u);var h=Rs(r,u);h!==null&&di(h,r,u),hd(r,u)}});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=pd(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);vf=u,r.target.dispatchEvent(u),vf=null}else return i=Ga(r),i!==null&&uv(i),e.blockedOn=r,!1;i.shift()}return!0}function dv(e,i,r){pc(e)&&r.delete(i)}function SE(){_d=!1,sr!==null&&pc(sr)&&(sr=null),or!==null&&pc(or)&&(or=null),lr!==null&&pc(lr)&&(lr=null),Rl.forEach(dv),Cl.forEach(dv)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,_d||(_d=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,SE)))}var _c=null;function pv(e){_c!==e&&(_c=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){_c===e&&(_c=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(md(u||r)===null)continue;break}var m=Ga(r);m!==null&&(e.splice(i,3),i-=3,mh(m,{pending:!0,data:h,method:r.method,action:u},u,h))}}))}function Dl(e){function i(H){return mc(H,e)}sr!==null&&mc(sr,e),or!==null&&mc(or,e),lr!==null&&mc(lr,e),Rl.forEach(i),Cl.forEach(i);for(var r=0;r<ur.length;r++){var u=ur[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<ur.length&&(r=ur[0],r.blockedOn===null);)hv(r),r.blockedOn===null&&ur.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var h=r[u],m=r[u+1],E=h[$e]||null;if(typeof m=="function")E||pv(r);else if(E){var R=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[$e]||null)R=E.formAction;else if(md(h)!==null)continue}else R=E.action;typeof R=="function"?r[u+1]=R:(r.splice(u,3),u-=3),pv(r)}}}function gd(e){this._internalRoot=e}gc.prototype.render=gd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=hi();ov(r,u,e,i,null,null)},gc.prototype.unmount=gd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;ov(e.current,2,null,e,null,null),Ju(),i[Zi]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Me();e={blockedOn:null,target:e,priority:i};for(var r=0;r<ur.length&&i!==0&&i<ur[r].priority;r++);ur.splice(r,0,e),r===0&&hv(e)}};var mv=t.version;if(mv!=="19.1.1")throw Error(a(527,mv,"19.1.1"));X.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var yE={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{ft=vc.inject(yE),_t=vc}catch{}}return Ll.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,u="",h=Ug,m=Lg,E=Ng,R=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=rv(e,1,!1,null,null,r,u,h,m,E,R,null),e[Zi]=i.current,$h(e),new gd(i)},Ll.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var u=!1,h="",m=Ug,E=Lg,R=Ng,H=null,tt=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(H=r.unstable_transitionCallbacks),r.formState!==void 0&&(tt=r.formState)),i=rv(e,1,!0,i,r??null,u,h,m,E,R,H,tt),i.context=sv(null),r=i.current,u=hi(),u=ae(u),h=qa(u),h.callback=null,Ya(r,h,u),r=u,i.current.lanes=r,Bt(i,r),ea(i),e[Zi]=i.current,$h(e),new gc(i)},Ll.version="19.1.1",Ll}var bv;function UE(){if(bv)return Sd.exports;bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Sd.exports=DE(),Sd.exports}var LE=UE();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _m="180",NE=0,Av=1,OE=2,Vx=1,PE=2,La=3,br=0,ei=1,Pa=2,yr=0,go=1,Jc=2,Rv=3,Cv=4,zE=5,is=100,BE=101,IE=102,FE=103,HE=104,GE=200,VE=201,kE=202,XE=203,cp=204,fp=205,WE=206,qE=207,YE=208,jE=209,ZE=210,KE=211,QE=212,JE=213,$E=214,hp=0,dp=1,pp=2,Mo=3,mp=4,_p=5,gp=6,vp=7,kx=0,tT=1,eT=2,Mr=0,nT=1,iT=2,aT=3,rT=4,sT=5,oT=6,lT=7,Xx=300,Eo=301,To=302,xp=303,Sp=304,ff=306,yp=1e3,rs=1001,Mp=1002,ji=1003,uT=1004,xc=1005,ra=1006,Td=1007,ss=1008,la=1009,Wx=1010,qx=1011,Yl=1012,gm=1013,ds=1014,za=1015,ru=1016,vm=1017,xm=1018,jl=1020,Yx=35902,jx=35899,Zx=1021,Kx=1022,Yi=1023,Zl=1026,Kl=1027,Qx=1028,Sm=1029,Jx=1030,ym=1031,Mm=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,Ep=35840,Tp=35841,bp=35842,Ap=35843,Rp=36196,Cp=37492,wp=37496,Dp=37808,Up=37809,Lp=37810,Np=37811,Op=37812,Pp=37813,zp=37814,Bp=37815,Ip=37816,Fp=37817,Hp=37818,Gp=37819,Vp=37820,kp=37821,Xp=36492,Wp=36494,qp=36495,Yp=36283,jp=36284,Zp=36285,Kp=36286,cT=3200,fT=3201,$x=0,hT=1,gr="",Li="srgb",bo="srgb-linear",$c="linear",Be="srgb",Js=7680,wv=519,dT=512,pT=513,mT=514,tS=515,_T=516,gT=517,vT=518,xT=519,Dv=35044,Uv="300 es",sa=2e3,tf=2001;class Oo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bd=Math.PI/180,Qp=180/Math.PI;function su(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function xe(o,t,n){return Math.max(t,Math.min(n,o))}function ST(o,t){return(o%t+t)%t}function Ad(o,t,n){return(1-n)*o+n*t}function Nl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(t=0,n=0){Ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ou{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3];const v=l[c+0],S=l[c+1],T=l[c+2],M=l[c+3];if(f===0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=S,t[n+2]=T,t[n+3]=M;return}if(g!==M||p!==v||d!==S||_!==T){let y=1-f;const x=p*v+d*S+_*T+g*M,N=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const U=Math.sqrt(L),z=Math.atan2(U,x*N);y=Math.sin(y*z)/U,f=Math.sin(f*z)/U}const C=f*N;if(p=p*y+v*C,d=d*y+S*C,_=_*y+T*C,g=g*y+M*C,y===1-f){const U=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=U,d*=U,_*=U,g*=U}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=l[c],v=l[c+1],S=l[c+2],T=l[c+3];return t[n]=f*T+_*g+p*S-d*v,t[n+1]=p*T+_*v+d*g-f*S,t[n+2]=d*T+_*S+f*v-p*g,t[n+3]=_*T-f*g-p*v-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(l/2),v=p(a/2),S=p(s/2),T=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g-v*S*T;break;case"YXZ":this._x=v*_*g+d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g+v*S*T;break;case"ZXY":this._x=v*_*g-d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g-v*S*T;break;case"ZYX":this._x=v*_*g-d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g+v*S*T;break;case"YZX":this._x=v*_*g+d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g-v*S*T;break;case"XZY":this._x=v*_*g-d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-d)*S,this._z=(c-s)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(_-p)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(l+d)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(l-d)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-s)/S,this._x=(l+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-l*p,this._y=s*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,l=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=l,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*a+n*this._x,this._y=S*s+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,f),g=Math.sin((1-n)*_)/d,v=Math.sin(n*_)/d;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,n=0,a=0){st.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Lv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Lv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-l*s),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=s+p*g+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Rd.copy(this).projectOnVector(t),this.sub(Rd)}reflect(t){return this.sub(Rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(xe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new st,Lv=new ou;class ue{constructor(t,n,a,s,l,c,f,p,d){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d)}set(t,n,a,s,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],S=a[5],T=a[8],M=s[0],y=s[3],x=s[6],N=s[1],L=s[4],C=s[7],U=s[2],z=s[5],P=s[8];return l[0]=c*M+f*N+p*U,l[3]=c*y+f*L+p*z,l[6]=c*x+f*C+p*P,l[1]=d*M+_*N+g*U,l[4]=d*y+_*L+g*z,l[7]=d*x+_*C+g*P,l[2]=v*M+S*N+T*U,l[5]=v*y+S*L+T*z,l[8]=v*x+S*C+T*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+s*l*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*l,S=d*l-c*p,T=n*g+a*v+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(s*d-_*a)*M,t[2]=(f*a-s*c)*M,t[3]=v*M,t[4]=(_*n-s*p)*M,t[5]=(s*l-f*n)*M,t[6]=S*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Cd.makeScale(t,n)),this}rotate(t){return this.premultiply(Cd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Cd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new ue;function eS(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ef(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yT(){const o=ef("canvas");return o.style.display="block",o}const Nv={};function Ql(o){o in Nv||(Nv[o]=!0,console.warn(o))}function MT(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const Ov=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pv=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ET(){const o={enabled:!0,workingColorSpace:bo,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Be&&(s.r=Ba(s.r),s.g=Ba(s.g),s.b=Ba(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Be&&(s.r=vo(s.r),s.g=vo(s.g),s.b=vo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gr?$c:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Ql("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Ql("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[bo]:{primaries:t,whitePoint:a,transfer:$c,toXYZ:Ov,fromXYZ:Pv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:a,transfer:Be,toXYZ:Ov,fromXYZ:Pv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),o}const Ae=ET();function Ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $s;class TT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{$s===void 0&&($s=ef("canvas")),$s.width=t.width,$s.height=t.height;const s=$s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=$s}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ef("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ba(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ba(n[a]/255)*255):n[a]=Ba(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bT=0;class Em{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bT++}),this.uuid=su(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(wd(s[c].image)):l.push(wd(s[c]))}else l=wd(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function wd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?TT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AT=0;const Dd=new st;class jn extends Oo{constructor(t=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,a=rs,s=rs,l=ra,c=ss,f=Yi,p=la,d=jn.DEFAULT_ANISOTROPY,_=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=su(),this.name="",this.source=new Em(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yp:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Mp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yp:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Mp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Xx;jn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,n=0,a=0,s=1){an.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],S=p[5],T=p[9],M=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,C=(S+1)/2,U=(x+1)/2,z=(_+v)/4,P=(g+M)/4,F=(T+y)/4;return L>C&&L>U?L<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(L),s=z/a,l=P/a):C>U?C<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),a=z/s,l=F/s):U<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(U),a=P/l,s=F/l),this.set(a,s,l,n),this}let N=Math.sqrt((y-T)*(y-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(g-M)/N,this.z=(v-_)/N,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=xe(this.x,t.x,n.x),this.y=xe(this.y,t.y,n.y),this.z=xe(this.z,t.z,n.z),this.w=xe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=xe(this.x,t,n),this.y=xe(this.y,t,n),this.z=xe(this.z,t,n),this.w=xe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(xe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RT extends Oo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ra,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new an(0,0,t,n),this.scissorTest=!1,this.viewport=new an(0,0,t,n);const s={width:t,height:n,depth:a.depth},l=new jn(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:ra,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Em(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends RT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class nS extends jn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=ji,this.minFilter=ji,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class CT extends jn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=ji,this.minFilter=ji,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lu{constructor(t=new st(1/0,1/0,1/0),n=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ki):ki.fromBufferAttribute(l,c),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Sc.copy(a.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ol),yc.subVectors(this.max,Ol),to.subVectors(t.a,Ol),eo.subVectors(t.b,Ol),no.subVectors(t.c,Ol),fr.subVectors(eo,to),hr.subVectors(no,eo),qr.subVectors(to,no);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-qr.z,qr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,qr.z,0,-qr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-qr.y,qr.x,0];return!Ud(n,to,eo,no,yc)||(n=[1,0,0,0,1,0,0,0,1],!Ud(n,to,eo,no,yc))?!1:(Mc.crossVectors(fr,hr),n=[Mc.x,Mc.y,Mc.z],Ud(n,to,eo,no,yc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new st,new st,new st,new st,new st,new st,new st,new st],ki=new st,Sc=new lu,to=new st,eo=new st,no=new st,fr=new st,hr=new st,qr=new st,Ol=new st,yc=new st,Mc=new st,Yr=new st;function Ud(o,t,n,a,s){for(let l=0,c=o.length-3;l<=c;l+=3){Yr.fromArray(o,l);const f=s.x*Math.abs(Yr.x)+s.y*Math.abs(Yr.y)+s.z*Math.abs(Yr.z),p=t.dot(Yr),d=n.dot(Yr),_=a.dot(Yr);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const wT=new lu,Pl=new st,Ld=new st;class hf{constructor(t=new st,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):wT.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pl.subVectors(t,this.center);const n=Pl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Pl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pl.copy(t.center).add(Ld)),this.expandByPoint(Pl.copy(t.center).sub(Ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ca=new st,Nd=new st,Ec=new st,dr=new st,Od=new st,Tc=new st,Pd=new st;class iS{constructor(t=new st,n=new st(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ca.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,n),Ca.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Nd.copy(t).add(n).multiplyScalar(.5),Ec.copy(n).sub(t).normalize(),dr.copy(this.origin).sub(Nd);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Ec),f=dr.dot(this.direction),p=-dr.dot(Ec),d=dr.lengthSq(),_=Math.abs(1-c*c);let g,v,S,T;if(_>0)if(g=c*p-f,v=c*f-p,T=l*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,S=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v<=-T?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),S=-g*g+v*(v+2*p)+d):v<=T?(g=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),S=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Nd).addScaledVector(Ec,v),S}intersectSphere(t,n){Ca.subVectors(t.center,this.origin);const a=Ca.dot(this.direction),s=Ca.dot(Ca)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,n,a,s,l){Od.subVectors(n,t),Tc.subVectors(a,t),Pd.crossVectors(Od,Tc);let c=this.direction.dot(Pd),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;dr.subVectors(this.origin,t);const p=f*this.direction.dot(Tc.crossVectors(dr,Tc));if(p<0)return null;const d=f*this.direction.dot(Od.cross(dr));if(d<0||p+d>c)return null;const _=-f*dr.dot(Pd);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,n,a,s,l,c,f,p,d,_,g,v,S,T,M,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,p,d,_,g,v,S,T,M,y)}set(t,n,a,s,l,c,f,p,d,_,g,v,S,T,M,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=T,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/io.setFromMatrixColumn(t,0).length(),l=1/io.setFromMatrixColumn(t,1).length(),c=1/io.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,S=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=S+T*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=T+S*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,S=p*g,T=d*_,M=d*g;n[0]=v+M*f,n[4]=T*f-S,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=S*f-T,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,S=p*g,T=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=T+S*f,n[1]=S+T*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,S=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=T*d-S,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=S*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=T*g+S,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*g+T,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=S*g-T,n[2]=T*g-S,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DT,t,UT)}lookAt(t,n,a){const s=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),pr.crossVectors(a,pi),pr.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),pr.crossVectors(a,pi)),pr.normalize(),bc.crossVectors(pi,pr),s[0]=pr.x,s[4]=bc.x,s[8]=pi.x,s[1]=pr.y,s[5]=bc.y,s[9]=pi.y,s[2]=pr.z,s[6]=bc.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],S=a[13],T=a[2],M=a[6],y=a[10],x=a[14],N=a[3],L=a[7],C=a[11],U=a[15],z=s[0],P=s[4],F=s[8],b=s[12],D=s[1],G=s[5],Y=s[9],et=s[13],ct=s[2],at=s[6],I=s[10],X=s[14],q=s[3],xt=s[7],O=s[11],J=s[15];return l[0]=c*z+f*D+p*ct+d*q,l[4]=c*P+f*G+p*at+d*xt,l[8]=c*F+f*Y+p*I+d*O,l[12]=c*b+f*et+p*X+d*J,l[1]=_*z+g*D+v*ct+S*q,l[5]=_*P+g*G+v*at+S*xt,l[9]=_*F+g*Y+v*I+S*O,l[13]=_*b+g*et+v*X+S*J,l[2]=T*z+M*D+y*ct+x*q,l[6]=T*P+M*G+y*at+x*xt,l[10]=T*F+M*Y+y*I+x*O,l[14]=T*b+M*et+y*X+x*J,l[3]=N*z+L*D+C*ct+U*q,l[7]=N*P+L*G+C*at+U*xt,l[11]=N*F+L*Y+C*I+U*O,l[15]=N*b+L*et+C*X+U*J,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],S=t[14],T=t[3],M=t[7],y=t[11],x=t[15];return T*(+l*p*g-s*d*g-l*f*v+a*d*v+s*f*S-a*p*S)+M*(+n*p*S-n*d*v+l*c*v-s*c*S+s*d*_-l*p*_)+y*(+n*d*g-n*f*S-l*c*g+a*c*S+l*f*_-a*d*_)+x*(-s*f*_-n*p*g+n*f*v+s*c*g-a*c*v+a*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],S=t[11],T=t[12],M=t[13],y=t[14],x=t[15],N=g*y*d-M*v*d+M*p*S-f*y*S-g*p*x+f*v*x,L=T*v*d-_*y*d-T*p*S+c*y*S+_*p*x-c*v*x,C=_*M*d-T*g*d+T*f*S-c*M*S-_*f*x+c*g*x,U=T*g*p-_*M*p-T*f*v+c*M*v+_*f*y-c*g*y,z=n*N+a*L+s*C+l*U;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=N*P,t[1]=(M*v*l-g*y*l-M*s*S+a*y*S+g*s*x-a*v*x)*P,t[2]=(f*y*l-M*p*l+M*s*d-a*y*d-f*s*x+a*p*x)*P,t[3]=(g*p*l-f*v*l-g*s*d+a*v*d+f*s*S-a*p*S)*P,t[4]=L*P,t[5]=(_*y*l-T*v*l+T*s*S-n*y*S-_*s*x+n*v*x)*P,t[6]=(T*p*l-c*y*l-T*s*d+n*y*d+c*s*x-n*p*x)*P,t[7]=(c*v*l-_*p*l+_*s*d-n*v*d-c*s*S+n*p*S)*P,t[8]=C*P,t[9]=(T*g*l-_*M*l-T*a*S+n*M*S+_*a*x-n*g*x)*P,t[10]=(c*M*l-T*f*l+T*a*d-n*M*d-c*a*x+n*f*x)*P,t[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*S-n*f*S)*P,t[12]=U*P,t[13]=(_*M*s-T*g*s+T*a*v-n*M*v-_*a*y+n*g*y)*P,t[14]=(T*f*s-c*M*s-T*a*p+n*M*p+c*a*y-n*f*y)*P,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*P,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,S=l*_,T=l*g,M=c*_,y=c*g,x=f*g,N=p*d,L=p*_,C=p*g,U=a.x,z=a.y,P=a.z;return s[0]=(1-(M+x))*U,s[1]=(S+C)*U,s[2]=(T-L)*U,s[3]=0,s[4]=(S-C)*z,s[5]=(1-(v+x))*z,s[6]=(y+N)*z,s[7]=0,s[8]=(T+L)*P,s[9]=(y-N)*P,s[10]=(1-(v+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let l=io.set(s[0],s[1],s[2]).length();const c=io.set(s[4],s[5],s[6]).length(),f=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),t.x=s[12],t.y=s[13],t.z=s[14],Xi.copy(this);const d=1/l,_=1/c,g=1/f;return Xi.elements[0]*=d,Xi.elements[1]*=d,Xi.elements[2]*=d,Xi.elements[4]*=_,Xi.elements[5]*=_,Xi.elements[6]*=_,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,s,l,c,f=sa,p=!1){const d=this.elements,_=2*l/(n-t),g=2*l/(a-s),v=(n+t)/(n-t),S=(a+s)/(a-s);let T,M;if(p)T=l/(c-l),M=c*l/(c-l);else if(f===sa)T=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===tf)T=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=sa,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),S=-(a+s)/(a-s);let T,M;if(p)T=1/(c-l),M=c/(c-l);else if(f===sa)T=-2/(c-l),M=-(c+l)/(c-l);else if(f===tf)T=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const io=new st,Xi=new sn,DT=new st(0,0,0),UT=new st(1,1,1),pr=new st,bc=new st,pi=new st,zv=new sn,Bv=new ou;class ua{constructor(t=0,n=0,a=0,s=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],S=s[10];switch(n){case"XYZ":this._y=Math.asin(xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return zv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bv.setFromEuler(this),this.setFromQuaternion(Bv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class aS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LT=0;const Iv=new st,ao=new ou,wa=new sn,Ac=new st,zl=new st,NT=new st,OT=new ou,Fv=new st(1,0,0),Hv=new st(0,1,0),Gv=new st(0,0,1),Vv={type:"added"},PT={type:"removed"},ro={type:"childadded",child:null},zd={type:"childremoved",child:null};class Nn extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new st,n=new ua,a=new ou,s=new st(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new ue}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,n){return ao.setFromAxisAngle(t,n),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(Fv,t)}rotateY(t){return this.rotateOnAxis(Hv,t)}rotateZ(t){return this.rotateOnAxis(Gv,t)}translateOnAxis(t,n){return Iv.copy(t).applyQuaternion(this.quaternion),this.position.add(Iv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Fv,t)}translateY(t){return this.translateOnAxis(Hv,t)}translateZ(t){return this.translateOnAxis(Gv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Ac.copy(t):Ac.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(zl,Ac,this.up):wa.lookAt(Ac,zl,this.up),this.quaternion.setFromRotationMatrix(wa),s&&(wa.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(wa),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vv),ro.child=t,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(PT),zd.child=t,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vv),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,t,NT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,OT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),S=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),T.length>0&&(a.nodes=T)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Nn.DEFAULT_UP=new st(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new st,Da=new st,Bd=new st,Ua=new st,so=new st,oo=new st,kv=new st,Id=new st,Fd=new st,Hd=new st,Gd=new an,Vd=new an,kd=new an;class qi{constructor(t=new st,n=new st,a=new st){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Wi.subVectors(t,n),s.cross(Wi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){Wi.subVectors(s,n),Da.subVectors(a,n),Bd.subVectors(t,n);const c=Wi.dot(Wi),f=Wi.dot(Da),p=Wi.dot(Bd),d=Da.dot(Da),_=Da.dot(Bd),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(d*p-f*_)*v,T=(c*_-f*p)*v;return l.set(1-S-T,T,S)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,n,a,s,l,c,f,p){return this.getBarycoord(t,n,a,s,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ua.x),p.addScaledVector(c,Ua.y),p.addScaledVector(f,Ua.z),p)}static getInterpolatedAttribute(t,n,a,s,l,c){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(t,n),Vd.fromBufferAttribute(t,a),kd.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Gd,l.x),c.addScaledVector(Vd,l.y),c.addScaledVector(kd,l.z),c}static isFrontFacing(t,n,a,s){return Wi.subVectors(a,n),Da.subVectors(t,n),Wi.cross(Da).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Wi.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return qi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return qi.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;so.subVectors(s,a),oo.subVectors(l,a),Id.subVectors(t,a);const p=so.dot(Id),d=oo.dot(Id);if(p<=0&&d<=0)return n.copy(a);Fd.subVectors(t,s);const _=so.dot(Fd),g=oo.dot(Fd);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(so,c);Hd.subVectors(t,l);const S=so.dot(Hd),T=oo.dot(Hd);if(T>=0&&S<=T)return n.copy(l);const M=S*d-p*T;if(M<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(oo,f);const y=_*T-S*g;if(y<=0&&g-_>=0&&S-T>=0)return kv.subVectors(l,s),f=(g-_)/(g-_+(S-T)),n.copy(s).addScaledVector(kv,f);const x=1/(y+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(so,c).addScaledVector(oo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function Xd(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Ee{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ae.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=Ae.workingColorSpace){if(t=ST(t,1),n=xe(n,0,1),a=xe(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Xd(c,l,t+1/3),this.g=Xd(c,l,t),this.b=Xd(c,l,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,n=Li){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Li){const a=rS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return Ae.workingToColorSpace(Hn.copy(this),t),Math.round(xe(Hn.r*255,0,255))*65536+Math.round(xe(Hn.g*255,0,255))*256+Math.round(xe(Hn.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,s=Hn.g,l=Hn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-l)/g+(s<l?6:0);break;case s:p=(l-a)/g+2;break;case l:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Hn.copy(this),n),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Li){Ae.workingToColorSpace(Hn.copy(this),t);const n=Hn.r,a=Hn.g,s=Hn.b;return t!==Li?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(mr),this.setHSL(mr.h+t,mr.s+n,mr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(mr),t.getHSL(Rc);const a=Ad(mr.h,Rc.h,n),s=Ad(mr.s,Rc.s,n),l=Ad(mr.l,Rc.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ee;Ee.NAMES=rS;let zT=0;class Po extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=su(),this.name="",this.type="Material",this.blending=go,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=fp,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(a.blending=this.blending),this.side!==br&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==cp&&(a.blendSrc=this.blendSrc),this.blendDst!==fp&&(a.blendDst=this.blendDst),this.blendEquation!==is&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nf extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new st,Cc=new Ce;let BT=0;class xi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Dv,this.updateRanges=[],this.gpuType=za,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Cc.fromBufferAttribute(this,n),Cc.applyMatrix3(t),this.setXY(n,Cc.x,Cc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix3(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Nl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ti(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Nl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Nl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Nl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Nl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dv&&(t.usage=this.usage),t}}class sS extends xi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class oS extends xi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ls extends xi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let IT=0;const Di=new sn,Wd=new Nn,lo=new st,mi=new lu,Bl=new lu,Rn=new st;class ca extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=su(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eS(t)?oS:sS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ue().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,n,a){return Di.makeTranslation(t,n,a),this.applyMatrix4(Di),this}scale(t,n,a){return Di.makeScale(t,n,a),this.applyMatrix4(Di),this}lookAt(t){return Wd.lookAt(t),Wd.updateMatrix(),this.applyMatrix4(Wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ls(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];Bl.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(mi.min,Bl.min),mi.expandByPoint(Rn),Rn.addVectors(mi.max,Bl.max),mi.expandByPoint(Rn)):(mi.expandByPoint(Bl.min),mi.expandByPoint(Bl.max))}mi.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)Rn.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Rn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Rn.fromBufferAttribute(f,d),p&&(lo.fromBufferAttribute(t,d),Rn.add(lo)),s=Math.max(s,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let F=0;F<a.count;F++)f[F]=new st,p[F]=new st;const d=new st,_=new st,g=new st,v=new Ce,S=new Ce,T=new Ce,M=new st,y=new st;function x(F,b,D){d.fromBufferAttribute(a,F),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,D),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,D),_.sub(d),g.sub(d),S.sub(v),T.sub(v);const G=1/(S.x*T.y-T.x*S.y);isFinite(G)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(G),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(G),f[F].add(M),f[b].add(M),f[D].add(M),p[F].add(y),p[b].add(y),p[D].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let F=0,b=N.length;F<b;++F){const D=N[F],G=D.start,Y=D.count;for(let et=G,ct=G+Y;et<ct;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const L=new st,C=new st,U=new st,z=new st;function P(F){U.fromBufferAttribute(s,F),z.copy(U);const b=f[F];L.copy(b),L.sub(U.multiplyScalar(U.dot(b))).normalize(),C.crossVectors(z,b);const G=C.dot(p[F])<0?-1:1;c.setXYZW(F,L.x,L.y,L.z,G)}for(let F=0,b=N.length;F<b;++F){const D=N[F],G=D.start,Y=D.count;for(let et=G,ct=G+Y;et<ct;et+=3)P(t.getX(et+0)),P(t.getX(et+1)),P(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const s=new st,l=new st,c=new st,f=new st,p=new st,d=new st,_=new st,g=new st;if(t)for(let v=0,S=t.count;v<S;v+=3){const T=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);s.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)s.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(s,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let S=0,T=0;for(let M=0,y=p.length;M<y;M++){f.isInterleavedBufferAttribute?S=p[M]*f.data.stride+f.offset:S=p[M]*_;for(let x=0;x<_;x++)v[T++]=d[S++]}return new xi(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ca,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],S=t(v,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const S=d[g];_.push(S.toJSON(t.data))}_.length>0&&(s[p]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xv=new sn,jr=new iS,wc=new hf,Wv=new st,Dc=new st,Uc=new st,Lc=new st,qd=new st,Nc=new st,qv=new st,Oc=new st;class Oi extends Nn{constructor(t=new ca,n=new nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Nc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(qd.fromBufferAttribute(g,t),c?Nc.addScaledVector(qd,_):Nc.addScaledVector(qd.sub(n),_))}n.add(Nc)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),wc.copy(a.boundingSphere),wc.applyMatrix4(l),jr.copy(t.ray).recast(t.near),!(wc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(wc,Wv)===null||jr.origin.distanceToSquared(Wv)>(t.far-t.near)**2))&&(Xv.copy(l).invert(),jr.copy(t.ray).applyMatrix4(Xv),!(a.boundingBox!==null&&jr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,jr)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const y=v[T],x=c[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,U=L;C<U;C+=3){const z=f.getX(C),P=f.getX(C+1),F=f.getX(C+2);s=Pc(this,x,t,a,d,_,g,z,P,F),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const T=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=T,x=M;y<x;y+=3){const N=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);s=Pc(this,c,t,a,d,_,g,N,L,C),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const y=v[T],x=c[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=N,U=L;C<U;C+=3){const z=C,P=C+1,F=C+2;s=Pc(this,x,t,a,d,_,g,z,P,F),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const T=Math.max(0,S.start),M=Math.min(p.count,S.start+S.count);for(let y=T,x=M;y<x;y+=3){const N=y,L=y+1,C=y+2;s=Pc(this,c,t,a,d,_,g,N,L,C),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function FT(o,t,n,a,s,l,c,f){let p;if(t.side===ei?p=a.intersectTriangle(c,l,s,!0,f):p=a.intersectTriangle(s,l,c,t.side===br,f),p===null)return null;Oc.copy(f),Oc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Oc);return d<n.near||d>n.far?null:{distance:d,point:Oc.clone(),object:o}}function Pc(o,t,n,a,s,l,c,f,p,d){o.getVertexPosition(f,Dc),o.getVertexPosition(p,Uc),o.getVertexPosition(d,Lc);const _=FT(o,t,n,a,Dc,Uc,Lc,qv);if(_){const g=new st;qi.getBarycoord(qv,Dc,Uc,Lc,g),s&&(_.uv=qi.getInterpolatedAttribute(s,f,p,d,g,new Ce)),l&&(_.uv1=qi.getInterpolatedAttribute(l,f,p,d,g,new Ce)),c&&(_.normal=qi.getInterpolatedAttribute(c,f,p,d,g,new st),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new st,materialIndex:0};qi.getNormal(Dc,Uc,Lc,v.normal),_.face=v,_.barycoord=g}return _}class zo extends ca{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,S=0;T("z","y","x",-1,-1,a,n,t,c,l,0),T("z","y","x",1,-1,a,n,-t,c,l,1),T("x","z","y",1,1,t,a,n,s,c,2),T("x","z","y",1,-1,t,a,-n,s,c,3),T("x","y","z",1,-1,t,n,a,s,l,4),T("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(p),this.setAttribute("position",new ls(d,3)),this.setAttribute("normal",new ls(_,3)),this.setAttribute("uv",new ls(g,2));function T(M,y,x,N,L,C,U,z,P,F,b){const D=C/P,G=U/F,Y=C/2,et=U/2,ct=z/2,at=P+1,I=F+1;let X=0,q=0;const xt=new st;for(let O=0;O<I;O++){const J=O*G-et;for(let mt=0;mt<at;mt++){const yt=mt*D-Y;xt[M]=yt*N,xt[y]=J*L,xt[x]=ct,d.push(xt.x,xt.y,xt.z),xt[M]=0,xt[y]=0,xt[x]=z>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(mt/P),g.push(1-O/F),X+=1}}for(let O=0;O<F;O++)for(let J=0;J<P;J++){const mt=v+J+at*O,yt=v+J+at*(O+1),Rt=v+(J+1)+at*(O+1),Mt=v+(J+1)+at*O;p.push(mt,yt,Mt),p.push(yt,Rt,Mt),q+=6}f.addGroup(S,q,b),S+=q,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ao(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function qn(o){const t={};for(let n=0;n<o.length;n++){const a=Ao(o[n]);for(const s in a)t[s]=a[s]}return t}function HT(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function lS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const GT={clone:Ao,merge:qn};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=kT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ao(t.uniforms),this.uniformsGroups=HT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class uS extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new st,Yv=new Ce,jv=new Ce;class Ni extends uS{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Qp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qp*2*Math.atan(Math.tan(bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-t/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(_r.x,_r.y).multiplyScalar(-t/_r.z)}getViewSize(t,n){return this.getViewBounds(t,Yv,jv),n.subVectors(jv,Yv)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(bd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const uo=-90,co=1;class XT extends Nn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ni(uo,co,t,n);s.layers=this.layers,this.add(s);const l=new Ni(uo,co,t,n);l.layers=this.layers,this.add(l);const c=new Ni(uo,co,t,n);c.layers=this.layers,this.add(c);const f=new Ni(uo,co,t,n);f.layers=this.layers,this.add(f);const p=new Ni(uo,co,t,n);p.layers=this.layers,this.add(p);const d=new Ni(uo,co,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===sa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===tf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,l),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,S),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class cS extends jn{constructor(t=[],n=Eo,a,s,l,c,f,p,d,_){super(t,n,a,s,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class WT extends ps{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new cS(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zo(5,5,5),l=new Ia({name:"CubemapFromEquirect",uniforms:Ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ei,blending:yr});l.uniforms.tEquirect.value=n;const c=new Oi(s,l),f=n.minFilter;return n.minFilter===ss&&(n.minFilter=ra),new XT(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}class Fl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qT={type:"move"};class Yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const y=n.getJointPose(M,a),x=this._getHandJoint(d,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,T=.005;d.inputState.pinching&&v>S+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=S-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(qT)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Fl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class YT extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jd=new st,jT=new st,ZT=new ue;class ts{constructor(t=new st(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=jd.subVectors(a,n).cross(jT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(jd),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||ZT.getNormalMatrix(t),s=this.coplanarPoint(jd).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new hf,KT=new Ce(.5,.5),zc=new st;class Tm{constructor(t=new ts,n=new ts,a=new ts,s=new ts,l=new ts,c=new ts){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=sa,a=!1){const s=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],S=l[7],T=l[8],M=l[9],y=l[10],x=l[11],N=l[12],L=l[13],C=l[14],U=l[15];if(s[0].setComponents(d-c,S-_,x-T,U-N).normalize(),s[1].setComponents(d+c,S+_,x+T,U+N).normalize(),s[2].setComponents(d+f,S+g,x+M,U+L).normalize(),s[3].setComponents(d-f,S-g,x-M,U-L).normalize(),a)s[4].setComponents(p,v,y,C).normalize(),s[5].setComponents(d-p,S-v,x-y,U-C).normalize();else if(s[4].setComponents(d-p,S-v,x-y,U-C).normalize(),n===sa)s[5].setComponents(d+p,S+v,x+y,U+C).normalize();else if(n===tf)s[5].setComponents(p,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(t){Zr.center.set(0,0,0);const n=KT.distanceTo(t.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(zc.x=s.normal.x>0?t.max.x:t.min.x,zc.y=s.normal.y>0?t.max.y:t.min.y,zc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fS extends Po{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zv=new sn,Jp=new iS,Bc=new hf,Ic=new st;class Kv extends Nn{constructor(t=new ca,n=new fS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Bc.copy(a.boundingSphere),Bc.applyMatrix4(s),Bc.radius+=l,t.ray.intersectsSphere(Bc)===!1)return;Zv.copy(s).invert(),Jp.copy(t.ray).applyMatrix4(Zv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,g=a.attributes.position;if(d!==null){const v=Math.max(0,c.start),S=Math.min(d.count,c.start+c.count);for(let T=v,M=S;T<M;T++){const y=d.getX(T);Ic.fromBufferAttribute(g,y),Qv(Ic,y,p,s,t,n,this)}}else{const v=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=v,M=S;T<M;T++)Ic.fromBufferAttribute(g,T),Qv(Ic,T,p,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Qv(o,t,n,a,s,l,c){const f=Jp.distanceSqToPoint(o);if(f<n){const p=new st;Jp.closestPointToPoint(o,p),p.applyMatrix4(a);const d=s.ray.origin.distanceTo(p);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class QT extends jn{constructor(t,n,a,s,l,c,f,p,d){super(t,n,a,s,l,c,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hS extends jn{constructor(t,n,a=ds,s,l,c,f=ji,p=ji,d,_=Zl,g=1){if(_!==Zl&&_!==Kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Em(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dS extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ro extends ca{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,S=[],T=[],M=[],y=[];for(let x=0;x<_;x++){const N=x*v-c;for(let L=0;L<d;L++){const C=L*g-l;T.push(C,-N,0),M.push(0,0,1),y.push(L/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<f;N++){const L=N+d*x,C=N+d*(x+1),U=N+1+d*(x+1),z=N+1+d*x;S.push(L,C,z),S.push(C,U,z)}this.setIndex(S),this.setAttribute("position",new ls(T,3)),this.setAttribute("normal",new ls(M,3)),this.setAttribute("uv",new ls(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.width,t.height,t.widthSegments,t.heightSegments)}}class JT extends Po{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$x,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $T extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t1 extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pS extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Zd=new sn,Jv=new st,$v=new st;class e1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=la,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tm,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Jv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Jv),$v.setFromMatrixPosition(t.target.matrixWorld),n.lookAt($v),n.updateMatrixWorld(),Zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Zd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mS extends uS{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class n1 extends e1{constructor(){super(new mS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i1 extends pS{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new n1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class a1 extends pS{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class r1 extends Ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class s1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function tx(o,t,n,a){const s=o1(a);switch(n){case Zx:return o*t;case Qx:return o*t/s.components*s.byteLength;case Sm:return o*t/s.components*s.byteLength;case Jx:return o*t*2/s.components*s.byteLength;case ym:return o*t*2/s.components*s.byteLength;case Kx:return o*t*3/s.components*s.byteLength;case Yi:return o*t*4/s.components*s.byteLength;case Mm:return o*t*4/s.components*s.byteLength;case kc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tp:case Ap:return Math.max(o,16)*Math.max(t,8)/4;case Ep:case bp:return Math.max(o,8)*Math.max(t,8)/2;case Rp:case Cp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Lp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Op:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case zp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Gp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case kp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Xp:case Wp:case qp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Yp:case jp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Zp:case Kp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function o1(o){switch(o){case la:case Wx:return{byteLength:1,components:1};case Yl:case qx:case ru:return{byteLength:2,components:1};case vm:case xm:return{byteLength:2,components:4};case ds:case gm:case za:return{byteLength:4,components:1};case Yx:case jx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_m}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_m);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _S(){let o=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function l1(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=o.SHORT;else if(d instanceof Uint32Array)S=o.UNSIGNED_INT;else if(d instanceof Int32Array)S=o.INT;else if(d instanceof Int8Array)S=o.BYTE;else if(d instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<g.length;S++){const T=g[v],M=g[S];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,T=g.length;S<T;S++){const M=g[S];o.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:c}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m1=`#ifdef USE_AOMAP
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
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
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
#endif`,v1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,L1=`#define PI 3.141592653589793
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
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O1=`vec3 transformedNormal = objectNormal;
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
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K1=`#ifdef USE_GRADIENTMAP
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
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tb=`uniform bool receiveShadow;
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
#endif`,eb=`#ifdef USE_ENVMAP
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
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,ob=`struct PhysicalMaterial {
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
}`,lb=`
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
#endif`,ub=`#if defined( RE_IndirectDiffuse )
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vb=`#if defined( USE_POINTS_UV )
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
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ub=`#ifdef USE_NORMALMAP
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
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yb=`float getShadowMask() {
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
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,Jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nA=`#ifdef USE_TRANSMISSION
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
#endif`,iA=`#ifdef USE_TRANSMISSION
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
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uA=`uniform sampler2D t2D;
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`#include <common>
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
}`,mA=`#if DEPTH_PACKING == 3200
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
}`,_A=`#define DISTANCE
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
}`,gA=`#define DISTANCE
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
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`uniform float scale;
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
}`,yA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,EA=`uniform vec3 diffuse;
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
}`,TA=`#define LAMBERT
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
}`,bA=`#define LAMBERT
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
}`,AA=`#define MATCAP
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
}`,RA=`#define MATCAP
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
}`,CA=`#define NORMAL
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
}`,wA=`#define NORMAL
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
}`,DA=`#define PHONG
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
}`,UA=`#define PHONG
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
}`,LA=`#define STANDARD
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
}`,NA=`#define STANDARD
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
}`,OA=`#define TOON
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
}`,PA=`#define TOON
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
}`,zA=`uniform float size;
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
}`,BA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,FA=`uniform vec3 color;
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
}`,HA=`uniform float rotation;
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
}`,GA=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:u1,alphahash_pars_fragment:c1,alphamap_fragment:f1,alphamap_pars_fragment:h1,alphatest_fragment:d1,alphatest_pars_fragment:p1,aomap_fragment:m1,aomap_pars_fragment:_1,batching_pars_vertex:g1,batching_vertex:v1,begin_vertex:x1,beginnormal_vertex:S1,bsdfs:y1,iridescence_fragment:M1,bumpmap_pars_fragment:E1,clipping_planes_fragment:T1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:R1,color_fragment:C1,color_pars_fragment:w1,color_pars_vertex:D1,color_vertex:U1,common:L1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:O1,displacementmap_pars_vertex:P1,displacementmap_vertex:z1,emissivemap_fragment:B1,emissivemap_pars_fragment:I1,colorspace_fragment:F1,colorspace_pars_fragment:H1,envmap_fragment:G1,envmap_common_pars_fragment:V1,envmap_pars_fragment:k1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:eb,envmap_vertex:W1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:j1,fog_pars_fragment:Z1,gradientmap_pars_fragment:K1,lightmap_pars_fragment:Q1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:$1,lights_pars_begin:tb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:ab,lights_phong_pars_fragment:rb,lights_physical_fragment:sb,lights_physical_pars_fragment:ob,lights_fragment_begin:lb,lights_fragment_maps:ub,lights_fragment_end:cb,logdepthbuf_fragment:fb,logdepthbuf_pars_fragment:hb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:_b,map_particle_fragment:gb,map_particle_pars_fragment:vb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:yb,morphcolor_vertex:Mb,morphnormal_vertex:Eb,morphtarget_pars_vertex:Tb,morphtarget_vertex:bb,normal_fragment_begin:Ab,normal_fragment_maps:Rb,normal_pars_fragment:Cb,normal_pars_vertex:wb,normal_vertex:Db,normalmap_pars_fragment:Ub,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:Pb,opaque_fragment:zb,packing:Bb,premultiplied_alpha_fragment:Ib,project_vertex:Fb,dithering_fragment:Hb,dithering_pars_fragment:Gb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Xb,shadowmap_pars_vertex:Wb,shadowmap_vertex:qb,shadowmask_pars_fragment:Yb,skinbase_vertex:jb,skinning_pars_vertex:Zb,skinning_vertex:Kb,skinnormal_vertex:Qb,specularmap_fragment:Jb,specularmap_pars_fragment:$b,tonemapping_fragment:tA,tonemapping_pars_fragment:eA,transmission_fragment:nA,transmission_pars_fragment:iA,uv_pars_fragment:aA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:oA,background_vert:lA,background_frag:uA,backgroundCube_vert:cA,backgroundCube_frag:fA,cube_vert:hA,cube_frag:dA,depth_vert:pA,depth_frag:mA,distanceRGBA_vert:_A,distanceRGBA_frag:gA,equirect_vert:vA,equirect_frag:xA,linedashed_vert:SA,linedashed_frag:yA,meshbasic_vert:MA,meshbasic_frag:EA,meshlambert_vert:TA,meshlambert_frag:bA,meshmatcap_vert:AA,meshmatcap_frag:RA,meshnormal_vert:CA,meshnormal_frag:wA,meshphong_vert:DA,meshphong_frag:UA,meshphysical_vert:LA,meshphysical_frag:NA,meshtoon_vert:OA,meshtoon_frag:PA,points_vert:zA,points_frag:BA,shadow_vert:IA,shadow_frag:FA,sprite_vert:HA,sprite_frag:GA},Ot={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},ia={basic:{uniforms:qn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:qn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:qn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:qn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:qn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ee(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:qn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:qn([Ot.points,Ot.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:qn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:qn([Ot.common,Ot.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:qn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:qn([Ot.sprite,Ot.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:qn([Ot.common,Ot.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:qn([Ot.lights,Ot.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ia.physical={uniforms:qn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Fc={r:0,b:0,g:0},Kr=new ua,VA=new sn;function kA(o,t,n,a,s,l,c){const f=new Ee(0);let p=l===!0?0:1,d,_,g=null,v=0,S=null;function T(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?n:t).get(C)),C}function M(L){let C=!1;const U=T(L);U===null?x(f,p):U&&U.isColor&&(x(U,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,C){const U=T(C);U&&(U.isCubeTexture||U.mapping===ff)?(_===void 0&&(_=new Oi(new zo(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:Ao(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),Kr.copy(C.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),_.material.uniforms.envMap.value=U,_.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(VA.makeRotationFromEuler(Kr)),_.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Be,(g!==U||v!==U.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=U,v=U.version,S=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new Oi(new Ro(2,2),new Ia({name:"BackgroundMaterial",uniforms:Ao(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=Ae.getTransfer(U.colorSpace)!==Be,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||S!==o.toneMapping)&&(d.material.needsUpdate=!0,g=U,v=U.version,S=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function x(L,C){L.getRGB(Fc,lS(o)),a.buffers.color.setClear(Fc.r,Fc.g,Fc.b,C,c)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,C=1){f.set(L),p=C,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(f,p)},render:M,addToRenderList:y,dispose:N}}function XA(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,c=!1;function f(D,G,Y,et,ct){let at=!1;const I=g(et,Y,G);l!==I&&(l=I,d(l.object)),at=S(D,et,Y,ct),at&&T(D,et,Y,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(at||c)&&(c=!1,C(D,G,Y,et),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return o.createVertexArray()}function d(D){return o.bindVertexArray(D)}function _(D){return o.deleteVertexArray(D)}function g(D,G,Y){const et=Y.wireframe===!0;let ct=a[D.id];ct===void 0&&(ct={},a[D.id]=ct);let at=ct[G.id];at===void 0&&(at={},ct[G.id]=at);let I=at[et];return I===void 0&&(I=v(p()),at[et]=I),I}function v(D){const G=[],Y=[],et=[];for(let ct=0;ct<n;ct++)G[ct]=0,Y[ct]=0,et[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:et,object:D,attributes:{},index:null}}function S(D,G,Y,et){const ct=l.attributes,at=G.attributes;let I=0;const X=Y.getAttributes();for(const q in X)if(X[q].location>=0){const O=ct[q];let J=at[q];if(J===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;I++}return l.attributesNum!==I||l.index!==et}function T(D,G,Y,et){const ct={},at=G.attributes;let I=0;const X=Y.getAttributes();for(const q in X)if(X[q].location>=0){let O=at[q];O===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),ct[q]=J,I++}l.attributes=ct,l.attributesNum=I,l.index=et}function M(){const D=l.newAttributes;for(let G=0,Y=D.length;G<Y;G++)D[G]=0}function y(D){x(D,0)}function x(D,G){const Y=l.newAttributes,et=l.enabledAttributes,ct=l.attributeDivisors;Y[D]=1,et[D]===0&&(o.enableVertexAttribArray(D),et[D]=1),ct[D]!==G&&(o.vertexAttribDivisor(D,G),ct[D]=G)}function N(){const D=l.newAttributes,G=l.enabledAttributes;for(let Y=0,et=G.length;Y<et;Y++)G[Y]!==D[Y]&&(o.disableVertexAttribArray(Y),G[Y]=0)}function L(D,G,Y,et,ct,at,I){I===!0?o.vertexAttribIPointer(D,G,Y,ct,at):o.vertexAttribPointer(D,G,Y,et,ct,at)}function C(D,G,Y,et){M();const ct=et.attributes,at=Y.getAttributes(),I=G.defaultAttributeValues;for(const X in at){const q=at[X];if(q.location>=0){let xt=ct[X];if(xt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const O=xt.normalized,J=xt.itemSize,mt=t.get(xt);if(mt===void 0)continue;const yt=mt.buffer,Rt=mt.type,Mt=mt.bytesPerElement,K=Rt===o.INT||Rt===o.UNSIGNED_INT||xt.gpuType===gm;if(xt.isInterleavedBufferAttribute){const dt=xt.data,St=dt.stride,Zt=xt.offset;if(dt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)x(q.location+Wt,dt.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)y(q.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Wt=0;Wt<q.locationSize;Wt++)L(q.location+Wt,J/q.locationSize,Rt,O,St*Mt,(Zt+J/q.locationSize*Wt)*Mt,K)}else{if(xt.isInstancedBufferAttribute){for(let dt=0;dt<q.locationSize;dt++)x(q.location+dt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let dt=0;dt<q.locationSize;dt++)y(q.location+dt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let dt=0;dt<q.locationSize;dt++)L(q.location+dt,J/q.locationSize,Rt,O,J*Mt,J/q.locationSize*dt*Mt,K)}}else if(I!==void 0){const O=I[X];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(q.location,O);break;case 3:o.vertexAttrib3fv(q.location,O);break;case 4:o.vertexAttrib4fv(q.location,O);break;default:o.vertexAttrib1fv(q.location,O)}}}}N()}function U(){F();for(const D in a){const G=a[D];for(const Y in G){const et=G[Y];for(const ct in et)_(et[ct].object),delete et[ct];delete G[Y]}delete a[D]}}function z(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const Y in G){const et=G[Y];for(const ct in et)_(et[ct].object),delete et[ct];delete G[Y]}delete a[D.id]}function P(D){for(const G in a){const Y=a[G];if(Y[D.id]===void 0)continue;const et=Y[D.id];for(const ct in et)_(et[ct].object),delete et[ct];delete Y[D.id]}}function F(){b(),c=!0,l!==s&&(l=s,d(l.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:y,disableUnusedAttributes:N}}function WA(o,t,n){let a;function s(d){a=d}function l(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];n.update(S,a,1)}function p(d,_,g,v){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<d.length;T++)c(d[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let T=0;for(let M=0;M<g;M++)T+=_[M]*v[M];n.update(T,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function qA(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){return!(P!==Yi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const F=P===ru&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==la&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==za&&!F)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=T>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:U,maxSamples:z}}function YA(o){const t=this;let n=null,a=0,s=!1,l=!1;const c=new ts,f=new ue,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||s;return s=v,a=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,S){const T=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!s||T===null||T.length===0||l&&!y)l?_(null):d();else{const N=l?0:a,L=N*4;let C=x.clippingState||null;p.value=C,C=_(T,v,L,S);for(let U=0;U!==L;++U)C[U]=n[U];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,S,T){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=p.value,T!==!0||y===null){const x=S+M*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,C=S;L!==M;++L,C+=4)c.copy(g[L]).applyMatrix4(N,f),c.normal.toArray(y,C),y[C+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function jA(o){let t=new WeakMap;function n(c,f){return f===xp?c.mapping=Eo:f===Sp&&(c.mapping=To),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===xp||f===Sp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new WT(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const po=4,ex=[.125,.215,.35,.446,.526,.582],as=20,Kd=new mS,nx=new Ee;let Qd=null,Jd=0,$d=0,tp=!1;const es=(1+Math.sqrt(5))/2,fo=1/es,ix=[new st(-es,fo,0),new st(es,fo,0),new st(-fo,0,es),new st(fo,0,es),new st(0,es,-fo),new st(0,es,fo),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],ZA=new st;class ax{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=ZA}=l;Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qd,Jd,$d),this._renderer.xr.enabled=tp,t.scissorTest=!1,Hc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Eo||t.mapping===To?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),tp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ra,minFilter:ra,generateMipmaps:!1,type:ru,format:Yi,colorSpace:bo,depthBuffer:!1},s=rx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KA(l)),this._blurMaterial=QA(l,t,n)}return s}_compileMaterial(t){const n=new Oi(this._lodPlanes[0],t);this._renderer.compile(n,Kd)}_sceneToCubeUV(t,n,a,s,l){const p=new Ni(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(nx),g.toneMapping=Mr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const M=new nf({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),y=new Oi(new zo,M);let x=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,x=!0):(M.color.copy(nx),x=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(p.up.set(0,d[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[L],l.y,l.z)):C===1?(p.up.set(0,0,d[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[L],l.z)):(p.up.set(0,d[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[L]));const U=this._cubeSize;Hc(s,C*U,L>2?U:0,U,U),g.setRenderTarget(s),x&&g.render(y,p),g.render(t,p)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=S,g.autoClear=v,t.background=N}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Eo||t.mapping===To;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sx());const l=s?this._cubemapMaterial:this._equirectMaterial,c=new Oi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Hc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,Kd)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ix[(s-l-1)%ix.length];this._blur(t,l-1,l,c,f)}n.autoClear=a}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Oi(this._lodPlanes[s],d),v=d.uniforms,S=this._sizeLods[a]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*as-1),M=l/T,y=isFinite(l)?1+Math.floor(_*M):as;y>as&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${as}`);const x=[];let N=0;for(let P=0;P<as;++P){const F=P/M,b=Math.exp(-F*F/2);x.push(b),P===0?N+=b:P<y&&(N+=2*b)}for(let P=0;P<x.length;P++)x[P]=x[P]/N;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-a;const C=this._sizeLods[s],U=3*C*(s>L-po?s-L+po:0),z=4*(this._cubeSize-C);Hc(n,U,z,3*C,2*C),p.setRenderTarget(n),p.render(g,Kd)}}function KA(o){const t=[],n=[],a=[];let s=o;const l=o-po+1+ex.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);n.push(f);let p=1/f;c>o-po?p=ex[c-o+po-1]:c===0&&(p=0),a.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,M=3,y=2,x=1,N=new Float32Array(M*T*S),L=new Float32Array(y*T*S),C=new Float32Array(x*T*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,F=z>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];N.set(b,M*T*z),L.set(v,y*T*z);const D=[z,z,z,z,z,z];C.set(D,x*T*z)}const U=new ca;U.setAttribute("position",new xi(N,M)),U.setAttribute("uv",new xi(L,y)),U.setAttribute("faceIndex",new xi(C,x)),t.push(U),s>po&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function rx(o,t,n){const a=new ps(o,t,n);return a.texture.mapping=ff,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Hc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function QA(o,t,n){const a=new Float32Array(as),s=new st(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bm(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function sx(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bm(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ox(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function bm(){return`

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
	`}function JA(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===xp||p===Sp,_=p===Eo||p===To;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new ax(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return d&&S&&S.height>0||_&&S&&s(S)?(n===null&&(n=new ax(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function $A(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Ql("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function tR(o,t,n,a){const s={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete s[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)t.update(v[S],o.ARRAY_BUFFER)}function d(g){const v=[],S=g.index,T=g.attributes.position;let M=0;if(S!==null){const N=S.array;M=S.version;for(let L=0,C=N.length;L<C;L+=3){const U=N[L+0],z=N[L+1],P=N[L+2];v.push(U,z,z,P,P,U)}}else if(T!==void 0){const N=T.array;M=T.version;for(let L=0,C=N.length/3-1;L<C;L+=3){const U=L+0,z=L+1,P=L+2;v.push(U,z,z,P,P,U)}}else return;const y=new(eS(v)?oS:sS)(v,1);y.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,y)}function _(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function eR(o,t,n){let a;function s(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,S){o.drawElements(a,S,l,v*c),n.update(S,a,1)}function d(v,S,T){T!==0&&(o.drawElementsInstanced(a,S,l,v*c,T),n.update(S,a,T))}function _(v,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,v,0,T);let y=0;for(let x=0;x<T;x++)y+=S[x];n.update(y,a,1)}function g(v,S,T,M){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)d(v[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,M,0,T);let x=0;for(let N=0;N<T;N++)x+=S[N]*M[N];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function nR(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function iR(o,t,n){const a=new WeakMap,s=new an;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let D=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",D)};var S=D;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),M===!0&&(C=2),y===!0&&(C=3);let U=f.attributes.position.count*C,z=1;U>t.maxTextureSize&&(z=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*z*4*g),F=new nS(P,U,z,g);F.type=za,F.needsUpdate=!0;const b=C*4;for(let G=0;G<g;G++){const Y=x[G],et=N[G],ct=L[G],at=U*z*4*G;for(let I=0;I<Y.count;I++){const X=I*b;T===!0&&(s.fromBufferAttribute(Y,I),P[at+X+0]=s.x,P[at+X+1]=s.y,P[at+X+2]=s.z,P[at+X+3]=0),M===!0&&(s.fromBufferAttribute(et,I),P[at+X+4]=s.x,P[at+X+5]=s.y,P[at+X+6]=s.z,P[at+X+7]=0),y===!0&&(s.fromBufferAttribute(ct,I),P[at+X+8]=s.x,P[at+X+9]=s.y,P[at+X+10]=s.z,P[at+X+11]=ct.itemSize===4?s.w:1)}}v={count:g,texture:F,size:new Ce(U,z)},a.set(f,v),f.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let T=0;for(let y=0;y<d.length;y++)T+=d[y];const M=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",M),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:l}}function aR(o,t,n,a){let s=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const gS=new jn,lx=new hS(1,1),vS=new nS,xS=new CT,SS=new cS,ux=[],cx=[],fx=new Float32Array(16),hx=new Float32Array(9),dx=new Float32Array(4);function Bo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=ux[s];if(l===void 0&&(l=new Float32Array(s),ux[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function yn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Mn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function df(o,t){let n=cx[t];n===void 0&&(n=new Int32Array(t),cx[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function rR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function sR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2fv(this.addr,t),Mn(n,t)}}function oR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;o.uniform3fv(this.addr,t),Mn(n,t)}}function lR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4fv(this.addr,t),Mn(n,t)}}function uR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(yn(n,a))return;dx.set(a),o.uniformMatrix2fv(this.addr,!1,dx),Mn(n,a)}}function cR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(yn(n,a))return;hx.set(a),o.uniformMatrix3fv(this.addr,!1,hx),Mn(n,a)}}function fR(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(yn(n,a))return;fx.set(a),o.uniformMatrix4fv(this.addr,!1,fx),Mn(n,a)}}function hR(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function dR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2iv(this.addr,t),Mn(n,t)}}function pR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;o.uniform3iv(this.addr,t),Mn(n,t)}}function mR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4iv(this.addr,t),Mn(n,t)}}function _R(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function gR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;o.uniform2uiv(this.addr,t),Mn(n,t)}}function vR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;o.uniform3uiv(this.addr,t),Mn(n,t)}}function xR(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;o.uniform4uiv(this.addr,t),Mn(n,t)}}function SR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(lx.compareFunction=tS,l=lx):l=gS,n.setTexture2D(t||l,s)}function yR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||xS,s)}function MR(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||SS,s)}function ER(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||vS,s)}function TR(o){switch(o){case 5126:return rR;case 35664:return sR;case 35665:return oR;case 35666:return lR;case 35674:return uR;case 35675:return cR;case 35676:return fR;case 5124:case 35670:return hR;case 35667:case 35671:return dR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return _R;case 36294:return gR;case 36295:return vR;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return yR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}function bR(o,t){o.uniform1fv(this.addr,t)}function AR(o,t){const n=Bo(t,this.size,2);o.uniform2fv(this.addr,n)}function RR(o,t){const n=Bo(t,this.size,3);o.uniform3fv(this.addr,n)}function CR(o,t){const n=Bo(t,this.size,4);o.uniform4fv(this.addr,n)}function wR(o,t){const n=Bo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function DR(o,t){const n=Bo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function UR(o,t){const n=Bo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function LR(o,t){o.uniform1iv(this.addr,t)}function NR(o,t){o.uniform2iv(this.addr,t)}function OR(o,t){o.uniform3iv(this.addr,t)}function PR(o,t){o.uniform4iv(this.addr,t)}function zR(o,t){o.uniform1uiv(this.addr,t)}function BR(o,t){o.uniform2uiv(this.addr,t)}function IR(o,t){o.uniform3uiv(this.addr,t)}function FR(o,t){o.uniform4uiv(this.addr,t)}function HR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||gS,l[c])}function GR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||xS,l[c])}function VR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||SS,l[c])}function kR(o,t,n){const a=this.cache,s=t.length,l=df(n,s);yn(a,l)||(o.uniform1iv(this.addr,l),Mn(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||vS,l[c])}function XR(o){switch(o){case 5126:return bR;case 35664:return AR;case 35665:return RR;case 35666:return CR;case 35674:return wR;case 35675:return DR;case 35676:return UR;case 5124:case 35670:return LR;case 35667:case 35671:return NR;case 35668:case 35672:return OR;case 35669:case 35673:return PR;case 5125:return zR;case 36294:return BR;case 36295:return IR;case 36296:return FR;case 35678:case 36198:case 36298:case 36306:case 35682:return HR;case 35679:case 36299:case 36307:return GR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return kR}}class WR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=TR(n.type)}}class qR{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XR(n.type)}}class YR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function px(o,t){o.seq.push(t),o.map[t.id]=t}function jR(o,t,n){const a=o.name,s=a.length;for(ep.lastIndex=0;;){const l=ep.exec(a),c=ep.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){px(n,d===void 0?new WR(f,o,t):new qR(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new YR(f),px(n,g)),n=g}}}class Yc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=t.getActiveUniform(n,s),c=t.getUniformLocation(n,l.name);jR(l,c,this)}}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function mx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const ZR=37297;let KR=0;function QR(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const _x=new ue;function JR(o){Ae._getMatrix(_x,Ae.workingColorSpace,o);const t=`mat3( ${_x.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(o)){case $c:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function gx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+QR(o.getShaderSource(t),f)}else return l}function $R(o,t){const n=JR(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tC(o,t){let n;switch(t){case nT:n="Linear";break;case iT:n="Reinhard";break;case aT:n="Cineon";break;case rT:n="ACESFilmic";break;case oT:n="AgX";break;case lT:n="Neutral";break;case sT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Gc=new st;function eC(){Ae.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),n=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function iC(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function aC(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function Hl(o){return o!==""}function vx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rC=/^[ \t]*#include +<([\w\d./]+)>/gm;function $p(o){return o.replace(rC,oC)}const sC=new Map;function oC(o,t){let n=he[t];if(n===void 0){const a=sC.get(t);if(a!==void 0)n=he[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return $p(n)}const lC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(o){return o.replace(lC,uC)}function uC(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function yx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function cC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Vx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===PE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===La&&(t="SHADOWMAP_TYPE_VSM"),t}function fC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Eo:case To:t="ENVMAP_TYPE_CUBE";break;case ff:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case To:t="ENVMAP_MODE_REFRACTION";break}return t}function dC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case kx:t="ENVMAP_BLENDING_MULTIPLY";break;case tT:t="ENVMAP_BLENDING_MIX";break;case eT:t="ENVMAP_BLENDING_ADD";break}return t}function pC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function mC(o,t,n,a){const s=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=cC(n),d=fC(n),_=hC(n),g=dC(n),v=pC(n),S=nC(n),T=iC(l),M=s.createProgram();let y,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Hl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Hl).join(`
`),x.length>0&&(x+=`
`)):(y=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),x=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?he.tonemapping_pars_fragment:"",n.toneMapping!==Mr?tC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,$R("linearToOutputTexel",n.outputColorSpace),eC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hl).join(`
`)),c=$p(c),c=vx(c,n),c=xx(c,n),f=$p(f),f=vx(f,n),f=xx(f,n),c=Sx(c),f=Sx(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=N+y+c,C=N+x+f,U=mx(s,s.VERTEX_SHADER,L),z=mx(s,s.FRAGMENT_SHADER,C);s.attachShader(M,U),s.attachShader(M,z),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(G){if(o.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M)||"",et=s.getShaderInfoLog(U)||"",ct=s.getShaderInfoLog(z)||"",at=Y.trim(),I=et.trim(),X=ct.trim();let q=!0,xt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,U,z);else{const O=gx(s,U,"vertex"),J=gx(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+at+`
`+O+`
`+J)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(I===""||X==="")&&(xt=!1);xt&&(G.diagnostics={runnable:q,programLog:at,vertexShader:{log:I,prefix:y},fragmentShader:{log:X,prefix:x}})}s.deleteShader(U),s.deleteShader(z),F=new Yc(s,M),b=aC(s,M)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(M,ZR)),D},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KR++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=z,this}let _C=0;class gC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new vC(t),n.set(t,a)),a}}class vC{constructor(t){this.id=_C++,this.code=t,this.usedTimes=0}}function xC(o,t,n,a,s,l,c){const f=new aS,p=new gC,d=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let S=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return d.add(b),b===0?"uv":`uv${b}`}function y(b,D,G,Y,et){const ct=Y.fog,at=et.geometry,I=b.isMeshStandardMaterial?Y.environment:null,X=(b.isMeshStandardMaterial?n:t).get(b.envMap||I),q=X&&X.mapping===ff?X.image.height:null,xt=T[b.type];b.precision!==null&&(S=s.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const O=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,J=O!==void 0?O.length:0;let mt=0;at.morphAttributes.position!==void 0&&(mt=1),at.morphAttributes.normal!==void 0&&(mt=2),at.morphAttributes.color!==void 0&&(mt=3);let yt,Rt,Mt,K;if(xt){const Me=ia[xt];yt=Me.vertexShader,Rt=Me.fragmentShader}else yt=b.vertexShader,Rt=b.fragmentShader,p.update(b),Mt=p.getVertexShaderID(b),K=p.getFragmentShaderID(b);const dt=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Zt=et.isInstancedMesh===!0,Wt=et.isBatchedMesh===!0,de=!!b.map,cn=!!b.matcap,V=!!X,Le=!!b.aoMap,re=!!b.lightMap,ne=!!b.bumpMap,Pt=!!b.normalMap,Ve=!!b.displacementMap,Gt=!!b.emissiveMap,se=!!b.metalnessMap,je=!!b.roughnessMap,Ze=b.anisotropy>0,B=b.clearcoat>0,A=b.dispersion>0,nt=b.iridescence>0,ft=b.sheen>0,_t=b.transmission>0,ut=Ze&&!!b.anisotropyMap,zt=B&&!!b.clearcoatMap,Ct=B&&!!b.clearcoatNormalMap,kt=B&&!!b.clearcoatRoughnessMap,qt=nt&&!!b.iridescenceMap,Et=nt&&!!b.iridescenceThicknessMap,Lt=ft&&!!b.sheenColorMap,jt=ft&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Dt=!!b.specularColorMap,oe=!!b.specularIntensityMap,W=_t&&!!b.transmissionMap,At=_t&&!!b.thicknessMap,wt=!!b.gradientMap,Bt=!!b.alphaMap,Tt=b.alphaTest>0,vt=!!b.alphaHash,Ht=!!b.extensions;let ae=Mr;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ae=o.toneMapping);const we={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:yt,fragmentShader:Rt,defines:b.defines,customVertexShaderID:Mt,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Wt,batchingColor:Wt&&et._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&et.instanceColor!==null,instancingMorph:Zt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:bo,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:cn,envMap:V,envMapMode:V&&X.mapping,envMapCubeUVHeight:q,aoMap:Le,lightMap:re,bumpMap:ne,normalMap:Pt,displacementMap:v&&Ve,emissiveMap:Gt,normalMapObjectSpace:Pt&&b.normalMapType===hT,normalMapTangentSpace:Pt&&b.normalMapType===$x,metalnessMap:se,roughnessMap:je,anisotropy:Ze,anisotropyMap:ut,clearcoat:B,clearcoatMap:zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:A,iridescence:nt,iridescenceMap:qt,iridescenceThicknessMap:Et,sheen:ft,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:Dt,specularIntensityMap:oe,transmission:_t,transmissionMap:W,thicknessMap:At,gradientMap:wt,opaque:b.transparent===!1&&b.blending===go&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Tt,alphaHash:vt,combine:b.combine,mapUv:de&&M(b.map.channel),aoMapUv:Le&&M(b.aoMap.channel),lightMapUv:re&&M(b.lightMap.channel),bumpMapUv:ne&&M(b.bumpMap.channel),normalMapUv:Pt&&M(b.normalMap.channel),displacementMapUv:Ve&&M(b.displacementMap.channel),emissiveMapUv:Gt&&M(b.emissiveMap.channel),metalnessMapUv:se&&M(b.metalnessMap.channel),roughnessMapUv:je&&M(b.roughnessMap.channel),anisotropyMapUv:ut&&M(b.anisotropyMap.channel),clearcoatMapUv:zt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:jt&&M(b.sheenRoughnessMap.channel),specularMapUv:Vt&&M(b.specularMap.channel),specularColorMapUv:Dt&&M(b.specularColorMap.channel),specularIntensityMapUv:oe&&M(b.specularIntensityMap.channel),transmissionMapUv:W&&M(b.transmissionMap.channel),thicknessMapUv:At&&M(b.thicknessMap.channel),alphaMapUv:Bt&&M(b.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Pt||Ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!at.attributes.uv&&(de||Bt),fog:!!ct,useFog:b.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:St,skinning:et.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:mt,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Ae.getTransfer(b.map.colorSpace)===Be,decodeVideoTextureEmissive:Gt&&b.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(b.emissiveMap.colorSpace)===Be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pa,flipSided:b.side===ei,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Wt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=d.has(1),we.vertexUv2s=d.has(2),we.vertexUv3s=d.has(3),d.clear(),we}function x(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)D.push(G),D.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(N(D,b),L(D,b),D.push(o.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function N(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function L(b,D){f.disableAll(),D.supportsVertexTextures&&f.enable(0),D.instancing&&f.enable(1),D.instancingColor&&f.enable(2),D.instancingMorph&&f.enable(3),D.matcap&&f.enable(4),D.envMap&&f.enable(5),D.normalMapObjectSpace&&f.enable(6),D.normalMapTangentSpace&&f.enable(7),D.clearcoat&&f.enable(8),D.iridescence&&f.enable(9),D.alphaTest&&f.enable(10),D.vertexColors&&f.enable(11),D.vertexAlphas&&f.enable(12),D.vertexUv1s&&f.enable(13),D.vertexUv2s&&f.enable(14),D.vertexUv3s&&f.enable(15),D.vertexTangents&&f.enable(16),D.anisotropy&&f.enable(17),D.alphaHash&&f.enable(18),D.batching&&f.enable(19),D.dispersion&&f.enable(20),D.batchingColor&&f.enable(21),D.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const D=T[b.type];let G;if(D){const Y=ia[D];G=GT.clone(Y.uniforms)}else G=b.uniforms;return G}function U(b,D){let G;for(let Y=0,et=_.length;Y<et;Y++){const ct=_[Y];if(ct.cacheKey===D){G=ct,++G.usedTimes;break}}return G===void 0&&(G=new mC(o,D,b,l),_.push(G)),G}function z(b){if(--b.usedTimes===0){const D=_.indexOf(b);_[D]=_[_.length-1],_.pop(),b.destroy()}}function P(b){p.remove(b)}function F(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:U,releaseProgram:z,releaseShaderCache:P,programs:_,dispose:F}}function SC(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function yC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Mx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Ex(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,S,T,M,y){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:T,renderOrder:g.renderOrder,z:M,group:y},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=M,x.group=y),t++,x}function f(g,v,S,T,M,y){const x=c(g,v,S,T,M,y);S.transmission>0?a.push(x):S.transparent===!0?s.push(x):n.push(x)}function p(g,v,S,T,M,y){const x=c(g,v,S,T,M,y);S.transmission>0?a.unshift(x):S.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||yC),a.length>1&&a.sort(v||Mx),s.length>1&&s.sort(v||Mx)}function _(){for(let g=t,v=o.length;g<v;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:f,unshift:p,finish:_,sort:d}}function MC(){let o=new WeakMap;function t(a,s){const l=o.get(a);let c;return l===void 0?(c=new Ex,o.set(a,[c])):s>=l.length?(c=new Ex,l.push(c)):c=l[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function EC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new st,color:new Ee};break;case"SpotLight":n={position:new st,direction:new st,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new st,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new st,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":n={color:new Ee,position:new st,halfWidth:new st,halfHeight:new st};break}return o[t.id]=n,n}}}function TC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let bC=0;function AC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function RC(o){const t=new EC,n=TC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new st);const s=new st,l=new sn,c=new sn;function f(d){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let S=0,T=0,M=0,y=0,x=0,N=0,L=0,C=0,U=0,z=0,P=0;d.sort(AC);for(let b=0,D=d.length;b<D;b++){const G=d[b],Y=G.color,et=G.intensity,ct=G.distance,at=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=Y.r*et,g+=Y.g*et,v+=Y.b*et;else if(G.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(G.sh.coefficients[I],et);P++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const X=G.shadow,q=n.get(G);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,a.directionalShadow[S]=q,a.directionalShadowMap[S]=at,a.directionalShadowMatrix[S]=G.shadow.matrix,N++}a.directional[S]=I,S++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Y).multiplyScalar(et),I.distance=ct,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,a.spot[M]=I;const X=G.shadow;if(G.map&&(a.spotLightMap[U]=G.map,U++,X.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[M]=X.matrix,G.castShadow){const q=n.get(G);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,a.spotShadow[M]=q,a.spotShadowMap[M]=at,C++}M++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Y).multiplyScalar(et),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=I,y++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const X=G.shadow,q=n.get(G);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,a.pointShadow[T]=q,a.pointShadowMap[T]=at,a.pointShadowMatrix[T]=G.shadow.matrix,L++}a.point[T]=I,T++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(et),I.groundColor.copy(G.groundColor).multiplyScalar(et),a.hemi[x]=I,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==S||F.pointLength!==T||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==N||F.numPointShadows!==L||F.numSpotShadows!==C||F.numSpotMaps!==U||F.numLightProbes!==P)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=y,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=C+U-z,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=P,F.directionalLength=S,F.pointLength=T,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=N,F.numPointShadows=L,F.numSpotShadows=C,F.numSpotMaps=U,F.numLightProbes=P,a.version=bC++)}function p(d,_){let g=0,v=0,S=0,T=0,M=0;const y=_.matrixWorldInverse;for(let x=0,N=d.length;x<N;x++){const L=d[x];if(L.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),g++}else if(L.isSpotLight){const C=a.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=a.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const C=a.hemi[M];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:p,state:a}}function Tx(o){const t=new RC(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function CC(o){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new Tx(o),t.set(s,[f])):l>=c.length?(f=new Tx(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const wC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
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
}`;function UC(o,t,n){let a=new Tm;const s=new Ce,l=new Ce,c=new an,f=new $T({depthPacking:fT}),p=new t1,d={},_=n.maxTextureSize,g={[br]:ei,[ei]:br,[Pa]:Pa},v=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:wC,fragmentShader:DC}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new ca;T.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Oi(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vx;let x=this.type;this.render=function(z,P,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const b=o.getRenderTarget(),D=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(yr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const et=x!==La&&this.type===La,ct=x===La&&this.type!==La;for(let at=0,I=z.length;at<I;at++){const X=z[at],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const xt=q.getFrameExtents();if(s.multiply(xt),l.copy(q.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/xt.x),s.x=l.x*xt.x,q.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/xt.y),s.y=l.y*xt.y,q.mapSize.y=l.y)),q.map===null||et===!0||ct===!0){const J=this.type!==La?{minFilter:ji,magFilter:ji}:{};q.map!==null&&q.map.dispose(),q.map=new ps(s.x,s.y,J),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const O=q.getViewportCount();for(let J=0;J<O;J++){const mt=q.getViewport(J);c.set(l.x*mt.x,l.y*mt.y,l.x*mt.z,l.y*mt.w),Y.viewport(c),q.updateMatrices(X,J),a=q.getFrustum(),C(P,F,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===La&&N(q,F),q.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(b,D,G)};function N(z,P){const F=t.update(M);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ps(s.x,s.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,F,v,M,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,F,S,M,null)}function L(z,P,F,b){let D=null;const G=F.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)D=G;else if(D=F.isPointLight===!0?p:f,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=D.uuid,et=P.uuid;let ct=d[Y];ct===void 0&&(ct={},d[Y]=ct);let at=ct[et];at===void 0&&(at=D.clone(),ct[et]=at,P.addEventListener("dispose",U)),D=at}if(D.visible=P.visible,D.wireframe=P.wireframe,b===La?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,F.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const Y=o.properties.get(D);Y.light=F}return D}function C(z,P,F,b,D){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===La)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,z.matrixWorld);const et=t.update(z),ct=z.material;if(Array.isArray(ct)){const at=et.groups;for(let I=0,X=at.length;I<X;I++){const q=at[I],xt=ct[q.materialIndex];if(xt&&xt.visible){const O=L(z,xt,b,D);z.onBeforeShadow(o,z,P,F,et,O,q),o.renderBufferDirect(F,null,et,O,z,q),z.onAfterShadow(o,z,P,F,et,O,q)}}}else if(ct.visible){const at=L(z,ct,b,D);z.onBeforeShadow(o,z,P,F,et,at,null),o.renderBufferDirect(F,null,et,at,z,null),z.onAfterShadow(o,z,P,F,et,at,null)}}const Y=z.children;for(let et=0,ct=Y.length;et<ct;et++)C(Y[et],P,F,b,D)}function U(z){z.target.removeEventListener("dispose",U);for(const F in d){const b=d[F],D=z.target.uuid;D in b&&(b[D].dispose(),delete b[D])}}}const LC={[hp]:dp,[pp]:gp,[mp]:vp,[Mo]:_p,[dp]:hp,[gp]:pp,[vp]:mp,[_p]:Mo};function NC(o,t){function n(){let W=!1;const At=new an;let wt=null;const Bt=new an(0,0,0,0);return{setMask:function(Tt){wt!==Tt&&!W&&(o.colorMask(Tt,Tt,Tt,Tt),wt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,vt,Ht,ae,we){we===!0&&(Tt*=ae,vt*=ae,Ht*=ae),At.set(Tt,vt,Ht,ae),Bt.equals(At)===!1&&(o.clearColor(Tt,vt,Ht,ae),Bt.copy(At))},reset:function(){W=!1,wt=null,Bt.set(-1,0,0,0)}}}function a(){let W=!1,At=!1,wt=null,Bt=null,Tt=null;return{setReversed:function(vt){if(At!==vt){const Ht=t.get("EXT_clip_control");vt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),At=vt;const ae=Tt;Tt=null,this.setClear(ae)}},getReversed:function(){return At},setTest:function(vt){vt?dt(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(vt){wt!==vt&&!W&&(o.depthMask(vt),wt=vt)},setFunc:function(vt){if(At&&(vt=LC[vt]),Bt!==vt){switch(vt){case hp:o.depthFunc(o.NEVER);break;case dp:o.depthFunc(o.ALWAYS);break;case pp:o.depthFunc(o.LESS);break;case Mo:o.depthFunc(o.LEQUAL);break;case mp:o.depthFunc(o.EQUAL);break;case _p:o.depthFunc(o.GEQUAL);break;case gp:o.depthFunc(o.GREATER);break;case vp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Tt!==vt&&(At&&(vt=1-vt),o.clearDepth(vt),Tt=vt)},reset:function(){W=!1,wt=null,Bt=null,Tt=null,At=!1}}}function s(){let W=!1,At=null,wt=null,Bt=null,Tt=null,vt=null,Ht=null,ae=null,we=null;return{setTest:function(Me){W||(Me?dt(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(Me){At!==Me&&!W&&(o.stencilMask(Me),At=Me)},setFunc:function(Me,Ii,gn){(wt!==Me||Bt!==Ii||Tt!==gn)&&(o.stencilFunc(Me,Ii,gn),wt=Me,Bt=Ii,Tt=gn)},setOp:function(Me,Ii,gn){(vt!==Me||Ht!==Ii||ae!==gn)&&(o.stencilOp(Me,Ii,gn),vt=Me,Ht=Ii,ae=gn)},setLocked:function(Me){W=Me},setClear:function(Me){we!==Me&&(o.clearStencil(Me),we=Me)},reset:function(){W=!1,At=null,wt=null,Bt=null,Tt=null,vt=null,Ht=null,ae=null,we=null}}}const l=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,S=[],T=null,M=!1,y=null,x=null,N=null,L=null,C=null,U=null,z=null,P=new Ee(0,0,0),F=0,b=!1,D=null,G=null,Y=null,et=null,ct=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=X>=2);let xt=null,O={};const J=o.getParameter(o.SCISSOR_BOX),mt=o.getParameter(o.VIEWPORT),yt=new an().fromArray(J),Rt=new an().fromArray(mt);function Mt(W,At,wt,Bt){const Tt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<wt;Ht++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(At+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return vt}const K={};K[o.TEXTURE_2D]=Mt(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Mt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Mt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Mt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),dt(o.DEPTH_TEST),c.setFunc(Mo),ne(!1),Pt(Av),dt(o.CULL_FACE),Le(yr);function dt(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function St(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Zt(W,At){return g[W]!==At?(o.bindFramebuffer(W,At),g[W]=At,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=At),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Wt(W,At){let wt=S,Bt=!1;if(W){wt=v.get(At),wt===void 0&&(wt=[],v.set(At,wt));const Tt=W.textures;if(wt.length!==Tt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ht=Tt.length;vt<Ht;vt++)wt[vt]=o.COLOR_ATTACHMENT0+vt;wt.length=Tt.length,Bt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(wt)}function de(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const cn={[is]:o.FUNC_ADD,[BE]:o.FUNC_SUBTRACT,[IE]:o.FUNC_REVERSE_SUBTRACT};cn[FE]=o.MIN,cn[HE]=o.MAX;const V={[GE]:o.ZERO,[VE]:o.ONE,[kE]:o.SRC_COLOR,[cp]:o.SRC_ALPHA,[ZE]:o.SRC_ALPHA_SATURATE,[YE]:o.DST_COLOR,[WE]:o.DST_ALPHA,[XE]:o.ONE_MINUS_SRC_COLOR,[fp]:o.ONE_MINUS_SRC_ALPHA,[jE]:o.ONE_MINUS_DST_COLOR,[qE]:o.ONE_MINUS_DST_ALPHA,[KE]:o.CONSTANT_COLOR,[QE]:o.ONE_MINUS_CONSTANT_COLOR,[JE]:o.CONSTANT_ALPHA,[$E]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(W,At,wt,Bt,Tt,vt,Ht,ae,we,Me){if(W===yr){M===!0&&(St(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),W!==zE){if(W!==y||Me!==b){if((x!==is||C!==is)&&(o.blendEquation(o.FUNC_ADD),x=is,C=is),Me)switch(W){case go:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jc:o.blendFunc(o.ONE,o.ONE);break;case Rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Cv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case go:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Jc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Rv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}N=null,L=null,U=null,z=null,P.set(0,0,0),F=0,y=W,b=Me}return}Tt=Tt||At,vt=vt||wt,Ht=Ht||Bt,(At!==x||Tt!==C)&&(o.blendEquationSeparate(cn[At],cn[Tt]),x=At,C=Tt),(wt!==N||Bt!==L||vt!==U||Ht!==z)&&(o.blendFuncSeparate(V[wt],V[Bt],V[vt],V[Ht]),N=wt,L=Bt,U=vt,z=Ht),(ae.equals(P)===!1||we!==F)&&(o.blendColor(ae.r,ae.g,ae.b,we),P.copy(ae),F=we),y=W,b=!1}function re(W,At){W.side===Pa?St(o.CULL_FACE):dt(o.CULL_FACE);let wt=W.side===ei;At&&(wt=!wt),ne(wt),W.blending===go&&W.transparent===!1?Le(yr):Le(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Bt=W.stencilWrite;f.setTest(Bt),Bt&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Gt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function Pt(W){W!==NE?(dt(o.CULL_FACE),W!==G&&(W===Av?o.cullFace(o.BACK):W===OE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),G=W}function Ve(W){W!==Y&&(I&&o.lineWidth(W),Y=W)}function Gt(W,At,wt){W?(dt(o.POLYGON_OFFSET_FILL),(et!==At||ct!==wt)&&(o.polygonOffset(At,wt),et=At,ct=wt)):St(o.POLYGON_OFFSET_FILL)}function se(W){W?dt(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function je(W){W===void 0&&(W=o.TEXTURE0+at-1),xt!==W&&(o.activeTexture(W),xt=W)}function Ze(W,At,wt){wt===void 0&&(xt===null?wt=o.TEXTURE0+at-1:wt=xt);let Bt=O[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},O[wt]=Bt),(Bt.type!==W||Bt.texture!==At)&&(xt!==wt&&(o.activeTexture(wt),xt=wt),o.bindTexture(W,At||K[W]),Bt.type=W,Bt.texture=At)}function B(){const W=O[xt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function kt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){yt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),yt.copy(W))}function jt(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function Vt(W,At){let wt=d.get(At);wt===void 0&&(wt=new WeakMap,d.set(At,wt));let Bt=wt.get(W);Bt===void 0&&(Bt=o.getUniformBlockIndex(At,W.name),wt.set(W,Bt))}function Dt(W,At){const Bt=d.get(At).get(W);p.get(At)!==Bt&&(o.uniformBlockBinding(At,Bt,W.__bindingPointIndex),p.set(At,Bt))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,O={},g={},v=new WeakMap,S=[],T=null,M=!1,y=null,x=null,N=null,L=null,C=null,U=null,z=null,P=new Ee(0,0,0),F=0,b=!1,D=null,G=null,Y=null,et=null,ct=null,yt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:dt,disable:St,bindFramebuffer:Zt,drawBuffers:Wt,useProgram:de,setBlending:Le,setMaterial:re,setFlipSided:ne,setCullFace:Pt,setLineWidth:Ve,setPolygonOffset:Gt,setScissorTest:se,activeTexture:je,bindTexture:Ze,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:nt,texImage2D:qt,texImage3D:Et,updateUBOMapping:Vt,uniformBlockBinding:Dt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:ft,texSubImage3D:_t,compressedTexSubImage2D:ut,compressedTexSubImage3D:zt,scissor:Lt,viewport:jt,reset:oe}}function OC(o,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ce,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(B,A){return S?new OffscreenCanvas(B,A):ef("canvas")}function M(B,A,nt){let ft=1;const _t=Ze(B);if((_t.width>nt||_t.height>nt)&&(ft=nt/Math.max(_t.width,_t.height)),ft<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ut=Math.floor(ft*_t.width),zt=Math.floor(ft*_t.height);g===void 0&&(g=T(ut,zt));const Ct=A?T(ut,zt):g;return Ct.width=ut,Ct.height=zt,Ct.getContext("2d").drawImage(B,0,0,ut,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ut+"x"+zt+")."),Ct}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),B;return B}function y(B){return B.generateMipmaps}function x(B){o.generateMipmap(B)}function N(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(B,A,nt,ft,_t=!1){if(B!==null){if(o[B]!==void 0)return o[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ut=A;if(A===o.RED&&(nt===o.FLOAT&&(ut=o.R32F),nt===o.HALF_FLOAT&&(ut=o.R16F),nt===o.UNSIGNED_BYTE&&(ut=o.R8)),A===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.R8UI),nt===o.UNSIGNED_SHORT&&(ut=o.R16UI),nt===o.UNSIGNED_INT&&(ut=o.R32UI),nt===o.BYTE&&(ut=o.R8I),nt===o.SHORT&&(ut=o.R16I),nt===o.INT&&(ut=o.R32I)),A===o.RG&&(nt===o.FLOAT&&(ut=o.RG32F),nt===o.HALF_FLOAT&&(ut=o.RG16F),nt===o.UNSIGNED_BYTE&&(ut=o.RG8)),A===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ut=o.RG16UI),nt===o.UNSIGNED_INT&&(ut=o.RG32UI),nt===o.BYTE&&(ut=o.RG8I),nt===o.SHORT&&(ut=o.RG16I),nt===o.INT&&(ut=o.RG32I)),A===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),nt===o.UNSIGNED_INT&&(ut=o.RGB32UI),nt===o.BYTE&&(ut=o.RGB8I),nt===o.SHORT&&(ut=o.RGB16I),nt===o.INT&&(ut=o.RGB32I)),A===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ut=o.RGBA32UI),nt===o.BYTE&&(ut=o.RGBA8I),nt===o.SHORT&&(ut=o.RGBA16I),nt===o.INT&&(ut=o.RGBA32I)),A===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),A===o.RGBA){const zt=_t?$c:Ae.getTransfer(ft);nt===o.FLOAT&&(ut=o.RGBA32F),nt===o.HALF_FLOAT&&(ut=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ut=zt===Be?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function C(B,A){let nt;return B?A===null||A===ds||A===jl?nt=o.DEPTH24_STENCIL8:A===za?nt=o.DEPTH32F_STENCIL8:A===Yl&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ds||A===jl?nt=o.DEPTH_COMPONENT24:A===za?nt=o.DEPTH_COMPONENT32F:A===Yl&&(nt=o.DEPTH_COMPONENT16),nt}function U(B,A){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==ji&&B.minFilter!==ra?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function z(B){const A=B.target;A.removeEventListener("dispose",z),F(A),A.isVideoTexture&&_.delete(A)}function P(B){const A=B.target;A.removeEventListener("dispose",P),D(A)}function F(B){const A=a.get(B);if(A.__webglInit===void 0)return;const nt=B.source,ft=v.get(nt);if(ft){const _t=ft[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&b(B),Object.keys(ft).length===0&&v.delete(nt)}a.remove(B)}function b(B){const A=a.get(B);o.deleteTexture(A.__webglTexture);const nt=B.source,ft=v.get(nt);delete ft[A.__cacheKey],c.memory.textures--}function D(B){const A=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(A.__webglFramebuffer[ft]))for(let _t=0;_t<A.__webglFramebuffer[ft].length;_t++)o.deleteFramebuffer(A.__webglFramebuffer[ft][_t]);else o.deleteFramebuffer(A.__webglFramebuffer[ft]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[ft])}else{if(Array.isArray(A.__webglFramebuffer))for(let ft=0;ft<A.__webglFramebuffer.length;ft++)o.deleteFramebuffer(A.__webglFramebuffer[ft]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ft=0;ft<A.__webglColorRenderbuffer.length;ft++)A.__webglColorRenderbuffer[ft]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[ft]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=B.textures;for(let ft=0,_t=nt.length;ft<_t;ft++){const ut=a.get(nt[ft]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),c.memory.textures--),a.remove(nt[ft])}a.remove(B)}let G=0;function Y(){G=0}function et(){const B=G;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),G+=1,B}function ct(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function at(B,A){const nt=a.get(B);if(B.isVideoTexture&&se(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&nt.__version!==B.version){const ft=B.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(nt,B,A);return}}else B.isExternalTexture&&(nt.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+A)}function I(B,A){const nt=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){K(nt,B,A);return}n.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+A)}function X(B,A){const nt=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){K(nt,B,A);return}n.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+A)}function q(B,A){const nt=a.get(B);if(B.version>0&&nt.__version!==B.version){dt(nt,B,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+A)}const xt={[yp]:o.REPEAT,[rs]:o.CLAMP_TO_EDGE,[Mp]:o.MIRRORED_REPEAT},O={[ji]:o.NEAREST,[uT]:o.NEAREST_MIPMAP_NEAREST,[xc]:o.NEAREST_MIPMAP_LINEAR,[ra]:o.LINEAR,[Td]:o.LINEAR_MIPMAP_NEAREST,[ss]:o.LINEAR_MIPMAP_LINEAR},J={[dT]:o.NEVER,[xT]:o.ALWAYS,[pT]:o.LESS,[tS]:o.LEQUAL,[mT]:o.EQUAL,[vT]:o.GEQUAL,[_T]:o.GREATER,[gT]:o.NOTEQUAL};function mt(B,A){if(A.type===za&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ra||A.magFilter===Td||A.magFilter===xc||A.magFilter===ss||A.minFilter===ra||A.minFilter===Td||A.minFilter===xc||A.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,xt[A.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,xt[A.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,xt[A.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,O[A.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,O[A.minFilter]),A.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ji||A.minFilter!==xc&&A.minFilter!==ss||A.type===za&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function yt(B,A){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",z));const ft=A.source;let _t=v.get(ft);_t===void 0&&(_t={},v.set(ft,_t));const ut=ct(A);if(ut!==B.__cacheKey){_t[ut]===void 0&&(_t[ut]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),_t[ut].usedTimes++;const zt=_t[B.__cacheKey];zt!==void 0&&(_t[B.__cacheKey].usedTimes--,zt.usedTimes===0&&b(A)),B.__cacheKey=ut,B.__webglTexture=_t[ut].texture}return nt}function Rt(B,A,nt){return Math.floor(Math.floor(B/nt)/A)}function Mt(B,A,nt,ft){const ut=B.updateRanges;if(ut.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,nt,ft,A.data);else{ut.sort((Et,Lt)=>Et.start-Lt.start);let zt=0;for(let Et=1;Et<ut.length;Et++){const Lt=ut[zt],jt=ut[Et],Vt=Lt.start+Lt.count,Dt=Rt(jt.start,A.width,4),oe=Rt(Lt.start,A.width,4);jt.start<=Vt+1&&Dt===oe&&Rt(jt.start+jt.count-1,A.width,4)===Dt?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++zt,ut[zt]=jt)}ut.length=zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Et=0,Lt=ut.length;Et<Lt;Et++){const jt=ut[Et],Vt=Math.floor(jt.start/4),Dt=Math.ceil(jt.count/4),oe=Vt%A.width,W=Math.floor(Vt/A.width),At=Dt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),n.texSubImage2D(o.TEXTURE_2D,0,oe,W,At,wt,nt,ft,A.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function K(B,A,nt){let ft=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ft=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ft=o.TEXTURE_3D);const _t=yt(B,A),ut=A.source;n.bindTexture(ft,B.__webglTexture,o.TEXTURE0+nt);const zt=a.get(ut);if(ut.version!==zt.__version||_t===!0){n.activeTexture(o.TEXTURE0+nt);const Ct=Ae.getPrimaries(Ae.workingColorSpace),kt=A.colorSpace===gr?null:Ae.getPrimaries(A.colorSpace),qt=A.colorSpace===gr||Ct===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Et=M(A.image,!1,s.maxTextureSize);Et=je(A,Et);const Lt=l.convert(A.format,A.colorSpace),jt=l.convert(A.type);let Vt=L(A.internalFormat,Lt,jt,A.colorSpace,A.isVideoTexture);mt(ft,A);let Dt;const oe=A.mipmaps,W=A.isVideoTexture!==!0,At=zt.__version===void 0||_t===!0,wt=ut.dataReady,Bt=U(A,Et);if(A.isDepthTexture)Vt=C(A.format===Kl,A.type),At&&(W?n.texStorage2D(o.TEXTURE_2D,1,Vt,Et.width,Et.height):n.texImage2D(o.TEXTURE_2D,0,Vt,Et.width,Et.height,0,Lt,jt,null));else if(A.isDataTexture)if(oe.length>0){W&&At&&n.texStorage2D(o.TEXTURE_2D,Bt,Vt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Dt=oe[Tt],W?wt&&n.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):n.texImage2D(o.TEXTURE_2D,Tt,Vt,Dt.width,Dt.height,0,Lt,jt,Dt.data);A.generateMipmaps=!1}else W?(At&&n.texStorage2D(o.TEXTURE_2D,Bt,Vt,Et.width,Et.height),wt&&Mt(A,Et,Lt,jt)):n.texImage2D(o.TEXTURE_2D,0,Vt,Et.width,Et.height,0,Lt,jt,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,oe[0].width,oe[0].height,Et.depth);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)if(Dt=oe[Tt],A.format!==Yi)if(Lt!==null)if(W){if(wt)if(A.layerUpdates.size>0){const Ht=tx(Dt.width,Dt.height,A.format,A.type);for(const ae of A.layerUpdates){const we=Dt.data.subarray(ae*Ht/Dt.data.BYTES_PER_ELEMENT,(ae+1)*Ht/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ae,Dt.width,Dt.height,1,Lt,we)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,Dt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Vt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?wt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Dt.width,Dt.height,Et.depth,Lt,jt,Dt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Vt,Dt.width,Dt.height,Et.depth,0,Lt,jt,Dt.data)}else{W&&At&&n.texStorage2D(o.TEXTURE_2D,Bt,Vt,oe[0].width,oe[0].height);for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Dt=oe[Tt],A.format!==Yi?Lt!==null?W?wt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,Dt.data):n.compressedTexImage2D(o.TEXTURE_2D,Tt,Vt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?wt&&n.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Dt.width,Dt.height,Lt,jt,Dt.data):n.texImage2D(o.TEXTURE_2D,Tt,Vt,Dt.width,Dt.height,0,Lt,jt,Dt.data)}else if(A.isDataArrayTexture)if(W){if(At&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,Et.width,Et.height,Et.depth),wt)if(A.layerUpdates.size>0){const Tt=tx(Et.width,Et.height,A.format,A.type);for(const vt of A.layerUpdates){const Ht=Et.data.subarray(vt*Tt/Et.data.BYTES_PER_ELEMENT,(vt+1)*Tt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,Lt,jt,Ht)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Lt,jt,Et.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Et.width,Et.height,Et.depth,0,Lt,jt,Et.data);else if(A.isData3DTexture)W?(At&&n.texStorage3D(o.TEXTURE_3D,Bt,Vt,Et.width,Et.height,Et.depth),wt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Lt,jt,Et.data)):n.texImage3D(o.TEXTURE_3D,0,Vt,Et.width,Et.height,Et.depth,0,Lt,jt,Et.data);else if(A.isFramebufferTexture){if(At)if(W)n.texStorage2D(o.TEXTURE_2D,Bt,Vt,Et.width,Et.height);else{let Tt=Et.width,vt=Et.height;for(let Ht=0;Ht<Bt;Ht++)n.texImage2D(o.TEXTURE_2D,Ht,Vt,Tt,vt,0,Lt,jt,null),Tt>>=1,vt>>=1}}else if(oe.length>0){if(W&&At){const Tt=Ze(oe[0]);n.texStorage2D(o.TEXTURE_2D,Bt,Vt,Tt.width,Tt.height)}for(let Tt=0,vt=oe.length;Tt<vt;Tt++)Dt=oe[Tt],W?wt&&n.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt,jt,Dt):n.texImage2D(o.TEXTURE_2D,Tt,Vt,Lt,jt,Dt);A.generateMipmaps=!1}else if(W){if(At){const Tt=Ze(Et);n.texStorage2D(o.TEXTURE_2D,Bt,Vt,Tt.width,Tt.height)}wt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Lt,jt,Et)}else n.texImage2D(o.TEXTURE_2D,0,Vt,Lt,jt,Et);y(A)&&x(ft),zt.__version=ut.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function dt(B,A,nt){if(A.image.length!==6)return;const ft=yt(B,A),_t=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+nt);const ut=a.get(_t);if(_t.version!==ut.__version||ft===!0){n.activeTexture(o.TEXTURE0+nt);const zt=Ae.getPrimaries(Ae.workingColorSpace),Ct=A.colorSpace===gr?null:Ae.getPrimaries(A.colorSpace),kt=A.colorSpace===gr||zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,Lt=[];for(let vt=0;vt<6;vt++)!qt&&!Et?Lt[vt]=M(A.image[vt],!0,s.maxCubemapSize):Lt[vt]=Et?A.image[vt].image:A.image[vt],Lt[vt]=je(A,Lt[vt]);const jt=Lt[0],Vt=l.convert(A.format,A.colorSpace),Dt=l.convert(A.type),oe=L(A.internalFormat,Vt,Dt,A.colorSpace),W=A.isVideoTexture!==!0,At=ut.__version===void 0||ft===!0,wt=_t.dataReady;let Bt=U(A,jt);mt(o.TEXTURE_CUBE_MAP,A);let Tt;if(qt){W&&At&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,jt.width,jt.height);for(let vt=0;vt<6;vt++){Tt=Lt[vt].mipmaps;for(let Ht=0;Ht<Tt.length;Ht++){const ae=Tt[Ht];A.format!==Yi?Vt!==null?W?wt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,ae.width,ae.height,Vt,ae.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,0,0,ae.width,ae.height,Vt,Dt,ae.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht,oe,ae.width,ae.height,0,Vt,Dt,ae.data)}}}else{if(Tt=A.mipmaps,W&&At){Tt.length>0&&Bt++;const vt=Ze(Lt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){W?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Lt[vt].width,Lt[vt].height,Vt,Dt,Lt[vt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Lt[vt].width,Lt[vt].height,0,Vt,Dt,Lt[vt].data);for(let Ht=0;Ht<Tt.length;Ht++){const we=Tt[Ht].image[vt].image;W?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,we.width,we.height,Vt,Dt,we.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,we.width,we.height,0,Vt,Dt,we.data)}}else{W?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Vt,Dt,Lt[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Vt,Dt,Lt[vt]);for(let Ht=0;Ht<Tt.length;Ht++){const ae=Tt[Ht];W?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,0,0,Vt,Dt,ae.image[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ht+1,oe,Vt,Dt,ae.image[vt])}}}y(A)&&x(o.TEXTURE_CUBE_MAP),ut.__version=_t.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function St(B,A,nt,ft,_t,ut){const zt=l.convert(nt.format,nt.colorSpace),Ct=l.convert(nt.type),kt=L(nt.internalFormat,zt,Ct,nt.colorSpace),qt=a.get(A),Et=a.get(nt);if(Et.__renderTarget=A,!qt.__hasExternalTextures){const Lt=Math.max(1,A.width>>ut),jt=Math.max(1,A.height>>ut);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?n.texImage3D(_t,ut,kt,Lt,jt,A.depth,0,zt,Ct,null):n.texImage2D(_t,ut,kt,Lt,jt,0,zt,Ct,null)}n.bindFramebuffer(o.FRAMEBUFFER,B),Gt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ft,_t,Et.__webglTexture,0,Ve(A)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ft,_t,Et.__webglTexture,ut),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(B,A,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,B),A.depthBuffer){const ft=A.depthTexture,_t=ft&&ft.isDepthTexture?ft.type:null,ut=C(A.stencilBuffer,_t),zt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=Ve(A);Gt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ut,A.width,A.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ut,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ut,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,B)}else{const ft=A.textures;for(let _t=0;_t<ft.length;_t++){const ut=ft[_t],zt=l.convert(ut.format,ut.colorSpace),Ct=l.convert(ut.type),kt=L(ut.internalFormat,zt,Ct,ut.colorSpace),qt=Ve(A);nt&&Gt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,A.width,A.height):Gt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,kt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=a.get(A.depthTexture);ft.__renderTarget=A,(!ft.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),at(A.depthTexture,0);const _t=ft.__webglTexture,ut=Ve(A);if(A.depthTexture.format===Zl)Gt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,_t,0);else if(A.depthTexture.format===Kl)Gt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function de(B){const A=a.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const ft=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ft){const _t=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ft.removeEventListener("dispose",_t)};ft.addEventListener("dispose",_t),A.__depthDisposeCallback=_t}A.__boundDepthTexture=ft}if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=B.texture.mipmaps;ft&&ft.length>0?Wt(A.__webglFramebuffer[0],B):Wt(A.__webglFramebuffer,B)}else if(nt){A.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[ft]),A.__webglDepthbuffer[ft]===void 0)A.__webglDepthbuffer[ft]=o.createRenderbuffer(),Zt(A.__webglDepthbuffer[ft],B,!1);else{const _t=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer[ft];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ut)}}else{const ft=B.texture.mipmaps;if(ft&&ft.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Zt(A.__webglDepthbuffer,B,!1);else{const _t=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,ut)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function cn(B,A,nt){const ft=a.get(B);A!==void 0&&St(ft.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&de(B)}function V(B){const A=B.texture,nt=a.get(B),ft=a.get(A);B.addEventListener("dispose",P);const _t=B.textures,ut=B.isWebGLCubeRenderTarget===!0,zt=_t.length>1;if(zt||(ft.__webglTexture===void 0&&(ft.__webglTexture=o.createTexture()),ft.__version=A.version,c.memory.textures++),ut){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let kt=0;kt<A.mipmaps.length;kt++)nt.__webglFramebuffer[Ct][kt]=o.createFramebuffer()}else nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<A.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Ct=0,kt=_t.length;Ct<kt;Ct++){const qt=a.get(_t[Ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),c.memory.textures++)}if(B.samples>0&&Gt(B)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<_t.length;Ct++){const kt=_t[Ct];nt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);const qt=l.convert(kt.format,kt.colorSpace),Et=l.convert(kt.type),Lt=L(kt.internalFormat,qt,Et,kt.colorSpace,B.isXRRenderTarget===!0),jt=Ve(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Lt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Zt(nt.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){n.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),mt(o.TEXTURE_CUBE_MAP,A);for(let Ct=0;Ct<6;Ct++)if(A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)St(nt.__webglFramebuffer[Ct][kt],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else St(nt.__webglFramebuffer[Ct],B,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(A)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(zt){for(let Ct=0,kt=_t.length;Ct<kt;Ct++){const qt=_t[Ct],Et=a.get(qt);let Lt=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Lt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Et.__webglTexture),mt(Lt,qt),St(nt.__webglFramebuffer,B,qt,o.COLOR_ATTACHMENT0+Ct,Lt,0),y(qt)&&x(Lt)}n.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ct=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ct,ft.__webglTexture),mt(Ct,A),A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)St(nt.__webglFramebuffer[kt],B,A,o.COLOR_ATTACHMENT0,Ct,kt);else St(nt.__webglFramebuffer,B,A,o.COLOR_ATTACHMENT0,Ct,0);y(A)&&x(Ct),n.unbindTexture()}B.depthBuffer&&de(B)}function Le(B){const A=B.textures;for(let nt=0,ft=A.length;nt<ft;nt++){const _t=A[nt];if(y(_t)){const ut=N(B),zt=a.get(_t).__webglTexture;n.bindTexture(ut,zt),x(ut),n.unbindTexture()}}}const re=[],ne=[];function Pt(B){if(B.samples>0){if(Gt(B)===!1){const A=B.textures,nt=B.width,ft=B.height;let _t=o.COLOR_BUFFER_BIT;const ut=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=a.get(B),Ct=A.length>1;if(Ct)for(let qt=0;qt<A.length;qt++)n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);const kt=B.texture.mipmaps;kt&&kt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<A.length;qt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Et=a.get(A[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,nt,ft,0,0,nt,ft,_t,o.NEAREST),p===!0&&(re.length=0,ne.length=0,re.push(o.COLOR_ATTACHMENT0+qt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(re.push(ut),ne.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let qt=0;qt<A.length;qt++){n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);const Et=a.get(A[qt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Et,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const A=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Ve(B){return Math.min(s.maxSamples,B.samples)}function Gt(B){const A=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function se(B){const A=c.render.frame;_.get(B)!==A&&(_.set(B,A),B.update())}function je(B,A){const nt=B.colorSpace,ft=B.format,_t=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==bo&&nt!==gr&&(Ae.getTransfer(nt)===Be?(ft!==Yi||_t!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),A}function Ze(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=Y,this.setTexture2D=at,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=cn,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Gt}function PC(o,t){function n(a,s=gr){let l;const c=Ae.getTransfer(s);if(a===la)return o.UNSIGNED_BYTE;if(a===vm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===xm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Yx)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===jx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Wx)return o.BYTE;if(a===qx)return o.SHORT;if(a===Yl)return o.UNSIGNED_SHORT;if(a===gm)return o.INT;if(a===ds)return o.UNSIGNED_INT;if(a===za)return o.FLOAT;if(a===ru)return o.HALF_FLOAT;if(a===Zx)return o.ALPHA;if(a===Kx)return o.RGB;if(a===Yi)return o.RGBA;if(a===Zl)return o.DEPTH_COMPONENT;if(a===Kl)return o.DEPTH_STENCIL;if(a===Qx)return o.RED;if(a===Sm)return o.RED_INTEGER;if(a===Jx)return o.RG;if(a===ym)return o.RG_INTEGER;if(a===Mm)return o.RGBA_INTEGER;if(a===kc||a===Xc||a===Wc||a===qc)if(c===Be)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===kc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Xc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===kc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Xc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===qc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ep||a===Tp||a===bp||a===Ap)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ep)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Tp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===bp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ap)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Rp||a===Cp||a===wp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Rp||a===Cp)return c===Be?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===wp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Dp||a===Up||a===Lp||a===Np||a===Op||a===Pp||a===zp||a===Bp||a===Ip||a===Fp||a===Hp||a===Gp||a===Vp||a===kp)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Dp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Up)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Lp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Np)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Op)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Pp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Bp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ip)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Fp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Hp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Gp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Vp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===kp)return c===Be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xp||a===Wp||a===qp)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Xp)return c===Be?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Wp)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===qp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Yp||a===jp||a===Zp||a===Kp)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Yp)return l.COMPRESSED_RED_RGTC1_EXT;if(a===jp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Zp)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Kp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===jl?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const zC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BC=`
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

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new dS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ia({vertexShader:zC,fragmentShader:BC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new Ro(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends Oo{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,S=null,T=null;const M=typeof XRWebGLBinding<"u",y=new IC,x={},N=n.getContextAttributes();let L=null,C=null;const U=[],z=[],P=new Ce;let F=null;const b=new Ni;b.viewport=new an;const D=new Ni;D.viewport=new an;const G=[b,D],Y=new r1;let et=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=U[K];return dt===void 0&&(dt=new Yd,U[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=U[K];return dt===void 0&&(dt=new Yd,U[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=U[K];return dt===void 0&&(dt=new Yd,U[K]=dt),dt.getHandSpace()};function at(K){const dt=z.indexOf(K.inputSource);if(dt===-1)return;const St=U[dt];St!==void 0&&(St.update(K.inputSource,K.frame,d||c),St.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){s.removeEventListener("select",at),s.removeEventListener("selectstart",at),s.removeEventListener("selectend",at),s.removeEventListener("squeeze",at),s.removeEventListener("squeezestart",at),s.removeEventListener("squeezeend",at),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",X);for(let K=0;K<U.length;K++){const dt=z[K];dt!==null&&(z[K]=null,U[K].disconnect(dt))}et=null,ct=null,y.reset();for(const K in x)delete x[K];t.setRenderTarget(L),S=null,v=null,g=null,s=null,C=null,Mt.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(K){d=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",at),s.addEventListener("selectstart",at),s.addEventListener("selectend",at),s.addEventListener("squeeze",at),s.addEventListener("squeezestart",at),s.addEventListener("squeezeend",at),s.addEventListener("end",I),s.addEventListener("inputsourceschange",X),N.xrCompatible!==!0&&await n.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Zt=null,Wt=null;N.depth&&(Wt=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=N.stencil?Kl:Zl,Zt=N.stencil?jl:ds);const de={colorFormat:n.RGBA8,depthFormat:Wt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(de),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new ps(v.textureWidth,v.textureHeight,{format:Yi,type:la,depthTexture:new hS(v.textureWidth,v.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,n,St),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new ps(S.framebufferWidth,S.framebufferHeight,{format:Yi,type:la,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Mt.setContext(s),Mt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(K){for(let dt=0;dt<K.removed.length;dt++){const St=K.removed[dt],Zt=z.indexOf(St);Zt>=0&&(z[Zt]=null,U[Zt].disconnect(St))}for(let dt=0;dt<K.added.length;dt++){const St=K.added[dt];let Zt=z.indexOf(St);if(Zt===-1){for(let de=0;de<U.length;de++)if(de>=z.length){z.push(St),Zt=de;break}else if(z[de]===null){z[de]=St,Zt=de;break}if(Zt===-1)break}const Wt=U[Zt];Wt&&Wt.connect(St)}}const q=new st,xt=new st;function O(K,dt,St){q.setFromMatrixPosition(dt.matrixWorld),xt.setFromMatrixPosition(St.matrixWorld);const Zt=q.distanceTo(xt),Wt=dt.projectionMatrix.elements,de=St.projectionMatrix.elements,cn=Wt[14]/(Wt[10]-1),V=Wt[14]/(Wt[10]+1),Le=(Wt[9]+1)/Wt[5],re=(Wt[9]-1)/Wt[5],ne=(Wt[8]-1)/Wt[0],Pt=(de[8]+1)/de[0],Ve=cn*ne,Gt=cn*Pt,se=Zt/(-ne+Pt),je=se*-ne;if(dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(je),K.translateZ(se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Wt[10]===-1)K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ze=cn+se,B=V+se,A=Ve-je,nt=Gt+(Zt-je),ft=Le*V/B*Ze,_t=re*V/B*Ze;K.projectionMatrix.makePerspective(A,nt,ft,_t,Ze,B),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function J(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let dt=K.near,St=K.far;y.texture!==null&&(y.depthNear>0&&(dt=y.depthNear),y.depthFar>0&&(St=y.depthFar)),Y.near=D.near=b.near=dt,Y.far=D.far=b.far=St,(et!==Y.near||ct!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),et=Y.near,ct=Y.far),Y.layers.mask=K.layers.mask|6,b.layers.mask=Y.layers.mask&3,D.layers.mask=Y.layers.mask&5;const Zt=K.parent,Wt=Y.cameras;J(Y,Zt);for(let de=0;de<Wt.length;de++)J(Wt[de],Zt);Wt.length===2?O(Y,b,D):Y.projectionMatrix.copy(b.projectionMatrix),mt(K,Y,Zt)};function mt(K,dt,St){St===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(K){p=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(K){return x[K]};let yt=null;function Rt(K,dt){if(_=dt.getViewerPose(d||c),T=dt,_!==null){const St=_.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Zt=!1;St.length!==Y.cameras.length&&(Y.cameras.length=0,Zt=!0);for(let V=0;V<St.length;V++){const Le=St[V];let re=null;if(S!==null)re=S.getViewport(Le);else{const Pt=g.getViewSubImage(v,Le);re=Pt.viewport,V===0&&(t.setRenderTargetTextures(C,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(C))}let ne=G[V];ne===void 0&&(ne=new Ni,ne.layers.enable(V),ne.viewport=new an,G[V]=ne),ne.matrix.fromArray(Le.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Le.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(re.x,re.y,re.width,re.height),V===0&&(Y.matrix.copy(ne.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Zt===!0&&Y.cameras.push(ne)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const V=g.getDepthInformation(St[0]);V&&V.isValid&&V.texture&&y.init(V,s.renderState)}if(Wt&&Wt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let V=0;V<St.length;V++){const Le=St[V].camera;if(Le){let re=x[Le];re||(re=new dS,x[Le]=re);const ne=g.getCameraImage(Le);re.sourceTexture=ne}}}}for(let St=0;St<U.length;St++){const Zt=z[St],Wt=U[St];Zt!==null&&Wt!==void 0&&Wt.update(Zt,dt,d||c)}yt&&yt(K,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),T=null}const Mt=new _S;Mt.setAnimationLoop(Rt),this.setAnimationLoop=function(K){yt=K},this.dispose=function(){}}}const Qr=new ua,HC=new sn;function GC(o,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,lS(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,N,L,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),T(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,N,L):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ei&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ei&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=t.get(x),L=N.envMap,C=N.envMapRotation;L&&(y.envMap.value=L,Qr.copy(C),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),y.envMapRotation.value.setFromMatrix4(HC.makeRotationFromEuler(Qr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,N,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=L*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const N=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function VC(o,t,n,a){let s={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const C=L.program;a.uniformBlockBinding(N,C)}function d(N,L){let C=s[N.id];C===void 0&&(T(N),C=_(N),s[N.id]=C,N.addEventListener("dispose",y));const U=L.program;a.updateUBOMapping(N,U);const z=t.render.frame;l[N.id]!==z&&(v(N),l[N.id]=z)}function _(N){const L=g();N.__bindingPointIndex=L;const C=o.createBuffer(),U=N.__size,z=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,U,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function g(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=s[N.id],C=N.uniforms,U=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,P=C.length;z<P;z++){const F=Array.isArray(C[z])?C[z]:[C[z]];for(let b=0,D=F.length;b<D;b++){const G=F[b];if(S(G,z,b,U)===!0){const Y=G.__offset,et=Array.isArray(G.value)?G.value:[G.value];let ct=0;for(let at=0;at<et.length;at++){const I=et[at],X=M(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,Y+ct,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,ct),ct+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(N,L,C,U){const z=N.value,P=L+"_"+C;if(U[P]===void 0)return typeof z=="number"||typeof z=="boolean"?U[P]=z:U[P]=z.clone(),!0;{const F=U[P];if(typeof z=="number"||typeof z=="boolean"){if(F!==z)return U[P]=z,!0}else if(F.equals(z)===!1)return F.copy(z),!0}return!1}function T(N){const L=N.uniforms;let C=0;const U=16;for(let P=0,F=L.length;P<F;P++){const b=Array.isArray(L[P])?L[P]:[L[P]];for(let D=0,G=b.length;D<G;D++){const Y=b[D],et=Array.isArray(Y.value)?Y.value:[Y.value];for(let ct=0,at=et.length;ct<at;ct++){const I=et[ct],X=M(I),q=C%U,xt=q%X.boundary,O=q+xt;C+=xt,O!==0&&U-O<X.storage&&(C+=U-O),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=X.storage}}}const z=C%U;return z>0&&(C+=U-z),N.__size=C,N.__cache={},this}function M(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function x(){for(const N in s)o.deleteBuffer(s[N]);c=[],s={},l={}}return{bind:p,update:d,dispose:x}}class kC{constructor(t={}){const{canvas:n=yT(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),M=new Int32Array(4);let y=null,x=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=Li;let z=0,P=0,F=null,b=-1,D=null;const G=new an,Y=new an;let et=null;const ct=new Ee(0);let at=0,I=n.width,X=n.height,q=1,xt=null,O=null;const J=new an(0,0,I,X),mt=new an(0,0,I,X);let yt=!1;const Rt=new Tm;let Mt=!1,K=!1;const dt=new sn,St=new st,Zt=new an,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function cn(){return F===null?q:1}let V=a;function Le(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_m}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Bt,!1),n.addEventListener("webglcontextcreationerror",Tt,!1),V===null){const j="webgl2";if(V=Le(j,w),V===null)throw Le(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,ne,Pt,Ve,Gt,se,je,Ze,B,A,nt,ft,_t,ut,zt,Ct,kt,qt,Et,Lt,jt,Vt,Dt,oe;function W(){re=new $A(V),re.init(),Vt=new PC(V,re),ne=new qA(V,re,t,Vt),Pt=new NC(V,re),ne.reversedDepthBuffer&&v&&Pt.buffers.depth.setReversed(!0),Ve=new nR(V),Gt=new SC,se=new OC(V,re,Pt,Gt,ne,Vt,Ve),je=new jA(C),Ze=new JA(C),B=new l1(V),Dt=new XA(V,B),A=new tR(V,B,Ve,Dt),nt=new aR(V,A,B,Ve),Et=new iR(V,ne,se),Ct=new YA(Gt),ft=new xC(C,je,Ze,re,ne,Dt,Ct),_t=new GC(C,Gt),ut=new MC,zt=new CC(re),qt=new kA(C,je,Ze,Pt,nt,S,p),kt=new UC(C,nt,ne),oe=new VC(V,Ve,ne,Pt),Lt=new WA(V,re,Ve),jt=new eR(V,re,Ve),Ve.programs=ft.programs,C.capabilities=ne,C.extensions=re,C.properties=Gt,C.renderLists=ut,C.shadowMap=kt,C.state=Pt,C.info=Ve}W();const At=new FC(C,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(I,X,!1))},this.getSize=function(w){return w.set(I,X)},this.setSize=function(w,j,ot=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,X=j,n.width=Math.floor(w*q),n.height=Math.floor(j*q),ot===!0&&(n.style.width=w+"px",n.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(I*q,X*q).floor()},this.setDrawingBufferSize=function(w,j,ot){I=w,X=j,q=ot,n.width=Math.floor(w*ot),n.height=Math.floor(j*ot),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,j,ot,lt){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,j,ot,lt),Pt.viewport(G.copy(J).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,j,ot,lt){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,j,ot,lt),Pt.scissor(Y.copy(mt).multiplyScalar(q).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){Pt.setScissorTest(yt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){O=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ot=!0){let lt=0;if(w){let Q=!1;if(F!==null){const bt=F.texture.format;Q=bt===Mm||bt===ym||bt===Sm}if(Q){const bt=F.texture.type,Ut=bt===la||bt===ds||bt===Yl||bt===jl||bt===vm||bt===xm,It=qt.getClearColor(),Nt=qt.getClearAlpha(),Qt=It.r,te=It.g,Xt=It.b;Ut?(T[0]=Qt,T[1]=te,T[2]=Xt,T[3]=Nt,V.clearBufferuiv(V.COLOR,0,T)):(M[0]=Qt,M[1]=te,M[2]=Xt,M[3]=Nt,V.clearBufferiv(V.COLOR,0,M))}else lt|=V.COLOR_BUFFER_BIT}j&&(lt|=V.DEPTH_BUFFER_BIT),ot&&(lt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Bt,!1),n.removeEventListener("webglcontextcreationerror",Tt,!1),qt.dispose(),ut.dispose(),zt.dispose(),Gt.dispose(),je.dispose(),Ze.dispose(),nt.dispose(),Dt.dispose(),oe.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",gn),At.removeEventListener("sessionend",vn),$e.stop()};function wt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const w=Ve.autoReset,j=kt.enabled,ot=kt.autoUpdate,lt=kt.needsUpdate,Q=kt.type;W(),Ve.autoReset=w,kt.enabled=j,kt.autoUpdate=ot,kt.needsUpdate=lt,kt.type=Q}function Tt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vt(w){const j=w.target;j.removeEventListener("dispose",vt),Ht(j)}function Ht(w){ae(w),Gt.remove(w)}function ae(w){const j=Gt.get(w).programs;j!==void 0&&(j.forEach(function(ot){ft.releaseProgram(ot)}),w.isShaderMaterial&&ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ot,lt,Q,bt){j===null&&(j=Wt);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,It=Ga(w,j,ot,lt,Q);Pt.setMaterial(lt,Ut);let Nt=ot.index,Qt=1;if(lt.wireframe===!0){if(Nt=A.getWireframeAttribute(ot),Nt===void 0)return;Qt=2}const te=ot.drawRange,Xt=ot.attributes.position;let ce=te.start*Qt,Te=(te.start+te.count)*Qt;bt!==null&&(ce=Math.max(ce,bt.start*Qt),Te=Math.min(Te,(bt.start+bt.count)*Qt)),Nt!==null?(ce=Math.max(ce,0),Te=Math.min(Te,Nt.count)):Xt!=null&&(ce=Math.max(ce,0),Te=Math.min(Te,Xt.count));const We=Te-ce;if(We<0||We===1/0)return;Dt.setup(Q,lt,It,ot,Nt);let Ne,fe=Lt;if(Nt!==null&&(Ne=B.get(Nt),fe=jt,fe.setIndex(Ne)),Q.isMesh)lt.wireframe===!0?(Pt.setLineWidth(lt.wireframeLinewidth*cn()),fe.setMode(V.LINES)):fe.setMode(V.TRIANGLES);else if(Q.isLine){let Kt=lt.linewidth;Kt===void 0&&(Kt=1),Pt.setLineWidth(Kt*cn()),Q.isLineSegments?fe.setMode(V.LINES):Q.isLineLoop?fe.setMode(V.LINE_LOOP):fe.setMode(V.LINE_STRIP)}else Q.isPoints?fe.setMode(V.POINTS):Q.isSprite&&fe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ql("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))fe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Kt=Q._multiDrawStarts,Xe=Q._multiDrawCounts,_e=Q._multiDrawCount,Pn=Nt?B.get(Nt).bytesPerElement:1,Fi=Gt.get(lt).currentProgram.getUniforms();for(let kn=0;kn<_e;kn++)Fi.setValue(V,"_gl_DrawID",kn),fe.render(Kt[kn]/Pn,Xe[kn])}else if(Q.isInstancedMesh)fe.renderInstances(ce,We,Q.count);else if(ot.isInstancedBufferGeometry){const Kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Xe=Math.min(ot.instanceCount,Kt);fe.renderInstances(ce,We,Xe)}else fe.render(ce,We)};function we(w,j,ot){w.transparent===!0&&w.side===Pa&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,Ki(w,j,ot),w.side=br,w.needsUpdate=!0,Ki(w,j,ot),w.side=Pa):Ki(w,j,ot)}this.compile=function(w,j,ot=null){ot===null&&(ot=w),x=zt.get(ot),x.init(j),L.push(x),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),w!==ot&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const lt=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const bt=Q.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const It=bt[Ut];we(It,ot,Q),lt.add(It)}else we(bt,ot,Q),lt.add(bt)}),x=L.pop(),lt},this.compileAsync=function(w,j,ot=null){const lt=this.compile(w,j,ot);return new Promise(Q=>{function bt(){if(lt.forEach(function(Ut){Gt.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){Q(w);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Me=null;function Ii(w){Me&&Me(w)}function gn(){$e.stop()}function vn(){$e.start()}const $e=new _S;$e.setAnimationLoop(Ii),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(w){Me=w,At.setAnimationLoop(w),w===null?$e.stop():$e.start()},At.addEventListener("sessionstart",gn),At.addEventListener("sessionend",vn),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,j,F),x=zt.get(w,L.length),x.init(j),L.push(x),dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Rt.setFromProjectionMatrix(dt,sa,j.reversedDepth),K=this.localClippingEnabled,Mt=Ct.init(this.clippingPlanes,K),y=ut.get(w,N.length),y.init(),N.push(y),At.enabled===!0&&At.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Zi(bt,j,-1/0,C.sortObjects)}Zi(w,j,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(xt,O),de=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,de&&qt.addToRenderList(y,w),this.info.render.frame++,Mt===!0&&Ct.beginShadows();const ot=x.state.shadowsArray;kt.render(ot,w,j),Mt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Q=y.transmissive;if(x.setupLights(),j.isArrayCamera){const bt=j.cameras;if(Q.length>0)for(let Ut=0,It=bt.length;Ut<It;Ut++){const Nt=bt[Ut];cu(lt,Q,w,Nt)}de&&qt.render(w);for(let Ut=0,It=bt.length;Ut<It;Ut++){const Nt=bt[Ut];gs(y,w,Nt,Nt.viewport)}}else Q.length>0&&cu(lt,Q,w,j),de&&qt.render(w),gs(y,w,j);F!==null&&P===0&&(se.updateMultisampleRenderTarget(F),se.updateRenderTargetMipmap(F)),w.isScene===!0&&w.onAfterRender(C,w,j),Dt.resetDefaultState(),b=-1,D=null,L.pop(),L.length>0?(x=L[L.length-1],Mt===!0&&Ct.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Zi(w,j,ot,lt){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Rt.intersectsSprite(w)){lt&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const Ut=nt.update(w),It=w.material;It.visible&&y.push(w,Ut,It,ot,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Rt.intersectsObject(w))){const Ut=nt.update(w),It=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Zt.copy(Ut.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(It)){const Nt=Ut.groups;for(let Qt=0,te=Nt.length;Qt<te;Qt++){const Xt=Nt[Qt],ce=It[Xt.materialIndex];ce&&ce.visible&&y.push(w,Ut,ce,ot,Zt.z,Xt)}}else It.visible&&y.push(w,Ut,It,ot,Zt.z,null)}}const bt=w.children;for(let Ut=0,It=bt.length;Ut<It;Ut++)Zi(bt[Ut],j,ot,lt)}function gs(w,j,ot,lt){const Q=w.opaque,bt=w.transmissive,Ut=w.transparent;x.setupLightsView(ot),Mt===!0&&Ct.setGlobalState(C.clippingPlanes,ot),lt&&Pt.viewport(G.copy(lt)),Q.length>0&&vs(Q,j,ot),bt.length>0&&vs(bt,j,ot),Ut.length>0&&vs(Ut,j,ot),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function cu(w,j,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new ps(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?ru:la,minFilter:ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const bt=x.state.transmissionRenderTarget[lt.id],Ut=lt.viewport||G;bt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const It=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(ct),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),de&&qt.render(ot);const te=C.toneMapping;C.toneMapping=Mr;const Xt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),Mt===!0&&Ct.setGlobalState(C.clippingPlanes,lt),vs(w,ot,lt),se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Te=0,We=j.length;Te<We;Te++){const Ne=j[Te],fe=Ne.object,Kt=Ne.geometry,Xe=Ne.material,_e=Ne.group;if(Xe.side===Pa&&fe.layers.test(lt.layers)){const Pn=Xe.side;Xe.side=ei,Xe.needsUpdate=!0,Io(fe,ot,lt,Kt,Xe,_e),Xe.side=Pn,Xe.needsUpdate=!0,ce=!0}}ce===!0&&(se.updateMultisampleRenderTarget(bt),se.updateRenderTargetMipmap(bt))}C.setRenderTarget(It,Nt,Qt),C.setClearColor(ct,at),Xt!==void 0&&(lt.viewport=Xt),C.toneMapping=te}function vs(w,j,ot){const lt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,bt=w.length;Q<bt;Q++){const Ut=w[Q],It=Ut.object,Nt=Ut.geometry,Qt=Ut.group;let te=Ut.material;te.allowOverride===!0&&lt!==null&&(te=lt),It.layers.test(ot.layers)&&Io(It,j,ot,Nt,te,Qt)}}function Io(w,j,ot,lt,Q,bt){w.onBeforeRender(C,j,ot,lt,Q,bt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(C,j,ot,lt,w,bt),Q.transparent===!0&&Q.side===Pa&&Q.forceSinglePass===!1?(Q.side=ei,Q.needsUpdate=!0,C.renderBufferDirect(ot,j,lt,Q,w,bt),Q.side=br,Q.needsUpdate=!0,C.renderBufferDirect(ot,j,lt,Q,w,bt),Q.side=Pa):C.renderBufferDirect(ot,j,lt,Q,w,bt),w.onAfterRender(C,j,ot,lt,Q,bt)}function Ki(w,j,ot){j.isScene!==!0&&(j=Wt);const lt=Gt.get(w),Q=x.state.lights,bt=x.state.shadowsArray,Ut=Q.state.version,It=ft.getParameters(w,Q.state,bt,j,ot),Nt=ft.getProgramCacheKey(It);let Qt=lt.programs;lt.environment=w.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(w.isMeshStandardMaterial?Ze:je).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",vt),Qt=new Map,lt.programs=Qt);let te=Qt.get(Nt);if(te!==void 0){if(lt.currentProgram===te&&lt.lightsStateVersion===Ut)return ha(w,It),te}else It.uniforms=ft.getUniforms(w),w.onBeforeCompile(It,C),te=ft.acquireProgram(It,Nt),Qt.set(Nt,te),lt.uniforms=It.uniforms;const Xt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=Ct.uniform),ha(w,It),lt.needsLights=Va(w),lt.lightsStateVersion=Ut,lt.needsLights&&(Xt.ambientLightColor.value=Q.state.ambient,Xt.lightProbe.value=Q.state.probe,Xt.directionalLights.value=Q.state.directional,Xt.directionalLightShadows.value=Q.state.directionalShadow,Xt.spotLights.value=Q.state.spot,Xt.spotLightShadows.value=Q.state.spotShadow,Xt.rectAreaLights.value=Q.state.rectArea,Xt.ltc_1.value=Q.state.rectAreaLTC1,Xt.ltc_2.value=Q.state.rectAreaLTC2,Xt.pointLights.value=Q.state.point,Xt.pointLightShadows.value=Q.state.pointShadow,Xt.hemisphereLights.value=Q.state.hemi,Xt.directionalShadowMap.value=Q.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xt.spotShadowMap.value=Q.state.spotShadowMap,Xt.spotLightMatrix.value=Q.state.spotLightMatrix,Xt.spotLightMap.value=Q.state.spotLightMap,Xt.pointShadowMap.value=Q.state.pointShadowMap,Xt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=te,lt.uniformsList=null,te}function xs(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Yc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function ha(w,j){const ot=Gt.get(w);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Ga(w,j,ot,lt,Q){j.isScene!==!0&&(j=Wt),se.resetTextureUnits();const bt=j.fog,Ut=lt.isMeshStandardMaterial?j.environment:null,It=F===null?C.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:bo,Nt=(lt.isMeshStandardMaterial?Ze:je).get(lt.envMap||Ut),Qt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Xt=!!ot.morphAttributes.position,ce=!!ot.morphAttributes.normal,Te=!!ot.morphAttributes.color;let We=Mr;lt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(We=C.toneMapping);const Ne=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,fe=Ne!==void 0?Ne.length:0,Kt=Gt.get(lt),Xe=x.state.lights;if(Mt===!0&&(K===!0||w!==D)){const tn=w===D&&lt.id===b;Ct.setState(lt,w,tn)}let _e=!1;lt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Xe.state.version||Kt.outputColorSpace!==It||Q.isBatchedMesh&&Kt.batching===!1||!Q.isBatchedMesh&&Kt.batching===!0||Q.isBatchedMesh&&Kt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Kt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Kt.instancing===!1||!Q.isInstancedMesh&&Kt.instancing===!0||Q.isSkinnedMesh&&Kt.skinning===!1||!Q.isSkinnedMesh&&Kt.skinning===!0||Q.isInstancedMesh&&Kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Kt.instancingMorph===!1&&Q.morphTexture!==null||Kt.envMap!==Nt||lt.fog===!0&&Kt.fog!==bt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ct.numPlanes||Kt.numIntersection!==Ct.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==te||Kt.morphTargets!==Xt||Kt.morphNormals!==ce||Kt.morphColors!==Te||Kt.toneMapping!==We||Kt.morphTargetsCount!==fe)&&(_e=!0):(_e=!0,Kt.__version=lt.version);let Pn=Kt.currentProgram;_e===!0&&(Pn=Ki(lt,j,Q));let Fi=!1,kn=!1,En=!1;const Ie=Pn.getUniforms(),Xn=Kt.uniforms;if(Pt.useProgram(Pn.program)&&(Fi=!0,kn=!0,En=!0),lt.id!==b&&(b=lt.id,kn=!0),Fi||D!==w){Pt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",w.projectionMatrix),Ie.setValue(V,"viewMatrix",w.matrixWorldInverse);const wn=Ie.map.cameraPosition;wn!==void 0&&wn.setValue(V,St.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,kn=!0,En=!0)}if(Q.isSkinnedMesh){Ie.setOptional(V,Q,"bindMatrix"),Ie.setOptional(V,Q,"bindMatrixInverse");const tn=Q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ie.setValue(V,"boneTexture",tn.boneTexture,se))}Q.isBatchedMesh&&(Ie.setOptional(V,Q,"batchingTexture"),Ie.setValue(V,"batchingTexture",Q._matricesTexture,se),Ie.setOptional(V,Q,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",Q._indirectTexture,se),Ie.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",Q._colorsTexture,se));const zn=ot.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Et.update(Q,ot,Pn),(kn||Kt.receiveShadow!==Q.receiveShadow)&&(Kt.receiveShadow=Q.receiveShadow,Ie.setValue(V,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Xn.envMap.value=Nt,Xn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Xn.envMapIntensity.value=j.environmentIntensity),kn&&(Ie.setValue(V,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&wr(Xn,En),bt&&lt.fog===!0&&_t.refreshFogUniforms(Xn,bt),_t.refreshMaterialUniforms(Xn,lt,q,X,x.state.transmissionRenderTarget[w.id]),Yc.upload(V,xs(Kt),Xn,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Yc.upload(V,xs(Kt),Xn,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ie.setValue(V,"center",Q.center),Ie.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(V,"normalMatrix",Q.normalMatrix),Ie.setValue(V,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const tn=lt.uniformsGroups;for(let wn=0,Ss=tn.length;wn<Ss;wn++){const Zn=tn[wn];oe.update(Zn,Pn),oe.bind(Zn,Pn)}}return Pn}function wr(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Va(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,j,ot){const lt=Gt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Gt.get(w.texture).__webglTexture=j,Gt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ot=Gt.get(w);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const fn=V.createFramebuffer();this.setRenderTarget=function(w,j=0,ot=0){F=w,z=j,P=ot;let lt=!0,Q=null,bt=!1,Ut=!1;if(w){const Nt=Gt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(V.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)se.setupRenderTarget(w);else if(Nt.__hasExternalTextures)se.rebindTextures(w,Gt.get(w.texture).__webglTexture,Gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xt=w.depthTexture;if(Nt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(w.width!==Xt.image.width||w.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(w)}}const Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const te=Gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[j])?Q=te[j][ot]:Q=te[j],bt=!0):w.samples>0&&se.useMultisampledRTT(w)===!1?Q=Gt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?Q=te[ot]:Q=te,G.copy(w.viewport),Y.copy(w.scissor),et=w.scissorTest}else G.copy(J).multiplyScalar(q).floor(),Y.copy(mt).multiplyScalar(q).floor(),et=yt;if(ot!==0&&(Q=fn),Pt.bindFramebuffer(V.FRAMEBUFFER,Q)&&lt&&Pt.drawBuffers(w,Q),Pt.viewport(G),Pt.scissor(Y),Pt.setScissorTest(et),bt){const Nt=Gt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,ot)}else if(Ut){const Nt=j;for(let Qt=0;Qt<w.textures.length;Qt++){const te=Gt.get(w.textures[Qt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Qt,te.__webglTexture,ot,Nt)}}else if(w!==null&&ot!==0){const Nt=Gt.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,ot)}b=-1},this.readRenderTargetPixels=function(w,j,ot,lt,Q,bt,Ut,It=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Pt.bindFramebuffer(V.FRAMEBUFFER,Nt);try{const Qt=w.textures[It],te=Qt.format,Xt=Qt.type;if(!ne.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-lt&&ot>=0&&ot<=w.height-Q&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),V.readPixels(j,ot,lt,Q,Vt.convert(te),Vt.convert(Xt),bt))}finally{const Qt=F!==null?Gt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,j,ot,lt,Q,bt,Ut,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(j>=0&&j<=w.width-lt&&ot>=0&&ot<=w.height-Q){Pt.bindFramebuffer(V.FRAMEBUFFER,Nt);const Qt=w.textures[It],te=Qt.format,Xt=Qt.type;if(!ne.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ce),V.bufferData(V.PIXEL_PACK_BUFFER,bt.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+It),V.readPixels(j,ot,lt,Q,Vt.convert(te),Vt.convert(Xt),0);const Te=F!==null?Gt.get(F).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,Te);const We=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await MT(V,We,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ce),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,bt),V.deleteBuffer(ce),V.deleteSync(We),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(w.image.width*lt),bt=Math.floor(w.image.height*lt),Ut=j!==null?j.x:0,It=j!==null?j.y:0;se.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Ut,It,Q,bt),Pt.unbindTexture()};const fu=V.createFramebuffer(),hu=V.createFramebuffer();this.copyTextureToTexture=function(w,j,ot=null,lt=null,Q=0,bt=null){bt===null&&(Q!==0?(Ql("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Q,Q=0):bt=0);let Ut,It,Nt,Qt,te,Xt,ce,Te,We;const Ne=w.isCompressedTexture?w.mipmaps[bt]:w.image;if(ot!==null)Ut=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,Qt=ot.min.x,te=ot.min.y,Xt=ot.isBox3?ot.min.z:0;else{const zn=Math.pow(2,-Q);Ut=Math.floor(Ne.width*zn),It=Math.floor(Ne.height*zn),w.isDataArrayTexture?Nt=Ne.depth:w.isData3DTexture?Nt=Math.floor(Ne.depth*zn):Nt=1,Qt=0,te=0,Xt=0}lt!==null?(ce=lt.x,Te=lt.y,We=lt.z):(ce=0,Te=0,We=0);const fe=Vt.convert(j.format),Kt=Vt.convert(j.type);let Xe;j.isData3DTexture?(se.setTexture3D(j,0),Xe=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(se.setTexture2DArray(j,0),Xe=V.TEXTURE_2D_ARRAY):(se.setTexture2D(j,0),Xe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const _e=V.getParameter(V.UNPACK_ROW_LENGTH),Pn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Fi=V.getParameter(V.UNPACK_SKIP_PIXELS),kn=V.getParameter(V.UNPACK_SKIP_ROWS),En=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ne.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ne.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xt);const Ie=w.isDataArrayTexture||w.isData3DTexture,Xn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const zn=Gt.get(w),tn=Gt.get(j),wn=Gt.get(zn.__renderTarget),Ss=Gt.get(tn.__renderTarget);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,wn.__webglFramebuffer),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ss.__webglFramebuffer);for(let Zn=0;Zn<Nt;Zn++)Ie&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gt.get(w).__webglTexture,Q,Xt+Zn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gt.get(j).__webglTexture,bt,We+Zn)),V.blitFramebuffer(Qt,te,Ut,It,ce,Te,Ut,It,V.DEPTH_BUFFER_BIT,V.NEAREST);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Gt.has(w)){const zn=Gt.get(w),tn=Gt.get(j);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,fu),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,hu);for(let wn=0;wn<Nt;wn++)Ie?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,zn.__webglTexture,Q,Xt+wn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,zn.__webglTexture,Q),Xn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,tn.__webglTexture,bt,We+wn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,tn.__webglTexture,bt),Q!==0?V.blitFramebuffer(Qt,te,Ut,It,ce,Te,Ut,It,V.COLOR_BUFFER_BIT,V.NEAREST):Xn?V.copyTexSubImage3D(Xe,bt,ce,Te,We+wn,Qt,te,Ut,It):V.copyTexSubImage2D(Xe,bt,ce,Te,Qt,te,Ut,It);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Xn?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(Xe,bt,ce,Te,We,Ut,It,Nt,fe,Kt,Ne.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,bt,ce,Te,We,Ut,It,Nt,fe,Ne.data):V.texSubImage3D(Xe,bt,ce,Te,We,Ut,It,Nt,fe,Kt,Ne):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,bt,ce,Te,Ut,It,fe,Kt,Ne.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,bt,ce,Te,Ne.width,Ne.height,fe,Ne.data):V.texSubImage2D(V.TEXTURE_2D,bt,ce,Te,Ut,It,fe,Kt,Ne);V.pixelStorei(V.UNPACK_ROW_LENGTH,_e),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Fi),V.pixelStorei(V.UNPACK_SKIP_ROWS,kn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,En),bt===0&&j.generateMipmaps&&V.generateMipmap(Xe),Pt.unbindTexture()},this.initRenderTarget=function(w){Gt.get(w).__webglFramebuffer===void 0&&se.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?se.setTextureCube(w,0):w.isData3DTexture?se.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?se.setTexture2DArray(w,0):se.setTexture2D(w,0),Pt.unbindTexture()},this.resetState=function(){z=0,P=0,F=null,Pt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}function Na(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function yS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},Am,On,Ye,Pi=1e8,Ge=1/Pi,tm=Math.PI*2,XC=tm/4,WC=0,MS=Math.sqrt,qC=Math.cos,YC=Math.sin,Cn=function(t){return typeof t=="string"},rn=function(t){return typeof t=="function"},Fa=function(t){return typeof t=="number"},Rm=function(t){return typeof t>"u"},fa=function(t){return typeof t=="object"},ni=function(t){return t!==!1},Cm=function(){return typeof window<"u"},Vc=function(t){return rn(t)||Cn(t)},ES=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,em=/(?:-?\.?\d|\.)+/gi,TS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,np=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bS=/[+-]=-?[.\d]+/,AS=/[^,'"\[\]\s]+/gi,jC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,na,nm,wm,yi={},af={},RS,CS=function(t){return(af=wo(t,yi))&&si},Dm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Jl=function(t,n){return!n&&console.warn(t)},wS=function(t,n){return t&&(yi[t]=n)&&af&&(af[t]=n)||yi},$l=function(){return 0},ZC={suppressEvents:!0,isStart:!0,kill:!1},jc={suppressEvents:!0,kill:!1},KC={suppressEvents:!0},Um={},Er=[],im={},DS,_i={},ip={},bx=30,Zc=[],Lm="",Nm=function(t){var n=t[0],a,s;if(fa(n)||rn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=Zc.length;s--&&!Zc[s].targetTest(n););a=Zc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new ty(t[s],a)))||t.splice(s,1);return t},us=function(t){return t._gsap||Nm(zi(t))[0]._gsap},US=function(t,n,a){return(a=t[n])&&rn(a)?t[n]():Rm(a)&&t.getAttribute&&t.getAttribute(n)||a},ii=function(t,n){return(t=t.split(",")).forEach(n)||t},un=function(t){return Math.round(t*1e5)/1e5||0},_n=function(t){return Math.round(t*1e7)/1e7||0},xo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},QC=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},rf=function(){var t=Er.length,n=Er.slice(0),a,s;for(im={},Er.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Om=function(t){return!!(t._initted||t._startAt||t.add)},LS=function(t,n,a,s){Er.length&&!On&&rf(),t.render(n,a,!!(On&&n<0&&Om(t))),Er.length&&!On&&rf()},NS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(AS).length<2?n:Cn(t)?t.trim():t},OS=function(t){return t},Mi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},JC=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},wo=function(t,n){for(var a in n)t[a]=n[a];return t},Ax=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=fa(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},sf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},kl=function(t){var n=t.parent||Qe,a=t.keyframes?JC(Vn(t.keyframes)):Mi;if(ni(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},$C=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},PS=function(t,n,a,s,l){var c=t[s],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},pf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Ar=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},cs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},tw=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},am=function(t,n,a,s){return t._startAt&&(On?t._startAt.revert(jc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},ew=function o(t){return!t||t._ts&&o(t.parent)},Rx=function(t){return t._repeat?Do(t._tTime,t=t.duration()+t._rDelay)*t:0},Do=function(t,n){var a=Math.floor(t=_n(t/n));return t&&a===t?a-1:a},of=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},mf=function(t){return t._end=_n(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ge)||0))},_f=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=_n(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),mf(t),a._dirty||cs(a,t)),t},zS=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=of(t.rawTime(),n),(!n._dur||uu(0,n.totalDuration(),a)-n._tTime>Ge)&&n.render(a,!0)),cs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Ge}},aa=function(t,n,a,s){return n.parent&&Ar(n),n._start=_n((Fa(a)?a:a||t!==Qe?Ui(t,a,n):t._time)+n._delay),n._end=_n(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),PS(t,n,"_first","_last",t._sort?"_start":0),rm(n)||(t._recent=n),s||zS(t,n),t._ts<0&&_f(t,t._tTime),t},BS=function(t,n){return(yi.ScrollTrigger||Dm("scrollTrigger",n))&&yi.ScrollTrigger.create(n,t)},IS=function(t,n,a,s,l){if(zm(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!On&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&DS!==gi.frame)return Er.push(t),t._lazy=[l,s],1},nw=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},rm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},iw=function(t,n,a,s){var l=t.ratio,c=n<0||!n&&(!t._start&&nw(t)&&!(!t._initted&&rm(t))||(t._ts<0||t._dp._ts<0)&&!rm(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=uu(0,t._tDur,n),_=Do(p,f),t._yoyo&&_&1&&(c=1-c),_!==Do(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||On||s||t._zTime===Ge||!n&&t._zTime){if(!t._initted&&IS(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?Ge:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&am(t,n,a,!0),t._onUpdate&&!a&&vi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&vi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Ar(t,1),!a&&!On&&(vi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},aw=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Uo=function(t,n,a,s){var l=t._repeat,c=_n(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:_n(c*(l+1)+t._rDelay*l):c,f>0&&!s&&_f(t,t._tTime=t._tDur*f),t.parent&&mf(t),a||cs(t.parent,t),t},Cx=function(t){return t instanceof Yn?cs(t):Uo(t,t._dur)},rw={_start:0,endTime:$l,totalDuration:$l},Ui=function o(t,n,a){var s=t.labels,l=t._recent||rw,c=t.duration()>=Pi?l.endTime(!1):t._dur,f,p,d;return Cn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Vn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Xl=function(t,n,a){var s=Fa(n[1]),l=(s?2:1)+(t<2?0:1),c=n[l],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ni(p.vars.inherit)&&p.parent;c.immediateRender=ni(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new mn(n[0],c,n[l+1])},Cr=function(t,n){return t||t===0?n(t):n},uu=function(t,n,a){return a<t?t:a>n?n:a},Gn=function(t,n){return!Cn(t)||!(n=jC.exec(t))?"":n[1]},sw=function(t,n,a){return Cr(a,function(s){return uu(t,n,s)})},sm=[].slice,FS=function(t,n){return t&&fa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&fa(t[0]))&&!t.nodeType&&t!==na},ow=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return Cn(s)&&!n||FS(s,1)?(l=a).push.apply(l,zi(s)):a.push(s)})||a},zi=function(t,n,a){return Ye&&!n&&Ye.selector?Ye.selector(t):Cn(t)&&!a&&(nm||!Lo())?sm.call((n||wm).querySelectorAll(t),0):Vn(t)?ow(t,a):FS(t)?sm.call(t,0):t?[t]:[]},om=function(t){return t=zi(t)[0]||Jl("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return zi(n,a.querySelectorAll?a:a===t?Jl("Invalid scope")||wm.createElement("div"):t)}},HS=function(t){return t.sort(function(){return .5-Math.random()})},GS=function(t){if(rn(t))return t;var n=fa(t)?t:{each:t},a=fs(n.ease),s=n.from||0,l=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return Cn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,S,T){var M=(T||n).length,y=c[M],x,N,L,C,U,z,P,F,b;if(!y){if(b=n.grid==="auto"?0:(n.grid||[1,Pi])[1],!b){for(P=-Pi;P<(P=T[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(y=c[M]=[],x=p?Math.min(b,M)*_-.5:s%b,N=b===Pi?0:p?M*g/b-.5:s/b|0,P=0,F=Pi,z=0;z<M;z++)L=z%b-x,C=N-(z/b|0),y[z]=U=d?Math.abs(d==="y"?C:L):MS(L*L+C*C),U>P&&(P=U),U<F&&(F=U);s==="random"&&HS(y),y.max=P-F,y.min=F,y.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:d?d==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),y.b=M<0?l-M:l,y.u=Gn(n.amount||n.each)||0,a=a&&M<0?QS(a):a}return M=(y[v]-y.min)/y.max||0,_n(y.b+(a?a(M):M)*y.v)+y.u}},lm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=_n(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Fa(a)?0:Gn(a))}},VS=function(t,n){var a=Vn(t),s,l;return!a&&fa(t)&&(s=a=t.radius||Pi,t.values?(t=zi(t.values),(l=!Fa(t[0]))&&(s*=s)):t=lm(t.increment)),Cr(n,a?rn(t)?function(c){return l=t(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=Pi,_=0,g=t.length,v,S;g--;)l?(v=t[g].x-f,S=t[g].y-p,v=v*v+S*S):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,l||_===c||Fa(c)?_:_+Gn(c)}:lm(t))},kS=function(t,n,a,s){return Cr(Vn(t)?!n:a===!0?!!(a=0):!s,function(){return Vn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},lw=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,c){return c(l)},s)}},uw=function(t,n){return function(a){return t(parseFloat(a))+(n||Gn(a))}},cw=function(t,n,a){return WS(t,n,0,1,a)},XS=function(t,n,a){return Cr(a,function(s){return t[~~n(s)]})},fw=function o(t,n,a){var s=n-t;return Vn(t)?XS(t,o(0,t.length),n):Cr(a,function(l){return(s+(l-t)%s)%s+t})},hw=function o(t,n,a){var s=n-t,l=s*2;return Vn(t)?XS(t,o(0,t.length-1),n):Cr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>s?l-c:c)})},tu=function(t){for(var n=0,a="",s,l,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",l=t.substr(s+7,c-s-7).match(f?AS:em),a+=t.substr(n,s-n)+kS(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},WS=function(t,n,a,s,l){var c=n-t,f=s-a;return Cr(l,function(p){return a+((p-t)/c*f||0)})},dw=function o(t,n,a,s){var l=isNaN(t+n)?0:function(S){return(1-S)*t+S*n};if(!l){var c=Cn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Vn(t)&&!Vn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,l=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},a=n}else s||(t=wo(Vn(t)?[]:{},t));if(!_){for(p in n)Pm.call(f,t,p,"get",n[p]);l=function(T){return Fm(T,f)||(c?t.p:t)}}}return Cr(a,l)},wx=function(t,n,a){var s=t.labels,l=Pi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},vi=function(t,n,a){var s=t.vars,l=s[n],c=Ye,f=t._ctx,p,d,_;if(l)return p=s[n+"Params"],d=s.callbackScope||t,a&&Er.length&&rf(),f&&(Ye=f),_=p?l.apply(d,p):l.call(d),Ye=c,_},Gl=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!On),t.progress()<1&&vi(t,"onInterrupt"),t},_o,qS=[],YS=function(t){if(t)if(t=!t.name&&t.default||t,Cm()||t.headless){var n=t.name,a=rn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:$l,render:Fm,add:Pm,kill:ww,modifier:Cw,rawVars:0},c={targetTest:0,get:0,getSetter:Im,aliases:{},register:0};if(Lo(),t!==s){if(_i[n])return;Mi(s,Mi(sf(t,l),c)),wo(s.prototype,wo(l,sf(t,c))),_i[s.prop=n]=s,t.targetTest&&(Zc.push(s),Um[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}wS(n,s),t.register&&t.register(si,s,ai)}else qS.push(t)},He=255,Vl={aqua:[0,He,He],lime:[0,He,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,He],navy:[0,0,128],white:[He,He,He],olive:[128,128,0],yellow:[He,He,0],orange:[He,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[He,0,0],pink:[He,192,203],cyan:[0,He,He],transparent:[He,He,He,0]},ap=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*He+.5|0},jS=function(t,n,a){var s=t?Fa(t)?[t>>16,t>>8&He,t&He]:0:Vl.black,l,c,f,p,d,_,g,v,S,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vl[t])s=Vl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&He,s&He,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&He,t&He]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(em),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,s.length>3&&(s[3]*=1),s[0]=ap(p+1/3,l,c),s[1]=ap(p,l,c),s[2]=ap(p-1/3,l,c);else if(~t.indexOf("="))return s=t.match(TS),a&&s.length<4&&(s[3]=1),s}else s=t.match(em)||Vl.transparent;s=s.map(Number)}return n&&!T&&(l=s[0]/He,c=s[1]/He,f=s[2]/He,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(S=g-v,d=_>.5?S/(2-g-v):S/(g+v),p=g===l?(c-f)/S+(c<f?6:0):g===c?(f-l)/S+2:(l-c)/S+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},ZS=function(t){var n=[],a=[],s=-1;return t.split(Tr).forEach(function(l){var c=l.match(mo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},Dx=function(t,n,a){var s="",l=(t+s).match(Tr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return t;if(l=l.map(function(v){return(v=jS(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=ZS(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Tr,"1").split(mo),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Tr),g=d.length-1;f<g;f++)s+=d[f]+l[f];return s+d[g]},Tr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),pw=/hsl[a]?\(/,KS=function(t){var n=t.join(" "),a;if(Tr.lastIndex=0,Tr.test(n))return a=pw.test(n),t[1]=Dx(t[1],a),t[0]=Dx(t[0],a,ZS(t[1])),!0},eu,gi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,c=l,f=[],p,d,_,g,v,S,T=function M(y){var x=o()-s,N=y===!0,L,C,U,z;if((x>t||x<0)&&(a+=x-n),s+=x,U=s-a,L=U-c,(L>0||N)&&(z=++g.frame,v=U-g.time*1e3,g.time=U=U/1e3,c+=L+(L>=l?4:l-L),C=1),N||(p=d(M)),C)for(S=0;S<f.length;S++)f[S](U,v,z,y)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){RS&&(!nm&&Cm()&&(na=nm=window,wm=na.document||{},yi.gsap=si,(na.gsapVersions||(na.gsapVersions=[])).push(si.version),CS(af||na.GreenSockGlobals||!na.gsap&&na||{}),qS.forEach(YS)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},eu=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),eu=0,d=$l},lagSmoothing:function(y,x){t=y||1/0,n=Math.min(x||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,x,N){var L=x?function(C,U,z,P){y(C,U,z,P),g.remove(L)}:y;return g.remove(y),f[N?"unshift":"push"](L),Lo(),L},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},g})(),Lo=function(){return!eu&&gi.wake()},Se={},mw=/^[\d.\-M][\d.\-,\s]/,_w=/["']/g,gw=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(_w,"").trim():+d,s=p.substr(f+1).trim();return n},vw=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},xw=function(t){var n=(t+"").split("("),a=Se[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[gw(n[1])]:vw(t).split(",").map(NS)):Se._CE&&mw.test(t)?Se._CE("",t):a},QS=function(t){return function(n){return 1-t(1-n)}},JS=function o(t,n){for(var a=t._first,s;a;)a instanceof Yn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},fs=function(t,n){return t&&(rn(t)?t:Se[t]||xw(t))||n},_s=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},c;return ii(t,function(f){Se[f]=yi[f]=l,Se[c=f.toLowerCase()]=a;for(var p in l)Se[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Se[f+"."+p]=l[p]}),l},$S=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},rp=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/tm*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*YC((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:$S(f);return l=tm/l,p.config=function(d,_){return o(t,d,_)},p},sp=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:$S(a);return s.config=function(l){return o(t,l)},s};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;_s(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;_s("Elastic",rp("in"),rp("out"),rp());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};_s("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);_s("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});_s("Circ",function(o){return-(MS(1-o*o)-1)});_s("Sine",function(o){return o===1?1:-qC(o*XC)+1});_s("Back",sp("in"),sp("out"),sp());Se.SteppedEase=Se.steps=yi.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,c=1-Ge;return function(f){return((s*uu(0,c,f)|0)+l)*a}}};Co.ease=Se["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Lm+=o+","+o+"Params,"});var ty=function(t,n){this.id=WC++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:US,this.set=n?n.getSetter:Im},nu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Uo(this,+n.duration,1,1),this.data=n.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),eu||gi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Uo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Lo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(_f(this,a),!l._dp||l.parent||zS(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&aa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ge||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),LS(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Rx(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Rx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?Do(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?of(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ge?0:this._rts,this.totalTime(uu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),mf(this),tw(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&aa(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ni(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?of(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=KC);var s=On;return On=a,Om(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),On=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Cx(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Cx(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ui(this,a),ni(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ni(s)),this._dur||(this._zTime=-Ge),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ge:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-Ge)},t.eventCallback=function(a,s,l){var c=this.vars;return arguments.length>1?(s?(c[a]=s,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(l){var c=rn(a)?a:OS,f=function(){var d=s.then;s.then=null,rn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),l(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Gl(this)},o})();Mi(nu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Yn=(function(o){yS(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ni(a.sortChildren),Qe&&aa(a.parent||Qe,Na(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&BS(Na(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,c){return Xl(0,arguments,this),this},n.from=function(s,l,c){return Xl(1,arguments,this),this},n.fromTo=function(s,l,c,f){return Xl(2,arguments,this),this},n.set=function(s,l,c){return l.duration=0,l.parent=this,kl(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new mn(s,l,Ui(this,c),1),this},n.call=function(s,l,c){return aa(this,mn.delayedCall(0,s,l),c)},n.staggerTo=function(s,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new mn(s,c,Ui(this,p)),this},n.staggerFrom=function(s,l,c,f,p,d,_){return c.runBackwards=1,kl(c).immediateRender=ni(c.immediateRender),this.staggerTo(s,l,c,f,p,d,_)},n.staggerFromTo=function(s,l,c,f,p,d,_,g){return f.startAt=c,kl(f).immediateRender=ni(f.immediateRender),this.staggerTo(s,l,f,p,d,_,g)},n.render=function(s,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:_n(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,S,T,M,y,x,N,L,C,U,z,P;if(this!==Qe&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,C=this._start,L=this._ts,x=!L,g&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(z=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,l,c);if(v=_n(_%y),_===p?(M=this._repeat,v=d):(U=_n(_/y),M=~~U,M&&M===U&&(v=d,M--),v>d&&(v=d)),U=Do(this._tTime,y),!f&&this._tTime&&U!==M&&this._tTime-U*y-this._dur<=0&&(U=M),z&&M&1&&(v=d-v,P=1),M!==U&&!this._lock){var F=z&&U&1,b=F===(z&&M&1);if(M<U&&(F=!F),f=F?0:_%d?d:_,this._lock=1,this.render(f||(P?0:_n(M*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&vi(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,b&&(this._lock=2,f=F?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;JS(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(N=aw(this,_n(f),_n(v)),N&&(_-=v-(v=N._start))),this._tTime=_,this._time=v,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&!l&&!U&&(vi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(S=this._first;S;){if(T=S._next,(S._act||v>=S._start)&&S._ts&&N!==S){if(S.parent!==this)return this.render(s,l,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,c),v!==this._time||!this._ts&&!x){N=0,T&&(_+=this._zTime=-Ge);break}}S=T}else{S=this._last;for(var D=s<0?s:v;S;){if(T=S._prev,(S._act||D<=S._end)&&S._ts&&N!==S){if(S.parent!==this)return this.render(s,l,c);if(S.render(S._ts>0?(D-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(D-S._start)*S._ts,l,c||On&&Om(S)),v!==this._time||!this._ts&&!x){N=0,T&&(_+=this._zTime=D?-Ge:Ge);break}}S=T}}if(N&&!l&&(this.pause(),N.render(v>=f?0:-Ge)._zTime=v>=f?1:-1,this._ts))return this._start=C,mf(this),this.render(s,l,c);this._onUpdate&&!l&&vi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Ar(this,1),!l&&!(s<0&&!f)&&(_||f||!p)&&(vi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var c=this;if(Fa(l)||(l=Ui(this,l,s)),!(s instanceof nu)){if(Vn(s))return s.forEach(function(f){return c.add(f,l)}),this;if(Cn(s))return this.addLabel(s,l);if(rn(s))s=mn.delayedCall(0,s);else return this}return this!==s?aa(this,s,l):this},n.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Pi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof mn?l&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},n.remove=function(s){return Cn(s)?this.removeLabel(s):rn(s)?this.killTweensOf(s):(s.parent===this&&pf(this,s),s===this._recent&&(this._recent=this._last),cs(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(gi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Ui(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,c){var f=mn.delayedCall(0,l||$l,c);return f.data="isPause",this._hasPause=1,aa(this,f,Ui(this,s))},n.removePause=function(s){var l=this._first;for(s=Ui(this,s);l;)l._start===s&&l.data==="isPause"&&Ar(l),l=l._next},n.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)vr!==f[p]&&f[p].kill(s,l);return this},n.getTweensOf=function(s,l){for(var c=[],f=zi(s),p=this._first,d=Fa(l),_;p;)p instanceof mn?QC(p._targets,f)&&(d?(!vr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,l){l=l||{};var c=this,f=Ui(c,s),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,S,T=mn.to(c,Mi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Ge,onStart:function(){if(c.pause(),!S){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==y&&Uo(T,y,0,1).render(T._time,!0,!0),S=1}_&&_.apply(T,g||[])}},l));return v?T.render(0):T},n.tweenFromTo=function(s,l,c){return this.tweenTo(l,Mi({startAt:{time:Ui(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),wx(this,Ui(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),wx(this,Ui(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ge)},n.shiftChildren=function(s,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=s);return cs(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),cs(this)},n.totalDuration=function(s){var l=0,c=this,f=c._last,p=Pi,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,aa(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Uo(c,c===Qe&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Qe._ts&&(LS(Qe,of(s,Qe)),DS=gi.frame),gi.frame>=bx){bx+=Si.autoSleep||120;var l=Qe._first;if((!l||!l._ts)&&Si.autoSleep&&gi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||gi.sleep()}}},t})(nu);Mi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Sw=function(t,n,a,s,l,c,f){var p=new ai(this._pt,t,n,0,1,sy,null,l),d=0,_=0,g,v,S,T,M,y,x,N;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=tu(s)),c&&(N=[a,s],c(N,t,n),a=N[0],s=N[1]),v=a.match(np)||[];g=np.exec(s);)T=g[0],M=s.substring(d,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),T!==v[_++]&&(y=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:y,c:T.charAt(1)==="="?xo(y,T)-y:parseFloat(T)-y,m:S&&S<4?Math.round:0},d=np.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(bS.test(s)||x)&&(p.e=0),this._pt=p,p},Pm=function(t,n,a,s,l,c,f,p,d,_){rn(s)&&(s=s(l||0,t,c));var g=t[n],v=a!=="get"?a:rn(g)?d?t[n.indexOf("set")||!rn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,S=rn(g)?d?bw:ay:Bm,T;if(Cn(s)&&(~s.indexOf("random(")&&(s=tu(s)),s.charAt(1)==="="&&(T=xo(v,s)+(Gn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||um)return!isNaN(v*s)&&s!==""?(T=new ai(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?Rw:ry,0,S),d&&(T.fp=d),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(n in t)&&Dm(n,s),Sw.call(this,t,n,v,s,S,p||Si.stringFilter,d))},yw=function(t,n,a,s,l){if(rn(t)&&(t=Wl(t,l,n,a,s)),!fa(t)||t.style&&t.nodeType||Vn(t)||ES(t))return Cn(t)?Wl(t,l,n,a,s):t;var c={},f;for(f in t)c[f]=Wl(t[f],l,n,a,s);return c},ey=function(t,n,a,s,l,c){var f,p,d,_;if(_i[t]&&(f=new _i[t]).init(l,f.rawVars?n[t]:yw(n[t],s,l,c,a),a,s,c)!==!1&&(a._pt=p=new ai(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==_o))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},vr,um,zm=function o(t,n,a){var s=t.vars,l=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,S=s.autoRevert,T=t._dur,M=t._startAt,y=t._targets,x=t.parent,N=x&&x.data==="nested"?x.vars.targets:y,L=t._overwrite==="auto"&&!Am,C=t.timeline,U,z,P,F,b,D,G,Y,et,ct,at,I,X;if(C&&(!v||!l)&&(l="none"),t._ease=fs(l,Co.ease),t._yEase=g?QS(fs(g===!0?l:g,Co.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!C&&!!s.runBackwards,!C||v&&!s.stagger){if(Y=y[0]?us(y[0]).harness:0,I=Y&&s[Y.prop],U=sf(s,Um),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!S?M.render(-1,!0):M.revert(_&&T?jc:ZC),M._lazy=0),c){if(Ar(t._startAt=mn.set(y,Mi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&ni(p),startAt:null,delay:0,onUpdate:d&&function(){return vi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On||!f&&!S)&&t._startAt.revert(jc),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!M){if(n&&(f=!1),P=Mi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&ni(p),immediateRender:f,stagger:0,parent:x},U),I&&(P[Y.prop]=I),Ar(t._startAt=mn.set(y,P)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(On?t._startAt.revert(jc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Ge,Ge);else if(!n)return}for(t._pt=t._ptCache=0,p=T&&ni(p)||p&&!T,z=0;z<y.length;z++){if(b=y[z],G=b._gsap||Nm(y)[z]._gsap,t._ptLookup[z]=ct={},im[G.id]&&Er.length&&rf(),at=N===y?z:N.indexOf(b),Y&&(et=new Y).init(b,I||U,t,at,N)!==!1&&(t._pt=F=new ai(t._pt,b,et.name,0,1,et.render,et,0,et.priority),et._props.forEach(function(q){ct[q]=F}),et.priority&&(D=1)),!Y||I)for(P in U)_i[P]&&(et=ey(P,U,t,at,b,N))?et.priority&&(D=1):ct[P]=F=Pm.call(t,b,P,"get",U[P],at,N,0,s.stringFilter);t._op&&t._op[z]&&t.kill(b,t._op[z]),L&&t._pt&&(vr=t,Qe.killTweensOf(b,ct,t.globalTime(n)),X=!t.parent,vr=0),t._pt&&p&&(im[G.id]=1)}D&&oy(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!X,v&&n<=0&&C.render(Pi,!0,!0)},Mw=function(t,n,a,s,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,S;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,S=t._targets.length;S--;){if(_=v[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return um=1,t.vars[n]="+=0",zm(t,f),um=0,p?Jl(n+" not eligible for reset"):1;d.push(_)}for(S=d.length;S--;)g=d[S],_=g._pt||g,_.s=(s||s===0)&&!l?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=un(a)+Gn(g.e)),g.b&&(g.b=_.s+Gn(g.b))},Ew=function(t,n){var a=t[0]?us(t[0]).harness:0,s=a&&a.aliases,l,c,f,p;if(!s)return n;l=wo({},n);for(c in s)if(c in l)for(p=s[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},Tw=function(t,n,a,s){var l=n.ease||s||"power1.inOut",c,f;if(Vn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},Wl=function(t,n,a,s,l){return rn(t)?t.call(n,a,s,l):Cn(t)&&~t.indexOf("random(")?tu(t):t},ny=Lm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",iy={};ii(ny+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return iy[o]=1});var mn=(function(o){yS(t,o);function t(a,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,c?s:kl(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,S=p.overwrite,T=p.keyframes,M=p.defaults,y=p.scrollTrigger,x=p.yoyoEase,N=s.parent||Qe,L=(Vn(a)||ES(a)?Fa(a[0]):"length"in s)?[a]:zi(a),C,U,z,P,F,b,D,G;if(f._targets=L.length?Nm(L):Jl("GSAP target "+a+" not found. https://gsap.com",!Si.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,T||v||Vc(d)||Vc(_)){if(s=f.vars,C=f.timeline=new Yn({data:"nested",defaults:M||{},targets:N&&N.data==="nested"?N.vars.targets:L}),C.kill(),C.parent=C._dp=Na(f),C._start=0,v||Vc(d)||Vc(_)){if(P=L.length,D=v&&GS(v),fa(v))for(F in v)~ny.indexOf(F)&&(G||(G={}),G[F]=v[F]);for(U=0;U<P;U++)z=sf(s,iy),z.stagger=0,x&&(z.yoyoEase=x),G&&wo(z,G),b=L[U],z.duration=+Wl(d,Na(f),U,b,L),z.delay=(+Wl(_,Na(f),U,b,L)||0)-f._delay,!v&&P===1&&z.delay&&(f._delay=_=z.delay,f._start+=_,z.delay=0),C.to(b,z,D?D(U,b,L):0),C._ease=Se.none;C.duration()?d=_=0:f.timeline=0}else if(T){kl(Mi(C.vars.defaults,{ease:"none"})),C._ease=fs(T.ease||s.ease||"none");var Y=0,et,ct,at;if(Vn(T))T.forEach(function(I){return C.to(L,I,">")}),C.duration();else{z={};for(F in T)F==="ease"||F==="easeEach"||Tw(F,T[F],z,T.easeEach);for(F in z)for(et=z[F].sort(function(I,X){return I.t-X.t}),Y=0,U=0;U<et.length;U++)ct=et[U],at={ease:ct.e,duration:(ct.t-(U?et[U-1].t:0))/100*d},at[F]=ct.v,C.to(L,at,Y),Y+=at.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return S===!0&&!Am&&(vr=Na(f),Qe.killTweensOf(L),vr=0),aa(N,Na(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!T&&f._start===_n(N._time)&&ni(g)&&ew(Na(f))&&N.data!=="nested")&&(f._tTime=-Ge,f.render(Math.max(0,-_)||0)),y&&BS(Na(f),y),f}var n=t.prototype;return n.render=function(s,l,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-Ge&&!_?p:s<Ge?0:s,v,S,T,M,y,x,N,L,C;if(!d)iw(this,s,l,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,L=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,l,c);if(v=_n(g%M),g===p?(T=this._repeat,v=d):(y=_n(g/M),T=~~y,T&&T===y?(v=d,T--):v>d&&(v=d)),x=this._yoyo&&T&1,x&&(C=this._yEase,v=d-v),y=Do(this._tTime,M),v===f&&!c&&this._initted&&T===y)return this._tTime=g,this;T!==y&&(L&&this._yEase&&JS(L,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(_n(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(IS(this,_?s:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==y))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=N=(C||this._ease)(v/d),this._from&&(this.ratio=N=1-N),!f&&g&&!l&&!y&&(vi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(N,S.d),S=S._next;L&&L.render(s<0?s:L._dur*L._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&am(this,s,l,c),vi(this,"onUpdate")),this._repeat&&T!==y&&this.vars.onRepeat&&!l&&this.parent&&vi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&am(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ar(this,1),!l&&!(_&&!f)&&(g||f||x)&&(vi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,c,f,p){eu||gi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||zm(this,d),_=this._ease(d/this._dur),Mw(this,s,l,c,f,_,d,p)?this.resetTo(s,l,c,f,1):(_f(this,0),this.parent||PS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Gl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!On),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,vr&&vr.vars.overwrite!==!0)._first||Gl(this),this.parent&&c!==this.timeline.totalDuration()&&Uo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?zi(s):f,d=this._ptLookup,_=this._pt,g,v,S,T,M,y,x;if((!l||l==="all")&&$C(f,p))return l==="all"&&(this._pt=0),Gl(this);for(g=this._op=this._op||[],l!=="all"&&(Cn(l)&&(M={},ii(l,function(N){return M[N]=1}),l=M),l=Ew(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,T=v,S={}):(S=g[x]=g[x]||{},T=l);for(M in T)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&pf(this,y,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&_&&Gl(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return Xl(1,arguments)},t.delayedCall=function(s,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,l,c){return Xl(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,c){return Qe.killTweensOf(s,l,c)},t})(nu);Mi(mn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(o){mn[o]=function(){var t=new Yn,n=sm.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Bm=function(t,n,a){return t[n]=a},ay=function(t,n,a){return t[n](a)},bw=function(t,n,a,s){return t[n](s.fp,a)},Aw=function(t,n,a){return t.setAttribute(n,a)},Im=function(t,n){return rn(t[n])?ay:Rm(t[n])&&t.setAttribute?Aw:Bm},ry=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},Rw=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},sy=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Fm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},Cw=function(t,n,a,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(t,n,a),l=c},ww=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?pf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},Dw=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},oy=function(t){for(var n=t._pt,a,s,l,c;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=l},ai=(function(){function o(n,a,s,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=s,this.r=f||ry,this.d=p||this,this.set=d||Bm,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=Dw,this.m=a,this.mt=l,this.tween=s},o})();ii(Lm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Um[o]=1});yi.TweenMax=yi.TweenLite=mn;yi.TimelineLite=yi.TimelineMax=Yn;Qe=new Yn({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Si.stringFilter=KS;var hs=[],Kc={},Uw=[],Ux=0,Lw=0,op=function(t){return(Kc[t]||Uw).map(function(n){return n()})},cm=function(){var t=Date.now(),n=[];t-Ux>2&&(op("matchMediaInit"),hs.forEach(function(a){var s=a.queries,l=a.conditions,c,f,p,d;for(f in s)c=na.matchMedia(s[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),op("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Ux=t,op("matchMedia"))},ly=(function(){function o(n,a){this.selector=a&&om(a),this.data=[],this._r=[],this.isReverted=!1,this.id=Lw++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){rn(a)&&(l=s,s=a,a=rn);var c=this,f=function(){var d=Ye,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=om(l)),Ye=c,g=s.apply(c,arguments),rn(g)&&c._r.push(g),Ye=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===rn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=Ye;Ye=null,a(this),Ye=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof mn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Yn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof mn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=hs.length;c--;)hs[c].id===this.id&&hs.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),Nw=(function(){function o(n){this.contexts=[],this.scope=n,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){fa(a)||(a={matches:a});var c=new ly(0,l||this.scope),f=c.conditions={},p,d,_;Ye&&!c.selector&&(c.selector=Ye.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=na.matchMedia(a[d]),p&&(hs.indexOf(c)<0&&hs.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(cm):p.addEventListener("change",cm)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),lf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return YS(s)})},timeline:function(t){return new Yn(t)},getTweensOf:function(t,n){return Qe.getTweensOf(t,n)},getProperty:function(t,n,a,s){Cn(t)&&(t=zi(t)[0]);var l=us(t||{}).get,c=a?OS:NS;return a==="native"&&(a=""),t&&(n?c((_i[n]&&_i[n].get||l)(t,n,a,s)):function(f,p,d){return c((_i[f]&&_i[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=zi(t),t.length>1){var s=t.map(function(_){return si.quickSetter(_,n,a)}),l=s.length;return function(_){for(var g=l;g--;)s[g](_)}}t=t[0]||{};var c=_i[n],f=us(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;_o._pt=0,g.init(t,a?_+a:_,_o,0,[t]),g.render(1,g),_o._pt&&Fm(1,_o)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,l=si.to(t,Mi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return Qe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fs(t.ease,Co.ease)),Ax(Co,t||{})},config:function(t){return Ax(Si,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!_i[f]&&!yi[f]&&Jl(n+" effect requires "+f+" plugin.")}),ip[n]=function(f,p,d){return a(zi(f),Mi(p||{},l),d)},c&&(Yn.prototype[n]=function(f,p,d){return this.add(ip[n](f,fa(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Se[t]=fs(n)},parseEase:function(t,n){return arguments.length?fs(t,n):Se},getById:function(t){return Qe.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Yn(t),s,l;for(a.smoothChildTiming=ni(t.smoothChildTiming),Qe.remove(a),a._dp=0,a._time=a._tTime=Qe._time,s=Qe._first;s;)l=s._next,(n||!(!s._dur&&s instanceof mn&&s.vars.onComplete===s._targets[0]))&&aa(a,s,s._start-s._delay),s=l;return aa(Qe,a,0),a},context:function(t,n){return t?new ly(t,n):Ye},matchMedia:function(t){return new Nw(t)},matchMediaRefresh:function(){return hs.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||cm()},addEventListener:function(t,n){var a=Kc[t]||(Kc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Kc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:fw,wrapYoyo:hw,distribute:GS,random:kS,snap:VS,normalize:cw,getUnit:Gn,clamp:sw,splitColor:jS,toArray:zi,selector:om,mapRange:WS,pipe:lw,unitize:uw,interpolate:dw,shuffle:HS},install:CS,effects:ip,ticker:gi,updateRoot:Yn.updateRoot,plugins:_i,globalTimeline:Qe,core:{PropTween:ai,globals:wS,Tween:mn,Timeline:Yn,Animation:nu,getCache:us,_removeLinkedListItem:pf,reverting:function(){return On},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return Am=t}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return lf[o]=mn[o]});gi.add(Yn.updateRoot);_o=lf.to({},{duration:0});var Ow=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},Pw=function(t,n){var a=t._targets,s,l,c;for(s in n)for(l=a.length;l--;)c=t._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=Ow(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[l],s))},lp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var p,d;if(Cn(l)&&(p={},ii(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}Pw(f,l)}}}},si=lf.registerPlugin({name:"attr",init:function(t,n,a,s,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)On?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},lp("roundProps",lm),lp("modifiers"),lp("snap",VS))||lf;mn.version=Yn.version=si.version="3.13.0";RS=1;Cm()&&Lo();Se.Power0;Se.Power1;Se.Power2;Se.Power3;Se.Power4;Se.Linear;Se.Quad;Se.Cubic;Se.Quart;Se.Quint;Se.Strong;Se.Elastic;Se.Back;Se.SteppedEase;Se.Bounce;Se.Sine;Se.Expo;Se.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Lx,xr,So,Hm,os,Nx,Gm,zw=function(){return typeof window<"u"},Ha={},ns=180/Math.PI,yo=Math.PI/180,ho=Math.atan2,Ox=1e8,Vm=/([A-Z])/g,Bw=/(left|right|width|margin|padding|x)/i,Iw=/[\s,\(]\S/,oa={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Fw=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Hw=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Gw=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},uy=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},cy=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Vw=function(t,n,a){return t.style[n]=a},kw=function(t,n,a){return t.style.setProperty(n,a)},Xw=function(t,n,a){return t._gsap[n]=a},Ww=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},qw=function(t,n,a,s,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},Yw=function(t,n,a,s,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},Je="transform",ri=Je+"Origin",jw=function o(t,n){var a=this,s=this.target,l=s.style,c=s._gsap;if(t in Ha&&l){if(this.tfm=this.tfm||{},t!=="transform")t=oa[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Oa(s,f)}):this.tfm[t]=c.x?c[t]:Oa(s,t),t===ri&&(this.tfm.zOrigin=c.zOrigin);else return oa.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(Je)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,n,"")),t=Je}(l||n)&&this.props.push(t,n,l[t])},fy=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Zw=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(Vm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=Gm(),(!l||!l.isStart)&&!a[Je]&&(fy(a),s.zOrigin&&a[ri]&&(a[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},hy=function(t,n){var a={target:t,props:[],revert:Zw,save:jw};return t._gsap||si.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},dy,hm=function(t,n){var a=xr.createElementNS?xr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):xr.createElement(t);return a&&a.style?a:xr.createElement(t)},Bi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Vm,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,No(n)||n,1)||""},Px="O,Moz,ms,Ms,Webkit".split(","),No=function(t,n,a){var s=n||os,l=s.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(Px[c]+t in l););return c<0?null:(c===3?"ms":c>=0?Px[c]:"")+t},dm=function(){zw()&&window.document&&(Lx=window,xr=Lx.document,So=xr.documentElement,os=hm("div")||{style:{}},hm("div"),Je=No(Je),ri=Je+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dy=!!No("perspective"),Gm=si.core.reverting,Hm=1)},zx=function(t){var n=t.ownerSVGElement,a=hm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),So.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),So.removeChild(a),l},Bx=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},py=function(t){var n,a;try{n=t.getBBox()}catch{n=zx(t),a=1}return n&&(n.width||n.height)||a||(n=zx(t)),n&&!n.width&&!n.x&&!n.y?{x:+Bx(t,["x","cx","x1"])||0,y:+Bx(t,["y","cy","y1"])||0,width:0,height:0}:n},my=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&py(t))},ms=function(t,n){if(n){var a=t.style,s;n in Ha&&n!==ri&&(n=Je),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(Vm,"-$1").toLowerCase())):a.removeAttribute(n)}},Sr=function(t,n,a,s,l,c){var f=new ai(t._pt,n,a,0,1,c?cy:uy);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},Ix={deg:1,rad:1,turn:1},Kw={grid:1,flex:1},Rr=function o(t,n,a,s){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=os.style,p=Bw.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",S=s==="%",T,M,y,x;if(s===c||!l||Ix[s]||Ix[c])return l;if(c!=="px"&&!v&&(l=o(t,n,a,"px")),x=t.getCTM&&my(t),(S||c==="%")&&(Ha[n]||~n.indexOf("adius")))return T=x?t.getBBox()[p?"width":"height"]:t[_],un(S?l/T*g:l/100*T);if(f[p?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===xr||!M.appendChild)&&(M=xr.body),y=M._gsap,y&&S&&y.width&&p&&y.time===gi.time&&!y.uncache)return un(l/y.width*g);if(S&&(n==="height"||n==="width")){var N=t.style[n];t.style[n]=g+s,T=t[_],N?t.style[n]=N:ms(t,n)}else(S||c==="%")&&!Kw[Bi(M,"display")]&&(f.position=Bi(t,"position")),M===t&&(f.position="static"),M.appendChild(os),T=os[_],M.removeChild(os),f.position="absolute";return p&&S&&(y=us(M),y.time=gi.time,y.width=M[_]),un(v?T*l/g:T&&l?g/T*l:0)},Oa=function(t,n,a,s){var l;return Hm||dm(),n in oa&&n!=="transform"&&(n=oa[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ha[n]&&n!=="transform"?(l=au(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:cf(Bi(t,ri))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=uf[n]&&uf[n](t,n,a)||Bi(t,n)||US(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Rr(t,n,l,a)+a:l},Qw=function(t,n,a,s){if(!a||a==="none"){var l=No(n,t,1),c=l&&Bi(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Bi(t,"borderTopColor"))}var f=new ai(this._pt,t.style,n,0,1,sy),p=0,d=0,_,g,v,S,T,M,y,x,N,L,C,U;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Bi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=Bi(t,n)||s,M?t.style[n]=M:ms(t,n)),_=[a,s],KS(_),a=_[0],s=_[1],v=a.match(mo)||[],U=s.match(mo)||[],U.length){for(;g=mo.exec(s);)y=g[0],N=s.substring(p,g.index),T?T=(T+1)%5:(N.substr(-5)==="rgba("||N.substr(-5)==="hsla(")&&(T=1),y!==(M=v[d++]||"")&&(S=parseFloat(M)||0,C=M.substr((S+"").length),y.charAt(1)==="="&&(y=xo(S,y)+C),x=parseFloat(y),L=y.substr((x+"").length),p=mo.lastIndex-L.length,L||(L=L||Si.units[n]||C,p===s.length&&(s+=L,f.e+=L)),C!==L&&(S=Rr(t,n,M,L)||0),f._pt={_next:f._pt,p:N||d===1?N:",",s:S,c:x-S,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?cy:uy;return bS.test(s)&&(f.e=0),this._pt=f,f},Fx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jw=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=Fx[a]||a,n[1]=Fx[s]||s,n.join(" ")},$w=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Ha[f]&&(p=1,f=f==="transformOrigin"?ri:Je),ms(a,f);p&&(ms(a,Je),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",au(a,1),c.uncache=1,fy(s)))}},uf={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var c=t._pt=new ai(t._pt,n,a,0,0,$w);return c.u=s,c.pr=-10,c.tween=l,t._props.push(a),1}}},iu=[1,0,0,1,0,0],_y={},gy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Hx=function(t){var n=Bi(t,Je);return gy(n)?iu:n.substr(7).match(TS).map(un)},km=function(t,n){var a=t._gsap||us(t),s=t.style,l=Hx(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?iu:l):(l===iu&&!t.offsetParent&&t!==So&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,So.appendChild(t)),l=Hx(t),p?s.display=p:ms(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):So.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},pm=function(t,n,a,s,l,c){var f=t._gsap,p=l||km(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=p[0],T=p[1],M=p[2],y=p[3],x=p[4],N=p[5],L=n.split(" "),C=parseFloat(L[0])||0,U=parseFloat(L[1])||0,z,P,F,b;a?p!==iu&&(P=S*y-T*M)&&(F=C*(y/P)+U*(-M/P)+(M*N-y*x)/P,b=C*(-T/P)+U*(S/P)-(S*N-T*x)/P,C=F,U=b):(z=py(t),C=z.x+(~L[0].indexOf("%")?C/100*z.width:C),U=z.y+(~(L[1]||L[0]).indexOf("%")?U/100*z.height:U)),s||s!==!1&&f.smooth?(x=C-d,N=U-_,f.xOffset=g+(x*S+N*M)-x,f.yOffset=v+(x*T+N*y)-N):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=U,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ri]="0px 0px",c&&(Sr(c,f,"xOrigin",d,C),Sr(c,f,"yOrigin",_,U),Sr(c,f,"xOffset",g,f.xOffset),Sr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+U)},au=function(t,n){var a=t._gsap||new ty(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Bi(t,ri)||"0",_,g,v,S,T,M,y,x,N,L,C,U,z,P,F,b,D,G,Y,et,ct,at,I,X,q,xt,O,J,mt,yt,Rt,Mt;return _=g=v=M=y=x=N=L=C=0,S=T=1,a.svg=!!(t.getCTM&&my(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[Je]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[Je]!=="none"?p[Je]:"")),s.scale=s.rotate=s.translate="none"),P=km(t,a.svg),a.svg&&(a.uncache?(q=t.getBBox(),d=a.xOrigin-q.x+"px "+(a.yOrigin-q.y)+"px",X=""):X=!n&&t.getAttribute("data-svg-origin"),pm(t,X||d,!!X||a.originIsAbsolute,a.smooth!==!1,P)),U=a.xOrigin||0,z=a.yOrigin||0,P!==iu&&(G=P[0],Y=P[1],et=P[2],ct=P[3],_=at=P[4],g=I=P[5],P.length===6?(S=Math.sqrt(G*G+Y*Y),T=Math.sqrt(ct*ct+et*et),M=G||Y?ho(Y,G)*ns:0,N=et||ct?ho(et,ct)*ns+M:0,N&&(T*=Math.abs(Math.cos(N*yo))),a.svg&&(_-=U-(U*G+z*et),g-=z-(U*Y+z*ct))):(Mt=P[6],yt=P[7],O=P[8],J=P[9],mt=P[10],Rt=P[11],_=P[12],g=P[13],v=P[14],F=ho(Mt,mt),y=F*ns,F&&(b=Math.cos(-F),D=Math.sin(-F),X=at*b+O*D,q=I*b+J*D,xt=Mt*b+mt*D,O=at*-D+O*b,J=I*-D+J*b,mt=Mt*-D+mt*b,Rt=yt*-D+Rt*b,at=X,I=q,Mt=xt),F=ho(-et,mt),x=F*ns,F&&(b=Math.cos(-F),D=Math.sin(-F),X=G*b-O*D,q=Y*b-J*D,xt=et*b-mt*D,Rt=ct*D+Rt*b,G=X,Y=q,et=xt),F=ho(Y,G),M=F*ns,F&&(b=Math.cos(F),D=Math.sin(F),X=G*b+Y*D,q=at*b+I*D,Y=Y*b-G*D,I=I*b-at*D,G=X,at=q),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=un(Math.sqrt(G*G+Y*Y+et*et)),T=un(Math.sqrt(I*I+Mt*Mt)),F=ho(at,I),N=Math.abs(F)>2e-4?F*ns:0,C=Rt?1/(Rt<0?-Rt:Rt):0),a.svg&&(X=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!gy(Bi(t,Je)),X&&t.setAttribute("transform",X))),Math.abs(N)>90&&Math.abs(N)<270&&(l?(S*=-1,N+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,N+=N<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=un(S),a.scaleY=un(T),a.rotation=un(M)+f,a.rotationX=un(y)+f,a.rotationY=un(x)+f,a.skewX=N+f,a.skewY=L+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ri]=cf(d)),a.xOffset=a.yOffset=0,a.force3D=Si.force3D,a.renderTransform=a.svg?e2:dy?vy:t2,a.uncache=0,a},cf=function(t){return(t=t.split(" "))[0]+" "+t[1]},up=function(t,n,a){var s=Gn(n);return un(parseFloat(n)+parseFloat(Rr(t,"x",a+"px",s)))+s},t2=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,vy(t,n)},Jr="0deg",Il="0px",$r=") ",vy=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,S=a.skewY,T=a.scaleX,M=a.scaleY,y=a.transformPerspective,x=a.force3D,N=a.target,L=a.zOrigin,C="",U=x==="auto"&&t&&t!==1||x===!0;if(L&&(g!==Jr||_!==Jr)){var z=parseFloat(_)*yo,P=Math.sin(z),F=Math.cos(z),b;z=parseFloat(g)*yo,b=Math.cos(z),c=up(N,c,P*b*-L),f=up(N,f,-Math.sin(z)*-L),p=up(N,p,F*b*-L+L)}y!==Il&&(C+="perspective("+y+$r),(s||l)&&(C+="translate("+s+"%, "+l+"%) "),(U||c!==Il||f!==Il||p!==Il)&&(C+=p!==Il||U?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+$r),d!==Jr&&(C+="rotate("+d+$r),_!==Jr&&(C+="rotateY("+_+$r),g!==Jr&&(C+="rotateX("+g+$r),(v!==Jr||S!==Jr)&&(C+="skew("+v+", "+S+$r),(T!==1||M!==1)&&(C+="scale("+T+", "+M+$r),N.style[Je]=C||"translate(0, 0)"},e2=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,S=a.target,T=a.xOrigin,M=a.yOrigin,y=a.xOffset,x=a.yOffset,N=a.forceCSS,L=parseFloat(c),C=parseFloat(f),U,z,P,F,b;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=yo,d*=yo,U=Math.cos(p)*g,z=Math.sin(p)*g,P=Math.sin(p-d)*-v,F=Math.cos(p-d)*v,d&&(_*=yo,b=Math.tan(d-_),b=Math.sqrt(1+b*b),P*=b,F*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),U*=b,z*=b)),U=un(U),z=un(z),P=un(P),F=un(F)):(U=g,F=v,z=P=0),(L&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(L=Rr(S,"x",c,"px"),C=Rr(S,"y",f,"px")),(T||M||y||x)&&(L=un(L+T-(T*U+M*P)+y),C=un(C+M-(T*z+M*F)+x)),(s||l)&&(b=S.getBBox(),L=un(L+s/100*b.width),C=un(C+l/100*b.height)),b="matrix("+U+","+z+","+P+","+F+","+L+","+C+")",S.setAttribute("transform",b),N&&(S.style[Je]=b)},n2=function(t,n,a,s,l){var c=360,f=Cn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?ns:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*Ox)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*Ox)%c-~~(d/c)*c)),t._pt=v=new ai(t._pt,n,a,s,d,Fw),v.e=_,v.u="deg",t._props.push(a),v},Gx=function(t,n){for(var a in n)t[a]=n[a];return t},i2=function(t,n,a){var s=Gx({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,S,T;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[Je]=n,f=au(a,1),ms(a,Je),a.setAttribute("transform",d)):(d=getComputedStyle(a)[Je],c[Je]=n,f=au(a,1),c[Je]=d);for(p in Ha)d=s[p],_=f[p],d!==_&&l.indexOf(p)<0&&(S=Gn(d),T=Gn(_),g=S!==T?Rr(a,p,d,T):parseFloat(d),v=parseFloat(_),t._pt=new ai(t._pt,f,p,g,v-g,fm),t._pt.u=T||0,t._props.push(p));Gx(f,s)};ii("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",c=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});uf[t>1?"border"+o:o]=function(f,p,d,_,g){var v,S;if(arguments.length<4)return v=c.map(function(T){return Oa(f,T,d)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(_+"").split(" "),S={},c.forEach(function(T,M){return S[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,S,g)}});var xy={name:"css",register:dm,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,S,T,M,y,x,N,L,C,U,z,P,F;Hm||dm(),this.styles=this.styles||hy(t),F=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(_i[M]&&ey(M,n,a,s,t,l)))){if(S=typeof _,T=uf[M],S==="function"&&(_=_.call(a,s,t,l),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=tu(_)),T)T(this,t,M,_,a)&&(P=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Tr.lastIndex=0,Tr.test(d)||(y=Gn(d),x=Gn(_)),x?y!==x&&(d=Rr(t,M,d,x)+x):y&&(_+=y),this.add(f,"setProperty",d,_,s,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(S!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,s,t,l):p[M],Cn(d)&&~d.indexOf("random(")&&(d=tu(d)),Gn(d+"")||d==="auto"||(d+=Si.units[M]||Gn(Oa(t,M))||""),(d+"").charAt(1)==="="&&(d=Oa(t,M))):d=Oa(t,M),v=parseFloat(d),N=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),N&&(_=_.substr(2)),g=parseFloat(_),M in oa&&(M==="autoAlpha"&&(v===1&&Oa(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),Sr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=oa[M],~M.indexOf(",")&&(M=M.split(",")[0]))),L=M in Ha,L){if(this.styles.save(M),S==="string"&&_.substring(0,6)==="var(--"&&(_=Bi(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),C||(U=t._gsap,U.renderTransform&&!n.parseTransform||au(t,n.parseTransform),z=n.smoothOrigin!==!1&&U.smooth,C=this._pt=new ai(this._pt,f,Je,0,1,U.renderTransform,U,0,-1),C.dep=1),M==="scale")this._pt=new ai(this._pt,U,"scaleY",U.scaleY,(N?xo(U.scaleY,N+g):g)-U.scaleY||0,fm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(ri,0,f[ri]),_=Jw(_),U.svg?pm(t,_,0,z,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==U.zOrigin&&Sr(this,U,"zOrigin",U.zOrigin,x),Sr(this,f,M,cf(d),cf(_)));continue}else if(M==="svgOrigin"){pm(t,_,1,z,0,this);continue}else if(M in _y){n2(this,U,M,v,N?xo(v,N+_):_);continue}else if(M==="smoothOrigin"){Sr(this,U,"smooth",U.smooth,_);continue}else if(M==="force3D"){U[M]=_;continue}else if(M==="transform"){i2(this,_,t);continue}}else M in f||(M=No(M)||M);if(L||(g||g===0)&&(v||v===0)&&!Iw.test(_)&&M in f)y=(d+"").substr((v+"").length),g||(g=0),x=Gn(_)||(M in Si.units?Si.units[M]:y),y!==x&&(v=Rr(t,M,d,x)),this._pt=new ai(this._pt,L?U:f,M,v,(N?xo(v,N+g):g)-v,!L&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?Gw:fm),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=Hw);else if(M in f)Qw.call(this,t,M,d,N?N+_:_);else if(M in t)this.add(t,M,d||t[M],N?N+_:_,s,l);else if(M!=="parseTransform"){Dm(M,_);continue}L||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,d||t[M])),c.push(M)}}P&&oy(this)},render:function(t,n){if(n.tween._time||!Gm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Oa,aliases:oa,getSetter:function(t,n,a){var s=oa[n];return s&&s.indexOf(",")<0&&(n=s),n in Ha&&n!==ri&&(t._gsap.x||Oa(t,"x"))?a&&Nx===a?n==="scale"?Ww:Xw:(Nx=a||{})&&(n==="scale"?qw:Yw):t.style&&!Rm(t.style[n])?Vw:~n.indexOf("-")?kw:Im(t,n)},core:{_removeProperty:ms,_getMatrix:km}};si.utils.checkPrefix=No;si.core.getStyleSaver=hy;(function(o,t,n,a){var s=ii(o+","+t+","+n,function(l){Ha[l]=1});ii(t,function(l){Si.units[l]="deg",_y[l]=1}),oa[s[13]]=o+","+t,ii(a,function(l){var c=l.split(":");oa[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Si.units[o]="px"});si.registerPlugin(xy);var Qc=si.registerPlugin(xy)||si;Qc.core.Tween;function a2(){const o=ql.useRef(null);return ql.useEffect(()=>{const t=o.current,n=t.clientWidth,a=t.clientHeight,s=new YT,l=new Ni(45,n/a,.1,1e3);l.position.z=5;const c=new kC({antialias:!0,alpha:!0});c.setSize(n,a),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.setClearColor(0,0),t.appendChild(c.domElement);const f=new Fl;s.add(f);const p=new Ro(3,1,1,1),d=new nf({color:0,transparent:!0,opacity:.9}),_=new Oi(p,d);f.add(_);const g=document.createElement("canvas"),v=g.getContext("2d");g.width=512,g.height=128,v.fillStyle="transparent",v.fillRect(0,0,g.width,g.height),v.font="bold 80px Arial, Helvetica, sans-serif",v.fillStyle="white",v.textAlign="center",v.textBaseline="middle",v.fillText("OYXR",g.width/2,g.height/2);const S=new QT(g);S.needsUpdate=!0;const T=new nf({map:S,transparent:!0,opacity:1}),M=new Ro(3,1,1,1),y=new Oi(M,T);y.position.z=.001,f.add(y);const x=new zo(.1,.1,.1),N=new JT({transparent:!0,opacity:0});new Oi(x,N);const L=new i1(16777215,1);L.position.set(5,5,5),s.add(L);const C=new a1(4210752,.6);s.add(C);const U=50;let z=0,P=0,F=0,b=0;const D=new ca,G=new Float32Array(U*3),Y=new Float32Array(U);for(let Mt=0;Mt<U;Mt++)G[Mt*3]=0,G[Mt*3+1]=0,G[Mt*3+2]=0,Y[Mt]=(U-Mt)/U;D.setAttribute("position",new xi(G,3)),D.setAttribute("opacity",new xi(Y,1));const et=new Ia({uniforms:{time:{value:0},color:{value:new Ee(8956671)}},vertexShader:`
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
      `,transparent:!0,blending:Jc}),ct=new Kv(D,et);s.add(ct);const at=800,I=new Float32Array(at*3);for(let Mt=0;Mt<at;Mt++)I[Mt*3]=(Math.random()-.5)*20,I[Mt*3+1]=(Math.random()-.5)*20,I[Mt*3+2]=(Math.random()-.5)*20;const X=new ca;X.setAttribute("position",new xi(I,3));const q=new fS({size:.04,transparent:!0,opacity:.4,color:8956671,blending:Jc}),xt=new Kv(X,q);s.add(xt);const O=new s1;let J;function mt(){const Mt=O.getElapsedTime();et.uniforms.time.value=Mt,z+=(F-z)*.1,P+=(b-P)*.1;const K=D.attributes.position.array;for(let St=U-1;St>0;St--)K[St*3]=K[(St-1)*3],K[St*3+1]=K[(St-1)*3+1],K[St*3+2]=K[(St-1)*3+2];K[0]=z*5,K[1]=-P*5,K[2]=Math.sin(Mt*2)*.5,D.attributes.position.needsUpdate=!0,f.rotation.x+=.003,f.rotation.y+=.005,f.rotation.z+=.002;const dt=X.attributes.position.array;for(let St=0;St<at;St++)dt[St*3+1]+=Math.sin(Mt+St*.1)*.001,dt[St*3]+=Math.cos(Mt*.5+St*.05)*5e-4,dt[St*3+1]>10&&(dt[St*3+1]=-10),dt[St*3]>10&&(dt[St*3]=-10);X.attributes.position.needsUpdate=!0,c.render(s,l),J=requestAnimationFrame(mt)}Qc.from(f.scale,{duration:2,x:.1,y:.1,z:.1,ease:"power3.out"}),Qc.from(f.rotation,{duration:3,x:Math.PI*2,ease:"power2.out"}),mt();function yt(Mt){const K=t.getBoundingClientRect();F=(Mt.clientX-K.left)/K.width-.5,b=(Mt.clientY-K.top)/K.height-.5,Qc.to(l.position,{x:F*1,y:-b*1,duration:1,ease:"power2.out"}),l.lookAt(s.position)}function Rt(){const Mt=t.clientWidth,K=t.clientHeight;c.setSize(Mt,K),l.aspect=Mt/K,l.updateProjectionMatrix()}return t.addEventListener("pointermove",yt),window.addEventListener("resize",Rt),()=>{cancelAnimationFrame(J),t.removeEventListener("pointermove",yt),window.removeEventListener("resize",Rt),t&&c.domElement&&t.removeChild(c.domElement),geometry.dispose(),material.dispose(),X.dispose(),q.dispose(),D.dispose(),et.dispose(),c.dispose()}},[]),Jt.jsx("div",{ref:o,style:{width:"100%",height:"100vh",position:"fixed",top:0,left:0,zIndex:0,overflow:"hidden"}})}const r2=[{id:1,title:"Virtual Soul",description:"An immersive digital exploration of consciousness and identity in virtual spaces. This project investigates the boundaries between digital and physical existence through interactive media.",image:"/Personal-Website/images/project1.jpg",pdfUrl:"/Personal-Website/images/1-Virtual Soul.pdf",technologies:["Interactive Media","Virtual Reality","Digital Art","Conceptual Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"Nether Portal",description:"A gateway between dimensions - exploring liminal spaces and transitional experiences. This project creates bridges between different states of being and perception.",image:"/Personal-Website/images/project2.jpg",pdfUrl:"/Personal-Website/images/2-Nether Portal.pdf",technologies:["Dimensional Design","Interactive Installation","Spatial Computing","Experience Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"Prayer of Wind and Bloom",description:"A poetic meditation on nature's cycles and renewal. This work celebrates the intersection of technology and organic growth, finding harmony in digital and natural systems.",image:"/Personal-Website/images/project3.jpg",pdfUrl:"/Personal-Website/images/3-Prayer of Wind and Bloom.pdf",technologies:["Generative Art","Nature Simulation","Poetic Computing","Bio-inspired Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:4,title:"Unnatural Chronologies",description:"An exploration of time, memory, and non-linear narratives. This project challenges conventional temporal structures and creates new ways of experiencing past, present, and future.",image:"/Personal-Website/images/project4.jpg",pdfUrl:"/Personal-Website/images/4-Unnatural Chronologies.pdf",technologies:["Temporal Design","Narrative Systems","Memory Interfaces","Experimental Media"],liveUrl:"#",githubUrl:"#",featured:!0}];function s2(){const[o,t]=ql.useState([]);return ql.useEffect(()=>{t(r2.filter(n=>n.featured))},[]),Jt.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"white"},children:[Jt.jsxs("header",{style:{position:"fixed",zIndex:10,top:40,left:40,fontSize:"18px"},children:[Jt.jsx("h1",{style:{margin:0,fontSize:"2.5rem",fontWeight:"300",letterSpacing:"2px"},children:"Your Name"}),Jt.jsx("p",{style:{margin:"10px 0",fontSize:"1.2rem",opacity:.8,letterSpacing:"1px"},children:"Creative Developer & Designer"}),Jt.jsx("p",{style:{margin:0,fontSize:"1rem",opacity:.6,maxWidth:"400px",lineHeight:"1.5"},children:"An Easter egg hunter in reality, raiding Earth-Online for creative treasures."})]}),Jt.jsx("nav",{style:{position:"fixed",zIndex:10,top:40,right:40,fontSize:"1rem"},children:Jt.jsxs("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",gap:"30px"},children:[Jt.jsx("li",{children:Jt.jsx("a",{href:"#work",style:{color:"white",textDecoration:"none",opacity:.8},children:"Work"})}),Jt.jsx("li",{children:Jt.jsx("a",{href:"#about",style:{color:"white",textDecoration:"none",opacity:.8},children:"About"})}),Jt.jsx("li",{children:Jt.jsx("a",{href:"#contact",style:{color:"white",textDecoration:"none",opacity:.8},children:"Contact"})})]})}),Jt.jsxs("main",{style:{minHeight:"100vh",width:"100vw",position:"relative",overflow:"hidden"},children:[Jt.jsx(a2,{}),Jt.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",zIndex:5,pointerEvents:"none"},children:[Jt.jsx("h2",{style:{fontSize:"3rem",fontWeight:"100",letterSpacing:"3px",margin:"0 0 20px 0",opacity:.9},children:"PORTFOLIO"}),Jt.jsx("p",{style:{fontSize:"1.2rem",opacity:.7,letterSpacing:"2px"},children:"Scroll to explore creative treasures"})]})]}),Jt.jsx("section",{id:"about",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(22,33,62,0.95) 100%)",position:"relative",zIndex:1},children:Jt.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",textAlign:"center"},children:[Jt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"About Me"}),Jt.jsx("p",{style:{fontSize:"1.2rem",lineHeight:"1.8",opacity:.8,marginBottom:"30px"},children:"I'm a creative developer who sees the digital world as an endless playground. Like an easter egg hunter exploring every corner of reality, I search for hidden gems and creative possibilities in the intersection of technology and art."}),Jt.jsx("p",{style:{fontSize:"1.1rem",lineHeight:"1.7",opacity:.7},children:"My mission is to craft immersive digital experiences that surprise, delight, and inspire. Every project is a treasure hunt for that perfect blend of functionality and magic."})]})}),Jt.jsx("section",{id:"work",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(22,33,62,0.95) 0%, rgba(26,26,46,0.95) 50%, rgba(10,10,10,0.95) 100%)",position:"relative",zIndex:1},children:Jt.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[Jt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"60px",letterSpacing:"2px",textAlign:"center"},children:"Featured Work"}),Jt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"40px"},children:o.map(n=>Jt.jsxs("div",{style:{background:"rgba(255,255,255,0.05)",padding:"30px",borderRadius:"15px",border:"1px solid rgba(255,255,255,0.1)",transition:"all 0.3s ease",cursor:"pointer",backdropFilter:"blur(10px)"},onMouseEnter:a=>{a.target.style.transform="translateY(-10px)",a.target.style.boxShadow="0 20px 40px rgba(136,170,255,0.2)"},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow="none"},children:[Jt.jsx("div",{style:{width:"100%",height:"200px",background:"linear-gradient(135deg, #88aaff, #0066cc)",borderRadius:"10px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",opacity:.7},children:"Project Image"}),Jt.jsx("h3",{style:{fontSize:"1.5rem",marginBottom:"15px",color:"#88aaff"},children:n.title}),Jt.jsx("p",{style:{opacity:.7,lineHeight:"1.6",marginBottom:"20px"},children:n.description}),Jt.jsx("div",{style:{marginBottom:"20px"},children:Jt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:n.technologies.map((a,s)=>Jt.jsx("span",{style:{background:"rgba(136,170,255,0.2)",padding:"4px 12px",borderRadius:"20px",fontSize:"0.8rem",border:"1px solid rgba(136,170,255,0.3)"},children:a},s))})}),Jt.jsxs("div",{style:{display:"flex",gap:"15px"},children:[Jt.jsx("a",{href:n.pdfUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid #88aaff",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.background="#88aaff",a.target.style.color="#000"},onMouseLeave:a=>{a.target.style.background="transparent",a.target.style.color="#88aaff"},children:"View PDF"}),n.liveUrl!=="#"&&Jt.jsx("a",{href:n.liveUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"#88aaff",textDecoration:"none",fontSize:"0.9rem",padding:"8px 16px",border:"1px solid rgba(136,170,255,0.5)",borderRadius:"20px",transition:"all 0.3s ease"},onMouseEnter:a=>{a.target.style.borderColor="#88aaff",a.target.style.background="rgba(136,170,255,0.1)"},onMouseLeave:a=>{a.target.style.borderColor="rgba(136,170,255,0.5)",a.target.style.background="transparent"},children:"Live Demo"})]})]},n.id))}),Jt.jsx("div",{style:{textAlign:"center",marginTop:"60px"},children:Jt.jsx("button",{style:{background:"transparent",border:"2px solid #88aaff",color:"#88aaff",padding:"12px 30px",borderRadius:"30px",fontSize:"1rem",cursor:"pointer",transition:"all 0.3s ease",letterSpacing:"1px"},onMouseEnter:n=>{n.target.style.background="#88aaff",n.target.style.color="#000",n.target.style.transform="scale(1.05)"},onMouseLeave:n=>{n.target.style.background="transparent",n.target.style.color="#88aaff",n.target.style.transform="scale(1)"},children:"View All Projects"})})]})}),Jt.jsx("section",{id:"contact",style:{minHeight:"100vh",padding:"100px 40px",background:"linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.95) 100%)",position:"relative",zIndex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:Jt.jsxs("div",{style:{textAlign:"center"},children:[Jt.jsx("h2",{style:{fontSize:"2.5rem",marginBottom:"40px",letterSpacing:"2px"},children:"Let's Create Together"}),Jt.jsx("p",{style:{fontSize:"1.2rem",opacity:.8,marginBottom:"40px"},children:"Ready to embark on a creative treasure hunt?"}),Jt.jsxs("div",{style:{display:"flex",gap:"30px",justifyContent:"center"},children:[Jt.jsx("a",{href:"mailto:your@email.com",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"Email"}),Jt.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"LinkedIn"}),Jt.jsx("a",{href:"#",style:{color:"#88aaff",textDecoration:"none",fontSize:"1.1rem",opacity:.8,transition:"opacity 0.3s ease"},children:"GitHub"})]})]})}),Jt.jsx("footer",{style:{padding:"40px",textAlign:"center",background:"rgba(10,10,10,0.9)",borderTop:"1px solid rgba(255,255,255,0.1)",position:"relative",zIndex:1},children:Jt.jsx("p",{style:{opacity:.6,margin:0},children:"© 2025 Your Name. All treasures reserved."})})]})}LE.createRoot(document.getElementById("root")).render(Jt.jsx(ql.StrictMode,{children:Jt.jsx(s2,{})}));
