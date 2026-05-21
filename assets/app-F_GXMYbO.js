const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.esm.min-CPKzNOsU.js","assets/chunk-5IMINLNL-bOkr_eDo.js","assets/chunk-AQ6EADP3-DU1Ij5u3.js","assets/chunk-5VCL7Z4A-BZNecdZl.js","assets/chunk-67TQ5CYL-CWUO_v51.js","assets/chunk-7W6UQGC5-DXEVNsQ2.js","assets/chunk-7FYTHRHK-DgBWl6lK.js","assets/chunk-7J6CGLKN-Db2LvDW_.js","assets/chunk-INKRHTLW-BWwIqGBm.js","assets/chunk-QA3QBVWF-BikB2jdR.js","assets/chunk-KNLZD3CH-pE9BoqUI.js","assets/chunk-KGFNY3KK-CMk6VzAd.js","assets/chunk-T2UQINTJ-BrQRYs0P.js","assets/chunk-UY5QBCOK-BlgmJjll.js","assets/chunk-LRIF4GLE-DjTI5-h4.js","assets/chunk-VU6ZFW4Y-DvntJMeS.js","assets/dist-B2M44kXg.js","assets/dist-BHjqMt7r.js","assets/vue-repl-CFg-gwcr.js","assets/utils-BhUV9bs0-7uTPwOl6.js","assets/codemirror-editor-DjmGezBz.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(e&&(t=e(e=0)),t),s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e),f=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});function p(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var m={},h=[],g=()=>{},_=()=>!1,v=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),y=e=>e.startsWith(`onUpdate:`),b=Object.assign,x=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},S=Object.prototype.hasOwnProperty,C=(e,t)=>S.call(e,t),w=Array.isArray,T=e=>re(e)===`[object Map]`,E=e=>re(e)===`[object Set]`,D=e=>re(e)===`[object Date]`,O=e=>typeof e==`function`,k=e=>typeof e==`string`,ee=e=>typeof e==`symbol`,A=e=>typeof e==`object`&&!!e,te=e=>(A(e)||O(e))&&O(e.then)&&O(e.catch),ne=Object.prototype.toString,re=e=>ne.call(e),ie=e=>re(e).slice(8,-1),ae=e=>re(e)===`[object Object]`,oe=e=>k(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,se=p(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ce=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},le=/-\w/g,j=ce(e=>e.replace(le,e=>e.slice(1).toUpperCase())),ue=/\B([A-Z])/g,de=ce(e=>e.replace(ue,`-$1`).toLowerCase()),fe=ce(e=>e.charAt(0).toUpperCase()+e.slice(1)),pe=ce(e=>e?`on${fe(e)}`:``),me=(e,t)=>!Object.is(e,t),he=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ge=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},_e=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ve=e=>{let t=k(e)?Number(e):NaN;return isNaN(t)?e:t},ye,be=()=>ye||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function xe(e){if(w(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=k(r)?Te(r):xe(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(k(e)||A(e))return e}var Se=/;(?![^(]*\))/g,Ce=/:([^]+)/,we=/\/\*[^]*?\*\//g;function Te(e){let t={};return e.replace(we,``).split(Se).forEach(e=>{if(e){let n=e.split(Ce);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ee(e){let t=``;if(k(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){let r=Ee(e[n]);r&&(t+=r+` `)}else if(A(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var De=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Oe=p(De);De+``;function ke(e){return!!e||e===``}function Ae(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=je(e[r],t[r]);return n}function je(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ee(e),r=ee(t),n||r)return e===t;if(n=w(e),r=w(t),n||r)return n&&r?Ae(e,t):!1;if(n=A(e),r=A(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!je(e[n],t[n]))return!1}}return String(e)===String(t)}function Me(e,t){return e.findIndex(e=>je(e,t))}var Ne=e=>!!(e&&e.__v_isRef===!0),Pe=e=>k(e)?e:e==null?``:w(e)||A(e)&&(e.toString===ne||!O(e.toString))?Ne(e)?Pe(e.value):JSON.stringify(e,Fe,2):String(e),Fe=(e,t)=>Ne(t)?Fe(e,t.value):T(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ie(t,r)+` =>`]=n,e),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ie(e))}:ee(t)?Ie(t):A(t)&&!w(t)&&!ae(t)?String(t):t,Ie=(e,t=``)=>ee(e)?`Symbol(${e.description??t})`:e,Le,Re=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Le;try{return Le=this,e()}finally{Le=t}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let e=Le;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ze(){return Le}function Be(e,t=!1){Le&&Le.cleanups.push(e)}var M,Ve=new WeakSet,He=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ve.has(this)&&(Ve.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ke(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,at(this),Ye(this);let e=M,t=tt;M=this,tt=!0;try{return this.fn()}finally{Xe(this),M=e,tt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$e(e);this.deps=this.depsTail=void 0,at(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ve.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ze(this)&&this.run()}get dirty(){return Ze(this)}},Ue=0,We,Ge;function Ke(e,t=!1){if(e.flags|=8,t){e.next=Ge,Ge=e;return}e.next=We,We=e}function qe(){Ue++}function Je(){if(--Ue>0)return;if(Ge){let e=Ge;for(Ge=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;We;){let t=We;for(We=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ye(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),$e(r),et(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ot)||(e.globalVersion=ot,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ze(e))))return;e.flags|=2;let t=e.dep,n=M,r=tt;M=e,tt=!0;try{Ye(e);let n=e.fn(e._value);(t.version===0||me(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,tt=r,Xe(e),e.flags&=-3}}function $e(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)$e(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function et(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var tt=!0,nt=[];function rt(){nt.push(tt),tt=!1}function it(){let e=nt.pop();tt=e===void 0?!0:e}function at(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var ot=0,st=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},ct=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!tt||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new st(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,lt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,ot++,this.notify(e)}notify(e){qe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Je()}}};function lt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)lt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var ut=new WeakMap,dt=Symbol(``),ft=Symbol(``),pt=Symbol(``);function mt(e,t,n){if(tt&&M){let t=ut.get(e);t||ut.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new ct),r.map=t,r.key=n),r.track()}}function ht(e,t,n,r,i,a){let o=ut.get(e);if(!o){ot++;return}let s=e=>{e&&e.trigger()};if(qe(),t===`clear`)o.forEach(s);else{let i=w(e),a=i&&oe(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===pt||!ee(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(pt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(dt)),T(e)&&s(o.get(ft)));break;case`delete`:i||(s(o.get(dt)),T(e)&&s(o.get(ft)));break;case`set`:T(e)&&s(o.get(dt));break}}Je()}function gt(e,t){let n=ut.get(e);return n&&n.get(t)}function _t(e){let t=N(e);return t===e?t:(mt(t,`iterate`,pt),sn(e)?t:t.map(un))}function vt(e){return mt(e=N(e),`iterate`,pt),e}function yt(e,t){return on(e)?dn(an(e)?un(t):t):un(t)}var bt={__proto__:null,[Symbol.iterator](){return xt(this,Symbol.iterator,e=>yt(this,e))},concat(...e){return _t(this).concat(...e.map(e=>w(e)?_t(e):e))},entries(){return xt(this,`entries`,e=>(e[1]=yt(this,e[1]),e))},every(e,t){return Ct(this,`every`,e,t,void 0,arguments)},filter(e,t){return Ct(this,`filter`,e,t,e=>e.map(e=>yt(this,e)),arguments)},find(e,t){return Ct(this,`find`,e,t,e=>yt(this,e),arguments)},findIndex(e,t){return Ct(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Ct(this,`findLast`,e,t,e=>yt(this,e),arguments)},findLastIndex(e,t){return Ct(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Ct(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Tt(this,`includes`,e)},indexOf(...e){return Tt(this,`indexOf`,e)},join(e){return _t(this).join(e)},lastIndexOf(...e){return Tt(this,`lastIndexOf`,e)},map(e,t){return Ct(this,`map`,e,t,void 0,arguments)},pop(){return Et(this,`pop`)},push(...e){return Et(this,`push`,e)},reduce(e,...t){return wt(this,`reduce`,e,t)},reduceRight(e,...t){return wt(this,`reduceRight`,e,t)},shift(){return Et(this,`shift`)},some(e,t){return Ct(this,`some`,e,t,void 0,arguments)},splice(...e){return Et(this,`splice`,e)},toReversed(){return _t(this).toReversed()},toSorted(e){return _t(this).toSorted(e)},toSpliced(...e){return _t(this).toSpliced(...e)},unshift(...e){return Et(this,`unshift`,e)},values(){return xt(this,`values`,e=>yt(this,e))}};function xt(e,t,n){let r=vt(e),i=r[t]();return r!==e&&!sn(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var St=Array.prototype;function Ct(e,t,n,r,i,a){let o=vt(e),s=o!==e&&!sn(e),c=o[t];if(c!==St[t]){let t=c.apply(e,a);return s?un(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,yt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function wt(e,t,n,r){let i=vt(e),a=i!==e&&!sn(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=yt(e,t)),n.call(this,t,yt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?yt(e,c):c}function Tt(e,t,n){let r=N(e);mt(r,`iterate`,pt);let i=r[t](...n);return(i===-1||i===!1)&&cn(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function Et(e,t,n=[]){rt(),qe();let r=N(e)[t].apply(e,n);return Je(),it(),r}var Dt=p(`__proto__,__v_isRef,__isVue`),Ot=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(ee));function kt(e){ee(e)||(e=String(e));let t=N(this);return mt(t,`has`,e),t.hasOwnProperty(e)}var At=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Xt:Yt:i?Jt:qt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=w(e);if(!r){let e;if(a&&(e=bt[t]))return e;if(t===`hasOwnProperty`)return kt}let o=Reflect.get(e,t,fn(e)?e:n);if((ee(t)?Ot.has(t):Dt(t))||(r||mt(e,`get`,t),i))return o;if(fn(o)){let e=a&&oe(t)?o:o.value;return r&&A(e)?tn(e):e}return A(o)?r?tn(o):$t(o):o}},jt=class extends At{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=w(e)&&oe(t);if(!this._isShallow){let e=on(i);if(!sn(n)&&!on(n)&&(i=N(i),n=N(n)),!a&&fn(i)&&!fn(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:C(e,t),s=Reflect.set(e,t,n,fn(e)?e:r);return e===N(r)&&(o?me(n,i)&&ht(e,`set`,t,n,i):ht(e,`add`,t,n)),s}deleteProperty(e,t){let n=C(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&ht(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!ee(t)||!Ot.has(t))&&mt(e,`has`,t),n}ownKeys(e){return mt(e,`iterate`,w(e)?`length`:dt),Reflect.ownKeys(e)}},Mt=class extends At{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Nt=new jt,Pt=new Mt,Ft=new jt(!0),It=new Mt(!0),Lt=e=>e,Rt=e=>Reflect.getPrototypeOf(e);function zt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=T(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Lt:t?dn:un;return!t&&mt(a,`iterate`,c?ft:dt),b(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function Bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Vt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(me(n,a)&&mt(i,`get`,n),mt(i,`get`,a));let{has:o}=Rt(i),s=t?Lt:e?dn:un;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&mt(N(t),`iterate`,dt),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(me(t,i)&&mt(r,`has`,t),mt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?Lt:e?dn:un;return!e&&mt(o,`iterate`,dt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return b(n,e?{add:Bt(`add`),set:Bt(`set`),delete:Bt(`delete`),clear:Bt(`clear`)}:{add(e){let n=N(this),r=Rt(n),i=N(e),a=!t&&!sn(e)&&!on(e)?i:e;return r.has.call(n,a)||me(e,a)&&r.has.call(n,e)||me(i,a)&&r.has.call(n,i)||(n.add(a),ht(n,`add`,a,a)),this},set(e,n){!t&&!sn(n)&&!on(n)&&(n=N(n));let r=N(this),{has:i,get:a}=Rt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?me(n,s)&&ht(r,`set`,e,n,s):ht(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=Rt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&ht(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&ht(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=zt(r,e,t)}),n}function Ht(e,t){let n=Vt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(C(n,r)&&r in t?n:t,r,i)}var Ut={get:Ht(!1,!1)},Wt={get:Ht(!1,!0)},Gt={get:Ht(!0,!1)},Kt={get:Ht(!0,!0)},qt=new WeakMap,Jt=new WeakMap,Yt=new WeakMap,Xt=new WeakMap;function Zt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Qt(e){return e.__v_skip||!Object.isExtensible(e)?0:Zt(ie(e))}function $t(e){return on(e)?e:rn(e,!1,Nt,Ut,qt)}function en(e){return rn(e,!1,Ft,Wt,Jt)}function tn(e){return rn(e,!0,Pt,Gt,Yt)}function nn(e){return rn(e,!0,It,Kt,Xt)}function rn(e,t,n,r,i){if(!A(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Qt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function an(e){return on(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function on(e){return!!(e&&e.__v_isReadonly)}function sn(e){return!!(e&&e.__v_isShallow)}function cn(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function ln(e){return!C(e,`__v_skip`)&&Object.isExtensible(e)&&ge(e,`__v_skip`,!0),e}var un=e=>A(e)?$t(e):e,dn=e=>A(e)?tn(e):e;function fn(e){return e?e.__v_isRef===!0:!1}function P(e){return pn(e,!1)}function F(e){return pn(e,!0)}function pn(e,t){return fn(e)?e:new mn(e,t)}var mn=class{constructor(e,t){this.dep=new ct,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:un(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||sn(e)||on(e);e=n?e:N(e),me(e,t)&&(this._rawValue=e,this._value=n?e:un(e),this.dep.trigger())}};function hn(e){return fn(e)?e.value:e}function I(e){return O(e)?e():hn(e)}var gn={get:(e,t,n)=>t===`__v_raw`?e:hn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return fn(i)&&!fn(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function _n(e){return an(e)?e:new Proxy(e,gn)}var vn=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new ct,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function yn(e){return new vn(e)}function bn(e){let t=w(e)?Array(e.length):{};for(let n in e)t[n]=wn(e,n);return t}var xn=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=ee(t)?t:String(t),this._raw=N(e);let r=!0,i=e;if(!w(e)||ee(this._key)||!oe(this._key))do r=!cn(i)||sn(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=hn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&fn(this._raw[this._key])){let t=this._object[this._key];if(fn(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return gt(this._raw,this._key)}},Sn=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function Cn(e,t,n){return fn(e)?e:O(e)?new Sn(e):A(e)&&arguments.length>1?wn(e,t,n):P(e)}function wn(e,t,n){return new xn(e,t,n)}var Tn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ct(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ot-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Ke(this,!0),!0}get value(){let e=this.dep.track();return Qe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function En(e,t,n=!1){let r,i;return O(e)?r=e:(r=e.get,i=e.set),new Tn(r,i,n)}var Dn={},On=new WeakMap,kn=void 0;function An(e,t=!1,n=kn){if(n){let t=On.get(n);t||On.set(n,t=[]),t.push(e)}}function jn(e,t,n=m){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:sn(e)||i===!1||i===0?Mn(e,1):Mn(e),u,d,f,p,h=!1,_=!1;if(fn(e)?(d=()=>e.value,h=sn(e)):an(e)?(d=()=>l(e),h=!0):w(e)?(_=!0,h=e.some(e=>an(e)||sn(e)),d=()=>e.map(e=>{if(fn(e))return e.value;if(an(e))return l(e);if(O(e))return c?c(e,2):e()})):d=O(e)?t?c?()=>c(e,2):e:()=>{if(f){rt();try{f()}finally{it()}}let t=kn;kn=u;try{return c?c(e,3,[p]):e(p)}finally{kn=t}}:g,t&&i){let e=d,t=i===!0?1/0:i;d=()=>Mn(e(),t)}let v=ze(),y=()=>{u.stop(),v&&v.active&&x(v.effects,u)};if(a&&t){let e=t;t=(...t)=>{e(...t),y()}}let b=_?Array(e.length).fill(Dn):Dn,S=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let e=u.run();if(i||h||(_?e.some((e,t)=>me(e,b[t])):me(e,b))){f&&f();let n=kn;kn=u;try{let n=[e,b===Dn?void 0:_&&b[0]===Dn?[]:b,p];b=e,c?c(t,3,n):t(...n)}finally{kn=n}}}else u.run()};return s&&s(S),u=new He(d),u.scheduler=o?()=>o(S,!1):S,p=e=>An(e,!1,u),f=u.onStop=()=>{let e=On.get(u);if(e){if(c)c(e,4);else for(let t of e)t();On.delete(u)}},t?r?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function Mn(e,t=1/0,n){if(t<=0||!A(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,fn(e))Mn(e.value,t,n);else if(w(e))for(let r=0;r<e.length;r++)Mn(e[r],t,n);else if(E(e)||T(e))e.forEach(e=>{Mn(e,t,n)});else if(ae(e)){for(let r in e)Mn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Mn(e[r],t,n)}return e}function Nn(e,t,n,r){try{return r?e(...r):e()}catch(e){Fn(e,t,n)}}function Pn(e,t,n,r){if(O(e)){let i=Nn(e,t,n,r);return i&&te(i)&&i.catch(e=>{Fn(e,t,n)}),i}if(w(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Pn(e[a],t,n,r));return i}}function Fn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||m;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){rt(),Nn(a,null,10,[e,i,o]),it();return}}In(e,n,i,r,o)}function In(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var Ln=[],Rn=-1,zn=[],Bn=null,Vn=0,Hn=Promise.resolve(),Un=null;function Wn(e){let t=Un||Hn;return e?t.then(this?e.bind(this):e):t}function Gn(e){let t=Rn+1,n=Ln.length;for(;t<n;){let r=t+n>>>1,i=Ln[r],a=Zn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Kn(e){if(!(e.flags&1)){let t=Zn(e),n=Ln[Ln.length-1];!n||!(e.flags&2)&&t>=Zn(n)?Ln.push(e):Ln.splice(Gn(t),0,e),e.flags|=1,qn()}}function qn(){Un||=Hn.then(Qn)}function Jn(e){w(e)?zn.push(...e):Bn&&e.id===-1?Bn.splice(Vn+1,0,e):e.flags&1||(zn.push(e),e.flags|=1),qn()}function Yn(e,t,n=Rn+1){for(;n<Ln.length;n++){let t=Ln[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;Ln.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Xn(e){if(zn.length){let e=[...new Set(zn)].sort((e,t)=>Zn(e)-Zn(t));if(zn.length=0,Bn){Bn.push(...e);return}for(Bn=e,Vn=0;Vn<Bn.length;Vn++){let e=Bn[Vn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Bn=null,Vn=0}}var Zn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Qn(e){try{for(Rn=0;Rn<Ln.length;Rn++){let e=Ln[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Nn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Ln.length;Rn++){let e=Ln[Rn];e&&(e.flags&=-2)}Rn=-1,Ln.length=0,Xn(e),Un=null,(Ln.length||zn.length)&&Qn(e)}}var $n=null,er=null;function tr(e){let t=$n;return $n=e,er=e&&e.type.__scopeId||null,t}function nr(e,t=$n,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ga(-1);let i=tr(t),a;try{a=e(...n)}finally{tr(i),r._d&&Ga(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function rr(e,t){if($n===null)return e;let n=jo($n),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=m]=t[e];i&&(O(i)&&(i={mounted:i,updated:i}),i.deep&&Mn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function ir(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(rt(),Pn(c,n,8,[e.el,s,e,t]),it())}}function ar(e,t){if(ho){let n=ho.provides,r=ho.parent&&ho.parent.provides;r===n&&(n=ho.provides=Object.create(r)),n[e]=t}}function L(e,t,n=!1){let r=go();if(r||Ki){let i=Ki?Ki._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&O(t)?t.call(r&&r.proxy):t}}function or(){return!!(go()||Ki)}var sr=Symbol.for(`v-scx`),cr=()=>L(sr);function lr(e,t){return dr(e,null,t)}function ur(e,t){return dr(e,null,{flush:`sync`})}function R(e,t,n){return dr(e,t,n)}function dr(e,t,n=m){let{immediate:r,deep:i,flush:a,once:o}=n,s=b({},n),c=t&&r||!t&&a!==`post`,l;if(So){if(a===`sync`){let e=cr();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=g,e.resume=g,e.pause=g,e}}let u=ho;s.call=(e,t,n)=>Pn(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{wa(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():Kn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=jn(e,t,s);return So&&(l?l.push(f):c&&f()),f}function fr(e,t,n){let r=this.proxy,i=k(e)?e.includes(`.`)?pr(r,e):()=>r[e]:e.bind(r,r),a;O(t)?a=t:(a=t.handler,n=t);let o=yo(this),s=dr(i,a.bind(r),n);return o(),s}function pr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var mr=Symbol(`_vte`),hr=e=>e.__isTeleport,gr=Symbol(`_leaveCb`),_r=Symbol(`_enterCb`);function vr(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return B(()=>{e.isMounted=!0}),ci(()=>{e.isUnmounting=!0}),e}var yr=[Function,Array],br={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yr,onEnter:yr,onAfterEnter:yr,onEnterCancelled:yr,onBeforeLeave:yr,onLeave:yr,onAfterLeave:yr,onLeaveCancelled:yr,onBeforeAppear:yr,onAppear:yr,onAfterAppear:yr,onAppearCancelled:yr},xr=e=>{let t=e.subTree;return t.component?xr(t.component):t},Sr={name:`BaseTransition`,props:br,setup(e,{slots:t}){let n=go(),r=vr();return()=>{let i=t.default&&Ar(t.default(),!0),a=i&&i.length?Cr(i):n.subTree?ao():void 0;if(!a)return;let o=N(e),{mode:s}=o;if(r.isLeaving)return Dr(a);let c=Or(a);if(!c)return Dr(a);let l=Er(c,o,r,n,e=>l=e);c.type!==za&&kr(c,l);let u=n.subTree&&Or(n.subTree);if(u&&u.type!==za&&!Xa(u,c)&&xr(n).type!==za){let e=Er(u,o,r,n);if(kr(u,e),s===`out-in`&&c.type!==za)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},Dr(a);s===`in-out`&&c.type!==za?e.delayLeave=(e,t,n)=>{let i=Tr(r,u);i[String(u.key)]=u,e[gr]=()=>{t(),e[gr]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Cr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==za){t=n;break}}return t}var wr=Sr;function Tr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Er(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),x=Tr(n,e),S=(e,t)=>{e&&Pn(e,r,9,t)},C=(e,t)=>{let n=t[1];S(e,t),w(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=g||c;else return;t[gr]&&t[gr](!0);let i=x[b];i&&Xa(e,i)&&i.el[gr]&&i.el[gr](),S(r,[t])},enter(t){if(x[b]===e)return;let r=l,i=u,o=d;if(!n.isMounted)if(a)r=_||l,i=v||u,o=y||d;else return;let s=!1;t[_r]=e=>{s||(s=!0,S(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[_r]=void 0)};let c=t[_r].bind(null,!1);r?C(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[_r]&&t[_r](!0),n.isUnmounting)return r();S(f,[t]);let a=!1;t[gr]=n=>{a||(a=!0,r(),S(n?h:m,[t]),t[gr]=void 0,x[i]===e&&delete x[i])};let o=t[gr].bind(null,!1);x[i]=e,p?C(p,[t,o]):o()},clone(e){let a=Er(e,t,n,r,i);return i&&i(a),a}};return T}function Dr(e){if(Qr(e))return e=no(e),e.children=null,e}function Or(e){if(!Qr(e))return hr(e.type)&&e.children?Cr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&O(n.default))return n.default()}}function kr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,kr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ar(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===La?(o.patchFlag&128&&i++,r=r.concat(Ar(o.children,t,s))):(t||o.type!==za)&&r.push(s==null?o:no(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function z(e,t){return O(e)?b({name:e.name},t,{setup:e}):e}function jr(){let e=go();return e?(e.appContext.config.idPrefix||`v`)+`-`+e.ids[0]+ e.ids[1]++:``}function Mr(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Nr(e){let t=go(),n=F(null);if(t){let r=t.refs===m?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>n.value,set:e=>n.value=e})}return n}function Pr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Fr=new WeakMap;function Ir(e,t,n,r,i=!1){if(w(e)){e.forEach((e,a)=>Ir(e,t&&(w(t)?t[a]:t),n,r,i));return}if(Yr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ir(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?jo(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===m?s.refs={}:s.refs,d=s.setupState,f=N(d),p=d===m?_:e=>Pr(u,e)?!1:C(f,e),h=(e,t)=>!(t&&Pr(u,t));if(l!=null&&l!==c){if(Lr(t),k(l))u[l]=null,p(l)&&(d[l]=null);else if(fn(l)){let e=t;h(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(O(c))Nn(c,s,12,[o,u]);else{let t=k(c),r=fn(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:h(c)||!e.k?c.value:u[e.k];if(i)w(n)&&x(n,a);else if(w(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];h(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(h(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Fr.delete(e)};t.id=-1,Fr.set(e,t),wa(t,n)}else Lr(e),s()}}}function Lr(e){let t=Fr.get(e);t&&(t.flags|=8,Fr.delete(e))}var Rr=!1,zr=()=>{Rr||=(console.error(`Hydration completed but contains mismatches.`),!0)},Br=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,Vr=e=>e.namespaceURI.includes(`MathML`),Hr=e=>{if(e.nodeType===1){if(Br(e))return`svg`;if(Vr(e))return`mathml`}},Ur=e=>e.nodeType===8;function Wr(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:s,insert:c,createComment:l}}=e,u=(e,t)=>{if(!t.hasChildNodes()){n(null,e,t),Xn(),t._vnode=e;return}d(t.firstChild,e,null,null,null),Xn(),t._vnode=e},d=(n,r,s,l,u,v=!1)=>{v||=!!r.dynamicChildren;let b=Ur(n)&&n.data===`[`,x=()=>h(n,r,s,l,u,b),{type:S,ref:C,shapeFlag:w,patchFlag:T}=r,E=n.nodeType;r.el=n,T===-2&&(v=!1,r.dynamicChildren=null);let D=null;switch(S){case Ra:E===3?(n.data!==r.children&&(zr(),n.data=r.children),D=a(n)):r.children===``?(c(r.el=i(``),o(n),n),D=n):D=x();break;case za:y(n)?(D=a(n),_(r.el=n.content.firstChild,n,s)):D=E!==8||b?x():a(n);break;case Ba:if(b&&(n=a(n),E=n.nodeType),E===1||E===3){D=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=D.nodeType===1?D.outerHTML:D.data),t===r.staticCount-1&&(r.anchor=D),D=a(D);return b?a(D):D}else x();break;case La:D=b?m(n,r,s,l,u,v):x();break;default:if(w&1)D=(E!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!y(n)?x():f(n,r,s,l,u,v);else if(w&6){r.slotScopeIds=u;let e=o(n);if(D=b?g(n):Ur(n)&&n.data===`teleport start`?g(n,n.data,`teleport end`):a(n),t(r,e,null,s,l,Hr(e),v),Yr(r)&&!r.type.__asyncResolved){let t;b?(t=U(La),t.anchor=D?D.previousSibling:e.lastChild):t=n.nodeType===3?ro(``):U(`div`),t.el=n,r.component.subTree=t}}else w&64?D=E===8?r.type.hydrate(n,r,s,l,u,v,e,p):x():w&128&&(D=r.type.hydrate(n,r,s,l,Hr(o(n)),u,v,e,d))}return C!=null&&Ir(C,null,l,r),D},f=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:c,props:l,patchFlag:u,shapeFlag:d,dirs:f,transition:m}=t,h=c===`input`||c===`option`;if(h||u!==-1){f&&ir(t,null,n,`created`);let c=!1;if(y(e)){c=ka(null,m)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(c){let e=r.getAttribute(`class`);e&&(r.$cls=e),m.beforeEnter(r)}_(r,e,n),t.el=e=r}if(d&16&&!(l&&(l.innerHTML||l.textContent))){let r=p(e.firstChild,t,e,n,i,a,o);for(;r;){qr(e,1)||zr();let t=r;r=r.nextSibling,s(t)}}else if(d&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(qr(e,0)||zr(),e.textContent=t.children)}if(l){if(h||!o||u&48){let t=e.tagName.includes(`-`);for(let i in l)(h&&(i.endsWith(`value`)||i===`indeterminate`)||v(i)&&!se(i)||i[0]===`.`||t&&!se(i))&&r(e,i,null,l[i],void 0,n)}else if(l.onClick)r(e,`onClick`,null,l.onClick,void 0,n);else if(u&4&&an(l.style))for(let e in l.style)l.style[e]}let g;(g=l&&l.onVnodeBeforeMount)&&uo(g,n,t),f&&ir(t,null,n,`beforeMount`),((g=l&&l.onVnodeMounted)||f||c)&&Ia(()=>{g&&uo(g,n,t),c&&m.enter(e),f&&ir(t,null,n,`mounted`)},i)}return e.nextSibling},p=(e,t,r,o,s,l,u)=>{u||=!!t.dynamicChildren;let f=t.children,p=f.length;for(let t=0;t<p;t++){let m=u?f[t]:f[t]=oo(f[t]),h=m.type===Ra;e?(h&&!u&&t+1<p&&oo(f[t+1]).type===Ra&&(c(i(e.data.slice(m.children.length)),r,a(e)),e.data=m.children),e=d(e,m,o,s,l,u)):h&&!m.children?c(m.el=i(``),r):(qr(r,1)||zr(),n(null,m,r,null,o,s,Hr(r),l))}return e},m=(e,t,n,r,i,s)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=o(e),f=p(a(e),t,d,n,r,i,s);return f&&Ur(f)&&f.data===`]`?a(t.anchor=f):(zr(),c(t.anchor=l(`]`),d,f),f)},h=(e,t,r,i,c,l)=>{if(qr(e.parentElement,1)||zr(),t.el=null,l){let t=g(e);for(;;){let n=a(e);if(n&&n!==t)s(n);else break}}let u=a(e),d=o(e);return s(e),n(null,t,d,u,r,i,Hr(d),c),r&&(r.vnode.el=t.el,aa(r,t.el)),u},g=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&Ur(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},_=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},y=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[u,d]}var Gr=`data-allow-mismatch`,Kr={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function qr(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Gr);)e=e.parentElement;let n=e&&e.getAttribute(Gr);if(n==null)return!1;if(n===``)return!0;{let e=n.split(`,`);return t===0&&e.includes(`children`)?!0:e.includes(Kr[t])}}be().requestIdleCallback,be().cancelIdleCallback;function Jr(e,t){if(Ur(e)&&e.data===`[`){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Ur(r))if(r.data===`]`){if(--n===0)break}else r.data===`[`&&n++;r=r.nextSibling}}else t(e)}var Yr=e=>!!e.type.__asyncLoader;function Xr(e){O(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:a,timeout:o,suspensible:s=!0,onError:c}=e,l=null,u,d=0,f=()=>(d++,l=null,p()),p=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),c)return new Promise((t,n)=>{c(e,()=>t(f()),()=>n(e),d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),u=t,t)))};return z({name:`AsyncComponentWrapper`,__asyncLoader:p,__asyncHydrate(e,t,n){let r=!1;(t.bu||=[]).push(()=>r=!0);let i=()=>{r||n()},o=a?()=>{let n=a(i,t=>Jr(e,t));n&&(t.bum||=[]).push(n)}:i;u?o():p().then(()=>!t.isUnmounted&&o())},get __asyncResolved(){return u},setup(){let e=ho;if(Mr(e),u)return()=>Zr(u,e);let t=t=>{l=null,Fn(t,e,13,!r)};if(s&&e.suspense||So)return p().then(t=>()=>Zr(t,e)).catch(e=>(t(e),()=>r?U(r,{error:e}):null));let a=P(!1),c=P(),d=P(!!i);return i&&setTimeout(()=>{d.value=!1},i),o!=null&&setTimeout(()=>{if(!a.value&&!c.value){let e=Error(`Async component timed out after ${o}ms.`);t(e),c.value=e}},o),p().then(()=>{a.value=!0,e.parent&&Qr(e.parent.vnode)&&e.parent.update()}).catch(e=>{t(e),c.value=e}),()=>{if(a.value&&u)return Zr(u,e);if(c.value&&r)return U(r,{error:c.value});if(n&&!d.value)return Zr(n,e)}}})}function Zr(e,t){let{ref:n,props:r,children:i,ce:a}=t.vnode,o=U(e,r,i);return o.ref=n,o.ce=a,delete t.vnode.ce,o}var Qr=e=>e.type.__isKeepAlive;function $r(e,t){ti(e,`a`,t)}function ei(e,t){ti(e,`da`,t)}function ti(e,t,n=ho){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(ri(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Qr(e.parent.vnode)&&ni(r,t,n,e),e=e.parent}}function ni(e,t,n,r){let i=ri(t,e,r,!0);li(()=>{x(r[t],i)},n)}function ri(e,t,n=ho,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{rt();let i=yo(n),a=Pn(t,n,e,r);return i(),it(),a};return r?i.unshift(a):i.push(a),a}}var ii=e=>(t,n=ho)=>{(!So||e===`sp`)&&ri(e,(...e)=>t(...e),n)},ai=ii(`bm`),B=ii(`m`),oi=ii(`bu`),si=ii(`u`),ci=ii(`bum`),li=ii(`um`),ui=ii(`sp`),di=ii(`rtg`),fi=ii(`rtc`);function pi(e,t=ho){ri(`ec`,e,t)}var mi=`components`;function V(e,t){return gi(mi,e,!0,t)||e}var hi=Symbol.for(`v-ndc`);function gi(e,t,n=!0,r=!1){let i=$n||ho;if(i){let n=i.type;if(e===mi){let e=Mo(n,!1);if(e&&(e===t||e===j(t)||e===fe(j(t))))return n}let a=_i(i[e]||n[e],t)||_i(i.appContext[e],t);return!a&&r?n:a}}function _i(e,t){return e&&(e[t]||e[j(t)]||e[fe(j(t))])}function vi(e,t,n,r){let i,a=n&&n[r],o=w(e);if(o||k(e)){let n=o&&an(e),r=!1,s=!1;n&&(r=!sn(e),s=on(e),e=vt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?dn(un(e[n])):un(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(A(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function yi(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(w(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function bi(e,t,n={},r,i){if($n.ce||$n.parent&&Yr($n.parent)&&$n.parent.ce){let e=Object.keys(n).length>0;return t!==`default`&&(n.name=t),H(),Ja(La,null,[U(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),H();let o=a&&xi(a(n)),s=n.key||o&&o.key,c=Ja(La,{key:(s&&!ee(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function xi(e){return e.some(e=>Ya(e)?!(e.type===za||e.type===La&&!xi(e.children)):!0)?e:null}var Si=e=>e?xo(e)?jo(e):Si(e.parent):null,Ci=b(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Si(e.parent),$root:e=>Si(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ni(e),$forceUpdate:e=>e.f||=()=>{Kn(e.update)},$nextTick:e=>e.n||=Wn.bind(e.proxy),$watch:e=>fr.bind(e)}),wi=(e,t)=>e!==m&&!e.__isScriptSetup&&C(e,t),Ti={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(wi(r,t))return o[t]=1,r[t];else if(i!==m&&C(i,t))return o[t]=2,i[t];else if(C(a,t))return o[t]=3,a[t];else if(n!==m&&C(n,t))return o[t]=4,n[t];else Oi&&(o[t]=0)}let l=Ci[t],u,d;if(l)return t===`$attrs`&&mt(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==m&&C(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,C(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return wi(i,t)?(i[t]=n,!0):r!==m&&C(r,t)?(r[t]=n,!0):C(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==m&&s[0]!==`$`&&C(e,s)||wi(t,s)||C(a,s)||C(r,s)||C(Ci,s)||C(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?C(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Ei(e){return w(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function Di(e,t){return!e||!t?e||t:w(e)&&w(t)?e.concat(t):b({},Ei(e),Ei(t))}var Oi=!0;function ki(e){let t=Ni(e),n=e.proxy,r=e.ctx;Oi=!1,t.beforeCreate&&ji(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:x,render:S,renderTracked:C,renderTriggered:T,errorCaptured:E,serverPrefetch:D,expose:k,inheritAttrs:ee,components:te,directives:ne,filters:re}=t;if(l&&Ai(l,r,null),o)for(let e in o){let t=o[e];O(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);A(t)&&(e.data=$t(t))}if(Oi=!0,a)for(let e in a){let t=a[e],i=W({get:O(t)?t.bind(n,n):O(t.get)?t.get.bind(n,n):g,set:!O(t)&&O(t.set)?t.set.bind(n):g});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Mi(s[e],r,n,e);if(c){let e=O(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{ar(t,e[t])})}u&&ji(u,e,`c`);function ie(e,t){w(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(ie(ai,d),ie(B,f),ie(oi,p),ie(si,m),ie($r,h),ie(ei,_),ie(pi,E),ie(fi,C),ie(di,T),ie(ci,y),ie(li,x),ie(ui,D),w(k))if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};S&&e.render===g&&(e.render=S),ee!=null&&(e.inheritAttrs=ee),te&&(e.components=te),ne&&(e.directives=ne),D&&Mr(e)}function Ai(e,t,n=g){w(e)&&(e=Ri(e));for(let n in e){let r=e[n],i;i=A(r)?`default`in r?L(r.from||n,r.default,!0):L(r.from||n):L(r),fn(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function ji(e,t,n){Pn(w(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mi(e,t,n,r){let i=r.includes(`.`)?pr(n,r):()=>n[r];if(k(e)){let n=t[e];O(n)&&R(i,n)}else if(O(e))R(i,e.bind(n));else if(A(e))if(w(e))e.forEach(e=>Mi(e,t,n,r));else{let r=O(e.handler)?e.handler.bind(n):t[e.handler];O(r)&&R(i,r,e)}}function Ni(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Pi(c,e,o,!0)),Pi(c,t,o)),A(t)&&a.set(t,c),c}function Pi(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Pi(e,a,n,!0),i&&i.forEach(t=>Pi(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Fi[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Fi={data:Ii,props:Vi,emits:Vi,methods:Bi,computed:Bi,beforeCreate:zi,created:zi,beforeMount:zi,mounted:zi,beforeUpdate:zi,updated:zi,beforeDestroy:zi,beforeUnmount:zi,destroyed:zi,unmounted:zi,activated:zi,deactivated:zi,errorCaptured:zi,serverPrefetch:zi,components:Bi,directives:Bi,watch:Hi,provide:Ii,inject:Li};function Ii(e,t){return t?e?function(){return b(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Li(e,t){return Bi(Ri(e),Ri(t))}function Ri(e){if(w(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function zi(e,t){return e?[...new Set([].concat(e,t))]:t}function Bi(e,t){return e?b(Object.create(null),e,t):t}function Vi(e,t){return e?w(e)&&w(t)?[...new Set([...e,...t])]:b(Object.create(null),Ei(e),Ei(t??{})):t}function Hi(e,t){if(!e)return t;if(!t)return e;let n=b(Object.create(null),e);for(let r in t)n[r]=zi(e[r],t[r]);return n}function Ui(){return{app:null,config:{isNativeTag:_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Wi=0;function Gi(e,t){return function(n,r=null){O(n)||(n=b({},n)),r!=null&&!A(r)&&(r=null);let i=Ui(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:Wi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Po,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&O(e.install)?(a.add(e),e.install(c,...t)):O(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||U(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,jo(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(Pn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Ki;Ki=c;try{return e()}finally{Ki=t}}};return c}}var Ki=null;function qi(e,t,n=m){let r=go(),i=j(t),a=de(t),o=Ji(e,i),s=yn((o,s)=>{let c,l=m,u;return ur(()=>{let t=e[i];me(c,t)&&(c=t,s())}),{get(){return o(),n.get?n.get(c):c},set(e){let o=n.set?n.set(e):e;if(!me(o,c)&&!(l!==m&&me(e,l)))return;let d=r.vnode.props;d&&(t in d||i in d||a in d)&&(`onUpdate:${t}`in d||`onUpdate:${i}`in d||`onUpdate:${a}`in d)||(c=e,s()),r.emit(`update:${t}`,o),me(e,o)&&me(e,l)&&!me(o,u)&&s(),l=e,u=o}}});return s[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?o||m:s,done:!1}:{done:!0}}}},s}var Ji=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${j(t)}Modifiers`]||e[`${de(t)}Modifiers`];function Yi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||m,i=n,a=t.startsWith(`update:`),o=a&&Ji(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>k(e)?e.trim():e)),o.number&&(i=n.map(_e)));let s,c=r[s=pe(t)]||r[s=pe(j(t))];!c&&a&&(c=r[s=pe(de(t))]),c&&Pn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pn(l,e,6,i)}}var Xi=new WeakMap;function Zi(e,t,n=!1){let r=n?Xi:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!O(e)){let r=e=>{let n=Zi(e,t,!0);n&&(s=!0,b(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(A(e)&&r.set(e,null),null):(w(a)?a.forEach(e=>o[e]=null):b(o,a),A(e)&&r.set(e,o),o)}function Qi(e,t){return!e||!v(t)?!1:(t=t.slice(2).replace(/Once$/,``),C(e,t[0].toLowerCase()+t.slice(1))||C(e,de(t))||C(e,t))}function $i(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=tr(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=oo(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=oo(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:ea(s)}}catch(t){Va.length=0,Fn(t,e,1),_=U(za)}let b=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(y)&&(v=ta(v,a)),b=no(b,v,!1,!0))}return n.dirs&&(b=no(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&kr(b,n.transition),_=b,tr(g),_}var ea=e=>{let t;for(let n in e)(n===`class`||n===`style`||v(n))&&((t||={})[n]=e[n]);return t},ta=(e,t)=>{let n={};for(let r in e)(!y(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function na(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ra(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ia(o,r,n)&&!Qi(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ra(r,o,l):!0:!!o;return!1}function ra(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ia(t,e,a)&&!Qi(n,a))return!0}return!1}function ia(e,t,n){let r=e[n],i=t[n];return n===`style`&&A(r)&&A(i)?!je(r,i):r!==i}function aa({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var oa={},sa=()=>Object.create(oa),ca=e=>Object.getPrototypeOf(e)===oa;function la(e,t,n,r=!1){let i={},a=sa();e.propsDefaults=Object.create(null),da(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:en(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ua(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Qi(e.emitsOptions,o))continue;let u=t[o];if(c)if(C(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=j(o);i[t]=fa(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{da(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!C(t,a)&&((r=de(a))===a||!C(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=fa(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!C(t,e))&&(delete a[e],l=!0)}l&&ht(e.attrs,`set`,``)}function da(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(se(c))continue;let l=t[c],u;i&&C(i,u=j(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:Qi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=N(n),r=s||m;for(let o=0;o<a.length;o++){let s=a[o];n[s]=fa(i,t,s,r[s],e,!C(r,s))}}return o}function fa(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=C(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&O(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=yo(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===de(n))&&(r=!0))}return r}var pa=new WeakMap;function ma(e,t,n=!1){let r=n?pa:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!O(e)){let r=e=>{c=!0;let[n,r]=ma(e,t,!0);b(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return A(e)&&r.set(e,h),h;if(w(a))for(let e=0;e<a.length;e++){let t=j(a[e]);ha(t)&&(o[t]=m)}else if(a)for(let e in a){let t=j(e);if(ha(t)){let n=a[e],r=o[t]=w(n)||O(n)?{type:n}:b({},n),i=r.type,c=!1,l=!0;if(w(i))for(let e=0;e<i.length;++e){let t=i[e],n=O(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=O(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||C(r,`default`))&&s.push(t)}}let l=[o,s];return A(e)&&r.set(e,l),l}function ha(e){return e[0]!==`$`&&!se(e)}var ga=e=>e===`_`||e===`_ctx`||e===`$stable`,_a=e=>w(e)?e.map(oo):[oo(e)],va=(e,t,n)=>{if(t._n)return t;let r=nr((...e)=>_a(t(...e)),n);return r._c=!1,r},ya=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ga(n))continue;let i=e[n];if(O(i))t[n]=va(n,i,r);else if(i!=null){let e=_a(i);t[n]=()=>e}}},ba=(e,t)=>{let n=_a(t);e.slots.default=()=>n},xa=(e,t,n)=>{for(let r in t)(n||!ga(r))&&(e[r]=t[r])},Sa=(e,t,n)=>{let r=e.slots=sa();if(e.vnode.shapeFlag&32){let e=t._;e?(xa(r,t,n),n&&ge(r,`_`,e,!0)):ya(t,r)}else t&&ba(e,t)},Ca=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=m;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:xa(i,t,n):(a=!t.$stable,ya(t,i)),o=t}else t&&(ba(e,t),o={default:1});if(a)for(let e in i)!ga(e)&&o[e]==null&&delete i[e]},wa=Ia;function Ta(e){return Ea(e,Wr)}function Ea(e,t){let n=be();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=g,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xa(e,t)&&(r=ge(e),ue(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ra:y(e,t,n,r);break;case za:b(e,t,n,r);break;case Ba:e??x(t,n,r,o);break;case La:A(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?te(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ye)}u!=null&&i?Ir(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Ir(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&D(e.children,f,null,i,s,Da(e,c),l,d),_&&ir(e,null,i,`created`),E(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!se(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&uo(p,i,e)}_&&ir(e,null,i,`beforeMount`);let v=ka(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&wa(()=>{try{p&&uo(p,i,e),v&&g.enter(f),_&&ir(e,null,i,`mounted`)}finally{}},s)},E=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||Fa(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?so(e[l]):oo(e[l]),t,n,r,i,a,o,s)},O=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||m,h=t.props||m,g;if(n&&Oa(n,!1),(g=h.onVnodeBeforeUpdate)&&uo(g,n,t,e),f&&ir(t,e,n,`beforeUpdate`),n&&Oa(n,!0),(p.innerHTML&&h.innerHTML==null||p.textContent&&h.textContent==null)&&u(c,``),d?k(e.dynamicChildren,d,c,n,r,Da(t,i),o):s||oe(e,t,c,null,n,r,Da(t,i),o,!1),l>0){if(l&16)ee(c,p,h,n,i);else if(l&2&&p.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,p.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else !s&&d==null&&ee(c,p,h,n,i);((g=h.onVnodeUpdated)||f)&&wa(()=>{g&&uo(g,n,t,e),f&&ir(t,e,n,`updated`)},r)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===La||!Xa(c,l)||c.shapeFlag&198)?d(c.el):n,null,r,i,a,o,!0)}},ee=(e,t,n,r,i)=>{if(t!==n){if(t!==m)for(let o in t)!se(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(se(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},A=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Aa(e,t,!0)):oe(e,t,n,f,a,o,c,l,u)},te=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ne(t,n,r,i,a,o,c):re(e,t,c)},ne=(e,t,n,r,i,a,o)=>{let s=e.component=mo(e,r,i);if(Qr(e)&&(s.ctx.renderer=ye),Co(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=U(za);b(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(na(e,t,n))if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ma(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{wa(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;Oa(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&he(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&uo(f,s,t,c),Oa(e,!0);let p=$i(e),m=e.subTree;e.subTree=p,v(m,p,d(m.el),ge(m),e,i,a),t.el=p.el,u===null&&aa(e,p.el),r&&wa(r,i),(f=t.props&&t.props.onVnodeUpdated)&&wa(()=>uo(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Yr(t);if(Oa(e,!1),l&&he(l),!m&&(o=c&&c.onVnodeBeforeMount)&&uo(o,d,t),Oa(e,!0),s&&Se){let t=()=>{e.subTree=$i(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=$i(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&wa(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;wa(()=>uo(o,d,e),i)}(t.shapeFlag&256||d&&Yr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&wa(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new He(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Kn(u),Oa(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ua(e,t.props,r,n),Ca(e,t.children,n),rt(),Yn(e),it()},oe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){le(l,f,n,r,i,a,o,s,c);return}else if(p&256){ce(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&me(l,i,a),f!==l&&u(n,f)):d&16?m&16?le(l,f,n,r,i,a,o,s,c):me(l,i,a,!0):(d&8&&u(n,``),m&16&&D(f,n,r,i,a,o,s,c))},ce=(e,t,n,r,i,a,o,s,c)=>{e||=h,t||=h;let l=e.length,u=t.length,d=Math.min(l,u),f;for(f=0;f<d;f++){let r=t[f]=c?so(t[f]):oo(t[f]);v(e[f],r,n,null,i,a,o,s,c)}l>u?me(e,i,a,!0,!1,d):D(t,n,r,i,a,o,s,c,d)},le=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?so(t[l]):oo(t[l]);if(Xa(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?so(t[f]):oo(t[f]);if(Xa(r,l))v(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)v(null,t[l]=c?so(t[l]):oo(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)ue(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?so(t[l]):oo(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=f-m+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=p;l<=d;l++){let r=e[l];if(y>=b){ue(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(C[_-m]===0&&Xa(r,t[_])){u=_;break}u===void 0?ue(r,i,a,!0):(C[u-m]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?ja(C):h;for(_=w.length-1,l=b-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Pa(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?j(d,n,p,2):_--)}}},j=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){j(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,ye);return}if(c===La){r(s,t,n);for(let e=0;e<u.length;e++)j(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Ba){S(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.beforeEnter(s),r(s,t,n),wa(()=>l.enter(s),o);else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{s._isLeaving&&s[gr](!0),a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},ue=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(rt(),Ir(s,null,n,e,!0),it()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Yr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&uo(_,t,e),u&6)pe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&ir(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ye,r):l&&!l.hasOnce&&(a!==La||d>0&&d&64)?me(l,t,n,!1,!0):(a===La&&d&384||!i&&u&16)&&me(c,t,n),r&&de(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&wa(()=>{_&&uo(_,t,e),h&&ir(e,null,t,`unmounted`),v&&(e.el=null)},n)},de=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===La){fe(n,r);return}if(t===Ba){C(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},fe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},pe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Na(c),Na(l),r&&he(r),i.stop(),a&&(a.flags|=8,ue(o,e,t,n)),s&&wa(s,t),wa(()=>{e.isUnmounted=!0},t)},me=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ue(e[o],t,n,r,i)},ge=e=>{if(e.shapeFlag&6)return ge(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[mr];return n?f(n):t},_e=!1,ve=(e,t,n)=>{let r;e==null?t._vnode&&(ue(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,_e||=(_e=!0,Yn(r),Xn(),!1)},ye={p:v,um:ue,m:j,r:de,mt:ne,mc:D,pc:oe,pbc:k,n:ge,o:e},xe,Se;return t&&([xe,Se]=t(ye)),{render:ve,hydrate:xe,createApp:Gi(ve,xe)}}function Da({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Oa({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ka(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Aa(e,t,n=!1){let r=e.children,i=t.children;if(w(r)&&w(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=so(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Aa(t,a)),a.type===Ra&&(a.patchFlag===-1&&(a=i[e]=so(a)),a.el=t.el),a.type===za&&!a.el&&(a.el=t.el)}}function ja(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function Ma(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ma(t)}function Na(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Pa(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Pa(t.subTree):null}var Fa=e=>e.__isSuspense;function Ia(e,t){t&&t.pendingBranch?w(e)?t.effects.push(...e):t.effects.push(e):Jn(e)}var La=Symbol.for(`v-fgt`),Ra=Symbol.for(`v-txt`),za=Symbol.for(`v-cmt`),Ba=Symbol.for(`v-stc`),Va=[],Ha=null;function H(e=!1){Va.push(Ha=e?null:[])}function Ua(){Va.pop(),Ha=Va[Va.length-1]||null}var Wa=1;function Ga(e,t=!1){Wa+=e,e<0&&Ha&&t&&(Ha.hasOnce=!0)}function Ka(e){return e.dynamicChildren=Wa>0?Ha||h:null,Ua(),Wa>0&&Ha&&Ha.push(e),e}function qa(e,t,n,r,i,a){return Ka($a(e,t,n,r,i,a,!0))}function Ja(e,t,n,r,i){return Ka(U(e,t,n,r,i,!0))}function Ya(e){return e?e.__v_isVNode===!0:!1}function Xa(e,t){return e.type===t.type&&e.key===t.key}var Za=({key:e})=>e??null,Qa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:k(e)||fn(e)||O(e)?{i:$n,r:e,k:t,f:!!n}:e);function $a(e,t=null,n=null,r=0,i=null,a=e===La?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Za(t),ref:t&&Qa(t),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$n};return s?(co(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=k(n)?8:16),Wa>0&&!o&&Ha&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ha.push(c),c}var U=eo;function eo(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===hi)&&(e=za),Ya(e)){let r=no(e,t,!0);return n&&co(r,n),Wa>0&&!a&&Ha&&(r.shapeFlag&6?Ha[Ha.indexOf(e)]=r:Ha.push(r)),r.patchFlag=-2,r}if(No(e)&&(e=e.__vccOpts),t){t=to(t);let{class:e,style:n}=t;e&&!k(e)&&(t.class=Ee(e)),A(n)&&(cn(n)&&!w(n)&&(n=b({},n)),t.style=xe(n))}let o=k(e)?1:Fa(e)?128:hr(e)?64:A(e)?4:O(e)?2:0;return $a(e,t,n,r,i,o,a,!0)}function to(e){return e?cn(e)||ca(e)?b({},e):e:null}function no(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?lo(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Za(l),ref:t&&t.ref?n&&a?w(a)?a.concat(Qa(t)):[a,Qa(t)]:Qa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==La?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&no(e.ssContent),ssFallback:e.ssFallback&&no(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&kr(u,c.clone(u)),u}function ro(e=` `,t=0){return U(Ra,null,e,t)}function io(e,t){let n=U(Ba,null,e);return n.staticCount=t,n}function ao(e=``,t=!1){return t?(H(),Ja(za,null,e)):U(za,null,e)}function oo(e){return e==null||typeof e==`boolean`?U(za):w(e)?U(La,null,e.slice()):Ya(e)?so(e):U(Ra,null,String(e))}function so(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:no(e)}function co(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(w(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),co(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!ca(t)?t._ctx=$n:r===3&&$n&&($n.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else O(t)?(t={default:t,_ctx:$n},n=32):(t=String(t),r&64?(n=16,t=[ro(t)]):n=8);e.children=t,e.shapeFlag|=n}function lo(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=Ee([t.class,r.class]));else if(e===`style`)t.style=xe([t.style,r.style]);else if(v(e)){let n=t[e],i=r[e];i&&n!==i&&!(w(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!y(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function uo(e,t,n,r=null){Pn(e,t,7,[n,r])}var fo=Ui(),po=0;function mo(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||fo,a={uid:po++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Re(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ma(r,i),emitsOptions:Zi(r,i),emit:null,emitted:null,propsDefaults:m,inheritAttrs:r.inheritAttrs,ctx:m,data:m,props:m,attrs:m,slots:m,refs:m,setupState:m,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Yi.bind(null,a),e.ce&&e.ce(a),a}var ho=null,go=()=>ho||$n,_o,vo;{let e=be(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};_o=t(`__VUE_INSTANCE_SETTERS__`,e=>ho=e),vo=t(`__VUE_SSR_SETTERS__`,e=>So=e)}var yo=e=>{let t=ho;return _o(e),e.scope.on(),()=>{e.scope.off(),_o(t)}},bo=()=>{ho&&ho.scope.off(),_o(null)};function xo(e){return e.vnode.shapeFlag&4}var So=!1;function Co(e,t=!1,n=!1){t&&vo(t);let{props:r,children:i}=e.vnode,a=xo(e);la(e,r,a,t),Sa(e,i,n||t);let o=a?wo(e,t):void 0;return t&&vo(!1),o}function wo(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ti);let{setup:r}=n;if(r){rt();let n=e.setupContext=r.length>1?Ao(e):null,i=yo(e),a=Nn(r,e,0,[e.props,n]),o=te(a);if(it(),i(),(o||e.sp)&&!Yr(e)&&Mr(e),o){if(a.then(bo,bo),t)return a.then(n=>{To(e,n,t)}).catch(t=>{Fn(t,e,0)});e.asyncDep=a}else To(e,a,t)}else Oo(e,t)}function To(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:A(t)&&(e.setupState=_n(t)),Oo(e,n)}var Eo,Do;function Oo(e,t,n){let r=e.type;if(!e.render){if(!t&&Eo&&!r.render){let t=r.template||Ni(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=Eo(t,b(b({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||g,Do&&Do(e)}{let t=yo(e);rt();try{ki(e)}finally{it(),t()}}}var ko={get(e,t){return mt(e,`get`,``),e[t]}};function Ao(e){return{attrs:new Proxy(e.attrs,ko),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function jo(e){return e.exposed?e.exposeProxy||=new Proxy(_n(ln(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ci)return Ci[n](e)},has(e,t){return t in e||t in Ci}}):e.proxy}function Mo(e,t=!0){return O(e)?e.displayName||e.name:e.name||t&&e.__name}function No(e){return O(e)&&`__vccOpts`in e}var W=(e,t)=>En(e,t,So);function G(e,t,n){try{Ga(-1);let r=arguments.length;return r===2?A(t)&&!w(t)?Ya(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ya(n)&&(n=[n]),U(e,t,n))}finally{Ga(1)}}var Po=`3.5.34`,Fo=void 0,Io=typeof window<`u`&&window.trustedTypes;if(Io)try{Fo=Io.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Lo=Fo?e=>Fo.createHTML(e):e=>e,Ro=`http://www.w3.org/2000/svg`,zo=`http://www.w3.org/1998/Math/MathML`,Bo=typeof document<`u`?document:null,Vo=Bo&&Bo.createElement(`template`),Ho={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Bo.createElementNS(Ro,e):t===`mathml`?Bo.createElementNS(zo,e):n?Bo.createElement(e,{is:n}):Bo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Bo.createTextNode(e),createComment:e=>Bo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Vo.innerHTML=Lo(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Vo.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Uo=`transition`,Wo=`animation`,Go=Symbol(`_vtc`),Ko={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qo=b({},br,Ko),Jo=(e=>(e.displayName=`Transition`,e.props=qo,e))((e,{slots:t})=>G(wr,Zo(e),t)),Yo=(e,t=[])=>{w(e)?e.forEach(e=>e(...t)):e&&e(...t)},Xo=e=>e?w(e)?e.some(e=>e.length>1):e.length>1:!1;function Zo(e){let t={};for(let n in e)n in Ko||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=Qo(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=_,onAppear:w=v,onAppearCancelled:T=y}=t,E=(e,t,n,r)=>{e._enterCancelled=r,ts(e,t?u:s),ts(e,t?l:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,ts(e,d),ts(e,p),ts(e,f),t&&t()},O=e=>(t,n)=>{let i=e?w:v,o=()=>E(t,e,n);Yo(i,[t,o]),ns(()=>{ts(t,e?c:a),es(t,e?u:s),Xo(i)||is(t,r,h,o)})};return b(t,{onBeforeEnter(e){Yo(_,[e]),es(e,a),es(e,o)},onBeforeAppear(e){Yo(C,[e]),es(e,c),es(e,l)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);es(e,d),e._enterCancelled?(es(e,f),cs(e)):(cs(e),es(e,f)),ns(()=>{e._isLeaving&&(ts(e,d),es(e,p),Xo(x)||is(e,r,g,n))}),Yo(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),Yo(y,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),Yo(T,[e])},onLeaveCancelled(e){D(e),Yo(S,[e])}})}function Qo(e){if(e==null)return null;if(A(e))return[$o(e.enter),$o(e.leave)];{let t=$o(e);return[t,t]}}function $o(e){return ve(e)}function es(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Go]||(e[Go]=new Set)).add(t)}function ts(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Go];n&&(n.delete(t),n.size||(e[Go]=void 0))}function ns(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var rs=0;function is(e,t,n,r){let i=e._endId=++rs,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=as(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function as(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Uo}Delay`),a=r(`${Uo}Duration`),o=os(i,a),s=r(`${Wo}Delay`),c=r(`${Wo}Duration`),l=os(s,c),u=null,d=0,f=0;t===Uo?o>0&&(u=Uo,d=o,f=a.length):t===Wo?l>0&&(u=Wo,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Uo:Wo:null,f=u?u===Uo?a.length:c.length:0);let p=u===Uo&&/\b(?:transform|all)(?:,|$)/.test(r(`${Uo}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function os(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>ss(t)+ss(e[n])))}function ss(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function cs(e){return(e?e.ownerDocument:document).body.offsetHeight}function ls(e,t,n){let r=e[Go];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var us=Symbol(`_vod`),ds=Symbol(`_vsh`),fs={name:`show`,beforeMount(e,{value:t},{transition:n}){e[us]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):ps(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ps(e,!0),r.enter(e)):r.leave(e,()=>{ps(e,!1)}):ps(e,t))},beforeUnmount(e,{value:t}){ps(e,t)}};function ps(e,t){e.style.display=t?e[us]:`none`,e[ds]=!t}var ms=Symbol(``),hs=/(?:^|;)\s*display\s*:/;function gs(e,t,n){let r=e.style,i=k(n),a=!1;if(n&&!i){if(t)if(k(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??vs(r,t,``)}else for(let e in t)n[e]??vs(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?vs(r,i,``):Ss(e,i,!k(t)&&t?t[i]:void 0,o)||vs(r,i,o)}}else if(i){if(t!==n){let e=r[ms];e&&(n+=`;`+e),r.cssText=n,a=hs.test(n)}}else t&&e.removeAttribute(`style`);us in e&&(e[us]=a?r.display:``,e[ds]&&(r.display=`none`))}var _s=/\s*!important$/;function vs(e,t,n){if(w(n))n.forEach(n=>vs(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=xs(e,t);_s.test(n)?e.setProperty(de(r),n.replace(_s,``),`important`):e[r]=n}}var ys=[`Webkit`,`Moz`,`ms`],bs={};function xs(e,t){let n=bs[t];if(n)return n;let r=j(t);if(r!==`filter`&&r in e)return bs[t]=r;r=fe(r);for(let n=0;n<ys.length;n++){let i=ys[n]+r;if(i in e)return bs[t]=i}return t}function Ss(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&k(r)&&n===r}var Cs=`http://www.w3.org/1999/xlink`;function ws(e,t,n,r,i,a=Oe(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Cs,t.slice(6,t.length)):e.setAttributeNS(Cs,t,n):n==null||a&&!ke(n)?e.removeAttribute(t):e.setAttribute(t,a?``:ee(n)?String(n):n)}function Ts(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Lo(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ke(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Es(e,t,n,r){e.addEventListener(t,n,r)}function Ds(e,t,n,r){e.removeEventListener(t,n,r)}var Os=Symbol(`_vei`);function ks(e,t,n,r,i=null){let a=e[Os]||(e[Os]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=js(t);r?Es(e,n,a[t]=Fs(r,i),s):o&&(Ds(e,n,o,s),a[t]=void 0)}}var As=/(?:Once|Passive|Capture)$/;function js(e){let t;if(As.test(e)){t={};let n;for(;n=e.match(As);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):de(e.slice(2)),t]}var Ms=0,Ns=Promise.resolve(),Ps=()=>Ms||=(Ns.then(()=>Ms=0),Date.now());function Fs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;Pn(Is(e,n.value),t,5,[e])};return n.value=e,n.attached=Ps(),n}function Is(e,t){if(w(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var Ls=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Rs=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?ls(e,r,o):t===`style`?gs(e,n,r):v(t)?y(t)||ks(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):zs(e,t,r,o))?(Ts(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&ws(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Bs(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!k(r)))?Ts(e,j(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),ws(e,t,r,o))};function zs(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Ls(t)&&O(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Ls(t)&&k(n)?!1:t in e}function Bs(e,t){let n=e._def.props;if(!n)return!1;let r=j(t);return Array.isArray(n)?n.some(e=>j(e)===r):Object.keys(n).some(e=>j(e)===r)}var Vs=new WeakMap,Hs=new WeakMap,Us=Symbol(`_moveCb`),Ws=Symbol(`_enterCb`),Gs=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:b({},qo,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=go(),r=vr(),i,a;return si(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!Xs(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(Ks),i.forEach(qs);let r=i.filter(Js);cs(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;es(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Us]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Us]=null,ts(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=N(e),s=Zo(o),c=o.tag||La;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&(i.push(t),kr(t,Er(t,s,r,n)),Vs.set(t,Ys(t.el)))}a=t.default?Ar(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&kr(t,Er(t,s,r,n))}return U(c,null,a)}}});function Ks(e){let t=e.el;t[Us]&&t[Us](),t[Ws]&&t[Ws]()}function qs(e){Hs.set(e,Ys(e.el))}function Js(e){let t=Vs.get(e),n=Hs.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),(!Number.isFinite(o)||o===0)&&(o=1),(!Number.isFinite(s)||s===0)&&(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function Ys(e){let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Xs(e,t,n){let r=e.cloneNode(),i=e[Go];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=as(r);return a.removeChild(r),o}var Zs=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return w(t)?e=>he(t,e):t};function Qs(e){e.target.composing=!0}function $s(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ec=Symbol(`_assign`);function tc(e,t,n){return t&&(e=e.trim()),n&&(e=_e(e)),e}var nc={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ec]=Zs(i);let a=r||i.props&&i.props.type===`number`;Es(e,t?`change`:`input`,t=>{t.target.composing||e[ec](tc(e.value,n,a))}),(n||a)&&Es(e,`change`,()=>{e.value=tc(e.value,n,a)}),t||(Es(e,`compositionstart`,Qs),Es(e,`compositionend`,$s),Es(e,`change`,$s))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ec]=Zs(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?_e(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},rc={deep:!0,created(e,t,n){e[ec]=Zs(n),Es(e,`change`,()=>{let t=e._modelValue,n=cc(e),r=e.checked,i=e[ec];if(w(t)){let e=Me(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(E(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(lc(e,r))})},mounted:ic,beforeUpdate(e,t,n){e[ec]=Zs(n),ic(e,t,n)}};function ic(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(w(t))i=Me(t,r.props.value)>-1;else if(E(t))i=t.has(r.props.value);else{if(t===n)return;i=je(t,lc(e,!0))}e.checked!==i&&(e.checked=i)}var ac={created(e,{value:t},n){e.checked=je(t,n.props.value),e[ec]=Zs(n),Es(e,`change`,()=>{e[ec](cc(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[ec]=Zs(r),t!==n&&(e.checked=je(t,r.props.value))}},oc={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=E(t);Es(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?_e(cc(e)):cc(e));e[ec](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,Wn(()=>{e._assigning=!1})}),e[ec]=Zs(r)},mounted(e,{value:t}){sc(e,t)},beforeUpdate(e,t,n){e[ec]=Zs(n)},updated(e,{value:t}){e._assigning||sc(e,t)}};function sc(e,t){let n=e.multiple,r=w(t);if(!(n&&!r&&!E(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=cc(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=Me(t,o)>-1}else a.selected=t.has(o);else if(je(cc(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function cc(e){return`_value`in e?e._value:e.value}function lc(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var uc={created(e,t,n){fc(e,t,n,null,`created`)},mounted(e,t,n){fc(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){fc(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){fc(e,t,n,r,`updated`)}};function dc(e,t){switch(e){case`SELECT`:return oc;case`TEXTAREA`:return nc;default:switch(t){case`checkbox`:return rc;case`radio`:return ac;default:return nc}}}function fc(e,t,n,r,i){let a=dc(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}var pc=[`ctrl`,`shift`,`alt`,`meta`],mc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>pc.some(n=>e[`${n}Key`]&&!t.includes(n))},hc=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=mc[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},gc={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},_c=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=de(n.key);if(t.some(e=>e===r||gc[e]===r))return e(n)}))},vc=b({patchProp:Rs},Ho),yc,bc=!1;function xc(){return yc=bc?yc:Ta(vc),bc=!0,yc}var Sc=((...e)=>{let t=xc().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=wc(e);if(t)return n(t,!0,Cc(t))},t});function Cc(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function wc(e){return k(e)?document.querySelector(e):e}var Tc=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith(`//`),Ec=/.md((\?|#).*)?$/,Dc=(e,t=`/`)=>Tc(e)||e.startsWith(`/`)&&!e.startsWith(t)&&!Ec.test(e),Oc=e=>/^(https?:)?\/\//.test(e),kc=e=>{if(!e||e.endsWith(`/`))return e;let t=e.replace(/(^|\/)README.md$/i,`$1index.html`);return t.endsWith(`.md`)?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(`.html`)||(t=`${t}.html`),t.endsWith(`/index.html`)&&(t=t.substring(0,t.length-10)),t},Ac=`http://.`,jc=(e,t)=>{if(!e.startsWith(`/`)&&t){let n=t.slice(0,t.lastIndexOf(`/`));return kc(new URL(`${n}/${e}`,Ac).pathname)}return kc(e)},Mc=(e,t)=>{let n=Object.keys(e).sort((e,t)=>{let n=t.split(`/`).length-e.split(`/`).length;return n===0?t.length-e.length:n});for(let e of n)if(t.startsWith(e))return e;return`/`},Nc=(e,t=`/`)=>{let n=e.replace(/^(?:https?:)?\/\/[^/]*/,``);return n.startsWith(t)?`/${n.slice(t.length)}`:n},Pc=/(#|\?)/,Fc=e=>{let[t,...n]=e.split(Pc);return{pathname:t,hashAndQueries:n.join(``)}},Ic=[`link`,`meta`,`script`,`style`,`noscript`,`template`],Lc=[`title`,`base`],Rc=([e,t,n])=>Lc.includes(e)?e:Ic.includes(e)?e===`meta`&&t.name?`${e}.${t.name}`:e===`template`&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([e,t])=>typeof t==`boolean`?t?[e,``]:null:[e,t]).filter(e=>e!=null).sort(([e],[t])=>e.localeCompare(t)),n]):null,zc=e=>{let t=new Set,n=[];return e.forEach(e=>{let r=Rc(e);r&&!t.has(r)&&(t.add(r),n.push(e))}),n},Bc=e=>e.startsWith(`/`)?e:`/${e}`,Vc=e=>e.endsWith(`/`)||e.endsWith(`.html`)?e:`${e}/`,Hc=e=>e.endsWith(`/`)?e.slice(0,-1):e,Uc=e=>e.startsWith(`/`)?e.slice(1):e,Wc=e=>typeof e==`function`,Gc=e=>Object.prototype.toString.call(e)===`[object Object]`,K=e=>typeof e==`string`,Kc=typeof document<`u`;function qc(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Jc(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&qc(e.default)}var q=Object.assign;function Yc(e,t){let n={};for(let r in t){let i=t[r];n[r]=Zc(i)?i.map(e):e(i)}return n}var Xc=()=>{},Zc=Array.isArray;function Qc(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var $c=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),el=Symbol(``);$c.MATCHER_NOT_FOUND,$c.NAVIGATION_GUARD_REDIRECT,$c.NAVIGATION_ABORTED,$c.NAVIGATION_CANCELLED,$c.NAVIGATION_DUPLICATED;function tl(e,t){return q(Error(),{type:e,[el]:!0},t)}function nl(e,t){return e instanceof Error&&el in e&&(t==null||!!(e.type&t))}var rl=Symbol(``),il=Symbol(``),al=Symbol(``),ol=Symbol(``),sl=Symbol(``);function cl(){return L(al)}function ll(e){return L(ol)}var ul=/#/g,dl=/&/g,fl=/\//g,pl=/=/g,ml=/\?/g,hl=/\+/g,gl=/%5B/g,_l=/%5D/g,vl=/%5E/g,yl=/%60/g,bl=/%7B/g,xl=/%7C/g,Sl=/%7D/g,Cl=/%20/g;function wl(e){return e==null?``:encodeURI(``+e).replace(xl,`|`).replace(gl,`[`).replace(_l,`]`)}function Tl(e){return wl(e).replace(bl,`{`).replace(Sl,`}`).replace(vl,`^`)}function El(e){return wl(e).replace(hl,`%2B`).replace(Cl,`+`).replace(ul,`%23`).replace(dl,`%26`).replace(yl,"`").replace(bl,`{`).replace(Sl,`}`).replace(vl,`^`)}function Dl(e){return El(e).replace(pl,`%3D`)}function Ol(e){return wl(e).replace(ul,`%23`).replace(ml,`%3F`)}function kl(e){return Ol(e).replace(fl,`%2F`)}function Al(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var jl=/\/$/,Ml=e=>e.replace(jl,``);function Nl(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Vl(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Al(o)}}function Pl(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Fl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Il(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ll(t.matched[r],n.matched[i])&&Rl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ll(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!zl(e[n],t[n]))return!1;return!0}function zl(e,t){return Zc(e)?Bl(e,t):Zc(t)?Bl(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Bl(e,t){return Zc(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Vl(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Hl={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},Ul=function(e){return e.pop=`pop`,e.push=`push`,e}({}),Wl=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function Gl(e){if(!e)if(Kc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Ml(e)}var Kl=/^[^#]+#/;function ql(e,t){return e.replace(Kl,`#`)+t}function Jl(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Yl=()=>({left:window.scrollX,top:window.scrollY});function Xl(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Jl(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Zl(e,t){return(history.state?history.state.position-t:-1)+e}var Ql=new Map;function $l(e,t){Ql.set(e,t)}function eu(e){let t=Ql.get(e);return Ql.delete(e),t}function tu(e){return typeof e==`string`||e&&typeof e==`object`}function nu(e){return typeof e==`string`||typeof e==`symbol`}function ru(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(hl,` `),i=r.indexOf(`=`),a=Al(i<0?r:r.slice(0,i)),o=i<0?null:Al(r.slice(i+1));if(a in t){let e=t[a];Zc(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function iu(e){let t=``;for(let n in e){let r=e[n];if(n=Dl(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Zc(r)?r.map(e=>e&&El(e)):[r&&El(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function au(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Zc(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function ou(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function su(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(tl($c.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):tu(e)?c(tl($c.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function cu(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(qc(s)){let c=(s.__vccOpts||s)[t];c&&a.push(su(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Jc(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&su(c,n,r,o,e,i)()}))}}return a}function lu(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Ll(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Ll(e,s))||i.push(s))}return[n,r,i]}var uu=()=>location.protocol+`//`+location.host;function du(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Fl(n,``)}return Fl(n,e)+r+i}function fu(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=du(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:Ul.pop,direction:u?u>0?Wl.forward:Wl.back:Wl.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(q({},e.state,{scroll:Yl()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function pu(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Yl():null}}function mu(e){let{history:t,location:n}=window,r={value:du(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:uu()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,q({},t.state,pu(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=q({},i.value,t.state,{forward:e,scroll:Yl()});a(o.current,o,!0),a(e,q({},pu(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function hu(e){e=Gl(e);let t=mu(e),n=fu(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=q({location:``,base:e,go:r,createHref:ql.bind(null,e)},t,n);return Object.defineProperty(i,`location`,{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,`state`,{enumerable:!0,get:()=>t.state.value}),i}var gu=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),_u=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(_u||{}),vu={type:gu.Static,value:``},yu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e===`/`)return[[vu]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=_u.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===_u.Static?a.push({type:gu.Static,value:l}):n===_u.Param||n===_u.ParamRegExp||n===_u.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:gu.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case _u.Static:c===`\\`?(r=n,n=_u.EscapeNext):c===`/`?(l&&d(),o()):c===`:`?(d(),n=_u.Param):f();break;case _u.EscapeNext:f(),n=r;break;case _u.Param:c===`(`?n=_u.ParamRegExp:yu.test(c)?f():(d(),n=_u.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case _u.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=_u.ParamRegExpEnd:u+=c;break;case _u.ParamRegExpEnd:d(),n=_u.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}return n===_u.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var xu=`[^/]+?`,Su={sensitive:!1,strict:!1,start:!0,end:!0},Cu=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}(Cu||{}),wu=/[.+*?^${}()[\]/\\]/g;function Tu(e,t){let n=q({},Su,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[Cu.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=Cu.Segment+(n.sensitive?Cu.BonusCaseSensitive:0);if(o.type===gu.Static)r||(i+=`/`),i+=o.value.replace(wu,`\\$&`),s+=Cu.Static;else if(o.type===gu.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||xu;if(u!==xu){s+=Cu.BonusCustomRegExp;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=Cu.Dynamic,c&&(s+=Cu.BonusOptional),n&&(s+=Cu.BonusRepeatable),u===`.*`&&(s+=Cu.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=Cu.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===gu.Static)n+=e.value;else if(e.type===gu.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Zc(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Zc(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Eu(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Cu.Static+Cu.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Cu.Static+Cu.Segment?1:-1:0}function Du(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Eu(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Ou(r))return 1;if(Ou(i))return-1}return i.length-r.length}function Ou(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var ku={strict:!1,end:!0,sensitive:!1};function Au(e,t,n){let r=q(Tu(bu(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function ju(e,t){let n=[],r=new Map;t=Qc(ku,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Nu(e);s.aliasOf=r&&r.record;let l=Qc(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Nu(q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Au(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Fu(d)&&o(e.name)),zu(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Xc}function o(e){if(nu(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Lu(e,n);n.splice(t,0,e),e.record.name&&!Fu(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw tl($c.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=q(Mu(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Mu(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw tl($c.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Iu(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Mu(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Nu(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Pu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,`mods`,{value:{}}),t}function Pu(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Fu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Iu(e){return e.reduce((e,t)=>q(e,t.meta),{})}function Lu(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Du(e,t[i])<0?r=i:n=i+1}let i=Ru(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Ru(e){let t=e;for(;t=t.parent;)if(zu(t)&&Du(e,t)===0)return t}function zu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Bu(e){let t=L(al),n=L(ol),r=W(()=>{let n=hn(e.to);return t.resolve(n)}),i=W(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Ll.bind(null,i));if(o>-1)return o;let s=Gu(e[t-2]);return t>1&&Gu(i)===s&&a[a.length-1].path!==s?a.findIndex(Ll.bind(null,e[t-2])):o}),a=W(()=>i.value>-1&&Wu(n.params,r.value.params)),o=W(()=>i.value>-1&&i.value===n.matched.length-1&&Rl(n.params,r.value.params));function s(n={}){if(Uu(n)){let n=t[hn(e.replace)?`replace`:`push`](hn(e.to)).catch(Xc);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:W(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Vu(e){return e.length===1?e[0]:e}var Hu=z({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Bu,setup(e,{slots:t}){let n=$t(Bu(e)),{options:r}=L(al),i=W(()=>({[Ku(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Ku(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Vu(t.default(n));return e.custom?r:G(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wu(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Zc(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Gu(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Ku=(e,t,n)=>e??t??n,qu=z({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=L(sl),i=W(()=>e.route||r.value),a=L(il,0),o=W(()=>{let e=hn(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=W(()=>i.value.matched[o.value]);ar(il,W(()=>o.value+1)),ar(rl,s),ar(sl,i);let c=P();return R(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Ll(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Ju(n.default,{Component:l,route:r});let u=o.props[a],d=G(l,q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Ju(n.default,{Component:d,route:r})||d}}});function Ju(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Yu=qu;function Xu(e){let t=ju(e.routes,e),n=e.parseQuery||ru,r=e.stringifyQuery||iu,i=e.history,a=ou(),o=ou(),s=ou(),c=F(Hl),l=Hl;Kc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Yc.bind(null,e=>``+e),d=Yc.bind(null,kl),f=Yc.bind(null,Al);function p(e,n){let r,i;return nu(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=q({},a||c.value),typeof e==`string`){let r=Nl(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return q(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=q({},e,{path:Nl(n,e.path,a.path).path});else{let t=q({},e.params);for(let e in t)t[e]??delete t[e];o=q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Pl(r,q({},e,{hash:Tl(l),path:s.path})),m=i.createHref(p);return q({fullPath:p,hash:l,query:r===iu?au(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Nl(n,e,c.value.path):q({},e)}function y(e,t){if(l!==e)return tl($c.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(q(v(u),{state:typeof u==`object`?q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Il(r,i,n)&&(f=tl($c.NAVIGATION_DUPLICATED,{to:d,from:i}),oe(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>nl(e)?nl(e,$c.NAVIGATION_GUARD_REDIRECT)?e:ae(e):re(e,d,i)).then(e=>{if(e){if(nl(e,$c.NAVIGATION_GUARD_REDIRECT))return C(q({replace:s},v(e.to),{state:typeof e.to==`object`?q({},a,e.to.state):a,force:o}),t||d)}else e=O(d,i,!0,s,a);return D(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=le.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=lu(e,t);n=cu(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(su(r,e,t))});let c=w.bind(null,e,t);return n.push(c),ue(n).then(()=>{n=[];for(let r of a.list())n.push(su(r,e,t));return n.push(c),ue(n)}).then(()=>{n=cu(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(su(r,e,t))});return n.push(c),ue(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Zc(r.beforeEnter))for(let i of r.beforeEnter)n.push(su(i,e,t));else n.push(su(r.beforeEnter,e,t));return n.push(c),ue(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=cu(s,`beforeRouteEnter`,e,t,T),n.push(c),ue(n))).then(()=>{n=[];for(let r of o.list())n.push(su(r,e,t));return n.push(c),ue(n)}).catch(e=>nl(e,$c.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function D(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function O(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Hl,l=Kc?history.state:{};n&&(r||s?i.replace(e.fullPath,q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,oe(e,t,n,s),ae()}let k;function ee(){k||=i.listen((e,t,n)=>{if(!j.listening)return;let r=_(e),a=S(r,j.currentRoute.value);if(a){C(q(a,{replace:!0,force:!0}),r).catch(Xc);return}l=r;let o=c.value;Kc&&$l(Zl(o.fullPath,n.delta),Yl()),E(r,o).catch(e=>nl(e,$c.NAVIGATION_ABORTED|$c.NAVIGATION_CANCELLED)?e:nl(e,$c.NAVIGATION_GUARD_REDIRECT)?(C(q(v(e.to),{force:!0}),r).then(e=>{nl(e,$c.NAVIGATION_ABORTED|$c.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===Ul.pop&&i.go(-1,!1)}).catch(Xc),Promise.reject()):(n.delta&&i.go(-n.delta,!1),re(e,r,o))).then(e=>{e||=O(r,o,!1),e&&(n.delta&&!nl(e,$c.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===Ul.pop&&nl(e,$c.NAVIGATION_ABORTED|$c.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),D(r,o,e)}).catch(Xc)})}let A=ou(),te=ou(),ne;function re(e,t,n){ae(e);let r=te.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ie(){return ne&&c.value!==Hl?Promise.resolve():new Promise((e,t)=>{A.add([e,t])})}function ae(e){return ne||(ne=!e,ee(),A.list().forEach(([t,n])=>e?n(e):t()),A.reset()),e}function oe(t,n,r,i){let{scrollBehavior:a}=e;if(!Kc||!a)return Promise.resolve();let o=!r&&eu(Zl(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Wn().then(()=>a(t,n,o)).then(e=>e&&Xl(e)).catch(e=>re(e,t,n))}let se=e=>i.go(e),ce,le=new Set,j={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:te.add,isReady:ie,install(e){e.component(`RouterLink`,Hu),e.component(`RouterView`,Yu),e.config.globalProperties.$router=j,Object.defineProperty(e.config.globalProperties,`$route`,{enumerable:!0,get:()=>hn(c)}),Kc&&!ce&&c.value===Hl&&(ce=!0,b(i.location).catch(e=>{}));let t={};for(let e in Hl)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(al,j),e.provide(ol,en(t)),e.provide(sl,c);let n=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(l=Hl,k&&k(),k=null,c.value=Hl,ce=!1,ne=!1),n()}}};function ue(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return j}var Zu=`modulepreload`,Qu=function(e){return`/`+e},$u={},J=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Qu(t,n),t in $u)return;$u[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Zu,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ed=JSON.parse(`{}`),td=Object.fromEntries([[`/`,{loader:()=>J(()=>import(`./README-ChU6PeU8.js`),[]),meta:{title:`首页`,icon:`house`}}],[`/intro.html`,{loader:()=>J(()=>import(`./intro-Dd7UhQLR.js`),[]),meta:{date:1779337422e3,excerpt:`
<h2>关于这里</h2>
<p><strong>先说结论：</strong> 这里是一个记录技术问题、整理解决思路、沉淀长期经验的小地方 ✨</p>
<p>如果要稍微展开一点来说，这个博客写的其实不只是 <strong>“答案本身”</strong>，更重要的是 <strong>“答案是怎么来的”</strong>。某种程度上，真正有价值的内容，往往不是最后那一段可以直接复制的代码，而是问题为什么会出现、排查为什么会卡住、思路为什么会拐弯，以及最后为什么会选择现在这个方案 🧩</p>
<p><strong>简单来说，</strong> 这里想记录的，不只是结果，还有结果背后的路径。因为很多时候，单独留下一个结论，往往很快就会失去上下文；但如果把 <strong>“为什么这样做”</strong>、<strong>“为什么不是另一种做法”</strong> 也一起写下来，那么这些内容才更有可能在下一次继续发挥作用 🚀</p>`,readingTime:{minutes:2.97,words:891},title:`关于`,icon:`circle-info`,type:`article`}}],[`/collection/`,{loader:()=>J(()=>import(`./README-Ccs1vCZU.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.04,words:13},title:`分类`,icon:`grip`,type:`article`}}],[`/collection/flash.html`,{loader:()=>J(()=>import(`./flash-ShRDKbYH.js`),[]),meta:{date:1565136e6,category:[`Android`],tag:[`刷机`],excerpt:`<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p><code>刷机前先备份数据</code> ， <code>刷机前先备份数据</code> ， <code>刷机前先备份数据</code> 。</p>
</div>
<h2>1️⃣ 解锁 BL (Bootloader)</h2>
<ul>
<li>Android 调试平台：<a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn" target="_blank" rel="noopener noreferrer">platform-tools</a></li>
<li>驱动：<a href="https://dl.google.com/android/repository/usb_driver_r13-windows.zip?hl=zh-cn" target="_blank" rel="noopener noreferrer">usb_driver_r13-windows</a></li>
<li>一加：<a href="https://bbsstatic.oneplus.com/public/apk/%E6%B7%B1%E5%BA%A6%E6%B5%8B%E8%AF%95.apk" target="_blank" rel="noopener noreferrer">深度测试 APK</a></li>
<li>小米：<a href="https://www.miui.com/unlock/index.html" target="_blank" rel="noopener noreferrer">小米解锁工具</a></li>
</ul>`,readingTime:{minutes:1.88,words:565},title:`Android 刷机`,icon:`robot`,type:`article`}}],[`/one-click/`,{loader:()=>J(()=>import(`./README-C5bTZZD6.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.05,words:16},title:`工具脚本`,icon:`computer-mouse`,type:`article`}}],[`/one-click/intelij.html`,{loader:()=>J(()=>import(`./intelij-DKq_sA5N.js`),[]),meta:{date:16693344e5,tag:[`激活`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此插件是<a href="https://zhile.io/2025/10/31/ja-netfilter-for-java25.html" target="_blank" rel="noopener noreferrer"> Neo</a> 大佬开发的 JetBrains 激活工具 <code>ja-netfilter</code></p>
</div>
<h2>一键激活（Plugin 需手动）</h2>
<p>下载安装 JetBrains 软件后成功运行并退出，以管理员运行 PowerShell</p>`,readingTime:{minutes:.64,words:192},title:`JetBrains 系列激活`,icon:`mug-saucer`,type:`article`}}],[`/one-click/mas.html`,{loader:()=>J(()=>import(`./mas-CdGrKu3x.js`),[]),meta:{date:16962912e5,category:[`Windows`],tag:[`激活`],excerpt:`<h2>在线激活</h2>
<p>以管理员运行 Powershell 执行以下代码</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">irm https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">get.activated.win | iex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.2,words:60},title:`微软激活工具`,icon:`fa-brands fa-microsoft`,type:`article`}}],[`/popular/`,{loader:()=>J(()=>import(`./README-C4c7hv5k.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.04,words:13},title:`随记`,icon:`fire`,type:`article`}}],[`/popular/archinstall.html`,{loader:()=>J(()=>import(`./archinstall-Ra8uuvpd.js`),[]),meta:{date:17683488e5,tag:[`arch`],excerpt:`
<blockquote>
<p>记录使用  <code>archinstall</code>  脚本速通安装 Arch Linux 的过程。建议安装前参考 <a href="https://wiki.archlinux.org/title/Installation_guide" target="_blank" rel="noopener noreferrer">Arch Wiki Installation Guide</a> 以了解基础知识。</p>
</blockquote>
<p>启动 ISO 镜像后，系统会自动登录。在终端输入  <code>archinstall</code>  并回车，启动安装脚本。</p>`,readingTime:{minutes:3.16,words:948},title:`Arch Linux（archinstall） 快速安装`,icon:`fa-brands fa-linux`,type:`article`}}],[`/popular/archlinux.html`,{loader:()=>J(()=>import(`./archlinux-BA8dhAqR.js`),[]),meta:{date:17683488e5,tag:[`KDE`,`arch`],excerpt:`<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果装在虚拟机，安装文件拖拽和复制粘贴</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Sy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> open-vm-tools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gtkmm3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vmtoolsd.service</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vmware-vmblock-fuse.service</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 更新</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Syu</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 清理孤包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Rs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Qtdq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:7.21,words:2164},title:`Arch Linux（KDE桌面） 快速上手`,icon:`fa-brands fa-linux`,type:`article`}}],[`/popular/openwrt.html`,{loader:()=>J(()=>import(`./openwrt-D6L4VVpq.js`),[]),meta:{date:1689984e6,tag:[`路由器`,`ImmortalWrt`,`NAS`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>ImmortalWrt 作为主路由的使用日常</p>
</div>
<h2>从 U 盘写入磁盘</h2>
<p><code>nvme0n1</code>  和  <code>sda</code>  是我的磁盘分区，可以使用  <code>fdisk -l</code>  先查看磁盘信息</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">umount</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/nvme0n1p</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 2></span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">/dev/null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">parted</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /dev/nvme0n1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> mklabel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gpt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> if=/dev/sda</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> of=/dev/nvme0n1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> bs=1M</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> conv=fsync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;) &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">DD_PID</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">$!</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">\\</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -USR1</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $DD_PID</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">>/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">dev</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> sleep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">wait</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $DD_PID</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> &#x26;&#x26; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sync</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:.79,words:238},title:`OpenWRT 使用`,icon:`cog`,type:`article`}}],[`/popular/proxyclient.html`,{loader:()=>J(()=>import(`./proxyclient-DvjaZfHu.js`),[]),meta:{date:1565136e6,category:[`收集`],tag:[`代理`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>整理网上常见的代理软件以及一些代理常用的知识点。</p>
</div>

<h1>VPS 评测网站</h1>
<p><a href="https://digvps.com/review" target="_blank" rel="noopener noreferrer">https://digvps.com/review</a></p>
<h1>协议说明</h1>
<ul>
<li>vless+reality：隐匿性极佳，最推荐</li>
<li>hysteria2：发包方式激进，性能非常好，高峰期速度慢。</li>
<li>shadowsocks：现在能被精确识别的协议。</li>
<li>socks5/http：内网使用，明文传输。</li>
</ul>`,readingTime:{minutes:.91,words:272},title:`代理软件搜集`,icon:`paper-plane`,type:`article`}}],[`/collection/linux/`,{loader:()=>J(()=>import(`./README-B2mpBesX.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.05,words:16},title:`Linux 相关`,icon:`bars-staggered`,type:`article`}}],[`/collection/windows/`,{loader:()=>J(()=>import(`./README-Da2mY8se.js`),[]),meta:{date:1779337422e3,category:[`Windows`],tag:[`nvm`,`python`,`adb`,`java`,`cygwin`,`docker`,`etcd`,`go`,`mongodb`,`mysql`,`php`,`postgresql`,`rabbitmq`,`redis`,`ruby`,`rust`,`wsl2`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>重装 Windows 系统后需要安装一系列软件，配置时很麻烦，故而整理部分，方便参考。</p>
</div>
`,readingTime:{minutes:.23,words:70},title:`Windows 设置`,icon:`bars-staggered`,type:`article`}}],[`/collection/windows/reset.html`,{loader:()=>J(()=>import(`./reset-BZOP6EZK.js`),[]),meta:{date:1689984e6,excerpt:`<h2>重装前的准备（重要）（重要）（重要）</h2>
<ul>
<li>完整备份个人文件（外接盘 / 云盘）。</li>
<li>记录重要软件的序列号 / 登录凭证（如 Adobe、Office 等）。</li>
<li>确认 Microsoft 账户是否与数字许可证关联（Settings → Activation）。</li>
<li>取消 BitLocker 或暂时停用加密；如果使用硬盘加密，先解密。</li>
<li>准备好<a href="https://sdi-tool.org/" target="_blank" rel="noopener noreferrer">驱动</a>（网卡 / 显卡），<mark><strong>尤其是没有网络驱动可能导致安装后无法联网的情况</strong></mark>，可备用驱动 U 盘。</li>
<li>如果有 RAID 或 NVMe 特殊驱动，提前下载并放入安装 U 盘中。</li>
<li>确保有稳定电源（笔记本接电源），避免安装中断。</li>
</ul>`,readingTime:{minutes:1.91,words:573},title:`重装系统`,icon:`fa-brands fa-windows`,type:`article`}}],[`/collection/windows/system-build.html`,{loader:()=>J(()=>import(`./system-build-BGFxzpzC.js`),[]),meta:{date:1691712e6,excerpt:`<h2>一：安装驱动</h2>
<p>建议重装完成后离线安装驱动，需要<strong>提前下载</strong>好电脑所需要的驱动。</p>
<ul>
<li><strong>芯片组驱动（主板 / 笔记本官网）</strong></li>
<li><strong>显卡驱动（<a href="https://www.nvidia.com/en-us/geforce/drivers/" target="_blank" rel="noopener noreferrer">NVIDIA</a> / <a href="https://www.amd.com/en/support/download/drivers.html" target="_blank" rel="noopener noreferrer">AMD</a> / <a href="https://www.intel.com/content/www/us/en/download-center/home.html" target="_blank" rel="noopener noreferrer">Intel</a> 官网）</strong></li>
<li><strong>下载全量的 <a href="https://sdi-tool.org/" target="_blank" rel="noopener noreferrer">Snappy Driver Installer</a></strong></li>
</ul>`,readingTime:{minutes:7.79,words:2338},title:`重装系统后的配置流程`,icon:`fa-brands fa-windows`,type:`article`}}],[`/popular/website/`,{loader:()=>J(()=>import(`./README-DfrkTvi9.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.06,words:18},title:`网站收藏`,icon:`globe`,type:`article`}}],[`/popular/website/communities.html`,{loader:()=>J(()=>import(`./communities-pLBYo1u1.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.26,words:77},title:`社区 / 论坛`,icon:`fa-solid fa-comments`,order:7,type:`article`}}],[`/popular/website/design-colors.html`,{loader:()=>J(()=>import(`./design-colors-BRwBlX4O.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:80},title:`设计配色`,icon:`palette`,order:3,type:`article`}}],[`/popular/website/github-tools.html`,{loader:()=>J(()=>import(`./github-tools-i-UwquIh.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>系统工具 / 增强</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>开发工具 / 文档</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>安全 / 渗透</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网络 / 路由</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:4.26,words:1279},title:`GitHub 项目 / 开发工具`,icon:`fa-brands fa-github`,order:9,type:`article`}}],[`/popular/website/icon-fonts.html`,{loader:()=>J(()=>import(`./icon-fonts-Dv0s851v.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.47,words:142},title:`图标 / 字体`,icon:`fa-solid fa-font`,order:4,type:`article`}}],[`/popular/website/image-tools.html`,{loader:()=>J(()=>import(`./image-tools-D_wm3Ctc.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.46,words:137},title:`图片处理`,icon:`fa-solid fa-image`,order:2,type:`article`}}],[`/popular/website/network-security.html`,{loader:()=>J(()=>import(`./network-security-DNQHId1n.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.51,words:152},title:`网络工具 / 安全`,icon:`fa-solid fa-shield-halved`,order:6,type:`article`}}],[`/popular/website/online-tools.html`,{loader:()=>J(()=>import(`./online-tools-C6kKiTdy.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:71},title:`在线工具`,icon:`fa-solid fa-screwdriver-wrench`,order:1,type:`article`}}],[`/popular/website/others.html`,{loader:()=>J(()=>import(`./others-CohYTKjF.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:1.98,words:593},title:`其他`,icon:`fa-solid fa-globe`,order:8,type:`article`}}],[`/popular/website/resource-downloads.html`,{loader:()=>J(()=>import(`./resource-downloads-DgfdSHQa.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.78,words:234},title:`电子书 / 资源下载`,icon:`fa-solid fa-book`,order:5,type:`article`}}],[`/collection/linux/devkit/`,{loader:()=>J(()=>import(`./README-6GKEOZAt.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.06,words:19},title:`Linux 服务端运维`,icon:`bars-staggered`,type:`article`}}],[`/collection/linux/devkit/java.html`,{loader:()=>J(()=>import(`./java-u4fXZgdN.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>下面默认以 Debian 系服务器为例，示例应用名统一写成  <code>demo</code> 。真正落地时，把它替换成自己的服务名即可。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>Spring Boot / Spring Cloud 的  <code>jar</code>  包部署</li>
<li>普通 Java Web 服务</li>
<li>需要  <code>systemd</code>  托管、 <code>Nginx</code>  反代、支持回滚的生产环境</li>
</ul>`,readingTime:{minutes:5.64,words:1691},title:`Java 部署`,icon:`fa-brands fa-java`,type:`article`}}],[`/collection/linux/devkit/linux-server-optimization.html`,{loader:()=>J(()=>import(`./linux-server-optimization-B-QKFvRN.js`),[]),meta:{date:17792352e5,tag:[`Linux`,`VPS`,`Debian`,`安全`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Linux 不是 “怎么一键优化”，而是 “先理解系统，再决定要不要动它”。</p>
</div>
<h3>Linux 初始化配置</h3>
<p>新机器拿到手，第一步通常不是先配业务，而是先把系统更新到最新状态。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> full-upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> autoremove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:12.28,words:3684},title:`Linux 服务器部署`,icon:`fa-brands fa-linux`,type:`article`}}],[`/collection/linux/devkit/mysql.html`,{loader:()=>J(()=>import(`./mysql-5PRwVVEw.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这篇默认以 Debian 上常见的  <code>MariaDB / default-mysql-server</code>  为主线，同时补充 Oracle MySQL 的差异。真正上线前，先确认项目到底要的是 “兼容 MySQL 协议”，还是 “必须 Oracle MySQL 8”。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>Debian 系服务器上的 MySQL / MariaDB 安装和运维</li>
<li>单机应用、本机数据库、内网数据库</li>
<li>需要建库、建用户、备份、恢复、日志排查的生产环境</li>
</ul>`,readingTime:{minutes:4.45,words:1336},title:`MySQL 安装`,icon:`fa-solid fa-database`,type:`article`}}],[`/collection/linux/devkit/nginx.html`,{loader:()=>J(()=>import(`./nginx-CgD7hUmN.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这篇文档默认以 Debian 系服务器为例，重点讲日常最常见的 Nginx 运维方式，配置该怎么理解、怎么改、怎么上线。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>纯静态站点托管</li>
<li>SPA 前端站点</li>
<li>反向代理 Java / Python / Node 服务</li>
<li>HTTPS、跳转、上传、日志这类日常运维配置</li>
</ul>
<h2>二、安装与目录结构</h2>`,readingTime:{minutes:5.3,words:1589},title:`Nginx 常用配置`,icon:`fa-solid fa-server`,type:`article`}}],[`/collection/linux/devkit/python.html`,{loader:()=>J(()=>import(`./python-BtLf3frb.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>下面默认以 Debian 系服务器为例，示例项目名统一写成  <code>demo</code> 。如果用的是 Django、Flask、FastAPI，只需要替换启动命令即可。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>Django / Flask / FastAPI 的生产部署</li>
<li>使用  <code>venv</code>  管理依赖</li>
<li>使用  <code>Gunicorn</code>  或  <code>Uvicorn</code>  对外提供服务</li>
<li>需要  <code>Nginx</code> 、 <code>systemd</code> 、回滚和日志排查</li>
</ul>`,readingTime:{minutes:4.12,words:1237},title:`Python 部署`,icon:`fa-brands fa-python`,type:`article`}}],[`/collection/linux/devkit/web.html`,{loader:()=>J(()=>import(`./web-DO1YzN1-.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这里把前端项目分成三类来看：纯静态托管、SSR / Node 常驻型前端、只负责构建的前端机器。不要把它们混成一种运维方式。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>纯静态站点托管</li>
<li>Next.js/ Nuxt / Remix 这类 SSR 前端</li>
<li>前端构建机、打包机</li>
</ul>
<h2>二、机器初始化</h2>
<p>先把系统和基础工具装好：</p>`,readingTime:{minutes:4.6,words:1379},title:`Web 部署`,icon:`globe`,type:`article`}}],[`/collection/windows/devkit/`,{loader:()=>J(()=>import(`./README-DKIpFDrS.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.07,words:20},title:`Windows 开发环境配置`,icon:`bars-staggered`,type:`article`}}],[`/collection/windows/devkit/adb.html`,{loader:()=>J(()=>import(`./adb-DA06la1Y.js`),[]),meta:{date:1779337422e3,excerpt:`<h2><strong>一、下载安装 ADB &amp; Fastboot</strong></h2>
<ol>
<li>下载官方 <strong>SDK Platform Tools</strong>（包含 adb 和 fastboot）：
<ul>
<li>官网：<a href="https://developer.android.com/studio/releases/platform-tools" target="_blank" rel="noopener noreferrer">https://developer.android.com/studio/releases/platform-tools</a></li>
</ul>
</li>
<li>下载 Windows 压缩包  <code>.zip</code>  → 解压到目录，例如：</li>
</ol>`,readingTime:{minutes:1.13,words:340},title:`ADB`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/cygwin.html`,{loader:()=>J(()=>import(`./cygwin-GfkEwOvH.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Cygwin</h2>
<ol>
<li>下载：访问 <a href="https://cygwin.com/install.html%EF%BC%8C%E4%B8%8B%E8%BD%BD" target="_blank" rel="noopener noreferrer">https://cygwin.com/install.html，下载</a>  <code>setup-x86_64.exe</code> （64 位）。</li>
<li>运行安装程序（建议以管理员身份运行）：
<ul>
<li>选择 <strong>Install from Internet</strong>。</li>
<li>Root Directory（安装路径）示例： <code>C:\\cygwin64</code> 。</li>
<li>Local Package Directory：随意（临时缓存）。</li>
<li>选择一个镜像站（国内可选阿里 / 清华镜像）。</li>
<li>在 package 选择界面按需勾选（见下一步）→ 点击 Next 安装完成。</li>
</ul>
</li>
</ol>`,readingTime:{minutes:1.42,words:426},title:`Cygwin`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/docker.html`,{loader:()=>J(()=>import(`./docker-CC-f8zyH.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、前置条件</h2>
<ul>
<li>Windows 版本与虚拟化：推荐 Windows 11 或更新的 Windows 10，确保在 BIOS/UEFI 中开启 <strong>Virtualization</strong>（VT-x/AMD-V）。关于系统要求与授权信息见官方文档。</li>
<li>Docker Desktop 推荐使用 <strong>WSL 2 backend</strong>（Windows Home 支持 WSL2；若使用 Pro/Enterprise 可选择 Hyper-V）。如需用 WSL2，请先安装 / 启用 WSL2。</li>
</ul>
<h2>二、启用 WSL2（如果还没启）</h2>`,readingTime:{minutes:1.74,words:522},title:`Docker`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/etcd.html`,{loader:()=>J(()=>import(`./etcd-D0Vdjnhs.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 etcd</h2>
<ul>
<li>官网：<a href="https://github.com/etcd-io/etcd/releases/" target="_blank" rel="noopener noreferrer">https://github.com/etcd-io/etcd/releases/</a></li>
<li>GitHub Release 下载 Windows 64-bit zip，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>etcd-v3.6.7-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.55,words:164},title:`etcd`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/go.html`,{loader:()=>J(()=>import(`./go-DGodzc6F.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Go</h2>
<ul>
<li>
<p>官网：<a href="https://go.dev/dl/" target="_blank" rel="noopener noreferrer">https://go.dev/dl/</a></p>
</li>
<li>
<p>下载： <code>go1.xx.x.windows-amd64.msi</code></p>
</li>
<li>
<p>双击安装，一路 Next</p>
</li>
<li>
<p>默认安装路径：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\Go</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>`,readingTime:{minutes:.44,words:131},title:`Go`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/java.html`,{loader:()=>J(()=>import(`./java-CiIV3hdF.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 JDK</h2>
<ul>
<li>
<p>官网：<a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">https://www.oracle.com/java/technologies/downloads/</a></p>
<ul>
<li>或：<strong>OpenJDK（Temurin）</strong><br>
<a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">https://adoptium.net/</a></li>
</ul>
</li>
<li>
<p>下载 <strong>Windows x64 Installer (.msi)</strong></p>
</li>
<li>
<p>双击安装，一路 Next</p>
</li>
<li>
<p>安装路径示例：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\Java\\jdk-17</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>`,readingTime:{minutes:.37,words:112},title:`Java`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/mongodb.html`,{loader:()=>J(()=>import(`./mongodb-D1fjZHL1.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 MongoDB</h2>
<ul>
<li>官网：<a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/try/download/community</a></li>
<li>下载 <strong>Windows 64-bit MSI</strong></li>
<li>双击安装 → 选择 <strong>Complete</strong></li>
<li>默认安装路径：</li>
</ul>`,readingTime:{minutes:.57,words:171},title:`MongoDB`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/mysql.html`,{loader:()=>J(()=>import(`./mysql-Cn6bfhOl.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 MySQL</h2>
<ul>
<li>官网：<a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql/</a></li>
<li>下载 <strong>Windows (MySQL Installer)</strong></li>
<li>双击安装 → 选择 <strong>Developer Default</strong> 或 <strong>Server only</strong></li>
<li>默认安装路径：</li>
</ul>`,readingTime:{minutes:.58,words:173},title:`MySQL`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/nvm.html`,{loader:()=>J(()=>import(`./nvm-CRR67DCm.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 NVM for Windows</h2>
<ul>
<li>
<p>GitHub：<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">https://github.com/coreybutler/nvm-windows/releases</a></p>
</li>
<li>
<p>下载： <code>nvm-setup.exe</code></p>
</li>
<li>
<p>双击安装，一路 Next</p>
</li>
<li>
<p>默认安装路径即可：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\nvm</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>`,readingTime:{minutes:.6,words:180},title:`NVM(Node)`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/php.html`,{loader:()=>J(()=>import(`./php-Yryxis7y.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 PHP</h2>
<ul>
<li>官网：<a href="https://www.php.net/downloads" target="_blank" rel="noopener noreferrer">https://www.php.net/downloads</a></li>
<li>下载 <strong>Windows Thread Safe 版本的 ZIP</strong>（推荐 x64）</li>
<li>解压到路径，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\php</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.39,words:118},title:`PHP`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/postgresql.html`,{loader:()=>J(()=>import(`./postgresql-2hepFvzQ.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 PostgreSQL</h2>
<ul>
<li>官网：<a href="https://www.postgresql.org/download/windows/" target="_blank" rel="noopener noreferrer">https://www.postgresql.org/download/windows/</a></li>
<li>下载 <strong>PostgreSQL Installer</strong></li>
<li>双击安装 → 选择默认路径：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\PostgreSQL\\16</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.54,words:163},title:`PostgreSQL`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/python.html`,{loader:()=>J(()=>import(`./python-BoWDLGso.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Python</h2>
<ul>
<li>官网：<a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">https://www.python.org/downloads/</a></li>
<li>下载 <strong>Python 3.x (Windows installer 64-bit)</strong></li>
<li>双击安装<br>
<strong>勾选  <code>Add Python to PATH</code> </strong><br>
 再点击 <strong>Install Now</strong></li>
</ul>`,readingTime:{minutes:.61,words:182},title:`Python`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/rabbitmq.html`,{loader:()=>J(()=>import(`./rabbitmq-drc3RXhS.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Erlang 与 RabbitMQ</h2>
<ol>
<li>
<p><strong>Erlang OTP（必需）</strong></p>
<ul>
<li>
<p>官网：<a href="https://www.erlang.org/downloads" target="_blank" rel="noopener noreferrer">https://www.erlang.org/downloads</a></p>
</li>
<li>
<p>下载 Windows 64-bit 安装包 → 安装，记下路径，例如：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\erl-25.3</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>RabbitMQ</strong></p>
<ul>
<li>
<p>官网：<a href="https://www.rabbitmq.com/install-windows.html" target="_blank" rel="noopener noreferrer">https://www.rabbitmq.com/install-windows.html</a></p>
</li>
<li>
<p>下载 <strong>RabbitMQ Installer (.exe)</strong> → 安装，默认路径：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\RabbitMQ Server\\rabbitmq_server-3.12.x</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>`,readingTime:{minutes:.7,words:211},title:`RabbitMQ`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/redis.html`,{loader:()=>J(()=>import(`./redis-Cl_Y6bmj.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Redis</h2>
<ul>
<li>推荐两个 Windows 友好的版本：
<ul>
<li>社区维护的二进制（tporadowski 编译）：GitHub releases（解压运行）。</li>
<li>商业 / 企业级可选：<strong>Memurai</strong>（兼容 Redis 协议）。</li>
</ul>
</li>
<li>下载并解压到目录，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Redis</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:1.22,words:367},title:`Redis`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/ruby.html`,{loader:()=>J(()=>import(`./ruby-hlwE_QfS.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Ruby</h2>
<ul>
<li>官网：https <a href="https://www.ruby-lang.org/en/downloads/" target="_blank" rel="noopener noreferrer">https://www.ruby-lang.org/en/downloads/</a></li>
<li>Windows 推荐下载 <strong>Ruby+Devkit 安装包</strong>（带开发工具）</li>
<li>双击安装，选择默认路径，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Ruby31-x64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.56,words:169},title:`Ruby`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/rust.html`,{loader:()=>J(()=>import(`./rust-BtVGqRHC.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、下载安装 Rust</h2>
<ul>
<li>官网：<a href="https://www.rust-lang.org/tools/install" target="_blank" rel="noopener noreferrer">https://www.rust-lang.org/tools/install</a></li>
<li>点击 <strong>Windows (rustup-init.exe)</strong> 下载</li>
<li>双击运行，选择 <strong>默认安装（Default installation）</strong></li>
<li>默认安装路径：</li>
</ul>`,readingTime:{minutes:.47,words:140},title:`Rust`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/wsl2.html`,{loader:()=>J(()=>import(`./wsl2-wBPFjPgT.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>一、前置条件</h2>
<ul>
<li>Windows 10 2004 及以上，或 Windows 11</li>
<li>BIOS 需启用 <strong>虚拟化技术（VT-x / SVM Mode / AMD-V）</strong></li>
<li>建议开启 <strong>Windows Terminal</strong> 便于管理 Linux 终端</li>
</ul>
<hr>
<h2>二、启用 WSL 功能</h2>
<p>以管理员 <strong>PowerShell</strong> 运行：</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 启用 WSL 和虚拟机平台</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">dism.exe</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">online </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">enable-feature</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">featurename:Microsoft</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Windows</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Subsystem</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Linux </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">all </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">norestart</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">dism.exe</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">online </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">enable-feature</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">featurename:VirtualMachinePlatform </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">all </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">norestart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 安装 WSL 2 内核更新</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">wsl </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 设置默认版本为 WSL 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">wsl </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">--</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">set-default</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">version </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:1.45,words:435},title:`WSL`,icon:`table-list`,type:`article`}}],[`/popular/website/bookmarks-academic/01-item-364491f0.html`,{loader:()=>J(()=>import(`./01-item-364491f0-CQ61E5oO.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.58,words:174},title:`文库下载`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-academic/02-item-1d7d950b.html`,{loader:()=>J(()=>import(`./02-item-1d7d950b-BbFfH3UF.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.61,words:483},title:`文库站点`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-academic/03-item-4dd59878.html`,{loader:()=>J(()=>import(`./03-item-4dd59878-5lT7Lk3N.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.73,words:220},title:`公文素材`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-academic/04-ai-14f2c0d2.html`,{loader:()=>J(()=>import(`./04-ai-14f2c0d2-Cm7ewYMm.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.68,words:204},title:`ai论文`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-academic/05-item-1ebe53a0.html`,{loader:()=>J(()=>import(`./05-item-1ebe53a0-BEBLR9TN.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>scihub</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>国内搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>国外搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>聚合搜索</h2>
<div class="vp-card-container">
  
  
</div>`,readingTime:{minutes:3.71,words:1113},title:`学术搜索`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-academic/06-item-7a22fd74.html`,{loader:()=>J(()=>import(`./06-item-7a22fd74-C8MAnGMf.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>免费查重</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.26,words:1279},title:`论文查重`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-academic/07-item-8998c0f7.html`,{loader:()=>J(()=>import(`./07-item-8998c0f7-oM6F5YRq.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.47,words:442},title:`辅助工具`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-academic/08-item-0ffb08cd.html`,{loader:()=>J(()=>import(`./08-item-0ffb08cd-BIRh8Gg3.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.36,words:107},title:`谷歌学术`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-academic/09-item-7718a4c2.html`,{loader:()=>J(()=>import(`./09-item-7718a4c2-CkMs_L61.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.41,words:124},title:`维基百科`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-academic/10-item-f3ae9f2b.html`,{loader:()=>J(()=>import(`./10-item-f3ae9f2b-DoHWnSgD.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.41,words:123},title:`专利查询`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-academic/11-item-6e80f09b.html`,{loader:()=>J(()=>import(`./11-item-6e80f09b-CwoKLRz5.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.44,words:431},title:`标准规范`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-academic/12-item-287eabba.html`,{loader:()=>J(()=>import(`./12-item-287eabba-BCSFTBNu.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>免费行业报告</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>短视频报告</h2>
<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:3.47,words:1041},title:`行业报告`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-academic/13-item-76b63278.html`,{loader:()=>J(()=>import(`./13-item-76b63278-fJ4uX0_6.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.49,words:446},title:`世界数据`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-academic/14-item-4baafd48.html`,{loader:()=>J(()=>import(`./14-item-4baafd48-BFvqcP0A.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.42,words:725},title:`参考站点`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-academic/15-item-ac65355d.html`,{loader:()=>J(()=>import(`./15-item-ac65355d-du1qdAXC.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.8,words:241},title:`报纸`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-academic/16-item-58423fa5.html`,{loader:()=>J(()=>import(`./16-item-58423fa5-SV8JHMSR.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.89,words:268},title:`手册`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-academic/`,{loader:()=>J(()=>import(`./README-iSbkJ1CB.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:34},title:`文库学术`,icon:`fa-solid fa-graduation-cap`,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/01-item-1ea281e3.html`,{loader:()=>J(()=>import(`./01-item-1ea281e3-UOD-hOfk.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.39,words:116},title:`云盘网站`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/02-item-3a144eb6.html`,{loader:()=>J(()=>import(`./02-item-3a144eb6-BCSGFIhf.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>网盘搜索</h2>
<h3>聚合搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>阿里网盘搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>夸克网盘搜索</h3>
<div class="vp-card-container">
  
  
</div>`,readingTime:{minutes:46.1,words:13829},title:`网盘相关`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/03-item-9d72744c.html`,{loader:()=>J(()=>import(`./03-item-9d72744c-C1f8akwe.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>磁力搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:36.93,words:11078},title:`磁力相关`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/04-alist-762fba5d.html`,{loader:()=>J(()=>import(`./04-alist-762fba5d-BpDs-qbG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:63},title:`AList`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/05-item-309805ae.html`,{loader:()=>J(()=>import(`./05-item-309805ae-B-t9o1zN.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>阿里网盘下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>百度网盘下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>夸克网盘下载</h2>
<div class="vp-card-container">
  
  
</div>
<h2>4k 蓝光</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>磁力下载</h2>`,readingTime:{minutes:11.6,words:3481},title:`影视下载`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/`,{loader:()=>J(()=>import(`./README-BPKJ1-g1.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.08,words:25},title:`云盘磁力`,icon:`fa-solid fa-cloud-arrow-down`,type:`article`}}],[`/popular/website/bookmarks-design/01-item-fcf6995a.html`,{loader:()=>J(()=>import(`./01-item-fcf6995a-Djwu_0HS.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.51,words:454},title:`设计教程`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-design/02-item-6c8e5ba7.html`,{loader:()=>J(()=>import(`./02-item-6c8e5ba7-C-ItlbNL.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.83,words:848},title:`设计平台`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-design/03-item-33d30980.html`,{loader:()=>J(()=>import(`./03-item-33d30980-l8L3qL33.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:255},title:`设计规范`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-design/04-item-d42f4380.html`,{loader:()=>J(()=>import(`./04-item-d42f4380-CXIji8Rz.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.36,words:108},title:`设计游戏`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-design/05-item-09f36e2c.html`,{loader:()=>J(()=>import(`./05-item-09f36e2c-DK8KLX5j.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.48,words:143},title:`设计博客`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-design/06-item-19a274e7.html`,{loader:()=>J(()=>import(`./06-item-19a274e7-DJUE00dI.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.02,words:907},title:`灵感资讯`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-design/07-color-aa8b0ad9.html`,{loader:()=>J(()=>import(`./07-color-aa8b0ad9-B7kxuIV2.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.38,words:2215},title:`color调色`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-design/08-item-0fb267ee.html`,{loader:()=>J(()=>import(`./08-item-0fb267ee-Bvdh4FAL.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>设计系统</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:6.65,words:1995},title:`在线设计`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-design/09-item-eb36d623.html`,{loader:()=>J(()=>import(`./09-item-eb36d623-DgN7-qFi.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.2,words:660},title:`文字云`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-design/10-item-065a2554.html`,{loader:()=>J(()=>import(`./10-item-065a2554-7hlvToaj.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.74,words:1123},title:`平面办公素材`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-design/11-item-22881298.html`,{loader:()=>J(()=>import(`./11-item-22881298-BIg46Xu2.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.28,words:84},title:`电商素材`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-design/12-font-ac86e71a.html`,{loader:()=>J(()=>import(`./12-font-ac86e71a-J9WuRetF.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>可商用字体站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>大厂字体</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>字体识别</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>字体查找</h2>`,readingTime:{minutes:9.88,words:2964},title:`Font字体站`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-design/13-c4d-51ac2c7d.html`,{loader:()=>J(()=>import(`./13-c4d-51ac2c7d-HOrW99kK.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.54,words:462},title:`c4d模型站`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-design/14-builder-2bd4a59b.html`,{loader:()=>J(()=>import(`./14-builder-2bd4a59b-BIJfwWjq.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.41,words:122},title:`Builder`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-design/15-ui-3cfa4083.html`,{loader:()=>J(()=>import(`./15-ui-3cfa4083-CY7Qdn3d.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.68,words:503},title:`ui素材`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-design/16-item-d2b24b96.html`,{loader:()=>J(()=>import(`./16-item-d2b24b96-DDk21FDH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.62,words:1086},title:`封面制作`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-design/17-ps-e6633679.html`,{loader:()=>J(()=>import(`./17-ps-e6633679-BMPdnsRm.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.5,words:450},title:`在线PS`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-design/18-ps-c32f98a6.html`,{loader:()=>J(()=>import(`./18-ps-c32f98a6-BwIwwZNM.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:63},title:`ps画笔`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-design/19-ai-ce2bddec.html`,{loader:()=>J(()=>import(`./19-ai-ce2bddec-CUWszmkE.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.68,words:204},title:`ai设计`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-design/20-item-26a0089b.html`,{loader:()=>J(()=>import(`./20-item-26a0089b-C_4ThC55.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.12,words:35},title:`内容替换`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-design/21-logo-7ed406b9.html`,{loader:()=>J(()=>import(`./21-logo-7ed406b9-BF6u0BHW.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>Logo 搜索</h2>
<div class="vp-card-container">
  
  
</div>
<h2>Logo 赏析</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>Logo 资源</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>中文 Logo 制作</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:5.22,words:1566},title:`logo相关`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-design/22-item-3a783e13.html`,{loader:()=>J(()=>import(`./22-item-3a783e13-Cle2aiLl.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:64},title:`铁路设计`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-design/23-item-68e4531e.html`,{loader:()=>J(()=>import(`./23-item-68e4531e-FU0fOfgB.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.13,words:39},title:`国歌`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-design/24-svg-ae8eb96d.html`,{loader:()=>J(()=>import(`./24-svg-ae8eb96d-QEPlwrh2.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:73},title:`svg`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-design/25-item-93cd23b2.html`,{loader:()=>J(()=>import(`./25-item-93cd23b2-B8yMcWIR.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.19,words:57},title:`家具图纸`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-design/`,{loader:()=>J(()=>import(`./README-ERJAkUlk.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.08,words:23},title:`在线设计`,icon:`fa-solid fa-palette`,type:`article`}}],[`/popular/website/bookmarks-entertainment/01-item-77ae7582.html`,{loader:()=>J(()=>import(`./01-item-77ae7582-CWp3lvCf.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
<h2>网页 综合（聚合搜索）</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网页 综合（在线／下载）</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:82.33,words:24698},title:`影视`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-entertainment/02-item-ba08216f.html`,{loader:()=>J(()=>import(`./02-item-ba08216f-DrIvFRbG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
<h2>FC / 街机 / DOC</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>综合单机</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>掌机 / 家用机 / 主机</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>模拟器</h2>`,readingTime:{minutes:78.15,words:23446},title:`游戏`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-entertainment/03-item-67bc707a.html`,{loader:()=>J(()=>import(`./03-item-67bc707a-n1uyS3Qa.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>音乐相关</h2>
<h3>音乐在线</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>音乐下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h4>Apple Music 无损下载</h4>
<div class="vp-card-container">
  
  
  
  
  
</div>`,readingTime:{minutes:49.77,words:14932},title:`音乐 | 音频`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-entertainment/04-item-fe148076.html`,{loader:()=>J(()=>import(`./04-item-fe148076-DbzwLLIx.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>漫画相关</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外漫画</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:16,words:4799},title:`漫画`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-entertainment/05-item-46630fb2.html`,{loader:()=>J(()=>import(`./05-item-46630fb2-qYfYiH1F.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>电脑壁纸</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>头像设计</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>手机壁纸</h2>
<div class="vp-card-container">
  
</div>
<h2>表情</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:3.02,words:906},title:`壁纸/头像/表情`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-entertainment/06-item-72191b3a.html`,{loader:()=>J(()=>import(`./06-item-72191b3a-BBV9wtUG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>书籍下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>计算机</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>书籍阅读</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h3>杂志</h3>`,readingTime:{minutes:89.45,words:26834},title:`书籍`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-entertainment/07-item-c6e7d643.html`,{loader:()=>J(()=>import(`./07-item-c6e7d643-CVvmDbcv.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:80},title:`绘画`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-entertainment/08-item-e8663767.html`,{loader:()=>J(()=>import(`./08-item-e8663767-M_-r3VFJ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.34,words:103},title:`广播|播客`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-entertainment/`,{loader:()=>J(()=>import(`./README-BvOg_uyT.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.08,words:23},title:`娱乐休闲`,icon:`fa-solid fa-film`,type:`article`}}],[`/popular/website/bookmarks-explore/01-item-45a4f144.html`,{loader:()=>J(()=>import(`./01-item-45a4f144-CXcz5U21.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.54,words:162},title:`知乎盐选`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-explore/02-item-7535c9b5.html`,{loader:()=>J(()=>import(`./02-item-7535c9b5-Cz9XHoJo.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.48,words:144},title:`天涯神贴`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-explore/03-item-d42a8faa.html`,{loader:()=>J(()=>import(`./03-item-d42a8faa-DH6PZSXU.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.11,words:332},title:`考研考证`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-explore/04-item-ec369adc.html`,{loader:()=>J(()=>import(`./04-item-ec369adc-D2A88NHt.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:72},title:`书签分享`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-explore/05-item-e2b9e852.html`,{loader:()=>J(()=>import(`./05-item-e2b9e852-Cm4L9_4u.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.24,words:373},title:`国内资源网`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-explore/06-item-82508c75.html`,{loader:()=>J(()=>import(`./06-item-82508c75-BZGXMSNB.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.16,words:648},title:`国外资源`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-explore/07-item-f1b60e5d.html`,{loader:()=>J(()=>import(`./07-item-f1b60e5d-YC1KTQMm.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.56,words:167},title:`下载目录`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-explore/08-item-96151af2.html`,{loader:()=>J(()=>import(`./08-item-96151af2-BpQJAmw5.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.32,words:97},title:`资源搜索`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-explore/09-item-809a9af0.html`,{loader:()=>J(()=>import(`./09-item-809a9af0-XiozIRIL.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>usenet</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>索引器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>供应商</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>下载器</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>Leeches / Debrid</h2>`,readingTime:{minutes:2.83,words:848},title:`新闻组`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-explore/10-item-70971daf.html`,{loader:()=>J(()=>import(`./10-item-70971daf-CUEmxmzR.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.99,words:298},title:`盗版索引`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-explore/11-item-d1397cc9.html`,{loader:()=>J(()=>import(`./11-item-d1397cc9-CfyFGDpQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.69,words:806},title:`探索发现`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-explore/12-item-f90bbe93.html`,{loader:()=>J(()=>import(`./12-item-f90bbe93-C8fmlH5Z.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>fmhy</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:254},title:`网站汇总`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-explore/13-item-e283fcc9.html`,{loader:()=>J(()=>import(`./13-item-e283fcc9-D9WiwJ2L.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.72,words:515},title:`工具汇总`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-explore/14-diy-a0ec9f52.html`,{loader:()=>J(()=>import(`./14-diy-a0ec9f52-CvuNcEEi.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.48,words:144},title:`DIY项目汇总`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-explore/15-item-8b731a8e.html`,{loader:()=>J(()=>import(`./15-item-8b731a8e-D1BLEA5U.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.31,words:93},title:`网站探索`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-explore/16-item-7138ec3f.html`,{loader:()=>J(()=>import(`./16-item-7138ec3f-D00DAhZk.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.49,words:447},title:`工具探索`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-explore/17-item-b9bfea5f.html`,{loader:()=>J(()=>import(`./17-item-b9bfea5f-BEjDGw_o.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.2,words:60},title:`技术探索`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-explore/18-item-07dc9df3.html`,{loader:()=>J(()=>import(`./18-item-07dc9df3-BJlsERET.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.33,words:98},title:`付费技术文章`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-explore/`,{loader:()=>J(()=>import(`./README-UyENCkm5.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.08,words:23},title:`资源探索`,icon:`fa-solid fa-compass`,type:`article`}}],[`/popular/website/bookmarks-learning/01-ai-fad4099c.html`,{loader:()=>J(()=>import(`./01-ai-fad4099c-YimpNQjI.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>ai 论文</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.92,words:576},title:`AI论文`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-learning/02-item-819428b4.html`,{loader:()=>J(()=>import(`./02-item-819428b4-BPeg04Tt.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>国内网站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外网站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>谷歌学术</h3>
<div class="vp-card-container">
  
  
  
  
</div>
<h3>Sci-Hub</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:3.46,words:1038},title:`论文文献（含下载）`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-learning/03-item-ed648d60.html`,{loader:()=>J(()=>import(`./03-item-ed648d60-Byn8P0ww.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>查重</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>降重</h2>
<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:1.18,words:353},title:`论文查重|降重`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-learning/04-item-15660199.html`,{loader:()=>J(()=>import(`./04-item-15660199-BTQlW2yQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.44,words:731},title:`幼儿少儿教育`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-learning/05-item-4e678737.html`,{loader:()=>J(()=>import(`./05-item-4e678737-BpbhSCf7.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>大学参考信息</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>语文</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>数学</h2>
<div class="vp-card-container">
  
  
  
  
</div>`,readingTime:{minutes:7.41,words:2224},title:`中小学教育`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-learning/06-item-5c39c47f.html`,{loader:()=>J(()=>import(`./06-item-5c39c47f-BoRZjGlG.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>大学生竞赛</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>大学学习平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>在线学习</h2>`,readingTime:{minutes:91.07,words:27321},title:`大学教育`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-learning/07-item-833263aa.html`,{loader:()=>J(()=>import(`./07-item-833263aa-DpKZ7F9G.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>电子课本</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>Z-library</h3>
<div class="vp-card-container">
  
  
</div>
<h2>试卷下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.14,words:2142},title:`教师资源`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-learning/08-item-7b439a2d.html`,{loader:()=>J(()=>import(`./08-item-7b439a2d-D5ab6rsN.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.27,words:1581},title:`自我提升`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-learning/09-item-0d51a1a9.html`,{loader:()=>J(()=>import(`./09-item-0d51a1a9-BZk6epf2.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.65,words:495},title:`知识百科`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-learning/10-item-1d0132a0.html`,{loader:()=>J(()=>import(`./10-item-1d0132a0-DSRNzv24.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.84,words:553},title:`教育工具`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-learning/11-item-60832c28.html`,{loader:()=>J(()=>import(`./11-item-60832c28-CMTW7ulv.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>英语学习</h2>
<div class="vp-card-container">
  
  
  
</div>
<h3>英语学习</h3>
<h4>翻译词典</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h4>专用词典 ¹</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h4>专用词典 ²</h4>`,readingTime:{minutes:53.33,words:15998},title:`各国语言`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-learning/12-item-38af269b.html`,{loader:()=>J(()=>import(`./12-item-38af269b-DRvr7wff.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
<h2>考公</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>公文素材</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>考研</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>计算级等级考试</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>`,readingTime:{minutes:3.91,words:1174},title:`考证 /考级`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-learning/13-item-8d35aac9.html`,{loader:()=>J(()=>import(`./13-item-8d35aac9-Z3jphORk.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.35,words:106},title:`专利`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-learning/14-item-38f57b82.html`,{loader:()=>J(()=>import(`./14-item-38f57b82-CUr51onQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.14,words:42},title:`光盘资源`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-learning/15-item-ce8346d9.html`,{loader:()=>J(()=>import(`./15-item-ce8346d9-CQm1PFlw.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.03,words:309},title:`图书馆网站（可下载论文文献）`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-learning/16-item-fc56dbcb.html`,{loader:()=>J(()=>import(`./16-item-fc56dbcb-xvk_z3EH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.95,words:1486},title:`搜题找答案`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-learning/17-item-13b4e06b.html`,{loader:()=>J(()=>import(`./17-item-13b4e06b--d4q-DkW.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.41,words:422},title:`英语翻译`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-learning/18-ai-bd1cbf26.html`,{loader:()=>J(()=>import(`./18-ai-bd1cbf26-cVLhBt8W.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.71,words:214},title:`ai辅助学习`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-learning/19-item-dac01ad3.html`,{loader:()=>J(()=>import(`./19-item-dac01ad3-BKdnvpck.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>文库下载</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>文库站点</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>学术搜索</h2>
<h3>scihub</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>国内搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:29.96,words:8987},title:`文库学术`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-learning/`,{loader:()=>J(()=>import(`./README-B3kVnyXc.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.21,words:64},title:`学习`,icon:`fa-solid fa-book-open-reader`,type:`article`}}],[`/popular/website/bookmarks-office/01-ppt-8a267223.html`,{loader:()=>J(()=>import(`./01-ppt-8a267223-CwbslvF_.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ppt 制作</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>ppt 模板</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>免费 ppt 模板</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.02,words:1205},title:`ppt`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-office/02-item-c97c0438.html`,{loader:()=>J(()=>import(`./02-item-c97c0438-DJqVt4jE.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>免费思维导图工具</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>在线思维导图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>思维导图资源</h2>
<div class="vp-card-container">
  
</div>
<h2>ai 思维导图</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>脑图资源</h2>
<div class="vp-card-container">
  
</div>`,readingTime:{minutes:3.52,words:1057},title:`思维导图`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-office/03-item-4bc53358.html`,{loader:()=>J(()=>import(`./03-item-4bc53358-C9iVPWGr.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.67,words:1101},title:`表单问卷`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-office/04-ocr-f529c51e.html`,{loader:()=>J(()=>import(`./04-ocr-f529c51e-BnUSWvsG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>GitHub</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.62,words:1386},title:`OCR`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-office/05-h5-52414527.html`,{loader:()=>J(()=>import(`./05-h5-52414527-Bm8fyf53.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.03,words:610},title:`H5制作编辑`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-office/06-item-44a38bea.html`,{loader:()=>J(()=>import(`./06-item-44a38bea-DHyEG60c.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.79,words:537},title:`微信公众号`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-office/07-item-e37e15c8.html`,{loader:()=>J(()=>import(`./07-item-e37e15c8-BKNDfP1I.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.22,words:67},title:`抽奖网站`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-office/08-item-26112658.html`,{loader:()=>J(()=>import(`./08-item-26112658-D-fYd07W.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.78,words:235},title:`日历/日程安排`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-office/09-notion-5ea790e4.html`,{loader:()=>J(()=>import(`./09-notion-5ea790e4-BZYAjBVJ.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>新手教程</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>优质网站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>noiton 导航</h2>
<div class="vp-card-container">
  
</div>
<h2>扩展工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:5.77,words:1731},title:`notion`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-office/10-obsidian-8591294e.html`,{loader:()=>J(()=>import(`./10-obsidian-8591294e-B0PyrKWe.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>官网</h2>
<div class="vp-card-container">
  
</div>
<h2>插件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>模板</h2>
<div class="vp-card-container">
  
</div>
<h2>搭建网站</h2>
<div class="vp-card-container">
  
  
</div>
<h2>主题</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>教程</h2>`,readingTime:{minutes:2.18,words:654},title:`obsidian`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-office/11-item-7714e5cf.html`,{loader:()=>J(()=>import(`./11-item-7714e5cf-DwgA-NYX.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.74,words:223},title:`飞书`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-office/12-markdown-590fc197.html`,{loader:()=>J(()=>import(`./12-markdown-590fc197-Ct4NiHkb.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>Markdown 转微信公众号文章格式</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.2,words:1261},title:`markdown`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-office/13-item-0bf378f2.html`,{loader:()=>J(()=>import(`./13-item-0bf378f2-B5X6_VpE.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.98,words:595},title:`在线文档`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-office/14-item-2f3363dd.html`,{loader:()=>J(()=>import(`./14-item-2f3363dd-CoWpjv0W.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.32,words:1596},title:`在线笔记`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-office/15-item-255feaba.html`,{loader:()=>J(()=>import(`./15-item-255feaba-CmncrphG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.38,words:714},title:`远程办公`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-office/16-item-3fa627d8.html`,{loader:()=>J(()=>import(`./16-item-3fa627d8-B1aLQPvg.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.56,words:469},title:`团队协作`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-office/17-item-436367b0.html`,{loader:()=>J(()=>import(`./17-item-436367b0-ClnVVDfQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.41,words:424},title:`项目管理`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-office/18-item-4c0af1ed.html`,{loader:()=>J(()=>import(`./18-item-4c0af1ed-BMJNnOym.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:81},title:`免费企业名录`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-office/19-item-5cab93be.html`,{loader:()=>J(()=>import(`./19-item-5cab93be-CVe_W1xD.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.51,words:454},title:`摸鱼工具`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-office/20-pitch-deck-7ad75512.html`,{loader:()=>J(()=>import(`./20-pitch-deck-7ad75512-BMUT4BVZ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.54,words:163},title:`Pitch Deck`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-office/21-item-67f26bd6.html`,{loader:()=>J(()=>import(`./21-item-67f26bd6-DpMhN5-o.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.52,words:455},title:`科技工作`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-office/22-item-39907da8.html`,{loader:()=>J(()=>import(`./22-item-39907da8-CvhzPbOT.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.82,words:245},title:`初创公司`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-office/23-item-c6f517d4.html`,{loader:()=>J(()=>import(`./23-item-c6f517d4-DTAZWpla.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:80},title:`资产市值排行榜`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-office/24-item-f8c3feb4.html`,{loader:()=>J(()=>import(`./24-item-f8c3feb4-DB7xvLqH.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>老黄历</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>日历打印</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>日历工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.77,words:530},title:`日历`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-office/25-item-0dd701c3.html`,{loader:()=>J(()=>import(`./25-item-0dd701c3-D0iDk1So.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.6,words:180},title:`酒店协议价代码`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-office/26-item-d6b8599d.html`,{loader:()=>J(()=>import(`./26-item-d6b8599d-DZzihPgY.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.65,words:195},title:`免费专业认证`,icon:`fa-solid fa-bookmark`,order:26,type:`article`}}],[`/popular/website/bookmarks-office/27-item-faf0c48f.html`,{loader:()=>J(()=>import(`./27-item-faf0c48f-Ca2Fe6QK.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>产品用户信息</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>产品版本信</h2>
<div class="vp-card-container">
  
  
</div>
<h2>APP 舆情监控</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>行业广告监测方面</h2>
<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:1.28,words:383},title:`行业分析`,icon:`fa-solid fa-bookmark`,order:27,type:`article`}}],[`/popular/website/bookmarks-office/28-item-e1f00e74.html`,{loader:()=>J(()=>import(`./28-item-e1f00e74-D9VhEe5L.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.58,words:173},title:`知识管理系统`,icon:`fa-solid fa-bookmark`,order:28,type:`article`}}],[`/popular/website/bookmarks-office/29-item-fd9d4c15.html`,{loader:()=>J(()=>import(`./29-item-fd9d4c15-DKiGQkEo.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.14,words:43},title:`进出口记录`,icon:`fa-solid fa-bookmark`,order:29,type:`article`}}],[`/popular/website/bookmarks-office/30-item-1746c257.html`,{loader:()=>J(()=>import(`./30-item-1746c257-BL64UW6s.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.3,words:91},title:`发票相关`,icon:`fa-solid fa-bookmark`,order:30,type:`article`}}],[`/popular/website/bookmarks-office/`,{loader:()=>J(()=>import(`./README-DeZ8qXr_.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.08,words:24},title:`在线办公`,icon:`fa-solid fa-file-lines`,type:`article`}}],[`/popular/website/bookmarks-resources/01-item-dd4e9bbb.html`,{loader:()=>J(()=>import(`./01-item-dd4e9bbb-bYX_gRlv.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>资源站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网盘类</h2>
<div class="vp-card-container">
  
</div>
<h2>游戏类</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>情感类</h2>
<div class="vp-card-container">
  
  
  
  
</div>`,readingTime:{minutes:9.12,words:2737},title:`会员专享`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/02-item-fe573eac.html`,{loader:()=>J(()=>import(`./02-item-fe573eac-DZxKjlCs.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>聚合搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>在线观看</h2>
<div class="vp-card-container">
</div>
<h3>优质观影站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:131.81,words:39543},title:`影视相关`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/03-item-258bb97e.html`,{loader:()=>J(()=>import(`./03-item-258bb97e-BomsnNAZ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>音乐相关</h2>
<div class="vp-card-container">
</div>
<h3>音乐在线</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>音乐下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:87.17,words:26151},title:`音频相关`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/04-item-fdf38d61.html`,{loader:()=>J(()=>import(`./04-item-fdf38d61-DGgDEW8A.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>ss 号搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>聚合搜索</h2>
<h3>Anna’s Archive</h3>
<div class="vp-card-container">
  
  
  
</div>
<h3>zlibrary</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:110.08,words:33025},title:`书籍相关`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/05-item-b4e050ca.html`,{loader:()=>J(()=>import(`./05-item-b4e050ca-DdvCqYQW.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>动漫聚合搜索</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>在线动漫</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:41.41,words:12422},title:`动漫漫画`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/06-item-99cc558a.html`,{loader:()=>J(()=>import(`./06-item-99cc558a-Dtz_ykl9.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>破解游戏下载</h2>
<h3>国内下载站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>国外下载站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:113.25,words:33976},title:`游戏相关`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/07-item-9d72744c.html`,{loader:()=>J(()=>import(`./07-item-9d72744c-Crx8vCuQ.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>磁力搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:47.99,words:14396},title:`磁力相关`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/08-item-3a144eb6.html`,{loader:()=>J(()=>import(`./08-item-3a144eb6-Cs4KZkTu.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>网盘搜索</h2>
<h3>tg 资源搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h3>聚合搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>阿里网盘搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:62.03,words:18609},title:`网盘相关`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/09-item-7191bef6.html`,{loader:()=>J(()=>import(`./09-item-7191bef6-BQzQghkr.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>知乎盐选</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>天涯神贴</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>考研考证</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>Hostloc 精华帖</h2>`,readingTime:{minutes:29.65,words:8895},title:`资源探索`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/12-item-e3901745.html`,{loader:()=>J(()=>import(`./12-item-e3901745-lJ3QTHE8.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ai 搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:15.35,words:4604},title:`搜索查询`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/13-item-1fdb6230.html`,{loader:()=>J(()=>import(`./13-item-1fdb6230-CVDhToOi.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>notion</h2>
<h3>新手教程</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>优质网站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>noiton 导航</h3>
<div class="vp-card-container">
  
  
  
  
</div>
<h3>扩展工具</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:80.1,words:24030},title:`办公相关`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/15-item-f068f0da.html`,{loader:()=>J(()=>import(`./15-item-f068f0da-BsZYbHNR.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ai 对话</h2>
<div class="vp-card-container">
</div>
<h3>优质 gpt</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>免费 ChatGPT4</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h3>免费 ChatGPT3.5</h3>`,readingTime:{minutes:122.01,words:36604},title:`人工智能`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/16-item-938f16a9.html`,{loader:()=>J(()=>import(`./16-item-938f16a9-D3KGs94u.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>自 媒 体</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>创作平台</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>排版美化</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:41.78,words:12535},title:`各行各业`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/17-item-dac01ad3.html`,{loader:()=>J(()=>import(`./17-item-dac01ad3-DAb6rGSR.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>文库下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>文库站点</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>公文素材</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:38.86,words:11657},title:`文库学术`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/18-item-31648a71.html`,{loader:()=>J(()=>import(`./18-item-31648a71-BAil47mp.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>emoji</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>动态图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:83.46,words:25039},title:`图库素材`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/19-item-a3008d48.html`,{loader:()=>J(()=>import(`./19-item-a3008d48-CwpWjCH3.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ai 视频</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:25.08,words:7523},title:`视频相关`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/20-item-09095f7d.html`,{loader:()=>J(()=>import(`./20-item-09095f7d-D5xqZm0u.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>design 未分类</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>设计规范</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>设计游戏</h3>`,readingTime:{minutes:91.07,words:27321},title:`设计相关`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/21-item-19a04960.html`,{loader:()=>J(()=>import(`./21-item-19a04960-CRPRPhEl.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ai 导航</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:24.95,words:7486},title:`万能导航`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/22-item-1df0987f.html`,{loader:()=>J(()=>import(`./22-item-1df0987f-BmhpRjfz.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>国外热点聚合</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>军事新闻</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>ai 资讯</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:70.99,words:21297},title:`新闻资讯`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/24-item-30a56287.html`,{loader:()=>J(()=>import(`./24-item-30a56287-kKT_I1dV.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>网络维权</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>生活助手</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>美食攻略</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:54.98,words:16493},title:`懂得生活`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-resources/25-item-c9a0c6dd.html`,{loader:()=>J(()=>import(`./25-item-c9a0c6dd-B7rEom1M.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>低价会员</h2>
<h3>国外服务</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>国内服务</h3>
<div class="vp-card-container">
  
  
  
  
</div>
<h3>苹果服务</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>chatgpt</h3>
<div class="vp-card-container">
  
  
  
  
  
</div>`,readingTime:{minutes:21.05,words:6314},title:`数卡平台`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-resources/26-item-6acd244a.html`,{loader:()=>J(()=>import(`./26-item-6acd244a-B6hUysUg.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>机场</h2>
<h3>推荐</h3>
<div class="vp-card-container">
  
  
</div>
<h3>特价</h3>
<div class="vp-card-container">
  
  
</div>
<h3>自测</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>导航</h3>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h3>科普</h3>
<div class="vp-card-container">
  
  
</div>`,readingTime:{minutes:76.58,words:22973},title:`科研学习`,icon:`fa-solid fa-bookmark`,order:26,type:`article`}}],[`/popular/website/bookmarks-resources/27-speed-dials-11b5c7e6.html`,{loader:()=>J(()=>import(`./27-speed-dials-11b5c7e6-BKVrVHOZ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.52,words:155},title:`Speed Dials`,icon:`fa-solid fa-bookmark`,order:27,type:`article`}}],[`/popular/website/bookmarks-resources/`,{loader:()=>J(()=>import(`./README-BgohUpaR.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:33},title:`资源书签`,icon:`fa-solid fa-bookmark`,type:`article`}}],[`/popular/website/bookmarks-software/01-item-420a0db3.html`,{loader:()=>J(()=>import(`./01-item-420a0db3-2xob2TvR.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>win</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>ios</h2>
<div class="vp-card-container">
  
</div>
<h2>第三方 bilibili</h2>`,readingTime:{minutes:4.03,words:1210},title:`观影软件`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-software/02-item-5ebdb3a0.html`,{loader:()=>J(()=>import(`./02-item-5ebdb3a0-DejimzMh.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>win</h2>`,readingTime:{minutes:11.27,words:3380},title:`音乐软件`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-software/03-item-a3b9cfc6.html`,{loader:()=>J(()=>import(`./03-item-a3b9cfc6-Bnskmq1U.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ios</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.2,words:2761},title:`漫画软件`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-software/04-item-d5a34260.html`,{loader:()=>J(()=>import(`./04-item-d5a34260-BnIM5BCz.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>mac</h2>
<div class="vp-card-container">
  
</div>
<h2>弹幕工具</h2>
<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:2.36,words:709},title:`动漫软件`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-software/05-item-4acba229.html`,{loader:()=>J(()=>import(`./05-item-4acba229-C1tFrLbm.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ios</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>书源</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.15,words:1245},title:`小说软件`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-software/06-item-428700a5.html`,{loader:()=>J(()=>import(`./06-item-428700a5-Do2HaH3_.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.27,words:982},title:`黑科技`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-software/07-tv-0ebecdea.html`,{loader:()=>J(()=>import(`./07-tv-0ebecdea-BxdpaTFR.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>电视</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>TV 市场</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>安卓盒子</h2>
<h3>网盘 tv 版</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>tvbox</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:13.28,words:3983},title:`tv软件`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-software/08-win-e450697b.html`,{loader:()=>J(()=>import(`./08-win-e450697b-BnkEiiek.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:6.98,words:2094},title:`win聚合搜索`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-software/09-win-85967b66.html`,{loader:()=>J(()=>import(`./09-win-85967b66-BZa-WIFN.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>浏览器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>隐私浏览器</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>视频下载</h2>
<h3>多平台下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:144.17,words:43250},title:`win软件推荐`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-software/10-win-bb256c98.html`,{loader:()=>J(()=>import(`./10-win-bb256c98-D0-lm1iw.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外软件下载站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:12.99,words:3898},title:`win软件下载`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-software/11-win-e78ad006.html`,{loader:()=>J(()=>import(`./11-win-e78ad006-By_7gWbW.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>名校开源镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>开源产品数据平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>马克丁软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.38,words:2813},title:`win综合`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-software/12-mac-2886a641.html`,{loader:()=>J(()=>import(`./12-mac-2886a641-BZnAsgjk.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.32,words:96},title:`mac聚合搜索`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-software/13-mac-82c2f8d1.html`,{loader:()=>J(()=>import(`./13-mac-82c2f8d1-Bj-BZDW7.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>视频下载</h2>
<div class="vp-card-container">
  
</div>
<h2>高效办公</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>微信相关</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>效率工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:41.57,words:12471},title:`mac软件推荐`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-software/14-mac-c6d46cfd.html`,{loader:()=>J(()=>import(`./14-mac-c6d46cfd-CSNv0g9m.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.16,words:648},title:`mac软件下载`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-software/15-mac-a4fb47fe.html`,{loader:()=>J(()=>import(`./15-mac-a4fb47fe-C6cHabS7.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>黑苹果</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>mac 玩游戏</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 技巧</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.45,words:735},title:`mac综合`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-software/16-item-1a1e0af6.html`,{loader:()=>J(()=>import(`./16-item-1a1e0af6-r3LwxTaT.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>应用商店</h2>
<h3>谷歌套件安装器</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h3>googleplay 镜像</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>正规</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>消息转发</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:92.17,words:27652},title:`安卓软件推荐`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-software/17-item-c3d24506.html`,{loader:()=>J(()=>import(`./17-item-c3d24506-DhYAWZQx.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4,words:1200},title:`安卓软件下载`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-software/18-item-23c4e951.html`,{loader:()=>J(()=>import(`./18-item-23c4e951-BkxWH7GS.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>开源应用</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>googleplay 镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>tg 软件国外频道</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.71,words:2312},title:`安卓综合`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-software/19-ios-e8f480c2.html`,{loader:()=>J(()=>import(`./19-ios-e8f480c2-CsrB3Q80.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>邮件</h2>
<div class="vp-card-container">
  
  
</div>
<h2>笔记</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>待办</h2>
<div class="vp-card-container">
  
  
</div>
<h2>日历</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>rss</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:28.15,words:8444},title:`ios软件推荐`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-software/20-ios-f62ce7ae.html`,{loader:()=>J(()=>import(`./20-ios-f62ce7ae-Bfvfw2mf.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>签名工具</h2>
<h3>自签工具</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h3>证书工具</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h3>免费证书</h3>
<div class="vp-card-container">
  
  
</div>
<h3>付费证书</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:26.05,words:7814},title:`ios综合`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-software/21-item-e70272b2.html`,{loader:()=>J(()=>import(`./21-item-e70272b2-CZLZCt-7.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 正版软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.7,words:509},title:`正版软件`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-software/22-item-da0bfcc0.html`,{loader:()=>J(()=>import(`./22-item-da0bfcc0-CXBZkYHr.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.75,words:525},title:`替代软件`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-software/23-item-fca914b9.html`,{loader:()=>J(()=>import(`./23-item-fca914b9-DlhdrHoo.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:72},title:`手表软件`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-software/`,{loader:()=>J(()=>import(`./README-DUv31TbZ.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:32},title:`软件`,icon:`fa-solid fa-laptop-code`,type:`article`}}],[`/popular/website/bookmarks-tools/01-item-59ddf3cc.html`,{loader:()=>J(()=>import(`./01-item-59ddf3cc-2NFpHhb3.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:7.45,words:2234},title:`工具箱`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-tools/02-item-5a632ccb.html`,{loader:()=>J(()=>import(`./02-item-5a632ccb-BXcSUx4k.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>万能转换</h2>
<h3>综合转换</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>PDF 转换</h3>
<h4>PDF 转 HTML</h4>
<div class="vp-card-container">
  
</div>
<h4>pdf 转 word</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:25.62,words:7687},title:`文件处理`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-tools/03-item-2f313f9b.html`,{loader:()=>J(()=>import(`./03-item-2f313f9b-CgC7hUvb.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>在线绘图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>在线抠图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:33.2,words:9960},title:`图片处理`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-tools/04-item-a58fdbfc.html`,{loader:()=>J(()=>import(`./04-item-a58fdbfc-BGBpcko4.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>人声隔离</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>格式转换</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>歌曲识别</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>歌曲创作</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:18.7,words:5609},title:`音频处理`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-tools/05-item-19483022.html`,{loader:()=>J(()=>import(`./05-item-19483022-CgCgLqgH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>ai 视频</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:20.11,words:6032},title:`视频处理`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-tools/06-item-a7856a0c.html`,{loader:()=>J(()=>import(`./06-item-a7856a0c-DHrQ7OAV.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>文字转音视频</h2>
<h3>ai 文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>文字转语音软件</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:30.37,words:9112},title:`语音-文字-视频`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-tools/07-item-e7a7cf36.html`,{loader:()=>J(()=>import(`./07-item-e7a7cf36-DgplBNb3.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.06,words:918},title:`远程控制`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-tools/08-item-a8644fae.html`,{loader:()=>J(()=>import(`./08-item-a8644fae-DXHX_39S.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>链接提取</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>稍后阅读</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>文本传输</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>阅后即焚</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.69,words:2906},title:`文本处理`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-tools/09-item-22b03c02.html`,{loader:()=>J(()=>import(`./09-item-22b03c02-B37KAjMK.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>引流推广</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>ai 二维码</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>静态码</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>条码</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>扫描器</h2>
<div class="vp-card-container">
  
</div>`,readingTime:{minutes:3.19,words:957},title:`二维码`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-tools/10-item-1a34b8d9.html`,{loader:()=>J(()=>import(`./10-item-1a34b8d9-C3a5CHcs.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ai 生成器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>微信</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:9.3,words:2789},title:`生成器`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-tools/11-item-12fbf752.html`,{loader:()=>J(()=>import(`./11-item-12fbf752-DVeI_xpc.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.79,words:836},title:`数字名片`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-tools/12-item-865429e2.html`,{loader:()=>J(()=>import(`./12-item-865429e2-CMKcZMj9.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.55,words:465},title:`指纹识别追踪`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-tools/13-item-91824b68.html`,{loader:()=>J(()=>import(`./13-item-91824b68-CVKgKTMN.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.49,words:147},title:`隐私工具`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-tools/14-item-52bcff87.html`,{loader:()=>J(()=>import(`./14-item-52bcff87-BU6D45MB.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:256},title:`隐私通讯`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-tools/15-item-59b03fcd.html`,{loader:()=>J(()=>import(`./15-item-59b03fcd-B2xao3yc.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.23,words:668},title:`密码相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-tools/16-item-78921798.html`,{loader:()=>J(()=>import(`./16-item-78921798-hlrP-Mml.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.02,words:306},title:`短信测压`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-tools/17-item-8f6b5802.html`,{loader:()=>J(()=>import(`./17-item-8f6b5802-D90vg8ND.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ai 塔罗牌</h2>
<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:1.63,words:489},title:`占卜工具`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-tools/18-app-8e0f5b14.html`,{loader:()=>J(()=>import(`./18-app-8e0f5b14-DUhe9MT9.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.48,words:444},title:`网站生成APP`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-tools/`,{loader:()=>J(()=>import(`./README-Do7AUEtX.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.08,words:24},title:`在线工具`,icon:`fa-solid fa-screwdriver-wrench`,type:`article`}}],[`/popular/website/bookmarks-work/01-item-aafd61a5.html`,{loader:()=>J(()=>import(`./01-item-aafd61a5-C6XZFy9-.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.61,words:182},title:`中国国家官方网站`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-work/02-item-938f16a9.html`,{loader:()=>J(()=>import(`./02-item-938f16a9-CUy1k5Bm.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>自 媒 体</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>创作平台</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>排版美化</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:33.46,words:10038},title:`各行各业`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-work/03-item-1f18993c.html`,{loader:()=>J(()=>import(`./03-item-1f18993c-BGnVL8Z8.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>linux.do 网站推荐</h2>
<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:2.62,words:785},title:`找工作白名单| 黑名单`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-work/04-item-09496b16.html`,{loader:()=>J(()=>import(`./04-item-09496b16-qUUmnmXH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>面试</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>求职招聘</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:18,words:5399},title:`找工作`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-work/05-item-cab20c31.html`,{loader:()=>J(()=>import(`./05-item-cab20c31-CMV9MWHd.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:82},title:`工作汇报`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-work/06-item-ba02f74b.html`,{loader:()=>J(()=>import(`./06-item-ba02f74b-B7F6v_di.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.66,words:497},title:`企业查询`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-work/07-item-c56faefc.html`,{loader:()=>J(()=>import(`./07-item-c56faefc-ChJmcCUP.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.52,words:155},title:`公文写作`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-work/08-item-b1bae588.html`,{loader:()=>J(()=>import(`./08-item-b1bae588-Cq1nuNsU.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>Office</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>WPS</h2>
<div class="vp-card-container">
  
  
</div>
<h2>Office_WPS 学习资料</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>Office_WPS 插件</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:2.44,words:733},title:`文档相关`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-work/09-item-c47d7a21.html`,{loader:()=>J(()=>import(`./09-item-c47d7a21-BqK9VYur.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:64},title:`法律`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-work/10-item-6fb4cfa1.html`,{loader:()=>J(()=>import(`./10-item-6fb4cfa1-Bk70VQ0B.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.52,words:155},title:`辞职`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-work/11-item-bd3d9d0c.html`,{loader:()=>J(()=>import(`./11-item-bd3d9d0c-C41t2Yov.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.58,words:773},title:`国家标准/行业标准`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-work/12-item-37a38474.html`,{loader:()=>J(()=>import(`./12-item-37a38474-CQA2ZRzl.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.36,words:107},title:`计税`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-work/13-item-3bc5e602.html`,{loader:()=>J(()=>import(`./13-item-3bc5e602-BpNHC_B2.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.34,words:101},title:`邮箱`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-work/14-item-e44b1171.html`,{loader:()=>J(()=>import(`./14-item-e44b1171-BTY_BADA.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网赚博客</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>Reddit 营销分析</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.9,words:1171},title:`网赚副业`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-work/15-item-5d1e5145.html`,{loader:()=>J(()=>import(`./15-item-5d1e5145-UH6L3BRO.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.94,words:1183},title:`行业相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-work/16-item-be00cd79.html`,{loader:()=>J(()=>import(`./16-item-be00cd79-DsmeaMcV.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.96,words:288},title:`待办事项`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-work/17-item-9b42ae75.html`,{loader:()=>J(()=>import(`./17-item-9b42ae75-CuxQgxdK.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.71,words:214},title:`会议相关`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-work/18-item-02328df5.html`,{loader:()=>J(()=>import(`./18-item-02328df5-DbpDjRSc.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.79,words:538},title:`生产力工具`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-work/19-item-287eabba.html`,{loader:()=>J(()=>import(`./19-item-287eabba-D-NG70OH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>免费行业报告</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>短视频报告</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.39,words:1317},title:`行业报告`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-work/20-item-f3ae9f2b.html`,{loader:()=>J(()=>import(`./20-item-f3ae9f2b-Q9qab-Fb.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.56,words:169},title:`专利查询`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-work/21-item-4dd59878.html`,{loader:()=>J(()=>import(`./21-item-4dd59878-BBa_7kb9.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.93,words:280},title:`公文素材`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-work/`,{loader:()=>J(()=>import(`./README-D9-tClmU.js`),[]),meta:{date:1779337422e3,readingTime:{minutes:.07,words:21},title:`工作`,icon:`fa-solid fa-briefcase`,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/01-item-420a0db3.html`,{loader:()=>J(()=>import(`./01-item-420a0db3-iBAe3rrY.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>win</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>ios</h2>
<div class="vp-card-container">
  
</div>
<h2>第三方 bilibili</h2>`,readingTime:{minutes:4.03,words:1210},title:`观影软件`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/02-item-5ebdb3a0.html`,{loader:()=>J(()=>import(`./02-item-5ebdb3a0-BIi1bEdM.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>win</h2>`,readingTime:{minutes:11.2,words:3361},title:`音乐软件`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/03-item-a3b9cfc6.html`,{loader:()=>J(()=>import(`./03-item-a3b9cfc6-BH2mi6tg.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ios</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.2,words:2761},title:`漫画软件`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/04-item-d5a34260.html`,{loader:()=>J(()=>import(`./04-item-d5a34260-DMA5tSrP.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>mac</h2>
<div class="vp-card-container">
  
</div>
<h2>弹幕工具</h2>
<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:2.36,words:709},title:`动漫软件`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/05-item-4acba229.html`,{loader:()=>J(()=>import(`./05-item-4acba229-BUAm4ggk.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ios</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>书源</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.15,words:1245},title:`小说软件`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/06-item-428700a5.html`,{loader:()=>J(()=>import(`./06-item-428700a5-B7lEE8cA.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.27,words:982},title:`黑科技`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/07-tv-0ebecdea.html`,{loader:()=>J(()=>import(`./07-tv-0ebecdea-BLZtzk0y.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>安卓盒子</h2>
<h3>网盘 tv 版</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>tvbox</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h3>tvbox 接口</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>kodi</h3>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:11.26,words:3379},title:`tv软件`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/08-win-e450697b.html`,{loader:()=>J(()=>import(`./08-win-e450697b-CppHHCD-.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.4,words:120},title:`win聚合搜索`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/09-win-85967b66.html`,{loader:()=>J(()=>import(`./09-win-85967b66-VE66Ll2O.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>浏览器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>隐私浏览器</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>视频下载</h2>
<h3>多平台下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:149.62,words:44887},title:`win软件推荐`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/10-win-bb256c98.html`,{loader:()=>J(()=>import(`./10-win-bb256c98-CZLUc-wD.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外软件下载站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:12.99,words:3898},title:`win软件下载`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/11-win-e78ad006.html`,{loader:()=>J(()=>import(`./11-win-e78ad006-Cu_r6igg.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>名校开源镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>开源产品数据平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>马克丁软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.38,words:2814},title:`win综合`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/12-mac-2886a641.html`,{loader:()=>J(()=>import(`./12-mac-2886a641-D1ql5zmA.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.14,words:41},title:`mac聚合搜索`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/13-mac-82c2f8d1.html`,{loader:()=>J(()=>import(`./13-mac-82c2f8d1-Ct6u_REA.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>视频下载</h2>
<div class="vp-card-container">
  
</div>
<h2>高效办公</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>微信相关</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>效率工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:39.63,words:11890},title:`mac软件推荐`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/14-mac-c6d46cfd.html`,{loader:()=>J(()=>import(`./14-mac-c6d46cfd-DKakB0cG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>付费站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.19,words:1257},title:`mac软件下载`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/15-mac-a4fb47fe.html`,{loader:()=>J(()=>import(`./15-mac-a4fb47fe-CEjVnk-8.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>黑苹果</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>mac 玩游戏</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 技巧</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.45,words:735},title:`mac综合`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/16-item-1a1e0af6.html`,{loader:()=>J(()=>import(`./16-item-1a1e0af6-D6zV96wC.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>应用商店</h2>
<h3>谷歌套件安装器</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h3>googleplay 镜像</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>正规</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>消息转发</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:91.95,words:27584},title:`安卓软件推荐`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/17-item-c3d24506.html`,{loader:()=>J(()=>import(`./17-item-c3d24506-B4hn_VRP.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4,words:1200},title:`安卓软件下载`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/18-item-23c4e951.html`,{loader:()=>J(()=>import(`./18-item-23c4e951-Bn0jdcOM.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>开源应用</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>googleplay 镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>tg 软件国外频道</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.71,words:2312},title:`安卓综合`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/19-ios-e8f480c2.html`,{loader:()=>J(()=>import(`./19-ios-e8f480c2-Bljuij3g.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>邮件</h2>
<div class="vp-card-container">
  
  
</div>
<h2>笔记</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>待办</h2>
<div class="vp-card-container">
  
  
</div>
<h2>日历</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>rss</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:28.15,words:8444},title:`ios软件推荐`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/20-ios-f62ce7ae.html`,{loader:()=>J(()=>import(`./20-ios-f62ce7ae-ZpiLm_xd.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>签名工具</h2>
<h3>自签工具</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h3>证书工具</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h3>免费证书</h3>
<div class="vp-card-container">
  
  
</div>
<h3>付费证书</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:26.19,words:7858},title:`ios综合`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/21-item-e70272b2.html`,{loader:()=>J(()=>import(`./21-item-e70272b2-DZp5anIQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 正版软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.7,words:509},title:`正版软件`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/22-item-da0bfcc0.html`,{loader:()=>J(()=>import(`./22-item-da0bfcc0-BzHh37sZ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.75,words:525},title:`替代软件`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/23-item-fca914b9.html`,{loader:()=>J(()=>import(`./23-item-fca914b9-DFeSlJZg.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:72},title:`手表软件`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/`,{loader:()=>J(()=>import(`./README-C8o7Ki5e.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:34},title:`软件相关`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/01-item-2699981a.html`,{loader:()=>J(()=>import(`./01-item-2699981a-Dk0ssxQ_.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>插件下载</h2>
<h3>插件下载站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h3>chrome 插件离线解析</h3>
<div class="vp-card-container">
  
  
</div>
<h3>插件探索</h3>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>视频下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:53.72,words:16117},title:`插件推荐`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/02-item-fd5ccbfd.html`,{loader:()=>J(()=>import(`./02-item-fd5ccbfd-zfSDWElB.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>视频下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>资源获取</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>自动验证</h2>
<div class="vp-card-container">
  
</div>
<h2>浏览优化</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:18.36,words:5507},title:`脚本推荐`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/03-github-0c1b3cb7.html`,{loader:()=>J(()=>import(`./03-github-0c1b3cb7-CbRe9q74.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>文件加速</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网站加速</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>特定文件下载</h2>
<div class="vp-card-container">
  
</div>
<h2>github 汉化</h2>
<div class="vp-card-container">
  
</div>
<h2>入门教程</h2>
<div class="vp-card-container">
  
  
</div>`,readingTime:{minutes:2.3,words:691},title:`GitHub加速`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/04-docker-hub-0be4893c.html`,{loader:()=>J(()=>import(`./04-docker-hub-0be4893c-D07UThhu.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.47,words:441},title:`Docker hub`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/05-cloudflare-b03c6a7a.html`,{loader:()=>J(()=>import(`./05-cloudflare-b03c6a7a-B3vdUYs7.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.53,words:758},title:`cloudflare`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/06-item-b881dfc0.html`,{loader:()=>J(()=>import(`./06-item-b881dfc0-Cg_A0Soa.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>系统激活</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>系统下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>旧版系统</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>linux 系统</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:50.07,words:15020},title:`系统相关`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/07-item-0f2bbfb7.html`,{loader:()=>J(()=>import(`./07-item-0f2bbfb7-C2lgdxwT.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.1,words:630},title:`安全查毒`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/08-item-a9fbbd40.html`,{loader:()=>J(()=>import(`./08-item-a9fbbd40-BFNWKhTq.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.89,words:868},title:`网络安全`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/09-item-133f51ea.html`,{loader:()=>J(()=>import(`./09-item-133f51ea-tq0NXpDM.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>漏洞利用数据</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>漏洞数据库</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>黑客教程</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.99,words:1497},title:`黑客论坛`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/10-item-b2a1a4ef.html`,{loader:()=>J(()=>import(`./10-item-b2a1a4ef-vnLRz05n.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:29.97,words:8991},title:`编程相关`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/11-item-cc910c2c.html`,{loader:()=>J(()=>import(`./11-item-cc910c2c-CrLLnZBQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.91,words:572},title:`源码分享`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/12-item-f5430db2.html`,{loader:()=>J(()=>import(`./12-item-f5430db2-9DzA_mXB.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>ai 建站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>域名购买</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>查询比价</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:54.61,words:16382},title:`网站搭建`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/13-item-d14f1bd7.html`,{loader:()=>J(()=>import(`./13-item-d14f1bd7-CjtZD0wF.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.57,words:172},title:`源码项目`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/14-item-f1b52f9f.html`,{loader:()=>J(()=>import(`./14-item-f1b52f9f-gRYg5DKk.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>屏幕检测</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.25,words:2175},title:`外设相关`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/15-item-a407a094.html`,{loader:()=>J(()=>import(`./15-item-a407a094-DE-FwykZ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.88,words:265},title:`天梯排行`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/16-item-9cab073b.html`,{loader:()=>J(()=>import(`./16-item-9cab073b-CseULYIQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>v2ex</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:6.06,words:1817},title:`大神聚集地`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/17-github-bf293ef5.html`,{loader:()=>J(()=>import(`./17-github-bf293ef5-BHNkwBIH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.96,words:1489},title:`github优秀项目`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/18-item-7eb64309.html`,{loader:()=>J(()=>import(`./18-item-7eb64309-5Ct3cjco.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.29,words:686},title:`聊天/论坛`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/19-item-b4922b33.html`,{loader:()=>J(()=>import(`./19-item-b4922b33-CDHzVs7g.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.15,words:345},title:`自托管资源`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/`,{loader:()=>J(()=>import(`./README-qcvoB1fD.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:34},title:`电脑常用`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/01-item-0a79900e.html`,{loader:()=>J(()=>import(`./01-item-0a79900e-DbRaURRy.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>文字转音视频</h2>
<div class="vp-card-container">
</div>
<h3>ai 文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:34.92,words:10475},title:`-语音-文字-视频-`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/02-item-b05db14b.html`,{loader:()=>J(()=>import(`./02-item-b05db14b-C2EzjMys.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>综合转换</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>图片转换</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>2D 图片转 3D</h2>
<div class="vp-card-container">
  
</div>
<h2>图片转表格</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:12.75,words:3824},title:`万能转换`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/03-item-8bd9c322.html`,{loader:()=>J(()=>import(`./03-item-8bd9c322-C8_d0UOD.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>图片压缩</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>音频压缩</h2>
<div class="vp-card-container">
  
</div>
<h2>视频压缩</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>文件压缩</h2>
<div class="vp-card-container">
  
</div>`,readingTime:{minutes:4.08,words:1223},title:`万能压缩`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/04-pdf-ocr-ec1e16ef.html`,{loader:()=>J(()=>import(`./04-pdf-ocr-ec1e16ef-CUX4Qv2X.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.56,words:2869},title:`PDF OCR`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/05-item-59ddf3cc.html`,{loader:()=>J(()=>import(`./05-item-59ddf3cc-CHE_LX6z.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:10.87,words:3261},title:`工具箱`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/06-item-22b03c02.html`,{loader:()=>J(()=>import(`./06-item-22b03c02-CYnvgpkq.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>引流推广</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>ai 二维码</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>静态码</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>条码</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>扫描器</h2>
<div class="vp-card-container">
  
</div>`,readingTime:{minutes:3.19,words:957},title:`二维码`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/07-item-5378bbfc.html`,{loader:()=>J(()=>import(`./07-item-5378bbfc-5X0ZSmF3.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.49,words:748},title:`短网址`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/08-item-12fbf752.html`,{loader:()=>J(()=>import(`./08-item-12fbf752-CxryCINE.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.06,words:917},title:`数字名片`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/09-item-7d575004.html`,{loader:()=>J(()=>import(`./09-item-7d575004-t1o0rnKb.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>链接提取</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>稍后阅读</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>文本传输</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>阅后即焚</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:10.33,words:3100},title:`文本相关`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/10-item-865429e2.html`,{loader:()=>J(()=>import(`./10-item-865429e2-BpE1sQ-a.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.06,words:618},title:`指纹识别追踪`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/11-item-91824b68.html`,{loader:()=>J(()=>import(`./11-item-91824b68-ChPm7RiG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.62,words:185},title:`隐私工具`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/12-item-52bcff87.html`,{loader:()=>J(()=>import(`./12-item-52bcff87-agH0kBHD.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.93,words:279},title:`隐私通讯`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/13-item-59b03fcd.html`,{loader:()=>J(()=>import(`./13-item-59b03fcd-Bne61mmQ.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.83,words:848},title:`密码相关`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/14-item-0084faa4.html`,{loader:()=>J(()=>import(`./14-item-0084faa4-D4PF4pth.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.34,words:703},title:`虚拟身份`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/15-item-dbf2da13.html`,{loader:()=>J(()=>import(`./15-item-dbf2da13-DA3Sn_ip.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>国内邮箱</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外邮箱</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>加密邮箱</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>匿名邮箱</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:10.31,words:3094},title:`邮箱相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/16-item-22c9a8c6.html`,{loader:()=>J(()=>import(`./16-item-22c9a8c6-C1Xve7l5.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>外网手机短信接码</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.39,words:2216},title:`短信接码`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/17-item-78921798.html`,{loader:()=>J(()=>import(`./17-item-78921798-B0shjfrH.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.31,words:392},title:`短信测压`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/18-item-5084f566.html`,{loader:()=>J(()=>import(`./18-item-5084f566-CHb464kd.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:8.58,words:2573},title:`各种生成器`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/19-ai-54600dc7.html`,{loader:()=>J(()=>import(`./19-ai-54600dc7-DPE2-HRK.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.83,words:248},title:`ai生成器`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/20-item-7c5c113b.html`,{loader:()=>J(()=>import(`./20-item-7c5c113b-B6GPc2kK.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
</div>
<h2>小书签</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>阅读</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:34.44,words:10333},title:`小书签栏`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/21-item-7fa695e5.html`,{loader:()=>J(()=>import(`./21-item-7fa695e5-BpxI0Dnv.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ai 塔罗牌</h2>
<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:1.69,words:507},title:`国学`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/22-item-24a93fff.html`,{loader:()=>J(()=>import(`./22-item-24a93fff-BKkgv528.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.45,words:136},title:`春节相关`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/23-item-f910e251.html`,{loader:()=>J(()=>import(`./23-item-f910e251-DvLj1_5b.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.39,words:117},title:`随机探索`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/24-item-dae6399d.html`,{loader:()=>J(()=>import(`./24-item-dae6399d-DWx2plpU.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.15,words:1244},title:`有用的网站`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/25-item-02328df5.html`,{loader:()=>J(()=>import(`./25-item-02328df5-X6Rcsw1G.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.16,words:647},title:`生产力工具`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/26-item-26112658.html`,{loader:()=>J(()=>import(`./26-item-26112658-BLrGTVKO.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:254},title:`日历/日程安排`,icon:`fa-solid fa-bookmark`,order:26,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/27-item-f74baa06.html`,{loader:()=>J(()=>import(`./27-item-f74baa06-Djp8wGFw.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.14,words:1241},title:`交互的`,icon:`fa-solid fa-bookmark`,order:27,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/28-item-77b9c8bd.html`,{loader:()=>J(()=>import(`./28-item-77b9c8bd-CTHxpkCX.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.48,words:1644},title:`有趣的`,icon:`fa-solid fa-bookmark`,order:28,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/29-item-74a33946.html`,{loader:()=>J(()=>import(`./29-item-74a33946-jlx9O-tC.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:5.59,words:1677},title:`随机的`,icon:`fa-solid fa-bookmark`,order:29,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/30-app-8e0f5b14.html`,{loader:()=>J(()=>import(`./30-app-8e0f5b14-pHobNo9S.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.47,words:442},title:`网站生成APP`,icon:`fa-solid fa-bookmark`,order:30,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/31-item-2d1c66bd.html`,{loader:()=>J(()=>import(`./31-item-2d1c66bd-CwLVljZC.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.34,words:103},title:`订阅管理`,icon:`fa-solid fa-bookmark`,order:31,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/`,{loader:()=>J(()=>import(`./README-MaEvuTtX.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:34},title:`在线工具`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/01-ai-bd1cbf26.html`,{loader:()=>J(()=>import(`./01-ai-bd1cbf26-B5BeDkHj.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.83,words:249},title:`ai辅助学习`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/02-ai-10a3b7f1.html`,{loader:()=>J(()=>import(`./02-ai-10a3b7f1-D638iIs1.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>新手教程</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>进阶教程</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:12.64,words:3792},title:`ai学习教程`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/03-item-60832c28.html`,{loader:()=>J(()=>import(`./03-item-60832c28-TLzOSNBV.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>英语学习</h2>
<h3>英语学习</h3>
<h4>翻译词典</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h4>专用词典 ¹</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h4>专用词典 ²</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h4>语言学</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:50.71,words:15212},title:`各国语言`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/04-item-6603c934.html`,{loader:()=>J(()=>import(`./04-item-6603c934-Bm-CFI23.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>学科相关</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>it 编程</h2>
<h3>python</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>linux 新手教程</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h3>综合</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:77.86,words:23357},title:`各学科`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/05-item-5d1e5145.html`,{loader:()=>J(()=>import(`./05-item-5d1e5145-C04hu9y7.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.33,words:1300},title:`行业相关`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/06-item-38b2fafe.html`,{loader:()=>J(()=>import(`./06-item-38b2fafe-Cluzp2Z7.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>大学生竞赛</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:3.58,words:1073},title:`大学相关`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/07-item-09095f7d.html`,{loader:()=>J(()=>import(`./07-item-09095f7d-BsDp2sMT.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.44,words:431},title:`设计相关`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/08-item-7b439a2d.html`,{loader:()=>J(()=>import(`./08-item-7b439a2d-D1baarl7.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.8,words:1741},title:`自我提升`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/09-item-833263aa.html`,{loader:()=>J(()=>import(`./09-item-833263aa-DrlQzfgU.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>电子课本</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>试卷下载</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>综合平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>课件下载</h2>
<div class="vp-card-container">
  
  
</div>`,readingTime:{minutes:4.09,words:1228},title:`教师资源`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/10-item-5f66e127.html`,{loader:()=>J(()=>import(`./10-item-5f66e127-DVddwvWG.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.05,words:614},title:`幼儿资源`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/11-item-d13a94bf.html`,{loader:()=>J(()=>import(`./11-item-d13a94bf-D1on9Y4f.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.29,words:1287},title:`查题题库`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/12-item-0d51a1a9.html`,{loader:()=>J(()=>import(`./12-item-0d51a1a9-B8tAA1cx.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.02,words:607},title:`知识百科`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/13-item-729e62fd.html`,{loader:()=>J(()=>import(`./13-item-729e62fd-D8HbLWS4.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>ai 恋爱</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.97,words:591},title:`恋爱相关`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/14-item-e44b1171.html`,{loader:()=>J(()=>import(`./14-item-e44b1171-p4hEVxsh.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网赚博客</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>Reddit 营销分析</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.82,words:1147},title:`网赚副业`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/15-item-eb2a471d.html`,{loader:()=>J(()=>import(`./15-item-eb2a471d-D7VCjNHi.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>AI</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>文案写作</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>语法纠错</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:17.05,words:5116},title:`文学相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/16-item-b8685cff.html`,{loader:()=>J(()=>import(`./16-item-b8685cff-vNtdD9zt.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.08,words:1224},title:`在线学习`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/17-study-2c861c5f.html`,{loader:()=>J(()=>import(`./17-study-2c861c5f-DYjqgj9J.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:7.55,words:2264},title:`study未分类`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/18-item-fc7da0d9.html`,{loader:()=>J(()=>import(`./18-item-fc7da0d9-C6BU7F0G.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.51,words:1354},title:`国外教育平台`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/19-item-ffdf1733.html`,{loader:()=>J(()=>import(`./19-item-ffdf1733-dkkOzvei.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.12,words:936},title:`国外教育平台课程下载`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/20-item-101fba8c.html`,{loader:()=>J(()=>import(`./20-item-101fba8c-BlAzNKiX.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:6.45,words:1936},title:`国外学习网站`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/21-item-1d0132a0.html`,{loader:()=>J(()=>import(`./21-item-1d0132a0-CAkLT-qq.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.62,words:785},title:`教育工具`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/22-item-43087966.html`,{loader:()=>J(()=>import(`./22-item-43087966-DYTlzP8c.js`),[]),meta:{date:1779337422e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:8.01,words:2402},title:`学习/研究`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/`,{loader:()=>J(()=>import(`./README-BwHKHrdw.js`),[]),meta:{date:1779337422e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
</div>
`,readingTime:{minutes:.11,words:34},title:`学习相关`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/404.html`,{loader:()=>J(()=>import(`./404.html-CzhOkZ47.js`),[]),meta:{title:``}}],[`/category/`,{loader:()=>J(()=>import(`./index.html-CJrIcN3R.js`),[]),meta:{title:`分类`,index:!1}}],[`/category/android/`,{loader:()=>J(()=>import(`./index.html-BwCZ4NOl.js`),[]),meta:{title:`Android 分类`,index:!1}}],[`/category/windows/`,{loader:()=>J(()=>import(`./index.html-BENI4hpu.js`),[]),meta:{title:`Windows 分类`,index:!1}}],[`/category/%E6%94%B6%E9%9B%86/`,{loader:()=>J(()=>import(`./index.html-DZ2FVhPl.js`),[]),meta:{title:`收集 分类`,index:!1}}],[`/tag/`,{loader:()=>J(()=>import(`./index.html-Dp-Xv9Gg.js`),[]),meta:{title:`标签`,index:!1}}],[`/tag/%E5%88%B7%E6%9C%BA/`,{loader:()=>J(()=>import(`./index.html-DtnPpG88.js`),[]),meta:{title:`标签: 刷机`,index:!1}}],[`/tag/%E6%BF%80%E6%B4%BB/`,{loader:()=>J(()=>import(`./index.html-L3UCvjnp.js`),[]),meta:{title:`标签: 激活`,index:!1}}],[`/tag/arch/`,{loader:()=>J(()=>import(`./index.html-C8QMo9z_.js`),[]),meta:{title:`标签: arch`,index:!1}}],[`/tag/kde/`,{loader:()=>J(()=>import(`./index.html-Df1ETkAq.js`),[]),meta:{title:`标签: KDE`,index:!1}}],[`/tag/%E8%B7%AF%E7%94%B1%E5%99%A8/`,{loader:()=>J(()=>import(`./index.html-1QzSiB_s.js`),[]),meta:{title:`标签: 路由器`,index:!1}}],[`/tag/immortalwrt/`,{loader:()=>J(()=>import(`./index.html-C3zGrLxS.js`),[]),meta:{title:`标签: ImmortalWrt`,index:!1}}],[`/tag/nas/`,{loader:()=>J(()=>import(`./index.html-BnzJQVz5.js`),[]),meta:{title:`标签: NAS`,index:!1}}],[`/tag/%E4%BB%A3%E7%90%86/`,{loader:()=>J(()=>import(`./index.html-kfaJqIUN.js`),[]),meta:{title:`标签: 代理`,index:!1}}],[`/tag/nvm/`,{loader:()=>J(()=>import(`./index.html-BLONVC32.js`),[]),meta:{title:`标签: nvm`,index:!1}}],[`/tag/python/`,{loader:()=>J(()=>import(`./index.html-BbQ9Ncnr.js`),[]),meta:{title:`标签: python`,index:!1}}],[`/tag/adb/`,{loader:()=>J(()=>import(`./index.html-Bs5lWN4t.js`),[]),meta:{title:`标签: adb`,index:!1}}],[`/tag/java/`,{loader:()=>J(()=>import(`./index.html-T7Docwkm.js`),[]),meta:{title:`标签: java`,index:!1}}],[`/tag/cygwin/`,{loader:()=>J(()=>import(`./index.html-CwIYUVwn.js`),[]),meta:{title:`标签: cygwin`,index:!1}}],[`/tag/docker/`,{loader:()=>J(()=>import(`./index.html-BJl1yISi.js`),[]),meta:{title:`标签: docker`,index:!1}}],[`/tag/etcd/`,{loader:()=>J(()=>import(`./index.html-CHoCGbQb.js`),[]),meta:{title:`标签: etcd`,index:!1}}],[`/tag/go/`,{loader:()=>J(()=>import(`./index.html-BT0NvNsh.js`),[]),meta:{title:`标签: go`,index:!1}}],[`/tag/mongodb/`,{loader:()=>J(()=>import(`./index.html-CXZ0opYR.js`),[]),meta:{title:`标签: mongodb`,index:!1}}],[`/tag/mysql/`,{loader:()=>J(()=>import(`./index.html-CyOEuoYE.js`),[]),meta:{title:`标签: mysql`,index:!1}}],[`/tag/php/`,{loader:()=>J(()=>import(`./index.html-BPMq5SVT.js`),[]),meta:{title:`标签: php`,index:!1}}],[`/tag/postgresql/`,{loader:()=>J(()=>import(`./index.html-Tq6Liwfc.js`),[]),meta:{title:`标签: postgresql`,index:!1}}],[`/tag/rabbitmq/`,{loader:()=>J(()=>import(`./index.html-DOaPOE4s.js`),[]),meta:{title:`标签: rabbitmq`,index:!1}}],[`/tag/redis/`,{loader:()=>J(()=>import(`./index2.html-3TBNh8Z2.js`),[]),meta:{title:`标签: redis`,index:!1}}],[`/tag/ruby/`,{loader:()=>J(()=>import(`./index2.html-Hnq0HmhZ.js`),[]),meta:{title:`标签: ruby`,index:!1}}],[`/tag/rust/`,{loader:()=>J(()=>import(`./index.html-Cj37-8GG.js`),[]),meta:{title:`标签: rust`,index:!1}}],[`/tag/wsl2/`,{loader:()=>J(()=>import(`./index.html-B_vgUvHg.js`),[]),meta:{title:`标签: wsl2`,index:!1}}],[`/tag/linux/`,{loader:()=>J(()=>import(`./index.html-DUrJ_1LB.js`),[]),meta:{title:`标签: Linux`,index:!1}}],[`/tag/vps/`,{loader:()=>J(()=>import(`./index.html-DEX399SZ.js`),[]),meta:{title:`标签: VPS`,index:!1}}],[`/tag/debian/`,{loader:()=>J(()=>import(`./index.html-BBiHdwRt.js`),[]),meta:{title:`标签: Debian`,index:!1}}],[`/tag/%E5%AE%89%E5%85%A8/`,{loader:()=>J(()=>import(`./index.html-MdfjHuSb.js`),[]),meta:{title:`标签: 安全`,index:!1}}],[`/article/`,{loader:()=>J(()=>import(`./index.html-m91w7Wek.js`),[]),meta:{title:`文章`,index:!1}}],[`/star/`,{loader:()=>J(()=>import(`./index.html-Bi2qLONS.js`),[]),meta:{title:`星标`,index:!1}}],[`/timeline/`,{loader:()=>J(()=>import(`./index.html-DwldvNYW.js`),[]),meta:{title:`时间轴`,index:!1}}]]),nd=Symbol(``),rd=()=>{let e=L(nd);if(!e)throw Error(`useClientData() is called without provider.`);return e},id=()=>rd().pageComponent,ad=()=>rd().pageData,od=()=>rd().pageFrontmatter,sd=()=>rd().pageHead,cd=()=>rd().pageLang,ld=()=>rd().pageLayout,ud=()=>rd().routeLocale,dd=()=>rd().routePath,fd=()=>rd().siteData,pd=rd,md=od,hd=cd,gd=ad,_d=new Set,vd=e=>{_d.add(e),li(()=>{_d.delete(e)})},yd=Symbol(``),bd=F(ed),xd=F(td),Sd=(e,t)=>{let n=jc(e,t);if(xd.value[n])return n;let r=encodeURI(n);return xd.value[r]?r:bd.value[n]||bd.value[r]||n},Cd=(e,t)=>{let{pathname:n,hashAndQueries:r}=Fc(e),i=Sd(n,t),a=i+r;return xd.value[i]?{...xd.value[i],path:a,notFound:!1}:{...xd.value[`/404.html`],path:a,notFound:!0}},wd=(e,t)=>{let{pathname:n,hashAndQueries:r}=Fc(e);return Sd(n,t)+r},Td=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&e.currentTarget.getAttribute(`target`)?.match(/\b_blank\b/i)))return e.preventDefault(),!0},Ed=z({name:`RouteLink`,props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:`route-link-active`}},slots:Object,setup(e,{slots:t}){let n=cl(),r=ll(),i=W(()=>e.to.startsWith(`#`)||e.to.startsWith(`?`)?e.to:`/${wd(e.to,r.path).substring(1)}`);return()=>G(`a`,{class:[`route-link`,{[e.activeClass]:e.active}],href:i.value,onClick:(t={})=>{Td(t)&&n.push(e.to).catch()}},t.default())}}),Dd=z({name:`AutoLink`,props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){let n=Cn(e,`config`),r=ll(),i=fd(),a=W(()=>Tc(n.value.link)),o=W(()=>n.value.target||(a.value?`_blank`:void 0)),s=W(()=>o.value===`_blank`),c=W(()=>!a.value&&!s.value),l=W(()=>n.value.rel||(s.value?`noopener noreferrer`:null)),u=W(()=>n.value.ariaLabel??n.value.text),d=W(()=>{if(n.value.exact)return!1;let e=Object.keys(i.value.locales);return e.length?e.every(e=>e!==n.value.link):n.value.link!==`/`}),f=W(()=>c.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,`u`)).test(r.path):d.value?r.path.startsWith(n.value.link):r.path===n.value.link:!1);return()=>{let{before:e,after:r,default:i}=t,a=i?.(n.value)??[e?.(n.value),n.value.text,r?.(n.value)];return c.value?G(Ed,{class:`auto-link`,to:n.value.link,active:f.value,"aria-label":u.value},()=>a):G(`a`,{class:`auto-link external-link`,href:n.value.link,"aria-label":u.value,rel:l.value,target:o.value},a)}}}),Od=z({name:`ClientOnly`,setup(e,t){let n=P(!1);return B(()=>{n.value=!0}),()=>n.value?t.slots.default?.():null}}),kd=e=>{_d.forEach(t=>t(e))},Ad=z({name:`Content`,props:{path:{type:String,required:!1,default:``}},setup(e){let t=id(),n=W(()=>{if(!e.path)return t.value;let n=Cd(e.path);return Xr(async()=>n.loader().then(e=>e.default))});return()=>G(n.value,{onVnodeMounted:()=>{kd(`mounted`)},onVnodeUpdated:()=>{kd(`updated`)},onVnodeBeforeUnmount:()=>{kd(`beforeUnmount`)}})}}),jd=`Layout`,Md=$t({resolveLayouts:e=>e.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(e,t,n)=>{let r=K(t.description)?t.description:n.description;return zc([...Array.isArray(t.head)?t.head:[],...n.head,[`title`,{},e],[`meta`,{name:`description`,content:r}]])},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(e=>!!e).join(` | `),resolvePageLang:(e,t)=>e.lang||t.lang||`en-US`,resolvePageLayout:(e,t)=>{let n=K(e.frontmatter.layout)?e.frontmatter.layout:jd;if(!t[n])throw Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>Mc(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},r)=>({...n,...t[r],head:[...t[r]?.head??[],...n.head]})}),Nd=(e={})=>e,Y=e=>Oc(e)?e:`/${Uc(e)}`,Pd=e=>e!==void 0,Fd=e=>typeof e==`number`,Id=e=>Array.isArray(e),Ld=(e,t)=>K(e)&&e.startsWith(t),Rd=(e,t)=>K(e)&&e.endsWith(t),{entries:zd}=Object,{fromEntries:Bd}=Object,Vd=e=>Object.keys(e),{values:Hd}=Object,Ud=(e,...t)=>{if(t.length===0)return e;let n=t.shift();return n&&zd(n).forEach(([t,r])=>{t===`__proto__`||t===`constructor`||(Gc(e[t])&&Gc(r)?Ud(e[t],r):Id(r)?e[t]=[...r]:Gc(r)?e[t]={...r}:e[t]=n[t])}),Ud(e,...t)},Wd=e=>{if(e){if(typeof e==`number`)return new Date(e);let t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Gd=e=>Ld(e,`/`)&&e[1]!==`/`,Kd=Uint8Array,qd=Uint16Array,Jd=Int32Array,Yd=new Kd([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xd=new Kd([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zd=new Kd([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qd=function(e,t){for(var n=new qd(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Jd(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},$d=Qd(Yd,2),ef=$d.b,tf=$d.r;ef[28]=258,tf[258]=28;for(var nf=Qd(Xd,0),rf=nf.b,af=nf.r,of=new qd(32768),sf=0;sf<32768;++sf){var cf=(sf&43690)>>1|(sf&21845)<<1;cf=(cf&52428)>>2|(cf&13107)<<2,cf=(cf&61680)>>4|(cf&3855)<<4,of[sf]=((cf&65280)>>8|(cf&255)<<8)>>1}for(var lf=(function(e,t,n){for(var r=e.length,i=0,a=new qd(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new qd(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new qd(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[of[d]>>c]=l}else for(s=new qd(r),i=0;i<r;++i)e[i]&&(s[i]=of[o[e[i]-1]++]>>15-e[i]);return s}),uf=new Kd(288),sf=0;sf<144;++sf)uf[sf]=8;for(var sf=144;sf<256;++sf)uf[sf]=9;for(var sf=256;sf<280;++sf)uf[sf]=7;for(var sf=280;sf<288;++sf)uf[sf]=8;for(var df=new Kd(32),sf=0;sf<32;++sf)df[sf]=5;var ff=lf(uf,9,1),pf=lf(df,5,1),mf=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},hf=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},gf=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},_f=function(e){return(e+7)/8|0},vf=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Kd(e.subarray(t,n))},yf=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],bf=function(e,t,n){var r=Error(t||yf[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,bf),!n)throw r;return r},xf=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new Kd(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new Kd(i*3));var l=function(e){var t=n.length;if(e>t){var r=new Kd(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=hf(e,d,1);var v=hf(e,d+1,3);if(d+=3,!v){var y=_f(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&bf(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=ff,m=pf,h=9,g=5;else if(v==2){var S=hf(e,d,31)+257,C=hf(e,d+10,15)+4,w=S+hf(e,d+5,31)+1;d+=14;for(var T=new Kd(w),E=new Kd(19),D=0;D<C;++D)E[Zd[D]]=hf(e,d+D*3,7);d+=C*3;for(var O=mf(E),k=(1<<O)-1,ee=lf(E,O,1),D=0;D<w;){var A=ee[hf(e,d,k)];d+=A&15;var y=A>>4;if(y<16)T[D++]=y;else{var te=0,ne=0;for(y==16?(ne=3+hf(e,d,3),d+=2,te=T[D-1]):y==17?(ne=3+hf(e,d,7),d+=3):y==18&&(ne=11+hf(e,d,127),d+=7);ne--;)T[D++]=te}}var re=T.subarray(0,S),ie=T.subarray(S);h=mf(re),g=mf(ie),p=lf(re,h,1),m=lf(ie,g,1)}else bf(1);if(d>_){c&&bf(0);break}}s&&l(f+131072);for(var ae=(1<<h)-1,oe=(1<<g)-1,se=d;;se=d){var te=p[gf(e,d)&ae],ce=te>>4;if(d+=te&15,d>_){c&&bf(0);break}if(te||bf(2),ce<256)n[f++]=ce;else if(ce==256){se=d,p=null;break}else{var le=ce-254;if(ce>264){var D=ce-257,j=Yd[D];le=hf(e,d,(1<<j)-1)+ef[D],d+=j}var ue=m[gf(e,d)&oe],de=ue>>4;ue||bf(3),d+=ue&15;var ie=rf[de];if(de>3){var j=Xd[de];ie+=gf(e,d)&(1<<j)-1,d+=j}if(d>_){c&&bf(0);break}s&&l(f+131072);var fe=f+le;if(f<ie){var pe=a-ie,me=Math.min(ie,fe);for(pe+f<0&&bf(3);f<me;++f)n[f]=r[pe+f]}for(;f<fe;++f)n[f]=n[f-ie]}}t.l=p,t.p=se,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?vf(n,0,f):n.subarray(0,f)},Sf=function(e,t,n){return e.s==-1?Math.max(Sf(e.l,t,n+1),Sf(e.r,t,n+1)):t[e.s]=n},Cf=new Kd(0),wf=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&bf(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&bf(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Tf(e,t){return xf(e.subarray(wf(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Ef=typeof TextEncoder<`u`&&new TextEncoder,Df=typeof TextDecoder<`u`&&new TextDecoder;try{Df.decode(Cf,{stream:!0})}catch{}var Of=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:vf(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function kf(e,t){if(t){for(var n=new Kd(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Ef)return Ef.encode(e);for(var i=e.length,a=new Kd(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new Kd(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return vf(a,0,o)}function Af(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(Df)return Df.decode(e);else{var i=Of(e),a=i.s,n=i.r;return n.length&&bf(8),a}}({id:`INTERNAL`,label:`Internal`,keys:[`layouts`,`routes`,`redirects`]}).id,{id:`SITE`,label:`Site`,keys:[`siteData`,`siteLocaleData`]}.id,{id:`ROUTE`,label:`Route`,keys:[`routePath`,`routeLocale`]}.id,{id:`PAGE`,label:`Page`,keys:[`pageData`,`pageFrontmatter`,`pageLang`,`pageHead`,`pageHeadTitle`,`pageLayout`,`pageComponent`]}.id;function jf(e,t){return ze()?(Be(e,t),!0):!1}var Mf=new WeakMap,Nf=(...e)=>{let t=e[0],n=go()?.proxy??ze();if(n==null&&!or())throw Error(`injectLocal must be called in setup`);return n&&Mf.has(n)&&t in Mf.get(n)?Mf.get(n)[t]:L(...e)},Pf=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var Ff=e=>e!=null,If=Object.prototype.toString,Lf=e=>If.call(e)===`[object Object]`,Rf=()=>{},zf=Bf();function Bf(){var e,t;return Pf&&!!(!((e=window)==null||(e=e.navigator)==null)&&e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window)==null||(t=t.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function Vf(...e){if(e.length!==1)return Cn(...e);let t=e[0];return typeof t==`function`?tn(yn(()=>({get:t,set:Rf}))):P(t)}function Hf(e,t){function n(...n){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(i)})}return n}var Uf=e=>e();function Wf(e,t={}){let n,r,i=Rf,a=e=>{clearTimeout(e),i(),i=Rf},o;return s=>{let c=I(e),l=I(t.maxWait);return n&&a(n),c<=0||l!==void 0&&l<=0?(r&&=(a(r),void 0),Promise.resolve(s())):new Promise((e,u)=>{i=t.rejectOnCancel?u:e,o=s,l&&!r&&(r=setTimeout(()=>{n&&a(n),r=void 0,e(o())},l)),n=setTimeout(()=>{r&&a(r),r=void 0,e(s())},c)})}}function Gf(...e){let t=0,n,r=!0,i=Rf,a,o,s,c,l;!fn(e[0])&&typeof e[0]==`object`?{delay:o,trailing:s=!0,leading:c=!0,rejectOnCancel:l=!1}=e[0]:[o,s=!0,c=!0,l=!1]=e;let u=()=>{n&&(clearTimeout(n),n=void 0,i(),i=Rf)};return e=>{let d=I(o),f=Date.now()-t,p=()=>a=e();return u(),d<=0?(t=Date.now(),p()):(f>d?(t=Date.now(),(c||!r)&&p()):s&&(a=new Promise((e,a)=>{i=l?a:e,n=setTimeout(()=>{t=Date.now(),r=!0,e(p()),u()},Math.max(0,d-f))})),!c&&!n&&(n=setTimeout(()=>r=!0,d)),r=!1,a)}}function Kf(e=Uf,t={}){let{initialState:n=`active`}=t,r=Vf(n===`active`);function i(){r.value=!1}function a(){r.value=!0}return{isActive:nn(r),pause:i,resume:a,eventFilter:(...t)=>{r.value&&e(...t)}}}function qf(e){let t;function n(){return t||=e(),t}return n.reset=async()=>{let e=t;t=void 0,e&&await e},n}function Jf(e){return e.endsWith(`rem`)?Number.parseFloat(e)*16:Number.parseFloat(e)}function Yf(e){return Array.isArray(e)?e:[e]}function Xf(e){return e||go()}function Zf(e,t=200,n={}){return Hf(Wf(t,n),e)}function Qf(e,t=200,n=!1,r=!0,i=!1){return Hf(Gf(t,n,r,i),e)}function $f(e,t,n={}){let{eventFilter:r=Uf,...i}=n;return R(e,Hf(r,t),i)}function ep(e,t,n={}){let{eventFilter:r,initialState:i=`active`,...a}=n,{eventFilter:o,pause:s,resume:c,isActive:l}=Kf(r,{initialState:i});return{stop:$f(e,t,{...a,eventFilter:o}),pause:s,resume:c,isActive:l}}function tp(e,t=!0,n){Xf(n)?B(e,n):t?e():Wn(e)}function np(e,t){Xf(t)&&li(e,t)}function rp(e,t=1e3,n={}){let{immediate:r=!0,immediateCallback:i=!1}=n,a=null,o=F(!1);function s(){a&&=(clearInterval(a),null)}function c(){o.value=!1,s()}function l(){let n=I(t);n<=0||(o.value=!0,i&&e(),s(),o.value&&(a=setInterval(e,n)))}return r&&Pf&&l(),(fn(t)||typeof t==`function`)&&jf(R(t,()=>{o.value&&Pf&&l()})),jf(c),{isActive:nn(o),pause:c,resume:l}}function ip(e,t,n={}){let{immediate:r=!0,immediateCallback:i=!1}=n,a=F(!1),o;function s(){o&&=(clearTimeout(o),void 0)}function c(){a.value=!1,s()}function l(...n){i&&e(),s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=void 0,e(...n)},I(t))}return r&&(a.value=!0,Pf&&l()),jf(c),{isPending:nn(a),start:l,stop:c}}function ap(e=!1,t={}){let{truthyValue:n=!0,falsyValue:r=!1}=t,i=fn(e),a=F(e);function o(e){if(arguments.length)return a.value=e,a.value;{let e=I(n);return a.value=a.value===e?I(r):e,a.value}}return i?o:[a,o]}function op(e,t,n){return R(e,t,{...n,immediate:!0})}var sp=Pf?window:void 0,cp=Pf?window.document:void 0,lp=Pf?window.navigator:void 0;Pf&&window.location;function up(e){let t=I(e);return t?.$el??t}function X(...e){let t=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),n=W(()=>{let t=Yf(I(e[0])).filter(e=>e!=null);return t.every(e=>typeof e!=`string`)?t:void 0});return op(()=>[n.value?.map(e=>up(e))??[sp].filter(e=>e!=null),Yf(I(n.value?e[1]:e[0])),Yf(hn(n.value?e[2]:e[1])),I(n.value?e[3]:e[2])],([e,n,r,i],a,o)=>{if(!e?.length||!n?.length||!r?.length)return;let s=Lf(i)?{...i}:i,c=e.flatMap(e=>n.flatMap(n=>r.map(r=>t(e,n,r,s))));o(()=>{c.forEach(e=>e())})},{flush:`post`})}var dp=!1;function fp(e,t,n={}){let{window:r=sp,ignore:i=[],capture:a=!0,detectIframe:o=!1,controls:s=!1}=n;if(!r)return s?{stop:Rf,cancel:Rf,trigger:Rf}:Rf;if(zf&&!dp){dp=!0;let e={passive:!0};Array.from(r.document.body.children).forEach(t=>t.addEventListener(`click`,Rf,e)),r.document.documentElement.addEventListener(`click`,Rf,e)}let c=!0,l=e=>I(i).some(t=>{if(typeof t==`string`)return Array.from(r.document.querySelectorAll(t)).some(t=>t===e.target||e.composedPath().includes(t));{let n=up(t);return n&&(e.target===n||e.composedPath().includes(n))}});function u(e){let t=I(e);return t&&t.$.subTree.shapeFlag===16}function d(e,t){let n=I(e),r=n.$.subTree&&n.$.subTree.children;return r==null||!Array.isArray(r)?!1:r.some(e=>e.el===t.target||t.composedPath().includes(e.el))}let f=n=>{let r=up(e);if(n.target!=null&&!(!(r instanceof Element)&&u(e)&&d(e,n))&&!(!r||r===n.target||n.composedPath().includes(r))){if(`detail`in n&&n.detail===0&&(c=!l(n)),!c){c=!0;return}t(n)}},p=!1,m=[X(r,`click`,e=>{p||(p=!0,setTimeout(()=>{p=!1},0),f(e))},{passive:!0,capture:a}),X(r,`pointerdown`,t=>{let n=up(e);c=!l(t)&&!!(n&&!t.composedPath().includes(n))},{passive:!0}),o&&X(r,`blur`,n=>{setTimeout(()=>{let i=up(e),a=r.document.activeElement;for(;a?.shadowRoot;)a=a.shadowRoot.activeElement;a?.tagName===`IFRAME`&&!i?.contains(r.document.activeElement)&&t(n)},0)},{passive:!0})].filter(Boolean),h=()=>m.forEach(e=>e());return s?{stop:h,cancel:()=>{c=!1},trigger:e=>{c=!0,f(e),c=!1}}:h}function pp(){let e=F(!1),t=go();return t&&B(()=>{e.value=!0},t),e}function mp(e){let t=pp();return W(()=>(t.value,!!e()))}function hp(e,t,n={}){let{window:r=sp,...i}=n,a,o=mp(()=>r&&`MutationObserver`in r),s=()=>{a&&=(a.disconnect(),void 0)},c=R(W(()=>{let t=Yf(I(e)).map(up).filter(Ff);return new Set(t)}),e=>{s(),o.value&&e.size&&(a=new MutationObserver(t),e.forEach(e=>a.observe(e,i)))},{immediate:!0,flush:`post`}),l=()=>a?.takeRecords(),u=()=>{c(),s()};return jf(u),{isSupported:o,stop:u,takeRecords:l}}function gp(e,t,n={}){let{window:r=sp,document:i=r?.document,flush:a=`sync`}=n;if(!r||!i)return Rf;let o,s=e=>{o?.(),o=e},c=lr(()=>{let n=up(e);if(n){let{stop:e}=hp(i,e=>{e.map(e=>[...e.removedNodes]).flat().some(e=>e===n||e.contains(n))&&t(e)},{window:r,childList:!0,subtree:!0});s(e)}},{flush:a}),l=()=>{c(),s()};return jf(l),l}function _p(e,t={}){let{immediate:n=!0,fpsLimit:r=null,window:i=sp,once:a=!1}=t,o=F(!1),s=W(()=>{let e=I(r);return e?1e3/e:null}),c=0,l=null;function u(t){if(!o.value||!i)return;c||=t;let n=t-c;if(s.value&&n<s.value){l=i.requestAnimationFrame(u);return}if(c=t,e({delta:n,timestamp:t}),a){o.value=!1,l=null;return}l=i.requestAnimationFrame(u)}function d(){!o.value&&i&&(o.value=!0,c=0,l=i.requestAnimationFrame(u))}function f(){o.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return n&&d(),jf(f),{isActive:nn(o),pause:f,resume:d}}var vp=Symbol(`vueuse-ssr-width`);function yp(){let e=or()?Nf(vp,null):null;return typeof e==`number`?e:void 0}function bp(e,t={}){let{window:n=sp,ssrWidth:r=yp()}=t,i=mp(()=>n&&`matchMedia`in n&&typeof n.matchMedia==`function`),a=F(typeof r==`number`),o=F(),s=F(!1);return lr(()=>{if(a.value){a.value=!i.value,s.value=I(e).split(`,`).some(e=>{let t=e.includes(`not all`),n=e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),i=e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),a=!!(n||i);return n&&a&&(a=r>=Jf(n[1])),i&&a&&(a=r<=Jf(i[1])),t?!a:a});return}i.value&&(o.value=n.matchMedia(I(e)),s.value=o.value.matches)}),X(o,`change`,e=>{s.value=e.matches},{passive:!0}),W(()=>s.value)}function xp(e,t={}){let{controls:n=!1,navigator:r=lp}=t,i=mp(()=>r&&`permissions`in r),a=F(),o=typeof e==`string`?{name:e}:e,s=F(),c=()=>{s.value=a.value?.state??`prompt`};X(a,`change`,c,{passive:!0});let l=qf(async()=>{if(i.value){if(!a.value)try{a.value=await r.permissions.query(o)}catch{a.value=void 0}finally{c()}if(n)return N(a.value)}});return l(),n?{state:s,isSupported:i,query:l}:s}function Sp(e={}){let{navigator:t=lp,read:n=!1,source:r,copiedDuring:i=1500,legacy:a=!1}=e,o=mp(()=>t&&`clipboard`in t),s=xp(`clipboard-read`),c=xp(`clipboard-write`),l=W(()=>o.value||a),u=F(``),d=F(!1),f=F(!1),p=ip(()=>d.value=!1,i,{immediate:!1}),m=0;async function h(){let e=!(o.value&&b(s.value));if(!e)try{u.value=await t.clipboard.readText()}catch{e=!0}e&&(u.value=y())}l.value&&n&&X([`copy`,`cut`],h,{passive:!0});async function g(e){let n=e??I(r);if(l.value&&n!=null){f.value=!0;let e=!(o.value&&b(c.value));if(!e)try{let e=_(n);await t.clipboard.write([e])}catch{e=!0}if(e)if(typeof n==`string`)u.value=n,v(n);else{let e=++m,t=await n();t!=null&&e===m&&(u.value=t,v(t))}d.value=!0,p.start(),f.value=!1}}function _(e){return typeof e==`string`?(u.value=e,new ClipboardItem({"text/plain":e})):new ClipboardItem({"text/plain":e().then((e=``)=>(u.value=e,new Blob([e],{type:`text/plain`})))})}function v(e){let t=document.createElement(`textarea`);t.value=e,t.style.position=`absolute`,t.style.opacity=`0`,t.setAttribute(`readonly`,``),document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}function y(){var e,t;return((e=document)==null||(t=e.getSelection)==null||(t=t.call(e))==null?void 0:t.toString())??``}function b(e){return e===`granted`||e===`prompt`}return{copyPending:nn(f),isSupported:l,text:nn(u),copied:nn(d),copy:g}}var Cp=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},wp=`__vueuse_ssr_handlers__`,Tp=Ep();function Ep(){return wp in Cp||(Cp[wp]=Cp[wp]||{}),Cp[wp]}function Dp(e,t){return Tp[e]||t}function Op(e){return bp(`(prefers-color-scheme: dark)`,e)}function kp(e){return e==null?`any`:e instanceof Set?`set`:e instanceof Map?`map`:e instanceof Date?`date`:typeof e==`boolean`?`boolean`:typeof e==`string`?`string`:typeof e==`object`?`object`:Number.isNaN(e)?`any`:`number`}var Ap={boolean:{read:e=>e===`true`,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},jp=`vueuse-storage`;function Mp(e,t,n,r={}){let{flush:i=`pre`,deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:l,window:u=sp,eventFilter:d,onError:f=e=>{console.error(e)},initOnMounted:p}=r,m=(l?F:P)(typeof t==`function`?t():t),h=W(()=>I(e));if(!n)try{n=Dp(`getDefaultStorage`,()=>sp?.localStorage)()}catch(e){f(e)}if(!n)return m;let g=I(t),_=kp(g),v=r.serializer??Ap[_],{pause:y,resume:b}=ep(m,e=>C(e),{flush:i,deep:a,eventFilter:d});R(h,()=>T(),{flush:i});let x=!1;u&&o&&(n instanceof Storage?X(u,`storage`,e=>{p&&!x||T(e)},{passive:!0}):X(u,jp,e=>{p&&!x||E(e)})),p?tp(()=>{x=!0,T()}):T();function S(e,t){if(u){let r={key:h.value,oldValue:e,newValue:t,storageArea:n};u.dispatchEvent(n instanceof Storage?new StorageEvent(`storage`,r):new CustomEvent(jp,{detail:r}))}}function C(e){try{let t=n.getItem(h.value);if(e==null)S(t,null),n.removeItem(h.value);else{let r=v.write(e);t!==r&&(n.setItem(h.value,r),S(t,r))}}catch(e){f(e)}}function w(e){let t=e?e.newValue:n.getItem(h.value);if(t==null)return s&&g!=null&&n.setItem(h.value,v.write(g)),g;if(!e&&c){let e=v.read(t);return typeof c==`function`?c(e,g):_===`object`&&!Array.isArray(e)?{...g,...e}:e}else if(typeof t!=`string`)return t;else return v.read(t)}function T(e){if(!(e&&e.storageArea!==n)){if(e&&e.key==null){m.value=g;return}if(!(e&&e.key!==h.value)){y();try{let t=v.write(m.value);(e===void 0||e?.newValue!==t)&&(m.value=w(e))}catch(e){f(e)}finally{e?Wn(b):b()}}}}function E(e){T(e.detail)}return m}function Np(e,t,n={}){let{window:r=sp,...i}=n,a,o=mp(()=>r&&`ResizeObserver`in r),s=()=>{a&&=(a.disconnect(),void 0)},c=R(W(()=>{let t=I(e);return Array.isArray(t)?t.map(e=>up(e)):[up(t)]}),e=>{if(s(),o.value&&r){a=new ResizeObserver(t);for(let t of e)t&&a.observe(t,i)}},{immediate:!0,flush:`post`}),l=()=>{s(),c()};return jf(l),{isSupported:o,stop:l}}function Pp(e,t={}){let{delayEnter:n=0,delayLeave:r=0,triggerOnRemoval:i=!1,window:a=sp}=t,o=F(!1),s,c=e=>{let t=e?n:r;s&&=(clearTimeout(s),void 0),t?s=setTimeout(()=>o.value=e,t):o.value=e};return a?(X(e,`mouseenter`,()=>c(!0),{passive:!0}),X(e,`mouseleave`,()=>c(!1),{passive:!0}),i&&gp(W(()=>up(e)),()=>c(!1)),o):o}function Fp(e,t={width:0,height:0},n={}){let{window:r=sp,box:i=`content-box`}=n,a=W(()=>{var t;return(t=up(e))==null||(t=t.namespaceURI)==null?void 0:t.includes(`svg`)}),o=F(t.width),s=F(t.height),{stop:c}=Np(e,([t])=>{let n=i===`border-box`?t.borderBoxSize:i===`content-box`?t.contentBoxSize:t.devicePixelContentBoxSize;if(r&&a.value){let t=up(e);if(t){let e=t.getBoundingClientRect();o.value=e.width,s.value=e.height}}else if(n){let e=Yf(n);o.value=e.reduce((e,{inlineSize:t})=>e+t,0),s.value=e.reduce((e,{blockSize:t})=>e+t,0)}else o.value=t.contentRect.width,s.value=t.contentRect.height},n);tp(()=>{let n=up(e);n&&(o.value=`offsetWidth`in n?n.offsetWidth:t.width,s.value=`offsetHeight`in n?n.offsetHeight:t.height)});let l=R(()=>up(e),e=>{o.value=e?t.width:0,s.value=e?t.height:0});function u(){c(),l()}return{width:o,height:s,stop:u}}var Ip=[`fullscreenchange`,`webkitfullscreenchange`,`webkitendfullscreen`,`mozfullscreenchange`,`MSFullscreenChange`];function Lp(e,t={}){let{document:n=cp,autoExit:r=!1}=t,i=W(()=>up(e)??n?.documentElement),a=F(!1),o=W(()=>[`requestFullscreen`,`webkitRequestFullscreen`,`webkitEnterFullscreen`,`webkitEnterFullScreen`,`webkitRequestFullScreen`,`mozRequestFullScreen`,`msRequestFullscreen`].find(e=>n&&e in n||i.value&&e in i.value)),s=W(()=>[`exitFullscreen`,`webkitExitFullscreen`,`webkitExitFullScreen`,`webkitCancelFullScreen`,`mozCancelFullScreen`,`msExitFullscreen`].find(e=>n&&e in n||i.value&&e in i.value)),c=W(()=>[`fullScreen`,`webkitIsFullScreen`,`webkitDisplayingFullscreen`,`mozFullScreen`,`msFullscreenElement`].find(e=>n&&e in n||i.value&&e in i.value)),l=[`fullscreenElement`,`webkitFullscreenElement`,`mozFullScreenElement`,`msFullscreenElement`].find(e=>n&&e in n),u=mp(()=>i.value&&n&&o.value!==void 0&&s.value!==void 0&&c.value!==void 0),d=()=>l?n?.[l]===i.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{let e=i.value;if(e?.[c.value]!=null)return!!e[c.value]}}return!1};async function p(){if(!(!u.value||!a.value)){if(s.value)if(n?.[s.value]!=null)await n[s.value]();else{let e=i.value;e?.[s.value]!=null&&await e[s.value]()}a.value=!1}}async function m(){if(!u.value||a.value)return;f()&&await p();let e=i.value;o.value&&e?.[o.value]!=null&&(await e[o.value](),a.value=!0)}async function h(){await(a.value?p():m())}let g=()=>{let e=f();(!e||e&&d())&&(a.value=e)},_={capture:!1,passive:!0};return X(n,Ip,g,_),X(()=>up(i),Ip,g,_),tp(g,!1),r&&jf(p),{isSupported:u,isFullscreen:a,enter:m,exit:p,toggle:h}}function Rp(e){return typeof Window<`u`&&e instanceof Window?e.document.documentElement:typeof Document<`u`&&e instanceof Document?e.documentElement:e}var zp=1;function Bp(e,t={}){let{throttle:n=0,idle:r=200,onStop:i=Rf,onScroll:a=Rf,offset:o={left:0,right:0,top:0,bottom:0},observe:s={mutation:!1},eventListenerOptions:c={capture:!1,passive:!0},behavior:l=`auto`,window:u=sp,onError:d=e=>{console.error(e)}}=t,f=typeof s==`boolean`?{mutation:s}:s,p=F(0),m=F(0),h=W({get(){return p.value},set(e){_(e,void 0)}}),g=W({get(){return m.value},set(e){_(void 0,e)}});function _(t,n){var r,i;if(!u)return;let a=I(e);if(!a)return;(r=a instanceof Document?u.document.body:a)==null||r.scrollTo({top:I(n)??g.value,left:I(t)??h.value,behavior:I(l)});let o=(a==null||(i=a.document)==null?void 0:i.documentElement)||a?.documentElement||a;h!=null&&(p.value=o.scrollLeft),g!=null&&(m.value=o.scrollTop)}let v=F(!1),y=$t({left:!0,right:!1,top:!0,bottom:!1}),b=$t({left:!1,right:!1,top:!1,bottom:!1}),x=e=>{v.value&&(v.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,i(e))},S=Zf(x,n+r),C=e=>{var t;if(!u)return;let n=(e==null||(t=e.document)==null?void 0:t.documentElement)||e?.documentElement||up(e),{display:r,flexDirection:i,direction:a}=u.getComputedStyle(n),s=a===`rtl`?-1:1,c=n.scrollLeft;b.left=c<p.value,b.right=c>p.value;let l=Math.abs(c*s)<=(o.left||0),d=Math.abs(c*s)+n.clientWidth>=n.scrollWidth-(o.right||0)-zp;r===`flex`&&i===`row-reverse`?(y.left=d,y.right=l):(y.left=l,y.right=d),p.value=c;let f=n.scrollTop;e===u.document&&!f&&(f=u.document.body.scrollTop),b.top=f<m.value,b.bottom=f>m.value;let h=Math.abs(f)<=(o.top||0),g=Math.abs(f)+n.clientHeight>=n.scrollHeight-(o.bottom||0)-zp;r===`flex`&&i===`column-reverse`?(y.top=g,y.bottom=h):(y.top=h,y.bottom=g),m.value=f},w=e=>{u&&(C(e.target.documentElement??e.target),v.value=!0,S(e),a(e))};return X(e,`scroll`,n?Qf(w,n,!0,!1):w,c),tp(()=>{try{let t=I(e);if(!t)return;C(t)}catch(e){d(e)}}),f?.mutation&&e!=null&&e!==u&&e!==document&&hp(e,()=>{let t=I(e);t&&C(t)},{attributes:!0,childList:!0,subtree:!0}),X(e,`scrollend`,x,c),{x:h,y:g,isScrolling:v,arrivedState:y,directions:b,measure(){let t=I(e);u&&t&&C(t)}}}function Vp(e,t,n={}){let{window:r=sp}=n;return Mp(e,t,r?.localStorage,n)}function Hp(e){if(`interval`in e||`immediate`in e){let{interval:t=`requestAnimationFrame`,immediate:n=!0}=e;return t===`requestAnimationFrame`?e=>_p(e,{immediate:n}):n=>rp(n,t,e)}return _p}function Up(e={}){let{controls:t=!1,scheduler:n=Hp(e)}=e,r=F(new Date),i=n(()=>r.value=new Date);return t?{now:r,...i}:r}function Wp(e={}){let{window:t=sp}=e;if(!t)return F([`en`]);let n=t.navigator,r=F(n.languages);return X(t,`languagechange`,()=>{r.value=n.languages},{passive:!0}),r}function Gp(e,t=Rf,n={}){let{immediate:r=!0,manual:i=!1,type:a=`text/javascript`,async:o=!0,crossOrigin:s,referrerPolicy:c,noModule:l,defer:u,document:d=cp,attrs:f={},nonce:p=void 0}=n,m=F(null),h=null,g=n=>new Promise((r,i)=>{let h=e=>(m.value=e,r(e),e);if(!d){r(!1);return}let g=!1,_=d.querySelector(`script[src="${I(e)}"]`);_?_.hasAttribute(`data-loaded`)&&h(_):(_=d.createElement(`script`),_.type=a,_.async=o,_.src=I(e),u&&(_.defer=u),s&&(_.crossOrigin=s),l&&(_.noModule=l),c&&(_.referrerPolicy=c),p&&(_.nonce=p),Object.entries(f).forEach(([e,t])=>_?.setAttribute(e,t)),g=!0);let v={passive:!0};X(_,`error`,e=>i(e),v),X(_,`abort`,e=>i(e),v),X(_,`load`,()=>{_.setAttribute(`data-loaded`,`true`),t(_),h(_)},v),g&&(_=d.head.appendChild(_)),n||h(_)}),_=(e=!0)=>(h||=g(e),h),v=()=>{if(!d)return;h=null,m.value&&=null;let t=d.querySelector(`script[src="${I(e)}"]`);t&&d.head.removeChild(t)};return r&&!i&&tp(_),i||np(v),{scriptTag:m,load:_,unload:v}}function Kp(e){let t=window.getComputedStyle(e);if(t.overflowX===`scroll`||t.overflowY===`scroll`||t.overflowX===`auto`&&e.clientWidth<e.scrollWidth||t.overflowY===`auto`&&e.clientHeight<e.scrollHeight)return!0;{let t=e.parentNode;return!t||t.tagName===`BODY`?!1:Kp(t)}}function qp(e){let t=e||window.event,n=t.target;return Kp(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}var Jp=new WeakMap;function Yp(e,t=!1){let n=F(t),r=null,i=``;R(Vf(e),e=>{let t=Rp(I(e));if(t){let e=t;if(Jp.get(e)||Jp.set(e,e.style.overflow),e.style.overflow!==`hidden`&&(i=e.style.overflow),e.style.overflow===`hidden`)return n.value=!0;if(n.value)return e.style.overflow=`hidden`}},{immediate:!0});let a=()=>{let t=Rp(I(e));!t||n.value||(zf&&(r=X(t,`touchmove`,e=>{qp(e)},{passive:!1})),t.style.overflow=`hidden`,n.value=!0)},o=()=>{let t=Rp(I(e));!t||!n.value||(zf&&r?.(),t.style.overflow=i,Jp.delete(t),n.value=!1)};return jf(o),W({get(){return n.value},set(e){e?a():o()}})}function Xp(e,t,n={}){let{window:r=sp}=n;return Mp(e,t,r?.sessionStorage,n)}var Zp=0;function Qp(e,t={}){let n=F(!1),{document:r=cp,immediate:i=!0,manual:a=!1,id:o=`vueuse_styletag_${++Zp}`}=t,s=F(e),c=()=>{},l=()=>{if(!r)return;let e=r.getElementById(o)||r.createElement(`style`);e.isConnected||(e.id=o,t.nonce&&(e.nonce=t.nonce),t.media&&(e.media=t.media),r.head.appendChild(e)),!n.value&&(c=R(s,t=>{e.textContent=t},{immediate:!0}),n.value=!0)},u=()=>{!r||!n.value||(c(),r.head.removeChild(r.getElementById(o)),n.value=!1)};return i&&!a&&tp(l),a||jf(u),{id:o,css:s,unload:u,load:l,isLoaded:nn(n)}}function $p(e={}){let{window:t=sp,...n}=e;return Bp(t,n)}function em(e={}){let{window:t=sp,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:a=!0,type:o=`inner`}=e,s=F(n),c=F(r),l=()=>{if(t)if(o===`outer`)s.value=t.outerWidth,c.value=t.outerHeight;else if(o===`visual`&&t.visualViewport){let{width:e,height:n,scale:r}=t.visualViewport;s.value=Math.round(e*r),c.value=Math.round(n*r)}else a?(s.value=t.innerWidth,c.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight)};l(),tp(l);let u={passive:!0};return X(`resize`,l,u),t&&o===`visual`&&t.visualViewport&&X(t.visualViewport,`resize`,l,u),i&&R(bp(`(orientation: portrait)`),()=>l()),{width:s,height:c}}var tm=e=>Af(Tf(kf(atob(e),!0))),nm=e=>{let t=e.replaceAll(`<br>`,`<br />`).replaceAll(`%`,`%25`).replaceAll(`"`,`%22`).replaceAll(`'`,`%27`).replaceAll(`&`,`%26`).replaceAll(`#`,`%23`).replaceAll(`{`,`%7B`).replaceAll(`}`,`%7D`).replaceAll(`<`,`%3C`).replaceAll(`>`,`%3E`);return e.includes(`xmlns`)||(t=t.replace(`<svg`,`<svg xmlns="http://www.w3.org/2000/svg"`)),`data:image/svg+xml;charset=utf8,${t}`},rm=()=>navigator.userAgentData?.platform??navigator.platform,im=()=>navigator.userAgent,am=()=>/\biPhone\b/iu.test(rm()),om=()=>/\biPad\b/iu.test(rm()),sm=()=>/ios/iu.test(rm())||am()||om(),cm=()=>{let e=rm();return e?/mac/iu.test(e):/macintosh|mac os x/iu.test(im())&&!sm()},lm=()=>document.documentElement.dataset.theme===`dark`,um=Array.from({length:6},(e,t)=>`[vp-content] h${t+1}`).join(`,`),dm=(e,t=2)=>{if(t===!1)return[];let[n,r]=typeof t==`number`?[t,t]:t===`deep`?[2,6]:t,i=e.filter(e=>e.level>=n&&e.level<=r),a=[];outer:for(let e=0;e<i.length;e++){let t=i[e];if(e!==0)for(let n=e-1;n>=0;n--){let e=i[n];if(e.level<t.level){e.children.push(t);continue outer}}a.push(t)}return a},fm=(e,t=[])=>{let n;if(t.length>0){let r=e.cloneNode(!0);r.querySelectorAll(t.join(`,`)).forEach(e=>{e.remove()}),n=r.textContent||``}else n=e.textContent||``;return n.trim()},pm=(e=um,t=[])=>[...document.querySelectorAll(e)].filter(e=>e.id&&e.hasChildNodes()).map(e=>({element:e,title:fm(e,t),link:`#${e.id}`,slug:e.id,level:Number(e.tagName[1]),children:[]})),mm=({selector:e=um,levels:t=2,ignore:n=[]}={})=>dm(pm(e,n),t),hm=e=>e.every(e=>e.type===za?!0:e.type===La?e.children==null||Id(e.children)&&hm(e.children):!1),gm=e=>e==null?!0:Id(e)?hm(e):!1,_m=(e,t)=>{let n=(t?._instance??go())?.appContext.components;return n?e in n||j(e)in n||fe(j(e))in n:!1},vm=`message-container`,ym=class e{elements;constructor(){this.elements={}}static get containerElement(){let e=document.querySelector(`#${vm}`);return e||(e=document.createElement(`div`),e.id=vm,document.body.append(e),e)}getElement(e){return this.elements[e]}pop(t,n=2e3,r=!0){let i=Date.now(),a=document.createElement(`div`);return a.className=`message-item move-in`,a.innerHTML=t,e.containerElement.append(a),this.elements[i]=a,r&&a.addEventListener(`click`,()=>{this.close(i)}),n>0&&setTimeout(()=>{this.close(i)},n),i}close(e){if(e==null)Vd(this.elements).forEach(e=>{this.close(Number(e))});else{let t=this.elements[e];t.classList.remove(`move-in`),t.classList.add(`move-out`),t.addEventListener(`animationend`,()=>{t.remove(),delete this.elements[e]})}}destroy(){document.querySelector(`#${vm}`)?.remove(),this.elements={}}},bm=e=>new Promise(t=>{setTimeout(t,e)}),xm=e=>typeof e==`number`?`${e}px`:e,Sm=({size:e=48,stroke:t=4,wrapper:n=!0,height:r=2*e})=>{let i=G(`span`,{style:`\
--loading-icon: url("${nm(`<svg preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg>`)}");\
--icon-size: ${xm(e)};\
display: inline-block;\
width: var(--icon-size);\
height: var(--icon-size);\
background-color: currentcolor;\
-webkit-mask-image: var(--loading-icon);\
mask-image: var(--loading-icon)\
`});return n?G(`div`,{style:`\
display: flex;\
align-items: center;\
justify-content: center;\
height: ${xm(r)}\
`},i):i};Sm.displayName=`LoadingIcon`;var Cm=(e,{slots:t})=>t.default(),wm=Symbol(``),Tm=P(!1);typeof document<`u`&&(Tm.value=lm(),new MutationObserver(()=>{Tm.value=lm()}).observe(document.documentElement,{attributeFilter:[`data-theme`],attributes:!0}));var Em=()=>tn(L(wm,Tm)),Dm=(e={})=>{let t=P([]);return vd(n=>{t.value=n===`beforeUnmount`?[]:mm(I(e))}),t},Om=e=>{let t=ud();return W(()=>{let n=I(e);return n[t.value]??n[`/`]??Object.values(n)[0]})},km={"/":{contributors:`贡献者`,changelog:`更新日志`,timeOn:`于`,viewChangelog:`查看所有更新日志`,latestUpdateAt:`最近更新`}},Am=()=>Om(km),jm=({level:e=2,text:t,anchor:n})=>G(`h${e||2}`,{id:n,tabindex:`-1`},G(`a`,{href:`#${n}`,class:`header-anchor`},G(`span`,t))),Mm=(e=!0)=>{let{frontmatter:t,page:n}=pd();return W(()=>t.value.contributors===!1||!I(e)?[]:n.value.git.contributors??[])},Nm=({name:e,url:t,avatar:n})=>G(t?`a`:`span`,{href:t,target:`_blank`,rel:`noreferrer`,class:`vp-contributor`},[n?G(`img`,{src:n,alt:``,class:`vp-contributor-avatar`}):null,G(`span`,{class:`vp-contributor-name`},e)]),Pm=z({name:`GitContributors`,props:{title:String,headerLevel:{type:Number,default:2}},setup(e){let t=Mm(),n=Am();return()=>t.value.length>0?[G(jm,{level:e.headerLevel,anchor:`doc-contributors`,text:e.title||n.value.contributors}),G(`div`,{class:`vp-contributors`},t.value.map(e=>G(Nm,e)))]:null}}),Fm=c({default:()=>Im}),Im={enhance:({app:e})=>{e.component(`GitContributors`,Pm)}},Lm=c({}),Rm=c({}),zm=(e,t)=>t===`json`?JSON.parse(e):Function(`\
let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;\
`)(),Bm=z({name:`ChartJS`,props:{config:{type:String,required:!0},title:String,type:{type:String,default:`json`}},setup(e){let t=Em(),n=F(),r=jr(),i=P(!1),a,o=()=>{a?.destroy(),a=null},s=async()=>{let{default:n}=await J(async()=>{let{default:e}=await import(`./auto-DEUWZxU8.js`);return{default:e}},[]);n.defaults.borderColor=t.value?`#ccc`:`#36A2EB`,n.defaults.color=t.value?`#fff`:`#000`,n.defaults.maintainAspectRatio=!1,a=new n(r,zm(tm(e.config),e.type))};return B(()=>{op(t,async()=>{o(),await Wn(),await s(),i.value=!0},{flush:`post`})}),li(o),()=>[e.title?G(`div`,{class:`chartjs-title`},decodeURIComponent(e.title)):null,i.value?null:G(Sm,{class:`chartjs-loading`,height:192}),G(`div`,{ref:n,class:`chartjs-wrapper`,style:{display:i.value?`block`:`none`}},G(`canvas`,{id:r,height:400}))]}}),Vm={},Hm=()=>Vm,Um=(async()=>{}).constructor,Wm=(e,t,n,r)=>t===`js`?Um(`echarts`,`myChart`,`\
let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n,r):Promise.resolve({option:JSON.parse(e)}),Gm=z({name:`ECharts`,props:{config:{type:String,required:!0},title:String,type:{type:String,default:`json`}},setup(e){let t=Hm(),n=F(),r=P(!1),i=null;X(`resize`,Zf(()=>{i?.resize()},100));let a=()=>{i?.dispose(),i=null},o=async()=>{let r=await J(()=>import(`./echarts-BccFEz84.js`),[]);t.isSetup||=(await t.setup?.(),!0),i=r.init(n.value);let{option:a,...o}=await Wm(tm(e.config),e.type,r,i);i.resize(o),i.setOption({...t.option,...a})};return vd(async e=>{e===`mounted`&&(await o(),r.value=!0)}),B(()=>{}),li(a),()=>[e.title?G(`div`,{class:`echarts-title`},decodeURIComponent(e.title)):null,G(`div`,{class:`echarts-wrapper`},[G(`div`,{ref:n,class:`echarts-container`}),r.value?null:G(Sm,{class:`echarts-loading`,height:360})])]}}),Km={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":`#8DA1AC`,"line-color":`#8DA1AC`,"element-color":`black`,fill:`white`,"yes-text":`Yes`,"no-text":`No`,"arrow-end":`block`,scale:1},qm={...Km,symbols:{start:{class:`start-element`,"font-color":`#fff`,fill:`#595959`,"line-width":0},end:{class:`end-element`,"font-color":`#fff`,fill:`#595959`,"line-width":0},operation:{class:`operation-element`,"font-color":`#fff`,fill:`#1890ff`,"line-width":0},inputoutput:{class:`inputoutput-element`,"font-color":`#fff`,fill:`#1890ff`,"line-width":0},subroutine:{class:`subroutine-element`,"font-color":`#fff`,fill:`#FF485E`,"element-color":`#fff`,"line-color":`red`},condition:{class:`condition-element`,"font-color":`#fff`,fill:`#FF485E`,"line-width":0},parallel:{class:`parallel-element`,"font-color":`#fff`,fill:`#1890ff`,"line-width":0}}},Jm={...Km,"line-width":1,symbols:{start:{class:`start-element`,fill:`#ccc`,"line-color":`#5c6ac4`,"font-color":`#000`},end:{class:`end-element`,fill:`#ccc`,"line-color":`#5c6ac4`,"font-color":`#000`},operation:{class:`operation-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},inputoutput:{class:`inputoutput-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},subroutine:{class:`subroutine-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},condition:{class:`condition-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},parallel:{class:`parallel-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`}}},Ym={ant:qm,vue:{...Km,symbols:{start:{class:`start-element`,"font-color":`#fff`,fill:`#2F495F`,"line-width":0},end:{class:`end-element`,"font-color":`#fff`,fill:`#2F495F`,"line-width":0},operation:{class:`operation-element`,"font-color":`#fff`,fill:`#00BC7D`,"line-width":0},inputoutput:{class:`inputoutput-element`,"font-color":`#fff`,fill:`#EB4D5D`,"line-width":0},subroutine:{class:`subroutine-element`,"font-color":`#fff`,fill:`#937AC4`,"element-color":`#fff`,"line-color":`red`},condition:{class:`condition-element`,"font-color":`#fff`,fill:`#FFB500`,"line-width":0},parallel:{class:`parallel-element`,"font-color":`#fff`,fill:`#2F495F`,"line-width":0}}},pie:Jm},Xm=e=>e<419?.8:e>1280?1:.9,Zm=z({name:`FlowChart`,props:{code:{type:String,required:!0},preset:{type:String,default:`vue`}},setup(e){let t=jr(),{code:n,preset:r}=bn(e),i=F(),a=P(!1),o=P(1),s=null;X(`resize`,Zf(()=>{if(s){let n=Xm(window.innerWidth);o.value!==n&&(o.value=n,s.draw(t,{...Ym[e.preset],scale:n}))}},100));let c=()=>{s?.clean(),s=null},l=async()=>{let{parse:r}=await J(async()=>{let{parse:e}=await import(`./flowchart-Uxk5hHOl.js`);return{parse:e}},[]);s=r(tm(n.value)),o.value=Xm(window.innerWidth),a.value=!0,s.draw(t,{...Ym[e.preset],scale:o.value})};return vd(async e=>{e===`mounted`&&await l()}),B(()=>{}),li(c),()=>[a.value?null:G(Sm,{class:`flowchart-loading`,height:192}),G(`div`,{ref:i,class:[`flowchart-wrapper`,e.preset],id:t,style:{display:a.value?`block`:`none`}})]}}),Qm={},$m=()=>Qm,eh={useMaxWidth:!1},th=z({name:`Mermaid`,props:{code:{type:String,required:!0},title:String},setup(e){let t=jr(),n=Em(),{themeVariables:r,...i}=$m(),a=F(),o=W(()=>tm(e.code)),s=P(``),c=async()=>{let{default:e}=await J(async()=>{let{default:e}=await import(`./mermaid.esm.min-CPKzNOsU.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));e.initialize({theme:n.value?`dark`:`default`,themeVariables:{dark:n.value,...Wc(r)?r(n.value):r},flowchart:eh,sequence:eh,journey:eh,gantt:eh,er:eh,pie:eh,...i,startOnLoad:!1}),s.value=(await e.render(t,o.value)).svg},l=()=>{let{body:e}=document,t=document.createElement(`div`);t.classList.add(`mermaid-preview`),t.innerHTML=s.value,e.append(t),t.addEventListener(`click`,()=>{t.remove()})},u=()=>{let n=nm(s.value),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,`${e.title?tm(e.title):t}.svg`),r.click()};return B(()=>{op(n,c,{flush:`post`})}),()=>[G(`div`,{class:`mermaid-actions`},[G(`button`,{class:`preview-button`,title:`preview`,innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>`,onClick:l}),G(`button`,{class:`download-button`,title:`download`,innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>`,onClick:u})]),G(`div`,{ref:a,class:`mermaid-wrapper`},s.value?G(`div`,{class:`mermaid-content`,innerHTML:s.value}):G(Sm,{class:`mermaid-loading`,height:96}))]}}),nh=c({default:()=>rh}),rh=Nd({enhance:({app:e})=>{e.component(`ChartJS`,Bm),e.component(`ECharts`,Gm),e.component(`FlowChart`,Zm),e.component(`Mermaid`,th)}}),ih=c({}),ah=c({default:()=>oh}),oh=Nd({setup(){X(`beforeprint`,()=>{document.querySelectorAll(`details`).forEach(e=>{e.open=!0})},{passive:!0})}}),sh=c({}),ch=Mp(`VUEPRESS_CODE_TAB_STORE`,{}),lh=z({name:`CodeTabs`,props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){let n=e.data.map(()=>jr()),r=P(e.active),i=F([]),a=()=>{e.tabId&&(ch.value[e.tabId]=e.data[r.value].id)},o=(e=r.value)=>{r.value=e<i.value.length-1?e+1:0,i.value[r.value].focus()},s=(e=r.value)=>{r.value=e>0?e-1:i.value.length-1,i.value[r.value].focus()},c=(t,n)=>{t.key===` `||t.key===`Enter`?(t.preventDefault(),r.value=n):t.key===`ArrowRight`?(t.preventDefault(),o()):t.key===`ArrowLeft`&&(t.preventDefault(),s()),e.tabId&&(ch.value[e.tabId]=e.data[r.value].id)},l=()=>{if(e.tabId){let t=e.data.findIndex(({id:t})=>ch.value[e.tabId]===t);if(t!==-1)return t}return e.active};return B(()=>{r.value=l(),R(()=>e.tabId&&ch.value[e.tabId],(t,n)=>{if(e.tabId&&t!==n){let n=e.data.findIndex(({id:e})=>e===t);n!==-1&&(r.value=n)}})}),()=>e.data.length?G(`div`,{class:`vp-code-tabs`},[G(`div`,{class:`vp-code-tabs-nav`,role:`tablist`},e.data.map(({id:e},o)=>{let s=o===r.value;return G(`button`,{type:`button`,ref:e=>{e&&(i.value[o]=e)},class:[`vp-code-tab-nav`,{active:s}],role:`tab`,"aria-controls":n[o],"aria-selected":s,onClick:()=>{r.value=o,a()},onKeydown:e=>{c(e,o)}},t[`title${o}`]({value:e,isActive:s}))})),e.data.map(({id:e},i)=>{let a=i===r.value;return G(`div`,{class:[`vp-code-tab`,{active:a}],id:n[i],role:`tabpanel`,"aria-expanded":a},[G(`div`,{class:`vp-code-tab-title`},t[`title${i}`]({value:e,isActive:a})),t[`tab${i}`]({value:e,isActive:a})])})]):null}}),uh=Mp(`VUEPRESS_TAB_STORE`,{}),dh=z({name:`Tabs`,props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){let n=e.data.map(()=>jr()),r=P(e.active),i=F([]),a=()=>{e.tabId&&(uh.value[e.tabId]=e.data[r.value].id)},o=(e=r.value)=>{r.value=e<i.value.length-1?e+1:0,i.value[r.value].focus()},s=(e=r.value)=>{r.value=e>0?e-1:i.value.length-1,i.value[r.value].focus()},c=(e,t)=>{e.key===` `||e.key===`Enter`?(e.preventDefault(),r.value=t):e.key===`ArrowRight`?(e.preventDefault(),o()):e.key===`ArrowLeft`&&(e.preventDefault(),s()),a()},l=()=>{if(e.tabId){let t=e.data.findIndex(({id:t})=>uh.value[e.tabId]===t);if(t!==-1)return t}return e.active};return B(()=>{r.value=l(),R(()=>e.tabId&&uh.value[e.tabId],(t,n)=>{if(e.tabId&&t!==n){let n=e.data.findIndex(({id:e})=>e===t);n!==-1&&(r.value=n)}})}),()=>e.data.length?G(`div`,{class:`vp-tabs`},[G(`div`,{class:`vp-tabs-nav`,role:`tablist`},e.data.map(({id:e},o)=>{let s=o===r.value;return G(`button`,{type:`button`,ref:e=>{e&&(i.value[o]=e)},class:[`vp-tab-nav`,{active:s}],role:`tab`,"aria-controls":n[o],"aria-selected":s,onClick:()=>{r.value=o,a()},onKeydown:e=>{c(e,o)}},t[`title${o}`]({value:e,isActive:s}))})),e.data.map(({id:e},i)=>{let a=i===r.value;return G(`div`,{class:[`vp-tab`,{active:a}],id:n[i],role:`tabpanel`,"aria-expanded":a},[G(`div`,{class:`vp-tab-title`},t[`title${i}`]({value:e,isActive:a})),t[`tab${i}`]({value:e,isActive:a})])})]):null}}),fh=c({default:()=>ph}),ph={enhance:({app:e})=>{e.component(`CodeTabs`,lh),e.component(`Tabs`,dh)}},mh=`<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>`,hh=`<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>`,gh=`<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>`,_h={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:`left`,codepenEditors:`101`,babel:`https://unpkg.com/@babel/standalone/babel.min.js`,vue:`https://unpkg.com/vue/dist/vue.global.prod.js`,react:`https://unpkg.com/react/umd/react.production.min.js`,reactDOM:`https://unpkg.com/react-dom/umd/react-dom.production.min.js`},vh={html:{types:[`html`,`slim`,`haml`,`md`,`markdown`,`vue`],map:{html:`none`,vue:`none`,md:`markdown`}},js:{types:[`js`,`javascript`,`coffee`,`coffeescript`,`ts`,`typescript`,`ls`,`livescript`],map:{js:`none`,javascript:`none`,coffee:`coffeescript`,ls:`livescript`,ts:`typescript`}},css:{types:[`css`,`less`,`sass`,`scss`,`stylus`,`styl`],map:{css:`none`,styl:`stylus`}}},yh=(e,t,n)=>{let r=document.createElement(e);return Gc(t)&&Vd(t).forEach(e=>{if(e.indexOf(`data`))r[e]=t[e];else{let n=e.replace(`data`,``);r.dataset[n]=t[e]}}),n&&n.forEach(e=>{r.append(e)}),r},bh=e=>({..._h,...e,jsLib:[...new Set([_h.jsLib,e.jsLib??[]].flat())],cssLib:[...new Set([_h.cssLib,e.cssLib??[]].flat())]}),xh=(e,t)=>{if(Pd(e[t]))return e[t];let n=new Promise(e=>{let n=document.createElement(`script`);n.src=t,document.querySelector(`body`)?.append(n),n.addEventListener(`load`,()=>{e()})});return e[t]=n,n},Sh=(e,t)=>{if(t.css&&[...e.childNodes].every(e=>e.nodeName!==`STYLE`)){let n=yh(`style`,{innerHTML:t.css});e.append(n)}},Ch=(e,t,n)=>{let r=n.getScript();if(r&&[...t.childNodes].every(e=>e.nodeName!==`SCRIPT`)){let n=document.createElement(`script`);n.append(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;\n${r}}`)),t.append(n)}},wh=[`html`,`js`,`css`],Th=e=>{let t=Vd(e),n={html:[],js:[],css:[],isLegal:!1};return wh.forEach(r=>{let i=t.filter(e=>vh[r].types.includes(e));if(i.length>0){let[t]=i;n[r]=[e[t].trim(),vh[r].map[t]??t]}}),n.isLegal=(n.html.length===0||n.html[1]===`none`)&&(n.js.length===0||n.js[1]===`none`)&&(n.css.length===0||n.css[1]===`none`),n},Eh=e=>e.replaceAll(String.raw`<br \/>`,`<br>`).replaceAll(/<((\S+)[^<]*?)\s+\/>/gu,`<$1></$2>`),Dh=e=>`<div id="app">\n${Eh(e)}\n</div>`,Oh=e=>`${e.replace(`export default `,`const $reactApp = `).replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/u,``)};\nReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,kh=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,`Vue.createApp({$1}).mount('#app')`).replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,`Vue.createApp({$1}).mount('#app')`).trim(),Ah=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?exports.default:module.exports;})({})`,jh=(e,t)=>{let n=bh(t),r=e.js[0]??``;return{...n,html:Eh(e.html[0]??``),js:r,css:e.css[0]??``,isLegal:e.isLegal,getScript:()=>n.useBabel?globalThis.Babel?.transform(r,{presets:[`es2015`]})?.code??``:r}},Mh=/<template>([\s\S]+)<\/template>/u,Nh=/<script(?:\s*lang=(['"])(.*?)\1)?>([\s\S]+)<\/script>/u,Ph=/<style(?:\s*lang=(['"])(.*?)\1)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Fh=(e,t)=>{let n=bh(t),r=e.html[0]??``,i=Nh.exec(r),a=Ph.exec(r),o=Mh.exec(r)?.[1].trim()??``,s=i?.[3].trim()??``,c=i?.[2]??``,l=a?.[3].trim()??``,u=a?.[2]??``,d=c===``&&(u===``||u===`css`);return{...n,html:Dh(o),js:kh(s),css:l,isLegal:d,jsLib:[n.vue,...n.jsLib],getScript:()=>`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Ah(t.useBabel?globalThis.Babel?.transform(s,{presets:[`es2015`]})?.code??``:s.replace(/export\s+default/u,`return`))};appOptions.template=\`${o.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}},Ih=(e,t)=>{let n=bh(t),r=e.js[0]??``;return{...n,html:Dh(``),js:Oh(r),css:e.css[0]??e.js[0]?.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/u,`$1`).trim()??``,isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Ah(globalThis.Babel?.transform(r,{presets:[`es2015`,`react`]})?.code??``)}))`}},Lh={},Rh=async e=>{await Promise.all([xh(Lh,e.babel),xh(Lh,e.react),xh(Lh,e.reactDOM)])},zh=async e=>{let t=[xh(Lh,e.vue)];e.useBabel&&t.push(xh(Lh,e.babel)),await Promise.all(t)},Bh=e=>e.useBabel?xh(Lh,e.babel):Promise.resolve(),Vh=z({name:`CodeDemo`,props:{id:{type:String,required:!0},type:{type:String,default:`normal`},title:String,config:String,code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){let[n,r]=ap(!1),i=F(),a=F(),o=P(`0`),s=P(!1),c=W(()=>JSON.parse(e.config?tm(e.config):`{}`)),l=W(()=>Th(JSON.parse(tm(e.code)))),u=W(()=>e.type===`react`?Ih(l.value,c.value):e.type===`vue`?Fh(l.value,c.value):jh(l.value,c.value)),d=W(()=>u.value.isLegal),f=(t=!1)=>{let n=i.value.attachShadow({mode:`open`}),r=document.createElement(`div`);r.classList.add(`code-demo-app`),n.append(r),d.value?(t&&(r.innerHTML=u.value.html),Sh(n,u.value),Ch(e.id,n,u.value),o.value=`0`):o.value=`auto`,s.value=!0},p=async()=>{switch(e.type){case`react`:await Rh(u.value),f();break;case`vue`:await zh(u.value),f();break;default:await Bh(u.value),f(!0)}},m=null;return X(`beforeprint`,()=>{m=n.value,n.value||r(!0)}),X(`afterprint`,()=>{m===!1&&r(!1),m=null}),Np(a,()=>{n.value&&(o.value=`${a.value.clientHeight+14}px`)}),B(async()=>{await p()}),()=>G(`div`,{class:`vp-container vp-code-demo`,id:e.id},[G(`div`,{class:`vp-container-header`},[u.value.isLegal?G(`button`,{type:`button`,title:`toggle`,class:[`vp-code-demo-toggle-button`,n.value?`down`:`end`],onClick:()=>{o.value=n.value?`0`:`${a.value.clientHeight+14}px`,r()}}):null,e.title?G(`span`,{class:`vp-container-title`},decodeURIComponent(e.title)):null,u.value.isLegal&&(u.value.jsfiddle??!0)?G(`form`,{class:`code-demo-jsfiddle`,target:`_blank`,action:`https://jsfiddle.net/api/post/library/pure/`,method:`post`},[G(`input`,{type:`hidden`,name:`html`,value:u.value.html}),G(`input`,{type:`hidden`,name:`js`,value:u.value.js}),G(`input`,{type:`hidden`,name:`css`,value:u.value.css}),G(`input`,{type:`hidden`,name:`wrap`,value:`1`}),G(`input`,{type:`hidden`,name:`panel_js`,value:`3`}),G(`input`,{type:`hidden`,name:`resources`,value:[...u.value.cssLib,...u.value.jsLib].join(`,`)}),G(`button`,{type:`submit`,class:`jsfiddle-button`,innerHTML:hh,"aria-label":`JSFiddle`,"data-balloon-pos":`down`})]):null,!u.value.isLegal||(u.value.codepen??!0)?G(`form`,{class:`code-demo-codepen`,target:`_blank`,action:`https://codepen.io/pen/define`,method:`post`},[G(`input`,{type:`hidden`,name:`data`,value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(`;`),css_external:u.value.cssLib.join(`;`),layout:u.value.codepenLayout,html_pre_processor:l.value.html[1]??`none`,js_pre_processor:l.value.js[1]??(u.value.jsx?`babel`:`none`),css_pre_processor:l.value.css[1]??`none`,editors:u.value.codepenEditors})}),G(`button`,{type:`submit`,innerHTML:mh,class:`codepen-button`,"aria-label":`Codepen`,"data-balloon-pos":`down`})]):null]),s.value?null:G(Sm,{class:`vp-code-demo-loading`}),G(`div`,{ref:i,class:`vp-code-demo-display`,style:{display:d.value&&s.value?`block`:`none`}}),G(`div`,{class:`vp-code-demo-code-wrapper`,style:{height:o.value}},G(`div`,{ref:a,class:`vp-code-demo-codes`},t.default()))])}}),Hh=z({name:`MdDemo`,props:{id:{type:String,required:!0},title:String},slots:Object,setup(e,{slots:t}){let[n,r]=ap(!1),i=F(),a=P(`0`),o=null;return X(`beforeprint`,()=>{o=n.value,n.value||r(!0)}),X(`afterprint`,()=>{o===!1&&r(!1),o=null}),Np(i,()=>{n.value&&(a.value=`${i.value.clientHeight+14}px`)}),()=>G(`div`,{class:`vp-container vp-md-demo`,id:e.id},[G(`div`,{class:`vp-container-header`},[G(`button`,{type:`button`,title:`toggle`,class:[`vp-md-demo-toggle-button`,n.value?`down`:`end`],onClick:()=>{a.value=n.value?`0`:`${i.value.clientHeight+14}px`,r()}}),e.title?G(`div`,{class:`vp-container-title`},decodeURIComponent(e.title)):null]),G(`div`,{class:`vp-md-demo-display`},t.default()),G(`div`,{class:`vp-md-demo-code-wrapper`,style:{height:a.value}},G(`div`,{ref:i,class:`vp-md-demo-codes`},t.code()))])}}),Uh=({title:e=``,link:t})=>G(`div`,{class:`vp-container vp-playground`},[G(`div`,{class:`vp-container-header`},[e?G(`div`,{class:`vp-container-title`},decodeURIComponent(e)):null,G(`div`,{class:`vp-playground-actions`},[G(`a`,{class:`vp-playground-action no-external-link-icon`,href:decodeURIComponent(t),target:`_blank`,innerHTML:gh})])]),G(`div`,{class:`vp-playground-container`},G(`iframe`,{src:decodeURIComponent(t)}))]);Uh.displayName=`Playground`;var Wh={template:`vue`},Gh=()=>Wh,Kh=()=>null,qh=e=>JSON.parse(tm(e)),Jh=e=>JSON.parse(tm(e)),Yh=e=>JSON.parse(tm(e)),Xh=Xr({loader:()=>J(async()=>{let{Sandpack:e}=await import(`./dist-B2M44kXg.js`);return{Sandpack:e}},__vite__mapDeps([16,17])).then(({Sandpack:e})=>e),loadingComponent:Sm}),Zh=z({name:`SandPack`,props:{files:{type:String,required:!0},title:String,template:String,options:String,customSetup:String,theme:String,rtl:Boolean},setup(e){let t=Em(),n=Gh(),r=W(()=>Ud({},n.options,Jh(e.options??`{}`))),i=W(()=>e.template??n.template),a=W(()=>e.theme??(t.value?`dark`:`light`)),o=W(()=>Ud({},n.customSetup,Yh(e.customSetup??`{}`)));return()=>[G(`div`,{class:`vp-container sandpack-wrapper`},[e.title?G(`div`,{class:`vp-container-header`},G(`div`,{class:`vp-container-title`},decodeURIComponent(e.title))):null,G(`div`,{class:`sandpack-container`},G(Xh,{template:i.value,theme:a.value,files:qh(e.files),options:r.value,customSetup:o.value,rtl:e.rtl}))])]}}),Qh={autoResize:!0,showCompileOutput:!1,clearConsole:!1,layout:`horizontal`,ssr:!1},$h=()=>Qh,eg=e=>JSON.parse(decodeURIComponent(e)),tg=z({name:`VuePlayground`,props:{files:{type:String,required:!0},title:String,settings:String},setup(e){let{vueVersion:t=Po,vueRuntimeDevUrl:n=`https://unpkg.com/@vue/runtime-dom@${t}/dist/runtime-dom.esm-browser.js`,vueRuntimeProdUrl:r=`https://unpkg.com/@vue/runtime-dom@${t}/dist/runtime-dom.esm-browser.prod.js`,vueServerRendererUrl:i=`https://unpkg.com/@vue/server-renderer@${t}/dist/server-renderer.esm-browser.js`,...a}=$h(),o=P(!0),s=F(),c=F(),l=F(),u=W(()=>Ud({},a,eg(e.settings??`{}`))),d=async()=>{let[{useStore:t,useVueImportMap:a,Repl:o},{default:u}]=await Promise.all([J(()=>import(`./vue-repl-CFg-gwcr.js`),__vite__mapDeps([18,19])),J(()=>import(`./codemirror-editor-DjmGezBz.js`),__vite__mapDeps([20,19]))]);s.value=o,l.value=u;let{importMap:d,vueVersion:f}=a({runtimeDev:n,runtimeProd:r,serverRenderer:i});f.value=Po,c.value=t({builtinImportMap:d,vueVersion:f},decodeURIComponent(e.files))};return B(async()=>{await d(),o.value=!1}),()=>[G(`div`,{class:`vp-container vue-playground-wrapper`},[e.title?G(`div`,{class:`vp-container-header`},G(`div`,{class:`vp-container-title`},decodeURIComponent(e.title))):null,G(`div`,{class:`repl-container`},[o.value?G(Sm,{class:`vue-preview-loading`,height:192}):null,s.value?G(s.value,{...u.value,editor:l.value,store:c.value}):null])])]}}),ng=c({default:()=>rg}),rg={enhance:({app:e})=>{e.component(`CodeDemo`,Vh),e.component(`MdDemo`,Hh),e.component(`Playground`,Uh),e.component(`SandPack`,Zh),e.component(`VuePlayground`,tg)}},ig=c({}),ag=c({}),og=()=>Promise.all([J(async()=>{let{default:e}=await import(`./reveal-jHXaGCpa.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./markdown-BLggdDMz.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./highlight-_rL1iWEo.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./math-BvD5zMdd.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./search-DTrVz_kj.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./notes-B1Bh6e1S.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./zoom-Cu5I_Bec.js`);return{default:e}},[]).then(({default:e})=>e)]),sg=P({}),cg=Symbol(``),lg=()=>L(cg),ug=e=>{e.provide(cg,sg)},dg=z({name:`RevealJs`,props:{code:{type:String,required:!0},theme:{type:String,default:`auto`}},setup(e){let t=jr(),n=lg(),r=md(),i=ld(),a=P(!0),o=F(),s=W(()=>tm(e.code)),c=null,l=async e=>{let[t,...a]=await og(),o=i.value.name===`SlidePage`,s=new t(e,{backgroundTransition:`slide`,transition:`slide`,slideNumber:!0,...n.value,hash:o,mouseWheel:o,...r.value.revealJs,embedded:!o,keyboardCondition:o?null:`focused`,markdown:{separator:`^\r?\\n---\r?
$`,verticalSeparator:`^\r?
--\r?
$`},plugins:[a,n.value.plugins??[]].flat()});return await s.initialize(),s},u=async()=>{let t=o.value;t&&(t.dataset.theme=e.theme,a.value=!0,c=await l(t),a.value=!1)};return vd(async e=>{e===`mounted`&&await u()}),B(()=>{R(s,u,{flush:`post`})}),li(()=>{c?.destroy()}),()=>G(`div`,{class:`vp-reveal`},[G(`div`,{ref:o,class:[`reveal`,`reveal-viewport`],id:t},G(`div`,{class:`slides`,innerHTML:`<section data-markdown><script type="text/template">${s.value}<\/script></section>`})),a.value?G(Sm,{class:`reveal-loading`,height:400}):null])}}),fg=z({name:`SlidePage`,setup(){let e=cl(),t=ud(),n=P(!1),r=F(),i=()=>{n.value=!n.value},a=()=>{n.value=!1},o=()=>{a(),window.history.go(-1)},s=()=>{a(),e.push(t.value)};return fp(r,a),()=>G(`div`,{class:`vp-reveal-page`},[G(Ad),G(`div`,{ref:r,class:[`vp-reveal-menu`,{active:n.value}]},[G(`button`,{type:`button`,class:`menu-button`,onClick:()=>{i()}},G(`span`,{class:`icon`})),G(`button`,{type:`button`,class:`back-button`,onClick:()=>{o()},innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" class="back-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"></path></svg>`}),G(`button`,{type:`button`,class:`home-button`,onClick:()=>{s()},innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" class="icon home-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"></path></svg>`})])])}}),pg=c({default:()=>mg}),mg={enhance:({app:e})=>{ug(e),e.component(`RevealJs`,dg)},layouts:{Slides:fg}},hg=P(JSON.parse(`{"encrypt":{},"author":{"name":"ZIP","url":"https://ignent.github.io"},"logo":"/logo.svg","repo":"https://github.com/ignent/ignent.github.io","repoLabel":"GitHub","repoDisplay":true,"docsDir":"src","navbarLayout":{"start":["Brand"],"center":["Search"],"end":["Links","Repo","Outlook"]},"footer":"","displayFooter":false,"blog":{"description":"To err is human, but to really foul things up you need a computer.","intro":"/intro.html","medias":{}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routerLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":[{"text":"全部","icon":"newspaper","link":"/article/"},{"text":"随记","icon":"fire","link":"/popular/"},{"text":"分类","icon":"grip","link":"/collection/"},{"text":"工具脚本","icon":"computer-mouse","link":"/one-click/"}],"sidebar":{"/popular/":[{"text":"随记","icon":"fire","link":"/popular/","children":"structure"}],"/collection/":[{"text":"分类","icon":"grip","link":"/collection/","children":"structure"}],"/one-click/":[{"text":"工具脚本","icon":"computer-mouse","link":"/one-click/","children":"structure"}]}}}}`)),gg=()=>hg,_g=Symbol(``),vg=()=>{let e=L(_g);if(!e)throw Error(`useThemeLocaleData() is called without provider.`);return e},yg=(e,t)=>{let{locales:n,...r}=e;return{...r,...n?.[t]}},bg=c({default:()=>xg}),xg=Nd({enhance({app:e}){let t=gg(),n=e._context.provides[nd],r=W(()=>yg(t.value,n.routeLocale.value));e.provide(_g,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})}}),Sg=z({name:`BackToTop`,setup(){let e=md(),t=Om({"/":{backToTop:`返回顶部`}}),n=F(),{height:r}=Fp(n),{height:i}=em(),{y:a}=$p(),o=W(()=>(e.value.backToTop??!0)&&a.value>100),s=W(()=>a.value/(r.value-i.value)*100);return B(()=>{n.value=document.body}),()=>G(Jo,{name:`fade-in`},()=>o.value?G(`button`,{type:`button`,class:`vp-back-to-top-button`,"aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})}},[G(`span`,{class:`vp-scroll-progress`,role:`progressbar`,"aria-labelledby":`loadinglabel`,"aria-valuenow":s.value},G(`svg`,G(`circle`,{cx:`26`,cy:`26`,r:`24`,fill:`none`,stroke:`currentColor`,"stroke-width":`4`,"stroke-dasharray":`${Math.PI*s.value*.48} ${Math.PI*(100-s.value)*.48}`}))),G(`div`,{class:`back-to-top-icon`})]):null)}}),Cg=c({default:()=>wg}),wg=Nd({rootComponents:[Sg]}),Tg=/language-(shellscript|shell|bash|sh|zsh)/u,Eg=({selector:e,ignoreSelector:t,inlineSelector:n,duration:r=2e3,locales:i,showInMobile:a,transform:o})=>{let s=bp(`(max-width: 419px)`),c=W(()=>!s.value||a),l=Om(i),u=e=>{if(e.hasAttribute(`copy-code`))return;let t=document.createElement(`button`);t.type=`button`,t.classList.add(`vp-copy-code-button`),t.setAttribute(`aria-label`,l.value.copy),t.dataset.copied=l.value.copied,e.parentElement?.insertBefore(t,e),e.setAttribute(`copy-code`,``)},d=()=>{document.body.classList.toggle(`no-copy-code`,!c.value),c.value&&document.querySelectorAll(e).forEach(e=>{u(e)})};op(c,()=>Wn(d),{flush:`post`}),vd(e=>{e!==`beforeUnmount`&&d()});let{copy:f}=Sp({legacy:!0}),p=new WeakMap,m=null,h=async(e,n,i)=>{let a=n.cloneNode(!0);t&&a.querySelectorAll(t).forEach(e=>{e.remove()}),o&&o(a);let s=a.textContent||``;if(Tg.test(e.className)&&(s=s.replaceAll(/^ *(\$|>) /gmu,``)),await f(s),r<=0)return;i.classList.add(`copied`),clearTimeout(p.get(i));let c=setTimeout(()=>{i.classList.remove(`copied`),i.blur(),p.delete(i)},r);p.set(i,c)};X(`click`,e=>{let t=e.target;if(c.value&&t.matches(`div[class*="language-"] > button.vp-copy-code-button`)){let e=t.parentElement,n=t.nextElementSibling;if(!e||!n)return;h(e,n,t)}},{passive:!0}),n&&X(`dblclick`,e=>{let t=e.target;if(c.value&&t.matches(n)){let e=window.getSelection();e&&(t.contains(e.anchorNode)||t.contains(e.focusNode))&&e.removeAllRanges(),f(t.textContent||``),(m??=new ym).pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${l.value.copied} </span>`,r)}},{passive:!0})},Dg=c({default:()=>Og}),Og=Nd({setup:()=>{Eg({selector:`[vp-content] div[class*="language-"] pre`,ignoreSelector:``,inlineSelector:``,locales:{"/":{copy:`复制代码`,copied:`已复制`}},duration:2e3,showInMobile:!1})}}),kg=e=>e.includes(`fa-`)||/^fa.$/u.test(e)?e:`fa-${e}`,Ag=z({name:`VPIcon`,props:{type:{type:String,default:`unknown`},prefix:String,icon:String,color:String,size:[String,Number],verticalAlign:String,sizing:{type:String,default:`height`}},setup(e){let t=W(()=>e.icon?Oc(e.icon)?e.icon:Gd(e.icon)?Y(e.icon):null:null),n=W(()=>{let t={},{type:n,verticalAlign:r,size:i,sizing:a}=e,o={sizing:a};return e.color&&(t.color=e.color),i&&(t[`--icon-size`]=Number.isNaN(Number(i))?i:`${i}px`),r&&(t[`--icon-vertical-align`]=r),n===`iconify`&&(a!==`height`&&(o.width=e.size||`1em`),a!==`width`&&(o.height=e.size||`1em`)),Vd(t).length>0&&(o.style=t),o});return()=>{let{type:r,icon:i,prefix:a=``,sizing:o}=e;if(!i)return null;if(t.value)return G(`img`,{class:`vp-icon`,src:t.value,alt:``,"aria-hidden":``,"no-view":``,...n.value});if(r===`iconify`)return G(`iconify-icon`,{key:i,class:`vp-icon`,icon:i.includes(`:`)?i:`${a}${i}`,...n.value});if(r===`fontawesome`){let[e,t]=i.includes(`:`)?i.split(`:`,2):[`fas`,i];return G(`i`,{key:i,class:[`vp-icon`,e.length===1?`fa${e}`:kg(e),...t.split(` `).map(e=>kg(e)),o===`height`?``:`fa-fw`],...n.value})}return G(`i`,{key:i,class:[`vp-icon`,i.includes(` `)?i:`${a}${i}`],...n.value})}}}),jg=c({default:()=>Mg}),Mg={enhance:({app:e})=>{_m(`VPIcon`)||e.component(`VPIcon`,e=>G(Ag,{type:`fontawesome`,prefix:``,...e}))},setup:()=>{Gp(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,()=>{},{attrs:{"data-auto-replace-svg":`nest`}})}},Ng=P({}),Pg=Symbol(``),Fg=()=>L(Pg),Ig=e=>{e.provide(Pg,Ng)},Lg=async e=>{try{await e.decode()}catch{throw Error(`Image decoding failed: ${e.src}`)}return{type:`image`,element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}},Rg=`<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>`,zg=(e,{download:t=!0,fullscreen:n=!0}={})=>{e.on(`uiRegister`,()=>{if(e.ui.registerElement({name:`bulletsIndicator`,className:`photo-swipe-bullets-indicator`,appendTo:`wrapper`,onInit:t=>{let n=[],r=-1;for(let r=0;r<e.getNumItems();r++){let r=document.createElement(`div`);r.className=`photo-swipe-bullet`,r.addEventListener(`click`,t=>{e.goTo(n.indexOf(t.target))}),n.push(r),t.append(r)}e.on(`change`,()=>{r>=0&&n[r].classList.remove(`active`),n[e.currIndex].classList.add(`active`),r=e.currIndex})}}),n){let{isSupported:t,toggle:n}=Lp();t.value&&e.ui.registerElement({name:`fullscreen`,order:7,isButton:!0,html:`<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>`,onClick:()=>{n()}})}t&&e.ui.registerElement({name:`download`,order:8,isButton:!0,tagName:`a`,html:{isCustomSVG:!0,inner:`<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>`,outlineID:`pswp__icn-download`},onInit:t=>{t.setAttribute(`download`,``),t.setAttribute(`target`,`_blank`),t.setAttribute(`rel`,`noopener`),e.on(`change`,()=>{t.setAttribute(`href`,e.currSlide.data.src)})}})})},Bg=({selector:e,locales:t,download:n=!0,fullscreen:r=!0,scrollToClose:i=!0})=>{let a=Fg(),o=Om(t),s=md(),c=W(()=>{let{photoSwipe:t}=s.value;return t===!1?null:K(t)?t:Id(e)?e.join(`, `):e}),l=W(()=>({...a.value,...o.value,download:n,fullscreen:r,scrollToClose:i})),u=null,d=0,f=null;X(`click`,async e=>{let t=e.target;if(!c.value||!u||!t.matches(c.value))return;d!==0&&f.destroy();let a=Date.now(),o=await u,s=[...document.querySelectorAll(c.value)],p=s.map(e=>({html:Rg,element:e,msrc:e.src}));f=new o({preloaderDelay:0,showHideAnimationType:`zoom`,...l.value,dataSource:p,index:s.indexOf(t),...i?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),d=a,zg(f,{download:n,fullscreen:r}),f.init(),f.on(`destroy`,()=>{f=null,d=0}),s.map((e,t)=>Lg(e).then(e=>{d===a&&(p.splice(t,1,e),f?.refreshSlideContent(t))}))},{passive:!0}),X(`wheel`,()=>{l.value.scrollToClose&&f?.close()}),B(()=>{(`requestIdleCallback`in window?window.requestIdleCallback:setTimeout)(()=>{u=J(async()=>{let{default:e}=await import(`./photoswipe.esm-C8gHsxy7.js`);return{default:e}},[]).then(({default:e})=>e)})}),li(()=>{f?.destroy()})},Vg=c({default:()=>qg}),Hg=`[vp-content] :not(a) > img:not([no-view])`,Ug={"/":{closeTitle:`关闭`,downloadTitle:`下载图片`,fullscreenTitle:`切换全屏`,zoomTitle:`缩放`,arrowPrevTitle:`上一个 (左箭头)`,arrowNextTitle:`下一个 (右箭头)`}},Wg=!0,Gg=!0,Kg=!0,qg=Nd({enhance:({app:e})=>{Ig(e)},setup:()=>{Bg({selector:Hg,locales:Ug,download:Wg,fullscreen:Gg,scrollToClose:Kg})}}),Jg=({type:e=`info`,text:t=``,vertical:n,color:r,bgColor:i},{slots:a})=>G(`span`,{class:[`vp-badge`,e,{diy:!!(r||i)}],style:{backgroundColor:i??!1,color:r??!1,verticalAlign:n??!1}},a.default?.()??t);Jg.displayName=`Badge`;var Yg=({title:e,desc:t=``,logo:n,background:r,color:i,link:a})=>{let o=[n?G(`img`,{class:`vp-card-logo`,src:Y(n),loading:`lazy`,"no-view":``}):null,G(`div`,{class:`vp-card-content`},[G(`div`,{class:`vp-card-title`,innerHTML:e}),G(`hr`),G(`div`,{class:`vp-card-desc`,innerHTML:t})])],s={};return r&&(s.background=r),i&&(s.color=i),a?Dc(a)?G(`a`,{class:`vp-card`,href:a,target:`_blank`,style:s},o):G(Ed,{to:a,class:`vp-card`,style:s},()=>o):G(`div`,{class:`vp-card`,style:s},o)};Yg.displayName=`VPCard`;var Xg=c({default:()=>Zg}),Zg={enhance:({app:e})=>{_m(`Badge`)||e.component(`Badge`,Jg),_m(`VPCard`)||e.component(`VPCard`,Yg)},setup:()=>{},rootComponents:[]},Qg=async(e,t)=>{let{path:n,query:r}=e.currentRoute.value,{scrollBehavior:i}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:r,hash:t}),e.options.scrollBehavior=i},$g=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{let i=cl();X(`scroll`,Zf(()=>{let n=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(n)<r){Qg(i,``);return}let a=window.innerHeight+n,o=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),s=Math.abs(o-a)<r,c=[...document.querySelectorAll(e)],l=[...document.querySelectorAll(t)].filter(e=>c.some(t=>t.hash===e.hash));for(let e=0;e<l.length;e++){let t=l[e],a=l[e+1],o=n>=(t.parentElement?.offsetTop??0)-r,c=!a||n<(a.parentElement?.offsetTop??0)-r;if(!(o&&c))continue;let u=decodeURIComponent(i.currentRoute.value.hash),d=decodeURIComponent(t.hash);if(u===d)return;if(s){for(let t=e+1;t<l.length;t++)if(u===decodeURIComponent(l[t].hash))return}Qg(i,d);return}},n))},e_=c({default:()=>a_}),t_=`.vp-sidebar-link, .vp-toc-link`,n_=`.header-anchor`,r_=200,i_=5,a_=Nd({setup(){$g({headerLinkSelector:t_,headerAnchorSelector:n_,delay:r_,offset:i_})}}),o_=e=>K(e.title)?{title:e.title}:null,s_=Symbol(``),c_=e=>{o_=e},l_=()=>L(s_),u_=e=>{e.provide(s_,o_)},d_=c({default:()=>p_}),f_=z({name:`Catalog`,props:{base:String,level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){let{page:t,routes:n,site:r}=pd(),i=l_(),a=Om({"/":{title:`目录`,empty:`暂无目录`}}),o=F(zd(n.value).map(([e,{meta:t}])=>{let n=i(t);if(!n)return null;let r=e.split(`/`).length;return Object.assign({level:Rd(e,`/`)?r-2:r-1,base:e.replace(/\/[^/]+\/?$/u,`/`),path:e},n)}).filter(e=>Gc(e)&&K(e.title))),s=W(()=>{let n=e.base?Bc(Vc(e.base)):t.value.path.replace(/\/[^/]+$/u,`/`),i=n.split(`/`).length-2,a=[];return o.value.filter(({level:t,path:a})=>{if(!Ld(a,n)||a===n)return!1;if(n===`/`){let e=Vd(r.value.locales).filter(e=>e!==`/`);if(a===`/404.html`||e.some(e=>Ld(a,e)))return!1}return t-i<=e.level}).sort(({title:e,level:t,order:n},{title:r,level:i,order:a})=>t-i||(Fd(n)?Fd(a)?n>0?a>0?n-a:-1:a<0?n-a:1:n:Fd(a)?a:e.localeCompare(r))).forEach(e=>{let{base:t,level:n}=e;switch(n-i){case 1:a.push(e);break;case 2:{let n=a.find(e=>e.path===t);n&&(n.children??=[]).push(e);break}default:{let n=a.find(e=>e.path===t.replace(/\/[^/]+\/?$/u,`/`));if(n){let r=n.children?.find(e=>e.path===t);r&&(r.children??=[]).push(e)}}}}),a});return()=>{let t=s.value.some(e=>e.children);return G(`div`,{class:[`vp-catalog`,{index:e.index}]},[e.hideHeading?null:G(`h2`,{class:`vp-catalog-main-title`},a.value.title),s.value.length>0?G(e.index?`ol`:`ul`,{class:[`vp-catalog-list`,{deep:t}]},s.value.map(({children:n=[],title:r,path:i,content:a})=>{let o=G(Ed,{class:`vp-catalog-title`,to:i},()=>a?G(a):r);return G(`li`,{class:`vp-catalog-item`},t?[G(`h3`,{id:r,class:[`vp-catalog-child-title`,{"has-children":n.length}]},[G(`a`,{href:`#${r}`,class:`vp-catalog-header-anchor`,"aria-hidden":!0}),o]),n.length>0?G(e.index?`ol`:`ul`,{class:`vp-child-catalogs`},n.map(({children:t=[],content:n,path:r,title:i})=>G(`li`,{class:`vp-child-catalog`},[G(`div`,{class:[`vp-catalog-sub-title`,{"has-children":t.length}]},[G(`a`,{href:`#${i}`,class:`vp-catalog-header-anchor`}),G(Ed,{class:`vp-catalog-title`,to:r},()=>n?G(n):i)]),t.length>0?G(e.index?`ol`:`div`,{class:e.index?`vp-sub-catalogs`:`vp-sub-catalogs-wrapper`},t.map(({content:t,path:n,title:r})=>e.index?G(`li`,{class:`vp-sub-catalog`},G(Ed,{to:n},()=>t?G(t):r)):G(Ed,{class:`vp-sub-catalog-link`,to:n},()=>t?G(t):r))):null]))):null]:G(`div`,{class:`vp-catalog-child-title`},o))})):G(`p`,{class:`vp-empty-catalog`},a.value.empty)])}}}),p_=Nd({enhance:({app:e})=>{u_(e),_m(`Catalog`,e)||e.component(`Catalog`,f_)}}),m_=(e,t)=>{e.classList.add(t)},h_=(e,t)=>{e.classList.remove(t)},g_=e=>{e?.remove()},__=(e,t,n)=>e<t?t:e>n?n:e,v_=e=>(-1+e)*100,y_=(()=>{let e=[],t=()=>{let n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),b_=e=>e.replace(/^-ms-/u,`ms-`).replaceAll(/-([\da-z])/giu,(e,t)=>t.toUpperCase()),x_=(()=>{let e=[`Webkit`,`O`,`Moz`,`ms`],t={},n=t=>{let{style:n}=document.body;if(t in n)return t;let r=t.charAt(0).toUpperCase()+t.slice(1),i=e.length;for(;i--;){let t=`${e[i]}${r}`;if(t in n)return t}return t},r=e=>{let r=b_(e);return t[r]??=n(r)},i=(e,t,n)=>{e.style[r(t)]=n};return(e,t)=>{for(let[n,r]of zd(t))Pd(r)&&i(e,n,r)}})(),S_={minimum:.08,easing:`ease`,speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:`[role="bar"]`,parent:`body`,template:`<div class="bar" role="bar"></div>`},C_={percent:null,isRendered:()=>!!document.querySelector(`#nprogress`),set:e=>{let{speed:t,easing:n}=S_,r=C_.isStarted(),i=__(e,S_.minimum,1);C_.percent=i===1?null:i;let a=C_.render(!r),o=a.querySelector(S_.barSelector);return a.offsetWidth,y_(e=>{x_(o,{transform:`translate3d(${v_(i)}%,0,0)`,transition:`all ${t}ms ${n}`}),i===1?(x_(a,{transition:`none`,opacity:`1`}),a.offsetWidth,setTimeout(()=>{x_(a,{transition:`all ${t}ms linear`,opacity:`0`}),setTimeout(()=>{C_.remove(),e()},t)},t)):setTimeout(()=>{e()},t)}),C_},isStarted:()=>typeof C_.percent==`number`,start:()=>{C_.percent||C_.set(0);let e=()=>{setTimeout(()=>{C_.percent&&(C_.trickle(),e())},S_.trickleSpeed)};return S_.trickle&&e(),C_},done:e=>!e&&!C_.percent?C_:C_.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=C_;return t?(t=__(t+(typeof e==`number`?e:(1-t)*__(Math.random()*t,.1,.95)),0,.994),C_.set(t)):C_.start()},trickle:()=>C_.increase(Math.random()*S_.trickleRate),render:e=>{if(C_.isRendered())return document.querySelector(`#nprogress`);m_(document.documentElement,`nprogress-busy`);let t=document.createElement(`div`);t.id=`nprogress`,t.innerHTML=S_.template;let n=t.querySelector(S_.barSelector),r=document.querySelector(S_.parent);return x_(n,{transition:`all 0 linear`,transform:`translate3d(${e?`-100`:v_(C_.percent??0)}%,0,0)`}),r&&(r!==document.body&&m_(r,`nprogress-custom-parent`),r.append(t)),t},remove:()=>{h_(document.documentElement,`nprogress-busy`),h_(document.querySelector(S_.parent),`nprogress-custom-parent`),g_(document.querySelector(`#nprogress`))}},w_=()=>{B(()=>{let e=cl(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(e=>{t.has(e.path)||C_.start()}),e.afterEach(e=>{t.add(e.path),C_.done()})})},T_=c({default:()=>E_}),E_=Nd({setup(){w_()}}),D_=P({provider:`Waline`,dark:`[data-theme="dark"]`,serverURL:`https://waline.0xss.com`,emoji:[`/waline-emojis/alus`,`/waline-emojis/bilibili`,`/waline-emojis/bmoji`,`/waline-emojis/coolapk`,`/waline-emojis/coolapk_coin`,`/waline-emojis/hoyoverse-hi3`,`/waline-emojis/qq`,`/waline-emojis/tieba`,`/waline-emojis/weibo`,`/waline-emojis/tw-body`,`/waline-emojis/tw-emoji`,`/waline-emojis/tw-flag`,`/waline-emojis/tw-food`,`/waline-emojis/tw-natural`,`/waline-emojis/tw-object`,`/waline-emojis/tw-people`,`/waline-emojis/tw-sport`,`/waline-emojis/tw-symbol`,`/waline-emojis/tw-time`,`/waline-emojis/tw-travel`,`/waline-emojis/tw-weather`]}),O_=Symbol(``),k_=()=>L(O_),A_=k_,j_=e=>{e.provide(O_,tn(D_))},M_={"Content-Type":`application/json`},N_=e=>`${e.replace(/\/?$/,`/`)}api/`,P_=(e,t=``)=>{if(typeof e==`object`&&e.errno)throw TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},F_=({serverURL:e,lang:t,paths:n,type:r,signal:i})=>fetch(`${N_(e)}article?path=${encodeURIComponent(n.join(`,`))}&type=${encodeURIComponent(r.join(`,`))}&lang=${t}`,{signal:i}).then(e=>e.json()).then(e=>P_(e,`Get counter`).data),I_=({serverURL:e,lang:t,path:n,type:r,action:i})=>fetch(`${N_(e)}article?lang=${t}`,{method:`POST`,headers:M_,body:JSON.stringify({path:n,type:r,action:i})}).then(e=>e.json()).then(e=>P_(e,`Update counter`).data),L_=({serverURL:e,lang:t,paths:n,signal:r})=>F_({serverURL:e,lang:t,paths:n,type:[`time`],signal:r}),R_=e=>I_({...e,type:`time`,action:`inc`}),z_=(e=``)=>e.replace(/\/$/u,``),B_=e=>/^(https?:)?\/\//.test(e),V_=e=>{let t=z_(e);return B_(t)?t:`https://${t}`},H_=e=>{e.name!==`AbortError`&&console.error(e.message)},U_=e=>{let{path:t}=e.dataset;return t!=null&&t.length?t:null},W_=(e,t)=>{t.forEach((t,n)=>{let r=e[n].time;typeof r==`number`&&(t.textContent=r.toString())})},G_=({serverURL:e,path:t=window.location.pathname,selector:n=`.waline-pageview-count`,update:r=!0,lang:i=navigator.language})=>{let a=new AbortController,o=[...document.querySelectorAll(n)],s=e=>{let n=U_(e);return n!=null&&t!==n},c=n=>L_({serverURL:V_(e),paths:n.map(e=>U_(e)??t),lang:i,signal:a.signal}).then(e=>{W_(e,n)}).catch(H_);if(r){let n=o.filter(e=>!s(e)),r=o.filter(e=>s(e));R_({serverURL:V_(e),path:t,lang:i}).then(e=>{W_(e,n)}),r.length>0&&c(r)}else c(o);return a.abort.bind(a)},K_={"/":{placeholder:`请留言。(填写邮箱可在被回复时收到邮件提醒)`}};J(()=>Promise.resolve({}),[]);var q_=z({name:`WalineComment`,props:{identifier:{type:String,required:!0}},setup(e){let{frontmatter:t,lang:n}=pd(),r=A_(),i=Om(K_),a=null,o=W(()=>!!r.value.serverURL),s=W(()=>o.value&&(t.value.pageview??r.value.pageview??!0)),c=W(()=>({lang:n.value,locale:i.value,dark:`[data-theme='dark']`,...r.value,path:e.identifier}));return B(()=>{op(()=>[e.identifier,r.value.serverURL,r.value.delay,s.value],async()=>{a?.(),a=null,s.value&&(await Wn(),await bm(r.value.delay??800),a=G_({serverURL:r.value.serverURL,path:e.identifier}))},{flush:`post`})}),()=>o.value?G(`div`,{id:`comment`,class:`waline-wrapper`},G(Xr({loader:async()=>{let{Waline:e}=await J(async()=>{let{Waline:e}=await import(`./component-BzopvhH1.js`);return{Waline:e}},[]);return()=>G(Od,()=>G(e,c.value))},loadingComponent:Sm}))):null}}),J_=c({default:()=>X_}),Y_=z({name:`CommentService`,props:{identifier:String,darkmode:Boolean},setup(e){let{frontmatter:t,page:n}=pd(),r=k_(),i=W(()=>t.value.comment??r.value.comment??!0);return()=>G(q_,{class:`vp-comment`,"vp-comment":``,identifier:e.identifier??t.value.commentID??n.value.path,darkmode:e.darkmode,style:{display:i.value?`block`:`none`}})}}),X_=Nd({enhance:({app:e})=>{j_(e),e.component(`CommentService`,Y_)}});function Z_(e,t,n){var r,i,a;t===void 0&&(t=50),n===void 0&&(n={});var o=(r=n.isImmediate)!=null&&r,s=(i=n.callback)!=null&&i,c=n.maxWait,l=Date.now(),u=[];function d(){if(c!==void 0){var e=Date.now()-l;if(e+t>=c)return c-e}return t}var f=function(){var t=[].slice.call(arguments),n=this;return new Promise(function(r,i){var c=o&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,l=Date.now(),!o){var r=e.apply(n,t);s&&s(r),u.forEach(function(e){return(0,e.resolve)(r)}),u=[]}},d()),c){var f=e.apply(n,t);return s&&s(f),r(f)}u.push({resolve:r,reject:i})})};return f.cancel=function(e){a!==void 0&&clearTimeout(a),u.forEach(function(t){return(0,t.reject)(e)}),u=[]},f}var Q_=(e,t)=>{let n=X(`keydown`,r=>{let{keyboardShortcuts:i={}}=e.value,a=i[`Ctrl/Cmd+K`]!==!1&&r.key===`k`&&(cm()||om()?r.metaKey:r.ctrlKey),o=i[`/`]!==!1&&r.key===`/`;(a||o)&&(r.preventDefault(),t(),n())})},$_=()=>{let e=cl();return{transformItems:e=>e.map(e=>({...e,url:`/${Uc(Nc(e.url,`/`))}`})),navigator:{navigate:({itemUrl:t})=>{e.push(t.replace(`/`,`/`))}},transformSearchClient:e=>({...e,search:Z_(e.search,500)})}},ev=P({appId:`E3TWXMTA8Z`,apiKey:`fb9de9925ec1f873f45e96085d62c81a`,indexName:`0XSSBLOG`,locales:{"/":{placeholder:`搜索文档`,translations:{button:{buttonText:`搜索文档`,buttonAriaLabel:`搜索文档`},modal:{searchBox:{clearButtonTitle:`清除查询条件`,clearButtonAriaLabel:`清除查询条件`,closeButtonText:`关闭`,closeButtonAriaLabel:`关闭`,placeholderText:`搜索文档`,placeholderTextAskAi:`向 AI 助手提问`,placeholderTextAskAiStreaming:`回答中...`,searchInputLabel:`搜索`,backToKeywordSearchButtonText:`返回关键字搜索`,backToKeywordSearchButtonAriaLabel:`返回关键字搜索`,newConversationPlaceholder:`询问问题`,conversationHistoryTitle:`对话历史`,startNewConversationText:`新对话`,viewConversationHistoryText:`对话历史`},startScreen:{recentSearchesTitle:`搜索历史`,noRecentSearchesText:`没有搜索历史`,saveRecentSearchButtonTitle:`保存至搜索历史`,removeRecentSearchButtonTitle:`从搜索历史中移除`,favoriteSearchesTitle:`收藏`,removeFavoriteSearchButtonTitle:`从收藏中移除`,recentConversationsTitle:`最近对话`,removeRecentConversationButtonTitle:`从最近对话中移除`},errorScreen:{titleText:`无法获取结果`,helpText:`你可能需要检查你的网络连接`},noResultsScreen:{noResultsText:`无法找到相关结果为`,suggestedQueryText:`你可以尝试查询`,reportMissingResultsText:`你认为该查询应该有结果？`,reportMissingResultsLinkText:`告知我们`},resultsScreen:{askAiPlaceholder:`询问AI：`,noResultsAskAiPlaceholder:`没有找到文档？让 AI 来帮忙：`},askAiScreen:{disclaimerText:`AI 助手的回答可能不准确。自行验证回复。`,relatedSourcesText:`相关资源`,thinkingText:`思考中...`,copyButtonText:`复制`,copyButtonCopiedText:`已复制`,copyButtonTitle:`复制`,likeButtonTitle:`有帮助`,dislikeButtonTitle:`没帮助`,thanksForFeedbackText:`感谢您的反馈！`,preToolCallText:`搜索中...`,duringToolCallText:`搜索`,afterToolCallText:`已搜索`,stoppedStreamingText:`你停止了此回复`},footer:{selectText:`选择`,submitQuestionText:`提交问题`,selectKeyAriaLabel:`回车键`,navigateText:`切换`,navigateUpKeyAriaLabel:`上箭头`,navigateDownKeyAriaLabel:`下箭头`,closeText:`关闭`,backToSearchText:`返回搜索`,closeKeyAriaLabel:`ESC 键`,poweredByText:`搜索提供者`}}}}}}),tv=Symbol(``),nv=()=>{let e=L(tv),t=ud();return W(()=>({...e.value,...e.value.locales?.[t.value]}))},rv=e=>{e.provide(tv,tn(ev))},iv=(e,t=[])=>[`lang:${e}`,...Array.isArray(t)?t:[t]],av=({indices:e,indexName:t,searchParameters:n},r)=>(e??[{name:t??``,searchParameters:n}]).map(e=>{if(K(e))return{name:e,searchParameters:{facetFilters:`lang:${r}`}};let{searchParameters:t,...n}=e;return{...n,searchParameters:{...t,facetFilters:iv(r,t?.facetFilters)}}}),ov=({buttonText:e=`Search`,buttonAriaLabel:t=e}={})=>{let n=cm()||om()||am();return`<button type="button" aria-label="${t}" aria-keyshortcuts="${n?`Command`:`Control`}+k" class="DocSearch DocSearch-Button"><span class="DocSearch-Button-Container"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="DocSearch-Search-Icon"><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" stroke-width="1.4"></circle><path d="m21 21-4.3-4.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${e}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key ${n?``:`DocSearch-Button-Key--ctrl`}">${n?`⌘`:`Ctrl`}</kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`},sv=()=>{if(document.querySelector(`.DocSearch-Modal`))return;let e=new Event(`keydown`);e.key=`k`,e.metaKey=!0,window.dispatchEvent(e),setTimeout(sv,16)},cv=e=>{let t=`algolia-preconnect`;(`requestIdleCallback`in window?window.requestIdleCallback:setTimeout)(()=>{if(document.head.querySelector(`#${t}`))return;let n=document.createElement(`link`);n.id=t,n.rel=`preconnect`,n.href=`https://${e}-dsn.algolia.net`,n.crossOrigin=``,document.head.append(n)})},lv=z({name:`DocSearch`,props:{containerId:{type:String,default:`docsearch-container`},options:{type:Object,default:()=>({})}},setup(e){let t=nv(),n=$_(),r=hd(),i=ud(),a=P(!1),o=P(!1),s=W(()=>{let{locales:n={},...r}=e.options;return{...t.value,...r,...n[i.value]}}),c=async()=>{let{default:t}=await J(async()=>{let{default:e}=await import(`./esm-DbJX9UjH.js`);return{default:e}},[]),{indexName:i,indices:o,searchParameters:c,...l}=s.value;t({...n,...l,container:`#${e.containerId}`,indices:av({indices:o,indexName:i,searchParameters:c},r.value)}),a.value=!0},l=()=>{o.value||a.value||(o.value=!0,c(),sv(),R(i,c))};return Q_(s,l),B(()=>{cv(s.value.appId)}),()=>[G(`div`,{id:e.containerId,style:{display:a.value?`block`:`none`}}),a.value?null:G(`div`,{class:`docsearch-placeholder`,onClick:l,innerHTML:ov(s.value.translations?.button)})]}}),uv=c({default:()=>dv}),dv={enhance({app:e}){rv(e),e.component(`SearchBox`,lv)}},fv=`VUEPRESS_REDIRECT_STATUS`,pv=Vp(fv,{}),mv=Xp(fv,{}),hv=e=>{let t=Wp(),n=ud(),r=zd(e.config);return W(()=>{if(r.some(([e])=>n.value===e)){for(let e of t.value)for(let[t,i]of r)if(i.includes(e))return t===n.value?null:{lang:e,localePath:t}}return null})},gv={config:{type:Object,required:!0},locales:{type:Object,required:!0}},_v=e=>{let{routeLocale:t,routePath:n}=pd(),r=hv(e.config),i=cl(),a=P(!1),o=P(!1),s=W(()=>{if(!r.value)return null;let{lang:n,localePath:i}=r.value,a=e.locales[i],o=e.locales[t.value];return{hint:[a,o].map(({hint:e})=>e.replace(`$1`,n)),switch:a.switch.replace(`$1`,a.name),cancel:o.cancel,remember:a.remember}}),c=()=>{mv.value[t.value]=!0,o.value&&(pv.value[t.value]=!0),a.value=!1};return B(()=>{R(n,()=>{a.value=!1}),r.value&&!mv.value[t.value]&&!pv.value[t.value]&&(a.value=!0)}),ci(()=>{a.value=!1}),{showComponent:a,shouldRemember:o,locale:s,persistUserAction:c,redirect:()=>{i.replace(n.value.replace(t.value,r.value.localePath)),c()}}},vv=z({name:`RedirectModal`,props:gv,setup(e){let{shouldRemember:t,showComponent:n,locale:r,persistUserAction:i,redirect:a}=_v(e),o=P(),s=Yp(o);return B(()=>{o.value=document.body,op(n,e=>{s.value=e})}),()=>G(Gs,{name:`fade-in-scale-up`},()=>n.value?G(`div`,{key:`mask`,class:`redirect-modal-mask`},G(`div`,{key:`popup`,class:`redirect-modal-wrapper`},[G(`div`,{class:`redirect-modal-content`},r.value?.hint.map(e=>G(`p`,e))),G(`div`,{class:`redirect-modal-hint`},[G(`input`,{id:`remember-redirect`,type:`checkbox`,checked:t.value,onChange:()=>{t.value=!t.value}}),G(`label`,{for:`remember-redirect`},r.value?.remember)]),G(`div`,{class:`redirect-modal-actions`},[G(`button`,{type:`button`,class:`redirect-modal-action primary`,onClick:()=>{a()}},r.value?.switch),G(`button`,{type:`button`,class:`redirect-modal-action`,onClick:()=>{i()}},r.value?.cancel)])])):null)}}),yv=c({config:()=>bv,default:()=>xv}),bv={config:{"/":[`zh-CN`]},autoLocale:!1,defaultLocale:`/`,localeFallback:!0,defaultBehavior:`defaultLocale`},xv=Nd({setup(){},rootComponents:[()=>G(vv,{config:bv,locales:{"/":{name:`简体中文`,hint:`你的首选语言是 $1，是否切换到该语言？`,switch:`切换到 $1`,cancel:`取消`,remember:`记住我的选择`}}})]}),Sv=e=>Gc(e)&&K(e.name),Cv=(e,t=!1)=>e?Id(e)?e.map(e=>K(e)?{name:e}:Sv(e)?e:null).filter(e=>e!=null):K(e)?[{name:e}]:Sv(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?``:`| false`} | undefined\`, but got`,e),[]):[],wv=(e,t)=>{if(e){if(Id(e)&&e.every(e=>K(e)))return e;if(K(e))return[e];console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`,e)}return[]},Tv=e=>wv(e,`category`),Ev=e=>wv(e,`tag`),Dv=()=>{let e=gd();return W(()=>e.value.readingTime??null)},Ov=(e,t)=>{let{minutes:n,words:r}=e,{less1Minute:i,word:a,time:o}=t;return{time:n<1?i:o.replace(`$time`,Math.round(n).toString()),words:a.replace(`$word`,r.toString())}},kv={words:``,time:``},Av={"/":{word:`约 $word 字`,less1Minute:`小于 1 分钟`,time:`大约 $time 分钟`}},jv=()=>Av?Om(Av):W(()=>null),Mv=()=>{if(Av==null)return W(()=>kv);let e=Dv(),t=jv();return W(()=>e.value&&t.value?Ov(e.value,t.value):kv)},Z=({name:e=``,color:t=`currentColor`,ariaLabel:n},{attrs:r,slots:i})=>G(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:[`icon`,`${e}-icon`],viewBox:`0 0 1024 1024`,fill:t,"aria-label":n??`${e} icon`,...r},i.default());Z.displayName=`IconBase`;var Nv=()=>G(Z,{name:`enter-fullscreen`},()=>G(`path`,{d:`M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z`}));Nv.displayName=`EnterFullScreenIcon`;var Pv=()=>G(Z,{name:`cancel-fullscreen`},()=>G(`path`,{d:`M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z`}));Pv.displayName=`CancelFullScreenIcon`;var Fv=e=>Oc(e)?e:`https://github.com/${e}`,Iv=(e=``)=>!Oc(e)||e.includes(`github.com`)?`GitHub`:e.includes(`bitbucket.org`)?`Bitbucket`:e.includes(`gitlab.com`)?`GitLab`:e.includes(`gitee.com`)?`Gitee`:null,Lv=()=>G(Z,{name:`github`},()=>G(`path`,{d:`M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z`}));Lv.displayName=`GitHubIcon`;var Rv=()=>G(Z,{name:`gitlab`},()=>G(`path`,{d:`M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z`}));Rv.displayName=`GitLabIcon`;var zv=()=>G(Z,{name:`gitee`},()=>G(`path`,{d:`M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z`}));zv.displayName=`GiteeIcon`;var Bv=()=>G(Z,{name:`bitbucket`},()=>G(`path`,{d:`M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z`}));Bv.displayName=`BitbucketIcon`;var Vv=()=>G(Z,{name:`source`},()=>G(`path`,{d:`M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z`}));Vv.displayName=`SourceIcon`;var Hv=({link:e,type:t=Iv(e??``)})=>{if(!t)return null;let n=t.toLowerCase();return G(n===`bitbucket`?Bv:n===`github`?Lv:n===`gitlab`?`GitLab`:n===`gitee`?zv:Vv)},Uv=(e,t=0)=>{let n=3735928559^t,r=1103547991^t;for(let t=0;t<e.length;t++){let i=e.charCodeAt(t);n=Math.imul(n^i,2654435761),r=Math.imul(r^i,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&r)+(n>>>0)},Wv=(e,t)=>Uv(e)%t,Gv=/#.*$/u,Kv=e=>{let t=Gv.exec(e);return t?t[0]:``},qv=e=>decodeURI(e).replace(Gv,``).replace(/\/index\.html$/iu,`/`).replace(/\/(README|index)\.md$/iu,`/`).replace(/\.(?:html|md)$/iu,``),Jv=(e,t)=>{if(!Pd(t))return!1;let n=qv(e.path),r=qv(t),i=Kv(t);return i?i===e.hash&&(!r||n===r):n===r},Yv={mobileBreakPoint:`719px`,pcBreakPoint:`1440px`,colorNumber:`9`,hasMultipleThemeColors:`false`},Xv=()=>{let e=A_();return t=>{G_({serverURL:e.value.serverURL,...t})}},Zv=()=>gg(),Qv=()=>vg(),$v=()=>({...pd(),theme:Zv(),themeLocale:Qv()}),ey=()=>{let e=Zv();return W(()=>!!e.value.pure)},ty=()=>{let e=Qv();return W(()=>e.value.author)},ny=()=>{let e=md(),t=ty();return W(()=>{let{author:n}=e.value;return n?Cv(n):n===!1?[]:Cv(t.value,!1)})},ry=()=>{let e=md(),t=L(Symbol.for(`categoryMap`),null);return W(()=>Tv(e.value.category??e.value.categories).map(e=>({name:e,path:t?.value.map[e]?.path??``})))},iy=()=>{let e=md(),t=L(Symbol.for(`tagMap`),null);return W(()=>Ev(e.value.tag??e.value.tags).map(e=>({name:e,path:t?.value.map[e]?.path??``})))},ay=()=>{let{frontmatter:e,page:t}=$v();return W(()=>{let n=Wd(e.value.date);if(n)return n;let{createdTime:r}=t.value.git??{};return r?new Date(r):null})},oy=()=>{let{frontmatter:e,themeLocale:t}=$v(),n=ny(),r=ry(),i=iy(),a=ay(),o=Dv(),s=Mv();return{info:W(()=>({author:n.value,category:r.value,date:a.value,tag:i.value,isOriginal:e.value.isOriginal??!1,readingTime:o.value,readingTimeLocale:s.value,pageview:e.value.pageview??!0})),items:W(()=>e.value.pageInfo??t.value.pageInfo??null)}},sy=()=>{let e=Qv();return W(()=>e.value.metaLocales)},cy=`http://.`,ly=()=>{let e=cl(),t=ll();return n=>{if(!n)return;if(Tc(n)){window.open(n);return}if(Gd(n)){if(t.fullPath===n)return;e.push(n);return}let r=t.path.slice(0,t.path.lastIndexOf(`/`));e.push(new URL(`${r}/${encodeURI(n)}`,cy).pathname)}},uy=()=>G(Z,{name:`author`},()=>G(`path`,{d:`M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z`}));uy.displayName=`AuthorIcon`;var dy=()=>G(Z,{name:`calendar`},()=>G(`path`,{d:`M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z`}));dy.displayName=`CalendarIcon`;var fy=()=>G(Z,{name:`category`},()=>G(`path`,{d:`M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z`}));fy.displayName=`CategoryIcon`;var py=()=>G(Z,{name:`eye`},()=>G(`path`,{d:`M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z`}));py.displayName=`EyeIcon`;var my=()=>G(Z,{name:`fire`},()=>G(`path`,{d:`M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z`}));my.displayName=`FireIcon`;var hy=()=>G(Z,{name:`print`},()=>G(`path`,{d:`M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z`}));hy.displayName=`PrintIcon`;var gy=()=>G(Z,{name:`tag`},()=>G(`path`,{d:`M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z`}));gy.displayName=`TagIcon`;var _y=()=>G(Z,{name:`timer`},()=>G(`path`,{d:`M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z`}));_y.displayName=`TimerIcon`;var vy=()=>G(Z,{name:`word`},()=>[G(`path`,{d:`M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z`}),G(`path`,{d:`M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z`})]);vy.displayName=`WordIcon`;var yy=z({name:`AuthorInfo`,inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(e){let t=sy(),n=ey();return()=>e.author.length>0?G(`span`,{class:`page-author-info`,"aria-label":`${t.value.author}${n.value?``:`🖊`}`,...n.value?{}:{"data-balloon-pos":`up`}},[G(uy),G(`span`,e.author.map(e=>e.url?G(`a`,{class:`page-author-item`,href:e.url,target:`_blank`,rel:`noopener noreferrer`},e.name):G(`span`,{class:`page-author-item`},e.name))),G(`span`,{property:`author`,content:e.author.map(e=>e.name).join(`, `)})]):null}}),by=z({name:`CategoryInfo`,inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(e){let t=sy(),n=ly(),r=ey();return()=>e.category.length>0?G(`span`,{class:`page-category-info`,"aria-label":`${t.value.category}${r.value?``:`🌈`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(fy),e.category.map(({name:e,path:t})=>G(`span`,{class:[`page-category-item`,{[`color${Wv(e,Number(Yv.colorNumber))}`]:!r.value,clickable:t}],role:t?`navigation`:``,onClick:()=>{t&&n(t)}},e)),G(`meta`,{property:`articleSection`,content:e.category.map(({name:e})=>e).join(`,`)})]):null}}),xy=z({name:`DateInfo`,inheritAttrs:!1,props:{date:Object},setup(e){let t=hd(),n=sy(),r=ey(),i=W(()=>new Intl.DateTimeFormat(t.value,{dateStyle:`short`})),a=W(()=>e.date?i.value.format(e.date):null);return()=>e.date?G(`span`,{class:`page-date-info`,"aria-label":`${n.value.date}${r.value?``:`📅`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(dy),G(`span`,{"data-allow-mismatch":`text`},a.value),G(`meta`,{property:`datePublished`,content:e.date.toISOString()||``})]):null}}),Sy=z({name:`OriginalInfo`,inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){let t=sy();return()=>e.isOriginal?G(`span`,{class:`page-original-info`},t.value.origin):null}}),Cy=1e3,wy=z({name:`PageInfo`,components:{AuthorInfo:yy,CategoryInfo:by,DateInfo:xy,OriginalInfo:Sy,PageViewInfo:z({name:`PageViewInfo`,inheritAttrs:!1,props:{pageview:[Boolean,String]},setup(e){let t=dd(),n=sy(),r=ey(),i=F(),a=P(0);return hp(i,()=>{let e=i.value.textContent;e&&!Number.isNaN(Number(e))&&(a.value=Number(e))},{childList:!0}),()=>e.pageview?G(`span`,{class:`page-pageview-info`,"aria-label":`${n.value.views}${r.value?``:`🔢`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(a.value<Cy?py:my),G(`span`,{ref:i,id:`ArtalkPV`,class:`vp-pageview waline-pageview-count`,"data-path":K(e.pageview)?e.pageview:t.value,"data-page-key":K(e.pageview)?e.pageview:t.value},`...`)]):null}}),ReadingTimeInfo:z({name:`ReadingTimeInfo`,inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(e){let t=sy(),n=ey(),r=W(()=>{if(!e.readingTime)return null;let{minutes:t}=e.readingTime;return t<1?`PT1M`:`PT${Math.round(t)}M`});return()=>e.readingTimeLocale?.time?G(`span`,{class:`page-reading-time-info`,"aria-label":`${t.value.readingTime}${n.value?``:`⌛`}`,...n.value?{}:{"data-balloon-pos":`up`}},[G(_y),G(`span`,e.readingTimeLocale.time),G(`meta`,{property:`timeRequired`,content:r.value})]):null}}),TagInfo:z({name:`TagInfo`,inheritAttrs:!1,props:{tag:Array},setup(e){let t=sy(),n=ly(),r=ey();return()=>e.tag?.length?G(`span`,{class:`page-tag-info`,"aria-label":`${t.value.tag}${r.value?``:`🏷`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(gy),e.tag.map(({name:e,path:t})=>G(`span`,{class:[`page-tag-item`,{[`color${Wv(e,Number(Yv.colorNumber))}`]:!r.value,clickable:t}],role:t?`navigation`:``,onClick:()=>{t&&n(t)}},e)),G(`meta`,{property:`keywords`,content:e.tag.map(({name:e})=>e).join(`,`)})]):null}}),WordInfo:z({name:`ReadTimeInfo`,inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(e){let t=sy(),n=ey();return()=>e.readingTimeLocale?.words?G(`span`,{class:`page-word-info`,"aria-label":`${t.value.words}${n.value?``:`🔠`}`,...n.value?{}:{"data-balloon-pos":`up`}},[G(vy),G(`span`,e.readingTimeLocale.words),G(`meta`,{property:`wordCount`,content:e.readingTime?.words})]):null}})},props:{items:[Boolean,Array],info:{type:Object,required:!0}},setup(e){let t=ey();return()=>{let n=e.items??[`Author`,`Original`,`Date`,`PageView`,`ReadingTime`,`Category`,`Tag`];return n?G(`div`,{class:`page-info`},n.map(n=>G(V(`${n}Info`),{...e.info,isPure:t.value}))):null}}}),Ty={"/popular/":[`archinstall`,`archlinux`,`openwrt`,`proxyclient`,{text:`网站收藏`,prefix:`website/`,collapsible:!0,icon:`globe`,link:`website/`,children:[`online-tools`,`image-tools`,`design-colors`,`icon-fonts`,`resource-downloads`,`network-security`,`communities`,`others`,`github-tools`,{text:`云盘磁力`,prefix:`bookmarks-cloud-magnet/`,collapsible:!0,icon:`fa-solid fa-cloud-arrow-down`,link:`bookmarks-cloud-magnet/`,children:[`01-item-1ea281e3`,`02-item-3a144eb6`,`03-item-9d72744c`,`04-alist-762fba5d`,`05-item-309805ae`]},{text:`在线办公`,prefix:`bookmarks-office/`,collapsible:!0,icon:`fa-solid fa-file-lines`,link:`bookmarks-office/`,children:`01-ppt-8a267223.02-item-c97c0438.03-item-4bc53358.04-ocr-f529c51e.05-h5-52414527.06-item-44a38bea.07-item-e37e15c8.08-item-26112658.09-notion-5ea790e4.10-obsidian-8591294e.11-item-7714e5cf.12-markdown-590fc197.13-item-0bf378f2.14-item-2f3363dd.15-item-255feaba.16-item-3fa627d8.17-item-436367b0.18-item-4c0af1ed.19-item-5cab93be.20-pitch-deck-7ad75512.21-item-67f26bd6.22-item-39907da8.23-item-c6f517d4.24-item-f8c3feb4.25-item-0dd701c3.26-item-d6b8599d.27-item-faf0c48f.28-item-e1f00e74.29-item-fd9d4c15.30-item-1746c257`.split(`.`)},{text:`在线工具`,prefix:`bookmarks-tools/`,collapsible:!0,icon:`fa-solid fa-screwdriver-wrench`,link:`bookmarks-tools/`,children:[`01-item-59ddf3cc`,`02-item-5a632ccb`,`03-item-2f313f9b`,`04-item-a58fdbfc`,`05-item-19483022`,`06-item-a7856a0c`,`07-item-e7a7cf36`,`08-item-a8644fae`,`09-item-22b03c02`,`10-item-1a34b8d9`,`11-item-12fbf752`,`12-item-865429e2`,`13-item-91824b68`,`14-item-52bcff87`,`15-item-59b03fcd`,`16-item-78921798`,`17-item-8f6b5802`,`18-app-8e0f5b14`]},{text:`在线设计`,prefix:`bookmarks-design/`,collapsible:!0,icon:`fa-solid fa-palette`,link:`bookmarks-design/`,children:[`01-item-fcf6995a`,`02-item-6c8e5ba7`,`03-item-33d30980`,`04-item-d42f4380`,`05-item-09f36e2c`,`06-item-19a274e7`,`07-color-aa8b0ad9`,`08-item-0fb267ee`,`09-item-eb36d623`,`10-item-065a2554`,`11-item-22881298`,`12-font-ac86e71a`,`13-c4d-51ac2c7d`,`14-builder-2bd4a59b`,`15-ui-3cfa4083`,`16-item-d2b24b96`,`17-ps-e6633679`,`18-ps-c32f98a6`,`19-ai-ce2bddec`,`20-item-26a0089b`,`21-logo-7ed406b9`,`22-item-3a783e13`,`23-item-68e4531e`,`24-svg-ae8eb96d`,`25-item-93cd23b2`]},{text:`娱乐休闲`,prefix:`bookmarks-entertainment/`,collapsible:!0,icon:`fa-solid fa-film`,link:`bookmarks-entertainment/`,children:[`01-item-77ae7582`,`02-item-ba08216f`,`03-item-67bc707a`,`04-item-fe148076`,`05-item-46630fb2`,`06-item-72191b3a`,`07-item-c6e7d643`,`08-item-e8663767`]},{text:`学习`,prefix:`bookmarks-learning/`,collapsible:!0,icon:`fa-solid fa-book-open-reader`,link:`bookmarks-learning/`,children:[`01-ai-fad4099c`,`02-item-819428b4`,`03-item-ed648d60`,`04-item-15660199`,`05-item-4e678737`,`06-item-5c39c47f`,`07-item-833263aa`,`08-item-7b439a2d`,`09-item-0d51a1a9`,`10-item-1d0132a0`,`11-item-60832c28`,`12-item-38af269b`,`13-item-8d35aac9`,`14-item-38f57b82`,`15-item-ce8346d9`,`16-item-fc56dbcb`,`17-item-13b4e06b`,`18-ai-bd1cbf26`,`19-item-dac01ad3`]},{text:`工作`,prefix:`bookmarks-work/`,collapsible:!0,icon:`fa-solid fa-briefcase`,link:`bookmarks-work/`,children:[`01-item-aafd61a5`,`02-item-938f16a9`,`03-item-1f18993c`,`04-item-09496b16`,`05-item-cab20c31`,`06-item-ba02f74b`,`07-item-c56faefc`,`08-item-b1bae588`,`09-item-c47d7a21`,`10-item-6fb4cfa1`,`11-item-bd3d9d0c`,`12-item-37a38474`,`13-item-3bc5e602`,`14-item-e44b1171`,`15-item-5d1e5145`,`16-item-be00cd79`,`17-item-9b42ae75`,`18-item-02328df5`,`19-item-287eabba`,`20-item-f3ae9f2b`,`21-item-4dd59878`]},{text:`文库学术`,prefix:`bookmarks-academic/`,collapsible:!0,icon:`fa-solid fa-graduation-cap`,link:`bookmarks-academic/`,children:[`01-item-364491f0`,`02-item-1d7d950b`,`03-item-4dd59878`,`04-ai-14f2c0d2`,`05-item-1ebe53a0`,`06-item-7a22fd74`,`07-item-8998c0f7`,`08-item-0ffb08cd`,`09-item-7718a4c2`,`10-item-f3ae9f2b`,`11-item-6e80f09b`,`12-item-287eabba`,`13-item-76b63278`,`14-item-4baafd48`,`15-item-ac65355d`,`16-item-58423fa5`]},{text:`资源书签`,prefix:`bookmarks-resources/`,collapsible:!0,icon:`fa-solid fa-bookmark`,link:`bookmarks-resources/`,children:[`01-item-dd4e9bbb`,`02-item-fe573eac`,`03-item-258bb97e`,`04-item-fdf38d61`,`05-item-b4e050ca`,`06-item-99cc558a`,`07-item-9d72744c`,`08-item-3a144eb6`,`09-item-7191bef6`,`12-item-e3901745`,`13-item-1fdb6230`,`15-item-f068f0da`,`16-item-938f16a9`,`17-item-dac01ad3`,`18-item-31648a71`,`19-item-a3008d48`,`20-item-09095f7d`,`21-item-19a04960`,`22-item-1df0987f`,`24-item-30a56287`,`25-item-c9a0c6dd`,`26-item-6acd244a`,`27-speed-dials-11b5c7e6`,{text:`在线工具`,prefix:`14-item-9c223228/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`14-item-9c223228/`,children:`01-item-0a79900e.02-item-b05db14b.03-item-8bd9c322.04-pdf-ocr-ec1e16ef.05-item-59ddf3cc.06-item-22b03c02.07-item-5378bbfc.08-item-12fbf752.09-item-7d575004.10-item-865429e2.11-item-91824b68.12-item-52bcff87.13-item-59b03fcd.14-item-0084faa4.15-item-dbf2da13.16-item-22c9a8c6.17-item-78921798.18-item-5084f566.19-ai-54600dc7.20-item-7c5c113b.21-item-7fa695e5.22-item-24a93fff.23-item-f910e251.24-item-dae6399d.25-item-02328df5.26-item-26112658.27-item-f74baa06.28-item-77b9c8bd.29-item-74a33946.30-app-8e0f5b14.31-item-2d1c66bd`.split(`.`)},{text:`学习相关`,prefix:`23-item-cd6a49c3/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`23-item-cd6a49c3/`,children:[`01-ai-bd1cbf26`,`02-ai-10a3b7f1`,`03-item-60832c28`,`04-item-6603c934`,`05-item-5d1e5145`,`06-item-38b2fafe`,`07-item-09095f7d`,`08-item-7b439a2d`,`09-item-833263aa`,`10-item-5f66e127`,`11-item-d13a94bf`,`12-item-0d51a1a9`,`13-item-729e62fd`,`14-item-e44b1171`,`15-item-eb2a471d`,`16-item-b8685cff`,`17-study-2c861c5f`,`18-item-fc7da0d9`,`19-item-ffdf1733`,`20-item-101fba8c`,`21-item-1d0132a0`,`22-item-43087966`]},{text:`电脑常用`,prefix:`11-item-2698170c/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`11-item-2698170c/`,children:[`01-item-2699981a`,`02-item-fd5ccbfd`,`03-github-0c1b3cb7`,`04-docker-hub-0be4893c`,`05-cloudflare-b03c6a7a`,`06-item-b881dfc0`,`07-item-0f2bbfb7`,`08-item-a9fbbd40`,`09-item-133f51ea`,`10-item-b2a1a4ef`,`11-item-cc910c2c`,`12-item-f5430db2`,`13-item-d14f1bd7`,`14-item-f1b52f9f`,`15-item-a407a094`,`16-item-9cab073b`,`17-github-bf293ef5`,`18-item-7eb64309`,`19-item-b4922b33`]},{text:`软件相关`,prefix:`10-item-88d03858/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`10-item-88d03858/`,children:[`01-item-420a0db3`,`02-item-5ebdb3a0`,`03-item-a3b9cfc6`,`04-item-d5a34260`,`05-item-4acba229`,`06-item-428700a5`,`07-tv-0ebecdea`,`08-win-e450697b`,`09-win-85967b66`,`10-win-bb256c98`,`11-win-e78ad006`,`12-mac-2886a641`,`13-mac-82c2f8d1`,`14-mac-c6d46cfd`,`15-mac-a4fb47fe`,`16-item-1a1e0af6`,`17-item-c3d24506`,`18-item-23c4e951`,`19-ios-e8f480c2`,`20-ios-f62ce7ae`,`21-item-e70272b2`,`22-item-da0bfcc0`,`23-item-fca914b9`]}]},{text:`资源探索`,prefix:`bookmarks-explore/`,collapsible:!0,icon:`fa-solid fa-compass`,link:`bookmarks-explore/`,children:[`01-item-45a4f144`,`02-item-7535c9b5`,`03-item-d42a8faa`,`04-item-ec369adc`,`05-item-e2b9e852`,`06-item-82508c75`,`07-item-f1b60e5d`,`08-item-96151af2`,`09-item-809a9af0`,`10-item-70971daf`,`11-item-d1397cc9`,`12-item-f90bbe93`,`13-item-e283fcc9`,`14-diy-a0ec9f52`,`15-item-8b731a8e`,`16-item-7138ec3f`,`17-item-b9bfea5f`,`18-item-07dc9df3`]},{text:`软件`,prefix:`bookmarks-software/`,collapsible:!0,icon:`fa-solid fa-laptop-code`,link:`bookmarks-software/`,children:[`01-item-420a0db3`,`02-item-5ebdb3a0`,`03-item-a3b9cfc6`,`04-item-d5a34260`,`05-item-4acba229`,`06-item-428700a5`,`07-tv-0ebecdea`,`08-win-e450697b`,`09-win-85967b66`,`10-win-bb256c98`,`11-win-e78ad006`,`12-mac-2886a641`,`13-mac-82c2f8d1`,`14-mac-c6d46cfd`,`15-mac-a4fb47fe`,`16-item-1a1e0af6`,`17-item-c3d24506`,`18-item-23c4e951`,`19-ios-e8f480c2`,`20-ios-f62ce7ae`,`21-item-e70272b2`,`22-item-da0bfcc0`,`23-item-fca914b9`]}]}],"/collection/":[`flash`,{text:`Linux 相关`,prefix:`linux/`,collapsible:!0,icon:`bars-staggered`,link:`linux/`,children:[{text:`Linux 服务端运维`,prefix:`devkit/`,collapsible:!0,icon:`bars-staggered`,link:`devkit/`,children:[`java`,`linux-server-optimization`,`mysql`,`nginx`,`python`,`web`]}]},{text:`Windows 设置`,prefix:`windows/`,collapsible:!0,icon:`bars-staggered`,link:`windows/`,children:[{text:`Windows 开发环境配置`,prefix:`devkit/`,collapsible:!0,icon:`bars-staggered`,link:`devkit/`,children:[`adb`,`cygwin`,`docker`,`etcd`,`go`,`java`,`mongodb`,`mysql`,`nvm`,`php`,`postgresql`,`python`,`rabbitmq`,`redis`,`ruby`,`rust`,`wsl2`]},`reset`,`system-build`]}],"/one-click/":[`intelij`,`mas`]},Ey=Symbol(``),Dy=()=>{let e=L(Ey);if(!e)throw Error(`useDarkMode() is called without provider.`);return e},Oy=e=>{let t=Op(),n=Zv(),r=W(()=>n.value.darkmode??`switch`),i=Mp(`vuepress-theme-hope-scheme`,`auto`),a=W(()=>{switch(r.value){case`disable`:return!1;case`enable`:return!0;case`auto`:return t.value;case`switch`:return i.value===`dark`||i.value===`auto`&&t.value;case`toggle`:return i.value===`dark`;default:return i.value===`dark`||i.value===`auto`&&t.value}}),o=W(()=>{let e=r.value;return e===`switch`||e===`toggle`});e.provide(Ey,{canToggle:o,config:r,isDarkMode:a,status:i}),Object.defineProperties(e.config.globalProperties,{$isDarkMode:{get:()=>a.value}})},ky=()=>{let{config:e,isDarkMode:t,status:n}=Dy();lr(()=>{e.value===`disable`?n.value=`light`:e.value===`enable`?n.value=`dark`:e.value===`toggle`&&n.value===`auto`&&(n.value=`light`)}),X(`beforeprint`,()=>{t.value&&(document.documentElement.dataset.theme=`light`)}),X(`afterprint`,()=>{t.value&&(document.documentElement.dataset.theme=`dark`)}),B(()=>{op(t,e=>{document.documentElement.dataset.theme=e?`dark`:`light`})})},Ay=e=>!Tc(e)&&!Dc(e),jy=(e,t=!1,n)=>{let{meta:r,path:i,notFound:a}=Cd(e,n);return a?{text:i,link:i}:{text:!t&&r.shortTitle?r.shortTitle:r.title||i,link:i,icon:r.icon}},My=(e=``,t=``)=>Tc(t)||Gd(t)?t:`${Vc(e)}${t}`,Ny=(e,t)=>{let n=K(e)?jy(My(t,e)):K(e.link)?{...e,link:Ay(e.link)?Cd(My(t,e.link)).path:e.link}:e;if(`children`in n){let e=My(t,n.prefix),r=n.children===`structure`?Ty[e]:n.children;return{...n,prefix:e,children:r.map(t=>Ny(t,e))}}return{...n}},Py=({config:e,prefix:t=``})=>e.map(e=>Ny(e,t)),Fy=({config:e,routePath:t})=>{let n=Vd(e).sort((e,t)=>t.length-e.length);for(let r of n)if(Ld(decodeURI(t),r)){let t=e[r];return Py({config:t===`structure`?Ty[r]:t||[],prefix:r})}return console.warn(`${decodeURI(t)} is missing it's sidebar config.`),[]},Iy=({config:e,routeLocale:t,routePath:n})=>e===`structure`?Py({config:Ty[t],prefix:t}):Id(e)?Py({config:e}):Gc(e)?Fy({config:e,routePath:n}):[],Ly=Symbol(``),Ry=()=>{let{frontmatter:e,routeLocale:t,routePath:n,themeLocale:r}=$v(),i=W(()=>e.value.home?!1:e.value.sidebar??r.value.sidebar??`structure`);ar(Ly,W(()=>Iy({config:i.value,routeLocale:t.value,routePath:n.value})))},zy=()=>{let e=L(Ly);if(!e)throw Error(`useSidebarItems() is called without provider.`);return e},By=z({name:`PageFooter`,setup(){let{frontmatter:e,theme:t,themeLocale:n}=$v(),r=ny(),i=W(()=>{let{copyright:t,footer:r}=e.value;return r!==!1&&!!(t||r||n.value.displayFooter)}),a=W(()=>{let{footer:t}=e.value;return K(t)?t:n.value.footer??``}),o=W(()=>r.value.map(({name:e})=>e).join(`, `)),s=e=>`Copyright © ${new Date().getFullYear()} ${o.value} ${e?`${e} Licensed`:``}`,c=W(()=>{let{copyright:r,license:i=``}=e.value,{license:a}=t.value,{copyright:c}=n.value;return r??(i?s(i):c??(o.value||a?s(a):!1))});return()=>i.value?G(`footer`,{class:`vp-footer-wrapper`,"vp-footer":``},[a.value?G(`div`,{class:`vp-footer`,innerHTML:a.value}):null,c.value?G(`div`,{class:`vp-copyright`,innerHTML:c.value}):null]):null}}),Vy=()=>G(Z,{name:`outlook`},()=>[G(`path`,{d:`M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z`})]);Vy.displayName=`AppearanceIcon`;var Hy=()=>G(Z,{name:`auto`},()=>G(`path`,{d:`M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z`}));Hy.displayName=`AutoColorModeIcon`;var Uy=()=>G(Z,{name:`light`},()=>G(`path`,{d:`M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z`}));Uy.displayName=`LightColorModeIcon`;var Wy=()=>G(Z,{name:`dark`},()=>G(`path`,{d:`M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z`}));Wy.displayName=`DarkColorModeIcon`;var Gy=z({name:`ColorModeSwitch`,setup(){let{config:e,isDarkMode:t,status:n}=Dy(),r=ey(),i=()=>{e.value===`switch`?n.value={light:`dark`,dark:`auto`,auto:`light`}[n.value]:n.value=n.value===`light`?`dark`:`light`},a=async e=>{if(!(document.startViewTransition&&!globalThis.matchMedia(`(prefers-reduced-motion: reduce)`).matches&&!r.value)){i();return}let n=e.clientX,a=e.clientY,o=Math.hypot(Math.max(n,innerWidth-n),Math.max(a,innerHeight-a)),s=t.value;await document.startViewTransition(async()=>{i(),await Wn()}).ready,t.value!==s&&document.documentElement.animate({clipPath:t.value?[`circle(${o}px at ${n}px ${a}px)`,`circle(0px at ${n}px ${a}px)`]:[`circle(0px at ${n}px ${a}px)`,`circle(${o}px at ${n}px ${a}px)`]},{duration:400,pseudoElement:t.value?`::view-transition-old(root)`:`::view-transition-new(root)`})};return()=>G(`button`,{type:`button`,class:`vp-color-mode-switch`,id:`color-mode-switch`,onClick:a},[G(Hy,{style:{display:n.value===`auto`?`block`:`none`}}),G(Wy,{style:{display:n.value===`dark`?`block`:`none`}}),G(Uy,{style:{display:n.value===`light`?`block`:`none`}})])}}),Ky=()=>{let e=Qv();return W(()=>e.value.outlookLocales)},qy=z({name:`ColorMode`,setup(){let e=Ky(),{canToggle:t}=Dy();return()=>t.value?G(`div`,{class:`vp-color-mode`},[G(`label`,{class:`vp-color-mode-title`,for:`color-mode-switch`},e.value.darkmode),G(Gy)]):null}}),Jy=`VUEPRESS_THEME_COLOR`,Yy=z({name:`ThemeColorPicker`,props:{themeColors:{type:Object,required:!0}},setup(e){let{isDarkMode:t}=Dy(),n=W(()=>{let n=new Map(Object.entries(e.themeColors));for(let[e,r]of n.entries())e.includes(`light`)&&(t.value||n.set(e.replace(`light-`,``),r),n.delete(e)),e.includes(`dark`)&&(t.value&&n.set(e.replace(`dark-`,``),r),n.delete(e));return[...n.entries()].map(([e,t])=>({name:e,color:t}))}),r=(e=``)=>{let t=document.documentElement.classList,r=n.value.map(({name:e})=>e);if(!e){localStorage.removeItem(Jy),t.remove(...r);return}t.remove(...r.filter(t=>t!==e)),t.add(e),localStorage.setItem(Jy,e)};return B(()=>{let e=localStorage.getItem(Jy);e&&r(e)}),()=>G(`ul`,{class:`vp-theme-color-picker`,id:`theme-color-picker`},[G(`li`,G(`span`,{class:`theme-color`,onClick:()=>{r()}})),n.value.map(({name:e,color:t})=>G(`li`,G(`span`,{style:{background:t},onClick:()=>{r(e)}})))])}}),Xy=Yv.hasMultipleThemeColors===`true`,Zy=Xy?Bd(zd(Yv).filter(([e])=>e.startsWith(`theme-`))):{},Qy=z({name:`ThemeColor`,setup(){let e=Ky();return()=>Xy?G(`div`,{class:`vp-theme-color`},[G(`label`,{class:`vp-theme-color-title`,for:`theme-color-picker`},e.value.themeColor),G(Yy,{themeColors:Zy})]):null}}),$y=()=>G(Z,{name:`cancel-fullscreen`},()=>G(`path`,{d:`M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z`}));$y.displayName=`CancelFullScreenIcon`;var eb=()=>G(Z,{name:`enter-fullscreen`},()=>G(`path`,{d:`M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z`}));eb.displayName=`EnterFullScreenIcon`;var tb=z({name:`ToggleFullScreenButton`,setup(){let{isSupported:e,isFullscreen:t,toggle:n}=Lp();return()=>e.value?G(`button`,{type:`button`,id:`full-screen-switch`,class:`full-screen`,ariaPressed:t.value,onClick:()=>n()},t.value?G($y):G(eb)):null}}),nb=z({name:`ToggleFullScreenButton`,setup(){let e=Ky(),{isSupported:t}=Lp();return()=>t.value?G(`div`,{class:`full-screen-wrapper`},[G(`label`,{class:`full-screen-title`,for:`full-screen-switch`},e.value.fullscreen),G(tb)]):null}}),rb=z({name:`AppearanceSettings`,setup(){let e=Zv(),t=ey(),n=W(()=>!t.value&&e.value.fullscreen);return()=>G(Od,()=>[Xy?G(Qy):null,G(qy),n.value?G(nb):null])}}),ib=z({name:`AppearanceButton`,setup(){let e=Zv(),{canToggle:t}=Dy(),{isSupported:n}=Lp(),r=ey(),i=P(!1),a=W(()=>!r.value&&e.value.fullscreen&&n),o=W(()=>Xy||t.value||a.value);return vd(()=>{i.value=!1}),()=>o.value?G(`div`,{class:`vp-nav-item hide-in-mobile`},t.value&&!a.value&&!Xy?G(Gy):a.value&&!t.value&&!Xy?G(tb):G(`button`,{type:`button`,class:[`vp-appearance-button`,{open:i.value}],tabindex:`-1`,"aria-hidden":!0},[G(Vy),G(`div`,{class:`vp-appearance-dropdown`},G(rb))])):null}}),ab=()=>G(Z,{name:`i18n`},()=>[G(`path`,{d:`M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z`})]);ab.displayName=`I18nIcon`;var ob=({config:e,iconSizing:t=`both`},{emit:n,slots:r})=>{let{icon:i}=e;return G(Dd,{config:e,onFocusout:()=>{n(`focusout`)}},{...r,before:r.before??(i?()=>G(V(`VPIcon`),{icon:i,sizing:t}):null)})};ob.displayName=`AutoLink`;var sb=z({name:`NavbarDropdown`,props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){let n=Cn(e,`config`),r=W(()=>n.value.ariaLabel??n.value.text),i=P(!1),a=e=>{e.detail===0&&(i.value=!i.value)};return vd(()=>{i.value=!1}),()=>G(`div`,{class:[`vp-dropdown-wrapper`,{open:i.value}]},[G(`button`,{type:`button`,class:`vp-dropdown-title`,"aria-label":r.value,onClick:a},[t.title?.()??[G(V(`VPIcon`),{icon:n.value.icon}),e.config.text],G(`span`,{class:`arrow`}),G(`ul`,{class:`vp-dropdown`},n.value.children.map((e,t)=>{let r=t===n.value.children.length-1;return G(`li`,{class:`vp-dropdown-item`},`children`in e?[G(`h4`,{class:`vp-dropdown-subtitle`},e.link?G(ob,{config:e,onFocusout:()=>{e.children.length===0&&r&&(i.value=!1)}}):e.text),G(`ul`,{class:`vp-dropdown-subitems`},e.children.map((t,n)=>G(`li`,{class:`vp-dropdown-subitem`},G(ob,{config:t,onFocusout:()=>{n===e.children.length-1&&r&&(i.value=!1)}}))))]:G(ob,{config:e,onFocusout:()=>{r&&(i.value=!1)}}))}))])])}}),cb=z({name:`NavbarBrand`,setup(){let{routeLocale:e,siteLocale:t,themeLocale:n}=$v(),r=W(()=>n.value.home??e.value),i=W(()=>t.value.title),a=W(()=>n.value.navbarTitle??i.value),o=W(()=>n.value.logo?Y(n.value.logo):null),s=W(()=>n.value.logoDark?Y(n.value.logoDark):null);return()=>G(Ed,{to:r.value,class:`vp-brand`,"aria-label":n.value.routerLocales.home},()=>[o.value?G(`img`,{class:[`vp-nav-logo`,{light:!!s.value}],src:o.value,alt:``}):null,s.value?G(`img`,{class:[`vp-nav-logo dark`],src:s.value,alt:``}):null,a.value?G(`span`,{class:[`vp-site-name`,{"hide-in-pad":o.value&&(n.value.hideSiteNameOnMobile??!0)}]},a.value):null])}}),lb=(e,t=``)=>K(e)?jy(My(t,e)):`children`in e?{...e,...e.link&&Ay(e.link)?{link:Cd(My(t,e.link)).path}:{},children:e.children.map(n=>lb(n,My(t,e.prefix)))}:{...e,link:Ay(e.link)?Cd(My(t,e.link)).path:e.link},ub=()=>{let e=Qv();return W(()=>(e.value.navbar||[]).map(e=>lb(e)))},db=z({name:`NavbarLinks`,setup(){let e=ub();return()=>e.value.length>0?G(`nav`,{class:`vp-nav-links`},e.value.map(e=>G(`div`,{class:`vp-nav-item hide-in-mobile`},`children`in e?G(sb,{config:e}):G(ob,{config:e,iconSizing:`height`})))):null}}),fb=(e,t)=>t[t.length-1]===e,pb=z({name:`NavScreenMenu`,props:{config:{type:Object,required:!0}},setup(e){let t=Cn(e,`config`),n=ll(),r=W(()=>t.value.ariaLabel??t.value.text),i=P(!1);return vd(()=>{i.value=!1}),R(()=>n.fullPath,()=>{i.value=!1}),()=>[G(`button`,{type:`button`,class:[`vp-nav-screen-menu-title`,{active:i.value}],"aria-label":r.value,onClick:()=>{i.value=!i.value}},[G(`span`,{class:`text`},[G(V(`VPIcon`),{icon:t.value.icon,sizing:`both`}),e.config.text]),G(`span`,{class:[`arrow`,i.value?`down`:`end`]})]),G(`ul`,{class:[`vp-nav-screen-menu`,{hide:!i.value}]},t.value.children.map(e=>G(`li`,{class:`vp-nav-screen-menu-item`},`children`in e?[G(`h4`,{class:`vp-nav-screen-menu-subtitle`},e.link?G(ob,{config:e,onFocusout:()=>{fb(e,t.value.children)&&e.children.length===0&&(i.value=!1)}}):e.text),G(`ul`,{class:`vp-nav-screen-menu-subitems`},e.children.map(n=>G(`li`,{class:`vp-nav-screen-menu-subitem`},G(ob,{config:n,onFocusout:()=>{fb(n,e.children)&&fb(e,t.value.children)&&(i.value=!1)}}))))]:G(ob,{config:e,onFocusout:()=>{fb(e,t.value.children)&&(i.value=!1)}}))))]}}),mb=z({name:`NavScreenLinks`,setup(){let e=ub();return()=>e.value.length>0?G(`nav`,{class:`nav-screen-links`},e.value.map(e=>G(`div`,{class:`navbar-links-item`},`children`in e?G(pb,{config:e}):G(ob,{config:e})))):null}}),{mobileBreakPoint:hb,pcBreakPoint:gb}=Yv,_b=e=>e.endsWith(`px`)?Number(e.slice(0,-2)):null,vb=()=>{let e=P(!1),t=P(!1),n=()=>{e.value=window.innerWidth<=(_b(hb)??719),t.value=window.innerWidth>=(_b(gb)??1440)};return X(`resize`,n,!1),X(`orientationchange`,n,!1),B(()=>{n()}),{isMobile:e,isPC:t}},yb=z({name:`NavScreen`,props:{show:Boolean},slots:Object,setup(e,{slots:t}){let{isMobile:n}=vb(),r=F(),i=Yp(r);return vd(()=>{i.value=!1}),R(n,t=>{!t&&e.show&&(i.value=!1)}),B(()=>{r.value=document.body}),li(()=>{i.value=!1}),()=>G(Jo,{name:`fade-in-down`,onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>e.show?G(`div`,{id:`nav-screen`,class:`vp-nav-screen`},G(`div`,{class:`vp-nav-screen-container`},[t.navScreenTop?.(),G(mb),G(`div`,{class:`vp-appearance-wrapper`},G(rb)),t.navScreenBottom?.()])):null)}}),bb=()=>{let e=Qv(),t=W(()=>e.value.repo),n=W(()=>t.value?Fv(t.value):null),r=W(()=>t.value?Iv(t.value):null),i=W(()=>n.value?e.value.repoLabel??r.value??`Source`:null);return W(()=>!n.value||!i.value||e.value.repoDisplay===!1?null:{type:r.value??`Source`,label:i.value,link:n.value})},xb=z({name:`RepoLink`,setup(){let e=bb();return()=>e.value?G(`div`,{class:`vp-nav-item vp-action`},G(`a`,{class:`vp-action-link`,href:e.value.link,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e.value.label},G(Hv,{type:e.value.type,style:{width:`1.25rem`,height:`1.25rem`,verticalAlign:`middle`}}))):null}}),Sb=({active:e=!1},{emit:t})=>G(`button`,{type:`button`,class:[`vp-toggle-navbar-button`,{"is-active":e}],"aria-label":`Toggle Navbar`,"aria-expanded":e,"aria-controls":`nav-screen`,onClick:()=>{t(`toggle`)}},G(`span`,[G(`span`,{class:`vp-top`}),G(`span`,{class:`vp-middle`}),G(`span`,{class:`vp-bottom`})]));Sb.displayName=`ToggleNavbarButton`;var Cb=(e,{emit:t})=>G(`button`,{type:`button`,class:`vp-toggle-sidebar-button`,title:`Toggle Sidebar`,onClick:()=>{t(`toggle`)}},G(`span`,{class:`icon`}));Cb.displayName=`ToggleSidebarButton`,Cb.emits=[`toggle`];var wb=()=>{let e=Qv(),{isMobile:t}=vb();return W(()=>{let{navbarAutoHide:n=`mobile`}=e.value;return n!==`none`&&(n===`always`||t.value)})},Tb=z({name:`NavBar`,emits:[`toggleSidebar`],slots:Object,setup(e,{emit:t,slots:n}){let r=Qv(),{isMobile:i}=vb(),a=P(!1),o=wb(),s=W(()=>r.value.navbarLayout??{start:[`Brand`],center:[`Links`],end:[`Language`,`Repo`,`Outlook`,`Search`]}),c={Brand:cb,Language:Kh,Links:db,Repo:xb,Outlook:ib,Search:_m(`SearchBox`)?V(`SearchBox`):Kh},l=e=>c[e]??(_m(e)?V(e):Kh);return vd(()=>{a.value=!1}),R(i,e=>{e||(a.value=!1)}),()=>[G(`header`,{key:`navbar`,id:`navbar`,class:[`vp-navbar`,{"auto-hide":o.value}],"vp-navbar":``},[G(`div`,{class:`vp-navbar-start`},[G(Cb,{onToggle:()=>{a.value&&=!1,t(`toggleSidebar`)}}),s.value.start?.map(e=>G(l(e)))]),G(`div`,{class:`vp-navbar-center`},[s.value.center?.map(e=>G(l(e)))]),G(`div`,{class:`vp-navbar-end`},[s.value.end?.map(e=>G(l(e))),G(Sb,{active:a.value,onToggle:()=>{a.value=!a.value}})])]),G(yb,{show:a.value},n)]}}),Eb=(e,t)=>t.activeMatch?new RegExp(t.activeMatch,`u`).test(e.path):Jv(e,t.link),Db=z({name:`SidebarChild`,props:{config:{type:Object,required:!0}},setup(e){let t=ll();return()=>K(e.config.link)?G(ob,{class:[`vp-sidebar-link`,{active:Eb(t,e.config)}],config:{...e.config,exact:!0}}):G(`p`,e,[G(V(`VPIcon`),{icon:e.config.icon,sizing:`both`}),e.config.text])}}),Ob=(e,t)=>`children`in t?!!t.prefix&&Jv(e,t.prefix)||t.children.some(t=>Ob(e,t)):Eb(e,t),kb=z({name:`SidebarGroup`,props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:[`toggle`],setup(e,{emit:t}){let n=ll(),r=P(!1),i=W(()=>Ob(n,e.config)),a=W(()=>Eb(n,e.config)),o=W(()=>e.open||e.config.expanded&&!r.value);return()=>{let{collapsible:n,children:s,icon:c,prefix:l,link:u,text:d}=e.config;return G(`section`,{class:`vp-sidebar-group`},[G(n?`button`:`p`,{class:[`vp-sidebar-header`,{clickable:n||u,exact:a.value,active:i.value}],...n?{type:`button`,onClick:()=>{r.value=!0,t(`toggle`)}}:{}},[G(V(`VPIcon`),{icon:c,sizing:`both`}),u?G(ob,{class:`vp-sidebar-title no-external-link-icon`,config:{text:d,link:u}}):G(`span`,{class:`vp-sidebar-title`},d),n?G(`span`,{class:[`vp-arrow`,o.value?`down`:`end`]}):null]),o.value||!n?G(Ab,{key:l,config:s}):null])}}}),Ab=z({name:`SidebarLinks`,props:{config:{type:Array,required:!0}},setup(e){let t=ll(),n=dd(),r=P(-1),i=e=>{r.value=e===r.value?-1:e};return op(n,()=>{r.value=e.config.findIndex(e=>Ob(t,e))},{flush:`post`}),()=>G(`ul`,{class:`vp-sidebar-links`},e.config.map((e,t)=>G(`li`,`children`in e?G(kb,{config:e,open:t===r.value,onToggle:()=>{i(t)}}):G(Db,{config:e}))))}}),jb=z({name:`SideBar`,slots:Object,setup(e,{slots:t}){let n=ll(),r=zy(),i=F();return B(()=>{op(()=>n.hash,e=>{let t=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${e}"]`);if(!t)return;let{top:r,height:a}=i.value.getBoundingClientRect(),{top:o,height:s}=t.getBoundingClientRect();o<r?t.scrollIntoView(!0):o+s>r+a&&t.scrollIntoView(!1)})}),()=>G(`aside`,{ref:i,key:`sidebar`,id:`sidebar`,class:`vp-sidebar`,"vp-sidebar":``},[t.sidebarTop?.(),t.sidebarItems?.(r.value)??G(Ab,{config:r.value}),t.sidebarBottom?.()])}}),Mb=z({name:`MainLayout`,props:{containerClass:String,noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){let{frontmatter:n,theme:r,themeLocale:i}=$v(),{isMobile:a,isPC:o}=vb(),s=ey(),[c,l]=ap(!1),[u,d]=ap(!1),f=zy(),p=F(),m=Yp(p),h=P(!1),g=wb();R(g,e=>{e||(h.value=!1)});let _=W(()=>e.noNavbar||n.value.navbar===!1||i.value.navbar===!1?!1:!!(i.value.logo??i.value.repo??i.value.navbar)),v=W(()=>n.value.externalLinkIcon??r.value.externalLinkIcon??!0),y=W(()=>!e.noToc&&!n.value.home&&!!(n.value.toc??i.value.toc??!0)),b={x:0,y:0},x=e=>{b.x=e.changedTouches[0].clientX,b.y=e.changedTouches[0].clientY},S=e=>{let t=e.changedTouches[0].clientX-b.x,n=e.changedTouches[0].clientY-b.y;Math.abs(t)>Math.abs(n)*1.5&&Math.abs(t)>40&&(t>0&&b.x<=80?l(!0):l(!1))},C=0;return X(`scroll`,Qf(()=>{let e=window.scrollY;e<=58||e<C?h.value=!1:C+200<e&&!c.value&&g.value&&(h.value=!0),C=e},300,!0)),R(a,e=>{e||l(!1)}),R(c,e=>{m.value=e}),vd(()=>{l(!1)}),B(()=>{p.value=document.body}),li(()=>{m.value=!1}),()=>{let r=t.sidebarTop?.(),i=t.sidebarItems?.(f.value),p=t.sidebarBottom?.(),m=gm(r)&&gm(i)&&gm(p),g=e.noSidebar||n.value.sidebar===!1||(n.value.home||f.value.length===0)&&m;return G(_m(`GlobalEncrypt`)?V(`GlobalEncrypt`):Cm,()=>G(`div`,{class:[`theme-container`,{"hide-navbar":h.value,"no-navbar":!_.value,"sidebar-collapsed":!a.value&&!o.value&&u.value,"sidebar-open":a.value&&c.value,"no-sidebar":g,"external-link-icon":v.value,pure:s.value,"has-toc":y.value},e.containerClass??``,n.value.containerClass??``],"vp-container":``,onTouchStart:x,onTouchEnd:S},[_.value?G(Tb,{onToggleSidebar:()=>l()},t):null,G(Jo,{name:`fade-in`},()=>c.value?G(`div`,{class:`vp-sidebar-mask`,onClick:()=>l(!1)}):null),G(Jo,{name:`fade-in`},()=>a.value?null:G(`div`,{class:`toggle-sidebar-wrapper`,onClick:()=>d()},G(`span`,{class:[`arrow`,u.value?`end`:`start`]}))),g?null:G(jb,null,t),t.default(),G(By)]))}}}),Nb=()=>{let{frontmatter:e,themeLocale:t}=$v();return{changelog:W(()=>e.value.changelog??((t.value.changelog??!1)&&!e.value.home)),contributors:W(()=>{let{contributors:n,home:r}=e.value;return Id(n)?r?!1:t.value.contributors??!0:n??(r?!1:t.value.contributors??!0)}),lastUpdated:W(()=>e.value.lastUpdated??t.value.lastUpdated??!0)}},Pb=z({name:`MarkdownContent`,props:{custom:Boolean},slots:Object,setup(e,{slots:t}){let n=Zv(),{changelog:r,contributors:i}=Nb(),a=P(),o=Pp(a,{delayEnter:Fd(n.value.focus)?n.value.focus:1500,delayLeave:0}),s=W(()=>!!(n.value.focus??n.value.pure)&&o.value);return B(()=>{let e=document.documentElement;op(s,t=>{e.classList.toggle(`is-focusing`,t)})}),()=>G(`div`,{class:{custom:e.custom},"vp-content":``},[t.contentBefore?.(),G(Ad,{ref:a,id:`markdown-content`}),t.contentAfter?.(),r.value&&_m(`GitChangelog`)?G(V(`GitChangelog`)):null,i.value===`content`&&_m(`GitContributors`)?G(V(`GitContributors`)):null])}}),Fb=({target:e})=>{let t=document.querySelector(e.hash);if(t){let e=()=>{t.removeAttribute(`tabindex`),t.removeEventListener(`blur`,e)};t.setAttribute(`tabindex`,`-1`),t.addEventListener(`blur`,e),t.focus(),window.scrollTo(0,0)}},Ib=z({name:`SkipLink`,props:{content:{type:String,default:`main-content`}},setup(e){let t=Qv(),n=F();return vd(()=>{n.value?.focus()}),()=>[G(`span`,{ref:n,tabindex:`-1`}),G(`a`,{href:`#${e.content}`,class:`vp-skip-link sr-only`,onClick:Fb},t.value.routerLocales.skipToContent)]}}),Lb=()=>G(Z,{name:`slide-down`},()=>G(`path`,{d:`M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z`}));Lb.displayName=`SlideDownIcon`;var Rb=(e,{emit:t})=>G(`button`,{type:`button`,class:`vp-hero-slide-down-button`,onClick:()=>{t(`click`)}},[G(Lb),G(Lb)]);Rb.displayName=`HeroSlideDownButton`;var zb=e=>{e.style.transform=`translateY(0)`,e.style.opacity=`1`},Q=z({name:`DropTransition`,props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},group:Boolean,appear:Boolean},slots:Object,setup(e,{slots:t}){let n=t=>{t.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,t.style.transform=`translateY(-20px)`,t.style.opacity=`0`};return()=>{let r={name:`drop`,appear:e.appear,onAppear:n,onAfterAppear:zb,onEnter:n,onAfterEnter:zb,onBeforeLeave:n};return e.group?G(Gs,r,t.default):G(Jo,r,t.default)}}}),Bb=null,Vb=null,Hb={wait:()=>Bb,pending:()=>{Bb=new Promise(e=>{Vb=e})},resolve:()=>{Vb?.(),Bb=null,Vb=null}},Ub=z({name:`MainFadeInUpTransition`,slots:Object,setup(e,{slots:t}){let n=ey();return()=>n.value?G(Cm,t.default):G(Jo,{name:`fade-in-up`,mode:`out-in`,onBeforeEnter:Hb.resolve,onBeforeLeave:Hb.pending},t.default)}}),Wb=z({name:`PageTitle`,setup(){let{frontmatter:e,page:t,themeLocale:n}=$v(),{info:r,items:i}=oy();return()=>G(`div`,{class:`vp-page-title`},[G(`h1`,[n.value.titleIcon===!1?null:G(V(`VPIcon`),{icon:e.value.icon}),t.value.title]),G(wy,{info:r.value,items:i.value}),G(`hr`)])}}),Gb=(e=!0)=>{let{lang:t,page:n}=pd(),r=Am();return W(()=>{if(!I(e))return null;let i=n.value.git?.updatedTime??n.value.git?.changelog?.[0].time;if(!i)return null;let a=new Date(i);return{date:a,text:new Intl.DateTimeFormat(t.value,{dateStyle:`short`,timeStyle:`short`}).format(i),iso:a.toISOString(),locale:r.value.latestUpdateAt}})},Kb=(e,t)=>{let n=e.replace(t,`/`).split(`/`),r=[],i=Hc(t);return n.forEach((e,t)=>{t===n.length-1?e!==``&&(i+=e,r.push({link:i,name:e})):(i+=`${e}/`,r.push({link:i,name:e||`Home`}))}),r},qb=z({name:`BreadCrumb`,setup(){let{frontmatter:e,page:t,routeLocale:n,routePath:r,themeLocale:i}=$v(),a=F([]),o=W(()=>(e.value.breadcrumb??i.value.breadcrumb??!0)&&a.value.length>1),s=W(()=>e.value.breadcrumbIcon??i.value.breadcrumbIcon??!0),c=()=>{let e=Kb(t.value.path,n.value).map(({link:e,name:t})=>{let{path:n,meta:r,notFound:i}=Cd(e);return i||r.breadcrumbExclude?null:{title:r.shortTitle||r.title||t,icon:r.icon,path:n}}).filter(e=>e!=null);e.length>1&&(a.value=e)};return B(()=>{op(r,c)}),()=>G(`nav`,{class:[`vp-breadcrumb`,{disable:!o.value}]},o.value?G(`ol`,{vocab:`https://schema.org/`,typeof:`BreadcrumbList`},a.value.map((e,t)=>G(`li`,{class:{"is-active":a.value.length-1===t},property:`itemListElement`,typeof:`ListItem`},[G(Ed,{to:e.path,property:`item`,typeof:`WebPage`},()=>[s.value?G(V(`VPIcon`),{icon:e.icon}):null,G(`span`,{property:`name`},e.title||`Unknown`)]),G(`meta`,{property:`position`,content:t+1})]))):[])}}),Jb=(e,t)=>e===!1?e:Gc(e)?{...e,link:jy(e.link,!0,t).link}:K(e)?jy(e,!0,t):null,Yb=(e,t,n)=>{let r=e.findIndex(e=>e.link===t);if(r!==-1){if(!e[r+n])return null;let t=e[r+n];return t.link?t:`prefix`in t&&!Cd(t.prefix).notFound?{...t,link:t.prefix}:null}for(let r of e)if(`children`in r){let e=Yb(r.children,t,n);if(e)return e}let i=e.findIndex(e=>`prefix`in e&&e.prefix===t);if(i!==-1){if(!e[i+n])return null;let t=e[i+n];return t.link?t:`prefix`in t&&!Cd(t.prefix).notFound?{...t,link:t.prefix}:null}return null},Xb=()=>{let{frontmatter:e,routePath:t,themeLocale:n}=$v(),r=zy();return{prevLink:W(()=>{let i=Jb(e.value.prev,t.value);return i===!1?null:i??(n.value.prevLink===!1?null:Yb(r.value,t.value,-1))}),nextLink:W(()=>{let i=Jb(e.value.next,t.value);return i===!1?null:i??(n.value.nextLink===!1?null:Yb(r.value,t.value,1))})}},Zb=z({name:`PageNav`,setup(){let e=sy(),t=ly(),{prevLink:n,nextLink:r}=Xb();return X(`keydown`,e=>{if(e.altKey)switch(e.key){case`ArrowRight`:r.value&&(t(r.value.link),e.preventDefault());break;case`ArrowLeft`:n.value&&(t(n.value.link),e.preventDefault());break;default:}}),()=>n.value||r.value?G(`nav`,{class:`vp-page-nav`},[n.value?G(ob,{class:`prev`,config:n.value},()=>[G(`div`,{class:`hint`},[G(`span`,{class:`arrow start`}),e.value.prev]),G(`div`,{class:`link`},[G(V(`VPIcon`),{icon:n.value?.icon}),n.value?.text])]):null,r.value?G(ob,{class:`next`,config:r.value},()=>[G(`div`,{class:`hint`},[e.value.next,G(`span`,{class:`arrow end`})]),G(`div`,{class:`link`},[r.value?.text,G(V(`VPIcon`),{icon:r.value?.icon})])]):null]):null}}),Qb=z({name:`PrintButton`,setup(){let e=sy(),t=Zv();return()=>t.value.print===!1?null:G(`button`,{type:`button`,class:`print-button`,title:e.value.print,onClick:()=>{globalThis.print()}},G(hy))}}),$b={selector:[...Array.from({length:6}).map((e,t)=>`#markdown-content > h${t+1}`),`[vp-content] > h2`].join(`, `),levels:`deep`,ignore:[`.vp-badge`,`.vp-icon`]},ex=z({name:`TOC`,props:{items:Array},slots:Object,setup(e,{slots:t}){let{frontmatter:n,themeLocale:r}=$v(),i=W(()=>{let e=n.value.toc??r.value.toc;return Gc(e)?{...$b,...e}:e??!0?$b:void 0}),a=Dm(i),o=ll(),s=sy(),[c,l]=ap(),u=F(),d=P(`-2rem`),f=e=>{u.value?.scrollTo({top:e,behavior:`smooth`})},p=()=>{if(u.value){let e=document.querySelector(`.vp-toc-item.active`);e?d.value=`${e.getBoundingClientRect().top-u.value.getBoundingClientRect().top+u.value.scrollTop}px`:d.value=`-2rem`}else d.value=`-2rem`};B(()=>{op(()=>o.hash,e=>{if(u.value){let t=document.querySelector(`#toc a.vp-toc-link[href$="${e}"]`);if(!t)return;let{top:n,height:r}=u.value.getBoundingClientRect(),{top:i,height:a}=t.getBoundingClientRect();i<n?f(u.value.scrollTop+i-n):i+a>n+r&&f(u.value.scrollTop+i+a-n-r)}},{flush:`post`}),op(()=>o.fullPath,p,{flush:`post`})});let m=({title:e,level:t,slug:n})=>G(Ed,{to:`#${n}`,class:[`vp-toc-link`,`level${t}`],onClick:()=>{l()}},()=>e),h=e=>e.length>0?G(`ul`,{class:`vp-toc-list`},e.map(e=>{let t=h(e.children);return[G(`li`,{class:[`vp-toc-item`,{active:o.hash===`#${e.slug}`}]},m(e)),t?G(`li`,t):null]})):null;return()=>i.value||e.items?.length?G(Od,()=>{let n=e.items?.length?h(e.items):h(a.value),r=t.toc?.(a.value)??(n?[G(`div`,{class:`vp-toc-header`,onClick:()=>{l()}},[s.value.toc,G(Qb),G(`div`,{class:[`arrow`,c.value?`down`:`end`]})]),G(`div`,{class:[`vp-toc-wrapper`,c.value?`open`:``],ref:u},[n,G(`div`,{class:`vp-toc-marker`,style:{top:d.value}})])]:null),i=t.tocBefore?.(),o=t.tocAfter?.();return gm(r)&&gm(i)&&gm(o)?null:G(`div`,{class:`vp-toc-placeholder`},[G(`aside`,{id:`toc`,"vp-toc":``},[i,r,o])])}):null}}),tx=()=>G(Z,{name:`edit`},()=>[G(`path`,{d:`M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z`}),G(`path`,{d:`M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z`})]);tx.displayName=`EditIcon`;var nx={GitHub:`:repo/edit/:branch/:path`,GitLab:`:repo/-/edit/:branch/:path`,Gitee:`:repo/edit/:branch/:path`,Bitbucket:`:repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default`},rx=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:r,editLinkPattern:i})=>{if(!r)return null;let a=Iv(e),o=``;return i?o=i:a!=null&&(o=nx[a]),o?o.replace(/:repo/u,Oc(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,Uc(`${Hc(n)}/${r}`)):null},ix=()=>{let{frontmatter:e,page:t,themeLocale:n}=$v(),r=sy();return W(()=>{let{repo:i,docsRepo:a=i,docsBranch:o=`main`,docsDir:s=``,editLink:c,editLinkPattern:l=``}=n.value;if(!(e.value.editLink??c??!0)||!a)return null;let u=rx({docsRepo:a,docsBranch:o,docsDir:s,editLinkPattern:l,filePathRelative:t.value.filePathRelative});return u?{text:r.value.editLink,link:u}:null})},ax=z({name:`PageMeta`,setup(){let e=Nb(),t=Mm(),n=ix(),r=Gb(e.lastUpdated),i=sy();return()=>G(`footer`,{class:`vp-page-meta`},[n.value?G(`div`,{class:`vp-meta-item edit-link`},G(ob,{class:`vp-meta-label`,config:n.value},{before:()=>G(tx)})):null,G(`div`,{class:`vp-meta-item git-info`},[(!e.changelog.value||!_m(`GitChangelog`))&&r.value?G(`div`,{class:`update-time`},[G(`span`,{class:`vp-meta-label`},`${r.value.locale}: `),G(`time`,{class:`vp-meta-info`,datetime:r.value.iso,"data-allow-mismatch":``},r.value.text)]):null,e.contributors.value&&e.contributors.value!==`content`&&t.value.length>0?G(`div`,{class:`contributors`},[G(`span`,{class:`vp-meta-label`},`${i.value.contributors}: `),t.value.map(({email:e,name:t},n,r)=>[G(`span`,{class:`vp-meta-info`,title:`email: ${e}`},t),n===r.length-1?``:`,`])]):null])])}}),ox=z({name:`PageContent`,slots:Object,setup(e,{slots:t}){let{frontmatter:n}=$v(),{isDarkMode:r}=Dy();return()=>G(`main`,{id:`main-content`,class:`vp-page`},G(_m(`LocalEncrypt`)?V(`LocalEncrypt`):Cm,()=>[t.pageTop?.(),n.value.cover?G(`div`,{class:`page-cover`},G(`img`,{src:Y(n.value.cover),alt:``,"no-view":``})):null,G(qb),G(Wb),G(ex,null,t),t.content?.()??G(Pb,null,t),G(ax),G(Zb),_m(`CommentService`)?G(V(`CommentService`),{darkmode:r.value}):null,t.pageBottom?.()]))}}),sx=(e,{slots:t})=>{let{bgImage:n,bgImageDark:r,bgImageStyle:i,color:a,description:o,image:s,imageDark:c,header:l,features:u}=e;return G(`div`,{class:`vp-feature-wrapper`},[n?G(`div`,{class:[`vp-feature-bg`,{light:r}],style:[{"background-image":`url(${n})`},i]}):null,r?G(`div`,{class:`vp-feature-bg dark`,style:[{"background-image":`url(${r})`},i]}):null,G(`div`,{class:`vp-feature`,style:a?{color:a}:{}},[t.image?.(e)??[s?G(`img`,{class:[`vp-feature-image`,{light:c}],src:Y(s),alt:``}):null,c?G(`img`,{class:`vp-feature-image dark`,src:Y(c),alt:``}):null],t.info?.(e)??[l?G(`h2`,{class:`vp-feature-header`},l):null,o?G(`div`,{class:`vp-feature-description`,innerHTML:o}):null],u.length>0?G(`div`,{class:`vp-features`},u.map(({icon:e,title:t,details:n,link:r})=>{let i=[G(`h3`,{class:`vp-feature-title`},[G(V(`VPIcon`),{icon:e}),G(`span`,{innerHTML:t})]),G(`div`,{class:`vp-feature-details`,innerHTML:n})];return r?Dc(r)?G(`a`,{class:`vp-feature-item link`,href:r,"aria-label":t,target:`_blank`},i):G(Ed,{class:`vp-feature-item link`,to:r,"aria-label":t},()=>i):G(`div`,{class:`vp-feature-item`},i)})):null])])};sx.displayName=`FeaturePanel`;var cx=z({name:`HeroInfo`,slots:Object,setup(e,{slots:t}){let{frontmatter:n,siteLocale:r}=$v(),i=W(()=>{let{heroText:e,tagline:t,heroStyle:i,heroFullScreen:a=!1}=n.value;return{text:e??(r.value.title||`Hello`),tagline:t??r.value.description,style:i??null,isFullScreen:a}}),a=W(()=>{let{heroImage:e,heroImageDark:t,heroAlt:r,heroImageStyle:i}=n.value;return{image:e?Y(e):null,imageDark:t?Y(t):null,style:i??null,alt:r??``}}),o=W(()=>{let{bgImage:e,bgImageDark:t,bgImageStyle:r}=n.value;return{image:K(e)?Y(e):null,imageDark:K(t)?Y(t):null,style:r??null}}),s=W(()=>n.value.actions??[]);return()=>G(`header`,{class:[`vp-hero-info-wrapper`,{"hero-fullscreen":i.value.isFullScreen}],style:i.value.style},[t.heroBg?.(o.value)??[o.value.image?G(`div`,{class:[`vp-hero-mask`,{light:o.value.imageDark}],style:[{"background-image":`url(${o.value.image})`},o.value.style]}):null,o.value.imageDark?G(`div`,{class:`vp-hero-mask dark`,style:[{"background-image":`url(${o.value.imageDark})`},o.value.style]}):null],G(`div`,{class:`vp-hero-info`},[t.heroLogo?.(a.value)??G(Q,{appear:!0,group:!0},()=>{let{image:e,imageDark:t,style:n,alt:r}=a.value;return[e?G(`img`,{key:`light`,class:[`vp-hero-image`,{light:t}],style:n,src:e,alt:r}):null,t?G(`img`,{key:`dark`,class:`vp-hero-image dark`,style:n,src:t,alt:r}):null]}),t.heroInfo?.(i.value)??G(`div`,{class:`vp-hero-infos`},[i.value.text?G(Q,{appear:!0,delay:.04},()=>G(`h1`,{id:`main-title`,class:`vp-hero-title`},i.value.text)):null,i.value.tagline?G(Q,{appear:!0,delay:.08},()=>G(`div`,{id:`main-description`,innerHTML:i.value.tagline})):null,s.value.length>0?G(Q,{appear:!0,delay:.12},()=>G(`p`,{class:`vp-hero-actions`},s.value.map(e=>G(ob,{class:[`vp-hero-action`,e.type??`default`,`no-external-link-icon`],config:e})))):null])]),i.value.isFullScreen?G(Rb,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector(`[vp-navbar]`)?.clientHeight??0),behavior:`smooth`})}}):null])}}),lx=(e,{slots:t})=>{let{bgImage:n,bgImageDark:r,bgImageStyle:i,color:a,description:o,image:s,imageDark:c,header:l,highlights:u=[],type:d=`un-order`}=e;return G(`div`,{class:`vp-highlight-wrapper`,style:a?{color:a}:{}},[n?G(`div`,{class:[`vp-highlight-bg`,{light:r}],style:[{"background-image":`url(${n})`},i]}):null,r?G(`div`,{class:`vp-highlight-bg dark`,style:[{"background-image":`url(${r})`},i]}):null,G(`div`,{class:`vp-highlight`},[t.image?.(e)??[s?G(`img`,{class:[`vp-highlight-image`,{light:c}],src:Y(s),alt:``}):null,c?G(`img`,{class:`vp-highlight-image dark`,src:Y(c),alt:``}):null],t.info?.(e)??[G(`div`,{class:`vp-highlight-info-wrapper`},G(`div`,{class:`vp-highlight-info`},[l?G(`h2`,{class:`vp-highlight-header`,innerHTML:l}):null,o?G(`div`,{class:`vp-highlight-description`,innerHTML:o}):null,t.highlights?.(u)??G(d===`order`?`ol`:d===`no-order`?`dl`:`ul`,{class:`vp-highlights`},u.map(({icon:e,title:t,details:n,link:r})=>{let i=[G(d===`no-order`?`dt`:`h3`,{class:`vp-highlight-title`},[e?G(V(`VPIcon`),{class:`vp-highlight-icon`,icon:e}):null,G(`span`,{innerHTML:t})]),n?G(d===`no-order`?`dd`:`div`,{class:`vp-highlight-details`,innerHTML:n}):null];return G(d===`no-order`?`div`:`li`,{class:[`vp-highlight-item-wrapper`,{link:r}]},r?Dc(r)?G(`a`,{class:`vp-highlight-item link`,href:r,"aria-label":t,target:`_blank`},i):G(Ed,{class:`vp-highlight-item link`,to:r,"aria-label":t},()=>i):G(`div`,{class:`vp-highlight-item`},i))}))]))]])])};lx.displayName=`HighlightSection`;var ux=z({name:`HomePage`,slots:Object,setup(e,{slots:t}){let n=md();return()=>{let{features:e,highlights:r}=n.value;return G(`main`,{id:`main-content`,class:`vp-page vp-project-home`,"aria-labelledby":n.value.heroText===``?``:`main-title`},[t.heroBefore?.(),G(cx,null,t),t.heroAfter?.(),Id(r)?r.map(e=>`features`in e?G(sx,e):G(lx,e)):Id(e)?G(Q,{appear:!0,delay:.24},()=>G(sx,{features:e})):null,t.content?.()??G(Q,{appear:!0,delay:.32},()=>G(Pb,null,t))])}}}),dx=z({name:`PortfolioHero`,slots:Object,setup(e,{slots:t}){let n=ty(),r=md(),i=P(0),a=W(()=>r.value.titles?.[i.value]??``),o=P(``),s=W(()=>{let{name:e,avatar:t,avatarDark:i,avatarAlt:a,avatarStyle:o}=r.value;return{name:e??n.value.name,avatar:t?Y(t):null,avatarDark:i?Y(i):null,alt:(a||e)??``,style:o??null}}),c=W(()=>{let{bgImage:e,bgImageDark:t,bgImageStyle:n}=r.value;return{image:K(e)?Y(e):null,imageDark:K(t)?Y(t):null,style:n??null}}),l=W(()=>{let{welcome:e,name:t,titles:i=[],medias:a}=r.value;return{name:t??n.value.name,welcome:e??`👋 Hi There, I'm`,title:o.value,titles:i,medias:a??null}}),u=()=>{o.value=``;let e=0,t=!1,n=async()=>{if(!t)if(o.value+=a.value[e],e+=1,await Wn(),e<a.value.length)setTimeout(()=>{n()},150);else{let{length:e}=l.value.titles;setTimeout(()=>{i.value=e<=1||i.value===l.value.titles.length-1?0:i.value+1},1e3)}};return n(),()=>{t=!0}},d;return B(()=>{op(a,()=>{d?.(),d=u()})}),()=>G(`section`,{id:`portfolio`,class:[`vp-portfolio`,{bg:c.value.image}]},[t.portfolioBg?.(c.value)??[c.value.image?G(`div`,{class:[`vp-portfolio-mask`,{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.style]}):null,c.value.imageDark?G(`div`,{class:`vp-portfolio-mask dark`,style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.style]}):null],t.portfolioAvatar?.(s.value)??G(`div`,{class:`vp-portfolio-avatar`},[G(Q,{delay:.04},()=>{let{avatar:e,avatarDark:t,name:n,alt:r,style:i}=s.value;return[e?G(`img`,{key:`light`,class:{light:t},src:e,title:n,alt:r,style:i}):null,t?G(`img`,{key:`dark`,class:`dark`,src:t,title:o,alt:r,style:i}):null]})]),G(`div`,{class:`vp-portfolio-container`},t.portfolioInfo?.(l.value)??G(`div`,{class:`vp-portfolio-info`},[G(Q,{appear:!0,delay:.08},()=>G(`h6`,{class:`vp-portfolio-welcome`},l.value.welcome)),G(Q,{appear:!0,delay:.12},()=>G(`h1`,{class:`vp-portfolio-name`,id:`main-title`},l.value.name)),G(Q,{appear:!0,delay:.16},()=>G(`h2`,{class:`vp-portfolio-title`},o.value)),G(Q,{appear:!0,delay:.2},()=>l.value.medias?G(`div`,{class:`vp-portfolio-medias`},l.value.medias.map(({name:e,url:t,icon:n})=>G(`a`,{class:`vp-portfolio-media`,href:t,rel:`noopener noreferrer`,target:`_blank`,title:e},G(V(`VPIcon`),{icon:n,sizing:`both`})))):_m(`SocialMedias`)?G(V(`SocialMedias`)):null)]))])}}),fx=z({name:`PortfolioHome`,slots:Object,setup(e,{slots:t}){let n=md();return()=>{let e=n.value.content??`portfolio`;return G(`main`,{id:`main-content`,class:`vp-page vp-portfolio-home`,"aria-labelledby":`main-title`},[G(dx,null,t),e===`none`?null:t.content?.()??G(`div`,G(Q,{appear:!0,delay:.24},()=>G(Pb,{class:{"vp-portfolio-content":e===`portfolio`}},t)))])}}}),px=z({name:`Layout`,slots:Object,setup(e,{slots:t}){let{frontmatter:n,page:r}=$v();return()=>[G(Ib),G(Mb,null,{...t,default:t.default??(()=>n.value.portfolio?G(fx,null,t):n.value.home?G(ux,null,t):G(Ub,()=>G(ox,{key:r.value.path},t))),navScreenBottom:t.navScreenBottom??(_m(`BloggerInfo`)?()=>G(V(`BloggerInfo`)):null)})]}}),mx=z({name:`NotFound`,slots:Object,setup(e,{slots:t}){let{routeLocale:n,theme:r,themeLocale:i}=$v(),a=cl(),o=P(!1),s=W(()=>r.value.locales[o.value?n.value:`/`].routerLocales),c=()=>{if(!o.value)return s.value.notFoundMsg[0];let e=s.value.notFoundMsg;return e[Math.floor(Math.random()*e.length)]};return B(()=>{o.value=!0}),()=>[G(Ib),G(Mb,{noSidebar:!0},{...t,default:()=>G(`main`,{id:`main-content`,class:`vp-page not-found`},t.default?.()??[G(`div`,{class:`not-found-hint`},[G(`p`,{class:`error-code`},`404`),G(`h1`,{class:`error-title`},s.value.notFoundTitle),G(`p`,{class:`error-hint`},c())]),G(`div`,{class:`actions`},[G(`button`,{type:`button`,class:`action-button`,onClick:()=>{globalThis.history.go(-1)}},s.value.back),G(`button`,{type:`button`,class:`action-button`,onClick:()=>{a.push(i.value.home??n.value)}},s.value.home)])])})]}}),hx=()=>G(Z,{name:`lock`},()=>G(`path`,{d:`M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z`}));hx.displayName=`LockIcon`;var gx={},_x=JSON.parse(`{"category":{"/":{"path":"/category/","map":{"Android":{"path":"/category/android/","indexes":[0]},"Windows":{"path":"/category/windows/","indexes":[1,2]},"收集":{"path":"/category/%E6%94%B6%E9%9B%86/","indexes":[3]}}}},"tag":{"/":{"path":"/tag/","map":{"刷机":{"path":"/tag/%E5%88%B7%E6%9C%BA/","indexes":[0]},"激活":{"path":"/tag/%E6%BF%80%E6%B4%BB/","indexes":[2,4]},"arch":{"path":"/tag/arch/","indexes":[5,6]},"KDE":{"path":"/tag/kde/","indexes":[6]},"路由器":{"path":"/tag/%E8%B7%AF%E7%94%B1%E5%99%A8/","indexes":[7]},"ImmortalWrt":{"path":"/tag/immortalwrt/","indexes":[7]},"NAS":{"path":"/tag/nas/","indexes":[7]},"代理":{"path":"/tag/%E4%BB%A3%E7%90%86/","indexes":[3]},"nvm":{"path":"/tag/nvm/","indexes":[1]},"python":{"path":"/tag/python/","indexes":[1]},"adb":{"path":"/tag/adb/","indexes":[1]},"java":{"path":"/tag/java/","indexes":[1]},"cygwin":{"path":"/tag/cygwin/","indexes":[1]},"docker":{"path":"/tag/docker/","indexes":[1]},"etcd":{"path":"/tag/etcd/","indexes":[1]},"go":{"path":"/tag/go/","indexes":[1]},"mongodb":{"path":"/tag/mongodb/","indexes":[1]},"mysql":{"path":"/tag/mysql/","indexes":[1]},"php":{"path":"/tag/php/","indexes":[1]},"postgresql":{"path":"/tag/postgresql/","indexes":[1]},"rabbitmq":{"path":"/tag/rabbitmq/","indexes":[1]},"redis":{"path":"/tag/redis/","indexes":[1]},"ruby":{"path":"/tag/ruby/","indexes":[1]},"rust":{"path":"/tag/rust/","indexes":[1]},"wsl2":{"path":"/tag/wsl2/","indexes":[1]},"Linux":{"path":"/tag/linux/","indexes":[8]},"VPS":{"path":"/tag/vps/","indexes":[8]},"Debian":{"path":"/tag/debian/","indexes":[8]},"安全":{"path":"/tag/%E5%AE%89%E5%85%A8/","indexes":[8]}}}}}`),vx=JSON.parse(`{"0":"/collection/flash.html","1":"/collection/windows/","2":"/one-click/mas.html","3":"/popular/proxyclient.html","4":"/one-click/intelij.html","5":"/popular/archinstall.html","6":"/popular/archlinux.html","7":"/popular/openwrt.html","8":"/collection/linux/devkit/linux-server-optimization.html","9":"/intro.html","10":"/collection/","11":"/one-click/","12":"/popular/","13":"/collection/linux/","14":"/popular/website/","15":"/popular/website/communities.html","16":"/popular/website/design-colors.html","17":"/popular/website/github-tools.html","18":"/popular/website/icon-fonts.html","19":"/popular/website/image-tools.html","20":"/popular/website/network-security.html","21":"/popular/website/online-tools.html","22":"/popular/website/others.html","23":"/popular/website/resource-downloads.html","24":"/collection/linux/devkit/","25":"/collection/linux/devkit/java.html","26":"/collection/linux/devkit/mysql.html","27":"/collection/linux/devkit/nginx.html","28":"/collection/linux/devkit/python.html","29":"/collection/linux/devkit/web.html","30":"/collection/windows/devkit/","31":"/collection/windows/devkit/adb.html","32":"/collection/windows/devkit/cygwin.html","33":"/collection/windows/devkit/docker.html","34":"/collection/windows/devkit/etcd.html","35":"/collection/windows/devkit/go.html","36":"/collection/windows/devkit/java.html","37":"/collection/windows/devkit/mongodb.html","38":"/collection/windows/devkit/mysql.html","39":"/collection/windows/devkit/nvm.html","40":"/collection/windows/devkit/php.html","41":"/collection/windows/devkit/postgresql.html","42":"/collection/windows/devkit/python.html","43":"/collection/windows/devkit/rabbitmq.html","44":"/collection/windows/devkit/redis.html","45":"/collection/windows/devkit/ruby.html","46":"/collection/windows/devkit/rust.html","47":"/collection/windows/devkit/wsl2.html","48":"/popular/website/bookmarks-academic/01-item-364491f0.html","49":"/popular/website/bookmarks-academic/02-item-1d7d950b.html","50":"/popular/website/bookmarks-academic/03-item-4dd59878.html","51":"/popular/website/bookmarks-academic/04-ai-14f2c0d2.html","52":"/popular/website/bookmarks-academic/05-item-1ebe53a0.html","53":"/popular/website/bookmarks-academic/06-item-7a22fd74.html","54":"/popular/website/bookmarks-academic/07-item-8998c0f7.html","55":"/popular/website/bookmarks-academic/08-item-0ffb08cd.html","56":"/popular/website/bookmarks-academic/09-item-7718a4c2.html","57":"/popular/website/bookmarks-academic/10-item-f3ae9f2b.html","58":"/popular/website/bookmarks-academic/11-item-6e80f09b.html","59":"/popular/website/bookmarks-academic/12-item-287eabba.html","60":"/popular/website/bookmarks-academic/13-item-76b63278.html","61":"/popular/website/bookmarks-academic/14-item-4baafd48.html","62":"/popular/website/bookmarks-academic/15-item-ac65355d.html","63":"/popular/website/bookmarks-academic/16-item-58423fa5.html","64":"/popular/website/bookmarks-academic/","65":"/popular/website/bookmarks-cloud-magnet/01-item-1ea281e3.html","66":"/popular/website/bookmarks-cloud-magnet/02-item-3a144eb6.html","67":"/popular/website/bookmarks-cloud-magnet/03-item-9d72744c.html","68":"/popular/website/bookmarks-cloud-magnet/04-alist-762fba5d.html","69":"/popular/website/bookmarks-cloud-magnet/05-item-309805ae.html","70":"/popular/website/bookmarks-cloud-magnet/","71":"/popular/website/bookmarks-design/01-item-fcf6995a.html","72":"/popular/website/bookmarks-design/02-item-6c8e5ba7.html","73":"/popular/website/bookmarks-design/03-item-33d30980.html","74":"/popular/website/bookmarks-design/04-item-d42f4380.html","75":"/popular/website/bookmarks-design/05-item-09f36e2c.html","76":"/popular/website/bookmarks-design/06-item-19a274e7.html","77":"/popular/website/bookmarks-design/07-color-aa8b0ad9.html","78":"/popular/website/bookmarks-design/08-item-0fb267ee.html","79":"/popular/website/bookmarks-design/09-item-eb36d623.html","80":"/popular/website/bookmarks-design/10-item-065a2554.html","81":"/popular/website/bookmarks-design/11-item-22881298.html","82":"/popular/website/bookmarks-design/12-font-ac86e71a.html","83":"/popular/website/bookmarks-design/13-c4d-51ac2c7d.html","84":"/popular/website/bookmarks-design/14-builder-2bd4a59b.html","85":"/popular/website/bookmarks-design/15-ui-3cfa4083.html","86":"/popular/website/bookmarks-design/16-item-d2b24b96.html","87":"/popular/website/bookmarks-design/17-ps-e6633679.html","88":"/popular/website/bookmarks-design/18-ps-c32f98a6.html","89":"/popular/website/bookmarks-design/19-ai-ce2bddec.html","90":"/popular/website/bookmarks-design/20-item-26a0089b.html","91":"/popular/website/bookmarks-design/21-logo-7ed406b9.html","92":"/popular/website/bookmarks-design/22-item-3a783e13.html","93":"/popular/website/bookmarks-design/23-item-68e4531e.html","94":"/popular/website/bookmarks-design/24-svg-ae8eb96d.html","95":"/popular/website/bookmarks-design/25-item-93cd23b2.html","96":"/popular/website/bookmarks-design/","97":"/popular/website/bookmarks-entertainment/01-item-77ae7582.html","98":"/popular/website/bookmarks-entertainment/02-item-ba08216f.html","99":"/popular/website/bookmarks-entertainment/03-item-67bc707a.html","100":"/popular/website/bookmarks-entertainment/04-item-fe148076.html","101":"/popular/website/bookmarks-entertainment/05-item-46630fb2.html","102":"/popular/website/bookmarks-entertainment/06-item-72191b3a.html","103":"/popular/website/bookmarks-entertainment/07-item-c6e7d643.html","104":"/popular/website/bookmarks-entertainment/08-item-e8663767.html","105":"/popular/website/bookmarks-entertainment/","106":"/popular/website/bookmarks-explore/01-item-45a4f144.html","107":"/popular/website/bookmarks-explore/02-item-7535c9b5.html","108":"/popular/website/bookmarks-explore/03-item-d42a8faa.html","109":"/popular/website/bookmarks-explore/04-item-ec369adc.html","110":"/popular/website/bookmarks-explore/05-item-e2b9e852.html","111":"/popular/website/bookmarks-explore/06-item-82508c75.html","112":"/popular/website/bookmarks-explore/07-item-f1b60e5d.html","113":"/popular/website/bookmarks-explore/08-item-96151af2.html","114":"/popular/website/bookmarks-explore/09-item-809a9af0.html","115":"/popular/website/bookmarks-explore/10-item-70971daf.html","116":"/popular/website/bookmarks-explore/11-item-d1397cc9.html","117":"/popular/website/bookmarks-explore/12-item-f90bbe93.html","118":"/popular/website/bookmarks-explore/13-item-e283fcc9.html","119":"/popular/website/bookmarks-explore/14-diy-a0ec9f52.html","120":"/popular/website/bookmarks-explore/15-item-8b731a8e.html","121":"/popular/website/bookmarks-explore/16-item-7138ec3f.html","122":"/popular/website/bookmarks-explore/17-item-b9bfea5f.html","123":"/popular/website/bookmarks-explore/18-item-07dc9df3.html","124":"/popular/website/bookmarks-explore/","125":"/popular/website/bookmarks-learning/01-ai-fad4099c.html","126":"/popular/website/bookmarks-learning/02-item-819428b4.html","127":"/popular/website/bookmarks-learning/03-item-ed648d60.html","128":"/popular/website/bookmarks-learning/04-item-15660199.html","129":"/popular/website/bookmarks-learning/05-item-4e678737.html","130":"/popular/website/bookmarks-learning/06-item-5c39c47f.html","131":"/popular/website/bookmarks-learning/07-item-833263aa.html","132":"/popular/website/bookmarks-learning/08-item-7b439a2d.html","133":"/popular/website/bookmarks-learning/09-item-0d51a1a9.html","134":"/popular/website/bookmarks-learning/10-item-1d0132a0.html","135":"/popular/website/bookmarks-learning/11-item-60832c28.html","136":"/popular/website/bookmarks-learning/12-item-38af269b.html","137":"/popular/website/bookmarks-learning/13-item-8d35aac9.html","138":"/popular/website/bookmarks-learning/14-item-38f57b82.html","139":"/popular/website/bookmarks-learning/15-item-ce8346d9.html","140":"/popular/website/bookmarks-learning/16-item-fc56dbcb.html","141":"/popular/website/bookmarks-learning/17-item-13b4e06b.html","142":"/popular/website/bookmarks-learning/18-ai-bd1cbf26.html","143":"/popular/website/bookmarks-learning/19-item-dac01ad3.html","144":"/popular/website/bookmarks-learning/","145":"/popular/website/bookmarks-office/01-ppt-8a267223.html","146":"/popular/website/bookmarks-office/02-item-c97c0438.html","147":"/popular/website/bookmarks-office/03-item-4bc53358.html","148":"/popular/website/bookmarks-office/04-ocr-f529c51e.html","149":"/popular/website/bookmarks-office/05-h5-52414527.html","150":"/popular/website/bookmarks-office/06-item-44a38bea.html","151":"/popular/website/bookmarks-office/07-item-e37e15c8.html","152":"/popular/website/bookmarks-office/08-item-26112658.html","153":"/popular/website/bookmarks-office/09-notion-5ea790e4.html","154":"/popular/website/bookmarks-office/10-obsidian-8591294e.html","155":"/popular/website/bookmarks-office/11-item-7714e5cf.html","156":"/popular/website/bookmarks-office/12-markdown-590fc197.html","157":"/popular/website/bookmarks-office/13-item-0bf378f2.html","158":"/popular/website/bookmarks-office/14-item-2f3363dd.html","159":"/popular/website/bookmarks-office/15-item-255feaba.html","160":"/popular/website/bookmarks-office/16-item-3fa627d8.html","161":"/popular/website/bookmarks-office/17-item-436367b0.html","162":"/popular/website/bookmarks-office/18-item-4c0af1ed.html","163":"/popular/website/bookmarks-office/19-item-5cab93be.html","164":"/popular/website/bookmarks-office/20-pitch-deck-7ad75512.html","165":"/popular/website/bookmarks-office/21-item-67f26bd6.html","166":"/popular/website/bookmarks-office/22-item-39907da8.html","167":"/popular/website/bookmarks-office/23-item-c6f517d4.html","168":"/popular/website/bookmarks-office/24-item-f8c3feb4.html","169":"/popular/website/bookmarks-office/25-item-0dd701c3.html","170":"/popular/website/bookmarks-office/26-item-d6b8599d.html","171":"/popular/website/bookmarks-office/27-item-faf0c48f.html","172":"/popular/website/bookmarks-office/28-item-e1f00e74.html","173":"/popular/website/bookmarks-office/29-item-fd9d4c15.html","174":"/popular/website/bookmarks-office/30-item-1746c257.html","175":"/popular/website/bookmarks-office/","176":"/popular/website/bookmarks-resources/01-item-dd4e9bbb.html","177":"/popular/website/bookmarks-resources/02-item-fe573eac.html","178":"/popular/website/bookmarks-resources/03-item-258bb97e.html","179":"/popular/website/bookmarks-resources/04-item-fdf38d61.html","180":"/popular/website/bookmarks-resources/05-item-b4e050ca.html","181":"/popular/website/bookmarks-resources/06-item-99cc558a.html","182":"/popular/website/bookmarks-resources/07-item-9d72744c.html","183":"/popular/website/bookmarks-resources/08-item-3a144eb6.html","184":"/popular/website/bookmarks-resources/09-item-7191bef6.html","185":"/popular/website/bookmarks-resources/12-item-e3901745.html","186":"/popular/website/bookmarks-resources/13-item-1fdb6230.html","187":"/popular/website/bookmarks-resources/15-item-f068f0da.html","188":"/popular/website/bookmarks-resources/16-item-938f16a9.html","189":"/popular/website/bookmarks-resources/17-item-dac01ad3.html","190":"/popular/website/bookmarks-resources/18-item-31648a71.html","191":"/popular/website/bookmarks-resources/19-item-a3008d48.html","192":"/popular/website/bookmarks-resources/20-item-09095f7d.html","193":"/popular/website/bookmarks-resources/21-item-19a04960.html","194":"/popular/website/bookmarks-resources/22-item-1df0987f.html","195":"/popular/website/bookmarks-resources/24-item-30a56287.html","196":"/popular/website/bookmarks-resources/25-item-c9a0c6dd.html","197":"/popular/website/bookmarks-resources/26-item-6acd244a.html","198":"/popular/website/bookmarks-resources/27-speed-dials-11b5c7e6.html","199":"/popular/website/bookmarks-resources/","200":"/popular/website/bookmarks-software/01-item-420a0db3.html","201":"/popular/website/bookmarks-software/02-item-5ebdb3a0.html","202":"/popular/website/bookmarks-software/03-item-a3b9cfc6.html","203":"/popular/website/bookmarks-software/04-item-d5a34260.html","204":"/popular/website/bookmarks-software/05-item-4acba229.html","205":"/popular/website/bookmarks-software/06-item-428700a5.html","206":"/popular/website/bookmarks-software/07-tv-0ebecdea.html","207":"/popular/website/bookmarks-software/08-win-e450697b.html","208":"/popular/website/bookmarks-software/09-win-85967b66.html","209":"/popular/website/bookmarks-software/10-win-bb256c98.html","210":"/popular/website/bookmarks-software/11-win-e78ad006.html","211":"/popular/website/bookmarks-software/12-mac-2886a641.html","212":"/popular/website/bookmarks-software/13-mac-82c2f8d1.html","213":"/popular/website/bookmarks-software/14-mac-c6d46cfd.html","214":"/popular/website/bookmarks-software/15-mac-a4fb47fe.html","215":"/popular/website/bookmarks-software/16-item-1a1e0af6.html","216":"/popular/website/bookmarks-software/17-item-c3d24506.html","217":"/popular/website/bookmarks-software/18-item-23c4e951.html","218":"/popular/website/bookmarks-software/19-ios-e8f480c2.html","219":"/popular/website/bookmarks-software/20-ios-f62ce7ae.html","220":"/popular/website/bookmarks-software/21-item-e70272b2.html","221":"/popular/website/bookmarks-software/22-item-da0bfcc0.html","222":"/popular/website/bookmarks-software/23-item-fca914b9.html","223":"/popular/website/bookmarks-software/","224":"/popular/website/bookmarks-tools/01-item-59ddf3cc.html","225":"/popular/website/bookmarks-tools/02-item-5a632ccb.html","226":"/popular/website/bookmarks-tools/03-item-2f313f9b.html","227":"/popular/website/bookmarks-tools/04-item-a58fdbfc.html","228":"/popular/website/bookmarks-tools/05-item-19483022.html","229":"/popular/website/bookmarks-tools/06-item-a7856a0c.html","230":"/popular/website/bookmarks-tools/07-item-e7a7cf36.html","231":"/popular/website/bookmarks-tools/08-item-a8644fae.html","232":"/popular/website/bookmarks-tools/09-item-22b03c02.html","233":"/popular/website/bookmarks-tools/10-item-1a34b8d9.html","234":"/popular/website/bookmarks-tools/11-item-12fbf752.html","235":"/popular/website/bookmarks-tools/12-item-865429e2.html","236":"/popular/website/bookmarks-tools/13-item-91824b68.html","237":"/popular/website/bookmarks-tools/14-item-52bcff87.html","238":"/popular/website/bookmarks-tools/15-item-59b03fcd.html","239":"/popular/website/bookmarks-tools/16-item-78921798.html","240":"/popular/website/bookmarks-tools/17-item-8f6b5802.html","241":"/popular/website/bookmarks-tools/18-app-8e0f5b14.html","242":"/popular/website/bookmarks-tools/","243":"/popular/website/bookmarks-work/01-item-aafd61a5.html","244":"/popular/website/bookmarks-work/02-item-938f16a9.html","245":"/popular/website/bookmarks-work/03-item-1f18993c.html","246":"/popular/website/bookmarks-work/04-item-09496b16.html","247":"/popular/website/bookmarks-work/05-item-cab20c31.html","248":"/popular/website/bookmarks-work/06-item-ba02f74b.html","249":"/popular/website/bookmarks-work/07-item-c56faefc.html","250":"/popular/website/bookmarks-work/08-item-b1bae588.html","251":"/popular/website/bookmarks-work/09-item-c47d7a21.html","252":"/popular/website/bookmarks-work/10-item-6fb4cfa1.html","253":"/popular/website/bookmarks-work/11-item-bd3d9d0c.html","254":"/popular/website/bookmarks-work/12-item-37a38474.html","255":"/popular/website/bookmarks-work/13-item-3bc5e602.html","256":"/popular/website/bookmarks-work/14-item-e44b1171.html","257":"/popular/website/bookmarks-work/15-item-5d1e5145.html","258":"/popular/website/bookmarks-work/16-item-be00cd79.html","259":"/popular/website/bookmarks-work/17-item-9b42ae75.html","260":"/popular/website/bookmarks-work/18-item-02328df5.html","261":"/popular/website/bookmarks-work/19-item-287eabba.html","262":"/popular/website/bookmarks-work/20-item-f3ae9f2b.html","263":"/popular/website/bookmarks-work/21-item-4dd59878.html","264":"/popular/website/bookmarks-work/","265":"/popular/website/bookmarks-resources/10-item-88d03858/01-item-420a0db3.html","266":"/popular/website/bookmarks-resources/10-item-88d03858/02-item-5ebdb3a0.html","267":"/popular/website/bookmarks-resources/10-item-88d03858/03-item-a3b9cfc6.html","268":"/popular/website/bookmarks-resources/10-item-88d03858/04-item-d5a34260.html","269":"/popular/website/bookmarks-resources/10-item-88d03858/05-item-4acba229.html","270":"/popular/website/bookmarks-resources/10-item-88d03858/06-item-428700a5.html","271":"/popular/website/bookmarks-resources/10-item-88d03858/07-tv-0ebecdea.html","272":"/popular/website/bookmarks-resources/10-item-88d03858/08-win-e450697b.html","273":"/popular/website/bookmarks-resources/10-item-88d03858/09-win-85967b66.html","274":"/popular/website/bookmarks-resources/10-item-88d03858/10-win-bb256c98.html","275":"/popular/website/bookmarks-resources/10-item-88d03858/11-win-e78ad006.html","276":"/popular/website/bookmarks-resources/10-item-88d03858/12-mac-2886a641.html","277":"/popular/website/bookmarks-resources/10-item-88d03858/13-mac-82c2f8d1.html","278":"/popular/website/bookmarks-resources/10-item-88d03858/14-mac-c6d46cfd.html","279":"/popular/website/bookmarks-resources/10-item-88d03858/15-mac-a4fb47fe.html","280":"/popular/website/bookmarks-resources/10-item-88d03858/16-item-1a1e0af6.html","281":"/popular/website/bookmarks-resources/10-item-88d03858/17-item-c3d24506.html","282":"/popular/website/bookmarks-resources/10-item-88d03858/18-item-23c4e951.html","283":"/popular/website/bookmarks-resources/10-item-88d03858/19-ios-e8f480c2.html","284":"/popular/website/bookmarks-resources/10-item-88d03858/20-ios-f62ce7ae.html","285":"/popular/website/bookmarks-resources/10-item-88d03858/21-item-e70272b2.html","286":"/popular/website/bookmarks-resources/10-item-88d03858/22-item-da0bfcc0.html","287":"/popular/website/bookmarks-resources/10-item-88d03858/23-item-fca914b9.html","288":"/popular/website/bookmarks-resources/10-item-88d03858/","289":"/popular/website/bookmarks-resources/11-item-2698170c/01-item-2699981a.html","290":"/popular/website/bookmarks-resources/11-item-2698170c/02-item-fd5ccbfd.html","291":"/popular/website/bookmarks-resources/11-item-2698170c/03-github-0c1b3cb7.html","292":"/popular/website/bookmarks-resources/11-item-2698170c/04-docker-hub-0be4893c.html","293":"/popular/website/bookmarks-resources/11-item-2698170c/05-cloudflare-b03c6a7a.html","294":"/popular/website/bookmarks-resources/11-item-2698170c/06-item-b881dfc0.html","295":"/popular/website/bookmarks-resources/11-item-2698170c/07-item-0f2bbfb7.html","296":"/popular/website/bookmarks-resources/11-item-2698170c/08-item-a9fbbd40.html","297":"/popular/website/bookmarks-resources/11-item-2698170c/09-item-133f51ea.html","298":"/popular/website/bookmarks-resources/11-item-2698170c/10-item-b2a1a4ef.html","299":"/popular/website/bookmarks-resources/11-item-2698170c/11-item-cc910c2c.html","300":"/popular/website/bookmarks-resources/11-item-2698170c/12-item-f5430db2.html","301":"/popular/website/bookmarks-resources/11-item-2698170c/13-item-d14f1bd7.html","302":"/popular/website/bookmarks-resources/11-item-2698170c/14-item-f1b52f9f.html","303":"/popular/website/bookmarks-resources/11-item-2698170c/15-item-a407a094.html","304":"/popular/website/bookmarks-resources/11-item-2698170c/16-item-9cab073b.html","305":"/popular/website/bookmarks-resources/11-item-2698170c/17-github-bf293ef5.html","306":"/popular/website/bookmarks-resources/11-item-2698170c/18-item-7eb64309.html","307":"/popular/website/bookmarks-resources/11-item-2698170c/19-item-b4922b33.html","308":"/popular/website/bookmarks-resources/11-item-2698170c/","309":"/popular/website/bookmarks-resources/14-item-9c223228/01-item-0a79900e.html","310":"/popular/website/bookmarks-resources/14-item-9c223228/02-item-b05db14b.html","311":"/popular/website/bookmarks-resources/14-item-9c223228/03-item-8bd9c322.html","312":"/popular/website/bookmarks-resources/14-item-9c223228/04-pdf-ocr-ec1e16ef.html","313":"/popular/website/bookmarks-resources/14-item-9c223228/05-item-59ddf3cc.html","314":"/popular/website/bookmarks-resources/14-item-9c223228/06-item-22b03c02.html","315":"/popular/website/bookmarks-resources/14-item-9c223228/07-item-5378bbfc.html","316":"/popular/website/bookmarks-resources/14-item-9c223228/08-item-12fbf752.html","317":"/popular/website/bookmarks-resources/14-item-9c223228/09-item-7d575004.html","318":"/popular/website/bookmarks-resources/14-item-9c223228/10-item-865429e2.html","319":"/popular/website/bookmarks-resources/14-item-9c223228/11-item-91824b68.html","320":"/popular/website/bookmarks-resources/14-item-9c223228/12-item-52bcff87.html","321":"/popular/website/bookmarks-resources/14-item-9c223228/13-item-59b03fcd.html","322":"/popular/website/bookmarks-resources/14-item-9c223228/14-item-0084faa4.html","323":"/popular/website/bookmarks-resources/14-item-9c223228/15-item-dbf2da13.html","324":"/popular/website/bookmarks-resources/14-item-9c223228/16-item-22c9a8c6.html","325":"/popular/website/bookmarks-resources/14-item-9c223228/17-item-78921798.html","326":"/popular/website/bookmarks-resources/14-item-9c223228/18-item-5084f566.html","327":"/popular/website/bookmarks-resources/14-item-9c223228/19-ai-54600dc7.html","328":"/popular/website/bookmarks-resources/14-item-9c223228/20-item-7c5c113b.html","329":"/popular/website/bookmarks-resources/14-item-9c223228/21-item-7fa695e5.html","330":"/popular/website/bookmarks-resources/14-item-9c223228/22-item-24a93fff.html","331":"/popular/website/bookmarks-resources/14-item-9c223228/23-item-f910e251.html","332":"/popular/website/bookmarks-resources/14-item-9c223228/24-item-dae6399d.html","333":"/popular/website/bookmarks-resources/14-item-9c223228/25-item-02328df5.html","334":"/popular/website/bookmarks-resources/14-item-9c223228/26-item-26112658.html","335":"/popular/website/bookmarks-resources/14-item-9c223228/27-item-f74baa06.html","336":"/popular/website/bookmarks-resources/14-item-9c223228/28-item-77b9c8bd.html","337":"/popular/website/bookmarks-resources/14-item-9c223228/29-item-74a33946.html","338":"/popular/website/bookmarks-resources/14-item-9c223228/30-app-8e0f5b14.html","339":"/popular/website/bookmarks-resources/14-item-9c223228/31-item-2d1c66bd.html","340":"/popular/website/bookmarks-resources/14-item-9c223228/","341":"/popular/website/bookmarks-resources/23-item-cd6a49c3/01-ai-bd1cbf26.html","342":"/popular/website/bookmarks-resources/23-item-cd6a49c3/02-ai-10a3b7f1.html","343":"/popular/website/bookmarks-resources/23-item-cd6a49c3/03-item-60832c28.html","344":"/popular/website/bookmarks-resources/23-item-cd6a49c3/04-item-6603c934.html","345":"/popular/website/bookmarks-resources/23-item-cd6a49c3/05-item-5d1e5145.html","346":"/popular/website/bookmarks-resources/23-item-cd6a49c3/06-item-38b2fafe.html","347":"/popular/website/bookmarks-resources/23-item-cd6a49c3/07-item-09095f7d.html","348":"/popular/website/bookmarks-resources/23-item-cd6a49c3/08-item-7b439a2d.html","349":"/popular/website/bookmarks-resources/23-item-cd6a49c3/09-item-833263aa.html","350":"/popular/website/bookmarks-resources/23-item-cd6a49c3/10-item-5f66e127.html","351":"/popular/website/bookmarks-resources/23-item-cd6a49c3/11-item-d13a94bf.html","352":"/popular/website/bookmarks-resources/23-item-cd6a49c3/12-item-0d51a1a9.html","353":"/popular/website/bookmarks-resources/23-item-cd6a49c3/13-item-729e62fd.html","354":"/popular/website/bookmarks-resources/23-item-cd6a49c3/14-item-e44b1171.html","355":"/popular/website/bookmarks-resources/23-item-cd6a49c3/15-item-eb2a471d.html","356":"/popular/website/bookmarks-resources/23-item-cd6a49c3/16-item-b8685cff.html","357":"/popular/website/bookmarks-resources/23-item-cd6a49c3/17-study-2c861c5f.html","358":"/popular/website/bookmarks-resources/23-item-cd6a49c3/18-item-fc7da0d9.html","359":"/popular/website/bookmarks-resources/23-item-cd6a49c3/19-item-ffdf1733.html","360":"/popular/website/bookmarks-resources/23-item-cd6a49c3/20-item-101fba8c.html","361":"/popular/website/bookmarks-resources/23-item-cd6a49c3/21-item-1d0132a0.html","362":"/popular/website/bookmarks-resources/23-item-cd6a49c3/22-item-43087966.html","363":"/popular/website/bookmarks-resources/23-item-cd6a49c3/","364":"/collection/windows/system-build.html","365":"/collection/windows/reset.html"}`),yx=JSON.parse(`{"article":{"/":{"path":"/article/","indexes":[9,10,11,12,13,1,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,8,5,6,2,364,7,365,4,0,3]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[9,10,11,12,13,1,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,8,5,6,2,364,7,365,4,0,3]}}}`),bx=F(_x),xx=e=>{let{frontmatter:t,page:n,routeLocale:r}=pd();return W(()=>{let i=e??t.value.blog?.key??``;if(!i)return console.warn(`useBlogCategory: key not found`),{path:`/`,map:{}};if(!(i in bx.value))throw Error(`useBlogCategory: key ${i} is invalid`);let a=bx.value[i][r.value],o={path:a.path,map:{}};for(let[e,t]of Object.entries(a.map)){o.map[e]={path:t.path,items:[]};for(let n of t.indexes){let{path:t,meta:r}=Cd(vx[n]);o.map[e].items.push({path:t,info:r})}n.value.path===t.path&&(o.currentItems=o.map[e].items)}return o})},Sx=F(yx),Cx=e=>{let{frontmatter:t,routeLocale:n}=pd();return W(()=>{let r=e??t.value.blog?.key??``;if(!r)return console.warn(`useBlogType: key not found`),{path:`/`,items:[]};if(!(r in Sx.value))throw Error(`useBlogType: key ${e} is invalid`);let i=Sx.value[r][n.value],a={path:i.path,items:[]};for(let e of i.indexes){let{path:t,meta:n}=Cd(vx[e]);a.items.push({path:t,info:n})}return a})},wx=()=>{let{theme:e,themeLocale:t}=$v();return W(()=>({...e.value.blog,...t.value.blog}))},Tx=z({name:`SocialMedias`,setup(){let e=wx(),t=ey(),n=W(()=>zd(e.value.medias??{}).map(([e,t])=>typeof t==`string`?{name:e,icon:gx[e],link:t}:Object.assign({name:e},t)));return()=>n.value.length>0?G(`div`,{class:`vp-social-medias`},n.value.map(({name:e,icon:n,link:r})=>G(`a`,{class:`vp-social-media`,href:r,rel:`noopener noreferrer`,target:`_blank`,"aria-label":e||``,...t.value?{}:{"data-balloon-pos":`up`},innerHTML:Oc(n)?`<img class="vp-social-media-icon ${e}-icon" src="${n}">`:n}))):null}}),Ex=Symbol(``),Dx=()=>{let e=L(Ex);if(!e)throw Error(`useArticles() is called without provider.`);return e},Ox=()=>{ar(Ex,Cx(`article`))},kx=()=>{let e=Qv();return W(()=>e.value.blogLocales)},Ax=Symbol.for(`categoryMap`),jx=()=>{let e=L(Ax);if(!e)throw Error(`useCategoryMap() is called without provider.`);return e},Mx=()=>{ar(Ax,xx(`category`))},Nx=Symbol.for(`tagMap`),Px=()=>{let e=L(Nx);if(!e)throw Error(`useTagMap() is called without provider.`);return e},Fx=()=>{ar(Nx,xx(`tag`))},Ix=Symbol(``),Lx=()=>{let e=L(Ix);if(!e)throw Error(`useTimeline() is called without provider.`);return e},Rx=()=>{let e=Cx(`timeline`),t=hd();ar(Ix,W(()=>{let n=[];return e.value.items.forEach(({info:e,path:r})=>{let i=Wd(e.date);if(i){let a=i.getFullYear();n[0]?.year!==a&&n.unshift({year:a,items:[]}),n[0].items.push({date:i.toLocaleDateString(t.value,{month:`numeric`,day:`numeric`}),info:e,path:r})}}),{...e.value,config:n.reverse()}}))},zx=z({name:`BloggerInfo`,slots:Object,setup(e,{slots:t}){let n=kx(),r=wx(),{siteLocale:i,themeLocale:a}=$v(),o=Dx(),s=jx(),c=Px(),l=Lx(),u=ly(),d=W(()=>({name:r.value.name??Cv(a.value.author)[0]?.name??i.value.title,avatar:r.value.avatar??a.value.logo??null,description:r.value.description??null})),f=W(()=>r.value.intro);return()=>{let{article:e,category:r,tag:i,timeline:a}=n.value,p=[[o.value.path,o.value.items.length,e],[s.value.path,Vd(s.value.map).length,r],[c.value.path,Vd(c.value.map).length,i],[l.value.path,l.value.items.length,a]];return G(`div`,{class:`vp-blogger-info`,vocab:`https://schema.org/`,typeof:`Person`},t.bloggerInfo?.(d.value)??[G(`div`,{class:`vp-blogger`,...f.value?{"aria-label":n.value.intro,"data-balloon-pos":`down`,role:`link`,onClick:()=>{u(f.value)}}:{}},[d.value.avatar?G(`img`,{class:`vp-blogger-avatar`,src:Y(d.value.avatar),property:`image`,alt:`Blogger Avatar`,loading:`lazy`}):null,d.value.name?G(`div`,{class:`vp-blogger-name`,property:`name`},d.value.name):null,d.value.description?G(`div`,{class:`vp-blogger-description`,innerHTML:d.value.description}):null,f.value?G(`meta`,{property:`url`,content:Y(f.value)}):null]),G(`div`,{class:`vp-blog-counts`},p.map(([e,t,n])=>G(Ed,{class:`vp-blog-count`,to:e},()=>[G(`div`,{class:`count`},t),G(`div`,n)]))),G(Tx)])}}}),Bx=Symbol(``),Vx=()=>{let e=L(Bx);if(!e)throw Error(`useStars() is called without provider.`);return e},Hx=()=>{ar(Bx,Cx(`star`))},Ux=()=>G(Z,{name:`category`},()=>G(`path`,{d:`M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z`}));Ux.displayName=`CategoryIcon`;var Wx=()=>G(Z,{name:`tag`},()=>G(`path`,{d:`M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z`}));Wx.displayName=`TagIcon`;var Gx=()=>G(Z,{name:`timeline`},()=>G(`path`,{d:`M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0`}));Gx.displayName=`TimelineIcon`;var Kx=()=>G(Z,{name:`slides`},()=>G(`path`,{d:`M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z`}));Kx.displayName=`SlideIcon`;var qx=()=>G(Z,{name:`sticky`},()=>[G(`path`,{d:`m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z`})]);qx.displayName=`StickyIcon`;var Jx=()=>G(Z,{name:`article`},()=>G(`path`,{d:`M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z`}));Jx.displayName=`ArticleIcon`;var Yx=e=>{let t=Qv();return W(()=>{let{author:n}=e.value;return n?Cv(n):n===!1?[]:Cv(t.value.author,!1)})},Xx=e=>{let t=jx();return W(()=>Tv(e.value.category).map(e=>({name:e,path:t.value.map[e].path})))},Zx=e=>{let t=Px();return W(()=>Ev(e.value.tag).map(e=>({name:e,path:t.value.map[e].path})))},Qx=e=>W(()=>Wd(e.value.date)),$x=e=>{let t=Cn(e,`info`),n=wx(),r=Yx(t),i=Xx(t),a=Zx(t),o=Qx(t),s=jv();return{info:W(()=>({author:r.value,category:i.value,date:o.value,tag:a.value,isOriginal:t.value.isOriginal??!1,readingTime:t.value.readingTime??null,readingTimeLocale:t.value.readingTime&&s.value?Ov(t.value.readingTime,s.value):null,pageview:e.path})),items:W(()=>n.value.articleInfo??null)}},eS=z({name:`ArticleItem`,props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){let n=Cn(e,`info`),{info:r,items:i}=$x(e),a=cl();return()=>{let{title:o,type:s,isEncrypted:c=!1,cover:l=null,excerpt:u,sticky:d}=n.value,f=r.value;return G(`div`,{class:`vp-article-wrapper`,onClick:t=>{t.target?.matches(`summary`)||(t.preventDefault(),a.push(e.path))}},G(`article`,{class:`vp-article-item`,vocab:`https://schema.org/`,typeof:`Article`},[t.articleCover?.({cover:l})??(l?[G(`img`,{class:`vp-article-cover`,src:Y(l),alt:``,loading:`lazy`}),G(`meta`,{property:`image`,content:Y(l)})]:[]),d?G(qx):null,G(Ed,{to:e.path},()=>t.articleTitle?.({title:o,isEncrypted:c,type:s})??G(`header`,{class:`vp-article-title`},[c?G(hx):null,s===`slide`?G(Kx):null,G(`span`,{property:`headline`},o)])),t.articleExcerpt?.({excerpt:u})??(u?G(`div`,{class:`vp-article-excerpt`,innerHTML:u}):null),G(`hr`,{class:`vp-article-hr`}),t.articleInfo?.(f)??G(wy,{info:f,items:i.value,onClick:e=>{e.stopPropagation()}})]))}}}),tS=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>`,nS=z({name:`Pagination`,props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:[`updateCurrentPage`],setup(e,{emit:t}){let n=new ym,r=Qv(),i=P(``),a=W(()=>r.value.paginationLocales),o=W(()=>Math.ceil(e.total/e.perPage)),s=W(()=>!!o.value&&o.value!==1),c=W(()=>o.value<7?!1:e.current>4),l=W(()=>o.value<7?!1:e.current<o.value-3),u=W(()=>{let{current:t}=e,n=1,r=o.value,i=[];o.value>=7&&(t<=4&&t<o.value-3?(n=1,r=5):t>4&&t>=o.value-3?(r=o.value,n=o.value-4):o.value>7&&(n=t-2,r=t+2));for(let e=n;e<=r;e++)i.push(e);return i}),d=e=>{t(`updateCurrentPage`,e)},f=e=>{let t=Number.parseInt(e,10);t<=o.value&&t>0?d(t):n.pop(`${tS}${a.value.errorText.replaceAll(String.raw`\$page`,o.value.toString())}`)};return()=>G(`div`,{class:`vp-pagination`},s.value?G(`nav`,{class:`vp-pagination-list`},[G(`div`,{class:`vp-pagination-number `},[e.current>1?G(`div`,{class:`prev`,role:`navigation`,unselectable:`on`,onClick:()=>{d(e.current-1)}},a.value.prev):null,c.value?[G(`div`,{role:`navigation`,onClick:()=>{d(1)}},1),G(`div`,{class:`ellipsis`},`...`)]:null,u.value.map(t=>G(`div`,{key:t,class:{active:e.current===t},role:`navigation`,onClick:()=>{d(t)}},t)),l.value?[G(`div`,{class:`ellipsis`},`...`),G(`div`,{role:`navigation`,onClick:()=>{d(o.value)}},o.value)]:null,e.current<o.value?G(`div`,{class:`next`,role:`navigation`,unselectable:`on`,onClick:()=>{d(e.current+1)}},a.value.next):null]),G(`div`,{class:`vp-pagination-nav`},[G(`label`,{for:`navigation-text`},`${a.value.navigate}: `),G(`input`,{id:`navigation-text`,value:i.value,onInput:({target:e})=>{i.value=e.value},onKeydown:e=>{e.key===`Enter`&&(e.preventDefault(),f(i.value))}}),G(`button`,{class:`vp-pagination-button`,type:`button`,role:`navigation`,title:a.value.action,onClick:()=>{f(i.value)}},a.value.action)])]):[])}}),rS=10,iS=z({name:`ArticleList`,props:{items:{type:Array,required:!0}},slots:Object,setup(e,{slots:t}){let n=ll(),r=cl(),i=kx(),a=wx(),o=Xv(),s=P(1),c=W(()=>a.value.articlePerPage??rS),l=W(()=>e.items.slice((s.value-1)*c.value,s.value*c.value)),u=async e=>{s.value=e;let t={...n.query};t.page===e.toString()||e===1&&!t.page||(e===1?delete t.page:t.page=e.toString(),await r.push({path:n.path,query:t})),await Wn(),o({selector:`.vp-pageview`})};return B(()=>{let{page:e}=n.query;u(e?Number(e):1),R(s,()=>{let e=document.querySelector(`#article-list`).getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,e)},100)})}),()=>G(`div`,{id:`article-list`,class:`vp-article-list`,role:`feed`},l.value.length>0?[...l.value.map(({info:e,path:n},r)=>G(Q,{appear:!0,delay:r*.04},()=>G(eS,{key:n,info:e,path:n},t))),G(nS,{current:s.value,perPage:c.value,total:e.items.length,onUpdateCurrentPage:u})]:G(`h2`,{class:`vp-empty-hint`},i.value.empty.replace(`$text`,i.value.article.toLocaleLowerCase())))}}),aS=`//theme-hope-assets.vuejs.press/hero/default.jpg`,oS=z({name:`BlogHero`,slots:Object,setup(e,{slots:t}){let{frontmatter:n,siteLocale:r}=$v(),i=W(()=>{let{heroText:e,heroStyle:t,tagline:i,heroFullScreen:a=!1}=n.value;return{text:e??(r.value.title||`Hello`),tagline:i??``,style:t??null,isFullScreen:a}}),a=W(()=>{let{heroImage:e,heroImageDark:t,heroAlt:r,heroImageStyle:i}=n.value;return{image:e?Y(e):null,imageDark:t?Y(t):null,style:i??null,alt:r??``}}),o=W(()=>{let{bgImage:e,bgImageDark:t,bgImageStyle:r}=n.value;return{image:K(e)?Y(e):e===!1?null:aS,imageDark:K(t)?Y(t):null,style:r??null}});return()=>n.value.hero===!1?null:G(`div`,{class:[`vp-blog-hero`,{"hero-fullscreen":n.value.heroFullScreen,"no-bg":!o.value.image}]},[t.heroBg?.(o.value)??[o.value.image?G(`div`,{class:[`vp-blog-mask`,{light:o.value.imageDark}],style:[{background:`url(${o.value.image}) center/cover no-repeat`},o.value.style]}):null,o.value.imageDark?G(`div`,{class:`vp-blog-mask dark`,style:[{background:`url(${o.value.imageDark}) center/cover no-repeat`},o.value.style]}):null],t.heroLogo?.(a.value)??G(Q,{appear:!0,group:!0,delay:.04},()=>{let{image:e,imageDark:t,style:n,alt:r}=a.value;return[e?G(`img`,{key:`light`,class:[`vp-blog-hero-image`,{light:t}],style:n,src:e,alt:r}):null,t?G(`img`,{key:`dark`,class:`vp-blog-hero-image dark`,style:n,src:t,alt:r}):null]}),t.heroInfo?.(i.value)??G(`div`,{class:`vp-blog-hero-info`},[G(Q,{appear:!0,delay:.08},()=>i.value.text?G(`h1`,{class:`vp-blog-hero-title`},i.value.text):null),G(Q,{appear:!0,delay:.12},()=>i.value.tagline?G(`div`,{class:`vp-blog-hero-description`,innerHTML:i.value.tagline}):null)]),n.value.heroFullScreen?G(Rb,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector(`[vp-navbar]`)?.clientHeight??0),behavior:`smooth`})}}):null])}}),sS=z({name:`ArticlesInfo`,setup(){let e=Dx(),t=kx(),n=Vx(),r=ly(),i=W(()=>e.value.items.length),a=W(()=>n.value.items);return()=>G(Q,()=>G(`div`,{class:`vp-star-article-wrapper`},[G(`div`,{class:`title`,onClick:()=>{r(e.value.path)}},[G(Jx),G(`span`,{class:`num`},i.value),t.value.article]),G(`hr`),a.value.length>0?G(`ul`,{class:`vp-star-articles`},a.value.map(({info:e,path:t},n)=>G(Q,{appear:!0,delay:.08*(n+1)},()=>G(`li`,{class:`vp-star-article`},G(Ed,{to:t},()=>e.title))))):G(`div`,{class:`vp-star-article-empty`},t.value.empty.replace(`$text`,t.value.star))]))}}),cS=z({name:`CategoryList`,setup(){let e=gd(),t=jx();return()=>G(`ul`,{class:`vp-category-list`},zd(t.value.map).sort(([,e],[,t])=>t.items.length-e.items.length).map(([t,{path:n,items:r}])=>G(`li`,{class:`vp-category-item`},G(Ed,{class:[`vp-category`,`color${Wv(t,Number(Yv.colorNumber))}`,{active:n===e.value.path}],to:n},()=>[t,G(`span`,{class:`vp-category-count`},r.length)]))))}}),lS=z({name:`CategoriesInfo`,setup(){let e=kx(),t=jx(),n=ly(),r=W(()=>Vd(t.value.map).length);return()=>G(`div`,{class:`vp-category-wrapper`},[r.value?[G(`div`,{class:`title`,onClick:()=>{n(t.value.path)}},[G(Ux),G(`span`,{class:`num`},r.value),e.value.category]),G(`hr`),G(Q,{delay:.04},()=>G(cS))]:G(`div`,{class:`vp-category-empty`},e.value.empty.replace(`$text`,e.value.category))])}}),uS=z({name:`TagList`,setup(){let e=md(),t=Px(),n=t=>t===e.value.blog?.name;return()=>G(`ul`,{class:`vp-tag-list`},zd(t.value.map).sort(([,e],[,t])=>t.items.length-e.items.length).map(([e,{path:t,items:r}])=>G(`li`,{class:`vp-tag-item`},G(Ed,{class:[`vp-tag`,`color${Wv(e,Number(Yv.colorNumber))}`,{active:n(e)}],to:t},()=>[e,G(`span`,{class:`vp-tag-count`},r.length)]))))}}),dS=z({name:`TagsInfo`,setup(){let e=kx(),t=Px(),n=ly(),r=W(()=>Vd(t.value.map).length);return()=>G(`div`,{class:`vp-tag-wrapper`},[r.value?[G(`div`,{class:`title`,onClick:()=>{n(t.value.path)}},[G(Wx),G(`span`,{class:`num`},r.value),e.value.tag]),G(`hr`),G(Q,{delay:.04},()=>G(uS))]:G(`div`,{class:`vp-tag-empty`},e.value.empty.replace(`$text`,e.value.tag))])}}),fS=z({name:`TimelineList`,setup(){let e=kx(),t=Lx(),n=ly();return()=>G(`div`,{class:`timeline-list-wrapper`},[G(`div`,{class:`title`,onClick:()=>{n(t.value.path)}},[G(Gx),G(`span`,{class:`num`},t.value.items.length),e.value.timeline]),G(`hr`),G(`div`,{class:`timeline-content`},G(`ul`,{class:`timeline-list`},t.value.config.map(({year:e,items:t},n)=>G(Q,{appear:!0,delay:.08*(n+1)},()=>G(`li`,[G(`h3`,{class:`timeline-year`},e),G(`ul`,{class:`timeline-year-wrapper`},t.map(({date:e,info:t,path:n})=>G(`li`,{class:`timeline-item`},[G(`span`,{class:`timeline-date`},e),G(Ed,{class:`timeline-title`,to:n},()=>t.title)])))])))))])}}),pS={article:Jx,category:Ux,tag:Wx,timeline:Gx},mS=z({name:`InfoList`,setup(){let e=kx(),t=P(`article`);return()=>G(`div`,{class:`vp-blog-infos`},[G(`div`,{class:`vp-blog-type-switcher`},zd(pS).map(([n,r])=>G(`button`,{type:`button`,class:`vp-blog-type-button`,onClick:()=>{t.value=n}},G(`div`,{class:[`vp-blog-type-icon-wrapper`,{active:t.value===n}],"aria-label":e.value[n],"data-balloon-pos":`down`},G(r))))),G(Q,()=>t.value===`article`?G(sS):t.value===`category`?G(lS):t.value===`tag`?G(dS):G(fS))])}}),hS=(e,{slots:t})=>G(`aside`,{class:`vp-blog-info-wrapper`},[t.infoBefore?.(),G(Q,()=>G(zx,{},t)),G(Q,{delay:.04},()=>G(mS)),t.infoAfter?.()]);hS.displayName=`InfoPanel`;var gS=z({name:`ProjectPanel`,props:{items:{type:Array,required:!0}},setup(e){let t=ey(),n=ly();return()=>G(`div`,{class:`vp-project-panel`},e.items.map(({icon:e,link:r,name:i,desc:a,background:o})=>G(`a`,{class:[`vp-project-card`,{[`color${Wv(i,Number(Yv.colorNumber))}`]:!t.value&&!o}],...o?{style:o}:{},href:Gd(r)?Y(r):r,onClick:e=>{n(r),e.preventDefault()}},[e?G(V(`VPIcon`),{class:`vp-project-icon`,icon:e}):null,G(`div`,{class:`vp-project-name`},i),G(`div`,{class:`vp-project-desc`},a)])))}}),_S=z({name:`BlogHome`,slots:Object,setup(e,{slots:t}){let n=Dx(),r=md(),i=W(()=>r.value.projects??[]);return()=>G(`div`,{class:`vp-page vp-blog-home`},[t.heroBefore?.(),G(oS,{},t),t.heroAfter?.(),G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},[t.articlesBefore?.()??(i.value.length>0?G(Q,{appear:!0,delay:.16},()=>G(gS,{items:i.value})):null),G(Q,{appear:!0,delay:.24},()=>G(iS,{items:n.value.items},t)),t.articlesAfter?.()]),G(Q,{appear:!0,delay:.16},()=>G(hS,{key:`blog`},t))]),t.content?.()??G(Q,{appear:!0,delay:.28},()=>G(Pb,{},t))])}}),vS=z({name:`BlogMainLayout`,slots:Object,setup(e,{slots:t}){let{isMobile:n}=vb();return()=>[G(Ib),G(Mb,{noSidebar:!n.value,noToc:!0},{...t,navScreenBottom:()=>t.navScreenBottom?.()??G(zx,{},t),sidebarItems:e=>t.sidebarItems?.(e)??(n.value?G(mS):null)})]}}),yS=z({name:`CategoryPage`,slots:Object,setup(e,{slots:t}){let n=gd(),r=md(),i=jx(),a=Px(),o=W(()=>{let e=r.value.blog;if(e?.type!==`category`)return null;let{name:t,key:n}=e;return n===`category`?{component:cS,items:t?i.value.map[t].items:null}:n===`tag`?{component:uS,items:t?a.value.map[t].items:null}:null});return()=>G(`div`,{class:`vp-page vp-blog`},G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},t.default?.()??[G(Q,{appear:!0},()=>o.value?G(o.value.component):null),t.articlesBefore?.(),o.value?.items?G(Q,{appear:!0,delay:.08},()=>[G(iS,{key:n.value.path,items:o.value.items},t)]):null,t.articlesAfter?.()]),G(Q,{delay:.16},()=>G(hS,{key:`blog`},t))]))}}),bS=z({name:`TimelineItems`,setup(){let e=wx(),t=kx(),n=Lx(),r=W(()=>e.value.timeline??t.value.timelineTitle);return()=>G(`div`,{class:`timeline-wrapper`},G(`ul`,{class:`timeline-content`},[G(Q,()=>G(`li`,{class:`motto`},r.value)),n.value.config.map(({year:e,items:t},n)=>G(Q,{appear:!0,delay:.08*(n+1),group:!0},()=>[G(`h3`,{key:`title`,id:e,class:`timeline-year-title`},G(`span`,e)),G(`li`,{key:`content`,class:`timeline-year-list`},[G(`ul`,{class:`timeline-year-wrapper`},t.map(({date:e,info:t,path:n})=>G(`li`,{class:`timeline-item`},[G(`span`,{class:`timeline-date`},e),G(Ed,{class:`timeline-title`,to:n},()=>t.title)])))])]))]))}}),xS=(e,{slots:t})=>G(`div`,{class:`vp-page vp-blog`},G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},[t.articlesBefore?.(),G(Q,{appear:!0},()=>G(bS)),t.articlesAfter?.()]),G(Q,{appear:!0},()=>G(hS,{key:`blog`},t))]));xS.displayName=`TimelinePage`;var SS=z({name:`ArticleType`,setup(){let{page:e,routeLocale:t}=$v(),n=Dx(),r=Vx(),i=kx(),a=W(()=>[{text:i.value.all,path:n.value.path},{text:i.value.star,path:r.value.path},...[].map(({key:e,path:n})=>{let r=n.replace(/^\//u,t.value);return{text:i.value[e]??Cd(r).meta.title??e,path:r}})]);return()=>G(`ul`,{class:`vp-article-type-wrapper`},a.value.map(t=>G(`li`,{class:[`vp-article-type`,{active:t.path===e.value.path}]},G(Ed,{to:t.path},()=>t.text))))}}),CS=z({name:`TypePage`,slots:Object,setup(e,{slots:t}){let n=Cx(),r=md(),i=gd(),a=Dx(),o=Vx(),s=W(()=>{let e=r.value.blog;return e?.type!==`type`||!e.key?a.value.items:e.key===`star`?o.value.items:n.value.items});return()=>G(`div`,{class:`vp-page vp-blog`},G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},t.default?.()??[G(Q,()=>G(SS)),t.articlesBefore?.(),G(Q,{appear:!0,delay:.08},()=>G(iS,{key:i.value.path,items:s.value})),t.articlesAfter?.()]),G(Q,{appear:!0,delay:.08},()=>G(hS,{key:`blog`},t))]))}}),wS=z({name:`Blog`,slots:Object,setup(e,{slots:t}){let n=md();return()=>{let{type:e,key:r}=n.value.blog??{};return G(vS,null,{...t,default:()=>t.default?.()??G(e===`category`?yS:e===`type`?r===`timeline`?xS:CS:_S,null,t)})}}}),TS=()=>{Ox(),Mx(),Hx(),Fx(),Rx()},ES=c({default:()=>DS});c_(e=>{let t=e.title,n=e.index??!0,r=e.icon;return n?{title:t,content:r?()=>[G(V(`VPIcon`),{icon:r,sizing:`both`}),t]:null,order:e.order,index:e.index}:null});var DS={enhance:({app:e,router:t})=>{let{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...e)=>(await Hb.wait(),n(...e)),Oy(e),e.component(`BloggerInfo`,zx),e.component(`SocialMedias`,Tx)},setup:()=>{ky(),Ry(),TS()},layouts:{Layout:px,NotFound:mx,Blog:wS}},OS=`.theme-container .vp-page.vp-portfolio-home,
.theme-container .vp-page.vp-blog-home {
  padding-top: 0;
}
.vp-blog-hero.hero-fullscreen {
  height: 100vh;
}
`,kS=`${OS}\
.theme-container .vp-project-home {
  padding-top: 0;
}

.vp-hero-info-wrapper{
  padding-top: var(--navbar-height);
}
`,AS=[`.vp-navbar`,`.vp-site-name`,`.vp-dropdown-title`,`.vp-dropdown-subtitle`,`.vp-navbar .auto-link`,`.vp-navbar .auto-link.route-link-active`,`.vp-action-link`,`.vp-color-mode-switch`,`.vp-appearance-button`,`.slimsearch-button`,`.DocSearch-Button`],jS=[`.vp-toggle-navbar-button .vp-top`,`.vp-toggle-navbar-button .vp-middle`,`.vp-toggle-navbar-button .vp-bottom`,`.vp-toggle-sidebar-button .icon`,`.vp-toggle-sidebar-button:before`,`.vp-toggle-sidebar-button:after`],MS=e=>e.replaceAll(`"`,`'`).replaceAll(`%`,`%25`).replaceAll(`#`,`%23`).replaceAll(`{`,`%7B`).replaceAll(`}`,`%7D`).replaceAll(`<`,`%3C`).replaceAll(`>`,`%3E`),NS=(e,t=``)=>`\
${AS.map(e=>`${t} .transparent-navbar ${e}`).join(`,`)} {
  color: ${e};
}
${jS.map(e=>`${t} .transparent-navbar ${e}`).join(`,`)} {
  background: ${e};
}

${t}.transparent-navbar .dropdown-wrapper .dropdown-title > .arrow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='${MS(e)}' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
}
`,PS=({type:e,threshold:t=50,light:n,dark:r}={})=>{let i=md(),a=dd(),o=ud(),s=W(e===`all`?()=>!0:e===`homepage`?()=>i.value.home??a.value===o.value:()=>i.value.portfolio??i.value.layout===`Blog`),c=()=>{document.body.classList.toggle(`transparent-navbar`,window.scrollY<t&&s.value)};Qp((e===`homepage`?kS:OS)+(n?NS(n,``):``)+(r&&n!==r?NS(r,`[data-theme="dark"]`):``)),X(`scroll`,c),B(()=>{op(a,c,{flush:`post`})})},FS={key:0,class:`hero-slide-controls`},IS={key:0,class:`hero-slide-panel`},LS=[`href`],RS={key:1,class:`hero-slide-panel-title`},zS={key:2,class:`hero-slide-panel-subtitle`},BS={class:`hero-slide-panel-body`},VS={key:3,class:`hero-slide-panel-credit`},HS=z({__name:`CustomHeroBackground`,setup(e){let t=md(),n=W(()=>(t.value.heroSlides??[]).map(e=>({...e,image:e.image.startsWith(`http`)?e.image:Y(e.image)}))),r=P(0),i=P(t.value.heroInfoAutoOpen??!0),a=W(()=>n.value[r.value]??n.value[0]);return(e,t)=>{let n=V(`VPIcon`);return H(),qa(La,null,[U(Jo,{name:`fade-in`,mode:`out-in`},{default:nr(()=>[a.value?(H(),qa(`div`,{key:`${r.value}-${a.value.image}`,class:`custom-hero-mask-wrapper`},[$a(`div`,{class:`vp-blog-mask custom-hero-mask`,style:xe({backgroundImage:`url(${a.value.image})`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`})},null,4)])):ao(`v-if`,!0)]),_:1}),a.value?(H(),qa(`div`,FS,[U(Jo,{name:`fade-in`},{default:nr(()=>[i.value?(H(),qa(`div`,IS,[a.value.link?(H(),qa(`a`,{key:0,href:a.value.link,target:`_self`,rel:`noopener noreferrer`,class:`hero-slide-panel-title`},Pe(a.value.panelTitle),9,LS)):(H(),qa(`div`,RS,Pe(a.value.panelTitle),1)),t[1]||=$a(`hr`,null,null,-1),a.value.panelSubtitle?(H(),qa(`div`,zS,Pe(a.value.panelSubtitle),1)):ao(`v-if`,!0),$a(`div`,BS,Pe(a.value.panelBody),1),a.value.panelCredit?(H(),qa(`div`,VS,Pe(a.value.panelCredit),1)):ao(`v-if`,!0)])):ao(`v-if`,!0)]),_:1}),$a(`div`,{class:`hero-slide-info-toggle`,onClick:t[0]||=e=>i.value=!i.value},[U(n,{class:`hero-slide-info-icon`,icon:a.value.icon},null,8,[`icon`])]),ao(` <button
      type="button"
      class="hero-slide-nav-prev"
      title="prev image"
      @click="prev"
    />
    <button
      type="button"
      class="hero-slide-nav-next"
      title="next image"
      @click="next"
    /> `)])):ao(`v-if`,!0)],64)}}}),US={key:0,class:`vp-blog-hero-title`},WS={key:1,class:`hitokoto`},GS={class:`hitokoto-text`},KS={key:0,class:`hitokoto-author`},qS=z({__name:`CustomHeroInfo`,props:{text:{}},setup(e){let t=md();return(n,r)=>(H(),qa(La,null,[e.text?(H(),qa(`h1`,US,Pe(e.text),1)):ao(`v-if`,!0),hn(t).heroMessage?(H(),qa(`div`,WS,[$a(`p`,GS,[$a(`span`,null,Pe(hn(t).heroMessage),1)]),hn(t).heroMessageAuthor?(H(),qa(`p`,KS,Pe(hn(t).heroMessageAuthor),1)):ao(`v-if`,!0)])):ao(`v-if`,!0)],64))}}),JS=[`src`,`alt`],YS=[`src`,`alt`],XS={class:`vp-blog-hero-info`},ZS=z({__name:`CustomHomePage`,setup(e){let t=md(),n=W(()=>{let e=t.value.heroImage;return e?e.startsWith(`http`)?e:Y(e):null}),r=W(()=>{let e=t.value.heroImageDark;return e?e.startsWith(`http`)?e:Y(e):null}),i=W(()=>t.value.heroAlt??t.value.heroText??``);return(e,a)=>(H(),qa(`main`,{id:`main-content`,class:Ee([`vp-page vp-blog-home custom-home-page`,{"hero-fullscreen":hn(t).heroFullScreen!==!1}])},[$a(`div`,{class:Ee([`vp-blog-hero`,{"hero-fullscreen":hn(t).heroFullScreen!==!1}])},[U(HS),n.value?(H(),qa(`img`,{key:0,class:Ee([`vp-blog-hero-image`,{light:r.value,"has-dark":r.value}]),src:n.value,alt:i.value,style:xe(hn(t).heroImageStyle)},null,14,JS)):ao(`v-if`,!0),r.value?(H(),qa(`img`,{key:1,class:`vp-blog-hero-image dark`,src:r.value,alt:i.value,style:xe(hn(t).heroImageStyle)},null,12,YS)):ao(`v-if`,!0),$a(`div`,XS,[U(qS,{text:hn(t).heroText??null},null,8,[`text`])])],2)],2))}}),QS=z({__name:`Layout`,setup(e){let t=md();return(e,n)=>(H(),Ja(hn(px),null,yi({_:2},[hn(t).home?{name:`default`,fn:nr(()=>[U(ZS)]),key:`0`}:void 0]),1024))}}),$S={};function eC(e){let t=$S[e];if(t)return t;t=$S[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function tC(e,t){typeof t!=`string`&&(t=tC.defaultChars);let n=eC(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}tC.defaultChars=`;/?:@&=+$,#`,tC.componentChars=``;var nC={};function rC(e){let t=nC[e];if(t)return t;t=nC[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function iC(e,t,n){typeof t!=`string`&&(n=t,t=iC.defaultChars),n===void 0&&(n=!0);let r=rC(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}iC.defaultChars=`;/?:@&=+$,-_.!~*'()#`,iC.componentChars=`-_.!~*'()`;function aC(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function oC(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var sC=/^([a-z0-9.+-]+:)/i,cC=/:[0-9]*$/,lC=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,uC=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],dC=[`/`,`?`,`#`],fC=255,pC=/^[+a-z0-9A-Z_-]{0,63}$/,mC=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,hC={javascript:!0,"javascript:":!0},gC={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function _C(e,t){if(e&&e instanceof oC)return e;let n=new oC;return n.parse(e,t),n}oC.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=lC.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=sC.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&hC[o])&&(a=a.substr(2),this.slashes=!0)),!hC[o]&&(i||o&&!gC[o])){let e=-1;for(let t=0;t<dC.length;t++)r=a.indexOf(dC[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<uC.length;t++)r=a.indexOf(uC[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(pC)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(pC)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(mC);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>fC&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),gC[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},oC.prototype.parseHost=function(e){let t=cC.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var vC=c({decode:()=>tC,encode:()=>iC,format:()=>aC,parse:()=>_C}),yC=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,bC=/[\0-\x1F\x7F-\x9F]/,xC=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,SC=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,CC=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,wC=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,TC=c({Any:()=>yC,Cc:()=>bC,Cf:()=>xC,P:()=>SC,S:()=>CC,Z:()=>wC}),EC=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),DC=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),OC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),kC=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function AC(e){return e>=55296&&e<=57343||e>1114111?65533:OC.get(e)??e}var jC;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(jC||={});var MC=32,NC;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(NC||={});function PC(e){return e>=jC.ZERO&&e<=jC.NINE}function FC(e){return e>=jC.UPPER_A&&e<=jC.UPPER_F||e>=jC.LOWER_A&&e<=jC.LOWER_F}function IC(e){return e>=jC.UPPER_A&&e<=jC.UPPER_Z||e>=jC.LOWER_A&&e<=jC.LOWER_Z||PC(e)}function LC(e){return e===jC.EQUALS||IC(e)}var RC;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(RC||={});var zC;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(zC||={});var BC=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=RC.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=zC.Strict}startEntity(e){this.decodeMode=e,this.state=RC.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case RC.EntityStart:return e.charCodeAt(t)===jC.NUM?(this.state=RC.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=RC.NamedEntity,this.stateNamedEntity(e,t));case RC.NumericStart:return this.stateNumericStart(e,t);case RC.NumericDecimal:return this.stateNumericDecimal(e,t);case RC.NumericHex:return this.stateNumericHex(e,t);case RC.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|MC)===jC.LOWER_X?(this.state=RC.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=RC.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(PC(r)||FC(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(PC(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===jC.SEMI)this.consumed+=1;else if(this.decodeMode===zC.Strict)return 0;return this.emitCodePoint(AC(this.result),this.consumed),this.errors&&(e!==jC.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&NC.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=HC(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===zC.Attribute&&(i===0||LC(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&NC.VALUE_LENGTH)>>14,i!==0){if(a===jC.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==zC.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&NC.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~NC.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case RC.NamedEntity:return this.result!==0&&(this.decodeMode!==zC.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case RC.NumericDecimal:return this.emitNumericEntity(0,2);case RC.NumericHex:return this.emitNumericEntity(0,3);case RC.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case RC.EntityStart:return 0}}};function VC(e){let t=``,n=new BC(e,e=>t+=kC(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function HC(e,t,n,r){let i=(t&NC.BRANCH_LENGTH)>>7,a=t&NC.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var UC=VC(EC);VC(DC);function WC(e,t=zC.Legacy){return UC(e,t)}var GC=c({arrayReplaceAt:()=>ZC,assign:()=>XC,escapeHtml:()=>uw,escapeRE:()=>fw,fromCodePoint:()=>$C,has:()=>YC,isMdAsciiPunct:()=>hw,isPunctChar:()=>mw,isSpace:()=>$,isString:()=>qC,isValidEntityCode:()=>QC,isWhiteSpace:()=>pw,lib:()=>_w,normalizeReference:()=>gw,unescapeAll:()=>aw,unescapeMd:()=>iw});function KC(e){return Object.prototype.toString.call(e)}function qC(e){return KC(e)===`[object String]`}var JC=Object.prototype.hasOwnProperty;function YC(e,t){return JC.call(e,t)}function XC(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function ZC(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function QC(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function $C(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var ew=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,tw=RegExp(ew.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),nw=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function rw(e,t){if(t.charCodeAt(0)===35&&nw.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return QC(n)?$C(n):e}let n=WC(e);return n===e?e:n}function iw(e){return e.indexOf(`\\`)<0?e:e.replace(ew,`$1`)}function aw(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(tw,function(e,t,n){return t||rw(e,n)})}var ow=/[&<>"]/,sw=/[&<>"]/g,cw={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function lw(e){return cw[e]}function uw(e){return ow.test(e)?e.replace(sw,lw):e}var dw=/[.?*+^$[\]\\(){}|-]/g;function fw(e){return e.replace(dw,`\\$&`)}function $(e){switch(e){case 9:case 32:return!0}return!1}function pw(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function mw(e){return SC.test(e)||CC.test(e)}function hw(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function gw(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}var _w={mdurl:vC,ucmicro:TC};function vw(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function yw(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=aw(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=aw(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function bw(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=aw(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=aw(e.slice(t,a)),o}var xw=c({parseLinkDestination:()=>yw,parseLinkLabel:()=>vw,parseLinkTitle:()=>bw}),Sw={};Sw.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+uw(a.content)+`</code>`},Sw.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+uw(e[t].content)+`</code></pre>
`},Sw.fence=function(e,t,n,r,i){let a=e[t],o=a.info?aw(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||uw(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},Sw.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},Sw.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},Sw.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},Sw.text=function(e,t){return uw(e[t].content)},Sw.html_block=function(e,t){return e[t].content},Sw.html_inline=function(e,t){return e[t].content};function Cw(){this.rules=XC({},Sw)}Cw.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+uw(e.attrs[t][0])+`="`+uw(e.attrs[t][1])+`"`;return r},Cw.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Cw.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Cw.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},Cw.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function ww(){this.__rules__=[],this.__cache__=null}ww.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},ww.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},ww.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},ww.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},ww.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},ww.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},ww.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},ww.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},ww.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},ww.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Tw(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}Tw.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},Tw.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},Tw.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},Tw.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},Tw.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function Ew(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Ew.prototype.Token=Tw;var Dw=/\r\n?|\n/g,Ow=/\0/g;function kw(e){let t;t=e.src.replace(Dw,`
`),t=t.replace(Ow,`�`),e.src=t}function Aw(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function jw(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function Mw(e){return/^<a[>\s]/i.test(e)}function Nw(e){return/^<\/a\s*>/i.test(e)}function Pw(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(Mw(o.content)&&i>0&&i--,Nw(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=ZC(r,a,c)}}}}var Fw=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Iw=/\((c|tm|r)\)/i,Lw=/\((c|tm|r)\)/gi,Rw={c:`©`,r:`®`,tm:`™`};function zw(e,t){return Rw[t.toLowerCase()]}function Bw(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(Lw,zw)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Vw(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&Fw.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function Hw(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(Iw.test(e.tokens[t].content)&&Bw(e.tokens[t].children),Fw.test(e.tokens[t].content)&&Vw(e.tokens[t].children))}var Uw=/['"]/,Ww=/['"]/g,Gw=`’`;function Kw(e,t,n){return e.slice(0,t)+n+e.slice(t+1)}function qw(e,t){let n,r=[];for(let i=0;i<e.length;i++){let a=e[i],o=e[i].level;for(n=r.length-1;n>=0&&!(r[n].level<=o);n--);if(r.length=n+1,a.type!==`text`)continue;let s=a.content,c=0,l=s.length;OUTER:for(;c<l;){Ww.lastIndex=c;let u=Ww.exec(s);if(!u)break;let d=!0,f=!0;c=u.index+1;let p=u[0]===`'`,m=32;if(u.index-1>=0)m=s.charCodeAt(u.index-1);else for(n=i-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(c<l)h=s.charCodeAt(c);else for(n=i+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=hw(m)||mw(String.fromCharCode(m)),_=hw(h)||mw(String.fromCharCode(h)),v=pw(m),y=pw(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&u[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&(a.content=Kw(a.content,u.index,Gw));continue}if(f)for(n=r.length-1;n>=0;n--){let d=r[n];if(r[n].level<o)break;if(d.single===p&&r[n].level===o){d=r[n];let o,f;p?(o=t.md.options.quotes[2],f=t.md.options.quotes[3]):(o=t.md.options.quotes[0],f=t.md.options.quotes[1]),a.content=Kw(a.content,u.index,f),e[d.token].content=Kw(e[d.token].content,d.pos,o),c+=f.length-1,d.token===i&&(c+=o.length-1),s=a.content,l=s.length,r.length=n;continue OUTER}}d?r.push({token:i,pos:u.index,single:p,level:o}):f&&p&&(a.content=Kw(a.content,u.index,Gw))}}}function Jw(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!Uw.test(e.tokens[t].content)||qw(e.tokens[t].children,e)}function Yw(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var Xw=[[`normalize`,kw],[`block`,Aw],[`inline`,jw],[`linkify`,Pw],[`replacements`,Hw],[`smartquotes`,Jw],[`text_join`,Yw]];function Zw(){this.ruler=new ww;for(let e=0;e<Xw.length;e++)this.ruler.push(Xw[e][0],Xw[e][1])}Zw.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},Zw.prototype.State=Ew;function Qw(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if($(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Qw.prototype.push=function(e,t,n){let r=new Tw(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},Qw.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},Qw.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},Qw.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&$(this.src.charCodeAt(e));e++);return e},Qw.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!$(this.src.charCodeAt(--e)))return e+1;return e},Qw.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},Qw.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},Qw.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if($(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},Qw.prototype.Token=Tw;var $w=65536;function eT(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function tT(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function nT(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!$(s)||o===45&&$(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!$(t))return!1;a++}let c=eT(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=eT(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=tT(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=eT(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=tT(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>$w))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function rT(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function iT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function aT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if($(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function oT(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!$(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function sT(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!$(e.src.charCodeAt(r))?-1:r}function cT(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!$(a))?-1:i}function lT(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function uT(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=cT(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=sT(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],S=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=S,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let C=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){C=!0;break}if(C)break;if(d){if(p=cT(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=sT(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&lT(e,h),!0}function dT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!$(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!$(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&$(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&$(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=gw(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var fT=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),pT=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,mT=RegExp(`^(?:`+pT+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),hT=RegExp(`^(?:`+pT+`|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),gT=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+fT.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(hT.source+`\\s*$`),/^$/,!1]];function _T(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<gT.length&&!gT[s][0].test(o);s++);if(s===gT.length)return!1;if(r)return gT[s][2];let c=t+1;if(!gT[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent);c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),gT[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let l=e.push(`html_block`,``,0);return l.map=[t,c],l.content=e.getLines(t,c,e.blkIndent,!0),!0}function vT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!$(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&$(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=e.src.slice(i,a).trim(),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function yT(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return!1;let c=e.getLines(t,s,e.blkIndent,!1).trim();e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function bT(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=e.getLines(t,a,e.blkIndent,!1).trim();e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var xT=[[`table`,nT,[`paragraph`,`reference`]],[`code`,rT],[`fence`,iT,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,aT,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,oT,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,uT,[`paragraph`,`reference`,`blockquote`]],[`reference`,dT],[`html_block`,_T,[`paragraph`,`reference`,`blockquote`]],[`heading`,vT,[`paragraph`,`reference`,`blockquote`]],[`lheading`,yT],[`paragraph`,bT]];function ST(){this.ruler=new ww;for(let e=0;e<xT.length;e++)this.ruler.push(xT[e][0],xT[e][1],{alt:(xT[e][2]||[]).slice()})}ST.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},ST.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},ST.prototype.State=Qw;function CT(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}CT.prototype.pushPending=function(){let e=new Tw(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},CT.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new Tw(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},CT.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i=e>0?this.src.charCodeAt(e-1):32,a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32,c=hw(i)||mw(String.fromCharCode(i)),l=hw(s)||mw(String.fromCharCode(s)),u=pw(i),d=pw(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},CT.prototype.Token=Tw;function wT(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function TT(e,t){let n=e.pos;for(;n<e.posMax&&!wT(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var ET=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function DT(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(ET);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function OT(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&$(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var kT=[];for(let e=0;e<256;e++)kT.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){kT[e.charCodeAt(0)]=1});function AT(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),$(i));)n++;return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&kT[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function jT(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function MT(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function NT(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function PT(e){let t=e.tokens_meta,n=e.tokens_meta.length;NT(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&NT(e,t[r].delimiters)}var FT={tokenize:MT,postProcess:PT};function IT(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function LT(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function RT(e){let t=e.tokens_meta,n=e.tokens_meta.length;LT(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&LT(e,t[r].delimiters)}var zT={tokenize:IT,postProcess:RT};function BT(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[gw(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function VT(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[gw(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var HT=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,UT=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function WT(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(UT.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(HT.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function GT(e){return/^<a[>\s]/i.test(e)}function KT(e){return/^<\/a\s*>/i.test(e)}function qT(e){let t=e|32;return t>=97&&t<=122}function JT(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!qT(i))return!1;let a=e.src.slice(r).match(mT);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],GT(t.content)&&e.linkLevel++,KT(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var YT=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,XT=/^&([a-z][a-z0-9]{1,31});/i;function ZT(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(YT);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=QC(t)?$C(t):$C(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(XT);if(r){let n=WC(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function QT(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function $T(e){let t=e.tokens_meta,n=e.tokens_meta.length;QT(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&QT(t[e].delimiters)}function eE(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var tE=[[`text`,TT],[`linkify`,DT],[`newline`,OT],[`escape`,AT],[`backticks`,jT],[`strikethrough`,FT.tokenize],[`emphasis`,zT.tokenize],[`link`,BT],[`image`,VT],[`autolink`,WT],[`html_inline`,JT],[`entity`,ZT]],nE=[[`balance_pairs`,$T],[`strikethrough`,FT.postProcess],[`emphasis`,zT.postProcess],[`fragments_join`,eE]];function rE(){this.ruler=new ww;for(let e=0;e<tE.length;e++)this.ruler.push(tE[e][0],tE[e][1]);this.ruler2=new ww;for(let e=0;e<nE.length;e++)this.ruler2.push(nE[e][0],nE[e][1])}rE.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},rE.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},rE.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},rE.prototype.State=CT;function iE(e){let t={};e||={},t.src_Any=yC.source,t.src_Cc=bC.source,t.src_Z=wC.source,t.src_P=SC.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!`+n+`|`+t.src_ZPCc+`)`+t.src_Any+`)`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!`+t.src_ZCc+`|[@/\\[\\]()]).)+@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|`+n+`|`+t.src_ZPCc+`)(?!`+(e[`---`]?`-(?!--)|`:`-|`)+`_|:\\d|\\.-|\\.(?!$|`+t.src_ZPCc+`))`,t.src_path=`(?:[/?#](?:(?!`+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+`|\\]).)*\\]|\\((?:(?!`+t.src_ZCc+`|[)]).)*\\)|\\{(?:(?!`+t.src_ZCc+`|[}]).)*\\}|\\"(?:(?!`+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+`|[']).)+\\'|\\'(?=`+t.src_pseudo_letter+`|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!`+t.src_ZCc+`|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!`+t.src_ZCc+`|$)|;(?!`+t.src_ZCc+`|$)|\\!+(?!`+t.src_ZCc+`|[!]|$)|\\?(?!`+t.src_ZCc+`|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|`+t.src_pseudo_letter+`{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:`+t.src_pseudo_letter+`)|(?:`+t.src_pseudo_letter+`(?:-|`+t.src_pseudo_letter+`){0,61}`+t.src_pseudo_letter+`))`,t.src_host=`(?:(?:(?:(?:`+t.src_domain+`)\\.)*`+t.src_domain+`))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:`+t.src_domain+`)\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:`+t.src_ZPCc+`|>|$))`,t.tpl_email_fuzzy=`(^|`+n+`|"|\\(|`+t.src_ZCc+`)(`+t.src_email_name+`@`+t.tpl_host_fuzzy_strict+`)`,t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+`)`,t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+`)`,t}function aE(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function oE(e){return Object.prototype.toString.call(e)}function sE(e){return oE(e)===`[object String]`}function cE(e){return oE(e)===`[object Object]`}function lE(e){return oE(e)===`[object RegExp]`}function uE(e){return oE(e)===`[object Function]`}function dE(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var fE={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function pE(e){return Object.keys(e||{}).reduce(function(e,t){return e||fE.hasOwnProperty(t)},!1)}var mE={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/`+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:`+n.re.src_domain+`)\\.)+`+n.re.src_domain_root+`)`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^`+n.re.src_email_name+`@`+n.re.src_host_strict,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},hE=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,gE=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function _E(e){e.__index__=-1,e.__text_cache__=``}function vE(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function yE(){return function(e,t){t.normalize(e)}}function bE(e){let t=e.re=iE(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(hE),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "`+e+`": `+t)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,cE(n)){lE(n.validate)?r.validate=vE(n.validate):uE(n.validate)?r.validate=n.validate:a(t,n),uE(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=yE();return}if(sE(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:yE()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(dE).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|`+t.src_ZPCc+`))(`+o+`)`,`ig`),e.re.schema_at_start=RegExp(`^`+e.re.schema_search.source,`i`),e.re.pretest=RegExp(`(`+e.re.schema_test.source+`)|(`+e.re.host_fuzzy_test.source+`)|@`,`i`),_E(e)}function xE(e,t){let n=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(n,r);this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function SE(e,t){let n=new xE(e,t);return e.__compiled__[n.schema].normalize(n,e),n}function CE(e,t){if(!(this instanceof CE))return new CE(e,t);t||pE(e)&&(t=e,e={}),this.__opts__=aE({},fE,t),this.__index__=-1,this.__last_index__=-1,this.__schema__=``,this.__text_cache__=``,this.__schemas__=aE({},mE,e),this.__compiled__={},this.__tlds__=gE,this.__tlds_replaced__=!1,this.re={},bE(this)}CE.prototype.add=function(e,t){return this.__schemas__[e]=t,bE(this),this},CE.prototype.set=function(e){return this.__opts__=aE(this.__opts__,e),this},CE.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let t,n,r,i,a,o,s,c,l;if(this.re.schema_test.test(e)){for(s=this.re.schema_search,s.lastIndex=0;(t=s.exec(e))!==null;)if(i=this.testSchemaAt(e,t[2],s.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=n.index+n[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__=``,this.__index__=a,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&(l=e.indexOf(`@`),l>=0&&(r=e.match(this.re.email_fuzzy))!==null&&(a=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&o>this.__last_index__)&&(this.__schema__=`mailto:`,this.__index__=a,this.__last_index__=o))),this.__index__>=0},CE.prototype.pretest=function(e){return this.re.pretest.test(e)},CE.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},CE.prototype.match=function(e){let t=[],n=0;this.__index__>=0&&this.__text_cache__===e&&(t.push(SE(this,n)),n=this.__last_index__);let r=n?e.slice(n):e;for(;this.test(r);)t.push(SE(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null},CE.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,SE(this,0)):null},CE.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),bE(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,bE(this),this)},CE.prototype.normalize=function(e){e.schema||(e.url=`http://`+e.url),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:`+e.url)},CE.prototype.onCompile=function(){};var wE=2147483647,TE=36,EE=1,DE=26,OE=38,kE=700,AE=72,jE=128,ME=`-`,NE=/^xn--/,PE=/[^\0-\x7F]/,FE=/[\x2E\u3002\uFF0E\uFF61]/g,IE={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},LE=TE-EE,RE=Math.floor,zE=String.fromCharCode;function BE(e){throw RangeError(IE[e])}function VE(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function HE(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(FE,`.`);let i=VE(e.split(`.`),t).join(`.`);return r+i}function UE(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var WE=e=>String.fromCodePoint(...e),GE=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:TE},KE=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},qE=function(e,t,n){let r=0;for(e=n?RE(e/kE):e>>1,e+=RE(e/t);e>LE*DE>>1;r+=TE)e=RE(e/LE);return RE(r+(LE+1)*e/(e+OE))},JE=function(e){let t=[],n=e.length,r=0,i=jE,a=AE,o=e.lastIndexOf(ME);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&BE(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=TE;;i+=TE){s>=n&&BE(`invalid-input`);let o=GE(e.charCodeAt(s++));o>=TE&&BE(`invalid-input`),o>RE((wE-r)/t)&&BE(`overflow`),r+=o*t;let c=i<=a?EE:i>=a+DE?DE:i-a;if(o<c)break;let l=TE-c;t>RE(wE/l)&&BE(`overflow`),t*=l}let c=t.length+1;a=qE(r-o,c,o==0),RE(r/c)>wE-i&&BE(`overflow`),i+=RE(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},YE=function(e){let t=[];e=UE(e);let n=e.length,r=jE,i=0,a=AE;for(let n of e)n<128&&t.push(zE(n));let o=t.length,s=o;for(o&&t.push(ME);s<n;){let n=wE;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>RE((wE-i)/c)&&BE(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>wE&&BE(`overflow`),n===r){let e=i;for(let n=TE;;n+=TE){let r=n<=a?EE:n>=a+DE?DE:n-a;if(e<r)break;let i=e-r,o=TE-r;t.push(zE(KE(r+i%o,0))),e=RE(i/o)}t.push(zE(KE(e,0))),a=qE(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},XE={version:`2.3.1`,ucs2:{decode:UE,encode:WE},decode:JE,encode:YE,toASCII:function(e){return HE(e,function(e){return PE.test(e)?`xn--`+YE(e):e})},toUnicode:function(e){return HE(e,function(e){return NE.test(e)?JE(e.slice(4).toLowerCase()):e})}},ZE={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},QE=/^(vbscript|javascript|file|data):/,$E=/^data:image\/(gif|png|jpeg|webp);/;function eD(e){let t=e.trim().toLowerCase();return QE.test(t)?$E.test(t):!0}var tD=[`http:`,`https:`,`mailto:`];function nD(e){let t=_C(e,!0);if(t.hostname&&(!t.protocol||tD.indexOf(t.protocol)>=0))try{t.hostname=XE.toASCII(t.hostname)}catch{}return iC(aC(t))}function rD(e){let t=_C(e,!0);if(t.hostname&&(!t.protocol||tD.indexOf(t.protocol)>=0))try{t.hostname=XE.toUnicode(t.hostname)}catch{}return tC(aC(t),tC.defaultChars+`%`)}function iD(e,t){if(!(this instanceof iD))return new iD(e,t);t||qC(e)||(t=e||{},e=`default`),this.inline=new rE,this.block=new ST,this.core=new Zw,this.renderer=new Cw,this.linkify=new CE,this.validateLink=eD,this.normalizeLink=nD,this.normalizeLinkText=rD,this.utils=GC,this.helpers=XC({},xw),this.options={},this.configure(e),t&&this.set(t)}iD.prototype.set=function(e){return XC(this.options,e),this},iD.prototype.configure=function(e){let t=this;if(qC(e)){let t=e;if(e=ZE[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},iD.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},iD.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},iD.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},iD.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},iD.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},iD.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},iD.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var aD={class:`remote-markdown`},oD={key:0},sD={key:1},cD=[`innerHTML`],lD={__name:`RemoteMarkdown`,props:{src:{type:String,required:!0},cache:{type:Boolean,default:!0},ttl:{type:Number,default:1e3*60*60}},setup(e){let t=e,n=P(``),r=P(!0),i=P(!1),a=new iD({html:!0,linkify:!0,typographer:!0});function o(e){let[t,n]=e.split(`#`);return{url:t,anchor:n}}function s(e){return e.replace(/<!--[\s\S]*?-->/g,``)}function c(e,t){if(!t)return e;let n=e.split(`
`),r=/^(#{1,6})\s+(.*)$/,i=-1,a=0;for(let e=0;e<n.length;e++){let o=n[e].match(r);if(o&&o[2].trim().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,`-`)===t.toLowerCase()){i=e,a=o[1].length;break}}if(i===-1)return e;let o=n.length;for(let e=i+1;e<n.length;e++){let t=n[e].match(r);if(t&&t[1].length<=a){o=e;break}}return n.slice(i,o).join(`
`)}function l(e){return`remote-md:${e}`}function u(e){if(!t.cache)return null;try{let n=localStorage.getItem(l(e));if(!n)return null;let{time:r,text:i}=JSON.parse(n);return Date.now()-r>t.ttl?(localStorage.removeItem(l(e)),null):i}catch{return null}}function d(e,n){t.cache&&localStorage.setItem(l(e),JSON.stringify({time:Date.now(),text:n}))}async function f(){let{url:e,anchor:l}=o(t.src);if(e){r.value=!0,i.value=!1;try{let t=u(e);if(!t){let n=await fetch(e);if(!n.ok)throw Error(n.statusText);t=await n.text(),d(e,t)}t=s(t),t=c(t,l),n.value=a.render(t)}catch(e){console.error(e),i.value=!0,n.value=``}finally{r.value=!1}}}return B(f),R(()=>t.src,f),(e,t)=>(H(),qa(`div`,aD,[r.value?(H(),qa(`p`,oD,`📄 正在加载文档…`)):i.value?(H(),qa(`p`,sD,`❌ 文档加载失败`)):(H(),qa(`div`,{key:2,innerHTML:n.value},null,8,cD))]))}},uD=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},dD={class:`script-box`},fD=[`value`],pD={key:0,class:`toast`},mD=uD({__name:`RandomDomains`,props:{src:{type:String,default:``},count:{type:Number,default:10}},setup(e){let t=e,n=`amd.com,aws.com,c.6sc.co,j.6sc.co,b.6sc.co,intel.com,r.bing.com,th.bing.com,www.amd.com,www.aws.com,ipv6.6sc.co,www.xbox.com,www.sony.com,rum.hlx.page,www.bing.com,xp.apple.com,www.wowt.com,www.apple.com,www.intel.com,www.tesla.com,www.xilinx.com,www.oracle.com,www.icloud.com,apps.apple.com,c.marsflag.com,www.nvidia.com,snap.licdn.com,aws.amazon.com,drivers.amd.com,cdn.bizibly.com,s.go-mpulse.net,tags.tiqcdn.com,cdn.bizible.com,ocsp2.apple.com,cdn.userway.org,download.amd.com,d1.awsstatic.com,s0.awsstatic.com,mscom.demdex.net,a0.awsstatic.com,go.microsoft.com,apps.mzstatic.com,sisu.xboxlive.com,www.microsoft.com,s.mp.marsflag.com,images.nvidia.com,vs.aws.amazon.com,c.s-microsoft.com,statici.icloud.com,beacon.gtv-pub.com,ts4.tc.mm.bing.net,ts3.tc.mm.bing.net,d2c.aws.amazon.com,ts1.tc.mm.bing.net,ce.mf.marsflag.com,d0.m.awsstatic.com,t0.m.awsstatic.com,ts2.tc.mm.bing.net,statici.icloud.com,tag.demandbase.com,assets-www.xbox.com,logx.optimizely.com,azure.microsoft.com,aadcdn.msftauth.net,d.oracleinfinity.io,assets.adobedtm.com,lpcdn.lpsnmedia.net,res-1.cdn.office.net,is1-ssl.mzstatic.com,electronics.sony.com,intelcorp.scene7.com,acctcdn.msftauth.net,cdnssl.clicktale.net,catalog.gamepass.com,consent.trustarc.com,gsp-ssl.ls.apple.com,munchkin.marketo.net,s.company-target.com,cdn77.api.userway.org,cua-chat-ui.tesla.com,assets-xbxweb.xbox.com,ds-aksb-a.akamaihd.net,static.cloud.coveo.com,api.company-target.com,devblogs.microsoft.com,s7mbrstream.scene7.com,fpinit.itunes.apple.com,digitalassets.tesla.com,d.impactradius-event.com,downloadmirror.intel.com,iosapps.itunes.apple.com,se-edge.itunes.apple.com,publisher.liveperson.net,tag-logger.demandbase.com,services.digitaleast.mobi,configuration.ls.apple.com,gray-wowt-prod.gtv-cdn.com,visualstudio.microsoft.com,prod.log.shortbread.aws.dev,amp-api-edge.apps.apple.com,store-images.s-microsoft.com,cdn-dynmedia-1.microsoft.com,github.gallerycdn.vsassets.io,prod.pa.cdn.uis.awsstatic.com,a.b.cdn.console.awsstatic.com,d3agakyjgjv5i8.cloudfront.net,vscjava.gallerycdn.vsassets.io,location-services-prd.tesla.com,ms-vscode.gallerycdn.vsassets.io,ms-python.gallerycdn.vsassets.io,gray-config-prod.api.arc-cdn.net,i7158c100-ds-aksb-a.akamaihd.net,downloaddispatch.itunes.apple.com,res.public.onecdn.static.microsoft,gray.video-player.arcpublishing.com,gray-config-prod.api.cdn.arcpublishing.com,img-prod-cms-rt-microsoft-com.akamaized.net,prod.us-east-1.ui.gcr-chat.marketing.aws.dev`.split(`,`),r=P([...n]),i=P(``),a=P(``),o=P(!1);function s(e){return[...e].sort(()=>Math.random()-.5)}function c(e){return e.split(/\r?\n/).map(e=>e.trim()).filter(Boolean).filter(e=>!e.startsWith(`#`))}async function l(){if(!t.src){r.value=[...n],u();return}o.value=!0;try{let e=await(await fetch(t.src)).text();t.src.endsWith(`.json`)?r.value=JSON.parse(e):r.value=c(e)}catch(e){console.error(`加载失败，使用默认域名池`,e),r.value=[...n]}finally{o.value=!1,u()}}function u(){i.value=`for d in ${s(r.value).slice(0,t.count).join(` `)}; do
  t1=$(date +%s%3N)
  timeout 1 openssl s_client -connect $d:443 -servername $d </dev/null &>/dev/null \\
    && t2=$(date +%s%3N) && echo "$d: $((t2 - t1)) ms" \\
    || echo "$d: timeout"
done`}function d(){navigator.clipboard.writeText(i.value),a.value=`✅ 已复制到剪贴板`,setTimeout(()=>a.value=``,2e3)}return B(l),R(()=>t.src,l),(e,t)=>(H(),qa(`div`,dD,[$a(`textarea`,{readonly:``,value:o.value?`加载中…`:i.value},null,8,fD),$a(`div`,{class:`actions`},[$a(`button`,{onClick:u},`换一批`),$a(`button`,{onClick:d},`复制`)]),a.value?(H(),qa(`div`,pD,Pe(a.value),1)):ao(`v-if`,!0)]))}},[[`__scopeId`,`data-v-d1f71a7e`]]),hD=c({default:()=>gD}),gD=Nd({setup(){PS({type:`homepage`,light:`#6c5515`,dark:`#f7e8ab`,threshold:48})},enhance:({app:e})=>{e.component(`RemoteMarkdown`,lD),e.component(`RandomDomains`,mD)},layouts:{Layout:QS}}),_D=[Fm,Lm,Rm,nh,ih,ah,sh,fh,ng,ig,ag,pg,bg,Cg,Dg,jg,Vg,Xg,e_,d_,T_,J_,uv,yv,ES,hD].map(e=>e.default).filter(Boolean),vD=F(JSON.parse(`{"base":"/","lang":"zh-CN","title":"","description":"","head":[["link",{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""}],["link",{"href":"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=ZCOOL+KuaiLe&display=swap","rel":"stylesheet"}]],"locales":{"/":{"lang":"zh-CN","title":"","description":""}}}`)),yD=hu,bD=()=>{let e=Xu({history:yD(Hc(`/`)),routes:[{name:`vuepress-route`,path:`/:catchAll(.*)`,components:{}}],scrollBehavior:(e,t,n)=>n||(e.hash?{el:e.hash}:{top:0})});return e.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===Hl){let t=Cd(e.fullPath);if(t.path!==e.fullPath)return t.path;let n=await t.loader();e.meta={...t.meta,_pageChunk:n}}else e.path===t.path&&(e.meta=t.meta)}),e},xD=e=>{e.component(`ClientOnly`,Od),e.component(`Content`,Ad),e.component(`RouteLink`,Ed)},SD=(e,t,n)=>{let r=W(()=>t.currentRoute.value.path),i=yn((e,n)=>({get(){return e(),t.currentRoute.value.meta._pageChunk},set(e){t.currentRoute.value.meta._pageChunk=e,n()}})),a=W(()=>Md.resolveLayouts(n)),o=W(()=>Md.resolveRouteLocale(vD.value.locales,r.value)),s=W(()=>Md.resolveSiteLocaleData(vD.value,o.value)),c=W(()=>i.value.default),l=W(()=>i.value._pageData),u=W(()=>l.value.frontmatter),d=W(()=>Md.resolvePageHeadTitle(l.value,s.value)),f=W(()=>Md.resolvePageHead(d.value,u.value,s.value)),p=W(()=>Md.resolvePageLang(l.value,s.value)),m={layouts:a,pageData:l,pageComponent:c,pageFrontmatter:u,pageHead:f,pageHeadTitle:d,pageLang:p,pageLayout:W(()=>Md.resolvePageLayout(l.value,a.value)),redirects:bd,routeLocale:o,routePath:r,routes:xd,siteData:vD,siteLocaleData:s,frontmatter:u,head:f,headTitle:d,lang:p,page:l,site:vD,siteLocale:s};return e.provide(nd,m),Object.defineProperties(e.config.globalProperties,{$pageFrontmatter:{get:()=>u.value},$pageHead:{get:()=>f.value},$pageHeadTitle:{get:()=>d.value},$pageLang:{get:()=>p.value},$pageData:{get:()=>l.value},$routeLocale:{get:()=>o.value},$withBase:{get:()=>Y},$frontmatter:{get:()=>u.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>l.value},$site:{get:()=>vD.value},$siteLocale:{get:()=>s.value}}),m},CD=([e,t,n=``])=>{let r=`head > ${e}${Object.entries(t).map(([e,t])=>K(t)?`[${e}=${JSON.stringify(t)}]`:t?`[${e}]`:``).join(``)}`;return Array.from(document.querySelectorAll(r)).find(e=>e.innerText===n)??null},wD=([e,t,n])=>{if(!K(e))return null;let r=document.createElement(e);return Gc(t)&&Object.entries(t).forEach(([e,t])=>{K(t)?r.setAttribute(e,t):t&&r.setAttribute(e,``)}),K(n)&&r.appendChild(document.createTextNode(n)),r},TD=()=>{let e=sd(),t=cd(),n=[],r=()=>{e.value.forEach(e=>{let t=CD(e);t&&n.push(t)})},i=()=>{let t=[];return e.value.forEach(e=>{let n=wD(e);n&&t.push(n)}),t},a=()=>{document.documentElement.lang=t.value;let e=i();n.forEach((t,r)=>{let i=e.findIndex(e=>t.isEqualNode(e));i===-1?(t.remove(),delete n[r]):e.splice(i,1)}),e.forEach(e=>document.head.appendChild(e)),n=[...n.filter(e=>!!e),...e]};ar(yd,a),B(()=>{r(),R(e,a,{immediate:!1})})},ED=Sc,DD=async()=>{let e=ED({name:`Vuepress`,setup(){TD();for(let e of _D)e.setup?.();let e=_D.flatMap(({rootComponents:e=[]})=>e.map(e=>G(e))),t=ld();return()=>[G(t.value),e]}}),t=bD();xD(e),SD(e,t,_D);for(let n of _D)await n.enhance?.({app:e,router:t,siteData:vD});return e.use(t),{app:e,router:t}};DD().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount(`#app`)})});export{P as $,lo as A,V as B,ro as C,L as D,G as E,li as F,lr as G,Nr as H,H as I,ze as J,nr as K,ar as L,ai as M,ci as N,Ya as O,B as P,$t as Q,vi as R,io as S,z as T,Po as U,qi as V,R as W,Be as X,fn as Y,An as Z,W as _,Mp as a,xe as at,ao as b,op as c,DD as createVueApp,o as ct,uc as d,d as dt,F as et,nc as f,u as ft,La as g,hc as h,Gp as i,Ee as it,Wn as j,Di as k,J as l,c as lt,_c as m,X as n,bn as nt,Qp as o,Pe as ot,fs as p,rr as q,Up as r,hn as rt,Zf as s,s as st,uD as t,N as tt,Jo as u,f as ut,$a as v,U as w,qa as x,Ja as y,bi as z};