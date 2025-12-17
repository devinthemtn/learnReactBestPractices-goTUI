function od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fa={exports:{}},jl={},Da={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),ad=Symbol.for("react.portal"),ud=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),dd=Symbol.for("react.profiler"),pd=Symbol.for("react.provider"),fd=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),gd=Symbol.for("react.memo"),vd=Symbol.for("react.lazy"),ps=Symbol.iterator;function yd(e){return e===null||typeof e!="object"?null:(e=ps&&e[ps]||e["@@iterator"],typeof e=="function"?e:null)}var $a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ua=Object.assign,Aa={};function xn(e,t,n){this.props=e,this.context=t,this.refs=Aa,this.updater=n||$a}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ba(){}Ba.prototype=xn.prototype;function co(e,t,n){this.props=e,this.context=t,this.refs=Aa,this.updater=n||$a}var po=co.prototype=new Ba;po.constructor=co;Ua(po,xn.prototype);po.isPureReactComponent=!0;var fs=Array.isArray,Va=Object.prototype.hasOwnProperty,fo={current:null},Qa={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Va.call(t,r)&&!Qa.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:fr,type:e,key:i,ref:o,props:l,_owner:fo.current}}function xd(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mo(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function wd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ms=/\/+/g;function Ul(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wd(""+e.key):t.toString(36)}function Dr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fr:case ad:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ul(o,0):r,fs(l)?(n="",e!=null&&(n=e.replace(ms,"$&/")+"/"),Dr(l,t,n,"",function(c){return c})):l!=null&&(mo(l)&&(l=xd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ms,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",fs(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Ul(i,a);o+=Dr(i,t,n,u,l)}else if(u=yd(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Ul(i,a++),o+=Dr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function kr(e,t,n){if(e==null)return e;var r=[],l=0;return Dr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function kd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},$r={transition:null},jd={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:$r,ReactCurrentOwner:fo};function Ha(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:kr,forEach:function(e,t,n){kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return kr(e,function(){t++}),t},toArray:function(e){return kr(e,function(t){return t})||[]},only:function(e){if(!mo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=xn;M.Fragment=ud;M.Profiler=dd;M.PureComponent=co;M.StrictMode=cd;M.Suspense=hd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jd;M.act=Ha;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ua({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=fo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Va.call(t,u)&&!Qa.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:fr,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pd,_context:e},e.Consumer=e};M.createElement=Wa;M.createFactory=function(e){var t=Wa.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:md,render:e}};M.isValidElement=mo;M.lazy=function(e){return{$$typeof:vd,_payload:{_status:-1,_result:e},_init:kd}};M.memo=function(e,t){return{$$typeof:gd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};M.unstable_act=Ha;M.useCallback=function(e,t){return pe.current.useCallback(e,t)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return pe.current.useEffect(e,t)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return pe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.3.1";Da.exports=M;var j=Da.exports;const qa=sd(j),Sd=od({__proto__:null,default:qa},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=j,Cd=Symbol.for("react.element"),zd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Pd=Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_d={key:!0,ref:!0,__self:!0,__source:!0};function Ka(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ed.call(t,r)&&!_d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Cd,type:e,key:i,ref:o,props:l,_owner:Pd.current}}jl.Fragment=zd;jl.jsx=Ka;jl.jsxs=Ka;Fa.exports=jl;var s=Fa.exports,fi={},Ga={exports:{}},Se={},Ya={exports:{}},Xa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var T=_.length;_.push(R);e:for(;0<T;){var H=T-1>>>1,J=_[H];if(0<l(J,R))_[H]=R,_[T]=J,T=H;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],T=_.pop();if(T!==R){_[0]=T;e:for(var H=0,J=_.length,xr=J>>>1;H<xr;){var Et=2*(H+1)-1,$l=_[Et],Pt=Et+1,wr=_[Pt];if(0>l($l,T))Pt<J&&0>l(wr,$l)?(_[H]=wr,_[Pt]=T,H=Pt):(_[H]=$l,_[Et]=T,H=Et);else if(Pt<J&&0>l(wr,T))_[H]=wr,_[Pt]=T,H=Pt;else break e}}return R}function l(_,R){var T=_.sortIndex-R.sortIndex;return T!==0?T:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],f=1,m=null,g=3,y=!1,x=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(_){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=_)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function v(_){if(w=!1,d(_),!x)if(n(u)!==null)x=!0,Wt(k);else{var R=n(c);R!==null&&nt(v,R.startTime-_)}}function k(_,R){x=!1,w&&(w=!1,h(E),E=-1),y=!0;var T=g;try{for(d(R),m=n(u);m!==null&&(!(m.expirationTime>R)||_&&!b());){var H=m.callback;if(typeof H=="function"){m.callback=null,g=m.priorityLevel;var J=H(m.expirationTime<=R);R=e.unstable_now(),typeof J=="function"?m.callback=J:m===n(u)&&r(u),d(R)}else r(u);m=n(u)}if(m!==null)var xr=!0;else{var Et=n(c);Et!==null&&nt(v,Et.startTime-R),xr=!1}return xr}finally{m=null,g=T,y=!1}}var C=!1,z=null,E=-1,F=5,L=-1;function b(){return!(e.unstable_now()-L<F)}function ne(){if(z!==null){var _=e.unstable_now();L=_;var R=!0;try{R=z(!0,_)}finally{R?tt():(C=!1,z=null)}}else C=!1}var tt;if(typeof p=="function")tt=function(){p(ne)};else if(typeof MessageChannel<"u"){var yr=new MessageChannel,Qt=yr.port2;yr.port1.onmessage=ne,tt=function(){Qt.postMessage(null)}}else tt=function(){N(ne,0)};function Wt(_){z=_,C||(C=!0,tt())}function nt(_,R){E=N(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Wt(k))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var T=g;g=R;try{return _()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=g;g=_;try{return R()}finally{g=T}},e.unstable_scheduleCallback=function(_,R,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,_){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=T+J,_={id:f++,callback:R,priorityLevel:_,startTime:T,expirationTime:J,sortIndex:-1},T>H?(_.sortIndex=T,t(c,_),n(u)===null&&_===n(c)&&(w?(h(E),E=-1):w=!0,nt(v,T-H))):(_.sortIndex=J,t(u,_),x||y||(x=!0,Wt(k))),_},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(_){var R=g;return function(){var T=g;g=R;try{return _.apply(this,arguments)}finally{g=T}}}})(Xa);Ya.exports=Xa;var Ld=Ya.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=j,je=Ld;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Za=new Set,qn={};function Bt(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(qn[e]=t,e=0;e<t.length;e++)Za.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hs={},gs={};function bd(e){return mi.call(gs,e)?!0:mi.call(hs,e)?!1:Td.test(e)?gs[e]=!0:(hs[e]=!0,!1)}function Md(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Od(e,t,n,r){if(t===null||typeof t>"u"||Md(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ho=/[\-:]([a-z])/g;function go(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ho,go);ie[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ho,go);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ho,go);ie[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function vo(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Od(t,n,l,r)&&(n=null),r||l===null?bd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),Kt=Symbol.for("react.fragment"),yo=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),Ja=Symbol.for("react.provider"),eu=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),gi=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),wo=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),tu=Symbol.for("react.offscreen"),vs=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=vs&&e[vs]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Al;function bn(e){if(Al===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Al=t&&t[1]||""}return`
`+Al+e}var Bl=!1;function Vl(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Id(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Vl(e.type,!1),e;case 11:return e=Vl(e.type.render,!1),e;case 1:return e=Vl(e.type,!0),e;default:return""}}function yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kt:return"Fragment";case qt:return"Portal";case hi:return"Profiler";case yo:return"StrictMode";case gi:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eu:return(e.displayName||"Context")+".Consumer";case Ja:return(e._context.displayName||"Context")+".Provider";case xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wo:return t=e.displayName||null,t!==null?t:yi(e.type)||"Memo";case it:t=e._payload,e=e._init;try{return yi(e(t))}catch{}}return null}function Fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yi(t);case 8:return t===yo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Dd(e){var t=nu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Dd(e))}function ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lu(e,t){t=t.checked,t!=null&&vo(e,"checked",t,!1)}function wi(e,t){lu(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ki(e,t.type,n):t.hasOwnProperty("defaultValue")&&ki(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ki(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ws(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Mn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function iu(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ks(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ou(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ou(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,su=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$d=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){$d.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function au(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function uu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=au(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ud=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ni(e,t){if(t){if(Ud[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function ko(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,sn=null,an=null;function js(e){if(e=gr(e)){if(typeof Ei!="function")throw Error(S(280));var t=e.stateNode;t&&(t=El(t),Ei(e.stateNode,e.type,t))}}function cu(e){sn?an?an.push(e):an=[e]:sn=e}function du(){if(sn){var e=sn,t=an;if(an=sn=null,js(e),t)for(e=0;e<t.length;e++)js(t[e])}}function pu(e,t){return e(t)}function fu(){}var Ql=!1;function mu(e,t,n){if(Ql)return e(t,n);Ql=!0;try{return pu(e,t,n)}finally{Ql=!1,(sn!==null||an!==null)&&(fu(),du())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Pi=!1;if(Ge)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{Pi=!1}function Ad(e,t,n,r,l,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Dn=!1,Xr=null,Zr=!1,_i=null,Bd={onError:function(e){Dn=!0,Xr=e}};function Vd(e,t,n,r,l,i,o,a,u){Dn=!1,Xr=null,Ad.apply(Bd,arguments)}function Qd(e,t,n,r,l,i,o,a,u){if(Vd.apply(this,arguments),Dn){if(Dn){var c=Xr;Dn=!1,Xr=null}else throw Error(S(198));Zr||(Zr=!0,_i=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ss(e){if(Vt(e)!==e)throw Error(S(188))}function Wd(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ss(l),e;if(i===r)return Ss(l),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function gu(e){return e=Wd(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vu(e);if(t!==null)return t;e=e.sibling}return null}var yu=je.unstable_scheduleCallback,Ns=je.unstable_cancelCallback,Hd=je.unstable_shouldYield,qd=je.unstable_requestPaint,q=je.unstable_now,Kd=je.unstable_getCurrentPriorityLevel,jo=je.unstable_ImmediatePriority,xu=je.unstable_UserBlockingPriority,Jr=je.unstable_NormalPriority,Gd=je.unstable_LowPriority,wu=je.unstable_IdlePriority,Sl=null,Be=null;function Yd(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Jd,Xd=Math.log,Zd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Xd(e)/Zd|0)|0}var Cr=64,zr=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function el(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=On(a):(i&=o,i!==0&&(r=On(i)))}else o=n&~l,o!==0?r=On(o):i!==0&&(r=On(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function ep(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Oe(i),a=1<<o,u=l[o];u===-1?(!(a&n)||a&r)&&(l[o]=ep(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ku(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function np(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function So(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function ju(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Su,No,Nu,Cu,zu,Ri=!1,Er=[],pt=null,ft=null,mt=null,Yn=new Map,Xn=new Map,st=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ft=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function En(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=gr(t),t!==null&&No(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function lp(e,t,n,r,l){switch(t){case"focusin":return pt=En(pt,e,t,n,r,l),!0;case"dragenter":return ft=En(ft,e,t,n,r,l),!0;case"mouseover":return mt=En(mt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Yn.set(i,En(Yn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Xn.set(i,En(Xn.get(i)||null,e,t,n,r,l)),!0}return!1}function Eu(e){var t=Rt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=hu(n),t!==null){e.blockedOn=t,zu(e.priority,function(){Nu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ti(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zi=r,n.target.dispatchEvent(r),zi=null}else return t=gr(n),t!==null&&No(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){Ur(e)&&n.delete(t)}function ip(){Ri=!1,pt!==null&&Ur(pt)&&(pt=null),ft!==null&&Ur(ft)&&(ft=null),mt!==null&&Ur(mt)&&(mt=null),Yn.forEach(zs),Xn.forEach(zs)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,ip)))}function Zn(e){function t(l){return Pn(l,e)}if(0<Er.length){Pn(Er[0],e);for(var n=1;n<Er.length;n++){var r=Er[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Pn(pt,e),ft!==null&&Pn(ft,e),mt!==null&&Pn(mt,e),Yn.forEach(t),Xn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)Eu(n),n.blockedOn===null&&st.shift()}var un=Je.ReactCurrentBatchConfig,tl=!0;function op(e,t,n,r){var l=I,i=un.transition;un.transition=null;try{I=1,Co(e,t,n,r)}finally{I=l,un.transition=i}}function sp(e,t,n,r){var l=I,i=un.transition;un.transition=null;try{I=4,Co(e,t,n,r)}finally{I=l,un.transition=i}}function Co(e,t,n,r){if(tl){var l=Ti(e,t,n,r);if(l===null)ti(e,t,r,nl,n),Cs(e,r);else if(lp(l,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<rp.indexOf(e)){for(;l!==null;){var i=gr(l);if(i!==null&&Su(i),i=Ti(e,t,n,r),i===null&&ti(e,t,r,nl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ti(e,t,r,null,n)}}var nl=null;function Ti(e,t,n,r){if(nl=null,e=ko(r),e=Rt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nl=e,null}function Pu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case jo:return 1;case xu:return 4;case Jr:case Gd:return 16;case wu:return 536870912;default:return 16}default:return 16}}var ut=null,zo=null,Ar=null;function _u(){if(Ar)return Ar;var e,t=zo,n=t.length,r,l="value"in ut?ut.value:ut.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ar=l.slice(e,1<r?1-r:void 0)}function Br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pr(){return!0}function Es(){return!1}function Ne(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pr:Es,this.isPropagationStopped=Es,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pr)},persist:function(){},isPersistent:Pr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=Ne(wn),hr=Q({},wn,{view:0,detail:0}),ap=Ne(hr),Hl,ql,_n,Nl=Q({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_n&&(_n&&e.type==="mousemove"?(Hl=e.screenX-_n.screenX,ql=e.screenY-_n.screenY):ql=Hl=0,_n=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Ps=Ne(Nl),up=Q({},Nl,{dataTransfer:0}),cp=Ne(up),dp=Q({},hr,{relatedTarget:0}),Kl=Ne(dp),pp=Q({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Ne(pp),mp=Q({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Ne(mp),gp=Q({},wn,{data:0}),_s=Ne(gp),vp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xp[e])?!!t[e]:!1}function Po(){return wp}var kp=Q({},hr,{key:function(e){if(e.key){var t=vp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=Ne(kp),Sp=Q({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Ne(Sp),Np=Q({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),Cp=Ne(Np),zp=Q({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=Ne(zp),Pp=Q({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=Ne(Pp),Lp=[9,13,27,32],_o=Ge&&"CompositionEvent"in window,$n=null;Ge&&"documentMode"in document&&($n=document.documentMode);var Rp=Ge&&"TextEvent"in window&&!$n,Lu=Ge&&(!_o||$n&&8<$n&&11>=$n),Rs=String.fromCharCode(32),Ts=!1;function Ru(e,t){switch(e){case"keyup":return Lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function Tp(e,t){switch(e){case"compositionend":return Tu(t);case"keypress":return t.which!==32?null:(Ts=!0,Rs);case"textInput":return e=t.data,e===Rs&&Ts?null:e;default:return null}}function bp(e,t){if(Gt)return e==="compositionend"||!_o&&Ru(e,t)?(e=_u(),Ar=zo=ut=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lu&&t.locale!=="ko"?null:t.data;default:return null}}var Mp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mp[e.type]:t==="textarea"}function bu(e,t,n,r){cu(r),t=rl(t,"onChange"),0<t.length&&(n=new Eo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Un=null,Jn=null;function Op(e){Qu(e,0)}function Cl(e){var t=Zt(e);if(ru(t))return e}function Ip(e,t){if(e==="change")return t}var Mu=!1;if(Ge){var Gl;if(Ge){var Yl="oninput"in document;if(!Yl){var Ms=document.createElement("div");Ms.setAttribute("oninput","return;"),Yl=typeof Ms.oninput=="function"}Gl=Yl}else Gl=!1;Mu=Gl&&(!document.documentMode||9<document.documentMode)}function Os(){Un&&(Un.detachEvent("onpropertychange",Ou),Jn=Un=null)}function Ou(e){if(e.propertyName==="value"&&Cl(Jn)){var t=[];bu(t,Jn,e,ko(e)),mu(Op,t)}}function Fp(e,t,n){e==="focusin"?(Os(),Un=t,Jn=n,Un.attachEvent("onpropertychange",Ou)):e==="focusout"&&Os()}function Dp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(Jn)}function $p(e,t){if(e==="click")return Cl(t)}function Up(e,t){if(e==="input"||e==="change")return Cl(t)}function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Ap;function er(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!mi.call(t,l)||!De(e[l],t[l]))return!1}return!0}function Is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fs(e,t){var n=Is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Is(n)}}function Iu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Iu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fu(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function Lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bp(e){var t=Fu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Iu(n.ownerDocument.documentElement,n)){if(r!==null&&Lo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Fs(n,i);var o=Fs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vp=Ge&&"documentMode"in document&&11>=document.documentMode,Yt=null,bi=null,An=null,Mi=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mi||Yt==null||Yt!==Yr(r)||(r=Yt,"selectionStart"in r&&Lo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),An&&er(An,r)||(An=r,r=rl(bi,"onSelect"),0<r.length&&(t=new Eo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Yt)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},Xl={},Du={};Ge&&(Du=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function zl(e){if(Xl[e])return Xl[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Du)return Xl[e]=t[n];return e}var $u=zl("animationend"),Uu=zl("animationiteration"),Au=zl("animationstart"),Bu=zl("transitionend"),Vu=new Map,$s="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function St(e,t){Vu.set(e,t),Bt(t,[e])}for(var Zl=0;Zl<$s.length;Zl++){var Jl=$s[Zl],Qp=Jl.toLowerCase(),Wp=Jl[0].toUpperCase()+Jl.slice(1);St(Qp,"on"+Wp)}St($u,"onAnimationEnd");St(Uu,"onAnimationIteration");St(Au,"onAnimationStart");St("dblclick","onDoubleClick");St("focusin","onFocus");St("focusout","onBlur");St(Bu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var In="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hp=new Set("cancel close invalid load scroll toggle".split(" ").concat(In));function Us(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qd(r,t,void 0,e),e.currentTarget=null}function Qu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;Us(l,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;Us(l,a,c),i=u}}}if(Zr)throw e=_i,Zr=!1,_i=null,e}function $(e,t){var n=t[$i];n===void 0&&(n=t[$i]=new Set);var r=e+"__bubble";n.has(r)||(Wu(t,e,2,!1),n.add(r))}function ei(e,t,n){var r=0;t&&(r|=4),Wu(n,e,r,t)}var Lr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Lr]){e[Lr]=!0,Za.forEach(function(n){n!=="selectionchange"&&(Hp.has(n)||ei(n,!1,e),ei(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lr]||(t[Lr]=!0,ei("selectionchange",!1,t))}}function Wu(e,t,n,r){switch(Pu(t)){case 1:var l=op;break;case 4:l=sp;break;default:l=Co}n=l.bind(null,t,n,e),l=void 0,!Pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ti(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Rt(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}mu(function(){var c=i,f=ko(n),m=[];e:{var g=Vu.get(e);if(g!==void 0){var y=Eo,x=e;switch(e){case"keypress":if(Br(n)===0)break e;case"keydown":case"keyup":y=jp;break;case"focusin":x="focus",y=Kl;break;case"focusout":x="blur",y=Kl;break;case"beforeblur":case"afterblur":y=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cp;break;case $u:case Uu:case Au:y=fp;break;case Bu:y=Ep;break;case"scroll":y=ap;break;case"wheel":y=_p;break;case"copy":case"cut":case"paste":y=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ls}var w=(t&4)!==0,N=!w&&e==="scroll",h=w?g!==null?g+"Capture":null:g;w=[];for(var p=c,d;p!==null;){d=p;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,h!==null&&(v=Gn(p,h),v!=null&&w.push(nr(p,v,d)))),N)break;p=p.return}0<w.length&&(g=new y(g,x,null,n,f),m.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==zi&&(x=n.relatedTarget||n.fromElement)&&(Rt(x)||x[Ye]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?Rt(x):null,x!==null&&(N=Vt(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=Ps,v="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ls,v="onPointerLeave",h="onPointerEnter",p="pointer"),N=y==null?g:Zt(y),d=x==null?g:Zt(x),g=new w(v,p+"leave",y,n,f),g.target=N,g.relatedTarget=d,v=null,Rt(f)===c&&(w=new w(h,p+"enter",x,n,f),w.target=d,w.relatedTarget=N,v=w),N=v,y&&x)t:{for(w=y,h=x,p=0,d=w;d;d=Ht(d))p++;for(d=0,v=h;v;v=Ht(v))d++;for(;0<p-d;)w=Ht(w),p--;for(;0<d-p;)h=Ht(h),d--;for(;p--;){if(w===h||h!==null&&w===h.alternate)break t;w=Ht(w),h=Ht(h)}w=null}else w=null;y!==null&&As(m,g,y,w,!1),x!==null&&N!==null&&As(m,N,x,w,!0)}}e:{if(g=c?Zt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=Ip;else if(bs(g))if(Mu)k=Up;else{k=Dp;var C=Fp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=$p);if(k&&(k=k(e,c))){bu(m,k,n,f);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&ki(g,"number",g.value)}switch(C=c?Zt(c):window,e){case"focusin":(bs(C)||C.contentEditable==="true")&&(Yt=C,bi=c,An=null);break;case"focusout":An=bi=Yt=null;break;case"mousedown":Mi=!0;break;case"contextmenu":case"mouseup":case"dragend":Mi=!1,Ds(m,n,f);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Ds(m,n,f)}var z;if(_o)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Gt?Ru(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Lu&&n.locale!=="ko"&&(Gt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Gt&&(z=_u()):(ut=f,zo="value"in ut?ut.value:ut.textContent,Gt=!0)),C=rl(c,E),0<C.length&&(E=new _s(E,e,null,n,f),m.push({event:E,listeners:C}),z?E.data=z:(z=Tu(n),z!==null&&(E.data=z)))),(z=Rp?Tp(e,n):bp(e,n))&&(c=rl(c,"onBeforeInput"),0<c.length&&(f=new _s("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=z))}Qu(m,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Gn(e,n),i!=null&&r.unshift(nr(e,i,l)),i=Gn(e,t),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function As(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Gn(n,i),u!=null&&o.unshift(nr(n,u,a))):l||(u=Gn(n,i),u!=null&&o.push(nr(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function Bs(e){return(typeof e=="string"?e:""+e).replace(qp,`
`).replace(Kp,"")}function Rr(e,t,n){if(t=Bs(t),Bs(e)!==t&&n)throw Error(S(425))}function ll(){}var Oi=null,Ii=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Gp=typeof clearTimeout=="function"?clearTimeout:void 0,Vs=typeof Promise=="function"?Promise:void 0,Yp=typeof queueMicrotask=="function"?queueMicrotask:typeof Vs<"u"?function(e){return Vs.resolve(null).then(e).catch(Xp)}:Di;function Xp(e){setTimeout(function(){throw e})}function ni(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Zn(t)}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+kn,rr="__reactProps$"+kn,Ye="__reactContainer$"+kn,$i="__reactEvents$"+kn,Zp="__reactListeners$"+kn,Jp="__reactHandles$"+kn;function Rt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qs(e);e!==null;){if(n=e[Ae])return n;e=Qs(e)}return t}e=n,n=e.parentNode}return null}function gr(e){return e=e[Ae]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function El(e){return e[rr]||null}var Ui=[],Jt=-1;function Nt(e){return{current:e}}function U(e){0>Jt||(e.current=Ui[Jt],Ui[Jt]=null,Jt--)}function D(e,t){Jt++,Ui[Jt]=e.current,e.current=t}var jt={},ue=Nt(jt),ge=Nt(!1),Ft=jt;function fn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function il(){U(ge),U(ue)}function Ws(e,t,n){if(ue.current!==jt)throw Error(S(168));D(ue,t),D(ge,n)}function Hu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(S(108,Fd(e)||"Unknown",l));return Q({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Ft=ue.current,D(ue,e),D(ge,ge.current),!0}function Hs(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Hu(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,U(ge),U(ue),D(ue,e)):U(ge),D(ge,n)}var We=null,Pl=!1,ri=!1;function qu(e){We===null?We=[e]:We.push(e)}function ef(e){Pl=!0,qu(e)}function Ct(){if(!ri&&We!==null){ri=!0;var e=0,t=I;try{var n=We;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,Pl=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),yu(jo,Ct),l}finally{I=t,ri=!1}}return null}var en=[],tn=0,sl=null,al=0,Ce=[],ze=0,Dt=null,He=1,qe="";function _t(e,t){en[tn++]=al,en[tn++]=sl,sl=e,al=t}function Ku(e,t,n){Ce[ze++]=He,Ce[ze++]=qe,Ce[ze++]=Dt,Dt=e;var r=He;e=qe;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var i=32-Oe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Oe(t)+l|n<<l|r,qe=i+e}else He=1<<i|n<<l|r,qe=e}function Ro(e){e.return!==null&&(_t(e,1),Ku(e,1,0))}function To(e){for(;e===sl;)sl=en[--tn],en[tn]=null,al=en[--tn],en[tn]=null;for(;e===Dt;)Dt=Ce[--ze],Ce[ze]=null,qe=Ce[--ze],Ce[ze]=null,He=Ce[--ze],Ce[ze]=null}var ke=null,we=null,A=!1,Me=null;function Gu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ke=e,we=ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ke=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:He,overflow:qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ke=e,we=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(A){var t=we;if(t){var n=t;if(!qs(e,t)){if(Ai(e))throw Error(S(418));t=ht(n.nextSibling);var r=ke;t&&qs(e,t)?Gu(r,n):(e.flags=e.flags&-4097|2,A=!1,ke=e)}}else{if(Ai(e))throw Error(S(418));e.flags=e.flags&-4097|2,A=!1,ke=e}}}function Ks(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ke=e}function Tr(e){if(e!==ke)return!1;if(!A)return Ks(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=we)){if(Ai(e))throw Yu(),Error(S(418));for(;t;)Gu(e,t),t=ht(t.nextSibling)}if(Ks(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=ke?ht(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=we;e;)e=ht(e.nextSibling)}function mn(){we=ke=null,A=!1}function bo(e){Me===null?Me=[e]:Me.push(e)}var tf=Je.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gs(e){var t=e._init;return t(e._payload)}function Xu(e){function t(h,p){if(e){var d=h.deletions;d===null?(h.deletions=[p],h.flags|=16):d.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function l(h,p){return h=xt(h,p),h.index=0,h.sibling=null,h}function i(h,p,d){return h.index=d,e?(d=h.alternate,d!==null?(d=d.index,d<p?(h.flags|=2,p):d):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,d,v){return p===null||p.tag!==6?(p=ci(d,h.mode,v),p.return=h,p):(p=l(p,d),p.return=h,p)}function u(h,p,d,v){var k=d.type;return k===Kt?f(h,p,d.props.children,v,d.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===it&&Gs(k)===p.type)?(v=l(p,d.props),v.ref=Ln(h,p,d),v.return=h,v):(v=Gr(d.type,d.key,d.props,null,h.mode,v),v.ref=Ln(h,p,d),v.return=h,v)}function c(h,p,d,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==d.containerInfo||p.stateNode.implementation!==d.implementation?(p=di(d,h.mode,v),p.return=h,p):(p=l(p,d.children||[]),p.return=h,p)}function f(h,p,d,v,k){return p===null||p.tag!==7?(p=It(d,h.mode,v,k),p.return=h,p):(p=l(p,d),p.return=h,p)}function m(h,p,d){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ci(""+p,h.mode,d),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case jr:return d=Gr(p.type,p.key,p.props,null,h.mode,d),d.ref=Ln(h,null,p),d.return=h,d;case qt:return p=di(p,h.mode,d),p.return=h,p;case it:var v=p._init;return m(h,v(p._payload),d)}if(Mn(p)||Cn(p))return p=It(p,h.mode,d,null),p.return=h,p;br(h,p)}return null}function g(h,p,d,v){var k=p!==null?p.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:a(h,p,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:return d.key===k?u(h,p,d,v):null;case qt:return d.key===k?c(h,p,d,v):null;case it:return k=d._init,g(h,p,k(d._payload),v)}if(Mn(d)||Cn(d))return k!==null?null:f(h,p,d,v,null);br(h,d)}return null}function y(h,p,d,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(d)||null,a(p,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jr:return h=h.get(v.key===null?d:v.key)||null,u(p,h,v,k);case qt:return h=h.get(v.key===null?d:v.key)||null,c(p,h,v,k);case it:var C=v._init;return y(h,p,d,C(v._payload),k)}if(Mn(v)||Cn(v))return h=h.get(d)||null,f(p,h,v,k,null);br(p,v)}return null}function x(h,p,d,v){for(var k=null,C=null,z=p,E=p=0,F=null;z!==null&&E<d.length;E++){z.index>E?(F=z,z=null):F=z.sibling;var L=g(h,z,d[E],v);if(L===null){z===null&&(z=F);break}e&&z&&L.alternate===null&&t(h,z),p=i(L,p,E),C===null?k=L:C.sibling=L,C=L,z=F}if(E===d.length)return n(h,z),A&&_t(h,E),k;if(z===null){for(;E<d.length;E++)z=m(h,d[E],v),z!==null&&(p=i(z,p,E),C===null?k=z:C.sibling=z,C=z);return A&&_t(h,E),k}for(z=r(h,z);E<d.length;E++)F=y(z,h,E,d[E],v),F!==null&&(e&&F.alternate!==null&&z.delete(F.key===null?E:F.key),p=i(F,p,E),C===null?k=F:C.sibling=F,C=F);return e&&z.forEach(function(b){return t(h,b)}),A&&_t(h,E),k}function w(h,p,d,v){var k=Cn(d);if(typeof k!="function")throw Error(S(150));if(d=k.call(d),d==null)throw Error(S(151));for(var C=k=null,z=p,E=p=0,F=null,L=d.next();z!==null&&!L.done;E++,L=d.next()){z.index>E?(F=z,z=null):F=z.sibling;var b=g(h,z,L.value,v);if(b===null){z===null&&(z=F);break}e&&z&&b.alternate===null&&t(h,z),p=i(b,p,E),C===null?k=b:C.sibling=b,C=b,z=F}if(L.done)return n(h,z),A&&_t(h,E),k;if(z===null){for(;!L.done;E++,L=d.next())L=m(h,L.value,v),L!==null&&(p=i(L,p,E),C===null?k=L:C.sibling=L,C=L);return A&&_t(h,E),k}for(z=r(h,z);!L.done;E++,L=d.next())L=y(z,h,E,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?E:L.key),p=i(L,p,E),C===null?k=L:C.sibling=L,C=L);return e&&z.forEach(function(ne){return t(h,ne)}),A&&_t(h,E),k}function N(h,p,d,v){if(typeof d=="object"&&d!==null&&d.type===Kt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:e:{for(var k=d.key,C=p;C!==null;){if(C.key===k){if(k=d.type,k===Kt){if(C.tag===7){n(h,C.sibling),p=l(C,d.props.children),p.return=h,h=p;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===it&&Gs(k)===C.type){n(h,C.sibling),p=l(C,d.props),p.ref=Ln(h,C,d),p.return=h,h=p;break e}n(h,C);break}else t(h,C);C=C.sibling}d.type===Kt?(p=It(d.props.children,h.mode,v,d.key),p.return=h,h=p):(v=Gr(d.type,d.key,d.props,null,h.mode,v),v.ref=Ln(h,p,d),v.return=h,h=v)}return o(h);case qt:e:{for(C=d.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===d.containerInfo&&p.stateNode.implementation===d.implementation){n(h,p.sibling),p=l(p,d.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=di(d,h.mode,v),p.return=h,h=p}return o(h);case it:return C=d._init,N(h,p,C(d._payload),v)}if(Mn(d))return x(h,p,d,v);if(Cn(d))return w(h,p,d,v);br(h,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,p!==null&&p.tag===6?(n(h,p.sibling),p=l(p,d),p.return=h,h=p):(n(h,p),p=ci(d,h.mode,v),p.return=h,h=p),o(h)):n(h,p)}return N}var hn=Xu(!0),Zu=Xu(!1),ul=Nt(null),cl=null,nn=null,Mo=null;function Oo(){Mo=nn=cl=null}function Io(e){var t=ul.current;U(ul),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){cl=e,Mo=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Mo!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(cl===null)throw Error(S(308));nn=e,cl.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Tt=null;function Fo(e){Tt===null?Tt=[e]:Tt.push(e)}function Ju(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Fo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,Fo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function Vr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,So(e,n)}}function Ys(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function dl(e,t,n,r){var l=e.updateQueue;ot=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,f=c=u=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(g=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(y,m,g):x,g==null)break e;m=Q({},m,g);break e;case 2:ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=y,u=m):f=f.next=y,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(1);if(f===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ut|=o,e.lanes=o,e.memoizedState=m}}function Xs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var vr={},Ve=Nt(vr),lr=Nt(vr),ir=Nt(vr);function bt(e){if(e===vr)throw Error(S(174));return e}function $o(e,t){switch(D(ir,t),D(lr,e),D(Ve,vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Si(t,e)}U(Ve),D(Ve,t)}function gn(){U(Ve),U(lr),U(ir)}function tc(e){bt(ir.current);var t=bt(Ve.current),n=Si(t,e.type);t!==n&&(D(lr,e),D(Ve,n))}function Uo(e){lr.current===e&&(U(Ve),U(lr))}var B=Nt(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var li=[];function Ao(){for(var e=0;e<li.length;e++)li[e]._workInProgressVersionPrimary=null;li.length=0}var Qr=Je.ReactCurrentDispatcher,ii=Je.ReactCurrentBatchConfig,$t=0,V=null,X=null,ee=null,fl=!1,Bn=!1,or=0,nf=0;function oe(){throw Error(S(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Vo(e,t,n,r,l,i){if($t=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qr.current=e===null||e.memoizedState===null?sf:af,e=n(r,l),Bn){i=0;do{if(Bn=!1,or=0,25<=i)throw Error(S(301));i+=1,ee=X=null,t.updateQueue=null,Qr.current=uf,e=n(r,l)}while(Bn)}if(Qr.current=ml,t=X!==null&&X.next!==null,$t=0,ee=X=V=null,fl=!1,t)throw Error(S(300));return e}function Qo(){var e=or!==0;return or=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?V.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?V.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(S(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?V.memoizedState=ee=e:ee=ee.next=e}return ee}function sr(e,t){return typeof t=="function"?t(e):t}function oi(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,c=i;do{var f=c.lane;if(($t&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,V.lanes|=f,Ut|=f}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,De(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Ut|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);De(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nc(){}function rc(e,t){var n=V,r=Le(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Wo(oc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ar(9,ic.bind(null,n,r,l,t),void 0,null),te===null)throw Error(S(349));$t&30||lc(n,t,l)}return l}function lc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,r){t.value=n,t.getSnapshot=r,sc(t)&&ac(e)}function oc(e,t,n){return n(function(){sc(t)&&ac(e)})}function sc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function ac(e){var t=Xe(e,1);t!==null&&Ie(t,e,1,-1)}function Zs(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=of.bind(null,V,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function uc(){return Le().memoizedState}function Wr(e,t,n,r){var l=Ue();V.flags|=e,l.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var l=Le();r=r===void 0?null:r;var i=void 0;if(X!==null){var o=X.memoizedState;if(i=o.destroy,r!==null&&Bo(r,o.deps)){l.memoizedState=ar(t,n,i,r);return}}V.flags|=e,l.memoizedState=ar(1|t,n,i,r)}function Js(e,t){return Wr(8390656,8,e,t)}function Wo(e,t){return _l(2048,8,e,t)}function cc(e,t){return _l(4,2,e,t)}function dc(e,t){return _l(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fc(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,pc.bind(null,t,e),n)}function Ho(){}function mc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gc(e,t,n){return $t&21?(De(n,t)||(n=ku(),V.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function rf(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ii.transition;ii.transition={};try{e(!1),t()}finally{I=n,ii.transition=r}}function vc(){return Le().memoizedState}function lf(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e))xc(t,n);else if(n=Ju(e,t,n,r),n!==null){var l=de();Ie(n,e,r,l),wc(n,t,r)}}function of(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))xc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,De(a,o)){var u=t.interleaved;u===null?(l.next=l,Fo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Ju(e,t,l,r),n!==null&&(l=de(),Ie(n,e,r,l),wc(n,t,r))}}function yc(e){var t=e.alternate;return e===V||t!==null&&t===V}function xc(e,t){Bn=fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,So(e,n)}}var ml={readContext:_e,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},sf={readContext:_e,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wr(4194308,4,pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Zs,useDebugValue:Ho,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Zs(!1),t=e[0];return e=rf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ue();if(A){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),te===null)throw Error(S(349));$t&30||lc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Js(oc.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,ic.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ue(),t=te.identifierPrefix;if(A){var n=qe,r=He;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},af={readContext:_e,useCallback:mc,useContext:_e,useEffect:Wo,useImperativeHandle:fc,useInsertionEffect:cc,useLayoutEffect:dc,useMemo:hc,useReducer:oi,useRef:uc,useState:function(){return oi(sr)},useDebugValue:Ho,useDeferredValue:function(e){var t=Le();return gc(t,X.memoizedState,e)},useTransition:function(){var e=oi(sr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:nc,useSyncExternalStore:rc,useId:vc,unstable_isNewReconciler:!1},uf={readContext:_e,useCallback:mc,useContext:_e,useEffect:Wo,useImperativeHandle:fc,useInsertionEffect:cc,useLayoutEffect:dc,useMemo:hc,useReducer:si,useRef:uc,useState:function(){return si(sr)},useDebugValue:Ho,useDeferredValue:function(e){var t=Le();return X===null?t.memoizedState=e:gc(t,X.memoizedState,e)},useTransition:function(){var e=si(sr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:nc,useSyncExternalStore:rc,useId:vc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=yt(e),i=Ke(r,l);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Ie(t,e,l,r),Vr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=yt(e),i=Ke(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,l),t!==null&&(Ie(t,e,l,r),Vr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=yt(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=gt(e,l,r),t!==null&&(Ie(t,e,r,n),Vr(t,e,r))}};function ea(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(l,i):!0}function kc(e,t,n){var r=!1,l=jt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=ve(t)?Ft:ue.current,r=t.contextTypes,i=(r=r!=null)?fn(e,l):jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ta(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Wi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Do(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=ve(t)?Ft:ue.current,l.context=fn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ll.enqueueReplaceState(l,l.state,null),dl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=Id(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ai(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cf=typeof WeakMap=="function"?WeakMap:Map;function jc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gl||(gl=!0,no=r),Hi(e,t)},n}function Sc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function na(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Nf.bind(null,e,t,n),t.then(e,e))}function ra(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function la(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var df=Je.ReactCurrentOwner,he=!1;function ce(e,t,n,r){t.child=e===null?Zu(t,null,n,r):hn(t,e.child,n,r)}function ia(e,t,n,r,l){n=n.render;var i=t.ref;return cn(t,l),r=Vo(e,t,n,r,i,l),n=Qo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(A&&n&&Ro(t),t.flags|=1,ce(e,t,r,l),t.child)}function oa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!es(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Nc(e,t,i,r,l)):(e=Gr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(o,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(er(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return qi(e,t,n,r,l)}function Cc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(ln,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(ln,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,D(ln,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,D(ln,xe),xe|=r;return ce(e,t,l,n),t.child}function zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,n,r,l){var i=ve(n)?Ft:ue.current;return i=fn(t,i),cn(t,l),n=Vo(e,t,n,r,i,l),r=Qo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(A&&r&&Ro(t),t.flags|=1,ce(e,t,n,l),t.child)}function sa(e,t,n,r,l){if(ve(n)){var i=!0;ol(t)}else i=!1;if(cn(t,l),t.stateNode===null)Hr(e,t),kc(t,n,r),Wi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ve(n)?Ft:ue.current,c=fn(t,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ta(t,o,r,c),ot=!1;var g=t.memoizedState;o.state=g,dl(t,r,o,l),u=t.memoizedState,a!==r||g!==u||ge.current||ot?(typeof f=="function"&&(Qi(t,n,f,r),u=t.memoizedState),(a=ot||ea(t,n,a,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ec(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Te(t.type,a),o.props=c,m=t.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ve(n)?Ft:ue.current,u=fn(t,u));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||g!==u)&&ta(t,o,r,u),ot=!1,g=t.memoizedState,o.state=g,dl(t,r,o,l);var x=t.memoizedState;a!==m||g!==x||ge.current||ot?(typeof y=="function"&&(Qi(t,n,y,r),x=t.memoizedState),(c=ot||ea(t,n,c,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ki(e,t,n,r,i,l)}function Ki(e,t,n,r,l,i){zc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Hs(t,n,!1),Ze(e,t,i);r=t.stateNode,df.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,a,i)):ce(e,t,a,i),t.memoizedState=r.state,l&&Hs(t,n,!0),t.child}function Ec(e){var t=e.stateNode;t.pendingContext?Ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ws(e,t.context,!1),$o(e,t.containerInfo)}function aa(e,t,n,r,l){return mn(),bo(l),t.flags|=256,ce(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pc(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),D(B,l&1),e===null)return Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=bl(o,r,0,null),e=It(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Gi,e):qo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return pf(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=xt(a,i):(i=It(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Yi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qo(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mr(e,t,n,r){return r!==null&&bo(r),hn(t,e.child,null,n),e=qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ai(Error(S(422))),Mr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=bl({mode:"visible",children:r.children},l,0,null),i=It(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,o),t.child.memoizedState=Yi(o),t.memoizedState=Gi,i);if(!(t.mode&1))return Mr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(S(419)),r=ai(i,r,void 0),Mr(e,t,o,r)}if(a=(o&e.childLanes)!==0,he||a){if(r=te,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Xe(e,l),Ie(r,e,l,-1))}return Jo(),r=ai(Error(S(421))),Mr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Cf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=ht(l.nextSibling),ke=t,A=!0,Me=null,e!==null&&(Ce[ze++]=He,Ce[ze++]=qe,Ce[ze++]=Dt,He=e.id,qe=e.overflow,Dt=t),t=qo(t,r.children),t.flags|=4096,t)}function ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function ui(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function _c(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ua(e,n,t);else if(e.tag===19)ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ui(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ui(t,!0,n,null,i);break;case"together":ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ff(e,t,n){switch(t.tag){case 3:Ec(t),mn();break;case 5:tc(t);break;case 1:ve(t.type)&&ol(t);break;case 4:$o(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;D(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Pc(e,t,n):(D(B,B.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);D(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _c(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),D(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Cc(e,t,n)}return Ze(e,t,n)}var Lc,Xi,Rc,Tc;Lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xi=function(){};Rc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,bt(Ve.current);var i=null;switch(n){case"input":l=xi(e,l),r=xi(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=ji(e,l),r=ji(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ll)}Ni(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&$("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mf(e,t,n){var r=t.pendingProps;switch(To(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ve(t.type)&&il(),se(t),null;case 3:return r=t.stateNode,gn(),U(ge),U(ue),Ao(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Me!==null&&(io(Me),Me=null))),Xi(e,t),se(t),null;case 5:Uo(t);var l=bt(ir.current);if(n=t.type,e!==null&&t.stateNode!=null)Rc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return se(t),null}if(e=bt(Ve.current),Tr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<In.length;l++)$(In[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":ys(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":ws(r,i),$("invalid",r)}Ni(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,a,e),l=["children",""+a]):qn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$("scroll",r)}switch(n){case"input":Sr(r),xs(r,i,!0);break;case"textarea":Sr(r),ks(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ll)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ou(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[rr]=r,Lc(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ci(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<In.length;l++)$(In[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":ys(e,r),l=xi(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),$("invalid",e);break;case"textarea":ws(e,r),l=ji(e,r),$("invalid",e);break;default:l=r}Ni(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?uu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&su(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&$("scroll",e):u!=null&&vo(e,i,u,o))}switch(n){case"input":Sr(e),xs(e,r,!1);break;case"textarea":Sr(e),ks(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=bt(ir.current),bt(Ve.current),Tr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=ke,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return se(t),null;case 13:if(U(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&we!==null&&t.mode&1&&!(t.flags&128))Yu(),mn(),t.flags|=98560,i=!1;else if(i=Tr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ae]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else Me!==null&&(io(Me),Me=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):Jo())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return gn(),Xi(e,t),e===null&&tr(t.stateNode.containerInfo),se(t),null;case 10:return Io(t.type._context),se(t),null;case 17:return ve(t.type)&&il(),se(t),null;case 19:if(U(B),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Rn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=pl(e),o!==null){for(t.flags|=128,Rn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>yn&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304)}else{if(!r)if(e=pl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!A)return se(t),null}else 2*q()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=B.current,D(B,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Zo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function hf(e,t){switch(To(t),t.tag){case 1:return ve(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),U(ge),U(ue),Ao(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Uo(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return gn(),null;case 10:return Io(t.type._context),null;case 22:case 23:return Zo(),null;case 24:return null;default:return null}}var Or=!1,ae=!1,gf=typeof WeakSet=="function"?WeakSet:Set,P=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Zi(e,t,n){try{n()}catch(r){W(e,t,r)}}var ca=!1;function vf(e,t){if(Oi=tl,e=Fu(),Lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,f=0,m=e,g=null;t:for(;;){for(var y;m!==n||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++c===l&&(a=o),g===i&&++f===r&&(u=o),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ii={focusedElem:e,selectionRange:n},tl=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,N=x.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),N);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){W(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return x=ca,ca=!1,x}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Zi(t,n,i)}l=l.next}while(l!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ji(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bc(e){var t=e.alternate;t!==null&&(e.alternate=null,bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[rr],delete t[$i],delete t[Zp],delete t[Jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ll));else if(r!==4&&(e=e.child,e!==null))for(eo(e,t,n),e=e.sibling;e!==null;)eo(e,t,n),e=e.sibling}function to(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(to(e,t,n),e=e.sibling;e!==null;)to(e,t,n),e=e.sibling}var re=null,be=!1;function rt(e,t,n){for(n=n.child;n!==null;)Oc(e,t,n),n=n.sibling}function Oc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:ae||rn(n,t);case 6:var r=re,l=be;re=null,rt(e,t,n),re=r,be=l,re!==null&&(be?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(be?(e=re,n=n.stateNode,e.nodeType===8?ni(e.parentNode,n):e.nodeType===1&&ni(e,n),Zn(e)):ni(re,n.stateNode));break;case 4:r=re,l=be,re=n.stateNode.containerInfo,be=!0,rt(e,t,n),re=r,be=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Zi(n,t,o),l=l.next}while(l!==r)}rt(e,t,n);break;case 1:if(!ae&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,rt(e,t,n),ae=r):rt(e,t,n);break;default:rt(e,t,n)}}function pa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gf),t.forEach(function(r){var l=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,be=!1;break e;case 3:re=a.stateNode.containerInfo,be=!0;break e;case 4:re=a.stateNode.containerInfo,be=!0;break e}a=a.return}if(re===null)throw Error(S(160));Oc(i,o,l),re=null,be=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){W(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),$e(e),r&4){try{Vn(3,e,e.return),Rl(3,e)}catch(w){W(e,e.return,w)}try{Vn(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Re(t,e),$e(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Re(t,e),$e(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(w){W(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&lu(l,i),Ci(a,o);var c=Ci(a,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?uu(l,m):f==="dangerouslySetInnerHTML"?su(l,m):f==="children"?Kn(l,m):vo(l,f,m,c)}switch(a){case"input":wi(l,i);break;case"textarea":iu(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?on(l,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?on(l,!!i.multiple,i.defaultValue,!0):on(l,!!i.multiple,i.multiple?[]:"",!1))}l[rr]=i}catch(w){W(e,e.return,w)}}break;case 6:if(Re(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){W(e,e.return,w)}}break;case 3:if(Re(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Re(t,e),$e(e);break;case 13:Re(t,e),$e(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Yo=q())),r&4&&pa(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||f,Re(t,e),ae=c):Re(t,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(P=e,f=e.child;f!==null;){for(m=P=f;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:Vn(4,g,g.return);break;case 1:rn(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:rn(g,g.return);break;case 22:if(g.memoizedState!==null){ma(m);continue}}y!==null?(y.return=g,P=y):ma(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=au("display",o))}catch(w){W(e,e.return,w)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){W(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),$e(e),r&4&&pa(e);break;case 21:break;default:Re(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var i=da(e);to(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=da(e);eo(e,a,o);break;default:throw Error(S(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yf(e,t,n){P=e,Fc(e)}function Fc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Or;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ae;a=Or;var c=ae;if(Or=o,(ae=u)&&!c)for(P=l;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?ha(l):u!==null?(u.return=o,P=u):ha(l);for(;i!==null;)P=i,Fc(i),i=i.sibling;P=l,Or=a,ae=c}fa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,P=i):fa(e)}}function fa(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Xs(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xs(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Zn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}ae||t.flags&512&&Ji(t)}catch(g){W(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function ma(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function ha(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){W(t,l,u)}}var i=t.return;try{Ji(t)}catch(u){W(t,i,u)}break;case 5:var o=t.return;try{Ji(t)}catch(u){W(t,o,u)}}}catch(u){W(t,t.return,u)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var xf=Math.ceil,hl=Je.ReactCurrentDispatcher,Ko=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,O=0,te=null,G=null,le=0,xe=0,ln=Nt(0),Z=0,ur=null,Ut=0,Tl=0,Go=0,Qn=null,me=null,Yo=0,yn=1/0,Qe=null,gl=!1,no=null,vt=null,Ir=!1,ct=null,vl=0,Wn=0,ro=null,qr=-1,Kr=0;function de(){return O&6?q():qr!==-1?qr:qr=q()}function yt(e){return e.mode&1?O&2&&le!==0?le&-le:tf.transition!==null?(Kr===0&&(Kr=ku()),Kr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Pu(e.type)),e):1}function Ie(e,t,n,r){if(50<Wn)throw Wn=0,ro=null,Error(S(185));mr(e,n,r),(!(O&2)||e!==te)&&(e===te&&(!(O&2)&&(Tl|=n),Z===4&&at(e,le)),ye(e,r),n===1&&O===0&&!(t.mode&1)&&(yn=q()+500,Pl&&Ct()))}function ye(e,t){var n=e.callbackNode;tp(e,t);var r=el(e,e===te?le:0);if(r===0)n!==null&&Ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ns(n),t===1)e.tag===0?ef(ga.bind(null,e)):qu(ga.bind(null,e)),Yp(function(){!(O&6)&&Ct()}),n=null;else{switch(ju(r)){case 1:n=jo;break;case 4:n=xu;break;case 16:n=Jr;break;case 536870912:n=wu;break;default:n=Jr}n=Wc(n,Dc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dc(e,t){if(qr=-1,Kr=0,O&6)throw Error(S(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var r=el(e,e===te?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=yl(e,r);else{t=r;var l=O;O|=2;var i=Uc();(te!==e||le!==t)&&(Qe=null,yn=q()+500,Ot(e,t));do try{jf();break}catch(a){$c(e,a)}while(1);Oo(),hl.current=i,O=l,G!==null?t=0:(te=null,le=0,t=Z)}if(t!==0){if(t===2&&(l=Li(e),l!==0&&(r=l,t=lo(e,l))),t===1)throw n=ur,Ot(e,0),at(e,r),ye(e,q()),n;if(t===6)at(e,r);else{if(l=e.current.alternate,!(r&30)&&!wf(l)&&(t=yl(e,r),t===2&&(i=Li(e),i!==0&&(r=i,t=lo(e,i))),t===1))throw n=ur,Ot(e,0),at(e,r),ye(e,q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Lt(e,me,Qe);break;case 3:if(at(e,r),(r&130023424)===r&&(t=Yo+500-q(),10<t)){if(el(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Di(Lt.bind(null,e,me,Qe),t);break}Lt(e,me,Qe);break;case 4:if(at(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Oe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xf(r/1960))-r,10<r){e.timeoutHandle=Di(Lt.bind(null,e,me,Qe),r);break}Lt(e,me,Qe);break;case 5:Lt(e,me,Qe);break;default:throw Error(S(329))}}}return ye(e,q()),e.callbackNode===n?Dc.bind(null,e):null}function lo(e,t){var n=Qn;return e.current.memoizedState.isDehydrated&&(Ot(e,t).flags|=256),e=yl(e,t),e!==2&&(t=me,me=n,t!==null&&io(t)),e}function io(e){me===null?me=e:me.push.apply(me,e)}function wf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function at(e,t){for(t&=~Go,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function ga(e){if(O&6)throw Error(S(327));dn();var t=el(e,0);if(!(t&1))return ye(e,q()),null;var n=yl(e,t);if(e.tag!==0&&n===2){var r=Li(e);r!==0&&(t=r,n=lo(e,r))}if(n===1)throw n=ur,Ot(e,0),at(e,t),ye(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,me,Qe),ye(e,q()),null}function Xo(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(yn=q()+500,Pl&&Ct())}}function At(e){ct!==null&&ct.tag===0&&!(O&6)&&dn();var t=O;O|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,O=t,!(O&6)&&Ct()}}function Zo(){xe=ln.current,U(ln)}function Ot(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gp(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(To(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:gn(),U(ge),U(ue),Ao();break;case 5:Uo(r);break;case 4:gn();break;case 13:U(B);break;case 19:U(B);break;case 10:Io(r.type._context);break;case 22:case 23:Zo()}n=n.return}if(te=e,G=e=xt(e.current,null),le=xe=t,Z=0,ur=null,Go=Tl=Ut=0,me=Qn=null,Tt!==null){for(t=0;t<Tt.length;t++)if(n=Tt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Tt=null}return e}function $c(e,t){do{var n=G;try{if(Oo(),Qr.current=ml,fl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}fl=!1}if($t=0,ee=X=V=null,Bn=!1,or=0,Ko.current=null,n===null||n.return===null){Z=1,ur=t,G=null;break}e:{var i=e,o=n.return,a=n,u=t;if(t=le,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=ra(o);if(y!==null){y.flags&=-257,la(y,o,a,i,t),y.mode&1&&na(i,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if(!(t&1)){na(i,c,t),Jo();break e}u=Error(S(426))}}else if(A&&a.mode&1){var N=ra(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),la(N,o,a,i,t),bo(vn(u,a));break e}}i=u=vn(u,a),Z!==4&&(Z=2),Qn===null?Qn=[i]:Qn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=jc(i,u,t);Ys(i,h);break e;case 1:a=u;var p=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vt===null||!vt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Sc(i,a,t);Ys(i,v);break e}}i=i.return}while(i!==null)}Bc(n)}catch(k){t=k,G===n&&n!==null&&(G=n=n.return);continue}break}while(1)}function Uc(){var e=hl.current;return hl.current=ml,e===null?ml:e}function Jo(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||!(Ut&268435455)&&!(Tl&268435455)||at(te,le)}function yl(e,t){var n=O;O|=2;var r=Uc();(te!==e||le!==t)&&(Qe=null,Ot(e,t));do try{kf();break}catch(l){$c(e,l)}while(1);if(Oo(),O=n,hl.current=r,G!==null)throw Error(S(261));return te=null,le=0,Z}function kf(){for(;G!==null;)Ac(G)}function jf(){for(;G!==null&&!Hd();)Ac(G)}function Ac(e){var t=Qc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Bc(e):G=t,Ko.current=null}function Bc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hf(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,G=null;return}}else if(n=mf(n,t,xe),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Z===0&&(Z=5)}function Lt(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,Sf(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function Sf(e,t,n,r){do dn();while(ct!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(np(e,i),e===te&&(G=te=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Wc(Jr,function(){return dn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=I;I=1;var a=O;O|=4,Ko.current=null,vf(e,n),Ic(n,e),Bp(Ii),tl=!!Oi,Ii=Oi=null,e.current=n,yf(n),qd(),O=a,I=o,Pe.transition=i}else e.current=n;if(Ir&&(Ir=!1,ct=e,vl=l),i=e.pendingLanes,i===0&&(vt=null),Yd(n.stateNode),ye(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(gl)throw gl=!1,e=no,no=null,e;return vl&1&&e.tag!==0&&dn(),i=e.pendingLanes,i&1?e===ro?Wn++:(Wn=0,ro=e):Wn=0,Ct(),null}function dn(){if(ct!==null){var e=ju(vl),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,ct===null)var r=!1;else{if(e=ct,ct=null,vl=0,O&6)throw Error(S(331));var l=O;for(O|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(P=c;P!==null;){var f=P;switch(f.tag){case 0:case 11:case 15:Vn(8,f,i)}var m=f.child;if(m!==null)m.return=f,P=m;else for(;P!==null;){f=P;var g=f.sibling,y=f.return;if(bc(f),f===c){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,P=h;break e}P=i.return}}var p=e.current;for(P=p;P!==null;){o=P;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,P=d;else e:for(o=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(k){W(a,a.return,k)}if(a===o){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(O=l,Ct(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function va(e,t,n){t=vn(n,t),t=jc(e,t,1),e=gt(e,t,1),t=de(),e!==null&&(mr(e,1,t),ye(e,t))}function W(e,t,n){if(e.tag===3)va(e,e,n);else for(;t!==null;){if(t.tag===3){va(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=vn(n,e),e=Sc(t,e,1),t=gt(t,e,1),e=de(),t!==null&&(mr(t,1,e),ye(t,e));break}}t=t.return}}function Nf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(le&n)===n&&(Z===4||Z===3&&(le&130023424)===le&&500>q()-Yo?Ot(e,0):Go|=n),ye(e,t)}function Vc(e,t){t===0&&(e.mode&1?(t=zr,zr<<=1,!(zr&130023424)&&(zr=4194304)):t=1);var n=de();e=Xe(e,t),e!==null&&(mr(e,t,n),ye(e,n))}function Cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vc(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Vc(e,n)}var Qc;Qc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,ff(e,t,n);he=!!(e.flags&131072)}else he=!1,A&&t.flags&1048576&&Ku(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=fn(t,ue.current);cn(t,n),l=Vo(null,t,r,e,l,n);var i=Qo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,ol(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Do(t),l.updater=Ll,t.stateNode=l,l._reactInternals=t,Wi(t,r,e,n),t=Ki(null,t,r,!0,i,n)):(t.tag=0,A&&i&&Ro(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Pf(r),e=Te(r,e),l){case 0:t=qi(null,t,r,e,n);break e;case 1:t=sa(null,t,r,e,n);break e;case 11:t=ia(null,t,r,e,n);break e;case 14:t=oa(null,t,r,Te(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),qi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),sa(e,t,r,l,n);case 3:e:{if(Ec(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ec(e,t),dl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=vn(Error(S(423)),t),t=aa(e,t,r,n,l);break e}else if(r!==l){l=vn(Error(S(424)),t),t=aa(e,t,r,n,l);break e}else for(we=ht(t.stateNode.containerInfo.firstChild),ke=t,A=!0,Me=null,n=Zu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===l){t=Ze(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return tc(t),e===null&&Bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Fi(r,l)?o=null:i!==null&&Fi(r,i)&&(t.flags|=32),zc(e,t),ce(e,t,o,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return Pc(e,t,n);case 4:return $o(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),ia(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,D(ul,r._currentValue),r._currentValue=o,i!==null)if(De(i.value,o)){if(i.children===l.children&&!ge.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ke(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Vi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,cn(t,n),l=_e(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),oa(e,t,r,l,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Hr(e,t),t.tag=1,ve(r)?(e=!0,ol(t)):e=!1,cn(t,n),kc(t,r,l),Wi(t,r,l,n),Ki(null,t,r,!0,e,n);case 19:return _c(e,t,n);case 22:return Cc(e,t,n)}throw Error(S(156,t.tag))};function Wc(e,t){return yu(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Ef(e,t,n,r)}function es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return es(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===wo)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")es(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kt:return It(n.children,l,i,t);case yo:o=8,l|=8;break;case hi:return e=Ee(12,n,t,l|2),e.elementType=hi,e.lanes=i,e;case gi:return e=Ee(13,n,t,l),e.elementType=gi,e.lanes=i,e;case vi:return e=Ee(19,n,t,l),e.elementType=vi,e.lanes=i,e;case tu:return bl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ja:o=10;break e;case eu:o=9;break e;case xo:o=11;break e;case wo:o=14;break e;case it:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function It(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function bl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=tu,e.lanes=n,e.stateNode={isHidden:!1},e}function ci(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function di(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _f(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ts(e,t,n,r,l,i,o,a,u){return e=new _f(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(i),e}function Lf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hc(e){if(!e)return jt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ve(n))return Hu(e,n,t)}return t}function qc(e,t,n,r,l,i,o,a,u){return e=ts(n,r,!0,e,l,i,o,a,u),e.context=Hc(null),n=e.current,r=de(),l=yt(n),i=Ke(r,l),i.callback=t!=null?t:null,gt(n,i,l),e.current.lanes=l,mr(e,l,r),ye(e,r),e}function Ml(e,t,n,r){var l=t.current,i=de(),o=yt(l);return n=Hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(l,t,o),e!==null&&(Ie(e,l,o,i),Vr(e,l,o)),o}function xl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ya(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ns(e,t){ya(e,t),(e=e.alternate)&&ya(e,t)}function Rf(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function rs(e){this._internalRoot=e}Ol.prototype.render=rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ml(e,t,null,null)};Ol.prototype.unmount=rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;At(function(){Ml(null,e,null,null)}),t[Ye]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&Eu(e)}};function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xa(){}function Tf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=xl(o);i.call(c)}}var o=qc(t,r,e,0,null,!1,!1,"",xa);return e._reactRootContainer=o,e[Ye]=o.current,tr(e.nodeType===8?e.parentNode:e),At(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=xl(u);a.call(c)}}var u=ts(e,0,!1,null,null,!1,!1,"",xa);return e._reactRootContainer=u,e[Ye]=u.current,tr(e.nodeType===8?e.parentNode:e),At(function(){Ml(t,u,n,r)}),u}function Fl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=xl(o);a.call(u)}}Ml(t,o,e,l)}else o=Tf(n,t,e,l,r);return xl(o)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(So(t,n|1),ye(t,q()),!(O&6)&&(yn=q()+500,Ct()))}break;case 13:At(function(){var r=Xe(e,1);if(r!==null){var l=de();Ie(r,e,1,l)}}),ns(e,1)}};No=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=de();Ie(t,e,134217728,n)}ns(e,134217728)}};Nu=function(e){if(e.tag===13){var t=yt(e),n=Xe(e,t);if(n!==null){var r=de();Ie(n,e,t,r)}ns(e,t)}};Cu=function(){return I};zu=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Ei=function(e,t,n){switch(t){case"input":if(wi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=El(r);if(!l)throw Error(S(90));ru(r),wi(r,l)}}}break;case"textarea":iu(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};pu=Xo;fu=At;var bf={usingClientEntryPoint:!1,Events:[gr,Zt,El,cu,du,Xo]},Tn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gu(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fr.isDisabled&&Fr.supportsFiber)try{Sl=Fr.inject(Mf),Be=Fr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bf;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ls(t))throw Error(S(200));return Lf(e,t,null,n)};Se.createRoot=function(e,t){if(!ls(e))throw Error(S(299));var n=!1,r="",l=Kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ts(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,tr(e.nodeType===8?e.parentNode:e),new rs(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=gu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return At(e)};Se.hydrate=function(e,t,n){if(!Il(t))throw Error(S(200));return Fl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ls(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=qc(t,null,e,1,n!=null?n:null,l,!1,i,o),e[Ye]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ol(t)};Se.render=function(e,t,n){if(!Il(t))throw Error(S(200));return Fl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Il(e))throw Error(S(40));return e._reactRootContainer?(At(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Se.unstable_batchedUpdates=Xo;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Il(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Fl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Ga.exports=Se;var Of=Ga.exports,wa=Of;fi.createRoot=wa.createRoot,fi.hydrateRoot=wa.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(this,arguments)}var dt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dt||(dt={}));const ka="popstate";function If(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:a}=r.location;return oo("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:wl(l)}return Df(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function is(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ff(){return Math.random().toString(36).substr(2,8)}function ja(e,t){return{usr:e.state,key:e.key,idx:t}}function oo(e,t,n,r){return n===void 0&&(n=null),cr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jn(t):t,{state:n,key:t&&t.key||r||Ff()})}function wl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Df(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=dt.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(cr({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function m(){a=dt.Pop;let N=f(),h=N==null?null:N-c;c=N,u&&u({action:a,location:w.location,delta:h})}function g(N,h){a=dt.Push;let p=oo(w.location,N,h);n&&n(p,N),c=f()+1;let d=ja(p,c),v=w.createHref(p);try{o.pushState(d,"",v)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(v)}i&&u&&u({action:a,location:w.location,delta:1})}function y(N,h){a=dt.Replace;let p=oo(w.location,N,h);n&&n(p,N),c=f();let d=ja(p,c),v=w.createHref(p);o.replaceState(d,"",v),i&&u&&u({action:a,location:w.location,delta:0})}function x(N){let h=l.location.origin!=="null"?l.location.origin:l.location.href,p=typeof N=="string"?N:wl(N);return p=p.replace(/ $/,"%20"),K(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let w={get action(){return a},get location(){return e(l,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(ka,m),u=N,()=>{l.removeEventListener(ka,m),u=null}},createHref(N){return t(l,N)},createURL:x,encodeLocation(N){let h=x(N);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:y,go(N){return o.go(N)}};return w}var Sa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sa||(Sa={}));function $f(e,t,n){return n===void 0&&(n="/"),Uf(e,t,n,!1)}function Uf(e,t,n,r){let l=typeof t=="string"?jn(t):t,i=os(l.pathname||"/",n);if(i==null)return null;let o=Yc(e);Af(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=Zf(i);a=Yf(o[u],c,r)}return a}function Yc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(K(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=wt([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(K(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yc(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Kf(c,i.index),routesMeta:f})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let u of Xc(i.path))l(i,o,u)}),t}function Xc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Xc(r.join("/")),a=[];return a.push(...o.map(u=>u===""?i:[i,u].join("/"))),l&&a.push(...o),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Af(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bf=/^:[\w-]+$/,Vf=3,Qf=2,Wf=1,Hf=10,qf=-2,Na=e=>e==="*";function Kf(e,t){let n=e.split("/"),r=n.length;return n.some(Na)&&(r+=qf),t&&(r+=Qf),n.filter(l=>!Na(l)).reduce((l,i)=>l+(Bf.test(i)?Vf:i===""?Wf:Hf),r)}function Gf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Yf(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=Ca({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!m&&c&&n&&!r[r.length-1].route.index&&(m=Ca({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:wt([i,m.pathname]),pathnameBase:rm(wt([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=wt([i,m.pathnameBase]))}return o}function Ca(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Xf(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,f,m)=>{let{paramName:g,isOptional:y}=f;if(g==="*"){let w=a[m]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[m];return y&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Xf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),is(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Zf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return is(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function os(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Jf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,em=e=>Jf.test(e);function tm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?jn(e):e,i;if(n)if(em(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),is(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=za(n.substring(1),"/"):i=za(n,t)}else i=t;return{pathname:i,search:lm(r),hash:im(l)}}function za(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function pi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ss(e,t){let n=nm(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function as(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=jn(e):(l=cr({},e),K(!l.pathname||!l.pathname.includes("?"),pi("?","pathname","search",l)),K(!l.pathname||!l.pathname.includes("#"),pi("#","pathname","hash",l)),K(!l.search||!l.search.includes("#"),pi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;l.pathname=g.join("/")}a=m>=0?t[m]:"/"}let u=tm(l,a),c=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const wt=e=>e.join("/").replace(/\/\/+/g,"/"),rm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zc=["post","put","patch","delete"];new Set(Zc);const sm=["get",...Zc];new Set(sm);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dr(){return dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dr.apply(this,arguments)}const us=j.createContext(null),am=j.createContext(null),zt=j.createContext(null),Dl=j.createContext(null),et=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Jc=j.createContext(null);function um(e,t){let{relative:n}=t===void 0?{}:t;Sn()||K(!1);let{basename:r,navigator:l}=j.useContext(zt),{hash:i,pathname:o,search:a}=td(e,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:wt([r,o])),l.createHref({pathname:u,search:a,hash:i})}function Sn(){return j.useContext(Dl)!=null}function Nn(){return Sn()||K(!1),j.useContext(Dl).location}function ed(e){j.useContext(zt).static||j.useLayoutEffect(e)}function cs(){let{isDataRoute:e}=j.useContext(et);return e?Sm():cm()}function cm(){Sn()||K(!1);let e=j.useContext(us),{basename:t,future:n,navigator:r}=j.useContext(zt),{matches:l}=j.useContext(et),{pathname:i}=Nn(),o=JSON.stringify(ss(l,n.v7_relativeSplatPath)),a=j.useRef(!1);return ed(()=>{a.current=!0}),j.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=as(c,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:wt([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,o,i,e])}function dm(){let{matches:e}=j.useContext(et),t=e[e.length-1];return t?t.params:{}}function td(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(zt),{matches:l}=j.useContext(et),{pathname:i}=Nn(),o=JSON.stringify(ss(l,r.v7_relativeSplatPath));return j.useMemo(()=>as(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function pm(e,t){return fm(e,t)}function fm(e,t,n,r){Sn()||K(!1);let{navigator:l}=j.useContext(zt),{matches:i}=j.useContext(et),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Nn(),f;if(t){var m;let N=typeof t=="string"?jn(t):t;u==="/"||(m=N.pathname)!=null&&m.startsWith(u)||K(!1),f=N}else f=c;let g=f.pathname||"/",y=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let x=$f(e,{pathname:y}),w=ym(x&&x.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:wt([u,l.encodeLocation?l.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:wt([u,l.encodeLocation?l.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return t&&w?j.createElement(Dl.Provider,{value:{location:dr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:dt.Pop}},w):w}function mm(){let e=jm(),t=om(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:l},n):null,i)}const hm=j.createElement(mm,null);class gm extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(et.Provider,{value:this.props.routeContext},j.createElement(Jc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vm(e){let{routeContext:t,match:n,children:r}=e,l=j.useContext(us);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(et.Provider,{value:t},r)}function ym(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let f=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||K(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=f),m.route.id){let{loaderData:g,errors:y}=n,x=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||x){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let y,x=!1,w=null,N=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,w=m.route.errorElement||hm,u&&(c<0&&g===0?(Nm("route-fallback",!1),x=!0,N=null):c===g&&(x=!0,N=m.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,g+1)),p=()=>{let d;return y?d=w:x?d=N:m.route.Component?d=j.createElement(m.route.Component,null):m.route.element?d=m.route.element:d=f,j.createElement(vm,{match:m,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:d})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?j.createElement(gm,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var nd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nd||{}),kl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(kl||{});function xm(e){let t=j.useContext(us);return t||K(!1),t}function wm(e){let t=j.useContext(am);return t||K(!1),t}function km(e){let t=j.useContext(et);return t||K(!1),t}function rd(e){let t=km(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function jm(){var e;let t=j.useContext(Jc),n=wm(kl.UseRouteError),r=rd(kl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Sm(){let{router:e}=xm(nd.UseNavigateStable),t=rd(kl.UseNavigateStable),n=j.useRef(!1);return ed(()=>{n.current=!0}),j.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,dr({fromRouteId:t},i)))},[e,t])}const Ea={};function Nm(e,t,n){!t&&!Ea[e]&&(Ea[e]=!0)}function Cm(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function zm(e){let{to:t,replace:n,state:r,relative:l}=e;Sn()||K(!1);let{future:i,static:o}=j.useContext(zt),{matches:a}=j.useContext(et),{pathname:u}=Nn(),c=cs(),f=as(t,ss(a,i.v7_relativeSplatPath),u,l==="path"),m=JSON.stringify(f);return j.useEffect(()=>c(JSON.parse(m),{replace:n,state:r,relative:l}),[c,m,l,n,r]),null}function lt(e){K(!1)}function Em(e){let{basename:t="/",children:n=null,location:r,navigationType:l=dt.Pop,navigator:i,static:o=!1,future:a}=e;Sn()&&K(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:i,static:o,future:dr({v7_relativeSplatPath:!1},a)}),[u,a,i,o]);typeof r=="string"&&(r=jn(r));let{pathname:f="/",search:m="",hash:g="",state:y=null,key:x="default"}=r,w=j.useMemo(()=>{let N=os(f,u);return N==null?null:{location:{pathname:N,search:m,hash:g,state:y,key:x},navigationType:l}},[u,f,m,g,y,x,l]);return w==null?null:j.createElement(zt.Provider,{value:c},j.createElement(Dl.Provider,{children:n,value:w}))}function Pm(e){let{children:t,location:n}=e;return pm(so(t),n)}new Promise(()=>{});function so(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,l)=>{if(!j.isValidElement(r))return;let i=[...t,l];if(r.type===j.Fragment){n.push.apply(n,so(r.props.children,i));return}r.type!==lt&&K(!1),!r.props.index||!r.props.children||K(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=so(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}function _m(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Lm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Rm(e,t){return e.button===0&&(!t||t==="_self")&&!Lm(e)}const Tm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bm="6";try{window.__reactRouterVersion=bm}catch{}const Mm="startTransition",Pa=Sd[Mm];function Om(e){let{basename:t,children:n,future:r,window:l}=e,i=j.useRef();i.current==null&&(i.current=If({window:l,v5Compat:!0}));let o=i.current,[a,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=j.useCallback(m=>{c&&Pa?Pa(()=>u(m)):u(m)},[u,c]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>Cm(r),[r]),j.createElement(Em,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uo=j.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:u,to:c,preventScrollReset:f,viewTransition:m}=t,g=_m(t,Tm),{basename:y}=j.useContext(zt),x,w=!1;if(typeof c=="string"&&Fm.test(c)&&(x=c,Im))try{let d=new URL(window.location.href),v=c.startsWith("//")?new URL(d.protocol+c):new URL(c),k=os(v.pathname,y);v.origin===d.origin&&k!=null?c=k+v.search+v.hash:w=!0}catch{}let N=um(c,{relative:l}),h=Dm(c,{replace:o,state:a,target:u,preventScrollReset:f,relative:l,viewTransition:m});function p(d){r&&r(d),d.defaultPrevented||h(d)}return j.createElement("a",ao({},g,{href:x||N,onClick:w||i?r:p,ref:n,target:u}))});var _a;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_a||(_a={}));var La;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(La||(La={}));function Dm(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,u=cs(),c=Nn(),f=td(e,{relative:o});return j.useCallback(m=>{if(Rm(m,n)){m.preventDefault();let g=r!==void 0?r:wl(c)===wl(f);u(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[c,u,f,r,l,n,e,i,o,a])}var $m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Um=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Am=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:a,...u},c)=>j.createElement("svg",{ref:c,...$m,width:l,height:l,stroke:r,strokeWidth:o?Number(i)*24/Number(l):i,className:`lucide lucide-${Um(e)}`,...u},[...t.map(([f,m])=>j.createElement(f,m)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n};var Y=Am;const Ra=Y("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Bm=Y("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Hn=Y("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Mt=Y("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Fe=Y("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Vm=Y("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),Qm=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ld=Y("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Wm=Y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),Ta=Y("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]),ds=Y("FolderTree",[["path",{d:"M13 10h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"10jzg2"}],["path",{d:"M13 21h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.88a1 1 0 0 1-.9-.55l-.44-.9a1 1 0 0 0-.9-.55H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"1b9nqm"}],["path",{d:"M3 3v2c0 1.1.9 2 2 2h3",key:"1wqwis"}],["path",{d:"M3 3v13c0 1.1.9 2 2 2h3",key:"1bqeom"}]]),ba=Y("Folder",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}]]),Hm=Y("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]),Ma=Y("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),qm=Y("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),Km=Y("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Oa=Y("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Gm=Y("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]),Ym=Y("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),pr=Y("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function id(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=id(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Xm(){for(var e,t,n=0,r="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=id(e))&&(r&&(r+=" "),r+=t);return r}const Zm=({items:e,activeTab:t,onTabChange:n})=>{const r=Nn();return s.jsxs("nav",{className:"navigation",children:[s.jsxs("div",{className:"nav-header",children:[s.jsx("h2",{className:"nav-title",children:"Learn React"}),s.jsx("p",{className:"nav-subtitle",children:"Best Practices"})]}),s.jsx("ul",{className:"nav-list",children:e.map(l=>{const i=l.icon,o=r.pathname===l.path;return s.jsx("li",{className:"nav-item",children:s.jsxs(uo,{to:l.path,className:Xm("nav-link",{"nav-link--active":o}),onClick:()=>n(l.id),children:[s.jsx(i,{size:20}),s.jsx("span",{children:l.label})]})},l.id)})}),s.jsx("div",{className:"nav-footer",children:s.jsxs("div",{className:"nav-progress",children:[s.jsx("h4",{children:"Your Progress"}),s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{children:"Lessons Completed"}),s.jsx("div",{className:"progress",children:s.jsx("div",{className:"progress-bar",style:{width:"60%"}})}),s.jsx("span",{className:"progress-text",children:"3/5"})]}),s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{children:"Quiz Score"}),s.jsx("div",{className:"progress",children:s.jsx("div",{className:"progress-bar",style:{width:"85%"}})}),s.jsx("span",{className:"progress-text",children:"85%"})]})]})}),s.jsx("style",{jsx:!0,children:`
        .navigation {
          width: 280px;
          height: calc(100vh - 30px);
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .nav-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
          text-align: center;
        }

        .nav-title {
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-xs);
          color: var(--accent-blue);
        }

        .nav-subtitle {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
          margin: 0;
        }

        .nav-list {
          flex: 1;
          padding: var(--spacing-md);
          list-style: none;
        }

        .nav-item {
          margin-bottom: var(--spacing-xs);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--border-radius-md);
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .nav-link:hover {
          background-color: var(--hover-bg);
          color: var(--text-primary);
        }

        .nav-link--active {
          background-color: var(--accent-blue);
          color: white;
        }

        .nav-link--active:hover {
          background-color: #4299e1;
        }

        .nav-footer {
          padding: var(--spacing-lg);
          border-top: 1px solid var(--border-color);
          background: var(--bg-primary);
        }

        .nav-progress h4 {
          font-size: var(--font-size-sm);
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .progress-item {
          margin-bottom: var(--spacing-md);
        }

        .progress-item:last-child {
          margin-bottom: 0;
        }

        .progress-item span:first-child {
          display: block;
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          margin-bottom: var(--spacing-xs);
        }

        .progress {
          height: 6px;
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          margin-bottom: var(--spacing-xs);
        }

        .progress-bar {
          height: 100%;
          background-color: var(--accent-green);
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .navigation {
            width: 100%;
            height: auto;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 1000;
            flex-direction: row;
          }

          .nav-header,
          .nav-footer {
            display: none;
          }

          .nav-list {
            display: flex;
            justify-content: space-around;
            padding: var(--spacing-sm);
            width: 100%;
          }

          .nav-item {
            margin: 0;
          }

          .nav-link {
            flex-direction: column;
            gap: var(--spacing-xs);
            padding: var(--spacing-xs);
            font-size: var(--font-size-xs);
          }

          .nav-link span {
            display: none;
          }
        }
      `})]})},Jm=({bestPractices:e,lessons:t,onTabChange:n})=>{var c;const l=(t==null?void 0:t.length)||5,i=Math.round(3/l*100),o=[{label:"Lessons Completed",value:`3/${l}`,percentage:i,icon:Mt,color:"blue"},{label:"Quiz Average",value:"85%",percentage:85,icon:Hn,color:"green"},{label:"Best Practices Learned",value:"12/16",percentage:75,icon:Km,color:"yellow"},{label:"Projects Validated",value:"4",percentage:100,icon:Fe,color:"purple"}],a=[{action:"Completed",item:"Folder Organization Strategies",time:"2 hours ago",type:"lesson"},{action:"Scored 90% on",item:"Naming Conventions Quiz",time:"1 day ago",type:"quiz"},{action:"Validated",item:"E-commerce Project Structure",time:"2 days ago",type:"validation"},{action:"Started",item:"Component Architecture Lesson",time:"3 days ago",type:"lesson"}],u=[{title:"Continue Learning",description:"Resume your current lesson on component architecture",action:"Continue Lesson",path:"/lessons",icon:Mt,color:"blue"},{title:"Explore Structures",description:"Interactive examples of good vs bad project structures",action:"Explore Now",path:"/explorer",icon:ds,color:"green"},{title:"Test Your Knowledge",description:"Take a quiz to reinforce what you've learned",action:"Start Quiz",path:"/quiz",icon:Hn,color:"purple"},{title:"Validate Project",description:"Check your React project against best practices",action:"Validate",path:"/validator",icon:Fe,color:"yellow"}];return s.jsxs("div",{className:"dashboard",children:[s.jsxs("header",{className:"dashboard-header",children:[s.jsx("h1",{children:"Welcome to React Structure Teacher"}),s.jsx("p",{children:"Master React project organization and filesystem best practices through interactive learning"})]}),s.jsxs("section",{className:"progress-overview",children:[s.jsx("h2",{children:"Your Learning Progress"}),s.jsx("div",{className:"stats-grid",children:o.map((f,m)=>{const g=f.icon;return s.jsxs("div",{className:`stat-card stat-card--${f.color}`,children:[s.jsxs("div",{className:"stat-header",children:[s.jsx(g,{size:24}),s.jsx("span",{className:"stat-value",children:f.value})]}),s.jsx("div",{className:"stat-label",children:f.label}),s.jsx("div",{className:"stat-progress",children:s.jsx("div",{className:"stat-progress-bar",style:{width:`${f.percentage}%`}})})]},m)})})]}),s.jsxs("section",{className:"quick-actions",children:[s.jsx("h2",{children:"Quick Actions"}),s.jsx("div",{className:"actions-grid",children:u.map((f,m)=>{const g=f.icon;return s.jsxs(uo,{to:f.path,className:`action-card action-card--${f.color}`,onClick:()=>n(f.path.slice(1)),children:[s.jsx("div",{className:"action-icon",children:s.jsx(g,{size:32})}),s.jsxs("div",{className:"action-content",children:[s.jsx("h3",{children:f.title}),s.jsx("p",{children:f.description}),s.jsx("span",{className:"action-button",children:f.action})]})]},m)})})]}),s.jsxs("section",{className:"recent-activity",children:[s.jsx("h2",{children:"Recent Activity"}),s.jsx("div",{className:"activity-list",children:a.map((f,m)=>s.jsxs("div",{className:"activity-item",children:[s.jsxs("div",{className:`activity-icon activity-icon--${f.type}`,children:[f.type==="lesson"&&s.jsx(Mt,{size:16}),f.type==="quiz"&&s.jsx(Hn,{size:16}),f.type==="validation"&&s.jsx(Fe,{size:16})]}),s.jsxs("div",{className:"activity-content",children:[s.jsxs("span",{className:"activity-text",children:[s.jsx("strong",{children:f.action})," ",f.item]}),s.jsx("span",{className:"activity-time",children:f.time})]})]},m))})]}),e&&s.jsxs("section",{className:"principles-preview",children:[s.jsx("h2",{children:"Core Principles"}),s.jsx("p",{children:"The fundamental concepts that guide React project structure"}),s.jsx("div",{className:"principles-grid",children:(c=e.corePrinciples)==null?void 0:c.map((f,m)=>{var g;return s.jsxs("div",{className:"principle-card",children:[s.jsx("h3",{children:f.title}),s.jsx("p",{children:f.description}),s.jsx("ul",{className:"principle-examples",children:(g=f.examples)==null?void 0:g.slice(0,2).map((y,x)=>s.jsx("li",{children:y},x))})]},m)})}),s.jsxs(uo,{to:"/lessons",className:"btn btn-primary",children:[s.jsx(Mt,{size:16}),"Start Learning"]})]}),s.jsx("style",{jsx:!0,children:`
        .dashboard {
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .dashboard-header h1 {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(
            135deg,
            var(--accent-blue),
            var(--accent-purple)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dashboard-header p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .progress-overview,
        .quick-actions,
        .recent-activity,
        .principles-preview {
          margin-bottom: var(--spacing-2xl);
        }

        .progress-overview h2,
        .quick-actions h2,
        .recent-activity h2,
        .principles-preview h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }

        .stat-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--accent-blue);
        }

        .stat-card--green::before {
          background: var(--accent-green);
        }
        .stat-card--yellow::before {
          background: var(--accent-yellow);
        }
        .stat-card--purple::before {
          background: var(--accent-purple);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-sm);
        }

        .stat-value {
          font-size: var(--font-size-2xl);
          font-weight: 600;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .stat-progress {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
        }

        .stat-progress-bar {
          height: 100%;
          background: var(--accent-green);
          border-radius: var(--border-radius-sm);
          transition: width 0.3s ease;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .action-card {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
        }

        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-blue);
        }

        .action-icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--border-radius-lg);
          background: rgba(99, 179, 237, 0.1);
          color: var(--accent-blue);
        }

        .action-card--green .action-icon {
          background: rgba(104, 211, 145, 0.1);
          color: var(--accent-green);
        }

        .action-card--purple .action-icon {
          background: rgba(183, 148, 246, 0.1);
          color: var(--accent-purple);
        }

        .action-card--yellow .action-icon {
          background: rgba(246, 224, 94, 0.1);
          color: var(--accent-yellow);
        }

        .action-content h3 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }

        .action-content p {
          margin-bottom: var(--spacing-md);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--accent-blue);
        }

        .activity-list {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .activity-icon--lesson {
          background: rgba(99, 179, 237, 0.1);
          color: var(--accent-blue);
        }

        .activity-icon--quiz {
          background: rgba(183, 148, 246, 0.1);
          color: var(--accent-purple);
        }

        .activity-icon--validation {
          background: rgba(104, 211, 145, 0.1);
          color: var(--accent-green);
        }

        .activity-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .activity-text {
          color: var(--text-primary);
        }

        .activity-time {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .principles-preview {
          text-align: center;
        }

        .principles-preview p {
          margin-bottom: var(--spacing-lg);
          color: var(--text-secondary);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .principle-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          text-align: left;
        }

        .principle-card h3 {
          color: var(--accent-blue);
          margin-bottom: var(--spacing-sm);
        }

        .principle-card p {
          margin-bottom: var(--spacing-md);
          color: var(--text-secondary);
        }

        .principle-examples {
          list-style: none;
          padding-left: 0;
        }

        .principle-examples li {
          position: relative;
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-xs);
          color: var(--text-muted);
          font-size: var(--font-size-sm);
        }

        .principle-examples li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent-green);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .dashboard {
            padding: var(--spacing-md);
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Ia=({lessons:e,bestPractices:t})=>{const{lessonId:n}=dm(),r=cs(),[l,i]=j.useState(0),[o,a]=j.useState(new Set([0,1])),[u,c]=j.useState({}),[f,m]=j.useState(!1);j.useEffect(()=>{if(n&&e){const v=e.findIndex(k=>k.id.toString()===n);v!==-1&&i(v)}},[n,e]);const g=e==null?void 0:e[l],y=v=>{i(v),c({}),m(!1),r(`/lessons/${e[v].id}`)},x=(v,k)=>{c(C=>({...C,[v]:k}))},w=()=>{m(!0),N()>=70&&a(k=>new Set([...k,l]))},N=()=>{if(!(g!=null&&g.quiz)||g.quiz.length===0)return 100;const v=g.quiz.filter((k,C)=>u[C]===k.correct).length;return Math.round(v/g.quiz.length*100)},h=()=>{l<e.length-1&&y(l+1)},p=()=>{l>0&&y(l-1)},d=v=>v?v.replace(/### (.*)/g,"<h3>$1</h3>").replace(/## (.*)/g,"<h2>$1</h2>").replace(/# (.*)/g,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/`(.*?)`/g,'<code class="code-inline">$1</code>').replace(/```([\s\S]*?)```/g,'<pre class="code-block"><code>$1</code></pre>').split(`
`).map(k=>k.trim()?`<p>${k}</p>`:"<br>").join(""):"";return!e||e.length===0?s.jsxs("div",{className:"lessons-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Loading lessons..."})]}):s.jsxs("div",{className:"lessons",children:[s.jsxs("div",{className:"lessons-sidebar",children:[s.jsxs("div",{className:"lessons-header",children:[s.jsx("h2",{children:"Lessons"}),s.jsx("p",{children:"Interactive React structure tutorials"})]}),s.jsx("div",{className:"lessons-list",children:e.map((v,k)=>{const C=o.has(k),z=k===l,E=k>0&&!o.has(k-1);return s.jsxs("div",{className:`lesson-item ${z?"lesson-item--current":""} ${E?"lesson-item--locked":""}`,onClick:()=>!E&&y(k),children:[s.jsx("div",{className:"lesson-status",children:C?s.jsx(Fe,{size:20,className:"status-completed"}):z?s.jsx(Hm,{size:20,className:"status-current"}):s.jsx(Wm,{size:20,className:"status-pending"})}),s.jsxs("div",{className:"lesson-content",children:[s.jsx("h4",{children:v.title}),s.jsx("p",{children:v.description}),E&&s.jsx("span",{className:"lesson-locked",children:"Complete previous lesson to unlock"})]})]},v.id)})})]}),s.jsx("div",{className:"lessons-main",children:g?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"lesson-header",children:[s.jsxs("div",{className:"lesson-nav",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:p,disabled:l===0,children:[s.jsx(Qm,{size:16}),"Previous"]}),s.jsxs("span",{className:"lesson-counter",children:["Lesson ",l+1," of ",e.length]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:h,disabled:l===e.length-1,children:["Next",s.jsx(ld,{size:16})]})]}),s.jsx("h1",{children:g.title}),s.jsx("p",{className:"lesson-description",children:g.description})]}),s.jsxs("div",{className:"lesson-content",children:[s.jsx("div",{className:"lesson-text",dangerouslySetInnerHTML:{__html:d(g.content)}}),g.quiz&&g.quiz.length>0&&s.jsxs("div",{className:"lesson-quiz",children:[s.jsx("h3",{children:"Knowledge Check"}),s.jsx("p",{children:"Test your understanding of this lesson"}),g.quiz.map((v,k)=>s.jsxs("div",{className:"quiz-question",children:[s.jsxs("h4",{children:["Question ",k+1]}),s.jsx("p",{children:v.question}),s.jsx("div",{className:"quiz-options",children:v.options.map((C,z)=>{const E=u[k]===z,F=z===v.correct,L=f;return s.jsxs("label",{className:`quiz-option ${E?"quiz-option--selected":""} ${L?F?"quiz-option--correct":E?"quiz-option--incorrect":"":""}`,children:[s.jsx("input",{type:"radio",name:`question-${k}`,value:z,checked:E,onChange:()=>x(k,z),disabled:f}),s.jsx("span",{children:C})]},z)})}),f&&s.jsxs("div",{className:"quiz-explanation",children:[s.jsx("strong",{children:"Explanation:"})," ",v.explanation]})]},k)),f?s.jsxs("div",{className:"quiz-results",children:[s.jsx("h4",{children:"Quiz Results"}),s.jsxs("div",{className:`quiz-score ${N()>=70?"quiz-score--pass":"quiz-score--fail"}`,children:["Score: ",N(),"%"]}),N()>=70?s.jsxs("p",{className:"quiz-message quiz-message--success",children:["Excellent! You've mastered this lesson.",l<e.length-1&&s.jsx("button",{className:"btn btn-primary btn-sm mt-md",onClick:h,children:"Continue to Next Lesson"})]}):s.jsx("p",{className:"quiz-message quiz-message--retry",children:"Review the lesson content and try again to unlock the next lesson."})]}):s.jsx("button",{className:"btn btn-primary",onClick:w,disabled:Object.keys(u).length!==g.quiz.length,children:"Submit Quiz"})]})]})]}):s.jsxs("div",{className:"lesson-placeholder",children:[s.jsx(Mt,{size:64}),s.jsx("h2",{children:"Select a Lesson"}),s.jsx("p",{children:"Choose a lesson from the sidebar to begin learning"})]})}),s.jsx("style",{jsx:!0,children:`
        .lessons {
          display: flex;
          height: calc(100vh - 30px);
          overflow: hidden;
        }

        .lessons-sidebar {
          width: 350px;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .lessons-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .lessons-header h2 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }

        .lessons-header p {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .lessons-list {
          flex: 1;
          padding: var(--spacing-md);
        }

        .lesson-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .lesson-item:hover:not(.lesson-item--locked) {
          background: var(--hover-bg);
        }

        .lesson-item--current {
          background: rgba(99, 179, 237, 0.1);
          border-color: var(--accent-blue);
        }

        .lesson-item--locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .lesson-status {
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .status-completed {
          color: var(--accent-green);
        }

        .status-current {
          color: var(--accent-blue);
        }

        .status-pending {
          color: var(--text-muted);
        }

        .lesson-content h4 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
          font-size: var(--font-size-base);
        }

        .lesson-content p {
          margin-bottom: var(--spacing-xs);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .lesson-locked {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          font-style: italic;
        }

        .lessons-main {
          flex: 1;
          overflow-y: auto;
          padding: var(--spacing-xl);
        }

        .lesson-header {
          margin-bottom: var(--spacing-xl);
        }

        .lesson-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-lg);
        }

        .lesson-counter {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .lesson-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .lesson-description {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
        }

        .lesson-text :global(h1),
        .lesson-text :global(h2),
        .lesson-text :global(h3) {
          color: var(--text-primary);
          margin: var(--spacing-xl) 0 var(--spacing-md) 0;
        }

        .lesson-text :global(h1):first-child,
        .lesson-text :global(h2):first-child,
        .lesson-text :global(h3):first-child {
          margin-top: 0;
        }

        .lesson-text :global(p) {
          margin-bottom: var(--spacing-md);
          line-height: 1.7;
        }

        .lesson-quiz {
          margin-top: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
        }

        .lesson-quiz h3 {
          margin-bottom: var(--spacing-xs);
          color: var(--accent-blue);
        }

        .lesson-quiz > p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
        }

        .quiz-question {
          margin-bottom: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
          border-bottom: 1px solid var(--border-color);
        }

        .quiz-question:last-of-type {
          border-bottom: none;
          margin-bottom: var(--spacing-lg);
        }

        .quiz-question h4 {
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .quiz-question p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }

        .quiz-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quiz-option:hover {
          background: var(--hover-bg);
        }

        .quiz-option--selected {
          border-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .quiz-option--correct {
          border-color: var(--accent-green);
          background: rgba(104, 211, 145, 0.1);
        }

        .quiz-option--incorrect {
          border-color: var(--accent-red);
          background: rgba(252, 129, 129, 0.1);
        }

        .quiz-option input {
          margin: 0;
        }

        .quiz-explanation {
          padding: var(--spacing-md);
          background: rgba(99, 179, 237, 0.1);
          border: 1px solid var(--accent-blue);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          font-size: var(--font-size-sm);
        }

        .quiz-results {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--bg-primary);
          border-radius: var(--border-radius-md);
        }

        .quiz-results h4 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .quiz-score {
          font-size: var(--font-size-2xl);
          font-weight: bold;
          margin-bottom: var(--spacing-md);
        }

        .quiz-score--pass {
          color: var(--accent-green);
        }

        .quiz-score--fail {
          color: var(--accent-red);
        }

        .quiz-message--success {
          color: var(--accent-green);
        }

        .quiz-message--retry {
          color: var(--accent-yellow);
        }

        .lesson-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          text-align: center;
          color: var(--text-muted);
        }

        .lesson-placeholder svg {
          margin-bottom: var(--spacing-lg);
          opacity: 0.5;
        }

        .lessons-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          gap: var(--spacing-lg);
        }

        @media (max-width: 768px) {
          .lessons {
            flex-direction: column;
          }

          .lessons-sidebar {
            width: 100%;
            height: auto;
            max-height: 40vh;
          }

          .lessons-main {
            padding: var(--spacing-md);
          }

          .lesson-nav {
            flex-wrap: wrap;
            gap: var(--spacing-sm);
          }
        }
      `})]})},eh=({bestPractices:e})=>{var c;const[t,n]=j.useState("good"),[r,l]=j.useState(new Set(["src","components","pages"])),i={good:{name:"Well-Structured React Project",description:"A properly organized React project following best practices",type:"good",structure:[{name:"my-react-app",type:"folder",description:"Project root directory",children:[{name:"public",type:"folder",description:"Static assets served directly",children:[{name:"index.html",type:"file",description:"Main HTML template"},{name:"favicon.ico",type:"file",description:"Website favicon"},{name:"manifest.json",type:"file",description:"PWA manifest"}]},{name:"src",type:"folder",description:"All application source code",children:[{name:"components",type:"folder",description:"Reusable UI components",children:[{name:"ui",type:"folder",description:"Basic UI components",children:[{name:"Button",type:"folder",children:[{name:"Button.jsx",type:"file",description:"Button component"},{name:"Button.module.css",type:"file",description:"Component styles"},{name:"Button.test.jsx",type:"file",description:"Component tests"}]},{name:"Input.jsx",type:"file",description:"Input component"},{name:"Modal.jsx",type:"file",description:"Modal component"}]},{name:"layout",type:"folder",description:"Layout components",children:[{name:"Header.jsx",type:"file",description:"Site header"},{name:"Footer.jsx",type:"file",description:"Site footer"},{name:"Sidebar.jsx",type:"file",description:"Navigation sidebar"}]}]},{name:"pages",type:"folder",description:"Page-level components (routes)",children:[{name:"HomePage.jsx",type:"file",description:"Home page component"},{name:"LoginPage.jsx",type:"file",description:"Login page component"},{name:"DashboardPage.jsx",type:"file",description:"Dashboard page component"}]},{name:"features",type:"folder",description:"Feature-specific modules",children:[{name:"auth",type:"folder",description:"Authentication feature",children:[{name:"components",type:"folder"},{name:"hooks",type:"folder"},{name:"services",type:"folder"},{name:"store",type:"folder"}]},{name:"user-profile",type:"folder",description:"User profile feature",children:[{name:"components",type:"folder"},{name:"hooks",type:"folder"},{name:"services",type:"folder"}]}]},{name:"hooks",type:"folder",description:"Custom React hooks",children:[{name:"useAuth.js",type:"file",description:"Authentication hook"},{name:"useFetch.js",type:"file",description:"Data fetching hook"},{name:"useLocalStorage.js",type:"file",description:"Local storage hook"}]},{name:"utils",type:"folder",description:"Utility functions",children:[{name:"formatters",type:"folder",children:[{name:"formatDate.js",type:"file",description:"Date formatting utilities"},{name:"formatCurrency.js",type:"file",description:"Currency formatting"}]},{name:"validators",type:"folder",children:[{name:"validateEmail.js",type:"file",description:"Email validation"}]}]},{name:"services",type:"folder",description:"API and external services",children:[{name:"api",type:"folder",children:[{name:"apiClient.js",type:"file",description:"Base API client"},{name:"authApi.js",type:"file",description:"Authentication API"},{name:"userApi.js",type:"file",description:"User management API"}]}]},{name:"store",type:"folder",description:"State management",children:[{name:"index.js",type:"file",description:"Store configuration"},{name:"slices",type:"folder",children:[{name:"authSlice.js",type:"file",description:"Auth state slice"},{name:"userSlice.js",type:"file",description:"User state slice"}]}]},{name:"App.jsx",type:"file",description:"Root application component"},{name:"index.jsx",type:"file",description:"Application entry point"}]},{name:".env.example",type:"file",description:"Environment variables template"},{name:".gitignore",type:"file",description:"Git ignore rules"},{name:"package.json",type:"file",description:"Dependencies and scripts"},{name:"README.md",type:"file",description:"Project documentation"}]}]},bad:{name:"Poorly Structured React Project",description:"A project with common organizational problems",type:"bad",structure:[{name:"bad-react-app",type:"folder",description:"Project root with poor organization",children:[{name:"src",type:"folder",children:[{name:"components",type:"folder",description:"All components mixed together",children:[{name:"button.js",type:"file",description:"Bad naming: lowercase"},{name:"Card.jsx",type:"file",description:"Generic name, unclear purpose"},{name:"UserCard.jsx",type:"file",description:"Better name but wrong location"},{name:"LoginForm.jsx",type:"file",description:"Should be in features/auth"},{name:"DashboardChart.jsx",type:"file",description:"Feature-specific, wrong location"},{name:"thing.jsx",type:"file",description:"Terrible generic name"}]},{name:"styles",type:"folder",description:"All styles separated from components",children:[{name:"button.css",type:"file",description:"Separated from component"},{name:"card.css",type:"file",description:"Separated from component"},{name:"login.css",type:"file",description:"Separated from component"}]},{name:"utils",type:"folder",description:"Mixed utilities without organization",children:[{name:"helpers.js",type:"file",description:"Generic name, everything mixed"},{name:"stuff.js",type:"file",description:"Meaningless name"},{name:"formatDate.js",type:"file",description:"Good name but could be grouped"}]},{name:"pages",type:"folder",children:[{name:"user",type:"folder",description:"Unnecessary deep nesting",children:[{name:"profile",type:"folder",children:[{name:"components",type:"folder",children:[{name:"UserProfile.jsx",type:"file",description:"Too deeply nested"}]}]}]}]},{name:"App.js",type:"file",description:"Inconsistent file extension"},{name:"index.jsx",type:"file",description:"Mixed extensions in same project"}]},{name:"package.json",type:"file"},{name:"config.js",type:"file",description:"Config in root instead of proper location"},{name:"secrets.env",type:"file",description:"Bad: secrets in version control"}]}]}},o=f=>{const m=new Set(r);r.has(f)?m.delete(f):m.add(f),l(m)},a=(f,m="",g=0)=>{const y=m?`${m}/${f.name}`:f.name,x=f.children&&f.children.length>0,w=r.has(y),N=f.type==="folder";return s.jsxs("div",{className:"tree-node",style:{marginLeft:`${g*20}px`},children:[s.jsxs("div",{className:`tree-item ${N?"tree-item--folder":"tree-item--file"}`,onClick:()=>x&&o(y),children:[s.jsxs("div",{className:"tree-item-icon",children:[x&&(w?s.jsx(Vm,{size:16}):s.jsx(ld,{size:16})),N?s.jsx(ba,{size:16}):s.jsx(Ta,{size:16})]}),s.jsx("span",{className:"tree-item-name",children:f.name}),f.description&&s.jsx("span",{className:"tree-item-description",children:f.description})]}),x&&w&&s.jsx("div",{className:"tree-children",children:f.children.map(h=>a(h,y,g+1))})]},y)},u=i[t];return s.jsxs("div",{className:"structure-explorer",children:[s.jsxs("div",{className:"explorer-header",children:[s.jsx("h1",{children:"Project Structure Explorer"}),s.jsx("p",{children:"Explore interactive examples of good vs bad React project structures"})]}),s.jsx("div",{className:"explorer-controls",children:s.jsxs("div",{className:"example-selector",children:[s.jsxs("button",{className:`example-btn ${t==="good"?"example-btn--active example-btn--good":""}`,onClick:()=>n("good"),children:[s.jsx(Fe,{size:20}),"Good Structure"]}),s.jsxs("button",{className:`example-btn ${t==="bad"?"example-btn--active example-btn--bad":""}`,onClick:()=>n("bad"),children:[s.jsx(pr,{size:20}),"Bad Structure"]})]})}),s.jsxs("div",{className:"explorer-content",children:[s.jsxs("div",{className:"example-info",children:[s.jsxs("div",{className:`example-header example-header--${u.type}`,children:[u.type==="good"?s.jsx(Fe,{size:24,className:"example-icon"}):s.jsx(pr,{size:24,className:"example-icon"}),s.jsxs("div",{children:[s.jsx("h2",{children:u.name}),s.jsx("p",{children:u.description})]})]}),t==="good"&&s.jsxs("div",{className:"best-practices-highlights",children:[s.jsx("h3",{children:"✅ What Makes This Good:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Feature-based organization:"})," Related files are grouped together"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Clear naming conventions:"})," PascalCase for components, camelCase for utilities"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Logical folder hierarchy:"})," Easy to find files intuitively"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Colocation:"})," Component files, styles, and tests are together"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Scalable structure:"})," Can grow from small to large projects"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Separation of concerns:"})," Each folder has a clear purpose"]})]})]}),t==="bad"&&s.jsxs("div",{className:"anti-patterns-highlights",children:[s.jsx("h3",{children:"❌ Problems with This Structure:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Type-based organization:"})," Related files are scattered"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Inconsistent naming:"})," Mixed case conventions and generic names"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Deep nesting:"})," Hard to navigate and understand"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Separated concerns:"})," Styles separated from components"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Poor discoverability:"})," Hard to find files quickly"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Security issues:"})," Secrets in version control"]})]})]})]}),s.jsxs("div",{className:"file-tree",children:[s.jsxs("div",{className:"tree-header",children:[s.jsx("h3",{children:"File Structure"}),s.jsxs("div",{className:"tree-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx(ba,{size:16}),s.jsx("span",{children:"Folder"})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx(Ta,{size:16}),s.jsx("span",{children:"File"})]})]})]}),s.jsx("div",{className:"tree-container",children:u.structure.map(f=>a(f))})]})]}),e&&s.jsxs("div",{className:"principles-summary",children:[s.jsx("h3",{children:"Key Principles Applied"}),s.jsx("div",{className:"principles-grid",children:(c=e.corePrinciples)==null?void 0:c.map((f,m)=>s.jsxs("div",{className:"principle-card",children:[s.jsx("h4",{children:f.title}),s.jsx("p",{children:f.description})]},m))})]}),s.jsx("style",{jsx:!0,children:`
        .structure-explorer {
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .explorer-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .explorer-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .explorer-header p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
        }

        .explorer-controls {
          margin-bottom: var(--spacing-xl);
          display: flex;
          justify-content: center;
        }

        .example-selector {
          display: flex;
          gap: var(--spacing-md);
        }

        .example-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-lg);
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .example-btn:hover {
          background: var(--hover-bg);
        }

        .example-btn--active {
          color: white;
          border-color: currentColor;
        }

        .example-btn--good.example-btn--active {
          background: var(--accent-green);
          border-color: var(--accent-green);
        }

        .example-btn--bad.example-btn--active {
          background: var(--accent-red);
          border-color: var(--accent-red);
        }

        .explorer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
        }

        .example-info {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .example-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .example-header--good {
          background: rgba(104, 211, 145, 0.1);
          border-bottom-color: var(--accent-green);
        }

        .example-header--bad {
          background: rgba(252, 129, 129, 0.1);
          border-bottom-color: var(--accent-red);
        }

        .example-icon {
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .example-header--good .example-icon {
          color: var(--accent-green);
        }

        .example-header--bad .example-icon {
          color: var(--accent-red);
        }

        .example-header h2 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }

        .example-header p {
          color: var(--text-secondary);
          margin: 0;
        }

        .best-practices-highlights,
        .anti-patterns-highlights {
          padding: var(--spacing-lg);
        }

        .best-practices-highlights h3 {
          color: var(--accent-green);
          margin-bottom: var(--spacing-md);
        }

        .anti-patterns-highlights h3 {
          color: var(--accent-red);
          margin-bottom: var(--spacing-md);
        }

        .best-practices-highlights ul,
        .anti-patterns-highlights ul {
          list-style: none;
          padding: 0;
        }

        .best-practices-highlights li,
        .anti-patterns-highlights li {
          margin-bottom: var(--spacing-sm);
          padding-left: var(--spacing-lg);
          position: relative;
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          line-height: 1.5;
        }

        .file-tree {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .tree-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .tree-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .tree-legend {
          display: flex;
          gap: var(--spacing-md);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .tree-container {
          padding: var(--spacing-md);
          max-height: 600px;
          overflow-y: auto;
        }

        .tree-node {
          margin-bottom: var(--spacing-xs);
        }

        .tree-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .tree-item:hover {
          background: var(--hover-bg);
        }

        .tree-item--folder {
          font-weight: 500;
        }

        .tree-item-icon {
          display: flex;
          align-items: center;
          width: 20px;
          color: var(--text-muted);
        }

        .tree-item-name {
          font-size: var(--font-size-sm);
          color: var(--text-primary);
          margin-right: var(--spacing-sm);
        }

        .tree-item-description {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          font-style: italic;
        }

        .tree-children {
          border-left: 1px solid var(--border-color);
          margin-left: 10px;
          padding-left: var(--spacing-sm);
        }

        .principles-summary {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
        }

        .principles-summary h3 {
          text-align: center;
          margin-bottom: var(--spacing-xl);
          color: var(--text-primary);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
        }

        .principle-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
        }

        .principle-card h4 {
          color: var(--accent-blue);
          margin-bottom: var(--spacing-sm);
        }

        .principle-card p {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        @media (max-width: 768px) {
          .structure-explorer {
            padding: var(--spacing-md);
          }

          .explorer-content {
            grid-template-columns: 1fr;
          }

          .example-selector {
            flex-direction: column;
            align-items: stretch;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})};function th(){return window.go.main.App.GetBestPractices()}function nh(){return window.go.main.App.GetLessons()}function rh(e){return window.go.main.App.ValidateProjectStructure(e)}const lh=({bestPractices:e})=>{const[t,n]=j.useState({name:"",folders:[],files:[]}),[r,l]=j.useState(null),[i,o]=j.useState(!1),[a,u]=j.useState(""),[c,f]=j.useState(""),m=()=>{a.trim()&&!t.folders.includes(a.trim())&&(n(d=>({...d,folders:[...d.folders,a.trim()]})),u(""))},g=()=>{c.trim()&&!t.files.includes(c.trim())&&(n(d=>({...d,files:[...d.files,c.trim()]})),f(""))},y=d=>{n(v=>({...v,folders:v.folders.filter((k,C)=>C!==d)}))},x=d=>{n(v=>({...v,files:v.files.filter((k,C)=>C!==d)}))},w=async()=>{if(!t.name.trim()){alert("Please enter a project name");return}o(!0);try{const d=await rh(t);l(d)}catch(d){console.error("Validation failed:",d),alert("Validation failed. Please try again.")}finally{o(!1)}},N=d=>{n(d==="good"?{name:"my-awesome-react-app",folders:["public","src","src/components","src/components/ui","src/pages","src/features","src/features/auth","src/hooks","src/utils","src/services","src/store","src/constants","src/styles"],files:["package.json","README.md",".gitignore",".env.example","public/index.html","src/App.jsx","src/index.jsx","src/components/ui/Button.jsx","src/pages/HomePage.jsx","src/hooks/useAuth.js","src/utils/formatDate.js","src/services/apiClient.js"]}:{name:"bad-react-project",folders:["src","src/components","src/styles","src/utils","src/pages/user/profile/components"],files:["package.json","src/App.js","src/index.jsx","src/components/button.js","src/components/Card.jsx","src/components/thing.jsx","src/styles/button.css","src/utils/helpers.js","secrets.env"]}),l(null)},h=d=>{switch(d){case"error":return s.jsx(pr,{size:16,className:"severity-error"});case"warning":return s.jsx(Ra,{size:16,className:"severity-warning"});default:return s.jsx(Ra,{size:16,className:"severity-info"})}},p=d=>{switch(d){case"A":return"grade-a";case"B":return"grade-b";case"C":return"grade-c";case"D":return"grade-d";default:return"grade-f"}};return s.jsxs("div",{className:"validator",children:[s.jsxs("div",{className:"validator-header",children:[s.jsx("h1",{children:"Project Structure Validator"}),s.jsx("p",{children:"Validate your React project structure against best practices"})]}),s.jsxs("div",{className:"validator-content",children:[s.jsxs("div",{className:"project-input",children:[s.jsxs("div",{className:"input-header",children:[s.jsx("h2",{children:"Project Structure"}),s.jsxs("div",{className:"example-buttons",children:[s.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>N("good"),children:"Load Good Example"}),s.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>N("bad"),children:"Load Bad Example"})]})]}),s.jsxs("div",{className:"project-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Project Name"}),s.jsx("input",{type:"text",className:"form-control",placeholder:"my-react-app",value:t.name,onChange:d=>n(v=>({...v,name:d.target.value}))})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Folders"}),s.jsxs("div",{className:"input-with-button",children:[s.jsx("input",{type:"text",className:"form-control",placeholder:"src/components",value:a,onChange:d=>u(d.target.value),onKeyPress:d=>d.key==="Enter"&&m()}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,children:s.jsx(Ma,{size:16})})]}),s.jsx("div",{className:"items-list",children:t.folders.map((d,v)=>s.jsxs("div",{className:"list-item",children:[s.jsx(ds,{size:16}),s.jsx("span",{children:d}),s.jsx("button",{className:"btn-remove",onClick:()=>y(v),children:s.jsx(Oa,{size:14})})]},v))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{className:"form-label",children:"Files"}),s.jsxs("div",{className:"input-with-button",children:[s.jsx("input",{type:"text",className:"form-control",placeholder:"src/App.jsx",value:c,onChange:d=>f(d.target.value),onKeyPress:d=>d.key==="Enter"&&g()}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,children:s.jsx(Ma,{size:16})})]}),s.jsx("div",{className:"items-list",children:t.files.map((d,v)=>s.jsxs("div",{className:"list-item",children:[s.jsx(Ym,{size:16}),s.jsx("span",{children:d}),s.jsx("button",{className:"btn-remove",onClick:()=>x(v),children:s.jsx(Oa,{size:14})})]},v))})]})]}),s.jsx("button",{className:"btn btn-primary btn-lg",onClick:w,disabled:i||!t.name.trim(),children:i?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"spinner-sm"}),"Validating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Fe,{size:20}),"Validate Structure"]})})]})]}),r&&s.jsxs("div",{className:"validation-results",children:[s.jsx("h2",{children:"Validation Results"}),s.jsx("div",{className:"results-summary",children:s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-header",children:[s.jsx("h3",{children:"Overall Score"}),s.jsx("div",{className:`grade ${p(r.grade)}`,children:r.grade})]}),s.jsxs("div",{className:"score-details",children:[s.jsx("div",{className:"score-bar",children:s.jsx("div",{className:"score-fill",style:{width:`${r.percentage}%`}})}),s.jsxs("div",{className:"score-text",children:[r.score," / ",r.maxScore," ","points (",Math.round(r.percentage),"%)"]})]})]})}),r.issues&&r.issues.length>0&&s.jsxs("div",{className:"issues-section",children:[s.jsx("h3",{children:"Issues Found"}),s.jsx("div",{className:"issues-list",children:r.issues.map((d,v)=>s.jsxs("div",{className:`issue-item issue-${d.severity}`,children:[s.jsxs("div",{className:"issue-header",children:[h(d.severity),s.jsx("span",{className:"issue-type",children:d.type})]}),s.jsxs("div",{className:"issue-content",children:[s.jsx("p",{className:"issue-message",children:d.message}),d.suggestion&&s.jsxs("p",{className:"issue-suggestion",children:[s.jsx("strong",{children:"Suggestion:"})," ",d.suggestion]})]})]},v))})]}),r.suggestions&&r.suggestions.length>0&&s.jsxs("div",{className:"suggestions-section",children:[s.jsx("h3",{children:"Recommendations"}),s.jsx("ul",{className:"suggestions-list",children:r.suggestions.map((d,v)=>s.jsx("li",{children:d},v))})]}),r.percentage>=90&&s.jsxs("div",{className:"success-message",children:[s.jsx(Fe,{size:24}),s.jsxs("div",{children:[s.jsx("h4",{children:"Excellent Structure!"}),s.jsx("p",{children:"Your project follows React best practices very well."})]})]})]})]}),s.jsx("style",{jsx:!0,children:`
        .validator {
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .validator-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .validator-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .validator-header p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
        }

        .validator-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        .project-input {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
        }

        .input-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }

        .input-header h2 {
          margin: 0;
          color: var(--text-primary);
        }

        .example-buttons {
          display: flex;
          gap: var(--spacing-sm);
        }

        .project-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }

        .input-with-button {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .items-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-tertiary);
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }

        .list-item:last-child {
          border-bottom: none;
        }

        .list-item span {
          flex: 1;
          font-size: var(--font-size-sm);
          color: var(--text-primary);
        }

        .btn-remove {
          background: none;
          border: none;
          color: var(--accent-red);
          cursor: pointer;
          padding: var(--spacing-xs);
          border-radius: var(--border-radius-sm);
          transition: background-color 0.2s ease;
        }

        .btn-remove:hover {
          background: rgba(252, 129, 129, 0.1);
        }

        .validation-results {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
        }

        .validation-results h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .results-summary {
          margin-bottom: var(--spacing-xl);
        }

        .score-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
        }

        .score-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
        }

        .score-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .grade {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: var(--font-size-xl);
          font-weight: bold;
          color: white;
        }

        .grade-a {
          background: var(--accent-green);
        }
        .grade-b {
          background: var(--accent-blue);
        }
        .grade-c {
          background: var(--accent-yellow);
          color: var(--bg-primary);
        }
        .grade-d {
          background: var(--accent-red);
        }
        .grade-f {
          background: var(--accent-red);
        }

        .score-bar {
          height: 8px;
          background: var(--bg-primary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          margin-bottom: var(--spacing-sm);
        }

        .score-fill {
          height: 100%;
          background: var(--accent-green);
          transition: width 0.3s ease;
        }

        .score-text {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          text-align: center;
        }

        .issues-section,
        .suggestions-section {
          margin-bottom: var(--spacing-xl);
        }

        .issues-section h3,
        .suggestions-section h3 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .issues-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .issue-item {
          border-left: 4px solid;
          border-radius: var(--border-radius-md);
          padding: var(--spacing-md);
          background: var(--bg-tertiary);
        }

        .issue-error {
          border-left-color: var(--accent-red);
          background: rgba(252, 129, 129, 0.1);
        }

        .issue-warning {
          border-left-color: var(--accent-yellow);
          background: rgba(246, 224, 94, 0.1);
        }

        .issue-info {
          border-left-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .issue-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .severity-error {
          color: var(--accent-red);
        }
        .severity-warning {
          color: var(--accent-yellow);
        }
        .severity-info {
          color: var(--accent-blue);
        }

        .issue-type {
          font-weight: 500;
          color: var(--text-primary);
        }

        .issue-message {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .issue-suggestion {
          color: var(--text-primary);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .suggestions-list {
          list-style: none;
          padding: 0;
        }

        .suggestions-list li {
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .suggestions-list li:last-child {
          border-bottom: none;
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: rgba(104, 211, 145, 0.1);
          border: 1px solid var(--accent-green);
          border-radius: var(--border-radius-md);
          color: var(--accent-green);
        }

        .success-message h4 {
          margin-bottom: var(--spacing-xs);
          color: var(--accent-green);
        }

        .success-message p {
          margin: 0;
          color: var(--text-secondary);
        }

        .spinner-sm {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .validator {
            padding: var(--spacing-md);
          }

          .validator-content {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .input-header {
            flex-direction: column;
            gap: var(--spacing-md);
            align-items: stretch;
          }

          .example-buttons {
            justify-content: center;
          }
        }
      `})]})},ih=({questions:e,lessons:t})=>{const[n,r]=j.useState(0),[l,i]=j.useState({}),[o,a]=j.useState(!1),[u,c]=j.useState(!1),[f,m]=j.useState(0),[g,y]=j.useState(null);j.useEffect(()=>{y(Date.now());const L=setInterval(()=>{m(b=>b+1)},1e3);return()=>clearInterval(L)},[]);const x=(L,b)=>{i(ne=>({...ne,[L]:b}))},w=()=>{n<e.length-1&&r(n+1)},N=()=>{n>0&&r(n-1)},h=()=>{a(!0),c(!0)},p=()=>{r(0),i({}),a(!1),c(!1),m(0),y(Date.now())},d=()=>{const L=e.filter((b,ne)=>l[ne]===b.correct).length;return{correct:L,total:e.length,percentage:Math.round(L/e.length*100)}},v=L=>L>=90?{grade:"A",color:"var(--accent-green)",message:"Outstanding!"}:L>=80?{grade:"B",color:"var(--accent-blue)",message:"Great job!"}:L>=70?{grade:"C",color:"var(--accent-yellow)",message:"Good work!"}:L>=60?{grade:"D",color:"var(--accent-red)",message:"Keep studying!"}:{grade:"F",color:"var(--accent-red)",message:"More practice needed!"},k=L=>{const b=Math.floor(L/60),ne=L%60;return`${b}:${ne.toString().padStart(2,"0")}`},C=()=>e.every((L,b)=>l.hasOwnProperty(b));if(!e||e.length===0)return s.jsxs("div",{className:"quiz-empty",children:[s.jsx(Hn,{size:64}),s.jsx("h2",{children:"No Quiz Questions Available"}),s.jsx("p",{children:"Complete some lessons first to unlock quiz questions!"})]});const z=e[n],E=o?d():null,F=o?v(E.percentage):null;return s.jsxs("div",{className:"quiz",children:[s.jsxs("div",{className:"quiz-header",children:[s.jsx("h1",{children:"React Best Practices Quiz"}),s.jsxs("div",{className:"quiz-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Questions:"}),s.jsx("span",{className:"stat-value",children:e.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Time:"}),s.jsx("span",{className:"stat-value",children:k(f)})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Progress:"}),s.jsxs("span",{className:"stat-value",children:[Object.keys(l).length," / ",e.length]})]})]})]}),o?s.jsxs("div",{className:"quiz-results",children:[s.jsx("div",{className:"results-header",children:s.jsxs("div",{className:"score-display",children:[s.jsx("div",{className:"grade-circle",style:{backgroundColor:F.color},children:F.grade}),s.jsxs("div",{className:"score-details",children:[s.jsx("h2",{children:F.message}),s.jsxs("div",{className:"score-stats",children:[s.jsxs("span",{className:"score-percentage",children:[E.percentage,"%"]}),s.jsxs("span",{className:"score-fraction",children:[E.correct," out of ",E.total," correct"]})]}),s.jsxs("div",{className:"time-stats",children:["Completed in ",k(f)]})]})]})}),s.jsxs("div",{className:"detailed-results",children:[s.jsx("h3",{children:"Question Review"}),s.jsx("div",{className:"questions-review",children:e.map((L,b)=>{const ne=l[b],tt=ne===L.correct;return s.jsxs("div",{className:`review-question ${tt?"review-question--correct":"review-question--incorrect"}`,children:[s.jsx("div",{className:"review-header",children:s.jsxs("div",{className:"review-status",children:[tt?s.jsx(Fe,{size:20,className:"status-correct"}):s.jsx(pr,{size:20,className:"status-incorrect"}),s.jsxs("span",{children:["Question ",b+1]})]})}),s.jsx("p",{className:"review-question-text",children:L.question}),s.jsx("div",{className:"review-answers",children:L.options.map((yr,Qt)=>{const Wt=ne===Qt,nt=Qt===L.correct;return s.jsxs("div",{className:`review-option ${nt?"review-option--correct":""} ${Wt&&!nt?"review-option--incorrect":""}`,children:[s.jsx("span",{className:"option-letter",children:String.fromCharCode(65+Qt)}),s.jsx("span",{children:yr}),nt&&s.jsx(Fe,{size:16}),Wt&&!nt&&s.jsx(pr,{size:16})]},Qt)})}),L.explanation&&s.jsxs("div",{className:"review-explanation",children:[s.jsx("strong",{children:"Explanation:"})," ",L.explanation]})]},b)})})]}),s.jsx("div",{className:"results-actions",children:s.jsxs("button",{className:"btn btn-primary btn-lg",onClick:p,children:[s.jsx(qm,{size:20}),"Take Quiz Again"]})})]}):s.jsxs("div",{className:"quiz-content",children:[s.jsxs("div",{className:"question-navigation",children:[s.jsx("div",{className:"question-indicators",children:e.map((L,b)=>s.jsx("button",{className:`question-indicator ${b===n?"question-indicator--current":""} ${l.hasOwnProperty(b)?"question-indicator--answered":""}`,onClick:()=>r(b),children:b+1},b))}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill",style:{width:`${(n+1)/e.length*100}%`}})})]}),s.jsxs("div",{className:"question-card",children:[s.jsxs("div",{className:"question-header",children:[s.jsxs("h2",{children:["Question ",n+1]}),s.jsxs("span",{className:"question-counter",children:[n+1," of ",e.length]})]}),s.jsxs("div",{className:"question-content",children:[s.jsx("p",{className:"question-text",children:z.question}),s.jsx("div",{className:"answer-options",children:z.options.map((L,b)=>{const ne=l[n]===b;return s.jsxs("label",{className:`answer-option ${ne?"answer-option--selected":""}`,children:[s.jsx("input",{type:"radio",name:`question-${n}`,value:b,checked:ne,onChange:()=>x(n,b)}),s.jsx("span",{className:"option-letter",children:String.fromCharCode(65+b)}),s.jsx("span",{className:"option-text",children:L})]},b)})})]}),s.jsxs("div",{className:"question-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:N,disabled:n===0,children:"Previous"}),s.jsx("div",{className:"center-actions",children:n===e.length-1?s.jsxs("button",{className:"btn btn-success btn-lg",onClick:h,disabled:!C(),children:[s.jsx(Gm,{size:20}),"Submit Quiz"]}):s.jsxs("button",{className:"btn btn-primary",onClick:w,disabled:!l.hasOwnProperty(n),children:["Next",s.jsx(Bm,{size:16})]})}),s.jsx("button",{className:"btn btn-secondary",onClick:w,disabled:n===e.length-1,children:"Next"})]})]})]}),s.jsx("style",{jsx:!0,children:`
        .quiz {
          padding: var(--spacing-xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .quiz-header h1 {
          margin-bottom: var(--spacing-lg);
        }

        .quiz-stats {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-lg);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .stat-value {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-navigation {
          margin-bottom: var(--spacing-xl);
        }

        .question-indicators {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .question-indicator {
          width: 40px;
          height: 40px;
          border: 2px solid var(--border-color);
          border-radius: 50%;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .question-indicator:hover {
          border-color: var(--accent-blue);
        }

        .question-indicator--current {
          border-color: var(--accent-blue);
          background: var(--accent-blue);
          color: white;
        }

        .question-indicator--answered {
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: white;
        }

        .progress-bar {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--accent-blue);
          transition: width 0.3s ease;
        }

        .question-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }

        .question-header h2 {
          margin: 0;
          color: var(--text-primary);
        }

        .question-counter {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .question-text {
          font-size: var(--font-size-lg);
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
        }

        .answer-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .answer-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .answer-option:hover {
          border-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .answer-option--selected {
          border-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .answer-option input {
          display: none;
        }

        .option-letter {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border-radius: 50%;
          font-weight: 600;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .answer-option--selected .option-letter {
          background: var(--accent-blue);
          color: white;
        }

        .option-text {
          flex: 1;
          color: var(--text-primary);
        }

        .question-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .center-actions {
          display: flex;
          gap: var(--spacing-md);
        }

        .quiz-results {
          text-align: center;
        }

        .results-header {
          margin-bottom: var(--spacing-2xl);
        }

        .score-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .grade-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-3xl);
          font-weight: bold;
          color: white;
        }

        .score-details h2 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .score-percentage {
          font-size: var(--font-size-2xl);
          font-weight: bold;
          color: var(--text-primary);
        }

        .score-fraction {
          display: block;
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .time-stats {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .detailed-results {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
          text-align: left;
        }

        .detailed-results h3 {
          text-align: center;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .questions-review {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .review-question {
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
        }

        .review-question--correct {
          border-left: 4px solid var(--accent-green);
        }

        .review-question--incorrect {
          border-left: 4px solid var(--accent-red);
        }

        .review-header {
          margin-bottom: var(--spacing-md);
        }

        .review-status {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-weight: 500;
        }

        .status-correct {
          color: var(--accent-green);
        }

        .status-incorrect {
          color: var(--accent-red);
        }

        .review-question-text {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .review-answers {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .review-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          border-radius: var(--border-radius-sm);
        }

        .review-option--correct {
          background: rgba(104, 211, 145, 0.1);
          color: var(--accent-green);
        }

        .review-option--incorrect {
          background: rgba(252, 129, 129, 0.1);
          color: var(--accent-red);
        }

        .review-explanation {
          padding: var(--spacing-md);
          background: rgba(99, 179, 237, 0.1);
          border-radius: var(--border-radius-sm);
          font-size: var(--font-size-sm);
          color: var(--text-primary);
        }

        .quiz-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          text-align: center;
          color: var(--text-muted);
        }

        .quiz-empty svg {
          margin-bottom: var(--spacing-lg);
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .quiz {
            padding: var(--spacing-md);
          }

          .quiz-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .score-display {
            flex-direction: column;
            gap: var(--spacing-lg);
          }

          .question-actions {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .center-actions {
            order: -1;
          }
        }
      `})]})};function oh(){const[e,t]=j.useState(null),[n,r]=j.useState([]),[l,i]=j.useState(!0),[o,a]=j.useState(null),[u,c]=j.useState("dashboard");j.useEffect(()=>{f()},[]);const f=async()=>{try{i(!0);const[g,y]=await Promise.all([th(),nh()]);t(g),r(y)}catch(g){a(g.message),console.error("Failed to load data:",g)}finally{i(!1)}},m=[{id:"dashboard",label:"Dashboard",icon:Mt,path:"/"},{id:"lessons",label:"Lessons",icon:Mt,path:"/lessons"},{id:"explorer",label:"Structure Explorer",icon:ds,path:"/explorer"},{id:"validator",label:"Project Validator",icon:Fe,path:"/validator"},{id:"quiz",label:"Quiz",icon:Hn,path:"/quiz"}];return l?s.jsxs("div",{className:"app-loading",children:[s.jsx("div",{className:"titlebar",children:"React Structure Teacher"}),s.jsxs("div",{className:"loading-container",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Loading React Structure Teacher..."})]})]}):o?s.jsxs("div",{className:"app-error",children:[s.jsx("div",{className:"titlebar",children:"React Structure Teacher - Error"}),s.jsxs("div",{className:"error-container",children:[s.jsx("h2",{children:"Failed to Load Application"}),s.jsx("p",{children:o}),s.jsx("button",{className:"btn btn-primary",onClick:f,children:"Try Again"})]})]}):s.jsxs("div",{className:"app",children:[s.jsx("div",{className:"titlebar",children:"React Structure Teacher"}),s.jsx(Om,{children:s.jsxs("div",{className:"app-layout",children:[s.jsx("aside",{className:"sidebar",children:s.jsx(Zm,{items:m,activeTab:u,onTabChange:c})}),s.jsx("main",{className:"main-content",children:s.jsxs(Pm,{children:[s.jsx(lt,{path:"/",element:s.jsx(Jm,{bestPractices:e,lessons:n,onTabChange:c})}),s.jsx(lt,{path:"/lessons",element:s.jsx(Ia,{lessons:n,bestPractices:e})}),s.jsx(lt,{path:"/lessons/:lessonId",element:s.jsx(Ia,{lessons:n,bestPractices:e})}),s.jsx(lt,{path:"/explorer",element:s.jsx(eh,{bestPractices:e})}),s.jsx(lt,{path:"/validator",element:s.jsx(lh,{bestPractices:e})}),s.jsx(lt,{path:"/quiz",element:s.jsx(ih,{questions:(e==null?void 0:e.quizQuestions)||[],lessons:n})}),s.jsx(lt,{path:"*",element:s.jsx(zm,{to:"/",replace:!0})})]})})]})}),s.jsx("style",{jsx:!0,children:`
        .app {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        .titlebar {
          height: 30px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-sm);
          color: var(--text-muted);
          -webkit-app-region: drag;
          user-select: none;
          z-index: 1000;
        }

        .app-layout {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .sidebar {
          flex-shrink: 0;
        }

        .main-content {
          flex: 1;
          overflow-y: auto;
        }

        .app-loading,
        .app-error {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }

        .loading-container,
        .error-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-lg);
          color: var(--text-primary);
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid var(--bg-tertiary);
          border-top: 4px solid var(--accent-blue);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .error-container h2 {
          color: var(--accent-red);
        }

        @media (max-width: 768px) {
          .app-layout {
            flex-direction: column;
          }

          .main-content {
            padding-bottom: 80px;
          }
        }
      `})]})}fi.createRoot(document.getElementById("root")).render(s.jsx(qa.StrictMode,{children:s.jsx(oh,{})}));
