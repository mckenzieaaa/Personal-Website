(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var wf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function BS(){if(Xg)return vo;Xg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return vo.Fragment=t,vo.jsx=i,vo.jsxs=i,vo}var Wg;function zS(){return Wg||(Wg=1,wf.exports=BS()),wf.exports}var Kn=zS(),Df={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function IS(){if(qg)return oe;qg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function M(U,J,vt){this.props=U,this.context=J,this.refs=R,this.updater=vt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=M.prototype;function z(U,J,vt){this.props=U,this.context=J,this.refs=R,this.updater=vt||y}var O=z.prototype=new v;O.constructor=z,b(O,M.prototype),O.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function F(U,J,vt,xt,Dt,Ft){return vt=Ft.ref,{$$typeof:o,type:U,key:J,ref:vt!==void 0?vt:null,props:Ft}}function j(U,J){return F(U.type,J,void 0,void 0,void 0,U.props)}function w(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function C(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return J[vt]})}var V=/\/+/g;function nt(U,J){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):J.toString(36)}function ut(){}function _t(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(ut,ut):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,J,vt,xt,Dt){var Ft=typeof U;(Ft==="undefined"||Ft==="boolean")&&(U=null);var tt=!1;if(U===null)tt=!0;else switch(Ft){case"bigint":case"string":case"number":tt=!0;break;case"object":switch(U.$$typeof){case o:case t:tt=!0;break;case g:return tt=U._init,lt(tt(U._payload),J,vt,xt,Dt)}}if(tt)return Dt=Dt(U),tt=xt===""?"."+nt(U,0):xt,D(Dt)?(vt="",tt!=null&&(vt=tt.replace(V,"$&/")+"/"),lt(Dt,J,vt,"",function(jt){return jt})):Dt!=null&&(w(Dt)&&(Dt=j(Dt,vt+(Dt.key==null||U&&U.key===Dt.key?"":(""+Dt.key).replace(V,"$&/")+"/")+tt)),J.push(Dt)),1;tt=0;var mt=xt===""?".":xt+":";if(D(U))for(var bt=0;bt<U.length;bt++)xt=U[bt],Ft=mt+nt(xt,bt),tt+=lt(xt,J,vt,Ft,Dt);else if(bt=S(U),typeof bt=="function")for(U=bt.call(U),bt=0;!(xt=U.next()).done;)xt=xt.value,Ft=mt+nt(xt,bt++),tt+=lt(xt,J,vt,Ft,Dt);else if(Ft==="object"){if(typeof U.then=="function")return lt(_t(U),J,vt,xt,Dt);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return tt}function P(U,J,vt){if(U==null)return U;var xt=[],Dt=0;return lt(U,xt,"","",function(Ft){return J.call(vt,Ft,Dt++)}),xt}function Z(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function St(){}return oe.Children={map:P,forEach:function(U,J,vt){P(U,function(){J.apply(this,arguments)},vt)},count:function(U){var J=0;return P(U,function(){J++}),J},toArray:function(U){return P(U,function(J){return J})||[]},only:function(U){if(!w(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=M,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=z,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,J,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var xt=b({},U.props),Dt=U.key,Ft=void 0;if(J!=null)for(tt in J.ref!==void 0&&(Ft=void 0),J.key!==void 0&&(Dt=""+J.key),J)!H.call(J,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&J.ref===void 0||(xt[tt]=J[tt]);var tt=arguments.length-2;if(tt===1)xt.children=vt;else if(1<tt){for(var mt=Array(tt),bt=0;bt<tt;bt++)mt[bt]=arguments[bt+2];xt.children=mt}return F(U.type,Dt,void 0,void 0,Ft,xt)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},oe.createElement=function(U,J,vt){var xt,Dt={},Ft=null;if(J!=null)for(xt in J.key!==void 0&&(Ft=""+J.key),J)H.call(J,xt)&&xt!=="key"&&xt!=="__self"&&xt!=="__source"&&(Dt[xt]=J[xt]);var tt=arguments.length-2;if(tt===1)Dt.children=vt;else if(1<tt){for(var mt=Array(tt),bt=0;bt<tt;bt++)mt[bt]=arguments[bt+2];Dt.children=mt}if(U&&U.defaultProps)for(xt in tt=U.defaultProps,tt)Dt[xt]===void 0&&(Dt[xt]=tt[xt]);return F(U,Ft,void 0,void 0,null,Dt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=w,oe.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Z}},oe.memo=function(U,J){return{$$typeof:p,type:U,compare:J===void 0?null:J}},oe.startTransition=function(U){var J=I.T,vt={};I.T=vt;try{var xt=U(),Dt=I.S;Dt!==null&&Dt(vt,xt),typeof xt=="object"&&xt!==null&&typeof xt.then=="function"&&xt.then(St,q)}catch(Ft){q(Ft)}finally{I.T=J}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(U){return I.H.use(U)},oe.useActionState=function(U,J,vt){return I.H.useActionState(U,J,vt)},oe.useCallback=function(U,J){return I.H.useCallback(U,J)},oe.useContext=function(U){return I.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,J){return I.H.useDeferredValue(U,J)},oe.useEffect=function(U,J,vt){var xt=I.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xt.useEffect(U,J)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(U,J,vt){return I.H.useImperativeHandle(U,J,vt)},oe.useInsertionEffect=function(U,J){return I.H.useInsertionEffect(U,J)},oe.useLayoutEffect=function(U,J){return I.H.useLayoutEffect(U,J)},oe.useMemo=function(U,J){return I.H.useMemo(U,J)},oe.useOptimistic=function(U,J){return I.H.useOptimistic(U,J)},oe.useReducer=function(U,J,vt){return I.H.useReducer(U,J,vt)},oe.useRef=function(U){return I.H.useRef(U)},oe.useState=function(U){return I.H.useState(U)},oe.useSyncExternalStore=function(U,J,vt){return I.H.useSyncExternalStore(U,J,vt)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.1.1",oe}var Yg;function rd(){return Yg||(Yg=1,Df.exports=IS()),Df.exports}var ea=rd(),Uf={exports:{}},So={},Lf={exports:{}},Nf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function FS(){return Zg||(Zg=1,(function(o){function t(P,Z){var q=P.length;P.push(Z);t:for(;0<q;){var St=q-1>>>1,U=P[St];if(0<l(U,Z))P[St]=Z,P[q]=U,q=St;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Z=P[0],q=P.pop();if(q!==Z){P[0]=q;t:for(var St=0,U=P.length,J=U>>>1;St<J;){var vt=2*(St+1)-1,xt=P[vt],Dt=vt+1,Ft=P[Dt];if(0>l(xt,q))Dt<U&&0>l(Ft,xt)?(P[St]=Ft,P[Dt]=q,St=Dt):(P[St]=xt,P[vt]=q,St=vt);else if(Dt<U&&0>l(Ft,q))P[St]=Ft,P[Dt]=q,St=Dt;else break t}}return Z}function l(P,Z){var q=P.sortIndex-Z.sortIndex;return q!==0?q:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,S=3,y=!1,b=!1,R=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=P)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function I(P){if(R=!1,D(P),!b)if(i(m)!==null)b=!0,H||(H=!0,nt());else{var Z=i(p);Z!==null&&lt(I,Z.startTime-P)}}var H=!1,F=-1,j=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<j)}function V(){if(M=!1,H){var P=o.unstable_now();w=P;var Z=!0;try{t:{b=!1,R&&(R=!1,z(F),F=-1),y=!0;var q=S;try{e:{for(D(P),_=i(m);_!==null&&!(_.expirationTime>P&&C());){var St=_.callback;if(typeof St=="function"){_.callback=null,S=_.priorityLevel;var U=St(_.expirationTime<=P);if(P=o.unstable_now(),typeof U=="function"){_.callback=U,D(P),Z=!0;break e}_===i(m)&&r(m),D(P)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var J=i(p);J!==null&&lt(I,J.startTime-P),Z=!1}}break t}finally{_=null,S=q,y=!1}Z=void 0}}finally{Z?nt():H=!1}}}var nt;if(typeof O=="function")nt=function(){O(V)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,_t=ut.port2;ut.port1.onmessage=V,nt=function(){_t.postMessage(null)}}else nt=function(){v(V,0)};function lt(P,Z){F=v(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var q=S;S=Z;try{return P()}finally{S=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=S;S=P;try{return Z()}finally{S=q}},o.unstable_scheduleCallback=function(P,Z,q){var St=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?St+q:St):q=St,P){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,P={id:g++,callback:Z,priorityLevel:P,startTime:q,expirationTime:U,sortIndex:-1},q>St?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(R?(z(F),F=-1):R=!0,lt(I,q-St))):(P.sortIndex=U,t(m,P),b||y||(b=!0,H||(H=!0,nt()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Z=S;return function(){var q=S;S=Z;try{return P.apply(this,arguments)}finally{S=q}}}})(Nf)),Nf}var jg;function HS(){return jg||(jg=1,Lf.exports=FS()),Lf.exports}var Of={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function GS(){if(Kg)return bn;Kg=1;var o=rd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.1",bn}var Qg;function VS(){if(Qg)return Of.exports;Qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Of.exports=GS(),Of.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function kS(){if(Jg)return So;Jg=1;var o=HS(),t=rd(),i=VS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,s=f;break}if(T===s){x=!0,s=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,s=u;break}if(T===s){x=!0,s=f,a=u;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ut=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ut?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case M:return"Profiler";case R:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case O:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:_t(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return _t(e(n))}catch{}}return null}var lt=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},St=[],U=-1;function J(e){return{current:e}}function vt(e){0>U||(e.current=St[U],St[U]=null,U--)}function xt(e,n){U++,St[U]=e.current,e.current=n}var Dt=J(null),Ft=J(null),tt=J(null),mt=J(null);function bt(e,n){switch(xt(tt,n),xt(Ft,e),xt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=vg(n),e=Sg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Dt),xt(Dt,e)}function jt(){vt(Dt),vt(Ft),vt(tt)}function Wt(e){e.memoizedState!==null&&xt(mt,e);var n=Dt.current,a=Sg(n,e.type);n!==a&&(xt(Ft,e),xt(Dt,a))}function he(e){Ft.current===e&&(vt(Dt),vt(Ft)),mt.current===e&&(vt(mt),ho._currentValue=q)}var tn=Object.prototype.hasOwnProperty,B=o.unstable_scheduleCallback,De=o.unstable_cancelCallback,ae=o.unstable_shouldYield,ee=o.unstable_requestPaint,Ot=o.unstable_now,Ie=o.unstable_getCurrentPriorityLevel,Gt=o.unstable_ImmediatePriority,re=o.unstable_UserBlockingPriority,ke=o.unstable_NormalPriority,Xe=o.unstable_LowPriority,L=o.unstable_IdlePriority,E=o.log,$=o.unstable_setDisableYieldValue,ct=null,dt=null;function ot(e){if(typeof E=="function"&&$(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ct,e)}catch{}}var Pt=Math.clz32?Math.clz32:qt,At=Math.log,kt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(At(e)/kt|0)|0}var Mt=256,Ut=4194304;function Zt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Zt(s):(x&=T,x!==0?u=Zt(x):a||(a=T&~e,a!==0&&(u=Zt(a))))):(T=s&~f,T!==0?u=Zt(T):x!==0?u=Zt(x):a||(a=s&~e,a!==0&&(u=Zt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Tt(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yt(e,n,a,s,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,N=e.expirationTimes,Q=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Pt(a),pt=1<<ft;T[ft]=0,N[ft]=-1;var et=Q[ft];if(et!==null)for(Q[ft]=null,ft=0;ft<et.length;ft++){var it=et[ft];it!==null&&(it.lane&=-536870913)}a&=~pt}s!==0&&gt(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Pt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function Ht(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Pt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Re(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xe(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Ig(e.type))}function oi(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var sn=Math.random().toString(36).slice(2),on="__reactFiber$"+sn,qe="__reactProps$"+sn,Si="__reactContainer$"+sn,gr="__reactEvents$"+sn,zo="__reactListeners$"+sn,_r="__reactHandles$"+sn,Ts="__reactResources$"+sn,xi="__reactMarker$"+sn;function vr(e){delete e[on],delete e[qe],delete e[gr],delete e[zo],delete e[_r]}function Li(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Si]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Eg(e);e!==null;){if(a=e[on])return a;e=Eg(e)}return n}e=a,a=e.parentNode}return null}function aa(e){if(e=e[on]||e[Si]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ia(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ra(e){var n=e[Ts];return n||(n=e[Ts]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function en(e){e[xi]=!0}var Io=new Set,Fo={};function A(e,n){X(e,n),X(e+"Capture",n)}function X(e,n){for(Fo[e]=n,e=0;e<n.length;e++)Io.add(n[e])}var rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},Y={};function Et(e){return tn.call(Y,e)?!0:tn.call(st,e)?!1:rt.test(e)?Y[e]=!0:(st[e]=!0,!1)}function wt(e,n,a){if(Et(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Qt,$t;function Xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var ue=!1;function Me(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(it){var et=it}Reflect.construct(e,[],pt)}else{try{pt.call()}catch(it){et=it}e.call(pt.prototype)}}else{try{throw Error()}catch(it){et=it}(pt=e())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(it){if(it&&et&&typeof it.stack=="string")return[it.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var N=x.split(`
`),Q=T.split(`
`);for(u=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===N.length||u===Q.length)for(s=N.length-1,u=Q.length-1;1<=s&&0<=u&&N[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(N[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||N[s]!==Q[u]){var ft=`
`+N[s].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=s&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function Ge(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Xt("Activity");default:return""}}function Ue(e){try{var n="";do n+=Ge(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ce(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function me(e){e._valueTracker||(e._valueTracker=He(e))}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Kt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cn=/[\n"\\]/g;function hn(e){return e.replace(Cn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,a,s,u,f,x,T){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ce(n)):e.value!==""+ce(n)&&(e.value=""+ce(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?En(e,x,ce(n)):a!=null?En(e,x,ce(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ce(T):e.removeAttribute("name")}function wn(e,n,a,s,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ce(a):"",n=n!=null?""+ce(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function En(e,n,a){n==="number"&&li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ye(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ce(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function _n(e,n,a){if(n!=null&&(n=""+ce(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ce(a):""}function Sr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(lt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ce(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Nn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Nv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Nv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Sd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&vd(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&vd(e,f,n[f])}function Ru(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(e){return Pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Cu=null;function wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Mr=null;function xd(e){var n=aa(e);if(n&&(e=n.stateNode)){var a=e[qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[qe]||null;if(!u)throw Error(r(90));Be(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&yn(s)}break t;case"textarea":_n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ye(e,!!a.multiple,n,!1)}}}var Du=!1;function Md(e,n,a){if(Du)return e(n,a);Du=!0;try{var s=e(n);return s}finally{if(Du=!1,(xr!==null||Mr!==null)&&(bl(),xr&&(n=xr,e=Mr,Mr=xr=null,xd(n),e)))for(n=0;n<e.length;n++)xd(e[n])}}function bs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[qe]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Ni)try{var As={};Object.defineProperty(As,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Uu=!1}var sa=null,Lu=null,Go=null;function yd(){if(Go)return Go;var e,n=Lu,a=n.length,s,u="value"in sa?sa.value:sa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===u[f-s];s++);return Go=u.slice(e,1<s?1-s:void 0)}function Vo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function Ed(){return!1}function On(e){function n(a,s,u,f,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:Ed,this.isPropagationStopped=Ed,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=On(Fa),Rs=g({},Fa,{view:0,detail:0}),Bv=On(Rs),Nu,Ou,Cs,Wo=g({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cs&&(Cs&&e.type==="mousemove"?(Nu=e.screenX-Cs.screenX,Ou=e.screenY-Cs.screenY):Ou=Nu=0,Cs=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Ou}}),Td=On(Wo),zv=g({},Wo,{dataTransfer:0}),Iv=On(zv),Fv=g({},Rs,{relatedTarget:0}),Pu=On(Fv),Hv=g({},Fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=On(Hv),Vv=g({},Fa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kv=On(Vv),Xv=g({},Fa,{data:0}),bd=On(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yv[e])?!!n[e]:!1}function Bu(){return Zv}var jv=g({},Rs,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=On(jv),Qv=g({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=On(Qv),Jv=g({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),$v=On(Jv),t0=g({},Fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=On(t0),n0=g({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=On(n0),a0=g({},Fa,{newState:0,oldState:0}),r0=On(a0),s0=[9,13,27,32],zu=Ni&&"CompositionEvent"in window,ws=null;Ni&&"documentMode"in document&&(ws=document.documentMode);var o0=Ni&&"TextEvent"in window&&!ws,Rd=Ni&&(!zu||ws&&8<ws&&11>=ws),Cd=" ",wd=!1;function Dd(e,n){switch(e){case"keyup":return s0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function l0(e,n){switch(e){case"compositionend":return Ud(n);case"keypress":return n.which!==32?null:(wd=!0,Cd);case"textInput":return e=n.data,e===Cd&&wd?null:e;default:return null}}function u0(e,n){if(yr)return e==="compositionend"||!zu&&Dd(e,n)?(e=yd(),Go=Lu=sa=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rd&&n.locale!=="ko"?null:n.data;default:return null}}var c0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!c0[e.type]:n==="textarea"}function Nd(e,n,a,s){xr?Mr?Mr.push(s):Mr=[s]:xr=s,n=Ul(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ds=null,Us=null;function f0(e){dg(e,0)}function qo(e){var n=Ia(e);if(yn(n))return e}function Od(e,n){if(e==="change")return n}var Pd=!1;if(Ni){var Iu;if(Ni){var Fu="oninput"in document;if(!Fu){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Fu=typeof Bd.oninput=="function"}Iu=Fu}else Iu=!1;Pd=Iu&&(!document.documentMode||9<document.documentMode)}function zd(){Ds&&(Ds.detachEvent("onpropertychange",Id),Us=Ds=null)}function Id(e){if(e.propertyName==="value"&&qo(Us)){var n=[];Nd(n,Us,e,wu(e)),Md(f0,n)}}function h0(e,n,a){e==="focusin"?(zd(),Ds=n,Us=a,Ds.attachEvent("onpropertychange",Id)):e==="focusout"&&zd()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Us)}function p0(e,n){if(e==="click")return qo(n)}function m0(e,n){if(e==="input"||e==="change")return qo(n)}function g0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gn=typeof Object.is=="function"?Object.is:g0;function Ls(e,n){if(Gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!tn.call(n,u)||!Gn(e[u],n[u]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,n){var a=Fd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fd(a)}}function Gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=li(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=li(e.document)}return n}function Hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _0=Ni&&"documentMode"in document&&11>=document.documentMode,Er=null,Gu=null,Ns=null,Vu=!1;function kd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vu||Er==null||Er!==li(s)||(s=Er,"selectionStart"in s&&Hu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Ls(Ns,s)||(Ns=s,s=Ul(Gu,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Er)))}function Ha(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Tr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},ku={},Xd={};Ni&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Ga(e){if(ku[e])return ku[e];if(!Tr[e])return e;var n=Tr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xd)return ku[e]=n[a];return e}var Wd=Ga("animationend"),qd=Ga("animationiteration"),Yd=Ga("animationstart"),v0=Ga("transitionrun"),S0=Ga("transitionstart"),x0=Ga("transitioncancel"),Zd=Ga("transitionend"),jd=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function ui(e,n){jd.set(e,n),A(n,[e])}var Kd=new WeakMap;function Qn(e,n){if(typeof e=="object"&&e!==null){var a=Kd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ue(n)},Kd.set(e,n),n)}return{value:e,source:n,stack:Ue(n)}}var Jn=[],br=0,Wu=0;function Yo(){for(var e=br,n=Wu=br=0;n<e;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}f!==0&&Qd(a,u,f)}}function Zo(e,n,a,s){Jn[br++]=e,Jn[br++]=n,Jn[br++]=a,Jn[br++]=s,Wu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function qu(e,n,a,s){return Zo(e,n,a,s),jo(e)}function Ar(e,n){return Zo(e,null,null,n),jo(e)}function Qd(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(e){if(50<ao)throw ao=0,Jc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Rr={};function M0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,n,a,s){return new M0(e,n,a,s)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=Vn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ko(e,n,a,s,u,f){var x=0;if(s=e,typeof e=="function")Yu(e)&&(x=1);else if(typeof e=="string")x=ES(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Vn(31,a,n,u),e.elementType=w,e.lanes=f,e;case b:return Va(a.children,u,f,n);case R:x=8,u|=24;break;case M:return e=Vn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case I:return e=Vn(13,a,n,u),e.elementType=I,e.lanes=f,e;case H:return e=Vn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case O:x=10;break t;case z:x=9;break t;case D:x=11;break t;case F:x=14;break t;case j:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Vn(x,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function Va(e,n,a,s){return e=Vn(7,e,s,n),e.lanes=a,e}function Zu(e,n,a){return e=Vn(6,e,null,n),e.lanes=a,e}function ju(e,n,a){return n=Vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cr=[],wr=0,Qo=null,Jo=0,$n=[],ti=0,ka=null,Pi=1,Bi="";function Xa(e,n){Cr[wr++]=Jo,Cr[wr++]=Qo,Qo=e,Jo=n}function $d(e,n,a){$n[ti++]=Pi,$n[ti++]=Bi,$n[ti++]=ka,ka=e;var s=Pi;e=Bi;var u=32-Pt(s)-1;s&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var x=u-u%5;f=(s&(1<<x)-1).toString(32),s>>=x,u-=x,Pi=1<<32-Pt(n)+u|a<<u|s,Bi=f+e}else Pi=1<<f|a<<u|s,Bi=e}function Ku(e){e.return!==null&&(Xa(e,1),$d(e,1,0))}function Qu(e){for(;e===Qo;)Qo=Cr[--wr],Cr[wr]=null,Jo=Cr[--wr],Cr[wr]=null;for(;e===ka;)ka=$n[--ti],$n[ti]=null,Bi=$n[--ti],$n[ti]=null,Pi=$n[--ti],$n[ti]=null}var Dn=null,Ze=null,be=!1,Wa=null,Mi=!1,Ju=Error(r(519));function qa(e){var n=Error(r(418,""));throw Bs(Qn(n,e)),Ju}function tp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[on]=e,n[qe]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<so.length;a++)_e(so[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),me(n);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Sr(n,s.value,s.defaultValue,s.children),me(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||_g(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||qa(e)}function ep(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Dn=Dn.return}}function Os(e){if(e!==Dn)return!1;if(!be)return ep(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||mf(e.type,e.memoizedProps)),a=!a),a&&Ze&&qa(e),ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=fi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,ya(e.type)?(e=Sf,Sf=null,Ze=e):Ze=n):Ze=Dn?fi(e.stateNode.nextSibling):null;return!0}function Ps(){Ze=Dn=null,be=!1}function np(){var e=Wa;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),Wa=null),e}function Bs(e){Wa===null?Wa=[e]:Wa.push(e)}var $u=J(null),Ya=null,zi=null;function oa(e,n,a){xt($u,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=$u.current,vt($u)}function tc(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function ec(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),tc(f.return,a,e),s||(x=null);break t}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),tc(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function zs(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=u.type;Gn(u.pendingProps.value,x.value)||(e!==null?e.push(T):e=[T])}}else if(u===mt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ho):e=[ho])}u=u.return}e!==null&&ec(n,e,a,s),n.flags|=262144}function $o(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Za(e){Ya=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return ip(Ya,e)}function tl(e,n){return Ya===null&&Za(e),ip(e,n)}function ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(r(308));zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zi=zi.next=n;return a}var y0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},E0=o.unstable_scheduleCallback,T0=o.unstable_NormalPriority,ln={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nc(){return{controller:new y0,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&E0(T0,function(){e.controller.abort()})}var Fs=null,ic=0,Dr=0,Ur=null;function b0(e,n){if(Fs===null){var a=Fs=[];ic=0,Dr=sf(),Ur={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ic++,n.then(ap,ap),n}function ap(){if(--ic===0&&Fs!==null){Ur!==null&&(Ur.status="fulfilled");var e=Fs;Fs=null,Dr=0,Ur=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function A0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var rp=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&b0(e,n),rp!==null&&rp(e,n)};var ja=J(null);function ac(){var e=ja.current;return e!==null?e:Fe.pooledCache}function el(e,n){n===null?xt(ja,ja.current):xt(ja,n.pool)}function sp(){var e=ac();return e===null?null:{parent:ln._currentValue,pool:e}}var Hs=Error(r(460)),op=Error(r(474)),nl=Error(r(542)),rc={then:function(){}};function lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function il(){}function up(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(il,il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fp(e),e;default:if(typeof n.status=="string")n.then(il,il);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,fp(e),e}throw Gs=n,Hs}}var Gs=null;function cp(){if(Gs===null)throw Error(r(459));var e=Gs;return Gs=null,e}function fp(e){if(e===Hs||e===nl)throw Error(r(483))}var la=!1;function sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=jo(e),Qd(e,null,a),n}return Zo(e,s,n,a),jo(e)}function Vs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ht(e,a)}}function lc(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var uc=!1;function ks(){if(uc){var e=Ur;if(e!==null)throw e}}function Xs(e,n,a,s){uc=!1;var u=e.updateQueue;la=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var N=T,Q=N.next;N.next=null,x===null?f=Q:x.next=Q,x=N;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,T=ft.lastBaseUpdate,T!==x&&(T===null?ft.firstBaseUpdate=Q:T.next=Q,ft.lastBaseUpdate=N))}if(f!==null){var pt=u.baseState;x=0,ft=Q=N=null,T=f;do{var et=T.lane&-536870913,it=et!==T.lane;if(it?(Se&et)===et:(s&et)===et){et!==0&&et===Dr&&(uc=!0),ft!==null&&(ft=ft.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ne=e,Jt=T;et=n;var Oe=a;switch(Jt.tag){case 1:if(ne=Jt.payload,typeof ne=="function"){pt=ne.call(Oe,pt,et);break t}pt=ne;break t;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Jt.payload,et=typeof ne=="function"?ne.call(Oe,pt,et):ne,et==null)break t;pt=g({},pt,et);break t;case 2:la=!0}}et=T.callback,et!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[et]:it.push(et))}else it={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ft===null?(Q=ft=it,N=pt):ft=ft.next=it,x|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ft===null&&(N=pt),u.baseState=N,u.firstBaseUpdate=Q,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),va|=x,e.lanes=x,e.memoizedState=pt}}function hp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function dp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)hp(a[e],n)}var Lr=J(null),al=J(0);function pp(e,n){e=Wi,xt(al,e),xt(Lr,n),Wi=e|n.baseLanes}function cc(){xt(al,Wi),xt(Lr,Lr.current)}function fc(){Wi=al.current,vt(Lr),vt(al)}var fa=0,de=null,Le=null,nn=null,rl=!1,Nr=!1,Ka=!1,sl=0,Ws=0,Or=null,R0=0;function Je(){throw Error(r(321))}function hc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Gn(e[a],n[a]))return!1;return!0}function dc(e,n,a,s,u,f){return fa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Qp:Jp,Ka=!1,f=a(s,u),Ka=!1,Nr&&(f=gp(n,a,s,u)),mp(e),f}function mp(e){P.H=hl;var n=Le!==null&&Le.next!==null;if(fa=0,nn=Le=de=null,rl=!1,Ws=0,Or=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&$o(e)&&(dn=!0))}function gp(e,n,a,s){de=e;var u=0;do{if(Nr&&(Or=null),Ws=0,Nr=!1,25<=u)throw Error(r(301));if(u+=1,nn=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=O0,f=n(a,s)}while(Nr);return f}function C0(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?qs(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(de.flags|=1024),n}function pc(){var e=sl!==0;return sl=0,e}function mc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gc(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}fa=0,nn=Le=de=null,Nr=!1,Ws=sl=0,Or=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?de.memoizedState=nn=e:nn=nn.next=e,nn}function an(){if(Le===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=nn===null?de.memoizedState:nn.next;if(n!==null)nn=n,Le=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},nn===null?de.memoizedState=nn=e:nn=nn.next=e}return nn}function _c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qs(e){var n=Ws;return Ws+=1,Or===null&&(Or=[]),e=up(Or,e,n),n=de,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Qp:Jp),e}function ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qs(e);if(e.$$typeof===O)return Tn(e)}throw Error(r(438,String(e)))}function vc(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_c(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=an();return Sc(n,Le,e)}function Sc(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=x=null,N=null,Q=n,ft=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(Se&pt)===pt:(fa&pt)===pt){var et=Q.revertLane;if(et===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Dr&&(ft=!0);else if((fa&et)===et){Q=Q.next,et===Dr&&(ft=!0);continue}else pt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=pt,x=f):N=N.next=pt,de.lanes|=et,va|=et;pt=Q.action,Ka&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else et={lane:pt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},N===null?(T=N=et,x=f):N=N.next=et,de.lanes|=pt,va|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(N===null?x=f:N.next=T,!Gn(f,e.memoizedState)&&(dn=!0,ft&&(a=Ur,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=N,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function xc(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Gn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function _p(e,n,a){var s=de,u=an(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Gn((Le||u).memoizedState,a);x&&(u.memoizedState=a,dn=!0),u=u.queue;var T=xp.bind(null,s,u,e);if(Ys(2048,8,T,[e]),u.getSnapshot!==n||x||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Pr(9,ul(),Sp.bind(null,s,u,a,n),null),Fe===null)throw Error(r(349));f||(fa&124)!==0||vp(s,n,a)}return a}function vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=_c(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sp(e,n,a,s){n.value=a,n.getSnapshot=s,Mp(n)&&yp(e)}function xp(e,n,a){return a(function(){Mp(n)&&yp(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Gn(e,a)}catch{return!0}}function yp(e){var n=Ar(e,2);n!==null&&Yn(n,e,2)}function Mc(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),Ka){ot(!0);try{a()}finally{ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function Ep(e,n,a,s){return e.baseState=a,Sc(e,Le,typeof s=="function"?s:Fi)}function w0(e,n,a,s,u){if(fl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Tp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Tp(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(u,s),N=P.S;N!==null&&N(x,T),bp(e,n,T)}catch(Q){yc(e,n,Q)}finally{P.T=f}}else try{f=a(u,s),bp(e,n,f)}catch(Q){yc(e,n,Q)}}function bp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Ap(e,n,s)},function(s){return yc(e,n,s)}):Ap(e,n,a)}function Ap(e,n,a){n.status="fulfilled",n.value=a,Rp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Tp(e,a)))}function yc(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Rp(n),n=n.next;while(n!==s)}e.action=null}function Rp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cp(e,n){return n}function wp(e,n){if(be){var a=Fe.formState;if(a!==null){t:{var s=de;if(be){if(Ze){e:{for(var u=Ze,f=Mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ze=fi(u.nextSibling),s=u.data==="F!";break t}}qa(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cp,lastRenderedState:n},a.queue=s,a=Zp.bind(null,de,s),s.dispatch=a,s=Mc(!1),f=Rc.bind(null,de,!1,s.queue),s=Pn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=w0.bind(null,de,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Dp(e){var n=an();return Up(n,Le,e)}function Up(e,n,a){if(n=Sc(e,n,Cp)[0],e=ll(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=qs(n)}catch(x){throw x===Hs?nl:x}else s=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Pr(9,ul(),D0.bind(null,u,a),null)),[s,f,e]}function D0(e,n){e.action=n}function Lp(e){var n=an(),a=Le;if(a!==null)return Up(n,a,e);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Pr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=_c(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function ul(){return{destroy:void 0,resource:void 0}}function Np(){return an().memoizedState}function cl(e,n,a,s){var u=Pn();s=s===void 0?null:s,de.flags|=e,u.memoizedState=Pr(1|n,ul(),a,s)}function Ys(e,n,a,s){var u=an();s=s===void 0?null:s;var f=u.memoizedState.inst;Le!==null&&s!==null&&hc(s,Le.memoizedState.deps)?u.memoizedState=Pr(n,f,a,s):(de.flags|=e,u.memoizedState=Pr(1|n,f,a,s))}function Op(e,n){cl(8390656,8,e,n)}function Pp(e,n){Ys(2048,8,e,n)}function Bp(e,n){return Ys(4,2,e,n)}function zp(e,n){return Ys(4,4,e,n)}function Ip(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Fp(e,n,a){a=a!=null?a.concat([e]):null,Ys(4,4,Ip.bind(null,n,e),a)}function Ec(){}function Hp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&hc(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&hc(n,s[1]))return s[0];if(s=e(),Ka){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[s,n],s}function Tc(e,n,a){return a===void 0||(fa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Xm(),de.lanes|=e,va|=e,a)}function Vp(e,n,a,s){return Gn(a,n)?a:Lr.current!==null?(e=Tc(e,a,s),Gn(e,n)||(dn=!0),e):(fa&42)===0?(dn=!0,e.memoizedState=a):(e=Xm(),de.lanes|=e,va|=e,n)}function kp(e,n,a,s,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,Rc(e,!1,n,a);try{var N=u(),Q=P.S;if(Q!==null&&Q(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ft=A0(N,s);Zs(e,n,ft,qn(e))}else Zs(e,n,s,qn(e))}catch(pt){Zs(e,n,{then:function(){},status:"rejected",reason:pt},qn())}finally{Z.p=f,P.T=x}}function U0(){}function bc(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Xp(e).queue;kp(e,u,n,q,a===null?U0:function(){return Wp(e),a(s)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e).next.queue;Zs(e,n,{},qn())}function Ac(){return Tn(ho)}function qp(){return an().memoizedState}function Yp(){return an().memoizedState}function L0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=ua(a);var s=ca(n,e,a);s!==null&&(Yn(s,n,a),Vs(s,n,a)),n={cache:nc()},e.payload=n;return}n=n.return}}function N0(e,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)?jp(n,a):(a=qu(e,n,a,s),a!==null&&(Yn(a,e,s),Kp(a,n,s)))}function Zp(e,n,a){var s=qn();Zs(e,n,a,s)}function Zs(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(e))jp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,Gn(T,x))return Zo(e,n,u,0),Fe===null&&Yo(),!1}catch{}finally{}if(a=qu(e,n,u,s),a!==null)return Yn(a,e,s),Kp(a,n,s),!0}return!1}function Rc(e,n,a,s){if(s={lane:2,revertLane:sf(),action:s,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(n)throw Error(r(479))}else n=qu(e,a,s,2),n!==null&&Yn(n,e,2)}function fl(e){var n=e.alternate;return e===de||n!==null&&n===de}function jp(e,n){Nr=rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ht(e,a)}}var hl={readContext:Tn,use:ol,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je},Qp={readContext:Tn,use:ol,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,cl(4194308,4,Ip.bind(null,n,e),a)},useLayoutEffect:function(e,n){return cl(4194308,4,e,n)},useInsertionEffect:function(e,n){cl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var s=e();if(Ka){ot(!0);try{e()}finally{ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Pn();if(a!==void 0){var u=a(n);if(Ka){ot(!0);try{a(n)}finally{ot(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=N0.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Mc(e);var n=e.queue,a=Zp.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ec,useDeferredValue:function(e,n){var a=Pn();return Tc(a,e,n)},useTransition:function(){var e=Mc(!1);return e=kp.bind(null,de,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=de,u=Pn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(Se&124)!==0||vp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Op(xp.bind(null,s,f,e),[e]),s.flags|=2048,Pr(9,ul(),Sp.bind(null,s,f,a,n),null),a},useId:function(){var e=Pn(),n=Fe.identifierPrefix;if(be){var a=Bi,s=Pi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=R0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ac,useFormState:wp,useActionState:wp,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Rc.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:vc,useCacheRefresh:function(){return Pn().memoizedState=L0.bind(null,de)}},Jp={readContext:Tn,use:ol,useCallback:Hp,useContext:Tn,useEffect:Pp,useImperativeHandle:Fp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Gp,useReducer:ll,useRef:Np,useState:function(){return ll(Fi)},useDebugValue:Ec,useDeferredValue:function(e,n){var a=an();return Vp(a,Le.memoizedState,e,n)},useTransition:function(){var e=ll(Fi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:qs(e),n]},useSyncExternalStore:_p,useId:qp,useHostTransitionStatus:Ac,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,n){var a=an();return Ep(a,Le,e,n)},useMemoCache:vc,useCacheRefresh:Yp},O0={readContext:Tn,use:ol,useCallback:Hp,useContext:Tn,useEffect:Pp,useImperativeHandle:Fp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Gp,useReducer:xc,useRef:Np,useState:function(){return xc(Fi)},useDebugValue:Ec,useDeferredValue:function(e,n){var a=an();return Le===null?Tc(a,e,n):Vp(a,Le.memoizedState,e,n)},useTransition:function(){var e=xc(Fi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:qs(e),n]},useSyncExternalStore:_p,useId:qp,useHostTransitionStatus:Ac,useFormState:Lp,useActionState:Lp,useOptimistic:function(e,n){var a=an();return Le!==null?Ep(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vc,useCacheRefresh:Yp},Br=null,js=0;function dl(e){var n=js;return js+=1,Br===null&&(Br=[]),up(Br,e,n)}function Ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function $p(e){var n=e._init;return n(e._payload)}function tm(e){function n(W,G){if(e){var K=W.deletions;K===null?(W.deletions=[G],W.flags|=16):K.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function u(W,G){return W=Oi(W,G),W.index=0,W.sibling=null,W}function f(W,G,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<G?(W.flags|=67108866,G):K):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function x(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,G,K,ht){return G===null||G.tag!==6?(G=Zu(K,W.mode,ht),G.return=W,G):(G=u(G,K),G.return=W,G)}function N(W,G,K,ht){var It=K.type;return It===b?ft(W,G,K.props.children,ht,K.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===j&&$p(It)===G.type)?(G=u(G,K.props),Ks(G,K),G.return=W,G):(G=Ko(K.type,K.key,K.props,null,W.mode,ht),Ks(G,K),G.return=W,G)}function Q(W,G,K,ht){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=ju(K,W.mode,ht),G.return=W,G):(G=u(G,K.children||[]),G.return=W,G)}function ft(W,G,K,ht,It){return G===null||G.tag!==7?(G=Va(K,W.mode,ht,It),G.return=W,G):(G=u(G,K),G.return=W,G)}function pt(W,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Zu(""+G,W.mode,K),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return K=Ko(G.type,G.key,G.props,null,W.mode,K),Ks(K,G),K.return=W,K;case y:return G=ju(G,W.mode,K),G.return=W,G;case j:var ht=G._init;return G=ht(G._payload),pt(W,G,K)}if(lt(G)||nt(G))return G=Va(G,W.mode,K,null),G.return=W,G;if(typeof G.then=="function")return pt(W,dl(G),K);if(G.$$typeof===O)return pt(W,tl(W,G),K);pl(W,G)}return null}function et(W,G,K,ht){var It=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return It!==null?null:T(W,G,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case S:return K.key===It?N(W,G,K,ht):null;case y:return K.key===It?Q(W,G,K,ht):null;case j:return It=K._init,K=It(K._payload),et(W,G,K,ht)}if(lt(K)||nt(K))return It!==null?null:ft(W,G,K,ht,null);if(typeof K.then=="function")return et(W,G,dl(K),ht);if(K.$$typeof===O)return et(W,G,tl(W,K),ht);pl(W,K)}return null}function it(W,G,K,ht,It){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(K)||null,T(G,W,""+ht,It);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case S:return W=W.get(ht.key===null?K:ht.key)||null,N(G,W,ht,It);case y:return W=W.get(ht.key===null?K:ht.key)||null,Q(G,W,ht,It);case j:var pe=ht._init;return ht=pe(ht._payload),it(W,G,K,ht,It)}if(lt(ht)||nt(ht))return W=W.get(K)||null,ft(G,W,ht,It,null);if(typeof ht.then=="function")return it(W,G,K,dl(ht),It);if(ht.$$typeof===O)return it(W,G,K,tl(G,ht),It);pl(G,ht)}return null}function ne(W,G,K,ht){for(var It=null,pe=null,Yt=G,te=G=0,mn=null;Yt!==null&&te<K.length;te++){Yt.index>te?(mn=Yt,Yt=null):mn=Yt.sibling;var ye=et(W,Yt,K[te],ht);if(ye===null){Yt===null&&(Yt=mn);break}e&&Yt&&ye.alternate===null&&n(W,Yt),G=f(ye,G,te),pe===null?It=ye:pe.sibling=ye,pe=ye,Yt=mn}if(te===K.length)return a(W,Yt),be&&Xa(W,te),It;if(Yt===null){for(;te<K.length;te++)Yt=pt(W,K[te],ht),Yt!==null&&(G=f(Yt,G,te),pe===null?It=Yt:pe.sibling=Yt,pe=Yt);return be&&Xa(W,te),It}for(Yt=s(Yt);te<K.length;te++)mn=it(Yt,W,te,K[te],ht),mn!==null&&(e&&mn.alternate!==null&&Yt.delete(mn.key===null?te:mn.key),G=f(mn,G,te),pe===null?It=mn:pe.sibling=mn,pe=mn);return e&&Yt.forEach(function(Ra){return n(W,Ra)}),be&&Xa(W,te),It}function Jt(W,G,K,ht){if(K==null)throw Error(r(151));for(var It=null,pe=null,Yt=G,te=G=0,mn=null,ye=K.next();Yt!==null&&!ye.done;te++,ye=K.next()){Yt.index>te?(mn=Yt,Yt=null):mn=Yt.sibling;var Ra=et(W,Yt,ye.value,ht);if(Ra===null){Yt===null&&(Yt=mn);break}e&&Yt&&Ra.alternate===null&&n(W,Yt),G=f(Ra,G,te),pe===null?It=Ra:pe.sibling=Ra,pe=Ra,Yt=mn}if(ye.done)return a(W,Yt),be&&Xa(W,te),It;if(Yt===null){for(;!ye.done;te++,ye=K.next())ye=pt(W,ye.value,ht),ye!==null&&(G=f(ye,G,te),pe===null?It=ye:pe.sibling=ye,pe=ye);return be&&Xa(W,te),It}for(Yt=s(Yt);!ye.done;te++,ye=K.next())ye=it(Yt,W,te,ye.value,ht),ye!==null&&(e&&ye.alternate!==null&&Yt.delete(ye.key===null?te:ye.key),G=f(ye,G,te),pe===null?It=ye:pe.sibling=ye,pe=ye);return e&&Yt.forEach(function(PS){return n(W,PS)}),be&&Xa(W,te),It}function Oe(W,G,K,ht){if(typeof K=="object"&&K!==null&&K.type===b&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case S:t:{for(var It=K.key;G!==null;){if(G.key===It){if(It=K.type,It===b){if(G.tag===7){a(W,G.sibling),ht=u(G,K.props.children),ht.return=W,W=ht;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===j&&$p(It)===G.type){a(W,G.sibling),ht=u(G,K.props),Ks(ht,K),ht.return=W,W=ht;break t}a(W,G);break}else n(W,G);G=G.sibling}K.type===b?(ht=Va(K.props.children,W.mode,ht,K.key),ht.return=W,W=ht):(ht=Ko(K.type,K.key,K.props,null,W.mode,ht),Ks(ht,K),ht.return=W,W=ht)}return x(W);case y:t:{for(It=K.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(W,G.sibling),ht=u(G,K.children||[]),ht.return=W,W=ht;break t}else{a(W,G);break}else n(W,G);G=G.sibling}ht=ju(K,W.mode,ht),ht.return=W,W=ht}return x(W);case j:return It=K._init,K=It(K._payload),Oe(W,G,K,ht)}if(lt(K))return ne(W,G,K,ht);if(nt(K)){if(It=nt(K),typeof It!="function")throw Error(r(150));return K=It.call(K),Jt(W,G,K,ht)}if(typeof K.then=="function")return Oe(W,G,dl(K),ht);if(K.$$typeof===O)return Oe(W,G,tl(W,K),ht);pl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(W,G.sibling),ht=u(G,K),ht.return=W,W=ht):(a(W,G),ht=Zu(K,W.mode,ht),ht.return=W,W=ht),x(W)):a(W,G)}return function(W,G,K,ht){try{js=0;var It=Oe(W,G,K,ht);return Br=null,It}catch(Yt){if(Yt===Hs||Yt===nl)throw Yt;var pe=Vn(29,Yt,null,W.mode);return pe.lanes=ht,pe.return=W,pe}finally{}}}var zr=tm(!0),em=tm(!1),ei=J(null),yi=null;function ha(e){var n=e.alternate;xt(un,un.current&1),xt(ei,e),yi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(yi=e)}function nm(e){if(e.tag===22){if(xt(un,un.current),xt(ei,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else da()}function da(){xt(un,un.current),xt(ei,ei.current)}function Hi(e){vt(ei),yi===e&&(yi=null),vt(un)}var un=J(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Cc(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wc={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=qn(),u=ua(s);u.payload=n,a!=null&&(u.callback=a),n=ca(e,u,s),n!==null&&(Yn(n,e,s),Vs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=qn(),u=ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ca(e,u,s),n!==null&&(Yn(n,e,s),Vs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=ca(e,s,a),n!==null&&(Yn(n,e,a),Vs(n,e,a))}};function im(e,n,a,s,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(u,f):!0}function am(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&wc.enqueueReplaceState(n,n.state,null)}function Qa(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rm(e){gl(e)}function sm(e){console.error(e)}function om(e){gl(e)}function _l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function lm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Dc(e,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){_l(e,n)},a}function um(e){return e=ua(e),e.tag=3,e}function cm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){lm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){lm(n,a,s),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function P0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 13:return yi===null?tf():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===rc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),nf(e,s,u)),!1;case 22:return a.flags|=65536,s===rc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),nf(e,s,u)),!1}throw Error(r(435,a.tag))}return nf(e,s,u),tf(),!1}if(be)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Ju&&(e=Error(r(422),{cause:s}),Bs(Qn(e,a)))):(s!==Ju&&(n=Error(r(423),{cause:s}),Bs(Qn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=Qn(s,a),u=Dc(e.stateNode,s,u),lc(e,u),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),io===null?io=[f]:io.push(f),je!==4&&(je=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Dc(a.stateNode,s,e),lc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=um(u),cm(u,e,a,s),lc(a,u),!1}a=a.return}while(a!==null);return!1}var fm=Error(r(461)),dn=!1;function vn(e,n,a,s){n.child=e===null?em(n,null,a,s):zr(n,e.child,a,s)}function hm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var T in s)T!=="ref"&&(x[T]=s[T])}else x=s;return Za(n),s=dc(e,n,a,x,f,u),T=pc(),e!==null&&!dn?(mc(e,n,u),Gi(e,n,u)):(be&&T&&Ku(n),n.flags|=1,vn(e,n,s,u),n.child)}function dm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,pm(e,n,f,s,u)):(e=Ko(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ic(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(x,s)&&e.ref===n.ref)return Gi(e,n,u)}return n.flags|=1,e=Oi(f,s),e.ref=n.ref,e.return=n,n.child=e}function pm(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ls(f,s)&&e.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Ic(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Gi(e,n,u)}return Uc(e,n,a,s,u)}function mm(e,n,a){var s=n.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return gm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(n,f!==null?f.cachePool:null),f!==null?pp(n,f):cc(),nm(n);else return n.lanes=n.childLanes=536870912,gm(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(el(n,f.cachePool),pp(n,f),da(),n.memoizedState=null):(e!==null&&el(n,null),cc(),da());return vn(e,n,u,a),n.child}function gm(e,n,a,s){var u=ac();return u=u===null?null:{parent:ln._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&el(n,null),cc(),nm(n),e!==null&&zs(e,n,s,!0),null}function vl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uc(e,n,a,s,u){return Za(n),a=dc(e,n,a,s,void 0,u),s=pc(),e!==null&&!dn?(mc(e,n,u),Gi(e,n,u)):(be&&s&&Ku(n),n.flags|=1,vn(e,n,a,u),n.child)}function _m(e,n,a,s,u,f){return Za(n),n.updateQueue=null,a=gp(n,s,a,u),mp(e),s=pc(),e!==null&&!dn?(mc(e,n,f),Gi(e,n,f)):(be&&s&&Ku(n),n.flags|=1,vn(e,n,a,f),n.child)}function vm(e,n,a,s,u){if(Za(n),n.stateNode===null){var f=Rr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},sc(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):Rr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Cc(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&wc.enqueueReplaceState(f,f.state,null),Xs(n,s,f,u),ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,N=Qa(a,T);f.props=N;var Q=f.context,ft=a.contextType;x=Rr,typeof ft=="object"&&ft!==null&&(x=Tn(ft));var pt=a.getDerivedStateFromProps;ft=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==x)&&am(n,f,s,x),la=!1;var et=n.memoizedState;f.state=et,Xs(n,s,f,u),ks(),Q=n.memoizedState,T||et!==Q||la?(typeof pt=="function"&&(Cc(n,a,pt,s),Q=n.memoizedState),(N=la||im(n,a,N,s,et,Q,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=x,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,oc(e,n),x=n.memoizedProps,ft=Qa(a,x),f.props=ft,pt=n.pendingProps,et=f.context,Q=a.contextType,N=Rr,typeof Q=="object"&&Q!==null&&(N=Tn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==pt||et!==N)&&am(n,f,s,N),la=!1,et=n.memoizedState,f.state=et,Xs(n,s,f,u),ks();var it=n.memoizedState;x!==pt||et!==it||la||e!==null&&e.dependencies!==null&&$o(e.dependencies)?(typeof T=="function"&&(Cc(n,a,T,s),it=n.memoizedState),(ft=la||im(n,a,ft,s,et,it,N)||e!==null&&e.dependencies!==null&&$o(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=N,s=ft):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,vl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=zr(n,e.child,null,u),n.child=zr(n,null,a,u)):vn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Gi(e,n,u),e}function Sm(e,n,a,s){return Ps(),n.flags|=256,vn(e,n,a,s),n.child}var Lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nc(e){return{baseLanes:e,cachePool:sp()}}function Oc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function xm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?ha(n):da(),be){var T=Ze,N;if(N=T){t:{for(N=T,T=Mi;N.nodeType!==8;){if(!T){T=null;break t}if(N=fi(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:ka!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},N=Vn(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,Dn=n,Ze=null,N=!0):N=!1}N||qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return vf(T)?n.lanes=32:n.lanes=536870912,null;Hi(n)}return T=s.children,s=s.fallback,u?(da(),u=n.mode,T=Sl({mode:"hidden",children:T},u),s=Va(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,u=n.child,u.memoizedState=Nc(a),u.childLanes=Oc(e,x,a),n.memoizedState=Lc,s):(ha(n),Pc(n,T))}if(N=e.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(ha(n),n.flags&=-257,n=Bc(e,n,a)):n.memoizedState!==null?(da(),n.child=e.child,n.flags|=128,n=null):(da(),u=s.fallback,T=n.mode,s=Sl({mode:"visible",children:s.children},T),u=Va(u,T,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,zr(n,e.child,null,a),s=n.child,s.memoizedState=Nc(a),s.childLanes=Oc(e,x,a),n.memoizedState=Lc,n=u);else if(ha(n),vf(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var Q=x.dgst;x=Q,s=Error(r(419)),s.stack="",s.digest=x,Bs({value:s,source:null,stack:null}),n=Bc(e,n,a)}else if(dn||zs(e,n,a,!1),x=(a&e.childLanes)!==0,dn||x){if(x=Fe,x!==null&&(s=a&-a,s=(s&42)!==0?1:ie(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==N.retryLane))throw N.retryLane=s,Ar(e,s),Yn(x,e,s),fm;T.data==="$?"||tf(),n=Bc(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=N.treeContext,Ze=fi(T.nextSibling),Dn=n,be=!0,Wa=null,Mi=!1,e!==null&&($n[ti++]=Pi,$n[ti++]=Bi,$n[ti++]=ka,Pi=e.id,Bi=e.overflow,ka=n),n=Pc(n,s.children),n.flags|=4096);return n}return u?(da(),u=s.fallback,T=n.mode,N=e.child,Q=N.sibling,s=Oi(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&65011712,Q!==null?u=Oi(Q,u):(u=Va(u,T,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,T=e.child.memoizedState,T===null?T=Nc(a):(N=T.cachePool,N!==null?(Q=ln._currentValue,N=N.parent!==Q?{parent:Q,pool:Q}:N):N=sp(),T={baseLanes:T.baseLanes|a,cachePool:N}),u.memoizedState=T,u.childLanes=Oc(e,x,a),n.memoizedState=Lc,s):(ha(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Pc(e,n){return n=Sl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Sl(e,n){return e=Vn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Bc(e,n,a){return zr(n,e.child,null,a),e=Pc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Mm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),tc(e.return,n,a)}function zc(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function ym(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(vn(e,n,s.children,a),s=un.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mm(e,a,n);else if(e.tag===19)Mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(xt(un,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),zc(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}zc(n,!0,a,null,f);break;case"together":zc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ic(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&$o(e)))}function B0(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),oa(n,ln,e.memoizedState.cache),Ps();break;case 27:case 5:Wt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(e,n,a):(ha(n),e=Gi(e,n,a),e!==null?e.sibling:null);ha(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(zs(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return ym(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(un,un.current),s)break;return null;case 22:case 23:return n.lanes=0,mm(e,n,a);case 24:oa(n,ln,e.memoizedState.cache)}return Gi(e,n,a)}function Em(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Ic(e,a)&&(n.flags&128)===0)return dn=!1,B0(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,be&&(n.flags&1048576)!==0&&$d(n,Jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")Yu(s)?(e=Qa(s,e),n.tag=1,n=vm(null,n,s,e,a)):(n.tag=0,n=Uc(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===D){n.tag=11,n=hm(null,n,s,e,a);break t}else if(u===F){n.tag=14,n=dm(null,n,s,e,a);break t}}throw n=_t(s)||s,Error(r(306,n,""))}}return n;case 0:return Uc(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Qa(s,n.pendingProps),vm(e,n,s,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,oc(e,n),Xs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,oa(n,ln,s),s!==f.cache&&ec(n,[ln],a,!0),ks(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Sm(e,n,s,a);break t}else if(s!==u){u=Qn(Error(r(424)),n),Bs(u),n=Sm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=fi(e.firstChild),Dn=n,be=!0,Wa=null,Mi=!0,a=em(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ps(),s===u){n=Gi(e,n,a);break t}vn(e,n,s,a)}n=n.child}return n;case 26:return vl(e,n),e===null?(a=Rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,s=Nl(tt.current).createElement(a),s[on]=n,s[qe]=e,xn(s,a,e),en(s),n.stateNode=s):n.memoizedState=Rg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Wt(n),e===null&&be&&(s=n.stateNode=Tg(n.type,n.pendingProps,tt.current),Dn=n,Mi=!0,u=Ze,ya(n.type)?(Sf=u,Ze=fi(s.firstChild)):Ze=u),vn(e,n,n.pendingProps.children,a),vl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=s=Ze)&&(s=cS(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Dn=n,Ze=fi(s.firstChild),Mi=!1,u=!0):u=!1),u||qa(n)),Wt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,mf(u,f)?s=null:x!==null&&mf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=dc(e,n,C0,null,null,a),ho._currentValue=u),vl(e,n),vn(e,n,s,a),n.child;case 6:return e===null&&be&&((e=a=Ze)&&(a=fS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||qa(n)),null;case 13:return xm(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=zr(n,null,s,a):vn(e,n,s,a),n.child;case 11:return hm(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),vn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Za(n),u=Tn(u),s=s(u),n.flags|=1,vn(e,n,s,a),n.child;case 14:return dm(e,n,n.type,n.pendingProps,a);case 15:return pm(e,n,n.type,n.pendingProps,a);case 19:return ym(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Sl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Oi(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return mm(e,n,a);case 24:return Za(n),s=Tn(ln),e===null?(u=ac(),u===null&&(u=Fe,f=nc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},sc(n),oa(n,ln,u)):((e.lanes&a)!==0&&(oc(e,n),Xs(n,null,null,a),ks()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),oa(n,ln,s)):(s=f.cache,oa(n,ln,s),s!==u.cache&&ec(n,[ln],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(e){e.flags|=4}function Tm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Lg(n)){if(n=ei.current,n!==null&&((Se&4194048)===Se?yi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==yi))throw Gs=rc,op;e.flags|=8192}}function xl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tt():536870912,e.lanes|=n,Gr|=n)}function Qs(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function z0(e,n,a){var s=n.pendingProps;switch(Qu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(ln),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Os(n)?Vi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,np())),We(n),null;case 26:return a=n.memoizedState,e===null?(Vi(n),a!==null?(We(n),Tm(n,a)):(We(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Vi(n),We(n),Tm(n,a)):(We(n),n.flags&=-16777217):(e.memoizedProps!==s&&Vi(n),We(n),n.flags&=-16777217),null;case 27:he(n),a=tt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=Dt.current,Os(n)?tp(n):(e=Tg(u,s,a),n.stateNode=e,Vi(n))}return We(n),null;case 5:if(he(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(e=Dt.current,Os(n))tp(n);else{switch(u=Nl(tt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[on]=n,e[qe]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(xn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Vi(n)}}return We(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=tt.current,Os(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||_g(e.nodeValue,a)),e||qa(n)}else e=Nl(e).createTextNode(s),e[on]=n,n.stateNode=e}return We(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Os(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=np(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),We(n),null;case 4:return jt(),e===null&&cf(n.stateNode.containerInfo),We(n),null;case 10:return Ii(n.type),We(n),null;case 19:if(vt(un),u=n.memoizedState,u===null)return We(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)Qs(u,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,Qs(u,!1),e=f.updateQueue,n.updateQueue=e,xl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Jd(a,e),a=a.sibling;return xt(un,un.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ot()>El&&(n.flags|=128,s=!0,Qs(u,!1),n.lanes=4194304)}else{if(!s)if(e=ml(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,xl(n,e),Qs(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!be)return We(n),null}else 2*Ot()-u.renderingStartTime>El&&a!==536870912&&(n.flags|=128,s=!0,Qs(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ot(),n.sibling=null,e=un.current,xt(un,s?e&1|2:e&1),n):(We(n),null);case 22:case 23:return Hi(n),fc(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&vt(ja),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(ln),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function I0(e,n){switch(Qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(ln),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 13:if(Hi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(un),null;case 4:return jt(),null;case 10:return Ii(n.type),null;case 22:case 23:return Hi(n),fc(),e!==null&&vt(ja),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(ln),null;case 25:return null;default:return null}}function bm(e,n){switch(Qu(n),n.tag){case 3:Ii(ln),jt();break;case 26:case 27:case 5:he(n);break;case 4:jt();break;case 13:Hi(n);break;case 19:vt(un);break;case 10:Ii(n.type);break;case 22:case 23:Hi(n),fc(),e!==null&&vt(ja);break;case 24:Ii(ln)}}function Js(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==u)}}catch(T){ze(n,n.return,T)}}function pa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var x=s.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var N=a,Q=T;try{Q()}catch(ft){ze(u,N,ft)}}}s=s.next}while(s!==f)}}catch(ft){ze(n,n.return,ft)}}function Am(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{dp(n,a)}catch(s){ze(e,e.return,s)}}}function Rm(e,n,a){a.props=Qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ze(e,n,s)}}function $s(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){ze(e,n,u)}}function Ei(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function Cm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function Fc(e,n,a){try{var s=e.stateNode;rS(s,e.type,a,n),s[qe]=n}catch(u){ze(e,e.return,u)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function Hc(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&(s===27&&ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Gc(e,n,a),e=e.sibling;e!==null;)Gc(e,n,a),e=e.sibling}function Ml(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ml(e,n,a),e=e.sibling;e!==null;)Ml(e,n,a),e=e.sibling}function Dm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);xn(n,s,a),n[on]=e,n[qe]=a}catch(f){ze(e,e.return,f)}}var ki=!1,$e=!1,Vc=!1,Um=typeof WeakSet=="function"?WeakSet:Set,pn=null;function F0(e,n){if(e=e.containerInfo,df=Fl,e=Vd(e),Hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,T=-1,N=-1,Q=0,ft=0,pt=e,et=null;e:for(;;){for(var it;pt!==a||u!==0&&pt.nodeType!==3||(T=x+u),pt!==f||s!==0&&pt.nodeType!==3||(N=x+s),pt.nodeType===3&&(x+=pt.nodeValue.length),(it=pt.firstChild)!==null;)et=pt,pt=it;for(;;){if(pt===e)break e;if(et===a&&++Q===u&&(T=x),et===f&&++ft===s&&(N=x),(it=pt.nextSibling)!==null)break;pt=et,et=pt.parentNode}pt=it}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(pf={focusedElem:e,selectionRange:a},Fl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ne=Qa(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ne,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)_f(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_f(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function Lm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),s&4&&Js(5,a);break;case 1:if(ma(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){ze(a,a.return,x)}else{var u=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}s&64&&Am(a),s&512&&$s(a,a.return);break;case 3:if(ma(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{dp(e,n)}catch(x){ze(a,a.return,x)}}break;case 27:n===null&&s&4&&Dm(a);case 26:case 5:ma(e,a),n===null&&s&4&&Cm(a),s&512&&$s(a,a.return);break;case 12:ma(e,a);break;case 13:ma(e,a),s&4&&Pm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Z0.bind(null,a),hS(e,a))));break;case 22:if(s=a.memoizedState!==null||ki,!s){n=n!==null&&n.memoizedState!==null||$e,u=ki;var f=$e;ki=s,($e=n)&&!f?ga(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),ki=u,$e=f}break;case 30:break;default:ma(e,a)}}function Nm(e){var n=e.alternate;n!==null&&(e.alternate=null,Nm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&vr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Bn=!1;function Xi(e,n,a){for(a=a.child;a!==null;)Om(e,n,a),a=a.sibling}function Om(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:$e||Ei(a,n),Xi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Ei(a,n);var s=Ve,u=Bn;ya(a.type)&&(Ve=a.stateNode,Bn=!1),Xi(e,n,a),lo(a.stateNode),Ve=s,Bn=u;break;case 5:$e||Ei(a,n);case 6:if(s=Ve,u=Bn,Ve=null,Xi(e,n,a),Ve=s,Bn=u,Ve!==null)if(Bn)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ve!==null&&(Bn?(e=Ve,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_o(e)):yg(Ve,a.stateNode));break;case 4:s=Ve,u=Bn,Ve=a.stateNode.containerInfo,Bn=!0,Xi(e,n,a),Ve=s,Bn=u;break;case 0:case 11:case 14:case 15:$e||pa(2,a,n),$e||pa(4,a,n),Xi(e,n,a);break;case 1:$e||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rm(a,n,s)),Xi(e,n,a);break;case 21:Xi(e,n,a);break;case 22:$e=(s=$e)||a.memoizedState!==null,Xi(e,n,a),$e=s;break;default:Xi(e,n,a)}}function Pm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(a){ze(n,n.return,a)}}function H0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Um),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Um),n;default:throw Error(r(435,e.tag))}}function kc(e,n){var a=H0(e);n.forEach(function(s){var u=j0.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function kn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,x=n,T=x;t:for(;T!==null;){switch(T.tag){case 27:if(ya(T.type)){Ve=T.stateNode,Bn=!1;break t}break;case 5:Ve=T.stateNode,Bn=!1;break t;case 3:case 4:Ve=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Ve===null)throw Error(r(160));Om(f,x,u),Ve=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Bm(n,e),n=n.sibling}var ci=null;function Bm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),s&4&&(pa(3,e,e.return),Js(3,e),pa(5,e,e.return));break;case 1:kn(n,e),Xn(e),s&512&&($e||a===null||Ei(a,a.return)),s&64&&ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ci;if(kn(n,e),Xn(e),s&512&&($e||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[xi]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),xn(f,s,a),f[on]=e,en(f),s=f;break t;case"link":var x=Dg("link","href",u).get(s+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;case"meta":if(x=Dg("meta","content",u).get(s+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break e}}f=u.createElement(s),xn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=e,en(f),s=f}e.stateNode=s}else Ug(u,e.type,e.stateNode);else e.stateNode=wg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ug(u,e.type,e.stateNode):wg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Fc(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),s&512&&($e||a===null||Ei(a,a.return)),a!==null&&s&4&&Fc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),s&512&&($e||a===null||Ei(a,a.return)),e.flags&32){u=e.stateNode;try{Nn(u,"")}catch(it){ze(e,e.return,it)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Fc(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Vc=!0);break;case 6:if(kn(n,e),Xn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(it){ze(e,e.return,it)}}break;case 3:if(Bl=null,u=ci,ci=Ol(n.containerInfo),kn(n,e),ci=u,Xn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(it){ze(e,e.return,it)}Vc&&(Vc=!1,zm(e));break;case 4:s=ci,ci=Ol(e.stateNode.containerInfo),kn(n,e),Xn(e),ci=s;break;case 12:kn(n,e),Xn(e);break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jc=Ot()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kc(e,s)));break;case 22:u=e.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,Q=ki,ft=$e;if(ki=Q||u,$e=ft||N,kn(n,e),$e=ft,ki=Q,Xn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||N||ki||$e||Ja(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){N=a=n;try{if(f=N.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=N.stateNode;var pt=N.memoizedProps.style,et=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(it){ze(N,N.return,it)}}}else if(n.tag===6){if(a===null){N=n;try{N.stateNode.nodeValue=u?"":N.memoizedProps}catch(it){ze(N,N.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,kc(e,a))));break;case 19:kn(n,e),Xn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,kc(e,s)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Hc(e);Ml(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Nn(x,""),a.flags&=-33);var T=Hc(e);Ml(e,T,x);break;case 3:case 4:var N=a.stateNode.containerInfo,Q=Hc(e);Gc(e,Q,N);break;default:throw Error(r(161))}}catch(ft){ze(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function zm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;zm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lm(e,n.alternate,n),n=n.sibling}function Ja(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:pa(4,n,n.return),Ja(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),Ja(n);break;case 27:lo(n.stateNode);case 26:case 5:Ei(n,n.return),Ja(n);break;case 22:n.memoizedState===null&&Ja(n);break;case 30:Ja(n);break;default:Ja(n)}e=e.sibling}}function ga(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),Js(4,f);break;case 1:if(ga(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){ze(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)hp(N[u],T)}catch(Q){ze(s,s.return,Q)}}a&&x&64&&Am(f),$s(f,f.return);break;case 27:Dm(f);case 26:case 5:ga(u,f,a),a&&s===null&&x&4&&Cm(f),$s(f,f.return);break;case 12:ga(u,f,a);break;case 13:ga(u,f,a),a&&x&4&&Pm(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),$s(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Xc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Is(a))}function Wc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Is(e))}function Ti(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Im(e,n,a,s),n=n.sibling}function Im(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,s),u&2048&&Js(9,n);break;case 1:Ti(e,n,a,s);break;case 3:Ti(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Is(e)));break;case 12:if(u&2048){Ti(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){ze(n,n.return,N)}}else Ti(e,n,a,s);break;case 13:Ti(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,s):to(e,n):f._visibility&2?Ti(e,n,a,s):(f._visibility|=2,Ir(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Xc(x,n);break;case 24:Ti(e,n,a,s),u&2048&&Wc(n.alternate,n);break;default:Ti(e,n,a,s)}}function Ir(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,T=a,N=s,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Ir(f,x,T,N,u),Js(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?Ir(f,x,T,N,u):to(f,x):(ft._visibility|=2,Ir(f,x,T,N,u)),u&&Q&2048&&Xc(x.alternate,x);break;case 24:Ir(f,x,T,N,u),u&&Q&2048&&Wc(x.alternate,x);break;default:Ir(f,x,T,N,u)}n=n.sibling}}function to(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:to(a,s),u&2048&&Xc(s.alternate,s);break;case 24:to(a,s),u&2048&&Wc(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var eo=8192;function Fr(e){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 26:Fr(e),e.flags&eo&&e.memoizedState!==null&&bS(ci,e.memoizedState,e.memoizedProps);break;case 5:Fr(e);break;case 3:case 4:var n=ci;ci=Ol(e.stateNode.containerInfo),Fr(e),ci=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Fr(e),eo=n):Fr(e));break;default:Fr(e)}}function Hm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Vm(s,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gm(e),e=e.sibling}function Gm(e){switch(e.tag){case 0:case 11:case 15:no(e),e.flags&2048&&pa(9,e,e.return);break;case 3:no(e);break;case 12:no(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,yl(e)):no(e);break;default:no(e)}}function yl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Vm(s,e)}Hm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:pa(8,n,n.return),yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yl(n));break;default:yl(n)}e=e.sibling}}function Vm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Is(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=e;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Nm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var G0={getCacheForType:function(e){var n=Tn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},V0=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Fe=null,ge=null,Se=0,we=0,Wn=null,_a=!1,Hr=!1,qc=!1,Wi=0,je=0,va=0,$a=0,Yc=0,ni=0,Gr=0,io=null,zn=null,Zc=!1,jc=0,El=1/0,Tl=null,Sa=null,Sn=0,xa=null,Vr=null,kr=0,Kc=0,Qc=null,km=null,ao=0,Jc=null;function qn(){if((Ce&2)!==0&&Se!==0)return Se&-Se;if(P.T!==null){var e=Dr;return e!==0?e:sf()}return xe()}function Xm(){ni===0&&(ni=(Se&536870912)===0||be?k():536870912);var e=ei.current;return e!==null&&(e.flags|=32),ni}function Yn(e,n,a){(e===Fe&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Xr(e,0),Ma(e,Se,ni,!1)),Bt(e,a),((Ce&2)===0||e!==Fe)&&(e===Fe&&((Ce&2)===0&&($a|=a),je===4&&Ma(e,Se,ni,!1)),bi(e))}function Wm(e,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=s?W0(e,n):ef(e,n,!0),f=s;do{if(u===0){Hr&&!s&&Ma(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!k0(a)){u=ef(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var T=e;u=io;var N=T.current.memoizedState.isDehydrated;if(N&&(Xr(T,x).flags|=256),x=ef(T,x,!1),x!==2){if(qc&&!N){T.errorRecoveryDisabledLanes|=f,$a|=f,u=4;break t}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Xr(e,0),Ma(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,ni,!_a);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=jc+300-Ot(),10<u)){if(Ma(s,n,ni,!_a),Vt(s,0,!0)!==0)break t;s.timeoutHandle=xg(qm.bind(null,s,a,zn,Tl,Zc,n,ni,$a,Gr,_a,f,2,-0,0),u);break t}qm(s,a,zn,Tl,Zc,n,ni,$a,Gr,_a,f,0,-0,0)}}break}while(!0);bi(e)}function qm(e,n,a,s,u,f,x,T,N,Q,ft,pt,et,it){if(e.timeoutHandle=-1,pt=n.subtreeFlags,(pt&8192||(pt&16785408)===16785408)&&(fo={stylesheets:null,count:0,unsuspend:TS},Fm(n),pt=AS(),pt!==null)){e.cancelPendingCommit=pt($m.bind(null,e,n,f,a,s,u,x,T,N,ft,1,et,it)),Ma(e,f,x,!Q);return}$m(e,n,f,a,s,u,x,T,N)}function k0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(e,n,a,s){n&=~Yc,n&=~$a,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),x=1<<f;s[f]=-1,u&=~x}a!==0&&gt(e,a,n)}function bl(){return(Ce&6)===0?(ro(0),!1):!0}function $c(){if(ge!==null){if(we===0)var e=ge.return;else e=ge,zi=Ya=null,gc(e),Br=null,js=0,e=ge;for(;e!==null;)bm(e.alternate,e),e=e.return;ge=null}}function Xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,oS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$c(),Fe=e,ge=a=Oi(e.current,null),Se=n,we=0,Wn=null,_a=!1,Hr=Ct(e,n),qc=!1,Gr=ni=Yc=$a=va=je=0,zn=io=null,Zc=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Pt(s),f=1<<u;n|=e[u],s&=~f}return Wi=n,Yo(),a}function Ym(e,n){de=null,P.H=hl,n===Hs||n===nl?(n=cp(),we=3):n===op?(n=cp(),we=4):we=n===fm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,ge===null&&(je=1,_l(e,Qn(n,e.current)))}function Zm(){var e=P.H;return P.H=hl,e===null?hl:e}function jm(){var e=P.A;return P.A=G0,e}function tf(){je=4,_a||(Se&4194048)!==Se&&ei.current!==null||(Hr=!0),(va&134217727)===0&&($a&134217727)===0||Fe===null||Ma(Fe,Se,ni,!1)}function ef(e,n,a){var s=Ce;Ce|=2;var u=Zm(),f=jm();(Fe!==e||Se!==n)&&(Tl=null,Xr(e,n)),n=!1;var x=je;t:do try{if(we!==0&&ge!==null){var T=ge,N=Wn;switch(we){case 8:$c(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var Q=we;if(we=0,Wn=null,Wr(e,T,N,Q),a&&Hr){x=0;break t}break;default:Q=we,we=0,Wn=null,Wr(e,T,N,Q)}}X0(),x=je;break}catch(ft){Ym(e,ft)}while(!0);return n&&e.shellSuspendCounter++,zi=Ya=null,Ce=s,P.H=u,P.A=f,ge===null&&(Fe=null,Se=0,Yo()),x}function X0(){for(;ge!==null;)Km(ge)}function W0(e,n){var a=Ce;Ce|=2;var s=Zm(),u=jm();Fe!==e||Se!==n?(Tl=null,El=Ot()+500,Xr(e,n)):Hr=Ct(e,n);t:do try{if(we!==0&&ge!==null){n=ge;var f=Wn;e:switch(we){case 1:we=0,Wn=null,Wr(e,n,f,1);break;case 2:case 9:if(lp(f)){we=0,Wn=null,Qm(n);break}n=function(){we!==2&&we!==9||Fe!==e||(we=7),bi(e)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:lp(f)?(we=0,Wn=null,Qm(n)):(we=0,Wn=null,Wr(e,n,f,7));break;case 5:var x=null;switch(ge.tag){case 26:x=ge.memoizedState;case 5:case 27:var T=ge;if(!x||Lg(x)){we=0,Wn=null;var N=T.sibling;if(N!==null)ge=N;else{var Q=T.return;Q!==null?(ge=Q,Al(Q)):ge=null}break e}}we=0,Wn=null,Wr(e,n,f,5);break;case 6:we=0,Wn=null,Wr(e,n,f,6);break;case 8:$c(),je=6;break t;default:throw Error(r(462))}}q0();break}catch(ft){Ym(e,ft)}while(!0);return zi=Ya=null,P.H=s,P.A=u,Ce=a,ge!==null?0:(Fe=null,Se=0,Yo(),je)}function q0(){for(;ge!==null&&!ae();)Km(ge)}function Km(e){var n=Em(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Al(e):ge=n}function Qm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_m(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=_m(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:gc(n);default:bm(a,n),n=ge=Jd(n,Wi),n=Em(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Al(e):ge=n}function Wr(e,n,a,s){zi=Ya=null,gc(n),Br=null,js=0;var u=n.return;try{if(P0(e,u,n,a,Se)){je=1,_l(e,Qn(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;je=1,_l(e,Qn(a,e.current)),ge=null;return}n.flags&32768?(be||s===1?e=!0:Hr||(Se&536870912)!==0?e=!1:(_a=e=!0,(s===2||s===9||s===3||s===6)&&(s=ei.current,s!==null&&s.tag===13&&(s.flags|=16384))),Jm(n,e)):Al(n)}function Al(e){var n=e;do{if((n.flags&32768)!==0){Jm(n,_a);return}e=n.return;var a=z0(n.alternate,n,Wi);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);je===0&&(je=5)}function Jm(e,n){do{var a=I0(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);je=6,ge=null}function $m(e,n,a,s,u,f,x,T,N){e.cancelPendingCommit=null;do Rl();while(Sn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Wu,yt(e,a,f,x,T,N),e===Fe&&(ge=Fe=null,Se=0),Vr=n,xa=e,kr=a,Kc=f,Qc=u,km=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,K0(ke,function(){return ag(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=Z.p,Z.p=2,x=Ce,Ce|=4;try{F0(e,n,a)}finally{Ce=x,Z.p=u,P.T=s}}Sn=1,tg(),eg(),ng()}}function tg(){if(Sn===1){Sn=0;var e=xa,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var u=Ce;Ce|=4;try{Bm(n,e);var f=pf,x=Vd(e.containerInfo),T=f.focusedElem,N=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Gd(T.ownerDocument.documentElement,T)){if(N!==null&&Hu(T)){var Q=N.start,ft=N.end;if(ft===void 0&&(ft=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ft,T.value.length);else{var pt=T.ownerDocument||document,et=pt&&pt.defaultView||window;if(et.getSelection){var it=et.getSelection(),ne=T.textContent.length,Jt=Math.min(N.start,ne),Oe=N.end===void 0?Jt:Math.min(N.end,ne);!it.extend&&Jt>Oe&&(x=Oe,Oe=Jt,Jt=x);var W=Hd(T,Jt),G=Hd(T,Oe);if(W&&G&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==G.node||it.focusOffset!==G.offset)){var K=pt.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),Jt>Oe?(it.addRange(K),it.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),it.addRange(K))}}}}for(pt=[],it=T;it=it.parentNode;)it.nodeType===1&&pt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var ht=pt[T];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Fl=!!df,pf=df=null}finally{Ce=u,Z.p=s,P.T=a}}e.current=n,Sn=2}}function eg(){if(Sn===2){Sn=0;var e=xa,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Z.p;Z.p=2;var u=Ce;Ce|=4;try{Lm(e,n.alternate,n)}finally{Ce=u,Z.p=s,P.T=a}}Sn=3}}function ng(){if(Sn===4||Sn===3){Sn=0,ee();var e=xa,n=Vr,a=kr,s=km;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Vr=xa=null,ig(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Sa=null),Re(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=Z.p,Z.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<s.length;x++){var T=s[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Z.p=u}}(kr&3)!==0&&Rl(),bi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Jc?ao++:(ao=0,Jc=e):ao=0,ro(0)}}function ig(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Is(n)))}function Rl(e){return tg(),eg(),ng(),ag()}function ag(){if(Sn!==5)return!1;var e=xa,n=Kc;Kc=0;var a=Re(kr),s=P.T,u=Z.p;try{Z.p=32>a?32:a,P.T=null,a=Qc,Qc=null;var f=xa,x=kr;if(Sn=0,Vr=xa=null,kr=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,Gm(f.current),Im(f,f.current,x,a),Ce=T,ro(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ct,f)}catch{}return!0}finally{Z.p=u,P.T=s,ig(e,n)}}function rg(e,n,a){n=Qn(a,n),n=Dc(e.stateNode,n,2),e=ca(e,n,2),e!==null&&(Bt(e,2),bi(e))}function ze(e,n,a){if(e.tag===3)rg(e,e,a);else for(;n!==null;){if(n.tag===3){rg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){e=Qn(a,e),a=um(2),s=ca(n,a,2),s!==null&&(cm(a,s,n,e),Bt(s,2),bi(s));break}}n=n.return}}function nf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new V0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(qc=!0,u.add(a),e=Y0.bind(null,e,n,a),n.then(e,e))}function Y0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(Se&a)===a&&(je===4||je===3&&(Se&62914560)===Se&&300>Ot()-jc?(Ce&2)===0&&Xr(e,0):Yc|=a,Gr===Se&&(Gr=0)),bi(e)}function sg(e,n){n===0&&(n=Tt()),e=Ar(e,n),e!==null&&(Bt(e,n),bi(e))}function Z0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),sg(e,a)}function j0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),sg(e,a)}function K0(e,n){return B(e,n)}var Cl=null,qr=null,af=!1,wl=!1,rf=!1,tr=0;function bi(e){e!==qr&&e.next===null&&(qr===null?Cl=qr=e:qr=qr.next=e),wl=!0,af||(af=!0,J0())}function ro(e,n){if(!rf&&wl){rf=!0;do for(var a=!1,s=Cl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var x=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,cg(s,f))}else f=Se,f=Vt(s,s===Fe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,cg(s,f));s=s.next}while(a);rf=!1}}function Q0(){og()}function og(){wl=af=!1;var e=0;tr!==0&&(sS()&&(e=tr),tr=0);for(var n=Ot(),a=null,s=Cl;s!==null;){var u=s.next,f=lg(s,n);f===0?(s.next=null,a===null?Cl=u:a.next=u,u===null&&(qr=a)):(a=s,(e!==0||(f&3)!==0)&&(wl=!0)),s=u}ro(e)}function lg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Pt(f),T=1<<x,N=u[x];N===-1?((T&a)===0||(T&s)!==0)&&(u[x]=se(T,n)):N<=n&&(e.expiredLanes|=T),f&=~T}if(n=Fe,a=Se,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(we===2||we===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&De(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&De(s),Re(a)){case 2:case 8:a=re;break;case 32:a=ke;break;case 268435456:a=L;break;default:a=ke}return s=ug.bind(null,e),a=B(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&De(s),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,n){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rl()&&e.callbackNode!==a)return null;var s=Se;return s=Vt(e,e===Fe?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Wm(e,s,n),lg(e,Ot()),e.callbackNode!=null&&e.callbackNode===a?ug.bind(null,e):null)}function cg(e,n){if(Rl())return null;Wm(e,n,!0)}function J0(){lS(function(){(Ce&6)!==0?B(Gt,Q0):og()})}function sf(){return tr===0&&(tr=k()),tr}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ho(""+e)}function hg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $0(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=fg((u[qe]||null).action),x=s.submitter;x&&(n=(n=x[qe]||null)?fg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Xo("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(tr!==0){var N=x?hg(u,x):new FormData(u);bc(a,{pending:!0,data:N,method:u.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=x?hg(u,x):new FormData(u),bc(a,{pending:!0,data:N,method:u.method,action:f},f,N))},currentTarget:u}]})}}for(var of=0;of<Xu.length;of++){var lf=Xu[of],tS=lf.toLowerCase(),eS=lf[0].toUpperCase()+lf.slice(1);ui(tS,"on"+eS)}ui(Wd,"onAnimationEnd"),ui(qd,"onAnimationIteration"),ui(Yd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(v0,"onTransitionRun"),ui(S0,"onTransitionStart"),ui(x0,"onTransitionCancel"),ui(Zd,"onTransitionEnd"),X("onMouseEnter",["mouseout","mouseover"]),X("onMouseLeave",["mouseout","mouseover"]),X("onPointerEnter",["pointerout","pointerover"]),X("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(so));function dg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var T=s[x],N=T.instance,Q=T.currentTarget;if(T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){gl(ft)}u.currentTarget=null,f=N}else for(x=0;x<s.length;x++){if(T=s[x],N=T.instance,Q=T.currentTarget,T=T.listener,N!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ft){gl(ft)}u.currentTarget=null,f=N}}}}function _e(e,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var s=e+"__bubble";a.has(s)||(pg(n,e,2,!1),a.add(s))}function uf(e,n,a){var s=0;n&&(s|=4),pg(a,e,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function cf(e){if(!e[Dl]){e[Dl]=!0,Io.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||uf(a,!1,e),uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,uf("selectionchange",!1,n))}}function pg(e,n,a,s){switch(Ig(n)){case 2:var u=wS;break;case 8:u=DS;break;default:u=Tf}a=u.bind(null,n,a,e),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ff(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var T=s.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=s.return;x!==null;){var N=x.tag;if((N===3||N===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Li(T),x===null)return;if(N=x.tag,N===5||N===6||N===26||N===27){s=f=x;continue t}T=T.parentNode}}s=s.return}Md(function(){var Q=f,ft=wu(a),pt=[];t:{var et=jd.get(e);if(et!==void 0){var it=Xo,ne=e;switch(e){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":it=Kv;break;case"focusin":ne="focus",it=Pu;break;case"focusout":ne="blur",it=Pu;break;case"beforeblur":case"afterblur":it=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=$v;break;case Wd:case qd:case Yd:it=Gv;break;case Zd:it=e0;break;case"scroll":case"scrollend":it=Bv;break;case"wheel":it=i0;break;case"copy":case"cut":case"paste":it=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Ad;break;case"toggle":case"beforetoggle":it=r0}var Jt=(n&4)!==0,Oe=!Jt&&(e==="scroll"||e==="scrollend"),W=Jt?et!==null?et+"Capture":null:et;Jt=[];for(var G=Q,K;G!==null;){var ht=G;if(K=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||K===null||W===null||(ht=bs(G,W),ht!=null&&Jt.push(oo(G,ht,K))),Oe)break;G=G.return}0<Jt.length&&(et=new it(et,ne,null,a,ft),pt.push({event:et,listeners:Jt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",et&&a!==Cu&&(ne=a.relatedTarget||a.fromElement)&&(Li(ne)||ne[Si]))break t;if((it||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,it?(ne=a.relatedTarget||a.toElement,it=Q,ne=ne?Li(ne):null,ne!==null&&(Oe=c(ne),Jt=ne.tag,ne!==Oe||Jt!==5&&Jt!==27&&Jt!==6)&&(ne=null)):(it=null,ne=Q),it!==ne)){if(Jt=Td,ht="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=Ad,ht="onPointerLeave",W="onPointerEnter",G="pointer"),Oe=it==null?et:Ia(it),K=ne==null?et:Ia(ne),et=new Jt(ht,G+"leave",it,a,ft),et.target=Oe,et.relatedTarget=K,ht=null,Li(ft)===Q&&(Jt=new Jt(W,G+"enter",ne,a,ft),Jt.target=K,Jt.relatedTarget=Oe,ht=Jt),Oe=ht,it&&ne)e:{for(Jt=it,W=ne,G=0,K=Jt;K;K=Yr(K))G++;for(K=0,ht=W;ht;ht=Yr(ht))K++;for(;0<G-K;)Jt=Yr(Jt),G--;for(;0<K-G;)W=Yr(W),K--;for(;G--;){if(Jt===W||W!==null&&Jt===W.alternate)break e;Jt=Yr(Jt),W=Yr(W)}Jt=null}else Jt=null;it!==null&&mg(pt,et,it,Jt,!1),ne!==null&&Oe!==null&&mg(pt,Oe,ne,Jt,!0)}}t:{if(et=Q?Ia(Q):window,it=et.nodeName&&et.nodeName.toLowerCase(),it==="select"||it==="input"&&et.type==="file")var It=Od;else if(Ld(et))if(Pd)It=m0;else{It=d0;var pe=h0}else it=et.nodeName,!it||it.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Ru(Q.elementType)&&(It=Od):It=p0;if(It&&(It=It(e,Q))){Nd(pt,It,a,ft);break t}pe&&pe(e,et,Q),e==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&En(et,"number",et.value)}switch(pe=Q?Ia(Q):window,e){case"focusin":(Ld(pe)||pe.contentEditable==="true")&&(Er=pe,Gu=Q,Ns=null);break;case"focusout":Ns=Gu=Er=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,kd(pt,a,ft);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":kd(pt,a,ft)}var Yt;if(zu)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else yr?Dd(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(Rd&&a.locale!=="ko"&&(yr||te!=="onCompositionStart"?te==="onCompositionEnd"&&yr&&(Yt=yd()):(sa=ft,Lu="value"in sa?sa.value:sa.textContent,yr=!0)),pe=Ul(Q,te),0<pe.length&&(te=new bd(te,e,null,a,ft),pt.push({event:te,listeners:pe}),Yt?te.data=Yt:(Yt=Ud(a),Yt!==null&&(te.data=Yt)))),(Yt=o0?l0(e,a):u0(e,a))&&(te=Ul(Q,"onBeforeInput"),0<te.length&&(pe=new bd("onBeforeInput","beforeinput",null,a,ft),pt.push({event:pe,listeners:te}),pe.data=Yt)),$0(pt,e,Q,a,ft)}dg(pt,n)})}function oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ul(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bs(e,a),u!=null&&s.unshift(oo(e,u,f)),u=bs(e,n),u!=null&&s.push(oo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mg(e,n,a,s,u){for(var f=n._reactName,x=[];a!==null&&a!==s;){var T=a,N=T.alternate,Q=T.stateNode;if(T=T.tag,N!==null&&N===s)break;T!==5&&T!==26&&T!==27||Q===null||(N=Q,u?(Q=bs(a,f),Q!=null&&x.unshift(oo(a,Q,N))):u||(Q=bs(a,f),Q!=null&&x.push(oo(a,Q,N)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var iS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(iS,`
`).replace(aS,"")}function _g(e,n){return n=gg(n),gg(e)===n}function Ll(){}function Ne(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Nn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Nn(e,""+s);break;case"className":zt(e,"class",s);break;case"tabIndex":zt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,s);break;case"style":Sd(e,s,f);break;case"data":if(n!=="object"){zt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",u.name,u,null),Ne(e,n,"formEncType",u.formEncType,u,null),Ne(e,n,"formMethod",u.formMethod,u,null),Ne(e,n,"formTarget",u.formTarget,u,null)):(Ne(e,n,"encType",u.encType,u,null),Ne(e,n,"method",u.method,u,null),Ne(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Ho(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Ho(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":_e("beforetoggle",e),_e("toggle",e),wt(e,"popover",s);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":wt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ov.get(a)||a,wt(e,a,s))}}function hf(e,n,a,s,u,f){switch(a){case"style":Sd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Nn(e,s):(typeof s=="number"||typeof s=="bigint")&&Nn(e,""+s);break;case"onScroll":s!=null&&_e("scroll",e);break;case"onScrollEnd":s!=null&&_e("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[qe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):wt(e,a,s)}}}function xn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,f,x,a,null)}}u&&Ne(e,n,"srcSet",a.srcSet,a,null),s&&Ne(e,n,"src",a.src,a,null);return;case"input":_e("invalid",e);var T=f=x=u=null,N=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":x=ft;break;case"checked":N=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":T=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ne(e,n,s,ft,a,null)}}wn(e,f,T,N,Q,x,u,!1),me(e);return;case"select":_e("invalid",e),s=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":s=T;default:Ne(e,n,u,T,a,null)}n=f,a=x,e.multiple=!!s,n!=null?Ye(e,!!s,n,!1):a!=null&&Ye(e,!!s,a,!0);return;case"textarea":_e("invalid",e),f=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(e,n,x,T,a,null)}Sr(e,s,u,f),me(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(e,n,N,s,a,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(s=0;s<so.length;s++)_e(so[s],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,Q,s,a,null)}return;default:if(Ru(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&hf(e,n,ft,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Ne(e,n,T,s,a,null))}function rS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,N=null,Q=null,ft=null;for(it in a){var pt=a[it];if(a.hasOwnProperty(it)&&pt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":N=pt;default:s.hasOwnProperty(it)||Ne(e,n,it,null,s,pt)}}for(var et in s){var it=s[et];if(pt=a[et],s.hasOwnProperty(et)&&(it!=null||pt!=null))switch(et){case"type":f=it;break;case"name":u=it;break;case"checked":Q=it;break;case"defaultChecked":ft=it;break;case"value":x=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==pt&&Ne(e,n,et,it,s,pt)}}Be(e,x,T,N,Q,ft,f,u);return;case"select":it=x=T=et=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":it=N;default:s.hasOwnProperty(f)||Ne(e,n,f,null,s,N)}for(u in s)if(f=s[u],N=a[u],s.hasOwnProperty(u)&&(f!=null||N!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==N&&Ne(e,n,u,f,s,N)}n=T,a=x,s=it,et!=null?Ye(e,!!a,et,!1):!!s!=!!a&&(n!=null?Ye(e,!!a,n,!0):Ye(e,!!a,a?[]:"",!1));return;case"textarea":it=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(e,n,T,null,s,u)}for(x in s)if(u=s[x],f=a[x],s.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":et=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ne(e,n,x,u,s,f)}_n(e,et,it);return;case"option":for(var ne in a)if(et=a[ne],a.hasOwnProperty(ne)&&et!=null&&!s.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ne(e,n,ne,null,s,et)}for(N in s)if(et=s[N],it=a[N],s.hasOwnProperty(N)&&et!==it&&(et!=null||it!=null))switch(N){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(e,n,N,et,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)et=a[Jt],a.hasOwnProperty(Jt)&&et!=null&&!s.hasOwnProperty(Jt)&&Ne(e,n,Jt,null,s,et);for(Q in s)if(et=s[Q],it=a[Q],s.hasOwnProperty(Q)&&et!==it&&(et!=null||it!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ne(e,n,Q,et,s,it)}return;default:if(Ru(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!s.hasOwnProperty(Oe)&&hf(e,n,Oe,void 0,s,et);for(ft in s)et=s[ft],it=a[ft],!s.hasOwnProperty(ft)||et===it||et===void 0&&it===void 0||hf(e,n,ft,et,s,it);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!s.hasOwnProperty(W)&&Ne(e,n,W,null,s,et);for(pt in s)et=s[pt],it=a[pt],!s.hasOwnProperty(pt)||et===it||et==null&&it==null||Ne(e,n,pt,et,s,it)}var df=null,pf=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function mf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gf=null;function sS(){var e=window.event;return e&&e.type==="popstate"?e===gf?!1:(gf=e,!0):(gf=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Mg=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof Mg<"u"?function(e){return Mg.resolve(null).then(e).catch(uS)}:xg;function uS(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function yg(e,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=e.ownerDocument;if(a&1&&lo(x.documentElement),a&2&&lo(x.body),a&4)for(a=x.head,lo(a),x=a.firstChild;x;){var T=x.nextSibling,N=x.nodeName;x[xi]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=T}}if(u===0){e.removeChild(f),_o(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);_o(n)}function _f(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_f(a),vr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[xi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function fS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function hS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Sf=null;function Eg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Tg(e,n,a){switch(n=Nl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);vr(e)}var ii=new Map,bg=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=Z.d;Z.d={f:dS,r:pS,D:mS,C:gS,L:_S,m:vS,X:xS,S:SS,M:MS};function dS(){var e=qi.f(),n=bl();return e||n}function pS(e){var n=aa(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):qi.r(e)}var Zr=typeof document>"u"?null:document;function Ag(e,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var u=hn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),bg.has(u)||(bg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),xn(n,"link",e),en(n),s.head.appendChild(n)))}}function mS(e){qi.D(e),Ag("dns-prefetch",e,null)}function gS(e,n){qi.C(e,n),Ag("preconnect",e,n)}function _S(e,n,a){qi.L(e,n,a);var s=Zr;if(s&&e&&n){var u='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+hn(a.imageSizes)+'"]')):u+='[href="'+hn(e)+'"]';var f=u;switch(n){case"style":f=jr(e);break;case"script":f=Kr(e)}ii.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ii.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(uo(f))||n==="script"&&s.querySelector(co(f))||(n=s.createElement("link"),xn(n,"link",e),en(n),s.head.appendChild(n)))}}function vS(e,n){qi.m(e,n);var a=Zr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+hn(s)+'"][href="'+hn(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(e)}if(!ii.has(f)&&(e=g({rel:"modulepreload",href:e},n),ii.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(co(f)))return}s=a.createElement("link"),xn(s,"link",e),en(s),a.head.appendChild(s)}}}function SS(e,n,a){qi.S(e,n,a);var s=Zr;if(s&&e){var u=ra(s).hoistableStyles,f=jr(e);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=s.querySelector(uo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ii.get(f))&&xf(e,a);var N=x=s.createElement("link");en(N),xn(N,"link",e),N._p=new Promise(function(Q,ft){N.onload=Q,N.onerror=ft}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Pl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function xS(e,n){qi.X(e,n);var a=Zr;if(a&&e){var s=ra(a).hoistableScripts,u=Kr(e),f=s.get(u);f||(f=a.querySelector(co(u)),f||(e=g({src:e,async:!0},n),(n=ii.get(u))&&Mf(e,n),f=a.createElement("script"),en(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function MS(e,n){qi.M(e,n);var a=Zr;if(a&&e){var s=ra(a).hoistableScripts,u=Kr(e),f=s.get(u);f||(f=a.querySelector(co(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ii.get(u))&&Mf(e,n),f=a.createElement("script"),en(f),xn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Rg(e,n,a,s){var u=(u=tt.current)?Ol(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=ra(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jr(a.href);var f=ra(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(uo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),f||yS(u,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=ra(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function jr(e){return'href="'+hn(e)+'"'}function uo(e){return'link[rel="stylesheet"]['+e+"]"}function Cg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function yS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),xn(n,"link",a),en(n),e.head.appendChild(n))}function Kr(e){return'[src="'+hn(e)+'"]'}function co(e){return"script[async]"+e}function wg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+hn(a.href)+'"]');if(s)return n.instance=s,en(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),en(s),xn(s,"style",u),Pl(s,a.precedence,e),n.instance=s;case"stylesheet":u=jr(a.href);var f=e.querySelector(uo(u));if(f)return n.state.loading|=4,n.instance=f,en(f),f;s=Cg(a),(u=ii.get(u))&&xf(s,u),f=(e.ownerDocument||e).createElement("link"),en(f);var x=f;return x._p=new Promise(function(T,N){x.onload=T,x.onerror=N}),xn(f,"link",s),n.state.loading|=4,Pl(f,a.precedence,e),n.instance=f;case"script":return f=Kr(a.src),(u=e.querySelector(co(f)))?(n.instance=u,en(u),u):(s=a,(u=ii.get(f))&&(s=g({},a),Mf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),en(u),xn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,e));return n.instance}function Pl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,x=0;x<s.length;x++){var T=s[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Bl=null;function Dg(e,n,a){if(Bl===null){var s=new Map,u=Bl=new Map;u.set(a,s)}else u=Bl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[xi]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var T=s.get(x);T?T.push(f):s.set(x,[f])}}return s}function Ug(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ES(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fo=null;function TS(){}function bS(e,n,a){if(fo===null)throw Error(r(475));var s=fo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=jr(a.href),f=e.querySelector(uo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=zl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,en(f);return}f=e.ownerDocument||e,a=Cg(a),(u=ii.get(u))&&xf(a,u),f=f.createElement("link"),en(f);var x=f;x._p=new Promise(function(T,N){x.onload=T,x.onerror=N}),xn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function AS(){if(fo===null)throw Error(r(475));var e=fo;return e.stylesheets&&e.count===0&&yf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&yf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)yf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function yf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,n.forEach(RS,e),Il=null,zl.call(e))}function RS(e,n){if(!(n.state.loading&4)){var a=Il.get(e);if(a)var s=a.get(null);else{a=new Map,Il.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,u),a.set(x,u),this.count++,s=zl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ho={$$typeof:O,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function CS(e,n,a,s,u,f,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ng(e,n,a,s,u,f,x,T,N,Q,ft,pt){return e=new CS(e,n,a,x,T,N,Q,pt),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),e.current=f,f.stateNode=e,n=nc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},sc(f),e}function Og(e){return e?(e=Rr,e):Rr}function Pg(e,n,a,s,u,f){u=Og(u),s.context===null?s.context=u:s.pendingContext=u,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ca(e,s,n),a!==null&&(Yn(a,e,n),Vs(a,e,n))}function Bg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ef(e,n){Bg(e,n),(e=e.alternate)&&Bg(e,n)}function zg(e){if(e.tag===13){var n=Ar(e,67108864);n!==null&&Yn(n,e,67108864),Ef(e,67108864)}}var Fl=!0;function wS(e,n,a,s){var u=P.T;P.T=null;var f=Z.p;try{Z.p=2,Tf(e,n,a,s)}finally{Z.p=f,P.T=u}}function DS(e,n,a,s){var u=P.T;P.T=null;var f=Z.p;try{Z.p=8,Tf(e,n,a,s)}finally{Z.p=f,P.T=u}}function Tf(e,n,a,s){if(Fl){var u=bf(s);if(u===null)ff(e,n,s,Hl,a),Fg(e,s);else if(LS(u,e,n,a,s))s.stopPropagation();else if(Fg(e,s),n&4&&-1<US.indexOf(e)){for(;u!==null;){var f=aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Zt(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var N=1<<31-Pt(x);T.entanglements[1]|=N,x&=~N}bi(f),(Ce&6)===0&&(El=Ot()+500,ro(0))}}break;case 13:T=Ar(f,2),T!==null&&Yn(T,f,2),bl(),Ef(f,2)}if(f=bf(s),f===null&&ff(e,n,s,Hl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else ff(e,n,s,null,a)}}function bf(e){return e=wu(e),Af(e)}var Hl=null;function Af(e){if(Hl=null,e=Li(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hl=e,null}function Ig(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case Gt:return 2;case re:return 8;case ke:case Xe:return 32;case L:return 268435456;default:return 32}default:return 32}}var Rf=!1,Ea=null,Ta=null,ba=null,po=new Map,mo=new Map,Aa=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=aa(n),n!==null&&zg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function LS(e,n,a,s,u){switch(n){case"focusin":return Ea=go(Ea,e,n,a,s,u),!0;case"dragenter":return Ta=go(Ta,e,n,a,s,u),!0;case"mouseover":return ba=go(ba,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return po.set(f,go(po.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,mo.set(f,go(mo.get(f)||null,e,n,a,s,u)),!0}return!1}function Hg(e){var n=Li(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,oi(e.priority,function(){if(a.tag===13){var s=qn();s=ie(s);var u=Ar(a,s);u!==null&&Yn(u,a,s),Ef(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Cu=s,a.target.dispatchEvent(s),Cu=null}else return n=aa(a),n!==null&&zg(n),e.blockedOn=a,!1;n.shift()}return!0}function Gg(e,n,a){Gl(e)&&a.delete(n)}function NS(){Rf=!1,Ea!==null&&Gl(Ea)&&(Ea=null),Ta!==null&&Gl(Ta)&&(Ta=null),ba!==null&&Gl(ba)&&(ba=null),po.forEach(Gg),mo.forEach(Gg)}function Vl(e,n){e.blockedOn===n&&(e.blockedOn=null,Rf||(Rf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,NS)))}var kl=null;function Vg(e){kl!==e&&(kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Af(s||a)===null)continue;break}var f=aa(a);f!==null&&(e.splice(n,3),n-=3,bc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function _o(e){function n(N){return Vl(N,e)}Ea!==null&&Vl(Ea,e),Ta!==null&&Vl(Ta,e),ba!==null&&Vl(ba,e),po.forEach(n),mo.forEach(n);for(var a=0;a<Aa.length;a++){var s=Aa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Hg(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],x=u[qe]||null;if(typeof f=="function")x||Vg(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[qe]||null)T=x.formAction;else if(Af(u)!==null)continue}else T=x.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Vg(a)}}}function Cf(e){this._internalRoot=e}Xl.prototype.render=Cf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();Pg(a,s,e,n,null,null)},Xl.prototype.unmount=Cf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pg(e.current,2,null,e,null,null),bl(),n[Si]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=xe();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Hg(e)}};var kg=t.version;if(kg!=="19.1.1")throw Error(r(527,kg,"19.1.1"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var OS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{ct=Wl.inject(OS),dt=Wl}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=rm,f=sm,x=om,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=Ng(e,1,!1,null,null,a,s,u,f,x,T,null),e[Si]=n.current,cf(e),new Cf(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=rm,x=sm,T=om,N=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Ng(e,1,!0,n,a??null,s,u,f,x,T,N,Q),n.context=Og(null),a=n.current,s=qn(),s=ie(s),u=ua(s),u.callback=null,ca(a,u,s),a=s,n.current.lanes=a,Bt(n,a),bi(n),e[Si]=n.current,cf(e),new Xl(n)},So.version="19.1.1",So}var $g;function XS(){if($g)return Uf.exports;$g=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Uf.exports=kS(),Uf.exports}var WS=XS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="180",qS=0,t_=1,YS=2,J_=1,ZS=2,Ji=3,za=0,Fn=1,$i=2,Pa=0,ds=1,ph=2,e_=3,n_=4,jS=5,ur=100,KS=101,QS=102,JS=103,$S=104,tx=200,ex=201,nx=202,ix=203,mh=204,gh=205,ax=206,rx=207,sx=208,ox=209,lx=210,ux=211,cx=212,fx=213,hx=214,_h=0,vh=1,Sh=2,ms=3,xh=4,Mh=5,yh=6,Eh=7,$_=0,dx=1,px=2,Ba=0,mx=1,gx=2,_x=3,vx=4,Sx=5,xx=6,Mx=7,tv=300,gs=301,_s=302,Th=303,bh=304,Tu=306,Ah=1e3,fr=1001,Rh=1002,vi=1003,yx=1004,ql=1005,Ri=1006,Pf=1007,hr=1008,wi=1009,ev=1010,nv=1011,Ao=1012,sd=1013,pr=1014,ta=1015,Lo=1016,od=1017,ld=1018,Ro=1020,iv=35902,av=35899,rv=1021,sv=1022,gi=1023,Co=1026,wo=1027,ov=1028,ud=1029,lv=1030,cd=1031,fd=1033,gu=33776,_u=33777,vu=33778,Su=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Lh=36196,Nh=37492,Oh=37496,Ph=37808,Bh=37809,zh=37810,Ih=37811,Fh=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,Xh=37817,Wh=37818,qh=37819,Yh=37820,Zh=37821,jh=36492,Kh=36494,Qh=36495,Jh=36283,$h=36284,td=36285,ed=36286,Ex=3200,Tx=3201,uv=0,bx=1,Oa="",ri="srgb",vs="srgb-linear",Mu="linear",Pe="srgb",Qr=7680,i_=519,Ax=512,Rx=513,Cx=514,cv=515,wx=516,Dx=517,Ux=518,Lx=519,a_=35044,r_="300 es",Ci=2e3,yu=2001;class xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=Math.PI/180,nd=180/Math.PI;function No(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ve(o,t,i){return Math.max(t,Math.min(i,o))}function Nx(o,t){return(o%t+t)%t}function zf(o,t,i){return(1-i)*o+i*t}function xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function In(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const S=c[h+0],y=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=b,t[i+3]=R;return}if(_!==R||m!==S||p!==y||g!==b){let M=1-d;const v=m*S+p*y+g*b+_*R,z=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const I=Math.sqrt(O),H=Math.atan2(I,v*z);M=Math.sin(M*H)/I,d=Math.sin(d*H)/I}const D=d*z;if(m=m*M+S*D,p=p*M+y*D,g=g*M+b*D,_=_*M+R*D,M===1-d){const I=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=I,p*=I,g*=I,_*=I}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[h],S=c[h+1],y=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*y-p*S,t[i+1]=m*b+g*S+p*_-d*y,t[i+2]=p*b+g*y+d*S-m*_,t[i+3]=g*b-d*_-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),S=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*g*_+p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_-S*y*b;break;case"YXZ":this._x=S*g*_+p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_+S*y*b;break;case"ZXY":this._x=S*g*_-p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_-S*y*b;break;case"ZYX":this._x=S*g*_-p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_+S*y*b;break;case"YZX":this._x=S*g*_+p*y*b,this._y=p*y*_+S*g*b,this._z=p*g*b-S*y*_,this._w=p*g*_-S*y*b;break;case"XZY":this._x=S*g*_-p*y*b,this._y=p*y*_-S*g*b,this._z=p*g*b+S*y*_,this._w=p*g*_+S*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],S=r+d+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*_+this._w*S,this._x=r*_+this._x*S,this._y=l*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,i=0,r=0){at.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(s_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(s_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),_=2*(c*r-h*i);return this.x=i+m*p+h*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return If.copy(this).projectOnVector(t),this.sub(If)}reflect(t){return this.sub(If.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ve(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const If=new at,s_=new Oo;class le{constructor(t,i,r,l,c,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],S=r[2],y=r[5],b=r[8],R=l[0],M=l[3],v=l[6],z=l[1],O=l[4],D=l[7],I=l[2],H=l[5],F=l[8];return c[0]=h*R+d*z+m*I,c[3]=h*M+d*O+m*H,c[6]=h*v+d*D+m*F,c[1]=p*R+g*z+_*I,c[4]=p*M+g*O+_*H,c[7]=p*v+g*D+_*F,c[2]=S*R+y*z+b*I,c[5]=S*M+y*O+b*H,c[8]=S*v+y*D+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,S=d*m-g*c,y=p*c-h*m,b=i*_+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(l*p-g*r)*R,t[2]=(d*r-l*h)*R,t[3]=S*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ff.makeScale(t,i)),this}rotate(t){return this.premultiply(Ff.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ff.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ff=new le;function fv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Do(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ox(){const o=Do("canvas");return o.style.display="block",o}const o_={};function Uo(o){o in o_||(o_[o]=!0,console.warn(o))}function Px(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const l_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bx(){const o={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Pe&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Pe&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?Mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Uo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Uo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[vs]:{primaries:t,whitePoint:r,transfer:Mu,toXYZ:l_,fromXYZ:u_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:l_,fromXYZ:u_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Ee=Bx();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class zx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Jr===void 0&&(Jr=Do("canvas")),Jr.width=t.width,Jr.height=t.height;const l=Jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Do("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=na(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ix=0;class hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=No(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Hf(l[h].image)):c.push(Hf(l[h]))}else c=Hf(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?zx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fx=0;const Gf=new at;class Ln extends xs{constructor(t=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=fr,l=fr,c=Ri,h=hr,d=gi,m=wi,p=Ln.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=No(),this.name="",this.source=new hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gf).x}get height(){return this.source.getSize(Gf).y}get depth(){return this.source.getSize(Gf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ah:t.x=t.x-Math.floor(t.x);break;case fr:t.x=t.x<0?0:1;break;case Rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ah:t.y=t.y-Math.floor(t.y);break;case fr:t.y=t.y<0?0:1;break;case Rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=tv;Ln.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,r=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],S=m[1],y=m[5],b=m[9],R=m[2],M=m[6],v=m[10];if(Math.abs(g-S)<.01&&Math.abs(_-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(_+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(y+1)/2,I=(v+1)/2,H=(g+S)/4,F=(_+R)/4,j=(b+M)/4;return O>D&&O>I?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=H/r,c=F/r):D>I?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=H/l,c=j/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=j/c),this.set(r,l,c,i),this}let z=Math.sqrt((M-b)*(M-b)+(_-R)*(_-R)+(S-g)*(S-g));return Math.abs(z)<.001&&(z=1),this.x=(M-b)/z,this.y=(_-R)/z,this.z=(S-g)/z,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ve(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hx extends xs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Ln(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Hx{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class hv extends Ln{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gx extends Ln{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,hi):hi.fromBufferAttribute(c,h),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),Zl.subVectors(this.max,Mo),$r.subVectors(t.a,Mo),ts.subVectors(t.b,Mo),es.subVectors(t.c,Mo),Ca.subVectors(ts,$r),wa.subVectors(es,ts),er.subVectors($r,es);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-er.z,er.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,er.z,0,-er.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-er.y,er.x,0];return!Vf(i,$r,ts,es,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,$r,ts,es,Zl))?!1:(jl.crossVectors(Ca,wa),i=[jl.x,jl.y,jl.z],Vf(i,$r,ts,es,Zl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Yi=[new at,new at,new at,new at,new at,new at,new at,new at],hi=new at,Yl=new Po,$r=new at,ts=new at,es=new at,Ca=new at,wa=new at,er=new at,Mo=new at,Zl=new at,jl=new at,nr=new at;function Vf(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){nr.fromArray(o,c);const d=l.x*Math.abs(nr.x)+l.y*Math.abs(nr.y)+l.z*Math.abs(nr.z),m=t.dot(nr),p=i.dot(nr),g=r.dot(nr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Vx=new Po,yo=new at,kf=new at;class bu{constructor(t=new at,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Vx.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(kf)),this.expandByPoint(yo.copy(t.center).sub(kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Zi=new at,Xf=new at,Kl=new at,Da=new at,Wf=new at,Ql=new at,qf=new at;class dv{constructor(t=new at,i=new at(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Xf.copy(t).add(i).multiplyScalar(.5),Kl.copy(i).sub(t).normalize(),Da.copy(this.origin).sub(Xf);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Kl),d=Da.dot(this.direction),m=-Da.dot(Kl),p=Da.lengthSq(),g=Math.abs(1-h*h);let _,S,y,b;if(g>0)if(_=h*m-d,S=h*d-m,b=c*g,_>=0)if(S>=-b)if(S<=b){const R=1/g;_*=R,S*=R,y=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),y=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),y=-_*_+S*(S+2*m)+p;else S<=-b?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p):S<=b?(_=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),y=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Xf).addScaledVector(Kl,S),y}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,c){Wf.subVectors(i,t),Ql.subVectors(r,t),qf.crossVectors(Wf,Ql);let h=this.direction.dot(qf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,t);const m=d*this.direction.dot(Ql.crossVectors(Da,Ql));if(m<0)return null;const p=d*this.direction.dot(Wf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(qf);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,r,l,c,h,d,m,p,g,_,S,y,b,R,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,_,S,y,b,R,M)}set(t,i,r,l,c,h,d,m,p,g,_,S,y,b,R,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=S,v[3]=y,v[7]=b,v[11]=R,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ns.setFromMatrixColumn(t,0).length(),c=1/ns.setFromMatrixColumn(t,1).length(),h=1/ns.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*g,y=h*_,b=d*g,R=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+b*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=b+y*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,y=m*_,b=p*g,R=p*_;i[0]=S+R*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=y*d-b,i[6]=R+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,y=m*_,b=p*g,R=p*_;i[0]=S-R*d,i[4]=-h*_,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,y=h*_,b=d*g,R=d*_;i[0]=m*g,i[4]=b*p-y,i[8]=S*p+R,i[1]=m*_,i[5]=R*p+S,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-S*_,i[8]=b*_+y,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*_+b,i[10]=S-R*_}else if(t.order==="XZY"){const S=h*m,y=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=S*_+R,i[5]=h*g,i[9]=y*_-b,i[2]=b*_-y,i[6]=d*g,i[10]=R*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kx,t,Xx)}lookAt(t,i,r){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ua.crossVectors(r,Zn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ua.crossVectors(r,Zn)),Ua.normalize(),Jl.crossVectors(Zn,Ua),l[0]=Ua.x,l[4]=Jl.x,l[8]=Zn.x,l[1]=Ua.y,l[5]=Jl.y,l[9]=Zn.y,l[2]=Ua.z,l[6]=Jl.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],S=r[9],y=r[13],b=r[2],R=r[6],M=r[10],v=r[14],z=r[3],O=r[7],D=r[11],I=r[15],H=l[0],F=l[4],j=l[8],w=l[12],C=l[1],V=l[5],nt=l[9],ut=l[13],_t=l[2],lt=l[6],P=l[10],Z=l[14],q=l[3],St=l[7],U=l[11],J=l[15];return c[0]=h*H+d*C+m*_t+p*q,c[4]=h*F+d*V+m*lt+p*St,c[8]=h*j+d*nt+m*P+p*U,c[12]=h*w+d*ut+m*Z+p*J,c[1]=g*H+_*C+S*_t+y*q,c[5]=g*F+_*V+S*lt+y*St,c[9]=g*j+_*nt+S*P+y*U,c[13]=g*w+_*ut+S*Z+y*J,c[2]=b*H+R*C+M*_t+v*q,c[6]=b*F+R*V+M*lt+v*St,c[10]=b*j+R*nt+M*P+v*U,c[14]=b*w+R*ut+M*Z+v*J,c[3]=z*H+O*C+D*_t+I*q,c[7]=z*F+O*V+D*lt+I*St,c[11]=z*j+O*nt+D*P+I*U,c[15]=z*w+O*ut+D*Z+I*J,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],S=t[10],y=t[14],b=t[3],R=t[7],M=t[11],v=t[15];return b*(+c*m*_-l*p*_-c*d*S+r*p*S+l*d*y-r*m*y)+R*(+i*m*y-i*p*S+c*h*S-l*h*y+l*p*g-c*m*g)+M*(+i*p*_-i*d*y-c*h*_+r*h*y+c*d*g-r*p*g)+v*(-l*d*g-i*m*_+i*d*S+l*h*_-r*h*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],S=t[10],y=t[11],b=t[12],R=t[13],M=t[14],v=t[15],z=_*M*p-R*S*p+R*m*y-d*M*y-_*m*v+d*S*v,O=b*S*p-g*M*p-b*m*y+h*M*y+g*m*v-h*S*v,D=g*R*p-b*_*p+b*d*y-h*R*y-g*d*v+h*_*v,I=b*_*m-g*R*m-b*d*S+h*R*S+g*d*M-h*_*M,H=i*z+r*O+l*D+c*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=z*F,t[1]=(R*S*c-_*M*c-R*l*y+r*M*y+_*l*v-r*S*v)*F,t[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*v+r*m*v)*F,t[3]=(_*m*c-d*S*c-_*l*p+r*S*p+d*l*y-r*m*y)*F,t[4]=O*F,t[5]=(g*M*c-b*S*c+b*l*y-i*M*y-g*l*v+i*S*v)*F,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*F,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*y+i*m*y)*F,t[8]=D*F,t[9]=(b*_*c-g*R*c-b*r*y+i*R*y+g*r*v-i*_*v)*F,t[10]=(h*R*c-b*d*c+b*r*p-i*R*p-h*r*v+i*d*v)*F,t[11]=(g*d*c-h*_*c-g*r*p+i*_*p+h*r*y-i*d*y)*F,t[12]=I*F,t[13]=(g*R*l-b*_*l+b*r*S-i*R*S-g*r*M+i*_*M)*F,t[14]=(b*d*l-h*R*l-b*r*m+i*R*m+h*r*M-i*d*M)*F,t[15]=(h*_*l-g*d*l+g*r*m-i*_*m-h*r*S+i*d*S)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,S=c*p,y=c*g,b=c*_,R=h*g,M=h*_,v=d*_,z=m*p,O=m*g,D=m*_,I=r.x,H=r.y,F=r.z;return l[0]=(1-(R+v))*I,l[1]=(y+D)*I,l[2]=(b-O)*I,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(S+v))*H,l[6]=(M+z)*H,l[7]=0,l[8]=(b+O)*F,l[9]=(M-z)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const p=1/c,g=1/h,_=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=_,di.elements[9]*=_,di.elements[10]*=_,i.setFromRotationMatrix(di),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Ci,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===Ci)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===yu)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Ci,m=!1){const p=this.elements,g=2/(i-t),_=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===Ci)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===yu)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ns=new at,di=new Qe,kx=new at(0,0,0),Xx=new at(1,1,1),Ua=new at,Jl=new at,Zn=new at,c_=new Qe,f_=new Oo;class Di{constructor(t=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return c_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(c_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return f_.setFromEuler(this),this.setFromQuaternion(f_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wx=0;const h_=new at,is=new Oo,ji=new Qe,$l=new at,Eo=new at,qx=new at,Yx=new Oo,d_=new at(1,0,0),p_=new at(0,1,0),m_=new at(0,0,1),g_={type:"added"},Zx={type:"removed"},as={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Mn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new at,i=new Di,r=new Oo,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new le}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(d_,t)}rotateY(t){return this.rotateOnAxis(p_,t)}rotateZ(t){return this.rotateOnAxis(m_,t)}translateOnAxis(t,i){return h_.copy(t).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(d_,t)}translateY(t){return this.translateOnAxis(p_,t)}translateZ(t){return this.translateOnAxis(m_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$l.copy(t):$l.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Eo,$l,this.up):ji.lookAt($l,Eo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),is.setFromRotationMatrix(ji),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(g_),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Zx),Yf.child=t,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(g_),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,qx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Yx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),S=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new at(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new at,Ki=new at,Zf=new at,Qi=new at,rs=new at,ss=new at,__=new at,jf=new at,Kf=new at,Qf=new at,Jf=new Ke,$f=new Ke,th=new Ke;class mi{constructor(t=new at,i=new at,r=new at){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),pi.subVectors(t,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){pi.subVectors(l,i),Ki.subVectors(r,i),Zf.subVectors(t,i);const h=pi.dot(pi),d=pi.dot(Ki),m=pi.dot(Zf),p=Ki.dot(Ki),g=Ki.dot(Zf),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,y=(p*m-d*g)*S,b=(h*g-d*m)*S;return c.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Jf.setScalar(0),$f.setScalar(0),th.setScalar(0),Jf.fromBufferAttribute(t,i),$f.fromBufferAttribute(t,r),th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Jf,c.x),h.addScaledVector($f,c.y),h.addScaledVector(th,c.z),h}static isFrontFacing(t,i,r,l){return pi.subVectors(r,i),Ki.subVectors(t,i),pi.cross(Ki).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),pi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(c,r),jf.subVectors(t,r);const m=rs.dot(jf),p=ss.dot(jf);if(m<=0&&p<=0)return i.copy(r);Kf.subVectors(t,l);const g=rs.dot(Kf),_=ss.dot(Kf);if(g>=0&&_<=g)return i.copy(l);const S=m*_-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(rs,h);Qf.subVectors(t,c);const y=rs.dot(Qf),b=ss.dot(Qf);if(b>=0&&y<=b)return i.copy(c);const R=y*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ss,d);const M=g*b-y*_;if(M<=0&&_-g>=0&&y-b>=0)return __.subVectors(c,l),d=(_-g)/(_-g+(y-b)),i.copy(l).addScaledVector(__,d);const v=1/(M+R+S);return h=R*v,d=S*v,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},tu={h:0,s:0,l:0};function eh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Te{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ee.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ee.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ee.workingColorSpace){if(t=Nx(t,1),i=ve(i,0,1),r=ve(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=eh(h,c,t+1/3),this.g=eh(h,c,t),this.b=eh(h,c,t-1/3)}return Ee.colorSpaceToWorking(this,l),this}setStyle(t,i=ri){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ri){const r=mv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Ee.workingToColorSpace(Rn.copy(this),t),Math.round(ve(Rn.r*255,0,255))*65536+Math.round(ve(Rn.g*255,0,255))*256+Math.round(ve(Rn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ee.workingColorSpace){Ee.workingToColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ee.workingColorSpace){return Ee.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ri){Ee.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==ri?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(La),this.setHSL(La.h+t,La.s+i,La.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(La),t.getHSL(tu);const r=zf(La.h,tu.h,i),l=zf(La.s,tu.s,i),c=zf(La.l,tu.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Te;Te.NAMES=mv;let jx=0;class Ms extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ds,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==ur&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dd extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const rn=new at,eu=new Ae;let Kx=0;class Hn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=a_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)eu.fromBufferAttribute(this,i),eu.applyMatrix3(t),this.setXY(i,eu.x,eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(t),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=In(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==a_&&(t.usage=this.usage),t}}class gv extends Hn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class _v extends Hn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class dr extends Hn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Qx=0;const ai=new Qe,nh=new Mn,os=new at,jn=new Po,To=new Po,gn=new at;class Ui extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fv(t)?_v:gv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,i,r){return ai.makeTranslation(t,i,r),this.applyMatrix4(ai),this}scale(t,i,r){return ai.makeScale(t,i,r),this.applyMatrix4(ai),this}lookAt(t){return nh.lookAt(t),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];To.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(jn.min,To.min),jn.expandByPoint(gn),gn.addVectors(jn.max,To.max),jn.expandByPoint(gn)):(jn.expandByPoint(To.min),jn.expandByPoint(To.max))}jn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(t,p),gn.add(os)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new at,m[j]=new at;const p=new at,g=new at,_=new at,S=new Ae,y=new Ae,b=new Ae,R=new at,M=new at;function v(j,w,C){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),S.fromBufferAttribute(c,j),y.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),g.sub(p),_.sub(p),y.sub(S),b.sub(S);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-y.y).multiplyScalar(V),M.copy(_).multiplyScalar(y.x).addScaledVector(g,-b.x).multiplyScalar(V),d[j].add(R),d[w].add(R),d[C].add(R),m[j].add(M),m[w].add(M),m[C].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let j=0,w=z.length;j<w;++j){const C=z[j],V=C.start,nt=C.count;for(let ut=V,_t=V+nt;ut<_t;ut+=3)v(t.getX(ut+0),t.getX(ut+1),t.getX(ut+2))}const O=new at,D=new at,I=new at,H=new at;function F(j){I.fromBufferAttribute(l,j),H.copy(I);const w=d[j];O.copy(w),O.sub(I.multiplyScalar(I.dot(w))).normalize(),D.crossVectors(H,w);const V=D.dot(m[j])<0?-1:1;h.setXYZW(j,O.x,O.y,O.z,V)}for(let j=0,w=z.length;j<w;++j){const C=z[j],V=C.start,nt=C.count;for(let ut=V,_t=V+nt;ut<_t;ut+=3)F(t.getX(ut+0)),F(t.getX(ut+1)),F(t.getX(ut+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new at,c=new at,h=new at,d=new at,m=new at,p=new at,g=new at,_=new at;if(t)for(let S=0,y=t.count;S<y;S+=3){const b=t.getX(S+0),R=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,S=new p.constructor(m.length*g);let y=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?y=m[R]*d.data.stride+d.offset:y=m[R]*g;for(let v=0;v<g;v++)S[b++]=p[y++]}return new Hn(S,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const S=p[g],y=t(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,S=p.length;_<S;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let S=0,y=_.length;S<y;S++)g.push(_[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new Qe,ir=new dv,nu=new bu,S_=new at,iu=new at,au=new at,ru=new at,ih=new at,su=new at,x_=new at,ou=new at;class _i extends Mn{constructor(t=new Ui,i=new dd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){su.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(ih.fromBufferAttribute(_,t),h?su.addScaledVector(ih,g):su.addScaledVector(ih.sub(i),g))}i.add(su)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nu.copy(r.boundingSphere),nu.applyMatrix4(c),ir.copy(t.ray).recast(t.near),!(nu.containsPoint(ir.origin)===!1&&(ir.intersectSphere(nu,S_)===null||ir.origin.distanceToSquared(S_)>(t.far-t.near)**2))&&(v_.copy(c).invert(),ir.copy(t.ray).applyMatrix4(v_),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ir)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const M=S[b],v=h[M.materialIndex],z=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,I=O;D<I;D+=3){const H=d.getX(D),F=d.getX(D+1),j=d.getX(D+2);l=lu(this,v,t,r,p,g,_,H,F,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=b,v=R;M<v;M+=3){const z=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=lu(this,h,t,r,p,g,_,z,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=S.length;b<R;b++){const M=S[b],v=h[M.materialIndex],z=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=z,I=O;D<I;D+=3){const H=D,F=D+1,j=D+2;l=lu(this,v,t,r,p,g,_,H,F,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let M=b,v=R;M<v;M+=3){const z=M,O=M+1,D=M+2;l=lu(this,h,t,r,p,g,_,z,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Jx(o,t,i,r,l,c,h,d){let m;if(t.side===Fn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===za,d),m===null)return null;ou.copy(d),ou.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ou);return p<i.near||p>i.far?null:{distance:p,point:ou.clone(),object:o}}function lu(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,iu),o.getVertexPosition(m,au),o.getVertexPosition(p,ru);const g=Jx(o,t,i,r,iu,au,ru,x_);if(g){const _=new at;mi.getBarycoord(x_,iu,au,ru,_),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,_,new Ae)),c&&(g.uv1=mi.getInterpolatedAttribute(c,d,m,p,_,new Ae)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,_,new at),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new at,materialIndex:0};mi.getNormal(iu,au,ru,S.normal),g.face=S,g.barycoord=_}return g}class ys extends Ui{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,t,h,c,0),b("z","y","x",1,-1,r,i,-t,h,c,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new dr(p,3)),this.setAttribute("normal",new dr(g,3)),this.setAttribute("uv",new dr(_,2));function b(R,M,v,z,O,D,I,H,F,j,w){const C=D/F,V=I/j,nt=D/2,ut=I/2,_t=H/2,lt=F+1,P=j+1;let Z=0,q=0;const St=new at;for(let U=0;U<P;U++){const J=U*V-ut;for(let vt=0;vt<lt;vt++){const xt=vt*C-nt;St[R]=xt*z,St[M]=J*O,St[v]=_t,p.push(St.x,St.y,St.z),St[R]=0,St[M]=0,St[v]=H>0?1:-1,g.push(St.x,St.y,St.z),_.push(vt/F),_.push(1-U/j),Z+=1}}for(let U=0;U<j;U++)for(let J=0;J<F;J++){const vt=S+J+lt*U,xt=S+J+lt*(U+1),Dt=S+(J+1)+lt*(U+1),Ft=S+(J+1)+lt*U;m.push(vt,xt,Ft),m.push(xt,Dt,Ft),q+=6}d.addGroup(y,q,w),y+=q,S+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ss(o[i]);for(const l in r)t[l]=r[l]}return t}function $x(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function vv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const tM={clone:Ss,merge:Un};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=$x(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Sv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new at,M_=new Ae,y_=new Ae;class si extends Sv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(Bf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-t/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Na.x,Na.y).multiplyScalar(-t/Na.z)}getViewSize(t,i){return this.getViewBounds(t,M_,y_),i.subVectors(y_,M_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,us=1;class iM extends Mn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(ls,us,t,i);l.layers=this.layers,this.add(l);const c=new si(ls,us,t,i);c.layers=this.layers,this.add(c);const h=new si(ls,us,t,i);h.layers=this.layers,this.add(h);const d=new si(ls,us,t,i);d.layers=this.layers,this.add(d);const m=new si(ls,us,t,i);m.layers=this.layers,this.add(m);const p=new si(ls,us,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,S,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class xv extends Ln{constructor(t=[],i=gs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class aM extends mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ys(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:Ss(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Pa});c.uniforms.tEquirect.value=i;const h=new _i(l,c),d=i.minFilter;return i.minFilter===hr&&(i.minFilter=Ri),new iM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class uu extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rM={type:"move"};class ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),v=this._getHandJoint(p,R);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=g.position.distanceTo(_.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new uu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Mv extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const rh=new at,sM=new at,oM=new le;class or{constructor(t=new at(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=rh.subVectors(r,i).cross(sM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(rh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||oM.getNormalMatrix(t),l=this.coplanarPoint(rh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new bu,lM=new Ae(.5,.5),cu=new at;class pd{constructor(t=new or,i=new or,r=new or,l=new or,c=new or,h=new or){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ci,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],S=c[6],y=c[7],b=c[8],R=c[9],M=c[10],v=c[11],z=c[12],O=c[13],D=c[14],I=c[15];if(l[0].setComponents(p-h,y-g,v-b,I-z).normalize(),l[1].setComponents(p+h,y+g,v+b,I+z).normalize(),l[2].setComponents(p+d,y+_,v+R,I+O).normalize(),l[3].setComponents(p-d,y-_,v-R,I-O).normalize(),r)l[4].setComponents(m,S,M,D).normalize(),l[5].setComponents(p-m,y-S,v-M,I-D).normalize();else if(l[4].setComponents(p-m,y-S,v-M,I-D).normalize(),i===Ci)l[5].setComponents(p+m,y+S,v+M,I+D).normalize();else if(i===yu)l[5].setComponents(m,S,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);const i=lM.distanceTo(t.center);return ar.radius=.7071067811865476+i,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(cu.x=l.normal.x>0?t.max.x:t.min.x,cu.y=l.normal.y>0?t.max.y:t.min.y,cu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(cu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yv extends Ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const E_=new Qe,id=new dv,fu=new bu,hu=new at;class Ev extends Mn{constructor(t=new Ui,i=new yv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fu.copy(r.boundingSphere),fu.applyMatrix4(l),fu.radius+=c,t.ray.intersectsSphere(fu)===!1)return;E_.copy(l).invert(),id.copy(t.ray).applyMatrix4(E_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,_=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let b=S,R=y;b<R;b++){const M=p.getX(b);hu.fromBufferAttribute(_,M),T_(hu,M,m,l,t,i,this)}}else{const S=Math.max(0,h.start),y=Math.min(_.count,h.start+h.count);for(let b=S,R=y;b<R;b++)hu.fromBufferAttribute(_,b),T_(hu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T_(o,t,i,r,l,c,h){const d=id.distanceSqToPoint(o);if(d<i){const m=new at;id.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Tv extends Ln{constructor(t,i,r=pr,l,c,h,d=vi,m=vi,p,g=Co,_=1){if(g!==Co&&g!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class bv extends Ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bo extends Ui{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=t/d,S=i/m,y=[],b=[],R=[],M=[];for(let v=0;v<g;v++){const z=v*S-h;for(let O=0;O<p;O++){const D=O*_-c;b.push(D,-z,0),R.push(0,0,1),M.push(O/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let z=0;z<d;z++){const O=z+p*v,D=z+p*(v+1),I=z+1+p*(v+1),H=z+1+p*v;y.push(O,D,H),y.push(D,I,H)}this.setIndex(y),this.setAttribute("position",new dr(b,3)),this.setAttribute("normal",new dr(R,3)),this.setAttribute("uv",new dr(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.widthSegments,t.heightSegments)}}class uM extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uv,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cM extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fM extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sh={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class hM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,S=p.length;_<S;_+=2){const y=p[_],b=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const dM=new hM;class md{constructor(t){this.manager=t!==void 0?t:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}md.DEFAULT_MATERIAL_NAME="__DEFAULT";const cs=new WeakMap;class pM extends md{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=sh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let _=cs.get(h);_===void 0&&(_=[],cs.set(h,_)),_.push({onLoad:i,onError:l})}return h}const d=Do("img");function m(){g(),i&&i(this);const _=cs.get(this)||[];for(let S=0;S<_.length;S++){const y=_[S];y.onLoad&&y.onLoad(this)}cs.delete(this),c.manager.itemEnd(t)}function p(_){g(),l&&l(_),sh.remove(`image:${t}`);const S=cs.get(this)||[];for(let y=0;y<S.length;y++){const b=S[y];b.onError&&b.onError(_)}cs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),sh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class mM extends md{constructor(t){super(t)}load(t,i,r,l){const c=new Ln,h=new pM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class Av extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const oh=new Qe,b_=new at,A_=new at;class gM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;b_.setFromMatrixPosition(t.matrixWorld),i.position.copy(b_),A_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gd extends Sv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _M extends gM{constructor(){super(new gd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vM extends Av{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new _M}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class SM extends Av{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class xM extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function R_(o,t,i,r){const l=MM(r);switch(i){case rv:return o*t;case ov:return o*t/l.components*l.byteLength;case ud:return o*t/l.components*l.byteLength;case lv:return o*t*2/l.components*l.byteLength;case cd:return o*t*2/l.components*l.byteLength;case sv:return o*t*3/l.components*l.byteLength;case gi:return o*t*4/l.components*l.byteLength;case fd:return o*t*4/l.components*l.byteLength;case gu:case _u:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vu:case Su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wh:case Uh:return Math.max(o,16)*Math.max(t,8)/4;case Ch:case Dh:return Math.max(o,8)*Math.max(t,8)/2;case Lh:case Nh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Hh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case kh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case jh:case Kh:case Qh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Jh:case $h:return Math.ceil(o/4)*Math.ceil(t/4)*8;case td:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function MM(o){switch(o){case wi:case ev:return{byteLength:1,components:1};case Ao:case nv:case Lo:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case pr:case sd:case ta:return{byteLength:4,components:1};case iv:case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function yM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<_.length;y++){const b=_[S],R=_[y];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++S,_[S]=R)}_.length=S+1;for(let y=0,b=_.length;y<b;y++){const R=_[y];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
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
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
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
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BM=`#ifdef USE_IRIDESCENCE
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
#endif`,zM=`#ifdef USE_BUMPMAP
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qM=`#define PI 3.141592653589793
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
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cy=`#ifdef USE_GRADIENTMAP
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
}`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
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
#endif`,My=`struct PhysicalMaterial {
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
}`,yy=`
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
#endif`,Ey=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`#ifdef USE_MORPHTARGETS
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
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oE=`float getShadowMask() {
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
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uE=`#ifdef USE_SKINNING
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
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#ifdef USE_TRANSMISSION
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,DE=`#define DISTANCE
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
}`,UE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`uniform float scale;
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
}`,PE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,zE=`uniform vec3 diffuse;
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
}`,IE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,HE=`#define MATCAP
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
}`,GE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,kE=`#define NORMAL
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
}`,XE=`#define PHONG
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
}`,WE=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,YE=`#define STANDARD
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
}`,ZE=`#define TOON
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
}`,jE=`#define TOON
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
}`,KE=`uniform float size;
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,$E=`uniform vec3 color;
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
}`,tT=`uniform float rotation;
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
}`,eT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:EM,alphahash_pars_fragment:TM,alphamap_fragment:bM,alphamap_pars_fragment:AM,alphatest_fragment:RM,alphatest_pars_fragment:CM,aomap_fragment:wM,aomap_pars_fragment:DM,batching_pars_vertex:UM,batching_vertex:LM,begin_vertex:NM,beginnormal_vertex:OM,bsdfs:PM,iridescence_fragment:BM,bumpmap_pars_fragment:zM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:HM,clipping_planes_vertex:GM,color_fragment:VM,color_pars_fragment:kM,color_pars_vertex:XM,color_vertex:WM,common:qM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:jM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:JM,colorspace_fragment:$M,colorspace_pars_fragment:ty,envmap_fragment:ey,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:sy,fog_pars_vertex:oy,fog_fragment:ly,fog_pars_fragment:uy,gradientmap_pars_fragment:cy,lightmap_pars_fragment:fy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:dy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:_y,lights_phong_fragment:vy,lights_phong_pars_fragment:Sy,lights_physical_fragment:xy,lights_physical_pars_fragment:My,lights_fragment_begin:yy,lights_fragment_maps:Ey,lights_fragment_end:Ty,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Ry,logdepthbuf_vertex:Cy,map_fragment:wy,map_pars_fragment:Dy,map_particle_fragment:Uy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Oy,morphinstance_vertex:Py,morphcolor_vertex:By,morphnormal_vertex:zy,morphtarget_pars_vertex:Iy,morphtarget_vertex:Fy,normal_fragment_begin:Hy,normal_fragment_maps:Gy,normal_pars_fragment:Vy,normal_pars_vertex:ky,normal_vertex:Xy,normalmap_pars_fragment:Wy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:jy,opaque_fragment:Ky,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:$y,dithering_fragment:tE,dithering_pars_fragment:eE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:aE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:oE,skinbase_vertex:lE,skinning_pars_vertex:uE,skinning_vertex:cE,skinnormal_vertex:fE,specularmap_fragment:hE,specularmap_pars_fragment:dE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:_E,uv_pars_fragment:vE,uv_pars_vertex:SE,uv_vertex:xE,worldpos_vertex:ME,background_vert:yE,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:bE,cube_vert:AE,cube_frag:RE,depth_vert:CE,depth_frag:wE,distanceRGBA_vert:DE,distanceRGBA_frag:UE,equirect_vert:LE,equirect_frag:NE,linedashed_vert:OE,linedashed_frag:PE,meshbasic_vert:BE,meshbasic_frag:zE,meshlambert_vert:IE,meshlambert_frag:FE,meshmatcap_vert:HE,meshmatcap_frag:GE,meshnormal_vert:VE,meshnormal_frag:kE,meshphong_vert:XE,meshphong_frag:WE,meshphysical_vert:qE,meshphysical_frag:YE,meshtoon_vert:ZE,meshtoon_frag:jE,points_vert:KE,points_frag:QE,shadow_vert:JE,shadow_frag:$E,sprite_vert:tT,sprite_frag:eT},Nt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ai={basic:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Un([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Un([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Un([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Un([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Un([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Un([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Un([Nt.common,Nt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Un([Nt.lights,Nt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ai.physical={uniforms:Un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const du={r:0,b:0,g:0},rr=new Di,nT=new Qe;function iT(o,t,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,g,_=null,S=0,y=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const I=b(O);I===null?v(d,m):I&&I.isColor&&(v(I,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const I=b(D);I&&(I.isCubeTexture||I.mapping===Tu)?(g===void 0&&(g=new _i(new ys(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Ss(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),rr.copy(D.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(nT.makeRotationFromEuler(rr)),g.material.toneMapped=Ee.getTransfer(I.colorSpace)!==Pe,(_!==I||S!==I.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,_=I,S=I.version,y=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new _i(new Bo(2,2),new ia({name:"BackgroundMaterial",uniforms:Ss(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ee.getTransfer(I.colorSpace)!==Pe,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||S!==I.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=I,S=I.version,y=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,D){O.getRGB(du,vv(o)),r.buffers.color.setClear(du.r,du.g,du.b,D,h)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,v(d,m)},render:R,addToRenderList:M,dispose:z}}function aT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(C,V,nt,ut,_t){let lt=!1;const P=_(ut,nt,V);c!==P&&(c=P,p(c.object)),lt=y(C,ut,nt,_t),lt&&b(C,ut,nt,_t),_t!==null&&t.update(_t,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(C,V,nt,ut),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(_t).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,V,nt){const ut=nt.wireframe===!0;let _t=r[C.id];_t===void 0&&(_t={},r[C.id]=_t);let lt=_t[V.id];lt===void 0&&(lt={},_t[V.id]=lt);let P=lt[ut];return P===void 0&&(P=S(m()),lt[ut]=P),P}function S(C){const V=[],nt=[],ut=[];for(let _t=0;_t<i;_t++)V[_t]=0,nt[_t]=0,ut[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:nt,attributeDivisors:ut,object:C,attributes:{},index:null}}function y(C,V,nt,ut){const _t=c.attributes,lt=V.attributes;let P=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){const U=_t[q];let J=lt[q];if(J===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;P++}return c.attributesNum!==P||c.index!==ut}function b(C,V,nt,ut){const _t={},lt=V.attributes;let P=0;const Z=nt.getAttributes();for(const q in Z)if(Z[q].location>=0){let U=lt[q];U===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),_t[q]=J,P++}c.attributes=_t,c.attributesNum=P,c.index=ut}function R(){const C=c.newAttributes;for(let V=0,nt=C.length;V<nt;V++)C[V]=0}function M(C){v(C,0)}function v(C,V){const nt=c.newAttributes,ut=c.enabledAttributes,_t=c.attributeDivisors;nt[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),_t[C]!==V&&(o.vertexAttribDivisor(C,V),_t[C]=V)}function z(){const C=c.newAttributes,V=c.enabledAttributes;for(let nt=0,ut=V.length;nt<ut;nt++)V[nt]!==C[nt]&&(o.disableVertexAttribArray(nt),V[nt]=0)}function O(C,V,nt,ut,_t,lt,P){P===!0?o.vertexAttribIPointer(C,V,nt,_t,lt):o.vertexAttribPointer(C,V,nt,ut,_t,lt)}function D(C,V,nt,ut){R();const _t=ut.attributes,lt=nt.getAttributes(),P=V.defaultAttributeValues;for(const Z in lt){const q=lt[Z];if(q.location>=0){let St=_t[Z];if(St===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const U=St.normalized,J=St.itemSize,vt=t.get(St);if(vt===void 0)continue;const xt=vt.buffer,Dt=vt.type,Ft=vt.bytesPerElement,tt=Dt===o.INT||Dt===o.UNSIGNED_INT||St.gpuType===sd;if(St.isInterleavedBufferAttribute){const mt=St.data,bt=mt.stride,jt=St.offset;if(mt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<q.locationSize;Wt++)v(q.location+Wt,mt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Wt=0;Wt<q.locationSize;Wt++)M(q.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Wt=0;Wt<q.locationSize;Wt++)O(q.location+Wt,J/q.locationSize,Dt,U,bt*Ft,(jt+J/q.locationSize*Wt)*Ft,tt)}else{if(St.isInstancedBufferAttribute){for(let mt=0;mt<q.locationSize;mt++)v(q.location+mt,St.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let mt=0;mt<q.locationSize;mt++)M(q.location+mt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let mt=0;mt<q.locationSize;mt++)O(q.location+mt,J/q.locationSize,Dt,U,J*Ft,J/q.locationSize*mt*Ft,tt)}}else if(P!==void 0){const U=P[Z];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(q.location,U);break;case 3:o.vertexAttrib3fv(q.location,U);break;case 4:o.vertexAttrib4fv(q.location,U);break;default:o.vertexAttrib1fv(q.location,U)}}}}z()}function I(){j();for(const C in r){const V=r[C];for(const nt in V){const ut=V[nt];for(const _t in ut)g(ut[_t].object),delete ut[_t];delete V[nt]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const nt in V){const ut=V[nt];for(const _t in ut)g(ut[_t].object),delete ut[_t];delete V[nt]}delete r[C.id]}function F(C){for(const V in r){const nt=r[V];if(nt[C.id]===void 0)continue;const ut=nt[C.id];for(const _t in ut)g(ut[_t].object),delete ut[_t];delete nt[C.id]}}function j(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:M,disableUnusedAttributes:z}}function rT(o,t,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b];i.update(y,r,1)}function m(p,g,_,S){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,_);let b=0;for(let R=0;R<_;R++)b+=g[R]*S[R];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function sT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==gi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===Lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==wi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ta&&!j)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=b>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:I,maxSamples:H}}function oT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new or,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||r!==0||l;return l=S,r=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=g(_,S,0)},this.setState=function(_,S,y){const b=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const z=c?0:r,O=z*4;let D=v.clippingState||null;m.value=D,D=g(b,S,O,y);for(let I=0;I!==O;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,S,y,b){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const v=y+R*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(M===null||M.length<v)&&(M=new Float32Array(v));for(let O=0,D=y;O!==R;++O,D+=4)h.copy(_[O]).applyMatrix4(z,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function lT(o){let t=new WeakMap;function i(h,d){return d===Th?h.mapping=gs:d===bh&&(h.mapping=_s),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Th||d===bh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new aM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const hs=4,C_=[.125,.215,.35,.446,.526,.582],cr=20,lh=new gd,w_=new Te;let uh=null,ch=0,fh=0,hh=!1;const lr=(1+Math.sqrt(5))/2,fs=1/lr,D_=[new at(-lr,fs,0),new at(lr,fs,0),new at(-fs,0,lr),new at(fs,0,lr),new at(0,lr,-fs),new at(0,lr,fs),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)],uT=new at;class U_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=uT}=c;uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,ch,fh),this._renderer.xr.enabled=hh,t.scissorTest=!1,pu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===gs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Lo,format:gi,colorSpace:vs,depthBuffer:!1},l=L_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cT(c)),this._blurMaterial=fT(c,t,i)}return l}_compileMaterial(t){const i=new _i(this._lodPlanes[0],t);this._renderer.compile(i,lh)}_sceneToCubeUV(t,i,r,l,c){const m=new si(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(w_),_.toneMapping=Ba,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new dd({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),M=new _i(new ys,R);let v=!1;const z=t.background;z?z.isColor&&(R.color.copy(z),t.background=null,v=!0):(R.color.copy(w_),v=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const I=this._cubeSize;pu(l,D*I,O>2?I:0,I,I),_.setRenderTarget(l),v&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=S,t.background=z}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===gs||t.mapping===_s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new _i(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;pu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,lh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=D_[(l-c-1)%D_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new _i(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*cr-1),R=c/b,M=isFinite(c)?1+Math.floor(g*R):cr;M>cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${cr}`);const v=[];let z=0;for(let F=0;F<cr;++F){const j=F/R,w=Math.exp(-j*j/2);v.push(w),F===0?z+=w:F<M&&(z+=2*w)}for(let F=0;F<v.length;F++)v[F]=v[F]/z;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-r;const D=this._sizeLods[l],I=3*D*(l>O-hs?l-O+hs:0),H=4*(this._cubeSize-D);pu(i,I,H,3*D,2*D),m.setRenderTarget(i),m.render(_,lh)}}function cT(o){const t=[],i=[],r=[];let l=o;const c=o-hs+1+C_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=C_[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,S=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,b=6,R=3,M=2,v=1,z=new Float32Array(R*b*y),O=new Float32Array(M*b*y),D=new Float32Array(v*b*y);for(let H=0;H<y;H++){const F=H%3*2/3-1,j=H>2?0:-1,w=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];z.set(w,R*b*H),O.set(S,M*b*H);const C=[H,H,H,H,H,H];D.set(C,v*b*H)}const I=new Ui;I.setAttribute("position",new Hn(z,R)),I.setAttribute("uv",new Hn(O,M)),I.setAttribute("faceIndex",new Hn(D,v)),t.push(I),l>hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function L_(o,t,i){const r=new mr(o,t,i);return r.texture.mapping=Tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pu(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function fT(o,t,i){const r=new Float32Array(cr),l=new at(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function N_(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function O_(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function hT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Th||m===bh,g=m===gs||m===_s;if(p||g){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new U_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new U_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function dT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Uo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function pT(o,t,i,r){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(_){const S=[],y=_.index,b=_.attributes.position;let R=0;if(y!==null){const z=y.array;R=y.version;for(let O=0,D=z.length;O<D;O+=3){const I=z[O+0],H=z[O+1],F=z[O+2];S.push(I,H,H,F,F,I)}}else if(b!==void 0){const z=b.array;R=b.version;for(let O=0,D=z.length/3-1;O<D;O+=3){const I=O+0,H=O+1,F=O+2;S.push(I,H,H,F,F,I)}}else return;const M=new(fv(S)?_v:gv)(S,1);M.version=R;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const S=c.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function mT(o,t,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,c,S*h),i.update(y,r,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,S*h,b),i.update(y,r,b))}function g(S,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,r,1)}function _(S,y,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/h,y[v],R[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,R,0,b);let v=0;for(let z=0;z<b;z++)v+=y[z]*R[z];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function gT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function _T(o,t,i){const r=new WeakMap,l=new Ke;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let I=d.attributes.position.count*D,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*H*4*_),j=new hv(F,I,H,_);j.type=ta,j.needsUpdate=!0;const w=D*4;for(let V=0;V<_;V++){const nt=v[V],ut=z[V],_t=O[V],lt=I*H*4*V;for(let P=0;P<nt.count;P++){const Z=P*w;b===!0&&(l.fromBufferAttribute(nt,P),F[lt+Z+0]=l.x,F[lt+Z+1]=l.y,F[lt+Z+2]=l.z,F[lt+Z+3]=0),R===!0&&(l.fromBufferAttribute(ut,P),F[lt+Z+4]=l.x,F[lt+Z+5]=l.y,F[lt+Z+6]=l.z,F[lt+Z+7]=0),M===!0&&(l.fromBufferAttribute(_t,P),F[lt+Z+8]=l.x,F[lt+Z+9]=l.y,F[lt+Z+10]=l.z,F[lt+Z+11]=_t.itemSize===4?l.w:1)}}S={count:_,texture:j,size:new Ae(I,H)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function vT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Cv=new Ln,P_=new Tv(1,1),wv=new hv,Dv=new Gx,Uv=new xv,B_=[],z_=[],I_=new Float32Array(16),F_=new Float32Array(9),H_=new Float32Array(4);function Es(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=B_[l];if(c===void 0&&(c=new Float32Array(l),B_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function fn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Au(o,t){let i=z_[t];i===void 0&&(i=new Int32Array(t),z_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function xT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),fn(i,t)}}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),fn(i,t)}}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),fn(i,t)}}function ET(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;H_.set(r),o.uniformMatrix2fv(this.addr,!1,H_),fn(i,r)}}function TT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;F_.set(r),o.uniformMatrix3fv(this.addr,!1,F_),fn(i,r)}}function bT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),fn(i,t)}else{if(cn(i,r))return;I_.set(r),o.uniformMatrix4fv(this.addr,!1,I_),fn(i,r)}}function AT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),fn(i,t)}}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),fn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),fn(i,t)}}function DT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function UT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),fn(i,t)}}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),fn(i,t)}}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),fn(i,t)}}function OT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(P_.compareFunction=cv,c=P_):c=Cv,i.setTexture2D(t||c,l)}function PT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Dv,l)}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Uv,l)}function zT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||wv,l)}function IT(o){switch(o){case 5126:return ST;case 35664:return xT;case 35665:return MT;case 35666:return yT;case 35674:return ET;case 35675:return TT;case 35676:return bT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return CT;case 35669:case 35673:return wT;case 5125:return DT;case 36294:return UT;case 36295:return LT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return OT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return zT}}function FT(o,t){o.uniform1fv(this.addr,t)}function HT(o,t){const i=Es(t,this.size,2);o.uniform2fv(this.addr,i)}function GT(o,t){const i=Es(t,this.size,3);o.uniform3fv(this.addr,i)}function VT(o,t){const i=Es(t,this.size,4);o.uniform4fv(this.addr,i)}function kT(o,t){const i=Es(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function XT(o,t){const i=Es(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function WT(o,t){const i=Es(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qT(o,t){o.uniform1iv(this.addr,t)}function YT(o,t){o.uniform2iv(this.addr,t)}function ZT(o,t){o.uniform3iv(this.addr,t)}function jT(o,t){o.uniform4iv(this.addr,t)}function KT(o,t){o.uniform1uiv(this.addr,t)}function QT(o,t){o.uniform2uiv(this.addr,t)}function JT(o,t){o.uniform3uiv(this.addr,t)}function $T(o,t){o.uniform4uiv(this.addr,t)}function tb(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Cv,c[h])}function eb(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Dv,c[h])}function nb(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Uv,c[h])}function ib(o,t,i){const r=this.cache,l=t.length,c=Au(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),fn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||wv,c[h])}function ab(o){switch(o){case 5126:return FT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return kT;case 35675:return XT;case 35676:return WT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return ZT;case 35669:case 35673:return jT;case 5125:return KT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}class rb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=IT(i.type)}}class sb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ab(i.type)}}class ob{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function G_(o,t){o.seq.push(t),o.map[t.id]=t}function lb(o,t,i){const r=o.name,l=r.length;for(dh.lastIndex=0;;){const c=dh.exec(r),h=dh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){G_(i,p===void 0?new rb(d,o,t):new sb(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new ob(d),G_(i,_)),i=_}}}class xu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);lb(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function V_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const ub=37297;let cb=0;function fb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const k_=new le;function hb(o){Ee._getMatrix(k_,Ee.workingColorSpace,o);const t=`mat3( ${k_.elements.map(i=>i.toFixed(4))} )`;switch(Ee.getTransfer(o)){case Mu:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function X_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+fb(o.getShaderSource(t),d)}else return c}function db(o,t){const i=hb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function pb(o,t){let i;switch(t){case mx:i="Linear";break;case gx:i="Reinhard";break;case _x:i="Cineon";break;case vx:i="ACESFilmic";break;case xx:i="AgX";break;case Mx:i="Neutral";break;case Sx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mu=new at;function mb(){Ee.getLuminanceCoefficients(mu);const o=mu.x.toFixed(4),t=mu.y.toFixed(4),i=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function _b(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function vb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function bo(o){return o!==""}function W_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function q_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(Sb,Mb)}const xb=new Map;function Mb(o,t){let i=fe[t];if(i===void 0){const r=xb.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ad(i)}const yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(o){return o.replace(yb,Eb)}function Eb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Tb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===J_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ZS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function bb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case _s:t="ENVMAP_TYPE_CUBE";break;case Tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ab(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Rb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $_:t="ENVMAP_BLENDING_MULTIPLY";break;case dx:t="ENVMAP_BLENDING_MIX";break;case px:t="ENVMAP_BLENDING_ADD";break}return t}function Cb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function wb(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Tb(i),p=bb(i),g=Ab(i),_=Rb(i),S=Cb(i),y=gb(i),b=_b(c),R=l.createProgram();let M,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(bo).join(`
`),v.length>0&&(v+=`
`)):(M=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),v=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?fe.tonemapping_pars_fragment:"",i.toneMapping!==Ba?pb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,db("linearToOutputTexel",i.outputColorSpace),mb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=ad(h),h=W_(h,i),h=q_(h,i),d=ad(d),d=W_(d,i),d=q_(d,i),h=Y_(h),d=Y_(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=z+M+h,D=z+v+d,I=V_(l,l.VERTEX_SHADER,O),H=V_(l,l.FRAGMENT_SHADER,D);l.attachShader(R,I),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(R)||"",ut=l.getShaderInfoLog(I)||"",_t=l.getShaderInfoLog(H)||"",lt=nt.trim(),P=ut.trim(),Z=_t.trim();let q=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,H);else{const U=X_(l,I,"vertex"),J=X_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+U+`
`+J)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(P===""||Z==="")&&(St=!1);St&&(V.diagnostics={runnable:q,programLog:lt,vertexShader:{log:P,prefix:M},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(I),l.deleteShader(H),j=new xu(l,R),w=vb(l,R)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,ub)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=H,this}let Db=0;class Ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Lb(t),i.set(t,r)),r}}class Lb{constructor(t){this.id=Db++,this.code=t,this.usedTimes=0}}function Nb(o,t,i,r,l,c,h){const d=new pv,m=new Ub,p=new Set,g=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,nt,ut){const _t=nt.fog,lt=ut.geometry,P=w.isMeshStandardMaterial?nt.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),q=Z&&Z.mapping===Tu?Z.image.height:null,St=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,J=U!==void 0?U.length:0;let vt=0;lt.morphAttributes.position!==void 0&&(vt=1),lt.morphAttributes.normal!==void 0&&(vt=2),lt.morphAttributes.color!==void 0&&(vt=3);let xt,Dt,Ft,tt;if(St){const xe=Ai[St];xt=xe.vertexShader,Dt=xe.fragmentShader}else xt=w.vertexShader,Dt=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const mt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),jt=ut.isInstancedMesh===!0,Wt=ut.isBatchedMesh===!0,he=!!w.map,tn=!!w.matcap,B=!!Z,De=!!w.aoMap,ae=!!w.lightMap,ee=!!w.bumpMap,Ot=!!w.normalMap,Ie=!!w.displacementMap,Gt=!!w.emissiveMap,re=!!w.metalnessMap,ke=!!w.roughnessMap,Xe=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,$=w.iridescence>0,ct=w.sheen>0,dt=w.transmission>0,ot=Xe&&!!w.anisotropyMap,Pt=L&&!!w.clearcoatMap,At=L&&!!w.clearcoatNormalMap,kt=L&&!!w.clearcoatRoughnessMap,qt=$&&!!w.iridescenceMap,Mt=$&&!!w.iridescenceThicknessMap,Ut=ct&&!!w.sheenColorMap,Zt=ct&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ct=!!w.specularColorMap,se=!!w.specularIntensityMap,k=dt&&!!w.transmissionMap,Tt=dt&&!!w.thicknessMap,Rt=!!w.gradientMap,Bt=!!w.alphaMap,yt=w.alphaTest>0,gt=!!w.alphaHash,Ht=!!w.extensions;let ie=Ba;w.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Re={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Dt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Wt,batchingColor:Wt&&ut._colorsTexture!==null,instancing:jt,instancingColor:jt&&ut.instanceColor!==null,instancingMorph:jt&&ut.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:mt===null?o.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:vs,alphaToCoverage:!!w.alphaToCoverage,map:he,matcap:tn,envMap:B,envMapMode:B&&Z.mapping,envMapCubeUVHeight:q,aoMap:De,lightMap:ae,bumpMap:ee,normalMap:Ot,displacementMap:S&&Ie,emissiveMap:Gt,normalMapObjectSpace:Ot&&w.normalMapType===bx,normalMapTangentSpace:Ot&&w.normalMapType===uv,metalnessMap:re,roughnessMap:ke,anisotropy:Xe,anisotropyMap:ot,clearcoat:L,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:kt,dispersion:E,iridescence:$,iridescenceMap:qt,iridescenceThicknessMap:Mt,sheen:ct,sheenColorMap:Ut,sheenRoughnessMap:Zt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:se,transmission:dt,transmissionMap:k,thicknessMap:Tt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===ds&&w.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:gt,combine:w.combine,mapUv:he&&R(w.map.channel),aoMapUv:De&&R(w.aoMap.channel),lightMapUv:ae&&R(w.lightMap.channel),bumpMapUv:ee&&R(w.bumpMap.channel),normalMapUv:Ot&&R(w.normalMap.channel),displacementMapUv:Ie&&R(w.displacementMap.channel),emissiveMapUv:Gt&&R(w.emissiveMap.channel),metalnessMapUv:re&&R(w.metalnessMap.channel),roughnessMapUv:ke&&R(w.roughnessMap.channel),anisotropyMapUv:ot&&R(w.anisotropyMap.channel),clearcoatMapUv:Pt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:Vt&&R(w.specularMap.channel),specularColorMapUv:Ct&&R(w.specularColorMap.channel),specularIntensityMapUv:se&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:Bt&&R(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ot||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(he||Bt),fog:!!_t,useFog:w.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:bt,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:he&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Pe,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===$i,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=p.has(1),Re.vertexUv2s=p.has(2),Re.vertexUv3s=p.has(3),p.clear(),Re}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(z(C,w),O(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function z(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let V;if(C){const nt=Ai[C];V=tM.clone(nt.uniforms)}else V=w.uniforms;return V}function I(w,C){let V;for(let nt=0,ut=g.length;nt<ut;nt++){const _t=g[nt];if(_t.cacheKey===C){V=_t,++V.usedTimes;break}}return V===void 0&&(V=new wb(o,C,w,c),g.push(V)),V}function H(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function F(w){m.remove(w)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:j}}function Ob(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Pb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function j_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function K_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(_,S,y,b,R,M){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:y,groupOrder:b,renderOrder:_.renderOrder,z:R,group:M},o[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=y,v.groupOrder=b,v.renderOrder=_.renderOrder,v.z=R,v.group=M),t++,v}function d(_,S,y,b,R,M){const v=h(_,S,y,b,R,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,S,y,b,R,M){const v=h(_,S,y,b,R,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||Pb),r.length>1&&r.sort(S||j_),l.length>1&&l.sort(S||j_)}function g(){for(let _=t,S=o.length;_<S;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function Bb(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new K_,o.set(r,[h])):l>=c.length?(h=new K_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function zb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new at,color:new Te};break;case"SpotLight":i={position:new at,direction:new at,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new at,halfWidth:new at,halfHeight:new at};break}return o[t.id]=i,i}}}function Ib(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Fb=0;function Hb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Gb(o){const t=new zb,i=Ib(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,c=new Qe,h=new Qe;function d(p){let g=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,R=0,M=0,v=0,z=0,O=0,D=0,I=0,H=0,F=0;p.sort(Hb);for(let w=0,C=p.length;w<C;w++){const V=p[w],nt=V.color,ut=V.intensity,_t=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=nt.r*ut,_+=nt.g*ut,S+=nt.b*ut;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],ut);F++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=lt,r.directionalShadowMatrix[y]=V.shadow.matrix,z++}r.directional[y]=P,y++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(nt).multiplyScalar(ut),P.distance=_t,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[R]=P;const Z=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,Z.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[R]=Z.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=lt,D++}R++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(nt).multiplyScalar(ut),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=P,M++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const Z=V.shadow,q=i.get(V);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=lt,r.pointShadowMatrix[b]=V.shadow.matrix,O++}r.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(ut),P.groundColor.copy(V.groundColor).multiplyScalar(ut),r.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==y||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==v||j.numDirectionalShadows!==z||j.numPointShadows!==O||j.numSpotShadows!==D||j.numSpotMaps!==I||j.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=z,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,j.directionalLength=y,j.pointLength=b,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=v,j.numDirectionalShadows=z,j.numPointShadows=O,j.numSpotShadows=D,j.numSpotMaps=I,j.numLightProbes=F,r.version=Fb++)}function m(p,g){let _=0,S=0,y=0,b=0,R=0;const M=g.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const O=p[v];if(O.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(O.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const D=r.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function Q_(o){const t=new Gb(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Vb(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new Q_(o),t.set(l,[d])):c>=h.length?(d=new Q_(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xb=`uniform sampler2D shadow_pass;
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
}`;function Wb(o,t,i){let r=new pd;const l=new Ae,c=new Ae,h=new Ke,d=new cM({depthPacking:Tx}),m=new fM,p={},g=i.maxTextureSize,_={[za]:Fn,[Fn]:za,[$i]:$i},S=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:kb,fragmentShader:Xb}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new Ui;b.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new _i(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let v=this.type;this.render=function(H,F,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Pa),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ut=v!==Ji&&this.type===Ji,_t=v===Ji&&this.type!==Ji;for(let lt=0,P=H.length;lt<P;lt++){const Z=H[lt],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const St=q.getFrameExtents();if(l.multiply(St),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,q.mapSize.y=c.y)),q.map===null||ut===!0||_t===!0){const J=this.type!==Ji?{minFilter:vi,magFilter:vi}:{};q.map!==null&&q.map.dispose(),q.map=new mr(l.x,l.y,J),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const U=q.getViewportCount();for(let J=0;J<U;J++){const vt=q.getViewport(J);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),nt.viewport(h),q.updateMatrices(Z,J),r=q.getFrustum(),D(F,j,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Ji&&z(q,j),q.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,V)};function z(H,F){const j=t.update(R);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new mr(l.x,l.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(F,null,j,S,R,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(F,null,j,y,R,null)}function O(H,F,j,w){let C=null;const V=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const nt=C.uuid,ut=F.uuid;let _t=p[nt];_t===void 0&&(_t={},p[nt]=_t);let lt=_t[ut];lt===void 0&&(lt=C.clone(),_t[ut]=lt,F.addEventListener("dispose",I)),C=lt}if(C.visible=F.visible,C.wireframe=F.wireframe,w===Ji?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=o.properties.get(C);nt.light=j}return C}function D(H,F,j,w,C){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===Ji)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const ut=t.update(H),_t=H.material;if(Array.isArray(_t)){const lt=ut.groups;for(let P=0,Z=lt.length;P<Z;P++){const q=lt[P],St=_t[q.materialIndex];if(St&&St.visible){const U=O(H,St,w,C);H.onBeforeShadow(o,H,F,j,ut,U,q),o.renderBufferDirect(j,null,ut,U,H,q),H.onAfterShadow(o,H,F,j,ut,U,q)}}}else if(_t.visible){const lt=O(H,_t,w,C);H.onBeforeShadow(o,H,F,j,ut,lt,null),o.renderBufferDirect(j,null,ut,lt,H,null),H.onAfterShadow(o,H,F,j,ut,lt,null)}}const nt=H.children;for(let ut=0,_t=nt.length;ut<_t;ut++)D(nt[ut],F,j,w,C)}function I(H){H.target.removeEventListener("dispose",I);for(const j in p){const w=p[j],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const qb={[_h]:vh,[Sh]:yh,[xh]:Eh,[ms]:Mh,[vh]:_h,[yh]:Sh,[Eh]:xh,[Mh]:ms};function Yb(o,t){function i(){let k=!1;const Tt=new Ke;let Rt=null;const Bt=new Ke(0,0,0,0);return{setMask:function(yt){Rt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),Rt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,gt,Ht,ie,Re){Re===!0&&(yt*=ie,gt*=ie,Ht*=ie),Tt.set(yt,gt,Ht,ie),Bt.equals(Tt)===!1&&(o.clearColor(yt,gt,Ht,ie),Bt.copy(Tt))},reset:function(){k=!1,Rt=null,Bt.set(-1,0,0,0)}}}function r(){let k=!1,Tt=!1,Rt=null,Bt=null,yt=null;return{setReversed:function(gt){if(Tt!==gt){const Ht=t.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(gt){gt?mt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(gt){Rt!==gt&&!k&&(o.depthMask(gt),Rt=gt)},setFunc:function(gt){if(Tt&&(gt=qb[gt]),Bt!==gt){switch(gt){case _h:o.depthFunc(o.NEVER);break;case vh:o.depthFunc(o.ALWAYS);break;case Sh:o.depthFunc(o.LESS);break;case ms:o.depthFunc(o.LEQUAL);break;case xh:o.depthFunc(o.EQUAL);break;case Mh:o.depthFunc(o.GEQUAL);break;case yh:o.depthFunc(o.GREATER);break;case Eh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=gt}},setLocked:function(gt){k=gt},setClear:function(gt){yt!==gt&&(Tt&&(gt=1-gt),o.clearDepth(gt),yt=gt)},reset:function(){k=!1,Rt=null,Bt=null,yt=null,Tt=!1}}}function l(){let k=!1,Tt=null,Rt=null,Bt=null,yt=null,gt=null,Ht=null,ie=null,Re=null;return{setTest:function(xe){k||(xe?mt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(xe){Tt!==xe&&!k&&(o.stencilMask(xe),Tt=xe)},setFunc:function(xe,oi,sn){(Rt!==xe||Bt!==oi||yt!==sn)&&(o.stencilFunc(xe,oi,sn),Rt=xe,Bt=oi,yt=sn)},setOp:function(xe,oi,sn){(gt!==xe||Ht!==oi||ie!==sn)&&(o.stencilOp(xe,oi,sn),gt=xe,Ht=oi,ie=sn)},setLocked:function(xe){k=xe},setClear:function(xe){Re!==xe&&(o.clearStencil(xe),Re=xe)},reset:function(){k=!1,Tt=null,Rt=null,Bt=null,yt=null,gt=null,Ht=null,ie=null,Re=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},S=new WeakMap,y=[],b=null,R=!1,M=null,v=null,z=null,O=null,D=null,I=null,H=null,F=new Te(0,0,0),j=0,w=!1,C=null,V=null,nt=null,ut=null,_t=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=Z>=2);let St=null,U={};const J=o.getParameter(o.SCISSOR_BOX),vt=o.getParameter(o.VIEWPORT),xt=new Ke().fromArray(J),Dt=new Ke().fromArray(vt);function Ft(k,Tt,Rt,Bt){const yt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(k,gt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<Rt;Ht++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return gt}const tt={};tt[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(o.DEPTH_TEST),h.setFunc(ms),ee(!1),Ot(t_),mt(o.CULL_FACE),De(Pa);function mt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function bt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function jt(k,Tt){return _[k]!==Tt?(o.bindFramebuffer(k,Tt),_[k]=Tt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Wt(k,Tt){let Rt=y,Bt=!1;if(k){Rt=S.get(Tt),Rt===void 0&&(Rt=[],S.set(Tt,Rt));const yt=k.textures;if(Rt.length!==yt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Ht=yt.length;gt<Ht;gt++)Rt[gt]=o.COLOR_ATTACHMENT0+gt;Rt.length=yt.length,Bt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(Rt)}function he(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const tn={[ur]:o.FUNC_ADD,[KS]:o.FUNC_SUBTRACT,[QS]:o.FUNC_REVERSE_SUBTRACT};tn[JS]=o.MIN,tn[$S]=o.MAX;const B={[tx]:o.ZERO,[ex]:o.ONE,[nx]:o.SRC_COLOR,[mh]:o.SRC_ALPHA,[lx]:o.SRC_ALPHA_SATURATE,[sx]:o.DST_COLOR,[ax]:o.DST_ALPHA,[ix]:o.ONE_MINUS_SRC_COLOR,[gh]:o.ONE_MINUS_SRC_ALPHA,[ox]:o.ONE_MINUS_DST_COLOR,[rx]:o.ONE_MINUS_DST_ALPHA,[ux]:o.CONSTANT_COLOR,[cx]:o.ONE_MINUS_CONSTANT_COLOR,[fx]:o.CONSTANT_ALPHA,[hx]:o.ONE_MINUS_CONSTANT_ALPHA};function De(k,Tt,Rt,Bt,yt,gt,Ht,ie,Re,xe){if(k===Pa){R===!0&&(bt(o.BLEND),R=!1);return}if(R===!1&&(mt(o.BLEND),R=!0),k!==jS){if(k!==M||xe!==w){if((v!==ur||D!==ur)&&(o.blendEquation(o.FUNC_ADD),v=ur,D=ur),xe)switch(k){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ph:o.blendFunc(o.ONE,o.ONE);break;case e_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ph:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case e_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,O=null,I=null,H=null,F.set(0,0,0),j=0,M=k,w=xe}return}yt=yt||Tt,gt=gt||Rt,Ht=Ht||Bt,(Tt!==v||yt!==D)&&(o.blendEquationSeparate(tn[Tt],tn[yt]),v=Tt,D=yt),(Rt!==z||Bt!==O||gt!==I||Ht!==H)&&(o.blendFuncSeparate(B[Rt],B[Bt],B[gt],B[Ht]),z=Rt,O=Bt,I=gt,H=Ht),(ie.equals(F)===!1||Re!==j)&&(o.blendColor(ie.r,ie.g,ie.b,Re),F.copy(ie),j=Re),M=k,w=!1}function ae(k,Tt){k.side===$i?bt(o.CULL_FACE):mt(o.CULL_FACE);let Rt=k.side===Fn;Tt&&(Rt=!Rt),ee(Rt),k.blending===ds&&k.transparent===!1?De(Pa):De(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Gt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Ot(k){k!==qS?(mt(o.CULL_FACE),k!==V&&(k===t_?o.cullFace(o.BACK):k===YS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),V=k}function Ie(k){k!==nt&&(P&&o.lineWidth(k),nt=k)}function Gt(k,Tt,Rt){k?(mt(o.POLYGON_OFFSET_FILL),(ut!==Tt||_t!==Rt)&&(o.polygonOffset(Tt,Rt),ut=Tt,_t=Rt)):bt(o.POLYGON_OFFSET_FILL)}function re(k){k?mt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function ke(k){k===void 0&&(k=o.TEXTURE0+lt-1),St!==k&&(o.activeTexture(k),St=k)}function Xe(k,Tt,Rt){Rt===void 0&&(St===null?Rt=o.TEXTURE0+lt-1:Rt=St);let Bt=U[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[Rt]=Bt),(Bt.type!==k||Bt.texture!==Tt)&&(St!==Rt&&(o.activeTexture(Rt),St=Rt),o.bindTexture(k,Tt||tt[k]),Bt.type=k,Bt.texture=Tt)}function L(){const k=U[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(k){xt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Zt(k){Dt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Vt(k,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let Bt=Rt.get(k);Bt===void 0&&(Bt=o.getUniformBlockIndex(Tt,k.name),Rt.set(k,Bt))}function Ct(k,Tt){const Bt=p.get(Tt).get(k);m.get(Tt)!==Bt&&(o.uniformBlockBinding(Tt,Bt,k.__bindingPointIndex),m.set(Tt,Bt))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,U={},_={},S=new WeakMap,y=[],b=null,R=!1,M=null,v=null,z=null,O=null,D=null,I=null,H=null,F=new Te(0,0,0),j=0,w=!1,C=null,V=null,nt=null,ut=null,_t=null,xt.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:mt,disable:bt,bindFramebuffer:jt,drawBuffers:Wt,useProgram:he,setBlending:De,setMaterial:ae,setFlipSided:ee,setCullFace:Ot,setLineWidth:Ie,setPolygonOffset:Gt,setScissorTest:re,activeTexture:ke,bindTexture:Xe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:qt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:At,texStorage3D:kt,texSubImage2D:ct,texSubImage3D:dt,compressedTexSubImage2D:ot,compressedTexSubImage3D:Pt,scissor:Ut,viewport:Zt,reset:se}}function Zb(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,g=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):Do("canvas")}function R(L,E,$){let ct=1;const dt=Xe(L);if((dt.width>$||dt.height>$)&&(ct=$/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ot=Math.floor(ct*dt.width),Pt=Math.floor(ct*dt.height);_===void 0&&(_=b(ot,Pt));const At=E?b(ot,Pt):_;return At.width=ot,At.height=Pt,At.getContext("2d").drawImage(L,0,0,ot,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Pt+")."),At}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,$,ct,dt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=E;if(E===o.RED&&($===o.FLOAT&&(ot=o.R32F),$===o.HALF_FLOAT&&(ot=o.R16F),$===o.UNSIGNED_BYTE&&(ot=o.R8)),E===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.R8UI),$===o.UNSIGNED_SHORT&&(ot=o.R16UI),$===o.UNSIGNED_INT&&(ot=o.R32UI),$===o.BYTE&&(ot=o.R8I),$===o.SHORT&&(ot=o.R16I),$===o.INT&&(ot=o.R32I)),E===o.RG&&($===o.FLOAT&&(ot=o.RG32F),$===o.HALF_FLOAT&&(ot=o.RG16F),$===o.UNSIGNED_BYTE&&(ot=o.RG8)),E===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RG8UI),$===o.UNSIGNED_SHORT&&(ot=o.RG16UI),$===o.UNSIGNED_INT&&(ot=o.RG32UI),$===o.BYTE&&(ot=o.RG8I),$===o.SHORT&&(ot=o.RG16I),$===o.INT&&(ot=o.RG32I)),E===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),$===o.UNSIGNED_INT&&(ot=o.RGB32UI),$===o.BYTE&&(ot=o.RGB8I),$===o.SHORT&&(ot=o.RGB16I),$===o.INT&&(ot=o.RGB32I)),E===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),$===o.UNSIGNED_INT&&(ot=o.RGBA32UI),$===o.BYTE&&(ot=o.RGBA8I),$===o.SHORT&&(ot=o.RGBA16I),$===o.INT&&(ot=o.RGBA32I)),E===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),E===o.RGBA){const Pt=dt?Mu:Ee.getTransfer(ct);$===o.FLOAT&&(ot=o.RGBA32F),$===o.HALF_FLOAT&&(ot=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ot=Pt===Pe?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function D(L,E){let $;return L?E===null||E===pr||E===Ro?$=o.DEPTH24_STENCIL8:E===ta?$=o.DEPTH32F_STENCIL8:E===Ao&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===Ro?$=o.DEPTH_COMPONENT24:E===ta?$=o.DEPTH_COMPONENT32F:E===Ao&&($=o.DEPTH_COMPONENT16),$}function I(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==Ri?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){const E=L.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&g.delete(E)}function F(L){const E=L.target;E.removeEventListener("dispose",F),C(E)}function j(L){const E=r.get(L);if(E.__webglInit===void 0)return;const $=L.source,ct=S.get($);if(ct){const dt=ct[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(L),Object.keys(ct).length===0&&S.delete($)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const $=L.source,ct=S.get($);delete ct[E.__cacheKey],h.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let dt=0;dt<E.__webglFramebuffer[ct].length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[ct][dt]);else o.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)o.deleteFramebuffer(E.__webglFramebuffer[ct]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=L.textures;for(let ct=0,dt=$.length;ct<dt;ct++){const ot=r.get($[ct]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),h.memory.textures--),r.remove($[ct])}r.remove(L)}let V=0;function nt(){V=0}function ut(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function _t(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function lt(L,E){const $=r.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const ct=L.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt($,L,E);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+E)}function P(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){tt($,L,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+E)}function Z(L,E){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){tt($,L,E);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+E)}function q(L,E){const $=r.get(L);if(L.version>0&&$.__version!==L.version){mt($,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+E)}const St={[Ah]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[Rh]:o.MIRRORED_REPEAT},U={[vi]:o.NEAREST,[yx]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Ri]:o.LINEAR,[Pf]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},J={[Ax]:o.NEVER,[Lx]:o.ALWAYS,[Rx]:o.LESS,[cv]:o.LEQUAL,[Cx]:o.EQUAL,[Ux]:o.GEQUAL,[wx]:o.GREATER,[Dx]:o.NOTEQUAL};function vt(L,E){if(E.type===ta&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ri||E.magFilter===Pf||E.magFilter===ql||E.magFilter===hr||E.minFilter===Ri||E.minFilter===Pf||E.minFilter===ql||E.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==ql&&E.minFilter!==hr||E.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(L,E){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",H));const ct=E.source;let dt=S.get(ct);dt===void 0&&(dt={},S.set(ct,dt));const ot=_t(E);if(ot!==L.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),dt[ot].usedTimes++;const Pt=dt[L.__cacheKey];Pt!==void 0&&(dt[L.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(E)),L.__cacheKey=ot,L.__webglTexture=dt[ot].texture}return $}function Dt(L,E,$){return Math.floor(Math.floor(L/$)/E)}function Ft(L,E,$,ct){const ot=L.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,$,ct,E.data);else{ot.sort((Mt,Ut)=>Mt.start-Ut.start);let Pt=0;for(let Mt=1;Mt<ot.length;Mt++){const Ut=ot[Pt],Zt=ot[Mt],Vt=Ut.start+Ut.count,Ct=Dt(Zt.start,E.width,4),se=Dt(Ut.start,E.width,4);Zt.start<=Vt+1&&Ct===se&&Dt(Zt.start+Zt.count-1,E.width,4)===Ct?Ut.count=Math.max(Ut.count,Zt.start+Zt.count-Ut.start):(++Pt,ot[Pt]=Zt)}ot.length=Pt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Ut=ot.length;Mt<Ut;Mt++){const Zt=ot[Mt],Vt=Math.floor(Zt.start/4),Ct=Math.ceil(Zt.count/4),se=Vt%E.width,k=Math.floor(Vt/E.width),Tt=Ct,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,se,k,Tt,Rt,$,ct,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function tt(L,E,$){let ct=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=o.TEXTURE_3D);const dt=xt(L,E),ot=E.source;i.bindTexture(ct,L.__webglTexture,o.TEXTURE0+$);const Pt=r.get(ot);if(ot.version!==Pt.__version||dt===!0){i.activeTexture(o.TEXTURE0+$);const At=Ee.getPrimaries(Ee.workingColorSpace),kt=E.colorSpace===Oa?null:Ee.getPrimaries(E.colorSpace),qt=E.colorSpace===Oa||At===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=ke(E,Mt);const Ut=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Vt=O(E.internalFormat,Ut,Zt,E.colorSpace,E.isVideoTexture);vt(ct,E);let Ct;const se=E.mipmaps,k=E.isVideoTexture!==!0,Tt=Pt.__version===void 0||dt===!0,Rt=ot.dataReady,Bt=I(E,Mt);if(E.isDepthTexture)Vt=D(E.format===wo,E.type),Tt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,null));else if(E.isDataTexture)if(se.length>0){k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,gt=se.length;yt<gt;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height),Rt&&Ft(E,Mt,Ut,Zt)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Ut,Zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,se[0].width,se[0].height,Mt.depth);for(let yt=0,gt=se.length;yt<gt;yt++)if(Ct=se[yt],E.format!==gi)if(Ut!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Ht=R_(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const Re=Ct.data.subarray(ie*Ht/Ct.data.BYTES_PER_ELEMENT,(ie+1)*Ht/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ie,Ct.width,Ct.height,1,Ut,Re)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,Mt.depth,Ut,Zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Vt,Ct.width,Ct.height,Mt.depth,0,Ut,Zt,Ct.data)}else{k&&Tt&&i.texStorage2D(o.TEXTURE_2D,Bt,Vt,se[0].width,se[0].height);for(let yt=0,gt=se.length;yt<gt;yt++)Ct=se[yt],E.format!==gi?Ut!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ut,Zt,Ct.data):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ct.width,Ct.height,0,Ut,Zt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const yt=R_(Mt.width,Mt.height,E.format,E.type);for(const gt of E.layerUpdates){const Ht=Mt.data.subarray(gt*yt/Mt.data.BYTES_PER_ELEMENT,(gt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Ut,Zt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(o.TEXTURE_3D,Bt,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Ut,Zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Ut,Zt,Mt.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(o.TEXTURE_2D,Bt,Vt,Mt.width,Mt.height);else{let yt=Mt.width,gt=Mt.height;for(let Ht=0;Ht<Bt;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,Vt,yt,gt,0,Ut,Zt,null),yt>>=1,gt>>=1}}else if(se.length>0){if(k&&Tt){const yt=Xe(se[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}for(let yt=0,gt=se.length;yt<gt;yt++)Ct=se[yt],k?Rt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut,Zt,Ct):i.texImage2D(o.TEXTURE_2D,yt,Vt,Ut,Zt,Ct);E.generateMipmaps=!1}else if(k){if(Tt){const yt=Xe(Mt);i.texStorage2D(o.TEXTURE_2D,Bt,Vt,yt.width,yt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Ut,Zt,Mt);M(E)&&v(ct),Pt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function mt(L,E,$){if(E.image.length!==6)return;const ct=xt(L,E),dt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+$);const ot=r.get(dt);if(dt.version!==ot.__version||ct===!0){i.activeTexture(o.TEXTURE0+$);const Pt=Ee.getPrimaries(Ee.workingColorSpace),At=E.colorSpace===Oa?null:Ee.getPrimaries(E.colorSpace),kt=E.colorSpace===Oa||Pt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let gt=0;gt<6;gt++)!qt&&!Mt?Ut[gt]=R(E.image[gt],!0,l.maxCubemapSize):Ut[gt]=Mt?E.image[gt].image:E.image[gt],Ut[gt]=ke(E,Ut[gt]);const Zt=Ut[0],Vt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),se=O(E.internalFormat,Vt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Tt=ot.__version===void 0||ct===!0,Rt=dt.dataReady;let Bt=I(E,Zt);vt(o.TEXTURE_CUBE_MAP,E);let yt;if(qt){k&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,Zt.width,Zt.height);for(let gt=0;gt<6;gt++){yt=Ut[gt].mipmaps;for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];E.format!==gi?Vt!==null?k?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,ie.width,ie.height,Vt,Ct,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,se,ie.width,ie.height,0,Vt,Ct,ie.data)}}}else{if(yt=E.mipmaps,k&&Tt){yt.length>0&&Bt++;const gt=Xe(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ut[gt].width,Ut[gt].height,Vt,Ct,Ut[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Ut[gt].width,Ut[gt].height,0,Vt,Ct,Ut[gt].data);for(let Ht=0;Ht<yt.length;Ht++){const Re=yt[Ht].image[gt].image;k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Re.width,Re.height,Vt,Ct,Re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,se,Re.width,Re.height,0,Vt,Ct,Re.data)}}else{k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ct,Ut[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Vt,Ct,Ut[gt]);for(let Ht=0;Ht<yt.length;Ht++){const ie=yt[Ht];k?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Vt,Ct,ie.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,se,Vt,Ct,ie.image[gt])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),ot.__version=dt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function bt(L,E,$,ct,dt,ot){const Pt=c.convert($.format,$.colorSpace),At=c.convert($.type),kt=O($.internalFormat,Pt,At,$.colorSpace),qt=r.get(E),Mt=r.get($);if(Mt.__renderTarget=E,!qt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ot),Zt=Math.max(1,E.height>>ot);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?i.texImage3D(dt,ot,kt,Ut,Zt,E.depth,0,Pt,At,null):i.texImage2D(dt,ot,kt,Ut,Zt,0,Pt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,dt,Mt.__webglTexture,0,Ie(E)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,dt,Mt.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(L,E,$){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const ct=E.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,ot=D(E.stencilBuffer,dt),Pt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Ie(E);Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ot,E.width,E.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ot,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ot,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,L)}else{const ct=E.textures;for(let dt=0;dt<ct.length;dt++){const ot=ct[dt],Pt=c.convert(ot.format,ot.colorSpace),At=c.convert(ot.type),kt=O(ot.internalFormat,Pt,At,ot.colorSpace),qt=Ie(E);$&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,kt,E.width,E.height):Gt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,kt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,kt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=r.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt(E.depthTexture,0);const dt=ct.__webglTexture,ot=Ie(E);if(E.depthTexture.format===Co)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(E.depthTexture.format===wo)Gt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function he(L){const E=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ct=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ct}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ct=L.texture.mipmaps;ct&&ct.length>0?Wt(E.__webglFramebuffer[0],L):Wt(E.__webglFramebuffer,L)}else if($){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=o.createRenderbuffer(),jt(E.__webglDepthbuffer[ct],L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}else{const ct=L.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),jt(E.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(L,E,$){const ct=r.get(L);E!==void 0&&bt(ct.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&he(L)}function B(L){const E=L.texture,$=r.get(L),ct=r.get(E);L.addEventListener("dispose",F);const dt=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=E.version,h.memory.textures++),ot){$.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[At]=[];for(let kt=0;kt<E.mipmaps.length;kt++)$.__webglFramebuffer[At][kt]=o.createFramebuffer()}else $.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)$.__webglFramebuffer[At]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let At=0,kt=dt.length;At<kt;At++){const qt=r.get(dt[At]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let At=0;At<dt.length;At++){const kt=dt[At];$.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[At]);const qt=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),Ut=O(kt.internalFormat,qt,Mt,kt.colorSpace,L.isXRRenderTarget===!0),Zt=Ie(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Ut,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,$.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),jt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),vt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)bt($.__webglFramebuffer[At][kt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else bt($.__webglFramebuffer[At],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let At=0,kt=dt.length;At<kt;At++){const qt=dt[At],Mt=r.get(qt);let Ut=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Mt.__webglTexture),vt(Ut,qt),bt($.__webglFramebuffer,L,qt,o.COLOR_ATTACHMENT0+At,Ut,0),M(qt)&&v(Ut)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,ct.__webglTexture),vt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)bt($.__webglFramebuffer[kt],L,E,o.COLOR_ATTACHMENT0,At,kt);else bt($.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,At,0);M(E)&&v(At),i.unbindTexture()}L.depthBuffer&&he(L)}function De(L){const E=L.textures;for(let $=0,ct=E.length;$<ct;$++){const dt=E[$];if(M(dt)){const ot=z(L),Pt=r.get(dt).__webglTexture;i.bindTexture(ot,Pt),v(ot),i.unbindTexture()}}}const ae=[],ee=[];function Ot(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,$=L.width,ct=L.height;let dt=o.COLOR_BUFFER_BIT;const ot=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=r.get(L),At=E.length>1;if(At)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=L.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,$,ct,0,0,$,ct,dt,o.NEAREST),m===!0&&(ae.length=0,ee.length=0,ae.push(o.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(ot),ee.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[qt]);const Mt=r.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ie(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function re(L){const E=h.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function ke(L,E){const $=L.colorSpace,ct=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==vs&&$!==Oa&&(Ee.getTransfer($)===Pe?(ct!==gi||dt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ut,this.resetTextureUnits=nt,this.setTexture2D=lt,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=tn,this.setupRenderTarget=B,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Gt}function jb(o,t){function i(r,l=Oa){let c;const h=Ee.getTransfer(l);if(r===wi)return o.UNSIGNED_BYTE;if(r===od)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return o.UNSIGNED_SHORT_5_5_5_1;if(r===iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===av)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ev)return o.BYTE;if(r===nv)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===sd)return o.INT;if(r===pr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===rv)return o.ALPHA;if(r===sv)return o.RGB;if(r===gi)return o.RGBA;if(r===Co)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===ov)return o.RED;if(r===ud)return o.RED_INTEGER;if(r===lv)return o.RG;if(r===cd)return o.RG_INTEGER;if(r===fd)return o.RGBA_INTEGER;if(r===gu||r===_u||r===vu||r===Su)if(h===Pe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===gu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===gu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Uh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Oh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Lh||r===Nh)return h===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Oh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===Bh||r===zh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ph)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ih)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Fh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zh)return h===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jh||r===Kh||r===Qh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===jh)return h===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jh||r===$h||r===td||r===ed)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Jh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$h)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qb=`
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

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new bv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ia({vertexShader:Kb,fragmentShader:Qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new Bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $b extends xs{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,S=null,y=null,b=null;const R=typeof XRWebGLBinding<"u",M=new Jb,v={},z=i.getContextAttributes();let O=null,D=null;const I=[],H=[],F=new Ae;let j=null;const w=new si;w.viewport=new Ke;const C=new si;C.viewport=new Ke;const V=[w,C],nt=new xM;let ut=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let mt=I[tt];return mt===void 0&&(mt=new ah,I[tt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(tt){let mt=I[tt];return mt===void 0&&(mt=new ah,I[tt]=mt),mt.getGripSpace()},this.getHand=function(tt){let mt=I[tt];return mt===void 0&&(mt=new ah,I[tt]=mt),mt.getHandSpace()};function lt(tt){const mt=H.indexOf(tt.inputSource);if(mt===-1)return;const bt=I[mt];bt!==void 0&&(bt.update(tt.inputSource,tt.frame,p||h),bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function P(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Z);for(let tt=0;tt<I.length;tt++){const mt=H[tt];mt!==null&&(H[tt]=null,I[tt].disconnect(mt))}ut=null,_t=null,M.reset();for(const tt in v)delete v[tt];t.setRenderTarget(O),y=null,S=null,_=null,l=null,D=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Z),z.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,jt=null,Wt=null;z.depth&&(Wt=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=z.stencil?wo:Co,jt=z.stencil?Ro:pr);const he={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(he),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),D=new mr(S.textureWidth,S.textureHeight,{format:gi,type:wi,depthTexture:new Tv(S.textureWidth,S.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const bt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new mr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(tt){for(let mt=0;mt<tt.removed.length;mt++){const bt=tt.removed[mt],jt=H.indexOf(bt);jt>=0&&(H[jt]=null,I[jt].disconnect(bt))}for(let mt=0;mt<tt.added.length;mt++){const bt=tt.added[mt];let jt=H.indexOf(bt);if(jt===-1){for(let he=0;he<I.length;he++)if(he>=H.length){H.push(bt),jt=he;break}else if(H[he]===null){H[he]=bt,jt=he;break}if(jt===-1)break}const Wt=I[jt];Wt&&Wt.connect(bt)}}const q=new at,St=new at;function U(tt,mt,bt){q.setFromMatrixPosition(mt.matrixWorld),St.setFromMatrixPosition(bt.matrixWorld);const jt=q.distanceTo(St),Wt=mt.projectionMatrix.elements,he=bt.projectionMatrix.elements,tn=Wt[14]/(Wt[10]-1),B=Wt[14]/(Wt[10]+1),De=(Wt[9]+1)/Wt[5],ae=(Wt[9]-1)/Wt[5],ee=(Wt[8]-1)/Wt[0],Ot=(he[8]+1)/he[0],Ie=tn*ee,Gt=tn*Ot,re=jt/(-ee+Ot),ke=re*-ee;if(mt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(ke),tt.translateZ(re),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Xe=tn+re,L=B+re,E=Ie-ke,$=Gt+(jt-ke),ct=De*B/L*Xe,dt=ae*B/L*Xe;tt.projectionMatrix.makePerspective(E,$,ct,dt,Xe,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function J(tt,mt){mt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(mt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let mt=tt.near,bt=tt.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(bt=M.depthFar)),nt.near=C.near=w.near=mt,nt.far=C.far=w.far=bt,(ut!==nt.near||_t!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ut=nt.near,_t=nt.far),nt.layers.mask=tt.layers.mask|6,w.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const jt=tt.parent,Wt=nt.cameras;J(nt,jt);for(let he=0;he<Wt.length;he++)J(Wt[he],jt);Wt.length===2?U(nt,w,C):nt.projectionMatrix.copy(w.projectionMatrix),vt(tt,nt,jt)};function vt(tt,mt,bt){bt===null?tt.matrix.copy(mt.matrixWorld):(tt.matrix.copy(bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(mt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(mt.projectionMatrix),tt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=nd*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(tt){m=tt,S!==null&&(S.fixedFoveation=tt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(tt){return v[tt]};let xt=null;function Dt(tt,mt){if(g=mt.getViewerPose(p||h),b=mt,g!==null){const bt=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let jt=!1;bt.length!==nt.cameras.length&&(nt.cameras.length=0,jt=!0);for(let B=0;B<bt.length;B++){const De=bt[B];let ae=null;if(y!==null)ae=y.getViewport(De);else{const Ot=_.getViewSubImage(S,De);ae=Ot.viewport,B===0&&(t.setRenderTargetTextures(D,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(D))}let ee=V[B];ee===void 0&&(ee=new si,ee.layers.enable(B),ee.viewport=new Ke,V[B]=ee),ee.matrix.fromArray(De.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(De.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ae.x,ae.y,ae.width,ae.height),B===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),jt===!0&&nt.cameras.push(ee)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const B=_.getDepthInformation(bt[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(Wt&&Wt.includes("camera-access")&&R){t.state.unbindTexture(),_=r.getBinding();for(let B=0;B<bt.length;B++){const De=bt[B].camera;if(De){let ae=v[De];ae||(ae=new bv,v[De]=ae);const ee=_.getCameraImage(De);ae.sourceTexture=ee}}}}for(let bt=0;bt<I.length;bt++){const jt=H[bt],Wt=I[bt];jt!==null&&Wt!==void 0&&Wt.update(jt,mt,p||h)}xt&&xt(tt,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Ft=new Rv;Ft.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){xt=tt},this.dispose=function(){}}}const sr=new Di,tA=new Qe;function eA(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,vv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,z,O,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),S(M,v),v.isMeshPhysicalMaterial&&y(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),R(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,z,O):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Fn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Fn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const z=t.get(v),O=z.envMap,D=z.envMapRotation;O&&(M.envMap.value=O,sr.copy(D),sr.x*=-1,sr.y*=-1,sr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),M.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(sr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,z,O){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*z,M.scale.value=O*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,z){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function R(M,v){const z=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function nA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,O){const D=O.program;r.uniformBlockBinding(z,D)}function p(z,O){let D=l[z.id];D===void 0&&(b(z),D=g(z),l[z.id]=D,z.addEventListener("dispose",M));const I=O.program;r.updateUBOMapping(z,I);const H=t.render.frame;c[z.id]!==H&&(S(z),c[z.id]=H)}function g(z){const O=_();z.__bindingPointIndex=O;const D=o.createBuffer(),I=z.__size,H=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function _(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const O=l[z.id],D=z.uniforms,I=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let H=0,F=D.length;H<F;H++){const j=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=j.length;w<C;w++){const V=j[w];if(y(V,H,w,I)===!0){const nt=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let _t=0;for(let lt=0;lt<ut.length;lt++){const P=ut[lt],Z=R(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,nt+_t,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,_t),_t+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(z,O,D,I){const H=z.value,F=O+"_"+D;if(I[F]===void 0)return typeof H=="number"||typeof H=="boolean"?I[F]=H:I[F]=H.clone(),!0;{const j=I[F];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return I[F]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function b(z){const O=z.uniforms;let D=0;const I=16;for(let F=0,j=O.length;F<j;F++){const w=Array.isArray(O[F])?O[F]:[O[F]];for(let C=0,V=w.length;C<V;C++){const nt=w[C],ut=Array.isArray(nt.value)?nt.value:[nt.value];for(let _t=0,lt=ut.length;_t<lt;_t++){const P=ut[_t],Z=R(P),q=D%I,St=q%Z.boundary,U=q+St;D+=St,U!==0&&I-U<Z.storage&&(D+=I-U),nt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=D,D+=Z.storage}}}const H=D%I;return H>0&&(D+=I-H),z.__size=D,z.__cache={},this}function R(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function M(z){const O=z.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const z in l)o.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class Lv{constructor(t={}){const{canvas:i=Ox(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,v=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1;this._outputColorSpace=ri;let H=0,F=0,j=null,w=-1,C=null;const V=new Ke,nt=new Ke;let ut=null;const _t=new Te(0);let lt=0,P=i.width,Z=i.height,q=1,St=null,U=null;const J=new Ke(0,0,P,Z),vt=new Ke(0,0,P,Z);let xt=!1;const Dt=new pd;let Ft=!1,tt=!1;const mt=new Qe,bt=new at,jt=new Ke,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function tn(){return j===null?q:1}let B=r;function De(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Eu}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),B===null){const X="webgl2";if(B=De(X,A),B===null)throw De(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,ee,Ot,Ie,Gt,re,ke,Xe,L,E,$,ct,dt,ot,Pt,At,kt,qt,Mt,Ut,Zt,Vt,Ct,se;function k(){ae=new dT(B),ae.init(),Vt=new jb(B,ae),ee=new sT(B,ae,t,Vt),Ot=new Yb(B,ae),ee.reversedDepthBuffer&&S&&Ot.buffers.depth.setReversed(!0),Ie=new gT(B),Gt=new Ob,re=new Zb(B,ae,Ot,Gt,ee,Vt,Ie),ke=new lT(D),Xe=new hT(D),L=new yM(B),Ct=new aT(B,L),E=new pT(B,L,Ie,Ct),$=new vT(B,E,L,Ie),Mt=new _T(B,ee,re),At=new oT(Gt),ct=new Nb(D,ke,Xe,ae,ee,Ct,At),dt=new eA(D,Gt),ot=new Bb,Pt=new Vb(ae),qt=new iT(D,ke,Xe,Ot,$,y,m),kt=new Wb(D,$,ee),se=new nA(B,Ie,ee,Ot),Ut=new rT(B,ae,Ie),Zt=new mT(B,ae,Ie),Ie.programs=ct.programs,D.capabilities=ee,D.extensions=ae,D.properties=Gt,D.renderLists=ot,D.shadowMap=kt,D.state=Ot,D.info=Ie}k();const Tt=new $b(D,B);this.xr=Tt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(P,Z,!1))},this.getSize=function(A){return A.set(P,Z)},this.setSize=function(A,X,rt=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Z=X,i.width=Math.floor(A*q),i.height=Math.floor(X*q),rt===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(P*q,Z*q).floor()},this.setDrawingBufferSize=function(A,X,rt){P=A,Z=X,q=rt,i.width=Math.floor(A*rt),i.height=Math.floor(X*rt),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,X,rt,st){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,X,rt,st),Ot.viewport(V.copy(J).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,X,rt,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,X,rt,st),Ot.scissor(nt.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){Ot.setScissorTest(xt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,rt=!0){let st=0;if(A){let Y=!1;if(j!==null){const Et=j.texture.format;Y=Et===fd||Et===cd||Et===ud}if(Y){const Et=j.texture.type,wt=Et===wi||Et===pr||Et===Ao||Et===Ro||Et===od||Et===ld,zt=qt.getClearColor(),Lt=qt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;wt?(b[0]=Qt,b[1]=$t,b[2]=Xt,b[3]=Lt,B.clearBufferuiv(B.COLOR,0,b)):(R[0]=Qt,R[1]=$t,R[2]=Xt,R[3]=Lt,B.clearBufferiv(B.COLOR,0,R))}else st|=B.COLOR_BUFFER_BIT}X&&(st|=B.DEPTH_BUFFER_BIT),rt&&(st|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),qt.dispose(),ot.dispose(),Pt.dispose(),Gt.dispose(),ke.dispose(),Xe.dispose(),$.dispose(),Ct.dispose(),se.dispose(),ct.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",sn),Tt.removeEventListener("sessionend",on),qe.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ie.autoReset,X=kt.enabled,rt=kt.autoUpdate,st=kt.needsUpdate,Y=kt.type;k(),Ie.autoReset=A,kt.enabled=X,kt.autoUpdate=rt,kt.needsUpdate=st,kt.type=Y}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){const X=A.target;X.removeEventListener("dispose",gt),Ht(X)}function Ht(A){ie(A),Gt.remove(A)}function ie(A){const X=Gt.get(A).programs;X!==void 0&&(X.forEach(function(rt){ct.releaseProgram(rt)}),A.isShaderMaterial&&ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,rt,st,Y,Et){X===null&&(X=Wt);const wt=Y.isMesh&&Y.matrixWorld.determinant()<0,zt=aa(A,X,rt,st,Y);Ot.setMaterial(st,wt);let Lt=rt.index,Qt=1;if(st.wireframe===!0){if(Lt=E.getWireframeAttribute(rt),Lt===void 0)return;Qt=2}const $t=rt.drawRange,Xt=rt.attributes.position;let ue=$t.start*Qt,Me=($t.start+$t.count)*Qt;Et!==null&&(ue=Math.max(ue,Et.start*Qt),Me=Math.min(Me,(Et.start+Et.count)*Qt)),Lt!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Lt.count)):Xt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Xt.count));const Ge=Me-ue;if(Ge<0||Ge===1/0)return;Ct.setup(Y,st,zt,rt,Lt);let Ue,ce=Ut;if(Lt!==null&&(Ue=L.get(Lt),ce=Zt,ce.setIndex(Ue)),Y.isMesh)st.wireframe===!0?(Ot.setLineWidth(st.wireframeLinewidth*tn()),ce.setMode(B.LINES)):ce.setMode(B.TRIANGLES);else if(Y.isLine){let Kt=st.linewidth;Kt===void 0&&(Kt=1),Ot.setLineWidth(Kt*tn()),Y.isLineSegments?ce.setMode(B.LINES):Y.isLineLoop?ce.setMode(B.LINE_LOOP):ce.setMode(B.LINE_STRIP)}else Y.isPoints?ce.setMode(B.POINTS):Y.isSprite&&ce.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Uo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,He=Y._multiDrawCounts,me=Y._multiDrawCount,yn=Lt?L.get(Lt).bytesPerElement:1,li=Gt.get(st).currentProgram.getUniforms();for(let Cn=0;Cn<me;Cn++)li.setValue(B,"_gl_DrawID",Cn),ce.render(Kt[Cn]/yn,He[Cn])}else if(Y.isInstancedMesh)ce.renderInstances(ue,Ge,Y.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,He=Math.min(rt.instanceCount,Kt);ce.renderInstances(ue,Ge,He)}else ce.render(ue,Ge)};function Re(A,X,rt){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,xi(A,X,rt),A.side=za,A.needsUpdate=!0,xi(A,X,rt),A.side=$i):xi(A,X,rt)}this.compile=function(A,X,rt=null){rt===null&&(rt=A),v=Pt.get(rt),v.init(X),O.push(v),rt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==rt&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights();const st=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];Re(zt,rt,Y),st.add(zt)}else Re(Et,rt,Y),st.add(Et)}),v=O.pop(),st},this.compileAsync=function(A,X,rt=null){const st=this.compile(A,X,rt);return new Promise(Y=>{function Et(){if(st.forEach(function(wt){Gt.get(wt).currentProgram.isReady()&&st.delete(wt)}),st.size===0){Y(A);return}setTimeout(Et,10)}ae.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let xe=null;function oi(A){xe&&xe(A)}function sn(){qe.stop()}function on(){qe.start()}const qe=new Rv;qe.setAnimationLoop(oi),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(A){xe=A,Tt.setAnimationLoop(A),A===null?qe.stop():qe.start()},Tt.addEventListener("sessionstart",sn),Tt.addEventListener("sessionend",on),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(X),X=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,X,j),v=Pt.get(A,O.length),v.init(X),O.push(v),mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Dt.setFromProjectionMatrix(mt,Ci,X.reversedDepth),tt=this.localClippingEnabled,Ft=At.init(this.clippingPlanes,tt),M=ot.get(A,z.length),M.init(),z.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&Si(Et,X,-1/0,D.sortObjects)}Si(A,X,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(St,U),he=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,he&&qt.addToRenderList(M,A),this.info.render.frame++,Ft===!0&&At.beginShadows();const rt=v.state.shadowsArray;kt.render(rt,A,X),Ft===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Y=M.transmissive;if(v.setupLights(),X.isArrayCamera){const Et=X.cameras;if(Y.length>0)for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];zo(st,Y,A,Lt)}he&&qt.render(A);for(let wt=0,zt=Et.length;wt<zt;wt++){const Lt=Et[wt];gr(M,A,Lt,Lt.viewport)}}else Y.length>0&&zo(st,Y,A,X),he&&qt.render(A),gr(M,A,X);j!==null&&F===0&&(re.updateMultisampleRenderTarget(j),re.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(D,A,X),Ct.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(v=O[O.length-1],Ft===!0&&At.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?M=z[z.length-1]:M=null};function Si(A,X,rt,st){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Dt.intersectsSprite(A)){st&&jt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(mt);const wt=$.update(A),zt=A.material;zt.visible&&M.push(A,wt,zt,rt,jt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Dt.intersectsObject(A))){const wt=$.update(A),zt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),jt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),jt.copy(wt.boundingSphere.center)),jt.applyMatrix4(A.matrixWorld).applyMatrix4(mt)),Array.isArray(zt)){const Lt=wt.groups;for(let Qt=0,$t=Lt.length;Qt<$t;Qt++){const Xt=Lt[Qt],ue=zt[Xt.materialIndex];ue&&ue.visible&&M.push(A,wt,ue,rt,jt.z,Xt)}}else zt.visible&&M.push(A,wt,zt,rt,jt.z,null)}}const Et=A.children;for(let wt=0,zt=Et.length;wt<zt;wt++)Si(Et[wt],X,rt,st)}function gr(A,X,rt,st){const Y=A.opaque,Et=A.transmissive,wt=A.transparent;v.setupLightsView(rt),Ft===!0&&At.setGlobalState(D.clippingPlanes,rt),st&&Ot.viewport(V.copy(st)),Y.length>0&&_r(Y,X,rt),Et.length>0&&_r(Et,X,rt),wt.length>0&&_r(wt,X,rt),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function zo(A,X,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[st.id]===void 0&&(v.state.transmissionRenderTarget[st.id]=new mr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Lo:wi,minFilter:hr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const Et=v.state.transmissionRenderTarget[st.id],wt=st.viewport||V;Et.setSize(wt.z*D.transmissionResolutionScale,wt.w*D.transmissionResolutionScale);const zt=D.getRenderTarget(),Lt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(Et),D.getClearColor(_t),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),he&&qt.render(rt);const $t=D.toneMapping;D.toneMapping=Ba;const Xt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),v.setupLightsView(st),Ft===!0&&At.setGlobalState(D.clippingPlanes,st),_r(A,rt,st),re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Me=0,Ge=X.length;Me<Ge;Me++){const Ue=X[Me],ce=Ue.object,Kt=Ue.geometry,He=Ue.material,me=Ue.group;if(He.side===$i&&ce.layers.test(st.layers)){const yn=He.side;He.side=Fn,He.needsUpdate=!0,Ts(ce,rt,st,Kt,He,me),He.side=yn,He.needsUpdate=!0,ue=!0}}ue===!0&&(re.updateMultisampleRenderTarget(Et),re.updateRenderTargetMipmap(Et))}D.setRenderTarget(zt,Lt,Qt),D.setClearColor(_t,lt),Xt!==void 0&&(st.viewport=Xt),D.toneMapping=$t}function _r(A,X,rt){const st=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,Et=A.length;Y<Et;Y++){const wt=A[Y],zt=wt.object,Lt=wt.geometry,Qt=wt.group;let $t=wt.material;$t.allowOverride===!0&&st!==null&&($t=st),zt.layers.test(rt.layers)&&Ts(zt,X,rt,Lt,$t,Qt)}}function Ts(A,X,rt,st,Y,Et){A.onBeforeRender(D,X,rt,st,Y,Et),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(D,X,rt,st,A,Et),Y.transparent===!0&&Y.side===$i&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,D.renderBufferDirect(rt,X,st,Y,A,Et),Y.side=za,Y.needsUpdate=!0,D.renderBufferDirect(rt,X,st,Y,A,Et),Y.side=$i):D.renderBufferDirect(rt,X,st,Y,A,Et),A.onAfterRender(D,X,rt,st,Y,Et)}function xi(A,X,rt){X.isScene!==!0&&(X=Wt);const st=Gt.get(A),Y=v.state.lights,Et=v.state.shadowsArray,wt=Y.state.version,zt=ct.getParameters(A,Y.state,Et,X,rt),Lt=ct.getProgramCacheKey(zt);let Qt=st.programs;st.environment=A.isMeshStandardMaterial?X.environment:null,st.fog=X.fog,st.envMap=(A.isMeshStandardMaterial?Xe:ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",gt),Qt=new Map,st.programs=Qt);let $t=Qt.get(Lt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===wt)return Li(A,zt),$t}else zt.uniforms=ct.getUniforms(A),A.onBeforeCompile(zt,D),$t=ct.acquireProgram(zt,Lt),Qt.set(Lt,$t),st.uniforms=zt.uniforms;const Xt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Li(A,zt),st.needsLights=ra(A),st.lightsStateVersion=wt,st.needsLights&&(Xt.ambientLightColor.value=Y.state.ambient,Xt.lightProbe.value=Y.state.probe,Xt.directionalLights.value=Y.state.directional,Xt.directionalLightShadows.value=Y.state.directionalShadow,Xt.spotLights.value=Y.state.spot,Xt.spotLightShadows.value=Y.state.spotShadow,Xt.rectAreaLights.value=Y.state.rectArea,Xt.ltc_1.value=Y.state.rectAreaLTC1,Xt.ltc_2.value=Y.state.rectAreaLTC2,Xt.pointLights.value=Y.state.point,Xt.pointLightShadows.value=Y.state.pointShadow,Xt.hemisphereLights.value=Y.state.hemi,Xt.directionalShadowMap.value=Y.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xt.spotShadowMap.value=Y.state.spotShadowMap,Xt.spotLightMatrix.value=Y.state.spotLightMatrix,Xt.spotLightMap.value=Y.state.spotLightMap,Xt.pointShadowMap.value=Y.state.pointShadowMap,Xt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function vr(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=xu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Li(A,X){const rt=Gt.get(A);rt.outputColorSpace=X.outputColorSpace,rt.batching=X.batching,rt.batchingColor=X.batchingColor,rt.instancing=X.instancing,rt.instancingColor=X.instancingColor,rt.instancingMorph=X.instancingMorph,rt.skinning=X.skinning,rt.morphTargets=X.morphTargets,rt.morphNormals=X.morphNormals,rt.morphColors=X.morphColors,rt.morphTargetsCount=X.morphTargetsCount,rt.numClippingPlanes=X.numClippingPlanes,rt.numIntersection=X.numClipIntersection,rt.vertexAlphas=X.vertexAlphas,rt.vertexTangents=X.vertexTangents,rt.toneMapping=X.toneMapping}function aa(A,X,rt,st,Y){X.isScene!==!0&&(X=Wt),re.resetTextureUnits();const Et=X.fog,wt=st.isMeshStandardMaterial?X.environment:null,zt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:vs,Lt=(st.isMeshStandardMaterial?Xe:ke).get(st.envMap||wt),Qt=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Xt=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Me=!!rt.morphAttributes.color;let Ge=Ba;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ce=Ue!==void 0?Ue.length:0,Kt=Gt.get(st),He=v.state.lights;if(Ft===!0&&(tt===!0||A!==C)){const Ye=A===C&&st.id===w;At.setState(st,A,Ye)}let me=!1;st.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==He.state.version||Kt.outputColorSpace!==zt||Y.isBatchedMesh&&Kt.batching===!1||!Y.isBatchedMesh&&Kt.batching===!0||Y.isBatchedMesh&&Kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Kt.instancing===!1||!Y.isInstancedMesh&&Kt.instancing===!0||Y.isSkinnedMesh&&Kt.skinning===!1||!Y.isSkinnedMesh&&Kt.skinning===!0||Y.isInstancedMesh&&Kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Kt.instancingMorph===!1&&Y.morphTexture!==null||Kt.envMap!==Lt||st.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==At.numPlanes||Kt.numIntersection!==At.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==$t||Kt.morphTargets!==Xt||Kt.morphNormals!==ue||Kt.morphColors!==Me||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==ce)&&(me=!0):(me=!0,Kt.__version=st.version);let yn=Kt.currentProgram;me===!0&&(yn=xi(st,X,Y));let li=!1,Cn=!1,hn=!1;const Be=yn.getUniforms(),wn=Kt.uniforms;if(Ot.useProgram(yn.program)&&(li=!0,Cn=!0,hn=!0),st.id!==w&&(w=st.id,Cn=!0),li||C!==A){Ot.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(B,"projectionMatrix",A.projectionMatrix),Be.setValue(B,"viewMatrix",A.matrixWorldInverse);const _n=Be.map.cameraPosition;_n!==void 0&&_n.setValue(B,bt.setFromMatrixPosition(A.matrixWorld)),ee.logarithmicDepthBuffer&&Be.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Cn=!0,hn=!0)}if(Y.isSkinnedMesh){Be.setOptional(B,Y,"bindMatrix"),Be.setOptional(B,Y,"bindMatrixInverse");const Ye=Y.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Be.setValue(B,"boneTexture",Ye.boneTexture,re))}Y.isBatchedMesh&&(Be.setOptional(B,Y,"batchingTexture"),Be.setValue(B,"batchingTexture",Y._matricesTexture,re),Be.setOptional(B,Y,"batchingIdTexture"),Be.setValue(B,"batchingIdTexture",Y._indirectTexture,re),Be.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Be.setValue(B,"batchingColorTexture",Y._colorsTexture,re));const En=rt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Mt.update(Y,rt,yn),(Cn||Kt.receiveShadow!==Y.receiveShadow)&&(Kt.receiveShadow=Y.receiveShadow,Be.setValue(B,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(wn.envMap.value=Lt,wn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&X.environment!==null&&(wn.envMapIntensity.value=X.environmentIntensity),Cn&&(Be.setValue(B,"toneMappingExposure",D.toneMappingExposure),Kt.needsLights&&Ia(wn,hn),Et&&st.fog===!0&&dt.refreshFogUniforms(wn,Et),dt.refreshMaterialUniforms(wn,st,q,Z,v.state.transmissionRenderTarget[A.id]),xu.upload(B,vr(Kt),wn,re)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(xu.upload(B,vr(Kt),wn,re),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(B,"center",Y.center),Be.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Be.setValue(B,"normalMatrix",Y.normalMatrix),Be.setValue(B,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Ye=st.uniformsGroups;for(let _n=0,Sr=Ye.length;_n<Sr;_n++){const Nn=Ye[_n];se.update(Nn,yn),se.bind(Nn,yn)}}return yn}function Ia(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ra(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,X,rt){const st=Gt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=X,Gt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:rt,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const rt=Gt.get(A);rt.__webglFramebuffer=X,rt.__useDefaultFramebuffer=X===void 0};const en=B.createFramebuffer();this.setRenderTarget=function(A,X=0,rt=0){j=A,H=X,F=rt;let st=!0,Y=null,Et=!1,wt=!1;if(A){const Lt=Gt.get(A);if(Lt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(B.FRAMEBUFFER,null),st=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(A);else if(Lt.__hasExternalTextures)re.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Lt.__boundDepthTexture!==Xt){if(Xt!==null&&Gt.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(wt=!0);const $t=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[X])?Y=$t[X][rt]:Y=$t[X],Et=!0):A.samples>0&&re.useMultisampledRTT(A)===!1?Y=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Y=$t[rt]:Y=$t,V.copy(A.viewport),nt.copy(A.scissor),ut=A.scissorTest}else V.copy(J).multiplyScalar(q).floor(),nt.copy(vt).multiplyScalar(q).floor(),ut=xt;if(rt!==0&&(Y=en),Ot.bindFramebuffer(B.FRAMEBUFFER,Y)&&st&&Ot.drawBuffers(A,Y),Ot.viewport(V),Ot.scissor(nt),Ot.setScissorTest(ut),Et){const Lt=Gt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Lt.__webglTexture,rt)}else if(wt){const Lt=X;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Gt.get(A.textures[Qt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,rt,Lt)}}else if(A!==null&&rt!==0){const Lt=Gt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,rt)}w=-1},this.readRenderTargetPixels=function(A,X,rt,st,Y,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){Ot.bindFramebuffer(B.FRAMEBUFFER,Lt);try{const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-st&&rt>=0&&rt<=A.height-Y&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(X,rt,st,Y,Vt.convert($t),Vt.convert(Xt),Et))}finally{const Qt=j!==null?Gt.get(j).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,X,rt,st,Y,Et,wt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt)if(X>=0&&X<=A.width-st&&rt>=0&&rt<=A.height-Y){Ot.bindFramebuffer(B.FRAMEBUFFER,Lt);const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!ee.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ue),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+zt),B.readPixels(X,rt,st,Y,Vt.convert($t),Vt.convert(Xt),0);const Me=j!==null?Gt.get(j).__webglFramebuffer:null;Ot.bindFramebuffer(B.FRAMEBUFFER,Me);const Ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Px(B,Ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ue),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(ue),B.deleteSync(Ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,rt=0){const st=Math.pow(2,-rt),Y=Math.floor(A.image.width*st),Et=Math.floor(A.image.height*st),wt=X!==null?X.x:0,zt=X!==null?X.y:0;re.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,rt,0,0,wt,zt,Y,Et),Ot.unbindTexture()};const Io=B.createFramebuffer(),Fo=B.createFramebuffer();this.copyTextureToTexture=function(A,X,rt=null,st=null,Y=0,Et=null){Et===null&&(Y!==0?(Uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Y,Y=0):Et=0);let wt,zt,Lt,Qt,$t,Xt,ue,Me,Ge;const Ue=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(rt!==null)wt=rt.max.x-rt.min.x,zt=rt.max.y-rt.min.y,Lt=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,$t=rt.min.y,Xt=rt.isBox3?rt.min.z:0;else{const En=Math.pow(2,-Y);wt=Math.floor(Ue.width*En),zt=Math.floor(Ue.height*En),A.isDataArrayTexture?Lt=Ue.depth:A.isData3DTexture?Lt=Math.floor(Ue.depth*En):Lt=1,Qt=0,$t=0,Xt=0}st!==null?(ue=st.x,Me=st.y,Ge=st.z):(ue=0,Me=0,Ge=0);const ce=Vt.convert(X.format),Kt=Vt.convert(X.type);let He;X.isData3DTexture?(re.setTexture3D(X,0),He=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(re.setTexture2DArray(X,0),He=B.TEXTURE_2D_ARRAY):(re.setTexture2D(X,0),He=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const me=B.getParameter(B.UNPACK_ROW_LENGTH),yn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),li=B.getParameter(B.UNPACK_SKIP_PIXELS),Cn=B.getParameter(B.UNPACK_SKIP_ROWS),hn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ue.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ue.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,$t),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const Be=A.isDataArrayTexture||A.isData3DTexture,wn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const En=Gt.get(A),Ye=Gt.get(X),_n=Gt.get(En.__renderTarget),Sr=Gt.get(Ye.__renderTarget);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Nn=0;Nn<Lt;Nn++)Be&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,Y,Xt+Nn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.get(X).__webglTexture,Et,Ge+Nn)),B.blitFramebuffer(Qt,$t,wt,zt,ue,Me,wt,zt,B.DEPTH_BUFFER_BIT,B.NEAREST);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Gt.has(A)){const En=Gt.get(A),Ye=Gt.get(X);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,Io),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fo);for(let _n=0;_n<Lt;_n++)Be?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,Y,Xt+_n):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,Y),wn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ye.__webglTexture,Et,Ge+_n):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ye.__webglTexture,Et),Y!==0?B.blitFramebuffer(Qt,$t,wt,zt,ue,Me,wt,zt,B.COLOR_BUFFER_BIT,B.NEAREST):wn?B.copyTexSubImage3D(He,Et,ue,Me,Ge+_n,Qt,$t,wt,zt):B.copyTexSubImage2D(He,Et,ue,Me,Qt,$t,wt,zt);Ot.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else wn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(He,Et,ue,Me,Ge,wt,zt,Lt,ce,Kt,Ue.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(He,Et,ue,Me,Ge,wt,zt,Lt,ce,Ue.data):B.texSubImage3D(He,Et,ue,Me,Ge,wt,zt,Lt,ce,Kt,Ue):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,ue,Me,wt,zt,ce,Kt,Ue.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,ue,Me,Ue.width,Ue.height,ce,Ue.data):B.texSubImage2D(B.TEXTURE_2D,Et,ue,Me,wt,zt,ce,Kt,Ue);B.pixelStorei(B.UNPACK_ROW_LENGTH,me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,li),B.pixelStorei(B.UNPACK_SKIP_ROWS,Cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hn),Et===0&&X.generateMipmaps&&B.generateMipmap(He),Ot.unbindTexture()},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?re.setTextureCube(A,0):A.isData3DTexture?re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?re.setTexture2DArray(A,0):re.setTexture2D(A,0),Ot.unbindTexture()},this.resetState=function(){H=0,F=0,j=null,Ot.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ee._getUnpackColorSpace()}}function iA(){const o=ea.useRef(null);return ea.useEffect(()=>{if(console.log("🚀 ThreeScene component mounted!"),console.log("📦 THREE version:",Eu),!o.current){console.log("❌ Mount ref not available");return}const t=o.current,i=t.clientWidth||window.innerWidth,r=t.clientHeight||window.innerHeight;console.log("📏 Canvas dimensions:",i,"x",r);const l=new Mv;console.log("🎬 Scene created:",l);const c=new si(75,i/r,.1,1e3);c.position.z=5,console.log("📷 Camera created and positioned");const h=new Lv({antialias:!0,alpha:!0});h.setSize(i,r),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setClearColor(0,0),console.log("🎨 Renderer created");try{t.appendChild(h.domElement),console.log("✅ Three.js renderer created and added to DOM"),console.log("🖼️ Canvas element:",h.domElement),console.log("🏠 Mount element:",t)}catch(z){console.error("❌ Failed to add renderer to DOM:",z);return}const d=new ys(1,1,1),m=new uM({color:65280}),p=new _i(d,m);l.add(p),console.log("🟢 Test cube added to scene:",p),console.log("📊 Scene children count:",l.children.length);const g=new vM(16777215,1);g.position.set(5,5,5),l.add(g);const _=new SM(4210752,.6);l.add(_),console.log("Lighting added to scene");const S=100,y=new Ui,b=new Float32Array(S*3);for(let z=0;z<S;z++)b[z*3]=(Math.random()-.5)*20,b[z*3+1]=(Math.random()-.5)*20,b[z*3+2]=(Math.random()-.5)*20;y.setAttribute("position",new Hn(b,3));const R=new yv({color:4491519,size:.05,transparent:!0,opacity:.8}),M=new Ev(y,R);l.add(M),console.log("✨ Particles added to scene:",M),console.log("🔢 Particle count:",S),console.log("📊 Final scene children count:",l.children.length);const v=()=>{requestAnimationFrame(v),p.rotation.x+=.01,p.rotation.y+=.01;const z=Date.now()*.001,O=y.attributes.position.array;for(let D=0;D<S;D++)O[D*3+1]+=Math.sin(z+D*.1)*.002;y.attributes.position.needsUpdate=!0,h.render(l,c)};return v(),console.log("🎬 Animation loop started"),setTimeout(()=>{console.log("⏰ Manual render test after 100ms"),h.render(l,c)},100),()=>{console.log("Cleaning up ThreeScene"),t&&h.domElement&&t.contains(h.domElement)&&t.removeChild(h.domElement),h.dispose()}},[]),Kn.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1,background:"linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f23 100%)",border:"2px solid red"}})}function aA({imageSrc:o,width:t=400,height:i=600}){const r=ea.useRef(null),[l,c]=ea.useState(!1);return ea.useEffect(()=>{if(!r.current||!o)return;const h=r.current,d=new Mv,m=new gd(-t/2,t/2,i/2,-i/2,1,1e3);m.position.z=10;const p=new Lv({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return p.setSize(t,i),p.setClearColor(0,0),h.appendChild(p.domElement),new mM().load(o,_=>{const S=new Bo(t,i),y=new dd({map:_,transparent:!0}),b=new _i(S,y);d.add(b),c(!0);const R=100,M=new Ui,v=new Float32Array(R*3),z=new Float32Array(R*3),O=new Float32Array(R);for(let F=0;F<R;F++){v[F*3]=(Math.random()-.5)*t,v[F*3+1]=(Math.random()-.5)*i,v[F*3+2]=Math.random()*5;const j=Math.random()*.3+.5;z[F*3]=j,z[F*3+1]=j*.8,z[F*3+2]=1,O[F]=Math.random()*3+1}M.setAttribute("position",new Hn(v,3)),M.setAttribute("color",new Hn(z,3)),M.setAttribute("size",new Hn(O,1));const D=new ia({uniforms:{time:{value:0}},vertexShader:`
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              pos.x += sin(time * 0.5 + position.y * 0.01) * 10.0;
              pos.y += cos(time * 0.3 + position.x * 0.01) * 5.0;
              
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,fragmentShader:`
            varying vec3 vColor;
            
            void main() {
              float distance = length(gl_PointCoord - vec2(0.5));
              if (distance > 0.5) discard;
              
              float alpha = 1.0 - distance * 2.0;
              gl_FragColor = vec4(vColor, alpha * 0.6);
            }
          `,transparent:!0,blending:ph}),I=new Ev(M,D);d.add(I);const H=()=>{requestAnimationFrame(H),D.uniforms.time.value=Date.now()*.001,p.render(d,m)};H()},void 0,_=>{console.error("Error loading image:",_)}),()=>{h&&p.domElement&&h.contains(p.domElement)&&h.removeChild(p.domElement),p.dispose()}},[o,t,i]),Kn.jsx("div",{ref:r,style:{width:`${t}px`,height:`${i}px`,position:"relative",overflow:"hidden",borderRadius:"8px",background:"linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)"},children:!l&&Kn.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontSize:"14px"},children:"Loading..."})})}const rA=[{id:1,title:"Virtual Soul",description:"An immersive digital exploration of consciousness and identity in virtual spaces. This project investigates the boundaries between digital and physical existence through interactive media.",image:"/Personal-Website/images/project1.jpg",pdfUrl:"/Personal-Website/images/1-Virtual Soul.pdf",technologies:["Interactive Media","Virtual Reality","Digital Art","Conceptual Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:2,title:"Nether Portal",description:"A gateway between dimensions - exploring liminal spaces and transitional experiences. This project creates bridges between different states of being and perception.",image:"/Personal-Website/images/project2.jpg",pdfUrl:"/Personal-Website/images/2-Nether Portal.pdf",technologies:["Dimensional Design","Interactive Installation","Spatial Computing","Experience Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:3,title:"Prayer of Wind and Bloom",description:"A poetic meditation on nature's cycles and renewal. This work celebrates the intersection of technology and organic growth, finding harmony in digital and natural systems.",image:"/Personal-Website/images/project3.jpg",pdfUrl:"/Personal-Website/images/3-Prayer of Wind and Bloom.pdf",technologies:["Generative Art","Nature Simulation","Poetic Computing","Bio-inspired Design"],liveUrl:"#",githubUrl:"#",featured:!0},{id:4,title:"Unnatural Chronologies",description:"An exploration of time, memory, and non-linear narratives. This project challenges conventional temporal structures and creates new ways of experiencing past, present, and future.",image:"/Personal-Website/images/project4.jpg",pdfUrl:"/Personal-Website/images/4-Unnatural Chronologies.pdf",technologies:["Temporal Design","Narrative Systems","Memory Interfaces","Experimental Media"],liveUrl:"#",githubUrl:"#",featured:!0}],sA=[{id:1,title:"Virtual Soul",description:"A digital art exploration of consciousness and identity in virtual spaces",image:"https://picsum.photos/400/600?random=1",category:"Digital Art",year:"2024",featured:!0},{id:2,title:"Nether Portal",description:"An architectural visualization inspired by interdimensional gateways",image:"https://picsum.photos/400/600?random=2",category:"3D Visualization",year:"2024",featured:!0},{id:3,title:"Prayer of Wind and Bloom",description:"A poetic visualization of natural elements and spiritual themes",image:"https://picsum.photos/400/600?random=3",category:"Concept Art",year:"2024",featured:!0},{id:4,title:"Unnatural Chronologies",description:"An exploration of time perception through abstract visual narratives",image:"https://picsum.photos/400/600?random=4",category:"Abstract Art",year:"2024",featured:!0}];function oA(){const[o,t]=ea.useState([]),[i,r]=ea.useState([]);return ea.useEffect(()=>{t(rA.filter(l=>l.featured)),r(sA.filter(l=>l.featured))},[]),Kn.jsxs("div",{style:{fontFamily:"Arial, sans-serif",color:"white"},children:[Kn.jsxs("header",{style:{position:"fixed",zIndex:10,top:40,left:40,fontSize:"18px"},children:[Kn.jsx("h1",{style:{margin:0,fontSize:"2.5rem",fontWeight:"300",letterSpacing:"2px"},children:"Your Name"}),Kn.jsx("p",{style:{margin:"10px 0",fontSize:"1.2rem",opacity:.8,letterSpacing:"1px"},children:"Creative Developer & Designer"}),Kn.jsx("p",{style:{margin:0,fontSize:"1rem",opacity:.6,maxWidth:"400px",lineHeight:"1.5"},children:"Testing particle image canvas"})]}),Kn.jsx(iA,{}),Kn.jsx("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:2},children:Kn.jsx(aA,{imageSrc:"https://picsum.photos/400/600?random=1",width:400,height:500})})]})}WS.createRoot(document.getElementById("root")).render(Kn.jsx(ea.StrictMode,{children:Kn.jsx(oA,{})}));
