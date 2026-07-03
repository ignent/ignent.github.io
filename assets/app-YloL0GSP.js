const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.esm.min-Bus4LW0z.js","assets/chunk-AQ6EADP3-CZhslHi-.js","assets/chunk-LIEV3EAG-pyKGssV3.js","assets/chunk-KEUXMURM-Cu_KbW1j.js","assets/chunk-Y3FQM624-DnIsVTYH.js","assets/chunk-MXWVPPQS-B69moOeu.js","assets/chunk-STOV2HOB-GnExfzIX.js","assets/chunk-ENMKPL7Y-CNTq0-Ps.js","assets/chunk-SZQNAPRP-Dlp4zoje.js","assets/chunk-5VCL7Z4A-CQ-2dYWj.js","assets/chunk-STADKHD7-CBcxRi1u.js","assets/chunk-5IMINLNL-DOdTeQri.js","assets/chunk-SXFNDEX5-DY7oznOk.js","assets/chunk-KTKOSTGQ-C5cAIf47.js","assets/chunk-6C3L5S6U-DCjVQ0Wg.js","assets/chunk-QU2NO3GS-B0xaSY_Y.js","assets/chunk-7FYTHRHK-CsmYIswB.js","assets/dist-DDdlpKQ0.js","assets/dist-D66SyXry.js","assets/vue-repl-vCVNxIwl.js","assets/utils-BhUV9bs0-Dx9328to.js","assets/codemirror-editor-BIZ3iGOo.js"])))=>i.map(i=>d[i]);
var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e),f=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});function p(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var m={},h=[],g=()=>{},_=()=>!1,v=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),y=e=>e.startsWith(`onUpdate:`),b=Object.assign,x=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},S=Object.prototype.hasOwnProperty,C=(e,t)=>S.call(e,t),w=Array.isArray,T=e=>re(e)===`[object Map]`,E=e=>re(e)===`[object Set]`,D=e=>re(e)===`[object Date]`,O=e=>typeof e==`function`,k=e=>typeof e==`string`,ee=e=>typeof e==`symbol`,A=e=>typeof e==`object`&&!!e,te=e=>(A(e)||O(e))&&O(e.then)&&O(e.catch),ne=Object.prototype.toString,re=e=>ne.call(e),ie=e=>re(e).slice(8,-1),ae=e=>re(e)===`[object Object]`,oe=e=>k(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,se=p(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ce=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},le=/-\w/g,j=ce(e=>e.replace(le,e=>e.slice(1).toUpperCase())),ue=/\B([A-Z])/g,de=ce(e=>e.replace(ue,`-$1`).toLowerCase()),fe=ce(e=>e.charAt(0).toUpperCase()+e.slice(1)),pe=ce(e=>e?`on${fe(e)}`:``),me=(e,t)=>!Object.is(e,t),he=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ge=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},_e=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ve=e=>{let t=k(e)?Number(e):NaN;return isNaN(t)?e:t},ye,be=()=>ye||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function xe(e){if(w(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=k(r)?Te(r):xe(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(k(e)||A(e))return e}var Se=/;(?![^(]*\))/g,Ce=/:([^]+)/,we=/\/\*[^]*?\*\//g;function Te(e){let t={};return e.replace(we,``).split(Se).forEach(e=>{if(e){let n=e.split(Ce);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ee(e){let t=``;if(k(e))t=e;else if(w(e))for(let n=0;n<e.length;n++){let r=Ee(e[n]);r&&(t+=r+` `)}else if(A(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var De=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Oe=p(De);De+``;function ke(e){return!!e||e===``}function Ae(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=je(e[r],t[r]);return n}function je(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ee(e),r=ee(t),n||r)return e===t;if(n=w(e),r=w(t),n||r)return n&&r?Ae(e,t):!1;if(n=A(e),r=A(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!je(e[n],t[n]))return!1}}return String(e)===String(t)}function Me(e,t){return e.findIndex(e=>je(e,t))}var Ne=e=>!!(e&&e.__v_isRef===!0),Pe=e=>k(e)?e:e==null?``:w(e)||A(e)&&(e.toString===ne||!O(e.toString))?Ne(e)?Pe(e.value):JSON.stringify(e,Fe,2):String(e),Fe=(e,t)=>Ne(t)?Fe(e,t.value):T(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ie(t,r)+` =>`]=n,e),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ie(e))}:ee(t)?Ie(t):A(t)&&!w(t)&&!ae(t)?String(t):t,Ie=(e,t=``)=>ee(e)?`Symbol(${e.description??t})`:e,Le,Re=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=Le;try{return Le=this,e()}finally{Le=t}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let e=Le;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function ze(){return Le}function Be(e,t=!1){Le&&Le.cleanups.push(e)}var M,Ve=new WeakSet,He=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ve.has(this)&&(Ve.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ke(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,at(this),Ye(this);let e=M,t=tt;M=this,tt=!0;try{return this.fn()}finally{Xe(this),M=e,tt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$e(e);this.deps=this.depsTail=void 0,at(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ve.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ze(this)&&this.run()}get dirty(){return Ze(this)}},Ue=0,We,Ge;function Ke(e,t=!1){if(e.flags|=8,t){e.next=Ge,Ge=e;return}e.next=We,We=e}function qe(){Ue++}function Je(){if(--Ue>0)return;if(Ge){let e=Ge;for(Ge=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;We;){let t=We;for(We=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ye(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),$e(r),et(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ze(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ot)||(e.globalVersion=ot,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ze(e))))return;e.flags|=2;let t=e.dep,n=M,r=tt;M=e,tt=!0;try{Ye(e);let n=e.fn(e._value);(t.version===0||me(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,tt=r,Xe(e),e.flags&=-3}}function $e(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)$e(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function et(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var tt=!0,nt=[];function rt(){nt.push(tt),tt=!1}function it(){let e=nt.pop();tt=e===void 0?!0:e}function at(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var ot=0,st=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},ct=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!tt||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new st(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,lt(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,ot++,this.notify(e)}notify(e){qe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Je()}}};function lt(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)lt(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var ut=new WeakMap,dt=Symbol(``),ft=Symbol(``),pt=Symbol(``);function mt(e,t,n){if(tt&&M){let t=ut.get(e);t||ut.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new ct),r.map=t,r.key=n),r.track()}}function ht(e,t,n,r,i,a){let o=ut.get(e);if(!o){ot++;return}let s=e=>{e&&e.trigger()};if(qe(),t===`clear`)o.forEach(s);else{let i=w(e),a=i&&oe(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===pt||!ee(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(pt)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(dt)),T(e)&&s(o.get(ft)));break;case`delete`:i||(s(o.get(dt)),T(e)&&s(o.get(ft)));break;case`set`:T(e)&&s(o.get(dt));break}}Je()}function gt(e,t){let n=ut.get(e);return n&&n.get(t)}function _t(e){let t=N(e);return t===e?t:(mt(t,`iterate`,pt),on(e)?t:t.map(ln))}function vt(e){return mt(e=N(e),`iterate`,pt),e}function yt(e,t){return an(e)?un(rn(e)?ln(t):t):ln(t)}var bt={__proto__:null,[Symbol.iterator](){return xt(this,Symbol.iterator,e=>yt(this,e))},concat(...e){return _t(this).concat(...e.map(e=>w(e)?_t(e):e))},entries(){return xt(this,`entries`,e=>(e[1]=yt(this,e[1]),e))},every(e,t){return Ct(this,`every`,e,t,void 0,arguments)},filter(e,t){return Ct(this,`filter`,e,t,e=>e.map(e=>yt(this,e)),arguments)},find(e,t){return Ct(this,`find`,e,t,e=>yt(this,e),arguments)},findIndex(e,t){return Ct(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return Ct(this,`findLast`,e,t,e=>yt(this,e),arguments)},findLastIndex(e,t){return Ct(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return Ct(this,`forEach`,e,t,void 0,arguments)},includes(...e){return Tt(this,`includes`,e)},indexOf(...e){return Tt(this,`indexOf`,e)},join(e){return _t(this).join(e)},lastIndexOf(...e){return Tt(this,`lastIndexOf`,e)},map(e,t){return Ct(this,`map`,e,t,void 0,arguments)},pop(){return Et(this,`pop`)},push(...e){return Et(this,`push`,e)},reduce(e,...t){return wt(this,`reduce`,e,t)},reduceRight(e,...t){return wt(this,`reduceRight`,e,t)},shift(){return Et(this,`shift`)},some(e,t){return Ct(this,`some`,e,t,void 0,arguments)},splice(...e){return Et(this,`splice`,e)},toReversed(){return _t(this).toReversed()},toSorted(e){return _t(this).toSorted(e)},toSpliced(...e){return _t(this).toSpliced(...e)},unshift(...e){return Et(this,`unshift`,e)},values(){return xt(this,`values`,e=>yt(this,e))}};function xt(e,t,n){let r=vt(e),i=r[t]();return r!==e&&!on(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var St=Array.prototype;function Ct(e,t,n,r,i,a){let o=vt(e),s=o!==e&&!on(e),c=o[t];if(c!==St[t]){let t=c.apply(e,a);return s?ln(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,yt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function wt(e,t,n,r){let i=vt(e),a=i!==e&&!on(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=yt(e,t)),n.call(this,t,yt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?yt(e,c):c}function Tt(e,t,n){let r=N(e);mt(r,`iterate`,pt);let i=r[t](...n);return(i===-1||i===!1)&&sn(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function Et(e,t,n=[]){rt(),qe();let r=N(e)[t].apply(e,n);return Je(),it(),r}var Dt=p(`__proto__,__v_isRef,__isVue`),Ot=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(ee));function kt(e){ee(e)||(e=String(e));let t=N(this);return mt(t,`has`,e),t.hasOwnProperty(e)}var At=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Xt:Yt:i?Jt:qt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=w(e);if(!r){let e;if(a&&(e=bt[t]))return e;if(t===`hasOwnProperty`)return kt}let o=Reflect.get(e,t,dn(e)?e:n);if((ee(t)?Ot.has(t):Dt(t))||(r||mt(e,`get`,t),i))return o;if(dn(o)){let e=a&&oe(t)?o:o.value;return r&&A(e)?en(e):e}return A(o)?r?en(o):Qt(o):o}},jt=class extends At{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=w(e)&&oe(t);if(!this._isShallow){let e=an(i);if(!on(n)&&!an(n)&&(i=N(i),n=N(n)),!a&&dn(i)&&!dn(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:C(e,t),s=Reflect.set(e,t,n,dn(e)?e:r);return e===N(r)&&s&&(o?me(n,i)&&ht(e,`set`,t,n,i):ht(e,`add`,t,n)),s}deleteProperty(e,t){let n=C(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&ht(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!ee(t)||!Ot.has(t))&&mt(e,`has`,t),n}ownKeys(e){return mt(e,`iterate`,w(e)?`length`:dt),Reflect.ownKeys(e)}},Mt=class extends At{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Nt=new jt,Pt=new Mt,Ft=new jt(!0),It=new Mt(!0),Lt=e=>e,Rt=e=>Reflect.getPrototypeOf(e);function zt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=T(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?Lt:t?un:ln;return!t&&mt(a,`iterate`,c?ft:dt),b(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function Bt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Vt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(me(n,a)&&mt(i,`get`,n),mt(i,`get`,a));let{has:o}=Rt(i),s=t?Lt:e?un:ln;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&mt(N(t),`iterate`,dt),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(me(t,i)&&mt(r,`has`,t),mt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?Lt:e?un:ln;return!e&&mt(o,`iterate`,dt),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return b(n,e?{add:Bt(`add`),set:Bt(`set`),delete:Bt(`delete`),clear:Bt(`clear`)}:{add(e){let n=N(this),r=Rt(n),i=N(e),a=!t&&!on(e)&&!an(e)?i:e;return r.has.call(n,a)||me(e,a)&&r.has.call(n,e)||me(i,a)&&r.has.call(n,i)||(n.add(a),ht(n,`add`,a,a)),this},set(e,n){!t&&!on(n)&&!an(n)&&(n=N(n));let r=N(this),{has:i,get:a}=Rt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?me(n,s)&&ht(r,`set`,e,n,s):ht(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=Rt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&ht(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&ht(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=zt(r,e,t)}),n}function Ht(e,t){let n=Vt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(C(n,r)&&r in t?n:t,r,i)}var Ut={get:Ht(!1,!1)},Wt={get:Ht(!1,!0)},Gt={get:Ht(!0,!1)},Kt={get:Ht(!0,!0)},qt=new WeakMap,Jt=new WeakMap,Yt=new WeakMap,Xt=new WeakMap;function Zt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Qt(e){return an(e)?e:nn(e,!1,Nt,Ut,qt)}function $t(e){return nn(e,!1,Ft,Wt,Jt)}function en(e){return nn(e,!0,Pt,Gt,Yt)}function tn(e){return nn(e,!0,It,Kt,Xt)}function nn(e,t,n,r,i){if(!A(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Zt(ie(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function rn(e){return an(e)?rn(e.__v_raw):!!(e&&e.__v_isReactive)}function an(e){return!!(e&&e.__v_isReadonly)}function on(e){return!!(e&&e.__v_isShallow)}function sn(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function cn(e){return!C(e,`__v_skip`)&&Object.isExtensible(e)&&ge(e,`__v_skip`,!0),e}var ln=e=>A(e)?Qt(e):e,un=e=>A(e)?en(e):e;function dn(e){return e?e.__v_isRef===!0:!1}function P(e){return fn(e,!1)}function F(e){return fn(e,!0)}function fn(e,t){return dn(e)?e:new pn(e,t)}var pn=class{constructor(e,t){this.dep=new ct,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:ln(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||on(e)||an(e);e=n?e:N(e),me(e,t)&&(this._rawValue=e,this._value=n?e:ln(e),this.dep.trigger())}};function mn(e){return dn(e)?e.value:e}function I(e){return O(e)?e():mn(e)}var hn={get:(e,t,n)=>t===`__v_raw`?e:mn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return dn(i)&&!dn(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function gn(e){return rn(e)?e:new Proxy(e,hn)}var _n=class{constructor(e){this.__v_isRef=!0,this._value=void 0;let t=this.dep=new ct,{get:n,set:r}=e(t.track.bind(t),t.trigger.bind(t));this._get=n,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}};function vn(e){return new _n(e)}function yn(e){let t=w(e)?Array(e.length):{};for(let n in e)t[n]=Cn(e,n);return t}var bn=class{constructor(e,t,n){this._object=e,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=ee(t)?t:String(t),this._raw=N(e);let r=!0,i=e;if(!w(e)||ee(this._key)||!oe(this._key))do r=!sn(i)||on(i);while(r&&(i=i.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=mn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&dn(this._raw[this._key])){let t=this._object[this._key];if(dn(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return gt(this._raw,this._key)}},xn=class{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}};function Sn(e,t,n){return dn(e)?e:O(e)?new xn(e):A(e)&&arguments.length>1?Cn(e,t,n):P(e)}function Cn(e,t,n){return new bn(e,t,n)}var wn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ct(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ot-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Ke(this,!0),!0}get value(){let e=this.dep.track();return Qe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Tn(e,t,n=!1){let r,i;return O(e)?r=e:(r=e.get,i=e.set),new wn(r,i,n)}var En={},Dn=new WeakMap,On=void 0;function kn(e,t=!1,n=On){if(n){let t=Dn.get(n);t||Dn.set(n,t=[]),t.push(e)}}function An(e,t,n=m){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:on(e)||i===!1||i===0?jn(e,1):jn(e),u,d,f,p,h=!1,_=!1;if(dn(e)?(d=()=>e.value,h=on(e)):rn(e)?(d=()=>l(e),h=!0):w(e)?(_=!0,h=e.some(e=>rn(e)||on(e)),d=()=>e.map(e=>{if(dn(e))return e.value;if(rn(e))return l(e);if(O(e))return c?c(e,2):e()})):d=O(e)?t?c?()=>c(e,2):e:()=>{if(f){rt();try{f()}finally{it()}}let t=On;On=u;try{return c?c(e,3,[p]):e(p)}finally{On=t}}:g,t&&i){let e=d,t=i===!0?1/0:i;d=()=>jn(e(),t)}let v=ze(),y=()=>{u.stop(),v&&v.active&&x(v.effects,u)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return y(),n}}let b=_?Array(e.length).fill(En):En,S=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let n=u.run();if(e||i||h||(_?n.some((e,t)=>me(e,b[t])):me(n,b))){f&&f();let e=On;On=u;try{let e=[n,b===En?void 0:_&&b[0]===En?[]:b,p];b=n,c?c(t,3,e):t(...e)}finally{On=e}}}else u.run()};return s&&s(S),u=new He(d),u.scheduler=o?()=>o(S,!1):S,p=e=>kn(e,!1,u),f=u.onStop=()=>{let e=Dn.get(u);if(e){if(c)c(e,4);else for(let t of e)t();Dn.delete(u)}},t?r?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),y.pause=u.pause.bind(u),y.resume=u.resume.bind(u),y.stop=y,y}function jn(e,t=1/0,n){if(t<=0||!A(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,dn(e))jn(e.value,t,n);else if(w(e))for(let r=0;r<e.length;r++)jn(e[r],t,n);else if(E(e)||T(e))e.forEach(e=>{jn(e,t,n)});else if(ae(e)){for(let r in e)jn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&jn(e[r],t,n)}return e}function Mn(e,t,n,r){try{return r?e(...r):e()}catch(e){Pn(e,t,n)}}function Nn(e,t,n,r){if(O(e)){let i=Mn(e,t,n,r);return i&&te(i)&&i.catch(e=>{Pn(e,t,n)}),i}if(w(e)){let i=[];for(let a=0;a<e.length;a++)i.push(Nn(e[a],t,n,r));return i}}function Pn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||m;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){rt(),Mn(a,null,10,[e,i,o]),it();return}}Fn(e,n,i,r,o)}function Fn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var In=[],Ln=-1,Rn=[],zn=null,Bn=0,Vn=Promise.resolve(),Hn=null;function Un(e){let t=Hn||Vn;return e?t.then(this?e.bind(this):e):t}function Wn(e){let t=Ln+1,n=In.length;for(;t<n;){let r=t+n>>>1,i=In[r],a=Xn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function Gn(e){if(!(e.flags&1)){let t=Xn(e),n=In[In.length-1];!n||!(e.flags&2)&&t>=Xn(n)?In.push(e):In.splice(Wn(t),0,e),e.flags|=1,Kn()}}function Kn(){Hn||=Vn.then(Zn)}function qn(e){w(e)?Rn.push(...e):zn&&e.id===-1?zn.splice(Bn+1,0,e):e.flags&1||(Rn.push(e),e.flags|=1),Kn()}function Jn(e,t,n=Ln+1){for(;n<In.length;n++){let t=In[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;In.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Yn(e){if(Rn.length){let e=[...new Set(Rn)].sort((e,t)=>Xn(e)-Xn(t));if(Rn.length=0,zn){zn.push(...e);return}for(zn=e,Bn=0;Bn<zn.length;Bn++){let e=zn[Bn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}zn=null,Bn=0}}var Xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Zn(e){try{for(Ln=0;Ln<In.length;Ln++){let e=In[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<In.length;Ln++){let e=In[Ln];e&&(e.flags&=-2)}Ln=-1,In.length=0,Yn(e),Hn=null,(In.length||Rn.length)&&Zn(e)}}var Qn=null,$n=null;function er(e){let t=Qn;return Qn=e,$n=e&&e.type.__scopeId||null,t}function tr(e,t=Qn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ja(-1);let i=er(t),a;try{a=e(...n)}finally{er(i),r._d&&Ja(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function nr(e,t){if(Qn===null)return e;let n=Po(Qn),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=m]=t[e];i&&(O(i)&&(i={mounted:i,updated:i}),i.deep&&jn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function rr(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(rt(),Nn(c,n,8,[e.el,s,e,t]),it())}}function ir(e,t){if(vo){let n=vo.provides,r=vo.parent&&vo.parent.provides;r===n&&(n=vo.provides=Object.create(r)),n[e]=t}}function L(e,t,n=!1){let r=yo();if(r||Yi){let i=Yi?Yi._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&O(t)?t.call(r&&r.proxy):t}}function ar(){return!!(yo()||Yi)}var or=Symbol.for(`v-scx`),sr=()=>L(or);function cr(e,t){return ur(e,null,t)}function lr(e,t){return ur(e,null,{flush:`sync`})}function R(e,t,n){return ur(e,t,n)}function ur(e,t,n=m){let{immediate:r,deep:i,flush:a,once:o}=n,s=b({},n),c=t&&r||!t&&a!==`post`,l;if(To){if(a===`sync`){let e=sr();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=g,e.resume=g,e.pause=g,e}}let u=vo;s.call=(e,t,n)=>Nn(e,u,t,n);let d=!1;a===`post`?s.scheduler=e=>{Da(e,u&&u.suspense)}:a!==`sync`&&(d=!0,s.scheduler=(e,t)=>{t?e():Gn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),d&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let f=An(e,t,s);return To&&(l?l.push(f):c&&f()),f}function dr(e,t,n){let r=this.proxy,i=k(e)?e.includes(`.`)?fr(r,e):()=>r[e]:e.bind(r,r),a;O(t)?a=t:(a=t.handler,n=t);let o=So(this),s=ur(i,a.bind(r),n);return o(),s}function fr(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var pr=Symbol(`_vte`),mr=e=>e.__isTeleport,hr=Symbol(`_leaveCb`),gr=Symbol(`_enterCb`);function _r(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return B(()=>{e.isMounted=!0}),di(()=>{e.isUnmounting=!0}),e}var vr=[Function,Array],yr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vr,onEnter:vr,onAfterEnter:vr,onEnterCancelled:vr,onBeforeLeave:vr,onLeave:vr,onAfterLeave:vr,onLeaveCancelled:vr,onBeforeAppear:vr,onAppear:vr,onAfterAppear:vr,onAppearCancelled:vr},br=e=>{let t=e.subTree;return t.component?br(t.component):t},xr={name:`BaseTransition`,props:yr,setup(e,{slots:t}){let n=yo(),r=_r();return()=>{let i=t.default&&kr(t.default(),!0),a=i&&i.length?Sr(i):n.subTree?co():void 0;if(!a)return;let o=N(e),{mode:s}=o;if(r.isLeaving)return Er(a);let c=Dr(a);if(!c)return Er(a);let l=Tr(c,o,r,n,e=>l=e);c.type!==Ha&&Or(c,l);let u=n.subTree&&Dr(n.subTree);if(u&&u.type!==Ha&&!$a(u,c)&&br(n).type!==Ha){let e=Tr(u,o,r,n);if(Or(u,e),s===`out-in`&&c.type!==Ha)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},Er(a);s===`in-out`&&c.type!==Ha?e.delayLeave=(e,t,n)=>{let i=wr(r,u);i[String(u.key)]=u,e[hr]=()=>{t(),e[hr]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Sr(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Ha){t=n;break}}return t}var Cr=xr;function wr(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Tr(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:_,onAfterAppear:v,onAppearCancelled:y}=t,b=String(e.key),x=wr(n,e),S=(e,t)=>{e&&Nn(e,r,9,t)},C=(e,t)=>{let n=t[1];S(e,t),w(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},T={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=g||c;else return;t[hr]&&t[hr](!0);let i=x[b];i&&$a(e,i)&&i.el[hr]&&i.el[hr](),S(r,[t])},enter(t){if(x[b]===e)return;let r=l,i=u,o=d;if(!n.isMounted)if(a)r=_||l,i=v||u,o=y||d;else return;let s=!1;t[gr]=e=>{s||(s=!0,S(e?o:i,[t]),T.delayedLeave&&T.delayedLeave(),t[gr]=void 0)};let c=t[gr].bind(null,!1);r?C(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[gr]&&t[gr](!0),n.isUnmounting)return r();S(f,[t]);let a=!1;t[hr]=n=>{a||(a=!0,r(),S(n?h:m,[t]),t[hr]=void 0,x[i]===e&&delete x[i])};let o=t[hr].bind(null,!1);x[i]=e,p?C(p,[t,o]):o()},clone(e){let a=Tr(e,t,n,r,i);return i&&i(a),a}};return T}function Er(e){if(ti(e))return e=ao(e),e.children=null,e}function Dr(e){if(!ti(e))return mr(e.type)&&e.children?Sr(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&O(n.default))return n.default()}}function Or(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Or(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function kr(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===Ba?(o.patchFlag&128&&i++,r=r.concat(kr(o.children,t,s))):(t||o.type!==Ha)&&r.push(s==null?o:ao(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function z(e,t){return O(e)?b({name:e.name},t,{setup:e}):e}function Ar(){let e=yo();return e?(e.appContext.config.idPrefix||`v`)+`-`+e.ids[0]+e.ids[1]++:``}function jr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Mr(e){let t=yo(),n=F(null);if(t){let r=t.refs===m?t.refs={}:t.refs;Object.defineProperty(r,e,{enumerable:!0,get:()=>n.value,set:e=>n.value=e})}return n}function Nr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Pr=new WeakMap;function Fr(e,t,n,r,i=!1){if(w(e)){e.forEach((e,a)=>Fr(e,t&&(w(t)?t[a]:t),n,r,i));return}if(Qr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Fr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?Po(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===m?s.refs={}:s.refs,d=s.setupState,f=N(d),p=d===m?_:e=>Nr(u,e)?!1:C(f,e),h=(e,t)=>!(t&&Nr(u,t));if(l!=null&&l!==c){if(Ir(t),k(l))u[l]=null,p(l)&&(d[l]=null);else if(dn(l)){let e=t;h(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(O(c)){rt();try{Mn(c,s,12,[o,u])}finally{it()}}else{let t=k(c),r=dn(c);if(t||r){let s=()=>{if(e.f){let n=t?p(c)?d[c]:u[c]:h(c)||!e.k?c.value:u[e.k];if(i)w(n)&&x(n,a);else if(w(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],p(c)&&(d[c]=u[c]);else{let t=[a];h(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,p(c)&&(d[c]=o)):r&&(h(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),Pr.delete(e)};t.id=-1,Pr.set(e,t),Da(t,n)}else Ir(e),s()}}}function Ir(e){let t=Pr.get(e);t&&(t.flags|=8,Pr.delete(e))}var Lr=!1,Rr=()=>{Lr||=(console.error(`Hydration completed but contains mismatches.`),!0)},zr=e=>e.namespaceURI.includes(`svg`)&&e.tagName!==`foreignObject`,Br=e=>e.namespaceURI.includes(`MathML`),Vr=e=>{if(e.nodeType===1){if(zr(e))return`svg`;if(Br(e))return`mathml`}},Hr=e=>e.nodeType===8;function Ur(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:a,parentNode:o,remove:s,insert:c,createComment:l}}=e,u=(e,t)=>{if(!t.hasChildNodes()){n(null,e,t),Yn(),t._vnode=e;return}d(t.firstChild,e,null,null,null),Yn(),t._vnode=e},d=(n,r,s,l,u,v=!1)=>{v||=!!r.dynamicChildren;let b=Hr(n)&&n.data===`[`,x=()=>h(n,r,s,l,u,b),{type:S,ref:C,shapeFlag:w,patchFlag:T}=r,E=n.nodeType;r.el=n,T===-2&&(v=!1,r.dynamicChildren=null);let D=null;switch(S){case Va:E===3?(n.data!==r.children&&(Rr(),n.data=r.children),D=a(n)):r.children===``?(c(r.el=i(``),o(n),n),D=n):D=x();break;case Ha:y(n)?(D=a(n),_(r.el=n.content.firstChild,n,s)):D=E!==8||b?x():a(n);break;case Ua:if(b&&(n=a(n),E=n.nodeType),E===1||E===3){D=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=D.nodeType===1?D.outerHTML:D.data),t===r.staticCount-1&&(r.anchor=D),D=a(D);return b?a(D):D}else x();break;case Ba:D=b?m(n,r,s,l,u,v):x();break;default:if(w&1)D=(E!==1||r.type.toLowerCase()!==n.tagName.toLowerCase())&&!y(n)?x():f(n,r,s,l,u,v);else if(w&6){r.slotScopeIds=u;let e=o(n);if(D=b?g(n):Hr(n)&&n.data===`teleport start`?g(n,n.data,`teleport end`):a(n),t(r,e,null,s,l,Vr(e),v),Qr(r)&&!r.type.__asyncResolved){let t;b?(t=U(Ba),t.anchor=D?D.previousSibling:e.lastChild):t=n.nodeType===3?oo(``):U(`div`),t.el=n,r.component.subTree=t}}else w&64?D=E===8?r.type.hydrate(n,r,s,l,u,v,e,p):x():w&128&&(D=r.type.hydrate(n,r,s,l,Vr(o(n)),u,v,e,d))}return C!=null&&Fr(C,null,l,r),D},f=(e,t,n,i,a,o)=>{o||=!!t.dynamicChildren;let{type:c,dynamicProps:l,props:u,patchFlag:d,shapeFlag:f,dirs:m,transition:h}=t,g=c===`input`||c===`option`,b=!!l;if(g||b||d!==-1){m&&rr(t,null,n,`created`);let c=!1;if(y(e)){c=Ma(null,h)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;if(c){let e=r.getAttribute(`class`);e&&(r.$cls=e),h.beforeEnter(r)}_(r,e,n),t.el=e=r}if(f&16&&!(u&&(u.innerHTML||u.textContent))){let r=p(e.firstChild,t,e,n,i,a,o);for(r&&!Kr(e,1)&&Rr();r;){let e=r;r=r.nextSibling,s(e)}}else if(f&8){let n=t.children;n[0]===`
`&&(e.tagName===`PRE`||e.tagName===`TEXTAREA`)&&(n=n.slice(1));let{textContent:r}=e;r!==n&&r!==n.replace(/\r\n|\r/g,`
`)&&(Kr(e,0)||Rr(),e.textContent=t.children)}if(u){if(g||b||!o||d&48){let t=e.tagName.includes(`-`);for(let i in u)(g&&(i.endsWith(`value`)||i===`indeterminate`)||v(i)&&!se(i)||i[0]===`.`||t&&!se(i)||l&&l.includes(i))&&r(e,i,null,u[i],void 0,n)}else if(u.onClick)r(e,`onClick`,null,u.onClick,void 0,n);else if(d&4&&rn(u.style))for(let e in u.style)u.style[e]}let x;(x=u&&u.onVnodeBeforeMount)&&mo(x,n,t),m&&rr(t,null,n,`beforeMount`),((x=u&&u.onVnodeMounted)||m||c)&&za(()=>{x&&mo(x,n,t),c&&h.enter(e),m&&rr(t,null,n,`mounted`)},i)}return e.nextSibling},p=(e,t,r,o,s,l,u)=>{u||=!!t.dynamicChildren;let f=t.children,p=f.length,m=!1;for(let t=0;t<p;t++){let h=u?f[t]:f[t]=lo(f[t]),g=h.type===Va;e?(g&&!u&&t+1<p&&lo(f[t+1]).type===Va&&(c(i(e.data.slice(h.children.length)),r,a(e)),e.data=h.children),e=d(e,h,o,s,l,u)):g&&!h.children?c(h.el=i(``),r):(m||(m=!0,Kr(r,1)||Rr()),n(null,h,r,null,o,s,Vr(r),l))}return e},m=(e,t,n,r,i,s)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=o(e),f=p(a(e),t,d,n,r,i,s);return f&&Hr(f)&&f.data===`]`?a(t.anchor=f):(Rr(),c(t.anchor=l(`]`),d,f),f)},h=(e,t,r,i,c,l)=>{if(Jr(e,t)||Rr(),t.el=null,l){let t=g(e);for(;;){let n=a(e);if(n&&n!==t)s(n);else break}}let u=a(e),d=o(e);return s(e),n(null,t,d,u,r,i,Vr(d),c),r&&(r.vnode.el=t.el,ca(r,t.el)),u},g=(e,t=`[`,n=`]`)=>{let r=0;for(;e;)if(e=a(e),e&&Hr(e)&&(e.data===t&&r++,e.data===n)){if(r===0)return a(e);r--}return e},_=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},y=e=>e.nodeType===1&&e.tagName===`TEMPLATE`;return[u,d]}var Wr=`data-allow-mismatch`,Gr={0:`text`,1:`children`,2:`class`,3:`style`,4:`attribute`};function Kr(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Wr);)e=e.parentElement;return qr(e&&e.getAttribute(Wr),t)}function qr(e,t){if(e==null)return!1;if(e===``)return!0;{let n=e.split(`,`);return t===0&&n.includes(`children`)?!0:n.includes(Gr[t])}}function Jr(e,t){return Kr(e.parentElement,1)||Yr(e)||Xr(t)}function Yr(e){return e.nodeType===1&&qr(e.getAttribute(Wr),1)}function Xr({props:e}){let t=e&&e[Wr];return typeof t==`string`&&qr(t,1)}be().requestIdleCallback,be().cancelIdleCallback;function Zr(e,t){if(Hr(e)&&e.data===`[`){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Hr(r))if(r.data===`]`){if(--n===0)break}else r.data===`[`&&n++;r=r.nextSibling}}else t(e)}var Qr=e=>!!e.type.__asyncLoader;function $r(e){O(e)&&(e={loader:e});let{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:a,timeout:o,suspensible:s=!0,onError:c}=e,l=null,u,d=0,f=()=>(d++,l=null,p()),p=()=>{let e;return l||(e=l=t().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),c)return new Promise((t,n)=>{c(e,()=>t(f()),()=>n(e),d+1)});throw e}).then(t=>e!==l&&l?l:(t&&(t.__esModule||t[Symbol.toStringTag]===`Module`)&&(t=t.default),u=t,t)))};return z({name:`AsyncComponentWrapper`,__asyncLoader:p,__asyncHydrate(e,t,n){let r=!1;(t.bu||=[]).push(()=>r=!0);let i=()=>{r||n()},o=a?()=>{let n=a(i,t=>Zr(e,t));n&&(t.bum||=[]).push(n)}:i;u?o():p().then(()=>!t.isUnmounted&&o())},get __asyncResolved(){return u},setup(){let e=vo;if(jr(e),u)return()=>ei(u,e);let t=t=>{l=null,Pn(t,e,13,!r)};if(s&&e.suspense||To)return p().then(t=>()=>ei(t,e)).catch(e=>(t(e),()=>r?U(r,{error:e}):null));let a=P(!1),c=P(),d=P(!!i),f,m;return fi(()=>{f!=null&&clearTimeout(f),m!=null&&clearTimeout(m)}),i&&(m=setTimeout(()=>{e.isUnmounted||(d.value=!1)},i)),o!=null&&(f=setTimeout(()=>{if(!e.isUnmounted&&!a.value&&!c.value){let e=Error(`Async component timed out after ${o}ms.`);t(e),c.value=e}},o)),p().then(()=>{e.isUnmounted||(a.value=!0,e.parent&&ti(e.parent.vnode)&&e.parent.update())}).catch(n=>{if(e.isUnmounted){l=null;return}t(n),c.value=n}),()=>{if(a.value&&u)return ei(u,e);if(c.value&&r)return U(r,{error:c.value});if(n&&!d.value)return ei(n,e)}}})}function ei(e,t){let{ref:n,props:r,children:i,ce:a}=t.vnode,o=U(e,r,i);return o.ref=n,o.ce=a,delete t.vnode.ce,o}var ti=e=>e.type.__isKeepAlive;function ni(e,t){ii(e,`a`,t)}function ri(e,t){ii(e,`da`,t)}function ii(e,t,n=vo){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(oi(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ti(e.parent.vnode)&&ai(r,t,n,e),e=e.parent}}function ai(e,t,n,r){let i=oi(t,e,r,!0);fi(()=>{x(r[t],i)},n)}function oi(e,t,n=vo,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{rt();let i=So(n),a=Nn(t,n,e,r);return i(),it(),a};return r?i.unshift(a):i.push(a),a}}var si=e=>(t,n=vo)=>{(!To||e===`sp`)&&oi(e,(...e)=>t(...e),n)},ci=si(`bm`),B=si(`m`),li=si(`bu`),ui=si(`u`),di=si(`bum`),fi=si(`um`),pi=si(`sp`),mi=si(`rtg`),hi=si(`rtc`);function gi(e,t=vo){oi(`ec`,e,t)}var _i=`components`;function V(e,t){return yi(_i,e,!0,t)||e}var vi=Symbol.for(`v-ndc`);function yi(e,t,n=!0,r=!1){let i=Qn||vo;if(i){let n=i.type;if(e===_i){let e=Fo(n,!1);if(e&&(e===t||e===j(t)||e===fe(j(t))))return n}let a=bi(i[e]||n[e],t)||bi(i.appContext[e],t);return!a&&r?n:a}}function bi(e,t){return e&&(e[t]||e[j(t)]||e[fe(j(t))])}function xi(e,t,n,r){let i,a=n&&n[r],o=w(e);if(o||k(e)){let n=o&&rn(e),r=!1,s=!1;n&&(r=!on(e),s=an(e),e=vt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?un(ln(e[n])):ln(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(A(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}function Si(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(w(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function Ci(e,t,n={},r,i){if(Qn.ce||Qn.parent&&Qr(Qn.parent)&&Qn.parent.ce){let e=Object.keys(n).length>0;return t!=="default"&&(n.name=t),H(),Za(Ba,null,[U(`slot`,n,r&&r())],e?-2:64)}let a=e[t];a&&a._c&&(a._d=!1),H();let o=a&&wi(a(n)),s=n.key||o&&o.key,c=Za(Ba,{key:(s&&!ee(s)?s:`_${t}`)+(!o&&r?`_fb`:``)},o||(r?r():[]),o&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+`-s`]),a&&a._c&&(a._d=!0),c}function wi(e){return e.some(e=>Qa(e)?!(e.type===Ha||e.type===Ba&&!wi(e.children)):!0)?e:null}var Ti=e=>e?wo(e)?Po(e):Ti(e.parent):null,Ei=b(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ti(e.parent),$root:e=>Ti(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ii(e),$forceUpdate:e=>e.f||=()=>{Gn(e.update)},$nextTick:e=>e.n||=Un.bind(e.proxy),$watch:e=>dr.bind(e)}),Di=(e,t)=>e!==m&&!e.__isScriptSetup&&C(e,t),Oi={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Di(r,t))return o[t]=1,r[t];else if(i!==m&&C(i,t))return o[t]=2,i[t];else if(C(a,t))return o[t]=3,a[t];else if(n!==m&&C(n,t))return o[t]=4,n[t];else ji&&(o[t]=0)}let l=Ei[t],u,d;if(l)return t===`$attrs`&&mt(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==m&&C(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,C(d,t))return d[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Di(i,t)?(i[t]=n,!0):r!==m&&C(r,t)?(r[t]=n,!0):C(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==m&&s[0]!==`$`&&C(e,s)||Di(t,s)||C(a,s)||C(r,s)||C(Ei,s)||C(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?C(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function ki(e){return w(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}function Ai(e,t){return!e||!t?e||t:w(e)&&w(t)?e.concat(t):b({},ki(e),ki(t))}var ji=!0;function Mi(e){let t=Ii(e),n=e.proxy,r=e.ctx;ji=!1,t.beforeCreate&&Pi(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:h,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:x,render:S,renderTracked:C,renderTriggered:T,errorCaptured:E,serverPrefetch:D,expose:k,inheritAttrs:ee,components:te,directives:ne,filters:re}=t;if(l&&Ni(l,r,null),o)for(let e in o){let t=o[e];O(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);A(t)&&(e.data=Qt(t))}if(ji=!0,a)for(let e in a){let t=a[e],i=W({get:O(t)?t.bind(n,n):O(t.get)?t.get.bind(n,n):g,set:!O(t)&&O(t.set)?t.set.bind(n):g});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Fi(s[e],r,n,e);if(c){let e=O(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{ir(t,e[t])})}u&&Pi(u,e,`c`);function ie(e,t){w(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(ie(ci,d),ie(B,f),ie(li,p),ie(ui,m),ie(ni,h),ie(ri,_),ie(gi,E),ie(hi,C),ie(mi,T),ie(di,y),ie(fi,x),ie(pi,D),w(k))if(k.length){let t=e.exposed||={};k.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};S&&e.render===g&&(e.render=S),ee!=null&&(e.inheritAttrs=ee),te&&(e.components=te),ne&&(e.directives=ne),D&&jr(e)}function Ni(e,t,n=g){w(e)&&(e=Vi(e));for(let n in e){let r=e[n],i;i=A(r)?`default`in r?L(r.from||n,r.default,!0):L(r.from||n):L(r),dn(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Pi(e,t,n){Nn(w(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fi(e,t,n,r){let i=r.includes(`.`)?fr(n,r):()=>n[r];if(k(e)){let n=t[e];O(n)&&R(i,n)}else if(O(e))R(i,e.bind(n));else if(A(e))if(w(e))e.forEach(e=>Fi(e,t,n,r));else{let r=O(e.handler)?e.handler.bind(n):t[e.handler];O(r)&&R(i,r,e)}}function Ii(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Li(c,e,o,!0)),Li(c,t,o)),A(t)&&a.set(t,c),c}function Li(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Li(e,a,n,!0),i&&i.forEach(t=>Li(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Ri[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Ri={data:zi,props:Wi,emits:Wi,methods:Ui,computed:Ui,beforeCreate:Hi,created:Hi,beforeMount:Hi,mounted:Hi,beforeUpdate:Hi,updated:Hi,beforeDestroy:Hi,beforeUnmount:Hi,destroyed:Hi,unmounted:Hi,activated:Hi,deactivated:Hi,errorCaptured:Hi,serverPrefetch:Hi,components:Ui,directives:Ui,watch:Gi,provide:zi,inject:Bi};function zi(e,t){return t?e?function(){return b(O(e)?e.call(this,this):e,O(t)?t.call(this,this):t)}:t:e}function Bi(e,t){return Ui(Vi(e),Vi(t))}function Vi(e){if(w(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Hi(e,t){return e?[...new Set([].concat(e,t))]:t}function Ui(e,t){return e?b(Object.create(null),e,t):t}function Wi(e,t){return e?w(e)&&w(t)?[...new Set([...e,...t])]:b(Object.create(null),ki(e),ki(t??{})):t}function Gi(e,t){if(!e)return t;if(!t)return e;let n=b(Object.create(null),e);for(let r in t)n[r]=Hi(e[r],t[r]);return n}function Ki(){return{app:null,config:{isNativeTag:_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var qi=0;function Ji(e,t){return function(n,r=null){O(n)||(n=b({},n)),r!=null&&!A(r)&&(r=null);let i=Ki(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:qi++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Lo,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&O(e.install)?(a.add(e),e.install(c,...t)):O(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||U(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Po(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(Nn(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=Yi;Yi=c;try{return e()}finally{Yi=t}}};return c}}var Yi=null;function Xi(e,t,n=m){let r=yo(),i=j(t),a=de(t),o=Zi(e,i),s=vn((o,s)=>{let c,l=m,u;return lr(()=>{let t=e[i];me(c,t)&&(c=t,s())}),{get(){return o(),n.get?n.get(c):c},set(e){let o=n.set?n.set(e):e;if(!me(o,c)&&!(l!==m&&me(e,l)))return;let d=r.vnode.props,f=!!(d&&(t in d||i in d||a in d)&&(`onUpdate:${t}`in d||`onUpdate:${i}`in d||`onUpdate:${a}`in d));f||(c=e,s()),r.emit(`update:${t}`,o),me(e,l)&&(me(e,o)&&!me(o,u)||f&&l!==m&&!me(o,c))&&s(),l=e,u=o}}});return s[Symbol.iterator]=()=>{let e=0;return{next(){return e<2?{value:e++?o||m:s,done:!1}:{done:!0}}}},s}var Zi=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${j(t)}Modifiers`]||e[`${de(t)}Modifiers`];function Qi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||m,i=n,a=t.startsWith(`update:`),o=a&&Zi(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>k(e)?e.trim():e)),o.number&&(i=n.map(_e)));let s,c=r[s=pe(t)]||r[s=pe(j(t))];!c&&a&&(c=r[s=pe(de(t))]),c&&Nn(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Nn(l,e,6,i)}}var $i=new WeakMap;function ea(e,t,n=!1){let r=n?$i:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!O(e)){let r=e=>{let n=ea(e,t,!0);n&&(s=!0,b(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(A(e)&&r.set(e,null),null):(w(a)?a.forEach(e=>o[e]=null):b(o,a),A(e)&&r.set(e,o),o)}function ta(e,t){return!e||!v(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),C(e,t[0].toLowerCase()+t.slice(1))||C(e,de(t))||C(e,t))}function na(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,g=er(e),_,v;try{if(n.shapeFlag&4){let e=i||r,t=e;_=lo(l.call(t,e,u,d,p,f,m)),v=s}else{let e=t;_=lo(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),v=t.props?s:ra(s)}}catch(t){Wa.length=0,Pn(t,e,1),_=U(Ha)}let b=_;if(v&&h!==!1){let e=Object.keys(v),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(y)&&(v=ia(v,a)),b=ao(b,v,!1,!0))}return n.dirs&&(b=ao(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Or(b,n.transition),_=b,er(g),_}var ra=e=>{let t;for(let n in e)(n===`class`||n===`style`||v(n))&&((t||={})[n]=e[n]);return t},ia=(e,t)=>{let n={};for(let r in e)(!y(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function aa(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oa(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(sa(o,r,n)&&!ta(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?oa(r,o,l):!0:!!o;return!1}function oa(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(sa(t,e,a)&&!ta(n,a))return!0}return!1}function sa(e,t,n){let r=e[n],i=t[n];return n===`style`&&A(r)&&A(i)?!je(r,i):r!==i}function ca({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var la={},ua=()=>Object.create(la),da=e=>Object.getPrototypeOf(e)===la;function fa(e,t,n,r=!1){let i={},a=ua();e.propsDefaults=Object.create(null),ma(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:$t(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function pa(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(ta(e.emitsOptions,o))continue;let u=t[o];if(c)if(C(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=j(o);i[t]=ha(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{ma(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!C(t,a)&&((r=de(a))===a||!C(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ha(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!C(t,e))&&(delete a[e],l=!0)}l&&ht(e.attrs,`set`,``)}function ma(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(se(c))continue;let l=t[c],u;i&&C(i,u=j(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:ta(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=N(n),r=s||m;for(let o=0;o<a.length;o++){let s=a[o];n[s]=ha(i,t,s,r[s],e,!C(r,s))}}return o}function ha(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=C(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&O(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=So(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===de(n))&&(r=!0))}return r}var ga=new WeakMap;function _a(e,t,n=!1){let r=n?ga:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!O(e)){let r=e=>{c=!0;let[n,r]=_a(e,t,!0);b(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return A(e)&&r.set(e,h),h;if(w(a))for(let e=0;e<a.length;e++){let t=j(a[e]);va(t)&&(o[t]=m)}else if(a)for(let e in a){let t=j(e);if(va(t)){let n=a[e],r=o[t]=w(n)||O(n)?{type:n}:b({},n),i=r.type,c=!1,l=!0;if(w(i))for(let e=0;e<i.length;++e){let t=i[e],n=O(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=O(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||C(r,`default`))&&s.push(t)}}let l=[o,s];return A(e)&&r.set(e,l),l}function va(e){return e[0]!==`$`&&!se(e)}var ya=e=>e===`_`||e===`_ctx`||e===`$stable`,ba=e=>w(e)?e.map(lo):[lo(e)],xa=(e,t,n)=>{if(t._n)return t;let r=tr((...e)=>ba(t(...e)),n);return r._c=!1,r},Sa=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ya(n))continue;let i=e[n];if(O(i))t[n]=xa(n,i,r);else if(i!=null){let e=ba(i);t[n]=()=>e}}},Ca=(e,t)=>{let n=ba(t);e.slots.default=()=>n},wa=(e,t,n)=>{for(let r in t)(n||!ya(r))&&(e[r]=t[r])},Ta=(e,t,n)=>{let r=e.slots=ua();if(e.vnode.shapeFlag&32){let e=t._;e?(wa(r,t,n),n&&ge(r,`_`,e,!0)):Sa(t,r)}else t&&Ca(e,t)},Ea=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=m;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:wa(i,t,n):(a=!t.$stable,Sa(t,i)),o=t}else t&&(Ca(e,t),o={default:1});if(a)for(let e in i)!ya(e)&&o[e]==null&&delete i[e]},Da=za;function Oa(e){return ka(e,Ur)}function ka(e,t){let n=be();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=g,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!$a(e,t)&&(r=ge(e),ue(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Va:y(e,t,n,r);break;case Ha:b(e,t,n,r);break;case Ua:e??x(t,n,r,o);break;case Ba:A(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?te(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,ye)}u!=null&&i?Fr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Fr(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=f(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&D(e.children,f,null,i,s,Aa(e,c),l,d),_&&rr(e,null,i,`created`),E(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!se(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&mo(p,i,e)}_&&rr(e,null,i,`beforeMount`);let v=Ma(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&Da(()=>{try{p&&mo(p,i,e),v&&g.enter(f),_&&rr(e,null,i,`mounted`)}finally{}},s)},E=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let t=0;t<r.length;t++)p(e,r[t]);if(i){let n=i.subTree;if(t===n||Ra(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?uo(e[l]):lo(e[l]);v(null,c,t,n,r,i,a,o,s)}},O=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=e.patchFlag&16;let p=e.props||m,h=t.props||m,g;if(n&&ja(n,!1),(g=h.onVnodeBeforeUpdate)&&mo(g,n,t,e),f&&rr(t,e,n,`beforeUpdate`),n&&ja(n,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(l=0,s=!1,d=null),(p.innerHTML&&h.innerHTML==null||p.textContent&&h.textContent==null)&&u(c,``),d?k(e.dynamicChildren,d,c,n,r,Aa(t,i),o):s||oe(e,t,c,null,n,r,Aa(t,i),o,!1),l>0){if(l&16)ee(c,p,h,n,i);else if(l&2&&p.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,p.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=p[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&d==null&&ee(c,p,h,n,i);((g=h.onVnodeUpdated)||f)&&Da(()=>{g&&mo(g,n,t,e),f&&rr(t,e,n,`updated`)},r)},k=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===Ba||!$a(c,l)||c.shapeFlag&198)?d(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},ee=(e,t,n,r,i)=>{if(t!==n){if(t!==m)for(let o in t)!se(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(se(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},A=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(k(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Na(e,t,!0)):oe(e,t,n,f,a,o,c,l,u)},te=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ne(t,n,r,i,a,o,c):re(e,t,c)},ne=(e,t,n,r,i,a,o)=>{let s=e.component=_o(e,r,i);if(ti(e)&&(s.ctx.renderer=ye),Eo(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ie,o),!e.el){let r=s.subTree=U(Ha);b(null,r,t,n),e.placeholder=r.el}}else ie(s,e,t,n,i,a,o)},re=(e,t,n)=>{let r=t.component=e.component;if(aa(e,t,n))if(r.asyncDep&&!r.asyncResolved){ae(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ie=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Fa(e);if(n){t&&(t.el=c.el,ae(e,t,o)),n.asyncDep.then(()=>{Da(()=>{e.isUnmounted||l()},i)});return}}let u=t,f;ja(e,!1),t?(t.el=c.el,ae(e,t,o)):t=c,n&&he(n),(f=t.props&&t.props.onVnodeBeforeUpdate)&&mo(f,s,t,c),ja(e,!0);let p=na(e),m=e.subTree;e.subTree=p,v(m,p,d(m.el),ge(m),e,i,a),t.el=p.el,u===null&&ca(e,p.el),r&&Da(r,i),(f=t.props&&t.props.onVnodeUpdated)&&Da(()=>mo(f,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Qr(t);if(ja(e,!1),l&&he(l),!m&&(o=c&&c.onVnodeBeforeMount)&&mo(o,d,t),ja(e,!0),s&&Se){let t=()=>{e.subTree=na(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=na(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Da(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Da(()=>mo(o,d,e),i)}(t.shapeFlag&256||d&&Qr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Da(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new He(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>Gn(u),ja(e,!0),l()},ae=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,pa(e,t.props,r,n),Ea(e,t.children,n),rt(),Jn(e),it()},oe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){le(l,f,n,r,i,a,o,s,c);return}else if(p&256){ce(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&me(l,i,a),f!==l&&u(n,f)):d&16?m&16?le(l,f,n,r,i,a,o,s,c):me(l,i,a,!0):(d&8&&u(n,``),m&16&&D(f,n,r,i,a,o,s,c))},ce=(e,t,n,r,i,a,o,s,c)=>{e||=h,t||=h;let l=e.length,u=t.length,d=Math.min(l,u),f;for(f=0;f<d;f++){let r=t[f]=c?uo(t[f]):lo(t[f]);v(e[f],r,n,null,i,a,o,s,c)}l>u?me(e,i,a,!0,!1,d):D(t,n,r,i,a,o,s,c,d)},le=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,f=u-1;for(;l<=d&&l<=f;){let r=e[l],u=t[l]=c?uo(t[l]):lo(t[l]);if($a(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=f;){let r=e[d],l=t[f]=c?uo(t[f]):lo(t[f]);if($a(r,l))v(r,l,n,null,i,a,o,s,c);else break;d--,f--}if(l>d){if(l<=f){let e=f+1,d=e<u?t[e].el:r;for(;l<=f;)v(null,t[l]=c?uo(t[l]):lo(t[l]),n,d,i,a,o,s,c),l++}}else if(l>f)for(;l<=d;)ue(e[l],i,a,!0),l++;else{let p=l,m=l,g=new Map;for(l=m;l<=f;l++){let e=t[l]=c?uo(t[l]):lo(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=f-m+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=p;l<=d;l++){let r=e[l];if(y>=b){ue(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=m;_<=f;_++)if(C[_-m]===0&&$a(r,t[_])){u=_;break}u===void 0?ue(r,i,a,!0):(C[u-m]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?Pa(C):h;for(_=w.length-1,l=b-1;l>=0;l--){let e=m+l,d=t[e],f=t[e+1],p=e+1<u?f.el||La(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?j(d,n,p,2):_--)}}},j=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){j(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,ye);return}if(c===Ba){r(s,t,n);for(let e=0;e<u.length;e++)j(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Ua){S(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.persisted&&!s[hr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),Da(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[hr];s._isLeaving&&s[hr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},ue=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(rt(),Fr(s,null,n,e,!0),it()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Qr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&mo(_,t,e),u&6)pe(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&rr(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,ye,r):l&&!l.hasOnce&&(a!==Ba||d>0&&d&64)?me(l,t,n,!1,!0):(a===Ba&&d&384||!i&&u&16)&&me(c,t,n),r&&de(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Da(()=>{_&&mo(_,t,e),h&&rr(e,null,t,`unmounted`),v&&(e.el=null)},n)},de=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===Ba){fe(n,r);return}if(t===Ua){C(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},fe=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},pe=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ia(c),Ia(l),r&&he(r),i.stop(),a&&(a.flags|=8,ue(o,e,t,n)),s&&Da(s,t),Da(()=>{e.isUnmounted=!0},t)},me=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)ue(e[o],t,n,r,i)},ge=e=>{if(e.shapeFlag&6)return ge(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=f(e.anchor||e.el),n=t&&t[pr];return n?f(n):t},_e=!1,ve=(e,t,n)=>{let r;e==null?t._vnode&&(ue(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,_e||=(_e=!0,Jn(r),Yn(),!1)},ye={p:v,um:ue,m:j,r:de,mt:ne,mc:D,pc:oe,pbc:k,n:ge,o:e},xe,Se;return t&&([xe,Se]=t(ye)),{render:ve,hydrate:xe,createApp:Ji(ve,xe)}}function Aa({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function ja({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ma(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Na(e,t,n=!1){let r=e.children,i=t.children;if(w(r)&&w(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=uo(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Na(t,a)),a.type===Va&&(a.patchFlag===-1&&(a=i[e]=uo(a)),a.el=t.el),a.type===Ha&&!a.el&&(a.el=t.el)}}function Pa(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Fa(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fa(t)}function Ia(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function La(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?La(t.subTree):null}var Ra=e=>e.__isSuspense;function za(e,t){t&&t.pendingBranch?w(e)?t.effects.push(...e):t.effects.push(e):qn(e)}var Ba=Symbol.for(`v-fgt`),Va=Symbol.for(`v-txt`),Ha=Symbol.for(`v-cmt`),Ua=Symbol.for(`v-stc`),Wa=[],Ga=null;function H(e=!1){Wa.push(Ga=e?null:[])}function Ka(){Wa.pop(),Ga=Wa[Wa.length-1]||null}var qa=1;function Ja(e,t=!1){qa+=e,e<0&&Ga&&t&&(Ga.hasOnce=!0)}function Ya(e){return e.dynamicChildren=qa>0?Ga||h:null,Ka(),qa>0&&Ga&&Ga.push(e),e}function Xa(e,t,n,r,i,a){return Ya(no(e,t,n,r,i,a,!0))}function Za(e,t,n,r,i){return Ya(U(e,t,n,r,i,!0))}function Qa(e){return e?e.__v_isVNode===!0:!1}function $a(e,t){return e.type===t.type&&e.key===t.key}var eo=({key:e})=>e??null,to=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:k(e)||dn(e)||O(e)?{i:Qn,r:e,k:t,f:!!n}:e);function no(e,t=null,n=null,r=0,i=null,a=e===Ba?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&eo(t),ref:t&&to(t),scopeId:$n,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qn};return s?(fo(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=k(n)?8:16),qa>0&&!o&&Ga&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Ga.push(c),c}var U=ro;function ro(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===vi)&&(e=Ha),Qa(e)){let r=ao(e,t,!0);return n&&fo(r,n),qa>0&&!a&&Ga&&(r.shapeFlag&6?Ga[Ga.indexOf(e)]=r:Ga.push(r)),r.patchFlag=-2,r}if(Io(e)&&(e=e.__vccOpts),t){t=io(t);let{class:e,style:n}=t;e&&!k(e)&&(t.class=Ee(e)),A(n)&&(sn(n)&&!w(n)&&(n=b({},n)),t.style=xe(n))}let o=k(e)?1:Ra(e)?128:mr(e)?64:A(e)?4:O(e)?2:0;return no(e,t,n,r,i,o,a,!0)}function io(e){return e?sn(e)||da(e)?b({},e):e:null}function ao(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?po(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&eo(l),ref:t&&t.ref?n&&a?w(a)?a.concat(to(t)):[a,to(t)]:to(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ba?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ao(e.ssContent),ssFallback:e.ssFallback&&ao(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Or(u,c.clone(u)),u}function oo(e=` `,t=0){return U(Va,null,e,t)}function so(e,t){let n=U(Ua,null,e);return n.staticCount=t,n}function co(e=``,t=!1){return t?(H(),Za(Ha,null,e)):U(Ha,null,e)}function lo(e){return e==null||typeof e==`boolean`?U(Ha):w(e)?U(Ba,null,e.slice()):Qa(e)?uo(e):U(Va,null,String(e))}function uo(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ao(e)}function fo(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(w(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),fo(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!da(t)?t._ctx=Qn:r===3&&Qn&&(Qn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(O(t)){if(r&65){fo(e,{default:t});return}t={default:t,_ctx:Qn},n=32}else t=String(t),r&64?(n=16,t=[oo(t)]):n=8;e.children=t,e.shapeFlag|=n}function po(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=Ee([t.class,r.class]));else if(e===`style`)t.style=xe([t.style,r.style]);else if(v(e)){let n=t[e],i=r[e];i&&n!==i&&!(w(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!y(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function mo(e,t,n,r=null){Nn(e,t,7,[n,r])}var ho=Ki(),go=0;function _o(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||ho,a={uid:go++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Re(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_a(r,i),emitsOptions:ea(r,i),emit:null,emitted:null,propsDefaults:m,inheritAttrs:r.inheritAttrs,ctx:m,data:m,props:m,attrs:m,slots:m,refs:m,setupState:m,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Qi.bind(null,a),e.ce&&e.ce(a),a}var vo=null,yo=()=>vo||Qn,bo,xo;{let e=be(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};bo=t(`__VUE_INSTANCE_SETTERS__`,e=>vo=e),xo=t(`__VUE_SSR_SETTERS__`,e=>To=e)}var So=e=>{let t=vo;return bo(e),e.scope.on(),()=>{e.scope.off(),bo(t)}},Co=()=>{vo&&vo.scope.off(),bo(null)};function wo(e){return e.vnode.shapeFlag&4}var To=!1;function Eo(e,t=!1,n=!1){t&&xo(t);let{props:r,children:i}=e.vnode,a=wo(e);fa(e,r,a,t),Ta(e,i,n||t);let o=a?Do(e,t):void 0;return t&&xo(!1),o}function Do(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Oi);let{setup:r}=n;if(r){rt();let n=e.setupContext=r.length>1?No(e):null,i=So(e),a=Mn(r,e,0,[e.props,n]),o=te(a);if(it(),i(),(o||e.sp)&&!Qr(e)&&jr(e),o){if(a.then(Co,Co),t)return a.then(n=>{Oo(e,n,t)}).catch(t=>{Pn(t,e,0)});e.asyncDep=a}else Oo(e,a,t)}else jo(e,t)}function Oo(e,t,n){O(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:A(t)&&(e.setupState=gn(t)),jo(e,n)}var ko,Ao;function jo(e,t,n){let r=e.type;if(!e.render){if(!t&&ko&&!r.render){let t=r.template||Ii(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ko(t,b(b({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||g,Ao&&Ao(e)}{let t=So(e);rt();try{Mi(e)}finally{it(),t()}}}var Mo={get(e,t){return mt(e,`get`,``),e[t]}};function No(e){return{attrs:new Proxy(e.attrs,Mo),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Po(e){return e.exposed?e.exposeProxy||=new Proxy(gn(cn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ei)return Ei[n](e)},has(e,t){return t in e||t in Ei}}):e.proxy}function Fo(e,t=!0){return O(e)?e.displayName||e.name:e.name||t&&e.__name}function Io(e){return O(e)&&`__vccOpts`in e}var W=(e,t)=>Tn(e,t,To);function G(e,t,n){try{Ja(-1);let r=arguments.length;return r===2?A(t)&&!w(t)?Qa(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qa(n)&&(n=[n]),U(e,t,n))}finally{Ja(1)}}var Lo=`3.5.39`,Ro=void 0,zo=typeof window<`u`&&window.trustedTypes;if(zo)try{Ro=zo.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Bo=Ro?e=>Ro.createHTML(e):e=>e,Vo=`http://www.w3.org/2000/svg`,Ho=`http://www.w3.org/1998/Math/MathML`,Uo=typeof document<`u`?document:null,Wo=Uo&&Uo.createElement(`template`),Go={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Uo.createElementNS(Vo,e):t===`mathml`?Uo.createElementNS(Ho,e):n?Uo.createElement(e,{is:n}):Uo.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Uo.createTextNode(e),createComment:e=>Uo.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Uo.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Wo.innerHTML=Bo(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Wo.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ko=`transition`,qo=`animation`,Jo=Symbol(`_vtc`),Yo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xo=b({},yr,Yo),Zo=(e=>(e.displayName=`Transition`,e.props=Xo,e))((e,{slots:t})=>G(Cr,es(e),t)),Qo=(e,t=[])=>{w(e)?e.forEach(e=>e(...t)):e&&e(...t)},$o=e=>e?w(e)?e.some(e=>e.length>1):e.length>1:!1;function es(e){let t={};for(let n in e)n in Yo||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:l=o,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=ts(i),h=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:y,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=_,onAppear:w=v,onAppearCancelled:T=y}=t,E=(e,t,n,r)=>{e._enterCancelled=r,is(e,t?u:s),is(e,t?l:o),n&&n()},D=(e,t)=>{e._isLeaving=!1,is(e,d),is(e,p),is(e,f),t&&t()},O=e=>(t,n)=>{let i=e?w:v,o=()=>E(t,e,n);Qo(i,[t,o]),as(()=>{is(t,e?c:a),rs(t,e?u:s),$o(i)||ss(t,r,h,o)})};return b(t,{onBeforeEnter(e){Qo(_,[e]),rs(e,a),rs(e,o)},onBeforeAppear(e){Qo(C,[e]),rs(e,c),rs(e,l)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>D(e,t);rs(e,d),e._enterCancelled?(rs(e,f),ds(e)):(ds(e),rs(e,f)),as(()=>{e._isLeaving&&(is(e,d),rs(e,p),$o(x)||ss(e,r,g,n))}),Qo(x,[e,n])},onEnterCancelled(e){E(e,!1,void 0,!0),Qo(y,[e])},onAppearCancelled(e){E(e,!0,void 0,!0),Qo(T,[e])},onLeaveCancelled(e){D(e),Qo(S,[e])}})}function ts(e){if(e==null)return null;if(A(e))return[ns(e.enter),ns(e.leave)];{let t=ns(e);return[t,t]}}function ns(e){return ve(e)}function rs(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Jo]||(e[Jo]=new Set)).add(t)}function is(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Jo];n&&(n.delete(t),n.size||(e[Jo]=void 0))}function as(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var os=0;function ss(e,t,n,r){let i=e._endId=++os,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=cs(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function cs(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Ko}Delay`),a=r(`${Ko}Duration`),o=ls(i,a),s=r(`${qo}Delay`),c=r(`${qo}Duration`),l=ls(s,c),u=null,d=0,f=0;t===Ko?o>0&&(u=Ko,d=o,f=a.length):t===qo?l>0&&(u=qo,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Ko:qo:null,f=u?u===Ko?a.length:c.length:0);let p=u===Ko&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ko}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function ls(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>us(t)+us(e[n])))}function us(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function ds(e){return(e?e.ownerDocument:document).body.offsetHeight}function fs(e,t,n){let r=e[Jo];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ps=Symbol(`_vod`),ms=Symbol(`_vsh`),hs={name:`show`,beforeMount(e,{value:t},{transition:n}){e[ps]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):gs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),gs(e,!0),r.enter(e)):r.leave(e,()=>{gs(e,!1)}):gs(e,t))},beforeUnmount(e,{value:t}){gs(e,t)}};function gs(e,t){e.style.display=t?e[ps]:`none`,e[ms]=!t}var _s=Symbol(``),vs=/(?:^|;)\s*display\s*:/;function ys(e,t,n){let r=e.style,i=k(n),a=!1;if(n&&!i){if(t)if(k(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??xs(r,t,``)}else for(let e in t)n[e]??xs(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?xs(r,i,``):Ts(e,i,!k(t)&&t?t[i]:void 0,o)||xs(r,i,o)}}else if(i){if(t!==n){let e=r[_s];e&&(n+=`;`+e),r.cssText=n,a=vs.test(n)}}else t&&e.removeAttribute(`style`);ps in e&&(e[ps]=a?r.display:``,e[ms]&&(r.display=`none`))}var bs=/\s*!important$/;function xs(e,t,n){if(w(n))n.forEach(n=>xs(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ws(e,t);bs.test(n)?e.setProperty(de(r),n.replace(bs,``),`important`):e[r]=n}}var Ss=[`Webkit`,`Moz`,`ms`],Cs={};function ws(e,t){let n=Cs[t];if(n)return n;let r=j(t);if(r!==`filter`&&r in e)return Cs[t]=r;r=fe(r);for(let n=0;n<Ss.length;n++){let i=Ss[n]+r;if(i in e)return Cs[t]=i}return t}function Ts(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&k(r)&&n===r}var Es=`http://www.w3.org/1999/xlink`;function Ds(e,t,n,r,i,a=Oe(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Es,t.slice(6,t.length)):e.setAttributeNS(Es,t,n):n==null||a&&!ke(n)?e.removeAttribute(t):e.setAttribute(t,a?``:ee(n)?String(n):n)}function Os(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Bo(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ke(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function ks(e,t,n,r){e.addEventListener(t,n,r)}function As(e,t,n,r){e.removeEventListener(t,n,r)}var js=Symbol(`_vei`);function Ms(e,t,n,r,i=null){let a=e[js]||(e[js]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Fs(t);r?ks(e,n,a[t]=zs(r,i),s):o&&(As(e,n,o,s),a[t]=void 0)}}var Ns=/(Once|Passive|Capture)$/,Ps=/^on:?(?:Once|Passive|Capture)$/;function Fs(e){let t,n;for(;(n=e.match(Ns))&&!Ps.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):de(e.slice(2)),t]}var Is=0,Ls=Promise.resolve(),Rs=()=>Is||=(Ls.then(()=>Is=0),Date.now());function zs(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(w(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&Nn(e,t,5,a)}}else Nn(r,t,5,[e])};return n.value=e,n.attached=Rs(),n}var Bs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Vs=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?fs(e,r,o):t===`style`?ys(e,n,r):v(t)?y(t)||Ms(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Hs(e,t,r,o))?(Os(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ds(e,t,r,o,a,t!==`value`)):e._isVueCE&&(Us(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!k(r)))?Os(e,j(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ds(e,t,r,o))};function Hs(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Bs(t)&&O(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Bs(t)&&k(n)?!1:t in e}function Us(e,t){let n=e._def.props;if(!n)return!1;let r=j(t);return Array.isArray(n)?n.some(e=>j(e)===r):Object.keys(n).some(e=>j(e)===r)}var Ws=new WeakMap,Gs=new WeakMap,Ks=Symbol(`_moveCb`),qs=Symbol(`_enterCb`),Js=(e=>(delete e.props.mode,e))({name:`TransitionGroup`,props:b({},Xo,{tag:String,moveClass:String}),setup(e,{slots:t}){let n=yo(),r=_r(),i,a;return ui(()=>{if(!i.length)return;let t=e.moveClass||`${e.name||`v`}-move`;if(!$s(i[0].el,n.vnode.el,t)){i=[];return}i.forEach(Ys),i.forEach(Xs);let r=i.filter(Zs);ds(n.vnode.el),r.forEach(e=>{let n=e.el,r=n.style;rs(n,t),r.transform=r.webkitTransform=r.transitionDuration=``;let i=n[Ks]=e=>{e&&e.target!==n||(!e||e.propertyName.endsWith(`transform`))&&(n.removeEventListener(`transitionend`,i),n[Ks]=null,is(n,t))};n.addEventListener(`transitionend`,i)}),i=[]}),()=>{let o=N(e),s=es(o),c=o.tag||Ba;if(i=[],a)for(let e=0;e<a.length;e++){let t=a[e];t.el&&t.el instanceof Element&&!t.el[ms]&&(i.push(t),Or(t,Tr(t,s,r,n)),Ws.set(t,Qs(t.el)))}a=t.default?kr(t.default()):[];for(let e=0;e<a.length;e++){let t=a[e];t.key!=null&&Or(t,Tr(t,s,r,n))}return U(c,null,a)}}});function Ys(e){let t=e.el;t[Ks]&&t[Ks](),t[qs]&&t[qs]()}function Xs(e){Gs.set(e,Qs(e.el))}function Zs(e){let t=Ws.get(e),n=Gs.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el,n=t.style,a=t.getBoundingClientRect(),o=1,s=1;return t.offsetWidth&&(o=a.width/t.offsetWidth),t.offsetHeight&&(s=a.height/t.offsetHeight),(!Number.isFinite(o)||o===0)&&(o=1),(!Number.isFinite(s)||s===0)&&(s=1),Math.abs(o-1)<.01&&(o=1),Math.abs(s-1)<.01&&(s=1),n.transform=n.webkitTransform=`translate(${r/o}px,${i/s}px)`,n.transitionDuration=`0s`,e}}function Qs(e){let t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function $s(e,t,n){let r=e.cloneNode(),i=e[Jo];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display=`none`;let a=t.nodeType===1?t:t.parentNode;a.appendChild(r);let{hasTransform:o}=cs(r);return a.removeChild(r),o}var ec=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return w(t)?e=>he(t,e):t};function tc(e){e.target.composing=!0}function nc(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var rc=Symbol(`_assign`);function ic(e,t,n){return t&&(e=e.trim()),n&&(e=_e(e)),e}var ac={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[rc]=ec(i);let a=r||i.props&&i.props.type===`number`;ks(e,t?`change`:`input`,t=>{t.target.composing||e[rc](ic(e.value,n,a))}),(n||a)&&ks(e,`change`,()=>{e.value=ic(e.value,n,a)}),t||(ks(e,`compositionstart`,tc),ks(e,`compositionend`,nc),ks(e,`change`,nc))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[rc]=ec(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?_e(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},oc={deep:!0,created(e,t,n){e[rc]=ec(n),ks(e,`change`,()=>{let t=e._modelValue,n=dc(e),r=e.checked,i=e[rc];if(w(t)){let e=Me(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(E(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(fc(e,r))})},mounted:sc,beforeUpdate(e,t,n){e[rc]=ec(n),sc(e,t,n)}};function sc(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(w(t))i=Me(t,r.props.value)>-1;else if(E(t))i=t.has(r.props.value);else{if(t===n)return;i=je(t,fc(e,!0))}e.checked!==i&&(e.checked=i)}var cc={created(e,{value:t},n){e.checked=je(t,n.props.value),e[rc]=ec(n),ks(e,`change`,()=>{e[rc](dc(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[rc]=ec(r),t!==n&&(e.checked=je(t,r.props.value))}},lc={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=E(t);ks(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?_e(dc(e)):dc(e));e[rc](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,Un(()=>{e._assigning=!1})}),e[rc]=ec(r)},mounted(e,{value:t}){uc(e,t)},beforeUpdate(e,t,n){e[rc]=ec(n)},updated(e,{value:t}){e._assigning||uc(e,t)}};function uc(e,t){let n=e.multiple,r=w(t);if(!(n&&!r&&!E(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=dc(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=Me(t,o)>-1}else a.selected=t.has(o);else if(je(dc(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function dc(e){return`_value`in e?e._value:e.value}function fc(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var pc={created(e,t,n){hc(e,t,n,null,`created`)},mounted(e,t,n){hc(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){hc(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){hc(e,t,n,r,`updated`)}};function mc(e,t){switch(e){case`SELECT`:return lc;case`TEXTAREA`:return ac;default:switch(t){case`checkbox`:return oc;case`radio`:return cc;default:return ac}}}function hc(e,t,n,r,i){let a=mc(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}var gc=[`ctrl`,`shift`,`alt`,`meta`],_c={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>gc.some(n=>e[`${n}Key`]&&!t.includes(n))},vc=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=_c[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},yc={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},bc=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=de(n.key);if(t.some(e=>e===r||yc[e]===r))return e(n)}))},xc=b({patchProp:Vs},Go),Sc,Cc=!1;function wc(){return Sc=Cc?Sc:Oa(xc),Cc=!0,Sc}var Tc=((...e)=>{let t=wc().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=Dc(e);if(t)return n(t,!0,Ec(t))},t});function Ec(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Dc(e){return k(e)?document.querySelector(e):e}var Oc=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith(`//`),kc=/.md((\?|#).*)?$/,Ac=(e,t=`/`)=>Oc(e)||e.startsWith(`/`)&&!e.startsWith(t)&&!kc.test(e),jc=e=>/^(https?:)?\/\//.test(e),Mc=e=>{if(!e||e.endsWith(`/`))return e;let t=e.replace(/(^|\/)README.md$/i,`$1index.html`);return t.endsWith(`.md`)?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(`.html`)||(t=`${t}.html`),t.endsWith(`/index.html`)&&(t=t.substring(0,t.length-10)),t},Nc=`http://.`,Pc=(e,t)=>{if(!e.startsWith(`/`)&&t){let n=t.slice(0,t.lastIndexOf(`/`));return Mc(new URL(`${n}/${e}`,Nc).pathname)}return Mc(e)},Fc=(e,t)=>{let n=Object.keys(e).sort((e,t)=>{let n=t.split(`/`).length-e.split(`/`).length;return n===0?t.length-e.length:n});for(let e of n)if(t.startsWith(e))return e;return`/`},Ic=(e,t=`/`)=>{let n=e.replace(/^(?:https?:)?\/\/[^/]*/,``);return n.startsWith(t)?`/${n.slice(t.length)}`:n},Lc=/(#|\?)/,Rc=e=>{let[t,...n]=e.split(Lc);return{pathname:t,hashAndQueries:n.join(``)}},zc=[`link`,`meta`,`script`,`style`,`noscript`,`template`],Bc=[`title`,`base`],Vc=([e,t,n])=>Bc.includes(e)?e:zc.includes(e)?e===`meta`&&t.name?`${e}.${t.name}`:e===`template`&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([e,t])=>typeof t==`boolean`?t?[e,``]:null:[e,t]).filter(e=>e!=null).sort(([e],[t])=>e.localeCompare(t)),n]):null,Hc=e=>{let t=new Set,n=[];return e.forEach(e=>{let r=Vc(e);r&&!t.has(r)&&(t.add(r),n.push(e))}),n},Uc=e=>e.startsWith(`/`)?e:`/${e}`,Wc=e=>e.endsWith(`/`)||e.endsWith(`.html`)?e:`${e}/`,Gc=e=>e.endsWith(`/`)?e.slice(0,-1):e,Kc=e=>e.startsWith(`/`)?e.slice(1):e,qc=e=>typeof e==`function`,Jc=e=>Object.prototype.toString.call(e)===`[object Object]`,K=e=>typeof e==`string`,Yc=typeof document<`u`;function Xc(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Zc(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Xc(e.default)}var q=Object.assign;function Qc(e,t){let n={};for(let r in t){let i=t[r];n[r]=el(i)?i.map(e):e(i)}return n}var $c=()=>{},el=Array.isArray;function tl(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var nl=Symbol(``);function rl(e,t){return q(Error(),{type:e,[nl]:!0},t)}function il(e,t){return e instanceof Error&&nl in e&&(t==null||!!(e.type&t))}var al=Symbol(``),ol=Symbol(``),sl=Symbol(``),cl=Symbol(``),ll=Symbol(``);function ul(){return L(sl)}function dl(e){return L(cl)}var fl=/#/g,pl=/&/g,ml=/\//g,hl=/=/g,gl=/\?/g,_l=/\+/g,vl=/%5B/g,yl=/%5D/g,bl=/%5E/g,xl=/%60/g,Sl=/%7B/g,Cl=/%7C/g,wl=/%7D/g,Tl=/%20/g;function El(e){return e==null?``:encodeURI(``+e).replace(Cl,`|`).replace(vl,`[`).replace(yl,`]`)}function Dl(e){return El(e).replace(Sl,`{`).replace(wl,`}`).replace(bl,`^`)}function Ol(e){return El(e).replace(_l,`%2B`).replace(Tl,`+`).replace(fl,`%23`).replace(pl,`%26`).replace(xl,"`").replace(Sl,`{`).replace(wl,`}`).replace(bl,`^`)}function kl(e){return Ol(e).replace(hl,`%3D`)}function Al(e){return El(e).replace(fl,`%23`).replace(gl,`%3F`)}function jl(e){return Al(e).replace(ml,`%2F`)}function Ml(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var Nl=/\/$/,Pl=e=>e.replace(Nl,``);function Fl(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Ul(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:Ml(o)}}function Il(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Ll(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Rl(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&zl(t.matched[r],n.matched[i])&&Bl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zl(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Bl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Vl(e[n],t[n]))return!1;return!0}function Vl(e,t){return el(e)?Hl(e,t):el(t)?Hl(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function Hl(e,t){return el(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Ul(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Wl={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function Gl(e){if(!e)if(Yc){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),Pl(e)}var Kl=/^[^#]+#/;function ql(e,t){return e.replace(Kl,`#`)+t}function Jl(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Yl=()=>({left:window.scrollX,top:window.scrollY});function Xl(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Jl(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Zl(e,t){return(history.state?history.state.position-t:-1)+e}var Ql=new Map;function $l(e,t){Ql.set(e,t)}function eu(e){let t=Ql.get(e);return Ql.delete(e),t}function tu(e){return typeof e==`string`||e&&typeof e==`object`}function nu(e){return typeof e==`string`||typeof e==`symbol`}function ru(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(_l,` `),i=r.indexOf(`=`),a=Ml(i<0?r:r.slice(0,i)),o=i<0?null:Ml(r.slice(i+1));if(a in t){let e=t[a];el(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function iu(e){let t=``;for(let n in e){let r=e[n];if(n=kl(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(el(r)?r.map(e=>e&&Ol(e)):[r&&Ol(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function au(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=el(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function ou(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function su(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(rl(4,{from:n,to:t})):e instanceof Error?c(e):tu(e)?c(rl(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function cu(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Xc(s)){let c=(s.__vccOpts||s)[t];c&&a.push(su(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Zc(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&su(c,n,r,o,e,i)()}))}}return a}function lu(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>zl(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>zl(e,s))||i.push(s))}return[n,r,i]}var uu=()=>location.protocol+`//`+location.host;function du(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Ll(n,``)}return Ll(n,e)+r+i}function fu(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=du(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(q({},e.state,{scroll:Yl()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function pu(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Yl():null}}function mu(e){let{history:t,location:n}=window,r={value:du(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:uu()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,q({},t.state,pu(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=q({},i.value,t.state,{forward:e,scroll:Yl()});a(o.current,o,!0),a(e,q({},pu(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function hu(e){e=Gl(e);let t=mu(e),n=fu(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=q({location:``,base:e,go:r,createHref:ql.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var gu={type:0,value:``},_u=/[a-zA-Z0-9_]/;function vu(e){if(!e)return[[]];if(e===`/`)return[[gu]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:_u.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var yu=`[^/]+?`,bu={sensitive:!1,strict:!1,start:!0,end:!0},xu=/[.+*?^${}()[\]/\\]/g;function Su(e,t){let n=q({},bu,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(xu,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||yu;if(u!==yu){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(el(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=el(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function Cu(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function wu(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=Cu(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Tu(r))return 1;if(Tu(i))return-1}return i.length-r.length}function Tu(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Eu={strict:!1,end:!0,sensitive:!1};function Du(e,t,n){let r=q(Su(vu(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ou(e,t){let n=[],r=new Map;t=tl(Eu,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Au(e);s.aliasOf=r&&r.record;let l=tl(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Au(q({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Du(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!Mu(d)&&o(e.name)),Iu(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:$c}function o(e){if(nu(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=Pu(e,n);n.splice(t,0,e),e.record.name&&!Mu(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw rl(1,{location:e});s=i.record.name,a=q(ku(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&ku(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw rl(1,{location:e,currentLocation:t});s=i.record.name,a=q({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Nu(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function ku(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Au(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ju(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function Mu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Nu(e){return e.reduce((e,t)=>q(e,t.meta),{})}function Pu(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;wu(e,t[i])<0?r=i:n=i+1}let i=Fu(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Fu(e){let t=e;for(;t=t.parent;)if(Iu(t)&&wu(e,t)===0)return t}function Iu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Lu(e){let t=L(sl),n=L(cl),r=W(()=>{let n=mn(e.to);return t.resolve(n)}),i=W(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(zl.bind(null,i));if(o>-1)return o;let s=Hu(e[t-2]);return t>1&&Hu(i)===s&&a[a.length-1].path!==s?a.findIndex(zl.bind(null,e[t-2])):o}),a=W(()=>i.value>-1&&Vu(n.params,r.value.params)),o=W(()=>i.value>-1&&i.value===n.matched.length-1&&Bl(n.params,r.value.params));function s(n={}){if(Bu(n)){let n=t[mn(e.replace)?`replace`:`push`](mn(e.to)).catch($c);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:W(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Ru(e){return e.length===1?e[0]:e}var zu=z({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Lu,setup(e,{slots:t}){let n=Qt(Lu(e)),{options:r}=L(sl),i=W(()=>({[Uu(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Uu(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Ru(t.default(n));return e.custom?r:G(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Bu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Vu(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!el(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Hu(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Uu=(e,t,n)=>e??t??n,Wu=z({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=L(ll),i=W(()=>e.route||r.value),a=L(ol,0),o=W(()=>{let e=mn(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=W(()=>i.value.matched[o.value]);ir(ol,W(()=>o.value+1)),ir(al,s),ir(ll,i);let c=P();return R(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!zl(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Gu(n.default,{Component:l,route:r});let u=o.props[a],d=G(l,q({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Gu(n.default,{Component:d,route:r})||d}}});function Gu(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Ku=Wu;function qu(e){let t=Ou(e.routes,e),n=e.parseQuery||ru,r=e.stringifyQuery||iu,i=e.history,a=ou(),o=ou(),s=ou(),c=F(Wl),l=Wl;Yc&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Qc.bind(null,e=>``+e),d=Qc.bind(null,jl),f=Qc.bind(null,Ml);function p(e,n){let r,i;return nu(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=q({},a||c.value),typeof e==`string`){let r=Fl(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return q(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=q({},e,{path:Fl(n,e.path,a.path).path});else{let t=q({},e.params);for(let e in t)t[e]??delete t[e];o=q({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Il(r,q({},e,{hash:Dl(l),path:s.path})),m=i.createHref(p);return q({fullPath:p,hash:l,query:r===iu?au(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Fl(n,e,c.value.path):q({},e)}function y(e,t){if(l!==e)return rl(8,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(q(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),q({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(q(v(u),{state:typeof u==`object`?q({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Rl(r,i,n)&&(f=rl(16,{to:d,from:i}),oe(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>il(e)?il(e,2)?e:ae(e):re(e,d,i)).then(e=>{if(e){if(il(e,2))return C(q({replace:s},v(e.to),{state:typeof e.to==`object`?q({},a,e.to.state):a,force:o}),t||d)}else e=O(d,i,!0,s,a);return D(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=le.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=lu(e,t);n=cu(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(su(r,e,t))});let c=w.bind(null,e,t);return n.push(c),ue(n).then(()=>{n=[];for(let r of a.list())n.push(su(r,e,t));return n.push(c),ue(n)}).then(()=>{n=cu(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(su(r,e,t))});return n.push(c),ue(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(el(r.beforeEnter))for(let i of r.beforeEnter)n.push(su(i,e,t));else n.push(su(r.beforeEnter,e,t));return n.push(c),ue(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=cu(s,`beforeRouteEnter`,e,t,T),n.push(c),ue(n))).then(()=>{n=[];for(let r of o.list())n.push(su(r,e,t));return n.push(c),ue(n)}).catch(e=>il(e,8)?e:Promise.reject(e))}function D(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function O(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Wl,l=Yc?history.state:{};n&&(r||s?i.replace(e.fullPath,q({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,oe(e,t,n,s),ae()}let k;function ee(){k||=i.listen((e,t,n)=>{if(!j.listening)return;let r=_(e),a=S(r,j.currentRoute.value);if(a){C(q(a,{replace:!0,force:!0}),r).catch($c);return}l=r;let o=c.value;Yc&&$l(Zl(o.fullPath,n.delta),Yl()),E(r,o).catch(e=>il(e,12)?e:il(e,2)?(C(q(v(e.to),{force:!0}),r).then(e=>{il(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch($c),Promise.reject()):(n.delta&&i.go(-n.delta,!1),re(e,r,o))).then(e=>{e||=O(r,o,!1),e&&(n.delta&&!il(e,8)?i.go(-n.delta,!1):n.type===`pop`&&il(e,20)&&i.go(-1,!1)),D(r,o,e)}).catch($c)})}let A=ou(),te=ou(),ne;function re(e,t,n){ae(e);let r=te.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function ie(){return ne&&c.value!==Wl?Promise.resolve():new Promise((e,t)=>{A.add([e,t])})}function ae(e){return ne||(ne=!e,ee(),A.list().forEach(([t,n])=>e?n(e):t()),A.reset()),e}function oe(t,n,r,i){let{scrollBehavior:a}=e;if(!Yc||!a)return Promise.resolve();let o=!r&&eu(Zl(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Un().then(()=>a(t,n,o)).then(e=>e&&Xl(e)).catch(e=>re(e,t,n))}let se=e=>i.go(e),ce,le=new Set,j={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:te.add,isReady:ie,install(e){e.component(`RouterLink`,zu),e.component(`RouterView`,Ku),e.config.globalProperties.$router=j,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>mn(c)}),Yc&&!ce&&c.value===Wl&&(ce=!0,b(i.location).catch(e=>{}));let t={};for(let e in Wl)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(sl,j),e.provide(cl,$t(t)),e.provide(ll,c);let n=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(l=Wl,k&&k(),k=null,c.value=Wl,ce=!1,ne=!1),n()}}};function ue(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return j}var Ju=`modulepreload`,Yu=function(e){return`/`+e},Xu={},J=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,new URL(`../../../src/node/plugins/importAnalysisBuild.ts`,import.meta.url)).href}r=o(t.map(t=>{if(t=Yu(t,n),t=s(t),t in Xu)return;Xu[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Ju,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zu=JSON.parse(`{}`),Qu=Object.fromEntries([[`/`,{loader:()=>J(()=>import(`./README-6q00amts.js`),[]),meta:{title:``,icon:`house`}}],[`/intro.html`,{loader:()=>J(()=>import(`./intro-DUmOcizs.js`),[]),meta:{date:1783053468e3,excerpt:`
<h2>关于这里</h2>
<p><strong>先说结论：</strong> 这里是一个记录技术问题、整理解决思路、沉淀长期经验的小地方 ✨</p>
<p>如果要稍微展开一点来说，这个博客写的其实不只是 <strong>“答案本身”</strong>，更重要的是 <strong>“答案是怎么来的”</strong>。某种程度上，真正有价值的内容，往往不是最后那一段可以直接复制的代码，而是问题为什么会出现、排查为什么会卡住、思路为什么会拐弯，以及最后为什么会选择现在这个方案 🧩</p>
<p><strong>简单来说，</strong> 这里想记录的，不只是结果，还有结果背后的路径。因为很多时候，单独留下一个结论，往往很快就会失去上下文；但如果把 <strong>“为什么这样做”</strong>、<strong>“为什么不是另一种做法”</strong> 也一起写下来，那么这些内容才更有可能在下一次继续发挥作用 🚀</p>`,readingTime:{minutes:2.97,words:891},title:`关于`,icon:`circle-info`,type:`article`}}],[`/collection/`,{loader:()=>J(()=>import(`./README-Dc2Xc1rj.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.04,words:13},title:`分类`,icon:`grip`,type:`article`}}],[`/collection/flash.html`,{loader:()=>J(()=>import(`./flash-C3-7j6Wk.js`),[]),meta:{date:1565136e6,category:[`Android`],tag:[`刷机`],excerpt:`<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p><code>刷机前先备份数据</code> ， <code>刷机前先备份数据</code> ， <code>刷机前先备份数据</code> 。</p>
</div>
<h2>1️⃣ 解锁 BL (Bootloader)</h2>
<ul>
<li>Android 调试平台：<a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip?hl=zh-cn" target="_blank" rel="noopener noreferrer">platform-tools</a></li>
<li>驱动：<a href="https://dl.google.com/android/repository/usb_driver_r13-windows.zip?hl=zh-cn" target="_blank" rel="noopener noreferrer">usb_driver_r13-windows</a></li>
<li>一加：<a href="https://bbsstatic.oneplus.com/public/apk/%E6%B7%B1%E5%BA%A6%E6%B5%8B%E8%AF%95.apk" target="_blank" rel="noopener noreferrer">深度测试 APK</a></li>
<li>小米：<a href="https://www.miui.com/unlock/index.html" target="_blank" rel="noopener noreferrer">小米解锁工具</a></li>
<li>紫罗兰工具箱：<a href="https://violettool.top" target="_blank" rel="noopener noreferrer">官方网站</a></li>
</ul>`,readingTime:{minutes:1.95,words:584},title:`Android 刷机`,icon:`robot`,type:`article`}}],[`/popular/`,{loader:()=>J(()=>import(`./README-BIiayv0j.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.04,words:13},title:`随记`,icon:`fire`,type:`article`}}],[`/popular/archinstall.html`,{loader:()=>J(()=>import(`./archinstall-m9i2UWdz.js`),[]),meta:{date:17683488e5,tag:[`arch`],excerpt:`
<blockquote>
<p>记录使用  <code>archinstall</code>  脚本速通安装 Arch Linux 的过程。建议安装前参考 <a href="https://wiki.archlinux.org/title/Installation_guide" target="_blank" rel="noopener noreferrer">Arch Wiki Installation Guide</a> 以了解基础知识。</p>
</blockquote>
<p>启动 ISO 镜像后，系统会自动登录。在终端输入  <code>archinstall</code>  并回车，启动安装脚本。</p>`,readingTime:{minutes:3.16,words:948},title:`Arch Linux（archinstall） 快速安装`,icon:`fa-brands fa-linux`,type:`article`}}],[`/popular/archlinux.html`,{loader:()=>J(()=>import(`./archlinux-Cbu01hbp.js`),[]),meta:{date:17683488e5,tag:[`KDE`,`arch`],excerpt:`<div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 如果装在虚拟机，安装文件拖拽和复制粘贴</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Sy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> open-vm-tools</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> gtkmm3</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vmtoolsd.service</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> vmware-vmblock-fuse.service</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 更新</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Syu</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 清理孤包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Rs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> $(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">pacman</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -Qtdq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:7.62,words:2285},title:`Arch Linux（KDE桌面） 快速上手`,icon:`fa-brands fa-linux`,type:`article`}}],[`/popular/openwrt.html`,{loader:()=>J(()=>import(`./openwrt-D8aDOKFd.js`),[]),meta:{date:1689984e6,tag:[`路由器`,`ImmortalWrt`,`NAS`],excerpt:`<div class="hint-container tip">
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:.79,words:238},title:`OpenWRT 使用`,icon:`cog`,type:`article`}}],[`/popular/proxyclient.html`,{loader:()=>J(()=>import(`./proxyclient-DZLOZfWA.js`),[]),meta:{date:1565136e6,category:[`收集`],tag:[`代理`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>整理网上常见的代理软件以及一些代理常用的知识点。</p>
</div>

<h1>VPS 评测网站</h1>
<p>https://digvps.com/review</p>
<h1>协议说明</h1>
<ul>
<li>vless+reality：隐匿性极佳，最推荐</li>
<li>hysteria2：发包方式激进，性能非常好，高峰期速度慢。</li>
<li>shadowsocks：现在能被精确识别的协议。</li>
<li>socks5/http：内网使用，明文传输。</li>
</ul>`,readingTime:{minutes:.91,words:272},title:`代理软件搜集`,icon:`paper-plane`,type:`article`}}],[`/popular/ubuntudesktop.html`,{loader:()=>J(()=>import(`./ubuntudesktop-CETq8fz7.js`),[]),meta:{date:17830368e5,tag:[`Ubuntu`,`Linux`,`Desktop`],excerpt:`<p>初始化：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> full-upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> autoremove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:6.52,words:1956},title:`Ubuntu Desktop 26.04 LTS 安装和配置`,icon:`fa-brands fa-ubuntu`,type:`article`}}],[`/one-click/`,{loader:()=>J(()=>import(`./README-C1tvBW65.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.05,words:16},title:`工具脚本`,icon:`computer-mouse`,type:`article`}}],[`/one-click/intelij.html`,{loader:()=>J(()=>import(`./intelij-BO2dltrk.js`),[]),meta:{date:16693344e5,tag:[`激活`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>此插件是<a href="https://zhile.io/2025/10/31/ja-netfilter-for-java25.html" target="_blank" rel="noopener noreferrer"> Neo</a> 大佬开发的 JetBrains 激活工具 <code>ja-netfilter</code></p>
</div>
<h2>一键激活（Plugin 需手动）</h2>
<p>下载安装 JetBrains 软件后成功运行并退出，以管理员运行 PowerShell</p>`,readingTime:{minutes:.64,words:192},title:`JetBrains 系列激活`,icon:`mug-saucer`,type:`article`}}],[`/one-click/mas.html`,{loader:()=>J(()=>import(`./mas-BZAe1X4H.js`),[]),meta:{date:16962912e5,category:[`Windows`],tag:[`激活`],excerpt:`<h2>在线激活</h2>
<p>以管理员运行 Powershell 执行以下代码</p>
<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-powershell"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">irm https:</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">//</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">get.activated.win | iex</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.2,words:60},title:`微软激活工具`,icon:`fa-brands fa-microsoft`,type:`article`}}],[`/collection/assembly-x86-arm/01-basic-syntax.html`,{loader:()=>J(()=>import(`./01-basic-syntax-ChkC2sk9.js`),[]),meta:{date:17819136e5,tag:[`汇编语法`,`AT&T语法`,`AArch64语法`,`指令格式`,`入口符号`,`工具链`],excerpt:`
<p><strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境对比汇编基础语法。</p>
<p><strong>AArch64/ARM64 是指令集架构，不等于某一个操作系统的可执行文件格式和系统调用约定</strong>。Linux AArch64 示例使用 ELF、GNU 工具链和 Linux 系统调用；macOS arm64 示例使用 Mach-O、Apple Clang 和 macOS 的 C 运行时 /libSystem。两边寄存器和基础指令很像，但入口符号、段名、链接方式、系统调用方式都不一样。</p>
<p>两种架构在写法上的核心差异：</p>`,readingTime:{minutes:19.91,words:5974},title:`基础语法`,icon:`fa-solid fa-code`,order:1,type:`article`}}],[`/collection/assembly-x86-arm/02-memory-segmentation.html`,{loader:()=>J(()=>import(`./02-memory-segmentation-9NzMPNcy.js`),[]),meta:{date:17819136e5,tag:[`内存布局`,`段`,`section`,`segment`,`ELF`,`Mach-O`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的 “内存分段”。</p>
<p>先把容易混在一起的三个概念拆开：</p>
<ol>
<li><strong>CPU 分段机制</strong>：x86 历史上的段寄存器、段基址、段界限。到了 x86-64 long mode，普通用户程序基本使用 “平坦地址空间”， <code>CS</code> 、 <code>DS</code> 、 <code>SS</code>  这类段不再像 16/32 位时代那样划分内存。 <code>FS</code> / <code>GS</code>  仍有特殊用途，例如线程局部存储。</li>
<li><strong>可执行文件里的 section/segment</strong>：汇编器和链接器把代码、只读数据、可写数据放到不同 section；加载器按更粗的 segment 把程序映射进进程地址空间。</li>
<li><strong>进程运行时的虚拟内存区域</strong>：程序真正运行时，除了代码和数据，还会有栈、堆、共享库、动态链接器、匿名映射、内核提供的辅助映射等。</li>
</ol>`,readingTime:{minutes:18.7,words:5610},title:`内存分段`,icon:`fa-solid fa-layer-group`,order:2,type:`article`}}],[`/collection/assembly-x86-arm/03-registers.html`,{loader:()=>J(()=>import(`./03-registers-KvJMtmIZ.js`),[]),meta:{date:17819136e5,tag:[`寄存器`,`调用约定`,`RFLAGS`,`NZCV`,`参数传递`,`返回值`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的寄存器。</p>
<p>寄存器可以先理解成 CPU 内部的一小组 “超快变量”。汇编代码几乎每天都在做三件事：</p>
<ol>
<li>把立即数、地址或内存中的值放进寄存器。</li>
<li>用寄存器做计算、比较、跳转、调用函数。</li>
<li>按 ABI 约定把参数、返回值、系统调用号放到指定寄存器。</li>
</ol>
<blockquote>
<p>说明：AArch64 和 ARM64 在这里都指 64 位 Arm 架构。Linux AArch64 和 macOS arm64 的很多寄存器名字相同，但 <strong>可执行文件格式、符号命名、系统调用接口、平台保留寄存器</strong> 不完全相同。不要把 Linux AArch64 示例原样搬到 macOS。</p>
</blockquote>`,readingTime:{minutes:19.88,words:5963},title:`寄存器`,icon:`fa-solid fa-memory`,order:3,type:`article`}}],[`/collection/assembly-x86-arm/04-system-calls.html`,{loader:()=>J(()=>import(`./04-system-calls-fhk7cmcj.js`),[]),meta:{date:17819136e5,tag:[`系统调用`,`syscall`,`svc`,`系统调用号`,`参数寄存器`,`ABI`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的系统调用。</p>
<p>系统调用可以理解成：用户程序想读写文件、打印内容、退出进程、申请内存时，不能直接操作内核资源，于是按操作系统规定把参数放进寄存器，再执行一条特殊指令进入内核。</p>
<p>先记住一句话：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>系统调用 = 调用号 + 参数寄存器 + 进入内核的指令</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:15.75,words:4726},title:`系统调用`,icon:`fa-solid fa-gears`,order:4,type:`article`}}],[`/collection/assembly-x86-arm/05-addressing-modes.html`,{loader:()=>J(()=>import(`./05-addressing-modes-BO4XIxjA.js`),[]),meta:{date:17819136e5,tag:[`寻址方式`,`内存访问`,`RIP相对寻址`,`adrp`,`重定位`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的寻址方式。</p>
<p>寻址方式回答的是一个非常朴素的问题：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>CPU 要读写内存时，内存地址从哪里来？</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:14.19,words:4258},title:`寻址方式`,icon:`fa-solid fa-location-dot`,order:5,type:`article`}}],[`/collection/assembly-x86-arm/06-variables.html`,{loader:()=>J(()=>import(`./06-variables-Dtm-X6Sj.js`),[]),meta:{date:17819136e5,tag:[`变量`,`数据段`,`bss`,`load-store`,`内存读写`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的变量写法。</p>
<p>在汇编里，变量不是高级语言里那种带类型、作用域和自动初始化规则的 “盒子”。更接近真实情况的是：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>变量 = 一个标签名 + 一段内存字节 + 选择的读写宽度</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:13.64,words:4093},title:`变量`,icon:`fa-solid fa-box-archive`,order:6,type:`article`}}],[`/collection/assembly-x86-arm/07-constants.html`,{loader:()=>J(()=>import(`./07-constants-C1wCZC6k.js`),[]),meta:{date:17819136e5,tag:[`常量`,`equ`,`立即数`,`只读数据`,`汇编期`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的常量写法。</p>
<p>在汇编里，“常量” 这个词容易混淆。至少有两类完全不同的东西：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>汇编期常量：名字代表一个数值，不分配内存，例如 .equ EXIT, 60</span></span>
<span class="line"><span>只读数据：真的放在内存里的字节，只是运行时不应该修改，例如 .ascii "hello\\n"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:10.27,words:3080},title:`常量`,icon:`fa-solid fa-hashtag`,order:7,type:`article`}}],[`/collection/assembly-x86-arm/08-arithmetic-instructions.html`,{loader:()=>J(()=>import(`./08-arithmetic-instructions-Dkwwb0q6.js`),[]),meta:{date:17819136e5,tag:[`算术指令`,`整数运算`,`加减乘除`,`标志位`,`乘法`,`除法`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的整数算术指令。</p>
<p>汇编里的算术指令做的事情很直接：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>把寄存器或内存里的整数拿来做加、减、乘、除、取负、带进位运算</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:11.73,words:3520},title:`算术指令`,icon:`fa-solid fa-calculator`,order:8,type:`article`}}],[`/collection/assembly-x86-arm/09-logical-instructions.html`,{loader:()=>J(()=>import(`./09-logical-instructions-DDUeGLz6.js`),[]),meta:{date:17819136e5,tag:[`逻辑指令`,`位运算`,`掩码`,`移位`,`标志位`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的逻辑指令。</p>
<p>逻辑指令处理的是二进制位：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>AND  按位与：两个位都是 1，结果才是 1</span></span>
<span class="line"><span>OR   按位或：任意一个位是 1，结果就是 1</span></span>
<span class="line"><span>XOR  按位异或：两个位不同，结果是 1</span></span>
<span class="line"><span>NOT  按位取反：0 变 1，1 变 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:10.66,words:3197},title:`逻辑指令`,icon:`fa-solid fa-toggle-on`,order:9,type:`article`}}],[`/collection/assembly-x86-arm/10-conditionals.html`,{loader:()=>J(()=>import(`./10-conditionals-Cu6BZJia.js`),[]),meta:{date:17819136e5,tag:[`条件判断`,`比较指令`,`条件跳转`,`signed`,`unsigned`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的条件判断。</p>
<p>高级语言里的条件判断通常写成：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (age </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">>=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 18</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    result </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    result </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:18.14,words:5441},title:`条件判断`,icon:`fa-solid fa-code-branch`,order:10,type:`article`}}],[`/collection/assembly-x86-arm/11-loops.html`,{loader:()=>J(()=>import(`./11-loops-DN5BoY17.js`),[]),meta:{date:17819136e5,tag:[`循环结构`,`while`,`for`,`break`,`continue`,`控制流`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的循环结构。</p>
<p>高级语言里的循环通常写成：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">sum </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    sum </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:14.26,words:4278},title:`循环结构`,icon:`fa-solid fa-rotate-right`,order:11,type:`article`}}],[`/collection/assembly-x86-arm/12-number-processing.html`,{loader:()=>J(()=>import(`./12-number-processing-BGhOGdfh.js`),[]),meta:{date:17819136e5,tag:[`数字处理`,`整数转换`,`ASCII`,`除法`,`进制转换`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的整数数字处理。</p>
<p>前面章节经常用退出码观察数字，但真实程序更多时候需要：</p>
<ul>
<li>把整数转成十进制字符串并输出。</li>
<li>把 ASCII 字符串里的数字解析成整数。</li>
<li>处理正负号、进制、余数和溢出。</li>
<li>在寄存器和内存之间移动不同宽度的数字。</li>
</ul>
<p>重点讲两个最实用的方向：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>整数 -> 十进制 ASCII 字符串</span></span>
<span class="line"><span>十进制 ASCII 字符串 -> 整数</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:9.81,words:2944},title:`数字处理`,icon:`fa-solid fa-arrow-down-1-9`,order:12,type:`article`}}],[`/collection/assembly-x86-arm/13-string-processing.html`,{loader:()=>J(()=>import(`./13-string-processing-C1QEs9to.js`),[]),meta:{date:17819136e5,tag:[`字符串处理`,`ASCII`,`字符数组`,`strlen`,`大小写转换`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的字符串处理。</p>
<p>汇编里没有 “字符串类型”。字符串通常就是一段连续字节：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>地址 + 长度</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:7.94,words:2382},title:`字符串处理`,icon:`fa-solid fa-font`,order:13,type:`article`}}],[`/collection/assembly-x86-arm/14-arrays.html`,{loader:()=>J(()=>import(`./14-arrays-YgwUD4FU.js`),[]),meta:{date:17819136e5,tag:[`数组`,`索引寻址`,`指针遍历`,`元素宽度`,`内存访问`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的数组访问。</p>
<p>汇编里没有高级语言意义上的 “数组类型”。数组就是一段连续内存，由程序员明确指定：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>起始地址</span></span>
<span class="line"><span>元素大小</span></span>
<span class="line"><span>元素个数</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:6.87,words:2062},title:`数组`,icon:`fa-solid fa-table-cells`,order:14,type:`article`}}],[`/collection/assembly-x86-arm/15-procedures.html`,{loader:()=>J(()=>import(`./15-procedures-fN3f0_wg.js`),[]),meta:{date:17819136e5,tag:[`过程`,`函数调用`,`栈帧`,`调用约定`,`ABI`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的过程，也就是函数。</p>
<p>过程过程用于把一段代码封装起来：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">long</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> add3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">long</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> long</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> long</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> b </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> c;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:7.63,words:2288},title:`过程`,icon:`fa-solid fa-diagram-project`,order:15,type:`article`}}],[`/collection/assembly-x86-arm/16-recursion.html`,{loader:()=>J(()=>import(`./16-recursion-CmTCtFqc.js`),[]),meta:{date:17819136e5,tag:[`递归`,`栈`,`返回地址`,`阶乘`,`函数调用`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的递归。</p>
<p>递归就是函数自调用：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">long</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">long</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> n</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x3C;=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">*</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fact</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(n </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:6.5,words:1950},title:`递归`,icon:`fa-solid fa-arrow-rotate-left`,order:16,type:`article`}}],[`/collection/assembly-x86-arm/17-macros.html`,{loader:()=>J(()=>import(`./17-macros-DVA0RLz9.js`),[]),meta:{date:17819136e5,tag:[`宏`,`GNU as`,`汇编期`,`代码生成`,`模板`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的汇编宏。</p>
<p>宏是汇编期的文本 / 指令模板。该指令不是运行时函数调用，而是在汇编时展开成真实指令。</p>
<p>例如写：</p>
<div class="language-asm line-numbers-mode" data-highlighter="shiki" data-ext="asm" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-asm"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">EXIT </span><span style="--shiki-light:#986801;--shiki-dark:#C678DD">0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:6.24,words:1873},title:`宏`,icon:`fa-solid fa-wand-magic-sparkles`,order:17,type:`article`}}],[`/collection/assembly-x86-arm/18-file-management.html`,{loader:()=>J(()=>import(`./18-file-management-CtX3GKRh.js`),[]),meta:{date:17819136e5,tag:[`文件管理`,`open`,`read`,`write`,`close`,`文件描述符`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的文件管理。</p>
<p>文件操作的核心流程通常是：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>open  打开文件，得到文件描述符 fd</span></span>
<span class="line"><span>read  从 fd 读取数据</span></span>
<span class="line"><span>write 向 fd 写入数据</span></span>
<span class="line"><span>close 关闭 fd</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:7.06,words:2117},title:`文件管理`,icon:`fa-solid fa-file-lines`,order:18,type:`article`}}],[`/collection/assembly-x86-arm/19-memory-management.html`,{loader:()=>J(()=>import(`./19-memory-management-DGNX9d6E.js`),[]),meta:{date:17819136e5,tag:[`内存管理`,`栈`,`堆`,`brk`,`mmap`,`malloc`],excerpt:`
<p>以下对比 <strong>x86-64 Linux、AArch64 Linux、macOS arm64</strong> 三种环境里的内存管理。</p>
<p>汇编程序能使用的内存大致来自这些地方：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>.text   代码</span></span>
<span class="line"><span>.rodata 只读数据</span></span>
<span class="line"><span>.data   已初始化的可写全局数据</span></span>
<span class="line"><span>.bss    未初始化的可写全局数据</span></span>
<span class="line"><span>stack   栈，保存返回地址、局部变量、临时数据</span></span>
<span class="line"><span>heap    堆，运行时动态分配</span></span>
<span class="line"><span>mmap    向操作系统申请一段虚拟内存映射</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:7.65,words:2295},title:`内存管理`,icon:`fa-solid fa-database`,order:19,type:`article`}}],[`/collection/assembly-x86-arm/`,{loader:()=>J(()=>import(`./README-BcMlaq8D.js`),[]),meta:{date:17819136e5,tag:[`汇编教程`,`跨架构对照`,`系统调用`,`控制流`,`内存管理`,`底层原理`],excerpt:`以 Linux x86-64 和 AArch64 对照方式讲解语法、寄存器、系统调用、寻址、控制流、过程、文件和内存管理`,readingTime:{minutes:.29,words:87},title:`汇编语言`,icon:`fa-solid fa-book-open`,type:`article`}}],[`/collection/linux/`,{loader:()=>J(()=>import(`./README-CGEx1u1g.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.05,words:16},title:`Linux 相关`,icon:`bars-staggered`,type:`article`}}],[`/collection/windows/`,{loader:()=>J(()=>import(`./README-D14I6MCF.js`),[]),meta:{date:1783053468e3,category:[`Windows`],tag:[`nvm`,`python`,`adb`,`java`,`cygwin`,`docker`,`etcd`,`go`,`mongodb`,`mysql`,`php`,`postgresql`,`rabbitmq`,`redis`,`ruby`,`rust`,`wsl2`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>重装 Windows 系统后需要安装一系列软件，配置时很麻烦，故而整理部分，方便参考。</p>
</div>
`,readingTime:{minutes:.23,words:70},title:`Windows 设置`,icon:`bars-staggered`,type:`article`}}],[`/collection/windows/reset.html`,{loader:()=>J(()=>import(`./reset-CrgUwNHm.js`),[]),meta:{date:1689984e6,excerpt:`<h2>重装前的准备（重要）（重要）（重要）</h2>
<ul>
<li>完整备份个人文件（外接盘 / 云盘）。</li>
<li>记录重要软件的序列号 / 登录凭证（如 Adobe、Office 等）。</li>
<li>确认 Microsoft 账户是否与数字许可证关联（Settings → Activation）。</li>
<li>取消 BitLocker 或暂时停用加密；如果使用硬盘加密，先解密。</li>
<li>准备好<a href="https://sdi-tool.org/" target="_blank" rel="noopener noreferrer">驱动</a>（网卡 / 显卡），<mark><strong>尤其是没有网络驱动可能导致安装后无法联网的情况</strong></mark>，可备用驱动 U 盘。</li>
<li>如果有 RAID 或 NVMe 特殊驱动，提前下载并放入安装 U 盘中。</li>
<li>确保有稳定电源（笔记本接电源），避免安装中断。</li>
</ul>`,readingTime:{minutes:1.91,words:573},title:`重装系统`,icon:`fa-brands fa-windows`,type:`article`}}],[`/collection/windows/system-build.html`,{loader:()=>J(()=>import(`./system-build-CuLaKjgd.js`),[]),meta:{date:1691712e6,excerpt:`<h2>一：安装驱动</h2>
<p>建议重装完成后离线安装驱动，需要<strong>提前下载</strong>好电脑所需要的驱动。</p>
<ul>
<li><strong>芯片组驱动（主板 / 笔记本官网）</strong></li>
<li><strong>显卡驱动（<a href="https://www.nvidia.com/en-us/geforce/drivers/" target="_blank" rel="noopener noreferrer">NVIDIA</a> / <a href="https://www.amd.com/en/support/download/drivers.html" target="_blank" rel="noopener noreferrer">AMD</a> / <a href="https://www.intel.com/content/www/us/en/download-center/home.html" target="_blank" rel="noopener noreferrer">Intel</a> 官网）</strong></li>
<li><strong>下载全量的 <a href="https://sdi-tool.org/" target="_blank" rel="noopener noreferrer">Snappy Driver Installer</a></strong></li>
</ul>`,readingTime:{minutes:7.37,words:2211},title:`重装系统后的配置流程`,icon:`fa-brands fa-windows`,type:`article`}}],[`/collection/xposed/01-env-set.html`,{loader:()=>J(()=>import(`./01-env-set-mV6IHWuF.js`),[]),meta:{date:1781136e6,tag:[`Xposed`,`LSPosed`,`Android`],excerpt:`
<h2>1. 新建项目</h2>
<p>在 Android Studio 里选择  <code>Native C++</code>  模板。</p>
<figure><img src="/assets/images/env-set/image.png" alt="alt text" tabindex="0" loading="lazy"><figcaption>alt text</figcaption></figure>
<ul>
<li>
<p><code>Name</code> 
 项目名。通常也会影响默认应用名和项目目录名。</p>
</li>
<li>
<p><code>Package name</code> 
Java 包名，也是后面  <code>namespace</code>  /  <code>applicationId</code>  的基础。</p>
</li>
<li>
<p><code>Save location</code> 
 项目保存路径。
只是决定工程放在哪，不影响模块功能。</p>
</li>
<li>
<p><code>Language</code> 
 生成的 Android 入口代码语言。</p>
</li>
<li>
<p><code>Minimum SDK</code> 
 应用最低支持的 Android 版本。
 <code>API 24</code> ，对应  <code>minSdk = 24</code> 。</p>
</li>
<li>
<p><code>Build configuration language</code> 
Gradle 脚本用什么语法。
 <code>Kotlin DSL (build.gradle.kts)</code> ，所以构建文件是  <code>.kts</code> 。</p>
</li>
</ul>`,readingTime:{minutes:2.15,words:646},title:`环境搭建`,icon:`fa-solid fa-gears`,order:1,type:`article`}}],[`/collection/xposed/02-xposed-java-methods.html`,{loader:()=>J(()=>import(`./02-xposed-java-methods-Dcw55drV.js`),[]),meta:{date:1781136e6,tag:[`Xposed`,`LSPosed`,`Java`],excerpt:`
<p><code>de.robv.android.xposed.XposedHelpers</code> 。</p>
<p>总原则：</p>
<ul>
<li><code>findClass*</code> ：找类</li>
<li><code>findMethod*</code>  /  <code>findAndHookMethod</code> ：找方法、Hook 方法</li>
<li><code>findConstructor*</code>  /  <code>findAndHookConstructor</code> ：找构造函数、Hook 构造函数</li>
<li><code>findField*</code>  /  <code>set*Field</code> ：找字段、改字段</li>
</ul>`,readingTime:{minutes:5.53,words:1659},title:`常用方法`,icon:`fa-solid fa-code`,order:2,type:`article`}}],[`/collection/xposed/03-hook-basic.html`,{loader:()=>J(()=>import(`./03-hook-basic-4XD41MEg.js`),[]),meta:{date:17812224e5,tag:[`Xposed`,`LSPosed`,`Hook`],excerpt:`<h2>概述</h2>
<p>本文基于  <code>HookDemo.java</code>  的实际代码，演示 Xposed Hook 的核心技术：实例方法拦截、静态方法拦截、构造函数拦截、字段读写、调用栈追踪。这些技术是逆向分析和应用修改的基础。</p>
<h3>测试环境</h3>
<p>示例代码针对  <code>com.example.challenge</code>  应用的练习题进行 Hook：</p>
<ul>
<li>目标类： <code>com.example.challenge.fragment.exercise.Ex012Fragment</code></li>
<li>目标内部类： <code>Ex012Fragment$CustomObject</code></li>
<li>调用栈示例类： <code>Ex013Fragment</code></li>
</ul>`,readingTime:{minutes:7.79,words:2338},title:`Hook基础`,icon:`fa-solid fa-tools`,order:3,type:`article`}}],[`/collection/xposed/04-anti-detect.html`,{loader:()=>J(()=>import(`./04-anti-detect-BVnCADpD.js`),[]),meta:{date:1781136e6,tag:[`Xposed`,`LSPosed`,`反检测`],excerpt:`
<h2>1. 总入口： <code>HookEntry</code> </h2>
<p>入口文件：</p>
<ul>
<li><code>HookEntry.java</code></li>
</ul>
<p><code>handleLoadPackage(...)</code>  调用了 4 个 Hook：</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-java"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">HideStack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hook</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(lpparam);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">HideDev</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hook</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(lpparam);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">HookDemo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hook</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(lpparam);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">ClipboardHook</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">hook</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(lpparam);</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:2.82,words:846},title:`反检测处理`,icon:`fa-solid fa-user-shield`,order:4,type:`article`}}],[`/collection/xposed/05-crypto-hook.html`,{loader:()=>J(()=>import(`./05-crypto-hook-D5gLF96r.js`),[]),meta:{date:17812224e5,tag:[`Xposed`,`LSPosed`,`Crypto`],excerpt:`<ol>
<li><code>Application.attach(Context)</code></li>
<li><code>Activity.onCreate(Bundle)</code></li>
<li><code>CryptoHook.hook(lpparam)</code></li>
</ol>
<p>入口类：</p>
<ul>
<li><code>app/src/main/assets/xposed_init</code></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>com.xposed.HookEntry</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:5.43,words:1628},title:`加密Hook`,icon:`fa-solid fa-key`,order:5,type:`article`}}],[`/collection/xposed/06-data-transfer.html`,{loader:()=>J(()=>import(`./06-data-transfer-CFMTq6nM.js`),[]),meta:{date:17812224e5,tag:[`Xposed`,`LSPosed`,`IPC`,`AIDL`],excerpt:`<h2>方案概述</h2>
<p>在 Xposed Hook 中，经常需要在不同进程间传递数据。传统方案使用广播（BroadcastReceiver），但存在安全性和时效性问题。本文介绍一种基于 <strong>自定义系统服务</strong> 的跨进程数据传递方案，通过劫持系统 ServiceManager 实现高效、安全的进程间通信。</p>
<h3>核心思路</h3>
<ol>
<li>在  <code>system_server</code>  进程中注入自定义服务管理器  <code>XServiceManager</code></li>
<li>劫持现有系统服务（如  <code>clipboard</code> ）的 Binder 对象，将其包装为代理</li>
<li>通过特定的 transaction code 区分系统调用和自定义服务调用</li>
<li>客户端通过  <code>XServiceManager.getService()</code>  获取自定义服务</li>
<li>使用 AIDL 定义服务接口，实现类型安全的跨进程通信</li>
</ol>`,readingTime:{minutes:8.47,words:2541},title:`跨进程传递`,icon:`fa-solid fa-exchange-alt`,order:6,type:`article`}}],[`/collection/xposed/07-native-hook.html`,{loader:()=>J(()=>import(`./07-native-hook-C1aIMej5.js`),[]),meta:{date:17812224e5,tag:[`Xposed`,`LSPosed`,`Native Hook`,`JNI`],excerpt:`<h2>方案概述</h2>
<p>在逆向 Android 应用时，除了 Java 层的加密逻辑，很多核心算法都实现在 Native 层（.so 库）。LSPosed 提供了 Native Hook 能力，可以拦截 JNI 函数和 Native 函数的调用。</p>
<p>本文介绍如何使用 LSPosed 的 Native API 实现：</p>
<ol>
<li><strong>JNI 导出函数 Hook</strong>：拦截  <code>Java_</code>  开头的 JNI 函数</li>
<li><strong>偏移地址 Hook</strong>：拦截未导出的 Native 函数（通过 IDA 分析的偏移地址）</li>
<li><strong>动态库加载监听</strong>：在目标 .so 加载时自动注入 Hook</li>
</ol>`,readingTime:{minutes:9.04,words:2711},title:`Native Hook`,icon:`fa-solid fa-microchip`,order:7,type:`article`}}],[`/collection/xposed/08-dobby-hook-techniques.html`,{loader:()=>J(()=>import(`./08-dobby-hook-techniques-CODaSCKr.js`),[]),meta:{date:17813952e5,tag:[`Xposed`,`Dobby`,`Native Hook`,`指令插桩`],excerpt:`<h2>方案概述</h2>
<p>Dobby 是一个轻量级的 Hook 框架，支持 ARM/ARM64/x86/x64 架构。在 Android Native Hook 场景中，Dobby 提供了三种不同层次的 Hook 技术，适用于不同的逆向需求。</p>
<p>本文将详细介绍 Dobby 的三种核心技术：</p>
<ol>
<li><strong>DobbyHook（函数替换）</strong>：完全替换函数逻辑，可调用原函数</li>
<li><strong>DobbyInstrument（指令插桩）</strong>：在目标地址插入回调，修改寄存器和执行流</li>
<li><strong>DobbyCodePatch（代码补丁）</strong>：直接修改机器码字节，最底层的修改方式</li>
</ol>`,readingTime:{minutes:8.69,words:2606},title:`Dobby技巧`,icon:`fa-solid fa-code-branch`,order:8,type:`article`}}],[`/collection/xposed/09-register-natives-hook.html`,{loader:()=>J(()=>import(`./09-register-natives-hook-DPQm5XaN.js`),[]),meta:{date:17813952e5,tag:[`Xposed`,`LSPosed`,`Native Hook`,`JNI`,`RegisterNatives`],excerpt:`<h2>方案概述</h2>
<p>在 Android 逆向中，很多应用为了增加分析难度，不使用静态的  <code>Java_</code>  命名规则来导出 JNI 函数，而是通过 <strong>动态注册</strong>（ <code>RegisterNatives</code> ）的方式绑定 Java 方法和 Native 函数。这使得静态分析工具（如 IDA）无法直接从导出函数名看出 Java 方法对应的 Native 实现。</p>
<p>本文介绍如何通过 Hook Android Runtime 的  <code>RegisterNatives</code>  函数，<strong>实时监控所有 Native 方法的动态注册过程</strong>，获取：</p>`,readingTime:{minutes:9.5,words:2851},title:`动态注册监控`,icon:`fa-solid fa-search`,order:9,type:`article`}}],[`/collection/xposed/10-jni-args-analysis.html`,{loader:()=>J(()=>import(`./10-jni-args-analysis-ClJBQCbT.js`),[]),meta:{date:17814816e5,tag:[`Xposed`,`LSPosed`,`Native Hook`,`JNI`,`动态分析`,`堆栈追踪`],excerpt:`<h2>方案概述</h2>
<p>在 Android Native 层逆向分析中，我们经常需要：</p>
<ol>
<li><strong>动态获取 JNI 方法的参数信息</strong>：某个 Native 方法被调用时，传入了哪些参数？参数类型是什么？</li>
<li><strong>追踪方法的调用堆栈</strong>：这个方法是从哪里被调用的？完整的调用链路是什么？</li>
</ol>
<p>本文介绍两种核心技术：</p>
<ul>
<li><strong>使用 JNI 反射 + 可变参数动态解析方法参数</strong></li>
<li><strong>使用  <code>backtrace</code>  和  <code>dladdr</code>  追踪调用堆栈</strong></li>
</ul>`,readingTime:{minutes:11.48,words:3444},title:`JNI参数解析`,icon:`fa-solid fa-code`,order:10,type:`article`}}],[`/collection/xposed/11-okhttp-intercept-kotlin.html`,{loader:()=>J(()=>import(`./11-okhttp-intercept-kotlin-D3qqEo-x.js`),[]),meta:{date:17814816e5,tag:[`Xposed, Kotlin, OkHttp, Network`],excerpt:`
<h2>概述</h2>
<p>本文介绍如何使用 Kotlin 语言结合 Xposed 框架，地实现对目标应用 OkHttp 网络库的请求拦截。相比传统 Java 实现，Kotlin 版本代码更简洁、类型安全性更高，并充分利用了 Kotlin 的扩展函数、高阶函数、lazy 初始化等特性。</p>
<h3>技术要点</h3>
<ul>
<li><strong>Kotlin 扩展函数</strong>：为系统类添加自定义功能</li>
<li><strong>高阶函数封装</strong>：简化 XposedBridge Hook 代码</li>
<li><strong>动态代理技术</strong>：注入 OkHttp 拦截器</li>
<li><strong>反射 API 调用</strong>：跨 ClassLoader 操作对象</li>
<li><strong>进程过滤</strong>：避免多进程重复 Hook</li>
</ul>`,readingTime:{minutes:15.38,words:4614},title:`OkHttp拦截`,icon:`fa-solid fa-network-wired`,order:11,type:`article`}}],[`/collection/xposed/12-dexkit-obfuscation-search.html`,{loader:()=>J(()=>import(`./12-dexkit-obfuscation-search-BbfD13Pu.js`),[]),meta:{date:17814816e5,tag:[`Xposed, DexKit, 混淆, 反编译, 动态分析`],excerpt:`
<h2>概述</h2>
<p>在 Xposed Hook 开发中，我们经常遇到以下痛点：</p>
<h3>传统反射的局限性</h3>
<div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-kotlin"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 传统方式：硬编码类名和方法名</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">XposedHelpers.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">findClass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"com.example.app.LoginActivity"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, lpparam.classLoader)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">XposedHelpers.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">findAndHookMethod</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"com.example.app.utils.Crypto"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"encrypt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, String::</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.java)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:7.98,words:2394},title:`DexKit查找`,icon:`fa-solid fa-search`,order:12,type:`article`}}],[`/collection/xposed/13-dex-file-structure.html`,{loader:()=>J(()=>import(`./13-dex-file-structure-ByqzLnfN.js`),[]),meta:{date:17814816e5,tag:[`Xposed`,`Dex`,`逆向工程`,`文件格式`],excerpt:`<h2>概述</h2>
<p>Dex（Dalvik Executable）是 Android 应用的核心可执行文件格式，包含了应用的所有代码、类、方法、字段和字符串信息。理解 Dex 文件结构对于逆向分析、代码修改、脱壳等操作至关重要。</p>
<p>本文将详细解析 Dex 文件的内部结构，并提供实际的逆向分析案例。</p>
<h3>为什么要学习 Dex 文件结构</h3>
<p><strong>逆向分析场景</strong>：</p>
<ol>
<li><strong>手动解析混淆代码</strong>：了解类、方法、字段的存储方式</li>
<li><strong>定位隐藏逻辑</strong>：通过偏移地址直接访问目标代码</li>
<li><strong>修复损坏的 Dex</strong>：处理加固、脱壳后的文件</li>
<li><strong>实现自定义工具</strong>：编写 Dex 解析器、修改器</li>
<li><strong>理解 Hook 原理</strong>：DexKit、Xposed 等工具的底层机制</li>
</ol>`,readingTime:{minutes:15.38,words:4613},title:`Dex结构解析`,icon:`fa-solid fa-file-code`,order:13,type:`article`}}],[`/collection/xposed/14-dexkit-architecture-deep-dive.html`,{loader:()=>J(()=>import(`./14-dexkit-architecture-deep-dive-PrdurFHJ.js`),[]),meta:{date:1781568e6,tag:[`Xposed, DexKit, Architecture, C++, Performance`],excerpt:`
<h2>一、概述</h2>
<p>DexKit 是一个高性能的 Android Dex 文件运行时解析库，专为混淆环境下的代码查找而设计。通过 C++ 实现核心引擎，结合多线程并行、智能缓存、预过滤优化等技术，DexKit 能在毫秒级完成复杂的类 / 方法 / 字段查找任务。</p>
<h3>核心特性</h3>
<ul>
<li><strong>高性能</strong>：C++ Native 实现，直接解析 Dex 二进制格式</li>
<li><strong>零拷贝</strong>：使用 mmap 内存映射 + FlatBuffers 序列化</li>
<li><strong>智能匹配</strong>：支持字符串、注解、字节码、调用关系等多维度查找</li>
<li><strong>并行查询</strong>：线程池调度，充分利用多核 CPU</li>
<li><strong>内存优化</strong>：三级缓存 + 懒加载，降低内存占用</li>
</ul>`,readingTime:{minutes:17.91,words:5374},title:`DexKit架构`,icon:`fa-solid fa-cubes`,order:14,type:`article`}}],[`/collection/xposed/15-elf-file-structure.html`,{loader:()=>J(()=>import(`./15-elf-file-structure-DXQt6s3o.js`),[]),meta:{date:17818272e5,tag:[`Xposed`,`ELF`,`Native`,`逆向工程`,`文件格式`],excerpt:`<h2>一、ELF 解决的是地址与装载问题</h2>
<p>ELF（Executable and Linkable Format）是 Linux、Android Native 层、共享库和核心转储文件常见的二进制文件格式。理解 ELF 时，最先要抓住的是下面几个概念：</p>
<table>
<thead>
<tr>
<th>概念</th>
<th>白话解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>文件偏移</td>
<td>数据在文件里的位置，类似 “第几页第几行”</td>
</tr>
<tr>
<td>虚拟地址</td>
<td>程序运行后，数据或代码在进程内存里的地址</td>
</tr>
<tr>
<td>Section</td>
<td>给编译器、链接器、逆向工具看的逻辑分区</td>
</tr>
<tr>
<td>Segment</td>
<td>给内核加载器看的内存映射分区</td>
</tr>
<tr>
<td>符号</td>
<td>函数名、变量名、外部函数名等 “名字”</td>
</tr>
<tr>
<td>重定位</td>
<td>链接器或动态链接器把占位地址补成真实地址的过程</td>
</tr>
</tbody>
</table>`,readingTime:{minutes:22.63,words:6790},title:`ELF 文件格式解析`,icon:`fa-solid fa-file-code`,order:15,type:`article`}}],[`/collection/xposed/16-app-lifecycle-hook.html`,{loader:()=>J(()=>import(`./16-app-lifecycle-hook-Da2DJDQE.js`),[]),meta:{date:17816544e5,tag:[`Xposed, YukiHookAPI, DexKit, 生命周期, Hook`],excerpt:`
<h2>概述</h2>
<p>基于 YukiHookAPI 的综合小案例。</p>
<h3>技术覆盖</h3>
<ul>
<li><strong>模块入口配置</strong>： <code>@InjectYukiHookWithXposed</code>  注解自动生成</li>
<li><strong>生命周期监听</strong>：监控 Application 的完整生命周期</li>
<li><strong>DexKit 混淆查找</strong>：通过方法签名特征定位混淆类</li>
<li><strong>Activity Hook</strong>：拦截所有 Activity 的 onCreate 方法</li>
<li><strong>跨进程数据通信</strong>：模块与宿主应用的数据交换</li>
<li><strong>配置存储</strong>：SharedPreferences 跨进程访问</li>
<li><strong>错误处理</strong>：完整的失败回调链</li>
</ul>`,readingTime:{minutes:12.65,words:3796},title:`YukiHook配置`,icon:`fa-solid fa-code`,order:16,type:`article`}}],[`/collection/xposed/17-libxposed-module-lifecycle.html`,{loader:()=>J(()=>import(`./17-libxposed-module-lifecycle-43GH0q2R.js`),[]),meta:{date:17817408e5,tag:[`Xposed`,`LSPosed`,`libxposed`,`Kotlin`],excerpt:`
<h2>概述</h2>
<p>基于一份 libxposed 模块模板代码，解释 <strong>libxposed 102 API 模块</strong> 是怎样被 LSPosed 识别、加载并执行 Hook 逻辑的。</p>
<p>这份模板目前不是一个完整业务 Hook，而是一个 “模块骨架”。它已经具备这些关键能力：</p>
<ul>
<li>通过  <code>META-INF/xposed/module.prop</code>  声明模块能力和 API 版本</li>
<li>通过  <code>META-INF/xposed/java_init.list</code>  指定 Kotlin 入口类</li>
<li>通过  <code>scope.list</code>  设置默认作用域</li>
<li>在  <code>HookEntry.kt</code>  中接收模块加载、包加载、包就绪、system_server 启动、热重载等生命周期回调</li>
<li>使用 libxposed 的  <code>hook(...).intercept { ... }</code>  和  <code>getInvoker(...)</code>  演示新 API 的 Hook 链调用方式</li>
<li>通过  <code>MainActivity</code>  +  <code>native-lib.cpp</code>  保留一个标准 JNI 示例，方便后续扩展 Native 逻辑</li>
</ul>`,readingTime:{minutes:21.44,words:6433},title:`新版模块入口`,icon:`fa-solid fa-plug-circle-bolt`,order:17,type:`article`}}],[`/collection/xposed/18-sekiro-rpc-sign-hook.html`,{loader:()=>J(()=>import(`./18-sekiro-rpc-sign-hook-CJHn67wB.js`),[]),meta:{date:17818272e5,tag:[`Xposed`,`LSPosed`,`libxposed`,`Sekiro`,`RPC`],excerpt:`
<h2>概述</h2>
<p>上一篇已经解释了 libxposed 102 API 模块怎样被 LSPosed 识别、加载和回调。本文继续 <strong>Sekiro RPC</strong> 代码：模块进入目标 App 进程后，一边 Hook 目标签名方法用于观察入参与结果，一边启动 Sekiro 客户端，把目标 App 内部的签名算法包装成远程接口。</p>
<p>这次代码的目标很明确：</p>
<ul>
<li>只在  <code>com.example.challenge</code>  中执行业务逻辑</li>
<li>找到混淆类  <code>o00oOOoO.o000OOo</code></li>
<li>定位签名方法  <code>OooO(ByteArray): String</code></li>
<li>Hook 该方法，打印真实入参和返回值</li>
<li>启动 Sekiro 客户端连接  <code>192.168.100.234:5612</code></li>
<li>注册  <code>HookEntry</code>  测试 action，返回当前时间</li>
<li>注册  <code>app_one</code>  业务 action，接收  <code>page</code>  和  <code>timestamp</code> ，在目标进程内调用原签名方法并返回签名结果</li>
</ul>`,readingTime:{minutes:9.53,words:2860},title:`Sekiro签名RPC`,icon:`fa-solid fa-plug`,order:18,type:`article`}}],[`/collection/xposed/19-artmethod-entrypoint-hook.html`,{loader:()=>J(()=>import(`./19-artmethod-entrypoint-hook-ajh9boz7.js`),[]),meta:{date:17820864e5,tag:[`Xposed`,`ART`,`ArtMethod`,`Native Hook`,`JNI`],excerpt:`
<h2>概述</h2>
<p>前面几篇已经讲过 Java Hook、Native Hook、 <code>RegisterNatives</code>  监控和 libxposed 新 API。这一篇往更底层走一步：直接看 ART 运行时里的  <code>ArtMethod</code> ，用修改方法入口的方式，把一个 Java 方法重定向到另一个 Java 方法。</p>
<p>本文环境以 <strong>Android SDK 28（Android 9 / Pie）</strong> 为准，示例只讨论 64 位  <code>arm64</code>  和  <code>x86_64</code>  下的实验性实现。 <code>ArtMethod</code>  是 ART 内部结构，不属于稳定公开 API，跨系统版本复用时必须重新确认字段布局。</p>`,readingTime:{minutes:18.02,words:5407},title:`ArtMethod入口替换`,icon:`fa-solid fa-route`,order:19,type:`article`}}],[`/collection/xposed/20-art-vm-create-flow.html`,{loader:()=>J(()=>import(`./20-art-vm-create-flow-B4IwPASr.js`),[]),meta:{date:17820864e5,tag:[`Xposed`,`ART`,`Android Runtime`,`JNI`,`OAT`],excerpt:`
<h2>概述</h2>
<p>做 Xposed、Native Hook、 <code>RegisterNatives</code>  监控或者  <code>ArtMethod</code>  入口替换时，经常会遇到几个看起来分散的问题：</p>
<ul>
<li><code>JavaVM*</code>  是什么时候创建的？</li>
<li>为什么  <code>JNIEnv*</code>  不能跨线程保存？</li>
<li><code>Runtime::Current()</code>  背后到底初始化了哪些东西？</li>
<li>Boot image、OAT、VDEX 和 Dex 加载是什么关系？</li>
<li>Zygote fork 前后，ART 的堆为什么能被多个应用共享一部分页面？</li>
</ul>`,readingTime:{minutes:31.06,words:9318},title:`ART虚拟机创建流程`,icon:`fa-solid fa-microchip`,order:20,type:`article`}}],[`/collection/xposed/21-class-loading-linking-initialization.html`,{loader:()=>J(()=>import(`./21-class-loading-linking-initialization-B5aqZeHO.js`),[]),meta:{date:17820864e5,tag:[`Xposed`,`ART`,`ClassLinker`,`mirror`,`ClassLoader`],excerpt:`
<h2>概述</h2>
<p>上一篇从  <code>app_process -&gt; AndroidRuntime -&gt; JNI_CreateJavaVM -&gt; Runtime::Init/Start</code>  讲了 ART 虚拟机如何创建。这一篇继续往下看：虚拟机起来以后，一个 Java 类是怎样从 Dex 里的  <code>class_def</code>  变成运行时里的  <code>mirror::Class</code> ，并最终执行  <code>&lt;clinit&gt;</code>  的。</p>
<p>本文以 <strong>Android SDK 37（Android 17 / API 37）</strong> 作为复现环境，源码说明以 AOSP main 和 API 37 对应分支 /tag 的函数名为准。ART 内部结构不是稳定公开 API，不要把字段偏移、类状态枚举值、源码路径直接跨版本硬套。</p>`,readingTime:{minutes:18.89,words:5666},title:`mirror::Object`,icon:`fa-solid fa-diagram-project`,order:21,type:`article`}}],[`/collection/xposed/22-lsplant-method-entry-bridge.html`,{loader:()=>J(()=>import(`./22-lsplant-method-entry-bridge-BZMpGk54.js`),[]),meta:{date:17822592e5,tag:[`Xposed`,`LSPlant`,`ART`,`ARM64`,`ArtMethod`,`Native Hook`],excerpt:`
<h2>概述</h2>
<p>前面已经从  <code>ArtMethod</code>  入口替换、ART 虚拟机创建、类加载初始化和 LSPlant 初始化基础设施几个角度看过 ART。本文继续把线往真正的调用入口上收束：<strong>一个被 LSPlant Hook 的 Java 方法，最终是怎样从普通 Java 调用跳到 callback，再通过 backup 回到原方法的</strong>。</p>
<p>本文围绕四个问题展开：</p>
<ol>
<li><code>Hooker.hook()</code>  到  <code>lsplant::Hook()</code>  的方法调用链路是什么？</li>
<li>ARM64 下 LSPlant 生成的 quick entry trampoline 到底执行了什么？</li>
<li><code>ArtMethod::SetEntryPoint()</code>  为什么既要改 quick entry，有些旧版本还要改 interpreter entry？</li>
<li><code>art_quick_to_interpreter_bridge</code>  在去优化和解释执行里扮演什么角色？</li>
</ol>`,readingTime:{minutes:27.22,words:8166},title:`LSPlant方法入口桥接`,icon:`fa-solid fa-code-branch`,order:22,type:`article`}}],[`/collection/xposed/23-lsplant-init-config-jni-source-build.html`,{loader:()=>J(()=>import(`./23-lsplant-init-config-jni-source-build-T_BQZH7Z.js`),[]),meta:{date:17822592e5,tag:[`Xposed`,`LSPlant`,`ART`,`JNI`,`CMake`,`C++20`],excerpt:`
<h2>概述</h2>
<p>上一篇已经顺着  <code>ArtMethod</code>  quick entry 解释了 LSPlant 怎样把 Java 方法调用导向 callback。本文换一个入口：从源码工程、测试样例和初始化流程开始，回答三个更适合复现的问题：</p>
<ol>
<li>怎样从源码构建 LSPlant 和自带测试 APK？</li>
<li><code>JNI_OnLoad -&gt; lsplant::Init -&gt; InitConfig/InitJNI/InitNative</code>  分别做了什么？</li>
<li>LSPlant 为什么大量使用  <code>&quot;_ZN...Ev&quot;_sym</code> 、 <code>.as&lt;签名&gt;</code> 、 <code>.hook-&gt;*[]</code>  这种 C++20 风格的编译期字符串写法？</li>
</ol>`,readingTime:{minutes:31.65,words:9494},title:`LSPlant初始化与源码构建`,icon:`fa-solid fa-seedling`,order:23,type:`article`}}],[`/collection/xposed/24-lsplant-init-native-runtime-jit.html`,{loader:()=>J(()=>import(`./24-lsplant-init-native-runtime-jit-kbJxUQf5.js`),[]),meta:{date:17823456e5,tag:[`Xposed`,`LSPlant`,`ART`,`JIT`,`JNI`,`Native Hook`],excerpt:`
<h2>概述</h2>
<p>上一篇已经从工程构建、 <code>InitConfig</code> 、 <code>InitJNI</code>  和编译期符号 DSL 读到 LSPlant 的初始化入口。本文继续往下走，只盯住  <code>InitNative(env, info)</code>  这一段，回答一个更贴近实战的问题：</p>
<blockquote>
<p>LSPlant 在真正 Hook Java 方法前，为什么要提前解析和 hook 这么多 ART 内部函数？</p>
</blockquote>
<p>本文最终要达到的效果是：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>读者能在 LSPlant 源码中定位 InitNative 的每个模块</span></span>
<span class="line"><span>读者能运行测试 APK，确认 LSPTest.initHooker() 返回 true</span></span>
<span class="line"><span>读者能从 logcat 看到 ArtMethod 偏移、Runtime 实例、trampoline 等初始化日志</span></span>
<span class="line"><span>读者能解释类初始化、JIT 编译、JIT cache 回收、debuggable instrumentation 为什么会影响 Hook</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:41.26,words:12377},title:`LSPlant InitNative运行时初始化`,icon:`fa-solid fa-microchip`,order:24,type:`article`}}],[`/collection/xposed/25-lsplant-hook-unhook-state.html`,{loader:()=>J(()=>import(`./25-lsplant-hook-unhook-state-ZKxO15RM.js`),[]),meta:{date:17823456e5,tag:[`Xposed`,`LSPlant`,`ART`,`JNI`,`Hook`,`UnHook`],excerpt:`
<h2>概述</h2>
<p>前两篇已经读过 LSPlant 的工程构建、 <code>InitConfig</code> 、 <code>InitJNI</code>  和  <code>InitNative</code> 。本文继续往下走，只关注真正改变 Java 方法行为的这一条链路：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-text"><span class="line"><span>Hook 前期准备与验证</span></span>
<span class="line"><span>  -> Hook 执行与状态管理</span></span>
<span class="line"><span>  -> UnHook 验证与状态查找</span></span>
<span class="line"><span>  -> 状态清理与 UnHook 执行</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:32.95,words:9885},title:`LSPlant Hook与UnHook状态管理`,icon:`fa-solid fa-code-branch`,order:25,type:`article`}}],[`/collection/xposed/26-lsplt-plt-hook-elf-parser.html`,{loader:()=>J(()=>import(`./26-lsplt-plt-hook-elf-parser-C5sVz-uT.js`),[]),meta:{date:17823456e5,tag:[`Xposed`,`LSPlt`,`ELF`,`PLT Hook`,`Native Hook`,`Android`],excerpt:`
<h2>概述</h2>
<p>本文分析的是 LSPlt：一个面向 Android 的轻量 PLT Hook 库。它不像 LSPlant 那样修改 ART 的 Java 方法入口，而是从 Native ELF 的动态链接信息入手，找到目标符号对应的 PLT/GOT 重定位槽位，再把槽位里的函数指针替换成我们自己的 callback。</p>
<p>读完并复现本文后，你应该能完成三件事：</p>
<ol>
<li>在自己的 Native 模块中接入 LSPlt。</li>
<li>通过  <code>MapInfo::Scan()</code>  找到目标 so 在  <code>/proc/self/maps</code>  里的  <code>dev</code> 、 <code>inode</code> 、 <code>offset</code> 。</li>
<li>调用  <code>RegisterHook()</code>  和  <code>CommitHook()</code>  替换目标 ELF 的 PLT 入口，并用 backup 调回原函数。</li>
</ol>`,readingTime:{minutes:28.68,words:8605},title:`PLT Hook 之 LSPlt讲解`,icon:`fa-solid fa-link`,order:26,type:`article`}}],[`/collection/xposed/27-so-dynamic-injection-frida-jni.html`,{loader:()=>J(()=>import(`./27-so-dynamic-injection-frida-jni-4uNk5b3A.js`),[]),meta:{date:17825184e5,tag:[`Xposed`,`Frida`,`Native Hook`,`JNI`,`Android`,`SO 动态注入`],excerpt:`
<h2>概述</h2>
<p>本文解决一个非常典型的 Android Native 逆向问题：</p>
<blockquote>
<p>Java 层请求接口时需要  <code>sign</code>  参数，但  <code>sign</code>  由 so 中动态注册的 JNI 函数生成。静态分析能看到大概算法，动态运行时还会受  <code>time(0)</code> 、 <code>Looper.myLooper()</code> 、JNI 线程环境影响。如何在不重启 App 的情况下，把 Frida 注入到目标进程，直接调用 so 里的真实 Native 函数，并验证自己的 Python 复现是否正确？</p>
</blockquote>`,readingTime:{minutes:16.61,words:4984},title:`SO 动态注入实战：主线程调用 JNI Native 函数`,icon:`fa-solid fa-syringe`,order:27,type:`article`}}],[`/collection/xposed/`,{loader:()=>J(()=>import(`./README-BUCRpmEu.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.08,words:23},title:`Xposed开发`,icon:`fa-solid fa-puzzle-piece`,type:`article`}}],[`/popular/cpp/01-basic-syntax.html`,{loader:()=>J(()=>import(`./01-basic-syntax-DhOexU7j.js`),[]),meta:{date:17825184e5,tag:[`C++`,`C++教程`,`基础语法`,`类型系统`,`函数`,`编译构建`],excerpt:`
<p>本文用三个可以直接编译运行的小项目，串起 C++ 入门时最容易混在一起的知识点：头文件和源文件、命名空间、 <code>const</code> 、引用、指针、值类型、 <code>auto</code> 、类型转换、函数重载、默认参数、函数指针和 lambda。</p>
<p>全文分为三部分：</p>
<ul>
<li>第一篇：用一个计数器项目理解头文件、源文件、命名空间、 <code>const</code> 、引用、指针和作用域。</li>
<li>第二篇：用一个类型系统实验理解值类型、指针、引用、 <code>auto</code>  和类型转换。</li>
<li>第三篇：用一个购物车计价项目理解函数重载、默认参数、 <code>inline</code> 、函数指针和 lambda。</li>
</ul>`,readingTime:{minutes:48.36,words:14508},title:`C++ 入门：基本语法、类型系统和函数`,icon:`fa-solid fa-code`,order:1,type:`article`}}],[`/popular/cpp/02-object-oriented.html`,{loader:()=>J(()=>import(`./02-object-oriented-BzL7yJzv.js`),[]),meta:{date:17826048e5,tag:[`C++`,`C++教程`,`面向对象`,`类`,`构造函数`,`拷贝构造`,`移动构造`,`继承`,`多态`,`虚函数`],excerpt:`
<p>C++ 的面向对象不是只背 “封装、继承、多态”。真正写代码时，更常遇到的问题是：</p>
<ul>
<li>对象什么时候构造，什么时候析构？</li>
<li>拷贝构造和移动构造分别在什么场景发生？</li>
<li>基类指针为什么能调用派生类重写后的函数？</li>
<li>基类析构函数为什么经常要写成  <code>virtual</code> ？</li>
<li><code>override</code> 、 <code>virtual</code> 、 <code>std::unique_ptr</code>  在项目里分别解决什么问题？</li>
</ul>
<p>本文用一个可以直接编译运行的小项目，把这些问题放到同一段代码中观察。示例会实现一个 “通知系统”：不同通知渠道都继承自同一个基类，调用方只面向基类接口发送消息；消息内容对象会打印构造、拷贝、移动和析构日志，方便观察生命周期。</p>`,readingTime:{minutes:23.86,words:7159},title:`C++ 面向对象：类、生命周期、继承和多态`,icon:`fa-solid fa-cubes`,order:2,type:`article`}}],[`/popular/cpp/03-templates.html`,{loader:()=>J(()=>import(`./03-templates-BupFOlzc.js`),[]),meta:{date:17826048e5,tag:[`C++`,`C++教程`,`模板`,`函数模板`,`类模板`,`STL`,`容器`,`泛型编程`],excerpt:`
<p>C++ 模板最容易被讲成 “泛型编程” 的抽象概念，但真正写项目时，你会直接遇到这些问题：</p>
<ul>
<li>同一段边界检查逻辑， <code>int</code> 、 <code>double</code>  都想复用，是否要写两份函数？</li>
<li>一个库存类想支持不同 ID 类型和数量类型，是否要为每种类型写一个类？</li>
<li><code>std::vector&lt;int&gt;</code> 、 <code>std::map&lt;std::string, double&gt;</code>  为什么都能从同一个容器模板生成出不同类型？</li>
<li>模板代码为什么经常放在头文件里？</li>
<li>模板报错为什么看起来很长，应该从哪里排查？</li>
</ul>`,readingTime:{minutes:24.63,words:7390},title:`C++ 模板：函数模板、类模板和 STL 模板容器`,icon:`fa-solid fa-layer-group`,order:3,type:`article`}}],[`/popular/cpp/04-exceptions-android-ndk.html`,{loader:()=>J(()=>import(`./04-exceptions-android-ndk-DZcGu4lf.js`),[]),meta:{date:17829504e5,tag:[`C++`,`C++教程`,`异常处理`,`try catch`,`throw`,`noexcept`,`RAII`,`Android NDK`,`JNI`],excerpt:`
<p>C++ 异常经常被简化成一句话： <code>throw</code>  抛出， <code>catch</code>  捕获。真正写项目时，更重要的问题通常是：</p>
<ul>
<li>什么时候应该抛异常，什么时候不应该抛？</li>
<li>抛异常时，局部对象会不会析构？</li>
<li>为什么推荐 “按值抛出、按引用捕获”？</li>
<li><code>catch</code>  的顺序为什么会影响结果？</li>
<li>在 Android NDK 里，C++ 异常能不能直接穿过 JNI 边界抛给 Java/Kotlin？</li>
<li>打开异常支持会增加哪些成本？</li>
</ul>`,readingTime:{minutes:25.14,words:7542},title:`C++ 异常机制：try/catch/throw 与 Android NDK 的限制和成本`,icon:`fa-solid fa-triangle-exclamation`,order:4,type:`article`}}],[`/popular/cpp/05-memory-raii.html`,{loader:()=>J(()=>import(`./05-memory-raii-uj1LDp2k.js`),[]),meta:{date:17829504e5,tag:[`C++`,`C++教程`,`内存管理`,`栈`,`堆`,`指针`,`引用`,`RAII`,`拷贝语义`,`移动语义`,`const`,`头文件`],excerpt:`
<p>C++ 的内存管理最容易被讲成一堆名词：栈、堆、指针、引用、生命周期、所有权、RAII、拷贝、移动。真正写项目时，问题通常更具体：</p>
<ul>
<li>一个对象到底什么时候创建，什么时候销毁？</li>
<li><code>new</code>  出来的内存谁负责释放？</li>
<li>为什么  <code>nullptr</code>  可以检查，悬垂指针却很危险？</li>
<li><code>const T*</code> 、 <code>T* const</code> 、 <code>const T&amp;</code>  到底分别限制了什么？</li>
<li>一个管理堆内存的类为什么要写析构、拷贝构造、移动构造？</li>
<li>头文件里应该放声明还是实现？什么时候可以用前向声明减少依赖？</li>
</ul>`,readingTime:{minutes:29.13,words:8739},title:`C++ 内存管理：栈/堆、指针引用、RAII 与移动语义`,icon:`fa-solid fa-memory`,order:5,type:`article`}}],[`/popular/cpp/06-modern-stdlib-concurrency.html`,{loader:()=>J(()=>import(`./06-modern-stdlib-concurrency-TN5J5Gjg.js`),[]),meta:{date:17829504e5,tag:[`C++`,`C++教程`,`智能指针`,`STL`,`Lambda`,`移动语义`,`optional`,`variant`,`function`,`多线程`,`JNI`],excerpt:`
<p>学完基础语法、类、模板、异常和 RAII 之后，很多人会卡在一个更实际的问题上：这些标准库能力到底怎么一起用？</p>
<p>本文用一个可以直接运行的小项目串起来：</p>
<ul>
<li>智能指针： <code>std::unique_ptr</code> 、 <code>std::shared_ptr</code> 、 <code>std::weak_ptr</code></li>
<li>容器： <code>std::vector</code> 、 <code>std::string</code> 、 <code>std::map</code> 、 <code>std::unordered_map</code></li>
<li>算法： <code>std::sort</code> 、 <code>std::find_if</code> 、 <code>std::transform</code></li>
<li>Lambda：普通回调、异步任务回调、JNI 边界封装思路</li>
<li>移动语义：把字符串、任务对象和回调结果移动到目标位置，减少不必要拷贝</li>
<li>现代工具类型： <code>std::optional</code> 、 <code>std::variant</code> 、 <code>std::function</code></li>
<li>多线程： <code>std::thread</code> 、 <code>std::mutex</code> 、 <code>std::atomic</code> 、 <code>std::condition_variable</code></li>
</ul>`,readingTime:{minutes:28.94,words:8681},title:`C++ 现代标准库实战：智能指针、容器、算法、Lambda 与多线程`,icon:`fa-solid fa-gears`,order:6,type:`article`}}],[`/popular/cpp/07-android-ndk-jni-kotlin-cpp.html`,{loader:()=>J(()=>import(`./07-android-ndk-jni-kotlin-cpp-CjQq7KKZ.js`),[]),meta:{date:17829504e5,tag:[`C++`,`C++教程`,`Android NDK`,`JNI`,`Kotlin`,`CMake`,`jnigraphics`,`AAudio`,`OpenSL ES`,`OpenGL ES`,`Vulkan`],excerpt:`
<p>Android NDK 和 JNI 很容易被讲成一堆概念： <code>JNIEnv</code> 、 <code>jobject</code> 、 <code>FindClass</code> 、 <code>AttachCurrentThread</code> 、 <code>GetStringUTFChars</code> 。这些名字看起来吓人，但真正写项目时，它们解决的是几个很具体的问题：</p>
<ul>
<li>Kotlin 怎么调用 C++ 函数？</li>
<li>C++ 怎么把结果返回给 Kotlin？</li>
<li>C++ 怎么访问 Kotlin 的  <code>String</code> 、 <code>IntArray</code> 、对象和回调接口？</li>
<li>native 线程想调用 Kotlin 方法时，为什么必须先附加到 JVM？</li>
<li>NDK 里的  <code>log</code> 、 <code>android</code> 、 <code>jnigraphics</code> 、AAudio、OpenSL ES、OpenGL ES、Vulkan 这些库在 CMake 里怎么链接？</li>
</ul>`,readingTime:{minutes:24.97,words:7490},title:`Android NDK JNI 实战：Kotlin 调 C++、C++ 回调 Kotlin 与常用 native 库`,icon:`fa-brands fa-android`,order:7,type:`article`}}],[`/popular/cpp/08-android-ndk-bitmap-libyuv-image-processing.html`,{loader:()=>J(()=>import(`./08-android-ndk-bitmap-libyuv-image-processing-CCBNAmam.js`),[]),meta:{date:17829504e5,tag:[`C++`,`C++教程`,`Android NDK`,`JNI`,`Bitmap`,`libyuv`,`图像处理`,`CMake`],excerpt:`
<p>移动端很多高性能模块都会把核心逻辑放到 C++：音视频处理用 FFmpeg，图像处理用 OpenCV、libyuv，游戏引擎用 Cocos2d-x/Unreal，渲染用 OpenGL ES/Vulkan，AI 推理、加密压缩和安全对抗也经常在 native 层完成。</p>
<p>但小白一上来直接接 FFmpeg 或 OpenCV，很容易被构建脚本、ABI、动态库和大段 API 淹没。本文先做一个更容易复现的实战项目：<strong>Kotlin 把  <code>Bitmap</code>  和一段 NV21 图像数据传给 C++，C++ 在 native 层完成像素处理和格式转换，再把结果显示回 Android 页面</strong>。</p>`,readingTime:{minutes:20.56,words:6168},title:`Android NDK 图像处理实战：Bitmap native 像素处理与 libyuv 转码`,icon:`fa-solid fa-image`,order:8,type:`article`}}],[`/popular/cpp/`,{loader:()=>J(()=>import(`./README-luX2kjHj.js`),[]),meta:{date:17825184e5,tag:[`C++`,`C++教程`,`基础语法`,`类型系统`,`函数`,`面向对象`,`类`,`继承`,`多态`,`编译构建`],excerpt:`以可运行的小项目讲解 C++ 基本语法、类型系统、函数、面向对象、编译构建和常见排查思路`,readingTime:{minutes:.29,words:87},title:`C++`,icon:`fa-brands fa-cuttlefish`,type:`article`}}],[`/popular/website/`,{loader:()=>J(()=>import(`./README-CwU190t9.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.06,words:18},title:`网站收藏`,icon:`globe`,type:`article`}}],[`/popular/website/communities.html`,{loader:()=>J(()=>import(`./communities-RB7Rky0Y.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.26,words:77},title:`社区 / 论坛`,icon:`fa-solid fa-comments`,order:7,type:`article`}}],[`/popular/website/design-colors.html`,{loader:()=>J(()=>import(`./design-colors-BbNwavOG.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:80},title:`设计配色`,icon:`palette`,order:3,type:`article`}}],[`/popular/website/github-tools.html`,{loader:()=>J(()=>import(`./github-tools-CzlBDUp1.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>系统工具 / 增强</h2>
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
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:4.26,words:1279},title:`GitHub 项目 / 开发工具`,icon:`fa-brands fa-github`,order:9,type:`article`}}],[`/popular/website/icon-fonts.html`,{loader:()=>J(()=>import(`./icon-fonts-mhLU-aJz.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.47,words:142},title:`图标 / 字体`,icon:`fa-solid fa-font`,order:4,type:`article`}}],[`/popular/website/image-tools.html`,{loader:()=>J(()=>import(`./image-tools-yseRIGIQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.46,words:137},title:`图片处理`,icon:`fa-solid fa-image`,order:2,type:`article`}}],[`/popular/website/network-security.html`,{loader:()=>J(()=>import(`./network-security-BuetrVc8.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.78,words:235},title:`网络工具 / 安全`,icon:`fa-solid fa-shield-halved`,order:6,type:`article`}}],[`/popular/website/online-tools.html`,{loader:()=>J(()=>import(`./online-tools-B996w3sF.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:71},title:`在线工具`,icon:`fa-solid fa-screwdriver-wrench`,order:1,type:`article`}}],[`/popular/website/others.html`,{loader:()=>J(()=>import(`./others-CLsT4xrb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:1.98,words:593},title:`其他`,icon:`fa-solid fa-globe`,order:8,type:`article`}}],[`/popular/website/resource-downloads.html`,{loader:()=>J(()=>import(`./resource-downloads-joAjXyUb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.92,words:275},title:`电子书 / 资源下载`,icon:`fa-solid fa-book`,order:5,type:`article`}}],[`/collection/linux/devkit/`,{loader:()=>J(()=>import(`./README-D1fB5avZ.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.06,words:19},title:`Linux 服务端运维`,icon:`bars-staggered`,type:`article`}}],[`/collection/linux/devkit/java.html`,{loader:()=>J(()=>import(`./java-C5OhmnxM.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>下面默认以 Debian 系服务器为例，示例应用名统一写成  <code>demo</code> 。真正落地时，把它替换成自己的服务名即可。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>Spring Boot / Spring Cloud 的  <code>jar</code>  包部署</li>
<li>普通 Java Web 服务</li>
<li>需要  <code>systemd</code>  托管、 <code>Nginx</code>  反代、支持回滚的生产环境</li>
</ul>`,readingTime:{minutes:5.64,words:1691},title:`Java 部署`,icon:`fa-brands fa-java`,type:`article`}}],[`/collection/linux/devkit/linux-server-optimization.html`,{loader:()=>J(()=>import(`./linux-server-optimization-BHweqO0R.js`),[]),meta:{date:17792352e5,tag:[`Linux`,`VPS`,`Debian`,`安全`],excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>Linux 不是 “怎么一键优化”，而是 “先理解系统，再决定要不要动它”。</p>
</div>
<h3>Linux 初始化配置</h3>
<p>新机器拿到手，第一步通常不是先配业务，而是先把系统更新到最新状态。</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> full-upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> autoremove</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -y</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:12.28,words:3684},title:`Linux 服务器部署`,icon:`fa-brands fa-linux`,type:`article`}}],[`/collection/linux/devkit/mysql.html`,{loader:()=>J(()=>import(`./mysql-BPgNaY2X.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>这篇默认以 Debian 上常见的  <code>MariaDB / default-mysql-server</code>  为主线，同时补充 Oracle MySQL 的差异。真正上线前，先确认项目到底要的是 “兼容 MySQL 协议”，还是 “必须 Oracle MySQL 8”。</p>
</div>
<h2>一、适用场景</h2>
<p>这篇文档适合这些场景：</p>
<ul>
<li>Debian 系服务器上的 MySQL / MariaDB 安装和运维</li>
<li>单机应用、本机数据库、内网数据库</li>
<li>需要建库、建用户、备份、恢复、日志排查的生产环境</li>
</ul>`,readingTime:{minutes:4.45,words:1336},title:`MySQL 安装`,icon:`fa-solid fa-database`,type:`article`}}],[`/collection/linux/devkit/nginx.html`,{loader:()=>J(()=>import(`./nginx-qpTSvx4C.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="hint-container tip">
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
<h2>二、安装与目录结构</h2>`,readingTime:{minutes:5.3,words:1589},title:`Nginx 常用配置`,icon:`fa-solid fa-server`,type:`article`}}],[`/collection/linux/devkit/python.html`,{loader:()=>J(()=>import(`./python-BVv7j9e_.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="hint-container tip">
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
</ul>`,readingTime:{minutes:4.12,words:1237},title:`Python 部署`,icon:`fa-brands fa-python`,type:`article`}}],[`/collection/linux/devkit/web.html`,{loader:()=>J(()=>import(`./web-B3uIrVCJ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="hint-container tip">
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
<p>先把系统和基础工具装好：</p>`,readingTime:{minutes:4.6,words:1379},title:`Web 部署`,icon:`globe`,type:`article`}}],[`/collection/windows/devkit/`,{loader:()=>J(()=>import(`./README-4Iff1GGK.js`),[]),meta:{date:1783053468e3,readingTime:{minutes:.07,words:20},title:`Windows 开发环境配置`,icon:`bars-staggered`,type:`article`}}],[`/collection/windows/devkit/adb.html`,{loader:()=>J(()=>import(`./adb-DisvzIrN.js`),[]),meta:{date:1783053468e3,excerpt:`<h2><strong>一、下载安装 ADB &amp; Fastboot</strong></h2>
<ol>
<li>下载官方 <strong>SDK Platform Tools</strong>（包含 adb 和 fastboot）：
<ul>
<li>官网：https://developer.android.com/studio/releases/platform-tools</li>
</ul>
</li>
<li>下载 Windows 压缩包  <code>.zip</code>  → 解压到目录，例如：</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Android\\platform-tools</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:1.13,words:340},title:`ADB`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/cygwin.html`,{loader:()=>J(()=>import(`./cygwin-BPvHHHCR.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Cygwin</h2>
<ol>
<li>下载：访问 https://cygwin.com/install.html，下载  <code>setup-x86_64.exe</code> （64 位）。</li>
<li>运行安装程序（建议以管理员身份运行）：
<ul>
<li>选择 <strong>Install from Internet</strong>。</li>
<li>Root Directory（安装路径）示例： <code>C:\\cygwin64</code> 。</li>
<li>Local Package Directory：随意（临时缓存）。</li>
<li>选择一个镜像站（国内可选阿里 / 清华镜像）。</li>
<li>在 package 选择界面按需勾选（见下一步）→ 点击 Next 安装完成。</li>
</ul>
</li>
</ol>`,readingTime:{minutes:1.42,words:426},title:`Cygwin`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/docker-desktop-wsl.html`,{loader:()=>J(()=>import(`./docker-desktop-wsl-gcej1Sut.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、适用场景</h2>
<p>目标环境：</p>
<ul>
<li>
<p>Windows 安装 <strong>Docker Desktop</strong></p>
</li>
<li>
<p>Docker Desktop 使用 <strong>WSL 2 backend</strong></p>
</li>
<li>
<p>WSL 发行版使用 <strong>Debian</strong></p>
</li>
<li>
<p>Windows 侧执行  <code>docker.exe</code></p>
</li>
<li>
<p>WSL 侧执行  <code>docker</code></p>
</li>
<li>
<p>两边都连接到 <strong>Docker Desktop</strong> 这一套引擎</p>
</li>
<li>
<p>WSL 里<strong>不要再安装</strong>发行版自带的 Docker Engine / Docker CLI 套件</p>
</li>
</ul>`,readingTime:{minutes:3,words:899},title:`Docker Desktop + WSL`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/docker.html`,{loader:()=>J(()=>import(`./docker-i6DILrAv.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、前置条件</h2>
<ul>
<li>Windows 版本与虚拟化：推荐 Windows 11 或更新的 Windows 10，确保在 BIOS/UEFI 中开启 <strong>Virtualization</strong>（VT-x/AMD-V）。关于系统要求与授权信息见官方文档。</li>
<li>Docker Desktop 推荐使用 <strong>WSL 2 backend</strong>（Windows Home 支持 WSL2；若使用 Pro/Enterprise 可选择 Hyper-V）。如需用 WSL2，请先安装 / 启用 WSL2。</li>
</ul>
<h2>二、启用 WSL2（如果还没启）</h2>`,readingTime:{minutes:1.74,words:522},title:`Docker`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/etcd.html`,{loader:()=>J(()=>import(`./etcd-SFj3kqY_.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 etcd</h2>
<ul>
<li>官网：https://github.com/etcd-io/etcd/releases/</li>
<li>GitHub Release 下载 Windows 64-bit zip，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>etcd-v3.6.7-windows-amd64.zip</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.55,words:164},title:`etcd`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/go.html`,{loader:()=>J(()=>import(`./go-BUZ_c9YL.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Go</h2>
<ul>
<li>
<p>官网：https://go.dev/dl/</p>
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
</ul>`,readingTime:{minutes:.44,words:131},title:`Go`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/java.html`,{loader:()=>J(()=>import(`./java-K--DFLPV.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 JDK</h2>
<ul>
<li>
<p>官网：https://www.oracle.com/java/technologies/downloads/</p>
<ul>
<li>或：<strong>OpenJDK（Temurin）</strong>
https://adoptium.net/</li>
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
</ul>`,readingTime:{minutes:.37,words:112},title:`Java`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/mongodb.html`,{loader:()=>J(()=>import(`./mongodb-C-HI7MLm.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 MongoDB</h2>
<ul>
<li>官网：https://www.mongodb.com/try/download/community</li>
<li>下载 <strong>Windows 64-bit MSI</strong></li>
<li>双击安装 → 选择 <strong>Complete</strong></li>
<li>默认安装路径：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\MongoDB\\Server\\6.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.57,words:171},title:`MongoDB`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/mysql.html`,{loader:()=>J(()=>import(`./mysql-SfMBrpil.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 MySQL</h2>
<ul>
<li>官网：https://dev.mysql.com/downloads/mysql/</li>
<li>下载 <strong>Windows (MySQL Installer)</strong></li>
<li>双击安装 → 选择 <strong>Developer Default</strong> 或 <strong>Server only</strong></li>
<li>默认安装路径：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\MySQL\\MySQL Server 8.1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.58,words:173},title:`MySQL`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/nvm.html`,{loader:()=>J(()=>import(`./nvm--L3RrEdQ.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 NVM for Windows</h2>
<ul>
<li>
<p>GitHub：https://github.com/coreybutler/nvm-windows/releases</p>
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
</ul>`,readingTime:{minutes:.6,words:180},title:`NVM(Node)`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/php.html`,{loader:()=>J(()=>import(`./php-CuTShZh7.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 PHP</h2>
<ul>
<li>官网：https://www.php.net/downloads</li>
<li>下载 <strong>Windows Thread Safe 版本的 ZIP</strong>（推荐 x64）</li>
<li>解压到路径，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\php</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.39,words:118},title:`PHP`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/postgresql.html`,{loader:()=>J(()=>import(`./postgresql-CnJvDrJF.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 PostgreSQL</h2>
<ul>
<li>官网：https://www.postgresql.org/download/windows/</li>
<li>下载 <strong>PostgreSQL Installer</strong></li>
<li>双击安装 → 选择默认路径：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\PostgreSQL\\16</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.54,words:163},title:`PostgreSQL`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/python.html`,{loader:()=>J(()=>import(`./python-DGEBCSan.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Python</h2>
<ul>
<li>官网：https://www.python.org/downloads/</li>
<li>下载 <strong>Python 3.x (Windows installer 64-bit)</strong></li>
<li>双击安装
<strong>勾选  <code>Add Python to PATH</code> </strong>
 再点击 <strong>Install Now</strong></li>
</ul>
<hr>
<h2>二、确认安装路径</h2>
<p>默认安装路径一般为：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Users\\你的用户名\\AppData\\Local\\Programs\\Python\\Python3x</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.61,words:182},title:`Python`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/rabbitmq.html`,{loader:()=>J(()=>import(`./rabbitmq-FrvpRXNt.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Erlang 与 RabbitMQ</h2>
<ol>
<li>
<p><strong>Erlang OTP（必需）</strong></p>
<ul>
<li>
<p>官网：https://www.erlang.org/downloads</p>
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
<p>官网：https://www.rabbitmq.com/install-windows.html</p>
</li>
<li>
<p>下载 <strong>RabbitMQ Installer (.exe)</strong> → 安装，默认路径：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Program Files\\RabbitMQ Server\\rabbitmq_server-3.12.x</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>`,readingTime:{minutes:.7,words:211},title:`RabbitMQ`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/redis.html`,{loader:()=>J(()=>import(`./redis-wqMPV0ae.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Redis</h2>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:1.22,words:367},title:`Redis`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/ruby.html`,{loader:()=>J(()=>import(`./ruby-C0WBEUC-.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Ruby</h2>
<ul>
<li>官网：https https://www.ruby-lang.org/en/downloads/</li>
<li>Windows 推荐下载 <strong>Ruby+Devkit 安装包</strong>（带开发工具）</li>
<li>双击安装，选择默认路径，例如：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Ruby31-x64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.56,words:169},title:`Ruby`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/rust.html`,{loader:()=>J(()=>import(`./rust-yWpgfQQo.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、下载安装 Rust</h2>
<ul>
<li>官网：https://www.rust-lang.org/tools/install</li>
<li>点击 <strong>Windows (rustup-init.exe)</strong> 下载</li>
<li>双击运行，选择 <strong>默认安装（Default installation）</strong></li>
<li>默认安装路径：</li>
</ul>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>C:\\Users\\你的用户名\\.cargo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:.47,words:140},title:`Rust`,icon:`table-list`,type:`article`}}],[`/collection/windows/devkit/wsl2.html`,{loader:()=>J(()=>import(`./wsl2-prcqAqWv.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>一、前置条件</h2>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,readingTime:{minutes:1.45,words:435},title:`WSL`,icon:`table-list`,type:`article`}}],[`/popular/website/bookmarks-academic/01-item-364491f0.html`,{loader:()=>J(()=>import(`./01-item-364491f0-Dm77BPX3.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.58,words:174},title:`文库下载`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-academic/02-item-1d7d950b.html`,{loader:()=>J(()=>import(`./02-item-1d7d950b-MrS41DO_.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.61,words:483},title:`文库站点`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-academic/03-item-4dd59878.html`,{loader:()=>J(()=>import(`./03-item-4dd59878-DwUhyGgQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.73,words:220},title:`公文素材`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-academic/04-ai-14f2c0d2.html`,{loader:()=>J(()=>import(`./04-ai-14f2c0d2-Do4rcnPE.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.68,words:204},title:`ai论文`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-academic/05-item-1ebe53a0.html`,{loader:()=>J(()=>import(`./05-item-1ebe53a0-Dwz5eYaL.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>scihub</h2>
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
  
  
</div>`,readingTime:{minutes:3.71,words:1113},title:`学术搜索`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-academic/06-item-7a22fd74.html`,{loader:()=>J(()=>import(`./06-item-7a22fd74-C-7hjRve.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>免费查重</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.26,words:1279},title:`论文查重`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-academic/07-item-8998c0f7.html`,{loader:()=>J(()=>import(`./07-item-8998c0f7-DYeDr90o.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.47,words:442},title:`辅助工具`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-academic/08-item-0ffb08cd.html`,{loader:()=>J(()=>import(`./08-item-0ffb08cd-C3CcL0oF.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.36,words:107},title:`谷歌学术`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-academic/09-item-7718a4c2.html`,{loader:()=>J(()=>import(`./09-item-7718a4c2-Et9KOZJs.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.41,words:124},title:`维基百科`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-academic/10-item-f3ae9f2b.html`,{loader:()=>J(()=>import(`./10-item-f3ae9f2b-Bk7cMBIf.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.41,words:123},title:`专利查询`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-academic/11-item-6e80f09b.html`,{loader:()=>J(()=>import(`./11-item-6e80f09b-Dm64OTWD.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.44,words:431},title:`标准规范`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-academic/12-item-287eabba.html`,{loader:()=>J(()=>import(`./12-item-287eabba-DSwgn4JT.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>免费行业报告</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>短视频报告</h2>
<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:3.47,words:1041},title:`行业报告`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-academic/13-item-76b63278.html`,{loader:()=>J(()=>import(`./13-item-76b63278-VCBwh7gA.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.49,words:446},title:`世界数据`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-academic/14-item-4baafd48.html`,{loader:()=>J(()=>import(`./14-item-4baafd48-KGjcTMx4.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.42,words:725},title:`参考站点`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-academic/15-item-ac65355d.html`,{loader:()=>J(()=>import(`./15-item-ac65355d-CYMxQ2GE.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.8,words:241},title:`报纸`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-academic/16-item-58423fa5.html`,{loader:()=>J(()=>import(`./16-item-58423fa5-B8tGAZHN.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.89,words:268},title:`手册`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-academic/`,{loader:()=>J(()=>import(`./README-0xjXStBD.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`文库学术`,icon:`fa-solid fa-graduation-cap`,type:`article`}}],[`/popular/website/bookmarks-ai-services/01-item-bookmarks-import.html`,{loader:()=>J(()=>import(`./01-item-bookmarks-import-2T_aAAYR.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.96,words:288},title:`AI 中转站 / 公益站`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-ai-services/`,{loader:()=>J(()=>import(`./README-RgBOOIbL.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:26},title:`AI 服务`,icon:`fa-solid fa-robot`,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/01-item-1ea281e3.html`,{loader:()=>J(()=>import(`./01-item-1ea281e3-DaYIazqx.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.39,words:116},title:`云盘网站`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/02-item-3a144eb6.html`,{loader:()=>J(()=>import(`./02-item-3a144eb6-CK2DpKg2.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>网盘搜索</h2>
<h3>聚合搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>阿里网盘搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>夸克网盘搜索</h3>
<div class="vp-card-container">
  
  
</div>`,readingTime:{minutes:46.1,words:13829},title:`网盘相关`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/03-item-9d72744c.html`,{loader:()=>J(()=>import(`./03-item-9d72744c-C9rgX9do.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>磁力搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:36.93,words:11078},title:`磁力相关`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/04-alist-762fba5d.html`,{loader:()=>J(()=>import(`./04-alist-762fba5d-CzehecP1.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:63},title:`AList`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/05-item-309805ae.html`,{loader:()=>J(()=>import(`./05-item-309805ae-Dno_5TNN.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>阿里网盘下载</h2>
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
<h2>磁力下载</h2>`,readingTime:{minutes:11.6,words:3481},title:`影视下载`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/06-item-bookmarks-import.html`,{loader:()=>J(()=>import(`./06-item-bookmarks-import-CSAl2bYC.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.72,words:216},title:`VPS / 云服务`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-cloud-magnet/`,{loader:()=>J(()=>import(`./README-DMqPAHHy.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.1,words:29},title:`云盘磁力`,icon:`fa-solid fa-cloud-arrow-down`,type:`article`}}],[`/popular/website/bookmarks-design/01-item-fcf6995a.html`,{loader:()=>J(()=>import(`./01-item-fcf6995a--CRMr5_Z.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.51,words:454},title:`设计教程`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-design/02-item-6c8e5ba7.html`,{loader:()=>J(()=>import(`./02-item-6c8e5ba7-Cgt8DL6C.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.83,words:848},title:`设计平台`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-design/03-item-33d30980.html`,{loader:()=>J(()=>import(`./03-item-33d30980-O4nocFHT.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:255},title:`设计规范`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-design/04-item-d42f4380.html`,{loader:()=>J(()=>import(`./04-item-d42f4380-UcztF4lO.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.36,words:108},title:`设计游戏`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-design/05-item-09f36e2c.html`,{loader:()=>J(()=>import(`./05-item-09f36e2c-b06BJxkI.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.48,words:143},title:`设计博客`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-design/06-item-19a274e7.html`,{loader:()=>J(()=>import(`./06-item-19a274e7-Clmd91JK.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.02,words:907},title:`灵感资讯`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-design/07-color-aa8b0ad9.html`,{loader:()=>J(()=>import(`./07-color-aa8b0ad9-CNAlfWBO.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.38,words:2215},title:`color调色`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-design/08-item-0fb267ee.html`,{loader:()=>J(()=>import(`./08-item-0fb267ee-BRy6_BH0.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>设计系统</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:6.65,words:1995},title:`在线设计`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-design/09-item-eb36d623.html`,{loader:()=>J(()=>import(`./09-item-eb36d623-0TzO5Bsq.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.2,words:660},title:`文字云`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-design/10-item-065a2554.html`,{loader:()=>J(()=>import(`./10-item-065a2554-DJ847M-n.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.74,words:1123},title:`平面办公素材`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-design/11-item-22881298.html`,{loader:()=>J(()=>import(`./11-item-22881298-jbvX6-bC.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.28,words:84},title:`电商素材`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-design/12-font-ac86e71a.html`,{loader:()=>J(()=>import(`./12-font-ac86e71a-By9leJks.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>可商用字体站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>大厂字体</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>字体识别</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>字体查找</h2>`,readingTime:{minutes:9.88,words:2964},title:`Font字体站`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-design/13-c4d-51ac2c7d.html`,{loader:()=>J(()=>import(`./13-c4d-51ac2c7d-D_PD6sE6.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.54,words:462},title:`c4d模型站`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-design/14-builder-2bd4a59b.html`,{loader:()=>J(()=>import(`./14-builder-2bd4a59b-BaGwJLq2.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.41,words:122},title:`Builder`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-design/15-ui-3cfa4083.html`,{loader:()=>J(()=>import(`./15-ui-3cfa4083-DYen3m2e.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.68,words:503},title:`ui素材`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-design/16-item-d2b24b96.html`,{loader:()=>J(()=>import(`./16-item-d2b24b96-B5WNns5Q.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.62,words:1086},title:`封面制作`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-design/17-ps-e6633679.html`,{loader:()=>J(()=>import(`./17-ps-e6633679-C1UroE6N.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.5,words:450},title:`在线PS`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-design/18-ps-c32f98a6.html`,{loader:()=>J(()=>import(`./18-ps-c32f98a6-D2KhaliO.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:63},title:`ps画笔`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-design/19-ai-ce2bddec.html`,{loader:()=>J(()=>import(`./19-ai-ce2bddec-DtAKfaG6.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.68,words:204},title:`ai设计`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-design/20-item-26a0089b.html`,{loader:()=>J(()=>import(`./20-item-26a0089b-eTYS68G3.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.12,words:35},title:`内容替换`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-design/21-logo-7ed406b9.html`,{loader:()=>J(()=>import(`./21-logo-7ed406b9-3uCjmpDo.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>Logo 搜索</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:5.22,words:1566},title:`logo相关`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-design/22-item-3a783e13.html`,{loader:()=>J(()=>import(`./22-item-3a783e13-DBb5kjGa.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:64},title:`铁路设计`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-design/23-item-68e4531e.html`,{loader:()=>J(()=>import(`./23-item-68e4531e-DMad5jM2.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.13,words:39},title:`国歌`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-design/24-svg-ae8eb96d.html`,{loader:()=>J(()=>import(`./24-svg-ae8eb96d-BJadvIiV.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:73},title:`svg`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-design/25-item-93cd23b2.html`,{loader:()=>J(()=>import(`./25-item-93cd23b2-ntBuCpq6.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.19,words:57},title:`家具图纸`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-design/`,{loader:()=>J(()=>import(`./README-ChQOcY6m2.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:27},title:`在线设计`,icon:`fa-solid fa-palette`,type:`article`}}],[`/popular/website/bookmarks-entertainment/01-item-77ae7582.html`,{loader:()=>J(()=>import(`./01-item-77ae7582-B6abSQ6P.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
<h2>网页 综合（聚合搜索）</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网页 综合（在线／下载）</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:82.33,words:24698},title:`影视`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-entertainment/02-item-ba08216f.html`,{loader:()=>J(()=>import(`./02-item-ba08216f-BaryUDqg.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
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
<h2>模拟器</h2>`,readingTime:{minutes:78.15,words:23446},title:`游戏`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-entertainment/03-item-67bc707a.html`,{loader:()=>J(()=>import(`./03-item-67bc707a-CR4UG12f.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>音乐相关</h2>
<h3>音乐在线</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>音乐下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h4>Apple Music 无损下载</h4>
<div class="vp-card-container">
  
  
  
  
  
</div>`,readingTime:{minutes:49.77,words:14932},title:`音乐 | 音频`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-entertainment/04-item-fe148076.html`,{loader:()=>J(()=>import(`./04-item-fe148076-CknxHiBC.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>漫画相关</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外漫画</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:16,words:4799},title:`漫画`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-entertainment/05-item-46630fb2.html`,{loader:()=>J(()=>import(`./05-item-46630fb2-BNt6h5Nu.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>电脑壁纸</h2>
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
  
  
  
</div>`,readingTime:{minutes:3.02,words:906},title:`壁纸/头像/表情`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-entertainment/06-item-72191b3a.html`,{loader:()=>J(()=>import(`./06-item-72191b3a-ijD-gU9Y.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
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
<h3>杂志</h3>`,readingTime:{minutes:89.45,words:26834},title:`书籍`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-entertainment/07-item-c6e7d643.html`,{loader:()=>J(()=>import(`./07-item-c6e7d643-BFaXT9Qo.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:80},title:`绘画`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-entertainment/08-item-e8663767.html`,{loader:()=>J(()=>import(`./08-item-e8663767-DtcZQ1Te.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.34,words:103},title:`广播|播客`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-entertainment/`,{loader:()=>J(()=>import(`./README-B8nuv3gN.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:27},title:`娱乐休闲`,icon:`fa-solid fa-film`,type:`article`}}],[`/popular/website/bookmarks-explore/01-item-45a4f144.html`,{loader:()=>J(()=>import(`./01-item-45a4f144-BV_4vttb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.54,words:162},title:`知乎盐选`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-explore/02-item-7535c9b5.html`,{loader:()=>J(()=>import(`./02-item-7535c9b5-9tYbV5yq.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.48,words:144},title:`天涯神贴`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-explore/03-item-d42a8faa.html`,{loader:()=>J(()=>import(`./03-item-d42a8faa-CkOm2ba8.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.11,words:332},title:`考研考证`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-explore/04-item-ec369adc.html`,{loader:()=>J(()=>import(`./04-item-ec369adc-CtfRTXN6.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:72},title:`书签分享`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-explore/05-item-e2b9e852.html`,{loader:()=>J(()=>import(`./05-item-e2b9e852-B0lDAwZ2.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.24,words:373},title:`国内资源网`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-explore/06-item-82508c75.html`,{loader:()=>J(()=>import(`./06-item-82508c75-B_dBlIiP.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.16,words:648},title:`国外资源`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-explore/07-item-f1b60e5d.html`,{loader:()=>J(()=>import(`./07-item-f1b60e5d-CV3E7g3G.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.56,words:167},title:`下载目录`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-explore/08-item-96151af2.html`,{loader:()=>J(()=>import(`./08-item-96151af2-BRdkckYV.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.32,words:97},title:`资源搜索`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-explore/09-item-809a9af0.html`,{loader:()=>J(()=>import(`./09-item-809a9af0-BYQLMOXJ.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>usenet</h2>
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
<h2>Leeches / Debrid</h2>`,readingTime:{minutes:2.83,words:848},title:`新闻组`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-explore/10-item-70971daf.html`,{loader:()=>J(()=>import(`./10-item-70971daf-BvgDnl8q.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.99,words:298},title:`盗版索引`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-explore/11-item-d1397cc9.html`,{loader:()=>J(()=>import(`./11-item-d1397cc9-D0wy5X2x.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.69,words:806},title:`探索发现`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-explore/12-item-f90bbe93.html`,{loader:()=>J(()=>import(`./12-item-f90bbe93-YkOer8AF.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>fmhy</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:254},title:`网站汇总`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-explore/13-item-e283fcc9.html`,{loader:()=>J(()=>import(`./13-item-e283fcc9-Cm7qtIV5.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.72,words:515},title:`工具汇总`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-explore/14-diy-a0ec9f52.html`,{loader:()=>J(()=>import(`./14-diy-a0ec9f52-BHQe0Jcv.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.48,words:144},title:`DIY项目汇总`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-explore/15-item-8b731a8e.html`,{loader:()=>J(()=>import(`./15-item-8b731a8e-DDkS1BrV.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.31,words:93},title:`网站探索`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-explore/16-item-7138ec3f.html`,{loader:()=>J(()=>import(`./16-item-7138ec3f-cDW9nQpb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.49,words:447},title:`工具探索`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-explore/17-item-b9bfea5f.html`,{loader:()=>J(()=>import(`./17-item-b9bfea5f-BP-UGvh-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.2,words:60},title:`技术探索`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-explore/18-item-07dc9df3.html`,{loader:()=>J(()=>import(`./18-item-07dc9df3-aI1pz0d-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.33,words:98},title:`付费技术文章`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-explore/19-item-bookmarks-import.html`,{loader:()=>J(()=>import(`./19-item-bookmarks-import-9JUI4PoP.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.58,words:173},title:`博客与特别站点`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-explore/`,{loader:()=>J(()=>import(`./README-BmWj5dgA.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:27},title:`资源探索`,icon:`fa-solid fa-compass`,type:`article`}}],[`/popular/website/bookmarks-learning/01-ai-fad4099c.html`,{loader:()=>J(()=>import(`./01-ai-fad4099c-D6ciDChc.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>ai 论文</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.92,words:576},title:`AI论文`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-learning/02-item-819428b4.html`,{loader:()=>J(()=>import(`./02-item-819428b4-77XnMQ9y.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>国内网站</h2>
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:3.46,words:1038},title:`论文文献（含下载）`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-learning/03-item-ed648d60.html`,{loader:()=>J(()=>import(`./03-item-ed648d60-Bq-gkDR1.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>查重</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
<h2>降重</h2>
<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:1.18,words:353},title:`论文查重|降重`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-learning/04-item-15660199.html`,{loader:()=>J(()=>import(`./04-item-15660199-JSjL6rXW.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.44,words:731},title:`幼儿少儿教育`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-learning/05-item-4e678737.html`,{loader:()=>J(()=>import(`./05-item-4e678737-Dlmm063-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>大学参考信息</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>语文</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>数学</h2>
<div class="vp-card-container">
  
  
  
  
</div>`,readingTime:{minutes:7.41,words:2224},title:`中小学教育`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-learning/06-item-5c39c47f.html`,{loader:()=>J(()=>import(`./06-item-5c39c47f-DSaByJuz.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>大学生竞赛</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>大学学习平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>在线学习</h2>`,readingTime:{minutes:91.07,words:27321},title:`大学教育`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-learning/07-item-833263aa.html`,{loader:()=>J(()=>import(`./07-item-833263aa-Dw7Csym6.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>电子课本</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>Z-library</h3>
<div class="vp-card-container">
  
  
</div>
<h2>试卷下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.14,words:2142},title:`教师资源`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-learning/08-item-7b439a2d.html`,{loader:()=>J(()=>import(`./08-item-7b439a2d-BAlDuTlR.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.27,words:1581},title:`自我提升`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-learning/09-item-0d51a1a9.html`,{loader:()=>J(()=>import(`./09-item-0d51a1a9-Dpbbfh-C.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.65,words:495},title:`知识百科`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-learning/10-item-1d0132a0.html`,{loader:()=>J(()=>import(`./10-item-1d0132a0-D1AgQc-u.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.84,words:553},title:`教育工具`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-learning/11-item-60832c28.html`,{loader:()=>J(()=>import(`./11-item-60832c28-1zTM5Cok.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
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
<h4>专用词典 ²</h4>`,readingTime:{minutes:53.33,words:15998},title:`各国语言`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-learning/12-item-38af269b.html`,{loader:()=>J(()=>import(`./12-item-38af269b-Ds3nA71L.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
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
  
  
  
  
  
</div>`,readingTime:{minutes:3.91,words:1174},title:`考证 /考级`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-learning/13-item-8d35aac9.html`,{loader:()=>J(()=>import(`./13-item-8d35aac9-BS6oqeE4.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.35,words:106},title:`专利`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-learning/14-item-38f57b82.html`,{loader:()=>J(()=>import(`./14-item-38f57b82-CWsYQPYU.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.14,words:42},title:`光盘资源`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-learning/15-item-ce8346d9.html`,{loader:()=>J(()=>import(`./15-item-ce8346d9-DQqWXAvs.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.03,words:309},title:`图书馆网站（可下载论文文献）`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-learning/16-item-fc56dbcb.html`,{loader:()=>J(()=>import(`./16-item-fc56dbcb-B4DCXihy.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.95,words:1486},title:`搜题找答案`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-learning/17-item-13b4e06b.html`,{loader:()=>J(()=>import(`./17-item-13b4e06b-C5fCtVzB.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.41,words:422},title:`英语翻译`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-learning/18-ai-bd1cbf26.html`,{loader:()=>J(()=>import(`./18-ai-bd1cbf26-tP-xIskq.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.71,words:214},title:`ai辅助学习`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-learning/19-item-dac01ad3.html`,{loader:()=>J(()=>import(`./19-item-dac01ad3-7qCIPeHE.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>文库下载</h2>
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:29.96,words:8987},title:`文库学术`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-learning/20-item-bookmarks-import.html`,{loader:()=>J(()=>import(`./20-item-bookmarks-import-CxGCUa0l.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.6,words:179},title:`Java 与计算机学习`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-learning/`,{loader:()=>J(()=>import(`./README-DWho-TKL.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.21,words:64},title:`学习`,icon:`fa-solid fa-book-open-reader`,type:`article`}}],[`/popular/website/bookmarks-office/01-ppt-8a267223.html`,{loader:()=>J(()=>import(`./01-ppt-8a267223-CHQmp45a.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ppt 制作</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>ppt 模板</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>免费 ppt 模板</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.02,words:1205},title:`ppt`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-office/02-item-c97c0438.html`,{loader:()=>J(()=>import(`./02-item-c97c0438-DB-CvOa9.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>免费思维导图工具</h2>
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
  
</div>`,readingTime:{minutes:3.52,words:1057},title:`思维导图`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-office/03-item-4bc53358.html`,{loader:()=>J(()=>import(`./03-item-4bc53358-BkeLe_0k.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.67,words:1101},title:`表单问卷`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-office/04-ocr-f529c51e.html`,{loader:()=>J(()=>import(`./04-ocr-f529c51e-CSmVxUVx.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>GitHub</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.62,words:1386},title:`OCR`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-office/05-h5-52414527.html`,{loader:()=>J(()=>import(`./05-h5-52414527-CXjYEnNn.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.03,words:610},title:`H5制作编辑`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-office/06-item-44a38bea.html`,{loader:()=>J(()=>import(`./06-item-44a38bea-D5UqppJD.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.79,words:537},title:`微信公众号`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-office/07-item-e37e15c8.html`,{loader:()=>J(()=>import(`./07-item-e37e15c8-C9HPkxFz.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.22,words:67},title:`抽奖网站`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-office/08-item-26112658.html`,{loader:()=>J(()=>import(`./08-item-26112658-Bglg410K.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.78,words:235},title:`日历/日程安排`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-office/09-notion-5ea790e4.html`,{loader:()=>J(()=>import(`./09-notion-5ea790e4-BmBlmwHE.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>新手教程</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:5.77,words:1731},title:`notion`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-office/10-obsidian-8591294e.html`,{loader:()=>J(()=>import(`./10-obsidian-8591294e-BBS25vd7.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>官网</h2>
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
<h2>教程</h2>`,readingTime:{minutes:2.18,words:654},title:`obsidian`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-office/11-item-7714e5cf.html`,{loader:()=>J(()=>import(`./11-item-7714e5cf-Cvv8IbP5.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.74,words:223},title:`飞书`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-office/12-markdown-590fc197.html`,{loader:()=>J(()=>import(`./12-markdown-590fc197-DiWGqa5k.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>Markdown 转微信公众号文章格式</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.2,words:1261},title:`markdown`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-office/13-item-0bf378f2.html`,{loader:()=>J(()=>import(`./13-item-0bf378f2-DOOMIfMM.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.98,words:595},title:`在线文档`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-office/14-item-2f3363dd.html`,{loader:()=>J(()=>import(`./14-item-2f3363dd-DlrYnUPW.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.32,words:1596},title:`在线笔记`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-office/15-item-255feaba.html`,{loader:()=>J(()=>import(`./15-item-255feaba-DVa0D3LJ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.38,words:714},title:`远程办公`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-office/16-item-3fa627d8.html`,{loader:()=>J(()=>import(`./16-item-3fa627d8-BP-8pzUS.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.56,words:469},title:`团队协作`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-office/17-item-436367b0.html`,{loader:()=>J(()=>import(`./17-item-436367b0-CDa2V4yo.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.41,words:424},title:`项目管理`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-office/18-item-4c0af1ed.html`,{loader:()=>J(()=>import(`./18-item-4c0af1ed-CYT11tPB.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:81},title:`免费企业名录`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-office/19-item-5cab93be.html`,{loader:()=>J(()=>import(`./19-item-5cab93be-BtVsNoqd.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.51,words:454},title:`摸鱼工具`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-office/20-pitch-deck-7ad75512.html`,{loader:()=>J(()=>import(`./20-pitch-deck-7ad75512-CnGRN2Qh.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.54,words:163},title:`Pitch Deck`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-office/21-item-67f26bd6.html`,{loader:()=>J(()=>import(`./21-item-67f26bd6-D5Dn48CF.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.52,words:455},title:`科技工作`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-office/22-item-39907da8.html`,{loader:()=>J(()=>import(`./22-item-39907da8-CYXar6aj.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.82,words:245},title:`初创公司`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-office/23-item-c6f517d4.html`,{loader:()=>J(()=>import(`./23-item-c6f517d4-CsWfQtpK.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:80},title:`资产市值排行榜`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-office/24-item-f8c3feb4.html`,{loader:()=>J(()=>import(`./24-item-f8c3feb4-HEOD1CYr.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>老黄历</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>日历打印</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>日历工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.77,words:530},title:`日历`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-office/25-item-0dd701c3.html`,{loader:()=>J(()=>import(`./25-item-0dd701c3-S-f2KxVF.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.6,words:180},title:`酒店协议价代码`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-office/26-item-d6b8599d.html`,{loader:()=>J(()=>import(`./26-item-d6b8599d-C8AYGtlM.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.65,words:195},title:`免费专业认证`,icon:`fa-solid fa-bookmark`,order:26,type:`article`}}],[`/popular/website/bookmarks-office/27-item-faf0c48f.html`,{loader:()=>J(()=>import(`./27-item-faf0c48f-B_82E4tx.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>产品用户信息</h2>
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
`,readingTime:{minutes:1.28,words:383},title:`行业分析`,icon:`fa-solid fa-bookmark`,order:27,type:`article`}}],[`/popular/website/bookmarks-office/28-item-e1f00e74.html`,{loader:()=>J(()=>import(`./28-item-e1f00e74-C0z69t5a.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.58,words:173},title:`知识管理系统`,icon:`fa-solid fa-bookmark`,order:28,type:`article`}}],[`/popular/website/bookmarks-office/29-item-fd9d4c15.html`,{loader:()=>J(()=>import(`./29-item-fd9d4c15-sLKq69Ju.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.14,words:43},title:`进出口记录`,icon:`fa-solid fa-bookmark`,order:29,type:`article`}}],[`/popular/website/bookmarks-office/30-item-1746c257.html`,{loader:()=>J(()=>import(`./30-item-1746c257-BhCtC7ML.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.3,words:91},title:`发票相关`,icon:`fa-solid fa-bookmark`,order:30,type:`article`}}],[`/popular/website/bookmarks-office/`,{loader:()=>J(()=>import(`./README-CWOFVr1e.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`在线办公`,icon:`fa-solid fa-file-lines`,type:`article`}}],[`/popular/website/bookmarks-resources/01-item-dd4e9bbb.html`,{loader:()=>J(()=>import(`./01-item-dd4e9bbb-D-doGUHs.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
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
  
  
  
  
</div>`,readingTime:{minutes:9.12,words:2737},title:`会员登录`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/02-item-fe573eac.html`,{loader:()=>J(()=>import(`./02-item-fe573eac-BbUZtY4J.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>聚合搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>在线观看</h2>
<div class="vp-card-container">
</div>
<h3>优质观影站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:131.81,words:39543},title:`影视相关`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/03-item-258bb97e.html`,{loader:()=>J(()=>import(`./03-item-258bb97e-B5_KeWyu.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>音乐相关</h2>
<div class="vp-card-container">
</div>
<h3>音乐在线</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>音乐下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:87.17,words:26151},title:`音频相关`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/04-item-fdf38d61.html`,{loader:()=>J(()=>import(`./04-item-fdf38d61-CMBRu5Pe.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
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
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:110.08,words:33025},title:`书籍相关`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/05-item-b4e050ca.html`,{loader:()=>J(()=>import(`./05-item-b4e050ca-DdFM9Ky9.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>动漫聚合搜索</h2>
<div class="vp-card-container">
  
  
  
  
</div>
<h2>在线动漫</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:41.41,words:12422},title:`动漫漫画`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/06-item-99cc558a.html`,{loader:()=>J(()=>import(`./06-item-99cc558a-DT4PqX0d.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>破解游戏下载</h2>
<h3>国内下载站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>国外下载站</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:113.25,words:33976},title:`游戏相关`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/07-item-9d72744c.html`,{loader:()=>J(()=>import(`./07-item-9d72744c-CT9Hs1-1.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>磁力搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:47.99,words:14396},title:`磁力相关`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/08-item-3a144eb6.html`,{loader:()=>J(()=>import(`./08-item-3a144eb6-CXZSNJyt.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>网盘搜索</h2>
<h3>tg 资源搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h3>聚合搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>阿里网盘搜索</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:62.03,words:18609},title:`网盘相关`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/09-item-7191bef6.html`,{loader:()=>J(()=>import(`./09-item-7191bef6-CdRLQjs6.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
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
<h2>Hostloc 精华帖</h2>`,readingTime:{minutes:29.65,words:8895},title:`资源探索`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/12-item-e3901745.html`,{loader:()=>J(()=>import(`./12-item-e3901745-1DGrt4EE.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ai 搜索</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:15.35,words:4604},title:`搜索查询`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/13-item-1fdb6230.html`,{loader:()=>J(()=>import(`./13-item-1fdb6230-B6Ayi8zP.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>notion</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:80.1,words:24030},title:`办公相关`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/15-item-f068f0da.html`,{loader:()=>J(()=>import(`./15-item-f068f0da-BYM7jyfN.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ai 对话</h2>
<div class="vp-card-container">
</div>
<h3>优质 gpt</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>免费 ChatGPT4</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h3>免费 ChatGPT3.5</h3>`,readingTime:{minutes:122.01,words:36604},title:`人工智能`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/16-item-938f16a9.html`,{loader:()=>J(()=>import(`./16-item-938f16a9-CxAj_Frx.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>自 媒 体</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>创作平台</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>排版美化</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:41.78,words:12535},title:`各行各业`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/17-item-dac01ad3.html`,{loader:()=>J(()=>import(`./17-item-dac01ad3-Dr0AdTCo.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>文库下载</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
<h2>文库站点</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>公文素材</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:38.86,words:11657},title:`文库学术`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/18-item-31648a71.html`,{loader:()=>J(()=>import(`./18-item-31648a71-CKqyGxpo.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>emoji</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>动态图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:83.46,words:25039},title:`图库素材`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/19-item-a3008d48.html`,{loader:()=>J(()=>import(`./19-item-a3008d48-Dn26ypMk.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ai 视频</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:25.08,words:7523},title:`视频相关`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/20-item-09095f7d.html`,{loader:()=>J(()=>import(`./20-item-09095f7d-Dze1ofWd.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>design 未分类</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>设计规范</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>设计游戏</h3>`,readingTime:{minutes:91.07,words:27321},title:`设计相关`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/21-item-19a04960.html`,{loader:()=>J(()=>import(`./21-item-19a04960-BP6PcVW4.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ai 导航</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:24.95,words:7486},title:`万能导航`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/22-item-1df0987f.html`,{loader:()=>J(()=>import(`./22-item-1df0987f-CAdjUsbA.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>国外热点聚合</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>军事新闻</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>ai 资讯</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:70.99,words:21297},title:`新闻资讯`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/24-item-30a56287.html`,{loader:()=>J(()=>import(`./24-item-30a56287-037e8Ifx.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>网络维权</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>生活助手</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>美食攻略</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:54.98,words:16493},title:`懂得生活`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-resources/25-item-c9a0c6dd.html`,{loader:()=>J(()=>import(`./25-item-c9a0c6dd-G55Myc5R.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>低价会员</h2>
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
  
  
  
  
  
</div>`,readingTime:{minutes:21.05,words:6314},title:`数卡平台`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-resources/26-item-6acd244a.html`,{loader:()=>J(()=>import(`./26-item-6acd244a-D72uuptw.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>机场</h2>
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
  
  
</div>`,readingTime:{minutes:76.58,words:22973},title:`科研学习`,icon:`fa-solid fa-bookmark`,order:26,type:`article`}}],[`/popular/website/bookmarks-resources/27-speed-dials-11b5c7e6.html`,{loader:()=>J(()=>import(`./27-speed-dials-11b5c7e6-zntx1RRB.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.52,words:155},title:`Speed Dials`,icon:`fa-solid fa-bookmark`,order:27,type:`article`}}],[`/popular/website/bookmarks-resources/`,{loader:()=>J(()=>import(`./README-DlCWM5J4.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:27},title:`资源书签`,icon:`fa-solid fa-bookmark`,type:`article`}}],[`/popular/website/bookmarks-software/01-item-420a0db3.html`,{loader:()=>J(()=>import(`./01-item-420a0db3-BgY6z5Xi.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>多平台</h2>
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
<h2>第三方 bilibili</h2>`,readingTime:{minutes:4.03,words:1210},title:`观影软件`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-software/02-item-5ebdb3a0.html`,{loader:()=>J(()=>import(`./02-item-5ebdb3a0-BeF9D4BX.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>win</h2>`,readingTime:{minutes:11.27,words:3380},title:`音乐软件`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-software/03-item-a3b9cfc6.html`,{loader:()=>J(()=>import(`./03-item-a3b9cfc6-AiRmwBjo.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ios</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.2,words:2761},title:`漫画软件`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-software/04-item-d5a34260.html`,{loader:()=>J(()=>import(`./04-item-d5a34260-Cv92PMH8.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>安卓</h2>
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
`,readingTime:{minutes:2.36,words:709},title:`动漫软件`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-software/05-item-4acba229.html`,{loader:()=>J(()=>import(`./05-item-4acba229-kr-RTgcf.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ios</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>书源</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.15,words:1245},title:`小说软件`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-software/06-item-428700a5.html`,{loader:()=>J(()=>import(`./06-item-428700a5-BPIVamj9.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.27,words:982},title:`黑科技`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-software/07-tv-0ebecdea.html`,{loader:()=>J(()=>import(`./07-tv-0ebecdea-Bjdtu36Q.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>电视</h2>
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
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:13.28,words:3983},title:`tv软件`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-software/08-win-e450697b.html`,{loader:()=>J(()=>import(`./08-win-e450697b-S3AcpXo4.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:6.98,words:2094},title:`win聚合搜索`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-software/09-win-85967b66.html`,{loader:()=>J(()=>import(`./09-win-85967b66-Dm0ItPKI.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>浏览器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>隐私浏览器</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>视频下载</h2>
<h3>多平台下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:144.17,words:43250},title:`win软件推荐`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-software/10-win-bb256c98.html`,{loader:()=>J(()=>import(`./10-win-bb256c98-jL6T6IMO.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外软件下载站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:12.99,words:3898},title:`win软件下载`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-software/11-win-e78ad006.html`,{loader:()=>J(()=>import(`./11-win-e78ad006-By-dclcR.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>名校开源镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>开源产品数据平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>马克丁软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.38,words:2813},title:`win综合`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-software/12-mac-2886a641.html`,{loader:()=>J(()=>import(`./12-mac-2886a641-D54RvgUD.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.32,words:96},title:`mac聚合搜索`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-software/13-mac-82c2f8d1.html`,{loader:()=>J(()=>import(`./13-mac-82c2f8d1-DVTmItWd.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>视频下载</h2>
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:41.57,words:12471},title:`mac软件推荐`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-software/14-mac-c6d46cfd.html`,{loader:()=>J(()=>import(`./14-mac-c6d46cfd-CCsT-PvA.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.16,words:648},title:`mac软件下载`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-software/15-mac-a4fb47fe.html`,{loader:()=>J(()=>import(`./15-mac-a4fb47fe-CkCF-SAD.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>黑苹果</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>mac 玩游戏</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 技巧</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.45,words:735},title:`mac综合`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-software/16-item-1a1e0af6.html`,{loader:()=>J(()=>import(`./16-item-1a1e0af6-_RLGFVEv.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>应用商店</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:92.17,words:27652},title:`安卓软件推荐`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-software/17-item-c3d24506.html`,{loader:()=>J(()=>import(`./17-item-c3d24506-CGabtzJl.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4,words:1200},title:`安卓软件下载`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-software/18-item-23c4e951.html`,{loader:()=>J(()=>import(`./18-item-23c4e951-3O5SQIyu.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>开源应用</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>googleplay 镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>tg 软件国外频道</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.71,words:2312},title:`安卓综合`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-software/19-ios-e8f480c2.html`,{loader:()=>J(()=>import(`./19-ios-e8f480c2-B2qwZFQX.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>邮件</h2>
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
  
  
  
</div>`,readingTime:{minutes:28.15,words:8444},title:`ios软件推荐`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-software/20-ios-f62ce7ae.html`,{loader:()=>J(()=>import(`./20-ios-f62ce7ae-Ddhv-Zrr.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:26.05,words:7814},title:`ios综合`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-software/21-item-e70272b2.html`,{loader:()=>J(()=>import(`./21-item-e70272b2-BZzDJLno.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 正版软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.7,words:509},title:`正版软件`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-software/22-item-da0bfcc0.html`,{loader:()=>J(()=>import(`./22-item-da0bfcc0-FffyRF0U.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.75,words:525},title:`替代软件`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-software/23-item-fca914b9.html`,{loader:()=>J(()=>import(`./23-item-fca914b9-B4z8j8as.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:72},title:`手表软件`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-software/`,{loader:()=>J(()=>import(`./README-BzoQyI3D.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:26},title:`软件`,icon:`fa-solid fa-laptop-code`,type:`article`}}],[`/popular/website/bookmarks-tools/01-item-59ddf3cc.html`,{loader:()=>J(()=>import(`./01-item-59ddf3cc-BJlEZ1Re.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:7.45,words:2234},title:`工具箱`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-tools/02-item-5a632ccb.html`,{loader:()=>J(()=>import(`./02-item-5a632ccb-zbVHfcJp.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>万能转换</h2>
<h3>综合转换</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>PDF 转换</h3>
<h4>PDF 转 HTML</h4>
<div class="vp-card-container">
  
</div>
<h4>pdf 转 word</h4>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:25.62,words:7687},title:`文件处理`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-tools/03-item-2f313f9b.html`,{loader:()=>J(()=>import(`./03-item-2f313f9b-Bg-TPuEc.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>在线绘图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>在线抠图</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:33.2,words:9960},title:`图片处理`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-tools/04-item-a58fdbfc.html`,{loader:()=>J(()=>import(`./04-item-a58fdbfc-rflNlL5o.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>人声隔离</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:18.7,words:5609},title:`音频处理`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-tools/05-item-19483022.html`,{loader:()=>J(()=>import(`./05-item-19483022-BfFphcFr.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>ai 视频</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:20.11,words:6032},title:`视频处理`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-tools/06-item-a7856a0c.html`,{loader:()=>J(()=>import(`./06-item-a7856a0c-DAqeXjPz.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>文字转音视频</h2>
<h3>ai 文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>文字转语音软件</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:30.37,words:9112},title:`语音-文字-视频`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-tools/07-item-e7a7cf36.html`,{loader:()=>J(()=>import(`./07-item-e7a7cf36-XRs9CZFa.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.06,words:918},title:`远程控制`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-tools/08-item-a8644fae.html`,{loader:()=>J(()=>import(`./08-item-a8644fae-BH36nirO.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>链接提取</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.69,words:2906},title:`文本处理`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-tools/09-item-22b03c02.html`,{loader:()=>J(()=>import(`./09-item-22b03c02-CwMNlRLs.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>引流推广</h2>
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
  
</div>`,readingTime:{minutes:3.19,words:957},title:`二维码`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-tools/10-item-1a34b8d9.html`,{loader:()=>J(()=>import(`./10-item-1a34b8d9-B_iGz8_h.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ai 生成器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>微信</h2>
<div class="vp-card-container">
  
  
  
</div>`,readingTime:{minutes:9.3,words:2789},title:`生成器`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-tools/11-item-12fbf752.html`,{loader:()=>J(()=>import(`./11-item-12fbf752-BplGnpGJ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.79,words:836},title:`数字名片`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-tools/12-item-865429e2.html`,{loader:()=>J(()=>import(`./12-item-865429e2-Dqutv4Z6.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.55,words:465},title:`指纹识别追踪`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-tools/13-item-91824b68.html`,{loader:()=>J(()=>import(`./13-item-91824b68-BwcqwTLQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.49,words:147},title:`隐私工具`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-tools/14-item-52bcff87.html`,{loader:()=>J(()=>import(`./14-item-52bcff87-zQiO6Avd.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:256},title:`隐私通讯`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-tools/15-item-59b03fcd.html`,{loader:()=>J(()=>import(`./15-item-59b03fcd-DrurBCYA.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.23,words:668},title:`密码相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-tools/16-item-78921798.html`,{loader:()=>J(()=>import(`./16-item-78921798-BEEssODY.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.02,words:306},title:`短信测压`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-tools/17-item-8f6b5802.html`,{loader:()=>J(()=>import(`./17-item-8f6b5802-BfdzCUSk.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ai 塔罗牌</h2>
<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:1.63,words:489},title:`占卜工具`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-tools/18-app-8e0f5b14.html`,{loader:()=>J(()=>import(`./18-app-8e0f5b14-VgNVhxX8.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.48,words:444},title:`网站生成APP`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-tools/`,{loader:()=>J(()=>import(`./README-BY2nts3m.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`在线工具`,icon:`fa-solid fa-screwdriver-wrench`,type:`article`}}],[`/popular/website/bookmarks-web3/01-item-bookmarks-import.html`,{loader:()=>J(()=>import(`./01-item-bookmarks-import-SH8LlMRh.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.18,words:55},title:`OpenSea`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-web3/`,{loader:()=>J(()=>import(`./README-FERIDbXM.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.08,words:24},title:`Web3`,icon:`fa-solid fa-cubes`,type:`article`}}],[`/popular/website/bookmarks-work/01-item-aafd61a5.html`,{loader:()=>J(()=>import(`./01-item-aafd61a5-Bn1DWUHv.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.61,words:182},title:`中国国家官方网站`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-work/02-item-938f16a9.html`,{loader:()=>J(()=>import(`./02-item-938f16a9-GbALkZHF.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>自 媒 体</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>创作平台</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>排版美化</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:33.46,words:10038},title:`各行各业`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-work/03-item-1f18993c.html`,{loader:()=>J(()=>import(`./03-item-1f18993c-evgTC6fJ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>linux.do 网站推荐</h2>
<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:2.62,words:785},title:`找工作白名单| 黑名单`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-work/04-item-09496b16.html`,{loader:()=>J(()=>import(`./04-item-09496b16-CyixKIj-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
<h2>面试</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
<h2>求职招聘</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:18,words:5399},title:`找工作`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-work/05-item-cab20c31.html`,{loader:()=>J(()=>import(`./05-item-cab20c31-Dx5EmhJP.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.27,words:82},title:`工作汇报`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-work/06-item-ba02f74b.html`,{loader:()=>J(()=>import(`./06-item-ba02f74b-DEXeMn3h.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.66,words:497},title:`企业查询`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-work/07-item-c56faefc.html`,{loader:()=>J(()=>import(`./07-item-c56faefc-C9UyMpS3.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.52,words:155},title:`公文写作`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-work/08-item-b1bae588.html`,{loader:()=>J(()=>import(`./08-item-b1bae588-Dma77lwP.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>Office</h2>
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
  
  
  
</div>`,readingTime:{minutes:2.44,words:733},title:`文档相关`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-work/09-item-c47d7a21.html`,{loader:()=>J(()=>import(`./09-item-c47d7a21-CBj9GOZu.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.21,words:64},title:`法律`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-work/10-item-6fb4cfa1.html`,{loader:()=>J(()=>import(`./10-item-6fb4cfa1-C1ysHWV_.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.52,words:155},title:`辞职`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-work/11-item-bd3d9d0c.html`,{loader:()=>J(()=>import(`./11-item-bd3d9d0c-DLgySsq-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.58,words:773},title:`国家标准/行业标准`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-work/12-item-37a38474.html`,{loader:()=>J(()=>import(`./12-item-37a38474-B-J5fEcM.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.36,words:107},title:`计税`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-work/13-item-3bc5e602.html`,{loader:()=>J(()=>import(`./13-item-3bc5e602-DL8QrFwb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.34,words:101},title:`邮箱`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-work/14-item-e44b1171.html`,{loader:()=>J(()=>import(`./14-item-e44b1171-CWGl5zlx.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网赚博客</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>Reddit 营销分析</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.9,words:1171},title:`网赚副业`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-work/15-item-5d1e5145.html`,{loader:()=>J(()=>import(`./15-item-5d1e5145-CHRzwJIQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.94,words:1183},title:`行业相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-work/16-item-be00cd79.html`,{loader:()=>J(()=>import(`./16-item-be00cd79-8ZATeqEv.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.96,words:288},title:`待办事项`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-work/17-item-9b42ae75.html`,{loader:()=>J(()=>import(`./17-item-9b42ae75-gYviRlRf.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.71,words:214},title:`会议相关`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-work/18-item-02328df5.html`,{loader:()=>J(()=>import(`./18-item-02328df5-yEIvogRQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.79,words:538},title:`生产力工具`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-work/19-item-287eabba.html`,{loader:()=>J(()=>import(`./19-item-287eabba-D6LxyTyH.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>免费行业报告</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>短视频报告</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.39,words:1317},title:`行业报告`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-work/20-item-f3ae9f2b.html`,{loader:()=>J(()=>import(`./20-item-f3ae9f2b-BMO9pgpL.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.56,words:169},title:`专利查询`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-work/21-item-4dd59878.html`,{loader:()=>J(()=>import(`./21-item-4dd59878-9tcRgttp.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.93,words:280},title:`公文素材`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-work/22-item-bookmarks-import.html`,{loader:()=>J(()=>import(`./22-item-bookmarks-import-6IdpXd5R.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.32,words:97},title:`控制台与工作台`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-work/`,{loader:()=>J(()=>import(`./README-CxcidSGx.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.08,words:25},title:`工作`,icon:`fa-solid fa-briefcase`,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/01-item-420a0db3.html`,{loader:()=>J(()=>import(`./01-item-420a0db3-BzuWXxEi.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>多平台</h2>
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
<h2>第三方 bilibili</h2>`,readingTime:{minutes:4.03,words:1210},title:`观影软件`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/02-item-5ebdb3a0.html`,{loader:()=>J(()=>import(`./02-item-5ebdb3a0-XPEg1Xiy.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>win</h2>`,readingTime:{minutes:11.2,words:3361},title:`音乐软件`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/03-item-a3b9cfc6.html`,{loader:()=>J(()=>import(`./03-item-a3b9cfc6-BNiHwx_y.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>多平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ios</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.2,words:2761},title:`漫画软件`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/04-item-d5a34260.html`,{loader:()=>J(()=>import(`./04-item-d5a34260-CDBtFXHc.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>安卓</h2>
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
`,readingTime:{minutes:2.36,words:709},title:`动漫软件`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/05-item-4acba229.html`,{loader:()=>J(()=>import(`./05-item-4acba229-BwCgYeVF.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ios</h2>
<div class="vp-card-container">
  
  
  
</div>
<h2>安卓</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>书源</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.15,words:1245},title:`小说软件`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/06-item-428700a5.html`,{loader:()=>J(()=>import(`./06-item-428700a5-CLNPNABr.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.27,words:982},title:`黑科技`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/07-tv-0ebecdea.html`,{loader:()=>J(()=>import(`./07-tv-0ebecdea-CEVJi_zA.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>安卓盒子</h2>
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
  
  
  
</div>`,readingTime:{minutes:11.26,words:3379},title:`tv软件`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/08-win-e450697b.html`,{loader:()=>J(()=>import(`./08-win-e450697b-C1kB2JYm.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
</div>
`,readingTime:{minutes:.4,words:120},title:`win聚合搜索`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/09-win-85967b66.html`,{loader:()=>J(()=>import(`./09-win-85967b66-qYMCejzL.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>浏览器</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>隐私浏览器</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>视频下载</h2>
<h3>多平台下载</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:149.62,words:44887},title:`win软件推荐`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/10-win-bb256c98.html`,{loader:()=>J(()=>import(`./10-win-bb256c98-CLGRPe4l.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>国外软件下载站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:12.99,words:3898},title:`win软件下载`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/11-win-e78ad006.html`,{loader:()=>J(()=>import(`./11-win-e78ad006-b5mNEC49.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>名校开源镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>开源产品数据平台</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>马克丁软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.38,words:2814},title:`win综合`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/12-mac-2886a641.html`,{loader:()=>J(()=>import(`./12-mac-2886a641-ED33V3wT.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
</div>
`,readingTime:{minutes:.14,words:41},title:`mac聚合搜索`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/13-mac-82c2f8d1.html`,{loader:()=>J(()=>import(`./13-mac-82c2f8d1-NfUNMH8L.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>视频下载</h2>
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:39.63,words:11890},title:`mac软件推荐`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/14-mac-c6d46cfd.html`,{loader:()=>J(()=>import(`./14-mac-c6d46cfd-DECowkWn.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>付费站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.19,words:1257},title:`mac软件下载`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/15-mac-a4fb47fe.html`,{loader:()=>J(()=>import(`./15-mac-a4fb47fe-BAw6WjiH.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>黑苹果</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>mac 玩游戏</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 技巧</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.45,words:735},title:`mac综合`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/16-item-1a1e0af6.html`,{loader:()=>J(()=>import(`./16-item-1a1e0af6-Bc4SV3Nt.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>应用商店</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:91.95,words:27584},title:`安卓软件推荐`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/17-item-c3d24506.html`,{loader:()=>J(()=>import(`./17-item-c3d24506-S8IQLsgQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4,words:1200},title:`安卓软件下载`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/18-item-23c4e951.html`,{loader:()=>J(()=>import(`./18-item-23c4e951-DnHbjPQU.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>开源应用</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>googleplay 镜像站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>tg 软件国外频道</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.71,words:2312},title:`安卓综合`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/19-ios-e8f480c2.html`,{loader:()=>J(()=>import(`./19-ios-e8f480c2-G8m6vAPg.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>邮件</h2>
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
  
  
  
</div>`,readingTime:{minutes:28.15,words:8444},title:`ios软件推荐`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/20-ios-f62ce7ae.html`,{loader:()=>J(()=>import(`./20-ios-f62ce7ae-C4gu8zVL.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:26.19,words:7858},title:`ios综合`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/21-item-e70272b2.html`,{loader:()=>J(()=>import(`./21-item-e70272b2-Dp5XIHM-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>mac 正版软件</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.7,words:509},title:`正版软件`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/22-item-da0bfcc0.html`,{loader:()=>J(()=>import(`./22-item-da0bfcc0-RyAO4mtI.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.75,words:525},title:`替代软件`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/23-item-fca914b9.html`,{loader:()=>J(()=>import(`./23-item-fca914b9-CFBxbZGM.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.24,words:72},title:`手表软件`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-resources/10-item-88d03858/`,{loader:()=>J(()=>import(`./README-CkdmlMpn.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`软件相关`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/01-item-2699981a.html`,{loader:()=>J(()=>import(`./01-item-2699981a-B_jdVgvD.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>插件下载</h2>
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
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:53.72,words:16117},title:`插件推荐`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/02-item-fd5ccbfd.html`,{loader:()=>J(()=>import(`./02-item-fd5ccbfd-DN7U-98s.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>视频下载</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:18.36,words:5507},title:`脚本推荐`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/03-github-0c1b3cb7.html`,{loader:()=>J(()=>import(`./03-github-0c1b3cb7-DImpqw0j.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>文件加速</h2>
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
  
  
</div>`,readingTime:{minutes:2.3,words:691},title:`GitHub加速`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/04-docker-hub-0be4893c.html`,{loader:()=>J(()=>import(`./04-docker-hub-0be4893c-DX1QPOXp.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.47,words:441},title:`Docker hub`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/05-cloudflare-b03c6a7a.html`,{loader:()=>J(()=>import(`./05-cloudflare-b03c6a7a-RPEy0zfV.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.53,words:758},title:`cloudflare`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/06-item-b881dfc0.html`,{loader:()=>J(()=>import(`./06-item-b881dfc0-DwiRWmuk.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>系统激活</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:50.07,words:15020},title:`系统相关`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/07-item-0f2bbfb7.html`,{loader:()=>J(()=>import(`./07-item-0f2bbfb7-CVaV8mML.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.1,words:630},title:`安全查毒`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/08-item-a9fbbd40.html`,{loader:()=>J(()=>import(`./08-item-a9fbbd40-D1NTuhY1.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.89,words:868},title:`网络安全`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/09-item-133f51ea.html`,{loader:()=>J(()=>import(`./09-item-133f51ea-DMo2Gc0G.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
`,readingTime:{minutes:4.99,words:1497},title:`黑客论坛`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/10-item-b2a1a4ef.html`,{loader:()=>J(()=>import(`./10-item-b2a1a4ef-CK_eiiIf.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:29.97,words:8991},title:`编程相关`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/11-item-cc910c2c.html`,{loader:()=>J(()=>import(`./11-item-cc910c2c-D0fkSoB4.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.91,words:572},title:`源码分享`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/12-item-f5430db2.html`,{loader:()=>J(()=>import(`./12-item-f5430db2-Cl0bMjlw.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>ai 建站</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>域名购买</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>查询比价</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:54.61,words:16382},title:`网站搭建`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/13-item-d14f1bd7.html`,{loader:()=>J(()=>import(`./13-item-d14f1bd7-D4442Fct.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:.57,words:172},title:`源码项目`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/14-item-f1b52f9f.html`,{loader:()=>J(()=>import(`./14-item-f1b52f9f-DeSeUnqi.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>屏幕检测</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:7.25,words:2175},title:`外设相关`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/15-item-a407a094.html`,{loader:()=>J(()=>import(`./15-item-a407a094-C_gpQFX3.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.88,words:265},title:`天梯排行`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/16-item-9cab073b.html`,{loader:()=>J(()=>import(`./16-item-9cab073b-DY3Q11ug.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>v2ex</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:6.06,words:1817},title:`大神聚集地`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/17-github-bf293ef5.html`,{loader:()=>J(()=>import(`./17-github-bf293ef5-ZEI7oRJf.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.96,words:1489},title:`github优秀项目`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/18-item-7eb64309.html`,{loader:()=>J(()=>import(`./18-item-7eb64309-Dcap6ZhH.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.29,words:686},title:`聊天/论坛`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/19-item-b4922b33.html`,{loader:()=>J(()=>import(`./19-item-b4922b33-CymdkCDm.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.15,words:345},title:`自托管资源`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/11-item-2698170c/`,{loader:()=>J(()=>import(`./README-CfY3YZcS.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`电脑常用`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/01-item-0a79900e.html`,{loader:()=>J(()=>import(`./01-item-0a79900e-DsBlayM5.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>文字转音视频</h2>
<div class="vp-card-container">
</div>
<h3>ai 文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h3>文字转语音</h3>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:34.92,words:10475},title:`-语音-文字-视频-`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/02-item-b05db14b.html`,{loader:()=>J(()=>import(`./02-item-b05db14b-DGv13F6D.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>综合转换</h2>
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
  
  
  
</div>`,readingTime:{minutes:12.75,words:3824},title:`万能转换`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/03-item-8bd9c322.html`,{loader:()=>J(()=>import(`./03-item-8bd9c322-Ba8VF_G_.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>图片压缩</h2>
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
  
</div>`,readingTime:{minutes:4.08,words:1223},title:`万能压缩`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/04-pdf-ocr-ec1e16ef.html`,{loader:()=>J(()=>import(`./04-pdf-ocr-ec1e16ef-BbeH7VXf.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:9.56,words:2869},title:`PDF OCR`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/05-item-59ddf3cc.html`,{loader:()=>J(()=>import(`./05-item-59ddf3cc-Z_F9OsT2.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:10.87,words:3261},title:`工具箱`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/06-item-22b03c02.html`,{loader:()=>J(()=>import(`./06-item-22b03c02-DdKr4C0p.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>引流推广</h2>
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
  
</div>`,readingTime:{minutes:3.19,words:957},title:`二维码`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/07-item-5378bbfc.html`,{loader:()=>J(()=>import(`./07-item-5378bbfc-CjbK8iZi.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.49,words:748},title:`短网址`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/08-item-12fbf752.html`,{loader:()=>J(()=>import(`./08-item-12fbf752-DRb0DOLQ.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.06,words:917},title:`数字名片`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/09-item-7d575004.html`,{loader:()=>J(()=>import(`./09-item-7d575004-D0kNnZCt.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>链接提取</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:10.33,words:3100},title:`文本相关`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/10-item-865429e2.html`,{loader:()=>J(()=>import(`./10-item-865429e2-Dcrcscnc.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.06,words:618},title:`指纹识别追踪`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/11-item-91824b68.html`,{loader:()=>J(()=>import(`./11-item-91824b68-DnTJxq4-.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.62,words:185},title:`隐私工具`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/12-item-52bcff87.html`,{loader:()=>J(()=>import(`./12-item-52bcff87-D1pxFrwX.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.93,words:279},title:`隐私通讯`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/13-item-59b03fcd.html`,{loader:()=>J(()=>import(`./13-item-59b03fcd-DAsLcmJr.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.83,words:848},title:`密码相关`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/14-item-0084faa4.html`,{loader:()=>J(()=>import(`./14-item-0084faa4-DHN-esQV.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.34,words:703},title:`虚拟身份`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/15-item-dbf2da13.html`,{loader:()=>J(()=>import(`./15-item-dbf2da13-C4EA3PZt.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>国内邮箱</h2>
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
  
  
  
  
  
  
</div>`,readingTime:{minutes:10.31,words:3094},title:`邮箱相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/16-item-22c9a8c6.html`,{loader:()=>J(()=>import(`./16-item-22c9a8c6-Dpf6ECwh.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
</div>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:7.88,words:2365},title:`短信接码`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/17-item-78921798.html`,{loader:()=>J(()=>import(`./17-item-78921798-BAfefGSy.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.31,words:392},title:`短信测压`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/18-item-5084f566.html`,{loader:()=>J(()=>import(`./18-item-5084f566-DiznRtHR.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:8.58,words:2573},title:`各种生成器`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/19-ai-54600dc7.html`,{loader:()=>J(()=>import(`./19-ai-54600dc7-BPPoj2f7.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.83,words:248},title:`ai生成器`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/20-item-7c5c113b.html`,{loader:()=>J(()=>import(`./20-item-7c5c113b-H8p-H8fs.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
</div>
<h2>小书签</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>工具</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>阅读</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:34.44,words:10333},title:`小书签栏`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/21-item-7fa695e5.html`,{loader:()=>J(()=>import(`./21-item-7fa695e5-5iRT6kDw.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>ai 塔罗牌</h2>
<div class="vp-card-container">
  
  
</div>
`,readingTime:{minutes:1.69,words:507},title:`国学`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/22-item-24a93fff.html`,{loader:()=>J(()=>import(`./22-item-24a93fff-BPsJfBoc.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.45,words:136},title:`春节相关`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/23-item-f910e251.html`,{loader:()=>J(()=>import(`./23-item-f910e251-B0TwtNYV.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:.39,words:117},title:`随机探索`,icon:`fa-solid fa-bookmark`,order:23,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/24-item-dae6399d.html`,{loader:()=>J(()=>import(`./24-item-dae6399d-BGhC_bYm.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.15,words:1244},title:`有用的网站`,icon:`fa-solid fa-bookmark`,order:24,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/25-item-02328df5.html`,{loader:()=>J(()=>import(`./25-item-02328df5-I66NtBlF.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.16,words:647},title:`生产力工具`,icon:`fa-solid fa-bookmark`,order:25,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/26-item-26112658.html`,{loader:()=>J(()=>import(`./26-item-26112658-pbRaKKy1.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.85,words:254},title:`日历/日程安排`,icon:`fa-solid fa-bookmark`,order:26,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/27-item-f74baa06.html`,{loader:()=>J(()=>import(`./27-item-f74baa06-DkbTPVb0.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.14,words:1241},title:`交互的`,icon:`fa-solid fa-bookmark`,order:27,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/28-item-77b9c8bd.html`,{loader:()=>J(()=>import(`./28-item-77b9c8bd-ryJELs5u.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.48,words:1644},title:`有趣的`,icon:`fa-solid fa-bookmark`,order:28,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/29-item-74a33946.html`,{loader:()=>J(()=>import(`./29-item-74a33946-BBnlA6kq.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:5.59,words:1677},title:`随机的`,icon:`fa-solid fa-bookmark`,order:29,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/30-app-8e0f5b14.html`,{loader:()=>J(()=>import(`./30-app-8e0f5b14-DF2HQjzE.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.47,words:442},title:`网站生成APP`,icon:`fa-solid fa-bookmark`,order:30,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/31-item-2d1c66bd.html`,{loader:()=>J(()=>import(`./31-item-2d1c66bd-Dvotr9Gc.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
</div>
`,readingTime:{minutes:.34,words:103},title:`订阅管理`,icon:`fa-solid fa-bookmark`,order:31,type:`article`}}],[`/popular/website/bookmarks-resources/14-item-9c223228/`,{loader:()=>J(()=>import(`./README-D2iwmsL2.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`在线工具`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/01-ai-bd1cbf26.html`,{loader:()=>J(()=>import(`./01-ai-bd1cbf26-B1Ia3yO4.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:.83,words:249},title:`ai辅助学习`,icon:`fa-solid fa-bookmark`,order:1,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/02-ai-10a3b7f1.html`,{loader:()=>J(()=>import(`./02-ai-10a3b7f1-BxlDBBDU.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>新手教程</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>进阶教程</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:12.64,words:3792},title:`ai学习教程`,icon:`fa-solid fa-bookmark`,order:2,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/03-item-60832c28.html`,{loader:()=>J(()=>import(`./03-item-60832c28-DRvXeJ9q.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>英语学习</h2>
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
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:50.71,words:15212},title:`各国语言`,icon:`fa-solid fa-bookmark`,order:3,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/04-item-6603c934.html`,{loader:()=>J(()=>import(`./04-item-6603c934-DaVEYOca.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>学科相关</h2>
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:77.86,words:23357},title:`各学科`,icon:`fa-solid fa-bookmark`,order:4,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/05-item-5d1e5145.html`,{loader:()=>J(()=>import(`./05-item-5d1e5145-_1743LFu.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.33,words:1300},title:`行业相关`,icon:`fa-solid fa-bookmark`,order:5,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/06-item-38b2fafe.html`,{loader:()=>J(()=>import(`./06-item-38b2fafe--TSZTRRi.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>大学生竞赛</h2>
<div class="vp-card-container">
  
  
  
  
  
</div>
`,readingTime:{minutes:3.58,words:1073},title:`大学相关`,icon:`fa-solid fa-bookmark`,order:6,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/07-item-09095f7d.html`,{loader:()=>J(()=>import(`./07-item-09095f7d-ZRkkaU9_.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.44,words:431},title:`设计相关`,icon:`fa-solid fa-bookmark`,order:7,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/08-item-7b439a2d.html`,{loader:()=>J(()=>import(`./08-item-7b439a2d-C_ZDUPof.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:5.8,words:1741},title:`自我提升`,icon:`fa-solid fa-bookmark`,order:8,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/09-item-833263aa.html`,{loader:()=>J(()=>import(`./09-item-833263aa-BfiFeGVP.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>电子课本</h2>
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
  
  
</div>`,readingTime:{minutes:4.09,words:1228},title:`教师资源`,icon:`fa-solid fa-bookmark`,order:9,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/10-item-5f66e127.html`,{loader:()=>J(()=>import(`./10-item-5f66e127-DjPcSpcr.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.05,words:614},title:`幼儿资源`,icon:`fa-solid fa-bookmark`,order:10,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/11-item-d13a94bf.html`,{loader:()=>J(()=>import(`./11-item-d13a94bf-Bwh10dBm.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.29,words:1287},title:`查题题库`,icon:`fa-solid fa-bookmark`,order:11,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/12-item-0d51a1a9.html`,{loader:()=>J(()=>import(`./12-item-0d51a1a9-DKAFbsI0.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.02,words:607},title:`知识百科`,icon:`fa-solid fa-bookmark`,order:12,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/13-item-729e62fd.html`,{loader:()=>J(()=>import(`./13-item-729e62fd-BMga5xN3.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
</div>
<h2>ai 恋爱</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:1.97,words:591},title:`恋爱相关`,icon:`fa-solid fa-bookmark`,order:13,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/14-item-e44b1171.html`,{loader:()=>J(()=>import(`./14-item-e44b1171-D8DzAWtb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>网赚博客</h2>
<div class="vp-card-container">
  
  
  
  
  
  
</div>
<h2>Reddit 营销分析</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.82,words:1147},title:`网赚副业`,icon:`fa-solid fa-bookmark`,order:14,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/15-item-eb2a471d.html`,{loader:()=>J(()=>import(`./15-item-eb2a471d-D1qgBq6Q.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>AI</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
</div>
<h2>文案写作</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
<h2>语法纠错</h2>
<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:17.05,words:5116},title:`文学相关`,icon:`fa-solid fa-bookmark`,order:15,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/16-item-b8685cff.html`,{loader:()=>J(()=>import(`./16-item-b8685cff-ykGKJ-Gb.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.08,words:1224},title:`在线学习`,icon:`fa-solid fa-bookmark`,order:16,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/17-study-2c861c5f.html`,{loader:()=>J(()=>import(`./17-study-2c861c5f-P9TgnKnA.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:7.55,words:2264},title:`study未分类`,icon:`fa-solid fa-bookmark`,order:17,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/18-item-fc7da0d9.html`,{loader:()=>J(()=>import(`./18-item-fc7da0d9-DcJPgd_t.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:4.51,words:1354},title:`国外教育平台`,icon:`fa-solid fa-bookmark`,order:18,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/19-item-ffdf1733.html`,{loader:()=>J(()=>import(`./19-item-ffdf1733-CiO8EAHX.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:3.12,words:936},title:`国外教育平台课程下载`,icon:`fa-solid fa-bookmark`,order:19,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/20-item-101fba8c.html`,{loader:()=>J(()=>import(`./20-item-101fba8c-CObbgYpG.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:6.45,words:1936},title:`国外学习网站`,icon:`fa-solid fa-bookmark`,order:20,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/21-item-1d0132a0.html`,{loader:()=>J(()=>import(`./21-item-1d0132a0-C3qeQA89.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>
`,readingTime:{minutes:2.62,words:785},title:`教育工具`,icon:`fa-solid fa-bookmark`,order:21,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/22-item-43087966.html`,{loader:()=>J(()=>import(`./22-item-43087966-CTdVNsbu.js`),[]),meta:{date:1783053468e3,excerpt:`<div class="vp-card-container">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
</div>`,readingTime:{minutes:8.01,words:2402},title:`学习/研究`,icon:`fa-solid fa-bookmark`,order:22,type:`article`}}],[`/popular/website/bookmarks-resources/23-item-cd6a49c3/`,{loader:()=>J(()=>import(`./README-DVyVTMwS.js`),[]),meta:{date:1783053468e3,excerpt:`<h2>当前分类</h2>
`,readingTime:{minutes:.09,words:28},title:`学习相关`,icon:`fa-solid fa-folder-open`,type:`article`}}],[`/404.html`,{loader:()=>J(()=>import(`./404.html-Bgl2enOf.js`),[]),meta:{title:``}}],[`/category/`,{loader:()=>J(()=>import(`./index.html-CE9cFB45.js`),[]),meta:{title:`分类`,index:!1}}],[`/category/android/`,{loader:()=>J(()=>import(`./index.html-B4qOIhgJ.js`),[]),meta:{title:`Android 分类`,index:!1}}],[`/category/%E6%94%B6%E9%9B%86/`,{loader:()=>J(()=>import(`./index.html-qA5l6sEx.js`),[]),meta:{title:`收集 分类`,index:!1}}],[`/category/windows/`,{loader:()=>J(()=>import(`./index.html-BrVxfdmh.js`),[]),meta:{title:`Windows 分类`,index:!1}}],[`/tag/`,{loader:()=>J(()=>import(`./index2.html-cAOxNjQ4.js`),[]),meta:{title:`标签`,index:!1}}],[`/tag/%E5%88%B7%E6%9C%BA/`,{loader:()=>J(()=>import(`./index2.html-CfzlzjWZ.js`),[]),meta:{title:`标签: 刷机`,index:!1}}],[`/tag/arch/`,{loader:()=>J(()=>import(`./index.html-DZf-aIZI.js`),[]),meta:{title:`标签: arch`,index:!1}}],[`/tag/kde/`,{loader:()=>J(()=>import(`./index2.html-Dbq0W6dq.js`),[]),meta:{title:`标签: KDE`,index:!1}}],[`/tag/%E8%B7%AF%E7%94%B1%E5%99%A8/`,{loader:()=>J(()=>import(`./index.html-Bb054GMR.js`),[]),meta:{title:`标签: 路由器`,index:!1}}],[`/tag/immortalwrt/`,{loader:()=>J(()=>import(`./index2.html-k4Duju7b.js`),[]),meta:{title:`标签: ImmortalWrt`,index:!1}}],[`/tag/nas/`,{loader:()=>J(()=>import(`./index2.html-CU325OdG.js`),[]),meta:{title:`标签: NAS`,index:!1}}],[`/tag/%E4%BB%A3%E7%90%86/`,{loader:()=>J(()=>import(`./index2.html-CPW6ioti.js`),[]),meta:{title:`标签: 代理`,index:!1}}],[`/tag/ubuntu/`,{loader:()=>J(()=>import(`./index.html-zsSuJU9o.js`),[]),meta:{title:`标签: Ubuntu`,index:!1}}],[`/tag/linux/`,{loader:()=>J(()=>import(`./index2.html-BruQfdqD.js`),[]),meta:{title:`标签: Linux`,index:!1}}],[`/tag/desktop/`,{loader:()=>J(()=>import(`./index.html-Dlxg1oAC.js`),[]),meta:{title:`标签: Desktop`,index:!1}}],[`/tag/%E6%BF%80%E6%B4%BB/`,{loader:()=>J(()=>import(`./index2.html-D8W-MZcL.js`),[]),meta:{title:`标签: 激活`,index:!1}}],[`/tag/%E6%B1%87%E7%BC%96%E8%AF%AD%E6%B3%95/`,{loader:()=>J(()=>import(`./index2.html-0nyBTo0W.js`),[]),meta:{title:`标签: 汇编语法`,index:!1}}],[`/tag/at_t%E8%AF%AD%E6%B3%95/`,{loader:()=>J(()=>import(`./index.html-D86B0Gxv.js`),[]),meta:{title:`标签: AT&T语法`,index:!1}}],[`/tag/aarch64%E8%AF%AD%E6%B3%95/`,{loader:()=>J(()=>import(`./index.html-CuZYwpyu.js`),[]),meta:{title:`标签: AArch64语法`,index:!1}}],[`/tag/%E6%8C%87%E4%BB%A4%E6%A0%BC%E5%BC%8F/`,{loader:()=>J(()=>import(`./index.html-BP1YV6aH.js`),[]),meta:{title:`标签: 指令格式`,index:!1}}],[`/tag/%E5%85%A5%E5%8F%A3%E7%AC%A6%E5%8F%B7/`,{loader:()=>J(()=>import(`./index2.html-B7L5OEBz.js`),[]),meta:{title:`标签: 入口符号`,index:!1}}],[`/tag/%E5%B7%A5%E5%85%B7%E9%93%BE/`,{loader:()=>J(()=>import(`./index.html-DjpdxNLo.js`),[]),meta:{title:`标签: 工具链`,index:!1}}],[`/tag/%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%80/`,{loader:()=>J(()=>import(`./index2.html-Cq8jn5uu.js`),[]),meta:{title:`标签: 内存布局`,index:!1}}],[`/tag/%E6%AE%B5/`,{loader:()=>J(()=>import(`./index2.html-DzaV0x65.js`),[]),meta:{title:`标签: 段`,index:!1}}],[`/tag/section/`,{loader:()=>J(()=>import(`./index.html-CRQ6QKLl.js`),[]),meta:{title:`标签: section`,index:!1}}],[`/tag/segment/`,{loader:()=>J(()=>import(`./index.html-CBpRphSr.js`),[]),meta:{title:`标签: segment`,index:!1}}],[`/tag/elf/`,{loader:()=>J(()=>import(`./index.html-BNrKOv0O.js`),[]),meta:{title:`标签: ELF`,index:!1}}],[`/tag/mach-o/`,{loader:()=>J(()=>import(`./index2.html-Ca_2tKq0.js`),[]),meta:{title:`标签: Mach-O`,index:!1}}],[`/tag/%E5%AF%84%E5%AD%98%E5%99%A8/`,{loader:()=>J(()=>import(`./index.html-DWXbH5KA.js`),[]),meta:{title:`标签: 寄存器`,index:!1}}],[`/tag/%E8%B0%83%E7%94%A8%E7%BA%A6%E5%AE%9A/`,{loader:()=>J(()=>import(`./index.html-CISo1bMj.js`),[]),meta:{title:`标签: 调用约定`,index:!1}}],[`/tag/rflags/`,{loader:()=>J(()=>import(`./index.html-CCMDhrh6.js`),[]),meta:{title:`标签: RFLAGS`,index:!1}}],[`/tag/nzcv/`,{loader:()=>J(()=>import(`./index.html--BSRYs93.js`),[]),meta:{title:`标签: NZCV`,index:!1}}],[`/tag/%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92/`,{loader:()=>J(()=>import(`./index.html-Dd1lzglB.js`),[]),meta:{title:`标签: 参数传递`,index:!1}}],[`/tag/%E8%BF%94%E5%9B%9E%E5%80%BC/`,{loader:()=>J(()=>import(`./index.html-DcBvu4AB.js`),[]),meta:{title:`标签: 返回值`,index:!1}}],[`/tag/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8/`,{loader:()=>J(()=>import(`./index.html-DmHn1E1c.js`),[]),meta:{title:`标签: 系统调用`,index:!1}}],[`/tag/syscall/`,{loader:()=>J(()=>import(`./index.html-CLtllnGm.js`),[]),meta:{title:`标签: syscall`,index:!1}}],[`/tag/svc/`,{loader:()=>J(()=>import(`./index.html-BMSzkSpW.js`),[]),meta:{title:`标签: svc`,index:!1}}],[`/tag/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E5%8F%B7/`,{loader:()=>J(()=>import(`./index.html-BNEDa7Ek.js`),[]),meta:{title:`标签: 系统调用号`,index:!1}}],[`/tag/%E5%8F%82%E6%95%B0%E5%AF%84%E5%AD%98%E5%99%A8/`,{loader:()=>J(()=>import(`./index.html-Cu6Zk2SC.js`),[]),meta:{title:`标签: 参数寄存器`,index:!1}}],[`/tag/abi/`,{loader:()=>J(()=>import(`./index.html-DFE6X6Jd.js`),[]),meta:{title:`标签: ABI`,index:!1}}],[`/tag/%E5%AF%BB%E5%9D%80%E6%96%B9%E5%BC%8F/`,{loader:()=>J(()=>import(`./index.html-BusIzpJ8.js`),[]),meta:{title:`标签: 寻址方式`,index:!1}}],[`/tag/%E5%86%85%E5%AD%98%E8%AE%BF%E9%97%AE/`,{loader:()=>J(()=>import(`./index2.html-BrC2Otrp.js`),[]),meta:{title:`标签: 内存访问`,index:!1}}],[`/tag/rip%E7%9B%B8%E5%AF%B9%E5%AF%BB%E5%9D%80/`,{loader:()=>J(()=>import(`./index.html-ChB3v1uk.js`),[]),meta:{title:`标签: RIP相对寻址`,index:!1}}],[`/tag/adrp/`,{loader:()=>J(()=>import(`./index.html-C1Pzy7MO.js`),[]),meta:{title:`标签: adrp`,index:!1}}],[`/tag/%E9%87%8D%E5%AE%9A%E4%BD%8D/`,{loader:()=>J(()=>import(`./index.html-U20B8hcU.js`),[]),meta:{title:`标签: 重定位`,index:!1}}],[`/tag/%E5%8F%98%E9%87%8F/`,{loader:()=>J(()=>import(`./index.html-DdLDyswe.js`),[]),meta:{title:`标签: 变量`,index:!1}}],[`/tag/%E6%95%B0%E6%8D%AE%E6%AE%B5/`,{loader:()=>J(()=>import(`./index.html-DBbjnvrN.js`),[]),meta:{title:`标签: 数据段`,index:!1}}],[`/tag/bss/`,{loader:()=>J(()=>import(`./index.html-DhLd2SWY.js`),[]),meta:{title:`标签: bss`,index:!1}}],[`/tag/load-store/`,{loader:()=>J(()=>import(`./index2.html-CKqmLOSk.js`),[]),meta:{title:`标签: load-store`,index:!1}}],[`/tag/%E5%86%85%E5%AD%98%E8%AF%BB%E5%86%99/`,{loader:()=>J(()=>import(`./index2.html-DZ3jTIGQ.js`),[]),meta:{title:`标签: 内存读写`,index:!1}}],[`/tag/%E5%B8%B8%E9%87%8F/`,{loader:()=>J(()=>import(`./index.html-CRSW1Zul.js`),[]),meta:{title:`标签: 常量`,index:!1}}],[`/tag/equ/`,{loader:()=>J(()=>import(`./index.html-BX4AMvW4.js`),[]),meta:{title:`标签: equ`,index:!1}}],[`/tag/%E7%AB%8B%E5%8D%B3%E6%95%B0/`,{loader:()=>J(()=>import(`./index2.html-COKbe4Qw.js`),[]),meta:{title:`标签: 立即数`,index:!1}}],[`/tag/%E5%8F%AA%E8%AF%BB%E6%95%B0%E6%8D%AE/`,{loader:()=>J(()=>import(`./index.html-CJRGF0r8.js`),[]),meta:{title:`标签: 只读数据`,index:!1}}],[`/tag/%E6%B1%87%E7%BC%96%E6%9C%9F/`,{loader:()=>J(()=>import(`./index2.html-DoSlAA87.js`),[]),meta:{title:`标签: 汇编期`,index:!1}}],[`/tag/%E7%AE%97%E6%9C%AF%E6%8C%87%E4%BB%A4/`,{loader:()=>J(()=>import(`./index2.html-DPwsim9T.js`),[]),meta:{title:`标签: 算术指令`,index:!1}}],[`/tag/%E6%95%B4%E6%95%B0%E8%BF%90%E7%AE%97/`,{loader:()=>J(()=>import(`./index2.html-Cq9zP1la.js`),[]),meta:{title:`标签: 整数运算`,index:!1}}],[`/tag/%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4/`,{loader:()=>J(()=>import(`./index2.html-BDq7RCdx.js`),[]),meta:{title:`标签: 加减乘除`,index:!1}}],[`/tag/%E6%A0%87%E5%BF%97%E4%BD%8D/`,{loader:()=>J(()=>import(`./index2.html-DsNep21r.js`),[]),meta:{title:`标签: 标志位`,index:!1}}],[`/tag/%E4%B9%98%E6%B3%95/`,{loader:()=>J(()=>import(`./index2.html-C2F4PFJM.js`),[]),meta:{title:`标签: 乘法`,index:!1}}],[`/tag/%E9%99%A4%E6%B3%95/`,{loader:()=>J(()=>import(`./index.html-DQbD78X3.js`),[]),meta:{title:`标签: 除法`,index:!1}}],[`/tag/%E9%80%BB%E8%BE%91%E6%8C%87%E4%BB%A4/`,{loader:()=>J(()=>import(`./index.html-DnzicfxZ.js`),[]),meta:{title:`标签: 逻辑指令`,index:!1}}],[`/tag/%E4%BD%8D%E8%BF%90%E7%AE%97/`,{loader:()=>J(()=>import(`./index2.html-BlOpbESC.js`),[]),meta:{title:`标签: 位运算`,index:!1}}],[`/tag/%E6%8E%A9%E7%A0%81/`,{loader:()=>J(()=>import(`./index.html-JLqfW_vR.js`),[]),meta:{title:`标签: 掩码`,index:!1}}],[`/tag/%E7%A7%BB%E4%BD%8D/`,{loader:()=>J(()=>import(`./index2.html-Pb-qzoXr.js`),[]),meta:{title:`标签: 移位`,index:!1}}],[`/tag/%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD/`,{loader:()=>J(()=>import(`./index2.html-BC0DSBlT.js`),[]),meta:{title:`标签: 条件判断`,index:!1}}],[`/tag/%E6%AF%94%E8%BE%83%E6%8C%87%E4%BB%A4/`,{loader:()=>J(()=>import(`./index2.html-DnVC8dRM.js`),[]),meta:{title:`标签: 比较指令`,index:!1}}],[`/tag/%E6%9D%A1%E4%BB%B6%E8%B7%B3%E8%BD%AC/`,{loader:()=>J(()=>import(`./index2.html-DhnOF8SP.js`),[]),meta:{title:`标签: 条件跳转`,index:!1}}],[`/tag/signed/`,{loader:()=>J(()=>import(`./index.html-TYxDXvJb.js`),[]),meta:{title:`标签: signed`,index:!1}}],[`/tag/unsigned/`,{loader:()=>J(()=>import(`./index.html-Eg_MUAgj.js`),[]),meta:{title:`标签: unsigned`,index:!1}}],[`/tag/%E5%BE%AA%E7%8E%AF%E7%BB%93%E6%9E%84/`,{loader:()=>J(()=>import(`./index.html-CZt9rLri.js`),[]),meta:{title:`标签: 循环结构`,index:!1}}],[`/tag/while/`,{loader:()=>J(()=>import(`./index2.html-DgwrcS7i.js`),[]),meta:{title:`标签: while`,index:!1}}],[`/tag/for/`,{loader:()=>J(()=>import(`./index.html-DspHRFJ4.js`),[]),meta:{title:`标签: for`,index:!1}}],[`/tag/break/`,{loader:()=>J(()=>import(`./index.html-BATvuz1j.js`),[]),meta:{title:`标签: break`,index:!1}}],[`/tag/continue/`,{loader:()=>J(()=>import(`./index.html-BB0xzSrJ.js`),[]),meta:{title:`标签: continue`,index:!1}}],[`/tag/%E6%8E%A7%E5%88%B6%E6%B5%81/`,{loader:()=>J(()=>import(`./index.html-Ck-5sazq.js`),[]),meta:{title:`标签: 控制流`,index:!1}}],[`/tag/%E6%95%B0%E5%AD%97%E5%A4%84%E7%90%86/`,{loader:()=>J(()=>import(`./index.html-DbvVPHQJ.js`),[]),meta:{title:`标签: 数字处理`,index:!1}}],[`/tag/%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2/`,{loader:()=>J(()=>import(`./index.html-C37mRcSt.js`),[]),meta:{title:`标签: 整数转换`,index:!1}}],[`/tag/ascii/`,{loader:()=>J(()=>import(`./index.html-DnjuxIsi.js`),[]),meta:{title:`标签: ASCII`,index:!1}}],[`/tag/%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2/`,{loader:()=>J(()=>import(`./index.html-BxUDuxsU.js`),[]),meta:{title:`标签: 进制转换`,index:!1}}],[`/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86/`,{loader:()=>J(()=>import(`./index.html-B6C_ghgY.js`),[]),meta:{title:`标签: 字符串处理`,index:!1}}],[`/tag/%E5%AD%97%E7%AC%A6%E6%95%B0%E7%BB%84/`,{loader:()=>J(()=>import(`./index.html-Cg6T-vgz.js`),[]),meta:{title:`标签: 字符数组`,index:!1}}],[`/tag/strlen/`,{loader:()=>J(()=>import(`./index.html-Dbpu0cqx.js`),[]),meta:{title:`标签: strlen`,index:!1}}],[`/tag/%E5%A4%A7%E5%B0%8F%E5%86%99%E8%BD%AC%E6%8D%A2/`,{loader:()=>J(()=>import(`./index.html-DQaNKj35.js`),[]),meta:{title:`标签: 大小写转换`,index:!1}}],[`/tag/%E6%95%B0%E7%BB%84/`,{loader:()=>J(()=>import(`./index.html-CH_UwBmi.js`),[]),meta:{title:`标签: 数组`,index:!1}}],[`/tag/%E7%B4%A2%E5%BC%95%E5%AF%BB%E5%9D%80/`,{loader:()=>J(()=>import(`./index.html-t-62uatB.js`),[]),meta:{title:`标签: 索引寻址`,index:!1}}],[`/tag/%E6%8C%87%E9%92%88%E9%81%8D%E5%8E%86/`,{loader:()=>J(()=>import(`./index.html-DTGGjl9R.js`),[]),meta:{title:`标签: 指针遍历`,index:!1}}],[`/tag/%E5%85%83%E7%B4%A0%E5%AE%BD%E5%BA%A6/`,{loader:()=>J(()=>import(`./index2.html-DOpOwH5_.js`),[]),meta:{title:`标签: 元素宽度`,index:!1}}],[`/tag/%E8%BF%87%E7%A8%8B/`,{loader:()=>J(()=>import(`./index.html-CB1nX3D2.js`),[]),meta:{title:`标签: 过程`,index:!1}}],[`/tag/%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8/`,{loader:()=>J(()=>import(`./index2.html-BjpktW_X.js`),[]),meta:{title:`标签: 函数调用`,index:!1}}],[`/tag/%E6%A0%88%E5%B8%A7/`,{loader:()=>J(()=>import(`./index2.html-Dfw8fppL.js`),[]),meta:{title:`标签: 栈帧`,index:!1}}],[`/tag/%E9%80%92%E5%BD%92/`,{loader:()=>J(()=>import(`./index.html-BTPNlFSo.js`),[]),meta:{title:`标签: 递归`,index:!1}}],[`/tag/%E6%A0%88/`,{loader:()=>J(()=>import(`./index2.html-C_lA5ieo.js`),[]),meta:{title:`标签: 栈`,index:!1}}],[`/tag/%E8%BF%94%E5%9B%9E%E5%9C%B0%E5%9D%80/`,{loader:()=>J(()=>import(`./index.html-D_k4YhEj.js`),[]),meta:{title:`标签: 返回地址`,index:!1}}],[`/tag/%E9%98%B6%E4%B9%98/`,{loader:()=>J(()=>import(`./index.html-LnmizMuo.js`),[]),meta:{title:`标签: 阶乘`,index:!1}}],[`/tag/%E5%AE%8F/`,{loader:()=>J(()=>import(`./index.html-BGm29kJH.js`),[]),meta:{title:`标签: 宏`,index:!1}}],[`/tag/gnu-as/`,{loader:()=>J(()=>import(`./index.html-D5sWeZ6G.js`),[]),meta:{title:`标签: GNU as`,index:!1}}],[`/tag/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/`,{loader:()=>J(()=>import(`./index2.html-BOpGR5Bg.js`),[]),meta:{title:`标签: 代码生成`,index:!1}}],[`/tag/%E6%A8%A1%E6%9D%BF/`,{loader:()=>J(()=>import(`./index2.html-DjwMdLAP.js`),[]),meta:{title:`标签: 模板`,index:!1}}],[`/tag/%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86/`,{loader:()=>J(()=>import(`./index2.html-Cw2b1L-Y.js`),[]),meta:{title:`标签: 文件管理`,index:!1}}],[`/tag/open/`,{loader:()=>J(()=>import(`./index.html-D3FCcuUa.js`),[]),meta:{title:`标签: open`,index:!1}}],[`/tag/read/`,{loader:()=>J(()=>import(`./index.html-Szvt2blE.js`),[]),meta:{title:`标签: read`,index:!1}}],[`/tag/write/`,{loader:()=>J(()=>import(`./index2.html-B-C3cJtZ.js`),[]),meta:{title:`标签: write`,index:!1}}],[`/tag/close/`,{loader:()=>J(()=>import(`./index.html-BBNHnCaG.js`),[]),meta:{title:`标签: close`,index:!1}}],[`/tag/%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6/`,{loader:()=>J(()=>import(`./index2.html-Dy1FpG34.js`),[]),meta:{title:`标签: 文件描述符`,index:!1}}],[`/tag/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/`,{loader:()=>J(()=>import(`./index2.html-7XMb_Mam.js`),[]),meta:{title:`标签: 内存管理`,index:!1}}],[`/tag/%E5%A0%86/`,{loader:()=>J(()=>import(`./index.html-CQqzwpyJ.js`),[]),meta:{title:`标签: 堆`,index:!1}}],[`/tag/brk/`,{loader:()=>J(()=>import(`./index.html-S6IF7RrZ.js`),[]),meta:{title:`标签: brk`,index:!1}}],[`/tag/mmap/`,{loader:()=>J(()=>import(`./index2.html-BV-b4syC.js`),[]),meta:{title:`标签: mmap`,index:!1}}],[`/tag/malloc/`,{loader:()=>J(()=>import(`./index2.html-CqJAVlb0.js`),[]),meta:{title:`标签: malloc`,index:!1}}],[`/tag/%E6%B1%87%E7%BC%96%E6%95%99%E7%A8%8B/`,{loader:()=>J(()=>import(`./index2.html-4fHujWYL.js`),[]),meta:{title:`标签: 汇编教程`,index:!1}}],[`/tag/%E8%B7%A8%E6%9E%B6%E6%9E%84%E5%AF%B9%E7%85%A7/`,{loader:()=>J(()=>import(`./index.html-YeufWU7d.js`),[]),meta:{title:`标签: 跨架构对照`,index:!1}}],[`/tag/%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86/`,{loader:()=>J(()=>import(`./index.html-1i0reDU-.js`),[]),meta:{title:`标签: 底层原理`,index:!1}}],[`/tag/nvm/`,{loader:()=>J(()=>import(`./index.html-BLGPR3Cv.js`),[]),meta:{title:`标签: nvm`,index:!1}}],[`/tag/python/`,{loader:()=>J(()=>import(`./index.html-CgGF2uVV.js`),[]),meta:{title:`标签: python`,index:!1}}],[`/tag/adb/`,{loader:()=>J(()=>import(`./index.html-CnIFcyMl.js`),[]),meta:{title:`标签: adb`,index:!1}}],[`/tag/java/`,{loader:()=>J(()=>import(`./index2.html-JCila5km.js`),[]),meta:{title:`标签: java`,index:!1}}],[`/tag/cygwin/`,{loader:()=>J(()=>import(`./index.html-Ne9Ko54M.js`),[]),meta:{title:`标签: cygwin`,index:!1}}],[`/tag/docker/`,{loader:()=>J(()=>import(`./index.html-DB7eij_d.js`),[]),meta:{title:`标签: docker`,index:!1}}],[`/tag/etcd/`,{loader:()=>J(()=>import(`./index.html-v22dm1vh.js`),[]),meta:{title:`标签: etcd`,index:!1}}],[`/tag/go/`,{loader:()=>J(()=>import(`./index.html-DuKsiRBo.js`),[]),meta:{title:`标签: go`,index:!1}}],[`/tag/mongodb/`,{loader:()=>J(()=>import(`./index2.html-CwHQ0gxS.js`),[]),meta:{title:`标签: mongodb`,index:!1}}],[`/tag/mysql/`,{loader:()=>J(()=>import(`./index2.html-POMWvmUi.js`),[]),meta:{title:`标签: mysql`,index:!1}}],[`/tag/php/`,{loader:()=>J(()=>import(`./index.html-DFk1pXyt.js`),[]),meta:{title:`标签: php`,index:!1}}],[`/tag/postgresql/`,{loader:()=>J(()=>import(`./index.html-eS4lQm5N.js`),[]),meta:{title:`标签: postgresql`,index:!1}}],[`/tag/rabbitmq/`,{loader:()=>J(()=>import(`./index.html-DBJtwrA9.js`),[]),meta:{title:`标签: rabbitmq`,index:!1}}],[`/tag/redis/`,{loader:()=>J(()=>import(`./index.html-DUsFWNfI.js`),[]),meta:{title:`标签: redis`,index:!1}}],[`/tag/ruby/`,{loader:()=>J(()=>import(`./index.html-DHVmUNMX.js`),[]),meta:{title:`标签: ruby`,index:!1}}],[`/tag/rust/`,{loader:()=>J(()=>import(`./index.html-CyM72jTY.js`),[]),meta:{title:`标签: rust`,index:!1}}],[`/tag/wsl2/`,{loader:()=>J(()=>import(`./index2.html-B2-BRBl4.js`),[]),meta:{title:`标签: wsl2`,index:!1}}],[`/tag/xposed/`,{loader:()=>J(()=>import(`./index2.html-CScc4a_o.js`),[]),meta:{title:`标签: Xposed`,index:!1}}],[`/tag/lsposed/`,{loader:()=>J(()=>import(`./index2.html-4QmuafCa.js`),[]),meta:{title:`标签: LSPosed`,index:!1}}],[`/tag/android/`,{loader:()=>J(()=>import(`./index.html-CgRj97Sr.js`),[]),meta:{title:`标签: Android`,index:!1}}],[`/tag/java/`,{loader:()=>J(()=>import(`./index2.html-JCila5km.js`),[]),meta:{title:`标签: Java`,index:!1}}],[`/tag/hook/`,{loader:()=>J(()=>import(`./index2.html-BlXH0OAt.js`),[]),meta:{title:`标签: Hook`,index:!1}}],[`/tag/%E5%8F%8D%E6%A3%80%E6%B5%8B/`,{loader:()=>J(()=>import(`./index.html-qzYmW8dF.js`),[]),meta:{title:`标签: 反检测`,index:!1}}],[`/tag/crypto/`,{loader:()=>J(()=>import(`./index.html-uts0DVdl.js`),[]),meta:{title:`标签: Crypto`,index:!1}}],[`/tag/ipc/`,{loader:()=>J(()=>import(`./index2.html-CCK3RX3I.js`),[]),meta:{title:`标签: IPC`,index:!1}}],[`/tag/aidl/`,{loader:()=>J(()=>import(`./index.html-DsMW0bnv.js`),[]),meta:{title:`标签: AIDL`,index:!1}}],[`/tag/native-hook/`,{loader:()=>J(()=>import(`./index2.html-DfVGBmMA.js`),[]),meta:{title:`标签: Native Hook`,index:!1}}],[`/tag/jni/`,{loader:()=>J(()=>import(`./index2.html-jrPJ4bht.js`),[]),meta:{title:`标签: JNI`,index:!1}}],[`/tag/dobby/`,{loader:()=>J(()=>import(`./index.html-C_wrvwlr.js`),[]),meta:{title:`标签: Dobby`,index:!1}}],[`/tag/%E6%8C%87%E4%BB%A4%E6%8F%92%E6%A1%A9/`,{loader:()=>J(()=>import(`./index.html-BWRn9-FM.js`),[]),meta:{title:`标签: 指令插桩`,index:!1}}],[`/tag/registernatives/`,{loader:()=>J(()=>import(`./index.html-CnhlWhdD.js`),[]),meta:{title:`标签: RegisterNatives`,index:!1}}],[`/tag/%E5%8A%A8%E6%80%81%E5%88%86%E6%9E%90/`,{loader:()=>J(()=>import(`./index2.html-CyCZI8np.js`),[]),meta:{title:`标签: 动态分析`,index:!1}}],[`/tag/%E5%A0%86%E6%A0%88%E8%BF%BD%E8%B8%AA/`,{loader:()=>J(()=>import(`./index.html-Cjo743U4.js`),[]),meta:{title:`标签: 堆栈追踪`,index:!1}}],[`/tag/xposed_-kotlin_-okhttp_-network/`,{loader:()=>J(()=>import(`./index2.html-B5wBDFfE.js`),[]),meta:{title:`标签: Xposed, Kotlin, OkHttp, Network`,index:!1}}],[`/tag/xposed_-dexkit_-%E6%B7%B7%E6%B7%86_-%E5%8F%8D%E7%BC%96%E8%AF%91_-%E5%8A%A8%E6%80%81%E5%88%86%E6%9E%90/`,{loader:()=>J(()=>import(`./index2.html-DxXpisCt.js`),[]),meta:{title:`标签: Xposed, DexKit, 混淆, 反编译, 动态分析`,index:!1}}],[`/tag/dex/`,{loader:()=>J(()=>import(`./index.html-DHWg6r5u.js`),[]),meta:{title:`标签: Dex`,index:!1}}],[`/tag/%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B/`,{loader:()=>J(()=>import(`./index.html-COshmuHp.js`),[]),meta:{title:`标签: 逆向工程`,index:!1}}],[`/tag/%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F/`,{loader:()=>J(()=>import(`./index2.html-BZeUBjf8.js`),[]),meta:{title:`标签: 文件格式`,index:!1}}],[`/tag/xposed_-dexkit_-architecture_-c___-performance/`,{loader:()=>J(()=>import(`./index2.html-BEw0JIPq.js`),[]),meta:{title:`标签: Xposed, DexKit, Architecture, C++, Performance`,index:!1}}],[`/tag/native/`,{loader:()=>J(()=>import(`./index.html-CBGwu2Nn.js`),[]),meta:{title:`标签: Native`,index:!1}}],[`/tag/xposed_-yukihookapi_-dexkit_-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F_-hook/`,{loader:()=>J(()=>import(`./index2.html-CQg4JnLY.js`),[]),meta:{title:`标签: Xposed, YukiHookAPI, DexKit, 生命周期, Hook`,index:!1}}],[`/tag/libxposed/`,{loader:()=>J(()=>import(`./index2.html-B2YKot8A.js`),[]),meta:{title:`标签: libxposed`,index:!1}}],[`/tag/kotlin/`,{loader:()=>J(()=>import(`./index2.html-DXqDwOnr.js`),[]),meta:{title:`标签: Kotlin`,index:!1}}],[`/tag/sekiro/`,{loader:()=>J(()=>import(`./index.html-Du-7lDex.js`),[]),meta:{title:`标签: Sekiro`,index:!1}}],[`/tag/rpc/`,{loader:()=>J(()=>import(`./index.html-B0UbM8x3.js`),[]),meta:{title:`标签: RPC`,index:!1}}],[`/tag/art/`,{loader:()=>J(()=>import(`./index.html-BdQnxTgI.js`),[]),meta:{title:`标签: ART`,index:!1}}],[`/tag/artmethod/`,{loader:()=>J(()=>import(`./index.html-DtQE9yc5.js`),[]),meta:{title:`标签: ArtMethod`,index:!1}}],[`/tag/android-runtime/`,{loader:()=>J(()=>import(`./index.html-DSpw52a6.js`),[]),meta:{title:`标签: Android Runtime`,index:!1}}],[`/tag/oat/`,{loader:()=>J(()=>import(`./index.html-ifOdxFUy.js`),[]),meta:{title:`标签: OAT`,index:!1}}],[`/tag/classlinker/`,{loader:()=>J(()=>import(`./index.html-DWR55S7r.js`),[]),meta:{title:`标签: ClassLinker`,index:!1}}],[`/tag/mirror/`,{loader:()=>J(()=>import(`./index2.html-ayJaNLy2.js`),[]),meta:{title:`标签: mirror`,index:!1}}],[`/tag/classloader/`,{loader:()=>J(()=>import(`./index.html-BmVZqhb8.js`),[]),meta:{title:`标签: ClassLoader`,index:!1}}],[`/tag/lsplant/`,{loader:()=>J(()=>import(`./index2.html-C98Htk8C.js`),[]),meta:{title:`标签: LSPlant`,index:!1}}],[`/tag/arm64/`,{loader:()=>J(()=>import(`./index.html-i7z60Cp3.js`),[]),meta:{title:`标签: ARM64`,index:!1}}],[`/tag/cmake/`,{loader:()=>J(()=>import(`./index.html-C_DzRKL3.js`),[]),meta:{title:`标签: CMake`,index:!1}}],[`/tag/c__20/`,{loader:()=>J(()=>import(`./index.html-Hq1f8hUQ.js`),[]),meta:{title:`标签: C++20`,index:!1}}],[`/tag/jit/`,{loader:()=>J(()=>import(`./index2.html-7RcrHnUK.js`),[]),meta:{title:`标签: JIT`,index:!1}}],[`/tag/unhook/`,{loader:()=>J(()=>import(`./index.html-qg8FUmyb.js`),[]),meta:{title:`标签: UnHook`,index:!1}}],[`/tag/lsplt/`,{loader:()=>J(()=>import(`./index2.html-Dpqcydop.js`),[]),meta:{title:`标签: LSPlt`,index:!1}}],[`/tag/plt-hook/`,{loader:()=>J(()=>import(`./index.html-DIPvkBXn.js`),[]),meta:{title:`标签: PLT Hook`,index:!1}}],[`/tag/frida/`,{loader:()=>J(()=>import(`./index.html-BODa9qa1.js`),[]),meta:{title:`标签: Frida`,index:!1}}],[`/tag/so-%E5%8A%A8%E6%80%81%E6%B3%A8%E5%85%A5/`,{loader:()=>J(()=>import(`./index.html-Be8WTaR0.js`),[]),meta:{title:`标签: SO 动态注入`,index:!1}}],[`/tag/c__/`,{loader:()=>J(()=>import(`./index.html-CYqHMm2e.js`),[]),meta:{title:`标签: C++`,index:!1}}],[`/tag/c__%E6%95%99%E7%A8%8B/`,{loader:()=>J(()=>import(`./index.html-CyfWN5Hy.js`),[]),meta:{title:`标签: C++教程`,index:!1}}],[`/tag/%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95/`,{loader:()=>J(()=>import(`./index.html-DauHbEan.js`),[]),meta:{title:`标签: 基础语法`,index:!1}}],[`/tag/%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/`,{loader:()=>J(()=>import(`./index2.html-CTXr4YSj.js`),[]),meta:{title:`标签: 类型系统`,index:!1}}],[`/tag/%E5%87%BD%E6%95%B0/`,{loader:()=>J(()=>import(`./index2.html-TJdv_aMC.js`),[]),meta:{title:`标签: 函数`,index:!1}}],[`/tag/%E7%BC%96%E8%AF%91%E6%9E%84%E5%BB%BA/`,{loader:()=>J(()=>import(`./index.html-D5W3GTgj.js`),[]),meta:{title:`标签: 编译构建`,index:!1}}],[`/tag/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/`,{loader:()=>J(()=>import(`./index.html-C9FJNfZ5.js`),[]),meta:{title:`标签: 面向对象`,index:!1}}],[`/tag/%E7%B1%BB/`,{loader:()=>J(()=>import(`./index2.html-DsfDFdUV.js`),[]),meta:{title:`标签: 类`,index:!1}}],[`/tag/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0/`,{loader:()=>J(()=>import(`./index2.html-CtcwI327.js`),[]),meta:{title:`标签: 构造函数`,index:!1}}],[`/tag/%E6%8B%B7%E8%B4%9D%E6%9E%84%E9%80%A0/`,{loader:()=>J(()=>import(`./index.html-CDk2Ndq2.js`),[]),meta:{title:`标签: 拷贝构造`,index:!1}}],[`/tag/%E7%A7%BB%E5%8A%A8%E6%9E%84%E9%80%A0/`,{loader:()=>J(()=>import(`./index2.html-NyHe8vFC.js`),[]),meta:{title:`标签: 移动构造`,index:!1}}],[`/tag/%E7%BB%A7%E6%89%BF/`,{loader:()=>J(()=>import(`./index.html-BpMmr9I3.js`),[]),meta:{title:`标签: 继承`,index:!1}}],[`/tag/%E5%A4%9A%E6%80%81/`,{loader:()=>J(()=>import(`./index.html-BwLxYJNV.js`),[]),meta:{title:`标签: 多态`,index:!1}}],[`/tag/%E8%99%9A%E5%87%BD%E6%95%B0/`,{loader:()=>J(()=>import(`./index.html-oMxDaELb.js`),[]),meta:{title:`标签: 虚函数`,index:!1}}],[`/tag/%E5%87%BD%E6%95%B0%E6%A8%A1%E6%9D%BF/`,{loader:()=>J(()=>import(`./index2.html--imSKX2j.js`),[]),meta:{title:`标签: 函数模板`,index:!1}}],[`/tag/%E7%B1%BB%E6%A8%A1%E6%9D%BF/`,{loader:()=>J(()=>import(`./index.html-Ct-PAnIk.js`),[]),meta:{title:`标签: 类模板`,index:!1}}],[`/tag/stl/`,{loader:()=>J(()=>import(`./index.html-Dhh7VtQu.js`),[]),meta:{title:`标签: STL`,index:!1}}],[`/tag/%E5%AE%B9%E5%99%A8/`,{loader:()=>J(()=>import(`./index.html-C7-jaAr2.js`),[]),meta:{title:`标签: 容器`,index:!1}}],[`/tag/%E6%B3%9B%E5%9E%8B%E7%BC%96%E7%A8%8B/`,{loader:()=>J(()=>import(`./index2.html-DOxOaIsh.js`),[]),meta:{title:`标签: 泛型编程`,index:!1}}],[`/tag/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/`,{loader:()=>J(()=>import(`./index.html-I7jdh69t.js`),[]),meta:{title:`标签: 异常处理`,index:!1}}],[`/tag/try-catch/`,{loader:()=>J(()=>import(`./index.html-BBnZuukc.js`),[]),meta:{title:`标签: try catch`,index:!1}}],[`/tag/throw/`,{loader:()=>J(()=>import(`./index.html-P8iaX_EI.js`),[]),meta:{title:`标签: throw`,index:!1}}],[`/tag/noexcept/`,{loader:()=>J(()=>import(`./index.html-BTghHdST.js`),[]),meta:{title:`标签: noexcept`,index:!1}}],[`/tag/raii/`,{loader:()=>J(()=>import(`./index.html-QD1NjWdK.js`),[]),meta:{title:`标签: RAII`,index:!1}}],[`/tag/android-ndk/`,{loader:()=>J(()=>import(`./index.html-Bab88rWP.js`),[]),meta:{title:`标签: Android NDK`,index:!1}}],[`/tag/%E6%8C%87%E9%92%88/`,{loader:()=>J(()=>import(`./index.html-RCPpdgI3.js`),[]),meta:{title:`标签: 指针`,index:!1}}],[`/tag/%E5%BC%95%E7%94%A8/`,{loader:()=>J(()=>import(`./index.html-unfMOrIU.js`),[]),meta:{title:`标签: 引用`,index:!1}}],[`/tag/%E6%8B%B7%E8%B4%9D%E8%AF%AD%E4%B9%89/`,{loader:()=>J(()=>import(`./index.html-CWRtsJDQ.js`),[]),meta:{title:`标签: 拷贝语义`,index:!1}}],[`/tag/%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/`,{loader:()=>J(()=>import(`./index2.html-Dv59o-93.js`),[]),meta:{title:`标签: 移动语义`,index:!1}}],[`/tag/const/`,{loader:()=>J(()=>import(`./index.html-CpPKsc3R.js`),[]),meta:{title:`标签: const`,index:!1}}],[`/tag/%E5%A4%B4%E6%96%87%E4%BB%B6/`,{loader:()=>J(()=>import(`./index.html-Cfo5ax6s.js`),[]),meta:{title:`标签: 头文件`,index:!1}}],[`/tag/%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88/`,{loader:()=>J(()=>import(`./index2.html-JG6viCxk.js`),[]),meta:{title:`标签: 智能指针`,index:!1}}],[`/tag/lambda/`,{loader:()=>J(()=>import(`./index2.html-HXU5DhxV.js`),[]),meta:{title:`标签: Lambda`,index:!1}}],[`/tag/optional/`,{loader:()=>J(()=>import(`./index.html-DfSM3_tT.js`),[]),meta:{title:`标签: optional`,index:!1}}],[`/tag/variant/`,{loader:()=>J(()=>import(`./index.html-DmO3065o.js`),[]),meta:{title:`标签: variant`,index:!1}}],[`/tag/function/`,{loader:()=>J(()=>import(`./index.html-4NriGd2R.js`),[]),meta:{title:`标签: function`,index:!1}}],[`/tag/%E5%A4%9A%E7%BA%BF%E7%A8%8B/`,{loader:()=>J(()=>import(`./index.html-CriVbF7E.js`),[]),meta:{title:`标签: 多线程`,index:!1}}],[`/tag/jnigraphics/`,{loader:()=>J(()=>import(`./index2.html-BVTkLH6B.js`),[]),meta:{title:`标签: jnigraphics`,index:!1}}],[`/tag/aaudio/`,{loader:()=>J(()=>import(`./index.html-D3w50Zh7.js`),[]),meta:{title:`标签: AAudio`,index:!1}}],[`/tag/opensl-es/`,{loader:()=>J(()=>import(`./index.html-BT_DOUCU.js`),[]),meta:{title:`标签: OpenSL ES`,index:!1}}],[`/tag/opengl-es/`,{loader:()=>J(()=>import(`./index.html-Dy09afMx.js`),[]),meta:{title:`标签: OpenGL ES`,index:!1}}],[`/tag/vulkan/`,{loader:()=>J(()=>import(`./index2.html-cmF6qIeA.js`),[]),meta:{title:`标签: Vulkan`,index:!1}}],[`/tag/bitmap/`,{loader:()=>J(()=>import(`./index.html-1ZXKqlQK.js`),[]),meta:{title:`标签: Bitmap`,index:!1}}],[`/tag/libyuv/`,{loader:()=>J(()=>import(`./index2.html-CUWET0sv.js`),[]),meta:{title:`标签: libyuv`,index:!1}}],[`/tag/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86/`,{loader:()=>J(()=>import(`./index.html-BofFGVqu.js`),[]),meta:{title:`标签: 图像处理`,index:!1}}],[`/tag/vps/`,{loader:()=>J(()=>import(`./index2.html-Brm1v44E.js`),[]),meta:{title:`标签: VPS`,index:!1}}],[`/tag/debian/`,{loader:()=>J(()=>import(`./index.html-CY4gZJQH.js`),[]),meta:{title:`标签: Debian`,index:!1}}],[`/tag/%E5%AE%89%E5%85%A8/`,{loader:()=>J(()=>import(`./index.html-BwgbafWf.js`),[]),meta:{title:`标签: 安全`,index:!1}}],[`/article/`,{loader:()=>J(()=>import(`./index.html-vImPl4GG.js`),[]),meta:{title:`文章`,index:!1}}],[`/star/`,{loader:()=>J(()=>import(`./index.html-Bbt9J4h3.js`),[]),meta:{title:`星标`,index:!1}}],[`/timeline/`,{loader:()=>J(()=>import(`./index.html-CED_zlU4.js`),[]),meta:{title:`时间轴`,index:!1}}]]),$u=Symbol(``),ed=()=>{let e=L($u);if(!e)throw Error(`useClientData() is called without provider.`);return e},td=()=>ed().pageComponent,nd=()=>ed().pageData,rd=()=>ed().pageFrontmatter,id=()=>ed().pageHead,ad=()=>ed().pageLang,od=()=>ed().pageLayout,sd=()=>ed().routeLocale,cd=()=>ed().routePath,ld=()=>ed().siteData,ud=ed,dd=rd,fd=ad,pd=nd,md=new Set,hd=e=>{md.add(e),fi(()=>{md.delete(e)})},gd=Symbol(``),_d=F(Zu),vd=F(Qu),yd=(e,t)=>{let n=Pc(e,t);if(vd.value[n])return n;let r=encodeURI(n);return vd.value[r]?r:_d.value[n]||_d.value[r]||n},bd=(e,t)=>{let{pathname:n,hashAndQueries:r}=Rc(e),i=yd(n,t),a=i+r;return vd.value[i]?{...vd.value[i],path:a,notFound:!1}:{...vd.value[`/404.html`],path:a,notFound:!0}},xd=(e,t)=>{let{pathname:n,hashAndQueries:r}=Rc(e);return yd(n,t)+r},Sd=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&e.currentTarget.getAttribute(`target`)?.match(/\b_blank\b/i)))return e.preventDefault(),!0},Cd=z({name:`RouteLink`,props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:`route-link-active`}},slots:Object,setup(e,{slots:t}){let n=ul(),r=dl(),i=W(()=>e.to.startsWith(`#`)||e.to.startsWith(`?`)?e.to:`/${xd(e.to,r.path).substring(1)}`);return()=>G(`a`,{class:[`route-link`,{[e.activeClass]:e.active}],href:i.value,onClick:(t={})=>{Sd(t)&&n.push(e.to).catch()}},t.default())}}),wd=z({name:`AutoLink`,props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){let n=Sn(e,`config`),r=dl(),i=ld(),a=W(()=>Oc(n.value.link)),o=W(()=>n.value.target||(a.value?`_blank`:void 0)),s=W(()=>o.value===`_blank`),c=W(()=>!a.value&&!s.value),l=W(()=>n.value.rel||(s.value?`noopener noreferrer`:null)),u=W(()=>n.value.ariaLabel??n.value.text),d=W(()=>{if(n.value.exact)return!1;let e=Object.keys(i.value.locales);return e.length?e.every(e=>e!==n.value.link):n.value.link!==`/`}),f=W(()=>c.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,`u`)).test(r.path):d.value?r.path.startsWith(n.value.link):r.path===n.value.link:!1);return()=>{let{before:e,after:r,default:i}=t,a=i?.(n.value)??[e?.(n.value),n.value.text,r?.(n.value)];return c.value?G(Cd,{class:`auto-link`,to:n.value.link,active:f.value,"aria-label":u.value},()=>a):G(`a`,{class:`auto-link external-link`,href:n.value.link,"aria-label":u.value,rel:l.value,target:o.value},a)}}}),Td=z({name:`ClientOnly`,setup(e,t){let n=P(!1);return B(()=>{n.value=!0}),()=>n.value?t.slots.default?.():null}}),Ed=e=>{md.forEach(t=>t(e))},Dd=z({name:`Content`,props:{path:{type:String,required:!1,default:``}},setup(e){let t=td(),n=W(()=>{if(!e.path)return t.value;let n=bd(e.path);return $r(async()=>n.loader().then(e=>e.default))});return()=>G(n.value,{onVnodeMounted:()=>{Ed(`mounted`)},onVnodeUpdated:()=>{Ed(`updated`)},onVnodeBeforeUnmount:()=>{Ed(`beforeUnmount`)}})}}),Od=`Layout`,kd=Qt({resolveLayouts:e=>e.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(e,t,n)=>{let r=K(t.description)?t.description:n.description;return Hc([...Array.isArray(t.head)?t.head:[],...n.head,[`title`,{},e],[`meta`,{name:`description`,content:r}]])},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(e=>!!e).join(` | `),resolvePageLang:(e,t)=>e.lang||t.lang||`en-US`,resolvePageLayout:(e,t)=>{let n=K(e.frontmatter.layout)?e.frontmatter.layout:Od;if(!t[n])throw Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>Fc(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},r)=>({...n,...t[r],head:[...t[r]?.head??[],...n.head]})}),Ad=(e={})=>e,Y=e=>jc(e)?e:`/${Kc(e)}`,jd=e=>e!==void 0,Md=e=>typeof e==`number`,Nd=e=>Array.isArray(e),Pd=(e,t)=>K(e)&&e.startsWith(t),Fd=(e,t)=>K(e)&&e.endsWith(t),{entries:Id}=Object,{fromEntries:Ld}=Object,Rd=e=>Object.keys(e),{values:zd}=Object,Bd=(e,...t)=>{if(t.length===0)return e;let n=t.shift();return n&&Id(n).forEach(([t,r])=>{t===`__proto__`||t===`constructor`||(Jc(e[t])&&Jc(r)?Bd(e[t],r):Nd(r)?e[t]=[...r]:Jc(r)?e[t]={...r}:e[t]=n[t])}),Bd(e,...t)},Vd=e=>{if(e){if(typeof e==`number`)return new Date(e);let t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Hd=e=>Pd(e,`/`)&&e[1]!==`/`,Ud=Uint8Array,Wd=Uint16Array,Gd=Int32Array,Kd=new Ud([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),qd=new Ud([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Jd=new Ud([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yd=function(e,t){for(var n=new Wd(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Gd(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Xd=Yd(Kd,2),Zd=Xd.b,Qd=Xd.r;Zd[28]=258,Qd[258]=28;for(var $d=Yd(qd,0),ef=$d.b,tf=$d.r,nf=new Wd(32768),rf=0;rf<32768;++rf){var af=(rf&43690)>>1|(rf&21845)<<1;af=(af&52428)>>2|(af&13107)<<2,af=(af&61680)>>4|(af&3855)<<4,nf[rf]=((af&65280)>>8|(af&255)<<8)>>1}for(var of=(function(e,t,n){for(var r=e.length,i=0,a=new Wd(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Wd(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Wd(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[nf[d]>>c]=l}else for(s=new Wd(r),i=0;i<r;++i)e[i]&&(s[i]=nf[o[e[i]-1]++]>>15-e[i]);return s}),sf=new Ud(288),rf=0;rf<144;++rf)sf[rf]=8;for(var rf=144;rf<256;++rf)sf[rf]=9;for(var rf=256;rf<280;++rf)sf[rf]=7;for(var rf=280;rf<288;++rf)sf[rf]=8;for(var cf=new Ud(32),rf=0;rf<32;++rf)cf[rf]=5;var lf=of(sf,9,1),uf=of(cf,5,1),df=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},ff=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},pf=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},mf=function(e){return(e+7)/8|0},hf=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Ud(e.subarray(t,n))},gf=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],_f=function(e,t,n){var r=Error(t||gf[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,_f),!n)throw r;return r},vf=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new Ud(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new Ud(i*3));var l=function(e){var t=n.length;if(e>t){var r=new Ud(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=ff(e,d,1);var v=ff(e,d+1,3);if(d+=3,!v){var y=mf(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&_f(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=lf,m=uf,h=9,g=5;else if(v==2){var S=ff(e,d,31)+257,C=ff(e,d+10,15)+4,w=S+ff(e,d+5,31)+1;d+=14;for(var T=new Ud(w),E=new Ud(19),D=0;D<C;++D)E[Jd[D]]=ff(e,d+D*3,7);d+=C*3;for(var O=df(E),k=(1<<O)-1,ee=of(E,O,1),D=0;D<w;){var A=ee[ff(e,d,k)];d+=A&15;var y=A>>4;if(y<16)T[D++]=y;else{var te=0,ne=0;for(y==16?(ne=3+ff(e,d,3),d+=2,te=T[D-1]):y==17?(ne=3+ff(e,d,7),d+=3):y==18&&(ne=11+ff(e,d,127),d+=7);ne--;)T[D++]=te}}var re=T.subarray(0,S),ie=T.subarray(S);h=df(re),g=df(ie),p=of(re,h,1),m=of(ie,g,1)}else _f(1);if(d>_){c&&_f(0);break}}s&&l(f+131072);for(var ae=(1<<h)-1,oe=(1<<g)-1,se=d;;se=d){var te=p[pf(e,d)&ae],ce=te>>4;if(d+=te&15,d>_){c&&_f(0);break}if(te||_f(2),ce<256)n[f++]=ce;else if(ce==256){se=d,p=null;break}else{var le=ce-254;if(ce>264){var D=ce-257,j=Kd[D];le=ff(e,d,(1<<j)-1)+Zd[D],d+=j}var ue=m[pf(e,d)&oe],de=ue>>4;ue||_f(3),d+=ue&15;var ie=ef[de];if(de>3){var j=qd[de];ie+=pf(e,d)&(1<<j)-1,d+=j}if(d>_){c&&_f(0);break}s&&l(f+131072);var fe=f+le;if(f<ie){var pe=a-ie,me=Math.min(ie,fe);for(pe+f<0&&_f(3);f<me;++f)n[f]=r[pe+f]}for(;f<fe;++f)n[f]=n[f-ie]}}t.l=p,t.p=se,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?hf(n,0,f):n.subarray(0,f)},yf=function(e,t,n){return e.s==-1?Math.max(yf(e.l,t,n+1),yf(e.r,t,n+1)):t[e.s]=n},bf=new Ud(0),xf=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&_f(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&_f(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Sf(e,t){return vf(e.subarray(xf(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Cf=typeof TextEncoder<`u`&&new TextEncoder,wf=typeof TextDecoder<`u`&&new TextDecoder;try{wf.decode(bf,{stream:!0})}catch{}var Tf=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:hf(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function Ef(e,t){if(t){for(var n=new Ud(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Cf)return Cf.encode(e);for(var i=e.length,a=new Ud(e.length+(e.length>>1)),o=0,s=function(e){a[o++]=e},r=0;r<i;++r){if(o+5>a.length){var c=new Ud(o+8+(i-r<<1));c.set(a),a=c}var l=e.charCodeAt(r);l<128||t?s(l):l<2048?(s(192|l>>6),s(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|e.charCodeAt(++r)&1023,s(240|l>>18),s(128|l>>12&63),s(128|l>>6&63),s(128|l&63)):(s(224|l>>12),s(128|l>>6&63),s(128|l&63))}return hf(a,0,o)}function Df(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(wf)return wf.decode(e);else{var i=Tf(e),a=i.s,n=i.r;return n.length&&_f(8),a}}({id:`INTERNAL`,label:`Internal`,keys:[`layouts`,`routes`,`redirects`]}).id,{id:`SITE`,label:`Site`,keys:[`siteData`,`siteLocaleData`]}.id,{id:`ROUTE`,label:`Route`,keys:[`routePath`,`routeLocale`]}.id,{id:`PAGE`,label:`Page`,keys:[`pageData`,`pageFrontmatter`,`pageLang`,`pageHead`,`pageHeadTitle`,`pageLayout`,`pageComponent`]}.id;function Of(e,t){return ze()?(Be(e,t),!0):!1}var kf=new WeakMap,Af=(...e)=>{let t=e[0],n=yo()?.proxy??ze();if(n==null&&!ar())throw Error(`injectLocal must be called in setup`);return n&&kf.has(n)&&t in kf.get(n)?kf.get(n)[t]:L(...e)},jf=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var Mf=e=>e!=null,Nf=Object.prototype.toString,Pf=e=>Nf.call(e)===`[object Object]`,Ff=()=>{},If=Lf();function Lf(){var e,t;return jf&&!!(!((e=window)==null||(e=e.navigator)==null)&&e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window)==null||(t=t.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window?.navigator.userAgent))}function Rf(...e){if(e.length!==1)return Sn(...e);let t=e[0];return typeof t==`function`?en(vn(()=>({get:t,set:Ff}))):P(t)}function zf(e,t){function n(...n){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(i)})}return n}var Bf=e=>e();function Vf(e,t={}){let n,r,i=Ff,a=e=>{clearTimeout(e),i(),i=Ff},o;return s=>{let c=I(e),l=I(t.maxWait);return n&&a(n),c<=0||l!==void 0&&l<=0?(r&&=(a(r),void 0),Promise.resolve(s())):new Promise((e,u)=>{i=t.rejectOnCancel?u:e,o=s,l&&!r&&(r=setTimeout(()=>{n&&a(n),r=void 0,e(o())},l)),n=setTimeout(()=>{r&&a(r),r=void 0,e(s())},c)})}}function Hf(...e){let t=0,n,r=!0,i=Ff,a,o,s,c,l;!dn(e[0])&&typeof e[0]==`object`?{delay:o,trailing:s=!0,leading:c=!0,rejectOnCancel:l=!1}=e[0]:[o,s=!0,c=!0,l=!1]=e;let u=()=>{n&&(clearTimeout(n),n=void 0,i(),i=Ff)};return e=>{let d=I(o),f=Date.now()-t,p=()=>a=e();return u(),d<=0?(t=Date.now(),p()):(f>d?(t=Date.now(),(c||!r)&&p()):s&&(a=new Promise((e,a)=>{i=l?a:e,n=setTimeout(()=>{t=Date.now(),r=!0,e(p()),u()},Math.max(0,d-f))})),!c&&!n&&(n=setTimeout(()=>r=!0,d)),r=!1,a)}}function Uf(e=Bf,t={}){let{initialState:n=`active`}=t,r=Rf(n===`active`);function i(){r.value=!1}function a(){r.value=!0}return{isActive:tn(r),pause:i,resume:a,eventFilter:(...t)=>{r.value&&e(...t)}}}function Wf(e){let t;function n(){return t||=e(),t}return n.reset=async()=>{let e=t;t=void 0,e&&await e},n}function Gf(e){return e.endsWith(`rem`)?Number.parseFloat(e)*16:Number.parseFloat(e)}function Kf(e){return Array.isArray(e)?e:[e]}function qf(e){return e||yo()}function Jf(e,t=200,n={}){return zf(Vf(t,n),e)}function Yf(e,t=200,n=!1,r=!0,i=!1){return zf(Hf(t,n,r,i),e)}function Xf(e,t,n={}){let{eventFilter:r=Bf,...i}=n;return R(e,zf(r,t),i)}function Zf(e,t,n={}){let{eventFilter:r,initialState:i=`active`,...a}=n,{eventFilter:o,pause:s,resume:c,isActive:l}=Uf(r,{initialState:i});return{stop:Xf(e,t,{...a,eventFilter:o}),pause:s,resume:c,isActive:l}}function Qf(e,t=!0,n){qf(n)?B(e,n):t?e():Un(e)}function $f(e,t){qf(t)&&fi(e,t)}function ep(e,t=1e3,n={}){let{immediate:r=!0,immediateCallback:i=!1}=n,a=null,o=F(!1);function s(){a&&=(clearInterval(a),null)}function c(){o.value=!1,s()}function l(){let n=I(t);n<=0||(o.value=!0,i&&e(),s(),o.value&&(a=setInterval(e,n)))}return r&&jf&&l(),(dn(t)||typeof t==`function`)&&Of(R(t,()=>{o.value&&jf&&l()})),Of(c),{isActive:tn(o),pause:c,resume:l}}function tp(e,t,n={}){let{immediate:r=!0,immediateCallback:i=!1}=n,a=F(!1),o;function s(){o&&=(clearTimeout(o),void 0)}function c(){a.value=!1,s()}function l(...n){i&&e(),s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=void 0,e(...n)},I(t))}return r&&(a.value=!0,jf&&l()),Of(c),{isPending:tn(a),start:l,stop:c}}function np(e=!1,t={}){let{truthyValue:n=!0,falsyValue:r=!1}=t,i=dn(e),a=F(e);function o(e){if(arguments.length)return a.value=e,a.value;{let e=I(n);return a.value=a.value===e?I(r):e,a.value}}return i?o:[a,o]}function rp(e,t,n){return R(e,t,{...n,immediate:!0})}var ip=jf?window:void 0,ap=jf?window.document:void 0,op=jf?window.navigator:void 0;jf&&window.location;function sp(e){let t=I(e);return t?.$el??t}function X(...e){let t=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),n=W(()=>{let t=Kf(I(e[0])).filter(e=>e!=null);return t.every(e=>typeof e!=`string`)?t:void 0});return rp(()=>[n.value?.map(e=>sp(e))??[ip].filter(e=>e!=null),Kf(I(n.value?e[1]:e[0])),Kf(mn(n.value?e[2]:e[1])),I(n.value?e[3]:e[2])],([e,n,r,i],a,o)=>{if(!e?.length||!n?.length||!r?.length)return;let s=Pf(i)?{...i}:i,c=e.flatMap(e=>n.flatMap(n=>r.map(r=>t(e,n,r,s))));o(()=>{c.forEach(e=>e())})},{flush:`post`})}var cp=!1;function lp(e,t,n={}){let{window:r=ip,ignore:i=[],capture:a=!0,detectIframe:o=!1,controls:s=!1}=n;if(!r)return s?{stop:Ff,cancel:Ff,trigger:Ff}:Ff;if(If&&!cp){cp=!0;let e={passive:!0};Array.from(r.document.body.children).forEach(t=>t.addEventListener(`click`,Ff,e)),r.document.documentElement.addEventListener(`click`,Ff,e)}let c=!0,l=e=>I(i).some(t=>{if(typeof t==`string`)return Array.from(r.document.querySelectorAll(t)).some(t=>t===e.target||e.composedPath().includes(t));{let n=sp(t);return n&&(e.target===n||e.composedPath().includes(n))}});function u(e){let t=I(e);return t&&t.$.subTree.shapeFlag===16}function d(e,t){let n=I(e),r=n.$.subTree&&n.$.subTree.children;return r==null||!Array.isArray(r)?!1:r.some(e=>e.el===t.target||t.composedPath().includes(e.el))}let f=n=>{let r=sp(e);if(n.target!=null&&!(!(r instanceof Element)&&u(e)&&d(e,n))&&!(!r||r===n.target||n.composedPath().includes(r))){if(`detail`in n&&n.detail===0&&(c=!l(n)),!c){c=!0;return}t(n)}},p=!1,m=[X(r,`click`,e=>{p||(p=!0,setTimeout(()=>{p=!1},0),f(e))},{passive:!0,capture:a}),X(r,`pointerdown`,t=>{let n=sp(e);c=!l(t)&&!!(n&&!t.composedPath().includes(n))},{passive:!0}),o&&X(r,`blur`,n=>{setTimeout(()=>{let i=sp(e),a=r.document.activeElement;for(;a?.shadowRoot;)a=a.shadowRoot.activeElement;a?.tagName===`IFRAME`&&!i?.contains(r.document.activeElement)&&t(n)},0)},{passive:!0})].filter(Boolean),h=()=>m.forEach(e=>e());return s?{stop:h,cancel:()=>{c=!1},trigger:e=>{c=!0,f(e),c=!1}}:h}function up(){let e=F(!1),t=yo();return t&&B(()=>{e.value=!0},t),e}function dp(e){let t=up();return W(()=>(t.value,!!e()))}function fp(e,t,n={}){let{window:r=ip,...i}=n,a,o=dp(()=>r&&`MutationObserver`in r),s=()=>{a&&=(a.disconnect(),void 0)},c=R(W(()=>{let t=Kf(I(e)).map(sp).filter(Mf);return new Set(t)}),e=>{s(),o.value&&e.size&&(a=new MutationObserver(t),e.forEach(e=>a.observe(e,i)))},{immediate:!0,flush:`post`}),l=()=>a?.takeRecords(),u=()=>{c(),s()};return Of(u),{isSupported:o,stop:u,takeRecords:l}}function pp(e,t,n={}){let{window:r=ip,document:i=r?.document,flush:a=`sync`}=n;if(!r||!i)return Ff;let o,s=e=>{o?.(),o=e},c=cr(()=>{let n=sp(e);if(n){let{stop:e}=fp(i,e=>{e.map(e=>[...e.removedNodes]).flat().some(e=>e===n||e.contains(n))&&t(e)},{window:r,childList:!0,subtree:!0});s(e)}},{flush:a}),l=()=>{c(),s()};return Of(l),l}function mp(e,t={}){let{immediate:n=!0,fpsLimit:r=null,window:i=ip,once:a=!1}=t,o=F(!1),s=W(()=>{let e=I(r);return e?1e3/e:null}),c=0,l=null;function u(t){if(!o.value||!i)return;c||=t;let n=t-c;if(s.value&&n<s.value){l=i.requestAnimationFrame(u);return}if(c=t,e({delta:n,timestamp:t}),a){o.value=!1,l=null;return}l=i.requestAnimationFrame(u)}function d(){!o.value&&i&&(o.value=!0,c=0,l=i.requestAnimationFrame(u))}function f(){o.value=!1,l!=null&&i&&(i.cancelAnimationFrame(l),l=null)}return n&&d(),Of(f),{isActive:tn(o),pause:f,resume:d}}var hp=Symbol(`vueuse-ssr-width`);function gp(){let e=ar()?Af(hp,null):null;return typeof e==`number`?e:void 0}function _p(e,t={}){let{window:n=ip,ssrWidth:r=gp()}=t,i=dp(()=>n&&`matchMedia`in n&&typeof n.matchMedia==`function`),a=F(typeof r==`number`),o=F(),s=F(!1);return cr(()=>{if(a.value){a.value=!i.value,s.value=I(e).split(`,`).some(e=>{let t=e.includes(`not all`),n=e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),i=e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),a=!!(n||i);return n&&a&&(a=r>=Gf(n[1])),i&&a&&(a=r<=Gf(i[1])),t?!a:a});return}i.value&&(o.value=n.matchMedia(I(e)),s.value=o.value.matches)}),X(o,`change`,e=>{s.value=e.matches},{passive:!0}),W(()=>s.value)}function vp(e,t={}){let{controls:n=!1,navigator:r=op}=t,i=dp(()=>r&&`permissions`in r),a=F(),o=typeof e==`string`?{name:e}:e,s=F(),c=()=>{s.value=a.value?.state??`prompt`};X(a,`change`,c,{passive:!0});let l=Wf(async()=>{if(i.value){if(!a.value)try{a.value=await r.permissions.query(o)}catch{a.value=void 0}finally{c()}if(n)return N(a.value)}});return l(),n?{state:s,isSupported:i,query:l}:s}function yp(e={}){let{navigator:t=op,read:n=!1,source:r,copiedDuring:i=1500,legacy:a=!1}=e,o=dp(()=>t&&`clipboard`in t),s=vp(`clipboard-read`),c=vp(`clipboard-write`),l=W(()=>o.value||a),u=F(``),d=F(!1),f=F(!1),p=tp(()=>d.value=!1,i,{immediate:!1}),m=0;async function h(){let e=!(o.value&&b(s.value));if(!e)try{u.value=await t.clipboard.readText()}catch{e=!0}e&&(u.value=y())}l.value&&n&&X([`copy`,`cut`],h,{passive:!0});async function g(e){let n=e??I(r);if(l.value&&n!=null){f.value=!0;let e=!(o.value&&b(c.value));if(!e)try{let e=_(n);await t.clipboard.write([e])}catch{e=!0}if(e)if(typeof n==`string`)u.value=n,v(n);else{let e=++m,t=await n();t!=null&&e===m&&(u.value=t,v(t))}d.value=!0,p.start(),f.value=!1}}function _(e){return typeof e==`string`?(u.value=e,new ClipboardItem({"text/plain":e})):new ClipboardItem({"text/plain":e().then((e=``)=>(u.value=e,new Blob([e],{type:`text/plain`})))})}function v(e){let t=document.createElement(`textarea`);t.value=e,t.style.position=`absolute`,t.style.opacity=`0`,t.setAttribute(`readonly`,``),document.body.appendChild(t),t.select(),document.execCommand(`copy`),t.remove()}function y(){var e,t;return((e=document)==null||(t=e.getSelection)==null||(t=t.call(e))==null?void 0:t.toString())??``}function b(e){return e===`granted`||e===`prompt`}return{copyPending:tn(f),isSupported:l,text:tn(u),copied:tn(d),copy:g}}var bp=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},xp=`__vueuse_ssr_handlers__`,Sp=Cp();function Cp(){return xp in bp||(bp[xp]=bp[xp]||{}),bp[xp]}function wp(e,t){return Sp[e]||t}function Tp(e){return _p(`(prefers-color-scheme: dark)`,e)}function Ep(e){return e==null?`any`:e instanceof Set?`set`:e instanceof Map?`map`:e instanceof Date?`date`:typeof e==`boolean`?`boolean`:typeof e==`string`?`string`:typeof e==`object`?`object`:Number.isNaN(e)?`any`:`number`}var Dp={boolean:{read:e=>e===`true`,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Op=`vueuse-storage`;function kp(e,t,n,r={}){let{flush:i=`pre`,deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:s=!0,mergeDefaults:c=!1,shallow:l,window:u=ip,eventFilter:d,onError:f=e=>{console.error(e)},initOnMounted:p}=r,m=(l?F:P)(typeof t==`function`?t():t),h=W(()=>I(e));if(!n)try{n=wp(`getDefaultStorage`,()=>ip?.localStorage)()}catch(e){f(e)}if(!n)return m;let g=I(t),_=Ep(g),v=r.serializer??Dp[_],{pause:y,resume:b}=Zf(m,e=>C(e),{flush:i,deep:a,eventFilter:d});R(h,()=>T(),{flush:i});let x=!1;u&&o&&(n instanceof Storage?X(u,`storage`,e=>{p&&!x||T(e)},{passive:!0}):X(u,Op,e=>{p&&!x||E(e)})),p?Qf(()=>{x=!0,T()}):T();function S(e,t){if(u){let r={key:h.value,oldValue:e,newValue:t,storageArea:n};u.dispatchEvent(n instanceof Storage?new StorageEvent(`storage`,r):new CustomEvent(Op,{detail:r}))}}function C(e){try{let t=n.getItem(h.value);if(e==null)S(t,null),n.removeItem(h.value);else{let r=v.write(e);t!==r&&(n.setItem(h.value,r),S(t,r))}}catch(e){f(e)}}function w(e){let t=e?e.newValue:n.getItem(h.value);if(t==null)return s&&g!=null&&n.setItem(h.value,v.write(g)),g;if(!e&&c){let e=v.read(t);return typeof c==`function`?c(e,g):_===`object`&&!Array.isArray(e)?{...g,...e}:e}else if(typeof t!=`string`)return t;else return v.read(t)}function T(e){if(!(e&&e.storageArea!==n)){if(e&&e.key==null){m.value=g;return}if(!(e&&e.key!==h.value)){y();try{let t=v.write(m.value);(e===void 0||e?.newValue!==t)&&(m.value=w(e))}catch(e){f(e)}finally{e?Un(b):b()}}}}function E(e){T(e.detail)}return m}function Ap(e,t,n={}){let{window:r=ip,...i}=n,a,o=dp(()=>r&&`ResizeObserver`in r),s=()=>{a&&=(a.disconnect(),void 0)},c=R(W(()=>{let t=I(e);return Array.isArray(t)?t.map(e=>sp(e)):[sp(t)]}),e=>{if(s(),o.value&&r){a=new ResizeObserver(t);for(let t of e)t&&a.observe(t,i)}},{immediate:!0,flush:`post`}),l=()=>{s(),c()};return Of(l),{isSupported:o,stop:l}}function jp(e,t={}){let{delayEnter:n=0,delayLeave:r=0,triggerOnRemoval:i=!1,window:a=ip}=t,o=F(!1),s,c=e=>{let t=e?n:r;s&&=(clearTimeout(s),void 0),t?s=setTimeout(()=>o.value=e,t):o.value=e};return a?(X(e,`mouseenter`,()=>c(!0),{passive:!0}),X(e,`mouseleave`,()=>c(!1),{passive:!0}),i&&pp(W(()=>sp(e)),()=>c(!1)),o):o}function Mp(e,t={width:0,height:0},n={}){let{window:r=ip,box:i=`content-box`}=n,a=W(()=>{var t;return(t=sp(e))==null||(t=t.namespaceURI)==null?void 0:t.includes(`svg`)}),o=F(t.width),s=F(t.height),{stop:c}=Ap(e,([t])=>{let n=i===`border-box`?t.borderBoxSize:i===`content-box`?t.contentBoxSize:t.devicePixelContentBoxSize;if(r&&a.value){let t=sp(e);if(t){let e=t.getBoundingClientRect();o.value=e.width,s.value=e.height}}else if(n){let e=Kf(n);o.value=e.reduce((e,{inlineSize:t})=>e+t,0),s.value=e.reduce((e,{blockSize:t})=>e+t,0)}else o.value=t.contentRect.width,s.value=t.contentRect.height},n);Qf(()=>{let n=sp(e);n&&(o.value=`offsetWidth`in n?n.offsetWidth:t.width,s.value=`offsetHeight`in n?n.offsetHeight:t.height)});let l=R(()=>sp(e),e=>{o.value=e?t.width:0,s.value=e?t.height:0});function u(){c(),l()}return{width:o,height:s,stop:u}}var Np=[`fullscreenchange`,`webkitfullscreenchange`,`webkitendfullscreen`,`mozfullscreenchange`,`MSFullscreenChange`];function Pp(e,t={}){let{document:n=ap,autoExit:r=!1}=t,i=W(()=>sp(e)??n?.documentElement),a=F(!1),o=W(()=>[`requestFullscreen`,`webkitRequestFullscreen`,`webkitEnterFullscreen`,`webkitEnterFullScreen`,`webkitRequestFullScreen`,`mozRequestFullScreen`,`msRequestFullscreen`].find(e=>n&&e in n||i.value&&e in i.value)),s=W(()=>[`exitFullscreen`,`webkitExitFullscreen`,`webkitExitFullScreen`,`webkitCancelFullScreen`,`mozCancelFullScreen`,`msExitFullscreen`].find(e=>n&&e in n||i.value&&e in i.value)),c=W(()=>[`fullScreen`,`webkitIsFullScreen`,`webkitDisplayingFullscreen`,`mozFullScreen`,`msFullscreenElement`].find(e=>n&&e in n||i.value&&e in i.value)),l=[`fullscreenElement`,`webkitFullscreenElement`,`mozFullScreenElement`,`msFullscreenElement`].find(e=>n&&e in n),u=dp(()=>i.value&&n&&o.value!==void 0&&s.value!==void 0&&c.value!==void 0),d=()=>l?n?.[l]===i.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{let e=i.value;if(e?.[c.value]!=null)return!!e[c.value]}}return!1};async function p(){if(!(!u.value||!a.value)){if(s.value)if(n?.[s.value]!=null)await n[s.value]();else{let e=i.value;e?.[s.value]!=null&&await e[s.value]()}a.value=!1}}async function m(){if(!u.value||a.value)return;f()&&await p();let e=i.value;o.value&&e?.[o.value]!=null&&(await e[o.value](),a.value=!0)}async function h(){await(a.value?p():m())}let g=()=>{let e=f();(!e||e&&d())&&(a.value=e)},_={capture:!1,passive:!0};return X(n,Np,g,_),X(()=>sp(i),Np,g,_),Qf(g,!1),r&&Of(p),{isSupported:u,isFullscreen:a,enter:m,exit:p,toggle:h}}function Fp(e){return typeof Window<`u`&&e instanceof Window?e.document.documentElement:typeof Document<`u`&&e instanceof Document?e.documentElement:e}var Ip=1;function Lp(e,t={}){let{throttle:n=0,idle:r=200,onStop:i=Ff,onScroll:a=Ff,offset:o={left:0,right:0,top:0,bottom:0},observe:s={mutation:!1},eventListenerOptions:c={capture:!1,passive:!0},behavior:l=`auto`,window:u=ip,onError:d=e=>{console.error(e)}}=t,f=typeof s==`boolean`?{mutation:s}:s,p=F(0),m=F(0),h=W({get(){return p.value},set(e){_(e,void 0)}}),g=W({get(){return m.value},set(e){_(void 0,e)}});function _(t,n){var r,i;if(!u)return;let a=I(e);if(!a)return;(r=a instanceof Document?u.document.body:a)==null||r.scrollTo({top:I(n)??g.value,left:I(t)??h.value,behavior:I(l)});let o=(a==null||(i=a.document)==null?void 0:i.documentElement)||a?.documentElement||a;h!=null&&(p.value=o.scrollLeft),g!=null&&(m.value=o.scrollTop)}let v=F(!1),y=Qt({left:!0,right:!1,top:!0,bottom:!1}),b=Qt({left:!1,right:!1,top:!1,bottom:!1}),x=e=>{v.value&&(v.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,i(e))},S=Jf(x,n+r),C=e=>{var t;if(!u)return;let n=(e==null||(t=e.document)==null?void 0:t.documentElement)||e?.documentElement||sp(e),{display:r,flexDirection:i,direction:a}=u.getComputedStyle(n),s=a===`rtl`?-1:1,c=n.scrollLeft;b.left=c<p.value,b.right=c>p.value;let l=Math.abs(c*s)<=(o.left||0),d=Math.abs(c*s)+n.clientWidth>=n.scrollWidth-(o.right||0)-Ip;r===`flex`&&i===`row-reverse`?(y.left=d,y.right=l):(y.left=l,y.right=d),p.value=c;let f=n.scrollTop;e===u.document&&!f&&(f=u.document.body.scrollTop),b.top=f<m.value,b.bottom=f>m.value;let h=Math.abs(f)<=(o.top||0),g=Math.abs(f)+n.clientHeight>=n.scrollHeight-(o.bottom||0)-Ip;r===`flex`&&i===`column-reverse`?(y.top=g,y.bottom=h):(y.top=h,y.bottom=g),m.value=f},w=e=>{u&&(C(e.target.documentElement??e.target),v.value=!0,S(e),a(e))};return X(e,`scroll`,n?Yf(w,n,!0,!1):w,c),Qf(()=>{try{let t=I(e);if(!t)return;C(t)}catch(e){d(e)}}),f?.mutation&&e!=null&&e!==u&&e!==document&&fp(e,()=>{let t=I(e);t&&C(t)},{attributes:!0,childList:!0,subtree:!0}),X(e,`scrollend`,x,c),{x:h,y:g,isScrolling:v,arrivedState:y,directions:b,measure(){let t=I(e);u&&t&&C(t)}}}function Rp(e,t,n={}){let{window:r=ip}=n;return kp(e,t,r?.localStorage,n)}function zp(e){if(`interval`in e||`immediate`in e){let{interval:t=`requestAnimationFrame`,immediate:n=!0}=e;return t===`requestAnimationFrame`?e=>mp(e,{immediate:n}):n=>ep(n,t,e)}return mp}function Bp(e={}){let{controls:t=!1,scheduler:n=zp(e)}=e,r=F(new Date),i=n(()=>r.value=new Date);return t?{now:r,...i}:r}function Vp(e={}){let{window:t=ip}=e;if(!t)return F([`en`]);let n=t.navigator,r=F(n.languages);return X(t,`languagechange`,()=>{r.value=n.languages},{passive:!0}),r}function Hp(e,t=Ff,n={}){let{immediate:r=!0,manual:i=!1,type:a=`text/javascript`,async:o=!0,crossOrigin:s,referrerPolicy:c,noModule:l,defer:u,document:d=ap,attrs:f={},nonce:p=void 0}=n,m=F(null),h=null,g=n=>new Promise((r,i)=>{let h=e=>(m.value=e,r(e),e);if(!d){r(!1);return}let g=!1,_=d.querySelector(`script[src="${I(e)}"]`);_?_.hasAttribute(`data-loaded`)&&h(_):(_=d.createElement(`script`),_.type=a,_.async=o,_.src=I(e),u&&(_.defer=u),s&&(_.crossOrigin=s),l&&(_.noModule=l),c&&(_.referrerPolicy=c),p&&(_.nonce=p),Object.entries(f).forEach(([e,t])=>_?.setAttribute(e,t)),g=!0);let v={passive:!0};X(_,`error`,e=>i(e),v),X(_,`abort`,e=>i(e),v),X(_,`load`,()=>{_.setAttribute(`data-loaded`,`true`),t(_),h(_)},v),g&&(_=d.head.appendChild(_)),n||h(_)}),_=(e=!0)=>(h||=g(e),h),v=()=>{if(!d)return;h=null,m.value&&=null;let t=d.querySelector(`script[src="${I(e)}"]`);t&&d.head.removeChild(t)};return r&&!i&&Qf(_),i||$f(v),{scriptTag:m,load:_,unload:v}}function Up(e){let t=window.getComputedStyle(e);if(t.overflowX===`scroll`||t.overflowY===`scroll`||t.overflowX===`auto`&&e.clientWidth<e.scrollWidth||t.overflowY===`auto`&&e.clientHeight<e.scrollHeight)return!0;{let t=e.parentNode;return!t||t.tagName===`BODY`?!1:Up(t)}}function Wp(e){let t=e||window.event,n=t.target;return Up(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}var Gp=new WeakMap;function Kp(e,t=!1){let n=F(t),r=null,i=``;R(Rf(e),e=>{let t=Fp(I(e));if(t){let e=t;if(Gp.get(e)||Gp.set(e,e.style.overflow),e.style.overflow!==`hidden`&&(i=e.style.overflow),e.style.overflow===`hidden`)return n.value=!0;if(n.value)return e.style.overflow=`hidden`}},{immediate:!0});let a=()=>{let t=Fp(I(e));!t||n.value||(If&&(r=X(t,`touchmove`,e=>{Wp(e)},{passive:!1})),t.style.overflow=`hidden`,n.value=!0)},o=()=>{let t=Fp(I(e));!t||!n.value||(If&&r?.(),t.style.overflow=i,Gp.delete(t),n.value=!1)};return Of(o),W({get(){return n.value},set(e){e?a():o()}})}function qp(e,t,n={}){let{window:r=ip}=n;return kp(e,t,r?.sessionStorage,n)}var Jp=0;function Yp(e,t={}){let n=F(!1),{document:r=ap,immediate:i=!0,manual:a=!1,id:o=`vueuse_styletag_${++Jp}`}=t,s=F(e),c=()=>{},l=()=>{if(!r)return;let e=r.getElementById(o)||r.createElement(`style`);e.isConnected||(e.id=o,t.nonce&&(e.nonce=t.nonce),t.media&&(e.media=t.media),r.head.appendChild(e)),!n.value&&(c=R(s,t=>{e.textContent=t},{immediate:!0}),n.value=!0)},u=()=>{!r||!n.value||(c(),r.head.removeChild(r.getElementById(o)),n.value=!1)};return i&&!a&&Qf(l),a||Of(u),{id:o,css:s,unload:u,load:l,isLoaded:tn(n)}}function Xp(e={}){let{window:t=ip,...n}=e;return Lp(t,n)}function Zp(e={}){let{window:t=ip,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:a=!0,type:o=`inner`}=e,s=F(n),c=F(r),l=()=>{if(t)if(o===`outer`)s.value=t.outerWidth,c.value=t.outerHeight;else if(o===`visual`&&t.visualViewport){let{width:e,height:n,scale:r}=t.visualViewport;s.value=Math.round(e*r),c.value=Math.round(n*r)}else a?(s.value=t.innerWidth,c.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight)};l(),Qf(l);let u={passive:!0};return X(`resize`,l,u),t&&o===`visual`&&t.visualViewport&&X(t.visualViewport,`resize`,l,u),i&&R(_p(`(orientation: portrait)`),()=>l()),{width:s,height:c}}var Qp=e=>Df(Sf(Ef(atob(e),!0))),$p=e=>{let t=e.replaceAll(`<br>`,`<br />`).replaceAll(`%`,`%25`).replaceAll(`"`,`%22`).replaceAll(`'`,`%27`).replaceAll(`&`,`%26`).replaceAll(`#`,`%23`).replaceAll(`{`,`%7B`).replaceAll(`}`,`%7D`).replaceAll(`<`,`%3C`).replaceAll(`>`,`%3E`);return e.includes(`xmlns`)||(t=t.replace(`<svg`,`<svg xmlns="http://www.w3.org/2000/svg"`)),`data:image/svg+xml;charset=utf8,${t}`},em=()=>document.documentElement.dataset.theme===`dark`,tm=Array.from({length:6},(e,t)=>`[vp-content] h${t+1}`).join(`,`),nm=(e,t=2)=>{if(t===!1)return[];let[n,r]=typeof t==`number`?[t,t]:t===`deep`?[2,6]:t,i=e.filter(e=>e.level>=n&&e.level<=r),a=[];outer:for(let e=0;e<i.length;e++){let t=i[e];if(e!==0)for(let n=e-1;n>=0;n--){let e=i[n];if(e.level<t.level){e.children.push(t);continue outer}}a.push(t)}return a},rm=(e,t=[])=>{let n;if(t.length>0){let r=e.cloneNode(!0);r.querySelectorAll(t.join(`,`)).forEach(e=>{e.remove()}),n=r.textContent||``}else n=e.textContent||``;return n.trim()},im=(e=tm,t=[])=>[...document.querySelectorAll(e)].filter(e=>e.id&&e.hasChildNodes()).map(e=>({element:e,title:rm(e,t),link:`#${e.id}`,slug:e.id,level:Number(e.tagName[1]),children:[]})),am=({selector:e=tm,levels:t=2,ignore:n=[]}={})=>nm(im(e,n),t),om=e=>e.every(e=>e.type===Ha?!0:e.type===Ba?e.children==null||Nd(e.children)&&om(e.children):!1),sm=e=>e==null?!0:Nd(e)?om(e):!1,cm=(e,t)=>{let n=(t?._instance??yo())?.appContext.components;return n?e in n||j(e)in n||fe(j(e))in n:!1},lm=`message-container`,um=class e{elements;constructor(){this.elements={}}static get containerElement(){let e=document.querySelector(`#${lm}`);return e||(e=document.createElement(`div`),e.id=lm,document.body.append(e),e)}getElement(e){return this.elements[e]}pop(t,n=2e3,r=!0){let i=Date.now(),a=document.createElement(`div`);return a.className=`message-item move-in`,a.innerHTML=t,e.containerElement.append(a),this.elements[i]=a,r&&a.addEventListener(`click`,()=>{this.close(i)}),n>0&&setTimeout(()=>{this.close(i)},n),i}close(e){if(e==null)Rd(this.elements).forEach(e=>{this.close(Number(e))});else{let t=this.elements[e];t.classList.remove(`move-in`),t.classList.add(`move-out`),t.addEventListener(`animationend`,()=>{t.remove(),delete this.elements[e]})}}destroy(){document.querySelector(`#${lm}`)?.remove(),this.elements={}}},dm=e=>new Promise(t=>{setTimeout(t,e)}),fm=e=>typeof e==`number`?`${e}px`:e,pm=({size:e=48,stroke:t=4,wrapper:n=!0,height:r=2*e})=>{let i=G(`span`,{style:`\
--loading-icon: url("${$p(`<svg preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg>`)}");\
--icon-size: ${fm(e)};\
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
height: ${fm(r)}\
`},i):i};pm.displayName=`LoadingIcon`;var mm=(e,{slots:t})=>t.default(),hm=Symbol(``),gm=P(!1);typeof document<`u`&&(gm.value=em(),new MutationObserver(()=>{gm.value=em()}).observe(document.documentElement,{attributeFilter:[`data-theme`],attributes:!0}));var _m=()=>en(L(hm,gm)),vm=(e={})=>{let t=P([]);return hd(n=>{t.value=n===`beforeUnmount`?[]:am(I(e))}),t},ym=e=>{let t=sd();return W(()=>{let n=I(e);return n[t.value]??n[`/`]??Object.values(n)[0]})},bm={"/":{contributors:`贡献者`,changelog:`更新日志`,timeOn:`于`,viewChangelog:`查看所有更新日志`,latestUpdateAt:`最近更新`}},xm=()=>ym(bm),Sm=({level:e=2,text:t,anchor:n})=>G(`h${e||2}`,{id:n,tabindex:`-1`},G(`a`,{href:`#${n}`,class:`header-anchor`},G(`span`,t))),Cm=(e=!0)=>{let{frontmatter:t,page:n}=ud();return W(()=>t.value.contributors===!1||!I(e)?[]:n.value.git.contributors??[])},wm=({name:e,url:t,avatar:n})=>G(t?`a`:`span`,{href:t,target:`_blank`,rel:`noreferrer`,class:`vp-contributor`},[n?G(`img`,{src:n,alt:``,class:`vp-contributor-avatar`}):null,G(`span`,{class:`vp-contributor-name`},e)]),Tm=z({name:`GitContributors`,props:{title:String,headerLevel:{type:Number,default:2}},setup(e){let t=Cm(),n=xm();return()=>t.value.length>0?[G(Sm,{level:e.headerLevel,anchor:`doc-contributors`,text:e.title||n.value.contributors}),G(`div`,{class:`vp-contributors`},t.value.map(e=>G(wm,e)))]:null}}),Em=c({default:()=>Dm}),Dm={enhance:({app:e})=>{e.component(`GitContributors`,Tm)}},Om=c({}),km=c({}),Am=(e,t)=>t===`json`?JSON.parse(e):Function(`\
let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;\
`)(),jm=z({name:`ChartJS`,props:{config:{type:String,required:!0},title:String,type:{type:String,default:`json`}},setup(e){let t=_m(),n=F(),r=Ar(),i=P(!1),a,o=()=>{a?.destroy(),a=null},s=async()=>{let{default:n}=await J(async()=>{let{default:e}=await import(`./auto-CKGGO9Gg.js`);return{default:e}},[]);n.defaults.borderColor=t.value?`#ccc`:`#36A2EB`,n.defaults.color=t.value?`#fff`:`#000`,n.defaults.maintainAspectRatio=!1,a=new n(r,Am(Qp(e.config),e.type))};return B(()=>{rp(t,async()=>{o(),await Un(),await s(),i.value=!0},{flush:`post`})}),fi(o),()=>[e.title?G(`div`,{class:`chartjs-title`},decodeURIComponent(e.title)):null,i.value?null:G(pm,{class:`chartjs-loading`,height:192}),G(`div`,{ref:n,class:`chartjs-wrapper`,style:{display:i.value?`block`:`none`}},G(`canvas`,{id:r,height:400}))]}}),Mm={},Nm=()=>Mm,Pm=(async()=>{}).constructor,Fm=(e,t,n,r)=>t===`js`?Pm(`echarts`,`myChart`,`\
let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n,r):Promise.resolve({option:JSON.parse(e)}),Im=z({name:`ECharts`,props:{config:{type:String,required:!0},title:String,type:{type:String,default:`json`}},setup(e){let t=Nm(),n=F(),r=P(!1),i=null;X(`resize`,Jf(()=>{i?.resize()},100));let a=()=>{i?.dispose(),i=null},o=async()=>{let r=await J(()=>import(`./echarts-C8ZOESzw.js`),[]);t.isSetup||=(await t.setup?.(),!0),i=r.init(n.value);let{option:a,...o}=await Fm(Qp(e.config),e.type,r,i);i.resize(o),i.setOption({...t.option,...a})};return hd(async e=>{e===`mounted`&&(await o(),r.value=!0)}),B(()=>{}),fi(a),()=>[e.title?G(`div`,{class:`echarts-title`},decodeURIComponent(e.title)):null,G(`div`,{class:`echarts-wrapper`},[G(`div`,{ref:n,class:`echarts-container`}),r.value?null:G(pm,{class:`echarts-loading`,height:360})])]}}),Lm={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":`#8DA1AC`,"line-color":`#8DA1AC`,"element-color":`black`,fill:`white`,"yes-text":`Yes`,"no-text":`No`,"arrow-end":`block`,scale:1},Rm={...Lm,symbols:{start:{class:`start-element`,"font-color":`#fff`,fill:`#595959`,"line-width":0},end:{class:`end-element`,"font-color":`#fff`,fill:`#595959`,"line-width":0},operation:{class:`operation-element`,"font-color":`#fff`,fill:`#1890ff`,"line-width":0},inputoutput:{class:`inputoutput-element`,"font-color":`#fff`,fill:`#1890ff`,"line-width":0},subroutine:{class:`subroutine-element`,"font-color":`#fff`,fill:`#FF485E`,"element-color":`#fff`,"line-color":`red`},condition:{class:`condition-element`,"font-color":`#fff`,fill:`#FF485E`,"line-width":0},parallel:{class:`parallel-element`,"font-color":`#fff`,fill:`#1890ff`,"line-width":0}}},zm={...Lm,"line-width":1,symbols:{start:{class:`start-element`,fill:`#ccc`,"line-color":`#5c6ac4`,"font-color":`#000`},end:{class:`end-element`,fill:`#ccc`,"line-color":`#5c6ac4`,"font-color":`#000`},operation:{class:`operation-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},inputoutput:{class:`inputoutput-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},subroutine:{class:`subroutine-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},condition:{class:`condition-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`},parallel:{class:`parallel-element`,fill:`#f1f1f1`,"line-color":`#5c6ac4`,"font-color":`#000`}}},Bm={ant:Rm,vue:{...Lm,symbols:{start:{class:`start-element`,"font-color":`#fff`,fill:`#2F495F`,"line-width":0},end:{class:`end-element`,"font-color":`#fff`,fill:`#2F495F`,"line-width":0},operation:{class:`operation-element`,"font-color":`#fff`,fill:`#00BC7D`,"line-width":0},inputoutput:{class:`inputoutput-element`,"font-color":`#fff`,fill:`#EB4D5D`,"line-width":0},subroutine:{class:`subroutine-element`,"font-color":`#fff`,fill:`#937AC4`,"element-color":`#fff`,"line-color":`red`},condition:{class:`condition-element`,"font-color":`#fff`,fill:`#FFB500`,"line-width":0},parallel:{class:`parallel-element`,"font-color":`#fff`,fill:`#2F495F`,"line-width":0}}},pie:zm},Vm=e=>e<419?.8:e>1280?1:.9,Hm=z({name:`FlowChart`,props:{code:{type:String,required:!0},preset:{type:String,default:`vue`}},setup(e){let t=Ar(),{code:n,preset:r}=yn(e),i=F(),a=P(!1),o=P(1),s=null;X(`resize`,Jf(()=>{if(s){let n=Vm(window.innerWidth);o.value!==n&&(o.value=n,s.draw(t,{...Bm[e.preset],scale:n}))}},100));let c=()=>{s?.clean(),s=null},l=async()=>{let{parse:r}=await J(async()=>{let{parse:e}=await import(`./flowchart-CGjrcE6-.js`);return{parse:e}},[]);s=r(Qp(n.value)),o.value=Vm(window.innerWidth),a.value=!0,s.draw(t,{...Bm[e.preset],scale:o.value})};return hd(async e=>{e===`mounted`&&await l()}),B(()=>{}),fi(c),()=>[a.value?null:G(pm,{class:`flowchart-loading`,height:192}),G(`div`,{ref:i,class:[`flowchart-wrapper`,e.preset],id:t,style:{display:a.value?`block`:`none`}})]}}),Um={},Wm=()=>Um,Gm={useMaxWidth:!1},Km=z({name:`Mermaid`,props:{code:{type:String,required:!0},title:String},setup(e){let t=Ar(),n=_m(),{themeVariables:r,...i}=Wm(),a=F(),o=W(()=>Qp(e.code)),s=P(``),c=async()=>{let{default:e}=await J(async()=>{let{default:e}=await import(`./mermaid.esm.min-Bus4LW0z.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));e.initialize({theme:n.value?`dark`:`default`,themeVariables:{dark:n.value,...qc(r)?r(n.value):r},flowchart:Gm,sequence:Gm,journey:Gm,gantt:Gm,er:Gm,pie:Gm,...i,startOnLoad:!1}),s.value=(await e.render(t,o.value)).svg},l=()=>{let{body:e}=document,t=document.createElement(`div`);t.classList.add(`mermaid-preview`),t.innerHTML=s.value,e.append(t),t.addEventListener(`click`,()=>{t.remove()})},u=()=>{let n=$p(s.value),r=document.createElement(`a`);r.setAttribute(`href`,n),r.setAttribute(`download`,`${e.title?Qp(e.title):t}.svg`),r.click()};return B(()=>{rp(n,c,{flush:`post`})}),()=>[G(`div`,{class:`mermaid-actions`},[G(`button`,{class:`preview-button`,title:`preview`,innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>`,onClick:l}),G(`button`,{class:`download-button`,title:`download`,innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>`,onClick:u})]),G(`div`,{ref:a,class:`mermaid-wrapper`},s.value?G(`div`,{class:`mermaid-content`,innerHTML:s.value}):G(pm,{class:`mermaid-loading`,height:96}))]}}),qm=c({default:()=>Jm}),Jm=Ad({enhance:({app:e})=>{e.component(`ChartJS`,jm),e.component(`ECharts`,Im),e.component(`FlowChart`,Hm),e.component(`Mermaid`,Km)}}),Ym=c({}),Xm=c({default:()=>Zm}),Zm=Ad({setup(){X(`beforeprint`,()=>{document.querySelectorAll(`details`).forEach(e=>{e.open=!0})},{passive:!0})}}),Qm=c({}),$m=kp(`VUEPRESS_CODE_TAB_STORE`,{}),eh=z({name:`CodeTabs`,props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){let n=e.data.map(()=>Ar()),r=P(e.active),i=F([]),a=()=>{e.tabId&&($m.value[e.tabId]=e.data[r.value].id)},o=(e=r.value)=>{r.value=e<i.value.length-1?e+1:0,i.value[r.value].focus()},s=(e=r.value)=>{r.value=e>0?e-1:i.value.length-1,i.value[r.value].focus()},c=(t,n)=>{t.key===` `||t.key===`Enter`?(t.preventDefault(),r.value=n):t.key===`ArrowRight`?(t.preventDefault(),o()):t.key===`ArrowLeft`&&(t.preventDefault(),s()),e.tabId&&($m.value[e.tabId]=e.data[r.value].id)},l=()=>{if(e.tabId){let t=e.data.findIndex(({id:t})=>$m.value[e.tabId]===t);if(t!==-1)return t}return e.active};return B(()=>{r.value=l(),R(()=>e.tabId&&$m.value[e.tabId],(t,n)=>{if(e.tabId&&t!==n){let n=e.data.findIndex(({id:e})=>e===t);n!==-1&&(r.value=n)}})}),()=>e.data.length?G(`div`,{class:`vp-code-tabs`},[G(`div`,{class:`vp-code-tabs-nav`,role:`tablist`},e.data.map(({id:e},o)=>{let s=o===r.value;return G(`button`,{type:`button`,ref:e=>{e&&(i.value[o]=e)},class:[`vp-code-tab-nav`,{active:s}],role:`tab`,"aria-controls":n[o],"aria-selected":s,onClick:()=>{r.value=o,a()},onKeydown:e=>{c(e,o)}},t[`title${o}`]({value:e,isActive:s}))})),e.data.map(({id:e},i)=>{let a=i===r.value;return G(`div`,{class:[`vp-code-tab`,{active:a}],id:n[i],role:`tabpanel`,"aria-expanded":a},[G(`div`,{class:`vp-code-tab-title`},t[`title${i}`]({value:e,isActive:a})),t[`tab${i}`]({value:e,isActive:a})])})]):null}}),th=kp(`VUEPRESS_TAB_STORE`,{}),nh=z({name:`Tabs`,props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(e,{slots:t}){let n=e.data.map(()=>Ar()),r=P(e.active),i=F([]),a=()=>{e.tabId&&(th.value[e.tabId]=e.data[r.value].id)},o=(e=r.value)=>{r.value=e<i.value.length-1?e+1:0,i.value[r.value].focus()},s=(e=r.value)=>{r.value=e>0?e-1:i.value.length-1,i.value[r.value].focus()},c=(e,t)=>{e.key===` `||e.key===`Enter`?(e.preventDefault(),r.value=t):e.key===`ArrowRight`?(e.preventDefault(),o()):e.key===`ArrowLeft`&&(e.preventDefault(),s()),a()},l=()=>{if(e.tabId){let t=e.data.findIndex(({id:t})=>th.value[e.tabId]===t);if(t!==-1)return t}return e.active};return B(()=>{r.value=l(),R(()=>e.tabId&&th.value[e.tabId],(t,n)=>{if(e.tabId&&t!==n){let n=e.data.findIndex(({id:e})=>e===t);n!==-1&&(r.value=n)}})}),()=>e.data.length?G(`div`,{class:`vp-tabs`},[G(`div`,{class:`vp-tabs-nav`,role:`tablist`},e.data.map(({id:e},o)=>{let s=o===r.value;return G(`button`,{type:`button`,ref:e=>{e&&(i.value[o]=e)},class:[`vp-tab-nav`,{active:s}],role:`tab`,"aria-controls":n[o],"aria-selected":s,onClick:()=>{r.value=o,a()},onKeydown:e=>{c(e,o)}},t[`title${o}`]({value:e,isActive:s}))})),e.data.map(({id:e},i)=>{let a=i===r.value;return G(`div`,{class:[`vp-tab`,{active:a}],id:n[i],role:`tabpanel`,"aria-expanded":a},[G(`div`,{class:`vp-tab-title`},t[`title${i}`]({value:e,isActive:a})),t[`tab${i}`]({value:e,isActive:a})])})]):null}}),rh=c({default:()=>ih}),ih={enhance:({app:e})=>{e.component(`CodeTabs`,eh),e.component(`Tabs`,nh)}},ah=`<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>`,oh=`<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>`,sh=`<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>`,ch={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:`left`,codepenEditors:`101`,babel:`https://unpkg.com/@babel/standalone/babel.min.js`,vue:`https://unpkg.com/vue/dist/vue.global.prod.js`,react:`https://unpkg.com/react/umd/react.production.min.js`,reactDOM:`https://unpkg.com/react-dom/umd/react-dom.production.min.js`},lh={html:{types:[`html`,`slim`,`haml`,`md`,`markdown`,`vue`],map:{html:`none`,vue:`none`,md:`markdown`}},js:{types:[`js`,`javascript`,`coffee`,`coffeescript`,`ts`,`typescript`,`ls`,`livescript`],map:{js:`none`,javascript:`none`,coffee:`coffeescript`,ls:`livescript`,ts:`typescript`}},css:{types:[`css`,`less`,`sass`,`scss`,`stylus`,`styl`],map:{css:`none`,styl:`stylus`}}},uh=(e,t,n)=>{let r=document.createElement(e);return Jc(t)&&Rd(t).forEach(e=>{if(e.indexOf(`data`))r[e]=t[e];else{let n=e.replace(`data`,``);r.dataset[n]=t[e]}}),n&&n.forEach(e=>{r.append(e)}),r},dh=e=>({...ch,...e,jsLib:[...new Set([ch.jsLib,e.jsLib??[]].flat())],cssLib:[...new Set([ch.cssLib,e.cssLib??[]].flat())]}),fh=(e,t)=>{if(jd(e[t]))return e[t];let n=new Promise(e=>{let n=document.createElement(`script`);n.src=t,document.querySelector(`body`)?.append(n),n.addEventListener(`load`,()=>{e()})});return e[t]=n,n},ph=(e,t)=>{if(t.css&&[...e.childNodes].every(e=>e.nodeName!==`STYLE`)){let n=uh(`style`,{innerHTML:t.css});e.append(n)}},mh=(e,t,n)=>{let r=n.getScript();if(r&&[...t.childNodes].every(e=>e.nodeName!==`SCRIPT`)){let n=document.createElement(`script`);n.append(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;\n${r}}`)),t.append(n)}},hh=[`html`,`js`,`css`],gh=e=>{let t=Rd(e),n={html:[],js:[],css:[],isLegal:!1};return hh.forEach(r=>{let i=t.filter(e=>lh[r].types.includes(e));if(i.length>0){let[t]=i;n[r]=[e[t].trim(),lh[r].map[t]??t]}}),n.isLegal=(n.html.length===0||n.html[1]===`none`)&&(n.js.length===0||n.js[1]===`none`)&&(n.css.length===0||n.css[1]===`none`),n},_h=e=>e.replaceAll(String.raw`<br \/>`,`<br>`).replaceAll(/<((\S+)[^<]*?)\s+\/>/gu,`<$1></$2>`),vh=e=>`<div id="app">\n${_h(e)}\n</div>`,yh=e=>`${e.replace(`export default `,`const $reactApp = `).replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/u,``)};\nReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,bh=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,`Vue.createApp({$1}).mount('#app')`).replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,`Vue.createApp({$1}).mount('#app')`).trim(),xh=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?exports.default:module.exports;})({})`,Sh=(e,t)=>{let n=dh(t),r=e.js[0]??``;return{...n,html:_h(e.html[0]??``),js:r,css:e.css[0]??``,isLegal:e.isLegal,getScript:()=>n.useBabel?globalThis.Babel?.transform(r,{presets:[`es2015`]})?.code??``:r}},Ch=/<template>([\s\S]+)<\/template>/u,wh=/<script(?:\s*lang=(['"])(.*?)\1)?>([\s\S]+)<\/script>/u,Th=/<style(?:\s*lang=(['"])(.*?)\1)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,Eh=(e,t)=>{let n=dh(t),r=e.html[0]??``,i=wh.exec(r),a=Th.exec(r),o=Ch.exec(r)?.[1].trim()??``,s=i?.[3].trim()??``,c=i?.[2]??``,l=a?.[3].trim()??``,u=a?.[2]??``,d=c===``&&(u===``||u===`css`);return{...n,html:vh(o),js:bh(s),css:l,isLegal:d,jsLib:[n.vue,...n.jsLib],getScript:()=>`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${xh(t.useBabel?globalThis.Babel?.transform(s,{presets:[`es2015`]})?.code??``:s.replace(/export\s+default/u,`return`))};appOptions.template=\`${o.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}},Dh=(e,t)=>{let n=dh(t),r=e.js[0]??``;return{...n,html:vh(``),js:yh(r),css:e.css[0]??e.js[0]?.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/u,`$1`).trim()??``,isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${xh(globalThis.Babel?.transform(r,{presets:[`es2015`,`react`]})?.code??``)}))`}},Oh={},kh=async e=>{await Promise.all([fh(Oh,e.babel),fh(Oh,e.react),fh(Oh,e.reactDOM)])},Ah=async e=>{let t=[fh(Oh,e.vue)];e.useBabel&&t.push(fh(Oh,e.babel)),await Promise.all(t)},jh=e=>e.useBabel?fh(Oh,e.babel):Promise.resolve(),Mh=z({name:`CodeDemo`,props:{id:{type:String,required:!0},type:{type:String,default:`normal`},title:String,config:String,code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){let[n,r]=np(!1),i=F(),a=F(),o=P(`0`),s=P(!1),c=W(()=>JSON.parse(e.config?Qp(e.config):`{}`)),l=W(()=>gh(JSON.parse(Qp(e.code)))),u=W(()=>e.type===`react`?Dh(l.value,c.value):e.type===`vue`?Eh(l.value,c.value):Sh(l.value,c.value)),d=W(()=>u.value.isLegal),f=(t=!1)=>{let n=i.value.attachShadow({mode:`open`}),r=document.createElement(`div`);r.classList.add(`code-demo-app`),n.append(r),d.value?(t&&(r.innerHTML=u.value.html),ph(n,u.value),mh(e.id,n,u.value),o.value=`0`):o.value=`auto`,s.value=!0},p=async()=>{switch(e.type){case`react`:await kh(u.value),f();break;case`vue`:await Ah(u.value),f();break;default:await jh(u.value),f(!0)}},m=null;return X(`beforeprint`,()=>{m=n.value,n.value||r(!0)}),X(`afterprint`,()=>{m===!1&&r(!1),m=null}),Ap(a,()=>{n.value&&(o.value=`${a.value.clientHeight+14}px`)}),B(async()=>{await p()}),()=>G(`div`,{class:`vp-container vp-code-demo`,id:e.id},[G(`div`,{class:`vp-container-header`},[u.value.isLegal?G(`button`,{type:`button`,title:`toggle`,class:[`vp-code-demo-toggle-button`,n.value?`down`:`end`],onClick:()=>{o.value=n.value?`0`:`${a.value.clientHeight+14}px`,r()}}):null,e.title?G(`span`,{class:`vp-container-title`},decodeURIComponent(e.title)):null,u.value.isLegal&&(u.value.jsfiddle??!0)?G(`form`,{class:`code-demo-jsfiddle`,target:`_blank`,action:`https://jsfiddle.net/api/post/library/pure/`,method:`post`},[G(`input`,{type:`hidden`,name:`html`,value:u.value.html}),G(`input`,{type:`hidden`,name:`js`,value:u.value.js}),G(`input`,{type:`hidden`,name:`css`,value:u.value.css}),G(`input`,{type:`hidden`,name:`wrap`,value:`1`}),G(`input`,{type:`hidden`,name:`panel_js`,value:`3`}),G(`input`,{type:`hidden`,name:`resources`,value:[...u.value.cssLib,...u.value.jsLib].join(`,`)}),G(`button`,{type:`submit`,class:`jsfiddle-button`,innerHTML:oh,"aria-label":`JSFiddle`,"data-balloon-pos":`down`})]):null,!u.value.isLegal||(u.value.codepen??!0)?G(`form`,{class:`code-demo-codepen`,target:`_blank`,action:`https://codepen.io/pen/define`,method:`post`},[G(`input`,{type:`hidden`,name:`data`,value:JSON.stringify({html:u.value.html,js:u.value.js,css:u.value.css,js_external:u.value.jsLib.join(`;`),css_external:u.value.cssLib.join(`;`),layout:u.value.codepenLayout,html_pre_processor:l.value.html[1]??`none`,js_pre_processor:l.value.js[1]??(u.value.jsx?`babel`:`none`),css_pre_processor:l.value.css[1]??`none`,editors:u.value.codepenEditors})}),G(`button`,{type:`submit`,innerHTML:ah,class:`codepen-button`,"aria-label":`Codepen`,"data-balloon-pos":`down`})]):null]),s.value?null:G(pm,{class:`vp-code-demo-loading`}),G(`div`,{ref:i,class:`vp-code-demo-display`,style:{display:d.value&&s.value?`block`:`none`}}),G(`div`,{class:`vp-code-demo-code-wrapper`,style:{height:o.value}},G(`div`,{ref:a,class:`vp-code-demo-codes`},t.default()))])}}),Nh=z({name:`MdDemo`,props:{id:{type:String,required:!0},title:String},slots:Object,setup(e,{slots:t}){let[n,r]=np(!1),i=F(),a=P(`0`),o=null;return X(`beforeprint`,()=>{o=n.value,n.value||r(!0)}),X(`afterprint`,()=>{o===!1&&r(!1),o=null}),Ap(i,()=>{n.value&&(a.value=`${i.value.clientHeight+14}px`)}),()=>G(`div`,{class:`vp-container vp-md-demo`,id:e.id},[G(`div`,{class:`vp-container-header`},[G(`button`,{type:`button`,title:`toggle`,class:[`vp-md-demo-toggle-button`,n.value?`down`:`end`],onClick:()=>{a.value=n.value?`0`:`${i.value.clientHeight+14}px`,r()}}),e.title?G(`div`,{class:`vp-container-title`},decodeURIComponent(e.title)):null]),G(`div`,{class:`vp-md-demo-display`},t.default()),G(`div`,{class:`vp-md-demo-code-wrapper`,style:{height:a.value}},G(`div`,{ref:i,class:`vp-md-demo-codes`},t.code()))])}}),Ph=({title:e=``,link:t})=>G(`div`,{class:`vp-container vp-playground`},[G(`div`,{class:`vp-container-header`},[e?G(`div`,{class:`vp-container-title`},decodeURIComponent(e)):null,G(`div`,{class:`vp-playground-actions`},[G(`a`,{class:`vp-playground-action no-external-link-icon`,href:decodeURIComponent(t),target:`_blank`,innerHTML:sh})])]),G(`div`,{class:`vp-playground-container`},G(`iframe`,{src:decodeURIComponent(t)}))]);Ph.displayName=`Playground`;var Fh={template:`vue`},Ih=()=>Fh,Lh=()=>null,Rh=e=>JSON.parse(Qp(e)),zh=e=>JSON.parse(Qp(e)),Bh=e=>JSON.parse(Qp(e)),Vh=$r({loader:()=>J(async()=>{let{Sandpack:e}=await import(`./dist-DDdlpKQ0.js`);return{Sandpack:e}},__vite__mapDeps([17,18])).then(({Sandpack:e})=>e),loadingComponent:pm}),Hh=z({name:`SandPack`,props:{files:{type:String,required:!0},title:String,template:String,options:String,customSetup:String,theme:String,rtl:Boolean},setup(e){let t=_m(),n=Ih(),r=W(()=>Bd({},n.options,zh(e.options??`{}`))),i=W(()=>e.template??n.template),a=W(()=>e.theme??(t.value?`dark`:`light`)),o=W(()=>Bd({},n.customSetup,Bh(e.customSetup??`{}`)));return()=>[G(`div`,{class:`vp-container sandpack-wrapper`},[e.title?G(`div`,{class:`vp-container-header`},G(`div`,{class:`vp-container-title`},decodeURIComponent(e.title))):null,G(`div`,{class:`sandpack-container`},G(Vh,{template:i.value,theme:a.value,files:Rh(e.files),options:r.value,customSetup:o.value,rtl:e.rtl}))])]}}),Uh={autoResize:!0,showCompileOutput:!1,clearConsole:!1,layout:`horizontal`,ssr:!1},Wh=()=>Uh,Gh=e=>JSON.parse(decodeURIComponent(e)),Kh=z({name:`VuePlayground`,props:{files:{type:String,required:!0},title:String,settings:String},setup(e){let{vueVersion:t=Lo,vueRuntimeDevUrl:n=`https://unpkg.com/@vue/runtime-dom@${t}/dist/runtime-dom.esm-browser.js`,vueRuntimeProdUrl:r=`https://unpkg.com/@vue/runtime-dom@${t}/dist/runtime-dom.esm-browser.prod.js`,vueServerRendererUrl:i=`https://unpkg.com/@vue/server-renderer@${t}/dist/server-renderer.esm-browser.js`,...a}=Wh(),o=P(!0),s=F(),c=F(),l=F(),u=W(()=>Bd({},a,Gh(e.settings??`{}`))),d=async()=>{let[{useStore:t,useVueImportMap:a,Repl:o},{default:u}]=await Promise.all([J(()=>import(`./vue-repl-vCVNxIwl.js`),__vite__mapDeps([19,20])),J(()=>import(`./codemirror-editor-BIZ3iGOo.js`),__vite__mapDeps([21,20]))]);s.value=o,l.value=u;let{importMap:d,vueVersion:f}=a({runtimeDev:n,runtimeProd:r,serverRenderer:i});f.value=Lo,c.value=t({builtinImportMap:d,vueVersion:f},decodeURIComponent(e.files))};return B(async()=>{await d(),o.value=!1}),()=>[G(`div`,{class:`vp-container vue-playground-wrapper`},[e.title?G(`div`,{class:`vp-container-header`},G(`div`,{class:`vp-container-title`},decodeURIComponent(e.title))):null,G(`div`,{class:`repl-container`},[o.value?G(pm,{class:`vue-preview-loading`,height:192}):null,s.value?G(s.value,{...u.value,editor:l.value,store:c.value}):null])])]}}),qh=c({default:()=>Jh}),Jh={enhance:({app:e})=>{e.component(`CodeDemo`,Mh),e.component(`MdDemo`,Nh),e.component(`Playground`,Ph),e.component(`SandPack`,Hh),e.component(`VuePlayground`,Kh)}},Yh=c({}),Xh=c({}),Zh=e=>Array.isArray(e),{entries:Qh}=Object,{fromEntries:$h}=Object,{values:eg}=Object,tg=(e,...t)=>{if(t.length===0)return e;let n=t.shift();return n&&Qh(n).forEach(([t,r])=>{t===`__proto__`||t===`constructor`||(Jc(e[t])&&Jc(r)?tg(e[t],r):Zh(r)?e[t]=[...r]:Jc(r)?e[t]={...r}:e[t]=n[t])}),tg(e,...t)},ng=e=>Df(Sf(Ef(atob(e),!0))),rg=e=>{let t=e.replaceAll(`<br>`,`<br />`).replaceAll(`%`,`%25`).replaceAll(`"`,`%22`).replaceAll(`'`,`%27`).replaceAll(`&`,`%26`).replaceAll(`#`,`%23`).replaceAll(`{`,`%7B`).replaceAll(`}`,`%7D`).replaceAll(`<`,`%3C`).replaceAll(`>`,`%3E`);return e.includes(`xmlns`)||(t=t.replace(`<svg`,`<svg xmlns="http://www.w3.org/2000/svg"`)),`data:image/svg+xml;charset=utf8,${t}`},ig=()=>navigator.userAgentData?.platform??navigator.platform,ag=()=>navigator.userAgent,og=()=>/\biPhone\b/iu.test(ig()),sg=()=>/\biPad\b/iu.test(ig()),cg=()=>/ios/iu.test(ig())||og()||sg(),lg=()=>{let e=ig();return e?/mac/iu.test(e):/macintosh|mac os x/iu.test(ag())&&!cg()},ug=()=>document.documentElement.dataset.theme===`dark`;Array.from({length:6},(e,t)=>`[vp-content] h${t+1}`).join(`,`);var dg=e=>e.every(e=>e.type===Ha?!0:e.type===Ba?e.children==null||Zh(e.children)&&dg(e.children):!1),fg=e=>typeof e==`number`?`${e}px`:e,pg=({size:e=48,stroke:t=4,wrapper:n=!0,height:r=2*e})=>{let i=G(`span`,{style:`\
--loading-icon: url("${rg(`<svg preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="${t}" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg>`)}");\
--icon-size: ${fg(e)};\
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
height: ${fg(r)}\
`},i):i};pg.displayName=`LoadingIcon`;var mg=P(!1);typeof document<`u`&&(mg.value=ug(),new MutationObserver(()=>{mg.value=ug()}).observe(document.documentElement,{attributeFilter:[`data-theme`],attributes:!0}));var hg=()=>Promise.all([J(async()=>{let{default:e}=await import(`./reveal-DW5nJUKt.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./markdown-Bpr8PyMq.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./highlight-DEFG59Qi.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./math-DYEAaylE.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./search-Cw6cTQWp.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./notes-CP3qVLiL.js`);return{default:e}},[]).then(({default:e})=>e),J(async()=>{let{default:e}=await import(`./zoom-DzvZ2bYa.js`);return{default:e}},[]).then(({default:e})=>e)]),gg=P({}),_g=Symbol(``),vg=()=>L(_g),yg=e=>{e.provide(_g,gg)},bg=z({name:`RevealJs`,props:{code:{type:String,required:!0},theme:{type:String,default:`auto`}},setup(e){let t=Ar(),n=vg(),r=dd(),i=od(),a=P(!0),o=F(),s=W(()=>ng(e.code)),c=null,l=async e=>{let[t,...a]=await hg(),o=i.value.name===`SlidePage`,s=new t(e,{backgroundTransition:`slide`,transition:`slide`,slideNumber:!0,...n.value,hash:o,mouseWheel:o,...r.value.revealJs,embedded:!o,keyboardCondition:o?null:`focused`,markdown:{separator:`^\r?\\n---\r?
$`,verticalSeparator:`^\r?
--\r?
$`},plugins:[a,n.value.plugins??[]].flat()});return await s.initialize(),s},u=async()=>{let t=o.value;t&&(t.dataset.theme=e.theme,a.value=!0,c=await l(t),a.value=!1)};return hd(async e=>{e===`mounted`&&await u()}),B(()=>{R(s,u,{flush:`post`})}),fi(()=>{c?.destroy()}),()=>G(`div`,{class:`vp-reveal`},[G(`div`,{ref:o,class:[`reveal`,`reveal-viewport`],id:t},G(`div`,{class:`slides`,innerHTML:`<section data-markdown><script type="text/template">${s.value}<\/script></section>`})),a.value?G(pg,{class:`reveal-loading`,height:400}):null])}}),xg=z({name:`SlidePage`,setup(){let e=ul(),t=sd(),n=P(!1),r=F(),i=()=>{n.value=!n.value},a=()=>{n.value=!1},o=()=>{a(),window.history.go(-1)},s=()=>{a(),e.push(t.value)};return lp(r,a),()=>G(`div`,{class:`vp-reveal-page`},[G(Dd),G(`div`,{ref:r,class:[`vp-reveal-menu`,{active:n.value}]},[G(`button`,{type:`button`,class:`menu-button`,onClick:()=>{i()}},G(`span`,{class:`icon`})),G(`button`,{type:`button`,class:`back-button`,onClick:()=>{o()},innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" class="back-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"></path></svg>`}),G(`button`,{type:`button`,class:`home-button`,onClick:()=>{s()},innerHTML:`<svg xmlns="http://www.w3.org/2000/svg" class="icon home-icon" viewBox="0 0 1024 1024" fill="currentColor"><path d="M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"></path></svg>`})])])}}),Sg=c({default:()=>Cg}),Cg={enhance:({app:e})=>{yg(e),e.component(`RevealJs`,bg)},layouts:{Slides:xg}},wg=P(JSON.parse(`{"encrypt":{},"author":{"name":"ZIP","url":"https://ignent.github.io"},"logo":"/logo.svg","repo":"https://github.com/ignent/ignent.github.io","repoLabel":"GitHub","repoDisplay":true,"docsDir":"src","navbarLayout":{"start":["Brand"],"center":["Search"],"end":["Links","Repo","Outlook"]},"footer":"","displayFooter":false,"blog":{"description":"To err is human, but to really foul things up you need a computer.","intro":"/intro.html","medias":{}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routerLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":[{"text":"全部","icon":"newspaper","link":"/article/"},{"text":"随记","icon":"fire","link":"/popular/"},{"text":"分类","icon":"grip","link":"/collection/"},{"text":"工具脚本","icon":"computer-mouse","link":"/one-click/"}],"sidebar":{"/popular/":[{"text":"随记","icon":"fire","link":"/popular/","children":"structure"}],"/collection/":[{"text":"分类","icon":"grip","link":"/collection/","children":"structure"}],"/one-click/":[{"text":"工具脚本","icon":"computer-mouse","link":"/one-click/","children":"structure"}]}}}}`)),Tg=()=>wg,Eg=Symbol(``),Dg=()=>{let e=L(Eg);if(!e)throw Error(`useThemeLocaleData() is called without provider.`);return e},Og=(e,t)=>{let{locales:n,...r}=e;return{...r,...n?.[t]}},kg=c({default:()=>Ag}),Ag=Ad({enhance({app:e}){let t=Tg(),n=e._context.provides[$u],r=W(()=>Og(t.value,n.routeLocale.value));e.provide(Eg,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})}}),jg=z({name:`BackToTop`,setup(){let e=dd(),t=ym({"/":{backToTop:`返回顶部`}}),n=F(),{height:r}=Mp(n),{height:i}=Zp(),{y:a}=Xp(),o=W(()=>(e.value.backToTop??!0)&&a.value>100),s=W(()=>a.value/(r.value-i.value)*100);return B(()=>{n.value=document.body}),()=>G(Zo,{name:`fade-in`},()=>o.value?G(`button`,{type:`button`,class:`vp-back-to-top-button`,"aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})}},[G(`span`,{class:`vp-scroll-progress`,role:`progressbar`,"aria-labelledby":`loadinglabel`,"aria-valuenow":s.value},G(`svg`,G(`circle`,{cx:`26`,cy:`26`,r:`24`,fill:`none`,stroke:`currentColor`,"stroke-width":`4`,"stroke-dasharray":`${Math.PI*s.value*.48} ${Math.PI*(100-s.value)*.48}`}))),G(`div`,{class:`back-to-top-icon`})]):null)}}),Mg=c({default:()=>Ng}),Ng=Ad({rootComponents:[jg]}),Pg=/language-(shellscript|shell|bash|sh|zsh)/u,Fg=({selector:e,ignoreSelector:t,inlineSelector:n,duration:r=2e3,locales:i,showInMobile:a,transform:o})=>{let s=_p(`(max-width: 419px)`),c=W(()=>!s.value||a),l=ym(i),u=e=>{if(e.hasAttribute(`copy-code`))return;let t=document.createElement(`button`);t.type=`button`,t.classList.add(`vp-copy-code-button`),t.setAttribute(`aria-label`,l.value.copy),t.dataset.copied=l.value.copied,e.parentElement?.insertBefore(t,e),e.setAttribute(`copy-code`,``)},d=()=>{document.body.classList.toggle(`no-copy-code`,!c.value),c.value&&document.querySelectorAll(e).forEach(e=>{u(e)})};rp(c,()=>Un(d),{flush:`post`}),hd(e=>{e!==`beforeUnmount`&&d()});let{copy:f}=yp({legacy:!0}),p=new WeakMap,m=null,h=async(e,n,i)=>{let a=n.cloneNode(!0);t&&a.querySelectorAll(t).forEach(e=>{e.remove()}),o&&o(a);let s=a.textContent||``;if(Pg.test(e.className)&&(s=s.replaceAll(/^ *(\$|>) /gmu,``)),await f(s),r<=0)return;i.classList.add(`copied`),clearTimeout(p.get(i));let c=setTimeout(()=>{i.classList.remove(`copied`),i.blur(),p.delete(i)},r);p.set(i,c)};X(`click`,e=>{let t=e.target;if(c.value&&t.matches(`div[class*="language-"] > button.vp-copy-code-button`)){let e=t.parentElement,n=t.nextElementSibling;if(!e||!n)return;h(e,n,t)}},{passive:!0}),n&&X(`dblclick`,e=>{let t=e.target;if(c.value&&t.matches(n)){let e=window.getSelection();e&&(t.contains(e.anchorNode)||t.contains(e.focusNode))&&e.removeAllRanges(),f(t.textContent||``),(m??=new um).pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${l.value.copied} </span>`,r)}},{passive:!0})},Ig=c({default:()=>Lg}),Lg=Ad({setup:()=>{Fg({selector:`[vp-content] div[class*="language-"] pre`,ignoreSelector:``,inlineSelector:``,locales:{"/":{copy:`复制代码`,copied:`已复制`}},duration:2e3,showInMobile:!1})}}),Rg=e=>e.includes(`fa-`)||/^fa.$/u.test(e)?e:`fa-${e}`,zg=z({name:`VPIcon`,props:{type:{type:String,default:`unknown`},prefix:String,icon:String,color:String,size:[String,Number],verticalAlign:String,sizing:{type:String,default:`height`}},setup(e){let t=W(()=>e.icon?jc(e.icon)?e.icon:Hd(e.icon)?Y(e.icon):null:null),n=W(()=>{let t={},{type:n,verticalAlign:r,size:i,sizing:a}=e,o={sizing:a};return e.color&&(t.color=e.color),i&&(t[`--icon-size`]=Number.isNaN(Number(i))?i:`${i}px`),r&&(t[`--icon-vertical-align`]=r),n===`iconify`&&(a!==`height`&&(o.width=e.size||`1em`),a!==`width`&&(o.height=e.size||`1em`)),Rd(t).length>0&&(o.style=t),o});return()=>{let{type:r,icon:i,prefix:a=``,sizing:o}=e;if(!i)return null;if(t.value)return G(`img`,{class:`vp-icon`,src:t.value,alt:``,"aria-hidden":``,"no-view":``,...n.value});if(r===`iconify`)return G(`iconify-icon`,{key:i,class:`vp-icon`,icon:i.includes(`:`)?i:`${a}${i}`,...n.value});if(r===`fontawesome`){let[e,t]=i.includes(`:`)?i.split(`:`,2):[`fas`,i];return G(`i`,{key:i,class:[`vp-icon`,e.length===1?`fa${e}`:Rg(e),...t.split(` `).map(e=>Rg(e)),o===`height`?``:`fa-fw`],...n.value})}return G(`i`,{key:i,class:[`vp-icon`,i.includes(` `)?i:`${a}${i}`],...n.value})}}}),Bg=c({default:()=>Vg}),Vg={enhance:({app:e})=>{cm(`VPIcon`)||e.component(`VPIcon`,e=>G(zg,{type:`fontawesome`,prefix:``,...e}))},setup:()=>{Hp(`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/all.min.js`,()=>{},{attrs:{"data-auto-replace-svg":`nest`}})}},Hg=P({}),Ug=Symbol(``),Wg=()=>L(Ug),Gg=e=>{e.provide(Ug,Hg)},Kg=async e=>{try{await e.decode()}catch{throw Error(`Image decoding failed: ${e.src}`)}return{type:`image`,element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}},qg=`<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>`,Jg=(e,{download:t=!0,fullscreen:n=!0}={})=>{e.on(`uiRegister`,()=>{if(e.ui.registerElement({name:`bulletsIndicator`,className:`photo-swipe-bullets-indicator`,appendTo:`wrapper`,onInit:t=>{let n=[],r=-1;for(let r=0;r<e.getNumItems();r++){let r=document.createElement(`div`);r.className=`photo-swipe-bullet`,r.addEventListener(`click`,t=>{e.goTo(n.indexOf(t.target))}),n.push(r),t.append(r)}e.on(`change`,()=>{r>=0&&n[r].classList.remove(`active`),n[e.currIndex].classList.add(`active`),r=e.currIndex})}}),n){let{isSupported:t,toggle:n}=Pp();t.value&&e.ui.registerElement({name:`fullscreen`,order:7,isButton:!0,html:`<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>`,onClick:()=>{n()}})}t&&e.ui.registerElement({name:`download`,order:8,isButton:!0,tagName:`a`,html:{isCustomSVG:!0,inner:`<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>`,outlineID:`pswp__icn-download`},onInit:t=>{t.setAttribute(`download`,``),t.setAttribute(`target`,`_blank`),t.setAttribute(`rel`,`noopener`),e.on(`change`,()=>{t.setAttribute(`href`,e.currSlide.data.src)})}})})},Yg=({selector:e,locales:t,download:n=!0,fullscreen:r=!0,scrollToClose:i=!0})=>{let a=Wg(),o=ym(t),s=dd(),c=W(()=>{let{photoSwipe:t}=s.value;return t===!1?null:K(t)?t:Nd(e)?e.join(`, `):e}),l=W(()=>({...a.value,...o.value,download:n,fullscreen:r,scrollToClose:i})),u=null,d=0,f=null;X(`click`,async e=>{let t=e.target;if(!c.value||!u||!t.matches(c.value))return;d!==0&&f.destroy();let a=Date.now(),o=await u,s=[...document.querySelectorAll(c.value)],p=s.map(e=>({html:qg,element:e,msrc:e.src}));f=new o({preloaderDelay:0,showHideAnimationType:`zoom`,...l.value,dataSource:p,index:s.indexOf(t),...i?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),d=a,Jg(f,{download:n,fullscreen:r}),f.init(),f.on(`destroy`,()=>{f=null,d=0}),s.map((e,t)=>Kg(e).then(e=>{d===a&&(p.splice(t,1,e),f?.refreshSlideContent(t))}))},{passive:!0}),X(`wheel`,()=>{l.value.scrollToClose&&f?.close()}),B(()=>{(`requestIdleCallback`in window?window.requestIdleCallback:setTimeout)(()=>{u=J(async()=>{let{default:e}=await import(`./photoswipe.esm-2E0BZqjm.js`);return{default:e}},[]).then(({default:e})=>e)})}),fi(()=>{f?.destroy()})},Xg=c({default:()=>n_}),Zg=`[vp-content] :not(a) > img:not([no-view])`,Qg={"/":{closeTitle:`关闭`,downloadTitle:`下载图片`,fullscreenTitle:`切换全屏`,zoomTitle:`缩放`,arrowPrevTitle:`上一个 (左箭头)`,arrowNextTitle:`下一个 (右箭头)`}},$g=!0,e_=!0,t_=!0,n_=Ad({enhance:({app:e})=>{Gg(e)},setup:()=>{Yg({selector:Zg,locales:Qg,download:$g,fullscreen:e_,scrollToClose:t_})}}),r_=({type:e=`info`,text:t=``,vertical:n,color:r,bgColor:i},{slots:a})=>G(`span`,{class:[`vp-badge`,e,{diy:!!(r||i)}],style:{backgroundColor:i??!1,color:r??!1,verticalAlign:n??!1}},a.default?.()??t);r_.displayName=`Badge`;var i_=({title:e,desc:t=``,logo:n,background:r,color:i,link:a})=>{let o=[n?G(`img`,{class:`vp-card-logo`,src:Y(n),loading:`lazy`,"no-view":``}):null,G(`div`,{class:`vp-card-content`},[G(`div`,{class:`vp-card-title`,innerHTML:e}),G(`hr`),G(`div`,{class:`vp-card-desc`,innerHTML:t})])],s={};return r&&(s.background=r),i&&(s.color=i),a?Ac(a)?G(`a`,{class:`vp-card`,href:a,target:`_blank`,style:s},o):G(Cd,{to:a,class:`vp-card`,style:s},()=>o):G(`div`,{class:`vp-card`,style:s},o)};i_.displayName=`VPCard`;var a_=c({default:()=>o_}),o_={enhance:({app:e})=>{cm(`Badge`)||e.component(`Badge`,r_),cm(`VPCard`)||e.component(`VPCard`,i_)},setup:()=>{},rootComponents:[]},s_=async(e,t)=>{let{path:n,query:r}=e.currentRoute.value,{scrollBehavior:i}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:r,hash:t}),e.options.scrollBehavior=i},c_=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{let i=ul();X(`scroll`,Jf(()=>{let n=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(n)<r){s_(i,``);return}let a=window.innerHeight+n,o=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),s=Math.abs(o-a)<r,c=[...document.querySelectorAll(e)],l=[...document.querySelectorAll(t)].filter(e=>c.some(t=>t.hash===e.hash));for(let e=0;e<l.length;e++){let t=l[e],a=l[e+1],o=n>=(t.parentElement?.offsetTop??0)-r,c=!a||n<(a.parentElement?.offsetTop??0)-r;if(!(o&&c))continue;let u=decodeURIComponent(i.currentRoute.value.hash),d=decodeURIComponent(t.hash);if(u===d)return;if(s){for(let t=e+1;t<l.length;t++)if(u===decodeURIComponent(l[t].hash))return}s_(i,d);return}},n))},l_=c({default:()=>m_}),u_=`.vp-sidebar-link, .vp-toc-link`,d_=`.header-anchor`,f_=200,p_=5,m_=Ad({setup(){c_({headerLinkSelector:u_,headerAnchorSelector:d_,delay:f_,offset:p_})}}),h_=e=>K(e.title)?{title:e.title}:null,g_=Symbol(``),__=e=>{h_=e},v_=()=>L(g_),y_=e=>{e.provide(g_,h_)},b_=c({default:()=>S_}),x_=z({name:`Catalog`,props:{base:String,level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){let{page:t,routes:n,site:r}=ud(),i=v_(),a=ym({"/":{title:`目录`,empty:`暂无目录`}}),o=F(Id(n.value).map(([e,{meta:t}])=>{let n=i(t);if(!n)return null;let r=e.split(`/`).length;return Object.assign({level:Fd(e,`/`)?r-2:r-1,base:e.replace(/\/[^/]+\/?$/u,`/`),path:e},n)}).filter(e=>Jc(e)&&K(e.title))),s=W(()=>{let n=e.base?Uc(Wc(e.base)):t.value.path.replace(/\/[^/]+$/u,`/`),i=n.split(`/`).length-2,a=[];return o.value.filter(({level:t,path:a})=>{if(!Pd(a,n)||a===n)return!1;if(n===`/`){let e=Rd(r.value.locales).filter(e=>e!==`/`);if(a===`/404.html`||e.some(e=>Pd(a,e)))return!1}return t-i<=e.level}).sort(({title:e,level:t,order:n},{title:r,level:i,order:a})=>t-i||(Md(n)?Md(a)?n>0?a>0?n-a:-1:a<0?n-a:1:n:Md(a)?a:e.localeCompare(r))).forEach(e=>{let{base:t,level:n}=e;switch(n-i){case 1:a.push(e);break;case 2:{let n=a.find(e=>e.path===t);n&&(n.children??=[]).push(e);break}default:{let n=a.find(e=>e.path===t.replace(/\/[^/]+\/?$/u,`/`));if(n){let r=n.children?.find(e=>e.path===t);r&&(r.children??=[]).push(e)}}}}),a});return()=>{let t=s.value.some(e=>e.children);return G(`div`,{class:[`vp-catalog`,{index:e.index}]},[e.hideHeading?null:G(`h2`,{class:`vp-catalog-main-title`},a.value.title),s.value.length>0?G(e.index?`ol`:`ul`,{class:[`vp-catalog-list`,{deep:t}]},s.value.map(({children:n=[],title:r,path:i,content:a})=>{let o=G(Cd,{class:`vp-catalog-title`,to:i},()=>a?G(a):r);return G(`li`,{class:`vp-catalog-item`},t?[G(`h3`,{id:r,class:[`vp-catalog-child-title`,{"has-children":n.length}]},[G(`a`,{href:`#${r}`,class:`vp-catalog-header-anchor`,"aria-hidden":!0}),o]),n.length>0?G(e.index?`ol`:`ul`,{class:`vp-child-catalogs`},n.map(({children:t=[],content:n,path:r,title:i})=>G(`li`,{class:`vp-child-catalog`},[G(`div`,{class:[`vp-catalog-sub-title`,{"has-children":t.length}]},[G(`a`,{href:`#${i}`,class:`vp-catalog-header-anchor`}),G(Cd,{class:`vp-catalog-title`,to:r},()=>n?G(n):i)]),t.length>0?G(e.index?`ol`:`div`,{class:e.index?`vp-sub-catalogs`:`vp-sub-catalogs-wrapper`},t.map(({content:t,path:n,title:r})=>e.index?G(`li`,{class:`vp-sub-catalog`},G(Cd,{to:n},()=>t?G(t):r)):G(Cd,{class:`vp-sub-catalog-link`,to:n},()=>t?G(t):r))):null]))):null]:G(`div`,{class:`vp-catalog-child-title`},o))})):G(`p`,{class:`vp-empty-catalog`},a.value.empty)])}}}),S_=Ad({enhance:({app:e})=>{y_(e),cm(`Catalog`,e)||e.component(`Catalog`,x_)}}),C_=(e,t)=>{e.classList.add(t)},w_=(e,t)=>{e.classList.remove(t)},T_=e=>{e?.remove()},E_=(e,t,n)=>e<t?t:e>n?n:e,D_=e=>(-1+e)*100,O_=(()=>{let e=[],t=()=>{let n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),k_=e=>e.replace(/^-ms-/u,`ms-`).replaceAll(/-([\da-z])/giu,(e,t)=>t.toUpperCase()),A_=(()=>{let e=[`Webkit`,`O`,`Moz`,`ms`],t={},n=t=>{let{style:n}=document.body;if(t in n)return t;let r=t.charAt(0).toUpperCase()+t.slice(1),i=e.length;for(;i--;){let t=`${e[i]}${r}`;if(t in n)return t}return t},r=e=>{let r=k_(e);return t[r]??=n(r)},i=(e,t,n)=>{e.style[r(t)]=n};return(e,t)=>{for(let[n,r]of Id(t))jd(r)&&i(e,n,r)}})(),j_={minimum:.08,easing:`ease`,speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:`[role="bar"]`,parent:`body`,template:`<div class="bar" role="bar"></div>`},M_={percent:null,isRendered:()=>!!document.querySelector(`#nprogress`),set:e=>{let{speed:t,easing:n}=j_,r=M_.isStarted(),i=E_(e,j_.minimum,1);M_.percent=i===1?null:i;let a=M_.render(!r),o=a.querySelector(j_.barSelector);return a.offsetWidth,O_(e=>{A_(o,{transform:`translate3d(${D_(i)}%,0,0)`,transition:`all ${t}ms ${n}`}),i===1?(A_(a,{transition:`none`,opacity:`1`}),a.offsetWidth,setTimeout(()=>{A_(a,{transition:`all ${t}ms linear`,opacity:`0`}),setTimeout(()=>{M_.remove(),e()},t)},t)):setTimeout(()=>{e()},t)}),M_},isStarted:()=>typeof M_.percent==`number`,start:()=>{M_.percent||M_.set(0);let e=()=>{setTimeout(()=>{M_.percent&&(M_.trickle(),e())},j_.trickleSpeed)};return j_.trickle&&e(),M_},done:e=>!e&&!M_.percent?M_:M_.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=M_;return t?(t=E_(t+(typeof e==`number`?e:(1-t)*E_(Math.random()*t,.1,.95)),0,.994),M_.set(t)):M_.start()},trickle:()=>M_.increase(Math.random()*j_.trickleRate),render:e=>{if(M_.isRendered())return document.querySelector(`#nprogress`);C_(document.documentElement,`nprogress-busy`);let t=document.createElement(`div`);t.id=`nprogress`,t.innerHTML=j_.template;let n=t.querySelector(j_.barSelector),r=document.querySelector(j_.parent);return A_(n,{transition:`all 0 linear`,transform:`translate3d(${e?`-100`:D_(M_.percent??0)}%,0,0)`}),r&&(r!==document.body&&C_(r,`nprogress-custom-parent`),r.append(t)),t},remove:()=>{w_(document.documentElement,`nprogress-busy`),w_(document.querySelector(j_.parent),`nprogress-custom-parent`),T_(document.querySelector(`#nprogress`))}},N_=()=>{B(()=>{let e=ul(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(e=>{t.has(e.path)||M_.start()}),e.afterEach(e=>{t.add(e.path),M_.done()})})},P_=c({default:()=>F_}),F_=Ad({setup(){N_()}}),I_=P({provider:`Waline`,dark:`[data-theme="dark"]`,serverURL:`https://waline.0xss.com`,emoji:[`/waline-emojis/alus`,`/waline-emojis/bilibili`,`/waline-emojis/bmoji`,`/waline-emojis/coolapk`,`/waline-emojis/coolapk_coin`,`/waline-emojis/hoyoverse-hi3`,`/waline-emojis/qq`,`/waline-emojis/tieba`,`/waline-emojis/weibo`,`/waline-emojis/tw-body`,`/waline-emojis/tw-emoji`,`/waline-emojis/tw-flag`,`/waline-emojis/tw-food`,`/waline-emojis/tw-natural`,`/waline-emojis/tw-object`,`/waline-emojis/tw-people`,`/waline-emojis/tw-sport`,`/waline-emojis/tw-symbol`,`/waline-emojis/tw-time`,`/waline-emojis/tw-travel`,`/waline-emojis/tw-weather`]}),L_=Symbol(``),R_=()=>L(L_),z_=R_,B_=e=>{e.provide(L_,en(I_))},V_={"Content-Type":`application/json`},H_=e=>`${e.replace(/\/?$/u,`/`)}api/`,U_=(e,t=``)=>{if(typeof e==`object`&&e.errno)throw TypeError(`${t} failed with ${e.errno}: ${e.errmsg}`);return e},W_=({serverURL:e,lang:t,paths:n,type:r,signal:i})=>fetch(`${H_(e)}article?path=${encodeURIComponent(n.join(`,`))}&type=${encodeURIComponent(r.join(`,`))}&lang=${t}`,{signal:i}).then(e=>e.json()).then(e=>U_(e,`Get counter`).data),G_=({serverURL:e,lang:t,path:n,type:r,action:i})=>fetch(`${H_(e)}article?lang=${t}`,{method:`POST`,headers:V_,body:JSON.stringify({path:n,type:r,action:i})}).then(e=>e.json()).then(e=>U_(e,`Update counter`).data),K_=({serverURL:e,lang:t,paths:n,signal:r})=>W_({serverURL:e,lang:t,paths:n,type:[`time`],signal:r}),q_=e=>G_({...e,type:`time`,action:`inc`}),J_=(e=``)=>e.replace(/\/$/u,``),Y_=e=>/^(https?:)?\/\//u.test(e),X_=e=>{let t=J_(e);return Y_(t)?t:`https://${t}`},Z_=e=>{e.name!==`AbortError`&&console.error(e.message)},Q_=e=>{let{path:t}=e.dataset;return t?.length?t:null},$_=(e,t)=>{t.forEach((t,n)=>{let r=e[n].time;typeof r==`number`&&(t.textContent=r.toString())})},ev=({serverURL:e,path:t=window.location.pathname,selector:n=`.waline-pageview-count`,update:r=!0,lang:i=navigator.language})=>{let a=new AbortController,o=[...document.querySelectorAll(n)],s=e=>{let n=Q_(e);return n!=null&&t!==n},c=n=>K_({serverURL:X_(e),paths:n.map(e=>Q_(e)??t),lang:i,signal:a.signal}).then(e=>{$_(e,n)}).catch(Z_);if(r){let n=o.filter(e=>!s(e)),r=o.filter(e=>s(e));q_({serverURL:X_(e),path:t,lang:i}).then(e=>{$_(e,n)}),r.length>0&&c(r)}else c(o);return a.abort.bind(a)},tv={"/":{placeholder:`请留言。(填写邮箱可在被回复时收到邮件提醒)`}};J(()=>Promise.resolve({}),[]);var nv=z({name:`WalineComment`,props:{identifier:{type:String,required:!0}},setup(e){let{frontmatter:t,lang:n}=ud(),r=z_(),i=ym(tv),a=null,o=W(()=>!!r.value.serverURL),s=W(()=>o.value&&(t.value.pageview??r.value.pageview??!0)),c=W(()=>({lang:n.value,locale:i.value,dark:`[data-theme='dark']`,...r.value,path:e.identifier}));return B(()=>{rp(()=>[e.identifier,r.value.serverURL,r.value.delay,s.value],async()=>{a?.(),a=null,s.value&&(await Un(),await dm(r.value.delay??800),a=ev({serverURL:r.value.serverURL,path:e.identifier}))},{flush:`post`})}),()=>o.value?G(`div`,{id:`comment`,class:`waline-wrapper`},G($r({loader:async()=>{let{Waline:e}=await J(async()=>{let{Waline:e}=await import(`./component-ByaJ9OVM.js`);return{Waline:e}},[]);return()=>G(Td,()=>G(e,c.value))},loadingComponent:pm}))):null}}),rv=c({default:()=>av}),iv=z({name:`CommentService`,props:{identifier:String,darkmode:Boolean},setup(e){let{frontmatter:t,page:n}=ud(),r=R_(),i=W(()=>t.value.comment??r.value.comment??!0);return()=>G(nv,{class:`vp-comment`,"vp-comment":``,identifier:e.identifier??t.value.commentID??n.value.path,darkmode:e.darkmode,style:{display:i.value?`block`:`none`}})}}),av=Ad({enhance:({app:e})=>{B_(e),e.component(`CommentService`,iv)}});function ov(e,t,n){var r,i,a;t===void 0&&(t=50),n===void 0&&(n={});var o=(r=n.isImmediate)!=null&&r,s=(i=n.callback)!=null&&i,c=n.maxWait,l=Date.now(),u=[];function d(){if(c!==void 0){var e=Date.now()-l;if(e+t>=c)return c-e}return t}var f=function(){var t=[].slice.call(arguments),n=this;return new Promise(function(r,i){var c=o&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,l=Date.now(),!o){var r=e.apply(n,t);s&&s(r),u.forEach(function(e){return(0,e.resolve)(r)}),u=[]}},d()),c){var f=e.apply(n,t);return s&&s(f),r(f)}u.push({resolve:r,reject:i})})};return f.cancel=function(e){a!==void 0&&clearTimeout(a),u.forEach(function(t){return(0,t.reject)(e)}),u=[]},f}var sv=(e,t)=>{let n=X(`keydown`,r=>{let{keyboardShortcuts:i={}}=e.value,a=i[`Ctrl/Cmd+K`]!==!1&&r.key===`k`&&(lg()||sg()?r.metaKey:r.ctrlKey),o=i[`/`]!==!1&&r.key===`/`;(a||o)&&(r.preventDefault(),t(),n())})},cv=()=>{let e=ul();return{transformItems:e=>e.map(e=>({...e,url:`/${Kc(Ic(e.url,`/`))}`})),navigator:{navigate:({itemUrl:t})=>{e.push(t.replace(`/`,`/`))}},transformSearchClient:e=>({...e,search:ov(e.search,500)})}},lv=P({appId:`E3TWXMTA8Z`,apiKey:`fb9de9925ec1f873f45e96085d62c81a`,indexName:`0XSSBLOG`,locales:{"/":{placeholder:`搜索文档`,translations:{button:{buttonText:`搜索文档`,buttonAriaLabel:`搜索文档`},modal:{searchBox:{clearButtonTitle:`清除查询条件`,clearButtonAriaLabel:`清除查询条件`,closeButtonText:`关闭`,closeButtonAriaLabel:`关闭`,placeholderText:`搜索文档`,placeholderTextAskAi:`向 AI 助手提问`,placeholderTextAskAiStreaming:`回答中...`,searchInputLabel:`搜索`,backToKeywordSearchButtonText:`返回关键字搜索`,backToKeywordSearchButtonAriaLabel:`返回关键字搜索`,newConversationPlaceholder:`询问问题`,conversationHistoryTitle:`对话历史`,startNewConversationText:`新对话`,viewConversationHistoryText:`对话历史`},startScreen:{recentSearchesTitle:`搜索历史`,noRecentSearchesText:`没有搜索历史`,saveRecentSearchButtonTitle:`保存至搜索历史`,removeRecentSearchButtonTitle:`从搜索历史中移除`,favoriteSearchesTitle:`收藏`,removeFavoriteSearchButtonTitle:`从收藏中移除`,recentConversationsTitle:`最近对话`,removeRecentConversationButtonTitle:`从最近对话中移除`},errorScreen:{titleText:`无法获取结果`,helpText:`你可能需要检查你的网络连接`},noResultsScreen:{noResultsText:`无法找到相关结果为`,suggestedQueryText:`你可以尝试查询`,reportMissingResultsText:`你认为该查询应该有结果？`,reportMissingResultsLinkText:`告知我们`},resultsScreen:{askAiPlaceholder:`询问AI：`,noResultsAskAiPlaceholder:`没有找到文档？让 AI 来帮忙：`},askAiScreen:{disclaimerText:`AI 助手的回答可能不准确。自行验证回复。`,relatedSourcesText:`相关资源`,thinkingText:`思考中...`,copyButtonText:`复制`,copyButtonCopiedText:`已复制`,copyButtonTitle:`复制`,likeButtonTitle:`有帮助`,dislikeButtonTitle:`没帮助`,thanksForFeedbackText:`感谢您的反馈！`,preToolCallText:`搜索中...`,duringToolCallText:`搜索`,afterToolCallText:`已搜索`,stoppedStreamingText:`你停止了此回复`},footer:{selectText:`选择`,submitQuestionText:`提交问题`,selectKeyAriaLabel:`回车键`,navigateText:`切换`,navigateUpKeyAriaLabel:`上箭头`,navigateDownKeyAriaLabel:`下箭头`,closeText:`关闭`,backToSearchText:`返回搜索`,closeKeyAriaLabel:`ESC 键`,poweredByText:`搜索提供者`}}}}}}),uv=Symbol(``),dv=()=>{let e=L(uv),t=sd();return W(()=>({...e.value,...e.value.locales?.[t.value]}))},fv=e=>{e.provide(uv,en(lv))},pv=(e,t=[])=>[`lang:${e}`,...Array.isArray(t)?t:[t]],mv=({indices:e,indexName:t,searchParameters:n},r)=>(e??[{name:t??``,searchParameters:n}]).map(e=>{if(K(e))return{name:e,searchParameters:{facetFilters:`lang:${r}`}};let{searchParameters:t,...n}=e;return{...n,searchParameters:{...t,facetFilters:pv(r,t?.facetFilters)}}}),hv=({buttonText:e=`Search`,buttonAriaLabel:t=e}={})=>{let n=lg()||sg()||og();return`<button type="button" aria-label="${t}" aria-keyshortcuts="${n?`Command`:`Control`}+k" class="DocSearch DocSearch-Button"><span class="DocSearch-Button-Container"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" class="DocSearch-Search-Icon"><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none" stroke-width="1.4"></circle><path d="m21 21-4.3-4.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="DocSearch-Button-Placeholder">${e}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key ${n?``:`DocSearch-Button-Key--ctrl`}">${n?`⌘`:`Ctrl`}</kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`},gv=()=>{if(document.querySelector(`.DocSearch-Modal`))return;let e=new Event(`keydown`);e.key=`k`,e.metaKey=!0,window.dispatchEvent(e),setTimeout(gv,16)},_v=e=>{let t=`algolia-preconnect`;(`requestIdleCallback`in window?window.requestIdleCallback:setTimeout)(()=>{if(document.head.querySelector(`#${t}`))return;let n=document.createElement(`link`);n.id=t,n.rel=`preconnect`,n.href=`https://${e}-dsn.algolia.net`,n.crossOrigin=``,document.head.append(n)})},vv=z({name:`DocSearch`,props:{containerId:{type:String,default:`docsearch-container`},options:{type:Object,default:()=>({})}},setup(e){let t=dv(),n=cv(),r=fd(),i=sd(),a=P(!1),o=P(!1),s=W(()=>{let{locales:n={},...r}=e.options;return{...t.value,...r,...n[i.value]}}),c=async()=>{let{default:t}=await J(async()=>{let{default:e}=await import(`./esm-DLZGTa_Y.js`);return{default:e}},[]),{indexName:i,indices:o,searchParameters:c,...l}=s.value;t({...n,...l,container:`#${e.containerId}`,indices:mv({indices:o,indexName:i,searchParameters:c},r.value)}),a.value=!0},l=()=>{o.value||a.value||(o.value=!0,c(),gv(),R(i,c))};return sv(s,l),B(()=>{_v(s.value.appId)}),()=>[G(`div`,{id:e.containerId,style:{display:a.value?`block`:`none`}}),a.value?null:G(`div`,{class:`docsearch-placeholder`,onClick:l,innerHTML:hv(s.value.translations?.button)})]}}),yv=c({default:()=>bv}),bv={enhance({app:e}){fv(e),e.component(`SearchBox`,vv)}},xv=`VUEPRESS_REDIRECT_STATUS`,Sv=Rp(xv,{}),Cv=qp(xv,{}),wv=e=>{let t=Vp(),n=sd(),r=Id(e.config);return W(()=>{if(r.some(([e])=>n.value===e)){for(let e of t.value)for(let[t,i]of r)if(i.includes(e))return t===n.value?null:{lang:e,localePath:t}}return null})},Tv={config:{type:Object,required:!0},locales:{type:Object,required:!0}},Ev=e=>{let{routeLocale:t,routePath:n}=ud(),r=wv(e.config),i=ul(),a=P(!1),o=P(!1),s=W(()=>{if(!r.value)return null;let{lang:n,localePath:i}=r.value,a=e.locales[i],o=e.locales[t.value];return{hint:[a,o].map(({hint:e})=>e.replace(`$1`,n)),switch:a.switch.replace(`$1`,a.name),cancel:o.cancel,remember:a.remember}}),c=()=>{Cv.value[t.value]=!0,o.value&&(Sv.value[t.value]=!0),a.value=!1};return B(()=>{R(n,()=>{a.value=!1}),r.value&&!Cv.value[t.value]&&!Sv.value[t.value]&&(a.value=!0)}),di(()=>{a.value=!1}),{showComponent:a,shouldRemember:o,locale:s,persistUserAction:c,redirect:()=>{i.replace(n.value.replace(t.value,r.value.localePath)),c()}}},Dv=z({name:`RedirectModal`,props:Tv,setup(e){let{shouldRemember:t,showComponent:n,locale:r,persistUserAction:i,redirect:a}=Ev(e),o=P(),s=Kp(o);return B(()=>{o.value=document.body,rp(n,e=>{s.value=e})}),()=>G(Js,{name:`fade-in-scale-up`},()=>n.value?G(`div`,{key:`mask`,class:`redirect-modal-mask`},G(`div`,{key:`popup`,class:`redirect-modal-wrapper`},[G(`div`,{class:`redirect-modal-content`},r.value?.hint.map(e=>G(`p`,e))),G(`div`,{class:`redirect-modal-hint`},[G(`input`,{id:`remember-redirect`,type:`checkbox`,checked:t.value,onChange:()=>{t.value=!t.value}}),G(`label`,{for:`remember-redirect`},r.value?.remember)]),G(`div`,{class:`redirect-modal-actions`},[G(`button`,{type:`button`,class:`redirect-modal-action primary`,onClick:()=>{a()}},r.value?.switch),G(`button`,{type:`button`,class:`redirect-modal-action`,onClick:()=>{i()}},r.value?.cancel)])])):null)}}),Ov=c({config:()=>kv,default:()=>Av}),kv={config:{"/":[`zh-CN`]},autoLocale:!1,defaultLocale:`/`,localeFallback:!0,defaultBehavior:`defaultLocale`},Av=Ad({setup(){},rootComponents:[()=>G(Dv,{config:kv,locales:{"/":{name:`简体中文`,hint:`你的首选语言是 $1，是否切换到该语言？`,switch:`切换到 $1`,cancel:`取消`,remember:`记住我的选择`}}})]}),jv=e=>Jc(e)&&K(e.name),Mv=(e,t=!1)=>e?Nd(e)?e.map(e=>K(e)?{name:e}:jv(e)?e:null).filter(e=>e!=null):K(e)?[{name:e}]:jv(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?``:`| false`} | undefined\`, but got`,e),[]):[],Nv=(e,t)=>{if(e){if(Nd(e)&&e.every(e=>K(e)))return e;if(K(e))return[e];console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`,e)}return[]},Pv=e=>Nv(e,`category`),Fv=e=>Nv(e,`tag`),Iv=()=>{let e=pd();return W(()=>e.value.readingTime??null)},Lv=(e,t)=>{let{minutes:n,words:r}=e,{less1Minute:i,word:a,time:o}=t;return{time:n<1?i:o.replace(`$time`,Math.round(n).toString()),words:a.replace(`$word`,r.toString())}},Rv={words:``,time:``},zv={"/":{word:`约 $word 字`,less1Minute:`小于 1 分钟`,time:`大约 $time 分钟`}},Bv=()=>zv?ym(zv):W(()=>null),Vv=()=>{if(zv==null)return W(()=>Rv);let e=Iv(),t=Bv();return W(()=>e.value&&t.value?Lv(e.value,t.value):Rv)},Z=({name:e=``,color:t=`currentColor`,ariaLabel:n},{attrs:r,slots:i})=>G(`svg`,{xmlns:`http://www.w3.org/2000/svg`,class:[`icon`,`${e}-icon`],viewBox:`0 0 1024 1024`,fill:t,"aria-label":n??`${e} icon`,...r},i.default());Z.displayName=`IconBase`;var Hv=()=>G(Z,{name:`enter-fullscreen`},()=>G(`path`,{d:`M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z`}));Hv.displayName=`EnterFullScreenIcon`;var Uv=()=>G(Z,{name:`cancel-fullscreen`},()=>G(`path`,{d:`M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z`}));Uv.displayName=`CancelFullScreenIcon`;var Wv=e=>jc(e)?e:`https://github.com/${e}`,Gv=(e=``)=>!jc(e)||e.includes(`github.com`)?`GitHub`:e.includes(`bitbucket.org`)?`Bitbucket`:e.includes(`gitlab.com`)?`GitLab`:e.includes(`gitee.com`)?`Gitee`:null,Kv=()=>G(Z,{name:`github`},()=>G(`path`,{d:`M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z`}));Kv.displayName=`GitHubIcon`;var qv=()=>G(Z,{name:`gitlab`},()=>G(`path`,{d:`M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z`}));qv.displayName=`GitLabIcon`;var Jv=()=>G(Z,{name:`gitee`},()=>G(`path`,{d:`M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z`}));Jv.displayName=`GiteeIcon`;var Yv=()=>G(Z,{name:`bitbucket`},()=>G(`path`,{d:`M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z`}));Yv.displayName=`BitbucketIcon`;var Xv=()=>G(Z,{name:`source`},()=>G(`path`,{d:`M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z`}));Xv.displayName=`SourceIcon`;var Zv=({link:e,type:t=Gv(e??``)})=>{if(!t)return null;let n=t.toLowerCase();return G(n===`bitbucket`?Yv:n===`github`?Kv:n===`gitlab`?`GitLab`:n===`gitee`?Jv:Xv)},Qv=(e,t=0)=>{let n=3735928559^t,r=1103547991^t;for(let t=0;t<e.length;t++){let i=e.charCodeAt(t);n=Math.imul(n^i,2654435761),r=Math.imul(r^i,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507),r^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&r)+(n>>>0)},$v=(e,t)=>Qv(e)%t,ey=/#.*$/u,ty=e=>{let t=ey.exec(e);return t?t[0]:``},ny=e=>decodeURI(e).replace(ey,``).replace(/\/index\.html$/iu,`/`).replace(/\/(README|index)\.md$/iu,`/`).replace(/\.(?:html|md)$/iu,``),ry=(e,t)=>{if(!jd(t))return!1;let n=ny(e.path),r=ny(t),i=ty(t);return i?i===e.hash&&(!r||n===r):n===r},iy={mobileBreakPoint:`719px`,pcBreakPoint:`1440px`,colorNumber:`9`,hasMultipleThemeColors:`false`},ay=()=>{let e=z_();return t=>{ev({serverURL:e.value.serverURL,...t})}},oy=()=>Tg(),sy=()=>Dg(),cy=()=>({...ud(),theme:oy(),themeLocale:sy()}),ly=()=>{let e=oy();return W(()=>!!e.value.pure)},uy=()=>{let e=sy();return W(()=>e.value.author)},dy=()=>{let e=dd(),t=uy();return W(()=>{let{author:n}=e.value;return n?Mv(n):n===!1?[]:Mv(t.value,!1)})},fy=()=>{let e=dd(),t=L(Symbol.for(`categoryMap`),null);return W(()=>Pv(e.value.category??e.value.categories).map(e=>({name:e,path:t?.value.map[e]?.path??``})))},py=()=>{let e=dd(),t=L(Symbol.for(`tagMap`),null);return W(()=>Fv(e.value.tag??e.value.tags).map(e=>({name:e,path:t?.value.map[e]?.path??``})))},my=()=>{let{frontmatter:e,page:t}=cy();return W(()=>{let n=Vd(e.value.date);if(n)return n;let{createdTime:r}=t.value.git??{};return r?new Date(r):null})},hy=()=>{let{frontmatter:e,themeLocale:t}=cy(),n=dy(),r=fy(),i=py(),a=my(),o=Iv(),s=Vv();return{info:W(()=>({author:n.value,category:r.value,date:a.value,tag:i.value,isOriginal:e.value.isOriginal??!1,readingTime:o.value,readingTimeLocale:s.value,pageview:e.value.pageview??!0})),items:W(()=>e.value.pageInfo??t.value.pageInfo??null)}},gy=()=>{let e=sy();return W(()=>e.value.metaLocales)},_y=`http://.`,vy=()=>{let e=ul(),t=dl();return n=>{if(!n)return;if(Oc(n)){window.open(n);return}if(Hd(n)){if(t.fullPath===n)return;e.push(n);return}let r=t.path.slice(0,t.path.lastIndexOf(`/`));e.push(new URL(`${r}/${encodeURI(n)}`,_y).pathname)}},yy=()=>G(Z,{name:`author`},()=>G(`path`,{d:`M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z`}));yy.displayName=`AuthorIcon`;var by=()=>G(Z,{name:`calendar`},()=>G(`path`,{d:`M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z`}));by.displayName=`CalendarIcon`;var xy=()=>G(Z,{name:`category`},()=>G(`path`,{d:`M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z`}));xy.displayName=`CategoryIcon`;var Sy=()=>G(Z,{name:`eye`},()=>G(`path`,{d:`M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z`}));Sy.displayName=`EyeIcon`;var Cy=()=>G(Z,{name:`fire`},()=>G(`path`,{d:`M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z`}));Cy.displayName=`FireIcon`;var wy=()=>G(Z,{name:`print`},()=>G(`path`,{d:`M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z`}));wy.displayName=`PrintIcon`;var Ty=()=>G(Z,{name:`tag`},()=>G(`path`,{d:`M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z`}));Ty.displayName=`TagIcon`;var Ey=()=>G(Z,{name:`timer`},()=>G(`path`,{d:`M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z`}));Ey.displayName=`TimerIcon`;var Dy=()=>G(Z,{name:`word`},()=>[G(`path`,{d:`M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z`}),G(`path`,{d:`M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z`})]);Dy.displayName=`WordIcon`;var Oy=z({name:`AuthorInfo`,inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(e){let t=gy(),n=ly();return()=>e.author.length>0?G(`span`,{class:`page-author-info`,"aria-label":`${t.value.author}${n.value?``:`🖊`}`,...n.value?{}:{"data-balloon-pos":`up`}},[G(yy),G(`span`,e.author.map(e=>e.url?G(`a`,{class:`page-author-item`,href:e.url,target:`_blank`,rel:`noopener noreferrer`},e.name):G(`span`,{class:`page-author-item`},e.name))),G(`span`,{property:`author`,content:e.author.map(e=>e.name).join(`, `)})]):null}}),ky=z({name:`CategoryInfo`,inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(e){let t=gy(),n=vy(),r=ly();return()=>e.category.length>0?G(`span`,{class:`page-category-info`,"aria-label":`${t.value.category}${r.value?``:`🌈`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(xy),e.category.map(({name:e,path:t})=>G(`span`,{class:[`page-category-item`,{[`color${$v(e,Number(iy.colorNumber))}`]:!r.value,clickable:t}],role:t?`navigation`:``,onClick:()=>{t&&n(t)}},e)),G(`meta`,{property:`articleSection`,content:e.category.map(({name:e})=>e).join(`,`)})]):null}}),Ay=z({name:`DateInfo`,inheritAttrs:!1,props:{date:Object},setup(e){let t=fd(),n=gy(),r=ly(),i=W(()=>new Intl.DateTimeFormat(t.value,{dateStyle:`short`})),a=W(()=>e.date?i.value.format(e.date):null);return()=>e.date?G(`span`,{class:`page-date-info`,"aria-label":`${n.value.date}${r.value?``:`📅`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(by),G(`span`,{"data-allow-mismatch":`text`},a.value),G(`meta`,{property:`datePublished`,content:e.date.toISOString()||``})]):null}}),jy=z({name:`OriginalInfo`,inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){let t=gy();return()=>e.isOriginal?G(`span`,{class:`page-original-info`},t.value.origin):null}}),My=1e3,Ny=z({name:`PageInfo`,components:{AuthorInfo:Oy,CategoryInfo:ky,DateInfo:Ay,OriginalInfo:jy,PageViewInfo:z({name:`PageViewInfo`,inheritAttrs:!1,props:{pageview:[Boolean,String]},setup(e){let t=cd(),n=gy(),r=ly(),i=F(),a=P(0);return fp(i,()=>{let e=i.value.textContent;e&&!Number.isNaN(Number(e))&&(a.value=Number(e))},{childList:!0}),()=>e.pageview?G(`span`,{class:`page-pageview-info`,"aria-label":`${n.value.views}${r.value?``:`🔢`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(a.value<My?Sy:Cy),G(`span`,{ref:i,id:`ArtalkPV`,class:`vp-pageview waline-pageview-count`,"data-path":K(e.pageview)?e.pageview:t.value,"data-page-key":K(e.pageview)?e.pageview:t.value},`...`)]):null}}),ReadingTimeInfo:z({name:`ReadingTimeInfo`,inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(e){let t=gy(),n=ly(),r=W(()=>{if(!e.readingTime)return null;let{minutes:t}=e.readingTime;return t<1?`PT1M`:`PT${Math.round(t)}M`});return()=>e.readingTimeLocale?.time?G(`span`,{class:`page-reading-time-info`,"aria-label":`${t.value.readingTime}${n.value?``:`⌛`}`,...n.value?{}:{"data-balloon-pos":`up`}},[G(Ey),G(`span`,e.readingTimeLocale.time),G(`meta`,{property:`timeRequired`,content:r.value})]):null}}),TagInfo:z({name:`TagInfo`,inheritAttrs:!1,props:{tag:Array},setup(e){let t=gy(),n=vy(),r=ly();return()=>e.tag?.length?G(`span`,{class:`page-tag-info`,"aria-label":`${t.value.tag}${r.value?``:`🏷`}`,...r.value?{}:{"data-balloon-pos":`up`}},[G(Ty),e.tag.map(({name:e,path:t})=>G(`span`,{class:[`page-tag-item`,{[`color${$v(e,Number(iy.colorNumber))}`]:!r.value,clickable:t}],role:t?`navigation`:``,onClick:()=>{t&&n(t)}},e)),G(`meta`,{property:`keywords`,content:e.tag.map(({name:e})=>e).join(`,`)})]):null}}),WordInfo:z({name:`ReadTimeInfo`,inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(e){let t=gy(),n=ly();return()=>e.readingTimeLocale?.words?G(`span`,{class:`page-word-info`,"aria-label":`${t.value.words}${n.value?``:`🔠`}`,...n.value?{}:{"data-balloon-pos":`up`}},[G(Dy),G(`span`,e.readingTimeLocale.words),G(`meta`,{property:`wordCount`,content:e.readingTime?.words})]):null}})},props:{items:[Boolean,Array],info:{type:Object,required:!0}},setup(e){let t=ly();return()=>{let n=e.items??[`Author`,`Original`,`Date`,`PageView`,`ReadingTime`,`Category`,`Tag`];return n?G(`div`,{class:`page-info`},n.map(n=>G(V(`${n}Info`),{...e.info,isPure:t.value}))):null}}}),Py={"/popular/":[`archinstall`,`archlinux`,{text:`C++`,prefix:`cpp/`,collapsible:!0,icon:`fa-brands fa-cuttlefish`,link:`cpp/`,children:[`01-basic-syntax`,`02-object-oriented`,`03-templates`,`04-exceptions-android-ndk`,`05-memory-raii`,`06-modern-stdlib-concurrency`,`07-android-ndk-jni-kotlin-cpp`,`08-android-ndk-bitmap-libyuv-image-processing`]},`openwrt`,`ubuntudesktop`,`proxyclient`,{text:`网站收藏`,prefix:`website/`,collapsible:!0,icon:`globe`,link:`website/`,children:[`online-tools`,`image-tools`,`design-colors`,`icon-fonts`,`resource-downloads`,`network-security`,`communities`,`others`,`github-tools`,{text:`AI 服务`,prefix:`bookmarks-ai-services/`,collapsible:!0,icon:`fa-solid fa-robot`,link:`bookmarks-ai-services/`,children:[`01-item-bookmarks-import`]},{text:`Web3`,prefix:`bookmarks-web3/`,collapsible:!0,icon:`fa-solid fa-cubes`,link:`bookmarks-web3/`,children:[`01-item-bookmarks-import`]},{text:`云盘磁力`,prefix:`bookmarks-cloud-magnet/`,collapsible:!0,icon:`fa-solid fa-cloud-arrow-down`,link:`bookmarks-cloud-magnet/`,children:[`01-item-1ea281e3`,`02-item-3a144eb6`,`03-item-9d72744c`,`04-alist-762fba5d`,`05-item-309805ae`,`06-item-bookmarks-import`]},{text:`在线办公`,prefix:`bookmarks-office/`,collapsible:!0,icon:`fa-solid fa-file-lines`,link:`bookmarks-office/`,children:`01-ppt-8a267223.02-item-c97c0438.03-item-4bc53358.04-ocr-f529c51e.05-h5-52414527.06-item-44a38bea.07-item-e37e15c8.08-item-26112658.09-notion-5ea790e4.10-obsidian-8591294e.11-item-7714e5cf.12-markdown-590fc197.13-item-0bf378f2.14-item-2f3363dd.15-item-255feaba.16-item-3fa627d8.17-item-436367b0.18-item-4c0af1ed.19-item-5cab93be.20-pitch-deck-7ad75512.21-item-67f26bd6.22-item-39907da8.23-item-c6f517d4.24-item-f8c3feb4.25-item-0dd701c3.26-item-d6b8599d.27-item-faf0c48f.28-item-e1f00e74.29-item-fd9d4c15.30-item-1746c257`.split(`.`)},{text:`在线工具`,prefix:`bookmarks-tools/`,collapsible:!0,icon:`fa-solid fa-screwdriver-wrench`,link:`bookmarks-tools/`,children:[`01-item-59ddf3cc`,`02-item-5a632ccb`,`03-item-2f313f9b`,`04-item-a58fdbfc`,`05-item-19483022`,`06-item-a7856a0c`,`07-item-e7a7cf36`,`08-item-a8644fae`,`09-item-22b03c02`,`10-item-1a34b8d9`,`11-item-12fbf752`,`12-item-865429e2`,`13-item-91824b68`,`14-item-52bcff87`,`15-item-59b03fcd`,`16-item-78921798`,`17-item-8f6b5802`,`18-app-8e0f5b14`]},{text:`在线设计`,prefix:`bookmarks-design/`,collapsible:!0,icon:`fa-solid fa-palette`,link:`bookmarks-design/`,children:[`01-item-fcf6995a`,`02-item-6c8e5ba7`,`03-item-33d30980`,`04-item-d42f4380`,`05-item-09f36e2c`,`06-item-19a274e7`,`07-color-aa8b0ad9`,`08-item-0fb267ee`,`09-item-eb36d623`,`10-item-065a2554`,`11-item-22881298`,`12-font-ac86e71a`,`13-c4d-51ac2c7d`,`14-builder-2bd4a59b`,`15-ui-3cfa4083`,`16-item-d2b24b96`,`17-ps-e6633679`,`18-ps-c32f98a6`,`19-ai-ce2bddec`,`20-item-26a0089b`,`21-logo-7ed406b9`,`22-item-3a783e13`,`23-item-68e4531e`,`24-svg-ae8eb96d`,`25-item-93cd23b2`]},{text:`娱乐休闲`,prefix:`bookmarks-entertainment/`,collapsible:!0,icon:`fa-solid fa-film`,link:`bookmarks-entertainment/`,children:[`01-item-77ae7582`,`02-item-ba08216f`,`03-item-67bc707a`,`04-item-fe148076`,`05-item-46630fb2`,`06-item-72191b3a`,`07-item-c6e7d643`,`08-item-e8663767`]},{text:`学习`,prefix:`bookmarks-learning/`,collapsible:!0,icon:`fa-solid fa-book-open-reader`,link:`bookmarks-learning/`,children:[`01-ai-fad4099c`,`02-item-819428b4`,`03-item-ed648d60`,`04-item-15660199`,`05-item-4e678737`,`06-item-5c39c47f`,`07-item-833263aa`,`08-item-7b439a2d`,`09-item-0d51a1a9`,`10-item-1d0132a0`,`11-item-60832c28`,`12-item-38af269b`,`13-item-8d35aac9`,`14-item-38f57b82`,`15-item-ce8346d9`,`16-item-fc56dbcb`,`17-item-13b4e06b`,`18-ai-bd1cbf26`,`19-item-dac01ad3`,`20-item-bookmarks-import`]},{text:`工作`,prefix:`bookmarks-work/`,collapsible:!0,icon:`fa-solid fa-briefcase`,link:`bookmarks-work/`,children:[`01-item-aafd61a5`,`02-item-938f16a9`,`03-item-1f18993c`,`04-item-09496b16`,`05-item-cab20c31`,`06-item-ba02f74b`,`07-item-c56faefc`,`08-item-b1bae588`,`09-item-c47d7a21`,`10-item-6fb4cfa1`,`11-item-bd3d9d0c`,`12-item-37a38474`,`13-item-3bc5e602`,`14-item-e44b1171`,`15-item-5d1e5145`,`16-item-be00cd79`,`17-item-9b42ae75`,`18-item-02328df5`,`19-item-287eabba`,`20-item-f3ae9f2b`,`21-item-4dd59878`,`22-item-bookmarks-import`]},{text:`文库学术`,prefix:`bookmarks-academic/`,collapsible:!0,icon:`fa-solid fa-graduation-cap`,link:`bookmarks-academic/`,children:[`01-item-364491f0`,`02-item-1d7d950b`,`03-item-4dd59878`,`04-ai-14f2c0d2`,`05-item-1ebe53a0`,`06-item-7a22fd74`,`07-item-8998c0f7`,`08-item-0ffb08cd`,`09-item-7718a4c2`,`10-item-f3ae9f2b`,`11-item-6e80f09b`,`12-item-287eabba`,`13-item-76b63278`,`14-item-4baafd48`,`15-item-ac65355d`,`16-item-58423fa5`]},{text:`资源书签`,prefix:`bookmarks-resources/`,collapsible:!0,icon:`fa-solid fa-bookmark`,link:`bookmarks-resources/`,children:[`01-item-dd4e9bbb`,`02-item-fe573eac`,`03-item-258bb97e`,`04-item-fdf38d61`,`05-item-b4e050ca`,`06-item-99cc558a`,`07-item-9d72744c`,`08-item-3a144eb6`,`09-item-7191bef6`,`12-item-e3901745`,`13-item-1fdb6230`,`15-item-f068f0da`,`16-item-938f16a9`,`17-item-dac01ad3`,`18-item-31648a71`,`19-item-a3008d48`,`20-item-09095f7d`,`21-item-19a04960`,`22-item-1df0987f`,`24-item-30a56287`,`25-item-c9a0c6dd`,`26-item-6acd244a`,`27-speed-dials-11b5c7e6`,{text:`在线工具`,prefix:`14-item-9c223228/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`14-item-9c223228/`,children:`01-item-0a79900e.02-item-b05db14b.03-item-8bd9c322.04-pdf-ocr-ec1e16ef.05-item-59ddf3cc.06-item-22b03c02.07-item-5378bbfc.08-item-12fbf752.09-item-7d575004.10-item-865429e2.11-item-91824b68.12-item-52bcff87.13-item-59b03fcd.14-item-0084faa4.15-item-dbf2da13.16-item-22c9a8c6.17-item-78921798.18-item-5084f566.19-ai-54600dc7.20-item-7c5c113b.21-item-7fa695e5.22-item-24a93fff.23-item-f910e251.24-item-dae6399d.25-item-02328df5.26-item-26112658.27-item-f74baa06.28-item-77b9c8bd.29-item-74a33946.30-app-8e0f5b14.31-item-2d1c66bd`.split(`.`)},{text:`学习相关`,prefix:`23-item-cd6a49c3/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`23-item-cd6a49c3/`,children:[`01-ai-bd1cbf26`,`02-ai-10a3b7f1`,`03-item-60832c28`,`04-item-6603c934`,`05-item-5d1e5145`,`06-item-38b2fafe`,`07-item-09095f7d`,`08-item-7b439a2d`,`09-item-833263aa`,`10-item-5f66e127`,`11-item-d13a94bf`,`12-item-0d51a1a9`,`13-item-729e62fd`,`14-item-e44b1171`,`15-item-eb2a471d`,`16-item-b8685cff`,`17-study-2c861c5f`,`18-item-fc7da0d9`,`19-item-ffdf1733`,`20-item-101fba8c`,`21-item-1d0132a0`,`22-item-43087966`]},{text:`电脑常用`,prefix:`11-item-2698170c/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`11-item-2698170c/`,children:[`01-item-2699981a`,`02-item-fd5ccbfd`,`03-github-0c1b3cb7`,`04-docker-hub-0be4893c`,`05-cloudflare-b03c6a7a`,`06-item-b881dfc0`,`07-item-0f2bbfb7`,`08-item-a9fbbd40`,`09-item-133f51ea`,`10-item-b2a1a4ef`,`11-item-cc910c2c`,`12-item-f5430db2`,`13-item-d14f1bd7`,`14-item-f1b52f9f`,`15-item-a407a094`,`16-item-9cab073b`,`17-github-bf293ef5`,`18-item-7eb64309`,`19-item-b4922b33`]},{text:`软件相关`,prefix:`10-item-88d03858/`,collapsible:!0,icon:`fa-solid fa-folder-open`,link:`10-item-88d03858/`,children:[`01-item-420a0db3`,`02-item-5ebdb3a0`,`03-item-a3b9cfc6`,`04-item-d5a34260`,`05-item-4acba229`,`06-item-428700a5`,`07-tv-0ebecdea`,`08-win-e450697b`,`09-win-85967b66`,`10-win-bb256c98`,`11-win-e78ad006`,`12-mac-2886a641`,`13-mac-82c2f8d1`,`14-mac-c6d46cfd`,`15-mac-a4fb47fe`,`16-item-1a1e0af6`,`17-item-c3d24506`,`18-item-23c4e951`,`19-ios-e8f480c2`,`20-ios-f62ce7ae`,`21-item-e70272b2`,`22-item-da0bfcc0`,`23-item-fca914b9`]}]},{text:`资源探索`,prefix:`bookmarks-explore/`,collapsible:!0,icon:`fa-solid fa-compass`,link:`bookmarks-explore/`,children:[`01-item-45a4f144`,`02-item-7535c9b5`,`03-item-d42a8faa`,`04-item-ec369adc`,`05-item-e2b9e852`,`06-item-82508c75`,`07-item-f1b60e5d`,`08-item-96151af2`,`09-item-809a9af0`,`10-item-70971daf`,`11-item-d1397cc9`,`12-item-f90bbe93`,`13-item-e283fcc9`,`14-diy-a0ec9f52`,`15-item-8b731a8e`,`16-item-7138ec3f`,`17-item-b9bfea5f`,`18-item-07dc9df3`,`19-item-bookmarks-import`]},{text:`软件`,prefix:`bookmarks-software/`,collapsible:!0,icon:`fa-solid fa-laptop-code`,link:`bookmarks-software/`,children:[`01-item-420a0db3`,`02-item-5ebdb3a0`,`03-item-a3b9cfc6`,`04-item-d5a34260`,`05-item-4acba229`,`06-item-428700a5`,`07-tv-0ebecdea`,`08-win-e450697b`,`09-win-85967b66`,`10-win-bb256c98`,`11-win-e78ad006`,`12-mac-2886a641`,`13-mac-82c2f8d1`,`14-mac-c6d46cfd`,`15-mac-a4fb47fe`,`16-item-1a1e0af6`,`17-item-c3d24506`,`18-item-23c4e951`,`19-ios-e8f480c2`,`20-ios-f62ce7ae`,`21-item-e70272b2`,`22-item-da0bfcc0`,`23-item-fca914b9`]}]}],"/collection/":[`flash`,{text:`Linux 相关`,prefix:`linux/`,collapsible:!0,icon:`bars-staggered`,link:`linux/`,children:[{text:`Linux 服务端运维`,prefix:`devkit/`,collapsible:!0,icon:`bars-staggered`,link:`devkit/`,children:[`java`,`linux-server-optimization`,`mysql`,`nginx`,`python`,`web`]}]},{text:`Windows 设置`,prefix:`windows/`,collapsible:!0,icon:`bars-staggered`,link:`windows/`,children:[{text:`Windows 开发环境配置`,prefix:`devkit/`,collapsible:!0,icon:`bars-staggered`,link:`devkit/`,children:[`adb`,`cygwin`,`docker`,`docker-desktop-wsl`,`etcd`,`go`,`java`,`mongodb`,`mysql`,`nvm`,`php`,`postgresql`,`python`,`rabbitmq`,`redis`,`ruby`,`rust`,`wsl2`]},`reset`,`system-build`]},{text:`Xposed开发`,prefix:`xposed/`,collapsible:!0,icon:`fa-solid fa-puzzle-piece`,link:`xposed/`,children:`01-env-set.02-xposed-java-methods.03-hook-basic.04-anti-detect.05-crypto-hook.06-data-transfer.07-native-hook.08-dobby-hook-techniques.09-register-natives-hook.10-jni-args-analysis.11-okhttp-intercept-kotlin.12-dexkit-obfuscation-search.13-dex-file-structure.14-dexkit-architecture-deep-dive.15-elf-file-structure.16-app-lifecycle-hook.17-libxposed-module-lifecycle.18-sekiro-rpc-sign-hook.19-artmethod-entrypoint-hook.20-art-vm-create-flow.21-class-loading-linking-initialization.22-lsplant-method-entry-bridge.23-lsplant-init-config-jni-source-build.24-lsplant-init-native-runtime-jit.25-lsplant-hook-unhook-state.26-lsplt-plt-hook-elf-parser.27-so-dynamic-injection-frida-jni`.split(`.`)},{text:`汇编语言`,prefix:`assembly-x86-arm/`,collapsible:!0,icon:`fa-solid fa-book-open`,link:`assembly-x86-arm/`,children:[`01-basic-syntax`,`02-memory-segmentation`,`03-registers`,`04-system-calls`,`05-addressing-modes`,`06-variables`,`07-constants`,`08-arithmetic-instructions`,`09-logical-instructions`,`10-conditionals`,`11-loops`,`12-number-processing`,`13-string-processing`,`14-arrays`,`15-procedures`,`16-recursion`,`17-macros`,`18-file-management`,`19-memory-management`]}],"/one-click/":[`intelij`,`mas`]},Fy=Symbol(``),Iy=()=>{let e=L(Fy);if(!e)throw Error(`useDarkMode() is called without provider.`);return e},Ly=e=>{let t=Tp(),n=oy(),r=W(()=>n.value.darkmode??`switch`),i=kp(`vuepress-theme-hope-scheme`,`auto`),a=W(()=>{switch(r.value){case`disable`:return!1;case`enable`:return!0;case`auto`:return t.value;case`switch`:return i.value===`dark`||i.value===`auto`&&t.value;case`toggle`:return i.value===`dark`;default:return i.value===`dark`||i.value===`auto`&&t.value}}),o=W(()=>{let e=r.value;return e===`switch`||e===`toggle`});e.provide(Fy,{canToggle:o,config:r,isDarkMode:a,status:i}),Object.defineProperties(e.config.globalProperties,{$isDarkMode:{get:()=>a.value}})},Ry=()=>{let{config:e,isDarkMode:t,status:n}=Iy();cr(()=>{e.value===`disable`?n.value=`light`:e.value===`enable`?n.value=`dark`:e.value===`toggle`&&n.value===`auto`&&(n.value=`light`)}),X(`beforeprint`,()=>{t.value&&(document.documentElement.dataset.theme=`light`)}),X(`afterprint`,()=>{t.value&&(document.documentElement.dataset.theme=`dark`)}),B(()=>{rp(t,e=>{document.documentElement.dataset.theme=e?`dark`:`light`})})},zy=e=>!Oc(e)&&!Ac(e),By=(e,t=!1,n)=>{let{meta:r,path:i,notFound:a}=bd(e,n);return a?{text:i,link:i}:{text:!t&&r.shortTitle?r.shortTitle:r.title||i,link:i,icon:r.icon}},Vy=(e=``,t=``)=>Oc(t)||Hd(t)?t:`${Wc(e)}${t}`,Hy=(e,t)=>{let n=K(e)?By(Vy(t,e)):K(e.link)?{...e,link:zy(e.link)?bd(Vy(t,e.link)).path:e.link}:e;if(`children`in n){let e=Vy(t,n.prefix),r=n.children===`structure`?Py[e]:n.children;return{...n,prefix:e,children:r.map(t=>Hy(t,e))}}return{...n}},Uy=({config:e,prefix:t=``})=>e.map(e=>Hy(e,t)),Wy=({config:e,routePath:t})=>{let n=Rd(e).sort((e,t)=>t.length-e.length);for(let r of n)if(Pd(decodeURI(t),r)){let t=e[r];return Uy({config:t===`structure`?Py[r]:t||[],prefix:r})}return console.warn(`${decodeURI(t)} is missing it's sidebar config.`),[]},Gy=({config:e,routeLocale:t,routePath:n})=>e===`structure`?Uy({config:Py[t],prefix:t}):Nd(e)?Uy({config:e}):Jc(e)?Wy({config:e,routePath:n}):[],Ky=Symbol(``),qy=()=>{let{frontmatter:e,routeLocale:t,routePath:n,themeLocale:r}=cy(),i=W(()=>e.value.home?!1:e.value.sidebar??r.value.sidebar??`structure`);ir(Ky,W(()=>Gy({config:i.value,routeLocale:t.value,routePath:n.value})))},Jy=()=>{let e=L(Ky);if(!e)throw Error(`useSidebarItems() is called without provider.`);return e},Yy=z({name:`PageFooter`,setup(){let{frontmatter:e,theme:t,themeLocale:n}=cy(),r=dy(),i=W(()=>{let{copyright:t,footer:r}=e.value;return r!==!1&&!!(t||r||n.value.displayFooter)}),a=W(()=>{let{footer:t}=e.value;return K(t)?t:n.value.footer??``}),o=W(()=>r.value.map(({name:e})=>e).join(`, `)),s=e=>`Copyright © ${new Date().getFullYear()} ${o.value} ${e?`${e} Licensed`:``}`,c=W(()=>{let{copyright:r,license:i=``}=e.value,{license:a}=t.value,{copyright:c}=n.value;return r??(i?s(i):c??(o.value||a?s(a):!1))});return()=>i.value?G(`footer`,{class:`vp-footer-wrapper`,"vp-footer":``},[a.value?G(`div`,{class:`vp-footer`,innerHTML:a.value}):null,c.value?G(`div`,{class:`vp-copyright`,innerHTML:c.value}):null]):null}}),Xy=()=>G(Z,{name:`outlook`},()=>[G(`path`,{d:`M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z`})]);Xy.displayName=`AppearanceIcon`;var Zy=()=>G(Z,{name:`auto`},()=>G(`path`,{d:`M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z`}));Zy.displayName=`AutoColorModeIcon`;var Qy=()=>G(Z,{name:`light`},()=>G(`path`,{d:`M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z`}));Qy.displayName=`LightColorModeIcon`;var $y=()=>G(Z,{name:`dark`},()=>G(`path`,{d:`M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z`}));$y.displayName=`DarkColorModeIcon`;var eb=z({name:`ColorModeSwitch`,setup(){let{config:e,isDarkMode:t,status:n}=Iy(),r=ly(),i=()=>{e.value===`switch`?n.value={light:`dark`,dark:`auto`,auto:`light`}[n.value]:n.value=n.value===`light`?`dark`:`light`},a=async e=>{if(!(document.startViewTransition&&!globalThis.matchMedia(`(prefers-reduced-motion: reduce)`).matches&&!r.value)){i();return}let n=e.clientX,a=e.clientY,o=Math.hypot(Math.max(n,innerWidth-n),Math.max(a,innerHeight-a)),s=t.value;await document.startViewTransition(async()=>{i(),await Un()}).ready,t.value!==s&&document.documentElement.animate({clipPath:t.value?[`circle(${o}px at ${n}px ${a}px)`,`circle(0px at ${n}px ${a}px)`]:[`circle(0px at ${n}px ${a}px)`,`circle(${o}px at ${n}px ${a}px)`]},{duration:400,pseudoElement:t.value?`::view-transition-old(root)`:`::view-transition-new(root)`})};return()=>G(`button`,{type:`button`,class:`vp-color-mode-switch`,id:`color-mode-switch`,onClick:a},[G(Zy,{style:{display:n.value===`auto`?`block`:`none`}}),G($y,{style:{display:n.value===`dark`?`block`:`none`}}),G(Qy,{style:{display:n.value===`light`?`block`:`none`}})])}}),tb=()=>{let e=sy();return W(()=>e.value.outlookLocales)},nb=z({name:`ColorMode`,setup(){let e=tb(),{canToggle:t}=Iy();return()=>t.value?G(`div`,{class:`vp-color-mode`},[G(`label`,{class:`vp-color-mode-title`,for:`color-mode-switch`},e.value.darkmode),G(eb)]):null}}),rb=`VUEPRESS_THEME_COLOR`,ib=z({name:`ThemeColorPicker`,props:{themeColors:{type:Object,required:!0}},setup(e){let{isDarkMode:t}=Iy(),n=W(()=>{let n=new Map(Object.entries(e.themeColors));for(let[e,r]of n.entries())e.includes(`light`)&&(t.value||n.set(e.replace(`light-`,``),r),n.delete(e)),e.includes(`dark`)&&(t.value&&n.set(e.replace(`dark-`,``),r),n.delete(e));return[...n.entries()].map(([e,t])=>({name:e,color:t}))}),r=(e=``)=>{let t=document.documentElement.classList,r=n.value.map(({name:e})=>e);if(!e){localStorage.removeItem(rb),t.remove(...r);return}t.remove(...r.filter(t=>t!==e)),t.add(e),localStorage.setItem(rb,e)};return B(()=>{let e=localStorage.getItem(rb);e&&r(e)}),()=>G(`ul`,{class:`vp-theme-color-picker`,id:`theme-color-picker`},[G(`li`,G(`span`,{class:`theme-color`,onClick:()=>{r()}})),n.value.map(({name:e,color:t})=>G(`li`,G(`span`,{style:{background:t},onClick:()=>{r(e)}})))])}}),ab=iy.hasMultipleThemeColors===`true`,ob=ab?Ld(Id(iy).filter(([e])=>e.startsWith(`theme-`))):{},sb=z({name:`ThemeColor`,setup(){let e=tb();return()=>ab?G(`div`,{class:`vp-theme-color`},[G(`label`,{class:`vp-theme-color-title`,for:`theme-color-picker`},e.value.themeColor),G(ib,{themeColors:ob})]):null}}),cb=()=>G(Z,{name:`cancel-fullscreen`},()=>G(`path`,{d:`M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z`}));cb.displayName=`CancelFullScreenIcon`;var lb=()=>G(Z,{name:`enter-fullscreen`},()=>G(`path`,{d:`M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z`}));lb.displayName=`EnterFullScreenIcon`;var ub=z({name:`ToggleFullScreenButton`,setup(){let{isSupported:e,isFullscreen:t,toggle:n}=Pp();return()=>e.value?G(`button`,{type:`button`,id:`full-screen-switch`,class:`full-screen`,ariaPressed:t.value,onClick:()=>n()},t.value?G(cb):G(lb)):null}}),db=z({name:`ToggleFullScreenButton`,setup(){let e=tb(),{isSupported:t}=Pp();return()=>t.value?G(`div`,{class:`full-screen-wrapper`},[G(`label`,{class:`full-screen-title`,for:`full-screen-switch`},e.value.fullscreen),G(ub)]):null}}),fb=z({name:`AppearanceSettings`,setup(){let e=oy(),t=ly(),n=W(()=>!t.value&&e.value.fullscreen);return()=>G(Td,()=>[ab?G(sb):null,G(nb),n.value?G(db):null])}}),pb=z({name:`AppearanceButton`,setup(){let e=oy(),{canToggle:t}=Iy(),{isSupported:n}=Pp(),r=ly(),i=P(!1),a=W(()=>!r.value&&e.value.fullscreen&&n),o=W(()=>ab||t.value||a.value);return hd(()=>{i.value=!1}),()=>o.value?G(`div`,{class:`vp-nav-item hide-in-mobile`},t.value&&!a.value&&!ab?G(eb):a.value&&!t.value&&!ab?G(ub):G(`button`,{type:`button`,class:[`vp-appearance-button`,{open:i.value}],tabindex:`-1`,"aria-hidden":!0},[G(Xy),G(`div`,{class:`vp-appearance-dropdown`},G(fb))])):null}}),mb=()=>G(Z,{name:`i18n`},()=>[G(`path`,{d:`M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z`})]);mb.displayName=`I18nIcon`;var hb=({config:e,iconSizing:t=`both`},{emit:n,slots:r})=>{let{icon:i}=e;return G(wd,{config:e,onFocusout:()=>{n(`focusout`)}},{...r,before:r.before??(i?()=>G(V(`VPIcon`),{icon:i,sizing:t}):null)})};hb.displayName=`AutoLink`;var gb=z({name:`NavbarDropdown`,props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){let n=Sn(e,`config`),r=W(()=>n.value.ariaLabel??n.value.text),i=P(!1),a=e=>{e.detail===0&&(i.value=!i.value)};return hd(()=>{i.value=!1}),()=>G(`div`,{class:[`vp-dropdown-wrapper`,{open:i.value}]},[G(`button`,{type:`button`,class:`vp-dropdown-title`,"aria-label":r.value,onClick:a},[t.title?.()??[G(V(`VPIcon`),{icon:n.value.icon}),e.config.text],G(`span`,{class:`arrow`}),G(`ul`,{class:`vp-dropdown`},n.value.children.map((e,t)=>{let r=t===n.value.children.length-1;return G(`li`,{class:`vp-dropdown-item`},`children`in e?[G(`h4`,{class:`vp-dropdown-subtitle`},e.link?G(hb,{config:e,onFocusout:()=>{e.children.length===0&&r&&(i.value=!1)}}):e.text),G(`ul`,{class:`vp-dropdown-subitems`},e.children.map((t,n)=>G(`li`,{class:`vp-dropdown-subitem`},G(hb,{config:t,onFocusout:()=>{n===e.children.length-1&&r&&(i.value=!1)}}))))]:G(hb,{config:e,onFocusout:()=>{r&&(i.value=!1)}}))}))])])}}),_b=z({name:`NavbarBrand`,setup(){let{routeLocale:e,siteLocale:t,themeLocale:n}=cy(),r=W(()=>n.value.home??e.value),i=W(()=>t.value.title),a=W(()=>n.value.navbarTitle??i.value),o=W(()=>n.value.logo?Y(n.value.logo):null),s=W(()=>n.value.logoDark?Y(n.value.logoDark):null);return()=>G(Cd,{to:r.value,class:`vp-brand`,"aria-label":n.value.routerLocales.home},()=>[o.value?G(`img`,{class:[`vp-nav-logo`,{light:!!s.value}],src:o.value,alt:``}):null,s.value?G(`img`,{class:[`vp-nav-logo dark`],src:s.value,alt:``}):null,a.value?G(`span`,{class:[`vp-site-name`,{"hide-in-pad":o.value&&(n.value.hideSiteNameOnMobile??!0)}]},a.value):null])}}),vb=(e,t=``)=>K(e)?By(Vy(t,e)):`children`in e?{...e,...e.link&&zy(e.link)?{link:bd(Vy(t,e.link)).path}:{},children:e.children.map(n=>vb(n,Vy(t,e.prefix)))}:{...e,link:zy(e.link)?bd(Vy(t,e.link)).path:e.link},yb=()=>{let e=sy();return W(()=>(e.value.navbar||[]).map(e=>vb(e)))},bb=z({name:`NavbarLinks`,setup(){let e=yb();return()=>e.value.length>0?G(`nav`,{class:`vp-nav-links`},e.value.map(e=>G(`div`,{class:`vp-nav-item hide-in-mobile`},`children`in e?G(gb,{config:e}):G(hb,{config:e,iconSizing:`height`})))):null}}),xb=(e,t)=>t[t.length-1]===e,Sb=z({name:`NavScreenMenu`,props:{config:{type:Object,required:!0}},setup(e){let t=Sn(e,`config`),n=dl(),r=W(()=>t.value.ariaLabel??t.value.text),i=P(!1);return hd(()=>{i.value=!1}),R(()=>n.fullPath,()=>{i.value=!1}),()=>[G(`button`,{type:`button`,class:[`vp-nav-screen-menu-title`,{active:i.value}],"aria-label":r.value,onClick:()=>{i.value=!i.value}},[G(`span`,{class:`text`},[G(V(`VPIcon`),{icon:t.value.icon,sizing:`both`}),e.config.text]),G(`span`,{class:[`arrow`,i.value?`down`:`end`]})]),G(`ul`,{class:[`vp-nav-screen-menu`,{hide:!i.value}]},t.value.children.map(e=>G(`li`,{class:`vp-nav-screen-menu-item`},`children`in e?[G(`h4`,{class:`vp-nav-screen-menu-subtitle`},e.link?G(hb,{config:e,onFocusout:()=>{xb(e,t.value.children)&&e.children.length===0&&(i.value=!1)}}):e.text),G(`ul`,{class:`vp-nav-screen-menu-subitems`},e.children.map(n=>G(`li`,{class:`vp-nav-screen-menu-subitem`},G(hb,{config:n,onFocusout:()=>{xb(n,e.children)&&xb(e,t.value.children)&&(i.value=!1)}}))))]:G(hb,{config:e,onFocusout:()=>{xb(e,t.value.children)&&(i.value=!1)}}))))]}}),Cb=z({name:`NavScreenLinks`,setup(){let e=yb();return()=>e.value.length>0?G(`nav`,{class:`nav-screen-links`},e.value.map(e=>G(`div`,{class:`navbar-links-item`},`children`in e?G(Sb,{config:e}):G(hb,{config:e})))):null}}),{mobileBreakPoint:wb,pcBreakPoint:Tb}=iy,Eb=e=>e.endsWith(`px`)?Number(e.slice(0,-2)):null,Db=()=>{let e=P(!1),t=P(!1),n=()=>{e.value=window.innerWidth<=(Eb(wb)??719),t.value=window.innerWidth>=(Eb(Tb)??1440)};return X(`resize`,n,!1),X(`orientationchange`,n,!1),B(()=>{n()}),{isMobile:e,isPC:t}},Ob=z({name:`NavScreen`,props:{show:Boolean},slots:Object,setup(e,{slots:t}){let{isMobile:n}=Db(),r=F(),i=Kp(r);return hd(()=>{i.value=!1}),R(n,t=>{!t&&e.show&&(i.value=!1)}),B(()=>{r.value=document.body}),fi(()=>{i.value=!1}),()=>G(Zo,{name:`fade-in-down`,onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>e.show?G(`div`,{id:`nav-screen`,class:`vp-nav-screen`},G(`div`,{class:`vp-nav-screen-container`},[t.navScreenTop?.(),G(Cb),G(`div`,{class:`vp-appearance-wrapper`},G(fb)),t.navScreenBottom?.()])):null)}}),kb=()=>{let e=sy(),t=W(()=>e.value.repo),n=W(()=>t.value?Wv(t.value):null),r=W(()=>t.value?Gv(t.value):null),i=W(()=>n.value?e.value.repoLabel??r.value??`Source`:null);return W(()=>!n.value||!i.value||e.value.repoDisplay===!1?null:{type:r.value??`Source`,label:i.value,link:n.value})},Ab=z({name:`RepoLink`,setup(){let e=kb();return()=>e.value?G(`div`,{class:`vp-nav-item vp-action`},G(`a`,{class:`vp-action-link`,href:e.value.link,target:`_blank`,rel:`noopener noreferrer`,"aria-label":e.value.label},G(Zv,{type:e.value.type,style:{width:`1.25rem`,height:`1.25rem`,verticalAlign:`middle`}}))):null}}),jb=({active:e=!1},{emit:t})=>G(`button`,{type:`button`,class:[`vp-toggle-navbar-button`,{"is-active":e}],"aria-label":`Toggle Navbar`,"aria-expanded":e,"aria-controls":`nav-screen`,onClick:()=>{t(`toggle`)}},G(`span`,[G(`span`,{class:`vp-top`}),G(`span`,{class:`vp-middle`}),G(`span`,{class:`vp-bottom`})]));jb.displayName=`ToggleNavbarButton`;var Mb=(e,{emit:t})=>G(`button`,{type:`button`,class:`vp-toggle-sidebar-button`,title:`Toggle Sidebar`,onClick:()=>{t(`toggle`)}},G(`span`,{class:`icon`}));Mb.displayName=`ToggleSidebarButton`,Mb.emits=[`toggle`];var Nb=()=>{let e=sy(),{isMobile:t}=Db();return W(()=>{let{navbarAutoHide:n=`mobile`}=e.value;return n!==`none`&&(n===`always`||t.value)})},Pb=z({name:`NavBar`,emits:[`toggleSidebar`],slots:Object,setup(e,{emit:t,slots:n}){let r=sy(),{isMobile:i}=Db(),a=P(!1),o=Nb(),s=W(()=>r.value.navbarLayout??{start:[`Brand`],center:[`Links`],end:[`Language`,`Repo`,`Outlook`,`Search`]}),c={Brand:_b,Language:Lh,Links:bb,Repo:Ab,Outlook:pb,Search:cm(`SearchBox`)?V(`SearchBox`):Lh},l=e=>c[e]??(cm(e)?V(e):Lh);return hd(()=>{a.value=!1}),R(i,e=>{e||(a.value=!1)}),()=>[G(`header`,{key:`navbar`,id:`navbar`,class:[`vp-navbar`,{"auto-hide":o.value}],"vp-navbar":``},[G(`div`,{class:`vp-navbar-start`},[G(Mb,{onToggle:()=>{a.value&&=!1,t(`toggleSidebar`)}}),s.value.start?.map(e=>G(l(e)))]),G(`div`,{class:`vp-navbar-center`},[s.value.center?.map(e=>G(l(e)))]),G(`div`,{class:`vp-navbar-end`},[s.value.end?.map(e=>G(l(e))),G(jb,{active:a.value,onToggle:()=>{a.value=!a.value}})])]),G(Ob,{show:a.value},n)]}}),Fb=(e,t)=>t.activeMatch?new RegExp(t.activeMatch,`u`).test(e.path):ry(e,t.link),Ib=z({name:`SidebarChild`,props:{config:{type:Object,required:!0}},setup(e){let t=dl();return()=>K(e.config.link)?G(hb,{class:[`vp-sidebar-link`,{active:Fb(t,e.config)}],config:{...e.config,exact:!0}}):G(`p`,e,[G(V(`VPIcon`),{icon:e.config.icon,sizing:`both`}),e.config.text])}}),Lb=(e,t)=>`children`in t?!!t.prefix&&ry(e,t.prefix)||t.children.some(t=>Lb(e,t)):Fb(e,t),Rb=z({name:`SidebarGroup`,props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:[`toggle`],setup(e,{emit:t}){let n=dl(),r=P(!1),i=W(()=>Lb(n,e.config)),a=W(()=>Fb(n,e.config)),o=W(()=>e.open||e.config.expanded&&!r.value);return()=>{let{collapsible:n,children:s,icon:c,prefix:l,link:u,text:d}=e.config;return G(`section`,{class:`vp-sidebar-group`},[G(n?`button`:`p`,{class:[`vp-sidebar-header`,{clickable:n||u,exact:a.value,active:i.value}],...n?{type:`button`,onClick:()=>{r.value=!0,t(`toggle`)}}:{}},[G(V(`VPIcon`),{icon:c,sizing:`both`}),u?G(hb,{class:`vp-sidebar-title no-external-link-icon`,config:{text:d,link:u}}):G(`span`,{class:`vp-sidebar-title`},d),n?G(`span`,{class:[`vp-arrow`,o.value?`down`:`end`]}):null]),o.value||!n?G(zb,{key:l,config:s}):null])}}}),zb=z({name:`SidebarLinks`,props:{config:{type:Array,required:!0}},setup(e){let t=dl(),n=cd(),r=P(-1),i=e=>{r.value=e===r.value?-1:e};return rp(n,()=>{r.value=e.config.findIndex(e=>Lb(t,e))},{flush:`post`}),()=>G(`ul`,{class:`vp-sidebar-links`},e.config.map((e,t)=>G(`li`,`children`in e?G(Rb,{config:e,open:t===r.value,onToggle:()=>{i(t)}}):G(Ib,{config:e}))))}}),Bb=z({name:`SideBar`,slots:Object,setup(e,{slots:t}){let n=dl(),r=Jy(),i=F();return B(()=>{rp(()=>n.hash,e=>{let t=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${e}"]`);if(!t)return;let{top:r,height:a}=i.value.getBoundingClientRect(),{top:o,height:s}=t.getBoundingClientRect();o<r?t.scrollIntoView(!0):o+s>r+a&&t.scrollIntoView(!1)})}),()=>G(`aside`,{ref:i,key:`sidebar`,id:`sidebar`,class:`vp-sidebar`,"vp-sidebar":``},[t.sidebarTop?.(),t.sidebarItems?.(r.value)??G(zb,{config:r.value}),t.sidebarBottom?.()])}}),Vb=z({name:`MainLayout`,props:{containerClass:String,noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){let{frontmatter:n,theme:r,themeLocale:i}=cy(),{isMobile:a,isPC:o}=Db(),s=ly(),[c,l]=np(!1),[u,d]=np(!1),f=Jy(),p=F(),m=Kp(p),h=P(!1),g=Nb();R(g,e=>{e||(h.value=!1)});let _=W(()=>e.noNavbar||n.value.navbar===!1||i.value.navbar===!1?!1:!!(i.value.logo??i.value.repo??i.value.navbar)),v=W(()=>n.value.externalLinkIcon??r.value.externalLinkIcon??!0),y=W(()=>!e.noToc&&!n.value.home&&!!(n.value.toc??i.value.toc??!0)),b={x:0,y:0},x=e=>{b.x=e.changedTouches[0].clientX,b.y=e.changedTouches[0].clientY},S=e=>{let t=e.changedTouches[0].clientX-b.x,n=e.changedTouches[0].clientY-b.y;Math.abs(t)>Math.abs(n)*1.5&&Math.abs(t)>40&&(t>0&&b.x<=80?l(!0):l(!1))},C=0;return X(`scroll`,Yf(()=>{let e=window.scrollY;e<=58||e<C?h.value=!1:C+200<e&&!c.value&&g.value&&(h.value=!0),C=e},300,!0)),R(a,e=>{e||l(!1)}),R(c,e=>{m.value=e}),hd(()=>{l(!1)}),B(()=>{p.value=document.body}),fi(()=>{m.value=!1}),()=>{let r=t.sidebarTop?.(),i=t.sidebarItems?.(f.value),p=t.sidebarBottom?.(),m=sm(r)&&sm(i)&&sm(p),g=e.noSidebar||n.value.sidebar===!1||(n.value.home||f.value.length===0)&&m;return G(cm(`GlobalEncrypt`)?V(`GlobalEncrypt`):mm,()=>G(`div`,{class:[`theme-container`,{"hide-navbar":h.value,"no-navbar":!_.value,"sidebar-collapsed":!a.value&&!o.value&&u.value,"sidebar-open":a.value&&c.value,"no-sidebar":g,"external-link-icon":v.value,pure:s.value,"has-toc":y.value},e.containerClass??``,n.value.containerClass??``],"vp-container":``,onTouchStart:x,onTouchEnd:S},[_.value?G(Pb,{onToggleSidebar:()=>l()},t):null,G(Zo,{name:`fade-in`},()=>c.value?G(`div`,{class:`vp-sidebar-mask`,onClick:()=>l(!1)}):null),G(Zo,{name:`fade-in`},()=>a.value?null:G(`div`,{class:`toggle-sidebar-wrapper`,onClick:()=>d()},G(`span`,{class:[`arrow`,u.value?`end`:`start`]}))),g?null:G(Bb,null,t),t.default(),G(Yy)]))}}}),Hb=()=>{let{frontmatter:e,themeLocale:t}=cy();return{changelog:W(()=>e.value.changelog??((t.value.changelog??!1)&&!e.value.home)),contributors:W(()=>{let{contributors:n,home:r}=e.value;return Nd(n)?r?!1:t.value.contributors??!0:n??(r?!1:t.value.contributors??!0)}),lastUpdated:W(()=>e.value.lastUpdated??t.value.lastUpdated??!0)}},Ub=z({name:`MarkdownContent`,props:{custom:Boolean},slots:Object,setup(e,{slots:t}){let n=oy(),{changelog:r,contributors:i}=Hb(),a=P(),o=jp(a,{delayEnter:Md(n.value.focus)?n.value.focus:1500,delayLeave:0}),s=W(()=>!!(n.value.focus??n.value.pure)&&o.value);return B(()=>{let e=document.documentElement;rp(s,t=>{e.classList.toggle(`is-focusing`,t)})}),()=>G(`div`,{class:{custom:e.custom},"vp-content":``},[t.contentBefore?.(),G(Dd,{ref:a,id:`markdown-content`}),t.contentAfter?.(),r.value&&cm(`GitChangelog`)?G(V(`GitChangelog`)):null,i.value===`content`&&cm(`GitContributors`)?G(V(`GitContributors`)):null])}}),Wb=({target:e})=>{let t=document.querySelector(e.hash);if(t){let e=()=>{t.removeAttribute(`tabindex`),t.removeEventListener(`blur`,e)};t.setAttribute(`tabindex`,`-1`),t.addEventListener(`blur`,e),t.focus(),window.scrollTo(0,0)}},Gb=z({name:`SkipLink`,props:{content:{type:String,default:`main-content`}},setup(e){let t=sy(),n=F();return hd(()=>{n.value?.focus()}),()=>[G(`span`,{ref:n,tabindex:`-1`}),G(`a`,{href:`#${e.content}`,class:`vp-skip-link sr-only`,onClick:Wb},t.value.routerLocales.skipToContent)]}}),Kb=()=>G(Z,{name:`slide-down`},()=>G(`path`,{d:`M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z`}));Kb.displayName=`SlideDownIcon`;var qb=(e,{emit:t})=>G(`button`,{type:`button`,class:`vp-hero-slide-down-button`,onClick:()=>{t(`click`)}},[G(Kb),G(Kb)]);qb.displayName=`HeroSlideDownButton`;var Jb=e=>{e.style.transform=`translateY(0)`,e.style.opacity=`1`},Q=z({name:`DropTransition`,props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},group:Boolean,appear:Boolean},slots:Object,setup(e,{slots:t}){let n=t=>{t.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,t.style.transform=`translateY(-20px)`,t.style.opacity=`0`};return()=>{let r={name:`drop`,appear:e.appear,onAppear:n,onAfterAppear:Jb,onEnter:n,onAfterEnter:Jb,onBeforeLeave:n};return e.group?G(Js,r,t.default):G(Zo,r,t.default)}}}),Yb=null,Xb=null,Zb={wait:()=>Yb,pending:()=>{Yb=new Promise(e=>{Xb=e})},resolve:()=>{Xb?.(),Yb=null,Xb=null}},Qb=z({name:`MainFadeInUpTransition`,slots:Object,setup(e,{slots:t}){let n=ly();return()=>n.value?G(mm,t.default):G(Zo,{name:`fade-in-up`,mode:`out-in`,onBeforeEnter:Zb.resolve,onBeforeLeave:Zb.pending},t.default)}}),$b=z({name:`PageTitle`,setup(){let{frontmatter:e,page:t,themeLocale:n}=cy(),{info:r,items:i}=hy();return()=>G(`div`,{class:`vp-page-title`},[G(`h1`,[n.value.titleIcon===!1?null:G(V(`VPIcon`),{icon:e.value.icon}),t.value.title]),G(Ny,{info:r.value,items:i.value}),G(`hr`)])}}),ex=(e=!0)=>{let{lang:t,page:n}=ud(),r=xm();return W(()=>{if(!I(e))return null;let i=n.value.git?.updatedTime??n.value.git?.changelog?.[0].time;if(!i)return null;let a=new Date(i);return{date:a,text:new Intl.DateTimeFormat(t.value,{dateStyle:`short`,timeStyle:`short`}).format(i),iso:a.toISOString(),locale:r.value.latestUpdateAt}})},tx=(e,t)=>{let n=e.replace(t,`/`).split(`/`),r=[],i=Gc(t);return n.forEach((e,t)=>{t===n.length-1?e!==``&&(i+=e,r.push({link:i,name:e})):(i+=`${e}/`,r.push({link:i,name:e||`Home`}))}),r},nx=z({name:`BreadCrumb`,setup(){let{frontmatter:e,page:t,routeLocale:n,routePath:r,themeLocale:i}=cy(),a=F([]),o=W(()=>(e.value.breadcrumb??i.value.breadcrumb??!0)&&a.value.length>1),s=W(()=>e.value.breadcrumbIcon??i.value.breadcrumbIcon??!0),c=()=>{let e=tx(t.value.path,n.value).map(({link:e,name:t})=>{let{path:n,meta:r,notFound:i}=bd(e);return i||r.breadcrumbExclude?null:{title:r.shortTitle||r.title||t,icon:r.icon,path:n}}).filter(e=>e!=null);e.length>1&&(a.value=e)};return B(()=>{rp(r,c)}),()=>G(`nav`,{class:[`vp-breadcrumb`,{disable:!o.value}]},o.value?G(`ol`,{vocab:`https://schema.org/`,typeof:`BreadcrumbList`},a.value.map((e,t)=>G(`li`,{class:{"is-active":a.value.length-1===t},property:`itemListElement`,typeof:`ListItem`},[G(Cd,{to:e.path,property:`item`,typeof:`WebPage`},()=>[s.value?G(V(`VPIcon`),{icon:e.icon}):null,G(`span`,{property:`name`},e.title||`Unknown`)]),G(`meta`,{property:`position`,content:t+1})]))):[])}}),rx=(e,t)=>e===!1?e:Jc(e)?{...e,link:By(e.link,!0,t).link}:K(e)?By(e,!0,t):null,ix=(e,t,n)=>{let r=e.findIndex(e=>e.link===t);if(r!==-1){if(!e[r+n])return null;let t=e[r+n];return t.link?t:`prefix`in t&&!bd(t.prefix).notFound?{...t,link:t.prefix}:null}for(let r of e)if(`children`in r){let e=ix(r.children,t,n);if(e)return e}let i=e.findIndex(e=>`prefix`in e&&e.prefix===t);if(i!==-1){if(!e[i+n])return null;let t=e[i+n];return t.link?t:`prefix`in t&&!bd(t.prefix).notFound?{...t,link:t.prefix}:null}return null},ax=()=>{let{frontmatter:e,routePath:t,themeLocale:n}=cy(),r=Jy();return{prevLink:W(()=>{let i=rx(e.value.prev,t.value);return i===!1?null:i??(n.value.prevLink===!1?null:ix(r.value,t.value,-1))}),nextLink:W(()=>{let i=rx(e.value.next,t.value);return i===!1?null:i??(n.value.nextLink===!1?null:ix(r.value,t.value,1))})}},ox=z({name:`PageNav`,setup(){let e=gy(),t=vy(),{prevLink:n,nextLink:r}=ax();return X(`keydown`,e=>{if(e.altKey)switch(e.key){case`ArrowRight`:r.value&&(t(r.value.link),e.preventDefault());break;case`ArrowLeft`:n.value&&(t(n.value.link),e.preventDefault());break;default:}}),()=>n.value||r.value?G(`nav`,{class:`vp-page-nav`},[n.value?G(hb,{class:`prev`,config:n.value},()=>[G(`div`,{class:`hint`},[G(`span`,{class:`arrow start`}),e.value.prev]),G(`div`,{class:`link`},[G(V(`VPIcon`),{icon:n.value?.icon}),n.value?.text])]):null,r.value?G(hb,{class:`next`,config:r.value},()=>[G(`div`,{class:`hint`},[e.value.next,G(`span`,{class:`arrow end`})]),G(`div`,{class:`link`},[r.value?.text,G(V(`VPIcon`),{icon:r.value?.icon})])]):null]):null}}),sx=z({name:`PrintButton`,setup(){let e=gy(),t=oy();return()=>t.value.print===!1?null:G(`button`,{type:`button`,class:`print-button`,title:e.value.print,onClick:()=>{globalThis.print()}},G(wy))}}),cx={selector:[...Array.from({length:6}).map((e,t)=>`#markdown-content > h${t+1}`),`[vp-content] > h2`].join(`, `),levels:`deep`,ignore:[`.vp-badge`,`.vp-icon`]},lx=z({name:`TOC`,props:{items:Array},slots:Object,setup(e,{slots:t}){let{frontmatter:n,themeLocale:r}=cy(),i=W(()=>{let e=n.value.toc??r.value.toc;return Jc(e)?{...cx,...e}:e??!0?cx:void 0}),a=vm(i),o=dl(),s=gy(),[c,l]=np(),u=F(),d=P(`-2rem`),f=e=>{u.value?.scrollTo({top:e,behavior:`smooth`})},p=()=>{if(u.value){let e=document.querySelector(`.vp-toc-item.active`);e?d.value=`${e.getBoundingClientRect().top-u.value.getBoundingClientRect().top+u.value.scrollTop}px`:d.value=`-2rem`}else d.value=`-2rem`};B(()=>{rp(()=>o.hash,e=>{if(u.value){let t=document.querySelector(`#toc a.vp-toc-link[href$="${e}"]`);if(!t)return;let{top:n,height:r}=u.value.getBoundingClientRect(),{top:i,height:a}=t.getBoundingClientRect();i<n?f(u.value.scrollTop+i-n):i+a>n+r&&f(u.value.scrollTop+i+a-n-r)}},{flush:`post`}),rp(()=>o.fullPath,p,{flush:`post`})});let m=({title:e,level:t,slug:n})=>G(Cd,{to:`#${n}`,class:[`vp-toc-link`,`level${t}`],onClick:()=>{l()}},()=>e),h=e=>e.length>0?G(`ul`,{class:`vp-toc-list`},e.map(e=>{let t=h(e.children);return[G(`li`,{class:[`vp-toc-item`,{active:o.hash===`#${e.slug}`}]},m(e)),t?G(`li`,t):null]})):null;return()=>i.value||e.items?.length?G(Td,()=>{let n=e.items?.length?h(e.items):h(a.value),r=t.toc?.(a.value)??(n?[G(`div`,{class:`vp-toc-header`,onClick:()=>{l()}},[s.value.toc,G(sx),G(`div`,{class:[`arrow`,c.value?`down`:`end`]})]),G(`div`,{class:[`vp-toc-wrapper`,c.value?`open`:``],ref:u},[n,G(`div`,{class:`vp-toc-marker`,style:{top:d.value}})])]:null),i=t.tocBefore?.(),o=t.tocAfter?.();return sm(r)&&sm(i)&&sm(o)?null:G(`div`,{class:`vp-toc-placeholder`},[G(`aside`,{id:`toc`,"vp-toc":``},[i,r,o])])}):null}}),ux=()=>G(Z,{name:`edit`},()=>[G(`path`,{d:`M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z`}),G(`path`,{d:`M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z`})]);ux.displayName=`EditIcon`;var dx={GitHub:`:repo/edit/:branch/:path`,GitLab:`:repo/-/edit/:branch/:path`,Gitee:`:repo/edit/:branch/:path`,Bitbucket:`:repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default`},fx=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:r,editLinkPattern:i})=>{if(!r)return null;let a=Gv(e),o=``;return i?o=i:a!=null&&(o=dx[a]),o?o.replace(/:repo/u,jc(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,Kc(`${Gc(n)}/${r}`)):null},px=()=>{let{frontmatter:e,page:t,themeLocale:n}=cy(),r=gy();return W(()=>{let{repo:i,docsRepo:a=i,docsBranch:o=`main`,docsDir:s=``,editLink:c,editLinkPattern:l=``}=n.value;if(!(e.value.editLink??c??!0)||!a)return null;let u=fx({docsRepo:a,docsBranch:o,docsDir:s,editLinkPattern:l,filePathRelative:t.value.filePathRelative});return u?{text:r.value.editLink,link:u}:null})},mx=z({name:`PageMeta`,setup(){let e=Hb(),t=Cm(),n=px(),r=ex(e.lastUpdated),i=gy();return()=>G(`footer`,{class:`vp-page-meta`},[n.value?G(`div`,{class:`vp-meta-item edit-link`},G(hb,{class:`vp-meta-label`,config:n.value},{before:()=>G(ux)})):null,G(`div`,{class:`vp-meta-item git-info`},[(!e.changelog.value||!cm(`GitChangelog`))&&r.value?G(`div`,{class:`update-time`},[G(`span`,{class:`vp-meta-label`},`${r.value.locale}: `),G(`time`,{class:`vp-meta-info`,datetime:r.value.iso,"data-allow-mismatch":``},r.value.text)]):null,e.contributors.value&&e.contributors.value!==`content`&&t.value.length>0?G(`div`,{class:`contributors`},[G(`span`,{class:`vp-meta-label`},`${i.value.contributors}: `),t.value.map(({email:e,name:t},n,r)=>[G(`span`,{class:`vp-meta-info`,title:`email: ${e}`},t),n===r.length-1?``:`,`])]):null])])}}),hx=z({name:`PageContent`,slots:Object,setup(e,{slots:t}){let{frontmatter:n}=cy(),{isDarkMode:r}=Iy();return()=>G(`main`,{id:`main-content`,class:`vp-page`},G(cm(`LocalEncrypt`)?V(`LocalEncrypt`):mm,()=>[t.pageTop?.(),n.value.cover?G(`div`,{class:`page-cover`},G(`img`,{src:Y(n.value.cover),alt:``,"no-view":``})):null,G(nx),G($b),G(lx,null,t),t.content?.()??G(Ub,null,t),G(mx),G(ox),cm(`CommentService`)?G(V(`CommentService`),{darkmode:r.value}):null,t.pageBottom?.()]))}}),gx=(e,{slots:t})=>{let{bgImage:n,bgImageDark:r,bgImageStyle:i,color:a,description:o,image:s,imageDark:c,header:l,features:u}=e;return G(`div`,{class:`vp-feature-wrapper`},[n?G(`div`,{class:[`vp-feature-bg`,{light:r}],style:[{"background-image":`url(${n})`},i]}):null,r?G(`div`,{class:`vp-feature-bg dark`,style:[{"background-image":`url(${r})`},i]}):null,G(`div`,{class:`vp-feature`,style:a?{color:a}:{}},[t.image?.(e)??[s?G(`img`,{class:[`vp-feature-image`,{light:c}],src:Y(s),alt:``}):null,c?G(`img`,{class:`vp-feature-image dark`,src:Y(c),alt:``}):null],t.info?.(e)??[l?G(`h2`,{class:`vp-feature-header`},l):null,o?G(`div`,{class:`vp-feature-description`,innerHTML:o}):null],u.length>0?G(`div`,{class:`vp-features`},u.map(({icon:e,title:t,details:n,link:r})=>{let i=[G(`h3`,{class:`vp-feature-title`},[G(V(`VPIcon`),{icon:e}),G(`span`,{innerHTML:t})]),G(`div`,{class:`vp-feature-details`,innerHTML:n})];return r?Ac(r)?G(`a`,{class:`vp-feature-item link`,href:r,"aria-label":t,target:`_blank`},i):G(Cd,{class:`vp-feature-item link`,to:r,"aria-label":t},()=>i):G(`div`,{class:`vp-feature-item`},i)})):null])])};gx.displayName=`FeaturePanel`;var _x=z({name:`HeroInfo`,slots:Object,setup(e,{slots:t}){let{frontmatter:n,siteLocale:r}=cy(),i=W(()=>{let{heroText:e,tagline:t,heroStyle:i,heroFullScreen:a=!1}=n.value;return{text:e??(r.value.title||`Hello`),tagline:t??r.value.description,style:i??null,isFullScreen:a}}),a=W(()=>{let{heroImage:e,heroImageDark:t,heroAlt:r,heroImageStyle:i}=n.value;return{image:e?Y(e):null,imageDark:t?Y(t):null,style:i??null,alt:r??``}}),o=W(()=>{let{bgImage:e,bgImageDark:t,bgImageStyle:r}=n.value;return{image:K(e)?Y(e):null,imageDark:K(t)?Y(t):null,style:r??null}}),s=W(()=>n.value.actions??[]);return()=>G(`header`,{class:[`vp-hero-info-wrapper`,{"hero-fullscreen":i.value.isFullScreen}],style:i.value.style},[t.heroBg?.(o.value)??[o.value.image?G(`div`,{class:[`vp-hero-mask`,{light:o.value.imageDark}],style:[{"background-image":`url(${o.value.image})`},o.value.style]}):null,o.value.imageDark?G(`div`,{class:`vp-hero-mask dark`,style:[{"background-image":`url(${o.value.imageDark})`},o.value.style]}):null],G(`div`,{class:`vp-hero-info`},[t.heroLogo?.(a.value)??G(Q,{appear:!0,group:!0},()=>{let{image:e,imageDark:t,style:n,alt:r}=a.value;return[e?G(`img`,{key:`light`,class:[`vp-hero-image`,{light:t}],style:n,src:e,alt:r}):null,t?G(`img`,{key:`dark`,class:`vp-hero-image dark`,style:n,src:t,alt:r}):null]}),t.heroInfo?.(i.value)??G(`div`,{class:`vp-hero-infos`},[i.value.text?G(Q,{appear:!0,delay:.04},()=>G(`h1`,{id:`main-title`,class:`vp-hero-title`},i.value.text)):null,i.value.tagline?G(Q,{appear:!0,delay:.08},()=>G(`div`,{id:`main-description`,innerHTML:i.value.tagline})):null,s.value.length>0?G(Q,{appear:!0,delay:.12},()=>G(`p`,{class:`vp-hero-actions`},s.value.map(e=>G(hb,{class:[`vp-hero-action`,e.type??`default`,`no-external-link-icon`],config:e})))):null])]),i.value.isFullScreen?G(qb,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector(`[vp-navbar]`)?.clientHeight??0),behavior:`smooth`})}}):null])}}),vx=(e,{slots:t})=>{let{bgImage:n,bgImageDark:r,bgImageStyle:i,color:a,description:o,image:s,imageDark:c,header:l,highlights:u=[],type:d=`un-order`}=e;return G(`div`,{class:`vp-highlight-wrapper`,style:a?{color:a}:{}},[n?G(`div`,{class:[`vp-highlight-bg`,{light:r}],style:[{"background-image":`url(${n})`},i]}):null,r?G(`div`,{class:`vp-highlight-bg dark`,style:[{"background-image":`url(${r})`},i]}):null,G(`div`,{class:`vp-highlight`},[t.image?.(e)??[s?G(`img`,{class:[`vp-highlight-image`,{light:c}],src:Y(s),alt:``}):null,c?G(`img`,{class:`vp-highlight-image dark`,src:Y(c),alt:``}):null],t.info?.(e)??[G(`div`,{class:`vp-highlight-info-wrapper`},G(`div`,{class:`vp-highlight-info`},[l?G(`h2`,{class:`vp-highlight-header`,innerHTML:l}):null,o?G(`div`,{class:`vp-highlight-description`,innerHTML:o}):null,t.highlights?.(u)??G(d===`order`?`ol`:d===`no-order`?`dl`:`ul`,{class:`vp-highlights`},u.map(({icon:e,title:t,details:n,link:r})=>{let i=[G(d===`no-order`?`dt`:`h3`,{class:`vp-highlight-title`},[e?G(V(`VPIcon`),{class:`vp-highlight-icon`,icon:e}):null,G(`span`,{innerHTML:t})]),n?G(d===`no-order`?`dd`:`div`,{class:`vp-highlight-details`,innerHTML:n}):null];return G(d===`no-order`?`div`:`li`,{class:[`vp-highlight-item-wrapper`,{link:r}]},r?Ac(r)?G(`a`,{class:`vp-highlight-item link`,href:r,"aria-label":t,target:`_blank`},i):G(Cd,{class:`vp-highlight-item link`,to:r,"aria-label":t},()=>i):G(`div`,{class:`vp-highlight-item`},i))}))]))]])])};vx.displayName=`HighlightSection`;var yx=z({name:`HomePage`,slots:Object,setup(e,{slots:t}){let n=dd();return()=>{let{features:e,highlights:r}=n.value;return G(`main`,{id:`main-content`,class:`vp-page vp-project-home`,"aria-labelledby":n.value.heroText===``?``:`main-title`},[t.heroBefore?.(),G(_x,null,t),t.heroAfter?.(),Nd(r)?r.map(e=>`features`in e?G(gx,e):G(vx,e)):Nd(e)?G(Q,{appear:!0,delay:.24},()=>G(gx,{features:e})):null,t.content?.()??G(Q,{appear:!0,delay:.32},()=>G(Ub,null,t))])}}}),bx=z({name:`PortfolioHero`,slots:Object,setup(e,{slots:t}){let n=uy(),r=dd(),i=P(0),a=W(()=>r.value.titles?.[i.value]??``),o=P(``),s=W(()=>{let{name:e,avatar:t,avatarDark:i,avatarAlt:a,avatarStyle:o}=r.value;return{name:e??n.value.name,avatar:t?Y(t):null,avatarDark:i?Y(i):null,alt:(a||e)??``,style:o??null}}),c=W(()=>{let{bgImage:e,bgImageDark:t,bgImageStyle:n}=r.value;return{image:K(e)?Y(e):null,imageDark:K(t)?Y(t):null,style:n??null}}),l=W(()=>{let{welcome:e,name:t,titles:i=[],medias:a}=r.value;return{name:t??n.value.name,welcome:e??`👋 Hi There, I'm`,title:o.value,titles:i,medias:a??null}}),u=()=>{o.value=``;let e=0,t=!1,n=async()=>{if(!t)if(o.value+=a.value[e],e+=1,await Un(),e<a.value.length)setTimeout(()=>{n()},150);else{let{length:e}=l.value.titles;setTimeout(()=>{i.value=e<=1||i.value===l.value.titles.length-1?0:i.value+1},1e3)}};return n(),()=>{t=!0}},d;return B(()=>{rp(a,()=>{d?.(),d=u()})}),()=>G(`section`,{id:`portfolio`,class:[`vp-portfolio`,{bg:c.value.image}]},[t.portfolioBg?.(c.value)??[c.value.image?G(`div`,{class:[`vp-portfolio-mask`,{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.style]}):null,c.value.imageDark?G(`div`,{class:`vp-portfolio-mask dark`,style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.style]}):null],t.portfolioAvatar?.(s.value)??G(`div`,{class:`vp-portfolio-avatar`},[G(Q,{delay:.04},()=>{let{avatar:e,avatarDark:t,name:n,alt:r,style:i}=s.value;return[e?G(`img`,{key:`light`,class:{light:t},src:e,title:n,alt:r,style:i}):null,t?G(`img`,{key:`dark`,class:`dark`,src:t,title:o,alt:r,style:i}):null]})]),G(`div`,{class:`vp-portfolio-container`},t.portfolioInfo?.(l.value)??G(`div`,{class:`vp-portfolio-info`},[G(Q,{appear:!0,delay:.08},()=>G(`h6`,{class:`vp-portfolio-welcome`},l.value.welcome)),G(Q,{appear:!0,delay:.12},()=>G(`h1`,{class:`vp-portfolio-name`,id:`main-title`},l.value.name)),G(Q,{appear:!0,delay:.16},()=>G(`h2`,{class:`vp-portfolio-title`},o.value)),G(Q,{appear:!0,delay:.2},()=>l.value.medias?G(`div`,{class:`vp-portfolio-medias`},l.value.medias.map(({name:e,url:t,icon:n})=>G(`a`,{class:`vp-portfolio-media`,href:t,rel:`noopener noreferrer`,target:`_blank`,title:e},G(V(`VPIcon`),{icon:n,sizing:`both`})))):cm(`SocialMedias`)?G(V(`SocialMedias`)):null)]))])}}),xx=z({name:`PortfolioHome`,slots:Object,setup(e,{slots:t}){let n=dd();return()=>{let e=n.value.content??`portfolio`;return G(`main`,{id:`main-content`,class:`vp-page vp-portfolio-home`,"aria-labelledby":`main-title`},[G(bx,null,t),e===`none`?null:t.content?.()??G(`div`,G(Q,{appear:!0,delay:.24},()=>G(Ub,{class:{"vp-portfolio-content":e===`portfolio`}},t)))])}}}),Sx=z({name:`Layout`,slots:Object,setup(e,{slots:t}){let{frontmatter:n,page:r}=cy();return()=>[G(Gb),G(Vb,null,{...t,default:t.default??(()=>n.value.portfolio?G(xx,null,t):n.value.home?G(yx,null,t):G(Qb,()=>G(hx,{key:r.value.path},t))),navScreenBottom:t.navScreenBottom??(cm(`BloggerInfo`)?()=>G(V(`BloggerInfo`)):null)})]}}),Cx=z({name:`NotFound`,slots:Object,setup(e,{slots:t}){let{routeLocale:n,theme:r,themeLocale:i}=cy(),a=ul(),o=P(!1),s=W(()=>r.value.locales[o.value?n.value:`/`].routerLocales),c=()=>{if(!o.value)return s.value.notFoundMsg[0];let e=s.value.notFoundMsg;return e[Math.floor(Math.random()*e.length)]};return B(()=>{o.value=!0}),()=>[G(Gb),G(Vb,{noSidebar:!0},{...t,default:()=>G(`main`,{id:`main-content`,class:`vp-page not-found`},t.default?.()??[G(`div`,{class:`not-found-hint`},[G(`p`,{class:`error-code`},`404`),G(`h1`,{class:`error-title`},s.value.notFoundTitle),G(`p`,{class:`error-hint`},c())]),G(`div`,{class:`actions`},[G(`button`,{type:`button`,class:`action-button`,onClick:()=>{globalThis.history.go(-1)}},s.value.back),G(`button`,{type:`button`,class:`action-button`,onClick:()=>{a.push(i.value.home??n.value)}},s.value.home)])])})]}}),wx=()=>G(Z,{name:`lock`},()=>G(`path`,{d:`M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z`}));wx.displayName=`LockIcon`;var Tx={},Ex=JSON.parse(`{"category":{"/":{"path":"/category/","map":{"Android":{"path":"/category/android/","indexes":[0]},"收集":{"path":"/category/%E6%94%B6%E9%9B%86/","indexes":[1]},"Windows":{"path":"/category/windows/","indexes":[2,3]}}}},"tag":{"/":{"path":"/tag/","map":{"刷机":{"path":"/tag/%E5%88%B7%E6%9C%BA/","indexes":[0]},"arch":{"path":"/tag/arch/","indexes":[4,5]},"KDE":{"path":"/tag/kde/","indexes":[5]},"路由器":{"path":"/tag/%E8%B7%AF%E7%94%B1%E5%99%A8/","indexes":[6]},"ImmortalWrt":{"path":"/tag/immortalwrt/","indexes":[6]},"NAS":{"path":"/tag/nas/","indexes":[6]},"代理":{"path":"/tag/%E4%BB%A3%E7%90%86/","indexes":[1]},"Ubuntu":{"path":"/tag/ubuntu/","indexes":[7]},"Linux":{"path":"/tag/linux/","indexes":[7,8]},"Desktop":{"path":"/tag/desktop/","indexes":[7]},"激活":{"path":"/tag/%E6%BF%80%E6%B4%BB/","indexes":[3,9]},"汇编语法":{"path":"/tag/%E6%B1%87%E7%BC%96%E8%AF%AD%E6%B3%95/","indexes":[10]},"AT&T语法":{"path":"/tag/at_t%E8%AF%AD%E6%B3%95/","indexes":[10]},"AArch64语法":{"path":"/tag/aarch64%E8%AF%AD%E6%B3%95/","indexes":[10]},"指令格式":{"path":"/tag/%E6%8C%87%E4%BB%A4%E6%A0%BC%E5%BC%8F/","indexes":[10]},"入口符号":{"path":"/tag/%E5%85%A5%E5%8F%A3%E7%AC%A6%E5%8F%B7/","indexes":[10]},"工具链":{"path":"/tag/%E5%B7%A5%E5%85%B7%E9%93%BE/","indexes":[10]},"内存布局":{"path":"/tag/%E5%86%85%E5%AD%98%E5%B8%83%E5%B1%80/","indexes":[11]},"段":{"path":"/tag/%E6%AE%B5/","indexes":[11]},"section":{"path":"/tag/section/","indexes":[11]},"segment":{"path":"/tag/segment/","indexes":[11]},"ELF":{"path":"/tag/elf/","indexes":[12,11,13]},"Mach-O":{"path":"/tag/mach-o/","indexes":[11]},"寄存器":{"path":"/tag/%E5%AF%84%E5%AD%98%E5%99%A8/","indexes":[14]},"调用约定":{"path":"/tag/%E8%B0%83%E7%94%A8%E7%BA%A6%E5%AE%9A/","indexes":[14,15]},"RFLAGS":{"path":"/tag/rflags/","indexes":[14]},"NZCV":{"path":"/tag/nzcv/","indexes":[14]},"参数传递":{"path":"/tag/%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92/","indexes":[14]},"返回值":{"path":"/tag/%E8%BF%94%E5%9B%9E%E5%80%BC/","indexes":[14]},"系统调用":{"path":"/tag/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8/","indexes":[16,17]},"syscall":{"path":"/tag/syscall/","indexes":[16]},"svc":{"path":"/tag/svc/","indexes":[16]},"系统调用号":{"path":"/tag/%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E5%8F%B7/","indexes":[16]},"参数寄存器":{"path":"/tag/%E5%8F%82%E6%95%B0%E5%AF%84%E5%AD%98%E5%99%A8/","indexes":[16]},"ABI":{"path":"/tag/abi/","indexes":[16,15]},"寻址方式":{"path":"/tag/%E5%AF%BB%E5%9D%80%E6%96%B9%E5%BC%8F/","indexes":[18]},"内存访问":{"path":"/tag/%E5%86%85%E5%AD%98%E8%AE%BF%E9%97%AE/","indexes":[18,19]},"RIP相对寻址":{"path":"/tag/rip%E7%9B%B8%E5%AF%B9%E5%AF%BB%E5%9D%80/","indexes":[18]},"adrp":{"path":"/tag/adrp/","indexes":[18]},"重定位":{"path":"/tag/%E9%87%8D%E5%AE%9A%E4%BD%8D/","indexes":[18]},"变量":{"path":"/tag/%E5%8F%98%E9%87%8F/","indexes":[20]},"数据段":{"path":"/tag/%E6%95%B0%E6%8D%AE%E6%AE%B5/","indexes":[20]},"bss":{"path":"/tag/bss/","indexes":[20]},"load-store":{"path":"/tag/load-store/","indexes":[20]},"内存读写":{"path":"/tag/%E5%86%85%E5%AD%98%E8%AF%BB%E5%86%99/","indexes":[20]},"常量":{"path":"/tag/%E5%B8%B8%E9%87%8F/","indexes":[21]},"equ":{"path":"/tag/equ/","indexes":[21]},"立即数":{"path":"/tag/%E7%AB%8B%E5%8D%B3%E6%95%B0/","indexes":[21]},"只读数据":{"path":"/tag/%E5%8F%AA%E8%AF%BB%E6%95%B0%E6%8D%AE/","indexes":[21]},"汇编期":{"path":"/tag/%E6%B1%87%E7%BC%96%E6%9C%9F/","indexes":[21,22]},"算术指令":{"path":"/tag/%E7%AE%97%E6%9C%AF%E6%8C%87%E4%BB%A4/","indexes":[23]},"整数运算":{"path":"/tag/%E6%95%B4%E6%95%B0%E8%BF%90%E7%AE%97/","indexes":[23]},"加减乘除":{"path":"/tag/%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4/","indexes":[23]},"标志位":{"path":"/tag/%E6%A0%87%E5%BF%97%E4%BD%8D/","indexes":[23,24]},"乘法":{"path":"/tag/%E4%B9%98%E6%B3%95/","indexes":[23]},"除法":{"path":"/tag/%E9%99%A4%E6%B3%95/","indexes":[23,25]},"逻辑指令":{"path":"/tag/%E9%80%BB%E8%BE%91%E6%8C%87%E4%BB%A4/","indexes":[24]},"位运算":{"path":"/tag/%E4%BD%8D%E8%BF%90%E7%AE%97/","indexes":[24]},"掩码":{"path":"/tag/%E6%8E%A9%E7%A0%81/","indexes":[24]},"移位":{"path":"/tag/%E7%A7%BB%E4%BD%8D/","indexes":[24]},"条件判断":{"path":"/tag/%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD/","indexes":[26]},"比较指令":{"path":"/tag/%E6%AF%94%E8%BE%83%E6%8C%87%E4%BB%A4/","indexes":[26]},"条件跳转":{"path":"/tag/%E6%9D%A1%E4%BB%B6%E8%B7%B3%E8%BD%AC/","indexes":[26]},"signed":{"path":"/tag/signed/","indexes":[26]},"unsigned":{"path":"/tag/unsigned/","indexes":[26]},"循环结构":{"path":"/tag/%E5%BE%AA%E7%8E%AF%E7%BB%93%E6%9E%84/","indexes":[27]},"while":{"path":"/tag/while/","indexes":[27]},"for":{"path":"/tag/for/","indexes":[27]},"break":{"path":"/tag/break/","indexes":[27]},"continue":{"path":"/tag/continue/","indexes":[27]},"控制流":{"path":"/tag/%E6%8E%A7%E5%88%B6%E6%B5%81/","indexes":[27,17]},"数字处理":{"path":"/tag/%E6%95%B0%E5%AD%97%E5%A4%84%E7%90%86/","indexes":[25]},"整数转换":{"path":"/tag/%E6%95%B4%E6%95%B0%E8%BD%AC%E6%8D%A2/","indexes":[25]},"ASCII":{"path":"/tag/ascii/","indexes":[25,28]},"进制转换":{"path":"/tag/%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2/","indexes":[25]},"字符串处理":{"path":"/tag/%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86/","indexes":[28]},"字符数组":{"path":"/tag/%E5%AD%97%E7%AC%A6%E6%95%B0%E7%BB%84/","indexes":[28]},"strlen":{"path":"/tag/strlen/","indexes":[28]},"大小写转换":{"path":"/tag/%E5%A4%A7%E5%B0%8F%E5%86%99%E8%BD%AC%E6%8D%A2/","indexes":[28]},"数组":{"path":"/tag/%E6%95%B0%E7%BB%84/","indexes":[19]},"索引寻址":{"path":"/tag/%E7%B4%A2%E5%BC%95%E5%AF%BB%E5%9D%80/","indexes":[19]},"指针遍历":{"path":"/tag/%E6%8C%87%E9%92%88%E9%81%8D%E5%8E%86/","indexes":[19]},"元素宽度":{"path":"/tag/%E5%85%83%E7%B4%A0%E5%AE%BD%E5%BA%A6/","indexes":[19]},"过程":{"path":"/tag/%E8%BF%87%E7%A8%8B/","indexes":[15]},"函数调用":{"path":"/tag/%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8/","indexes":[15,29]},"栈帧":{"path":"/tag/%E6%A0%88%E5%B8%A7/","indexes":[15]},"递归":{"path":"/tag/%E9%80%92%E5%BD%92/","indexes":[29]},"栈":{"path":"/tag/%E6%A0%88/","indexes":[30,29,31]},"返回地址":{"path":"/tag/%E8%BF%94%E5%9B%9E%E5%9C%B0%E5%9D%80/","indexes":[29]},"阶乘":{"path":"/tag/%E9%98%B6%E4%B9%98/","indexes":[29]},"宏":{"path":"/tag/%E5%AE%8F/","indexes":[22]},"GNU as":{"path":"/tag/gnu-as/","indexes":[22]},"代码生成":{"path":"/tag/%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90/","indexes":[22]},"模板":{"path":"/tag/%E6%A8%A1%E6%9D%BF/","indexes":[32,22]},"文件管理":{"path":"/tag/%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86/","indexes":[33]},"open":{"path":"/tag/open/","indexes":[33]},"read":{"path":"/tag/read/","indexes":[33]},"write":{"path":"/tag/write/","indexes":[33]},"close":{"path":"/tag/close/","indexes":[33]},"文件描述符":{"path":"/tag/%E6%96%87%E4%BB%B6%E6%8F%8F%E8%BF%B0%E7%AC%A6/","indexes":[33]},"内存管理":{"path":"/tag/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/","indexes":[30,31,17]},"堆":{"path":"/tag/%E5%A0%86/","indexes":[30,31]},"brk":{"path":"/tag/brk/","indexes":[31]},"mmap":{"path":"/tag/mmap/","indexes":[31]},"malloc":{"path":"/tag/malloc/","indexes":[31]},"汇编教程":{"path":"/tag/%E6%B1%87%E7%BC%96%E6%95%99%E7%A8%8B/","indexes":[17]},"跨架构对照":{"path":"/tag/%E8%B7%A8%E6%9E%B6%E6%9E%84%E5%AF%B9%E7%85%A7/","indexes":[17]},"底层原理":{"path":"/tag/%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86/","indexes":[17]},"nvm":{"path":"/tag/nvm/","indexes":[2]},"python":{"path":"/tag/python/","indexes":[2]},"adb":{"path":"/tag/adb/","indexes":[2]},"java":{"path":"/tag/java/","indexes":[2]},"cygwin":{"path":"/tag/cygwin/","indexes":[2]},"docker":{"path":"/tag/docker/","indexes":[2]},"etcd":{"path":"/tag/etcd/","indexes":[2]},"go":{"path":"/tag/go/","indexes":[2]},"mongodb":{"path":"/tag/mongodb/","indexes":[2]},"mysql":{"path":"/tag/mysql/","indexes":[2]},"php":{"path":"/tag/php/","indexes":[2]},"postgresql":{"path":"/tag/postgresql/","indexes":[2]},"rabbitmq":{"path":"/tag/rabbitmq/","indexes":[2]},"redis":{"path":"/tag/redis/","indexes":[2]},"ruby":{"path":"/tag/ruby/","indexes":[2]},"rust":{"path":"/tag/rust/","indexes":[2]},"wsl2":{"path":"/tag/wsl2/","indexes":[2]},"Xposed":{"path":"/tag/xposed/","indexes":[34,35,36,12,37,38,39,40,41,13,42,43,44,45,46,47,48,49,50,51,52,53,54]},"LSPosed":{"path":"/tag/lsposed/","indexes":[42,43,44,47,48,49,50,51,52,53,54]},"Android":{"path":"/tag/android/","indexes":[34,12,52]},"Java":{"path":"/tag/java/","indexes":[53]},"Hook":{"path":"/tag/hook/","indexes":[36,48]},"反检测":{"path":"/tag/%E5%8F%8D%E6%A3%80%E6%B5%8B/","indexes":[54]},"Crypto":{"path":"/tag/crypto/","indexes":[49]},"IPC":{"path":"/tag/ipc/","indexes":[50]},"AIDL":{"path":"/tag/aidl/","indexes":[50]},"Native Hook":{"path":"/tag/native-hook/","indexes":[34,35,12,37,39,44,46,47,51]},"JNI":{"path":"/tag/jni/","indexes":[55,56,57,58,34,35,36,38,39,40,44,47,51]},"Dobby":{"path":"/tag/dobby/","indexes":[46]},"指令插桩":{"path":"/tag/%E6%8C%87%E4%BB%A4%E6%8F%92%E6%A1%A9/","indexes":[46]},"RegisterNatives":{"path":"/tag/registernatives/","indexes":[47]},"动态分析":{"path":"/tag/%E5%8A%A8%E6%80%81%E5%88%86%E6%9E%90/","indexes":[44]},"堆栈追踪":{"path":"/tag/%E5%A0%86%E6%A0%88%E8%BF%BD%E8%B8%AA/","indexes":[44]},"Xposed, Kotlin, OkHttp, Network":{"path":"/tag/xposed_-kotlin_-okhttp_-network/","indexes":[59]},"Xposed, DexKit, 混淆, 反编译, 动态分析":{"path":"/tag/xposed_-dexkit_-%E6%B7%B7%E6%B7%86_-%E5%8F%8D%E7%BC%96%E8%AF%91_-%E5%8A%A8%E6%80%81%E5%88%86%E6%9E%90/","indexes":[60]},"Dex":{"path":"/tag/dex/","indexes":[45]},"逆向工程":{"path":"/tag/%E9%80%86%E5%90%91%E5%B7%A5%E7%A8%8B/","indexes":[13,45]},"文件格式":{"path":"/tag/%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F/","indexes":[13,45]},"Xposed, DexKit, Architecture, C++, Performance":{"path":"/tag/xposed_-dexkit_-architecture_-c___-performance/","indexes":[61]},"Native":{"path":"/tag/native/","indexes":[13]},"Xposed, YukiHookAPI, DexKit, 生命周期, Hook":{"path":"/tag/xposed_-yukihookapi_-dexkit_-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F_-hook/","indexes":[62]},"libxposed":{"path":"/tag/libxposed/","indexes":[42,43]},"Kotlin":{"path":"/tag/kotlin/","indexes":[57,43]},"Sekiro":{"path":"/tag/sekiro/","indexes":[42]},"RPC":{"path":"/tag/rpc/","indexes":[42]},"ART":{"path":"/tag/art/","indexes":[35,36,37,38,39,40,41]},"ArtMethod":{"path":"/tag/artmethod/","indexes":[37,39]},"Android Runtime":{"path":"/tag/android-runtime/","indexes":[40]},"OAT":{"path":"/tag/oat/","indexes":[40]},"ClassLinker":{"path":"/tag/classlinker/","indexes":[41]},"mirror":{"path":"/tag/mirror/","indexes":[41]},"ClassLoader":{"path":"/tag/classloader/","indexes":[41]},"LSPlant":{"path":"/tag/lsplant/","indexes":[35,36,37,38]},"ARM64":{"path":"/tag/arm64/","indexes":[37]},"CMake":{"path":"/tag/cmake/","indexes":[57,58,38]},"C++20":{"path":"/tag/c__20/","indexes":[38]},"JIT":{"path":"/tag/jit/","indexes":[35]},"UnHook":{"path":"/tag/unhook/","indexes":[36]},"LSPlt":{"path":"/tag/lsplt/","indexes":[12]},"PLT Hook":{"path":"/tag/plt-hook/","indexes":[12]},"Frida":{"path":"/tag/frida/","indexes":[34]},"SO 动态注入":{"path":"/tag/so-%E5%8A%A8%E6%80%81%E6%B3%A8%E5%85%A5/","indexes":[34]},"C++":{"path":"/tag/c__/","indexes":[55,30,56,57,58,63,32,64,65]},"C++教程":{"path":"/tag/c__%E6%95%99%E7%A8%8B/","indexes":[55,30,56,57,58,63,32,64,65]},"基础语法":{"path":"/tag/%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95/","indexes":[64,65]},"类型系统":{"path":"/tag/%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F/","indexes":[64,65]},"函数":{"path":"/tag/%E5%87%BD%E6%95%B0/","indexes":[64,65]},"编译构建":{"path":"/tag/%E7%BC%96%E8%AF%91%E6%9E%84%E5%BB%BA/","indexes":[64,65]},"面向对象":{"path":"/tag/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1/","indexes":[63,65]},"类":{"path":"/tag/%E7%B1%BB/","indexes":[63,65]},"构造函数":{"path":"/tag/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0/","indexes":[63]},"拷贝构造":{"path":"/tag/%E6%8B%B7%E8%B4%9D%E6%9E%84%E9%80%A0/","indexes":[63]},"移动构造":{"path":"/tag/%E7%A7%BB%E5%8A%A8%E6%9E%84%E9%80%A0/","indexes":[63]},"继承":{"path":"/tag/%E7%BB%A7%E6%89%BF/","indexes":[63,65]},"多态":{"path":"/tag/%E5%A4%9A%E6%80%81/","indexes":[63,65]},"虚函数":{"path":"/tag/%E8%99%9A%E5%87%BD%E6%95%B0/","indexes":[63]},"函数模板":{"path":"/tag/%E5%87%BD%E6%95%B0%E6%A8%A1%E6%9D%BF/","indexes":[32]},"类模板":{"path":"/tag/%E7%B1%BB%E6%A8%A1%E6%9D%BF/","indexes":[32]},"STL":{"path":"/tag/stl/","indexes":[56,32]},"容器":{"path":"/tag/%E5%AE%B9%E5%99%A8/","indexes":[32]},"泛型编程":{"path":"/tag/%E6%B3%9B%E5%9E%8B%E7%BC%96%E7%A8%8B/","indexes":[32]},"异常处理":{"path":"/tag/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86/","indexes":[55]},"try catch":{"path":"/tag/try-catch/","indexes":[55]},"throw":{"path":"/tag/throw/","indexes":[55]},"noexcept":{"path":"/tag/noexcept/","indexes":[55]},"RAII":{"path":"/tag/raii/","indexes":[55,30]},"Android NDK":{"path":"/tag/android-ndk/","indexes":[55,57,58]},"指针":{"path":"/tag/%E6%8C%87%E9%92%88/","indexes":[30]},"引用":{"path":"/tag/%E5%BC%95%E7%94%A8/","indexes":[30]},"拷贝语义":{"path":"/tag/%E6%8B%B7%E8%B4%9D%E8%AF%AD%E4%B9%89/","indexes":[30]},"移动语义":{"path":"/tag/%E7%A7%BB%E5%8A%A8%E8%AF%AD%E4%B9%89/","indexes":[30,56]},"const":{"path":"/tag/const/","indexes":[30]},"头文件":{"path":"/tag/%E5%A4%B4%E6%96%87%E4%BB%B6/","indexes":[30]},"智能指针":{"path":"/tag/%E6%99%BA%E8%83%BD%E6%8C%87%E9%92%88/","indexes":[56]},"Lambda":{"path":"/tag/lambda/","indexes":[56]},"optional":{"path":"/tag/optional/","indexes":[56]},"variant":{"path":"/tag/variant/","indexes":[56]},"function":{"path":"/tag/function/","indexes":[56]},"多线程":{"path":"/tag/%E5%A4%9A%E7%BA%BF%E7%A8%8B/","indexes":[56]},"jnigraphics":{"path":"/tag/jnigraphics/","indexes":[57]},"AAudio":{"path":"/tag/aaudio/","indexes":[57]},"OpenSL ES":{"path":"/tag/opensl-es/","indexes":[57]},"OpenGL ES":{"path":"/tag/opengl-es/","indexes":[57]},"Vulkan":{"path":"/tag/vulkan/","indexes":[57]},"Bitmap":{"path":"/tag/bitmap/","indexes":[58]},"libyuv":{"path":"/tag/libyuv/","indexes":[58]},"图像处理":{"path":"/tag/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86/","indexes":[58]},"VPS":{"path":"/tag/vps/","indexes":[8]},"Debian":{"path":"/tag/debian/","indexes":[8]},"安全":{"path":"/tag/%E5%AE%89%E5%85%A8/","indexes":[8]}}}}}`),Dx=JSON.parse(`{"0":"/collection/flash.html","1":"/popular/proxyclient.html","2":"/collection/windows/","3":"/one-click/mas.html","4":"/popular/archinstall.html","5":"/popular/archlinux.html","6":"/popular/openwrt.html","7":"/popular/ubuntudesktop.html","8":"/collection/linux/devkit/linux-server-optimization.html","9":"/one-click/intelij.html","10":"/collection/assembly-x86-arm/01-basic-syntax.html","11":"/collection/assembly-x86-arm/02-memory-segmentation.html","12":"/collection/xposed/26-lsplt-plt-hook-elf-parser.html","13":"/collection/xposed/15-elf-file-structure.html","14":"/collection/assembly-x86-arm/03-registers.html","15":"/collection/assembly-x86-arm/15-procedures.html","16":"/collection/assembly-x86-arm/04-system-calls.html","17":"/collection/assembly-x86-arm/","18":"/collection/assembly-x86-arm/05-addressing-modes.html","19":"/collection/assembly-x86-arm/14-arrays.html","20":"/collection/assembly-x86-arm/06-variables.html","21":"/collection/assembly-x86-arm/07-constants.html","22":"/collection/assembly-x86-arm/17-macros.html","23":"/collection/assembly-x86-arm/08-arithmetic-instructions.html","24":"/collection/assembly-x86-arm/09-logical-instructions.html","25":"/collection/assembly-x86-arm/12-number-processing.html","26":"/collection/assembly-x86-arm/10-conditionals.html","27":"/collection/assembly-x86-arm/11-loops.html","28":"/collection/assembly-x86-arm/13-string-processing.html","29":"/collection/assembly-x86-arm/16-recursion.html","30":"/popular/cpp/05-memory-raii.html","31":"/collection/assembly-x86-arm/19-memory-management.html","32":"/popular/cpp/03-templates.html","33":"/collection/assembly-x86-arm/18-file-management.html","34":"/collection/xposed/27-so-dynamic-injection-frida-jni.html","35":"/collection/xposed/24-lsplant-init-native-runtime-jit.html","36":"/collection/xposed/25-lsplant-hook-unhook-state.html","37":"/collection/xposed/22-lsplant-method-entry-bridge.html","38":"/collection/xposed/23-lsplant-init-config-jni-source-build.html","39":"/collection/xposed/19-artmethod-entrypoint-hook.html","40":"/collection/xposed/20-art-vm-create-flow.html","41":"/collection/xposed/21-class-loading-linking-initialization.html","42":"/collection/xposed/18-sekiro-rpc-sign-hook.html","43":"/collection/xposed/17-libxposed-module-lifecycle.html","44":"/collection/xposed/10-jni-args-analysis.html","45":"/collection/xposed/13-dex-file-structure.html","46":"/collection/xposed/08-dobby-hook-techniques.html","47":"/collection/xposed/09-register-natives-hook.html","48":"/collection/xposed/03-hook-basic.html","49":"/collection/xposed/05-crypto-hook.html","50":"/collection/xposed/06-data-transfer.html","51":"/collection/xposed/07-native-hook.html","52":"/collection/xposed/01-env-set.html","53":"/collection/xposed/02-xposed-java-methods.html","54":"/collection/xposed/04-anti-detect.html","55":"/popular/cpp/04-exceptions-android-ndk.html","56":"/popular/cpp/06-modern-stdlib-concurrency.html","57":"/popular/cpp/07-android-ndk-jni-kotlin-cpp.html","58":"/popular/cpp/08-android-ndk-bitmap-libyuv-image-processing.html","59":"/collection/xposed/11-okhttp-intercept-kotlin.html","60":"/collection/xposed/12-dexkit-obfuscation-search.html","61":"/collection/xposed/14-dexkit-architecture-deep-dive.html","62":"/collection/xposed/16-app-lifecycle-hook.html","63":"/popular/cpp/02-object-oriented.html","64":"/popular/cpp/01-basic-syntax.html","65":"/popular/cpp/","66":"/intro.html","67":"/collection/","68":"/popular/","69":"/one-click/","70":"/collection/linux/","71":"/collection/xposed/","72":"/popular/website/","73":"/popular/website/communities.html","74":"/popular/website/design-colors.html","75":"/popular/website/github-tools.html","76":"/popular/website/icon-fonts.html","77":"/popular/website/image-tools.html","78":"/popular/website/network-security.html","79":"/popular/website/online-tools.html","80":"/popular/website/others.html","81":"/popular/website/resource-downloads.html","82":"/collection/linux/devkit/","83":"/collection/linux/devkit/java.html","84":"/collection/linux/devkit/mysql.html","85":"/collection/linux/devkit/nginx.html","86":"/collection/linux/devkit/python.html","87":"/collection/linux/devkit/web.html","88":"/collection/windows/devkit/","89":"/collection/windows/devkit/adb.html","90":"/collection/windows/devkit/cygwin.html","91":"/collection/windows/devkit/docker-desktop-wsl.html","92":"/collection/windows/devkit/docker.html","93":"/collection/windows/devkit/etcd.html","94":"/collection/windows/devkit/go.html","95":"/collection/windows/devkit/java.html","96":"/collection/windows/devkit/mongodb.html","97":"/collection/windows/devkit/mysql.html","98":"/collection/windows/devkit/nvm.html","99":"/collection/windows/devkit/php.html","100":"/collection/windows/devkit/postgresql.html","101":"/collection/windows/devkit/python.html","102":"/collection/windows/devkit/rabbitmq.html","103":"/collection/windows/devkit/redis.html","104":"/collection/windows/devkit/ruby.html","105":"/collection/windows/devkit/rust.html","106":"/collection/windows/devkit/wsl2.html","107":"/popular/website/bookmarks-academic/01-item-364491f0.html","108":"/popular/website/bookmarks-academic/02-item-1d7d950b.html","109":"/popular/website/bookmarks-academic/03-item-4dd59878.html","110":"/popular/website/bookmarks-academic/04-ai-14f2c0d2.html","111":"/popular/website/bookmarks-academic/05-item-1ebe53a0.html","112":"/popular/website/bookmarks-academic/06-item-7a22fd74.html","113":"/popular/website/bookmarks-academic/07-item-8998c0f7.html","114":"/popular/website/bookmarks-academic/08-item-0ffb08cd.html","115":"/popular/website/bookmarks-academic/09-item-7718a4c2.html","116":"/popular/website/bookmarks-academic/10-item-f3ae9f2b.html","117":"/popular/website/bookmarks-academic/11-item-6e80f09b.html","118":"/popular/website/bookmarks-academic/12-item-287eabba.html","119":"/popular/website/bookmarks-academic/13-item-76b63278.html","120":"/popular/website/bookmarks-academic/14-item-4baafd48.html","121":"/popular/website/bookmarks-academic/15-item-ac65355d.html","122":"/popular/website/bookmarks-academic/16-item-58423fa5.html","123":"/popular/website/bookmarks-academic/","124":"/popular/website/bookmarks-ai-services/01-item-bookmarks-import.html","125":"/popular/website/bookmarks-ai-services/","126":"/popular/website/bookmarks-cloud-magnet/01-item-1ea281e3.html","127":"/popular/website/bookmarks-cloud-magnet/02-item-3a144eb6.html","128":"/popular/website/bookmarks-cloud-magnet/03-item-9d72744c.html","129":"/popular/website/bookmarks-cloud-magnet/04-alist-762fba5d.html","130":"/popular/website/bookmarks-cloud-magnet/05-item-309805ae.html","131":"/popular/website/bookmarks-cloud-magnet/06-item-bookmarks-import.html","132":"/popular/website/bookmarks-cloud-magnet/","133":"/popular/website/bookmarks-design/01-item-fcf6995a.html","134":"/popular/website/bookmarks-design/02-item-6c8e5ba7.html","135":"/popular/website/bookmarks-design/03-item-33d30980.html","136":"/popular/website/bookmarks-design/04-item-d42f4380.html","137":"/popular/website/bookmarks-design/05-item-09f36e2c.html","138":"/popular/website/bookmarks-design/06-item-19a274e7.html","139":"/popular/website/bookmarks-design/07-color-aa8b0ad9.html","140":"/popular/website/bookmarks-design/08-item-0fb267ee.html","141":"/popular/website/bookmarks-design/09-item-eb36d623.html","142":"/popular/website/bookmarks-design/10-item-065a2554.html","143":"/popular/website/bookmarks-design/11-item-22881298.html","144":"/popular/website/bookmarks-design/12-font-ac86e71a.html","145":"/popular/website/bookmarks-design/13-c4d-51ac2c7d.html","146":"/popular/website/bookmarks-design/14-builder-2bd4a59b.html","147":"/popular/website/bookmarks-design/15-ui-3cfa4083.html","148":"/popular/website/bookmarks-design/16-item-d2b24b96.html","149":"/popular/website/bookmarks-design/17-ps-e6633679.html","150":"/popular/website/bookmarks-design/18-ps-c32f98a6.html","151":"/popular/website/bookmarks-design/19-ai-ce2bddec.html","152":"/popular/website/bookmarks-design/20-item-26a0089b.html","153":"/popular/website/bookmarks-design/21-logo-7ed406b9.html","154":"/popular/website/bookmarks-design/22-item-3a783e13.html","155":"/popular/website/bookmarks-design/23-item-68e4531e.html","156":"/popular/website/bookmarks-design/24-svg-ae8eb96d.html","157":"/popular/website/bookmarks-design/25-item-93cd23b2.html","158":"/popular/website/bookmarks-design/","159":"/popular/website/bookmarks-entertainment/01-item-77ae7582.html","160":"/popular/website/bookmarks-entertainment/02-item-ba08216f.html","161":"/popular/website/bookmarks-entertainment/03-item-67bc707a.html","162":"/popular/website/bookmarks-entertainment/04-item-fe148076.html","163":"/popular/website/bookmarks-entertainment/05-item-46630fb2.html","164":"/popular/website/bookmarks-entertainment/06-item-72191b3a.html","165":"/popular/website/bookmarks-entertainment/07-item-c6e7d643.html","166":"/popular/website/bookmarks-entertainment/08-item-e8663767.html","167":"/popular/website/bookmarks-entertainment/","168":"/popular/website/bookmarks-explore/01-item-45a4f144.html","169":"/popular/website/bookmarks-explore/02-item-7535c9b5.html","170":"/popular/website/bookmarks-explore/03-item-d42a8faa.html","171":"/popular/website/bookmarks-explore/04-item-ec369adc.html","172":"/popular/website/bookmarks-explore/05-item-e2b9e852.html","173":"/popular/website/bookmarks-explore/06-item-82508c75.html","174":"/popular/website/bookmarks-explore/07-item-f1b60e5d.html","175":"/popular/website/bookmarks-explore/08-item-96151af2.html","176":"/popular/website/bookmarks-explore/09-item-809a9af0.html","177":"/popular/website/bookmarks-explore/10-item-70971daf.html","178":"/popular/website/bookmarks-explore/11-item-d1397cc9.html","179":"/popular/website/bookmarks-explore/12-item-f90bbe93.html","180":"/popular/website/bookmarks-explore/13-item-e283fcc9.html","181":"/popular/website/bookmarks-explore/14-diy-a0ec9f52.html","182":"/popular/website/bookmarks-explore/15-item-8b731a8e.html","183":"/popular/website/bookmarks-explore/16-item-7138ec3f.html","184":"/popular/website/bookmarks-explore/17-item-b9bfea5f.html","185":"/popular/website/bookmarks-explore/18-item-07dc9df3.html","186":"/popular/website/bookmarks-explore/19-item-bookmarks-import.html","187":"/popular/website/bookmarks-explore/","188":"/popular/website/bookmarks-learning/01-ai-fad4099c.html","189":"/popular/website/bookmarks-learning/02-item-819428b4.html","190":"/popular/website/bookmarks-learning/03-item-ed648d60.html","191":"/popular/website/bookmarks-learning/04-item-15660199.html","192":"/popular/website/bookmarks-learning/05-item-4e678737.html","193":"/popular/website/bookmarks-learning/06-item-5c39c47f.html","194":"/popular/website/bookmarks-learning/07-item-833263aa.html","195":"/popular/website/bookmarks-learning/08-item-7b439a2d.html","196":"/popular/website/bookmarks-learning/09-item-0d51a1a9.html","197":"/popular/website/bookmarks-learning/10-item-1d0132a0.html","198":"/popular/website/bookmarks-learning/11-item-60832c28.html","199":"/popular/website/bookmarks-learning/12-item-38af269b.html","200":"/popular/website/bookmarks-learning/13-item-8d35aac9.html","201":"/popular/website/bookmarks-learning/14-item-38f57b82.html","202":"/popular/website/bookmarks-learning/15-item-ce8346d9.html","203":"/popular/website/bookmarks-learning/16-item-fc56dbcb.html","204":"/popular/website/bookmarks-learning/17-item-13b4e06b.html","205":"/popular/website/bookmarks-learning/18-ai-bd1cbf26.html","206":"/popular/website/bookmarks-learning/19-item-dac01ad3.html","207":"/popular/website/bookmarks-learning/20-item-bookmarks-import.html","208":"/popular/website/bookmarks-learning/","209":"/popular/website/bookmarks-office/01-ppt-8a267223.html","210":"/popular/website/bookmarks-office/02-item-c97c0438.html","211":"/popular/website/bookmarks-office/03-item-4bc53358.html","212":"/popular/website/bookmarks-office/04-ocr-f529c51e.html","213":"/popular/website/bookmarks-office/05-h5-52414527.html","214":"/popular/website/bookmarks-office/06-item-44a38bea.html","215":"/popular/website/bookmarks-office/07-item-e37e15c8.html","216":"/popular/website/bookmarks-office/08-item-26112658.html","217":"/popular/website/bookmarks-office/09-notion-5ea790e4.html","218":"/popular/website/bookmarks-office/10-obsidian-8591294e.html","219":"/popular/website/bookmarks-office/11-item-7714e5cf.html","220":"/popular/website/bookmarks-office/12-markdown-590fc197.html","221":"/popular/website/bookmarks-office/13-item-0bf378f2.html","222":"/popular/website/bookmarks-office/14-item-2f3363dd.html","223":"/popular/website/bookmarks-office/15-item-255feaba.html","224":"/popular/website/bookmarks-office/16-item-3fa627d8.html","225":"/popular/website/bookmarks-office/17-item-436367b0.html","226":"/popular/website/bookmarks-office/18-item-4c0af1ed.html","227":"/popular/website/bookmarks-office/19-item-5cab93be.html","228":"/popular/website/bookmarks-office/20-pitch-deck-7ad75512.html","229":"/popular/website/bookmarks-office/21-item-67f26bd6.html","230":"/popular/website/bookmarks-office/22-item-39907da8.html","231":"/popular/website/bookmarks-office/23-item-c6f517d4.html","232":"/popular/website/bookmarks-office/24-item-f8c3feb4.html","233":"/popular/website/bookmarks-office/25-item-0dd701c3.html","234":"/popular/website/bookmarks-office/26-item-d6b8599d.html","235":"/popular/website/bookmarks-office/27-item-faf0c48f.html","236":"/popular/website/bookmarks-office/28-item-e1f00e74.html","237":"/popular/website/bookmarks-office/29-item-fd9d4c15.html","238":"/popular/website/bookmarks-office/30-item-1746c257.html","239":"/popular/website/bookmarks-office/","240":"/popular/website/bookmarks-resources/01-item-dd4e9bbb.html","241":"/popular/website/bookmarks-resources/02-item-fe573eac.html","242":"/popular/website/bookmarks-resources/03-item-258bb97e.html","243":"/popular/website/bookmarks-resources/04-item-fdf38d61.html","244":"/popular/website/bookmarks-resources/05-item-b4e050ca.html","245":"/popular/website/bookmarks-resources/06-item-99cc558a.html","246":"/popular/website/bookmarks-resources/07-item-9d72744c.html","247":"/popular/website/bookmarks-resources/08-item-3a144eb6.html","248":"/popular/website/bookmarks-resources/09-item-7191bef6.html","249":"/popular/website/bookmarks-resources/12-item-e3901745.html","250":"/popular/website/bookmarks-resources/13-item-1fdb6230.html","251":"/popular/website/bookmarks-resources/15-item-f068f0da.html","252":"/popular/website/bookmarks-resources/16-item-938f16a9.html","253":"/popular/website/bookmarks-resources/17-item-dac01ad3.html","254":"/popular/website/bookmarks-resources/18-item-31648a71.html","255":"/popular/website/bookmarks-resources/19-item-a3008d48.html","256":"/popular/website/bookmarks-resources/20-item-09095f7d.html","257":"/popular/website/bookmarks-resources/21-item-19a04960.html","258":"/popular/website/bookmarks-resources/22-item-1df0987f.html","259":"/popular/website/bookmarks-resources/24-item-30a56287.html","260":"/popular/website/bookmarks-resources/25-item-c9a0c6dd.html","261":"/popular/website/bookmarks-resources/26-item-6acd244a.html","262":"/popular/website/bookmarks-resources/27-speed-dials-11b5c7e6.html","263":"/popular/website/bookmarks-resources/","264":"/popular/website/bookmarks-software/01-item-420a0db3.html","265":"/popular/website/bookmarks-software/02-item-5ebdb3a0.html","266":"/popular/website/bookmarks-software/03-item-a3b9cfc6.html","267":"/popular/website/bookmarks-software/04-item-d5a34260.html","268":"/popular/website/bookmarks-software/05-item-4acba229.html","269":"/popular/website/bookmarks-software/06-item-428700a5.html","270":"/popular/website/bookmarks-software/07-tv-0ebecdea.html","271":"/popular/website/bookmarks-software/08-win-e450697b.html","272":"/popular/website/bookmarks-software/09-win-85967b66.html","273":"/popular/website/bookmarks-software/10-win-bb256c98.html","274":"/popular/website/bookmarks-software/11-win-e78ad006.html","275":"/popular/website/bookmarks-software/12-mac-2886a641.html","276":"/popular/website/bookmarks-software/13-mac-82c2f8d1.html","277":"/popular/website/bookmarks-software/14-mac-c6d46cfd.html","278":"/popular/website/bookmarks-software/15-mac-a4fb47fe.html","279":"/popular/website/bookmarks-software/16-item-1a1e0af6.html","280":"/popular/website/bookmarks-software/17-item-c3d24506.html","281":"/popular/website/bookmarks-software/18-item-23c4e951.html","282":"/popular/website/bookmarks-software/19-ios-e8f480c2.html","283":"/popular/website/bookmarks-software/20-ios-f62ce7ae.html","284":"/popular/website/bookmarks-software/21-item-e70272b2.html","285":"/popular/website/bookmarks-software/22-item-da0bfcc0.html","286":"/popular/website/bookmarks-software/23-item-fca914b9.html","287":"/popular/website/bookmarks-software/","288":"/popular/website/bookmarks-tools/01-item-59ddf3cc.html","289":"/popular/website/bookmarks-tools/02-item-5a632ccb.html","290":"/popular/website/bookmarks-tools/03-item-2f313f9b.html","291":"/popular/website/bookmarks-tools/04-item-a58fdbfc.html","292":"/popular/website/bookmarks-tools/05-item-19483022.html","293":"/popular/website/bookmarks-tools/06-item-a7856a0c.html","294":"/popular/website/bookmarks-tools/07-item-e7a7cf36.html","295":"/popular/website/bookmarks-tools/08-item-a8644fae.html","296":"/popular/website/bookmarks-tools/09-item-22b03c02.html","297":"/popular/website/bookmarks-tools/10-item-1a34b8d9.html","298":"/popular/website/bookmarks-tools/11-item-12fbf752.html","299":"/popular/website/bookmarks-tools/12-item-865429e2.html","300":"/popular/website/bookmarks-tools/13-item-91824b68.html","301":"/popular/website/bookmarks-tools/14-item-52bcff87.html","302":"/popular/website/bookmarks-tools/15-item-59b03fcd.html","303":"/popular/website/bookmarks-tools/16-item-78921798.html","304":"/popular/website/bookmarks-tools/17-item-8f6b5802.html","305":"/popular/website/bookmarks-tools/18-app-8e0f5b14.html","306":"/popular/website/bookmarks-tools/","307":"/popular/website/bookmarks-web3/01-item-bookmarks-import.html","308":"/popular/website/bookmarks-web3/","309":"/popular/website/bookmarks-work/01-item-aafd61a5.html","310":"/popular/website/bookmarks-work/02-item-938f16a9.html","311":"/popular/website/bookmarks-work/03-item-1f18993c.html","312":"/popular/website/bookmarks-work/04-item-09496b16.html","313":"/popular/website/bookmarks-work/05-item-cab20c31.html","314":"/popular/website/bookmarks-work/06-item-ba02f74b.html","315":"/popular/website/bookmarks-work/07-item-c56faefc.html","316":"/popular/website/bookmarks-work/08-item-b1bae588.html","317":"/popular/website/bookmarks-work/09-item-c47d7a21.html","318":"/popular/website/bookmarks-work/10-item-6fb4cfa1.html","319":"/popular/website/bookmarks-work/11-item-bd3d9d0c.html","320":"/popular/website/bookmarks-work/12-item-37a38474.html","321":"/popular/website/bookmarks-work/13-item-3bc5e602.html","322":"/popular/website/bookmarks-work/14-item-e44b1171.html","323":"/popular/website/bookmarks-work/15-item-5d1e5145.html","324":"/popular/website/bookmarks-work/16-item-be00cd79.html","325":"/popular/website/bookmarks-work/17-item-9b42ae75.html","326":"/popular/website/bookmarks-work/18-item-02328df5.html","327":"/popular/website/bookmarks-work/19-item-287eabba.html","328":"/popular/website/bookmarks-work/20-item-f3ae9f2b.html","329":"/popular/website/bookmarks-work/21-item-4dd59878.html","330":"/popular/website/bookmarks-work/22-item-bookmarks-import.html","331":"/popular/website/bookmarks-work/","332":"/popular/website/bookmarks-resources/10-item-88d03858/01-item-420a0db3.html","333":"/popular/website/bookmarks-resources/10-item-88d03858/02-item-5ebdb3a0.html","334":"/popular/website/bookmarks-resources/10-item-88d03858/03-item-a3b9cfc6.html","335":"/popular/website/bookmarks-resources/10-item-88d03858/04-item-d5a34260.html","336":"/popular/website/bookmarks-resources/10-item-88d03858/05-item-4acba229.html","337":"/popular/website/bookmarks-resources/10-item-88d03858/06-item-428700a5.html","338":"/popular/website/bookmarks-resources/10-item-88d03858/07-tv-0ebecdea.html","339":"/popular/website/bookmarks-resources/10-item-88d03858/08-win-e450697b.html","340":"/popular/website/bookmarks-resources/10-item-88d03858/09-win-85967b66.html","341":"/popular/website/bookmarks-resources/10-item-88d03858/10-win-bb256c98.html","342":"/popular/website/bookmarks-resources/10-item-88d03858/11-win-e78ad006.html","343":"/popular/website/bookmarks-resources/10-item-88d03858/12-mac-2886a641.html","344":"/popular/website/bookmarks-resources/10-item-88d03858/13-mac-82c2f8d1.html","345":"/popular/website/bookmarks-resources/10-item-88d03858/14-mac-c6d46cfd.html","346":"/popular/website/bookmarks-resources/10-item-88d03858/15-mac-a4fb47fe.html","347":"/popular/website/bookmarks-resources/10-item-88d03858/16-item-1a1e0af6.html","348":"/popular/website/bookmarks-resources/10-item-88d03858/17-item-c3d24506.html","349":"/popular/website/bookmarks-resources/10-item-88d03858/18-item-23c4e951.html","350":"/popular/website/bookmarks-resources/10-item-88d03858/19-ios-e8f480c2.html","351":"/popular/website/bookmarks-resources/10-item-88d03858/20-ios-f62ce7ae.html","352":"/popular/website/bookmarks-resources/10-item-88d03858/21-item-e70272b2.html","353":"/popular/website/bookmarks-resources/10-item-88d03858/22-item-da0bfcc0.html","354":"/popular/website/bookmarks-resources/10-item-88d03858/23-item-fca914b9.html","355":"/popular/website/bookmarks-resources/10-item-88d03858/","356":"/popular/website/bookmarks-resources/11-item-2698170c/01-item-2699981a.html","357":"/popular/website/bookmarks-resources/11-item-2698170c/02-item-fd5ccbfd.html","358":"/popular/website/bookmarks-resources/11-item-2698170c/03-github-0c1b3cb7.html","359":"/popular/website/bookmarks-resources/11-item-2698170c/04-docker-hub-0be4893c.html","360":"/popular/website/bookmarks-resources/11-item-2698170c/05-cloudflare-b03c6a7a.html","361":"/popular/website/bookmarks-resources/11-item-2698170c/06-item-b881dfc0.html","362":"/popular/website/bookmarks-resources/11-item-2698170c/07-item-0f2bbfb7.html","363":"/popular/website/bookmarks-resources/11-item-2698170c/08-item-a9fbbd40.html","364":"/popular/website/bookmarks-resources/11-item-2698170c/09-item-133f51ea.html","365":"/popular/website/bookmarks-resources/11-item-2698170c/10-item-b2a1a4ef.html","366":"/popular/website/bookmarks-resources/11-item-2698170c/11-item-cc910c2c.html","367":"/popular/website/bookmarks-resources/11-item-2698170c/12-item-f5430db2.html","368":"/popular/website/bookmarks-resources/11-item-2698170c/13-item-d14f1bd7.html","369":"/popular/website/bookmarks-resources/11-item-2698170c/14-item-f1b52f9f.html","370":"/popular/website/bookmarks-resources/11-item-2698170c/15-item-a407a094.html","371":"/popular/website/bookmarks-resources/11-item-2698170c/16-item-9cab073b.html","372":"/popular/website/bookmarks-resources/11-item-2698170c/17-github-bf293ef5.html","373":"/popular/website/bookmarks-resources/11-item-2698170c/18-item-7eb64309.html","374":"/popular/website/bookmarks-resources/11-item-2698170c/19-item-b4922b33.html","375":"/popular/website/bookmarks-resources/11-item-2698170c/","376":"/popular/website/bookmarks-resources/14-item-9c223228/01-item-0a79900e.html","377":"/popular/website/bookmarks-resources/14-item-9c223228/02-item-b05db14b.html","378":"/popular/website/bookmarks-resources/14-item-9c223228/03-item-8bd9c322.html","379":"/popular/website/bookmarks-resources/14-item-9c223228/04-pdf-ocr-ec1e16ef.html","380":"/popular/website/bookmarks-resources/14-item-9c223228/05-item-59ddf3cc.html","381":"/popular/website/bookmarks-resources/14-item-9c223228/06-item-22b03c02.html","382":"/popular/website/bookmarks-resources/14-item-9c223228/07-item-5378bbfc.html","383":"/popular/website/bookmarks-resources/14-item-9c223228/08-item-12fbf752.html","384":"/popular/website/bookmarks-resources/14-item-9c223228/09-item-7d575004.html","385":"/popular/website/bookmarks-resources/14-item-9c223228/10-item-865429e2.html","386":"/popular/website/bookmarks-resources/14-item-9c223228/11-item-91824b68.html","387":"/popular/website/bookmarks-resources/14-item-9c223228/12-item-52bcff87.html","388":"/popular/website/bookmarks-resources/14-item-9c223228/13-item-59b03fcd.html","389":"/popular/website/bookmarks-resources/14-item-9c223228/14-item-0084faa4.html","390":"/popular/website/bookmarks-resources/14-item-9c223228/15-item-dbf2da13.html","391":"/popular/website/bookmarks-resources/14-item-9c223228/16-item-22c9a8c6.html","392":"/popular/website/bookmarks-resources/14-item-9c223228/17-item-78921798.html","393":"/popular/website/bookmarks-resources/14-item-9c223228/18-item-5084f566.html","394":"/popular/website/bookmarks-resources/14-item-9c223228/19-ai-54600dc7.html","395":"/popular/website/bookmarks-resources/14-item-9c223228/20-item-7c5c113b.html","396":"/popular/website/bookmarks-resources/14-item-9c223228/21-item-7fa695e5.html","397":"/popular/website/bookmarks-resources/14-item-9c223228/22-item-24a93fff.html","398":"/popular/website/bookmarks-resources/14-item-9c223228/23-item-f910e251.html","399":"/popular/website/bookmarks-resources/14-item-9c223228/24-item-dae6399d.html","400":"/popular/website/bookmarks-resources/14-item-9c223228/25-item-02328df5.html","401":"/popular/website/bookmarks-resources/14-item-9c223228/26-item-26112658.html","402":"/popular/website/bookmarks-resources/14-item-9c223228/27-item-f74baa06.html","403":"/popular/website/bookmarks-resources/14-item-9c223228/28-item-77b9c8bd.html","404":"/popular/website/bookmarks-resources/14-item-9c223228/29-item-74a33946.html","405":"/popular/website/bookmarks-resources/14-item-9c223228/30-app-8e0f5b14.html","406":"/popular/website/bookmarks-resources/14-item-9c223228/31-item-2d1c66bd.html","407":"/popular/website/bookmarks-resources/14-item-9c223228/","408":"/popular/website/bookmarks-resources/23-item-cd6a49c3/01-ai-bd1cbf26.html","409":"/popular/website/bookmarks-resources/23-item-cd6a49c3/02-ai-10a3b7f1.html","410":"/popular/website/bookmarks-resources/23-item-cd6a49c3/03-item-60832c28.html","411":"/popular/website/bookmarks-resources/23-item-cd6a49c3/04-item-6603c934.html","412":"/popular/website/bookmarks-resources/23-item-cd6a49c3/05-item-5d1e5145.html","413":"/popular/website/bookmarks-resources/23-item-cd6a49c3/06-item-38b2fafe.html","414":"/popular/website/bookmarks-resources/23-item-cd6a49c3/07-item-09095f7d.html","415":"/popular/website/bookmarks-resources/23-item-cd6a49c3/08-item-7b439a2d.html","416":"/popular/website/bookmarks-resources/23-item-cd6a49c3/09-item-833263aa.html","417":"/popular/website/bookmarks-resources/23-item-cd6a49c3/10-item-5f66e127.html","418":"/popular/website/bookmarks-resources/23-item-cd6a49c3/11-item-d13a94bf.html","419":"/popular/website/bookmarks-resources/23-item-cd6a49c3/12-item-0d51a1a9.html","420":"/popular/website/bookmarks-resources/23-item-cd6a49c3/13-item-729e62fd.html","421":"/popular/website/bookmarks-resources/23-item-cd6a49c3/14-item-e44b1171.html","422":"/popular/website/bookmarks-resources/23-item-cd6a49c3/15-item-eb2a471d.html","423":"/popular/website/bookmarks-resources/23-item-cd6a49c3/16-item-b8685cff.html","424":"/popular/website/bookmarks-resources/23-item-cd6a49c3/17-study-2c861c5f.html","425":"/popular/website/bookmarks-resources/23-item-cd6a49c3/18-item-fc7da0d9.html","426":"/popular/website/bookmarks-resources/23-item-cd6a49c3/19-item-ffdf1733.html","427":"/popular/website/bookmarks-resources/23-item-cd6a49c3/20-item-101fba8c.html","428":"/popular/website/bookmarks-resources/23-item-cd6a49c3/21-item-1d0132a0.html","429":"/popular/website/bookmarks-resources/23-item-cd6a49c3/22-item-43087966.html","430":"/popular/website/bookmarks-resources/23-item-cd6a49c3/","431":"/collection/windows/system-build.html","432":"/collection/windows/reset.html"}`),Ox=JSON.parse(`{"article":{"/":{"path":"/article/","indexes":[66,67,68,69,70,2,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,7,55,30,56,57,58,63,32,34,64,65,35,36,12,37,38,39,40,41,10,11,14,16,18,20,21,23,24,26,27,25,28,19,15,29,22,33,31,17,13,42,43,62,61,44,59,60,45,46,47,48,49,50,51,52,53,54,8,4,5,3,431,6,432,9,0,1]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[66,67,68,69,70,2,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,7,55,30,56,57,58,63,32,34,64,65,35,36,12,37,38,39,40,41,10,11,14,16,18,20,21,23,24,26,27,25,28,19,15,29,22,33,31,17,13,42,43,62,61,44,59,60,45,46,47,48,49,50,51,52,53,54,8,4,5,3,431,6,432,9,0,1]}}}`),kx=F(Ex),Ax=e=>{let{frontmatter:t,page:n,routeLocale:r}=ud();return W(()=>{let i=e??t.value.blog?.key??``;if(!i)return console.warn(`useBlogCategory: key not found`),{path:`/`,map:{}};if(!(i in kx.value))throw Error(`useBlogCategory: key ${i} is invalid`);let a=kx.value[i][r.value],o={path:a.path,map:{}};for(let[e,t]of Object.entries(a.map)){o.map[e]={path:t.path,items:[]};for(let n of t.indexes){let{path:t,meta:r}=bd(Dx[n]);o.map[e].items.push({path:t,info:r})}n.value.path===t.path&&(o.currentItems=o.map[e].items)}return o})},jx=F(Ox),Mx=e=>{let{frontmatter:t,routeLocale:n}=ud();return W(()=>{let r=e??t.value.blog?.key??``;if(!r)return console.warn(`useBlogType: key not found`),{path:`/`,items:[]};if(!(r in jx.value))throw Error(`useBlogType: key ${e} is invalid`);let i=jx.value[r][n.value],a={path:i.path,items:[]};for(let e of i.indexes){let{path:t,meta:n}=bd(Dx[e]);a.items.push({path:t,info:n})}return a})},Nx=()=>{let{theme:e,themeLocale:t}=cy();return W(()=>({...e.value.blog,...t.value.blog}))},Px=z({name:`SocialMedias`,setup(){let e=Nx(),t=ly(),n=W(()=>Id(e.value.medias??{}).map(([e,t])=>typeof t==`string`?{name:e,icon:Tx[e],link:t}:Object.assign({name:e},t)));return()=>n.value.length>0?G(`div`,{class:`vp-social-medias`},n.value.map(({name:e,icon:n,link:r})=>G(`a`,{class:`vp-social-media`,href:r,rel:`noopener noreferrer`,target:`_blank`,"aria-label":e||``,...t.value?{}:{"data-balloon-pos":`up`},innerHTML:jc(n)?`<img class="vp-social-media-icon ${e}-icon" src="${n}">`:n}))):null}}),Fx=Symbol(``),Ix=()=>{let e=L(Fx);if(!e)throw Error(`useArticles() is called without provider.`);return e},Lx=()=>{ir(Fx,Mx(`article`))},Rx=()=>{let e=sy();return W(()=>e.value.blogLocales)},zx=Symbol.for(`categoryMap`),Bx=()=>{let e=L(zx);if(!e)throw Error(`useCategoryMap() is called without provider.`);return e},Vx=()=>{ir(zx,Ax(`category`))},Hx=Symbol.for(`tagMap`),Ux=()=>{let e=L(Hx);if(!e)throw Error(`useTagMap() is called without provider.`);return e},Wx=()=>{ir(Hx,Ax(`tag`))},Gx=Symbol(``),Kx=()=>{let e=L(Gx);if(!e)throw Error(`useTimeline() is called without provider.`);return e},qx=()=>{let e=Mx(`timeline`),t=fd();ir(Gx,W(()=>{let n=[];return e.value.items.forEach(({info:e,path:r})=>{let i=Vd(e.date);if(i){let a=i.getFullYear();n[0]?.year!==a&&n.unshift({year:a,items:[]}),n[0].items.push({date:i.toLocaleDateString(t.value,{month:`numeric`,day:`numeric`}),info:e,path:r})}}),{...e.value,config:n.reverse()}}))},Jx=z({name:`BloggerInfo`,slots:Object,setup(e,{slots:t}){let n=Rx(),r=Nx(),{siteLocale:i,themeLocale:a}=cy(),o=Ix(),s=Bx(),c=Ux(),l=Kx(),u=vy(),d=W(()=>({name:r.value.name??Mv(a.value.author)[0]?.name??i.value.title,avatar:r.value.avatar??a.value.logo??null,description:r.value.description??null})),f=W(()=>r.value.intro);return()=>{let{article:e,category:r,tag:i,timeline:a}=n.value,p=[[o.value.path,o.value.items.length,e],[s.value.path,Rd(s.value.map).length,r],[c.value.path,Rd(c.value.map).length,i],[l.value.path,l.value.items.length,a]];return G(`div`,{class:`vp-blogger-info`,vocab:`https://schema.org/`,typeof:`Person`},t.bloggerInfo?.(d.value)??[G(`div`,{class:`vp-blogger`,...f.value?{"aria-label":n.value.intro,"data-balloon-pos":`down`,role:`link`,onClick:()=>{u(f.value)}}:{}},[d.value.avatar?G(`img`,{class:`vp-blogger-avatar`,src:Y(d.value.avatar),property:`image`,alt:`Blogger Avatar`,loading:`lazy`}):null,d.value.name?G(`div`,{class:`vp-blogger-name`,property:`name`},d.value.name):null,d.value.description?G(`div`,{class:`vp-blogger-description`,innerHTML:d.value.description}):null,f.value?G(`meta`,{property:`url`,content:Y(f.value)}):null]),G(`div`,{class:`vp-blog-counts`},p.map(([e,t,n])=>G(Cd,{class:`vp-blog-count`,to:e},()=>[G(`div`,{class:`count`},t),G(`div`,n)]))),G(Px)])}}}),Yx=Symbol(``),Xx=()=>{let e=L(Yx);if(!e)throw Error(`useStars() is called without provider.`);return e},Zx=()=>{ir(Yx,Mx(`star`))},Qx=()=>G(Z,{name:`category`},()=>G(`path`,{d:`M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z`}));Qx.displayName=`CategoryIcon`;var $x=()=>G(Z,{name:`tag`},()=>G(`path`,{d:`M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z`}));$x.displayName=`TagIcon`;var eS=()=>G(Z,{name:`timeline`},()=>G(`path`,{d:`M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0`}));eS.displayName=`TimelineIcon`;var tS=()=>G(Z,{name:`slides`},()=>G(`path`,{d:`M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z`}));tS.displayName=`SlideIcon`;var nS=()=>G(Z,{name:`sticky`},()=>[G(`path`,{d:`m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z`})]);nS.displayName=`StickyIcon`;var rS=()=>G(Z,{name:`article`},()=>G(`path`,{d:`M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z`}));rS.displayName=`ArticleIcon`;var iS=e=>{let t=sy();return W(()=>{let{author:n}=e.value;return n?Mv(n):n===!1?[]:Mv(t.value.author,!1)})},aS=e=>{let t=Bx();return W(()=>Pv(e.value.category).map(e=>({name:e,path:t.value.map[e].path})))},oS=e=>{let t=Ux();return W(()=>Fv(e.value.tag).map(e=>({name:e,path:t.value.map[e].path})))},sS=e=>W(()=>Vd(e.value.date)),cS=e=>{let t=Sn(e,`info`),n=Nx(),r=iS(t),i=aS(t),a=oS(t),o=sS(t),s=Bv();return{info:W(()=>({author:r.value,category:i.value,date:o.value,tag:a.value,isOriginal:t.value.isOriginal??!1,readingTime:t.value.readingTime??null,readingTimeLocale:t.value.readingTime&&s.value?Lv(t.value.readingTime,s.value):null,pageview:e.path})),items:W(()=>n.value.articleInfo??null)}},lS=z({name:`ArticleItem`,props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){let n=Sn(e,`info`),{info:r,items:i}=cS(e),a=ul();return()=>{let{title:o,type:s,isEncrypted:c=!1,cover:l=null,excerpt:u,sticky:d}=n.value,f=r.value;return G(`div`,{class:`vp-article-wrapper`,onClick:t=>{t.target?.matches(`summary`)||(t.preventDefault(),a.push(e.path))}},G(`article`,{class:`vp-article-item`,vocab:`https://schema.org/`,typeof:`Article`},[t.articleCover?.({cover:l})??(l?[G(`img`,{class:`vp-article-cover`,src:Y(l),alt:``,loading:`lazy`}),G(`meta`,{property:`image`,content:Y(l)})]:[]),d?G(nS):null,G(Cd,{to:e.path},()=>t.articleTitle?.({title:o,isEncrypted:c,type:s})??G(`header`,{class:`vp-article-title`},[c?G(wx):null,s===`slide`?G(tS):null,G(`span`,{property:`headline`},o)])),t.articleExcerpt?.({excerpt:u})??(u?G(`div`,{class:`vp-article-excerpt`,innerHTML:u}):null),G(`hr`,{class:`vp-article-hr`}),t.articleInfo?.(f)??G(Ny,{info:f,items:i.value,onClick:e=>{e.stopPropagation()}})]))}}}),uS=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>`,dS=z({name:`Pagination`,props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:[`updateCurrentPage`],setup(e,{emit:t}){let n=new um,r=sy(),i=P(``),a=W(()=>r.value.paginationLocales),o=W(()=>Math.ceil(e.total/e.perPage)),s=W(()=>!!o.value&&o.value!==1),c=W(()=>o.value<7?!1:e.current>4),l=W(()=>o.value<7?!1:e.current<o.value-3),u=W(()=>{let{current:t}=e,n=1,r=o.value,i=[];o.value>=7&&(t<=4&&t<o.value-3?(n=1,r=5):t>4&&t>=o.value-3?(r=o.value,n=o.value-4):o.value>7&&(n=t-2,r=t+2));for(let e=n;e<=r;e++)i.push(e);return i}),d=e=>{t(`updateCurrentPage`,e)},f=e=>{let t=Number.parseInt(e,10);t<=o.value&&t>0?d(t):n.pop(`${uS}${a.value.errorText.replaceAll(String.raw`\$page`,o.value.toString())}`)};return()=>G(`div`,{class:`vp-pagination`},s.value?G(`nav`,{class:`vp-pagination-list`},[G(`div`,{class:`vp-pagination-number `},[e.current>1?G(`div`,{class:`prev`,role:`navigation`,unselectable:`on`,onClick:()=>{d(e.current-1)}},a.value.prev):null,c.value?[G(`div`,{role:`navigation`,onClick:()=>{d(1)}},1),G(`div`,{class:`ellipsis`},`...`)]:null,u.value.map(t=>G(`div`,{key:t,class:{active:e.current===t},role:`navigation`,onClick:()=>{d(t)}},t)),l.value?[G(`div`,{class:`ellipsis`},`...`),G(`div`,{role:`navigation`,onClick:()=>{d(o.value)}},o.value)]:null,e.current<o.value?G(`div`,{class:`next`,role:`navigation`,unselectable:`on`,onClick:()=>{d(e.current+1)}},a.value.next):null]),G(`div`,{class:`vp-pagination-nav`},[G(`label`,{for:`navigation-text`},`${a.value.navigate}: `),G(`input`,{id:`navigation-text`,value:i.value,onInput:({target:e})=>{i.value=e.value},onKeydown:e=>{e.key===`Enter`&&(e.preventDefault(),f(i.value))}}),G(`button`,{class:`vp-pagination-button`,type:`button`,role:`navigation`,title:a.value.action,onClick:()=>{f(i.value)}},a.value.action)])]):[])}}),fS=10,pS=z({name:`ArticleList`,props:{items:{type:Array,required:!0}},slots:Object,setup(e,{slots:t}){let n=dl(),r=ul(),i=Rx(),a=Nx(),o=ay(),s=P(1),c=W(()=>a.value.articlePerPage??fS),l=W(()=>e.items.slice((s.value-1)*c.value,s.value*c.value)),u=async e=>{s.value=e;let t={...n.query};t.page===e.toString()||e===1&&!t.page||(e===1?delete t.page:t.page=e.toString(),await r.push({path:n.path,query:t})),await Un(),o({selector:`.vp-pageview`})};return B(()=>{let{page:e}=n.query;u(e?Number(e):1),R(s,()=>{let e=document.querySelector(`#article-list`).getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,e)},100)})}),()=>G(`div`,{id:`article-list`,class:`vp-article-list`,role:`feed`},l.value.length>0?[...l.value.map(({info:e,path:n},r)=>G(Q,{appear:!0,delay:r*.04},()=>G(lS,{key:n,info:e,path:n},t))),G(dS,{current:s.value,perPage:c.value,total:e.items.length,onUpdateCurrentPage:u})]:G(`h2`,{class:`vp-empty-hint`},i.value.empty.replace(`$text`,i.value.article.toLocaleLowerCase())))}}),mS=`//theme-hope-assets.vuejs.press/hero/default.jpg`,hS=z({name:`BlogHero`,slots:Object,setup(e,{slots:t}){let{frontmatter:n,siteLocale:r}=cy(),i=W(()=>{let{heroText:e,heroStyle:t,tagline:i,heroFullScreen:a=!1}=n.value;return{text:e??(r.value.title||`Hello`),tagline:i??``,style:t??null,isFullScreen:a}}),a=W(()=>{let{heroImage:e,heroImageDark:t,heroAlt:r,heroImageStyle:i}=n.value;return{image:e?Y(e):null,imageDark:t?Y(t):null,style:i??null,alt:r??``}}),o=W(()=>{let{bgImage:e,bgImageDark:t,bgImageStyle:r}=n.value;return{image:K(e)?Y(e):e===!1?null:mS,imageDark:K(t)?Y(t):null,style:r??null}});return()=>n.value.hero===!1?null:G(`div`,{class:[`vp-blog-hero`,{"hero-fullscreen":n.value.heroFullScreen,"no-bg":!o.value.image}]},[t.heroBg?.(o.value)??[o.value.image?G(`div`,{class:[`vp-blog-mask`,{light:o.value.imageDark}],style:[{background:`url(${o.value.image}) center/cover no-repeat`},o.value.style]}):null,o.value.imageDark?G(`div`,{class:`vp-blog-mask dark`,style:[{background:`url(${o.value.imageDark}) center/cover no-repeat`},o.value.style]}):null],t.heroLogo?.(a.value)??G(Q,{appear:!0,group:!0,delay:.04},()=>{let{image:e,imageDark:t,style:n,alt:r}=a.value;return[e?G(`img`,{key:`light`,class:[`vp-blog-hero-image`,{light:t}],style:n,src:e,alt:r}):null,t?G(`img`,{key:`dark`,class:`vp-blog-hero-image dark`,style:n,src:t,alt:r}):null]}),t.heroInfo?.(i.value)??G(`div`,{class:`vp-blog-hero-info`},[G(Q,{appear:!0,delay:.08},()=>i.value.text?G(`h1`,{class:`vp-blog-hero-title`},i.value.text):null),G(Q,{appear:!0,delay:.12},()=>i.value.tagline?G(`div`,{class:`vp-blog-hero-description`,innerHTML:i.value.tagline}):null)]),n.value.heroFullScreen?G(qb,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector(`[vp-navbar]`)?.clientHeight??0),behavior:`smooth`})}}):null])}}),gS=z({name:`ArticlesInfo`,setup(){let e=Ix(),t=Rx(),n=Xx(),r=vy(),i=W(()=>e.value.items.length),a=W(()=>n.value.items);return()=>G(Q,()=>G(`div`,{class:`vp-star-article-wrapper`},[G(`div`,{class:`title`,onClick:()=>{r(e.value.path)}},[G(rS),G(`span`,{class:`num`},i.value),t.value.article]),G(`hr`),a.value.length>0?G(`ul`,{class:`vp-star-articles`},a.value.map(({info:e,path:t},n)=>G(Q,{appear:!0,delay:.08*(n+1)},()=>G(`li`,{class:`vp-star-article`},G(Cd,{to:t},()=>e.title))))):G(`div`,{class:`vp-star-article-empty`},t.value.empty.replace(`$text`,t.value.star))]))}}),_S=z({name:`CategoryList`,setup(){let e=pd(),t=Bx();return()=>G(`ul`,{class:`vp-category-list`},Id(t.value.map).sort(([,e],[,t])=>t.items.length-e.items.length).map(([t,{path:n,items:r}])=>G(`li`,{class:`vp-category-item`},G(Cd,{class:[`vp-category`,`color${$v(t,Number(iy.colorNumber))}`,{active:n===e.value.path}],to:n},()=>[t,G(`span`,{class:`vp-category-count`},r.length)]))))}}),vS=z({name:`CategoriesInfo`,setup(){let e=Rx(),t=Bx(),n=vy(),r=W(()=>Rd(t.value.map).length);return()=>G(`div`,{class:`vp-category-wrapper`},[r.value?[G(`div`,{class:`title`,onClick:()=>{n(t.value.path)}},[G(Qx),G(`span`,{class:`num`},r.value),e.value.category]),G(`hr`),G(Q,{delay:.04},()=>G(_S))]:G(`div`,{class:`vp-category-empty`},e.value.empty.replace(`$text`,e.value.category))])}}),yS=z({name:`TagList`,setup(){let e=dd(),t=Ux(),n=t=>t===e.value.blog?.name;return()=>G(`ul`,{class:`vp-tag-list`},Id(t.value.map).sort(([,e],[,t])=>t.items.length-e.items.length).map(([e,{path:t,items:r}])=>G(`li`,{class:`vp-tag-item`},G(Cd,{class:[`vp-tag`,`color${$v(e,Number(iy.colorNumber))}`,{active:n(e)}],to:t},()=>[e,G(`span`,{class:`vp-tag-count`},r.length)]))))}}),bS=z({name:`TagsInfo`,setup(){let e=Rx(),t=Ux(),n=vy(),r=W(()=>Rd(t.value.map).length);return()=>G(`div`,{class:`vp-tag-wrapper`},[r.value?[G(`div`,{class:`title`,onClick:()=>{n(t.value.path)}},[G($x),G(`span`,{class:`num`},r.value),e.value.tag]),G(`hr`),G(Q,{delay:.04},()=>G(yS))]:G(`div`,{class:`vp-tag-empty`},e.value.empty.replace(`$text`,e.value.tag))])}}),xS=z({name:`TimelineList`,setup(){let e=Rx(),t=Kx(),n=vy();return()=>G(`div`,{class:`timeline-list-wrapper`},[G(`div`,{class:`title`,onClick:()=>{n(t.value.path)}},[G(eS),G(`span`,{class:`num`},t.value.items.length),e.value.timeline]),G(`hr`),G(`div`,{class:`timeline-content`},G(`ul`,{class:`timeline-list`},t.value.config.map(({year:e,items:t},n)=>G(Q,{appear:!0,delay:.08*(n+1)},()=>G(`li`,[G(`h3`,{class:`timeline-year`},e),G(`ul`,{class:`timeline-year-wrapper`},t.map(({date:e,info:t,path:n})=>G(`li`,{class:`timeline-item`},[G(`span`,{class:`timeline-date`},e),G(Cd,{class:`timeline-title`,to:n},()=>t.title)])))])))))])}}),SS={article:rS,category:Qx,tag:$x,timeline:eS},CS=z({name:`InfoList`,setup(){let e=Rx(),t=P(`article`);return()=>G(`div`,{class:`vp-blog-infos`},[G(`div`,{class:`vp-blog-type-switcher`},Id(SS).map(([n,r])=>G(`button`,{type:`button`,class:`vp-blog-type-button`,onClick:()=>{t.value=n}},G(`div`,{class:[`vp-blog-type-icon-wrapper`,{active:t.value===n}],"aria-label":e.value[n],"data-balloon-pos":`down`},G(r))))),G(Q,()=>t.value===`article`?G(gS):t.value===`category`?G(vS):t.value===`tag`?G(bS):G(xS))])}}),wS=(e,{slots:t})=>G(`aside`,{class:`vp-blog-info-wrapper`},[t.infoBefore?.(),G(Q,()=>G(Jx,{},t)),G(Q,{delay:.04},()=>G(CS)),t.infoAfter?.()]);wS.displayName=`InfoPanel`;var TS=z({name:`ProjectPanel`,props:{items:{type:Array,required:!0}},setup(e){let t=ly(),n=vy();return()=>G(`div`,{class:`vp-project-panel`},e.items.map(({icon:e,link:r,name:i,desc:a,background:o})=>G(`a`,{class:[`vp-project-card`,{[`color${$v(i,Number(iy.colorNumber))}`]:!t.value&&!o}],...o?{style:o}:{},href:Hd(r)?Y(r):r,onClick:e=>{n(r),e.preventDefault()}},[e?G(V(`VPIcon`),{class:`vp-project-icon`,icon:e}):null,G(`div`,{class:`vp-project-name`},i),G(`div`,{class:`vp-project-desc`},a)])))}}),ES=z({name:`BlogHome`,slots:Object,setup(e,{slots:t}){let n=Ix(),r=dd(),i=W(()=>r.value.projects??[]);return()=>G(`div`,{class:`vp-page vp-blog-home`},[t.heroBefore?.(),G(hS,{},t),t.heroAfter?.(),G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},[t.articlesBefore?.()??(i.value.length>0?G(Q,{appear:!0,delay:.16},()=>G(TS,{items:i.value})):null),G(Q,{appear:!0,delay:.24},()=>G(pS,{items:n.value.items},t)),t.articlesAfter?.()]),G(Q,{appear:!0,delay:.16},()=>G(wS,{key:`blog`},t))]),t.content?.()??G(Q,{appear:!0,delay:.28},()=>G(Ub,{},t))])}}),DS=z({name:`BlogMainLayout`,slots:Object,setup(e,{slots:t}){let{isMobile:n}=Db();return()=>[G(Gb),G(Vb,{noSidebar:!n.value,noToc:!0},{...t,navScreenBottom:()=>t.navScreenBottom?.()??G(Jx,{},t),sidebarItems:e=>t.sidebarItems?.(e)??(n.value?G(CS):null)})]}}),OS=z({name:`CategoryPage`,slots:Object,setup(e,{slots:t}){let n=pd(),r=dd(),i=Bx(),a=Ux(),o=W(()=>{let e=r.value.blog;if(e?.type!==`category`)return null;let{name:t,key:n}=e;return n===`category`?{component:_S,items:t?i.value.map[t].items:null}:n===`tag`?{component:yS,items:t?a.value.map[t].items:null}:null});return()=>G(`div`,{class:`vp-page vp-blog`},G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},t.default?.()??[G(Q,{appear:!0},()=>o.value?G(o.value.component):null),t.articlesBefore?.(),o.value?.items?G(Q,{appear:!0,delay:.08},()=>[G(pS,{key:n.value.path,items:o.value.items},t)]):null,t.articlesAfter?.()]),G(Q,{delay:.16},()=>G(wS,{key:`blog`},t))]))}}),kS=z({name:`TimelineItems`,setup(){let e=Nx(),t=Rx(),n=Kx(),r=W(()=>e.value.timeline??t.value.timelineTitle);return()=>G(`div`,{class:`timeline-wrapper`},G(`ul`,{class:`timeline-content`},[G(Q,()=>G(`li`,{class:`motto`},r.value)),n.value.config.map(({year:e,items:t},n)=>G(Q,{appear:!0,delay:.08*(n+1),group:!0},()=>[G(`h3`,{key:`title`,id:e,class:`timeline-year-title`},G(`span`,e)),G(`li`,{key:`content`,class:`timeline-year-list`},[G(`ul`,{class:`timeline-year-wrapper`},t.map(({date:e,info:t,path:n})=>G(`li`,{class:`timeline-item`},[G(`span`,{class:`timeline-date`},e),G(Cd,{class:`timeline-title`,to:n},()=>t.title)])))])]))]))}}),AS=(e,{slots:t})=>G(`div`,{class:`vp-page vp-blog`},G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},[t.articlesBefore?.(),G(Q,{appear:!0},()=>G(kS)),t.articlesAfter?.()]),G(Q,{appear:!0},()=>G(wS,{key:`blog`},t))]));AS.displayName=`TimelinePage`;var jS=z({name:`ArticleType`,setup(){let{page:e,routeLocale:t}=cy(),n=Ix(),r=Xx(),i=Rx(),a=W(()=>[{text:i.value.all,path:n.value.path},{text:i.value.star,path:r.value.path},...[].map(({key:e,path:n})=>{let r=n.replace(/^\//u,t.value);return{text:i.value[e]??bd(r).meta.title??e,path:r}})]);return()=>G(`ul`,{class:`vp-article-type-wrapper`},a.value.map(t=>G(`li`,{class:[`vp-article-type`,{active:t.path===e.value.path}]},G(Cd,{to:t.path},()=>t.text))))}}),MS=z({name:`TypePage`,slots:Object,setup(e,{slots:t}){let n=Mx(),r=dd(),i=pd(),a=Ix(),o=Xx(),s=W(()=>{let e=r.value.blog;return e?.type!==`type`||!e.key?a.value.items:e.key===`star`?o.value.items:n.value.items});return()=>G(`div`,{class:`vp-page vp-blog`},G(`div`,{class:`blog-page-wrapper`},[G(`main`,{id:`main-content`,class:`vp-blog-main`},t.default?.()??[G(Q,()=>G(jS)),t.articlesBefore?.(),G(Q,{appear:!0,delay:.08},()=>G(pS,{key:i.value.path,items:s.value})),t.articlesAfter?.()]),G(Q,{appear:!0,delay:.08},()=>G(wS,{key:`blog`},t))]))}}),NS=z({name:`Blog`,slots:Object,setup(e,{slots:t}){let n=dd();return()=>{let{type:e,key:r}=n.value.blog??{};return G(DS,null,{...t,default:()=>t.default?.()??G(e===`category`?OS:e===`type`?r===`timeline`?AS:MS:ES,null,t)})}}}),PS=()=>{Lx(),Vx(),Zx(),Wx(),qx()},FS=c({default:()=>IS});__(e=>{let t=e.title,n=e.index??!0,r=e.icon;return n?{title:t,content:r?()=>[G(V(`VPIcon`),{icon:r,sizing:`both`}),t]:null,order:e.order,index:e.index}:null});var IS={enhance:({app:e,router:t})=>{let{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...e)=>(await Zb.wait(),n(...e)),Ly(e),e.component(`BloggerInfo`,Jx),e.component(`SocialMedias`,Px)},setup:()=>{Ry(),qy(),PS()},layouts:{Layout:Sx,NotFound:Cx,Blog:NS}},LS=`#markdown-content table`,RS=`table`,zS=new Intl.Collator(`zh-CN`,{numeric:!0,sensitivity:`base`}),BS=null,VS=e=>e?.replace(/\s+/g,` `).trim()??``,HS=e=>{let t=e.replace(/[,%$￥¥\s]/g,``);if(!/^-?\d+(?:\.\d+)?$/.test(t))return null;let n=Number(t);return Number.isFinite(n)?n:null},US=e=>{let t=Date.parse(e);return Number.isNaN(t)?null:t},WS=(e,t)=>VS(e.cells.item(t)?.textContent),GS=e=>{let t=e.filter(e=>e.length>0);return t.length===0?`text`:t.every(e=>HS(e)!==null)?`number`:t.every(e=>US(e)!==null)?`date`:`text`},KS=(e,t,n)=>{e.forEach((e,r)=>{let i=r===t;e.dataset.sortDirection=i?n:``,e.setAttribute(`aria-sort`,i?n===`asc`?`ascending`:`descending`:`none`)})},qS=(e,t,n,r)=>{let i=e.tBodies.item(0);if(!i)return;let a=Array.from(i.rows),o=GS(a.map(e=>WS(e,n)));a.sort((e,t)=>{let i=WS(e,n),a=WS(t,n);if(!i&&!a)return Number(e.dataset.sortOriginalIndex)-Number(t.dataset.sortOriginalIndex);if(!i)return 1;if(!a)return-1;let s=0;return s=o===`number`?(HS(i)??-1/0)-(HS(a)??-1/0):o===`date`?(US(i)??-1/0)-(US(a)??-1/0):zS.compare(i,a),s===0&&(s=Number(e.dataset.sortOriginalIndex)-Number(t.dataset.sortOriginalIndex)),r===`asc`?s:-s}),i.append(...a),e.dataset.sortColumn=String(n),e.dataset.sortDirection=r,KS(t,n,r)},JS=e=>{if(e.dataset.sortableEnhanced===`true`)return;let t=e.tHead?.rows.item(0),n=e.tBodies.item(0);if(!t||!n||t.cells.length===0||n.rows.length===0)return;let r=Array.from(t.cells);e.classList.add(`is-sortable-table`),e.dataset.sortableEnhanced=`true`,Array.from(n.rows).forEach((e,t)=>{e.dataset.sortOriginalIndex=String(t)}),r.forEach((t,n)=>{t.dataset.sortable=`true`,t.dataset.sortDirection=``,t.setAttribute(`aria-sort`,`none`),t.tabIndex=0;let i=()=>{let t=Number(e.dataset.sortColumn),i=e.dataset.sortDirection;qS(e,r,n,t===n&&i===`asc`?`desc`:`asc`)};t.addEventListener(`click`,i),t.addEventListener(`keydown`,e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),i())})})},YS=e=>{if(!e){document.querySelectorAll(LS).forEach(e=>JS(e));return}if(e instanceof HTMLTableElement){JS(e);return}e.querySelectorAll(RS).forEach(e=>JS(e))},XS=()=>{typeof window>`u`||(BS!==null&&window.cancelAnimationFrame(BS),BS=window.requestAnimationFrame(()=>{BS=null,YS()}))},ZS=()=>{B(()=>{XS()}),fi(()=>{BS!==null&&typeof window<`u`&&(window.cancelAnimationFrame(BS),BS=null)}),hd(()=>{XS()})},QS=`.theme-container .vp-page.vp-portfolio-home,
.theme-container .vp-page.vp-blog-home {
  padding-top: 0;
}
.vp-blog-hero.hero-fullscreen {
  height: 100vh;
}
`,$S=`${QS}\
.theme-container .vp-project-home {
  padding-top: 0;
}

.vp-hero-info-wrapper{
  padding-top: var(--navbar-height);
}
`,eC=[`.vp-navbar`,`.vp-site-name`,`.vp-dropdown-title`,`.vp-dropdown-subtitle`,`.vp-navbar .auto-link`,`.vp-navbar .auto-link.route-link-active`,`.vp-action-link`,`.vp-color-mode-switch`,`.vp-appearance-button`,`.slimsearch-button`,`.DocSearch-Button`],tC=[`.vp-toggle-navbar-button .vp-top`,`.vp-toggle-navbar-button .vp-middle`,`.vp-toggle-navbar-button .vp-bottom`,`.vp-toggle-sidebar-button .icon`,`.vp-toggle-sidebar-button:before`,`.vp-toggle-sidebar-button:after`],nC=e=>e.replaceAll(`"`,`'`).replaceAll(`%`,`%25`).replaceAll(`#`,`%23`).replaceAll(`{`,`%7B`).replaceAll(`}`,`%7D`).replaceAll(`<`,`%3C`).replaceAll(`>`,`%3E`),rC=(e,t=``)=>`\
${eC.map(e=>`${t} .transparent-navbar ${e}`).join(`,`)} {
  color: ${e};
}
${tC.map(e=>`${t} .transparent-navbar ${e}`).join(`,`)} {
  background: ${e};
}

${t}.transparent-navbar .dropdown-wrapper .dropdown-title > .arrow {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='${nC(e)}' d='M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z'/%3E%3C/svg%3E");
}
`,iC=({type:e,threshold:t=50,light:n,dark:r}={})=>{let i=dd(),a=cd(),o=sd(),s=W(e===`all`?()=>!0:e===`homepage`?()=>i.value.home??a.value===o.value:()=>i.value.portfolio??i.value.layout===`Blog`),c=()=>{document.body.classList.toggle(`transparent-navbar`,window.scrollY<t&&s.value)};Yp((e===`homepage`?$S:QS)+(n?rC(n,``):``)+(r&&n!==r?rC(r,`[data-theme="dark"]`):``)),X(`scroll`,c),B(()=>{rp(a,c,{flush:`post`})})},aC={key:0,class:`hero-slide-controls`},oC={key:0,class:`hero-slide-panel`},sC=[`href`],cC={key:1,class:`hero-slide-panel-title`},lC={key:2,class:`hero-slide-panel-subtitle`},uC={class:`hero-slide-panel-body`},dC={key:3,class:`hero-slide-panel-credit`},fC=z({__name:`CustomHeroBackground`,setup(e){let t=dd(),n=W(()=>(t.value.heroSlides??[]).map(e=>({...e,image:e.image.startsWith(`http`)?e.image:Y(e.image)}))),r=P(0),i=P(t.value.heroInfoAutoOpen??!0),a=W(()=>n.value[r.value]??n.value[0]);return(e,t)=>{let n=V(`VPIcon`);return H(),Xa(Ba,null,[U(Zo,{name:`fade-in`,mode:`out-in`},{default:tr(()=>[a.value?(H(),Xa(`div`,{key:`${r.value}-${a.value.image}`,class:`custom-hero-mask-wrapper`},[no(`div`,{class:`vp-blog-mask custom-hero-mask`,style:xe({backgroundImage:`url(${a.value.image})`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`})},null,4)])):co(`v-if`,!0)]),_:1}),a.value?(H(),Xa(`div`,aC,[U(Zo,{name:`fade-in`},{default:tr(()=>[i.value?(H(),Xa(`div`,oC,[a.value.link?(H(),Xa(`a`,{key:0,href:a.value.link,target:`_self`,rel:`noopener noreferrer`,class:`hero-slide-panel-title`},Pe(a.value.panelTitle),9,sC)):(H(),Xa(`div`,cC,Pe(a.value.panelTitle),1)),t[1]||=no(`hr`,null,null,-1),a.value.panelSubtitle?(H(),Xa(`div`,lC,Pe(a.value.panelSubtitle),1)):co(`v-if`,!0),no(`div`,uC,Pe(a.value.panelBody),1),a.value.panelCredit?(H(),Xa(`div`,dC,Pe(a.value.panelCredit),1)):co(`v-if`,!0)])):co(`v-if`,!0)]),_:1}),no(`div`,{class:`hero-slide-info-toggle`,onClick:t[0]||=e=>i.value=!i.value},[U(n,{class:`hero-slide-info-icon`,icon:a.value.icon},null,8,[`icon`])]),co(` <button
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
    /> `)])):co(`v-if`,!0)],64)}}}),pC={key:0,class:`vp-blog-hero-title`},mC={key:1,class:`hitokoto`},hC={class:`hitokoto-text`},gC={key:0,class:`hitokoto-author`},_C=z({__name:`CustomHeroInfo`,props:{text:{}},setup(e){let t=dd();return(n,r)=>(H(),Xa(Ba,null,[e.text?(H(),Xa(`h1`,pC,Pe(e.text),1)):co(`v-if`,!0),mn(t).heroMessage?(H(),Xa(`div`,mC,[no(`p`,hC,[no(`span`,null,Pe(mn(t).heroMessage),1)]),mn(t).heroMessageAuthor?(H(),Xa(`p`,gC,Pe(mn(t).heroMessageAuthor),1)):co(`v-if`,!0)])):co(`v-if`,!0)],64))}}),vC=[`src`,`alt`],yC=[`src`,`alt`],bC={class:`vp-blog-hero-info`},xC=z({__name:`CustomHomePage`,setup(e){let t=dd(),n=W(()=>{let e=t.value.heroImage;return e?e.startsWith(`http`)?e:Y(e):null}),r=W(()=>{let e=t.value.heroImageDark;return e?e.startsWith(`http`)?e:Y(e):null}),i=W(()=>t.value.heroAlt??t.value.heroText??``);return(e,a)=>(H(),Xa(`main`,{id:`main-content`,class:Ee([`vp-page vp-blog-home custom-home-page`,{"hero-fullscreen":mn(t).heroFullScreen!==!1}])},[no(`div`,{class:Ee([`vp-blog-hero`,{"hero-fullscreen":mn(t).heroFullScreen!==!1}])},[U(fC),n.value?(H(),Xa(`img`,{key:0,class:Ee([`vp-blog-hero-image`,{light:r.value,"has-dark":r.value}]),src:n.value,alt:i.value,style:xe(mn(t).heroImageStyle)},null,14,vC)):co(`v-if`,!0),r.value?(H(),Xa(`img`,{key:1,class:`vp-blog-hero-image dark`,src:r.value,alt:i.value,style:xe(mn(t).heroImageStyle)},null,12,yC)):co(`v-if`,!0),no(`div`,bC,[U(_C,{text:mn(t).heroText??null},null,8,[`text`])])],2)],2))}}),SC=z({__name:`Layout`,setup(e){let t=dd();return(e,n)=>(H(),Za(mn(Sx),null,Si({_:2},[mn(t).home?{name:`default`,fn:tr(()=>[U(xC)]),key:`0`}:void 0]),1024))}}),CC={};function wC(e){let t=CC[e];if(t)return t;t=CC[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);t.push(n)}for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t[r]=`%`+(`0`+r.toString(16).toUpperCase()).slice(-2)}return t}function TC(e,t){typeof t!=`string`&&(t=TC.defaultChars);let n=wC(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(e){let t=``;for(let r=0,i=e.length;r<i;r+=3){let a=parseInt(e.slice(r+1,r+3),16);if(a<128){t+=n[a];continue}if((a&224)==192&&r+3<i){let n=parseInt(e.slice(r+4,r+6),16);if((n&192)==128){let e=a<<6&1984|n&63;e<128?t+=`��`:t+=String.fromCharCode(e),r+=3;continue}}if((a&240)==224&&r+6<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16);if((n&192)==128&&(i&192)==128){let e=a<<12&61440|n<<6&4032|i&63;e<2048||e>=55296&&e<=57343?t+=`���`:t+=String.fromCharCode(e),r+=6;continue}}if((a&248)==240&&r+9<i){let n=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),o=parseInt(e.slice(r+10,r+12),16);if((n&192)==128&&(i&192)==128&&(o&192)==128){let e=a<<18&1835008|n<<12&258048|i<<6&4032|o&63;e<65536||e>1114111?t+=`����`:(e-=65536,t+=String.fromCharCode(55296+(e>>10),56320+(e&1023))),r+=9;continue}}t+=`�`}return t})}TC.defaultChars=`;/?:@&=+$,#`,TC.componentChars=``;var EC={};function DC(e){let t=EC[e];if(t)return t;t=EC[e]=[];for(let e=0;e<128;e++){let n=String.fromCharCode(e);/^[0-9a-z]$/i.test(n)?t.push(n):t.push(`%`+(`0`+e.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function OC(e,t,n){typeof t!=`string`&&(n=t,t=OC.defaultChars),n===void 0&&(n=!0);let r=DC(t),i=``;for(let t=0,a=e.length;t<a;t++){let o=e.charCodeAt(t);if(n&&o===37&&t+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(t+1,t+3))){i+=e.slice(t,t+3),t+=2;continue}if(o<128){i+=r[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&t+1<a){let n=e.charCodeAt(t+1);if(n>=56320&&n<=57343){i+=encodeURIComponent(e[t]+e[t+1]),t++;continue}}i+=`%EF%BF%BD`;continue}i+=encodeURIComponent(e[t])}return i}OC.defaultChars=`;/?:@&=+$,-_.!~*'()#`,OC.componentChars=`-_.!~*'()`;function kC(e){let t=``;return t+=e.protocol||``,t+=e.slashes?`//`:``,t+=e.auth?e.auth+`@`:``,e.hostname&&e.hostname.indexOf(`:`)!==-1?t+=`[`+e.hostname+`]`:t+=e.hostname||``,t+=e.port?`:`+e.port:``,t+=e.pathname||``,t+=e.search||``,t+=e.hash||``,t}function AC(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var jC=/^([a-z0-9.+-]+:)/i,MC=/:[0-9]*$/,NC=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,PC=[`%`,`/`,`?`,`;`,`#`,`'`,`{`,`}`,`|`,`\\`,`^`,"`",`<`,`>`,`"`,"`",` `,`\r`,`
`,`	`],FC=[`/`,`?`,`#`],IC=255,LC=/^[+a-z0-9A-Z_-]{0,63}$/,RC=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,zC={javascript:!0,"javascript:":!0},BC={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function VC(e,t){if(e&&e instanceof AC)return e;let n=new AC;return n.parse(e,t),n}AC.prototype.parse=function(e,t){let n,r,i,a=e;if(a=a.trim(),!t&&e.split(`#`).length===1){let e=NC.exec(a);if(e)return this.pathname=e[1],e[2]&&(this.search=e[2]),this}let o=jC.exec(a);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,a=a.substr(o.length)),(t||o||a.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=a.substr(0,2)===`//`,i&&!(o&&zC[o])&&(a=a.substr(2),this.slashes=!0)),!zC[o]&&(i||o&&!BC[o])){let e=-1;for(let t=0;t<FC.length;t++)r=a.indexOf(FC[t]),r!==-1&&(e===-1||r<e)&&(e=r);let t,n;n=e===-1?a.lastIndexOf(`@`):a.lastIndexOf(`@`,e),n!==-1&&(t=a.slice(0,n),a=a.slice(n+1),this.auth=t),e=-1;for(let t=0;t<PC.length;t++)r=a.indexOf(PC[t]),r!==-1&&(e===-1||r<e)&&(e=r);e===-1&&(e=a.length),a[e-1]===`:`&&e--;let i=a.slice(0,e);a=a.slice(e),this.parseHost(i),this.hostname=this.hostname||``;let o=this.hostname[0]===`[`&&this.hostname[this.hostname.length-1]===`]`;if(!o){let e=this.hostname.split(/\./);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n&&!n.match(LC)){let r=``;for(let e=0,t=n.length;e<t;e++)n.charCodeAt(e)>127?r+=`x`:r+=n[e];if(!r.match(LC)){let r=e.slice(0,t),i=e.slice(t+1),o=n.match(RC);o&&(r.push(o[1]),i.unshift(o[2])),i.length&&(a=i.join(`.`)+a),this.hostname=r.join(`.`);break}}}}this.hostname.length>IC&&(this.hostname=``),o&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}let s=a.indexOf(`#`);s!==-1&&(this.hash=a.substr(s),a=a.slice(0,s));let c=a.indexOf(`?`);return c!==-1&&(this.search=a.substr(c),a=a.slice(0,c)),a&&(this.pathname=a),BC[n]&&this.hostname&&!this.pathname&&(this.pathname=``),this},AC.prototype.parseHost=function(e){let t=MC.exec(e);t&&(t=t[0],t!==`:`&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};var HC=c({decode:()=>TC,encode:()=>OC,format:()=>kC,parse:()=>VC}),UC=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,WC=/[\0-\x1F\x7F-\x9F]/,GC=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,KC=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,qC=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,JC=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,YC=c({Any:()=>UC,Cc:()=>WC,Cf:()=>GC,P:()=>KC,S:()=>qC,Z:()=>JC}),XC=new Uint16Array(`ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌`.split(``).map(e=>e.charCodeAt(0))),ZC=new Uint16Array(`Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢`.split(``).map(e=>e.charCodeAt(0))),QC=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),$C=String.fromCodePoint??function(e){let t=``;return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function ew(e){return e>=55296&&e<=57343||e>1114111?65533:QC.get(e)??e}var tw;(function(e){e[e.NUM=35]=`NUM`,e[e.SEMI=59]=`SEMI`,e[e.EQUALS=61]=`EQUALS`,e[e.ZERO=48]=`ZERO`,e[e.NINE=57]=`NINE`,e[e.LOWER_A=97]=`LOWER_A`,e[e.LOWER_F=102]=`LOWER_F`,e[e.LOWER_X=120]=`LOWER_X`,e[e.LOWER_Z=122]=`LOWER_Z`,e[e.UPPER_A=65]=`UPPER_A`,e[e.UPPER_F=70]=`UPPER_F`,e[e.UPPER_Z=90]=`UPPER_Z`})(tw||={});var nw=32,rw;(function(e){e[e.VALUE_LENGTH=49152]=`VALUE_LENGTH`,e[e.BRANCH_LENGTH=16256]=`BRANCH_LENGTH`,e[e.JUMP_TABLE=127]=`JUMP_TABLE`})(rw||={});function iw(e){return e>=tw.ZERO&&e<=tw.NINE}function aw(e){return e>=tw.UPPER_A&&e<=tw.UPPER_F||e>=tw.LOWER_A&&e<=tw.LOWER_F}function ow(e){return e>=tw.UPPER_A&&e<=tw.UPPER_Z||e>=tw.LOWER_A&&e<=tw.LOWER_Z||iw(e)}function sw(e){return e===tw.EQUALS||ow(e)}var cw;(function(e){e[e.EntityStart=0]=`EntityStart`,e[e.NumericStart=1]=`NumericStart`,e[e.NumericDecimal=2]=`NumericDecimal`,e[e.NumericHex=3]=`NumericHex`,e[e.NamedEntity=4]=`NamedEntity`})(cw||={});var lw;(function(e){e[e.Legacy=0]=`Legacy`,e[e.Strict=1]=`Strict`,e[e.Attribute=2]=`Attribute`})(lw||={});var uw=class{constructor(e,t,n){this.decodeTree=e,this.emitCodePoint=t,this.errors=n,this.state=cw.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=lw.Strict}startEntity(e){this.decodeMode=e,this.state=cw.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case cw.EntityStart:return e.charCodeAt(t)===tw.NUM?(this.state=cw.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=cw.NamedEntity,this.stateNamedEntity(e,t));case cw.NumericStart:return this.stateNumericStart(e,t);case cw.NumericDecimal:return this.stateNumericDecimal(e,t);case cw.NumericHex:return this.stateNumericHex(e,t);case cw.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|nw)===tw.LOWER_X?(this.state=cw.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=cw.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,n,r){if(t!==n){let i=n-t;this.result=this.result*r**+i+parseInt(e.substr(t,i),r),this.consumed+=i}}stateNumericHex(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(iw(r)||aw(r))t+=1;else return this.addToNumericResult(e,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(e,n,t,16),-1}stateNumericDecimal(e,t){let n=t;for(;t<e.length;){let r=e.charCodeAt(t);if(iw(r))t+=1;else return this.addToNumericResult(e,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(e,n,t,10),-1}emitNumericEntity(e,t){var n;if(this.consumed<=t)return(n=this.errors)==null||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===tw.SEMI)this.consumed+=1;else if(this.decodeMode===lw.Strict)return 0;return this.emitCodePoint(ew(this.result),this.consumed),this.errors&&(e!==tw.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){let{decodeTree:n}=this,r=n[this.treeIndex],i=(r&rw.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){let a=e.charCodeAt(t);if(this.treeIndex=fw(n,r,this.treeIndex+Math.max(1,i),a),this.treeIndex<0)return this.result===0||this.decodeMode===lw.Attribute&&(i===0||sw(a))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&rw.VALUE_LENGTH)>>14,i!==0){if(a===tw.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==lw.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;let{result:t,decodeTree:n}=this,r=(n[t]&rw.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(e=this.errors)==null||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,n){let{decodeTree:r}=this;return this.emitCodePoint(t===1?r[e]&~rw.VALUE_LENGTH:r[e+1],n),t===3&&this.emitCodePoint(r[e+2],n),n}end(){var e;switch(this.state){case cw.NamedEntity:return this.result!==0&&(this.decodeMode!==lw.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case cw.NumericDecimal:return this.emitNumericEntity(0,2);case cw.NumericHex:return this.emitNumericEntity(0,3);case cw.NumericStart:return(e=this.errors)==null||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case cw.EntityStart:return 0}}};function dw(e){let t=``,n=new uw(e,e=>t+=$C(e));return function(e,r){let i=0,a=0;for(;(a=e.indexOf(`&`,a))>=0;){t+=e.slice(i,a),n.startEntity(r);let o=n.write(e,a+1);if(o<0){i=a+n.end();break}i=a+o,a=o===0?i+1:i}let o=t+e.slice(i);return t=``,o}}function fw(e,t,n,r){let i=(t&rw.BRANCH_LENGTH)>>7,a=t&rw.JUMP_TABLE;if(i===0)return a!==0&&r===a?n:-1;if(a){let t=r-a;return t<0||t>=i?-1:e[n+t]-1}let o=n,s=o+i-1;for(;o<=s;){let t=o+s>>>1,n=e[t];if(n<r)o=t+1;else if(n>r)s=t-1;else return e[t+i]}return-1}var pw=dw(XC);dw(ZC);function mw(e,t=lw.Legacy){return pw(e,t)}function hw(e){return pw(e,lw.Strict)}var gw=c({arrayReplaceAt:()=>Sw,asciiTrim:()=>Ww,assign:()=>xw,escapeHtml:()=>Fw,escapeRE:()=>Lw,fromCodePoint:()=>ww,has:()=>bw,isMdAsciiPunct:()=>Vw,isPunctChar:()=>zw,isPunctCharCode:()=>Bw,isSpace:()=>$,isString:()=>vw,isValidEntityCode:()=>Cw,isWhiteSpace:()=>Rw,lib:()=>Gw,normalizeReference:()=>Hw,unescapeAll:()=>Aw,unescapeMd:()=>kw});function _w(e){return Object.prototype.toString.call(e)}function vw(e){return _w(e)===`[object String]`}var yw=Object.prototype.hasOwnProperty;function bw(e,t){return yw.call(e,t)}function xw(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!=`object`)throw TypeError(t+`must be object`);Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function Sw(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Cw(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)==65535||(e&65535)==65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function ww(e){if(e>65535){e-=65536;let t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}var Tw=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Ew=RegExp(Tw.source+`|&([a-z#][a-z0-9]{1,31});`,`gi`),Dw=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Ow(e,t){if(t.charCodeAt(0)===35&&Dw.test(t)){let n=t[1].toLowerCase()===`x`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Cw(n)?ww(n):e}let n=mw(e);return n===e?e:n}function kw(e){return e.indexOf(`\\`)<0?e:e.replace(Tw,`$1`)}function Aw(e){return e.indexOf(`\\`)<0&&e.indexOf(`&`)<0?e:e.replace(Ew,function(e,t,n){return t||Ow(e,n)})}var jw=/[&<>"]/,Mw=/[&<>"]/g,Nw={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function Pw(e){return Nw[e]}function Fw(e){return jw.test(e)?e.replace(Mw,Pw):e}var Iw=/[.?*+^$[\]\\(){}|-]/g;function Lw(e){return e.replace(Iw,`\\$&`)}function $(e){switch(e){case 9:case 32:return!0}return!1}function Rw(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function zw(e){return KC.test(e)||qC.test(e)}function Bw(e){return zw(ww(e))}function Vw(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Hw(e){return e=e.trim().replace(/\s+/g,` `),e.toLowerCase().toUpperCase()}function Uw(e){return e===32||e===9||e===10||e===13}function Ww(e){let t=0;for(;t<e.length&&Uw(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&Uw(e.charCodeAt(n));n--);return e.slice(t,n+1)}var Gw={mdurl:HC,ucmicro:YC};function Kw(e,t,n){let r,i,a,o,s=e.posMax,c=e.pos;for(e.pos=t+1,r=1;e.pos<s;){if(a=e.src.charCodeAt(e.pos),a===93&&(r--,r===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),a===91){if(o===e.pos-1)r++;else if(n)return e.pos=c,-1}}let l=-1;return i&&(l=e.pos),e.pos=c,l}function qw(e,t,n){let r,i=t,a={ok:!1,pos:0,str:``};if(e.charCodeAt(i)===60){for(i++;i<n;){if(r=e.charCodeAt(i),r===10||r===60)return a;if(r===62)return a.pos=i+1,a.str=Aw(e.slice(t+1,i)),a.ok=!0,a;if(r===92&&i+1<n){i+=2;continue}i++}return a}let o=0;for(;i<n&&(r=e.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<n){if(e.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return a;if(r===41){if(o===0)break;o--}i++}return t===i||o!==0?a:(a.str=Aw(e.slice(t,i)),a.pos=i,a.ok=!0,a)}function Jw(e,t,n,r){let i,a=t,o={ok:!1,can_continue:!1,pos:0,str:``,marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(a>=n)return o;let r=e.charCodeAt(a);if(r!==34&&r!==39&&r!==40)return o;t++,a++,r===40&&(r=41),o.marker=r}for(;a<n;){if(i=e.charCodeAt(a),i===o.marker)return o.pos=a+1,o.str+=Aw(e.slice(t,a)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&a+1<n&&a++,a++}return o.can_continue=!0,o.str+=Aw(e.slice(t,a)),o}var Yw=c({parseLinkDestination:()=>qw,parseLinkLabel:()=>Kw,parseLinkTitle:()=>Jw}),Xw={};Xw.code_inline=function(e,t,n,r,i){let a=e[t];return`<code`+i.renderAttrs(a)+`>`+Fw(a.content)+`</code>`},Xw.code_block=function(e,t,n,r,i){let a=e[t];return`<pre`+i.renderAttrs(a)+`><code>`+Fw(e[t].content)+`</code></pre>
`},Xw.fence=function(e,t,n,r,i){let a=e[t],o=a.info?Aw(a.info).trim():``,s=``,c=``;if(o){let e=o.split(/(\s+)/g);s=e[0],c=e.slice(2).join(``)}let l;if(l=n.highlight&&n.highlight(a.content,s,c)||Fw(a.content),l.indexOf(`<pre`)===0)return l+`
`;if(o){let e=a.attrIndex(`class`),t=a.attrs?a.attrs.slice():[];e<0?t.push([`class`,n.langPrefix+s]):(t[e]=t[e].slice(),t[e][1]+=` `+n.langPrefix+s);let r={attrs:t};return`<pre><code${i.renderAttrs(r)}>${l}</code></pre>\n`}return`<pre><code${i.renderAttrs(a)}>${l}</code></pre>\n`},Xw.image=function(e,t,n,r,i){let a=e[t];return a.attrs[a.attrIndex(`alt`)][1]=i.renderInlineAsText(a.children,n,r),i.renderToken(e,t,n)},Xw.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`},Xw.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`},Xw.text=function(e,t){return Fw(e[t].content)},Xw.html_block=function(e,t){return e[t].content},Xw.html_inline=function(e,t){return e[t].content};function Zw(){this.rules=xw({},Xw)}Zw.prototype.renderAttrs=function(e){let t,n,r;if(!e.attrs)return``;for(r=``,t=0,n=e.attrs.length;t<n;t++)r+=` `+Fw(e.attrs[t][0])+`="`+Fw(e.attrs[t][1])+`"`;return r},Zw.prototype.renderToken=function(e,t,n){let r=e[t],i=``;if(r.hidden)return``;r.block&&r.nesting!==-1&&t&&e[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?`</`:`<`)+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=` /`);let a=!1;if(r.block&&(a=!0,r.nesting===1&&t+1<e.length)){let n=e[t+1];(n.type===`inline`||n.hidden||n.nesting===-1&&n.tag===r.tag)&&(a=!1)}return i+=a?`>
`:`>`,i},Zw.prototype.renderInline=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;i[o]===void 0?r+=this.renderToken(e,a,t):r+=i[o](e,a,t,n,this)}return r},Zw.prototype.renderInlineAsText=function(e,t,n){let r=``;for(let i=0,a=e.length;i<a;i++)switch(e[i].type){case`text`:r+=e[i].content;break;case`image`:r+=this.renderInlineAsText(e[i].children,t,n);break;case`html_inline`:case`html_block`:r+=e[i].content;break;case`softbreak`:case`hardbreak`:r+=`
`;break;default:}return r},Zw.prototype.render=function(e,t,n){let r=``,i=this.rules;for(let a=0,o=e.length;a<o;a++){let o=e[a].type;o===`inline`?r+=this.renderInline(e[a].children,t,n):i[o]===void 0?r+=this.renderToken(e,a,t,n):r+=i[o](e,a,t,n,this)}return r};function Qw(){this.__rules__=[],this.__cache__=null}Qw.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1},Qw.prototype.__compile__=function(){let e=this,t=[``];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){t.indexOf(e)<0&&t.push(e)})}),e.__cache__={},t.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})},Qw.prototype.at=function(e,t,n){let r=this.__find__(e),i=n||{};if(r===-1)throw Error(`Parser rule not found: `+e);this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},Qw.prototype.before=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},Qw.prototype.after=function(e,t,n,r){let i=this.__find__(e),a=r||{};if(i===-1)throw Error(`Parser rule not found: `+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},Qw.prototype.push=function(e,t,n){let r=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},Qw.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!0,n.push(e)},this),this.__cache__=null,n},Qw.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,t)},Qw.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);let n=[];return e.forEach(function(e){let r=this.__find__(e);if(r<0){if(t)return;throw Error(`Rules manager: invalid rule name `+e)}this.__rules__[r].enabled=!1,n.push(e)},this),this.__cache__=null,n},Qw.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function $w(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content=``,this.markup=``,this.info=``,this.meta=null,this.block=!1,this.hidden=!1}$w.prototype.attrIndex=function(e){if(!this.attrs)return-1;let t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===e)return n;return-1},$w.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},$w.prototype.attrSet=function(e,t){let n=this.attrIndex(e),r=[e,t];n<0?this.attrPush(r):this.attrs[n]=r},$w.prototype.attrGet=function(e){let t=this.attrIndex(e),n=null;return t>=0&&(n=this.attrs[t][1]),n},$w.prototype.attrJoin=function(e,t){let n=this.attrIndex(e);n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+` `+t};function eT(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}eT.prototype.Token=$w;var tT=/\r\n?|\n/g,nT=/\0/g;function rT(e){let t;t=e.src.replace(tT,`
`),t=t.replace(nT,`�`),e.src=t}function iT(e){let t;e.inlineMode?(t=new e.Token(`inline`,``,0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function aT(e){let t=e.tokens;for(let n=0,r=t.length;n<r;n++){let r=t[n];r.type===`inline`&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function oT(e){return/^<a[>\s]/i.test(e)}function sT(e){return/^<\/a\s*>/i.test(e)}function cT(e){let t=e.tokens;if(e.md.options.linkify)for(let n=0,r=t.length;n<r;n++){if(t[n].type!==`inline`||!e.md.linkify.pretest(t[n].content))continue;let r=t[n].children,i=0;for(let a=r.length-1;a>=0;a--){let o=r[a];if(o.type===`link_close`){for(a--;r[a].level!==o.level&&r[a].type!==`link_open`;)a--;continue}if(o.type===`html_inline`&&(oT(o.content)&&i>0&&i--,sT(o.content)&&i++),!(i>0)&&o.type===`text`&&e.md.linkify.test(o.content)){let i=o.content,s=e.md.linkify.match(i),c=[],l=o.level,u=0;s.length>0&&s[0].index===0&&a>0&&r[a-1].type===`text_special`&&(s=s.slice(1));for(let t=0;t<s.length;t++){let n=s[t].url,r=e.md.normalizeLink(n);if(!e.md.validateLink(r))continue;let a=s[t].text;a=s[t].schema?s[t].schema===`mailto:`&&!/^mailto:/i.test(a)?e.md.normalizeLinkText(`mailto:`+a).replace(/^mailto:/,``):e.md.normalizeLinkText(a):e.md.normalizeLinkText(`http://`+a).replace(/^http:\/\//,``);let o=s[t].index;if(o>u){let t=new e.Token(`text`,``,0);t.content=i.slice(u,o),t.level=l,c.push(t)}let d=new e.Token(`link_open`,`a`,1);d.attrs=[[`href`,r]],d.level=l++,d.markup=`linkify`,d.info=`auto`,c.push(d);let f=new e.Token(`text`,``,0);f.content=a,f.level=l,c.push(f);let p=new e.Token(`link_close`,`a`,-1);p.level=--l,p.markup=`linkify`,p.info=`auto`,c.push(p),u=s[t].lastIndex}if(u<i.length){let t=new e.Token(`text`,``,0);t.content=i.slice(u),t.level=l,c.push(t)}t[n].children=r=Sw(r,a,c)}}}}var lT=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,uT=/\((c|tm|r)\)/i,dT=/\((c|tm|r)\)/gi,fT={c:`©`,r:`®`,tm:`™`};function pT(e,t){return fT[t.toLowerCase()]}function mT(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&(r.content=r.content.replace(dT,pT)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function hT(e){let t=0;for(let n=e.length-1;n>=0;n--){let r=e[n];r.type===`text`&&!t&&lT.test(r.content)&&(r.content=r.content.replace(/\+-/g,`±`).replace(/\.{2,}/g,`…`).replace(/([?!])…/g,`$1..`).replace(/([?!]){4,}/g,`$1$1$1`).replace(/,{2,}/g,`,`).replace(/(^|[^-])---(?=[^-]|$)/gm,`$1—`).replace(/(^|\s)--(?=\s|$)/gm,`$1–`).replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,`$1–`)),r.type===`link_open`&&r.info===`auto`&&t--,r.type===`link_close`&&r.info===`auto`&&t++}}function gT(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type===`inline`&&(uT.test(e.tokens[t].content)&&mT(e.tokens[t].children),lT.test(e.tokens[t].content)&&hT(e.tokens[t].children))}var _T=/['"]/,vT=/['"]/g,yT=`’`;function bT(e,t,n,r){e[t]||(e[t]=[]),e[t].push({pos:n,ch:r})}function xT(e,t){let n=``,r=0;t.sort((e,t)=>e.pos-t.pos);for(let i=0;i<t.length;i++){let a=t[i];n+=e.slice(r,a.pos)+a.ch,r=a.pos+1}return n+e.slice(r)}function ST(e,t){let n,r=[],i={};for(let a=0;a<e.length;a++){let o=e[a],s=e[a].level;for(n=r.length-1;n>=0&&!(r[n].level<=s);n--);if(r.length=n+1,o.type!==`text`)continue;let c=o.content,l=0,u=c.length;OUTER:for(;l<u;){vT.lastIndex=l;let o=vT.exec(c);if(!o)break;let d=!0,f=!0;l=o.index+1;let p=o[0]===`'`,m=32;if(o.index-1>=0)m=c.charCodeAt(o.index-1);else for(n=a-1;n>=0&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n--)if(e[n].content){m=e[n].content.charCodeAt(e[n].content.length-1);break}let h=32;if(l<u)h=c.charCodeAt(l);else for(n=a+1;n<e.length&&!(e[n].type===`softbreak`||e[n].type===`hardbreak`);n++)if(e[n].content){h=e[n].content.charCodeAt(0);break}let g=Vw(m)||Bw(m),_=Vw(h)||Bw(h),v=Rw(m),y=Rw(h);if(y?d=!1:_&&(v||g||(d=!1)),v?f=!1:g&&(y||_||(f=!1)),h===34&&o[0]===`"`&&m>=48&&m<=57&&(f=d=!1),d&&f&&(d=g,f=_),!d&&!f){p&&bT(i,a,o.index,yT);continue}if(f)for(n=r.length-1;n>=0;n--){let e=r[n];if(r[n].level<s)break;if(e.single===p&&r[n].level===s){e=r[n];let s,c;p?(s=t.md.options.quotes[2],c=t.md.options.quotes[3]):(s=t.md.options.quotes[0],c=t.md.options.quotes[1]),bT(i,a,o.index,c),bT(i,e.token,e.pos,s),r.length=n;continue OUTER}}d?r.push({token:a,pos:o.index,single:p,level:s}):f&&p&&bT(i,a,o.index,yT)}}Object.keys(i).forEach(function(t){e[t].content=xT(e[t].content,i[t])})}function CT(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!==`inline`||!_T.test(e.tokens[t].content)||ST(e.tokens[t].children,e)}function wT(e){let t,n,r=e.tokens,i=r.length;for(let e=0;e<i;e++){if(r[e].type!==`inline`)continue;let i=r[e].children,a=i.length;for(t=0;t<a;t++)i[t].type===`text_special`&&(i[t].type=`text`);for(t=n=0;t<a;t++)i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}}var TT=[[`normalize`,rT],[`block`,iT],[`inline`,aT],[`linkify`,cT],[`replacements`,gT],[`smartquotes`,CT],[`text_join`,wT]];function ET(){this.ruler=new Qw;for(let e=0;e<TT.length;e++)this.ruler.push(TT[e][0],TT[e][1])}ET.prototype.process=function(e){let t=this.ruler.getRules(``);for(let n=0,r=t.length;n<r;n++)t[n](e)},ET.prototype.State=eT;function DT(e,t,n,r){this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType=`root`,this.level=0;let i=this.src;for(let e=0,t=0,n=0,r=0,a=i.length,o=!1;t<a;t++){let s=i.charCodeAt(t);if(!o)if($(s)){n++,s===9?r+=4-r%4:r++;continue}else o=!0;(s===10||t===a-1)&&(s!==10&&t++,this.bMarks.push(e),this.eMarks.push(t),this.tShift.push(n),this.sCount.push(r),this.bsCount.push(0),o=!1,n=0,r=0,e=t+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}DT.prototype.push=function(e,t,n){let r=new $w(e,t,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r},DT.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},DT.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},DT.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t&&$(this.src.charCodeAt(e));e++);return e},DT.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!$(this.src.charCodeAt(--e)))return e+1;return e},DT.prototype.skipChars=function(e,t){for(let n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},DT.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e;for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1;return e},DT.prototype.getLines=function(e,t,n,r){if(e>=t)return``;let i=Array(t-e);for(let a=0,o=e;o<t;o++,a++){let e=0,s=this.bMarks[o],c=s,l;for(l=o+1<t||r?this.eMarks[o]+1:this.eMarks[o];c<l&&e<n;){let t=this.src.charCodeAt(c);if($(t))t===9?e+=4-(e+this.bsCount[o])%4:e++;else if(c-s<this.tShift[o])e++;else break;c++}e>n?i[a]=Array(e-n+1).join(` `)+this.src.slice(c,l):i[a]=this.src.slice(c,l)}return i.join(``)},DT.prototype.Token=$w;var OT=65536;function kT(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];return e.src.slice(n,r)}function AT(e){let t=[],n=e.length,r=0,i=e.charCodeAt(r),a=!1,o=0,s=``;for(;r<n;)i===124&&(a?(s+=e.substring(o,r-1),o=r):(t.push(s+e.substring(o,r)),s=``,o=r+1)),a=i===92,r++,i=e.charCodeAt(r);return t.push(s+e.substring(o)),t}function jT(e,t,n,r){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let a=e.bMarks[i]+e.tShift[i];if(a>=e.eMarks[i])return!1;let o=e.src.charCodeAt(a++);if(o!==124&&o!==45&&o!==58||a>=e.eMarks[i])return!1;let s=e.src.charCodeAt(a++);if(s!==124&&s!==45&&s!==58&&!$(s)||o===45&&$(s))return!1;for(;a<e.eMarks[i];){let t=e.src.charCodeAt(a);if(t!==124&&t!==45&&t!==58&&!$(t))return!1;a++}let c=kT(e,t+1),l=c.split(`|`),u=[];for(let e=0;e<l.length;e++){let t=l[e].trim();if(!t){if(e===0||e===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(t))return!1;t.charCodeAt(t.length-1)===58?u.push(t.charCodeAt(0)===58?`center`:`right`):t.charCodeAt(0)===58?u.push(`left`):u.push(``)}if(c=kT(e,t).trim(),c.indexOf(`|`)===-1||e.sCount[t]-e.blkIndent>=4)return!1;l=AT(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop();let d=l.length;if(d===0||d!==u.length)return!1;if(r)return!0;let f=e.parentType;e.parentType=`table`;let p=e.md.block.ruler.getRules(`blockquote`),m=e.push(`table_open`,`table`,1),h=[t,0];m.map=h;let g=e.push(`thead_open`,`thead`,1);g.map=[t,t+1];let _=e.push(`tr_open`,`tr`,1);_.map=[t,t+1];for(let t=0;t<l.length;t++){let n=e.push(`th_open`,`th`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t].trim(),r.children=[],e.push(`th_close`,`th`,-1)}e.push(`tr_close`,`tr`,-1),e.push(`thead_close`,`thead`,-1);let v,y=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let r=!1;for(let t=0,a=p.length;t<a;t++)if(p[t](e,i,n,!0)){r=!0;break}if(r||(c=kT(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(l=AT(c),l.length&&l[0]===``&&l.shift(),l.length&&l[l.length-1]===``&&l.pop(),y+=d-l.length,y>OT))break;if(i===t+2){let n=e.push(`tbody_open`,`tbody`,1);n.map=v=[t+2,0]}let a=e.push(`tr_open`,`tr`,1);a.map=[i,i+1];for(let t=0;t<d;t++){let n=e.push(`td_open`,`td`,1);u[t]&&(n.attrs=[[`style`,`text-align:`+u[t]]]);let r=e.push(`inline`,``,0);r.content=l[t]?l[t].trim():``,r.children=[],e.push(`td_close`,`td`,-1)}e.push(`tr_close`,`tr`,-1)}return v&&(e.push(`tbody_close`,`tbody`,-1),v[1]=i),e.push(`table_close`,`table`,-1),h[1]=i,e.parentType=f,e.line=i,!0}function MT(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let r=t+1,i=r;for(;r<n;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,i=r;continue}break}e.line=i;let a=e.push(`code_block`,`code`,0);return a.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,a.map=[t,e.line],!0}function NT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>a)return!1;let o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;let l=e.src.slice(s,i),u=e.src.slice(i,a);if(o===96&&u.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let d=t,f=!1;for(;d++,!(d>=n||(i=s=e.bMarks[d]+e.tShift[d],a=e.eMarks[d],i<a&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[d]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<a)))){f=!0;break}c=e.sCount[t],e.line=d+ +!!f;let p=e.push(`fence`,`code`,0);return p.info=u,p.content=e.getLines(t+1,d,c,!0),p.markup=l,p.map=[t,e.line],!0}function PT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(r)return!0;let s=[],c=[],l=[],u=[],d=e.md.block.ruler.getRules(`blockquote`),f=e.parentType;e.parentType=`blockquote`;let p=!1,m;for(m=t;m<n;m++){let t=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],a=e.eMarks[m],i>=a)break;if(e.src.charCodeAt(i++)===62&&!t){let t=e.sCount[m]+1,n,r;e.src.charCodeAt(i)===32?(i++,t++,r=!1,n=!0):e.src.charCodeAt(i)===9?(n=!0,(e.bsCount[m]+t)%4==3?(i++,t++,r=!1):r=!0):n=!1;let o=t;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<a;){let t=e.src.charCodeAt(i);if($(t))t===9?o+=4-(o+e.bsCount[m]+ +!!r)%4:o++;else break;i++}p=i>=a,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+ +!!n,l.push(e.sCount[m]),e.sCount[m]=o-t,u.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let r=!1;for(let t=0,i=d.length;t<i;t++)if(d[t](e,m,n,!0)){r=!0;break}if(r){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),u.push(e.tShift[m]),l.push(e.sCount[m]),e.sCount[m]=-1}let h=e.blkIndent;e.blkIndent=0;let g=e.push(`blockquote_open`,`blockquote`,1);g.markup=`>`;let _=[t,0];g.map=_,e.md.block.tokenize(e,t,m);let v=e.push(`blockquote_close`,`blockquote`,-1);v.markup=`>`,e.lineMax=o,e.parentType=f,_[1]=e.line;for(let n=0;n<u.length;n++)e.bMarks[n+t]=s[n],e.tShift[n+t]=u[n],e.sCount[n+t]=l[n],e.bsCount[n+t]=c[n];return e.blkIndent=h,!0}function FT(e,t,n,r){let i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let a=e.bMarks[t]+e.tShift[t],o=e.src.charCodeAt(a++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;a<i;){let t=e.src.charCodeAt(a++);if(t!==o&&!$(t))return!1;t===o&&s++}if(s<3)return!1;if(r)return!0;e.line=t+1;let c=e.push(`hr`,`hr`,0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function IT(e,t){let n=e.eMarks[t],r=e.bMarks[t]+e.tShift[t],i=e.src.charCodeAt(r++);return i!==42&&i!==45&&i!==43||r<n&&!$(e.src.charCodeAt(r))?-1:r}function LT(e,t){let n=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],i=n;if(i+1>=r)return-1;let a=e.src.charCodeAt(i++);if(a<48||a>57)return-1;for(;;){if(i>=r)return-1;if(a=e.src.charCodeAt(i++),a>=48&&a<=57){if(i-n>=10)return-1;continue}if(a===41||a===46)break;return-1}return i<r&&(a=e.src.charCodeAt(i),!$(a))?-1:i}function RT(e,t){let n=e.level+2;for(let r=t+2,i=e.tokens.length-2;r<i;r++)e.tokens[r].level===n&&e.tokens[r].type===`paragraph_open`&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function zT(e,t,n,r){let i,a,o,s,c=t,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let u=!1;r&&e.parentType===`paragraph`&&e.sCount[c]>=e.blkIndent&&(u=!0);let d,f,p;if((p=LT(e,c))>=0){if(d=!0,o=e.bMarks[c]+e.tShift[c],f=Number(e.src.slice(o,p-1)),u&&f!==1)return!1}else if((p=IT(e,c))>=0)d=!1;else return!1;if(u&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(r)return!0;let m=e.src.charCodeAt(p-1),h=e.tokens.length;d?(s=e.push(`ordered_list_open`,`ol`,1),f!==1&&(s.attrs=[[`start`,f]])):s=e.push(`bullet_list_open`,`ul`,1);let g=[c,0];s.map=g,s.markup=String.fromCharCode(m);let _=!1,v=e.md.block.ruler.getRules(`list`),y=e.parentType;for(e.parentType=`list`;c<n;){a=p,i=e.eMarks[c];let t=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]),r=t;for(;a<i;){let t=e.src.charCodeAt(a);if(t===9)r+=4-(r+e.bsCount[c])%4;else if(t===32)r++;else break;a++}let u=a,f;f=u>=i?1:r-t,f>4&&(f=1);let h=t+f;s=e.push(`list_item_open`,`li`,1),s.markup=String.fromCharCode(m);let g=[c,0];s.map=g,d&&(s.info=e.src.slice(o,p-1));let y=e.tight,b=e.tShift[c],x=e.sCount[c],S=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=h,e.tight=!0,e.tShift[c]=u-e.bMarks[c],e.sCount[c]=r,u>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||_)&&(l=!1),_=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=S,e.tShift[c]=b,e.sCount[c]=x,e.tight=y,s=e.push(`list_item_close`,`li`,-1),s.markup=String.fromCharCode(m),c=e.line,g[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let C=!1;for(let t=0,r=v.length;t<r;t++)if(v[t](e,c,n,!0)){C=!0;break}if(C)break;if(d){if(p=LT(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=IT(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return s=d?e.push(`ordered_list_close`,`ol`,-1):e.push(`bullet_list_close`,`ul`,-1),s.markup=String.fromCharCode(m),g[1]=c,e.line=c,e.parentType=y,l&&RT(e,h),!0}function BT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(t){let n=e.lineMax;if(t>=n||e.isEmpty(t))return null;let r=!1;if(e.sCount[t]-e.blkIndent>3&&(r=!0),e.sCount[t]<0&&(r=!0),!r){let r=e.md.block.ruler.getRules(`reference`),i=e.parentType;e.parentType=`reference`;let a=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,t,n,!0)){a=!0;break}if(e.parentType=i,a)return null}let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];return e.src.slice(i,a+1)}let c=e.src.slice(i,a+1);a=c.length;let l=-1;for(i=1;i<a;i++){let e=c.charCodeAt(i);if(e===91)return!1;if(e===93){l=i;break}else if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(e===92&&(i++,i<a&&c.charCodeAt(i)===10)){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(i=l+2;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!$(e))break}let u=e.md.helpers.parseLinkDestination(c,i,a);if(!u.ok)return!1;let d=e.md.normalizeLink(u.str);if(!e.md.validateLink(d))return!1;i=u.pos;let f=i,p=o,m=i;for(;i<a;i++){let e=c.charCodeAt(i);if(e===10){let e=s(o);e!==null&&(c+=e,a=c.length,o++)}else if(!$(e))break}let h=e.md.helpers.parseLinkTitle(c,i,a);for(;h.can_continue;){let t=s(o);if(t===null)break;c+=t,i=a,a=c.length,o++,h=e.md.helpers.parseLinkTitle(c,i,a,h)}let g;for(i<a&&m!==i&&h.ok?(g=h.str,i=h.pos):(g=``,i=f,o=p);i<a&&$(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10&&g)for(g=``,i=f,o=p;i<a&&$(c.charCodeAt(i));)i++;if(i<a&&c.charCodeAt(i)!==10)return!1;let _=Hw(c.slice(1,l));return _?r?!0:(e.env.references===void 0&&(e.env.references={}),e.env.references[_]===void 0&&(e.env.references[_]={title:g,href:d}),e.line=o,!0):!1}var VT=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),HT=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)`),UT=RegExp(`^(?:<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>|<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>)`),WT=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[RegExp(`^</?(`+VT.join(`|`)+`)(?=(\\s|/?>|$))`,`i`),/^$/,!0],[RegExp(UT.source+`\\s*$`),/^$/,!1]];function GT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,a),s=0;for(;s<WT.length&&!WT[s][0].test(o);s++);if(s===WT.length)return!1;if(r)return WT[s][2];let c=t+1,l=WT[s][1].test(``);if(!WT[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(l||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],a=e.eMarks[c],o=e.src.slice(i,a),WT[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;let u=e.push(`html_block`,``,0);return u.map=[t,c],u.content=e.getLines(t,c,e.blkIndent,!0),!0}function KT(e,t,n,r){let i=e.bMarks[t]+e.tShift[t],a=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=a)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<a&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<a&&!$(o))return!1;if(r)return!0;a=e.skipSpacesBack(a,i);let c=e.skipCharsBack(a,35,i);c>i&&$(e.src.charCodeAt(c-1))&&(a=c),e.line=t+1;let l=e.push(`heading_open`,`h`+String(s),1);l.markup=`########`.slice(0,s),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=Ww(e.src.slice(i,a)),u.map=[t,e.line],u.children=[];let d=e.push(`heading_close`,`h`+String(s),-1);return d.markup=`########`.slice(0,s),!0}function qT(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`);if(e.sCount[t]-e.blkIndent>=4)return!1;let i=e.parentType;e.parentType=`paragraph`;let a=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let t=e.bMarks[s]+e.tShift[s],n=e.eMarks[s];if(t<n&&(o=e.src.charCodeAt(t),(o===45||o===61)&&(t=e.skipChars(t,o),t=e.skipSpaces(t),t>=n))){a=o===61?1:2;break}}if(e.sCount[s]<0)continue;let t=!1;for(let i=0,a=r.length;i<a;i++)if(r[i](e,s,n,!0)){t=!0;break}if(t)break}if(!a)return e.parentType=i,!1;let c=Ww(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;let l=e.push(`heading_open`,`h`+String(a),1);l.markup=String.fromCharCode(o),l.map=[t,e.line];let u=e.push(`inline`,``,0);u.content=c,u.map=[t,e.line-1],u.children=[];let d=e.push(`heading_close`,`h`+String(a),-1);return d.markup=String.fromCharCode(o),e.parentType=i,!0}function JT(e,t,n){let r=e.md.block.ruler.getRules(`paragraph`),i=e.parentType,a=t+1;for(e.parentType=`paragraph`;a<n&&!e.isEmpty(a);a++){if(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)continue;let t=!1;for(let i=0,o=r.length;i<o;i++)if(r[i](e,a,n,!0)){t=!0;break}if(t)break}let o=Ww(e.getLines(t,a,e.blkIndent,!1));e.line=a;let s=e.push(`paragraph_open`,`p`,1);s.map=[t,e.line];let c=e.push(`inline`,``,0);return c.content=o,c.map=[t,e.line],c.children=[],e.push(`paragraph_close`,`p`,-1),e.parentType=i,!0}var YT=[[`table`,jT,[`paragraph`,`reference`]],[`code`,MT],[`fence`,NT,[`paragraph`,`reference`,`blockquote`,`list`]],[`blockquote`,PT,[`paragraph`,`reference`,`blockquote`,`list`]],[`hr`,FT,[`paragraph`,`reference`,`blockquote`,`list`]],[`list`,zT,[`paragraph`,`reference`,`blockquote`]],[`reference`,BT],[`html_block`,GT,[`paragraph`,`reference`,`blockquote`]],[`heading`,KT,[`paragraph`,`reference`,`blockquote`]],[`lheading`,qT],[`paragraph`,JT]];function XT(){this.ruler=new Qw;for(let e=0;e<YT.length;e++)this.ruler.push(YT[e][0],YT[e][1],{alt:(YT[e][2]||[]).slice()})}XT.prototype.tokenize=function(e,t,n){let r=this.ruler.getRules(``),i=r.length,a=e.md.options.maxNesting,o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=a){e.line=n;break}let t=e.line,c=!1;for(let a=0;a<i;a++)if(c=r[a](e,o,n,!1),c){if(t>=e.line)throw Error(`block rule didn't increment state.line`);break}if(!c)throw Error(`none of the block rules matched`);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}},XT.prototype.parse=function(e,t,n,r){if(!e)return;let i=new this.State(e,t,n,r);this.tokenize(i,i.line,i.lineMax)},XT.prototype.State=DT;function ZT(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending=``,this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ZT.prototype.pushPending=function(){let e=new $w(`text`,``,0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending=``,e},ZT.prototype.push=function(e,t,n){this.pending&&this.pushPending();let r=new $w(e,t,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r},ZT.prototype.scanDelims=function(e,t){let n=this.posMax,r=this.src.charCodeAt(e),i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)==55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)==56320){let t=this.src.charCodeAt(e-2);i=(t&64512)==55296?65536+(t-55296<<10)+(i-56320):65533}else(i&64512)==55296&&(i=65533);let a=e;for(;a<n&&this.src.charCodeAt(a)===r;)a++;let o=a-e,s=a<n?this.src.charCodeAt(a):32;if((s&64512)==55296){let e=this.src.charCodeAt(a+1);s=(e&64512)==56320?65536+(s-55296<<10)+(e-56320):65533}else(s&64512)==56320&&(s=65533);let c=Vw(i)||Bw(i),l=Vw(s)||Bw(s),u=Rw(i),d=Rw(s),f=!d&&(!l||u||c),p=!u&&(!c||d||l);return{can_open:f&&(t||!p||c),can_close:p&&(t||!f||l),length:o}},ZT.prototype.Token=$w;function QT(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function $T(e,t){let n=e.pos;for(;n<e.posMax&&!QT(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}var eE=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function tE(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;let n=e.pos,r=e.posMax;if(n+3>r||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;let i=e.pending.match(eE);if(!i)return!1;let a=i[1],o=e.md.linkify.matchAtStart(e.src.slice(n-a.length));if(!o)return!1;let s=o.url;if(s.length<=a.length)return!1;let c=s.length;for(;c>0&&s.charCodeAt(c-1)===42;)c--;c!==s.length&&(s=s.slice(0,c));let l=e.md.normalizeLink(s);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-a.length);let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,l]],t.markup=`linkify`,t.info=`auto`;let n=e.push(`text`,``,0);n.content=e.md.normalizeLinkText(s);let r=e.push(`link_close`,`a`,-1);r.markup=`linkify`,r.info=`auto`}return e.pos+=s.length-a.length,!0}function nE(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;let r=e.pending.length-1,i=e.posMax;if(!t)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let t=r-1;for(;t>=1&&e.pending.charCodeAt(t-1)===32;)t--;e.pending=e.pending.slice(0,t),e.push(`hardbreak`,`br`,0)}else e.pending=e.pending.slice(0,-1),e.push(`softbreak`,`br`,0);else e.push(`softbreak`,`br`,0);for(n++;n<i&&$(e.src.charCodeAt(n));)n++;return e.pos=n,!0}var rE=[];for(let e=0;e<256;e++)rE.push(0);`\\!"#$%&'()*+,./:;<=>?@[]^_\`{|}~-`.split(``).forEach(function(e){rE[e.charCodeAt(0)]=1});function iE(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=r))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push(`hardbreak`,`br`,0),n++;n<r&&(i=e.src.charCodeAt(n),$(i));)n++;return e.pos=n,!0}if(i===32){if(!t){let t=e.push(`text_special`,``,0);t.content=`\\`,t.markup=`\\`,t.info=`escape`}return e.pos=n,!0}let a=e.src[n];if(i>=55296&&i<=56319&&n+1<r){let t=e.src.charCodeAt(n+1);t>=56320&&t<=57343&&(a+=e.src[n+1],n++)}let o=`\\`+a;if(!t){let t=e.push(`text_special`,``,0);i<256&&rE[i]!==0?t.content=a:t.content=o,t.markup=o,t.info=`escape`}return e.pos=n+1,!0}function aE(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;let r=n;n++;let i=e.posMax;for(;n<i&&e.src.charCodeAt(n)===96;)n++;let a=e.src.slice(r,n),o=a.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return t||(e.pending+=a),e.pos+=o,!0;let s=n,c;for(;(c=e.src.indexOf("`",s))!==-1;){for(s=c+1;s<i&&e.src.charCodeAt(s)===96;)s++;let r=s-c;if(r===o){if(!t){let t=e.push(`code_inline`,`code`,0);t.markup=a,t.content=e.src.slice(n,c).replace(/\n/g,` `).replace(/^ (.+) $/,`$1`)}return e.pos=s,!0}e.backticks[r]=c}return e.backticksScanned=!0,t||(e.pending+=a),e.pos+=o,!0}function oE(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==126)return!1;let i=e.scanDelims(e.pos,!0),a=i.length,o=String.fromCharCode(r);if(a<2)return!1;let s;a%2&&(s=e.push(`text`,``,0),s.content=o,a--);for(let t=0;t<a;t+=2)s=e.push(`text`,``,0),s.content=o+o,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function sE(e,t){let n,r=[],i=t.length;for(let a=0;a<i;a++){let i=t[a];if(i.marker!==126||i.end===-1)continue;let o=t[i.end];n=e.tokens[i.token],n.type=`s_open`,n.tag=`s`,n.nesting=1,n.markup=`~~`,n.content=``,n=e.tokens[o.token],n.type=`s_close`,n.tag=`s`,n.nesting=-1,n.markup=`~~`,n.content=``,e.tokens[o.token-1].type===`text`&&e.tokens[o.token-1].content===`~`&&r.push(o.token-1)}for(;r.length;){let t=r.pop(),i=t+1;for(;i<e.tokens.length&&e.tokens[i].type===`s_close`;)i++;i--,t!==i&&(n=e.tokens[i],e.tokens[i]=e.tokens[t],e.tokens[t]=n)}}function cE(e){let t=e.tokens_meta,n=e.tokens_meta.length;sE(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&sE(e,t[r].delimiters)}var lE={tokenize:oE,postProcess:cE};function uE(e,t){let n=e.pos,r=e.src.charCodeAt(n);if(t||r!==95&&r!==42)return!1;let i=e.scanDelims(e.pos,r===42);for(let t=0;t<i.length;t++){let t=e.push(`text`,``,0);t.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function dE(e,t){let n=t.length;for(let r=n-1;r>=0;r--){let n=t[r];if(n.marker!==95&&n.marker!==42||n.end===-1)continue;let i=t[n.end],a=r>0&&t[r-1].end===n.end+1&&t[r-1].marker===n.marker&&t[r-1].token===n.token-1&&t[n.end+1].token===i.token+1,o=String.fromCharCode(n.marker),s=e.tokens[n.token];s.type=a?`strong_open`:`em_open`,s.tag=a?`strong`:`em`,s.nesting=1,s.markup=a?o+o:o,s.content=``;let c=e.tokens[i.token];c.type=a?`strong_close`:`em_close`,c.tag=a?`strong`:`em`,c.nesting=-1,c.markup=a?o+o:o,c.content=``,a&&(e.tokens[t[r-1].token].content=``,e.tokens[t[n.end+1].token].content=``,r--)}}function fE(e){let t=e.tokens_meta,n=e.tokens_meta.length;dE(e,e.delimiters);for(let r=0;r<n;r++)t[r]&&t[r].delimiters&&dE(e,t[r].delimiters)}var pE={tokenize:uE,postProcess:fE};function mE(e,t){let n,r,i,a,o=``,s=``,c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;let u=e.pos,d=e.posMax,f=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<d&&e.src.charCodeAt(m)===40){for(l=!1,m++;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);if(m>=d)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o=``,c=m;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<d&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<d&&(n=e.src.charCodeAt(m),!(!$(n)&&n!==10));m++);}(m>=d||e.src.charCodeAt(m)!==41)&&(l=!0),m++}if(l){if(e.env.references===void 0)return!1;if(m<d&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?r=e.src.slice(c,m++):m=p+1):m=p+1,r||=e.src.slice(f,p),a=e.env.references[Hw(r)],!a)return e.pos=u,!1;o=a.href,s=a.title}if(!t){e.pos=f,e.posMax=p;let t=e.push(`link_open`,`a`,1),n=[[`href`,o]];t.attrs=n,s&&n.push([`title`,s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push(`link_close`,`a`,-1)}return e.pos=m,e.posMax=d,!0}function hE(e,t){let n,r,i,a,o,s,c,l,u=``,d=e.pos,f=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;let p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(a=m+1,a<f&&e.src.charCodeAt(a)===40){for(a++;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);if(a>=f)return!1;for(l=a,s=e.md.helpers.parseLinkDestination(e.src,a,e.posMax),s.ok&&(u=e.md.normalizeLink(s.str),e.md.validateLink(u)?a=s.pos:u=``),l=a;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);if(s=e.md.helpers.parseLinkTitle(e.src,a,e.posMax),a<f&&l!==a&&s.ok)for(c=s.str,a=s.pos;a<f&&(n=e.src.charCodeAt(a),!(!$(n)&&n!==10));a++);else c=``;if(a>=f||e.src.charCodeAt(a)!==41)return e.pos=d,!1;a++}else{if(e.env.references===void 0)return!1;if(a<f&&e.src.charCodeAt(a)===91?(l=a+1,a=e.md.helpers.parseLinkLabel(e,a),a>=0?i=e.src.slice(l,a++):a=m+1):a=m+1,i||=e.src.slice(p,m),o=e.env.references[Hw(i)],!o)return e.pos=d,!1;u=o.href,c=o.title}if(!t){r=e.src.slice(p,m);let t=[];e.md.inline.parse(r,e.md,e.env,t);let n=e.push(`image`,`img`,0),i=[[`src`,u],[`alt`,``]];n.attrs=i,n.children=t,n.content=r,c&&i.push([`title`,c])}return e.pos=a,e.posMax=f,!0}var gE=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,_E=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function vE(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;let r=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;let t=e.src.charCodeAt(n);if(t===60)return!1;if(t===62)break}let a=e.src.slice(r+1,n);if(_E.test(a)){let n=e.md.normalizeLink(a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}if(gE.test(a)){let n=e.md.normalizeLink(`mailto:`+a);if(!e.md.validateLink(n))return!1;if(!t){let t=e.push(`link_open`,`a`,1);t.attrs=[[`href`,n]],t.markup=`autolink`,t.info=`auto`;let r=e.push(`text`,``,0);r.content=e.md.normalizeLinkText(a);let i=e.push(`link_close`,`a`,-1);i.markup=`autolink`,i.info=`auto`}return e.pos+=a.length+2,!0}return!1}function yE(e){return/^<a[>\s]/i.test(e)}function bE(e){return/^<\/a\s*>/i.test(e)}function xE(e){let t=e|32;return t>=97&&t<=122}function SE(e,t){if(!e.md.options.html)return!1;let n=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=n)return!1;let i=e.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!xE(i))return!1;let a=e.src.slice(r).match(HT);if(!a)return!1;if(!t){let t=e.push(`html_inline`,``,0);t.content=a[0],yE(t.content)&&e.linkLevel++,bE(t.content)&&e.linkLevel--}return e.pos+=a[0].length,!0}var CE=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,wE=/^&([a-z][a-z0-9]{1,31});/i;function TE(e,t){let n=e.pos,r=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=r)return!1;if(e.src.charCodeAt(n+1)===35){let r=e.src.slice(n).match(CE);if(r){if(!t){let t=r[1][0].toLowerCase()===`x`?parseInt(r[1].slice(1),16):parseInt(r[1],10),n=e.push(`text_special`,``,0);n.content=Cw(t)?ww(t):ww(65533),n.markup=r[0],n.info=`entity`}return e.pos+=r[0].length,!0}}else{let r=e.src.slice(n).match(wE);if(r){let n=hw(r[0]);if(n!==r[0]){if(!t){let t=e.push(`text_special`,``,0);t.content=n,t.markup=r[0],t.info=`entity`}return e.pos+=r[0].length,!0}}}return!1}function EE(e){let t={},n=e.length;if(!n)return;let r=0,i=-2,a=[];for(let o=0;o<n;o++){let n=e[o];if(a.push(0),(e[r].marker!==n.marker||i!==n.token-1)&&(r=o),i=n.token,n.length=n.length||0,!n.close)continue;t.hasOwnProperty(n.marker)||(t[n.marker]=[-1,-1,-1,-1,-1,-1]);let s=t[n.marker][(n.open?3:0)+n.length%3],c=r-a[r]-1,l=c;for(;c>s;c-=a[c]+1){let t=e[c];if(t.marker===n.marker&&t.open&&t.end<0){let r=!1;if((t.close||n.open)&&(t.length+n.length)%3==0&&(t.length%3!=0||n.length%3!=0)&&(r=!0),!r){let r=c>0&&!e[c-1].open?a[c-1]+1:0;a[o]=o-c+r,a[c]=r,n.open=!1,t.end=o,t.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[n.marker][(n.open?3:0)+(n.length||0)%3]=l)}}function DE(e){let t=e.tokens_meta,n=e.tokens_meta.length;EE(e.delimiters);for(let e=0;e<n;e++)t[e]&&t[e].delimiters&&EE(t[e].delimiters)}function OE(e){let t,n,r=0,i=e.tokens,a=e.tokens.length;for(t=n=0;t<a;t++)i[t].nesting<0&&r--,i[t].level=r,i[t].nesting>0&&r++,i[t].type===`text`&&t+1<a&&i[t+1].type===`text`?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}var kE=[[`text`,$T],[`linkify`,tE],[`newline`,nE],[`escape`,iE],[`backticks`,aE],[`strikethrough`,lE.tokenize],[`emphasis`,pE.tokenize],[`link`,mE],[`image`,hE],[`autolink`,vE],[`html_inline`,SE],[`entity`,TE]],AE=[[`balance_pairs`,DE],[`strikethrough`,lE.postProcess],[`emphasis`,pE.postProcess],[`fragments_join`,OE]];function jE(){this.ruler=new Qw;for(let e=0;e<kE.length;e++)this.ruler.push(kE[e][0],kE[e][1]);this.ruler2=new Qw;for(let e=0;e<AE.length;e++)this.ruler2.push(AE[e][0],AE[e][1])}jE.prototype.skipToken=function(e){let t=e.pos,n=this.ruler.getRules(``),r=n.length,i=e.md.options.maxNesting,a=e.cache;if(a[t]!==void 0){e.pos=a[t];return}let o=!1;if(e.level<i){for(let i=0;i<r;i++)if(e.level++,o=n[i](e,!0),e.level--,o){if(t>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}else e.pos=e.posMax;o||e.pos++,a[t]=e.pos},jE.prototype.tokenize=function(e){let t=this.ruler.getRules(``),n=t.length,r=e.posMax,i=e.md.options.maxNesting;for(;e.pos<r;){let a=e.pos,o=!1;if(e.level<i){for(let r=0;r<n;r++)if(o=t[r](e,!1),o){if(a>=e.pos)throw Error(`inline rule didn't increment state.pos`);break}}if(o){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},jE.prototype.parse=function(e,t,n,r){let i=new this.State(e,t,n,r);this.tokenize(i);let a=this.ruler2.getRules(``),o=a.length;for(let e=0;e<o;e++)a[e](i)},jE.prototype.State=ZT;function ME(e){let t={};e||={},t.src_Any=UC.source,t.src_Cc=WC.source,t.src_Z=JC.source,t.src_P=KC.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join(`|`),t.src_ZCc=[t.src_Z,t.src_Cc].join(`|`);let n=`[><｜]`;return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4=`(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)`,t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port=`(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?`,t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e[`---`]?`-(?!--)|`:`-|`}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e[`---`]?`\\-(?!--(?:[^-]|$))(?:-*)|`:`\\-+|`)+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name=`[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}`,t.src_xn=`xn--[a-z0-9\\-]{1,59}`,t.src_domain_root=`(?:`+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain=`(?:`+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy=`(?:`+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|\uff5c]|${t.src_ZPCc}))((?![$+<=>^\`|\uff5c])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function NE(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function PE(e){return Object.prototype.toString.call(e)}function FE(e){return PE(e)===`[object String]`}function IE(e){return PE(e)===`[object Object]`}function LE(e){return PE(e)===`[object RegExp]`}function RE(e){return PE(e)===`[object Function]`}function zE(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,`\\$&`)}var BE={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function VE(e){return Object.keys(e||{}).reduce(function(e,t){return e||BE.hasOwnProperty(t)},!1)}var HE={"http:":{validate:function(e,t,n){let r=e.slice(t);return n.re.http||(n.re.http=RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,`i`)),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":`http:`,"ftp:":`http:`,"//":{validate:function(e,t,n){let r=e.slice(t);return n.re.no_http||(n.re.no_http=RegExp(`^`+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,`i`)),n.re.no_http.test(r)?t>=3&&e[t-3]===`:`||t>=3&&e[t-3]===`/`?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){let r=e.slice(t);return n.re.mailto||(n.re.mailto=RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,`i`)),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},UE=`a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]`,WE=`biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф`.split(`|`);function GE(e){return function(t,n){let r=t.slice(n);return e.test(r)?r.match(e)[0].length:0}}function KE(){return function(e,t){t.normalize(e)}}function qE(e){let t=e.re=ME(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(UE),n.push(t.src_xn),t.src_tlds=n.join(`|`);function r(e){return e.replace(`%TLDS%`,t.src_tlds)}t.email_fuzzy=RegExp(r(t.tpl_email_fuzzy),`i`),t.email_fuzzy_global=RegExp(r(t.tpl_email_fuzzy),`ig`),t.link_fuzzy=RegExp(r(t.tpl_link_fuzzy),`i`),t.link_fuzzy_global=RegExp(r(t.tpl_link_fuzzy),`ig`),t.link_no_ip_fuzzy=RegExp(r(t.tpl_link_no_ip_fuzzy),`i`),t.link_no_ip_fuzzy_global=RegExp(r(t.tpl_link_no_ip_fuzzy),`ig`),t.host_fuzzy_test=RegExp(r(t.tpl_host_fuzzy_test),`i`);let i=[];e.__compiled__={};function a(e,t){throw Error(`(LinkifyIt) Invalid schema "${e}": ${t}`)}Object.keys(e.__schemas__).forEach(function(t){let n=e.__schemas__[t];if(n===null)return;let r={validate:null,link:null};if(e.__compiled__[t]=r,IE(n)){LE(n.validate)?r.validate=GE(n.validate):RE(n.validate)?r.validate=n.validate:a(t,n),RE(n.normalize)?r.normalize=n.normalize:n.normalize?a(t,n):r.normalize=KE();return}if(FE(n)){i.push(t);return}a(t,n)}),i.forEach(function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)}),e.__compiled__[``]={validate:null,normalize:KE()};let o=Object.keys(e.__compiled__).filter(function(t){return t.length>0&&e.__compiled__[t]}).map(zE).join(`|`);e.re.schema_test=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`i`),e.re.schema_search=RegExp(`(^|(?!_)(?:[><\uff5c]|${t.src_ZPCc}))(${o})`,`ig`),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,`i`),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,`i`)}function JE(e,t,n,r){let i=e.slice(n,r);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=r,this.raw=i,this.text=i,this.url=i}function YE(e,t){if(!(this instanceof YE))return new YE(e,t);t||VE(e)&&(t=e,e={}),this.__opts__=NE({},BE,t),this.__schemas__=NE({},HE,e),this.__compiled__={},this.__tlds__=WE,this.__tlds_replaced__=!1,this.re={},qE(this)}YE.prototype.add=function(e,t){return this.__schemas__[e]=t,qE(this),this},YE.prototype.set=function(e){return this.__opts__=NE(this.__opts__,e),this},YE.prototype.test=function(e){if(!e.length)return!1;let t,n;if(this.re.schema_test.test(e)){for(n=this.re.schema_search,n.lastIndex=0;(t=n.exec(e))!==null;)if(this.testSchemaAt(e,t[2],n.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__[`http:`]&&e.search(this.re.host_fuzzy_test)>=0&&e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`]&&e.indexOf(`@`)>=0&&e.match(this.re.email_fuzzy)!==null)},YE.prototype.pretest=function(e){return this.re.pretest.test(e)},YE.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},YE.prototype.match=function(e){let t=[],n=[],r=[],i=[],a,o,s;function c(e,t){return e?t?e.index===t.index?e.lastIndex>=t.lastIndex?e:t:e.index<t.index?e:t:e:t}if(!e.length)return null;if(this.re.schema_test.test(e))for(s=this.re.schema_search,s.lastIndex=0;(a=s.exec(e))!==null;)o=this.testSchemaAt(e,a[2],s.lastIndex),o&&n.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+o});if(this.__opts__.fuzzyLink&&this.__compiled__[`http:`])for(s=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)r.push({schema:``,index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__[`mailto:`])for(s=this.re.email_fuzzy_global,s.lastIndex=0;(a=s.exec(e))!==null;)i.push({schema:`mailto:`,index:a.index+a[1].length,lastIndex:a.index+a[0].length});let l=[0,0,0],u=0;for(;;){let a=[n[l[0]],i[l[1]],r[l[2]]],o=c(c(a[0],a[1]),a[2]);if(!o)break;if(o===a[0]?l[0]++:o===a[1]?l[1]++:l[2]++,o.index<u)continue;let s=new JE(e,o.schema,o.index,o.lastIndex);this.__compiled__[s.schema].normalize(s,this),t.push(s),u=o.lastIndex}return t.length?t:null},YE.prototype.matchAtStart=function(e){if(!e.length)return null;let t=this.re.schema_at_start.exec(e);if(!t)return null;let n=this.testSchemaAt(e,t[2],t[0].length);if(!n)return null;let r=new JE(e,t[2],t.index+t[1].length,t.index+t[0].length+n);return this.__compiled__[r.schema].normalize(r,this),r},YE.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,t,n){return e!==n[t-1]}).reverse(),qE(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,qE(this),this)},YE.prototype.normalize=function(e){e.schema||(e.url=`http://${e.url}`),e.schema===`mailto:`&&!/^mailto:/i.test(e.url)&&(e.url=`mailto:${e.url}`)},YE.prototype.onCompile=function(){};var XE=2147483647,ZE=36,QE=1,$E=26,eD=38,tD=700,nD=72,rD=128,iD=`-`,aD=/^xn--/,oD=/[^\0-\x7F]/,sD=/[\x2E\u3002\uFF0E\uFF61]/g,cD={overflow:`Overflow: input needs wider integers to process`,"not-basic":`Illegal input >= 0x80 (not a basic code point)`,"invalid-input":`Invalid input`},lD=ZE-QE,uD=Math.floor,dD=String.fromCharCode;function fD(e){throw RangeError(cD[e])}function pD(e,t){let n=[],r=e.length;for(;r--;)n[r]=t(e[r]);return n}function mD(e,t){let n=e.split(`@`),r=``;n.length>1&&(r=n[0]+`@`,e=n[1]),e=e.replace(sD,`.`);let i=pD(e.split(`.`),t).join(`.`);return r+i}function hD(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}var gD=e=>String.fromCodePoint(...e),_D=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:ZE},vD=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},yD=function(e,t,n){let r=0;for(e=n?uD(e/tD):e>>1,e+=uD(e/t);e>455;r+=ZE)e=uD(e/lD);return uD(r+36*e/(e+eD))},bD=function(e){let t=[],n=e.length,r=0,i=rD,a=nD,o=e.lastIndexOf(iD);o<0&&(o=0);for(let n=0;n<o;++n)e.charCodeAt(n)>=128&&fD(`not-basic`),t.push(e.charCodeAt(n));for(let s=o>0?o+1:0;s<n;){let o=r;for(let t=1,i=ZE;;i+=ZE){s>=n&&fD(`invalid-input`);let o=_D(e.charCodeAt(s++));o>=ZE&&fD(`invalid-input`),o>uD((XE-r)/t)&&fD(`overflow`),r+=o*t;let c=i<=a?QE:i>=a+$E?$E:i-a;if(o<c)break;let l=ZE-c;t>uD(XE/l)&&fD(`overflow`),t*=l}let c=t.length+1;a=yD(r-o,c,o==0),uD(r/c)>XE-i&&fD(`overflow`),i+=uD(r/c),r%=c,t.splice(r++,0,i)}return String.fromCodePoint(...t)},xD=function(e){let t=[];e=hD(e);let n=e.length,r=rD,i=0,a=nD;for(let n of e)n<128&&t.push(dD(n));let o=t.length,s=o;for(o&&t.push(iD);s<n;){let n=XE;for(let t of e)t>=r&&t<n&&(n=t);let c=s+1;n-r>uD((XE-i)/c)&&fD(`overflow`),i+=(n-r)*c,r=n;for(let n of e)if(n<r&&++i>XE&&fD(`overflow`),n===r){let e=i;for(let n=ZE;;n+=ZE){let r=n<=a?QE:n>=a+$E?$E:n-a;if(e<r)break;let i=e-r,o=ZE-r;t.push(dD(vD(r+i%o,0))),e=uD(i/o)}t.push(dD(vD(e,0))),a=yD(i,c,s===o),i=0,++s}++i,++r}return t.join(``)},SD={version:`2.3.1`,ucs2:{decode:hD,encode:gD},decode:bD,encode:xD,toASCII:function(e){return mD(e,function(e){return oD.test(e)?`xn--`+xD(e):e})},toUnicode:function(e){return mD(e,function(e){return aD.test(e)?bD(e.slice(4).toLowerCase()):e})}},CD={default:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},zero:{options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`paragraph`]},inline:{rules:[`text`],rules2:[`balance_pairs`,`fragments_join`]}}},commonmark:{options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:`language-`,linkify:!1,typographer:!1,quotes:`“”‘’`,highlight:null,maxNesting:20},components:{core:{rules:[`normalize`,`block`,`inline`,`text_join`]},block:{rules:[`blockquote`,`code`,`fence`,`heading`,`hr`,`html_block`,`lheading`,`list`,`reference`,`paragraph`]},inline:{rules:[`autolink`,`backticks`,`emphasis`,`entity`,`escape`,`html_inline`,`image`,`link`,`newline`,`text`],rules2:[`balance_pairs`,`emphasis`,`fragments_join`]}}}},wD=/^(vbscript|javascript|file|data):/,TD=/^data:image\/(gif|png|jpeg|webp);/;function ED(e){let t=e.trim().toLowerCase();return wD.test(t)?TD.test(t):!0}var DD=[`http:`,`https:`,`mailto:`];function OD(e){let t=VC(e,!0);if(t.hostname&&(!t.protocol||DD.indexOf(t.protocol)>=0))try{t.hostname=SD.toASCII(t.hostname)}catch{}return OC(kC(t))}function kD(e){let t=VC(e,!0);if(t.hostname&&(!t.protocol||DD.indexOf(t.protocol)>=0))try{t.hostname=SD.toUnicode(t.hostname)}catch{}return TC(kC(t),TC.defaultChars+`%`)}function AD(e,t){if(!(this instanceof AD))return new AD(e,t);t||vw(e)||(t=e||{},e=`default`),this.inline=new jE,this.block=new XT,this.core=new ET,this.renderer=new Zw,this.linkify=new YE,this.validateLink=ED,this.normalizeLink=OD,this.normalizeLinkText=kD,this.utils=gw,this.helpers=xw({},Yw),this.options={},this.configure(e),t&&this.set(t)}AD.prototype.set=function(e){return xw(this.options,e),this},AD.prototype.configure=function(e){let t=this;if(vw(e)){let t=e;if(e=CD[t],!e)throw Error('Wrong `markdown-it` preset "'+t+`", check name`)}if(!e)throw Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this},AD.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to enable unknown rule(s): `+r);return this},AD.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),[`core`,`block`,`inline`].forEach(function(t){n=n.concat(this[t].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));let r=e.filter(function(e){return n.indexOf(e)<0});if(r.length&&!t)throw Error(`MarkdownIt. Failed to disable unknown rule(s): `+r);return this},AD.prototype.use=function(e){let t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this},AD.prototype.parse=function(e,t){if(typeof e!=`string`)throw Error(`Input data should be a String`);let n=new this.core.State(e,this,t);return this.core.process(n),n.tokens},AD.prototype.render=function(e,t){return t||={},this.renderer.render(this.parse(e,t),this.options,t)},AD.prototype.parseInline=function(e,t){let n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens},AD.prototype.renderInline=function(e,t){return t||={},this.renderer.render(this.parseInline(e,t),this.options,t)};var jD={key:0},MD={key:1},ND=[`innerHTML`],PD={__name:`RemoteMarkdown`,props:{src:{type:String,required:!0},cache:{type:Boolean,default:!0},ttl:{type:Number,default:1e3*60*60}},setup(e){let t=e,n=P(``),r=P(!0),i=P(!1),a=P(null),o=new AD({html:!0,linkify:!0,typographer:!0});function s(e){let[t,n]=e.split(`#`);return{url:t,anchor:n}}function c(e){return e.replace(/<!--[\s\S]*?-->/g,``)}function l(e,t){if(!t)return e;let n=e.split(`
`),r=/^(#{1,6})\s+(.*)$/,i=-1,a=0;for(let e=0;e<n.length;e++){let o=n[e].match(r);if(o&&o[2].trim().toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,`-`)===t.toLowerCase()){i=e,a=o[1].length;break}}if(i===-1)return e;let o=n.length;for(let e=i+1;e<n.length;e++){let t=n[e].match(r);if(t&&t[1].length<=a){o=e;break}}return n.slice(i,o).join(`
`)}function u(e){return`remote-md:${e}`}function d(e){if(!t.cache)return null;try{let n=localStorage.getItem(u(e));if(!n)return null;let{time:r,text:i}=JSON.parse(n);return Date.now()-r>t.ttl?(localStorage.removeItem(u(e)),null):i}catch{return null}}function f(e,n){t.cache&&localStorage.setItem(u(e),JSON.stringify({time:Date.now(),text:n}))}async function p(){let{url:e,anchor:u}=s(t.src);if(e){r.value=!0,i.value=!1;try{let t=d(e);if(!t){let n=await fetch(e);if(!n.ok)throw Error(n.statusText);t=await n.text(),f(e,t)}t=c(t),t=l(t,u),n.value=o.render(t),r.value=!1,await Un(),YS(a.value)}catch(e){console.error(e),i.value=!0,n.value=``}finally{i.value&&(r.value=!1)}}}return B(p),R(()=>t.src,p),(e,t)=>(H(),Xa(`div`,{ref_key:`container`,ref:a,class:`remote-markdown`},[r.value?(H(),Xa(`p`,jD,`📄 正在加载文档…`)):i.value?(H(),Xa(`p`,MD,`❌ 文档加载失败`)):(H(),Xa(`div`,{key:2,innerHTML:n.value},null,8,ND))],512))}},FD=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},ID={class:`script-box`},LD=[`value`],RD={key:0,class:`toast`},zD=FD({__name:`RandomDomains`,props:{src:{type:String,default:``},count:{type:Number,default:10}},setup(e){let t=e,n=`amd.com,aws.com,c.6sc.co,j.6sc.co,b.6sc.co,intel.com,r.bing.com,th.bing.com,www.amd.com,www.aws.com,ipv6.6sc.co,www.xbox.com,www.sony.com,rum.hlx.page,www.bing.com,xp.apple.com,www.wowt.com,www.apple.com,www.intel.com,www.tesla.com,www.xilinx.com,www.oracle.com,www.icloud.com,apps.apple.com,c.marsflag.com,www.nvidia.com,snap.licdn.com,aws.amazon.com,drivers.amd.com,cdn.bizibly.com,s.go-mpulse.net,tags.tiqcdn.com,cdn.bizible.com,ocsp2.apple.com,cdn.userway.org,download.amd.com,d1.awsstatic.com,s0.awsstatic.com,mscom.demdex.net,a0.awsstatic.com,go.microsoft.com,apps.mzstatic.com,sisu.xboxlive.com,www.microsoft.com,s.mp.marsflag.com,images.nvidia.com,vs.aws.amazon.com,c.s-microsoft.com,statici.icloud.com,beacon.gtv-pub.com,ts4.tc.mm.bing.net,ts3.tc.mm.bing.net,d2c.aws.amazon.com,ts1.tc.mm.bing.net,ce.mf.marsflag.com,d0.m.awsstatic.com,t0.m.awsstatic.com,ts2.tc.mm.bing.net,statici.icloud.com,tag.demandbase.com,assets-www.xbox.com,logx.optimizely.com,azure.microsoft.com,aadcdn.msftauth.net,d.oracleinfinity.io,assets.adobedtm.com,lpcdn.lpsnmedia.net,res-1.cdn.office.net,is1-ssl.mzstatic.com,electronics.sony.com,intelcorp.scene7.com,acctcdn.msftauth.net,cdnssl.clicktale.net,catalog.gamepass.com,consent.trustarc.com,gsp-ssl.ls.apple.com,munchkin.marketo.net,s.company-target.com,cdn77.api.userway.org,cua-chat-ui.tesla.com,assets-xbxweb.xbox.com,ds-aksb-a.akamaihd.net,static.cloud.coveo.com,api.company-target.com,devblogs.microsoft.com,s7mbrstream.scene7.com,fpinit.itunes.apple.com,digitalassets.tesla.com,d.impactradius-event.com,downloadmirror.intel.com,iosapps.itunes.apple.com,se-edge.itunes.apple.com,publisher.liveperson.net,tag-logger.demandbase.com,services.digitaleast.mobi,configuration.ls.apple.com,gray-wowt-prod.gtv-cdn.com,visualstudio.microsoft.com,prod.log.shortbread.aws.dev,amp-api-edge.apps.apple.com,store-images.s-microsoft.com,cdn-dynmedia-1.microsoft.com,github.gallerycdn.vsassets.io,prod.pa.cdn.uis.awsstatic.com,a.b.cdn.console.awsstatic.com,d3agakyjgjv5i8.cloudfront.net,vscjava.gallerycdn.vsassets.io,location-services-prd.tesla.com,ms-vscode.gallerycdn.vsassets.io,ms-python.gallerycdn.vsassets.io,gray-config-prod.api.arc-cdn.net,i7158c100-ds-aksb-a.akamaihd.net,downloaddispatch.itunes.apple.com,res.public.onecdn.static.microsoft,gray.video-player.arcpublishing.com,gray-config-prod.api.cdn.arcpublishing.com,img-prod-cms-rt-microsoft-com.akamaized.net,prod.us-east-1.ui.gcr-chat.marketing.aws.dev`.split(`,`),r=P([...n]),i=P(``),a=P(``),o=P(!1);function s(e){return[...e].sort(()=>Math.random()-.5)}function c(e){return e.split(/\r?\n/).map(e=>e.trim()).filter(Boolean).filter(e=>!e.startsWith(`#`))}async function l(){if(!t.src){r.value=[...n],u();return}o.value=!0;try{let e=await(await fetch(t.src)).text();t.src.endsWith(`.json`)?r.value=JSON.parse(e):r.value=c(e)}catch(e){console.error(`加载失败，使用默认域名池`,e),r.value=[...n]}finally{o.value=!1,u()}}function u(){let e=s(r.value).slice(0,t.count);i.value=`for d in ${e.join(` `)}; do
  t1=$(date +%s%3N)
  timeout 1 openssl s_client -connect $d:443 -servername $d </dev/null &>/dev/null \\
    && t2=$(date +%s%3N) && echo "$d: $((t2 - t1)) ms" \\
    || echo "$d: timeout"
done`}function d(){navigator.clipboard.writeText(i.value),a.value=`✅ 已复制到剪贴板`,setTimeout(()=>a.value=``,2e3)}return B(l),R(()=>t.src,l),(e,t)=>(H(),Xa(`div`,ID,[no(`textarea`,{readonly:``,value:o.value?`加载中…`:i.value},null,8,LD),no(`div`,{class:`actions`},[no(`button`,{onClick:u},`换一批`),no(`button`,{onClick:d},`复制`)]),a.value?(H(),Xa(`div`,RD,Pe(a.value),1)):co(`v-if`,!0)]))}},[[`__scopeId`,`data-v-d1f71a7e`]]),BD=c({default:()=>VD}),VD=Ad({setup(){ZS(),iC({type:`homepage`,light:`#6c5515`,dark:`#f7e8ab`,threshold:48})},enhance:({app:e})=>{e.component(`RemoteMarkdown`,PD),e.component(`RandomDomains`,zD)},layouts:{Layout:SC}}),HD=[Em,Om,km,qm,Ym,Xm,Qm,rh,qh,Yh,Xh,Sg,kg,Mg,Ig,Bg,Xg,a_,l_,b_,P_,rv,yv,Ov,FS,BD].map(e=>e.default).filter(Boolean),UD=F(JSON.parse(`{"base":"/","lang":"zh-CN","title":"莲子玉米粥","description":"","head":[["meta",{"name":"algolia-site-verification","content":"F7610BDB24F4D58E"}],["link",{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["link",{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""}],["link",{"href":"https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=ZCOOL+KuaiLe&display=swap","rel":"stylesheet"}]],"locales":{"/":{"lang":"zh-CN","title":"莲子玉米粥","description":""}}}`)),WD=hu,GD=()=>{let e=qu({history:WD(Gc(`/`)),routes:[{name:`vuepress-route`,path:`/:catchAll(.*)`,components:{}}],scrollBehavior:(e,t,n)=>n||(e.hash?{el:e.hash}:{top:0})});return e.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===Wl){let t=bd(e.fullPath);if(t.path!==e.fullPath)return t.path;let n=await t.loader();e.meta={...t.meta,_pageChunk:n}}else e.path===t.path&&(e.meta=t.meta)}),e},KD=e=>{e.component(`ClientOnly`,Td),e.component(`Content`,Dd),e.component(`RouteLink`,Cd)},qD=(e,t,n)=>{let r=W(()=>t.currentRoute.value.path),i=vn((e,n)=>({get(){return e(),t.currentRoute.value.meta._pageChunk},set(e){t.currentRoute.value.meta._pageChunk=e,n()}})),a=W(()=>kd.resolveLayouts(n)),o=W(()=>kd.resolveRouteLocale(UD.value.locales,r.value)),s=W(()=>kd.resolveSiteLocaleData(UD.value,o.value)),c=W(()=>i.value.default),l=W(()=>i.value._pageData),u=W(()=>l.value.frontmatter),d=W(()=>kd.resolvePageHeadTitle(l.value,s.value)),f=W(()=>kd.resolvePageHead(d.value,u.value,s.value)),p=W(()=>kd.resolvePageLang(l.value,s.value)),m={layouts:a,pageData:l,pageComponent:c,pageFrontmatter:u,pageHead:f,pageHeadTitle:d,pageLang:p,pageLayout:W(()=>kd.resolvePageLayout(l.value,a.value)),redirects:_d,routeLocale:o,routePath:r,routes:vd,siteData:UD,siteLocaleData:s,frontmatter:u,head:f,headTitle:d,lang:p,page:l,site:UD,siteLocale:s};return e.provide($u,m),Object.defineProperties(e.config.globalProperties,{$pageFrontmatter:{get:()=>u.value},$pageHead:{get:()=>f.value},$pageHeadTitle:{get:()=>d.value},$pageLang:{get:()=>p.value},$pageData:{get:()=>l.value},$routeLocale:{get:()=>o.value},$withBase:{get:()=>Y},$frontmatter:{get:()=>u.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>p.value},$page:{get:()=>l.value},$site:{get:()=>UD.value},$siteLocale:{get:()=>s.value}}),m},JD=([e,t,n=``])=>{let r=`head > ${e}${Object.entries(t).map(([e,t])=>K(t)?`[${e}=${JSON.stringify(t)}]`:t?`[${e}]`:``).join(``)}`;return Array.from(document.querySelectorAll(r)).find(e=>e.innerText===n)??null},YD=([e,t,n])=>{if(!K(e))return null;let r=document.createElement(e);return Jc(t)&&Object.entries(t).forEach(([e,t])=>{K(t)?r.setAttribute(e,t):t&&r.setAttribute(e,``)}),K(n)&&r.appendChild(document.createTextNode(n)),r},XD=()=>{let e=id(),t=ad(),n=[],r=()=>{e.value.forEach(e=>{let t=JD(e);t&&n.push(t)})},i=()=>{let t=[];return e.value.forEach(e=>{let n=YD(e);n&&t.push(n)}),t},a=()=>{document.documentElement.lang=t.value;let e=i();n.forEach((t,r)=>{let i=e.findIndex(e=>t.isEqualNode(e));i===-1?(t.remove(),delete n[r]):e.splice(i,1)}),e.forEach(e=>document.head.appendChild(e)),n=[...n.filter(e=>!!e),...e]};ir(gd,a),B(()=>{r(),R(e,a,{immediate:!1})})},ZD=Tc,QD=async()=>{let e=ZD({name:`Vuepress`,setup(){XD();for(let e of HD)e.setup?.();let e=HD.flatMap(({rootComponents:e=[]})=>e.map(e=>G(e))),t=od();return()=>[G(t.value),e]}}),t=GD();KD(e),qD(e,t,HD);for(let n of HD)await n.enhance?.({app:e,router:t,siteData:UD});return e.use(t),{app:e,router:t}};QD().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount(`#app`)})});export{P as $,po as A,V as B,oo as C,L as D,G as E,fi as F,cr as G,Mr as H,H as I,ze as J,tr as K,ir as L,ci as M,di as N,Qa as O,B as P,Qt as Q,xi as R,so as S,z as T,Lo as U,Xi as V,R as W,Be as X,dn as Y,kn as Z,W as _,kp as a,xe as at,co as b,rp as c,QD as createVueApp,o as ct,pc as d,d as dt,F as et,ac as f,u as ft,Ba as g,vc as h,Hp as i,Ee as it,Un as j,Ai as k,J as l,c as lt,bc as m,X as n,yn as nt,Yp as o,Pe as ot,hs as p,nr as q,Bp as r,mn as rt,Jf as s,s as st,FD as t,N as tt,Zo as u,f as ut,no as v,U as w,Xa as x,Za as y,Ci as z};